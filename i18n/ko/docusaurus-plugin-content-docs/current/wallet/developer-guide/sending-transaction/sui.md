---
keywords: [Sui sendTransaction, dapp:signAndSendTransaction, Sui, 수이, 수이 트랜잭션 전송]
description: Sending Transactions in Sui, Sui에서 트랜잭션 보내기
---

# Sui

:::tip
이 파트에서는 Sui 트랜잭션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다. WELLDONE Wallet은 dapp 메소드의 편리한 사용을 위한 방법을 강구 중입니다.
:::

Sui 네트워크에 트랜잭션을 보내기 위해서는 다음의 과정이 먼저 필요합니다.

1. Universal Provider (`window.dapp`) 감지
2. 사용자가 연결된 Sui 네트워크 감지
3. 사용자의 Sui 계정 가져오기

WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 트랜잭션을 보내기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다. 트랜잭션은 아래와 같은 포맷을 통해 전송될 수 있습니다.

```tsx
const response = await dapp.request('sui', {
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

- Sui에서 트랜잭션을 보내기 위해선 `HEX_STRING_TX_DATA`을 params로 넘겨야 합니다. 해당 값은 `@mysten/sui.js` 라이브러리를 통해 얻을 수 있으며, 자세한 사용 방식은 [공식 문서](https://github.com/MystenLabs/sui)와 아래의 예시를 통해 이해할 수 있습니다.

## 3. Example

```javascript
import { TransactionBlock } from '@mysten/sui.js';
const CHAIN_NAME = 'sui';
const SUI_RPC_URL = 'https://wallet-rpc.devnet.sui.io/';

const request = async (method, params) => {
  const res = await fetch(SUI_RPC_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: 0,
      jsonrpc: '2.0',
      method,
      params: params || [],
    }),
  });

  const { result } = await res.json();
  return result;
};

const getSerializedTransaction = async (accounts) => {
  try {
    // example sui provider
    const suiProvider = {
      provider: {
        getReferenceGasPrice: async () => {
          const result = await request('suix_getReferenceGasPrice', []);
          return result;
        },
        getCoins: async ({ owner, coinType }) => {
          const result = await request('suix_getCoins', [owner, coinType]);
          return result;
        },
        multiGetObjects: async ({ ids, options }) => {
          const result = await request('sui_multiGetObjects', [ids, options]);
          return result;
        },
        dryRunTransactionBlock: async ({ transactionBlock }) => {
          const result = await request('sui_dryRunTransactionBlock', [
            typeof transactionBlock === 'string'
              ? transactionBlock
              : Buffer.from(transactionBlock).toString('base64'),
          ]);
          return result;
        },
      },
    };

    const coins = await request('suix_getCoins', [accounts.address]);

    const coinType = '0x2::sui::SUI';
    const filtered = coins.data.filter((item) => item.coinType === coinType);

    const txb = new TransactionBlock();
    txb.setSender(accounts.address);

    txb.setGasPayment(
      filtered.map((item) => {
        return {
          objectId: item.coinObjectId,
          version: item.version,
          digest: item.digest,
        };
      }),
    );
    const [coin] = txb.splitCoins(txb.gas, [txb.pure(10000000)]);

    txb.transferObjects([coin], txb.pure(accounts.address));
    const transactionBlock = await txb.build(suiProvider);
    return `0x${Buffer.from(transactionBlock).toString('hex')}`;
  } catch (error) {
    alert(error.message);
  }
};

async function sendTransaction() {
  try {
    const HEX_STRING_TX_DATA = await getSerializedTransaction();
    const response = await dapp.request(CHAIN_NAME, {
      method: 'dapp:signAndSendTransaction',
      params: [`${HEX_STRING_TX_DATA}`],
    });
    const txHash = response[0];

    setTxHash(txHash);
  } catch (error) {
    alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
  }
}

const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request(CHAIN_NAME, { method: 'dapp:accounts' });
  const HEX_STRING_TX_DATA = await getSerializedTransaction(accounts[CHAIN_NAME]);
  // sending a transaction
  try {
    const response = await dapp.request(CHAIN_NAME, {
      method: 'dapp:signAndSendTransaction',
      params: [
        // use serialized transaction
        [`${HEX_STRING_TX_DATA}`],
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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 아래 예제를 통해 트랜잭션을 보내기 위해선 Sui 계정과 devnet 토큰이 필요합니다. 지갑 내의 FAUCET 탭에서 faucet을 요청할 수 있습니다.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'sui';
  const SUI_RPC_URL = 'https://wallet-rpc.devnet.sui.io/';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);

  const request = async (method, params) => {
    const res = await fetch(SUI_RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 0,
        jsonrpc: '2.0',
        method,
        params: params || [],
      }),
    });

    const { result } = await res.json();
    return result;
  };

  const suiProvider = {
    provider: {
      getReferenceGasPrice: async () => {
        const result = await request('suix_getReferenceGasPrice', []);
        return result;
      },
      getCoins: async ({ owner, coinType }) => {
        const result = await request('suix_getCoins', [owner, coinType]);
        return result;
      },
      multiGetObjects: async ({ ids, options }) => {
        const result = await request('sui_multiGetObjects', [ids, options]);
        return result;
      },
      dryRunTransactionBlock: async ({ transactionBlock }) => {
        const result = await request('sui_dryRunTransactionBlock', [
          typeof transactionBlock === 'string'
            ? transactionBlock
            : Buffer.from(transactionBlock).toString('base64'),
        ]);
        return result;
      },
    },
  };

  const getSerializedTransaction = async () => {
    try {
      const coins = await request('suix_getCoins', [accounts.address]);

      const coinType = '0x2::sui::SUI';
      const filtered = coins.data.filter((item) => item.coinType === coinType);

      const txb = new TransactionBlock();
      txb.setSender(accounts.address);

      txb.setGasPayment(
        filtered.map((item) => {
          return {
            objectId: item.coinObjectId,
            version: item.version,
            digest: item.digest,
          };
        }),
      );
      const [coin] = txb.splitCoins(txb.gas, [txb.pure(10000000)]);

      txb.transferObjects([coin], txb.pure(accounts.address));
      const transactionBlock = await txb.build(suiProvider);
      return `0x${Buffer.from(transactionBlock).toString('hex')}`;
    } catch (error) {
      alert(error.message);
    }
  };

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      if (Object.keys(accounts).length === 0) {
        throw new Error('There is no accounts.');
      }
      const chainId = await window.dapp.networks.sui.chain;

      if ((chainId === 'mainnet') | (chainId === 'testnet')) {
        throw new Error('Please chagne to SUI devnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME]);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSendTransaction() {
    try {
      const HEX_STRING_TX_DATA = await getSerializedTransaction();
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [`${HEX_STRING_TX_DATA}`],
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
