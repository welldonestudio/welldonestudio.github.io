---
sidebar_position: 1
description: NEAR 스마트 컨트랙트 배포 및 실행
keywords: [스마트 컨트랙트 배포 및 실행, 니어, 스마트 컨트랙트]
---

# NEAR

## Select a Chain

먼저 Select a Chain 화면에서 NEAR를 선택합니다.

![Select Chain](img/select-chain-near.png?raw=true 'Select Chain')

## Connect

`WELLDONE Code`를 사용하기 위해서는 `WELLDONE Wallet`을 설치해야 합니다.

[➡️ WELLDONE Wallet 설치하기](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=ko)

`WELLDONE wallet`에 [NEAR account를 생성](https://docs.welldonestudio.io/ko/wallet/manual/how-to-create-an-account/)한 후 `Connect to WELLDONE` 버튼을 클릭하여 지갑과 연결합니다.

![Connect Wallet](img/connect-wallet-near.png?raw=true 'Connect Wallet')

## Create Project

AssemblyScript나 Rust로 작성된 간단한 샘플 컨트랙트 코드 탬플릿을 생성합니다. `Create Template` 버튼을 눌러 샘플 템플릿을 생성할 수 있습니다. 더 많은 템플릿 소스는 [NEAR Examples](https://examples.near.org/)에서 확인하실 수 있습니다.

![Template Tree](img/template-tree.png?raw=true 'Template Tree')

혹은 새로운 프로젝트를 생성하고자 한다면, New Project 버튼을 클릭하여 생성할 수 있습니다.
:::info
단, 리믹스 플러그인을 통해 컴파일 및 배포하기 위해서는 near/ 폴더 내부에 컨트랙트를 작성해야 합니다. 새로 프로젝트를 생성한다면 프로젝트의 구조는 아래와 같아야 합니다.
:::

### 1. Rust로 컨트랙트를 작성하는 경우

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── Cargo.toml
      └── src
          └── lib.rs
  ```

### 2. AssemblyScript로 컨트랙트를 작성하는 경우

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      └── assembly
        ├── as_types.d.ts
        ├── index.ts
        └── tsconfig.json
  ```

### 3. TypeScript로 컨트랙트를 작성하는 경우

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── package.json
      ├── babel.config.json
      ├── tsconfig.json
      └── src
        └── contract.ts
  ```

### 4. JavaScript로 컨트랙트를 작성하는 경우

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── package.json
      ├── babel.config.json
      └── src
        └── contract.js
  ```

## Compile

:::info
WELLDONE Code에서는 네 가지 컴파일 옵션이 제공됩니다. 현재는 AMD 컴파일 서버만 지원하고 있으며, 곧 ARM 컴파일 서버도 지원할 예정입니다.
:::

- **PROJECT TO COMPILE** 섹션에서 컴파일하고자 하는 프로젝트를 선택합니다.
- 컴파일 방식을 선택합니다.
- **Complie** 버튼을 클릭합니다.
- 컴파일이 완료되면, wasm file이 반환됩니다.

![Project Compile](img/project-compile.png?raw=true 'Project Compile')

:::note
반환된 wasm 파일은 `near/<YOUR_PROJECT_NAME>/out` 디렉토리 안에 저장됩니다.

단, 수정 후 컴파일을 다시 해야 한다면 프로젝트 내의 `out` 디렉토리를 삭제하고 다시 컴파일합니다.
:::

### 1. Rust Compile

[`cargo build`](https://doc.rust-lang.org/cargo/commands/cargo-build.html) 명령어를 사용하여 러스트로 작성된 스마트 컨트랙트를 컴파일합니다. 안정적인 compile을 제공하지만, 컨트랙트 실행 시 method의 params를 직접 입력해야 하는 불편함이 있습니다.

### 2. CARGO-NEAR Compile (for Rust) - `Experimental`

NEAR에서 공식적으로 개발 중인 `cargo near`를 이용하여 Compile 합니다. Compile이 성공하면 실행 가능한 wasm 바이너리 파일과 컨트랙트의 abi가 담긴 json 파일이 함께 생성됩니다. `cargo-near`를 사용해서 컴파일한 컨트랙트를 배포하여 가져온 경우에는 메소드의 파라미터 타입을 알 수 있어 더욱 편하게 컨트랙트를 실행할 수 있습니다.

하지만 해당 기능은 아직 개발 중인 기능이기 때문에, `Cargo.toml` 파일에서 `near-sdk-rs` 버전을 **4.1.0** 이상으로 지정해주어야 하고 컴파일 과정에서 예상치 못한 에러가 발생할 수 있습니다. 해당 프로젝트에 대한 자세한 정보는 NEAR의 [공식 레포지토리](https://github.com/near/abi)에서 확인할 수 있습니다.

### 3. EMBED-ABI Compile (for Rust) - `Experimental`

`cargo-near`의 `-embed-abi` 옵션을 사용하면 abi를 포함시킨 wasm 파일을 생성합니다. 해당 옵션을 사용하여 컴파일한 wasm 파일을 배포한 컨트랙트의 경우 `At Address` 버튼을 통해서 컨트랙트를 임포트할 때도 abi 정보를 가져올 수 있습니다. 옵션에 대한 자세한 설명은 [cargo-near](https://github.com/near/cargo-near) 레포지토리를 참고해주세요.

### 4. AssemblyScript Compile

[`asbuild`](https://github.com/AssemblyScript/asbuild)를 사용하여 AssemblyScript로 작성된 컨트랙트를 컴파일합니다. 안정적인 컴파일을 제공합니다.

### 5. JavaScript & TypeScript Compile

[`near-sdk-js`](https://github.com/near/near-sdk-js)를 사용하여 JavaScript 혹은 TypeScript로 작성된 컨트랙트를 컴파일합니다.

## Deploy

:::tip
WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 Deploy를 하기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다.
:::

- 컴파일된 컨트랙트 코드가 있는 경우 `receive_id`에 값을 입력하고 디플로이 버튼을 클릭합니다.
- 지갑을 사용하여 거래에 서명합니다.

![Deploy](img/deploy.png?raw=true 'Deploy')

- 컨트랙트 배포 후에 컨트랙트 메소드를 실행할 수 있습니다.

![Deployed Contract](img/deployed-contract.png?raw=true 'Deployed Contract')

## View and Call function

- `At Address` 내부에 컨트랙트 아이디를 입력하여 기존에 배포된 컨트랙트를 호출할 수 있습니다.
- 호출할 메소드를 선택합니다.
- 필요에 따라 매개변수를 추가합니다.
- `View` 또는 `Call` 명령을 통해 값을 읽거나 트랜잭션을 전송합니다.

![View Function](img/view-function.png?raw=true 'View Function')

![Function Call](img/function-call.png?raw=true 'Function Call')

:::info
`cargo-near` 혹은 `embed-abi` 옵션을 선택하여 컴파일한 컨트랙트를 배포한 경우에는 실행할 메소드의 파라미터를 직접 입력하지 않고 abi의 정보를 이용해서 더욱 간단하게 컨트랙트를 실행할 수 있습니다.
:::

![cargo-near](img/cargo-near.png?raw=true 'cargo-near')