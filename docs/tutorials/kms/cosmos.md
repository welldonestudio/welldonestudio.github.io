---
keywords: [cosmos sendTransaction, dapp:sendTransaction, cosmos, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in cosmos
---

# Cosmos

:::tip Prerequisites
The Cosmos part carries out the practice using [@cosmjs](https://cosmos.github.io/cosmjs/). Please prepare by installing the package.
:::

## Create Signed transaction

For a signed transaction, there are three essential steps.

1. Create a raw transaction first.
2. Make a raw transaction signature.
3. Convert a raw transaction into a signed transaction by adding a signature.

### 1. getCosmosTx

Transaction and signature are needed. We first develop a `getCosmosTx` function to generate raw transaction because it is necessary to have a raw transaction to receive a signature via kms.

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

  const txBodyEncodeObjectTxBodyEncodeObject = {
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
          toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', // allthatnode
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

We then develop a method called `getCosmosSignature` that produces a signature by using serializedTx as a factor in order to gain a signature for the transaction.

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

Finally, we develop the `createCosmosSignedTx` function, which takes an `unsignedTx` and a `signature` generated earlier and returns a signed transaction.

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

Finally, you can construct a `getCosmosSignedTx` function that returns a signed transaction by combining the functions you made before, `getCosmosTx`, `getCosmosSignature`, and `createCosmosSignedTx`.

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

## Send Signed transaction

You can transmit the transaction using a signed transaction you've prepared.

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

You can send the transaction directly using the example below. The transaction needs to be sent through the faucet. Through the [following URL](https://www.allthatnode.com/faucet/cosmos.dsrv), you can access the Cosmos testnet faucet.

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

  const getTxBodyBytes = (transaction) => {
    const registry = new Registry(defaultRegistryTypes);

    const txBodyEncodeObject = {
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

  const getCosmosTx = async () => {
    try {
      /* 1. get Account */
      const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
      const [{ address, pubkey }] = await wallet.getAccounts();
      setAccount(address);

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
              toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', // allthatnode
              amount: [{ denom: 'uatom', amount: '10000' }],
            },
          },
        ],
        sequence: sequence.sequence,
      };

      /* 3. create signDoc */
      const txBodyBytes = getTxBodyBytes(transaction);
      const authInfoBytes = getAuthInfoBytes(transaction, pubkey);

      const signDoc = makeSignDoc(
        txBodyBytes,
        authInfoBytes,
        transaction.signerData.chainId,
        Number(transaction.signerData.accountNumber),
      );
      /* 4. serialized singDoc */

      const uint8SignDoc = makeSignBytes(signDoc);
      const serializedTx = `0x${Buffer.from(uint8SignDoc).toString('hex')}`;

      return {
        unSignedTx: signDoc,
        serializedTx,
      };
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getCosmosSignature = (serializedTx) => {
    try {
      const { signature } = Cosmos.signTx(
        {
          mnemonic,
          path: { type: CHAIN.COSMOS, account: 0, index: 0 },
        },
        serializedTx,
      );

      setSignature(signature);
      return signature;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };

  const createCosmosSignedTx = ({ unSignedTx, signature }) => {
    try {
      const txRaw = TxRaw.fromPartial({
        bodyBytes: unSignedTx.bodyBytes,
        authInfoBytes: unSignedTx.authInfoBytes,
        signatures: [new Uint8Array(Buffer.from(signature.replace('0x', ''), 'hex'))],
      });

      const txByte = TxRaw.encode(txRaw).finish();
      const signedTx = `0x${Buffer.from(txByte).toString('hex')}`;

      return signedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getCosmosSignedTx = async () => {
    try {
      /* 1. get rawTransaction */
      const { serializedTx, unSignedTx } = await getCosmosTx();
      /* 2. get signature */
      const cosmosSignature = getCosmosSignature(serializedTx);
      /* 3. create singedTx by combining rawTransaction and signature */
      const cosmosSignedTx = createCosmosSignedTx({
        unSignedTx,
        signature: cosmosSignature,
      });
      setSignedTx(cosmosSignedTx);
      return cosmosSignedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const sendCosmosTransaction = async (cosmosSignedTx) => {
    try {
      const rpcUrl = 'https://cosmos-testnet-rpc.allthatnode.com:26657';
      const client = await StargateClient.connect(rpcUrl);
      const result = await client.broadcastTx(
        Uint8Array.from(Buffer.from(cosmosSignedTx.replace('0x', ''), 'hex')),
      );
      console.log('result', result);
      return result;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };

  const handleClick = async () => {
    account && setAccount(null);
    signature && setSignature(null);
    signedTx && setSignedTx(null);
    txResult && setTxResult(null);
    const cosmosSignedTx = await getCosmosSignedTx();
    const cosmosTxResult = await sendCosmosTransaction(cosmosSignedTx);
    setTxResult(cosmosTxResult);
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
          <b>Transaction Hash:</b> {txResult.transactionHash}
        </ResultTooltip>
      )}
    </>
  );
}
```
