---
keywords: [aptos sendTransaction, dapp:sendTransaction, aptos, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in Aptos
---

# Aptos

:::tip Prerequisites
Aptos 파트에서는 [aptos](https://www.npmjs.com/package/aptos)를 추가로 이용하여 실습을 진행합니다. 해당 패키지를 미리 설치해주세요.
:::

## Signed transaction 생성하기

signed transaction을 만들기 위해선 크게 세 가지 절차를 거쳐야 합니다.

1. raw transaction 생성
2. raw transaction에 대한 signature 생성
3. raw transaction과 signature을 합쳐 signed transaction 생성

### 1. getAptosTx

signed transaction을 생성하기 위해서는 raw transaction과 signature가 필요합니다. kms를 통해 signature를 얻기 위해선 raw transaction이 필요하기 때문에 먼저 raw transaction을 생성하기 위한 `getAptosTx` 함수를 만듭니다.

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

다음으로 transaction에 대한 signature를 얻기 위해, serializedTx를 인자로 받아서 signature를 생성하는 `getAptosSignature` 함수를 만듭니다.

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

마지막으로 위에서 생성한 `serializedTx`와 `signature`, 그리고 계정 생성을 위한 `mnemonic` 통해 signed transaction을 리턴해주는 `createAptosSignedTx` 함수를 만듭니다.

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

최종적으로 위에서 만든 함수, `getAptosTx`, `getAptosSignature`, `createAptosSignedTx` 를 이용해 signed transaction을 리턴하는 `getAptosSignedTx`를 만들 수 있습니다.

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

## Signed transaction 전송하기

Signed transaction을 생성했다면, 그것을 이용하여 트랜젝션을 전송할 수 있습니다.

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

:::warning
니모닉이 유출될 경우, 암호화폐 자산을 모두 잃을 수 있습니다. 아래의 예제를 실행시킬 때에는 테스트용 혹은 개발용 니모닉을 사용해주세요.
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
      console.log('unSignedTx', unSignedTx);
      console.log('aptosSignature', aptosSignature);
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
    console.log('aptosTxResult', aptosTxResult);

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
