---
keywords: [컨트랙트 실행시키기, 니어, 스마트 컨트랙트]
---

# Near

## Params

```typescript
type serializedTransaction = string;
```

NEAR에서 트랜잭션을 보내기 위해선 `serializedTransaction`을 params로 넘겨야 합니다. 해당 값은 `near-api-js` 라이브러리를 통해 얻을 수 있으며, 자세한 사용 방식은 다음의 [링크](https://docs.near.org/integrator/create-transactions)와 아래 예시를 통해 이해할 수 있습니다.

## Example

NEAR Testnet에 미리 배포한 카운터 컨트랙트와 통신하는 예제를 같이 살펴보겠습니다. 컨트랙트 코드는 다음의 [저장소](https://github.com/DSRV-DevGuild/near-counter-example)에서 확인할 수 있습니다. 컨트랙트 내부의 상태를 변경하는 트랜잭션을 실행하기 위해서는 가스 비용을 지불해야 하므로 다음 링크에서 [faucet](https://www.allthatnode.com/faucet/near.dsrv)을 요청합니다.

다음의 예제는 컨트랙트의 `increment` 메소드를 실행시키는 트랜잭션을 날리는 코드입니다.
`increment` 메소드는 컨트랙트 내부의 카운터 값에 인자로 전달한 count 값만큼 더해주는 메소드로, [FunctionCall](https://nomicon.io/RuntimeSpec/Actions#functioncallaction) action type을 사용합니다.

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

      const actions = [
        transactions.functionCall(
          'increment', // methodName
          { count: 5 }, // args
          new BN('30000000000000'), // 30 TGas
          new BN(0),
        ),
      ];
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
