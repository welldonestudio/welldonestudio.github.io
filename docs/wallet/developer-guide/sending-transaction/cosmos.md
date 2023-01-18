---
keywords: [cosmos sending transaction, dapp:signAndSendTransaction, cosmos]
description: Sending Transactions in Cosmos
---

# Cosmos

:::tip
Cosmos developers make use of external libraries like [CosmJS](https://cosmos.github.io/cosmjs/). The following is an explanation of how to initiate a transfer transaction by invoking the method through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the API provides.
:::

To send a transaction from a Cosmos web application, on the dapp for example, it needs to be followed the steps below.

1. Detecting of Universal Provider (`window.dapp`)
2. Detecting the Cosmos network to which the user is linked
3. Import the Cosmos account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('cosmos', {
  method: 'dapp:signAndSendTransaction',
  params: [JSON.stringify(transactionParameters)],
```

## 1. Returns

This method returns the transaction hash value as a `Promise` object of type string because you can send multiple transactions as well as one transaction.

```typescript
Promise<string[]>;
```

## 2. Params

The `dapp:signAndSendTransaction` method takes the transaction as HEX string type `HEX_STRING_TX_DATA`. However, Cosmos networks can take the transaction parameters as JSON string type.

```typescript
interface TransactionParameters {
  signerData: {
    accountNumber: string;
    sequence: string;
    chainId: string;
  };
  fee: {
    amount: [
      {
        denom: string;
        amount: string;
      },
    ];
    gas: string;
  };
  memo: string;
  msgs: [
    {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend';
      value: {
        fromAddress: string;
        toAddress: string;
        amount: [{ denom: string; amount: string }];
      };
    },
  ];
  sequence: string;
}
```

- The `value` depends on the type of `typeUrl` and the method of the contract you want to execute. The above parameters are examples of transaction types that send coins to other accounts.
- The parameters are described in detail at the [link](https://docs.cosmos.network/v0.44/core/proto-docs.html).

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('cosmos', { method: 'dapp:accounts' });
  const sequence = '10';
  const chainId = 'vega-testnet';
  const transactionParameters = {
    signerData: {
      accountNumber: accounts,
      sequence,
      chainId,
    },
    fee: {
      amount: [
        {
          denom: 'uatom',
          amount: '10000',
        },
      ],
      gas: '180000', // 180k
    },
    memo: '',
    msgs: [
      {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: accounts,
          toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode
          amount: [{ denom: 'uatom', amount: '10000' }],
        },
      },
    ],
    sequence: `${sequence}`,
  };
  // sending a transaction
  try {
    const response = await dapp.request('cosmos', {
      method: 'dapp:signAndSendTranssaction',
      params: [transactionParameters],
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

To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. [The following URL](https://www.allthatnode.com/faucet/cosmos.dsrv) will send you a tap of the Cosmos testnet token.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'cosmos';
  const sequence = '10';
  const chainId = 'vega-testnet';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      const status = await dapp.request('aptos', {
        method: 'status',
      });
      if (status.node_info.network !== 'theta-testnet-001') {
        throw new Error('Please change to Cosmos Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        signerData: {
          accountNumber: accounts,
          sequence,
          chainId,
        },
        fee: {
          amount: [
            {
              denom: 'uatom',
              amount: '10000',
            },
          ],
          gas: '180000', // 180k
        },
        memo: '',
        msgs: [
          {
            typeUrl: '/cosmos.bank.v1beta1.MsgSend',
            value: {
              fromAddress: accounts,
              toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode
              amount: [{ denom: 'uatom', amount: '10000' }],
            },
          },
        ],
        sequence: `${sequence}`,
      };
      // const rawTx = Buffer.from(JSON.stringify(transactionParameters)).toString('hex');
      // const registry = new Registry(defaultRegistryTypes);
      // const txBodyEncodeObject = {
      //   typeUrl: '/cosmos.tx.v1beta1.TxBody',
      //   value: {
      //     messages: transactionParameters.msgs,
      //     memo: transactionParameters.memo,
      //   },
      // };
      // const txBodyBytes = registry.encode(txBodyEncodeObject);

      // const gasLimit = Int53.fromString(transactionParameters.fee.gas).toNumber();
      // const authInfoBytes = makeAuthInfoBytes(
      //   [
      //     {
      //       pubkey: encodePubkey(encodeSecp256k1Pubkey(pubKey)),
      //       sequence: transactionParameters.signerData.sequence,
      //     },
      //   ],
      //   transactionParameters.fee.amount,
      //   Int53.fromString(transactionParameters.fee.gas).toNumber(),
      //   undefined,
      //   undefined,
      //   // 1,
      // );

      // console.log('hex string > ', rawTx);
      // console.log('encode> ', typeof txBodyBytes, txBodyBytes);
      // console.log('authInfoBytes >', authInfoBytes);
      // console.log('hexx string > ', `0x${Buffer.from(txBodyBytes).toString('hex')}`);

      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [JSON.stringify(transactionParameters)],
      });
      const txHash = response[0];

      setTxHash(txHash);
    } catch (error) {
      console.log(error);
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
            <b>Accounts:</b> {accounts}
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
