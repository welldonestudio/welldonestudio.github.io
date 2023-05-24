---
keywords: [NEAR sendTransaction, dapp:sendTransaction, NEAR]
description: Sending Transactions in NEAR
---

# NEAR

:::tip
The following is an explanation of how to initiate a transfer transaction in NEAR network by invoking the through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.
:::

To send a transaction in NEAR network, it needs to be followed the steps below.

1. Detecting of Universal Provider (`window.dapp`)
2. Detecting the NEAR network to which the user is linked
3. Import the NEAR account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('near', {
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

- `HEX_STRING_TX_DATA` must be passed to the parameter in order for a transaction to be sent from NEAR. The `near-api-js` library can provide these values, and the [link](https://docs.near.org/integrator/create-transactions) and the example below can explain their detailed usage.

## 3. Example

```javascript
import { providers, transactions, utils } from 'near-api-js';
const getSerializedTransaction = async ( accounts ) => {
  const rpc = 'https://rpc.testnet.near.org';
  const provider = new providers.JsonRpcProvider(rpc);
  const accountLocal = currentAccount['near'].address;
  const publicKey = currentAccount['near'].pubKey;
  const signerId = accountLocal;
  const accessKey = await provider.query(`access_key/${signerId}/${publicKey}`, '');
  const actions = [transactions.transfer(new BN(10))];
  const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);

  const transaction = transactions.createTransaction(
    accountLocal,
    utils.PublicKey.fromString(publicKey),
    accountLocal, // send to yourself
    accessKey.nonce + 1,
    actions,
    recentBlockHash,
  );

  const bytes = transaction.encode();

  return Buffer.from(bytes).toString('hex');
};

const sendTransaction = async = () => {
  // get accounts first
  const accounts = await dapp.request('near', { method: 'dapp:accounts' });
  const HEX_STRING_TX_DATA = await getSerializedTransaction(accounts);
  // sending a transaction
    try{
      const response = await dapp.request('near' ,{
        method: 'dapp:signAndSendTransaction',
        params: [
          // use serialized transaction
          [`0x${HEX_STRING_TX_DATA}`]
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

To complete the transaction, follow the steps outlined below. The testnet token is required to transmit a transaction. You can request faucet through the FAUCET tab in the wallet.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'near';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  const getSerializedTransaction = async () => {
    try {
      const rpc = 'https://rpc.testnet.near.org';
      const provider = new providers.JsonRpcProvider(rpc);
      const signerId = accounts.address;
      const publicKey = accounts.pubKey;

      const accessKey = await provider.query(`access_key/${signerId}/${publicKey}`, '');

      const actions = [transactions.transfer(new BN(10))];
      const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);

      // make transaction
      const transaction = transactions.createTransaction(
        signerId, // signerId
        utils.PublicKey.fromString(publicKey), //pubKey
        signerId, // send to yourself
        accessKey.nonce + 1, // nonce
        actions, // actions
        recentBlockHash, // recentBlockHash
      );
      const bytes = transaction.encode();

      return Buffer.from(bytes).toString('hex');
    } catch (error) {
      /* error */
      console.log(error);
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
      const status = await window.dapp.request('near', { method: 'status', params: [] });
      if (status.chain_id !== 'testnet') {
        throw new Error('Please chagne to NEAR Testnet in WELLDONE Wallet');
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
        params: [`0x${HEX_STRING_TX_DATA}`],
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
