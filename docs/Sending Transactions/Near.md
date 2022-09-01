:::tip
The following is an explanation of how to initiate a transfer transaction in NEAR network by invoking the through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.
:::

To send a transaction from the Juno-supported dApp, it needs to be followed the steps below.

1. Detection of Dapp providers (window.dapp)
2. Detecting the NEAR network to which the user is linked
3. Import the NEAR account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('near' ,{
    method: 'dapp:sendTransaction',
    params: [
      JSON.stringify(transactionParameters),
    ]
  });
const txHash = response;
```
## 1. Returns

It returns the transaction hash value as a Promise object of type string.

```typescript
Promise<string>
```

## 2. Params
```typescript
type serializedTransaction = string;
```

* `serializedTransaction` must be passed to the parameter in order for a transaction to be sent from NEAR. The `near-api-js` library can provide these values, and the [link](https://docs.near.org/integrator/create-transactions) and the example below can explain their detailed usage.

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
    '9bfd12934cd6fdd09199e2e267803c70bd7c6cb40832ac6f29811948dde2b723',
    accessKey.nonce + 1,
    actions,
    recentBlockHash,
  );

  const bytes = transaction.encode();

  return Buffer.from(bytes).toString('base64');
};

const sendTransaction = async = () => {
  // get accounts first
  const accounts = await dapp.request('near', { method: 'dapp:accounts' });
  const serializedTransaction = await getSerializedTransaction(accounts);
  // sending a transaction
    try{
      const response = await dapp.request('near' ,{
        method: 'dapp:sendTransaction',
        params: [
          // use serialized transaction
          [`${serializedTransaction}`]
        ]
      });
      const txHash = response;
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
To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. [The following URL](https://www.allthatnode.com/faucet/near.dsrv) will send you a tap of the NEAR testnet token.

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
        '9bfd12934cd6fdd09199e2e267803c70bd7c6cb40832ac6f29811948dde2b723', // receiver
        accessKey.nonce + 1, // nonce
        actions, // actions
        recentBlockHash, // recentBlockHash
      );
      const bytes = transaction.encode();

      return Buffer.from(bytes).toString('base64');
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

      setAccounts(accounts[CHAIN_NAME]);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const serializedTransaction = await getSerializedTransaction();
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:sendTransaction',
        params: [`${serializedTransaction}`],
      });
      const txHash = response;

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
