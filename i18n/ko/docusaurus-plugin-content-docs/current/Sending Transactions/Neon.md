:::tip
이 파트에서는 neon의 트랜젝션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다.
:::

neon 웹 애플리케이션(dapp, web3 사이트 등)에서 트랜젝션을 보내기 위해선 

1. dapp provider (window.dapp) 감지
2. 사용자가 연결되어 있는 neon 네트워크 감지
3. 사용자의 neon 계정 가져오기

의 전제가 필요합니다. WELLDONE Wallet에서는 해당 지갑 주소에 연결되어 있는 네트워크를 자동으로 감지하여 가져옵니다. 따라서 transaction을 보내기 이전에 메인넷에 트랜젝션을 보낼 것인지, 테스트넷에 트랜젝션을 보낼 것인지 미리 고려해두어야 합니다. 트랜젝션은 아래와 같은 포맷을 통해 전송될 수 있습니다.


```tsx
const response = await dapp.request('neon' ,{
    method: 'dapp:sendTransaction',
    params: [
      JSON.stringify(transactionParameters),
    ]
  });
const txHash = response.hash;
```
## 1. Returns
```typescript
Promise<string>
```
  * 위와 같은 타입으로 transaction hash 값을 반환받을 수 있습니다.

## 2. Params
```typescript
interface TransactionParameters {
  from: string; // must match user's active address.
  to: string; // Required except during contract publications.
  gas?: string; // customizable by user
  gasPrice?: string; // customizable by user
  value?: string; // Only required to send ether to the recipient from the initiating external account.
  data?: string; // Optional, but used for defining smart contract creation and interaction.
};
```

* Required for smart contract creation. And this field is also used for specifying contract methods and their parameters.

### To [semi-optional] 
  * A hex-encoded chain address. Required for transactions with a recipient (all transactions except for contract creation).
  * Contract creation occurs when there is no to value but there is a data value.
### Gas Limit [optional] 
  * Optional parameter. Rarely useful to Dapp developers.

### Gas Price [optional] 
  * Optional parameter - best used on private blockchains.

### Value [optional] 
  * Hex-encoded value of the network's native currency to send. On the Main Ethereum network, this is ether, which is denominated in wei, which is 1e-18 ether.
  * Only required to send ether to the recipient from the initiating external account.
### data [semi-optional]
  * Required for smart contract creation.
  * This field is also used for specifying contract methods and their parameters. 

## 3. Example
```javascript 
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('neon', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['neon'].address,
    to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786', // where ..?
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };
  // sending a transaction
  try{
    const response = await dapp.request('neon' ,{
      method: 'dapp:sendTransaction',
      params: [
        JSON.stringify(transactionParameters),
      ]
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
}
```

아래의 예제를 통해 실제로 트랜젝션을 전송해 볼 수 있습니다. 트랜젝션을 보내기 위해선 faucet이 필요합니다. [이 링크](https://neonswap.live/#/get-tokens)를 통해 neon 테스트넷의 faucet을 받을 수 있습니다.

```jsx live 
function sendTransaction() {
  const CHAIN_NAME = 'neon';
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
        to: '0x248100e774ab0814ac99860fba32f3b143525bda', //where ..?
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