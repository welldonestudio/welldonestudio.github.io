---
title: NEAR Account Model
description: NEAR Account 모델 학습하기
---

# NEAR Account Model

## Introduction

NEAR의 Account는 기존의 이더리움과 같은 블록체인과는 다른 독특한 모델을 가집니다. 이번 튜토리얼에서는 직접 실습을 진행하면서 NEAR의 Account가 가지고 있는 특징을 자세하게 톺아보는 시간을 갖도록 하겠습니다.

:::tip Prerequisites

- 블록체인 Ecosystem에 대한 기본적인 이해

:::

## Human-Readable Accounts

NEAR Account의 가장 큰 특징은 **Human-Readable Account ID**를 갖는다는 점입니다. 일반적인 블록체인에서 계정의 ID로 `0x71C7656EC7ab88b098defB751B7401B5f6d8976F`
 와 같이 공개 키 해시 값을 사용하는 것과 다르게 NEAR의 Account ID는 `welldone.near`
 처럼 사람이 읽고 이해할 수 있는 이름을 가져 사용자가 사용하기에 더욱 직관적인 환경을 제공합니다. NEAR에서 Account 시스템이 어떻게 이루어져 있는지 더 자세히 알아봅시다.

### Implicit Accounts

**Implicit Accounts** 는 길이가 64인 character로 이루어져 있고 고유한 [ED25519](https://en.wikipedia.org/wiki/EdDSA) 키 페어(퍼블릭 키 - 프라이빗 키)와 대응됩니다. ED25519 키 페어의 퍼블릭 키를 소문자 hex로 바꾸면 Implicit AccountID가 됩니다.

- The **public key** in **base58**: `BGCCDDHfysuuVnaNVtEhhqeT4k9Muyem3Kpgq2U1m9HX`
- Refers to the i**mplicit account**: `98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de`

그럼 이제 `near-cli`와 `near repl`을 이용해서 직접 Implicit Accounts를 생성해보며 어떻게 계정이 만들어지는 지 알아보겠습니다. 먼저 [near-cli](https://docs.near.org/tools/near-cli#installation) 가 설치되어 있지 않다면 설치해주세요.

Implicit Accounts는 고유한 ED25519 키 페어에 대응된다고 앞서 설명했습니다. 따라서 먼저 key-pair를 로컬에서 만들어보도록 하겠습니다. 터미널에 다음 명령어를 입력해주세요.

```json
near generate-key
```

위 명령어를 실행하면 아래와 같이 publicKey와 대응되는 accountID를 알려주는 로그가 뜨게 됩니다. 해당 키페어는 `~/.near-credentials/testnet/{accountId}.json` 에서 확인할 수 있습니다. 그럼 이렇게 생성된 키 페어의 퍼블릭 키가 정말 accountID와 대응되는지 확인해보겠습니다.

터미널에 `near repl` 을 입력해서 REPL 터미널을 열고 다음 명령어를 입력해주세요.

```jsx
const pk = 'ed25519:publicKey';
nearAPI.utils.PublicKey.fromString(pk).data.hexSlice();
```

앞선 near generate-key 의 결과 로그에 나타났던 accountId 값이 똑같이 출력되는 것을 확인할 수 있습니다.

![account_1](./img/account_1.png 'account_1')

하지만 AccountId를 익스플로러에서 검색해보면 “Account not found” 라는 결과가 나타납니다. Implicit Account는 [`Transfer`](https://nomicon.io/RuntimeSpec/Actions#transferaction) action을 통해서 일정량의 NEAR 토큰을 받아야 작동하기 때문입니다. 해당 Account ID로 적어도 0.001 NEAR 이상의 토큰을 Transfer 한 후 다시 검색해보면 익스플로러에서 Account가 검색되는 것을 확인할 수 있습니다.

![account_2](./img/account_2.png 'account_2')
![account_3](./img/account_3.png 'account_3')

### Named Accounts

**Named Accounts**는 우리가 흔히 아는 `welldone.near`, `welldone.testnet` 같이 Human-Readable한 계정을 말합니다. 또한 Named Accounts는 sub-accounts를 만들 수 있는데, 예를들어 메인넷의 Named Accounts은 모두 `near`의 sub-accounts이고(e.g. `welldone.near`) 테스트넷의 Named Accounts는 모두 `testnet`의 sub-accounts (e.g. `welldone.testnet`) 로 이루어져 있습니다. 그렇다면 `near`, `testnet`, `aurora` 는 어떻게 만들 수 있을까요?

기본적으로 NEAR의 Account ID는 길이가 2~64인 character로 이루어져 있는데, 그 중 길이가 64이고 소문자 hex character로 이루어져 있는 계정은 Implicit account로 간주됩니다.

`near`, `testnet` 같은 계정은 **top-level accounts (TLA)** 라고 부르며 그 중에서도 `near` , `testnet`처럼 길이가 32보다 짧은 short top-level accounts 는 오직 Account ID가 `registrar`인 계정만 만들 수 있습니다. 길이가 32보다 긴 long top-level accounts는 누구나 생성할 수 있습니다.

그 후에는 `near` 계정만이 `welldone.near` 를 만들 수 있고, `welldone.near` 만이 `first.welldone.near` 를 만들 수 있습니다. 이때 상위 계정은 하위 계정을 생성할 수는 있지만 access key는 공유하지 않기 때문에 제어할 권한은 없습니다.

Implicit Accounts는 다른 account를 사용하지 않고도 생성할 수 있지만, Named Accounts는 기존에 존재하는 다른 account를 사용해야만 생성할 수 있습니다. 메인넷에서 계정을 생성하기 위해서는 near 계정에 배포된 스마트 컨트랙트에 `create_account` 메소드를 요청해야하고, 테스트넷에서 계정을 생성하기 위해서는 testnet 계정에 배포된 스마트 컨트렉트에 `create_account` 메소드를 요청해야 합니다.

```bash
near call testnet create_account '{"new_account_id": "<account-name>.testnet", "new_public_key": "ed25519:<data>"}' --deposit 0.00182 --accountId <account-with-funds>
```

이때, `account-name`은 기존에 존재하는 아이디와 중복되지 않아야 하고 `new_public_key`의 인자로 전달하는 퍼블릭 키가 생성하는 계정의 Full Access Key가 됩니다. 앞선 실습에서 만들었던 Implicit Accounts의 퍼블릭 키를 이용해서 Named Accounts를 생성해보도록 하겠습니다.

![account_4](./img/account_4.png 'account_4')
![account_5](./img/account_5.png 'account_5')
![account_6](./img/account_6.png 'account_6')

Named Accounts가 성공적으로 만들어져서 익스플로러에서 검색이 되는 것을 확인할 수 있고, `new_public_key`의 인자로 전달한 값이 Full Access Key로 추가된 것도 확인할 수 있습니다.

## Permissions Through Access Keys

블록체인에서 Account를 사용한다는 것은 트랜잭션을 서명할 때 Account의 프라이빗 키를 사용한다는 뜻입니다. NEAR의 Account는 여러 개의 **Access Key (퍼블릭 키 - 프라이빗 키 페어)** 를 가질 수 있고 각각의 Access Key가 Account에 대한 권한을 갖고 있습니다. Access Key는 Account에 속하며 `account_id`, `public_key` 형태로 저장됩니다. 이는 Account에 대한 권한을 요구하는 third-parties에게 제한적인 권한을 주고 언제든지 권한을 삭제할 수 있다는 장점이 있습니다. 한 계정은 여러 Access Key를 가질 수 있고, 하나의 Access Key 또한 여러 개의 계정에 추가될 수 있습니다.

### Full Access Keys

NEAR의 Access Key는 Full Access Key와 Function Call Key 두 가지 종류가 있습니다. **Full Access Key**는 말 그대로 어떠한 액션을 하는 트랜잭션도 서명할 수 있고, 다른 Access Key를 Account에 추가하거나 삭제하고 Account 자체를 삭제할 수 있는 권한도 가집니다. 계정을 처음 생성할 때 첫번째 Full Access Key를 추가하게 됩니다.

앞서 만들었던 계정에 Full Access Key를 추가하고 싶다면 `near-cli`를 이용해서 다음의 명령어로 간단하게 추가할 수 있습니다.

```bash
near add-key {account_id} {public_key}
```

:::tip WELLDONESTUDIO’s Tip
Account에 저장되어 있는 Access Key가 궁금하다면 다음의 명령어를 통해 확인할 수 있습니다.

```bash
near keys {account_id}
```

`near-cli`의 기본 네트워크는 testnet으로 지정되어 있으므로 mainnet에서 검색하기를 원하는 경우 다음의 환경변수를 지정해줍니다.

```bash
export NEAR_ENV=mainnet
```

:::

### Function Call Keys

**Function Call Key**는 컨트랙트의 non-payable 메소드를 호출할 수 있는 권한을 가집니다. non-payable 메소드란 NEAR 토큰을 deposit으로 갖고 있지 않은 함수를 뜻합니다. Function Call Key는 호출을 허용할 메소드의 종류를 지정할 수 있는데, 아무것도 지정하지 않은 경우 모든 non-payable 메소드를 허용합니다.

Function Call Key를 추가하는 `near-cli` 명령어는 다음과 같습니다.

```bash
near add-key {account_id} {public_key} --contract-id {contract_id} --method-names {method_name} --allowance {allowance}
```

필수로 전달해야 하는 인자는 `account_id`, `public_key`, `contract_id`이고 `method_name`은 생략할 경우 모든 non-payable 메소드를 호출하는 권한을 허용합니다. `allowance`는 해당 Access Key를 사용했을 때 지불 가능한 balance limit을 지정합니다. 즉 Access Key를 사용해서 메소드를 호출해서 gas fee를 지불할 때마다 Account의 balance와 Access Key의 allowance가 함께 줄어듭니다. None을 인자로 전달해서 제한을 두지 않을 수도 있고, 값을 생략한 경우에는 gas fee가 들지 않는 view methods만 호출이 가능합니다.

대부분 NEAR의 dApp 에서는 Function Call Key를 생성해서 유저에게 권한을 요청합니다. 그래서 non-payable 함수를 사용할 경우에는 사용자의 추가 인터랙션 없이 진행이 가능하고, 토큰 전송을 원한다면 다시 한 번 사용자에게 승인을 요청해야 합니다.

## Simple to Develop Smart Contracts

NEAR에서 스마트 컨트랙트를 배포하기 위해서는 Account가 필요합니다. Account 당 하나의 스마트 컨트랙트만 배포하고 활성화할 수 있으며, 스마트 컨트랙트는 Account의 State에 저장됩니다. 컨트랙트는 자체적인 storage를 따로 가지고 Account의 이름으로 트랜잭션을 실행할 수도 있습니다.

스마트 컨트랙트는 WebAssembly로 컴파일되어야 하는데, 현재 `near-sdk`와 연동되는 언어로 Rust, Javascript, AssemblyScrtip를 지원하고 있습니다. NEAR의 컨트랙트에 대한 자세한 설명은 다음 튜토리얼에서 다루도록 하겠습니다.

## Mutable State (Storage)

NEAR의 Account는 메타데이터와 배포된 컨트랙트와 관련된 데이터(컨트랙트의 코드 + storage)가 저장되어 있는 상태(State)를 가집니다. Account의 State는 누구나 읽을 수 있지만 오직 Account 자신만 변경할 수 있습니다. 또한 각각의 Account는 자신이 사용한 storage의 비용을 지불하기 위해 balance의 일부분을 lock 해야 합니다.

### Account’s Metadata

Account의 State는 메타데이터를 저장합니다. `near-cli` 로 앞서 생성한 Account의 State를 확인해보세요.

```bash
near state {account_id}
```

![account_7](./img/account_7.png 'account_7')

- `amount`: yoctoNEAR 단위로 표현한 Account의 balance (1 Ⓝ = 10^24yⓃ).
- `code_hash`: Account에 배포된 컨트랙트 와즘 파일의 해시. 만약 컨트랙트가 배포되어있지 않다면 1s로 채워집니다. 위의 예시의 경우에도 컨트랙트가 배포되어 있지 않기 때문에 `code_hash` 값이 1로 채워져 있는 것을 확인할 수 있습니다.
- `storage_usage`: Account가 사용하는 Storage의 bytes 크기. (code + metadata + data storage)

### Contract’s State

Account의 State는 컨트랙트의 코드와 컨트랙트의 storage가 저장되는 공간이기도 합니다. 컨트랙트의 storage는 base64와 JSON serialization으로 인코딩 된 key-value 페어로 이루어져 있습니다.

Account의 컨트랙트의 state는 다음 명령어를 이용해서 확인할 수 있습니다.

```bash
near view-state {account_id} --finality final --utf8 true
```

만약 Account에 스마트 컨트랙트가 배포되어 있지 않다면 빈 배열이 리턴될 것이고, 컨트랙트가 배포되어 있다면 아래처럼 컨트랙트에 저장된 값이 key-value 페어로 반환될 것입니다.

![account_8](./img/account_8.png 'account_8')

### Paying for Storage

Account는 사용하는 storage에 대한 비용을 지불하기 위해서, Account의 잔액 중 일부를 데이터가 저장된 양에 비례하여 lock 해야합니다. 만약 더 많은 데이터가 추가되어 state가 증가하면 Account의 잔액은 줄어들 것이고, 데이터가 삭제되어서 state가 감소하면 Account의 잔액은 늘어날 것입니다.

현재 (2022.10.17 NEAR [Docs](https://docs.near.org/concepts/basics/accounts/state#paying-for-storage-1-%E2%93%9D--100kb) 기준) 데이터 100kb를 저장하기 위해서는 약 **1 Ⓝ**가 필요합니다.

## Wrap-Up

이번 튜토리얼에서는 NEAR 생태계에서 Account 가 어떻게 구성되어 있는지, 그 특징을 알아보고 직접 near-cli를 이용해서 Account를 만들어보는 실습을 진행했습니다. NEAR Account의 특징은

1. human-readable 한 Account ID를 갖는다.
2. Access Key를 여러개 가질 수 있어 권한 관리가 유연하다.
3. 스마트 컨트랙트를 배포할 수 있다
4. 컨트랙트의 메타데이터와 코드, storage를 저장하는 State를 가진다

위와 같은 네 가지로 크게 정리할 수 있습니다. 이번 튜토리얼이 NEAR의 Account 모델에 궁금증을 가지셨던 분들께 도움이 되었길 바라면서 다음에는 NEAR의 컨트랙트에 대한 튜토리얼과 함께 돌아오도록 하겠습니다.

---

### Reference

[https://docs.near.org/concepts/basics/accounts/model](https://docs.near.org/concepts/basics/accounts/model)

[https://nomicon.io/DataStructures/Account](https://nomicon.io/DataStructures/Account)

[https://docs.near.org/integrator/implicit-accounts](https://docs.near.org/integrator/implicit-accounts)
