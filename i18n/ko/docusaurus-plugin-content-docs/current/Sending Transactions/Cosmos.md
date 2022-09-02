---
keywords: [코스모스 트랜잭션 전송, dapp:sendTransaction, 코스모스]
---

:::tip
cosmos에 있어서 많은 개발자가 [CosmJS](https://cosmos.github.io/cosmjs/) 와 같은 편의 라이브러리를 사용합니다. 아래는 트랜잭션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다. WELLDONE Wallet은 dapp 메소드의 편리한 사용을 위한 방법을 강구 중입니다.
:::

cosmos 웹 애플리케이션(dapp, web3 사이트 등)에서 트랜잭션을 보내기 위해선

1. dapp provider (window.dapp) 감지
2. 사용자가 연결된 cosmos 네트워크 감지
3. 사용자의 cosmos 계정 가져오기

의 전제가 필요합니다. WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 transaction을 보내기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다. 트랜잭션은 아래와 같은 포맷을 통해 전송될 수 있습니다.

```tsx
const response = await dapp.request('cosmos', {
  method: 'dapp:sendTransaction',
  params: [JSON.stringify(transactionParameters)],
});
const txHash = response.transactionHash;
```

## 1. Returns

```typescript
Promise<string>;
```

- 위와 같은 타입으로 transaction hash 값을 반환받을 수 있습니다.

## 2. Params

```typescript
interface TransactionParameters {
  signerData: {
    accountNumber: string;
    sequence: string;
    chainId: string;
  };
  fee: {
    amount: [
      {
        denom: string;
        amount: string;
      },
    ];
    gas: string;
  };
  memo: string;
  msgs: [
    {
      typeUrl: string;
      value: {
        fromAddress: string;
        toAddress: string;
        amount: [{ denom: string; amount: string }];
      };
    },
  ];
  sequence: string;
}
```

- 파라미터들에 대한 자세힌 설명은 [이 링크](https://v1.cosmos.network/rpc/v0.41.4)에서 확인하실 수 있습니다.

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('cosmos', { method: 'dapp:accounts' });
  const sequence = '10';
  const chainId = 'vega-testnet';
  const transactionParameters = {
    signerData: {
      accountNumber: accounts,
      sequence,
      chainId,
    },
    fee: {
      amount: [
        {
          denom: 'uatom',
          amount: '10000',
        },
      ],
      gas: '180000', // 180k
    },
    memo: '',
    msgs: [
      {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: accounts,
          toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode
          amount: [{ denom: 'uatom', amount: '10000' }],
        },
      },
    ],
    sequence: `${sequence}`,
  };
  // sending a transaction
  try {
    const response = await dapp.request('cosmos', {
      method: 'dapp:sendTransaction',
      params: [JSON.stringify(transactionParameters)],
    });
    const txHash = response.transactionHash;
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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 트랜잭션을 보내기 위해선 faucet이 필요합니다. [이 링크](https://www.allthatnode.com/faucet/cosmos.dsrv)를 통해 cosmos 테스트넷의 faucet을 받을 수 있습니다.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'cosmos';
  const sequence = '10';
  const chainId = 'vega-testnet';
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
        signerData: {
          accountNumber: accounts,
          sequence,
          chainId,
        },
        fee: {
          amount: [
            {
              denom: 'uatom',
              amount: '10000',
            },
          ],
          gas: '180000', // 180k
        },
        memo: '',
        msgs: [
          {
            typeUrl: '/cosmos.bank.v1beta1.MsgSend',
            value: {
              fromAddress: accounts,
              toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode
              amount: [{ denom: 'uatom', amount: '10000' }],
            },
          },
        ],
        sequence: `${sequence}`,
      };
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:sendTransaction',
        params: [JSON.stringify(transactionParameters)],
      });
      const txHash = response.transactionHash;

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
