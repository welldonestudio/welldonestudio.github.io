---
title: Resource Account
description: Learning about Aptos Resource Account
sidebar_position: 2
---

# Resource Account

<div>
  <span className='author-sm'>December 6, 2023</span>
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

Aptos 계정 모델 중 하나인 리소스 계정에 대해 알아보겠습니다. Aptos 공식 문서에 나온 리소스 계정에 대한 내용을 바탕으로, 관련 내용들을 실습을 통해 확인해 보도록 하겠습니다. 

이더리움에서는 스마트 컨트랙트를 통해 자산(예: 토큰)을 관리하는 반면, Aptos는 사용자 계정 자체에서 이러한 자산을 '리소스'로 직접 관리할 수 있는 구조를 가지고 있습니다. 이 구조로 인해 Aptos에서는 리소스 계정이 필요합니다. 리소스 계정은 사용자 계정과 분리되어 독립적으로 작동하며, 이를 통해 리소스의 관리와 접근 제어가 가능합니다. 이러한 특성은 Aptos가 보다 복잡하고 다양한 블록체인 애플리케이션을 지원하며, 리소스의 안전한 관리와 효율적인 운영을 가능하게 하는 중요한 요소입니다.

## **Resource Account**

### **리소스 계정 생성**

[WELLDONE Wallet](https://docs.welldonestudio.io/ko/wallet/manual/how-to-install)을 이용해서 Aptos의 일반 사용자 계정을 생성해보겠습니다.

<img src={require('./img/resource-account-1.png').default} alt='wallet-create-account' style={{width: '300px', marginBottom: '20px'}}/>

그리고 터미널에서 Aptos CLI 를 이용하여 seed가 1인 리소스 계정을 생성해보도록 하겠습니다. 

참고로 여기서는 aptos-core [레포지토리](https://github.com/aptos-labs/aptos-core)를 클론하여 아래 경로에서 **simple_exam** 폴더와 **move** 파일을 만들어 진행 합니다.

```
./aptos-core/aptos-move/move-examples/simple_exam
```

지갑에서 추출한 사용자 계정의 프라이빗 키를 이용해 Aptos CLI에 계정을 설정합니다.

<img src={require('./img/resource-account-2.png').default} alt='wallet-export-pk1' style={{width: '300px', marginRight: '50px'}}/>

<img src={require('./img/resource-account-3.png').default} alt='wallet-export-pk2' style={{width: '300px', marginBottom: '0px'}}/>

```
> aptos init --private-key <PRIVATE_KEY>
```

<img src={require('./img/resource-account-4.png').default} alt='wallet-import' />

그 다음은 이 계정을 이용하여 리소스 계정을 생성 합니다. 특정 계정 주소와 seed의 해시로 리소스 계정이 만들어지기 때문에 특정 계정 주소와 seed에 대해 리소스 계정은 하나만 생성할 수 있습니다.

<img src={require('./img/resource-account-5.png').default} alt='creat-resource-account' />

그리고 해당 리소스 계정에 faucet을 통해 코인을 전송 받습니다. 

<img src={require('./img/resource-account-6.png').default} alt='fund-with-faucet' />

익스플로러를 통해 방금 생성한 리소스 계정 주소를 조회해 보면 아직 인증키가 원래 사용자 계정에 있음을 알 수 있습니다. 리소스 계정이 여전히 사용자 계정의 통제 하에 있다는 것을 의미합니다.

<img src={require('./img/resource-account-7.png').default} alt='explorer-check-authkey' />


### **패키지 배포**

이번에는 리소스 계정에 패키지를 배포해 보도록 하겠습니다. 

```
simple_exam
	└── .aptos
	    └── config.yaml
	└── sources
	    └── simple_example.move
	└── Move.toml
```

```jsx
// simple_example.move

module simple_example::tutorial {
		use aptos_framework::resource_account;

    public entry fun retrieve_resource_account(resource_signer: &signer){
        resource_account::retrieve_resource_account_cap(resource_signer, @source_addr);
    }
}

// Move.toml

[package]
name = "Examples"
version = "0.0.0"

[addresses]
source_addr = 'b6936414e726f849b4673a08ac35ba181fa991056d35a9bafa2e4b9395ea8581'
resource_address = 'cc424539f912acb25003b831ee2033d28d1a4e64690038b9d726f702fdd7e994'
simple_example = 'cc424539f912acb25003b831ee2033d28d1a4e64690038b9d726f702fdd7e994'

[dependencies]
AptosFramework = { local = "../../framework/aptos-framework" }

// .aptos/config.yaml

---
profiles:
  default:
    private_key: "<PRIVATE KEY>"
    public_key: "0x3637f1b86e33b47557f5941a3414bee8e2f10d14dd4ca0967a0c75eabfbedbee"
    account: b6936414e726f849b4673a08ac35ba181fa991056d35a9bafa2e4b9395ea8581
    rest_url: "https://fullnode.testnet.aptoslabs.com"
    faucet_url: "https://faucet.testnet.aptoslabs.com"
  resource:
    private_key: "<PRIVATE KEY>"
    public_key: "0x3637f1b86e33b47557f5941a3414bee8e2f10d14dd4ca0967a0c75eabfbedbee"
    account: cc424539f912acb25003b831ee2033d28d1a4e64690038b9d726f702fdd7e994
    rest_url: "https://fullnode.testnet.aptoslabs.com"
    faucet_url: "https://faucet.testnet.aptoslabs.com"
```

이 코드는 **`simple_example::tutorial`** 모듈 내의 **`retrieve_resource_account`** 함수를 정의하고 있습니다. 이 함수는 리소스 계정의 **Signer Capability**를 회수하는 역할을 합니다. **Signer Capability**는 특정 계정의 권한을 다른 계정에 위임하는 기능을 제공합니다. 이를 통해, 리소스 계정이나 다른 계정이 필요한 행동을 할 수 있도록 하는 권한이 다른 계정에 임시적으로 부여됩니다. 이는 특히 리소스 계정이 독립적인 작업을 수행할 때 중요한 역할을 합니다.

- **`resource_signer: &signer`**: 이 파라미터는 참조(&)를 통해 전달되는 서명자(signer) 객체입니다. 함수가 호출되는 동안 해당 서명자의 권한을 사용합니다.
- **`resource_account::retrieve_resource_account_cap(...)`**: 이 함수는 리소스 계정의 **Signer Capability**를 회수합니다. 여기서 **`resource_signer`**는 위에서 언급된 서명자 객체를 전달하고, **`@source_addr`**는 해당 함수에서 리소스 계정을 생성한 사용자 계정의 주소를 나타냅니다,

다음 명령어를 통해 리소스 계정으로 패키지를 배포합니다.

<img src={require('./img/resource-account-8.png').default} alt='publish-package' />

배포가 완료되면 익스플로러를 통해 상태를 확인할 수 있습니다. 패키지가 제대로 배포된 것을 확인할 수 있으며 여전히 인증키는 존재한다는 것도 확인할 수 있습니다. 인증키를 0으로 변경하여 리소스 계정을 독립적인 상태로 만들기 위해 필요한 함수가 바로 우리가 방금 배포한 **`resource_account::retrieve_resource_account_cap`** 함수 입니다. 

<img src={require('./img/resource-account-9.png').default} alt='explorer-check-module' />

<img src={require('./img/resource-account-10.png').default} alt='explorer-check-authkey' />

### **인증키 변경y**

**`resource_account::retrieve_resource_account_cap`** 함수를 호출하여 리소스 계정에 대한 권한을 부여하는 인증키를 없애보도록 하겠습니다. 

<img src={require('./img/resource-account-11.png').default} alt='move-function-call' />

익스플로러를 확인해보면 인증키가 0으로 변경되어 리소스 계정은 독립적인 상태가 된 것을 확인할 수 있습니다.

<img src={require('./img/resource-account-12.png').default} alt='explorer-check-authkey' />

리소스 계정에 대해 조금 더 자세히 알아보도록 하겠습니다.

리소스 계정을 생성할 때 이 **Signer Capability**가 생성되며, 해당 리소스 계정의 서명 기능을 허용합니다. 이는 특정 리소스 계정이 트랜잭션에 서명하거나, 리소스 계정이 소유한 자산에 대해 특정 조작을 수행할 수 있게 해줍니다.

위의 예에서 리소스 계정이  **`retrieve_resource_account_cap`** 함수를 호출하면, 관련 **Signer Capability**을 찾고, 계정의 인증 키를 0x0으로 회전시켜서, **Signer Capability** 없이는 계정에 접근할 수 없게 만듭니다. 이 과정은 리소스 계정의 보안을 강화하며, 리소스 계정의 관리와 사용을 보다 안전하게 만들어줍니다. (참고로 init_module 함수를 이용해 패키지를 배포하는 시점에 키를 로테이션 시키는 것도 가능합니다.)

아래는 해당 [함수 코드](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/resource_account.move#L166C16-L166C16)입니다.

```rust
	public fun retrieve_resource_account_cap(
	      resource: &signer,
	      source_addr: address,
	  ): account::SignerCapability acquires Container {
	      assert!(exists<Container>(source_addr), error::not_found(ECONTAINER_NOT_PUBLISHED));
	
	      let resource_addr = signer::address_of(resource);
	      let (resource_signer_cap, empty_container) = {
	          let container = borrow_global_mut<Container>(source_addr);
	          assert!(simple_map::contains_key(&container.store, &resource_addr), error::invalid_argument(EUNAUTHORIZED_NOT_OWNER));
	          let (_resource_addr, signer_cap) = simple_map::remove(&mut container.store, &resource_addr);
	          (signer_cap, simple_map::length(&container.store) == 0)
	      };
	
	      if (empty_container) {
	          let container = move_from(source_addr);
	          let Container { store } = container;
	          simple_map::destroy_empty(store);
	      };
	
	      account::rotate_authentication_key_internal(resource, ZERO_AUTH_KEY);
	      resource_signer_cap
	  }
```

함수의 흐름을 살펴보면, 먼저 지정된 소스 주소(source_addr)에 'Container' 리소스가 존재하는지 확인합니다. 'Container'는 리소스 계정의 'SignerCapability'를 저장하는 데 사용되는 구조체입니다. 리소스 계정의 주소(resource_addr)를 이용해 해당 'SignerCapability'를 검색하고, 이를 리턴합니다.

이 과정에서 중요한 부분은, 'SignerCapability'를 검색한 후, 리소스 계정의 인증 키를 'ZERO_AUTH_KEY'로 회전시키는 것입니다. 이는 리소스 계정이 더 이상 외부에서 접근할 수 없도록 하여 보안을 강화하는 조치입니다.

간단히 말해, 이 함수의 호출을 통해 주어진 리소스 계정의 **Signer Capability**를 회수하고 인증키를 0으로 로테이션 시켜, 리소스 계정과 관련된 트랜잭션을 안전하게 관리할 수 있게 해줍니다.

Aptos 공식 문서에 나오는 **`create_resource_account_and_publish_packag`e** 메소드를 사용해 리소스 계정을 생성과 동시에 인증키를 로테이션 시키고, 패키지를 배포하는 방법도 있습니다.

aptos-core의 move-examples 중에서 [2-Using-Resource-Account](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/mint_nft/2-Using-Resource-Account)를 사용해 보겠습니다. 이전에 seed 1을 사용했었기 때문에 이번엔 seed를 2로 하여 리소스 계정을 생성하고, 패키지를 배포합니다.

<img src={require('./img/resource-account-13.png').default} alt='create_resource_account_and_publish_package' />

새로 생성된 리소스 계정을 익스플로러에서 조회해 보면 패키지가 배포되었고, 인증키가 0으로 로테이션 된 것을 확인할 수 있습니다.

<img src={require('./img/resource-account-14.png').default} alt='explorer-check-code' />

<img src={require('./img/resource-account-15.png').default} alt='explorer-check-authkey' />

아래는 해당 [함수 코드](https://github.com/aptos-labs/aptos-core/blob/285d4d8f2bcb51298a098b27e275244d3f3f87ad/aptos-move/framework/aptos-framework/sources/resource_account.move#L124)입니다.

```rust
/// Creates a new resource account, publishes the package under this account transaction under
    /// this account and leaves the signer cap readily available for pickup.
    public entry fun create_resource_account_and_publish_package(
        origin: &signer,
        seed: vector<u8>,
        metadata_serialized: vector<u8>,
        code: vector<vector<u8>>,
    ) acquires Container {
        let (resource, resource_signer_cap) = account::create_resource_account(origin, seed);
        aptos_framework::code::publish_package_txn(&resource, metadata_serialized, code);
        rotate_account_authentication_key_and_store_capability(
            origin,
            resource,
            resource_signer_cap,
            ZERO_AUTH_KEY,
        );
    }

    fun rotate_account_authentication_key_and_store_capability(
        origin: &signer,
        resource: signer,
        resource_signer_cap: account::SignerCapability,
        optional_auth_key: vector<u8>,
    ) acquires Container {
        let origin_addr = signer::address_of(origin);
        if (!exists<Container>(origin_addr)) {
            move_to(origin, Container { store: simple_map::create() })
        };

        let container = borrow_global_mut<Container>(origin_addr);
        let resource_addr = signer::address_of(&resource);
        simple_map::add(&mut container.store, resource_addr, resource_signer_cap);

        let auth_key = if (vector::is_empty(&optional_auth_key)) {
            account::get_authentication_key(origin_addr)
        } else {
            optional_auth_key
        };
        account::rotate_authentication_key_internal(&resource, auth_key);
    }
```

이 메소드는 원본 계정(origin)에서 리소스 계정을 생성하고, 이 계정 아래에 패키지를 배포합니다. 리소스 계정과 관련된 Signer Capability(resource_signer_cap)가 생성되어, 리소스 계정이 자체적으로 트랜잭션을 서명할 수 있는 권한을 제공합니다. **`rotate_account_authentication_key_and_store_capability`** 함수는 리소스 계정의 인증 키를 회전시키고 Signer Capability를 안전하게 저장합니다.


## **Conclusion**

이제까지 Aptos에서 리소스 계정을 생성하고 관리하는 방법, 그리고 패키지 효과적으로 배포하는 방법에 대해 알아보았습니다. 이를 통해 Aptos의 리소스 계정에 대해 더 이해할 수 있는 계기가 되길 바랍니다.

---

### Reference

[https://aptos.dev/](https://aptos.dev/)

[https://github.com/aptos-labs/aptos-core](https://github.com/aptos-labs/aptos-core)