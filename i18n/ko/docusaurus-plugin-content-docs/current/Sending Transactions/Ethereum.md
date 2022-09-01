:::tip
ethereum에 있어서 많은 개발자가 [ethers](https://docs.ethers.io/v5/) 와 같은 편의 라이브러리를 사용합니다. 아래는 `eth_sendTransaction` 메소드 호출과 함께 시작되는 트랜젝션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다.
:::

ethereum 웹 애플리케이션(dapp, web3 사이트 등)에서 트랜젝션을 보내기 위해선

1. dapp provider (window.dapp) 감지
2. 사용자가 연결되어 있는 ethereum 네트워크 감지
3. 사용자의 ethereum 계정 가져오기

의 전제가 필요합니다. WELLDONE Wallet에서는 해당 지갑 주소에 연결되어 있는 네트워크를 자동으로 감지하여 가져옵니다. 따라서 transaction을 보내기 이전에 메인넷에 트랜젝션을 보낼 것인지, 테스트넷에 트랜젝션을 보낼 것인지 미리 고려해두어야 합니다. 트랜젝션은 아래와 같은 포맷을 통해 전송될 수 있습니다.

```tsx
const response = await dapp.request('ethereum', {
  method: 'dapp:sendTransaction',
  params: [JSON.stringify(transactionParameters)],
});
const txHash = response.hash;
```

## 1. Returns

```typescript
Promise<string>;
```

- 위와 같은 타입으로 transaction hash 값을 반환받을 수 있습니다.

## 2. Params

```typescript
interface TransactionParameters {
  from: string; // must match user's active address.
  to: string; // Required except during contract publications.
  gas?: string; // customizable by user
  gasPrice?: string; // customizable by user
  value?: string; // Only required to send ether to the recipient from the initiating external account.
  data?: string; // Optional, but used for defining smart contract creation and interaction.
}
```

### To [semi-optional]

- 16진수로 인코딩된 체인 주소입니다. recipient과의 트랜젝션(컨트랙트 트랜젝션을 제외한 모든 트랜젝션)에 필요합니다.
- 컨트랙트를 생성할 때에는 `To`는 비워서 보내고, `Data`값을 채워서 보내야 합니다.

### Gas Limit [optional]

- 선택적인 파라미터입니다. Dapp 개발자들에게는 잘 쓰이지 않습니다.

### Gas Price [optional]

- 선택적인 파라미터입니다. private blockchains에 적합합니다.

### Value [optional]

- 전송할 네트워크의 기본 통화의 16진수 인코딩 값입니다. 이 값은 메인 이더리움 네트워크에서 ie-18 ether로 표현되는 wei입니다.
- 초기 외부의 계정에서 recipient에게 이더를 보낼 때에만 사용되는 필드입니다.

### data [semi-optional]

- 컨트랙트를 생성할 때 필요한 필드입니다.
- 이 필드는 컨트랙트의 메소드와 파라미터를 지정하는 데에도 사용됩니다.

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('ethereum', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['ethereum'].address,
    to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };
  // sending a transaction
  try {
    const response = await dapp.request('ethereum', {
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

아래의 예제를 통해 실제로 트랜젝션을 전송해 볼 수 있습니다. 트랜젝션을 보내기 위해선 faucet이 필요합니다. [이 링크](https://faucet.egorfine.com/)를 통해 Ethereum 테스트넷의 faucet을 받을 수 있습니다.

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

      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        from: accounts,
        to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
        gas: '0x76c0',
        gasPrice: '0x9184e72a000',
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
