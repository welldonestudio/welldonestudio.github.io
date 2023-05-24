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

`dapp:signAndSendTransaction` 메소드는 트랜잭션을 HEX string 타입으로 변환한 값 `HEX_STRING_TX_DATA`을 인자로 받습니다. 하지만 Injective 계열의 네트워크는 트랜잭션 객체를 JSON String 타입으로 변환한 값을 인자로 전달할 수 있습니다.

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
      typeUrl: '/cosmos.bank.v1beta1.MsgSend';
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

- `typeUrl`의 종류와 실행하고자 하는 컨트랙트의 메소드에 따라서 `value`의 값이 달라집니다. 위의 파라미터는 다른 계정에게 코인을 보내는 트랜잭션 타입의 예시입니다.

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('injective', { method: 'dapp:accounts' });
  const chainId = 'injective-888';
  const lcdClient = new ChainRestAuthApi(network.rest);
  const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);
  const sequence = fetchAccount.account.base_account.sequence;
  const accountNumber = fetchAccount.account.base_account.account_number;
  // creating a transaction
  const const transactionParameters = {
    signerData: {
      accountNumber,
      sequence,
      chainId,
    },
    fee: {
      amount: [
        {
          denom: 'inj',
          amount: '90000000000000',
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
          toAddress: accounts, //allthatnode
          amount: [{ denom: 'inj', amount: '10000' }],
        },
      },
    ],
    sequence: `${sequence}`,
  };
  // sending a transaction
  try {
    const response = await dapp.request('injective', {
      method: 'dapp:signAndSendTranssaction',
      params: [JSON.stringify(transactionParameters)],
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
      const status = await dapp.request('injective', {
        method: 'status',
      });
      if (status.node_info.network !== chainId) {
        throw new Error('Please change to Cosmos Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
      const lcdClient = new ChainRestAuthApi(network.rest);
      const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);
      setSequence(fetchAccount.account.base_account.sequence);
      setAccountNumber(fetchAccount.account.base_account.account_number);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        signerData: {
          accountNumber,
          sequence,
          chainId,
        },
        fee: {
          amount: [
            {
              denom: 'inj',
              amount: '90000000000000',
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
              toAddress: accounts, //allthatnode
              amount: [{ denom: 'inj', amount: '10000' }],
            },
          },
        ],
        sequence: `${sequence}`,
      };

      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [JSON.stringify(transactionParameters)],
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
