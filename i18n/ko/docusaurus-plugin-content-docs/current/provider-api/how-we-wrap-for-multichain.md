# How does the Universal Provider wrap for multi-chain developers?

Web3 개발자는 멀티체인 환경을 지원하는 Universal Provider 덕분에 한 번의 요청으로 여러 라이브러리를 동시에 설치 및 관리할 필요 없이 Web3 개발 환경을 쉽게 다룰 수 있습니다. 제공자는 Ethereum의 ethers.js, NEAR 네트워크의 Near-api-js, Cosmos의 cosmjs, Solana의 web3.js, Celo의 ContractKit, Polkadot의 util-crypto 등을 포함하여 각 블록체인 네트워크에서 지원하는 라이브러리를 주입합니다.

Universal Provider는 개발자 친화적인 Welldone Wallet과 직접 연결되기 때문에 지갑 단에서 여러 체인의 정보를 캐치하는 미들웨어를 포함합니다. 예를 들어, Neon 네트워크를 통해 트랜잭션을 보내고 싶다면 `dapp:sendTransaction`메소드만 활용하면 됩니다. 이 메소드는 당신의 request를 Welldone Wallet으로 라우팅 시키는 미들웨어입니다. 이처럼 Universal Provider는 각 개별 라이브러리를 이해할 필요가 없도록 모든 네트워크 관련 방법을 래핑하여 일반화합니다. 당신이 요청을 원하는 Network를 선언하고, 일반화된 `dapp method`를 활용하세요. 

```javascript
const DAPP_SEND_TRANSACTION_METHOD = 'dapp:sendTransaction'

async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: DAPP_SEND_TRANSACTION_METHOD,
      });
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
```

또한 Universal Provider는 많은 블록체인 네트워크에서 잘 알려진 라이브러리에 게시된 기본 API 방법을 지원합니다. 체인 별로 잘 알려진 라이브러리들의 요구사항을 Universal Provider에 직접 주입하고 web3 개발자를 위해 래핑했으므로 자체 다중 체인 dApp을 만들 때 수많은 개발 종속성을 관리하는 것에 대해 걱정할 필요가 없습니다. 예를 들어, 다시 기존의 'eth_accounts' 방법을 사용하여 모든 이더리움 계정 주소를 가져오도록 요청할 수 있습니다. 당신은 공식 문서로 이동하여 API 메서드를 선택하고 Universal Provider에 바로 적용하기만 하면 됩니다. 이 방식들은 매우 간단하여 web3 개발을 보다 용이하게 만듭니다.

