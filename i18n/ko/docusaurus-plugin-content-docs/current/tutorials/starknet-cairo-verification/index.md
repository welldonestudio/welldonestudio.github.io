---
title: Starknet Cairo Verification
description: Starknet Cairo Smart Contract Verification
sidebar_position: 10 
---

# Starknet Cairo Verification

<div>
  <span className='author-sm'>Oct 8, 2024</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/inchori' target='_blank'><img src='https://avatars.githubusercontent.com/u/49394875?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Inchul Song</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>


## Starknet

Starknet은 이더리움 L2체인으로 유효성 롤업(Validity-Rollup)을 제공한다. 유효성 롤업은 영지식 롤업(ZK-Rollup)으로 알려져 있다.

Starknet은 아래의 컴포넌트로 구성되어 있다:

- Sequencer: Sequencer는 L2에서 생성된 트랜잭션을 수신하고 L2 블록을 생성한다. 생성된 L2 블록을 Prover에게 보내는 역할을 한다.
- Prover: Prover는 생성된 블록과 트랜잭션을 sequencer로부터 받아 검증을 진행한다. Starknet OS의 Cairo VM으로 증명할 수 있는 프로그램을 실행한 후 STARK proof를 생성하여 L1 체인으로 보낸다.
- L1(Ethereum): STARK 증명을 검증하고, 유효하다면 L1의 Starknet state root를 업데이트한다.

## Starknet Transaction Lifecycle

![starknet-tx-lifecycle](img/starknet-tx-lifecycle.png?raw=true 'starknet-tx-lifecycle')

Starknet의 트랜잭션 라이프사이클은 다음과 같은 순서로 진행된다.

1. 트랜잭션 제출: 트랜잭션이 하나의 Sequencer로 제출되고, `RECEVIED` 상태로 표시한다.
2. Mempool 유효성 검증: Mempool에서 트랜잭션의 유효성을 검증하며 아래의 경우 등을 검증한다.
    - 현재 account 잔액 `max_fee` 초과 여부
    - 트랜잭션의 calldata가 limit 초과 여부
3. Sequencer 유효성 검증: Sequencer는 트랜잭션 실행 전에 예비 유효성 검증을 진행한다.
4. 실행(Execution): Sequencer는 예비 유효성 검증을 통과한 모든 트랜잭션을 순차적으로 실행한다. 성공하게 된다면 트랜잭션을 `ACCEPTED_ON_L2` 상태로 표시한다. 만약 실행하는 동안에 트랜잭션이 실패한다면, `REVERTED` 상태가 된다.
5. 증명 생성과 검증: Prover는 새로운 블록에서 운영체제를 실행하고, 증명을 계산하여 L1 검증자에게 전송한다. L1에서 검증에 통과하게 된다면 `ACCEPTED_ON_L1`으로 표시한다.

## Cairo Language

Cairo 언어는 Starknet을 위한 Smart Contract 언어로 가상 CPU 용으로 설계된 프로그래밍 언어다. Cairo 언어는 물리적 제약이 아닌 암호학적 제약을 위해 만들어졌기 때문에 모든 프로그램의 실행을 효율적으로 증명할 수 있다.

Cairo 0에서는 바로 직접적으로 CASM(Cairo Assembly)로 컴파일되었지만, Cairo 1은 고수준 언어로 Sierra로 먼저 컴파일된다. Sierra(Safe Intermediate Representation)는 Cairo와 CASM 사이의 중간 표현으로 나중에 CASM의 안전한 부분 집합으로 컴파일된다. 컴파일 결과로 나온 CASM 코드가 결국 Starknet OS의 Cairo VM에 의해 실행되고 STARK proof를 생성하여 L1에 보낸다.

Cairo와 Sierra, CASM에 대해서는 이 [문서](https://docs.starknet.io/architecture-and-concepts/smart-contracts/cairo-and-sierra/)에서 자세하게 읽어볼 수 있다.

Cairo 언어의 예시 코드는 다음과 같다

```rust title="simple_storage.cairo"
#[starknet::interface]
trait ISimpleStorage<TContractState> {
    fn set(ref self: TContractState, x: u128);
    fn get(self: @TContractState) -> u128;
}

#[starknet::contract]
mod simple_storage {
    use starknet::get_caller_address;
    use starknet::ContractAddress;

    #[storage]
    struct Storage {
        stored_data: u128
    }

    #[abi(embed_v0)]
    impl SimpleStorage of super::ISimpleStorage<ContractState> {
        fn set(ref self: ContractState, x: u128) {
            self.stored_data.write(x);
        }
        fn get(self: @ContractState) -> u128 {
            self.stored_data.read()
        }
    }
}
```

## How to verify Cairo Smart Contract?

위의 `simple_storage.cairo`를 곧 런칭될 WELLDONE Studio의 Multi-chain Verification Tool을 사용해서 검증을 진행할 수 있다. Cairo로 작성된 스마트 컨트랙트를 배포하려면 Starknet [문서](https://docs.starknet.io/quick-start/environment-setup/)를 참조하여 배포를 진행할 수 있다. 배포를 진행한 후에는 Starkscan이나 Nethermind의 Voyager Explorer를 통해 올바르게 배포되었는지 확인할 수 있다.

Multi-chain Verification Tool을 사용하여 Cairo 스마트 컨트랙트를 하기 위해서는 총 5가지의 정보가 필요하다

1. Contract Address: Deploy된 스마트 컨트랙트 주소
2. `DECLARE` Transaction Hash: Declare 트랜잭션 해시가 필요한 이유는 `class_hash`뿐만 아니라 `compiled_class_hash`에 대한 검증 필요성이 있기 때문이다. 추후에는 `DECLARE` 트랜잭션 해시를 제외할 예정이다.
3. Scarb Version: Scarb는 Cairo 패키지 매니저로 Cairo 프로젝트를 컴파일한다. 컴파일러 버전에 의존하여 [컴파일](https://github.com/starkware-libs/cairo/blob/410069c5745800bab4fbd2f0f4ff0bbfc59209d6/crates/cairo-lang-starknet-classes/src/contract_class.rs#L49)되기 때문에 명시해줘야 한다.
4. Chain ID: Mainnet(`0x534e5f4d41494e`)과 Sepolia(`0x534e5f5345504f4c4941` ) 구별 용도
5. Cairo 프로젝트 소스 코드

Cairo를 검증하기 위해서는 Scarb.toml에 다음 config을 꼭 추가해야 한다:

```toml
[[target.starknet-contract]]
casm = true
sierra = true
```

Cairo 프로젝트 구조는 다음과 같다 (네트워크에 DECLARE와 DEPLOY 완료 가정):

```toml
├── Scarb.lock
├── Scarb.toml
├── src
│   ├── lib.cairo
│   └── simple_storage.cairo
└── target
    ├── CACHEDIR.TAG
    └── dev
        ├── simple_storage.starknet_artifacts.json
        ├── simple_storage_simple_storage.compiled_contract_class.json
        └── simple_storage_simple_storage.contract_class.json
```

추후에 공개될 MCVP의 /starknet/verifications의 API에 검증을 요청하면, 컴파일러 버전에 맞춰 코드를 컴파일하여 class_hash 와 compiled_class_hash를 계산하여 Starknet 네트워크의 class hash 값과 compiled class hash 값을 비교하여 검증을 진행한다.

### Why do we need to verify two hash values?

Ethereum에서 Solidity로 작성된 Smart Contract를 검증하기 위해서는 한 가지의 컴파일된 바이트 코드 결과값과 네트워크의 바이트코드를 비교한다. 그러나 Starknet에서는 한 가지의 해시값이 아닌 두 가지의 해시값, `class_hash`와 `compiled_class_hash`을 비교한다. [Class Hash](https://docs.starknet.io/architecture-and-concepts/smart-contracts/class-hash/)와 [Compiled Class Hash](https://docs.starknet.io/architecture-and-concepts/smart-contracts/compiled-class-hash/)는 이 문서에서 자세하게 다루고 있다.

사용자가 `DECLARE` 트랜잭션을 전송하면, `class_hash`와 `compiled_class_hash`에 동시에 서명한다. Sequencer는 Sierra → CASM 컴파일을 수행하고 결과물인 `compiled_class_hash`와 사용자가 서명한 `compiled_class_hash`를 비교한다. 만약에 Sequencer가 악의적인 경우, Sierra와 관련 없는 CASM이 선언된 클래스를 가져올 수 있기 때문에 `compiled_class_hash` 값도 비교한다.

### Reference
[https://docs.starknet.io/](https://docs.starknet.io/)  
[https://www.cairo-lang.org/](https://www.cairo-lang.org/)  
[https://book.cairo-lang.org/](https://book.cairo-lang.org/)  
[https://github.com/starkware-libs/cairo](https://github.com/starkware-libs/cairo)  