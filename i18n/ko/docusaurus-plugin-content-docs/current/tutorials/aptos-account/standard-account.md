---
title: Standard Account
description: Learning about Aptos Standard Account
---

# Standard Account

<div>
  <span className='author-sm'>November 29, 2023</span>
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

Aptos 블록체인에서 계정(Account) 모델은 사용자의 디지털 자산과 스마트 계약을 관리하는 핵심 요소입니다. Aptos에는 세 종류의 계정이 있습니다: 표준 계정은 일반적인 키 쌍이 있는 계정, 리소스 계정은 개발자가 사용하는 개인 키가 없는 독립형 계정, 그리고 오브젝트는 단일 주소에 저장된 복잡한 리소스 세트입니다. 이 세 유형의 계정은 각각 고유한 특성과 사용 사례를 가지고 있습니다. 이번 아티클에서는 주로 Standard Account의 특별한 기능들에 대해 다룹니다.

:::tip Prerequisites

- 블록체인 Ecosystem에 대한 기본적인 이해

:::

## **Standard Account**

### **계정 생성 및 관리**

Aptos 블록체인에서 각 계정의 상태는 두 가지 주요 요소로 구성됩니다. 그것은 Move modules와 Move resources 입니다.

- **무브 모듈(Move modules)**: 이들은 코드를 포함합니다. 예를 들어, 타입(type)이나 절차(procedure)의 선언이 여기에 해당합니다. 하지만, 데이터는 포함하지 않습니다. 무브 모듈은 Aptos 블록체인의 전역 상태(global state)를 업데이트하는 규칙을 정의합니다.
- **무브 리소스(Move resources)**: 반면, 무브 리소스는 데이터를 포함하지만 코드는 포함하지 않습니다. 무브 리소스의 각 값은 Aptos 블록체인에 발행된 어떤 모듈에서 선언된 타입을 갖습니다.

Aptos에서 계정은 온체인 상에서 생성되며, 사용자는 지갑을 통해 새로운 계정를 생성할 수 있습니다. 하지만 온체인에서의 계정의 실제 활성화는 별도의 트랜잭션을 통해 이루어져야 합니다. 아래 이미지를 보면 지갑에서는 계정을 생성하였지만, 익스플로러에서는 조회가 되지 않는다는 것을 알 수 있습니다. 

<img src={require('./img/account1.png').default} alt='wallet-create-account' style={{width: '300px', marginBottom: '20px'}}/>
<img src={require('./img/explorer1.png').default} alt='explorer-no-account'/>

여기서는 계정 활성화를 위해 faucet를 사용합니다. 이를 통해 사용자는 계정을 온체인에서 활성화 하고, 실제 Aptos 네트워크에서 거래를 시작할 수 있습니다. 이 내용에 대해 Aptos 공식 문서에는 아래와 같이 설명되어있습니다.

:::note
Aptos 코인을 전송할 때 `aptos_account::transfer`를 통해 암시적으로 계정을 생성하거나 `aptos_account::create_account`를 통해 명시적으로 계정을 생성할 수 있도록 지원합니다.
:::

<img src={require('./img/faucet.png').default} alt='wallet-faucet' style={{width: '300px', marginBottom: '20px'}}/>
<img src={require('./img/explorer2.png').default} alt='explorer-account-info' />

faucet을 통해 활성화된 계정은 위와 같이 Aptos Explorer를 통해 계정의 주요 정보를 확인할 수 있습니다. 여기에는 계정 주소, 시퀀스 번호, 인증 키 등이 포함됩니다. 

여기서 `guid`는 발신자 주소와 카운터를 기반으로 생성된 글로벌하게 고유한 식별자를 의미하며, 계정의 `sequence_number`는 해당 계정에서 제출되어 온체인에 커밋된 트랜잭션의 수를 나타냅니다. `authentication_key`에 대해서는 조금 더 자세히 알아보겠습니다.

### 인증 키 (Authentication Key)

인증 키는 계정의 보안과 관련된 중요한 요소입니다. 이 키는 계정 생성 시에 설정되며, 필요에 따라 변경될 수 있습니다. 즉 사용자는 보안 상의 이유로 주기적으로 키 로테이션 기능을 통해 인증 키를 교체할 수 있습니다. 계정의 개인키가 노출 되었거나, 노출 되었을 가능성이 있다면, 기존 계정 주소는 그대로 유지하면서 기존 계정에 대한 개인키와 인증키를 변경하여 계정을 안전하게 지킬 수 있습니다.

:::note
Aptos에서는 개인키-공개키 쌍에서 공개키로 계정의 주소와 매핑되는 authentication key 생성하고, 이것을 온체인에 매핑시켜둠으로써 계정과 인증키를 확인할 수 있습니다.
:::

예시를 통해 확인해보겠습니다. 아까 만들었던 계정에 대한 인증키를 변경해보도록하겠습니다.

<img src={require('./img/rotate1.png').default} alt='key-rotate' style={{ marginBottom: '20px'}}/>

aptos-cli의 rotate-key 기능을 이용해 인증키를 변경하였고, 익스플로러를 통해 원래 계정인 0x28a0…2c1에 대한 `authencation_key`가 변경되었음을 확인할 수 있습니다.

<img src={require('./img/rotate2.png').default} alt='change-key-info' style={{ marginBottom: '20px'}}/>

현재 지갑에는 바뀌기 전의 키가 저장되어 있기 때문에 지갑에 있는 이전 키를 통해 트랜잭션에 서명을 하고 전송할 경우 해당 트랜잭션은 당연히 실패를 하게 됩니다.

<img src={require('./img/fail.png').default} alt='fail-tx' style={{width: '300px', marginBottom: '20px'}}/>

aptos-core 레포지토리에 있는 [코드 예제](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/examples/typescript-esm/rotate_key.ts)를 살펴보도록 하겠습니다.

이 코드는 Aptos 블록체인 네트워크를 사용하여 두 개의 새로운 계정을 생성하고, 이 계정들을 faucet으로 활성화 한 뒤 한 계정의 인증키(권한키)를 회전시키는 함수입니다. 사용된 주요 구성요소와 프로세스는 다음과 같습니다.

`AptosAccount` 클래스를 사용하여 Alice와 Bob이라는 두 개의 새로운 계정을 생성합니다. 그리고 `FaucetClient`를 사용하여 이 두 계정에 자금을 전송합니다. 

```jsx
// :!:>create_accounts
  const alice = new AptosAccount();
  const bob = new AptosAccount(); // <:!:create_accounts

  await faucetClient.fundAccount(alice.address(), 1 * Math.pow(10, APTOS_COIN_DECIMALS));
  await faucetClient.fundAccount(bob.address(), 1 * Math.pow(10, APTOS_COIN_DECIMALS));
```

Alice의 인증키를 Bob의 비밀키로 변경합니다. 

```jsx
const response = await provider.aptosClient.rotateAuthKeyEd25519(alice, bob.signingKey.secretKey); // <:!:rotate_key
```

인증키가 변경된 후, 새로운 개인키와 기존 Alice의 주소를 사용하여 Alice의 계정 인스턴스를 새롭게 생성합니다. 

```tsx
// We must create a new instance of AptosAccount because the private key has changed.
  const aliceNew = new AptosAccount(
    bob.signingKey.secretKey,
    alice.address(), // NOTE: Without this argument, this would be bob, not aliceNew. You must specify the address since the private key matches multiple accounts now
  );
```

아래는 실행 결과 입니다. alice의 인증키가 bob의 것으로 변경된 것을 확인할 수 있습니다.

<img src={require('./img/rotate3.png').default} alt='ts-example-key-rotation' />

### **Multisig Account**

Aptos 블록체인에서 멀티시그(Multisig, 다중 서명) 기능은 여러 개체(owners)의 승인을 필요로 하는 트랜잭션을 관리하는 중요한 메커니즘입니다. 이 기능은 보안을 강화하고, 공동 결정을 요구하는 경우에 특히 유용합니다. 예를 들어, 조직의 자금 관리나 중요한 계약 실행에 다수의 이해관계자 승인이 필요한 경우에 멀티시그를 사용할 수 있습니다.

[multisig_account.ts](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/examples/typescript/multisig_account.ts) 스크립트를 사용하여 멀티시그 계정을 구현하는 방법을 확인해보도록 하겠습니다. 이 예시에서는 멀티시그 계정의 생성, 관리자 추가 및 제거, 서명 임계값 설정 변경 등을 다룹니다.

예시 코드에 대한 시나리오와 주요 함수에 대한 설명입니다.

세 명의 소유자(`owner1`, `owner2`, `owner3`)를 위한 Aptos 계정을 생성하고, 각 계정에 자금을 지원합니다.

```jsx
const owner1 = new AptosAccount();
const owner2 = new AptosAccount();
const owner3 = new AptosAccount();
await faucetClient.fundAccount(owner1.address(), 100_000_000);
await faucetClient.fundAccount(owner2.address(), 100_000_000);
await faucetClient.fundAccount(owner3.address(), 100_000_000);
```

**멀티시그 계정 설정 (2-of-3)**: owner1을 사용하여 2-of-3 멀티시그 계정을 생성합니다. 이는 총 세 명의 소유자 중 두 명의 승인이 필요한 계정입니다.

```jsx
const payload: Gen.ViewRequest = {
  function: "0x1::multisig_account::get_next_multisig_account_address",
  arguments: [owner1.address().hex()],
};
const multisigAddress = (await client.view(payload))[0] as string;

// Create the multisig account with 3 owners and a signature threshold of 2.
const createMultisig = await client.generateTransaction(owner1.address(), {
  function: "0x1::multisig_account::create_with_owners",
  type_arguments: [],
  arguments: [[owner2.address().hex(), owner3.address().hex()], 2, ["Shaka"], [BCS.bcsSerializeStr("Bruh")]],
});
await client.generateSignSubmitWaitForTransaction(owner1, createMultisig.payload);
```

**멀티시그 계정 자금 지원**: 생성된 멀티시그 계정에 자금을 지원합니다.

```jsx
await faucetClient.fundAccount(multisigAddress, 100_000_000);
```

**멀티시그 트랜잭션 생성 및 실행**: 멀티시그 계정을 사용하여 코인을 전송하는 트랜잭션을 생성하고 실행합니다.

```jsx
const recipient = new AptosAccount();
const transferTxPayload = new MultiSigTransactionPayload(
  EntryFunction.natural(
    "0x1::aptos_account", "transfer", [], 
    [BCS.bcsToBytes(AccountAddress.fromHex(recipient.address())), BCS.bcsSerializeUint64(1_000_000)]
  ),
);
const createMultisigTx = await client.generateTransaction(owner2.address(), /*...*/);
await client.generateSignSubmitWaitForTransaction(owner2, createMultisigTx.payload);
```

**멀티시그 트랜잭션 실행 (페이로드 해시 사용)**: 페이로드의 해시를 사용하여 또 다른 멀티시그 트랜잭션을 생성하고 실행합니다. 이 과정은 페이로드의 해시를 사용하여 보다 안전하고 효율적인 방법으로 트랜잭션을 생성하고 실행하는 과정을 의미합니다.

```jsx
const transferTxPayloadHash = sha3Hash.create();
transferTxPayloadHash.update(BCS.bcsToBytes(transferTxPayload));
const createMultisigTxWithHash = await client.generateTransaction(
  owner2.address(), 
  {
    function: "0x1::multisig_account::create_transaction_with_hash",
    /* ... */
  }
);
```

**멀티시그 계정 소유자 관리**: 새로운 소유자를 멀티시그 계정에 추가하고, 이후 제거하는 과정을 진행합니다.

```jsx
const addOwnerPayload = new MultiSigTransactionPayload(
  EntryFunction.natural(
    "0x1::multisig_account", "add_owner", [], 
    [BCS.bcsToBytes(AccountAddress.fromHex(owner_4.address()))]
  ),
);
const removeOwnerPayload = new MultiSigTransactionPayload(
  EntryFunction.natural(
    "0x1::multisig_account", "remove_owner", [], 
    [BCS.bcsToBytes(AccountAddress.fromHex(owner_4.address()))]
  ),
);
```

**서명 임계값 변경**: 멀티시그 계정의 서명 임계값을 3-of-3으로 변경합니다.

```jsx
const changeSigThresholdPayload = new MultiSigTransactionPayload(
  EntryFunction.natural(
    "0x1::multisig_account", "update_signatures_required", [], 
    [BCS.bcsSerializeUint64(3)]
  ),
);
```

**거절 및 승인 함수 (rejectAndApprove)**: 멀티시그 트랜잭션을 거절하거나 승인하는 과정을 구현합니다.

```jsx
const rejectAndApprove = async (client, owner1, owner2, multisigAddress, transactionId) => {
  let rejectTx = await client.generateTransaction(
    owner1.address(), 
    {
      function: "0x1::multisig_account::reject_transaction",
      arguments: [multisigAddress, transactionId],
      /* ... */
    }
  );
  let approveTx = await client.generateTransaction(
    owner2.address(), 
    {
      function: "0x1::multisig_account::approve_transaction",
      arguments: [multisigAddress, transactionId],
      /* ... */
    }
  );
};
```

**소유자 수 및 서명 임계값 조회 함수 (getNumberOfOwners, getSignatureThreshold)**: 멀티시그 계정의 소유자 수와 서명 임계값을 조회하는 기능을 구현합니다.

```jsx
const getNumberOfOwners = async (client, multisigAddress) => {
  const multisigAccountResource = await client.getAccountResource(
    multisigAddress, "0x1::multisig_account::MultisigAccount"
  );
  return Number((multisigAccountResource.data as any).owners.length);
};
const getSignatureThreshold = async (client, multisigAddress) => {
  const multisigAccountResource = await client.getAccountResource(
    multisigAddress, "0x1::multisig_account::MultisigAccount"
  );
  return Number((multisigAccountResource.data as any).num_signatures_required);
};
```

아래는 실행 결과 입니다. 

<img src={require('./img/multisig.png').default} alt='multisig-account' />

Aptos의 멀티시그 기능은 블록체인 기술의 핵심 장점인 분산화된 신뢰와 보안을 한층 강화합니다. 이를 통해 사용자들은 자산 관리, 계약 실행 등 다양한 분야에서 더 높은 보안성을 확보할 수 있습니다. 이러한 멀티시그 메커니즘은 Aptos 블록체인이 제공하는 다양한 기능들 중 하나로, 탈중앙화된 응용 프로그램(Decentralized Applications, DApps) 개발에 있어 중요한 역할을 할 것으로 보입니다.

## **Conclusion**

이 글을 통해 Aptos 블록체인의 계정 모델, 특히 Key rotation과 Multisig Account 기능에 대해 살펴보았습니다. Aptos 블록체인의 독특한 기능과 사용자 친화적인 계정 관리 시스템은 블록체인 기술의 발전과 그 적용 범위 확대에 중요한 역할을 하고 있습니다. 이러한 기능은 블록체인 기술의 미래와 이를 활용하는 다양한 애플리케이션 개발에 증요한 통찰을 제공하며, Aptos 생태계의 일원으로서 Aptos의 여정에 참여하는 데 도움이 될 것입니다.

---

### Reference

[https://aptos.dev/](https://aptos.dev/)

[https://github.com/aptos-labs/aptos-core](https://github.com/aptos-labs/aptos-core)