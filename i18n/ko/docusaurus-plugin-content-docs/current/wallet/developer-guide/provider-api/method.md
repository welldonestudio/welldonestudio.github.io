---
sidebar_position: 2
keywords: [웰던 월렛 메소드, dapp:accounts, dapp:addChain, dapp:sendTransaction, dapp:getBalance]
description: Universal Provider가 지원하는 메소드
---

# Methods

:::info
**Universal Provider**는 총 6개의 메소드를 제공합니다.

- [dapp:accounts](#account)
- [dapp:getBalance](#getBalance)
- [dapp:addChain](#addChain)
- [dapp:switchChain](#switchChain)
- [dapp:signMessage](#signMessage)
- [dapp:signTransaction](#signTransaction)
- [dapp:signAndSendTransaction](#signAndSendTransaction)

:::

## 1. dapp:accounts {#account}

이 메소드는 지갑 연결을 요청하는 메소드입니다. 이 메소드를 통해 웹페이지는 지갑에 연결을 요청할 수 있고, 지갑의 사용자가 연결을 허락하면 웹페이지는 사용자의 계정에 접근할 수 있습니다. 이 메소드는 모든 체인에 대한 연결을 한 번에 요청합니다. 즉, `chainName`에 `ethereum`을 넣어 요청을 보낸 후 사용자의 허락을 받으면 `cosmos`나 다른 체인에 대해서도 연결 허락을 받은 것입니다. 웹페이지가 지갑에 이미 연결된 경우에는 사용자의 상호작용을 요구하지 않고 바로 계정의 정보를 가져옵니다.

### Params

이 메소드는 가져오고 싶은 `chainName`값만을 인자로 받습니다.

```javascript
type ChainName = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';

window.dapp.request(chainName: ChainName, { method: "dapp:accounts" })
```

### Returns

이 메소드는 해당 체인 계정에 대한 address값과 pubKey값을 `Promise` 객체로 반환합니다. 현재 WELLDONE Wallet은 체인 아이디 당 하나의 주소/퍼블릭 키 페어만 지원합니다.

```json
{ "ethereum": { "address": "0x....", "pubKey": "0x...." } }
```

### Example

아래 예제는 지갑에서 이더리움 체인의 계정 정보를 얻어오는 코드입니다.

```jsx live
function connect() {
  const [address, setAddress] = React.useState(null);
  const [pubKey, setPubKey] = React.useState(null);
  async function getAccounts() {
    // request connection to WELLDONE extension
    const accounts = await window.dapp.request('ethereum', {
      method: 'dapp:accounts',
    });
    // check if accounts exists
    if (Object.keys(accounts).length !== 0) {
      setAddress(accounts.ethereum.address);
      setPubKey(accounts.ethereum.pubKey);
    }
  }
  return (
    <>
      <Button onClick={getAccounts}>Connect Wallet</Button>
      {address && (
        <ResultTooltip style={{ background: '#3B48DF' }}>
          <b>address: </b> {address} <br />
          <b>pubKey: </b> {pubKey}
        </ResultTooltip>
      )}
    </>
  );
}
```

## 2. dapp:getBalance {#getBalance}

이 메소드는 파라미터로 받은 address의 balance를 반환하는 메소드입니다.

### Params

이 메소드는 파라미터로 balance를 가져올 체인과 계정 주소를 받습니다.

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type ACCOUNTS = string;

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:getBalance',
  params: [ACCOUNTS],
});
```

### Returns

이 메소드는 인자로 전달한 계정의 잔액을 string 타입의 `Promise` 객체로 반환합니다.

```typescript
Promise<string>;
```

### Example

이 예제는 이더리움 계정의 balance를 가져오는 예제입니다.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'ethereum';
  const [accounts, setAccounts] = React.useState(null);
  const [balance, setBalance] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });

      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleGetBalance() {
    try {
      const response = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:getBalance',
        params: [accounts],
      });

      setBalance(response);
    } catch (error) {
      console.log(error);
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }

  return (
    <>
      {accounts ? (
        <>
          <Button onClick={handleGetBalance} type="button">
            Get Balance
          </Button>
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts}
          </ResultTooltip>
        </>
      ) : (
        <>
          <Button onClick={handleGetAccount} type="button">
            Get Account
          </Button>
          <div>You have to get account first!</div>
        </>
      )}
      {balance && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Balance:</b> {balance}
        </ResultTooltip>
      )}
    </>
  );
}
```

## 3. dapp:addChain {#addChain}

이 메소드는 지갑에 네트워크를 추가할 수 있는 메소드입니다. 현재 **Ethereum**, **Cosmos**, **Solana** 기반의 체인을 추가할 수 있습니다.

:::tip
WELLDONE Studio에서는 네트워크를 추가할 수 있는 메소드뿐만 아니라, 사이트를 이용해 지갑에 네트워크를 추가할 수 있도록 [Add Chain](https://addchain.welldonestudio.io)을 운영하고 있습니다. 자세한 내용을 알고 싶다면 [여기](https://docs.welldonestudio.io/ko/add-chain)를 참고합니다.
:::

### Params

이 메소드는 추가할 체인의 기반이 되는 `chainName`값과, `chainData`값을 인자로 받습니다. 아래의 체인별 섹션을 통해 체인별로 `params`에 전달해야 하는 내용을 상세하게 알 수 있습니다.

- [코스모스 기반 네트워크](https://docs.welldonestudio.io/ko/add-chain/developer-guide/cosmos)
- [이더리움 기반 네트워크](https://docs.welldonestudio.io/ko/add-chain/developer-guide/ethereum)
- [솔라나 및 그외 네트워크](https://docs.welldonestudio.io/ko/add-chain/developer-guide/solana)

```javascript
type CHAIN_NAME = 'cosmos' | 'ethereum' | 'solana';

await window.dapp.request(chainName: ChainName, (
    method: "dapp:addChain",
    params: [chainData]
))
```

### Example

Ethereum 기반의 Ubiq 네트워크를 추가해보는 예제입니다.

```jsx live
function addChain() {
  // Ethereum based chain parameter Sample - Ubiq
  const chainData = {
    chainId: '0x8',
    chainName: 'Ubiq',
    rpcUrls: ['https://rpc.octano.dev'],
    iconUrls: [''],
    nativeCurrency: {
      name: 'Ubiq Ether',
      symbol: 'UBQ',
      decimals: 18,
    },
    blockExplorerUrls: ['https://ubiqscan.io'],
  };

  async function addChain() {
    // before adding chain to wallet, you should connect to wallet first
    const accounts = await window.dapp.request('ethereum', {
      method: 'dapp:accounts',
    });
    // add chain to wallet
    const response = await window.dapp.request('ethereum', {
      method: 'dapp:addChain',
      params: [chainData],
    });
  }
  return <Button onClick={addChain}>Add Chain</Button>;
}
```

## 4. dapp:switchChain {#switchChain}

이 메소드는 지갑이 현재 바라보고 있는 체인의 네트워크를 변경하는 메소드입니다.

### Params

이 메소드는 파라미터로 네트워크를 변경할 체인의 이름 `CHAIN_NAME`과 변경할 네트워크의 ID `NETWORK_ID` 를 받습니다.

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type NETWORK_ID = string;

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:switchChain',
  params: [NETWORK_ID],
});
```

### Example

아래는 Ethereum 메인넷에서 네트워크를 Goerli 테스트넷으로 변경하는 예제 코드입니다.

```jsx live
function switchChain() {
  async function switchChain() {
    // before switching chain, you should connect to wallet first
    const accounts = await window.dapp.request('ethereum', {
      method: 'dapp:accounts',
    });
    // add chain to wallet
    const response = await window.dapp.request('ethereum', {
      method: 'dapp:switchChain',
      params: ['0x5'], // Goerli Testnet network ID
    });
  }
  return <Button onClick={switchChain}>Switch Chain</Button>;
}
```

## 5. dapp:signMessage {#signMessage}

이 메소드는 메시지를 서명하는 메소드입니다.

### Params

이 메소드는 파라미터로 체인의 이름 `CHAIN_NAME`과 서명하고자 하는 메시지 `MESSAGE`를 string 타입으로 받습니다. 

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type MESSAGE = string;

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:signMessage',
  params: [MESSAGE],
});
```

### Returns

이 메소드는 트랜잭션을 서명한 결과인 `signature` 값과, 서명에 사용된 `publicKey`를 가진 객체를 `Promise` 배열로 반환합니다.

```typescript
Promise<[{ signature: string; publicKey: string }]>;
```

### Example

아래는 Ethereum 에서 메시지를 서명하는 예제 코드입니다. [Etherscan](https://etherscan.io/verifiedSignatures#)의 `Verify Signature` 기능을 이용해서 서명이 제대로 성공했는지 확인할 수 있습니다. 

```jsx live
function signMessage() {
  const CHAIN_NAME = 'ethereum';
  const [accounts, setAccounts] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [signed, setSigned] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      const chainId = await window.dapp.request(CHAIN_NAME, {
        method: 'eth_chainId',
        params: [],
      });
      if (chainId !== '0x5') {
        throw new Error('Please change to Goerli Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME]);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSignMessage() {
    try {
      const response = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:signMessage',
        params: [message],
      });
      setSigned(response[0]);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessage = () => {
    setIsSubmit(true);
  };

  return (
    <>
      {accounts ? (
        <>
          {isSubmit ? (
            <Button onClick={handleSignMessage} type="button">
              Sign Message
            </Button>
          ) : (
            <>
              <Input
                value={message}
                onChange={handleChange}
                placeholder="Message to sign"
                style={{ marginRight: '8px' }}
              />
              <Button onClick={handleMessage} type="button">
                Set a Message
              </Button>
            </>
          )}
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts.address}
          </ResultTooltip>
        </>
      ) : (
        <>
          <Button onClick={handleGetAccount} type="button">
            Get Account
          </Button>
          <div>You have to get account first!</div>
        </>
      )}
      {signed && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Signature:</b> {signed.signature}
        </ResultTooltip>
      )}
    </>
  );
}
```

## 6. dapp:signTransaction {#signTransaction}

이 메소드는 트랜잭션을 서명하는 메소드입니다.

### Params

이 메소드는 파라미터로 체인의 이름 `CHAIN_NAME`과 서명하고자 하는 트랜잭션 `HEX_STRING_TX_DATA` 를 HEX string 타입으로 받습니다. 다양한 체인들의 트랜잭션 포맷이 상이하기 때문에 HEX string 타입을 공통으로 받아 서명을 진행하고 있습니다.

```info
EVM 계열의 경우 트랜잭션 객체를 그대로 넣어서 전송하는 것도 가능합니다.
```

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type HEX_STRING_TX_DATA = string;

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:signTransaction',
  params: [HEX_STRING_TX_DATA],
});
```

### Returns

이 메소드는 트랜잭션을 서명한 결과인 `signature` 값과, 서명에 사용된 `publicKey`를 가진 객체를 `Promise` 배열로 반환합니다.

```typescript
Promise<[{ signature: string; publicKey: string }]>;
```

### Example

아래는 Ethereum에서 트랜잭션을 서명하는 예시입니다.

```jsx live
function signTransaction() {
  const CHAIN_NAME = 'ethereum';
  const [accounts, setAccounts] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [signed, setSigned] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      const chainId = await window.dapp.request(CHAIN_NAME, {
        method: 'eth_chainId',
        params: [],
      });
      if (chainId !== '0x5') {
        throw new Error('Please change to Goerli Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME]);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSignTransaction() {
    try {
      const tx = {
        from: accounts.address,
        to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
        gas: '0x76c0',
        gasPrice: '0x9184e72a000',
        value: '0x00',
        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:signTransaction',
        params: [tx],
      });
      setSigned(response[0]);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <>
      {accounts ? (
        <>
          <Button onClick={handleSignTransaction} type="button">
            Sign Transaction
          </Button>
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts.address}
          </ResultTooltip>
        </>
      ) : (
        <>
          <Button onClick={handleGetAccount} type="button">
            Get Account
          </Button>
          <div>You have to get account first!</div>
        </>
      )}
      {signed && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Signature:</b> {signed.signature}
        </ResultTooltip>
      )}
    </>
  );
}
```

## 7. dapp:signAndSendTransaction {#signAndSendTransaction}

이 메소드는 트랜잭션을 서명한 후 전송하는 메소드입니다. 간단한 토큰 전송부터 컨트랙트 배포, 블록체인의 상태 변경까지 이 메소드를 통해 할 수 있습니다. 단일 트랜잭션 뿐만 아니라 여러 개의 트랜잭션 전송도 가능합니다.
WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 트랜잭션을 보내기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다.

### Params

파라미터로는 크게 `CHAIN_NAME`과 `SERIALIZED_TRANSACTION`가 있습니다. `CHAIN_NAME`은 연결하고자 하는 체인의 이름을, `SERIALIZED_TRANSACTION`는 트랜잭션을 HEX string 형으로 변환한 값을 의미합니다. 다양한 체인들의 트랜잭션 포맷이 상이하기 때문에, WELLDONE Wallet에서는 트랜잭션을 HEX string 타입으로 변환한 값을 인자로 받아 트랜잭션을 전송합니다.

```info
EVM 계열의 경우 트랜잭션 객체를 그대로 넣어서 전송하는 것도 가능합니다.
```

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type HEX_STRING_TX_DATA = 'string';

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:signAndSendTransaction',
  params: [HEX_STRING_TX_DATA],
});
```

아래의 체인별 섹션을 통해 체인별로 `HEX_STRING_TX_DATA`에 전달해야 하는 값을 예제와 함께 상세하게 알 수 있습니다.

- [Ethereum](https://docs.welldonestudio.io/ko/wallet/developer-guide/sending-transaction/ethereum)
- [Cosmos](https://docs.welldonestudio.io/ko/wallet/developer-guide/sending-transaction/cosmos)
- [NEAR](https://docs.welldonestudio.io/ko/wallet/developer-guide/sending-transaction/near)
- [Klaytn](https://docs.welldonestudio.io/ko/wallet/developer-guide/sending-transaction/klaytn)
- [Celo](https://docs.welldonestudio.io/ko/wallet/developer-guide/sending-transaction/celo)

### Returns

해당 메소드는 트랜잭션 해시 값을 string 타입의 `Promise` 객체로 반환합니다.

```typescript
Promise<string[]>;
```

### Example

아래는 이더리움 네트워크에서 트랜잭션을 보내는 예제입니다. 트랜잭션을 보내기 위해선 faucet이 필요합니다. 다음 [링크](https://www.allthatnode.com/faucet/ethereum.dsrv)를 통해 Ethereum Goerli 테스트넷의 faucet을 받을 수 있습니다.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'ethereum';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      const chainId = await window.dapp.request(CHAIN_NAME, {
        method: 'eth_chainId',
        params: [],
      });
      if (chainId !== '0x5') {
        throw new Error('Please change to Goerli Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const tx = {
        from: accounts,
        to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
        gas: '0x76c0',
        gasPrice: '0x9184e72a000',
        value: '0x00',
        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [tx],
      });
      const txHash = response[0];

      setTxHash(txHash);
    } catch (error) {
      console.log(error);
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }

  return (
    <>
      {accounts ? (
        <>
          <Button onClick={handleSendTransaction} type="button">
            Send a Transaction
          </Button>
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts}
          </ResultTooltip>
        </>
      ) : (
        <>
          <Button onClick={handleGetAccount} type="button">
            Get Account
          </Button>
          <div>You have to get account first!</div>
        </>
      )}
      {txHash && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Transaction Hash:</b> {txHash}
        </ResultTooltip>
      )}
    </>
  );
}
```
