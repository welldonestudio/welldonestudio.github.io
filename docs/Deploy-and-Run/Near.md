---
sidebar_position: 1
description: Deploy and Run Near Smart Contract
---

## Choose a wallet

`WELLDONE Code`를 사용하기 위해서는 `WELLDONE Wallet`을 설치해야 합니다.

[➡️ WELLDONE Wallet 설치하기](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en)

![Select Wallet](img/select-wallet.png?raw=true 'Select Wallet')

`WELLDONE Code` 는 곧 Near Wallet을 지원할 예정입니다.

## Connect

`WELLDONE wallet`을 연결하기 이전에 `WELLDONE wallet`에 NEAR account를 생성해주세요.

![Connect Wallet](img/connect-wallet.png?raw=true 'Connect Wallet')

## Create Project

AssemblyScript나 Rust로 작성된 간단한 샘플 컨트랙트 코드 탬플릿을 생성해주세요. `Create Template` 버튼을 눌러 샘플 템플릿을 생성할 수 있습니다. 더 많은 템플릿 소스는 [NEAR Examples](https://examples.near.org/)에서 확인하실 수 있습니다.

![Template Tree](img/template-tree.png?raw=true 'Template Tree')

혹은 당신이 새로운 프로젝트를 생성하고자 한다면, New Project 버튼을 클릭하여 생성할 수 있습니다.
:::info
단, 리믹스 플러그인을 통해 컴파일과 디플로이를 하기 위해서는 near/ 폴더 내부에 컨트랙트를 작성해야 합니다. 새로 프로젝트를 생성한다면 프로젝트의 구조는 아래와 같아야 합니다.
:::

### 1. rust로 컨트랙트를 작성하는 경우

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── .cargo
      │   └── config
      ├── Cargo.toml
      └── src
          └── lib.rs
  ```

### 2. assembly script로 컨트랙트를 작성하는 경우

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── as_types.d.ts
      ├── index.ts
      └── tsconfig.json
  ```

## Compile

:::info
WELLDONE Code에서는 두 가지 컴파일 옵션이 제공됩니다. 현재는 amd 컴파일 서버만 지원하고 있으며, 곧 arm 컴파일 서버도 지원할 예정입니다.
:::

### 1. Near Compile

near에서 제공하는 기본 compile을 이용합니다. 안정적인 compile을 제공하지만, 컨트랙트 테스트 시 method의 params를 직접 입력해야하는 불편함이 있습니다. 이 불편함을 해소하고자 WELLDONE Code에서는 Raen Compile 옵션도 함께 제공합니다.

### 2. Raen Compile

`raen build`를 이용하여 Compile 합니다. 아직 개발 중인 builder라 때때로 제대로 작동하지 않을 수 있습니다. 그러나 이것을 통해 Compile하면 컨트랙트 테스트 시 method의 params를 입력하지 않아도 되며, 컨트랙트의 메서드 정보들을 json형태로 추출할 수 있습니다. 더 자세한 정보는 [이 링크](https://github.com/raendev/raen)를 참고하세요.

### 3. How to Compile

- `PROJECT TO COMPILE` 섹션에서 컴파일하고자 하는 프로젝트를 선택하세요.
- 컴파일할 코드의 언어를 선택하세요.
- Complie버튼을 클릭하세요.
- 컴파일이 완료되면, wasm file이 반환됩니다.

![Project Compile](img/project-compile.png?raw=true 'Project Compile')

:::note
단, 수정 후 컴파일을 다시 해야한다면 near/out 디렉토리를 삭제하고 다시 컴파일 헤주세요.
:::

## Deploy

:::tip
WELLDONE Wallet에서는 해당 지갑 주소에 연결되어 있는 네트워크를 자동으로 감지하여 가져옵니다. 따라서 Deploy를 하기 이전에 메인넷에 트랜젝션을 보낼 것인지, 테스트넷에 트랜젝션을 보낼 것인지 미리 고려해두어야 합니다.
:::

- 컴파일된 컨트랙트 코드가 있는 경우 `receive_id`에 값을 입력하고 디플로이 버튼을 클릭하세요.
- 지갑을 사용하여 거래에 서명하십시오.

![Deploy](img/deploy.png?raw=true 'Deploy')

- 컨트랙트가 배포되면, 당신은 함수를 실행시킬 수 있습니다.

![Deployed Contract](img/deployed-contract.png?raw=true 'Deployed Contract')

## View and Call function

:::info
WELLDONE Code에서는 Near Contract에 대한 빌드를 `raen build`를 사용해서 진행합니다. `raen build`를 사용하면 파라미터를 따로 입력하지 않아도 손쉽게 `View`나 `Call`에 대한 테스트를 진행할 수 있습니다. `raen build`가 아닌 방식으로 빌드한 컨트랙트를 `At Address`에 입력하여 불러오는 경우, 따로 메서드에 대한 파라미터를 입력하여야 합니다.
:::

- `At Address` 내부에 컨트랙트 아이디를 입력하여 기존에 배포된 컨트랙트를 호출할 수 있습니다.
- 호출할 메서드를 선택합니다.
- 필요에 따라 매개변수를 추가합니다.
- `View` or `Call`를 통해 값을 읽거나 트랜젝션을 전송합니다.

![View Function](img/view-function.png?raw=true 'View Function')

![Function Call](img/function-call.png?raw=true 'Function Call')
