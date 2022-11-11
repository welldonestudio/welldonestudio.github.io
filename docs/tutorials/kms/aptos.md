---
keywords: [aptos sendTransaction, dapp:sendTransaction, aptos, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in Aptos
---

# Aptos

:::tip Prerequisites
The Aptos part carries out the practice using [aptos](https://www.npmjs.com/package/aptos). Please prepare by installing the package.
:::

## Create Signed transaction

For a signed transaction, there are three essential steps.

1. Create a raw transaction first.
2. Make a raw transaction signature.
3. Convert a raw transaction into a signed transaction by adding a signature.

### 1. getAptosTx

Transaction and signature are needed. We first develop a `getAptosTx` function to generate raw transaction because it is necessary to have a raw transaction to receive a signature via kms.

```typescript title="getAptosTx.ts"
import { AptosClient, TxnBuilderTypes, BCS } from 'aptos';
import { Account, CHAIN } from '@dsrv/kms/lib/types';
import { Aptos } from '@dsrv/kms/lib/blockchains/aptos';
import { sha3_256 } from 'js-sha3';

interface RawTransaction {
  unSignedTx: TxnBuilderTypes.RawTransaction;
  serializedTx: string;
}
const aptos = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');

const getAccountExists = async (address: string) => {
  try {
    await aptos.getAccountResources(address);
  } catch (error) {
    const chainId = await aptos.getChainId();
    const url = `https://faucet.${
      chainId === 2 ? 'testnet' : 'devnet'
    }.aptoslabs.com/mint?amount=0&address=${address.replace('0x', '')}`;
    // eslint-disable-next-line no-undef
    await fetch(url, { method: 'POST' });
    await aptos.getAccountResources(address);
  }
};

export const getAptosTx = async (mnemonic: string) => {
  const MAX_GAS_AMOUNT = 150;
  const GAS_UNIT_PRICE = 100;
  const amount = 100;

  /* 1. get Account */
  const account = Aptos.getAccount({
    mnemonic,
    path: { type: CHAIN.APTOS, account: 0, index: 0 },
  });

  await getAccountExists(account.address);
  const { sequence_number: sequenceNumber } = await aptos.getAccount(account.address);

  /* 2. make raw transaction */
  const chainId = await aptos.getChainId();
  const expirationTimestampSecs = Math.floor(Date.now() / 1000) + 300;

  const token = new TxnBuilderTypes.TypeTagStruct(
    TxnBuilderTypes.StructTag.fromString('0x1::aptos_coin::AptosCoin'),
  );

  const entryFunctionPayload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
    TxnBuilderTypes.EntryFunction.natural(
      '0x1::coin',
      'transfer',
      [token],
      [
        BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(account.address)),
        BCS.bcsSerializeUint64(amount),
      ],
    ),
  );

  const rawTxn = new TxnBuilderTypes.RawTransaction(
    TxnBuilderTypes.AccountAddress.fromHex(account.address),
    BigInt(sequenceNumber),
    entryFunctionPayload,
    BigInt(MAX_GAS_AMOUNT),
    BigInt(GAS_UNIT_PRICE),
    BigInt(expirationTimestampSecs),
    new TxnBuilderTypes.ChainId(chainId),
  );

  const rawTxnWithSalt = `0x${Buffer.concat([
    Buffer.from(sha3_256(Buffer.from('APTOS::RawTransaction', 'ascii')), 'hex'),
    Buffer.from(BCS.bcsToBytes(rawTxn)),
  ]).toString('hex')}`;

  return {
    serializedTx: rawTxnWithSalt,
    unSignedTx: rawTxn,
  };
};
```

### 2. getAptosSignature

We then develop a method called `getAptosSignature` that produces a signature by using serializedTx as a factor in order to gain a signature for the transaction.

```typescript title="getAptosSignature.ts"
import { CHAIN } from '@dsrv/kms/lib/types';
import { Aptos } from '@dsrv/kms/lib/blockchains/aptos';

export const getAptosSignature = (serializedTx: string): string => {
  const { signature } = Aptos.signTx(
    {
      mnemonic,
      path: { type: CHAIN.APTOS, account: 0, index: 0 },
    },
    serializedTx,
  );

  return signature;
};
```

### 3. createAptosSignedTx

Finally, we develop the `createAptosSignedTx` function, which takes an `serializedTx`, `unsignedTx` and a `signature` generated earlier and returns a signed transaction.

```typescript title="createAptosSignedTx.ts"
import { TxnBuilderTypes, BCS } from 'aptos';
import { Aptos } from '@dsrv/kms/lib/blockchains/aptos';
import { CHAIN } from '@dsrv/kms/lib/types';

interface createAptosSignedTxProps {
  serializedTx: string;
  signature: string;
  mnemonic: string;
}

/* create singedTx by combining tx and signature */
export const createAptosSignedTx = ({
  serializedTx,
  signature,
  mnemonic,
}: createAptosSignedTxProps): string => {
  const account = Aptos.getAccount({
    mnemonic,
    path: { type: CHAIN.APTOS, account: 0, index: 0 },
  });
  const rawTxn = TxnBuilderTypes.RawTransaction.deserialize(
    new BCS.Deserializer(Buffer.from(serializedTx.replace('0x', '').slice(64), 'hex')),
  );

  const signed = new TxnBuilderTypes.SignedTransaction(
    rawTxn,
    new TxnBuilderTypes.TransactionAuthenticatorEd25519(
      new TxnBuilderTypes.Ed25519PublicKey(Buffer.from(account.publicKey.replace('0x', ''), 'hex')),
      new TxnBuilderTypes.Ed25519Signature(Buffer.from(signature.replace('0x', ''), 'hex')),
    ),
  );

  return signed;
};
```

Finally, you can construct a `getAptosSignedTx` function that returns a signed transaction by combining the functions you made before, `getAptosTx`, `getAptosSignature`, and `createAptosSignedTx`.

```typescript title="getAptosSignedTx.ts"
export const getAptosSignedTx = async (mnemonic: string) => {
  /* 1. get rawTransaction */
  const { serializedTx, unSignedTx } = await getAptosTx(mnemonic);
  /* 2. get signature */
  const aptosSignature = getAptosSignature(serializedTx);
  /* 3. create singedTx by combining rawTransaction and signature */
  const aptosSignedTx = createAptosSignedTx({
    unSignedTx,
    signature: aptosSignature,
    mnemonic,
  });

  return aptosSignedTx;
};
```

## Send Signed transaction

You can transmit the transaction using a signed transaction you've prepared.

```typescript title="sendAptosTransaction.ts"
import { TxnBuilderTypes, BCS } from 'aptos';

export const sendAptosTransaction = async (signedTx: TxnBuilderTypes.SignedTransaction) => {
  const rpcUrl = 'https://fullnode.devnet.aptoslabs.com/v1';

  const resp = await fetch(`${rpcUrl}/transactions`, {
    method: 'POST',
    headers: {
      // https://github.com/aptos-labs/aptos-core/blob/e7d5f952afe3afcf5d1415b67e167df6d49019bf/ecosystem/typescript/sdk/src/aptos_client.ts#L327
      'Content-Type': 'application/x.aptos.signed_transaction+bcs',
    },
    body: BCS.bcsToBytes(signedTx),
  });

  const result = await resp.json();

  return result;
};
```

```typescript title="main.ts"
const mnemonic = 'sample mnemonic';
const main = async () => {
  const aptosSignedTx = await getAptosSignedTx(mnemonic);
  const aptosTxResult = await sendAptosTransaction(aptosSignedTx);
  console.log('Aptos Tx Result : ', aptosTxResult);
};
main();
```

## Examples

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 트랜잭션을 보내기 위해선 faucet이 필요합니다. [다음 링크](https://aptoslabs.com/testnet-faucet)를 통해 Aptos 테스트넷의 faucet을 받을 수 있습니다.

You can send the transaction directly using the example below. The transaction needs to be sent through the faucet. Through the [following URL](https://aptoslabs.com/testnet-faucet), you can access the Aptos testnet faucet.

:::warning
The loss of all cryptocurrency holdings is possible if mnemonic is revealed. To execute the following example, use a test or development mnemonic.

:::

```jsx live
function sendTransaction() {
  const [mnemonic, setMnemonic] = React.useState('');
  const [account, setAccount] = React.useState(null);
  const [signature, setSignature] = React.useState(null);
  const [txResult, setTxResult] = React.useState(null);

  const aptos = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');

  const getAccountExists = async (address) => {
    try {
      await aptos.getAccountResources(address);
    } catch (error) {
      const chainId = await aptos.getChainId();
      const url = `https://faucet.${
        chainId === 2 ? 'testnet' : 'devnet'
      }.aptoslabs.com/mint?amount=0&address=${address.replace('0x', '')}`;
      // eslint-disable-next-line no-undef
      await fetch(url, { method: 'POST' });
      await aptos.getAccountResources(address);
    }
  };

  const getAptosTx = async () => {
    try {
      const MAX_GAS_AMOUNT = 150;
      const GAS_UNIT_PRICE = 100;
      const amount = 100;

      /* 1. get Account */
      const account = Aptos.getAccount({
        mnemonic,
        path: { type: CHAIN.APTOS, account: 0, index: 0 },
      });
      setAccount(account.address);
      await getAccountExists(account.address);
      const { sequence_number: sequenceNumber } = await aptos.getAccount(account.address);

      /* 2. make raw transaction */
      const chainId = await aptos.getChainId();
      const expirationTimestampSecs = Math.floor(Date.now() / 1000) + 300;

      const token = new TxnBuilderTypes.TypeTagStruct(
        TxnBuilderTypes.StructTag.fromString('0x1::aptos_coin::AptosCoin'),
      );

      const entryFunctionPayload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
        TxnBuilderTypes.EntryFunction.natural(
          '0x1::coin',
          'transfer',
          [token],
          [
            BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(account.address)),
            BCS.bcsSerializeUint64(amount),
          ],
        ),
      );

      const rawTxn = new TxnBuilderTypes.RawTransaction(
        TxnBuilderTypes.AccountAddress.fromHex(account.address),
        BigInt(sequenceNumber),
        entryFunctionPayload,
        BigInt(MAX_GAS_AMOUNT),
        BigInt(GAS_UNIT_PRICE),
        BigInt(expirationTimestampSecs),
        new TxnBuilderTypes.ChainId(chainId),
      );

      const rawTxnWithSalt = `0x${Buffer.concat([
        Buffer.from(sha3_256(Buffer.from('APTOS::RawTransaction', 'ascii')), 'hex'),
        Buffer.from(BCS.bcsToBytes(rawTxn)),
      ]).toString('hex')}`;

      return {
        serializedTx: rawTxnWithSalt,
        unSignedTx: rawTxn,
      };
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getAptosSignature = (serializedTx) => {
    try {
      const { signature } = Aptos.signTx(
        {
          mnemonic,
          path: { type: CHAIN.APTOS, account: 0, index: 0 },
        },
        serializedTx,
      );
      setSignature(signature);
      return signature;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const createAptosSignedTx = ({ serializedTx, signature }) => {
    try {
      const account = Aptos.getAccount({
        mnemonic,
        path: { type: CHAIN.APTOS, account: 0, index: 0 },
      });
      const rawTxn = TxnBuilderTypes.RawTransaction.deserialize(
        new BCS.Deserializer(Buffer.from(serializedTx.replace('0x', '').slice(64), 'hex')),
      );

      const signed = new TxnBuilderTypes.SignedTransaction(
        rawTxn,
        new TxnBuilderTypes.TransactionAuthenticatorEd25519(
          new TxnBuilderTypes.Ed25519PublicKey(
            Buffer.from(account.publicKey.replace('0x', ''), 'hex'),
          ),
          new TxnBuilderTypes.Ed25519Signature(Buffer.from(signature.replace('0x', ''), 'hex')),
        ),
      );

      return signed;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getAptosSignedTx = async () => {
    try {
      /* 1. get rawTransaction */
      const { serializedTx, unSignedTx } = await getAptosTx();
      /* 2. get signature */
      const aptosSignature = getAptosSignature(serializedTx);
      /* 3. create singedTx by combining rawTransaction and signature */
      const aptosSignedTx = createAptosSignedTx({
        serializedTx,
        signature: aptosSignature,
      });
      return aptosSignedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const sendAptosTransaction = async (aptosSignedTx) => {
    try {
      const rpcUrl = 'https://fullnode.devnet.aptoslabs.com/v1';

      const resp = await fetch(`${rpcUrl}/transactions`, {
        method: 'POST',
        headers: {
          // https://github.com/aptos-labs/aptos-core/blob/e7d5f952afe3afcf5d1415b67e167df6d49019bf/ecosystem/typescript/sdk/src/aptos_client.ts#L327
          'Content-Type': 'application/x.aptos.signed_transaction+bcs',
        },
        body: BCS.bcsToBytes(aptosSignedTx),
      });

      const result = await resp.json();

      return result;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };

  const handleClick = async () => {
    account && setAccount(null);
    signature && setSignature(null);
    txResult && setTxResult(null);
    const aptosSignedTx = await getAptosSignedTx();
    const aptosTxResult = await sendAptosTransaction(aptosSignedTx);

    setTxResult(aptosTxResult);
  };

  const handleChange = (e) => {
    setMnemonic(e.target.value);

    account && setAccount(null);
    signature && setSignature(null);
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
      {txResult && (
        <ResultTooltip style={{ background: '#FFD400', color: 'black' }}>
          <b>Transaction Hash:</b> {txResult.hash}
        </ResultTooltip>
      )}
    </>
  );
}
```
