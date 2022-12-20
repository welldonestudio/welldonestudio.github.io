---
sidebar_position: 0
title: Getting Started
description: WELLDONE Code 사용하기
keywords:
  [리믹스 플러그인, 멀티체인 컨트랙트, 스마트 컨트랙트, 스마트 컨트랙트 ide, 컨트랙트 웹 ide]
---

## How to connect to WELLDONE Code

**WELLDONE Code**는 Remix IDE 공식 플러그인 입니다. [Remix IDE](https://remix.ethereum.org/) 사이트로 방문하여 아래의 가이드를 따라주세요.

**Step 1**: 왼쪽 바의 `Plugin Manager` 버튼을 클릭합니다.

**Step 2**: **CODE BY WELLDONE STUDIO**를 검색하여 `Activate` 버튼을 클릭합니다.

![Plugin Manager](deploy-and-run/img/plugin-manager.png?raw=true 'Plugin Manager')

Step2 스크린샷 이미지 추가하기 ***

**WELLDONE Code** 플러그인이 성공적으로 추가되었다면 왼쪽 바에 나타난 아이콘을 클릭하여 **WELLDONE Code**를 실행할 수 있습니다.

## Select a Chain

**WELLDONE Code**의 실행 첫 화면은 다음과 같습니다. `Select a Chain` 섹션에서 컨트랙트를 개발하고자 하는 체인을 선택해주세요.

`Documentation` 버튼을 클릭하면 WELLDONE Docs로 이동하고, 사용 중 문제를 발견한 경우나 문의 사항이 있다면 `Make an issue` 버튼을 클릭하여 [깃허브 레포지토리](https://github.com/welldonestudio/welldonestudio.github.io)로 이동해 이슈를 자유롭게 생성해주세요. 

![Select Chain](deploy-and-run/img/select-chain.png?raw=true 'Select Chain')

## Connect to WELLDONE Wallet

**WELLDONE Code**를 사용하기 위해서는 체인을 선택한 후 제일 먼저 `Connect to WELLDONE` 버튼을 클릭하여 **WELLDONE Wallet**에 연결해야 합니다.

**WELLDONE Wallet**이 설치되지 않은 경우 `Install WELLDONE Wallet` 이라는 에러가 발생하고, **WELLDONE Wallet**이 설치되어 있지만 지갑이 잠겨 있거나 해당 체인의 계정이 생성되어 있지 않은 경우 `Unlock your WELLDONE Wallet OR Create Account` 라는 에러가 발생합니다.

![Connect Wallet Install Error](deploy-and-run/img/connect-wallet-notinstall.png?raw=true 'Connect Wallet Install Error');
![Connect Wallet Locked](deploy-and-run/img/connect-wallet-lock.png?raw=true 'Connect Wallet Locked');

아직 **WELLDONE Wallet**을 설치하지 않았다면 다음 [매뉴얼](https://docs.welldonestudio.io/ko/wallet/manual)을 따라 지갑을 설치•생성한 후, 선택한 체인의 계정을 생성해주세요. 지갑의 변경사항을 적용하기 위해서는 플러그인 오른쪽 상단의 새로고침 버튼을 클릭해야 합니다.
**WELLDONE Wallet**과 성공적으로 연결된다면 연결된 계정의 이름과 토큰 잔액이 플러그인에 표시될 것입니다.

<img src={require('./deploy-and-run/img/connect-wallet-success.png').default} alt='Connect Wallet' style={{width: '320px'}}/>

체인 별 WELLDONE Code의 사용법은 다음 섹션을 참고해주세요.

***

#### Related

Remix IDE 사용 방법에 대한 자세한 내용을 알고 싶다면 [Remix IDE 공식 문서](https://remix-ide.readthedocs.io/en/latest/)를 참조해주세요.

