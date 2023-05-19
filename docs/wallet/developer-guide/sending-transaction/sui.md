---
keywords: [Sui sendTransaction, dapp:signAndSendTransaction, Sui]
description: Sending Transactions in Sui
---

# Sui

:::tip
The following is an explanation of how to initiate a transfer transaction in Sui network by invoking the through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.
:::

To send a transaction in Sui network, it needs to be followed the steps below.

1. Detecting of Universal Provider (`window.dapp`)
2. Detecting the Sui network to which the user is linked
3. Import the Sui account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('sui', {
  method: 'dapp:signAndSendTransaction',
  params: [HEX_STRING_TX_DATA],
});
```

## 1. Returns

This method returns the transaction hash value as a `Promise` object of type string because you can send multiple transactions as well as one transaction.

```typescript
Promise<string[]>;
```

## 2. Params

```typescript
type HEX_STRING_TX_DATA = string;
```

- `HEX_STRING_TX_DATA` must be passed to the parameter in order for a transaction to be sent from Sui. The `@mysten/sui.js` library can provide these values, and the [link](https://github.com/MystenLabs/sui) and the example below can explain their detailed usage.

## 3. Example

```javascript
import { TransactionBlock } from '@mysten/sui.js';
const CHAIN_NAME = 'sui';
const SUI_RPC_URL = 'https://wallet-rpc.devnet.sui.io/';

const request = async (method, params) => {
  const res = await fetch(SUI_RPC_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: 0,
      jsonrpc: '2.0',
      method,
      params: params || [],
    }),
  });

  const { result } = await res.json();
  return result;
};

const getSerializedTransaction = async (accounts) => {
  try {
    /*
      This is an example of a sui provider
      Production development should use JsonRpcProvider from @mysten/sui.js
      https://github.com/MystenLabs/sui/tree/main/sdk/typescript#writing-apis
    */
    const suiProvider = {
      provider: {
        getReferenceGasPrice: async () => {
          const result = await request('suix_getReferenceGasPrice', []);
          return result;
        },
        getCoins: async ({ owner, coinType }) => {
          const result = await request('suix_getCoins', [owner, coinType]);
          return result;
        },
        multiGetObjects: async ({ ids, options }) => {
          const result = await request('sui_multiGetObjects', [ids, options]);
          return result;
        },
        dryRunTransactionBlock: async ({ transactionBlock }) => {
          const result = await request('sui_dryRunTransactionBlock', [
            typeof transactionBlock === 'string'
              ? transactionBlock
              : Buffer.from(transactionBlock).toString('base64'),
          ]);
          return result;
        },
      },
    };

    const coins = await request('suix_getCoins', [accounts.address]);

    const coinType = '0x2::sui::SUI';
    const filtered = coins.data.filter((item) => item.coinType === coinType);

    const txb = new TransactionBlock();
    txb.setSender(accounts.address);

    txb.setGasPayment(
      filtered.map((item) => {
        return {
          objectId: item.coinObjectId,
          version: item.version,
          digest: item.digest,
        };
      }),
    );
    const [coin] = txb.splitCoins(txb.gas, [txb.pure(10000000)]);

    txb.transferObjects([coin], txb.pure(accounts.address));
    const transactionBlock = await txb.build(suiProvider);
    return `0x${Buffer.from(transactionBlock).toString('hex')}`;
  } catch (error) {
    alert(error.message);
  }
};

async function sendTransaction() {
  try {
    const HEX_STRING_TX_DATA = await getSerializedTransaction();
    const response = await dapp.request(CHAIN_NAME, {
      method: 'dapp:signAndSendTransaction',
      params: [`${HEX_STRING_TX_DATA}`],
    });
    const txHash = response[0];

    setTxHash(txHash);
  } catch (error) {
    alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
  }
}

const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request(CHAIN_NAME, { method: 'dapp:accounts' });
  const HEX_STRING_TX_DATA = await getSerializedTransaction(accounts[CHAIN_NAME]);
  // sending a transaction
  try {
    const response = await dapp.request(CHAIN_NAME, {
      method: 'dapp:signAndSendTransaction',
      params: [
        // use serialized transaction
        [`${HEX_STRING_TX_DATA}`],
      ],
    });
    const txHash = response[0];
  } catch (error) {
    /*
        {
          message: 'User denied transaction signature',
          code: 4001,
        }
      */
  }
};
```

To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. You can request faucet through the FAUCET tab in the wallet.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'sui';
  const SUI_RPC_URL = 'https://wallet-rpc.devnet.sui.io/';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);

  const request = async (method, params) => {
    const res = await fetch(SUI_RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 0,
        jsonrpc: '2.0',
        method,
        params: params || [],
      }),
    });

    const { result } = await res.json();
    return result;
  };

  /*
    This is an example of a sui provider
    Production development should use JsonRpcProvider from @mysten/sui.js
    https://github.com/MystenLabs/sui/tree/main/sdk/typescript#writing-apis
  */
  const suiProvider = {
    provider: {
      getReferenceGasPrice: async () => {
        const result = await request('suix_getReferenceGasPrice', []);
        return result;
      },
      getCoins: async ({ owner, coinType }) => {
        const result = await request('suix_getCoins', [owner, coinType]);
        return result;
      },
      multiGetObjects: async ({ ids, options }) => {
        const result = await request('sui_multiGetObjects', [ids, options]);
        return result;
      },
      dryRunTransactionBlock: async ({ transactionBlock }) => {
        const result = await request('sui_dryRunTransactionBlock', [
          typeof transactionBlock === 'string'
            ? transactionBlock
            : Buffer.from(transactionBlock).toString('base64'),
        ]);
        return result;
      },
    },
  };

  const getSerializedTransaction = async () => {
    try {
      const coins = await request('suix_getCoins', [accounts.address]);

      const coinType = '0x2::sui::SUI';
      const filtered = coins.data.filter((item) => item.coinType === coinType);

      const txb = new TransactionBlock();
      txb.setSender(accounts.address);

      txb.setGasPayment(
        filtered.map((item) => {
          return {
            objectId: item.coinObjectId,
            version: item.version,
            digest: item.digest,
          };
        }),
      );
      const [coin] = txb.splitCoins(txb.gas, [txb.pure(10000000)]);

      txb.transferObjects([coin], txb.pure(accounts.address));
      const transactionBlock = await txb.build(suiProvider);
      return `0x${Buffer.from(transactionBlock).toString('hex')}`;
    } catch (error) {
      alert(error.message);
    }
  };

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      if (Object.keys(accounts).length === 0) {
        throw new Error('There is no accounts.');
      }
      const chainId = await window.dapp.networks.sui.chain;

      if ((chainId === 'mainnet') | (chainId === 'testnet')) {
        throw new Error('Please chagne to SUI devnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME]);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSendTransaction() {
    try {
      const HEX_STRING_TX_DATA = await getSerializedTransaction();
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [`${HEX_STRING_TX_DATA}`],
      });
      const txHash = response[0];

      setTxHash(txHash);
    } catch (error) {
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }

  return (
    <>
      {accounts ? (
        <>
          <Button onClick={handleSendTransaction} type="button">
            Send a Transaction
          </Button>
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts.address}
          </ResultTooltip>
        </>
      ) : (
        <>
          <Button onClick={handleGetAccount} type="button">
            Get Account
          </Button>
          <div>You have to get account first!</div>
        </>
      )}
      {txHash && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Transaction Hash:</b> {txHash}
        </ResultTooltip>
      )}
    </>
  );
}
```
