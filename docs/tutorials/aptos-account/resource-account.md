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

This tutorial explores one of the Aptos account models, the resource account. It is based on content from the official Aptos documentation, supplemented with practical exercises for better understanding.

In Ethereum, assets (e.g., tokens) are managed through smart contracts. In contrast, Aptos allows direct management of these assets as 'resources' within user accounts. This structure necessitates resource accounts in Aptos. Resource accounts operate independently from user accounts, facilitating resource management and access control. This feature is vital for supporting complex and diverse blockchain applications in Aptos, ensuring secure and efficient resource management.

## **Resource Account**

### **Creating a Resource Account**

First, a regular user account in Aptos is created using the [WELLDONE Wallet](https://docs.welldonestudio.io/wallet/manual/how-to-install).

<img src={require('./img/resource-account-1.png').default} alt='wallet-create-account' style={{width: '300px', marginBottom: '20px'}}/>

Then, using the Aptos CLI in the terminal, a resource account with seed 1 is created. The process involves cloning the aptos-core [repository](https://github.com/aptos-labs/aptos-core) and proceeding with the creation of **simple_exam** folders and files at the following path:

```
./aptos-core/aptos-move/move-examples/simple_exam
```

The user account's private key extracted from the wallet is used to set up the account in Aptos CLI.

<img src={require('./img/resource-account-2.png').default} alt='wallet-export-pk1' style={{width: '300px', marginRight: '50px'}}/>

<img src={require('./img/resource-account-3.png').default} alt='wallet-export-pk2' style={{width: '300px', marginBottom: '0px'}}/>

```
> aptos init --private-key <PRIVATE_KEY>
```

<img src={require('./img/resource-account-4.png').default} alt='wallet-import' />

Next, the resource account is created using this account. Since a resource account is created with a hash of a specific account address and seed, only one resource account can be created per account address and seed.

<img src={require('./img/resource-account-5.png').default} alt='creat-resource-account' />


Coins are then transferred to the newly created resource account through the faucet.

<img src={require('./img/resource-account-6.png').default} alt='fund-with-faucet' />


Using an explorer, the newly created resource account address is checked, revealing that the authentication key is still with the original user account, indicating that the resource account is still under the control of the user account.

<img src={require('./img/resource-account-7.png').default} alt='explorer-check-authkey' />


### **Publishing a Package**

The tutorial now moves to publishing a package to the resource account.

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

The code defines the **`retrieve_resource_account`** function within the **`simple_example::tutorial`** module. This function retrieves the **Signer Capability** of a resource account. **Signer Capability** allows delegation of specific account permissions to another account, enabling the resource account or other accounts to perform necessary actions. This plays a crucial role, especially when a resource account performs independent operations.

- **`resource_signer: &signer`**: This parameter is a signer object passed by reference (&). It utilizes the authority of this signer during the function call.
- **`resource_account::retrieve_resource_account_cap(...)`**: This function retrieves the **Signer Capability** of a resource account. **`resource_signer`** here passes the aforementioned signer object, and **`@source_addr`** represents the address of the user account that created the resource account.

The following command publishes the package to the resource account.

<img src={require('./img/resource-account-8.png').default} alt='publish-package' />

Once published, the status can be checked via the explorer. It can be seen that the package is properly deployed and the authentication key still exists. The function required to change the authentication key to 0 and make the resource account independent is the **`resource_account::retrieve_resource_account_cap`** function just deployed.

<img src={require('./img/resource-account-9.png').default} alt='explorer-check-module' />

<img src={require('./img/resource-account-10.png').default} alt='explorer-check-authkey' />

### **Rotating the Authentication Key**

The **`resource_account::retrieve_resource_account_cap`** function is called to remove the authentication key that grants authority to the resource account.

<img src={require('./img/resource-account-11.png').default} alt='move-function-call' />


Checking the explorer, it can be seen that the authentication key is changed to 0, making the resource account independent.

<img src={require('./img/resource-account-12.png').default} alt='explorer-check-authkey' />

Let's delve deeper into the resource account.

When a resource account is created, a **Signer Capability** is generated, enabling the signing capabilities of that resource account. This allows a specific resource account to sign transactions or manipulate assets owned by the account.

In the example provided, when the resource account calls the **`retrieve_resource_account_cap`** function, it retrieves the associated **Signer Capability** and rotates the account's authentication key to 0x0. This process ensures that the account cannot be accessed without the **Signer Capability**, enhancing the security of the resource account and making its management and usage safer. (It's also possible to rotate the key at the time of package deployment using the init_module function.)

Below is [the code](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/resource_account.move#L166C16-L166C16) for this function.

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

The function flow first checks for the existence of a 'Container' resource at the specified source address (source_addr). The 'Container' is a structure used to store the 'SignerCapability' of a resource account. Using the address of the resource account (resource_addr), the function retrieves this 'SignerCapability' and returns it.

A crucial part of this process is rotating the resource account's authentication key to 'ZERO_AUTH_KEY' after retrieving the 'SignerCapability'. This rotation makes the resource account inaccessible from the outside, thereby enhancing its security.

In summary, calling this function retrieves the **Signer Capability** of the given resource account and rotates its authentication key to zero, ensuring safe management of transactions related to the resource account.

Additionally, the **`create_resource_account_and_publish_package`** method from the Aptos official documentation can be used to create a resource account while simultaneously rotating its authentication key and deploying a package.

From the aptos-core's move-examples, the [2-Using-Resource-Account](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/mint_nft/2-Using-Resource-Account) will be explored. Since seed 1 was previously used, this time a resource account is created with seed 2, and a package is deployed.

<img src={require('./img/resource-account-13.png').default} alt='create_resource_account_and_publish_package' />


Upon inspecting the newly created resource account in the explorer, it can be observed that the package has been deployed and the authentication key has been rotated to 0.

<img src={require('./img/resource-account-14.png').default} alt='explorer-check-code' />

<img src={require('./img/resource-account-15.png').default} alt='explorer-check-authkey' />

Below is [the code](https://github.com/aptos-labs/aptos-core/blob/285d4d8f2bcb51298a098b27e275244d3f3f87ad/aptos-move/framework/aptos-framework/sources/resource_account.move#L124) for this function.

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

This method creates a resource account from the original account (**`origin`**) and deploys a package under this account. A **Signer Capability** (**`resource_signer_cap`**) associated with the resource account is generated, granting it the authority to autonomously sign transactions. The **`rotate_account_authentication_key_and_store_capability`** function rotates the authentication key of the resource account and securely stores the **Signer Capability**.


## **Conclusion**

This tutorial has covered the creation and management of resource accounts in Aptos, as well as effective methods for deploying packages. It is hoped that this will provide a deeper understanding of resource accounts in Aptos.

---

### Reference

[https://aptos.dev/](https://aptos.dev/)

[https://github.com/aptos-labs/aptos-core](https://github.com/aptos-labs/aptos-core)