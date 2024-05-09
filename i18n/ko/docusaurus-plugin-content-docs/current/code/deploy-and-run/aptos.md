---
sidebar_position: 2
description: Aptos 스마트 컨트랙트 배포 및 실행
keywords: [스마트 컨트랙트 배포 및 실행, Aptos, 앱토스, 스마트 컨트랙트]
---

# Aptos

### WELLDONE Code로 접속

[WELLDONE Code 플러그인](https://remix.ethereum.org/?#activate=wds-code-remix) 딥 링크를 통해 접속하면 **WELLDONE Code** 플러그인을 활성화할 수 있습니다.

## Create the Project

Aptos는 Move Language를 사용하여 스마트 컨트랙트를 작성할 수 있습니다. WELLDONE Code는 Aptos와 Move Language에 입문하는 개발자들을 도와주기 위해 두 가지 기능을 제공합니다.

### Create Template

Move Language로 작성된 간단한 샘플 컨트랙트 코드를 생성합니다. 원하는 템플릿 옵션을 선택한 후 `Create Template` 버튼을 눌러 샘플 컨트랙트 코드를 생성할 수 있습니다.

![template-code-aptos](img/template-code-aptos.png?raw=true 'template-code-aptos')

### New Project

스마트 컨트랙트를 작성하고자 하는 언어에 따른 컨트랙트 구조를 자동으로 생성합니다. 프로젝트의 이름을 작성한 후 `New Project` 버튼을 클릭하면 언어에 알맞은 컨트랙트 구조를 생성합니다.

![new-project-aptos](img/new-project-aptos.png?raw=true 'new-project-aptos')

:::info
WELLDONE Code에서 제공하는 기능을 이용하지 않고도 직접 컨트랙트 프로젝트를 생성할 수 있습니다. 단, 리믹스 플러그인을 통해 컴파일 및 배포하기 위해서는 aptos/ 폴더 내부에 컨트랙트를 작성해야 합니다. 새로 프로젝트를 생성한다면 프로젝트의 구조는 아래와 같아야 합니다.
:::

  ```
  aptos
  └── <YOUR_PROJECT_NAME>
      ├── Move.toml
      └── sources
          └── YOUR_CONTRACT_FILE.move
  ```

## Compile the Contract

**Step 1**: **PROJECT TO COMPILE** 섹션에서 컴파일하고자 하는 프로젝트를 선택합니다.

**Step 2**: 컴파일 옵션을 선택한 후 `Compile` 버튼을 클릭합니다.

**Step 3**: 컴파일이 완료되면 컴파일된 바이너리 파일이 반환됩니다.

- **PROJECT TO COMPILE** 섹션에서 컴파일하고자 하는 프로젝트를 선택합니다.
- 컴파일 방식을 선택합니다.
- **Complie** 버튼을 클릭합니다.
- 컴파일이 완료되면, wasm file이 반환됩니다.

<img src={require('./img/aptos-compile.png').default} alt='aptos-compile' style={{width: '318px'}}/>

:::note
반환된 wasm 파일은 `aptos/<YOUR_PROJECT_NAME>/out` 디렉토리 안에 저장됩니다.

단, 수정 후 컴파일을 다시 해야 한다면 프로젝트 내의 `out` 디렉토리를 삭제하고 다시 컴파일해야 합니다.
:::

:::info
현재 계정에 충분한 APT(약 0.3APT) 이상이 없으면, 트랜잭션에 서명이 불가능한 버그가 있습니다. 원인을 분석 중이며, 곧 해결하도록 하겠습니다. 개발하는데 참고하시기 바랍니다.
:::

## Deploy the Contract

:::tip
WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 Deploy를 하기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다.
:::

**Step 1**: 컴파일이 완료된 컨트랙트 코드가 있는 경우 `Deploy` 버튼이 활성화됩니다.

**Step 2**: `Deploy` 버튼 클릭 후 WELLDONE Wallet 창에서 `Send`버튼을 클릭하여 트랜잭션에 서명합니다.

![Deploy](img/deploy-aptos.png?raw=true 'Deploy')

**Step 3**: 컨트랙트 배포가 성공하면 터미널에 트랜잭션 성공 로그가 출력되고, 컨트랙트를 실행시킬 수 있습니다.

![Deploy](img/deployed-contract-aptos.png?raw=true 'Deploy')

## Execute the Contract

:::info
컨트랙트를 가져오는 방법에는 두 가지가 있습니다.

1. 위의 과정을 통해 배포한 컨트랙트를 자동으로 가져오는 방법
2. `At address` 버튼을 통해 기존에 배포된 컨트랙트를 가져오는 방법
:::

**Step 1**: 현재 계정이 소유하고 있는 모듈과 리소스들을 확인할 수 있으며, `Get Resource` 버튼을 통해 해당 리소스를 읽어 올 수 있습니다.

<img src={require('./img/view-aptos.png').default} alt='view-aptos' style={{width: '318px'}}/>

**Step 2**: 원하는 함수를 선택하고, 필요에 따라 파라미터를 입력하면 해당 함수의 기능이 실행 됩니다. `view` 함수가 아닌 `entry` 함수의 경우에는 트랜잭션 서명과 요청이 필요하기 때문에 WELLDONE Wallet에서의 서명이 필요합니다.

<img src={require('./img/entry-aptos.png').default} alt='entry-aptos' style={{width: '500px'}}/>