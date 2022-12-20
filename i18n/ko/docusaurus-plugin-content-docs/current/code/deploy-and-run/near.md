---
sidebar_position: 1
description: NEAR 스마트 컨트랙트 배포 및 실행
keywords: [스마트 컨트랙트 배포 및 실행, 니어, 스마트 컨트랙트]
---

# NEAR

## Create the Project

NEAR는 AssemblyScript, Rust, JavaScript, TypeScript로 스마트 컨트랙트를 작성할 수 있습니다. 각 언어 별로 컨트랙트의 구조가 다르기 때문에 WELLDONE Code는 NEAR에 입문하는 개발자들을 도와주기 위해 두 가지 기능을 제공합니다.

### Create Template

AssemblyScript, Rust, JavaScript, TypeScript로 작성된 간단한 샘플 컨트랙트 코드를 생성합니다. 원하는 템플릿 옵션을 선택한 후 `Create Template` 버튼을 눌러 샘플 컨트랙트 코드를 생성할 수 있습니다. 더 많은 예제 코드 소스는 [NEAR Examples](https://github.com/near-examples)에서 확인하실 수 있습니다.

![template-code-near](img/template-code-near.png?raw=true 'template-code-near')

### New Project

스마트 컨트랙트를 작성하고자 하는 언어에 따른 컨트랙트 구조를 자동으로 생성합니다. 원하는 언어 옵션을 선택하고, 프로젝트의 이름을 작성한 후 `New Project` 버튼을 클릭하면 언어에 알맞은 컨트랙트 구조를 생성합니다.

![new-project-near](img/new-project-near.png?raw=true 'new-project-near')

:::info
WELLDONE Code에서 제공하는 기능을 이용하지 않고도 직접 컨트랙트 프로젝트를 생성할 수 있습니다. 단, 리믹스 플러그인을 통해 컴파일 및 배포하기 위해서는 near/ 폴더 내부에 컨트랙트를 작성해야 합니다. 새로 프로젝트를 생성한다면 프로젝트의 구조는 아래와 같아야 합니다.
:::

#### 1. Rust로 컨트랙트를 작성하는 경우
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── Cargo.toml
      └── src
          └── lib.rs
  ```

#### 2. AssemblyScript로 컨트랙트를 작성하는 경우
  ```
  near
  └── <YOUR_PROJECT_NAME>
      └── assembly
        ├── as_types.d.ts
        ├── index.ts
        └── tsconfig.json
  ```

#### 3. TypeScript로 컨트랙트를 작성하는 경우
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── package.json
      ├── babel.config.json
      ├── tsconfig.json
      └── src
        └── contract.ts
  ```

#### 4. JavaScript로 컨트랙트를 작성하는 경우
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── package.json
      ├── babel.config.json
      └── src
        └── contract.js
  ```

## Compile the Contract

:::info
WELLDONE Code에서는 현재 Rust, CARGO-NEAR, EMBED-ABI, AseemblyScript, JavaScript, TypeScript 총 6가지 컴파일 옵션을 제공합니다. 현재는 AMD 컴파일 서버만 지원하고 있으며, 곧 ARM 컴파일 서버도 지원할 예정입니다.
:::

**Step 1**: **PROJECT TO COMPILE** 섹션에서 컴파일하고자 하는 프로젝트를 선택합니다.

**Step 2**: 컴파일 옵션을 선택한 후 `Compile` 버튼을 클릭합니다.

**Step 3**: 컴파일이 완료되면 wasm 파일이 반환됩니다.

- **PROJECT TO COMPILE** 섹션에서 컴파일하고자 하는 프로젝트를 선택합니다.
- 컴파일 방식을 선택합니다.
- **Complie** 버튼을 클릭합니다.
- 컴파일이 완료되면, wasm file이 반환됩니다.

<img src={require('./img/project-compile.png').default} alt='near-compile' style={{width: '318px'}}/>

:::note
반환된 wasm 파일은 `near/<YOUR_PROJECT_NAME>/out` 디렉토리 안에 저장됩니다.

단, 수정 후 컴파일을 다시 해야 한다면 프로젝트 내의 `out` 디렉토리를 삭제하고 다시 컴파일해야 합니다.
:::

### 1. Rust Compile

[`cargo build`](https://doc.rust-lang.org/cargo/commands/cargo-build.html) 명령어를 사용하여 러스트로 작성된 스마트 컨트랙트를 컴파일합니다. 안정적인 컴파일을 제공하지만, 컨트랙트 실행 시 메소드의 params를 직접 입력해야 하는 불편함이 있습니다.

### 2. CARGO-NEAR Compile (for Rust) - `Experimental`

NEAR에서 공식적으로 개발 중인 `cargo near`를 이용하여 컴파일합니다. 컴파일이 성공하면 실행 가능한 wasm 바이너리 파일과 컨트랙트의 abi가 담긴 json 파일이 함께 생성됩니다. `cargo-near`를 사용해서 컴파일한 컨트랙트를 배포하여 가져온 경우에는 메소드의 파라미터 타입을 알 수 있어 더욱 편하게 컨트랙트를 실행할 수 있습니다.

하지만 해당 기능은 아직 개발 중인 기능이기 때문에, `Cargo.toml` 파일에서 `near-sdk-rs` 버전을 **4.1.0** 이상으로 지정해주어야 하고 컴파일 과정에서 예상치 못한 에러가 발생할 수 있습니다. 해당 프로젝트에 대한 자세한 정보는 NEAR의 [공식 레포지토리](https://github.com/near/abi)에서 확인할 수 있습니다.

### 3. EMBED-ABI Compile (for Rust) - `Experimental`

`cargo-near`의 `-embed-abi` 옵션을 사용하면 abi를 포함시킨 wasm 파일을 생성합니다. 해당 옵션을 사용하여 컴파일한 wasm 파일을 배포한 컨트랙트의 경우 `At Address` 버튼을 통해서 컨트랙트를 임포트할 때도 abi 정보를 가져올 수 있습니다. 옵션에 대한 자세한 설명은 [cargo-near](https://github.com/near/cargo-near) 레포지토리를 참고해주세요.

### 4. AssemblyScript Compile

[`asbuild`](https://github.com/AssemblyScript/asbuild)를 사용하여 AssemblyScript로 작성된 컨트랙트를 컴파일합니다. 안정적인 컴파일을 제공합니다.

### 5. JavaScript & TypeScript Compile

[`near-sdk-js`](https://github.com/near/near-sdk-js)를 사용하여 JavaScript 혹은 TypeScript로 작성된 컨트랙트를 컴파일합니다.

:::note
JavaScript 혹은 TypeScript 컴파일 옵션을 사용하는 경우, 반드시 컴파일하고자 하는 컨트랙트 파일의 이름을 다음과 같이 지정해주어야 정상적으로 컴파일이 실행됩니다.
- JavaScript: `contract.js`
- TypeScript: `contract.ts` 
:::

## Deploy the Contract

:::tip
WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 Deploy를 하기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다.
:::

**Step 1**: 컴파일이 완료된 컨트랙트 코드가 있는 경우 `Deploy` 버튼이 활성화됩니다.

**Step 2**: `receive_id`에 컨트랙트를 배포할 계정의 ID를 입력하고 `Deploy` 버튼을 클릭합니다.

**Step 3**: 만약 해당 계정에 이미 배포된 컨트랙트가 있다면 한 번 더 사용자의 확인을 요청합니다.

**Step 4**: **WELLDONE Wallet** 창에서 `Send Tx` 버튼을 클릭하여 트랜잭션에 서명합니다.

![Deploy](img/deploy-near.png?raw=true 'Deploy')

**Step 5**: 컨트랙트 배포가 성공하면 터미널에 트랜잭션 성공 로그가 출력되고, 컨트랙트를 실행시킬 수 있습니다.

<img src={require('./img/deployed-contract-near.png').default} alt='deployed-contract-near' style={{width: '318px'}}/>

## Execute the Contract

:::info
컨트랙트를 가져오는 방법에는 두 가지가 있습니다.

1. 위의 과정을 통해 배포한 컨트랙트를 자동으로 가져오는 방법
2. `At address` 버튼을 통해 기존에 배포된 컨트랙트를 가져오는 방법
:::

**Step 1**: 실행할 메소드를 선택합니다.

**Step 2**: 필요에 따라 매개변수를 추가합니다.

**Step 3**: `View` 또는 `Call` 버튼을 클릭하여 메소드를 실행합니다. 트랜잭션을 전송하는 경우, **WELLDONE Wallet**에서 `Send Tx` 버튼을 눌러 트랜잭션에 서명해야 합니다.

<img src={require('./img/function-call.png').default} alt='function-call' style={{width: '318px'}}/>

:::info
`CARGO-NEAR` 혹은 `EMBED-ABI` 옵션을 선택하여 컴파일한 컨트랙트를 배포한 경우에는 실행할 메소드의 파라미터를 직접 입력하지 않고 abi의 정보를 이용해서 더욱 간단하게 컨트랙트를 실행할 수 있습니다.
:::

<img src={require('./img/cargo-near.png').default} alt='cargo-near' style={{width: '318px'}}/>