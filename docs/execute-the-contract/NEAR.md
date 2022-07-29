## Params
```typescript
type serializedTransaction = string;
```

`serializedTransaction` must be passed to the parameter in order for a transaction to be sent from NEAR. The `near-api-js` library can provide these values, and the [link](https://docs.near.org/integrator/create-transactions) and the example below can explain their detailed usage.

## Example
Let's examine an illustration of interacting with a deployed counter contract on the NEAR Testnet. On the [Repository](https://github.com/DSRV-DevGuild/near-counter-example), you can find the contract code. You must pay for gas to carry out a transaction that alters the status of the contract, so request test token on [faucet](https://www.allthatnode.com/faucet/near.dsrv) at the following link.

The following example is a code that flies a transaction that executes the `increment` method of a contract. The `increment` method is a method that adds the counter value inside the contract by the `count` value passed as a factor, and uses [FunctionCall](https://nomicon.io/RuntimeSpec/Actions#functioncallaction) action type).

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

      const actions = [transactions.functionCall(
        "increment", // methodName
        {"count" : 5}, // args
        new BN('30000000000000'), // 30 TGas
        new BN(0),
      )];
      const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);

      // make transaction
      const transaction = transactions.createTransaction(
        signerId, // signerId
        utils.PublicKey.fromString(publicKey), //pubKey
        'mycontract.myaccount8.testnet', // contract Id
        accessKey.nonce + 1, // nonce
        actions, // actions
        recentBlockHash, // recentBlockHash
      );
      console.log(transaction);
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