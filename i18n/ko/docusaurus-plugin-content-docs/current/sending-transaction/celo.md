---
keywords: [셀로 트랜잭션 전송, dapp:sendTransaction, 셀로]
description: Celo에서 트랜잭션 보내기
---

# Celo

:::tip
Celo 네트워크에서의 많은 개발자는 [DappKit](https://docs.celo.org/developer/dappkit) 와 같은 편의 라이브러리를 사용합니다. 아래 문서에서는 `eth_sendTransaction` 메소드 호출과 함께 시작되는 트랜잭션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 Provider API를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다.
:::

Celo 웹 애플리케이션(dapp, web3 사이트 등)에서 트랜잭션을 보내기 위해선

1. dapp provider (`window.dapp`) 감지
2. 사용자가 연결된 Celo 네트워크 감지
3. 사용자의 Celo 계정 가져오기

의 전제가 필요합니다. WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 트랜잭션을 보내기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다. 트랜잭션은 아래와 같은 포맷을 통해 전송할 수 있습니다.

```tsx
const response = await dapp.request('celo', {
  method: 'dapp:sendTransaction',
  params: [JSON.stringify(transactionParameters)],
});
const txHash = response.hash;
```

## 1. Returns

해당 메소드는 transaction hash 값을 string 타입의 Promise 객체로 반환합니다.

```typescript
Promise<string>;
```

## 2. Params

```typescript
interface TransactionParameters {
  from: string;
  to: string;
  gas?: string; // overwritten by WELLDONE Wallet
  gasPrice?: string; // overwritten by WELLDONE Wallet
  value?: string;
  data: string;
  feeCurrency?: string; // Celo-specific option
  gatewayFeeRecipient?: string; // Celo-specific option
  gatewayFee?: string; // Celo-specific option
}
```

- **from** : 트랜잭션을 보내는 주소

- **to** : (optional when creating new contract) 트랜잭션을 받는 주소

- **gas** : (optional) 트랜잭션 실행을 위해 지불할 가스의 최대량

- **gasPrice** : (optional) 가스의 단위 가격 (Wei)

- **value** : (optional) 트랜잭션과 함께 보내는 토큰 (Wei)

- **data** : 컴파일된 컨트랙트 코드 또는 호출하는 메소드의 시그니처 및 인코딩된 매개 변수의 해시 값

- **feeCurrency** : (optional) 비용 지불에 사용할 ERC20 컨트랙트의 주소

- **gatewayFeeRecipient** : (optional) light client의 트랜잭션을 지원하는 코인베이스 주소

- **gatewayFee** : (optional) gateway fee 수취인에게 지급된 값

:::note

- `gas`, `gasPrice` 필드의 경우 WELLDONE Wallet 내부 자체 로직을 통해 overwrite 된 값이 적용됩니다.
- `gatewayFeeRecipient`, `gatewayFee` 옵션은 Full node 인센티브를 지원하고, 현재 프로토콜에는 적용되어 있지 않습니다.

:::

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('celo', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['celo'].address,
    to: '0x502fB76a1A310d048973DeE209dC6c6ce572f7e4', // allthatnode
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };
  // sending a transaction
  try {
    const response = await dapp.request('celo', {
      method: 'dapp:sendTransaction',
      params: [JSON.stringify(transactionParameters)],
    });
    const txHash = response.hash;
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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 트랜잭션을 보내기 위해선 faucet이 필요합니다. 다음 [링크](https://www.allthatnode.com/faucet/celo.dsrv)를 통해 Celo Alfajores 테스트넷의 faucet을 받을 수 있습니다.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'celo';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      if (dapp.networks.celo.chain !== '0xaef3') {
        throw new Error('Please change to Celo Alfajores Testnet in WELLDONE Wallet');
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
        to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode
        value: '0x00',
        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:sendTransaction',
        params: [JSON.stringify(transactionParameters)],
      });
      const txHash = response.hash;

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
