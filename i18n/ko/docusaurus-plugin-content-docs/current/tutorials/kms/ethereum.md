---
keywords: [Ethereum sendTransaction, dapp:sendTransaction, Ethereum, kms, '@dsrv/kms']
description: Sending Transactions using @dsrv/kms in Ethereum
---

# Ethereum

:::tip Prerequisites
Ethereum 파트에서는 [ethers](https://docs.ethers.io/v5/)를 추가로 이용하여 실습을 진행합니다. 해당 패키지를 미리 설치해주세요.
:::

## Signed transaction 생성하기

signed transaction을 만들기 위해선 크게 세 가지 절차를 거쳐야 합니다.

1. raw transaction 생성
2. raw transaction에 대한 signature 생성
3. raw transaction과 signature을 합쳐 signed transaction 생성

### 1. getEthereumTx

signed transaction을 생성하기 위해서는 raw transaction과 signature가 필요합니다. kms를 통해 signature를 얻기 위해선 raw transaction이 필요하기 때문에 먼저 raw transaction을 생성하기 위한 `getEthereumTx` 함수를 만듭니다.

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
    to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode address
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

다음으로 transaction에 대한 signature를 얻기 위해, serializedTx를 인자로 받아서 signature를 생성하는 `getEthereumSignature` 함수를 만듭니다.

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

마지막으로 위에서 생성한 `unSignedTx`와 `signature`를 통해 signed transaction을 리턴해주는 `createEthereumSignedTx` 함수를 만듭니다.

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

최종적으로 위에서 만든 함수, `getEthereumTx`, `getEthereumSignature`, `createEthereumSignedTx` 를 이용해 signed transaction을 리턴하는 `getEthereumSignedTx`를 만들 수 있습니다.

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

## Signed transaction 전송하기

Signed transaction을 생성했다면, 그것을 이용하여 트랜잭션을 전송할 수 있습니다.

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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 트랜잭션을 보내기 위해선 faucet이 필요합니다. [다음 링크](https://www.allthatnode.com/faucet/ethereum.dsrv)를 통해 Ethereum Goerli 테스트넷의 faucet을 받을 수 있습니다.

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
        to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode address
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
