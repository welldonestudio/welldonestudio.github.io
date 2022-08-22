---
sidebar_position: 1
---

# Introduction

WELLDONE Studio developer docs에 오신 것을 환영합니다. 우리 WELLDONE Studio는 멀티체인 환경에서 개발자가 쉽게 서비스를 구축할 수 있도록 다양한 도구들을 제공하고 있습니다. WELLDONE Studio에서 제공하는 도구는 크게 세 가지입니다. WELLDONE Wallet을 이용하여 멀티체인 위에 계정을 구축할 수 있으며, Add Chain을 이용하여 간편하게 체인을 추가하고, WELLDONE Code을 이용하여 Remix Ide 환경에서 쉽게 멀티체인 위의 컨트랙트를 배포하고 실행시킬 수 있습니다. 우리는 멀티체인위에서 파편화 되어있던 개발환경을 통합하고 개발자가 동일한 인터페이스로 dapp개발에 집중할 수 있도록 하는 환경을 제공합니다.

## 1. Welldone Wallet

WELLDONE Wallet은 멀티체인 자산을 위한 유일한 지갑입니다. 지갑 호환성은 블록체인에 따라 다르기 때문에 사용자는 다양한 네트워크에 액세스하기 위해 수많은 지갑을 생성해야 합니다. 결과적으로 사용자는 많은 주소와 개인 키를 저글링해야 할 수 있습니다. 또한 개발자는 사용하는 모든 지갑을 다운로드, 개발 및 테스트해야 합니다. 

WELLDONE Wallet은 이러한 문제를 해결하기 위해 개발되었습니다.  WELLDONE Wallet은 단일 플랫폼에서 모든 코인을 제어할 수 있는 멀티체인 지갑이며, 다양한 네트워크에서 제약 없이 자산을 원하는 대로 사용할 수 있습니다. WELLDONE Wallet을 설명하는 두 가지 핵심 기술은 Universal Provider와 KMS입니다.

### Universal Provider[](https://master.dihnc19206p60.amplifyapp.com/ko/docs/intro#universal-provider)

- Universal Provider는 Web 3.0 제공자를 하나의 표준화된 API로 통합하는 핵심 메커니즘입니다. 우리 지갑은 개발자를 위한 다중 체인 통합 도구 역할을 하는 Universal Provider를 통해 여러 네트워크에 쉽게 주입할 수 있습니다. 이는 사용자가 단일 공급자를 통해 다양한 프로토콜에 대한 서비스에 액세스하고 개발할 수 있음을 의미하므로 귀중한 시간을 절약할 수 있습니다.

### KMS[](https://master.dihnc19206p60.amplifyapp.com/ko/docs/intro#kms)

- KMS는 개인 키가 필요하지 않은 비 보관 지갑의 핵심 기능입니다. 월렛 사용자만이 모든 자산에 액세스할 수 있으므로 모든 사용자가 지갑을 더욱 안전하고 안전하게 사용할 수 있습니다. 안전하면서도 광범위한 우리 지갑은 단일 UX로 다중 체인 자산을 관리하는 유일한 암호화폐 지갑입니다.

### How to build a dapp

- [Welldone Wallet 다운로드 링크](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=ko)
- Welldone Wallet을 통해 dapp 구축을 시작하고자 한다면 [이 링크](https://master.dihnc19206p60.amplifyapp.com/docs/getting-started)를 통해 가이드를 따라가주세요.
- Welldone Wallet에 대한 보다 자세한 설명을 원한다면 [이 포스팅](https://medium.com/dsrv/%EB%A9%80%ED%8B%B0%EC%B2%B4%EC%9D%B8-%EA%B7%B8-%EC%9D%B4%EC%83%81%EC%9D%98-%EA%B2%BD%ED%97%98-%EC%8B%9C%EC%9E%91%EB%B6%80%ED%84%B0-%EB%8B%A4%EB%A5%B4%EA%B2%8C-welldone-%EC%9B%94%EB%A0%9B-%EB%9F%B0%EC%B9%AD-374c9f6890b8)을 참고해주세요.

## 2. Add chain

WELLDONE studio는 WELLDONE Wallet에 직접 네트워크를 추가할 수 있는 **Add Chain** 기능을 제공합니다. 일반 사용자는  Add Chain사이트에서 월렛에 손쉽게 네트워크를 추가할 수 있으며, 개발자는 WELLDONE Wallet에서 제공하는 method를 통해 네트워크 추가를 유도할 수 있습니다. 현재 이더리움(Ethereum), 코스모스(Cosmos), 솔라나(Solana) 기반의 체인을 추가할 수 있으며 지원 예정 체인으로는 Near, Sui 기반의 체인이 있습니다. 

### How to use

- Add Chain을 통해 네트워크를 추가하고 싶다면 [이 링크](https://master.dihnc19206p60.amplifyapp.com/ko/docs/add-chain/)를 통해 가이드를 따라가주세요.

## 3. Welldone Code

WELLDONE Code 한 곳에서 여러 블록체인의 스마트 컨트랙트를 배포하고, 테스트해 볼 수 있는 효율적인 플러그인입니다. 개발자가 체인마다 다른 개발 언어에 대한 컴파일러를 직접 구축하지 않아도 됩니다. WELLDONE Code는 복잡한 개발 단계를 줄이고 개발자들이 여러 체인 생태계에 쉽게 온보딩할 수 있도록 돕습니다.

현재 니어(Near), 셀로(Celo), 클레이튼(Klaytn) 총 3개 체인을 지원합니다. 지원 예정 체인으로는 솔라나(Solana), 오스모시스(Osmosis), 주노(Juno), 수이(Sui)가 있습니다.

### How to use

- Welldone code를 통해 컨트랙트를 배포하고자 한다면 [이 링크](https://master.dihnc19206p60.amplifyapp.com/ko/docs/category/deploy-and-run)를 통해 가이드를 따라가주세요.
- Welldone code에 대한 보다 자세한 설명을 원한다면 이 포스팅을 참고해주세요. (아티클 퍼블리시 후 링크 연결)

[](https://master.dihnc19206p60.amplifyapp.com/ko/docs/intro#what-problem-is-welldone-wallet-trying-to-solve)

## What's next for WELLDONE Studio[](https://master.dihnc19206p60.amplifyapp.com/ko/docs/intro#whats-next-for-welldone-wallet)

WELLDONE Studio는 ‘범용적인(Universal)’, ‘기여하는(Contributory)’, ‘선도하는(Pioneering)’ 세가지의 핵심 가치를 가지고 웹3 참여자들이 일관된 경험으로 가치를 창출할 수 있도록 표준화된 도구를 제공합니다. 멀티체인 환경에서 보다 일관된 경험으로 개발을 지속할 수 있도록 앞으로 더 다양한 체인을 지원할 예정이며, 기존에 구축되어 있는 SDK들에서도 Welldone Wallet을 주입해 사용할 수 있도록 지원할 예정입니다. 이러한 Welldone Studio의 프로덕트를 통해 서비스를 구축하고 싶다면 아래의 가이드를 따라가주세요.

1. [시작하기](https://master.dihnc19206p60.amplifyapp.com/ko/docs/getting-started)
2. [Add Chain을 통해 Wallet에 네트워크 추가하기](https://master.dihnc19206p60.amplifyapp.com/ko/docs/add-chain)
3. [WELLDONE Wallet에서 제공하는 api 알아보기](https://master.dihnc19206p60.amplifyapp.com/ko/docs/category/provider-api)
4. [트랜젝션 보내기](https://master.dihnc19206p60.amplifyapp.com/ko/docs/Sending%20Transactions)
5. [컨트랙트 배포하기](https://master.dihnc19206p60.amplifyapp.com/ko/docs/category/deploy-and-run)
6. [배포된 컨트랙트 실행하기](https://master.dihnc19206p60.amplifyapp.com/ko/docs/Execute-the-Contract)

## WELLDONE Studio Links[](https://master.dihnc19206p60.amplifyapp.com/ko/docs/intro#welldone-links)

- Landing page: [https://welldonestake.io/](https://welldonestudio.io/)
- WELLDONE Wallet: [https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en-GB&authuser=0](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en-GB&authuser=0)
- WELLDONE Code: (배포되면 주소 추가)
- Add Chain: [http://addchain.welldonestudio.io/](http://addchain.welldonestudio.io/)
- Medium: [https://medium.com/dsrv/ko-introducing-웰던-스튜디오-여러분의-웹3-여행을-함께합니다-970b3da675c3](https://medium.com/dsrv/ko-introducing-%EC%9B%B0%EB%8D%98-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%EC%97%AC%EB%9F%AC%EB%B6%84%EC%9D%98-%EC%9B%B93-%EC%97%AC%ED%96%89%EC%9D%84-%ED%95%A8%EA%BB%98%ED%95%A9%EB%8B%88%EB%8B%A4-970b3da675c3)