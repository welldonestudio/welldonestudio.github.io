---
keywords: [Aptos sendTransaction, dapp:signAndSendTransaction, Aptos]
description: Sending Transactions in Aptos
---

# Aptos

:::tip
The following is an explanation of how to initiate a transfer transaction in Aptos network by invoking the through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.
:::

To send a transaction in Aptos network, it needs to be followed the steps below.

1. Detecting of Universal Provider (`window.dapp`)
2. Detecting the Aptos network to which the user is linked
3. Import the Aptos account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('aptos', {
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

- `HEX_STRING_TX_DATA` must be passed to the parameter in order for a transaction to be sent from Aptos. The `aptos` library can provide these values, and the [link](https://aptos-labs.github.io/ts-sdk-doc/modules.html) and the example below can explain their detailed usage.

## 3. Example

```javascript
import { AptosClient, TxnBuilderTypes, BCS } from 'aptos';
const getSerializedTransaction = async (accounts) => {
  try {
    const aptosClient = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');
    // make transaction
    const payload = {
      type: 'entry_function_payload',
      function: '0x1::coin::transfer',
      type_arguments: ['0x1::aptos_coin::AptosCoin'],
      arguments: [accounts.address, 1], // 1 is in Octas
    };

    const token = new TxnBuilderTypes.TypeTagStruct(
      TxnBuilderTypes.StructTag.fromString('0x1::aptos_coin::AptosCoin'),
    );

    const entryFunctionPayload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
      TxnBuilderTypes.EntryFunction.natural(
        '0x1::coin',
        'transfer',
        [token],
        [
          BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(accounts.address)),
          BCS.bcsSerializeUint64(100),
        ],
      ),
    );

    const rawTx = await aptosClient.generateRawTransaction(
      accounts.address,
      entryFunctionPayload,
    );

    const rawTxnWithSalt = `0x${Buffer.concat([
      Buffer.from(sha3_256(Buffer.from('APTOS::RawTransaction', 'ascii')), 'hex'),
      Buffer.from(BCS.bcsToBytes(rawTx)),
    ]).toString('hex')}`;

    return rawTxnWithSalt;
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

const sendTransaction = async = () => {
  // get accounts first
  const accounts = await dapp.request('aptos', { method: 'dapp:accounts' });
  const HEX_STRING_TX_DATA = await getSerializedTransaction(accounts['aptos']);
  // sending a transaction
    try{
      const response = await dapp.request('aptos' ,{
        method: 'dapp:signAndSendTransaction',
        params: [
          // use serialized transaction
          [`${HEX_STRING_TX_DATA}`]
        ]
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
  }
```

To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. You can request faucet through the FAUCET tab in the wallet.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'aptos';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  const getSerializedTransaction = async () => {
    try {
      const aptosClient = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');
      // make transaction
      const payload = {
        type: 'entry_function_payload',
        function: '0x1::coin::transfer',
        type_arguments: ['0x1::aptos_coin::AptosCoin'],
        arguments: [accounts.address, 1], // 1 is in Octas
      };

      const token = new TxnBuilderTypes.TypeTagStruct(
        TxnBuilderTypes.StructTag.fromString('0x1::aptos_coin::AptosCoin'),
      );

      const entryFunctionPayload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
        TxnBuilderTypes.EntryFunction.natural(
          '0x1::coin',
          'transfer',
          [token],
          [
            BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(accounts.address)),
            BCS.bcsSerializeUint64(100),
          ],
        ),
      );

      const rawTx = await aptosClient.generateRawTransaction(
        accounts.address,
        entryFunctionPayload,
      );

      const rawTxnWithSalt = `0x${Buffer.concat([
        Buffer.from(sha3_256(Buffer.from('APTOS::RawTransaction', 'ascii')), 'hex'),
        Buffer.from(BCS.bcsToBytes(rawTx)),
      ]).toString('hex')}`;

      return rawTxnWithSalt;
    } catch (error) {
      alert(error.message);
    }
  };

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      const status = await window.dapp.request('aptos', {
        method: 'GET',
        params: [
          {
            url: '/',
          },
        ],
      });
      if (status.chain_id === 1 | status.chain_id === 2) {
        throw new Error('Please chagne to APTOS devnet in WELLDONE Wallet');
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
