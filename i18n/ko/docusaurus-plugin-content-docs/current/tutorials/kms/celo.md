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
Celo 파트에서는 [ethers](https://docs.ethers.io/v5/)를 추가로 이용하여 실습을 진행합니다. 해당 패키지를 미리 설치해주세요.
:::

## Signed transaction 생성하기

signed transaction을 만들기 위해선 크게 세 가지 절차를 거쳐야 합니다.

1. raw transaction 생성
2. raw transaction에 대한 signature 생성
3. raw transaction과 signature을 합쳐 signed transaction 생성

### 1. getCeloTx

signed transaction을 생성하기 위해서는 raw transaction과 signature가 필요합니다. kms를 통해 signature를 얻기 위해선 raw transaction이 필요하기 때문에 먼저 raw transaction을 생성하기 위한 `getCeloTx` 함수를 만듭니다.

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

다음으로 transaction에 대한 signature를 얻기 위해, serializedTx를 인자로 받아서 signature를 생성하는 `getCeloSignature` 함수를 만듭니다.

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

마지막으로 위에서 생성한 `unSignedTx`와 `signature`를 통해 signed transaction을 리턴해주는 `createCeloSignedTx` 함수를 만듭니다.

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

최종적으로 위에서 만든 함수, `getCeloTx`, `getCeloSignature`, `createCeloSignedTx` 를 이용해 signed transaction을 리턴하는 `getCeloSignedTx`를 만들 수 있습니다.

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

## Signed transaction 전송하기

Signed transaction을 생성했다면, 그것을 이용하여 트랜잭션을 전송할 수 있습니다.

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

아래의 예제를 통해 실제로 트랜잭션을 전송해 볼 수 있습니다. 트랜잭션을 보내기 위해선 테스트넷 토큰이 필요합니다. 지갑 내의 FAUCET 탭에서 faucet을 요청할 수 있습니다.

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
