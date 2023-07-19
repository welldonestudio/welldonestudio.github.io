---
title: SUI Game Example
description: Learning about how to build a game in Sui
---

# Building a Game on Sui with VRF and Dynamic NFTs

<div>
  <span className='author-sm'>July 17, 2023</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/sunny0529' target='_blank'><img src='https://avatars.githubusercontent.com/u/49579003?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Hyunsun Yoo</span><br/>
      <span className='author-sm'>Software Engineer, DSRV</span>
    </div>
  </div>
</div>

## Introduction
<img src={require('./img/study-u-and-i.png').default} alt='template-code-sui' style={{width: '90%'}}/>

Here is an educational game prototype that can be fast, scalable, and transparent with mutable, fully on-chain NFTs and verifiable random. Sui has a lot of unique features. Sui’s unique language, Move is awesome: It’s safe, efficient for blockchain, and resistant to vulnerabilities such as reentrancy. But without move expertise, here's an easy way to build a game on Sui, with a web IDE that doesn't require any development setup. And let's take a look at how Sui's unique features, such as dynamic NFTs and VRF, can enhance the gaming experience.

🎮 [**Study U&I**](/tutorials/sui-game/game/), is playable now.

## Code Tutorials

### Smart Contract: Weapon Struct

```rust
    /// Weapon NFT
    struct Weapon has key, store {
        id: UID,
        name: string::String,
        description: string::String,
        url: Url,
        /// TODO: add custom attributes
        power: u8,
    }
```

### Smart Contract: Ownership

```rust
    struct Ownership has key {
        id: UID
    }

    fun init(ctx: &mut TxContext) {
        let ownership = Ownership {
            id: object::new(ctx),
        };
        /// Transfer the ownership object to the module/package publisher
        transfer::transfer(ownership, tx_context::sender(ctx));
    }

```

Use the `Ownership` object to ensure that only authorized people can mint and modify NFTs. In this example, the authorized person is the module/package publisher (the game company). Transfer the `Ownership` object to the publisher in the `init` function, which is executed only once when deploying the smart contract.

### Smart Contract: Create Weapon

```rust
    /// Create a new Weapon
    public entry fun mint(
        _: &Ownership,
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
        recipient: address,
        ctx: &mut TxContext
    ) {
        let nft = DevNetNFT {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            url: url::new_unsafe_from_bytes(url),
            power: 0
        };

        transfer::public_transfer(nft, recipient);
    }
```

By taking Ownership as the parameter, Only addresses that own the `Ownership` object can call the `mint` function.

### Smart Contract: Request Updating Weapon

```rust    
    /// An object for consign
    struct ConsignedObj has key, store {
        id: UID,
        /// owner of the consigned object
        sender: address,
        /// the consigned object
        weapon: Option<ID>,
    }
```

`ConsignedObj` is an object for consigning an item to the game company to request an update on the item.


```rust
    /// `users` create an consign for consigning
    /// an item to `third_party`
    public entry fun create(
        third_party: address,
        weapon: Weapon,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let consigned = ConsignedObj { id: object::new(ctx), weapon: option::none(), sender: sender };
        
        option::fill(&mut consigned.weapon, object::id(&weapon));
        dynamic_object_field::add(&mut consigned.id, 0, weapon);

        // consign the object with the trusted third party
        transfer::public_transfer(consigned, third_party);
    }
```

Users can call the `create` function to request enchanting their item.

### Smart Contract: Update Weapon
```rust
    /// Trusted third party can update nft
    /// Update the `power` of 'nft'
    public entry fun upgrade_power(_: &Ownership, obj: ConsignedObj, output: vector<u8>, input: vector<u8>, public_key: vector<u8>, proof: vector<u8>, ctx: &mut TxContext) {
        let verified = ecvrf::ecvrf_verify(&output, &input, &public_key, &proof);
        event::emit(VerifiedEvent {is_verified: verified});

        assert!(!verified, ENotVerified);

        let third_party = tx_context::sender(ctx);
        let ConsignedObj {
            id: id,
            sender: sender,
            weapon: temp,
        } = obj;

        let weapon: Weapon = dynamic_object_field::remove(&mut id, 0);
        let weapon_id = option::extract(&mut temp);
        assert!(object::id(&weapon) == weapon_id, 0);
        
        weapon.power = weapon.power + 1;
        
        event::emit(NFTUpgrade {
            object_id: weapon_id,
            creator: third_party,
            name: weapon.name,
            power: weapon.power,
        });

        object::delete(id);
        transfer::public_transfer(weapon, sender);
    }
```

The module/package publisher (the game company) can enchant an item. There are three main parts to enchanting:

1. Verifiable Random Function ([VRF](https://docs.sui.io/learn/cryptography/ecvrf))

- The `enchant` function takes parameters a random `output`, `alpha_string`, `public_key`, and `proof` generated by the game company via VRF. Then inside the function, the random is verified, and if it passes, the result of random output determines whether the item is enchanted or not.

<details>
  <summary>Why is the Verifiable Random Function important in games?</summary>
  <div>
    <div> A Verifiable Random Function (VRF) enables the holder of a private key to generate a hashed value for the message, which can be verified by anyone possessing the corresponding public key to ensure the validity of the hash. Therefore, by using VRF Users have the ability to verify the random value used in games. Since the Random Function is such an important component of gaming and blockchain, it's important to provide transparent random for Sui users.
    </div>
  </div>
</details>

2. Dynamic NFTs

- If the random output determines that the item enchant, change the properties of the NFT. All game items such as weapons and armor are all Dynamic NFTs on-chain. As users enchant their item with scroll, attributes such as power, delay, and durability are all updated live and can be checked through Sui Explorer. 

<details>
  <summary>Why is the Dynamic NFTs important in games?</summary>
  <div>
    <div> Traditional NFTs are immutable once minted, while Dynamic NFTs are programmed to change their value based on external inputs. Using Dynamic NFTs in the game enables a program to change the properties of a user's items to become more powerful based on the user's contributions as they progress through the game. Sui's fast speed allows for real-time changes of NFT in fast-paced games. Additionally, Sui's comprehensive support for fully on-chain NFTs enables dynamic NFTs, which offer great advantages in gaming applications.
    </div>
  </div>
</details>

3. Returning NFT to the user who requested the enchanting

- Using the `ConsignedObj`, return NFT to the user who requested the enchanting.

## Deploy Smart Contract with WELLDONE Code

:::info
Please refer to [here](https://docs.welldonestudio.io/code/getting-started) to get started.
:::


### New Project

Automatically generate a contract structure. Click the `Create` button to create a contract structure.

<img src={require('./img/new-project-sui.png').default} alt='template-code-sui' style={{width: '50%'}}/>

:::info
You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory `sui/`. If you start a new project, the structure should look like the following.
:::

  ```
  sui
  └── weapon
      ├── Move.toml
      ├── Move.lock
      └── sources
          └── weapon.move
  ```

### Source Code

```rust title="weapon.move"
module examples::weapon {
    use sui::url::{Self, Url};
    use std::string;
    use sui::object::{Self, ID, UID};
    use sui::event;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::option::{Self, Option};
    use sui::dynamic_object_field;
    use sui::ecvrf;

    /// Weapon NFT
    struct Weapon has key, store {
        id: UID,
        name: string::String,
        description: string::String,
        url: Url,
        /// TODO: add custom attributes
        power: u8,
    }

    struct Ownership has key {
        id: UID
    }

    /// An object for consign
    struct ConsignedObj has key, store {
        id: UID,
        /// owner of the consigned object
        sender: address,
        /// the consigned object
        weapon: Option<ID>,
    }

    fun init(ctx: &mut TxContext) {
        let ownership = Ownership {
            id: object::new(ctx),
        };
        transfer::transfer(ownership, tx_context::sender(ctx));
    }

    // ===== Error codes =====

    const ENotVerified: u64 = 0;

    // ===== Events =====

    struct NFTMinted has copy, drop {
        // The Object ID of the NFT
        object_id: ID,
        // The creator of the NFT
        creator: address,
        // The name of the NFT
        name: string::String,
    }
    
    struct NFTUpgrade has copy, drop {
        // The Object ID of the NFT
        object_id: ID,
        // The creator of the NFT
        creator: address,
        // The name of the NFT
        name: string::String,

        power: u8,
    }

    /// Event on whether the output is verified
    struct VerifiedEvent has copy, drop {
        is_verified: bool,
    }

    // ===== Public view functions =====

    /// Get the NFT's `name`
    public fun name(nft: &Weapon): &string::String {
        &nft.name
    }

    /// Get the NFT's `description`
    public fun description(nft: &Weapon): &string::String {
        &nft.description
    }

    /// Get the NFT's `url`
    public fun url(nft: &Weapon): &Url {
        &nft.url
    }

    /// Get the NFT's `power`
    public fun power(nft: &Weapon): &u8 {
        &nft.power
    }

    // ===== Entrypoints =====

    /// Create a new Weapon
    public entry fun mint(
        _: &Ownership,
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
        recipient: address,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let nft = Weapon {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            url: url::new_unsafe_from_bytes(url),
            power: 0
        };

        event::emit(NFTMinted {
            object_id: object::id(&nft),
            creator: sender,
            name: nft.name,
        });

        transfer::public_transfer(nft, recipient);
    }

    /// Transfer `nft` to `recipient`
    public entry fun transfer(
        nft: Weapon, recipient: address, _: &mut TxContext
    ) {
        transfer::public_transfer(nft, recipient)
    }

    /// `users` create an consign for consigning
    /// an item to `third_party`
    public entry fun create(
        third_party: address,
        weapon: Weapon,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let consigned = ConsignedObj { id: object::new(ctx), weapon: option::none(), sender: sender };
        
        option::fill(&mut consigned.weapon, object::id(&weapon));
        dynamic_object_field::add(&mut consigned.id, 0, weapon);

        // consign the object with the trusted third party
        transfer::public_transfer(consigned, third_party);
    }

    /// Trusted third party can update nft
    /// Update the `power` of 'nft'
    public entry fun upgrade_power(_: &Ownership, obj: ConsignedObj, output: vector<u8>, input: vector<u8>, public_key: vector<u8>, proof: vector<u8>, ctx: &mut TxContext) {
        let verified = ecvrf::ecvrf_verify(&output, &input, &public_key, &proof);
        event::emit(VerifiedEvent {is_verified: verified});

        assert!(!verified, ENotVerified);

        let third_party = tx_context::sender(ctx);
        let ConsignedObj {
            id: id,
            sender: sender,
            weapon: temp,
        } = obj;

        let weapon: Weapon = dynamic_object_field::remove(&mut id, 0);
        let weapon_id = option::extract(&mut temp);
        assert!(object::id(&weapon) == weapon_id, 0);
        
        weapon.power = weapon.power + 1;
        
        event::emit(NFTUpgrade {
            object_id: weapon_id,
            creator: third_party,
            name: weapon.name,
            power: weapon.power,
        });

        object::delete(id);
        transfer::public_transfer(weapon, sender);
    }

    /// Permanently delete `nft`
    public entry fun burn(nft: Weapon, _: &mut TxContext) {
        let Weapon { id, name: _, description: _, url: _, power : _, } = nft;
        object::delete(id)
    }
}
```

```rust title="Move.toml"
[package]
name = "Examples"
version = "0.0.1"

[dependencies]
Sui = { git = "https://github.com/MystenLabs/sui.git", subdir="crates/sui-framework/packages/sui-framework/", rev = "testnet" }

[addresses]
examples = "0x0"
```

### Compile The Source Code

Select the project you want to compile. For now, let's choose `sui/weapon` and click `Compile` button.

<img src={require('./img/02.png').default} alt='02_project-to-compile-weapon' style={{width: '480px'}}/>

### Deployment 
If the compilation succeed, you can see mv file `weapon.mv`.

Click the `Deploy` button.

<img src={require('./img/03.png').default} alt='03_build-file-weapon' style={{width: '480px'}}/>

and you can see wallet popup. Let's click `Send` button.

<img src={require('./img/04.png').default} alt='04_sui-wallet-popup' style={{width: '480px'}}/>

### Check Out Deployed Contract
After deployment, you can see weapon module and functions.

### Calling Contract Functions
1. Select `mint` function. First parameter is Ownership object id. 
You can get the object id in the terminal log which shows for above deployment transaction result.
The second through fourth parameters are the name, description, and url of the NFT to mint, in that order.
The fifth parameter is the address to which the minted NFTs will be sent.

2. After mint transaction, check if Weapon was minted in [SUI Explorer](https://suiexplorer.com/).

3. Run the `create` function with the recipient's account that you entered in the 5th parameter in step 1.
The first parameter is the type of Weapon NFT you want to update. The second parameter is the address where you deployed this smart contract. The third parameter is the object ID of the Weapon NFT you want to update.

4. Return to the account where you deployed the smart contract and run the `enchant` function.

5. After enchant transaction, check if Weapon was returned to the user and updated in [SUI Explorer](https://suiexplorer.com/).

---

## Reference

[https://examples.sui.io/samples/nft.html](https://examples.sui.io/samples/nft.html)

[https://docs.sui.io/learn/cryptography/ecvrf](https://docs.sui.io/learn/cryptography/ecvrf)
