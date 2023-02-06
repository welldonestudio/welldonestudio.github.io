---
keywords: [near sendTransaction, dapp:sendTransaction, near, kms, '@dsrv/kms']
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
The NEAR part carries out the practice using [naer-api-js](https://near.github.io/near-api-js/). Please prepare by installing the package.
:::

## Create Signed transaction

For a signed transaction, there are three essential steps.

1. Create a raw transaction first.
2. Make a raw transaction signature.
3. Convert a raw transaction into a signed transaction by adding a signature.

### 1. getNearTx

Transaction and signature are needed. We first develop a `getNearTx` function to generate raw transaction because it is necessary to have a raw transaction to receive a signature via kms.

:::note
You can specify an index value starting at 1 when calling the getAccount function because NEAR starts with account index 1.
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

We then develop a method called `getNearSignature` that produces a signature by using serializedTx as a factor in order to gain a signature for the transaction.

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

Finally, we develop the `createNearSignedTx` function, which takes an `unsignedTx` and a `signature` generated earlier and returns a signed transaction.

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

Finally, you can construct a `getNearSignedTx` function that returns a signed transaction by combining the functions you made before, `getNearTx`, `getNearSignature`, and `createNearSignedTx`.

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

## Send Signed transaction

You can transmit the transaction using a signed transaction you've prepared.

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

To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. You can request faucet through the FAUCET tab in the wallet.

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
