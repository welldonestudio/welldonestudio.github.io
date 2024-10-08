---
keywords: [NEAR sendTransaction, dapp:sendTransaction, NEAR, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in NEAR
---

# NEAR

<div>
  <span className='author-sm'>November 11, 2022</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/Nahee-Park' target='_blank'><img src='https://avatars.githubusercontent.com/u/81923229?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Nahee Park</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>
<br/>

:::tip Prerequisites
NEAR 파트에서는 [naer-api-js](https://near.github.io/near-api-js/)를 추가로 이용하여 실습을 진행합니다. 해당 패키지를 미리 설치해주세요.
:::

## Signed transaction 생성하기

signed transaction을 만들기 위해선 크게 세 가지 절차를 거쳐야 합니다.

1. raw transaction 생성
2. raw transaction에 대한 signature 생성
3. raw transaction과 signature을 합쳐 signed transaction 생성

### 1. getNearTx

signed transaction을 생성하기 위해서는 raw transaction과 signature가 필요합니다. kms를 통해 signature를 얻기 위해선 raw transaction이 필요하기 때문에 먼저 raw transaction을 생성하기 위한 `getNearTx` 함수를 만듭니다.
:::note
NEAR는 account index가 1부터 시작하기 때문에, getAccount메서드를 호출할 때 index값을 1부터 넣어줄 수 있습니다.
:::

```typescript title="getNearTx.ts"
import { providers, transactions, utils } from 'near-api-js';
import { AccessKeyView } from 'near-api-js/lib/providers/provider';
import { Transaction } from 'near-api-js/lib/transaction';
import { Account, CHAIN } from '@dsrv/kms/lib/types';
import { Near } from '@dsrv/kms/lib/blockchains/near';

interface RawTransaction {
  unSignedTx: Transaction;
  serializedTx: string;
}

export const getNearTx = async (mnemonic: string): Promise<RawTransaction> => {
  /* 1. get Account */
  const account = Near.getAccount({
    mnemonic,
    path: { type: CHAIN.NEAR, account: 0, index: 1 },
  });

  /* 2. make raw transaction */
  const provider = new providers.JsonRpcProvider({
    url: 'https://rpc.testnet.near.org',
  });
  const helperURL = `https://near-utils.welldonestudio.io/accounts?address=${account.address}`;
  const accountIds = await fetch(helperURL).then((res) => res.json());

  const signerId = accountIds[Object.keys(accountIds).length - 1];
  const { publicKey } = account;

  const param = {
    request_type: 'view_access_key',
    finality: 'final',
    account_id: signerId,
    public_key: publicKey,
  };

  const accessKey = await provider.query<AccessKeyView>(param);
  const actions = [transactions.transfer(new BN(10))];
  const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);

  const transaction = transactions.createTransaction(
    accountIds[0],
    utils.PublicKey.fromString(publicKey),
    accountIds[0],
    Number(accessKey.nonce) + 1,
    actions,
    recentBlockHash,
  );

  const bytes = transaction.encode();

  return {
    serializedTx: `0x${Buffer.from(bytes).toString('hex')}`,
    unSignedTx: transaction,
  };
};
```

### 2. getNearSignature

다음으로 transaction에 대한 signature를 얻기 위해, serializedTx를 인자로 받아서 signature를 생성하는 `getNearSignature` 함수를 만듭니다.

```typescript title="getNearSignature.ts"
import { CHAIN } from '@dsrv/kms/lib/types';
import { Near } from '@dsrv/kms/lib/blockchains/near';

export const getNearSignature = (serializedTx: string): string => {
  const { signature } = Near.signTx(
    {
      mnemonic,
      path: { type: CHAIN.NEAR, account: 0, index: 1 },
    },
    serializedTx,
  );

  return signature;
};
```

### 3. createNearSignedTx

마지막으로 위에서 생성한 `unSignedTx`와 `signature`를 통해 signed transaction을 리턴해주는 `createNearSignedTx` 함수를 만듭니다.

```typescript title="createNearSignedTx.ts"
import { Signature, SignedTransaction, Transaction } from 'near-api-js/lib/transaction';

interface createNearSignedTxProps {
  unSignedTx: Transaction;
  signature: string;
}

/* create singedTx by combining tx and signature */
export const createNearSignedTx = ({ unSignedTx, signature }: createNearSignedTxProps): string => {
  const unSignedbytes = unSignedTx.encode();
  const unSignedSerializedTx = Buffer.from(unSignedbytes).toString('base64');
  const transaction = Transaction.decode(Buffer.from(unSignedSerializedTx, 'base64'));

  const signedTx = new SignedTransaction({
    transaction,
    signature: new Signature({
      keyType: transaction.publicKey.keyType,
      data: Buffer.from(signature.replace('0x', ''), 'hex'),
    }),
  });

  const bytes = signedTx.encode();
  const serializedTx = Buffer.from(bytes).toString('base64');

  return serializedTx;
};
```

최종적으로 위에서 만든 함수, `getNearTx`, `getNearSignature`, `createNearSignedTx` 를 이용해 signed transaction을 리턴하는 `getNearSignedTx`를 만들 수 있습니다.

```typescript title="getNearSignedTx.ts"
export const getNearSignedTx = async (mnemonic: string) => {
  /* 1. get rawTransaction */
  const { serializedTx, unSignedTx } = await getNearTx(mnemonic);
  /* 2. get signature */
  const nearSignature = getNearSignature(serializedTx);
  /* 3. create singedTx by combining rawTransaction and signature */
  const nearSignedTx = createNearSignedTx({
    unSignedTx,
    signature: nearSignature,
  });

  return nearSignedTx;
};
```

## Signed transaction 전송하기

Signed transaction을 생성했다면, 그것을 이용하여 트랜잭션을 전송할 수 있습니다.

```typescript title="sendNearTransaction.ts"
import { providers } from 'near-api-js';

export const sendNearTransaction = async (serializedTx: string) => {
  const rpcUrl = 'https://rpc.testnet.near.org';

  const provider = new providers.JsonRpcProvider({ url: rpcUrl });

  const txResult = await provider.sendJsonRpc('broadcast_tx_commit', [serializedTx]);
  return txResult;
};
```

```typescript title="main.ts"
const mnemonic = 'sample mnemonic';
const main = async () => {
  const nearSignedTx = await getNearSignedTx(mnemonic);
  const nearTxResult = await sendNearTransaction(nearSignedTx);
  console.log('Near Tx Result : ', nearTxResult);
};
main();
```

## Examples

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 트랜잭션을 보내기 위해선 테스트넷 토큰이 필요합니다. 지갑 내의 FAUCET 탭에서 faucet을 요청할 수 있습니다.

:::warning
니모닉이 유출될 경우, 암호화폐 자산을 모두 잃을 수 있습니다. 아래의 예제를 실행시킬 때에는 테스트용 혹은 개발용 니모닉을 사용해주세요.
:::

```jsx live
function sendTransaction() {
  const [mnemonic, setMnemonic] = React.useState('');
  const [account, setAccount] = React.useState(null);
  const [signature, setSignature] = React.useState(null);
  const [signedTx, setSignedTx] = React.useState(null);
  const [txResult, setTxResult] = React.useState(null);

  const getNearTx = async () => {
    try {
      /* 1. get Account */
      const account = Near.getAccount({
        mnemonic,
        path: { type: CHAIN.NEAR, account: 0, index: 1 },
      });
      setAccount(account.address);

      /* 2. make raw transaction */
      const provider = new providers.JsonRpcProvider({
        url: 'https://rpc.testnet.near.org',
      });
      const helperURL = `https://near-utils.welldonestudio.io/accounts?address=${account.address}`;
      const accountIds = await fetch(helperURL).then((res) => res.json());

      // only for testnet
      const testnetAccountIds = accountIds.filter((el) => {
        const splitAccount = el.split('.');
        return splitAccount[1] === 'testnet';
      });

      const signerId = testnetAccountIds[Object.keys(testnetAccountIds).length - 1];
      const { publicKey } = account;

      const param = {
        request_type: 'view_access_key',
        finality: 'final',
        account_id: signerId,
        public_key: publicKey,
      };

      const accessKey = await provider.query(param);
      const actions = [transactions.transfer(new BN(10))];
      const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);

      const transaction = transactions.createTransaction(
        testnetAccountIds[0],
        utils.PublicKey.fromString(publicKey),
        testnetAccountIds[0],
        Number(accessKey.nonce) + 1,
        actions,
        recentBlockHash,
      );

      const bytes = transaction.encode();

      return {
        serializedTx: `0x${Buffer.from(bytes).toString('hex')}`,
        unSignedTx: transaction,
      };
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getNearSignature = (serializedTx) => {
    try {
      const { signature } = Near.signTx(
        {
          mnemonic,
          path: { type: CHAIN.NEAR, account: 0, index: 1 },
        },
        serializedTx,
      );
      setSignature(signature);
      return signature;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const createNearSignedTx = ({ unSignedTx, signature }) => {
    try {
      const unSignedbytes = unSignedTx.encode();
      const unSignedSerializedTx = Buffer.from(unSignedbytes).toString('base64');
      // export Transaction as NearTransaction
      const transaction = NearTransaction.decode(Buffer.from(unSignedSerializedTx, 'base64'));

      const signedTx = new SignedTransaction({
        transaction,
        signature: new Signature({
          keyType: transaction.publicKey.keyType,
          data: Buffer.from(signature.replace('0x', ''), 'hex'),
        }),
      });

      const bytes = signedTx.encode();
      const serializedTx = Buffer.from(bytes).toString('base64');

      return serializedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getNearSignedTx = async () => {
    try {
      /* 1. get rawTransaction */
      const { serializedTx, unSignedTx } = await getNearTx();
      /* 2. get signature */
      const nearSignature = getNearSignature(serializedTx);
      /* 3. create singedTx by combining rawTransaction and signature */
      const nearSignedTx = createNearSignedTx({
        unSignedTx,
        signature: nearSignature,
      });
      setSignedTx(nearSignedTx);
      return nearSignedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const sendNearTransaction = async (nearSignedTx) => {
    try {
      const rpcUrl = 'https://rpc.testnet.near.org';

      const provider = new providers.JsonRpcProvider({ url: rpcUrl });

      const txResult = await provider.sendJsonRpc('broadcast_tx_commit', [nearSignedTx]);

      return txResult;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };

  const handleClick = async () => {
    account && setAccount(null);
    signature && setSignature(null);
    signedTx && setSignedTx(null);
    txResult && setTxResult(null);
    const nearSignedTx = await getNearSignedTx();
    const nearTxResult = await sendNearTransaction(nearSignedTx);
    setTxResult(nearTxResult);
  };

  const handleChange = (e) => {
    setMnemonic(e.target.value);

    account && setAccount(null);
    signature && setSignature(null);
    signedTx && setSignedTx(null);
    txResult && setTxResult(null);
  };

  return (
    <>
      <Input
        value={mnemonic}
        onChange={handleChange}
        placeholder="Your test mnemonic"
        style={{ marginRight: '8px' }}
      />
      <Button onClick={handleClick} type="button">
        send transaction
      </Button>
      {account && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Account:</b> {account}
        </ResultTooltip>
      )}
      {signature && (
        <ResultTooltip style={{ background: '#F4F4F4', color: 'black' }}>
          <b>Signature:</b> {signature}
        </ResultTooltip>
      )}
      {signedTx && (
        <ResultTooltip style={{ background: '#3B48DF' }}>
          <b>Signed Transaction:</b> {signedTx}
        </ResultTooltip>
      )}
      {txResult && (
        <ResultTooltip style={{ background: '#FFD400', color: 'black' }}>
          <b>Transaction Hash:</b> {txResult.transaction.hash}
        </ResultTooltip>
      )}
    </>
  );
}
```
