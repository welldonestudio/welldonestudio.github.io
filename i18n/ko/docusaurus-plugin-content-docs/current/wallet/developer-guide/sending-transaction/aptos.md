---
keywords: [Aptos sendTransaction, dapp:signAndSendTransaction, Aptos, 앱토스, 앱토스 트랜잭션 전송]
description: Sending Transactions in Aptos, Aptos에서 트랜잭션 보내기
---

# Aptos

:::tip
이 파트에서는 Aptos 트랜잭션 전송을 `dapp.request`를 통해 시작하는 방식을 소개합니다. 이 API에서 제공하는 것보다 더 높은 수준의 추상화가 필요한 경우 공급자를 직접 사용하는 대신, 편의 라이브러리를 사용하는 것이 좋습니다. WELLDONE Wallet은 dapp 메소드의 편리한 사용을 위한 방법을 강구 중입니다.
:::

Aptos 네트워크에 트랜잭션을 보내기 위해서는 다음의 과정이 먼저 필요합니다.

1. Universal Provider (`window.dapp`) 감지
2. 사용자가 연결된 Aptos 네트워크 감지
3. 사용자의 Aptos 계정 가져오기

WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 트랜잭션을 보내기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다. 트랜잭션은 아래와 같은 포맷을 통해 전송될 수 있습니다.

```tsx
const response = await dapp.request('aptos', {
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

- Aptos에서 트랜잭션을 보내기 위해선 `HEX_STRING_TX_DATA`을 params로 넘겨야 합니다. 해당 값은 `aptos` 라이브러리를 통해 얻을 수 있으며, 자세한 사용 방식은 [공식 문서](https://aptos-labs.github.io/ts-sdk-doc/modules.html)와 아래의 예시를 통해 이해할 수 있습니다.

## 3. Example

```javascript
import { AptosClient, TxnBuilderTypes, BCS } from 'aptos';
const getSerializedTransaction = async (accounts) => {
  try {
    const aptosClient = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');
    // make transaction
    const payload = {
      type: 'entry_function_payload',
      function: '0x1::coin::transfer',
      type_arguments: ['0x1::aptos_coin::AptosCoin'],
      arguments: [accounts.address, 1], // 1 is in Octas
    };

    const token = new TxnBuilderTypes.TypeTagStruct(
      TxnBuilderTypes.StructTag.fromString('0x1::aptos_coin::AptosCoin'),
    );

    const entryFunctionPayload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
      TxnBuilderTypes.EntryFunction.natural(
        '0x1::coin',
        'transfer',
        [token],
        [
          BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(accounts.address)),
          BCS.bcsSerializeUint64(100),
        ],
      ),
    );

    const rawTx = await aptosClient.generateRawTransaction(accounts.address, entryFunctionPayload);

    const rawTxnWithSalt = `0x${Buffer.concat([
      Buffer.from(sha3_256(Buffer.from('APTOS::RawTransaction', 'ascii')), 'hex'),
      Buffer.from(BCS.bcsToBytes(rawTx)),
    ]).toString('hex')}`;

    return rawTxnWithSalt;
  } catch (error) {
    alert(error.message);
  }
};

const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('aptos', { method: 'dapp:accounts' });
  const HEX_STRING_TX_DATA = await getSerializedTransaction(accounts['aptos']);
  // sending a transaction
  try {
    const response = await dapp.request('aptos', {
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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 아래 예제를 통해 트랜잭션을 보내기 위해선 Aptos 계정과 devnet 토큰이 필요합니다. 지갑 내의 FAUCET 탭에서 faucet을 요청할 수 있습니다.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'aptos';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  const getSerializedTransaction = async () => {
    try {
      const aptosClient = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');
      // make transaction
      const payload = {
        type: 'entry_function_payload',
        function: '0x1::coin::transfer',
        type_arguments: ['0x1::aptos_coin::AptosCoin'],
        arguments: [accounts.address, 1], // 1 is in Octas
      };

      const token = new TxnBuilderTypes.TypeTagStruct(
        TxnBuilderTypes.StructTag.fromString('0x1::aptos_coin::AptosCoin'),
      );

      const entryFunctionPayload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
        TxnBuilderTypes.EntryFunction.natural(
          '0x1::coin',
          'transfer',
          [token],
          [
            BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(accounts.address)),
            BCS.bcsSerializeUint64(100),
          ],
        ),
      );

      const rawTx = await aptosClient.generateRawTransaction(
        accounts.address,
        entryFunctionPayload,
      );

      const rawTxnWithSalt = `0x${Buffer.concat([
        Buffer.from(sha3_256(Buffer.from('APTOS::RawTransaction', 'ascii')), 'hex'),
        Buffer.from(BCS.bcsToBytes(rawTx)),
      ]).toString('hex')}`;

      return rawTxnWithSalt;
    } catch (error) {
      alert(error.message);
    }
  };

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      const status = await window.dapp.request('aptos', {
        method: 'GET',
        params: [
          {
            url: '/',
          },
        ],
      });
      if ((status.chain_id === 1) | (status.chain_id === 2)) {
        throw new Error('Please chagne to APTOS devnet in WELLDONE Wallet');
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
