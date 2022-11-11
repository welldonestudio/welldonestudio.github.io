---
keywords: [solana sendTransaction, dapp:sendTransaction, solana, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in solana
---

# Solana

:::tip Prerequisites
The Solana part carries out the practice using [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/). Please prepare by installing the package.
:::

## Create Signed transaction

For a signed transaction, there are three essential steps.

1. Create a raw transaction first.
2. Make a raw transaction signature.
3. Convert a raw transaction into a signed transaction by adding a signature.

### 1. getSolanaTx

Transaction and signature are needed. We first develop a `getSolanaTx` function to generate raw transaction because it is necessary to have a raw transaction to receive a signature via kms.

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

We then develop a method called `getSolanaSignature` that produces a signature by using serializedTx as a factor in order to gain a signature for the transaction.

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

Finally, we develop the `createSolanaSignedTx` function, which takes an `unsignedTx` and a `signature` generated earlier and returns a signed transaction.

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

Finally, you can construct a `getSolanaSignedTx` function that returns a signed transaction by combining the functions you made before, `getSolanaTx`, `getSolanaSignature`, and `createSolanaSignedTx`.

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

## Send Signed transaction

You can transmit the transaction using a signed transaction you've prepared.

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

You can send the transaction directly using the example below. The transaction needs to be sent through the faucet. Through the [following URL](https://solfaucet.com/), you can access the Solana devnet faucet.

:::warning
The loss of all cryptocurrency holdings is possible if mnemonic is revealed. To execute the following example, use a test or development mnemonic.

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
