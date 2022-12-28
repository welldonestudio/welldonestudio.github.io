---
keywords: [Universal Provider, How does Universal Provider wrap for multi-chain developers?]
description: Universal Provider가 멀티 체인 개발자를 지원하는 방법
sidebar_position: 1
---

# About Universal Provider

## How does the Universal Provider wrap for multi-chain developers?

Web3 개발자는 멀티체인 환경을 지원하는 **Universal Provider** 덕분에 한 번의 요청으로 여러 라이브러리를 동시에 설치 및 관리할 필요 없이 Web3 개발 환경을 쉽게 다룰 수 있습니다. **Universal Provider**는 Ethereum의 `ethers.js`, NEAR 네트워크의 `near-api-js`, Cosmos의 `cosmjs`, Solana의 `web3.js`, Celo의 `ContractKit`, Polkadot의 `util-crypto` 라이브러리를 추상화했습니다.

**Universal Provider**는 개발자 친화적인 WELLDONE Wallet과 직접 연결되기 때문에 지갑 단에서 여러 체인의 정보를 받는 미들웨어를 포함합니다. 예를 들어, Neon 네트워크를 통해 트랜잭션을 보내고 싶다면 `dapp:signAndSendTransaction`메소드만 활용하면 됩니다. 이 메소드는 request를 WELLDONE Wallet으로 라우팅하는 미들웨어입니다. **Universal Provider**는 개별 라이브러리를 이해할 필요가 없도록 모든 API 메소드를 추상화합니다. 다음 섹션에서 **Universal Provider**가 지원하는 메소드의 정보를 자세히 확인하세요.

```javascript
const DAPP_GET_ACCOUNT_METHOD = 'dapp:accounts';

async function handleGetAccount() {
  try {
    const accounts = await dapp.request(CHAIN_NAME, {
      method: DAPP_GET_ACCOUNT_METHOD,
    });
    setAccounts(accounts[CHAIN_NAME].address);
  } catch (error) {
    alert(error.message);
  }
}
```

또한 **Universal Provider**는 여러 블록체인의 기본 라이브러리가 지원하는 API 메소드를 지원합니다. 체인별로 잘 알려진 라이브러리들의 요구사항을 **Universal Provider**에 직접 주입하고 추상화했기 때문에, 멀티체인 dApp을 만들 때 수많은 라이브러리를 관리하지 않아도 됩니다. 예를 들어, 기존의 `eth_accounts` 방법을 사용하여 모든 이더리움 계정 주소를 가져오도록 요청할 수 있습니다. 공식 문서의 API 메소드를 **Universal Provider**에서 바로 사용할 수 있습니다.
