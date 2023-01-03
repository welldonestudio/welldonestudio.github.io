---
title: How to Migrate the Contract
description: Learning about how to migrate the contract in NEAR
---

# How to Migrate the Contract

<div>
  <span className='author-sm'>January 3, 2023</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/Yoon-Suji' target='_blank'><img src='https://avatars.githubusercontent.com/u/70956926?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Suji Yoon</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Introduction

NEAR의 스마트 컨트랙트는 Account의 state에 저장됩니다. 앞선 [Account Model 튜토리얼](https://docs.welldonestudio.io/tutorials/near-ecosystem/account)에서 Account 당 하나의 계정만 배포하고 활성화할 수 있다고 설명했는데요. 만약 이미 배포한 컨트랙트를 업데이트하고 싶은 경우에는 어떻게 해야 할까요? 이번 튜토리얼에서는 이미 배포한 스마트 컨트랙트를 업데이트하는 다양한 방법을 살펴보고, WELLDONE Code를 사용해서 컨트랙트 Migration을 직접 실습해보는 시간을 갖도록 하겠습니다.

## Updating Contracts

스마트 컨트랙트를 개발하는 단계나 심지어 운영 중인 단계에서도 컨트랙트를 수정해야하는 상황이 생길 수 있습니다.  로컬에서 개발중인 상황이라면 단순하게 수정된 컨트랙트를 새로운 Account에 배포하는 것으로 해결할 수 있지만, 이전에 배포된 컨트랙트의 데이터를 그대로 사용할 수 없다는 단점이 있습니다. 따라서 이전에 배포한 컨트랙트의 데이터를 유지하고 싶거나 이미 메인넷에 컨트랙트를 배포하여 서비스를 운영 중이라면 기존의 Account에 배포된 컨트랙트를 Migration 하는 방법을 사용해야 합니다. 

그럼 이제 컨트랙트를 업데이트하는 세 가지 방법을 알아보겠습니다.

### Re-deploy another contract

이전에 배포된 컨트랙트의 상태를 그대로 유지할 필요가 없는 경우라면, 간단하게 컨트랙트를 새로운 계정에 다시 배포하는 방법으로 컨트랙트를 업데이트할 수 있습니다. 테스트넷이라면 NEAR CLI의 `dev-deploy` 명령어를 이용해서 손쉽게 새로운 `dev-account`를 생성해서 컨트랙트를 배포할 수 있고, 이전에 사용한 Account ID를 그대로 사용하고 싶다면 해당 Account를 삭제한 후 다시 동일한 이름의 Account를 만들어서 컨트랙트를 배포할 수 있습니다. Account가 삭제될 때 이미 기존에 배포된 컨트랙트의 데이터도 함께 삭제되기 때문에 새로운 계정을 생성하여 컨트랙트를 배포한 경우와 동일한 효과를 얻을 수 있습니다.

`dev-account`에 컨트랙트를 배포하기 위해서는 [NEAR CLI](https://docs.near.org/tools/near-cli#installation)를 설치해야 합니다. 

```bash
near dev-deploy --wasmFile [wasm 파일 경로]
```

위의 명령어를 실행하면 `dev-` 로 시작하는 새로운 테스트넷 Account가 자동으로 생성되며 해당 Account에 컨트랙트를 배포합니다. 생성된 `dev-account`의 정보는 현재 위치의 `neardev` 폴더 안에 저장되며 프라이빗 키는 `~/.near-credentials` 폴더 안에 저장됩니다. 

`dev-deploy` 명령어는 `neardev` 폴더가 존재하는 경우에는 새로 계정을 생성하지 않고 기존에 만들었던 `dev-account`에 컨트랙트를 배포하기 때문에 컨트랙트를 수정한 이후 다시 새로운 `dev-account`를 생성하여 컨트랙트를 재배포하고 싶다면 `neardev` 폴더를 삭제하고 위의 명령어를 다시 실행해야 합니다.

다음으로 기존에 존재하는 Account를 삭제하고 동일한 이름의 Account를 재생성하여 컨트랙트를 배포하는 방법을 알아보겠습니다. 이 방법 역시 NEAR CLI를 이용하여 진행합니다. `app-name.you.testnet` 이라는 `sub-account` 에 기존의 컨트랙트가 배포되어 있고, 동일한 계정에 재배포를 진행한다고 가정해보겠습니다.

먼저 기존에 컨트랙트가 배포된 `app-name.you.testnet` 을 삭제합니다. 이때 Account를 삭제하기 위해서는 삭제하려는 Account의 Full Access Key를 가지고 있어야 한다는 점을 유의해주세요. 

```bash
near delete app-name.you.testnet you.testnet
```

위의 명령어를 실행하면 `app-name.you.testnet` 이 삭제되고 Account에 남아 있던 토큰은 `you.testnet`에게 전송되며, 해당 Account에 배포된 컨트랙트의 데이터도 함께 삭제됩니다. 

그리고 동일한 이름의 `sub-account`를 다시 생성하고, 해당 계정에 수정된 컨트랙트를 배포합니다.

```bash
near create-account app-name.you.testnet --masterAccount you.testnet
near deploy --accountId app-name.you.testnet --wasmFile [wasm 파일 경로]
```

이와 같이 Account를 삭제하고 재생성하여 컨트랙트를 배포하면 이전의 컨트랙트 데이터가 모두 삭제된 상태이기 때문에 컨트랙트를 처음 배포하는 것 같은 효과를 얻을 수 있습니다.

### Migrating the State

이전에 배포한 컨트랙트의 데이터를 유지하면서 동일한 Account에 스마트 컨트랙트를 재배포하고 싶다면, 컨트랙트의 상태(state)를 Migration 하는 메소드가 필요합니다.

왜 단순히 기존의 컨트랙트가 배포된 Account에 업데이트된 컨트랙트를 그대로 재배포하면 안되는 걸까요? NEAR의 스마트 컨트랙트는 컨트랙트의 코드(logic)와 상태(storage)가 분리되어 Account의 state에 저장되기 때문에 Account에 컨트랙트를 재배포하면 컨트랙트의 코드는 변경되지만 state는 그대로 유지됩니다.

컨트랙트가 실행될 때 NEAR 런타임은 디스크에서 직렬화된 상태를 읽고 현재 컨트랙트 코드를 사용하여 로드를 시도합니다. 이때, 만약 코드가 기존에 배포된 컨트랙트와 다른 상태를 가지고 있다면 컨트랙트를 실행할 때 [`Cannot deserialize the contract state`](https://docs.near.org/develop/contracts/serialization#deserialization-error) 라는 에러가 발생합니다. 따라서 컨트랙트의 상태를 수정한 경우에는 새롭게 수정된 컨트랙트의 코드로 기존 컨트랙트의 상태를 읽어올 수 있도록 하는 Migration 메소드가 필요한 것입니다.

Migration 메소드는 다음의 기능을 수행합니다.

1. 컨트랙트의 현재 상태를 읽는다.
2. 현재 상태를 Migration할 새로운 상태로 변환한다.
3. 새로운 상태를 반환한다.

WELLDONE Code를 활용한 실습 파트에서 Migration 메소드를 사용한 예제를 통해 더 자세히 알아보도록 하겠습니다.

### Programmatic Update

스마트 컨트랙트 자기 자신이 스스로 컨트랙트를 업데이트할 수 있는 메소드를 작성하는 방법이 있습니다. 보통 스마트 컨트랙트 코드 안에 해당 메소드를 구현해서 배포를 한 후, 스마트 컨트랙트가 배포된 Account의 Full Access Key를 모두 삭제하는 방식으로 사용합니다. 이는 개발자를 포함한 외부의 그 누구도 스마트 컨트랙트를 수정하지 못한다는 것을 확실하게 보여 줄 수 있습니다. 이와 같이 Account의 모든 Full Access Key가 사라진 상태를 locked 상태라고 합니다. 오직 스마트 컨트랙트 자기 자신만이 컨트랙트를 업데이트할 수 있습니다.

이 방법은 컨트랙트 업데이트 과정이 모든 dApp 사용자에게 투명하게 공개되기 때문에, 사용자의 동의 없는 악의적인 업데이트가 일어나지 않도록 보장합니다.

스마트 컨트랙트 스스로 컨트랙트를 업데이트하는 메소드는 다음의 기능을 수행합니다.

1. 재배포하고자하는 컨트랙트의 wasm 값을 인풋으로 받는다.
2. 스스로 컨트랙트를 배포하는 `Promise` 를 생성한다.

```rust
pub fn update_contract(&self) -> Promise {
    // Check the caller is authorized to update the code
    assert!(env::predecessor_account_id() == self.manager, "Only the manager can update the code");

    // Receive the code directly from the input to avoid the
    // GAS overhead of deserializing parameters
    let code = env::input().expect("Error: No input").to_vec();

    // Deploy the contract on self
    Promise::new(env::current_account_id())
    .deploy_contract(code)
    .function_call(
        "migrate".to_string(),
        NO_ARGS,
        0,
        CALL_GAS
    )
    .as_return()
}
```

전체 예시 코드는 다음 [링크](https://github.com/near-examples/update-migrate-rust/blob/main/contracts/self-updates/base/src/update.rs#L10-L28#)에서 확인할 수 있습니다. JavaScript로 작성된 예시 코드는 다음 [링크](https://github.com/near/near-sdk-js/blob/d1ca261feac5c38768ab30e0b24cf7263d80aaf2/examples/src/programmatic-update-before.ts)에서 확인할 수 있습니다.

## Get your Hands Dirty on WELLDONE Code

그럼 이제 WELLDONE Code 에서 실제로 Rust로 작성한 스마트 컨트랙트를 Migration 메소드를 사용하여 업데이트하는 방법을 실습해보도록 하겠습니다.

:::tip Prerequisites

* Docs의 매뉴얼을 참고하여 WELLDONE Wallet에서 NEAR 테스트넷 계정을 생성해주세요. 일정량의 NEAR 테스트넷 토큰이 필요합니다.
* 해당 파트의 목적은 컨트랙트 Migration을 직접 실습해보는 것입니다. WELLDONE Code의 기본적인 연결 및 사용 방법은 Code Docs 혹은 dApp 개발 튜토리얼을 참고해주세요.

:::

먼저 우리가 사용할 컨트랙트를 간단하게 살펴보겠습니다. 해당 컨트랙트는 `GuestBook` 이라는 컨트랙트로 `PostedMessage`라는 구조체의 벡터 배열과, `Balance`의 벡터 배열을 상태(state)로 저장하고 있습니다. 메소드로는 메시지를 추가하는 `add_message`와 저장하고 있는 messages를 읽어오는 `get_message`, payments를 읽어오는 `get_payments` 를 가지고 있습니다.  컨트랙트의 전체 코드는 다음 [레포지토리](https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/base/src/lib.rs#L9-L23#)에서 확인하실 수 있습니다.

```rust
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct PostedMessage {
    pub premium: bool,
    pub sender: AccountId,
    pub text: String,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct GuestBook {
    messages: Vector<PostedMessage>,
    payments: Vector<Balance>,
}
```

### Deploy the Contract

그럼 이제 WELLDONE Code로 이동해서 `GuestBook` 컨트랙트를 먼저 배포해보겠습니다.

1. WELLDONE Code의 NEAR 섹션으로 들어가 WELLDONE Wallet과 연결합니다. 
    
    이때 연결된 계정이 우리가 컨트랙트를 배포할 계정이 되어야 합니다. 이전에 컨트랙트를 배포한 적이 없는 새로운 계정을 만들어 연결해주세요.
    
    <img src={require('./img/contract_1.png').default} alt='contract_1' style={{width: '320px'}}/>

2. Project 섹션에서 Rust 옵션을 선택한 후, 생성할 프로젝트의 이름을 입력하고 New Project 버튼을 클릭합니다.

    <img src={require('./img/contract_2.png').default} alt='contract_2' style={{width: '320px'}}/>

    File Explorer로 돌아오면 `near`라는 폴더 안에 동일한 이름의 프로젝트 구조가 생성되어 있을 것입니다.

    <img src={require('./img/contract_3.png').default} alt='contract_3' style={{width: '320px'}}/>

3. 배포할 컨트랙트의 내용을 붙여넣습니다.
    - Cargo.toml
    
    ```rust
    [package]
    name = "guestbook"
    version = "1.0.0"
    authors = ["Near Inc <hello@near.org>"]
    edition = "2021"
    
    [lib]
    crate-type = ["cdylib"]
    
    [dependencies]
    near-sdk = "4.0.0"
    uint = { version = "0.9.3", default-features = false }
    ```
    
    - src/lib.rs
    
    ```rust
    use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
    use near_sdk::collections::Vector;
    use near_sdk::json_types::U128;
    use near_sdk::serde::Serialize;
    use near_sdk::{env, near_bindgen, AccountId, Balance};
    
    const POINT_ONE: Balance = 100_000_000_000_000_000_000_000;
    
    #[near_bindgen]
    #[derive(BorshDeserialize, BorshSerialize, Serialize)]
    #[serde(crate = "near_sdk::serde")]
    pub struct PostedMessage {
        pub premium: bool,
        pub sender: AccountId,
        pub text: String,
    }
    
    #[near_bindgen]
    #[derive(BorshDeserialize, BorshSerialize)]
    pub struct GuestBook {
        messages: Vector<PostedMessage>,
        payments: Vector<Balance>,
    }
    
    impl Default for GuestBook {
        fn default() -> Self {
            Self {
                messages: Vector::new(b"m"),
                payments: Vector::new(b"p"),
            }
        }
    }
    
    #[near_bindgen]
    impl GuestBook {
        #[payable]
        pub fn add_message(&mut self, text: String) {
            let payment = env::attached_deposit();
            let premium = payment >= POINT_ONE;
            let sender = env::predecessor_account_id();
    
            let message = PostedMessage {
                premium,
                sender,
                text,
            };
            self.messages.push(&message);
            self.payments.push(&payment);
        }
    
        pub fn get_messages(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<PostedMessage> {
            let from = u128::from(from_index.unwrap_or(U128(0)));
    
            self.messages
                .iter()
                .skip(from as usize)
                .take(limit.unwrap_or(10) as usize)
                .collect()
        }
    
        pub fn get_payments(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<U128> {
            let from = u128::from(from_index.unwrap_or(U128(0)));
    
            self.payments
                .iter()
                .skip(from as usize)
                .take(limit.unwrap_or(10) as usize)
                .map(|x| U128(x))
                .collect()
        }
    }
    ```

4. 컨트랙트를 컴파일합니다.
    
    컴파일 옵션으로 Rust를 선택한 후 Compile 버튼을 클릭합니다. 컴파일이 완료되면 wasm 파일이 반환됩니다.

    <img src={require('./img/contract_4.png').default} alt='contract_4' style={{width: '320px'}}/>

5. 컨트랙트를 배포합니다.
    
    컴파일이 완료되면, 자동으로 밑에 Deploy 섹션이 나타납니다. 컨트랙트를 배포할 계정의 ID를 입력한 후 Deploy 버튼을 눌러 컨트랙트를 배포합니다. 이때, WELLDONE Wallet과의 인터랙션이 필요합니다.

    <img src={require('./img/contract_5.png').default} alt='contract_5' style={{width: '320px'}}/>

6. 컨트랙트 실행하기
    
    컨트랙트 배포가 완료되면 배포된 컨트랙트를 자동으로 가져와 보여줍니다. `add_messages` 메소드를 실행하여 컨트랙트가 잘 배포되었는지 확인합니다. text 필드에 전달하는 값이 메시지가 되고, deposit 으로 전달하는 토큰량이 payments가 됩니다. `add_messages`는 call 메소드이기 때문에 Call 버튼을 클릭하여 트랜잭션을 전송합니다.

    <img src={require('./img/contract_6.png').default} alt='contract_6' style={{width: '320px'}}/>

    트랜잭션이 성공하면, `get_messages`나 `get_payments` 메소드를 View 버튼을 클릭하여 실행하면 앞서 추가한 메시지와 payments 값을 반환하는 것을 확인할 수 있습니다.

    ![contract_7](./img/contract_7.png 'contract_7')

    ![contract_8](./img/contract_8.png 'contract_8')

### Writing a Migration Method

우리가 배포한 컨트랙트의 state를 아래와 같이 변경하고 싶다고 가정해봅시다. 이전에는 `payments`를 `GuestBook` 안에서 저장했다면, 변경 후에는 `PostedMessage` 안에서 `payments`를 함께 관리할 것입니다. 이와 같이 스마트 컨트랙트의 상태가 변경된 경우, 동일한 계정에 컨트랙트를 재배포하면 [`Cannot deserialize the contract state`](https://docs.near.org/develop/contracts/serialization#deserialization-error) 에러가 발생한다는 것을 우리는 알고 있습니다.

```rust
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct PostedMessage {
    pub payment: u128,
    pub premium: bool,
    pub sender: AccountId,
    pub text: String,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct GuestBook {
    messages: Vector<PostedMessage>,
}
```

이를 해결하기 위해, 우리는 변경된 컨트랙트에 Migration 메소드를 추가해야 합니다.

앞서 Migration 메소드는 다음의 기능을 수행한다고 했습니다.

1. 컨트랙트의 현재 상태를 읽는다.
2. 현재 상태를 Migration할 새로운 상태로 변환한다.
3. 새로운 상태를 반환한다.

즉, 이전의 `GuestBook` 에 저장되어 있던 값을 순환하여 읽어온 후, 새로운 `PostedMessage` 형식(`payment`, `premium`, `sender`, `text`) 에 맞춰 변환시키는 메소드를 작성해야 합니다.

`src/migrate.rs` 라는 새로운 파일을 생성해서 아래의 내용을 붙여넣어 주세요.

```rust
use crate::*;

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct OldPostedMessage {
    pub premium: bool,
    pub sender: AccountId,
    pub text: String,
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct OldState {
    messages: Vector<OldPostedMessage>,
    payments: Vector<Balance>,
}

#[near_bindgen]
impl GuestBook {
    #[private]
    #[init(ignore_state)]
    pub fn migrate() -> Self {
        // retrieve the current state from the contract
        let old_state: OldState = env::state_read().expect("failed");

        // iterate through the state migrating it to the new version
        let mut new_messages: Vector<PostedMessage> = Vector::new(b"p");

        for (idx, posted) in old_state.messages.iter().enumerate() {
            let payment = old_state.payments.get(idx as u64).unwrap_or(0);

            new_messages.push(&PostedMessage {
                payment,
                premium: posted.premium,
                sender: posted.sender,
                text: posted.text,
            })
        }

        // return the new state
        Self {
            messages: new_messages,
        }
    }
}
```

`src/lib.rs` 에도 아래와 같이 업데이트된 버전의 컨트랙트로 수정해주세요.

```rust
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::Vector;
use near_sdk::json_types::U128;
use near_sdk::serde::Serialize;
use near_sdk::{env, near_bindgen, AccountId, Balance};

mod migrate;

const POINT_ONE: Balance = 100_000_000_000_000_000_000_000;

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct PostedMessage {
    pub payment: u128,
    pub premium: bool,
    pub sender: AccountId,
    pub text: String,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct GuestBook {
    messages: Vector<PostedMessage>,
}

impl Default for GuestBook {
    fn default() -> Self {
        Self {
            messages: Vector::new(b"m"),
        }
    }
}

#[near_bindgen]
impl GuestBook {
    #[payable]
    pub fn add_message(&mut self, text: String) {
        let payment = env::attached_deposit();
        let sender = env::predecessor_account_id();
        let premium = payment >= POINT_ONE;
        let message = PostedMessage {
            payment,
            sender,
            premium,
            text,
        };
        self.messages.push(&message);
    }

    pub fn get_messages(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<PostedMessage> {
        let from = u128::from(from_index.unwrap_or(U128(0)));

        self.messages
            .iter()
            .skip(from as usize)
            .take(limit.unwrap_or(10) as usize)
            .collect()
    }
}
```

여기서 우리는 `migration` 메소드가 initialization 메소드라는 것에 주목해야 합니다. 컨트랙트의 다른 메소드를 실행하기 전에 가장 먼저 실행되어야 하는 메소드이며, 딱 한 번만 실행하는 메소드입니다. 만약 컨트랙트를 재배포한 후 `migration` 메소드를 실행하기 전에 다른 메소드를 실행하면 [`Cannot deserialize the contract state`](https://docs.near.org/develop/contracts/serialization#deserialization-error) 에러가 동일하게 발생할 것입니다.

### Re-Deploy the Contract

그럼 이제 업데이트한 컨트랙트를 동일한 계정에 다시 배포해보겠습니다.

1. 수정한 컨트랙트를 다시 컴파일합니다.
    
    프로젝트의 out 폴더를 삭제한 후 Compile 버튼을 클릭합니다. out 폴더를 삭제하지 않는다면 `If you want to run a new compilation, delete the 'out' directory and click the Compile button again.` 라는 에러 로그가 터미널에 출력될 것입니다.
    
2. Init function 으로 `migration` 메소드를 지정하여 재배포를 진행합니다. 
    
    이때, 계정에 이미 배포된 컨트랙트가 있기 때문에 사용자에게 한 번 더 의사를 묻는 모달창이 나타납니다. YES 버튼을 눌러 배포를 진행해주세요.
    
    <img src={require('./img/contract_9.png').default} alt='contract_9' style={{width: '320px', paddiingRight: '10px'}}/>
    
    <img src={require('./img/contract_10.png').default} alt='contract_10' style={{width: '320px'}}/>

3. 컨트랙트 실행하기
    
    컨트랙트 배포가 완료되면 배포된 컨트랙트를 자동으로 가져와 보여줍니다. `get_messages` 메소드를 실행시켜보면, 이전에 저장되어있던 정보가 새롭게 업데이트된 구조로 잘 변환되어 출력하는 것을 확인할 수 있습니다.

    ![contract_11](./img/contract_11.png 'contract_11')

## Wrap-Up

이번 튜토리얼에서는 NEAR에서 이미 계정에 배포한 컨트랙트를 업데이트하는 방법을 알아보고, WELLDONE Code를 사용해서 직접 Migration 메소드를 작성해보는 실습을 진행했습니다.

이미 계정에 배포한 컨트랙트를 업데이트 하는 방법은 크게 다음과 같이 정리할 수 있습니다.

1. 새로운 Account에 배포하기
2. Migration 메소드 사용하기
3. Programmatic Update 사용하기

이 튜토리얼이 NEAR의 컨트랙트를 유지 및 보수하는 방법에 대해 궁금증을 가지셨던 분들께 도움이 되었길 바랍니다.

***

### Reference

[https://docs.near.org/develop/upgrade](https://docs.near.org/develop/upgrade)

[https://docs.near.org/concepts/web3/near#contract-upgrades](https://docs.near.org/concepts/web3/near#contract-upgrades)

[https://docs.near.org/develop/contracts/serialization#deserialization-error](https://docs.near.org/develop/contracts/serialization#deserialization-error)