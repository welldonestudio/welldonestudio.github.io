---
keywords: [Ethereum sendTransaction, dapp:sendTransaction, Ethereum, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in Ethereum
---

# Ethereum

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
The Ethereum part carries out the practice using [ethers](https://docs.ethers.io/v5/). Please prepare by installing the package.
:::

## Create Signed transaction

For a signed transaction, there are three essential steps.

1. Create a raw transaction first.
2. Make a raw transaction signature.
3. Convert a raw transaction into a signed transaction by adding a signature.

### 1. getEthereumTx

Transaction and signature are needed. We first develop a `getEtheriumTx` function to generate raw transaction because it is necessary to have a raw transaction to receive a signature via kms.

```typescript title="getEthereumTx.ts"
import { ethers, UnsignedTransaction } from 'ethers';
import { Account, CHAIN } from '@dsrv/kms/lib/types';
import { Ethereum } from '@dsrv/kms/lib/blockchains/ethereum';

interface RawTransaction {
  unSignedTx: UnsignedTransaction;
  serializedTx: string;
}

export const getEthereumTx = async (mnemonic: string): Promise<RawTransaction> => {
  /* 1. get Account */
  const account = Ethereum.getAccount({
    mnemonic,
    path: { type: CHAIN.ETHEREUM, account: 0, index: 0 },
  });

  /* 2. make raw transaction */
  const provider = new ethers.providers.JsonRpcProvider(
    'https://ethereum-goerli-rpc.allthatnode.com',
  ); //allthatnode rpc
  const nonce = await provider.getTransactionCount(account.address);
  const gasLimit = await provider.estimateGas({
    value: '0x1',
    to: account.address,
  });
  const transactionParameters = {
    to: account.address, // send to yourself
    value: ethers.utils.parseEther('0.0005'),
    gasLimit: gasLimit.mul(10).toString(),
    gasPrice: '0x07f9acf02',
    type: 2,
    nonce,
    // goerli network
    chainId: 5,
    // EIP-1559; Type 2
    maxPriorityFeePerGas: '0x07f9acf02',
    maxFeePerGas: '0x07f9acf02',
  };

  return {
    serializedTx: ethers.utils.serializeTransaction(transactionParameters),
    unSignedTx: transactionParameters,
  };
};
```

### 2. getEthereumSignature

We then develop a method called `getEthereumSignature` that produces a signature by using serializedTx as a factor in order to gain a signature for the transaction.

```typescript title="getEthereumSignature.ts"
import { CHAIN } from '@dsrv/kms/lib/types';
import { Ethereum } from '@dsrv/kms/lib/blockchains/ethereum';

export const getEthereumSignature = (serializedTx: string): string => {
  const { signature } = Ethereum.signTx(
    {
      mnemonic,
      path: { type: CHAIN.ETHEREUM, account: 0, index: 0 },
    },
    serializedTx,
  );

  return signature;
};
```

### 3. createEthereumSignedTx

Finally, we develop the `createEthereumSignedTx` function, which takes an `unsignedTx` and a `signature` generated earlier and returns a signed transaction.

```typescript title="createEthereumSignedTx.ts"
import { ethers, UnsignedTransaction } from 'ethers';

interface createEthereumSignedTxProps {
  unSignedTx: UnsignedTransaction;
  signature: string;
}

/* create singedTx by combining tx and signature */
export const createEthereumSignedTx = ({
  unSignedTx,
  signature,
}: createEthereumSignedTxProps): string => {
  const signedTx = ethers.utils.serializeTransaction(unSignedTx, signature);
  return signedTx;
};
```

Finally, you can construct a `getEthereumSignedTx` function that returns a signed transaction by combining the functions you made before, `getEthereumTx`, `getEthereumSignature`, and `createEthereumSignedTx`.

```typescript title="getEthereumSignedTx.ts"
export const getEthereumSignedTx = async (mnemonic: string) => {
  /* 1. get rawTransaction */
  const { serializedTx, unSignedTx } = await getEthereumTx(mnemonic);
  /* 2. get signature */
  const ethereumSignature = getEthereumSignature(serializedTx);
  /* 3. create singedTx by combining rawTransaction and signature */
  const ethereumSignedTx = createEthereumSignedTx({
    unSignedTx,
    signature: ethereumSignature,
  });

  return ethereumSignedTx;
};
```

## Send Signed transaction

You can transmit the transaction using a signed transaction you've prepared.

```typescript title="sendEthereumTransaction.ts"
import { Transaction, providers } from 'ethers';

export const sendEthereumTransaction = async (serializedTx: string): Promise<Transaction> => {
  const provider = new providers.JsonRpcProvider('https://ethereum-goerli-rpc.allthatnode.com');

  const result = await provider.sendTransaction(serializedTx);
  return result;
};
```

```typescript title="main.ts"
const mnemonic = 'sample mnemonic';
const main = async () => {
  const ethereumSignedTx = await getEthereumSignedTx(mnemonic);
  const ethereumTxResult = await sendEthereumTransaction(ethereumSignedTx);
  console.log('Ethereum Tx Result : ', ethereumTxResult);
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

  const getEthereumTx = async () => {
    try {
      /* 1. get Account */
      const account = Ethereum.getAccount({
        mnemonic,
        path: { type: CHAIN.ETHEREUM, account: 0, index: 0 },
      });
      setAccount(account.address);

      /* 2. make raw transaction */
      const provider = new ethers.providers.JsonRpcProvider(
        'https://ethereum-goerli-rpc.allthatnode.com',
      ); //allthatnode rpc
      const nonce = await provider.getTransactionCount(account.address);
      const gasLimit = await provider.estimateGas({
        value: '0x1',
        to: account.address,
      });
      const transactionParameters = {
        to: account.address, // send to yourself
        value: ethers.utils.parseEther('0.0005'),
        gasLimit: gasLimit.mul(10).toString(),
        gasPrice: '0x07f9acf02',
        type: 2,
        nonce,
        // goerli network
        chainId: 5,
        // EIP-1559; Type 2
        maxPriorityFeePerGas: '0x07f9acf02',
        maxFeePerGas: '0x07f9acf02',
      };

      return {
        serializedTx: ethers.utils.serializeTransaction(transactionParameters),
        unSignedTx: transactionParameters,
      };
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getEthereumSignature = (serializedTx) => {
    try {
      const { signature } = Ethereum.signTx(
        {
          mnemonic,
          path: { type: CHAIN.ETHEREUM, account: 0, index: 0 },
        },
        serializedTx,
      );
      setSignature(signature);
      return signature;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const createEthereumSignedTx = ({ unSignedTx, signature }) => {
    try {
      const signedTx = ethers.utils.serializeTransaction(unSignedTx, signature);
      return signedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const getEthereumSignedTx = async () => {
    try {
      /* 1. get rawTransaction */
      const { serializedTx, unSignedTx } = await getEthereumTx();
      /* 2. get signature */
      const ethereumSignature = getEthereumSignature(serializedTx);
      /* 3. create singedTx by combining rawTransaction and signature */
      const ethereumSignedTx = createEthereumSignedTx({
        unSignedTx,
        signature: ethereumSignature,
      });
      setSignedTx(ethereumSignedTx);
      return ethereumSignedTx;
    } catch (e) {
      alert(`error : ${e.message}`);
    }
  };
  const sendEthereumTransaction = async (ethereumSignedTx) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://ethereum-goerli-rpc.allthatnode.com',
      );
      const tx = await provider.sendTransaction(ethereumSignedTx);
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
    const ethereumSignedTx = await getEthereumSignedTx();
    const ethereumTxResult = await sendEthereumTransaction(ethereumSignedTx);
    setTxResult(ethereumTxResult);
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
