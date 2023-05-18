---
keywords: [celo sendTransaction, dapp:sendTransaction, celo, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in Celo
---

# Celo

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
The Celo part carries out the practice using [ethers](https://docs.ethers.io/v5/). Please prepare by installing the package.
:::

## Create Signed transaction

For a signed transaction, there are three essential steps.

1. Create a raw transaction first.
2. Make a raw transaction signature.
3. Convert a raw transaction into a signed transaction by adding a signature.

### 1. getCeloTx

Transaction and signature are needed. We first develop a `getCeloTx` function to generate raw transaction because it is necessary to have a raw transaction to receive a signature via kms.

```typescript title="getCeloTx.ts"
import { ethers, UnsignedTransaction } from 'ethers';
import { Account, CHAIN } from '@dsrv/kms/lib/types';
import { Ethereum } from '@dsrv/kms/lib/blockchains/ethereum';

interface RawTransaction {
  unSignedTx: UnsignedTransaction;
  serializedTx: string;
}

export const getCeloTx = async (mnemonic: string): Promise<RawTransaction> => {
  /* 1. get Account */
  const account = Ethereum.getAccount({
    mnemonic,
    path: { type: CHAIN.CELO, account: 0, index: 0 },
  });

  /* 2. make raw transaction */
  const provider = new ethers.providers.JsonRpcProvider(
    'https://celo-alfajores-rpc.allthatnode.com',
  ); //allthatnode rpc
  const nonce = await provider.getTransactionCount(account.address);
  const gasLimit = await provider.estimateGas({
    value: '0x1',
    to: account.address, // send to yourself
    from: account.address,
  });
  const transactionParameters = {
    to: account.address, // send to yourself
    value: ethers.utils.parseEther('0.0005'),
    gasLimit: gasLimit.mul(10).toString(),
    gasPrice: '0x07f9acf02',
    type: 2,
    nonce,
    // alfajores network
    chainId: 44787,
    type: 1,
    gasPrice: '0x07f9acf02',
    maxPriorityFeePerGas: '0x07f9acf02',
    maxFeePerGas: '0x07f9acf02',
    nonce,
  };

  return {
    serializedTx: ethers.utils.serializeTransaction(transactionParameters),
    unSignedTx: transactionParameters,
  };
};
```

### 2. getCeloSignature

We then develop a method called `getCeloSignature` that produces a signature by using serializedTx as a factor in order to gain a signature for the transaction.

```typescript title="getCeloSignature.ts"
import { CHAIN } from '@dsrv/kms/lib/types';
import { Ethereum } from '@dsrv/kms/lib/blockchains/ethereum';

export const getCeloSignature = (serializedTx: string): string => {
  const { signature } = Ethereum.signTx(
    {
      mnemonic,
      path: { type: CHAIN.CELO, account: 0, index: 0 },
    },
    serializedTx,
  );

  return signature;
};
```

### 3. createCeloSignedTx

Finally, we develop the `createCeloSignedTx` function, which takes an `unsignedTx` and a `signature` generated earlier and returns a signed transaction.

```typescript title="createCeloSignedTx.ts"
import { ethers, UnsignedTransaction } from 'ethers';

interface createCeloSignedTxProps {
  unSignedTx: UnsignedTransaction;
  signature: string;
}

/* create singedTx by combining tx and signature */
export const createCeloSignedTx = ({ unSignedTx, signature }: createCeloSignedTxProps): string => {
  const signedTx = ethers.utils.serializeTransaction(unSignedTx, signature);
  return signedTx;
};
```

Finally, you can construct a `getCeloSignedTx` function that returns a signed transaction by combining the functions you made before, `getCeloTx`, `getCeloSignature`, and `createCeloSignedTx`.

```typescript title="getCeloSignedTx.ts"
export const getCeloSignedTx = async (mnemonic: string) => {
  /* 1. get rawTransaction */
  const { serializedTx, unSignedTx } = await getCeloTx(mnemonic);
  /* 2. get signature */
  const celoSignature = getCeloSignature(serializedTx);
  /* 3. create singedTx by combining rawTransaction and signature */
  const celoSignedTx = createCeloSignedTx({
    unSignedTx,
    signature: celoSignature,
  });

  return celoSignedTx;
};
```

## Send Signed transaction

You can transmit the transaction using a signed transaction you've prepared.

```typescript title="sendCeloTransaction.ts"
import { Transaction, providers } from 'ethers';

export const sendCeloTransaction = async (serializedTx: string): Promise<Transaction> => {
  const provider = new providers.JsonRpcProvider('https://celo-alfajores-rpc.allthatnode.com');

  const result = await provider.sendTransaction(serializedTx);
  return result;
};
```

```typescript title="main.ts"
const mnemonic = 'sample mnemonic';
const main = async () => {
  const celoSignedTx = await getCeloSignedTx(mnemonic);
  const celoTxResult = await sendCeloTransaction(celoSignedTx);
  console.log('Celo Tx Result : ', celoTxResult);
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

  const getCeloTx = async () => {
    try {
      /* 1. get Account */
      const account = Ethereum.getAccount({
        mnemonic,
        path: { type: CHAIN.CELO, account: 0, index: 0 },
      });
      setAccount(account.address);

      /* 2. make raw transaction */
      const provider = new ethers.providers.JsonRpcProvider(
        'https://celo-alfajores-rpc.allthatnode.com',
      ); //allthatnode rpc
      const nonce = await provider.getTransactionCount(account.address);
      const gasLimit = await provider.estimateGas({
        value: '0x1',
        to: account.address, // send to yourself
        from: account.address,
      });
      const transactionParameters = {
        to: account.address, // send to yourself
        value: ethers.utils.parseEther('0.0005'),
        gasLimit: gasLimit.mul(10).toString(),
        gasPrice: '0x07f9acf02',
        type: 2,
        nonce,
        // alfajores network
        chainId: 44787,
        type: 1,
        gasPrice: '0x07f9acf02',
        maxPriorityFeePerGas: '0x07f9acf02',
        maxFeePerGas: '0x07f9acf02',
        nonce,
      };

      return {
        serializedTx: ethers.utils.serializeTransaction(transactionParameters),
        unSignedTx: transactionParameters,
      };
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getCeloSignature = (serializedTx) => {
    try {
      const { signature } = Ethereum.signTx(
        {
          mnemonic,
          path: { type: CHAIN.CELO, account: 0, index: 0 },
        },
        serializedTx,
      );
      setSignature(signature);
      return signature;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const createCeloSignedTx = ({ unSignedTx, signature }) => {
    try {
      const signedTx = ethers.utils.serializeTransaction(unSignedTx, signature);
      return signedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getCeloSignedTx = async () => {
    try {
      /* 1. get rawTransaction */
      const { serializedTx, unSignedTx } = await getCeloTx();
      /* 2. get signature */
      const celoSignature = getCeloSignature(serializedTx);
      /* 3. create singedTx by combining rawTransaction and signature */
      const celoSignedTx = createCeloSignedTx({
        unSignedTx,
        signature: celoSignature,
      });
      setSignedTx(celoSignedTx);
      return celoSignedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const sendCeloTransaction = async (celoSignedTx) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://celo-alfajores-rpc.allthatnode.com',
      );

      const tx = await provider.sendTransaction(celoSignedTx);
      const result = await tx.wait();
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
    const celoSignedTx = await getCeloSignedTx();
    const celoTxResult = await sendCeloTransaction(celoSignedTx);
    setTxResult(celoTxResult);
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
