---
title: Sui zkLogin
description: Sui zkLogin Tutorial 
sidebar_position: 9
---

# Sui zkLogin

<div>
  <span className='author-sm'>January 16, 2024</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/0xhsy' target='_blank'><img src='https://avatars.githubusercontent.com/u/102006034?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Sooyoung Hyun</span><br/>
      <span className='author-sm'>Lead Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Introduction

블록체인 기술의 발전은 사용자 인터페이스와 보안에 대한 새로운 요구사항을 제시하고 있습니다. 이러한 배경 속에서, WELLDONE zkWallet은 Sui 블록체인의 zkLogin 기능을 통합하여 사용자가 기존의 Web2 자격 증명을 사용하여 블록체인 서비스에 효율적으로 접근할 수 있는 방법을 제공합니다. 이 글에서는 WELLDONE zkWallet이 zkLogin을 활용하여 사용자 경험을 향상시키고 다양한 브라우저 확장 지갑과의 연결을 용이하게 하는 방법을 탐구할 것입니다.

**WELLDONE zkWallet and Sui's zkLogin: A Structural Approach to Enhancing User Experience and Security**

WELLDONE zkWallet이 Sui의 zkLogin 기능을 통합하는 방식은 블록체인 기술의 접근성과 보안성을 동시에 향상시키는 구조적 접근법을 제공합니다. 이러한 통합은 다음과 같은 방식으로 이루어집니다.

1. **별도 웹페이지 통합**: WELLDONE zkWallet은 사용자가 다양한 브라우저 확장 지갑을 선택하고 연결할 수 있는 별도의 웹페이지를 제공합니다. 이 웹페이지는 Sui의 zkLogin 기능과 직접 통합되어, 사용자가 기존의 Web2 자격 증명을 사용하여 블록체인 서비스에 접근할 수 있게 합니다.

2. **영지식 증명 메커니즘**: zkLogin의 핵심은 영지식 증명 기술입니다. 이 기술을 통해 사용자는 자신의 신원 정보를 숨긴 채로 블록체인 서비스에 안전하게 접근할 수 있습니다. 사용자는 신원을 공개하지 않고 서비스에 접근할 수 있으며, 이 과정은 개인 정보를 완벽하게 보호합니다.

3. **이중 인증 메커니즘**: WELLDONE zkWallet은 지갑 키 관리와 OAuth 인증을 결합하여 이중 보안 계층을 제공합니다. 사용자는 지갑에 접근하기 위해 두 가지 요소를 모두 만족시켜야 합니다: 지갑의 개인 키와 OAuth 제공자를 통한 이중 인증 접근 방식. 이는 단일 인증 방법보다 훨씬 강력한 보안을 제공합니다. 특히, WELLDONE zkWallet은 웹 인터페이스를 통해 Web2 자격 증명 토큰과 ephemeral key pairs을 분리하여 저장함으로써 추가적인 보안 메커니즘을 제공합니다.

4. **다양한 지갑과의 호환성:**: WELLDONE zkWallet은 다양한 브라우저 확장 지갑과 호환되도록 표준화되고 설계되었습니다. 지갑 개발자들은 zkLogin을 사용하기 위해 추가적인 개발이 필요 없으며, 사용자는 자신의 선호에 따라 다양한 지갑 옵션을 선택할 수 있어 더 넓은 범위의 사용자 요구를 충족시킵니다.

5. **간소화된 사용자 인터페이스**: WELLDONE zkWallet의 웹 인터페이스는 사용자 친화적이고 직관적입니다. 사용자는 몇 번의 클릭만으로 웹 계정을 통해 지갑에 접근할 수 있어 편리함을 제공하면서도 보안을 유지합니다.

6. **Dapp과의 원활한 통합**: WELLDONE zkWallet은 다양한 분산 애플리케이션(Dapp)과의 직접적인 상호작용을 지원합니다. 이를 통해 사용자는 웹 지갑을 통해 Dapp을 더 효율적으로 사용할 수 있습니다. Dapp과의 상호작용에 대한 정보는 [이 문서](https://docs.welldonestudio.io/wallet/zkWallet)에서 확인할 수 있습니다.

이러한 구조적 접근 방식은 블록체인 기술의 복잡성을 줄여 사용자가 이해하고 활용하기 쉽게 만듭니다. WELLDONE zkWallet의 통합은 사용자가 기술적 장벽에 대한 걱정 없이 블록체인 기술을 쉽고 안전하게 사용할 수 있도록 하는 데 중점을 둡니다. 이제 다음 튜토리얼을 통해 더 자세히 살펴보겠습니다.

## Tutorial

:::tip 호환 가능 지갑

- WELLDONE Wallet, Sui Wallet, Elli Wallet

:::

0. [WELLDONE Wallet](https://docs.welldonestudio.io/wallet/manual) 또는 다른 브라우저 확장 지갑을 설치하세요. 확장 지갑의 공개 키와 OAuth 로그인을 통해 **JSON 웹 토큰(JWT)**을 받게 되며, 확장 지갑의 개인 키로 트랜잭션에 서명할 수 있습니다. 실습을 위해 Sui 계정을 생성하고 네트워크를 Devnet으로 설정하세요.

<img src={require('./img/install-wallet.png').default} alt='install-wallet' style={{width: '300px', marginBottom: '30px'}}/>

1. [https://zkwallet.welldonestudio.io](https://zkwallet.welldonestudio.io)에서 지갑을 사이트에 연결하세요. Sui Wallet을 통해 zkLogin으로 이미 생성된 주소를 사용하는 것은 공개 키를 모르기 때문에 작동하지 않는 것을 유의하세요.

<img src={require('./img/connect-wallet.png').default} alt='connect-wallet'  style={{marginBottom: '30px'}}/>

2. 자격 증명을 통해 **OpenID 제공자(OP)** 로부터 JWT를 획득합니다.

<img src={require('./img/oauth-login.png').default} alt='oauth-login' style={{marginBottom: '30px'}}/>

3. 그러면 아래와 같이 Sui의 첫 번째 웹 지갑인 WELLDONE zkWallet에 로그인하게 됩니다. 새로운 주소는 확장 지갑의 공개 키, JWT, 사용자 솔트를 사용하여 생성됩니다. 이 주소의 키 쌍은 알 수 없습니다. 그러나 지갑 키와 OP 인증과 같은 독립적인 요소를 통해 제어함으로써 강력한 보안을 얻을 수 있습니다.

<img src={require('./img/check-address.png').default} alt='check-address' style={{marginBottom: '30px'}}/>

4. [Faucet](https://docs.sui.io/guides/developer/getting-started/get-coins)를 통해 SUI 코인을 받고 Stake 트랜잭션을 실행합니다.

<img src={require('./img/send-tx.png').default} alt='send-tx' style={{marginBottom: '30px'}}/>

5. 브라우저 확장 지갑의 계정 개인 키로 트랜잭션에 서명합니다.

<img src={require('./img/sign-tx.png').default} alt='sign-tx' style={{marginBottom: '30px'}}/>

6. 트랜잭션이 성공적으로 전송되었고 stake 함수가 실행되었음을 확인할 수 있습니다.

<img src={require('./img/check-result.png').default} alt='check-result' style={{marginBottom: '30px'}}/>

위에서 설명한 과정은 다음과 같이 요약할 수 있습니다.

<img src={require('./img/process.webp').default} alt='process' style={{marginBottom: '30px'}}/>

또한 아래 이미지에서 보이는 것처럼, "지갑 추가" 기능을 통해 여러 계정 주소를 생성할 수 있습니다. 이는 단일 JWT로 여러 계정 주소를 생성할 수 있게 하는 사용자의 솔트만 변경하면 가능합니다.

<img src={require('./img/add-wallet.png').default} alt='add-wallet' style={{marginBottom: '30px'}}/>

용어와 내부 작동에 대한 자세한 설명은 [Sui documentation](https://docs.sui.io/concepts/cryptography/zklogin)를 참조하세요.

## Conclusion

Sui의 zkLogin 기능을 사용하는 Sui 웹 지갑의 작동 방식을 살펴보았습니다. 확장 지갑과 zkLogin 인증 과정의 분리는 다양한 지갑 옵션과의 호환성을 높입니다. 사용자는 선호하는 지갑을 선택할 수 있으며, WELLDONE zkWallet의 인증 시스템은 이러한 다양한 지갑과 원활하게 통합됩니다. 이는 사용자에게 더 많은 선택권을 제공하고 다양한 사용자 요구를 충족시킵니다. 니모닉이나 개인 키 관리가 필요한 확장 지갑은 레저 지갑처럼 사용할 수 있습니다.

또한 웹 지갑은 다양한 Dapp과 직접 상호작용할 수 있습니다. Dapp과 웹 지갑 간의 상호작용은 [이 문서](https://docs.welldonestudio.io/wallet/zkWallet)에서 확인할 수 있습니다.

Sui zkLogin과 WELLDONE zkWallet의 통합을 통해 사용자는 블록체인 기술을 더 안전하고 직관적으로 사용할 수 있습니다. 이러한 혁신을 통해 WELLDONE zkWallet은 블록체인 기술의 실용성과 보안성을 향상시키며 사용자 경험을 새로운 수준으로 끌어올릴 것으로 기대합니다.