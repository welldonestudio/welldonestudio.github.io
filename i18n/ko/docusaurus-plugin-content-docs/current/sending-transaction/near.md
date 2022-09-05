---
keywords: [니어 트랜잭션 전송, dapp:sendTransaction, 니어]
---

:::tip
이 파트에서는 near 트랜잭션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다. WELLDONE Wallet은 dapp 메소드의 편리한 사용을 위한 방법을 강구 중입니다.
:::

near 웹 애플리케이션(dapp, web3 사이트 등)에서 트랜잭션을 보내기 위해선

1. dapp provider (`window.dapp`) 감지
2. 사용자가 연결된 near 네트워크 감지
3. 사용자의 near 계정 가져오기

의 전제가 필요합니다. WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 transaction을 보내기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다. 트랜잭션은 아래와 같은 포맷을 통해 전송될 수 있습니다.

```tsx
const response = await dapp.request('near', {
  method: 'dapp:sendTransaction',
  params: [JSON.stringify(transactionParameters)],
});
const txHash = response;
```

## 1. Returns

해당 메소드는 transaction hash 값을 string 타입의 Promise 객체로 반환합니다.

```typescript
Promise<string>;
```

## 2. Params

```typescript
type serializedTransaction = string;
```

- near에서 트랜잭션을 보내기 위해선 `serializedTransaction`을 params로 넘겨야 합니다. 해당 값은 `near-api-js` 라이브러리를 통해 얻을 수 있으며, 자세한 사용 방식은 [이 링크](https://docs.near.org/integrator/create-transactions)와 아래의 예시를 통해 이해할 수 있습니다.

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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 아래 예제를 통해 트랜잭션을 보내기 위해선 near testnet account가 필요하며, faucet이 필요합니다. faucet은 [이 링크](https://www.allthatnode.com/faucet/near.dsrv)를 통해 받으실 수 있습니다!

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
      if (dapp.networks.near.chain !== 'testnet') {
        throw new Error('Please chagne to NEAR Testnet in WELLDONE Wallet');
      }
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
