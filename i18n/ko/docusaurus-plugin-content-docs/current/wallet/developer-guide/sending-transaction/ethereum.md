---
keywords: [이더리움 트랜잭션 전송, dapp:sendTransaction, 이더리움]
description: Ethereum에서 트랜잭션 보내기
---

# Ethereum

:::tip
ethereum에 있어서 많은 개발자가 [ethers](https://docs.ethers.io/v5/) 와 같은 편의 라이브러리를 사용합니다. 아래는 `eth_sendTransaction` 메소드 호출과 함께 시작되는 트랜잭션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다.
:::

ethereum 웹 애플리케이션(dapp, web3 사이트 등)에서 트랜잭션을 보내기 위해선

1. Universal Provider (`window.dapp`) 감지
2. 사용자가 연결된 ethereum 네트워크 감지
3. 사용자의 ethereum 계정 가져오기

의 전제가 필요합니다. WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 트랜잭션을 보내기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다. 트랜잭션은 아래와 같은 포맷을 통해 전송될 수 있습니다.

```tsx
const response = await dapp.request('ethereum', {
  method: 'dapp:signAndSendTransaction',
  params: [TransactionParameters],
});
```

## 1. Returns

해당 메소드는 단일 트랜잭션 뿐만 아니라 여러 개의 트랜잭션 전송이 가능하기 때문에, 트랜잭션 해시 값을 string 타입의 `Promise` 배열로 반환합니다.

```typescript
Promise<string[]>;
```

## 2. Params

`dapp:signAndSendTransaction` 메소드는 트랜잭션을 HEX string 타입으로 변환한 값 `HEX_STRING_TX_DATA`을 인자로 받습니다. 하지만 EVM 계열의 네트워크는 `eth_sendTransaction` 의 인자를 그대로 전송할 수 있습니다. 즉, 트랜잭션 객체를 그대로 params에 배열로 넣을 수 있습니다.

```typescript
interface TransactionParameters {
  from: string;
  to: string;
  gas?: string; // overwritten by WELLDONE Wallet
  gasPrice?: string; // overwritten by WELLDONE Wallet
  value?: string;
  data: string;
}
```

- **from** : 트랜잭션을 보내는 주소

- **to** : (optional when creating new contract) 트랜잭션을 받는 주소

- **gas** : (optional) 트랜잭션 실행을 위해 지불할 가스의 최대량

- **gasPrice** : (optional) 가스의 단위 가격 (Wei)

- **value** : (optional) 트랜잭션과 함께 보내는 토큰 (Wei)

- **data** : 컴파일된 컨트랙트 코드 또는 호출하는 메소드의 시그니처 및 인코딩된 매개 변수의 해시 값

:::note

- `gas`, `gasPrice` 필드의 경우 WELLDONE Wallet 내부 자체 로직을 통해 overwrite 된 값이 적용됩니다.

:::

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('ethereum', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['ethereum'].address,
    to: accounts['ethereum'].address, // send to yourself
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };
  // sending a transaction
  try {
    const response = await dapp.request('ethereum', {
      method: 'dapp:signAndSendTransaction',
      params: [transactionParameters],
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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 아래 예제를 통해 트랜잭션을 보내기 위해선 Ethereum 계정과 테스트넷 토큰이 필요합니다. 지갑 내의 FAUCET 탭에서 faucet을 요청할 수 있습니다.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'ethereum';
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
      const chainId = await window.dapp.request(CHAIN_NAME, {
        method: 'eth_chainId',
        params: [],
      });
      if (chainId !== '0x5') {
        throw new Error('Please change to Goerli Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        from: accounts,
        to: accounts, // send to yourself
        value: '0x00',
        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [transactionParameters],
      });
      const txHash = response[0];

      setTxHash(txHash);
    } catch (error) {
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
