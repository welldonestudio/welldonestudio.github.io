:::tip
이 파트에서는 solana의 트랜젝션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다. WELLDONE Wallet은 추후 [@solana/wallet-adapter-wallets](https://www.npmjs.com/package/@solana/wallet-adapter-wallets)를 지원할 계획입니다.
:::

solana 웹 애플리케이션(dapp, web3 사이트 등)에서 트랜젝션을 보내기 위해선 

1. dapp provider (window.dapp) 감지
2. 사용자가 연결되어 있는 solana 네트워크 감지
3. 사용자의 solana 계정 가져오기

의 전제가 필요합니다. WELLDONE Wallet에서는 해당 지갑 주소에 연결되어 있는 네트워크를 자동으로 감지하여 가져옵니다. 따라서 transaction을 보내기 이전에 메인넷에 트랜젝션을 보낼 것인지, 테스트넷에 트랜젝션을 보낼 것인지 미리 고려해두어야 합니다. 트랜젝션은 아래와 같은 포맷을 통해 전송될 수 있습니다.


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
  * 위와 같은 타입으로 transaction hash 값을 반환받을 수 있습니다.

## 2. Params
```typescript
type serializedTransaction = string;
```

* solana에서 트랜젝션을 보내기 위해선 `serializedTransaction`을 params로 넘겨야 합니다. 해당 값은 `@solana/web3.js` 라이브러리를 통해 얻을 수 있으며, 자세한 사용 방식은 아래 예시를 통해 이해할 수 있습니다.



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
아래의 예제를 통해 실제로 트랜젝션을 전송해 볼 수 있습니다. 트랜젝션을 보내기 위해선 faucet이 필요합니다. [이 링크](https://solfaucet.com/)를 통해 solana 테스트넷의 faucet을 받을 수 있습니다.
```jsx live 
function sendTransaction() {
  const CHAIN_NAME = 'solana';
  const [accounts, setAccounts] = React.useState(null);
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
      alert('Get Account successful!');
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
      alert(`txHash : ${txHash}`);
    } catch (error) {
      console.log(error);
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }
  return (
    <>
      {accounts ? (
        <>
          <button onClick={handleSendTransaction} type="button">
            Send a Transaction
          </button>
        </>
      ) : (
        <>
          <button onClick={handleGetAccount} type="button">
            Get Account
          </button>
          <div>You have to get account first!</div>
        </>
      )}
    </>
  );
}
```