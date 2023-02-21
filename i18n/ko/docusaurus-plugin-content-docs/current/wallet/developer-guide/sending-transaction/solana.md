---
keywords: [솔라나 트랜잭션 전송, dapp:signAndSendTransaction, 솔라나]
description: Solana에서 트랜잭션 보내기
---

# Solana

:::tip
이 파트에서는 Solana 트랜잭션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다. WELLDONE Wallet은 dapp 메소드의 편리한 사용을 위한 방법을 강구 중입니다.
:::

Solana 네트워크에 트랜잭션을 보내기 위해서는 다음의 과정이 먼저 필요합니다.

1. Universal Provider (`window.dapp`) 감지
2. 사용자가 연결된 Solana 네트워크 감지
3. 사용자의 Solana 계정 가져오기

의 전제가 필요합니다. WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 트랜잭션을 보내기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다. 트랜잭션은 아래와 같은 포맷을 통해 전송될 수 있습니다.

```tsx
const response = await dapp.request('solana', {
  method: 'dapp:signAndSendTransaction',
  params: [HEX_STRING_TX_DATA],
});
```

## 1. Returns

해당 메소드는 단일 트랜잭션 뿐만 아니라 여러 개의 트랜잭션 전송이 가능하기 때문에, 트랜잭션 해시 값을 string 타입의 `Promise` 배열로 반환합니다.

```typescript
Promise<string[]>;
```

## 2. Params

```typescript
type HEX_STRING_TX_DATA = string;
```

- SOLANA에서 트랜잭션을 보내기 위해선 트랜잭션을 HEX String 타입으로 직렬화한 값을 인자로 전달해야 합니다.

## 3. Example

```javascript
const getSerializedTransaction = async (accounts) => {
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
  const pubKey = new PublicKey(accounts.pubKey);
  const RecentBlockHash = await connection.getLatestBlockhash();

  const transaction = new Transaction({
    /* new blockHash */
    blockhash: RecentBlockHash.blockhash,
    lastValidBlockHeight: RecentBlockHash.lastValidBlockHeight,
    feePayer: pubKey,
  });

  transaction.add(
    SystemProgram.transfer({
      fromPubkey: pubKey,
      lamports: Number(0.1) * LAMPORTS_PER_SOL,
      toPubkey: pubKey, // send to yourself
    }),
  );
  return transaction.compileMessage().serialize().toString('hex');
};

const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('solana', { method: 'dapp:accounts' });
  const HEX_STRING_TX_DATA = await getSerializedTransaction(accounts['solana']);
  // sending a transaction
  try {
    const response = await dapp.request('solana', {
      method: 'dapp:signAndSendTransaction',
      params: [
        // use serialized transaction
        [`0x${HEX_STRING_TX_DATA}`],
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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 트랜잭션을 보내기 위해선 테스트넷 토큰이 필요합니다. 지갑 내의 FAUCET 탭에서 faucet을 요청할 수 있습니다.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'solana';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      if (Object.keys(accounts).length === 0) {
        throw new Error('There is no accounts.');
      }
      setAccounts(accounts[CHAIN_NAME]);
    } catch (error) {
      alert(error.message);
    }
  }

  const getSerializedTransaction = async () => {
    try {
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
      const pubKey = new PublicKey(accounts.pubKey);
      const RecentBlockHash = await connection.getLatestBlockhash();

      const transaction = new Transaction({
        /* new blockHash */
        blockhash: RecentBlockHash.blockhash,
        lastValidBlockHeight: RecentBlockHash.lastValidBlockHeight,
        feePayer: pubKey,
      });

      transaction.add(
        SystemProgram.transfer({
          fromPubkey: pubKey,
          lamports: Number(0.1) * LAMPORTS_PER_SOL,
          toPubkey: pubKey, // send to yourself
        }),
      );

      return transaction.compileMessage().serialize().toString('hex');
    } catch (error) {
      /* error */
      console.log(error);
    }
  };

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
