---
keywords: [solana sendTransaction, dapp:sendTransaction, solana, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in solana
---

# Solana

:::tip Prerequisites
solana 파트에서는 [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/)를 추가로 이용하여 실습을 진행합니다. 해당 패키지를 미리 설치해주세요.
:::

## Signed transaction 생성하기

signed transaction을 만들기 위해선 크게 세 가지 절차를 거쳐야 합니다.

1. raw transaction 생성
2. raw transaction에 대한 signature 생성
3. raw transaction과 signature을 합쳐 signed transaction 생성

### 1. getSolanaTx

signed transaction을 생성하기 위해서는 raw transaction과 signature가 필요합니다. kms를 통해 signature를 얻기 위해선 raw transaction이 필요하기 때문에 먼저 raw transaction을 생성하기 위한 `getSolanaTx` 함수를 만듭니다.

```typescript title="getSolanaTx.ts"
import { Solana } from '@dsrv/kms';
import { Account, CHAIN } from '@dsrv/kms/src/types';
import {
  Connection,
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
  Transaction,
  Keypair,
} from '@solana/web3.js';
import { base58 } from 'ethers/lib/utils';

interface RawTransaction {
  unSignedTx: Transaction;
  serializedTx: string;
}

export const getSolanaTx = async (mnemonic: string): Promise<RawTransaction> => {
  /* 1. get signer */
  const privateKey = Solana.getPrivateKey({
    mnemonic,
    path: { type: CHAIN.SOLANA, account: 0, index: 0 },
  });
  const signer = Keypair.fromSecretKey(base58.decode(privateKey));

  /* 2. make raw transaction */
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed'); //allthatnode
  const toAccountPubKey = new PublicKey('BnBydTNPrTwDz4ZSkhJiGiSZwakPQFVeN8rgdAS2Yc7F'); //allthatnode
  const RecentBlockHash = await connection.getLatestBlockhash();

  const transaction = new Transaction({
    /* new blockHash */
    blockhash: RecentBlockHash.blockhash,
    lastValidBlockHeight: RecentBlockHash.lastValidBlockHeight,
    feePayer: signer.publicKey,
  });
  transaction.add(
    SystemProgram.transfer({
      fromPubkey: signer.publicKey,
      lamports: Number(0.1) * LAMPORTS_PER_SOL,
      toPubkey: toAccountPubKey,
    }),
  );

  return {
    serializedTx: `0x${transaction.compileMessage().serialize().toString('hex')}`,
    unSignedTx: transaction,
  };
};
```

### 2. getSolanaSignature

다음으로 transaction에 대한 signature를 얻기 위해, serializedTx를 인자로 받아서 signature를 생성하는 `getSolanaSignature` 함수를 만듭니다.

```typescript title="getSolanaSignature.ts"
import { CHAIN } from '@dsrv/kms/lib/types';
import { Solana } from '@dsrv/kms/lib/blockchains/solana';

export const getSolanaSignature = (serializedTx: string): string => {
  const { signature } = Solana.signTx(
    {
      mnemonic,
      path: { type: CHAIN.SOLANA, account: 0, index: 0 },
    },
    serializedTx,
  );

  return signature;
};
```

### 3. createSolanaSignedTx

마지막으로 위에서 생성한 `unSignedTx`와 `signature`를 통해 signed transaction을 리턴해주는 `createSolanaSignedTx` 함수를 만듭니다.

```typescript title="createSolanaSignedTx.ts"
import { Transaction } from '@solana/web3.js';

interface createSolanaSignedTxProps {
  unSignedTx: UnsignedTransaction;
  signature: string;
}

/* create singedTx by combining tx and signature */
export const createSolanaSignedTx = ({
  unSignedTx,
  signature,
}: createSolanaSignedTxProps): string => {
  const bufferSig = Buffer.from(signature.replace('0x', ''), 'hex');
  unSignedTx.addSignature(unSignedTx.feePayer, bufferSig);
  const serializedTx = unSignedTx.serialize().toString('hex');
  return serializedTx;
};
```

최종적으로 위에서 만든 함수, `getSolanaTx`, `getSolanaSignature`, `createSolanaSignedTx` 를 이용해 signed transaction을 리턴하는 `getSolanaSignedTx`를 만들 수 있습니다.

```typescript title="getSolanaSignedTx.ts"
export const getSolanaSignedTx = async (mnemonic: string) => {
  /* 1. get rawTransaction */
  const { serializedTx, unSignedTx } = await getSolanaTx(mnemonic);
  /* 2. get signature */
  const solanaSignature = getSolanaSignature(serializedTx);
  /* 3. create singedTx by combining rawTransaction and signature */
  const solanaSignedTx = createSolanaSignedTx({
    unSignedTx,
    signature: solanaSignature,
  });

  return solanaSignedTx;
};
```

## Signed transaction 전송하기

Signed transaction을 생성했다면, 그것을 이용하여 트랜젝션을 전송할 수 있습니다.

```typescript title="sendSolanaTransaction.ts"
import { Transaction } from '@solana/web3.js';

export const sendSolanaTransaction = async (serializedTx: string): Promise<Transaction> => {
  const transaction = Transaction.from(Buffer.from(serializedTx, 'hex'));
  const rpcUrl = 'https://api.devnet.solana.com';

  const result = await fetch(rpcUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'sendTransaction',
      params: [
        transaction.serialize().toString('base64'),
        { preflightCommitment: 'confirmed', encoding: 'base64' },
      ],
      id: 999,
    }),
  });
  const resultJson = await result.json();

  return resultJson.result;
};
```

```typescript title="main.ts"
const mnemonic = 'sample mnemonic';
const main = async () => {
  const solanaSignedTx = await getSolanaSignedTx(mnemonic);
  const solanaTxResult = await sendSolanaTransaction(solanaSignedTx);
  console.log('solana Tx Result : ', solanaTxResult);
};
main();
```

## Examples

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 트랜잭션을 보내기 위해선 faucet이 필요합니다. [다음 링크](https://solfaucet.com/)를 통해 Solana devnet의 faucet을 받을 수 있습니다.

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

  const getSolanaTx = async () => {
    try {
      /* 1. get signer */
      const privateKey = Solana.getPrivateKey({
        mnemonic,
        path: { type: CHAIN.SOLANA, account: 0, index: 0 },
      });

      const signer = Keypair.fromSecretKey(base58.decode(privateKey));

      setAccount(privateKey);

      /* 2. make raw transaction */
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed'); //allthatnode
      const toAccountPubKey = new PublicKey('BnBydTNPrTwDz4ZSkhJiGiSZwakPQFVeN8rgdAS2Yc7F'); //allthatnode
      const RecentBlockHash = await connection.getLatestBlockhash();

      const transaction = new Transaction({
        /* new blockHash */
        blockhash: RecentBlockHash.blockhash,
        lastValidBlockHeight: RecentBlockHash.lastValidBlockHeight,
        feePayer: signer.publicKey,
      });
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: signer.publicKey,
          lamports: Number(0.1) * LAMPORTS_PER_SOL,
          toPubkey: toAccountPubKey,
        }),
      );

      return {
        serializedTx: `0x${transaction.compileMessage().serialize().toString('hex')}`,
        unSignedTx: transaction,
      };
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getSolanaSignature = (serializedTx) => {
    try {
      const { signature } = Solana.signTx(
        {
          mnemonic,
          path: { type: CHAIN.SOLANA, account: 0, index: 0 },
        },
        serializedTx,
      );
      setSignature(signature);
      return signature;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const createSolanaSignedTx = ({ unSignedTx, signature }) => {
    try {
      const bufferSig = Buffer.from(signature.replace('0x', ''), 'hex');
      unSignedTx.addSignature(unSignedTx.feePayer, bufferSig);
      const serializedTx = unSignedTx.serialize().toString('hex');
      return serializedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getSolanaSignedTx = async () => {
    try {
      /* 1. get rawTransaction */
      const { serializedTx, unSignedTx } = await getSolanaTx(mnemonic);
      /* 2. get signature */
      const solanaSignature = getSolanaSignature(serializedTx);
      /* 3. create singedTx by combining rawTransaction and signature */
      const solanaSignedTx = createSolanaSignedTx({
        unSignedTx,
        signature: solanaSignature,
      });
      setSignedTx(solanaSignedTx);
      return solanaSignedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const sendSolanaTransaction = async (solanaSignedTx) => {
    try {
      const transaction = Transaction.from(Buffer.from(solanaSignedTx, 'hex'));
      const rpcUrl = 'https://api.devnet.solana.com';

      const result = await fetch(rpcUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'sendTransaction',
          params: [
            transaction.serialize().toString('base64'),
            { preflightCommitment: 'confirmed', encoding: 'base64' },
          ],
          id: 999,
        }),
      });
      const resultJson = await result.json();

      return resultJson.result;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };

  const handleClick = async () => {
    account && setAccount(null);
    signature && setSignature(null);
    signedTx && setSignedTx(null);
    txResult && setTxResult(null);
    const solanaSignedTx = await getSolanaSignedTx();
    const solanaTxResult = await sendSolanaTransaction(solanaSignedTx);
    setTxResult(solanaTxResult);
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
          <b>Private Key:</b> {account}
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
          <b>Transaction Hash:</b> {txResult}
        </ResultTooltip>
      )}
    </>
  );
}
```
