---
keywords: [cosmos sendTransaction, dapp:sendTransaction, cosmos, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in cosmos
---

# Cosmos

:::tip Prerequisites
Cosmos 파트에서는 [@cosmjs](https://cosmos.github.io/cosmjs/)를 추가로 이용하여 실습을 진행합니다. 해당 패키지를 미리 설치해주세요.
:::

## Signed transaction 생성하기

signed transaction을 만들기 위해선 크게 세 가지 절차를 거쳐야 합니다.

1. raw transaction 생성
2. raw transaction에 대한 signature 생성
3. raw transaction과 signature을 합쳐 signed transaction 생성

### 1. getCosmosTx

signed transaction을 생성하기 위해서는 raw transaction과 signature가 필요합니다. kms를 통해 signature를 얻기 위해선 raw transaction이 필요하기 때문에 먼저 raw transaction을 생성하기 위한 `getCosmosTx` 함수를 만듭니다.

```typescript title="getCosmosTx.ts"
import { Account, CHAIN } from '@dsrv/kms/lib/types';
import { Cosmos } from '@dsrv/kms/lib/blockchains/cosmos';
import {
  Registry,
  makeAuthInfoBytes,
  makeSignDoc,
  encodePubkey,
  makeSignBytes,
  DirectSecp256k1HdWallet,
  TxBodyEncodeObject,
} from '@cosmjs/proto-signing';
import { encodeSecp256k1Pubkey } from '@cosmjs/amino';
import { StargateClient, defaultRegistryTypes } from '@cosmjs/stargate';
import { Int53 } from '@cosmjs/math';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

interface RawTransaction {
  unSignedTx: SignDoc;
  serializedTx: string;
}

const getTxBodyBytes = (transaction) => {
  const registry = new Registry(defaultRegistryTypes);

  const txBodyEncodeObject: TxBodyEncodeObject = {
    typeUrl: '/cosmos.tx.v1beta1.TxBody',
    value: {
      messages: transaction.msgs,
      memo: transaction.memo,
    },
  };

  const txBodyBytes = registry.encode(txBodyEncodeObject);
  return txBodyBytes;
};

const getAuthInfoBytes = (transaction, pubkey) => {
  const gasLimit = Int53.fromString(transaction.fee.gas).toNumber();
  const authInfoBytes = makeAuthInfoBytes(
    [
      {
        pubkey: encodePubkey(encodeSecp256k1Pubkey(pubkey)),
        sequence: transaction.signerData.sequence,
      },
    ],
    transaction.fee.amount,
    gasLimit,
    undefined,
    undefined,
    // 1,
  );

  return authInfoBytes;
};

export const getCosmosTx = async (mnemonic: string): Promise<RawTransaction> => {
  /* 1. get Account */
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
  const [{ address, pubkey }] = await wallet.getAccounts();

  /* 2. make raw transaction */
  const rpcUrl = 'https://cosmos-testnet-rpc.allthatnode.com:26657';
  const client = await StargateClient.connect(rpcUrl);
  const sequence = await client.getSequence(address);
  const chainId = await client.getChainId();

  const transaction = {
    signerData: {
      accountNumber: sequence.accountNumber,
      sequence: sequence.sequence,
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
    memo: 'dsrv/kms',
    msgs: [
      {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: address,
          toAddress: RECEIVER_ADDRESS.COSMOS,
          amount: [{ denom: 'uatom', amount: '10000' }],
        },
      },
    ],
    sequence: sequence.sequence,
  };

  /* create signDoc */
  const txBodyBytes = getTxBodyBytes(transaction);
  const authInfoBytes = getAuthInfoBytes(transaction, pubkey);

  const signDoc = makeSignDoc(
    txBodyBytes,
    authInfoBytes,
    transaction.signerData.chainId,
    Number(transaction.signerData.accountNumber),
  );

  /* serialized singDoc */

  const uint8SignDoc = makeSignBytes(signDoc);
  const serializedTx = `0x${Buffer.from(uint8SignDoc).toString('hex')}`;

  return {
    unSignedTx: signDoc,
    serializedTx,
  };
};
```

### 2. getCosmosSignature

다음으로 transaction에 대한 signature를 얻기 위해, serializedTx를 인자로 받아서 signature를 생성하는 `getCosmosSignature` 함수를 만듭니다.

```typescript title="getCosmosSignature.ts"
import { CHAIN } from '@dsrv/kms/lib/types';
import { Cosmos } from '@dsrv/kms/lib/blockchains/cosmos';

export const getCosmosSignature = (serializedTx: string): string => {
  const { signature } = Cosmos.signTx(
    {
      mnemonic,
      path: { type: CHAIN.COSMOS, account: 0, index: 0 },
    },
    serializedTx,
  );

  return signature;
};
```

### 3. createCosmosSignedTx

마지막으로 위에서 생성한 `unSignedTx`와 `signature`를 통해 signed transaction을 리턴해주는 `createCosmosSignedTx` 함수를 만듭니다.

```typescript title="createCosmosSignedTx.ts"
import { TxRaw, SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

interface createCosmosSignedTxProps {
  unSignedTx: SignDoc;
  signature: string;
}

/* create singedTx by combining tx and signature */
export const createCosmosSignedTx = ({
  unSignedTx,
  signature,
}: createCosmosSignedTxProps): string => {
  const txRaw = TxRaw.fromPartial({
    bodyBytes: unSignedTx.bodyBytes,
    authInfoBytes: unSignedTx.authInfoBytes,
    signatures: [new Uint8Array(Buffer.from(signature.replace('0x', ''), 'hex'))],
  });

  const txByte = TxRaw.encode(txRaw).finish();
  const signedTx = `0x${Buffer.from(txByte).toString('hex')}`;

  return signedTx;
};
```

최종적으로 위에서 만든 함수, `getCosmosTx`, `getCosmosSignature`, `createCosmosSignedTx` 를 이용해 signed transaction을 리턴하는 `getCosmosSignedTx`를 만들 수 있습니다.

```typescript title="getCosmosSignedTx.ts"
export const getCosmosSignedTx = async (mnemonic: string) => {
  /* 1. get rawTransaction */
  const { serializedTx, unSignedTx } = await getCosmosTx(mnemonic);
  /* 2. get signature */
  const cosmosSignature = getCosmosSignature(serializedTx);
  /* 3. create singedTx by combining rawTransaction and signature */
  const cosmosSignedTx = createCosmosSignedTx({
    unSignedTx,
    signature: cosmosSignature,
  });

  return cosmosSignedTx;
};
```

## Signed transaction 전송하기

Signed transaction을 생성했다면, 그것을 이용하여 트랜젝션을 전송할 수 있습니다.

```typescript title="sendCosmosTransaction.ts"
import { StargateClient, DeliverTxResponse } from '@cosmjs/stargate';

export const sendCosmosTransaction = async (serializedTx: string): Promise<DeliverTxResponse> => {
  const rpcUrl = 'https://cosmos-testnet-rpc.allthatnode.com:26657';
  const client = await StargateClient.connect(rpcUrl);
  const txResult = await client.broadcastTx(
    Uint8Array.from(Buffer.from(serializedTx.replace('0x', ''), 'hex')),
  );
  return txResult;
};
```

```typescript title="main.ts"
const mnemonic = 'sample mnemonic';
const main = async () => {
  const cosmosSignedTx = await getCosmosSignedTx(mnemonic);
  const cosmosTxResult = await sendCosmosTransaction(cosmosSignedTx);
  console.log('Cosmos Tx Result : ', cosmosTxResult);
};
main();
```

## Examples

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 트랜잭션을 보내기 위해선 faucet이 필요합니다. [다음 링크](https://www.allthatnode.com/faucet/cosmos.dsrv)를 통해 Cosmos 테스트넷의 faucet을 받을 수 있습니다.

:::warning
니모닉이 유출될 경우, 암호화폐 자산을 모두 잃을 수 있습니다. 아래의 예제를 실행시킬 때에는 테스트용 혹은 개발용 니모닉을 사용해주세요.
:::
