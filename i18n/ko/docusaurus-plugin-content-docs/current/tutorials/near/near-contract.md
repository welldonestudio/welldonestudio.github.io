---
title: Rust Smart Contract in NEAR
description: WELLDONE Code를 통해 NEAR에서 Rust 카운터 컨트랙트 배포하고 실행하기
---

# WELLDONE Code를 통해 NEAR에서 Rust 카운터 컨트랙트 배포하고 실행하기

## Introduction

이번 튜토리얼에서 우리는 WELLDONE Code를 사용하여 Near 테스트넷에 간단한 카운터 스마트 컨트랙트를 배포하고 배포한 컨트랙트를 실행해보도록 하겠습니다. Welldone Code는 Web3 개발자가 더욱 쉽게 멀티 체인 상에서 컨트랙트를 배포하고 테스트할 수 있도록 도와주는 멀티체인을 지원하는 최초의 Remix IDE 플러그인 입니다. 새로운 네트워크에서 개발을 하고자 할 때마다 해당 네트워크 환경에 맞는 개발 환경을 다시 구축해야 하는 어려움을 대신 해결해주고, 개발자가 개발과 테스트에 집중할 수 있는 환경을 제공합니다. WELLDONE Code에 대한 보다 자세한 설명은 다음 [포스팅](https://medium.com/dsrv/%EC%83%88%EB%A1%9C%EC%9A%B4-%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%EA%B0%9C%EB%B0%9C-%EA%B2%BD%ED%97%98%EC%9C%BC%EB%A1%9C%EC%9D%98-%EC%B4%88%EB%8C%80-%EB%A9%80%ED%8B%B0%EC%B2%B4%EC%9D%B8%EC%9D%84-%EC%9C%84%ED%95%9C-ide-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-welldone-%EC%BD%94%EB%93%9C-810225a2b0e9)을 참고해주세요.

현재(2022.09.01) 기준으로 WELLDONE Code는 Near, Celo, Klaytn 을 지원하고 있으며 Osmosis, Celestia, Solana 등을 추후 지원할 예정입니다.

:::tip Prerequisites

- WELLDONE Code는 현재 WELLDONE Wallet을 지원합니다. [WELLDONE Wallet 익스텐션](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=ko)을 크롬 브라우저에 설치해주세요. WELLDONE Wallet에 대한 자세한 설명은 다음 [링크](https://medium.com/dsrv/%EB%A9%80%ED%8B%B0%EC%B2%B4%EC%9D%B8-%EA%B7%B8-%EC%9D%B4%EC%83%81%EC%9D%98-%EA%B2%BD%ED%97%98-%EC%8B%9C%EC%9E%91%EB%B6%80%ED%84%B0-%EB%8B%A4%EB%A5%B4%EA%B2%8C-welldone-%EC%9B%94%EB%A0%9B-%EB%9F%B0%EC%B9%AD-374c9f6890b8)에서 확인할 수 있습니다.
- Rust에 대한 기본적인 이해가 있다면 컨트랙트를 이해하는 데 도움이 됩니다.

:::

## Remix IDE에서 WELLDONE Code 추가하기

먼저 [Remix IDE 사이트](https://remix.ethereum.org/%EB%A1%9C)에 접속한 후, 다음의 가이드를 따라 WELLDONE Code 플러그인을 추가합니다. 현재 코드 안정성 확보를 위해 로컬 플러그인으로 제공 중이며, 추후 Remix 공식 플러그인으로 등록할 예정입니다.

1. 왼쪽 바의 `Plugin Manager` 아이콘을 클릭한 후, '`Connect to a Local Plugin`'를 클릭합니다.

   ![1_1](./img/1_1.png '1_1')

2. `Url` 필드에 [https://remix-plugin.welldonestudio.io/](https://remix-plugin.welldonestudio.io/) 를 추가하고, `Plugin Name`을 입력해줍니다.

   ![1_2](./img/1_2.png '1_2')

3. `Active Modules` 에 아래처럼 WELLDONE Code 가 보이고 좌측 바에 아이콘이 추가되었다면 플러그인이 성공적으로 추가된 것입니다. 해당 아이콘을 클릭하면 다음과 같이 WELLDONE Code로 연결할 수 있습니다.

   ![1_3](./img/1_3.png '1_3')
   ![1_4](./img/1_4.png '1_4')

:::note
`Documentation` 버튼을 클릭하면 [Welldone Studio Docs](https://docs.welldonestudio.io/ko/code/deploy-and-run)로 이동하여 WELLDONE CODE에 대한 자세한 설명과 사용법을 알아볼 수 있습니다. 사용하시면서 제보하고 싶은 이슈가 생긴다면 `Make an issue` 버튼을 클릭하여 자유롭게 이슈를 제보해주세요.
:::

## WELLDONE Code를 사용하여 NEAR 스마트 컨트랙트 작성하기

### WELLDONE Wallet 연결하기

`Select a Chain` 섹션에서 NEAR를 클릭하여 들어가면 다음과 같은 화면이 나타납니다.
![1_5](./img/1_5.png '1_5')
![1_6](./img/1_6.png '1_6')

WELLDONE Code를 사용하기 위해서는 `Connect to WELLDONE` 버튼을 눌러서 WELLDONE Wallet과 먼저 연결해야 합니다. WELLDONE Wallet을 설치하지 않은 상태에서 버튼을 누른다면 터미널에 아래와 같은 로그가 표시될 것입니다. 로그의 설명을 따라 [WELLDONE Wallet 익스텐션](https://abit.ly/install-welldone-wallet)을 설치해주세요.

```
Please Install WELLDONE Wallet https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf . If you have installed it, please press the refresh button.
```

WELLDONE Wallet 익스텐션을 설치한 후에는 지갑과 NEAR 계정을 생성해야 합니다. 만약 계정을 생성하지 않고 Connect to WELLDONE 버튼을 클릭한다면 `Please Unlock your WELLDONE Wallet OR Create Account` 이라는 로그가 터미널에 출력될 것입니다. WELLDONE Wallet과 계정을 생성하는 방법은 다음 [매뉴얼](https://docs.welldonestudio.io/ko/wallet/manual)을 참고해주세요.

WELLDONE Wallet에서 NEAR 계정을 생성했다면, `Connect to Wallet` 버튼을 클릭하여 WELLDONE Code와 지갑을 연결합니다. 그러면 아래와 같이 접근을 요청하는 창이 뜨고 `Accept` 버튼을 클릭하면 Account 섹션에 연결된 계정의 ID와 잔액이 표시됩니다.

![1_7](./img/1_7.png '1_7')
![1_8](./img/1_8.png '1_8')

### 카운터 예제 템플릿 코드 생성하기

**TEMPLATE CODE** 섹션에서는 Rust와 AssemblyScript로 작성된 간단한 Counter 예제와 Rust로 작성된 FT, NFT 예제 코드를 생성할 수 있습니다. 우리는 Rust로 작성된 Counter 예제를 함께 살펴보며 배포를 진행할 예정이므로 rs_counter 를 선택한 후 `Create Template` 버튼을 클릭합니다. 파일에 접근하는 권한을 요청하는 창에서 Accept를 클릭한 후, 성공적으로 파일이 생성되었다면 터미널에 `rs_counter is created successfully.` 라는 로그가 출력될 것입니다.

![1_9](./img/1_9.png '1_9')
![1_10](./img/1_10.png '1_10')

워크스페이스로 이동해서 살펴보면 다음과 같이 `near` 폴더 안에 `rs_counter`라는 폴더가 생성된 것을 확인할 수 있습니다.

![1_11](./img/1_11.png '1_11')

만약, 제공하는 템플릿 코드가 아니라 직접 스마트 컨트랙트를 작성하고 싶다면 Project 섹션에서 사용하고자 하는 언어를 선택한 후 Project Name을 입력한 후 `New Project` 버튼을 클릭하면 다음과 같이 기본 구조가 자동으로 만들어집니다.

:::note
현재 NEAR 컨트랙트 언어로 **Rust**와 **AssemblyScript** 만을 지원하지만 추후 **Javascript**도 추가 지원할 예정입니다.
:::

![1_12](./img/1_12.png '1_12')
![1_13](./img/1_13.png '1_13')

:::note
WELLDONE Code를 통해 NEAR 에서 컨트랙트를 컴파일 및 배포하기 위해서는 `near/` 폴더 내부에 컨트랙트를 작성해야 합니다. 직접 프로젝트를 생성한다면 아래의 프로젝트 구조를 따라야 합니다.
:::

```bash
1. Using Rust:

  near
  └── <YOUR_PROJECT_NAME>
      ├── Cargo.toml
      └── src
          └── lib.rs

2. Using AssemblyScript:

  near
  └── <YOUR_PROJECT_NAME>
      ├── as_types.d.ts
      ├── index.ts
      └── tsconfig.json
```

### 카운터 컨트랙트 톺아보기

이제 _rs_counter_ 폴더 안의 _src/lib.rs_ 파일에서 컨트랙트 코드를 함께 보면서 NEAR에서 Rust로 스마트 컨트랙트를 어떻게 작성하는 지 살펴보겠습니다.

_src/lib.rs_ 코드의 제일 상단에서는 _/Cargo.toml_ 파일에 선언된 `near_sdk` 에 접근해서 스마트 컨트랙트 작성에 필요한 모듈을 import 했습니다.

```rust
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{log, near_bindgen};
```

- `self` : `BorshDeseiralize`와 `BorshSerialize`가 작동하기 위해 필요합니다. 스마트 컨트랙트 자기 자신을 참조합니다.
- `BorshDeserialize` : 스마트 컨트랙트의 함수를 호출하면서 인자를 함께 전달할 때, JSON 타입의 인자를 역직렬화합니다.
- `BorshSerialize` : 스마트 컨트랙트에서 결과를 다시 보낼 때 JSON으로 직렬화합니다.
- `near_bindgen` : 스마트 컨트랙트라는 것을 알려주는 어노테이션으로 각 컨트랙트마다 `near_bindgen` 어노테이션과 함께 선언된 struct가 적어도 하나씩은 있어야 합니다.

:::tip **WELLDONE Studio’s Tip : What is Borsh?**

Rust를 주로 다뤄보셨던 분들은 [Serde](https://github.com/serde-rs/serde)라는 데이터 직렬화 및 역직렬화 프레임워크에 익숙하실 것 같습니다. 하지만 NEAR는 [Borsh](https://borsh.io/)라는 별도의 Rust용 프레임워크를 만들었습니다. Borsh는 Serde보다 속도와 안정성 측면에서 우수하다고 주장합니다.

:::

다음으로 `struct`를 선언합니다. struct 선언자 위의 [attributes](https://doc.rust-lang.org/reference/attributes.html) 들은 WebAssembly로 컴파일된 파일이 NEAR 블록체인에서 호환될 수 있도록 해줍니다. `Default`는 컨트랙트의 기본 생성자로, 컨트랙트를 배포한 후 함수를 실행하려 할 때 함수 실행 전에 NEAR의 가상머신이 기본값으로 컨트랙트를 초기화합니다.

아래 코드의 경우 `val`은 `i8` 타입이기 때문에 기본값인 0으로 초기화가 될 것입니다. `pub` 는 스마트 컨트랙트가 public 하게 접근 가능하다는 것을 의미합니다.

```rust
#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct Counter {
    val: i8,
}
```

만약 기본값이 아닌 다른 값으로 컨트랙트를 초기화하고 싶다면 아래와 같이 구현할 수 있습니다.

```rust
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Counter {
    val: i8,
}

impl Default for Counter{
    fn default() -> Self {
        Counter {val: 8}
    }
}
```

이제 `impl`을 사용해서 컨트랙트의 실제 함수들을 구현할 것입니다. NEAR의 스마트 컨트랙트 내부에 속하는 함수라는 사실을 명시하기 위해, 앞서 Struct에서 보았던 것처럼 `near_bindgen` 어노테이션을 추가해 줍니다.

```rust
#[near_bindgen]
impl Counter {
    // ...
}
```

Rust에서 스마트 컨트랙트를 작성할 때는 이렇게 `struct`와 실제 함수를 구현하는 `impl` 을 가지는 패턴으로 작성하는 것이 일반적입니다. 함수를 더 자세히 들여다보도록 하겠습니다.

카운터 컨트랙트에는 `get_num`, `increment`, `decrement`, `reset` 네 가지 함수가 구현되어 있습니다. 먼저 `get_num` 함수 코드는 다음과 같습니다.

인자로 전달하는 `&self`는 `struct`의 인스턴스를 참조하고, `i8` 타입의 카운터 값을 반환하는 함수이기 때문에 리턴 타입을 명시해줍니다.

```rust
pub fn get_num(&self) -> i8 {
    return self.val;
}
```

다음으로 `storage`의 카운터 값에 1을 더해주는 `increment` 함수와 1을 빼주는 `decrement` 함수를 살펴보겠습니다. `get_num` 과는 다르게 `increment`, `decrement` 함수는 컨트랙트 내부의 값을 변경합니다. `&mut` 은 **mutable**이라는 뜻으로 `&mut self` 는 `self` 변수에 대한 mutable한 참조를 생성합니다.

```rust
pub fn increment(&mut self) {
    self.val += 1;
    log!("Increased number to {}", self.val);
}

pub fn decrement(&mut self) {
    self.val -= 1;
    log!("Decreased number to {}", self.val);
}
```

마지막으로 컨트랙트의 카운터 값을 0으로 초기화하는 `reset` 함수입니다. `increment`, `decrement` 함수와 마찬가지로 컨트랙트 내부의 값을 변경하기 때문에 `&mut self` 를 이용합니다.

```rust
pub fn reset(&mut self) {
    self.val = 0;
    log!("Reset counter to zero");
}
```

이렇게 스마트 컨트랙트 코드를 모두 살펴보았는데요. 다음으로 테스트 코드를 살펴보도록 하겠습니다.

`mod tests` 는 말 그대로 `tests` 라는 이름의 모듈을 의미합니다. `cfg`는 괄호 안의 조건이 `true`인 경우에만 모듈을 컴파일하라는 컴파일 명령어입니다. 아래의 경우에는 `cargo test` 명령을 실행할 때만 `(test)` 조건이 `true`가 되기 때문에 테스트를 실행하지 않으면 해당 모듈은 컴파일되지 않습니다.

```rust
#[cfg(test)]
mod tests {
```

테스트 코드는 총 5개로 `increment`, `decrement` 함수의 경우에는 먼저 counter 값을 0으로 초기화한 Counter 인스턴스를 생성한 후, `increment`와 `decrement`를 각각 실행하고 다시 `get_num`으로 값을 가져와서 값이 잘 변경되었는지 확인합니다.

```rust
#[test]
fn increment() {
    // instantiate a contract variable with the counter at zero
    let mut contract = Counter { val: 0 };
    contract.increment();
    assert_eq!(1, contract.get_num());
}

#[test]
fn decrement() {
    let mut contract = Counter { val: 0 };
    contract.decrement();
    assert_eq!(-1, contract.get_num());
}
```

`increment_and_reset` 함수는 위와 동일하게 Counter 인스턴스를 생성한 후 `increment`와 `reset`을 차례로 실행시켜서 마지막에 `get_num`으로 가져온 값이 0으로 잘 초기화되었는 지 확인합니다.

```rust
#[test]
fn increment_and_reset() {
    let mut contract = Counter { val: 0 };
    contract.increment(1);
    contract.reset();
    assert_eq!(0, contract.get_num());
}
```

마지막 `panics_on_overflow` 와 `panics_on_underflow` 함수는 `should_panic` 이라는 attributes를 가지고 있는데요. 해당 테스트는 오류가 예상되는 테스트로 오류가 발생하면 테스트를 통과합니다.

```rust
#[test]
#[should_panic]
fn panics_on_overflow() {
    let mut contract = Counter { val: 127 };
    contract.increment();
}

#[test]
#[should_panic]
fn panics_on_underflow() {
    let mut contract = Counter { val: -128 };
    contract.decrement();
}
```

## WELLDONE Code를 사용하여 스마트 컨트랙트 배포하기

### 컨트랙트 테스트하기

컨트랙트의 배포를 진행하기 전에 먼저 테스트를 진행하여 앞서 작성한 테스트 코드를 잘 통과하는지 살펴보도록 하겠습니다. PROJECT TO COMPILE 섹션에서 테스트를 진행하고자 하는 디렉토리와 컨트랙트가 작성된 언어를 선택합니다. 우리는 *near/rs_counter*와 Rust를 선택한 후, `Test` 버튼을 클릭합니다.

![1_14](./img/1_14.png '1_14')

테스트가 진행되면 터미널에 진행상황이 로그로 표시됩니다. 테스트가 완료되면 다음과 같은 로그가 출력됩니다.

![1_15](./img/1_15.png '1_15')

:::note
테스트 기능은 Rust를 사용했을 때만 제공하고 있습니다. Test 버튼을 클릭하면 `cargo test` 명령어가 내부적으로 실행됩니다. 실행에 시간이 조금 소요될 수 있습니다.
:::

### 컨트랙트 컴파일하기

WELLDONE Code는 NEAR에서 제공하는 기본 컴파일을 이용합니다. 이는 안정적인 컴파일을 제공하지만, 컨트랙트 실행 시 메소드의 파라미터를 직접 입력해야 하는 불편함이 있어, 추후 `raen build`를 이용한 컴파일 옵션도 제공할 예정입니다. `raen build`에 대한 자세한 정보는 다음 [링크](https://github.com/raendev/raen)를 참고해주세요.

스마트 컨트랙트를 컴파일하기 위해서 먼저 **PROJECT TO COMPILE** 섹션에서 컴파일하고자 하는 디렉토리와 컨트랙트가 작성된 언어를 선택합니다. 우리는 *near/rs_counter*와 Rust를 선택한 후, 컴파일 버튼을 클릭합니다.

![1_16](./img/1_16.png '1_16')

컴파일이 진행되면 터미널에 진행상황이 로그로 표시됩니다. 컴파일이 완료되면 _near/rs_counter/out/counter_contract.wasm_ 경로에서 컴파일된 wasm 파일이 생성된 것을 확인할 수 있습니다.

:::note
만약 컴파일 이후에 코드에 수정 사항이 생겨 새로 컴파일을 진행해야 한다면, 기존에 생성되었던 `out` 디렉토리를 삭제하고 다시 컴파일해야 합니다.
:::

### 컨트랙트 배포하기

컴파일이 완료되면 `Deploy` 버튼이 활성화될 것입니다. 해당 칸에 컨트랙트를 배포할 계정의 ID를 입력한 후 `Deploy` 버튼을 눌러 배포를 진행합니다. 이때 컨트랙트를 배포하는 계정은 연결된 지갑이 권한을 갖고 있는 계정이어야 합니다.

![1_17](./img/1_17.png '1_17')

`Deploy` 버튼을 누르면 WELLDONE Wallet 익스텐션이 활성화되면서 다음과 같은 창이 나타납니다. 사용자가 `SendTx`를 누르면 트랜잭션을 전송하고, 트랜잭션 해시값이 리턴됩니다.

![1_18](./img/1_18.png '1_18')
![1_19](./img/1_19.png '1_19')

:::note
터미널에 `{"type":"error","value":"User denied transaction signature"}` 라는 로그가 출력된다면 열려져 있는 WELLDONE Wallet 익스텐션 창을 닫은 후 다시 시도해주세요.
:::

이후 트랜잭션 검증이 완료되고 성공적으로 Receipt를 가져온다면 터미널에 다음과 같은 로그가 출력되고, 좌측 패널에 배포된 컨트랙트의 정보를 보여줍니다.

![1_20](./img/1_20.png '1_20')
![1_21](./img/1_21.png '1_21')

## WELLDONE Code를 사용하여 배포한 스마트 컨트랙트와 통신하기

이제 WELLDONE Code에서 배포한 컨트랙트와 통신을 해보겠습니다. **Methods** 섹션에서는 컨트랙트에서 접근할 수 있는 메소드의 목록을 보여줍니다. 만약 인자가 필요하다면 **Add Argument** 버튼을 눌러 필요한 인자의 이름과 타입, 값을 추가할 수 있습니다. **Deposit**에는 트랜잭션과 함께 보낼 토큰량을 NEAR 혹은 yoctoNEAR 두 가지 단위로 지정할 수 있습니다. 이후 메소드의 종류에 맞게 `Call` 혹은 `View` 버튼을 눌러 컨트랙트를 실행할 수 있습니다.

![1_22](./img/1_22.png '1_22')

NEAR에서 컨트랙트를 호출하는 방법에는 `view`와 `call` 두 가지가 있습니다. `view` 는 컨트랙트의 상태를 단순히 조회하는 함수를 호출할 때 사용하는 것으로서 가스 비용을 지불할 필요가 없습니다. 카운터 컨트랙트에서는 `get_num` 메소드가 `view` 함수에 해당합니다.

`call`은 컨트랙트 내부의 상태를 변화시키는 함수를 호출할 때 사용하는 것으로, 가스 비용을 지불하는 트랜잭션이기 때문에 WELLDONE Wallet을 통한 서명이 필요합니다.

### `get_num` 메소드 실행하기

먼저 `view` 함수인 `get_num` 메소드를 실행해보겠습니다. **Methods**에서 `get_num`을 선택하고 `View` 버튼을 클릭합니다. `view` 함수는 지갑을 통해 서명할 필요가 없기 때문에 지갑과의 인터랙션이 필요하지 않습니다. 메소드 실행이 성공한다면 터미널에 `value: 0` 가 출력되는 것을 확인할 수 있습니다.

![1_23](./img/1_23.png '1_23')

### `imcrement`, `decrement`, `reset` 메소드 실행하기

다음으로 `change` 함수인 `increment`와 `decrement` 메소드를 실행해보겠습니다. 먼저 **Methods**에서 `increment`를 선택하고 해당 메소드는 다른 인자를 필요로 하지 않으므로 인자를 추가하지 않고 `Call` 버튼을 클릭합니다. 그러면 WELLDONE Wallet 익스텐션 창이 나타나고, `SendTx` 버튼을 누르면 트랜잭션 해시가 반환됩니다. 트랜잭션이 성공하면 터미널에 다음과 같이 트랜잭션 결과가 나타납니다.

![1_24](./img/1_24.png '1_24')

이후 다시 `get_num` 메소드를 실행해서 값을 가져와보면 성공적으로 카운터가 1로 증가한 것을 확인할 수 있습니다. `decrement` 와 `reset` 메소드도 동일한 방법으로 실행할 수 있습니다.

## Wrap-Up

우리는 WELLDONE Code를 사용해서 NEAR에서 컨트랙트를 작성하고, 배포하고, 실행하는 방법을 배웠습니다. WELLDONE Code를 사용하면 추가적인 환경 설정 없이 WELLDONE Wallet만을 이용해서 스마트 컨트랙트를 개발할 수 있습니다. Universal Provider를 사용해서 프론트엔드와 스마트 컨트랙트가 통신하는 방법을 알고 싶다면 다음 튜토리얼을 참고해주세요.
