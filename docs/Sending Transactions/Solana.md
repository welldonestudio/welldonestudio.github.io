:::tip
The following is an explanation of how to initiate a transfer transaction in Solana network by invoking the through `dapp.request`. We recommend utilizing a dedicated library rather accessing the service directly if you want a greater degree of abstraction than the official API provides. Welldone wallet is now looking for ways to enhance the developer experience for dapp method.
:::

To send a transaction from a Solana web application, on the dapp for example, it needs to be followed the steps below.

1. Detection of Dapp providers (window.dapp)
2. Detecting the Solana network to which the user is linked
3. Import the Solana account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:


```tsx
const response = await dapp.request('solana' ,{
    method: 'dapp:sendTransaction',
    params: [
      [`0x${serializedTransaction}`],
    ]
  });
const txHash = response;
```
## 1. Returns
```typescript
Promise<string>
```
  * The same type of value above as transaction hash can be obtained.

## 2. Params
```typescript
type serializedTransaction = string;
```

* To submit a transaction to Solana, the `serializedTransaction` must be given to a input param. These values are able to retrieve through the `@solana/web3.js` library, and comprehensive usage is demonstrated in the examples below.



## 3. Example
```javascript 
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
const getSerializedTransaction = async (accounts) => {
  try {
    const solana = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const fromPubkey = new PublicKey(accounts['solana']?.address);
    const toPubkey = new PublicKey('BnBydTNPrTwDz4ZSkhJiGiSZwakPQFVeN8rgdAS2Yc7F'); // allthatnode 
    const { blockhash } = await solana.getLatestBlockhash();
    const airdropSignature = await solana.requestAirdrop(fromPubkey, 2 * LAMPORTS_PER_SOL);
    await solana.confirmTransaction(airdropSignature);
    // make a transaction
    const transaction = new Transaction({
      recentBlockhash: blockhash,
      feePayer: fromPubkey,
    }).add(
      SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: LAMPORTS_PER_SOL / 100,
      }),
    );
    // return serialized transaction
    return transaction.serialize({ verifySignatures: false }).toString('hex');
  } catch (error) {
    /* error */
  }
};
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('solana', { method: 'dapp:accounts' });
  const serializedTransaction = await getSerializedTransaction(accounts);
  // sending a transaction
  try{
    const response = await dapp.request('solana' ,{
      method: 'dapp:sendTransaction',
      params: [
        // use serialized transaction
        [`0x${serializedTransaction}`]
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

To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. [The following URL](https://www.allthatnode.com/faucet/solana.dsrv) will send you a tap of the Ethereum testnet.

```jsx live 
function sendTransaction() {
  const CHAIN_NAME = 'solana';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  const getSerializedTransaction = async () => {
    try {
      const solana = new Connection(clusterApiUrl('devnet'), 'confirmed');
      const fromPubkey = new PublicKey(accounts);
      const toPubkey = new PublicKey('BnBydTNPrTwDz4ZSkhJiGiSZwakPQFVeN8rgdAS2Yc7F'); // allthatnode
      const { blockhash } = await solana.getLatestBlockhash();
      // make a transaction
      const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: fromPubkey,
      });
      // return serialized transaction
      return transaction.serialize({ verifySignatures: false }).toString('hex');
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
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const serializedTransaction = await getSerializedTransaction();
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:sendTransaction',
        params: [`0x${serializedTransaction}`],
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