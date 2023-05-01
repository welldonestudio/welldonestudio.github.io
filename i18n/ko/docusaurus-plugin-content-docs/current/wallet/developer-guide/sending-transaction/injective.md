---
keywords: [Injective 트랜잭션 전송, dapp:signAndSendTransaction, Injective]
description: Injective에서 트랜잭션 보내기
---

# Injective

:::tip
이 파트에서는 Injective 트랜잭션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다. WELLDONE Wallet은 dapp 메소드의 편리한 사용을 위한 방법을 강구 중입니다.
:::

Injective 네트워크에 트랜잭션을 보내기 위해서는 다음의 과정이 먼저 필요합니다.

1. Universal Provider (`window.dapp`) 감지
2. 사용자가 연결된 Injective 네트워크 감지
3. 사용자의 Injective 계정 가져오기

의 전제가 필요합니다. WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 트랜잭션을 보내기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다. 트랜잭션은 아래와 같은 포맷을 통해 전송될 수 있습니다.

```tsx
const response = await dapp.request('injective', {
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

- Injective에서 트랜잭션을 보내기 위해선 `HEX_STRING_TX_DATA`을 params로 넘겨야 합니다.

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('injective', { method: 'dapp:accounts' });
  const lcdClient = new ChainRestAuthApi(network.rest);
  const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);
  const sequence = fetchAccount.account.base_account.sequence;
  const accountNumber = fetchAccount.account.base_account.account_number;
  const chainId = 'injective-888';
  // creating a transaction
  const messages = MsgSend.fromJSON({
    amount: {
      amount: ethers.utils.parseUnits('0.001', 18).toString(),
      denom: 'inj',
    },
    srcInjectiveAddress: accounts,
    dstInjectiveAddress: accounts, // send to yourself
  });
  const txResult = createTransaction({
    pubKey: Buffer.from(pubKey.replace('0x', ''), 'hex').toString('base64'),
    chainId,
    message: messages.toDirectSign(),
    sequence,
    accountNumber,
  });
  // sending a transaction
  try {
    const response = await dapp.request('injective', {
      method: 'dapp:signAndSendTranssaction',
      params: [`0x${Buffer.from(txResult.signBytes).toString('hex')}`],
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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 아래 예제를 통해 트랜잭션을 보내기 위해선 Injective 테스트넷 계정과 테스트넷 토큰이 필요합니다. 지갑 내의 FAUCET 탭에서 faucet을 요청할 수 있습니다.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'injective';
  const chainId = 'injective-888';
  const [accounts, setAccounts] = React.useState(null);
  const [pubKey, setPubKey] = React.useState(null);
  const [sequence, setSequence] = React.useState(null);
  const [accountNumber, setAccountNumber] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  const network = getNetworkInfo(Network.Testnet);

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      if (Object.keys(accounts).length === 0) {
        throw new Error('There is no accounts.');
      }
      if (dapp.networks.injective.chain !== 'injective-testnet') {
        throw new Error('Please change the network to Testnet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
      const lcdClient = new ChainRestAuthApi(network.rest);
      const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);
      setSequence(fetchAccount.account.base_account.sequence);
      setAccountNumber(fetchAccount.account.base_account.account_number);
      setPubKey(accounts[CHAIN_NAME].pubKey);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSendTransaction() {
    const createTx = async () => {
      const messages = MsgSend.fromJSON({
        amount: {
          amount: ethers.utils.parseUnits('0.001', 18).toString(),
          denom: 'inj',
        },
        srcInjectiveAddress: accounts,
        dstInjectiveAddress: accounts, // send to yourself
      });
      const txResult = createTransaction({
        pubKey: Buffer.from(pubKey.replace('0x', ''), 'hex').toString('base64'),
        chainId,
        message: messages.toDirectSign(),
        sequence,
        accountNumber,
      });
      return {
        serializedTx: `0x${Buffer.from(txResult.signBytes).toString('hex')}`,
      };
    };

    const tx = await createTx();
    const response = await dapp.request(CHAIN_NAME, {
      method: 'dapp:signAndSendTransaction',
      params: [tx.serializedTx],
    });
    setTxHash(response[0]);
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
