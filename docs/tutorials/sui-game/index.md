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

Here is an educational game prototype that can be fast, scalable, and transparent with mutable, fully on-chain NFTs and verifiable random function. Sui has a lot of unique features. Sui’s unique language, Move is awesome: It’s safe, efficient for blockchain, and resistant to vulnerabilities such as reentrancy. But without move expertise, here's an easy way to build a game on Sui, with a web IDE that doesn't require any development setup. And let's take a look at how Sui's unique features, such as dynamic NFTs and VRF, can enhance the gaming experience.

🎮 [**Study U&I**](/tutorials/sui-game/game/), is playable now.

## Code Tutorials

### Smart Contract: Item Struct

```rust
    /// Item NFT
    struct Item has key, store {
        id: UID,
        name: string::String,
        description: string::String,
        url: Url,

        /// TODO: add custom attributes
        itemType: u8,
        level: u8,
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

### Smart Contract: Create Item

```rust
    /// Create a new Item by contract owner
    public entry fun mint(
        _: &Ownership,
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
        itemType: u8,
        recipient: address,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let item = Item {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            url: url::new_unsafe_from_bytes(url),
            itemType: itemType,
            level: 0
        };

        event::emit(ItemMinted {
            object_id: object::id(&item),
            creator: sender,
            name: item.name,
        });

        transfer::public_transfer(item, recipient);
    }
```

By taking Ownership as the parameter, only addresses that own the `Ownership` object can call the `mint` function.

### Smart Contract: Request Updating Item

```rust    
    /// An object for consign
    struct ConsignedObj has key, store {
        id: UID,
        /// owner of the consigned object
        sender: address,
        /// the consigned object
        item_axe: Option<ID>,
        item_scroll: Option<ID>,
    }
```

`ConsignedObj` is an object for consigning an item to the game company to request an update on the item.


```rust
    /// `users` create a consign for consigning
    /// an Item to `third_party`
    public entry fun create(
        third_party: address,
        item_axe: Item,
        item_scroll: Item,
        ctx: &mut TxContext
    ) {
        assert!(item_axe.itemType == 0 && item_scroll.itemType != 0, EItemType);
        assert!(item_axe.level < 255 && item_scroll.level > 0, EItemLevel);

        let sender = tx_context::sender(ctx);
        let consigned = ConsignedObj { id: object::new(ctx), item_axe: option::none(), item_scroll: option::none(), sender: sender };
            
        option::fill(&mut consigned.item_axe, object::id(&item_axe));
        dynamic_object_field::add(&mut consigned.id, 0, item_axe);

        option::fill(&mut consigned.item_scroll, object::id(&item_scroll));
        dynamic_object_field::add(&mut consigned.id, 1, item_scroll);

        // consign the object with the trusted third party
        transfer::public_transfer(consigned, third_party);
    }
    }
```

Users can call the `create` function to request enchanting their item. In the second parameter, pass the Axe item want to enchant, and in the third parameter, pass the Scroll item want to spend to enchant.

### Smart Contract: Update Item
```rust
    /// Trusted third party can update nft
    /// Update the `level` of 'Item'
    public entry fun upgrade_level(_: &Ownership, obj: ConsignedObj, output: vector<u8>, input: vector<u8>, public_key: vector<u8>, proof: vector<u8>, ctx: &mut TxContext) {
        let verified = ecvrf::ecvrf_verify(&output, &input, &public_key, &proof);
        event::emit(VerifiedEvent {is_verified: verified});

        assert!(!verified, ENotVerified);

        let third_party = tx_context::sender(ctx);
        let ConsignedObj {
            id: id,
            sender: sender,
            item_axe: temp_a,
            item_scroll: temp_b,
        } = obj;

        let item_axe: Item = dynamic_object_field::remove(&mut id, 0);
        let item_axe_id = option::extract(&mut temp_a);
        assert!(object::id(&item_axe) == item_axe_id, 0);

        let item_scroll: Item = dynamic_object_field::remove(&mut id, 1);
        let item_scroll_id = option::extract(&mut temp_b);
        assert!(object::id(&item_scroll) == item_scroll_id, 0);

        assert!(item_axe.itemType == 0 && item_scroll.itemType != 0, EItemType);
        assert!(item_axe.level < 255 && item_scroll.level > 0, EItemLevel);

        let popedOutput = vector::pop_back(&mut output);
        let bonus: u8 = if (popedOutput > 128) { 1 } else { 0 };

        item_axe.level = item_axe.level + item_scroll.level + bonus;
        
        event::emit(ItemUpgrade {
            object_id: item_axe_id,
            creator: third_party,
            name: item_axe.name,
            level: item_axe.level,
        });

        object::delete(id);
        transfer::public_transfer(item_axe, sender);
        burn(item_scroll, ctx);
    }
```

The module/package publisher (the game company) can enchant an item. There are three main parts to enchanting:

1. Verifiable Random Function ([VRF](https://docs.sui.io/learn/cryptography/ecvrf))

- The `enchant` function takes parameters a random `output`, `alpha_string`, `public_key`, and `proof` generated by the game company via VRF. Then inside the function, the random output is verified, and if it passes, the result of random output determines whether or not to grant bonus levels when enchanting items.

<details>
  <summary>Why is the Verifiable Random Function important in games?</summary>
  <div>
    <div> A Verifiable Random Function (VRF) enables the holder of a private key to generate a hashed value for the message, which can be verified by anyone possessing the corresponding public key to ensure the validity of the hash. Therefore, by using VRF Users have the ability to verify the random value used in games. Moreover, it also allows users can provide an input seed for the game company to use when generating a random value, and can always verify that the game company used that seed to generate the random. Since the Random Function is such an important component of gaming and blockchain, it's important to provide transparent random for Sui users.
    </div>
  </div>
</details>

- For example, the game company will generate the random output using information about the user as an input seed. Then the user can always verify that the game company generated the random value with information about them.

2. Dynamic NFTs

- Once the random output determines how much the item will level up, change the properties of the NFT. All game items such as weapons and armor are all Dynamic NFTs on-chain. As users enchant their item with scroll, attributes such as level, power, and delay are all updated live and can be checked through Sui Explorer.

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
  └── item
      ├── Move.toml
      ├── Move.lock
      └── sources
          └── item.move
  ```

### Source Code

```rust title="item.move"
module examples::item {
    use sui::url::{Self, Url};
    use std::string;
    use sui::object::{Self, ID, UID};
    use sui::event;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::option::{Self, Option};
    use sui::dynamic_object_field;
    use sui::ecvrf;
    use std::vector;

    /// Item NFT
    struct Item has key, store {
        id: UID,
        name: string::String,
        description: string::String,
        url: Url,

        /// TODO: add custom attributes
        itemType: u8,
        level: u8,
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
        item_axe: Option<ID>,
        item_scroll: Option<ID>,
    }

    fun init(ctx: &mut TxContext) {
        let ownership = Ownership {
            id: object::new(ctx),
        };
        
        /// Transfer the ownership object to the module/package publisher
        transfer::transfer(ownership, tx_context::sender(ctx));
    }

    // ===== Error codes =====

    const ENotVerified: u64 = 0;
    const EItemType: u64 = 1;
    const EItemLevel: u64 = 2;

    // ===== Events =====

    struct ItemMinted has copy, drop {
        // The Object ID of the Item
        object_id: ID,
        // The creator of the Item
        creator: address,
        // The name of the Item
        name: string::String,
    }
    
    struct ItemUpgrade has copy, drop {
        // The Object ID of the Item
        object_id: ID,
        // The creator of the Item
        creator: address,
        // The name of the Item
        name: string::String,

        level: u8,
    }

    /// Event on whether the output is verified
    struct VerifiedEvent has copy, drop {
        is_verified: bool,
    }

    // ===== Public view functions =====
    
    /// Get the Item's `name`
    public fun name(item: &Item): &string::String {
        &item.name
    }

    /// Get the Item's `description`
    public fun description(item: &Item): &string::String {
        &item.description
    }

    /// Get the Item's `url`
    public fun url(item: &Item): &Url {
        &item.url
    }

    /// Get the Item's `itemType`
    public fun item_typel(item: &Item): &u8 {
        &item.itemType
    }

    /// Get the Item's `level`
    public fun level(item: &Item): &u8 {
        &item.level
    }

    // ===== Entrypoints =====

    /// Create a new Item
    fun mint_internal(
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
        itemType: u8,
        level: u8,
        ctx: &mut TxContext,
    ) {
        let item = Item {
            id: object::new(ctx),
            name:  string::utf8(name),
            description:  string::utf8(description),
            url: url::new_unsafe_from_bytes(url),
            itemType: itemType,
            level: level,
        };

        event::emit(ItemMinted {
            object_id: object::id(&item),
            creator: tx_context::sender(ctx),
            name: item.name,
        });

        transfer::public_transfer(item, tx_context::sender(ctx));
    }

    public entry fun buy(
        itemType: u8,
        ctx: &mut TxContext
    ) {
        if (itemType == 0) {
            let name = b"axe";
            let desc = b"axe";
            let url = b"https://";
            mint_internal(name, desc, url, itemType, 0, ctx);
        };
        if (itemType == 1) {
            let name = b"scroll 1";
            let desc = b"scroll 1";
            let url = b"https://";
            mint_internal(name, desc, url, itemType, 3, ctx);
        };
        if (itemType == 2) {
            let name = b"scroll 2";
            let desc = b"scroll 2";
            let url = b"https://";
            mint_internal(name, desc, url, itemType, 6, ctx);
        };
        if (itemType == 3) {
            let name = b"scroll 3";
            let desc = b"scroll 3";
            let url = b"https://";
            mint_internal(name, desc, url, itemType, 9, ctx);
        };
    }

    /// Create a new Item by contract owner
    public entry fun mint(
        _: &Ownership,
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
        itemType: u8,
        recipient: address,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let item = Item {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            url: url::new_unsafe_from_bytes(url),
            itemType: itemType,
            level: 0
        };

        event::emit(ItemMinted {
            object_id: object::id(&item),
            creator: sender,
            name: item.name,
        });

        transfer::public_transfer(item, recipient);
    }

    /// Transfer `Item` to `recipient`
    public entry fun transfer(
        item: Item, recipient: address, _: &mut TxContext
    ) {
        transfer::public_transfer(item, recipient)
    }

    /// `users` create a consign for consigning
    /// an Item to `third_party`
    public entry fun create(
        third_party: address,
        item_axe: Item,
        item_scroll: Item,
        ctx: &mut TxContext
    ) {
        assert!(item_axe.itemType == 0 && item_scroll.itemType != 0, EItemType);
        assert!(item_axe.level < 255 && item_scroll.level > 0, EItemLevel);

        let sender = tx_context::sender(ctx);
        let consigned = ConsignedObj { id: object::new(ctx), item_axe: option::none(), item_scroll: option::none(), sender: sender };
            
        option::fill(&mut consigned.item_axe, object::id(&item_axe));
        dynamic_object_field::add(&mut consigned.id, 0, item_axe);

        option::fill(&mut consigned.item_scroll, object::id(&item_scroll));
        dynamic_object_field::add(&mut consigned.id, 1, item_scroll);

        // consign the object with the trusted third party
        transfer::public_transfer(consigned, third_party);
    }

    /// Trusted third party can update nft
    /// Update the `level` of 'Item'
    public entry fun upgrade_level(_: &Ownership, obj: ConsignedObj, output: vector<u8>, input: vector<u8>, public_key: vector<u8>, proof: vector<u8>, ctx: &mut TxContext) {
        let verified = ecvrf::ecvrf_verify(&output, &input, &public_key, &proof);
        event::emit(VerifiedEvent {is_verified: verified});

        assert!(!verified, ENotVerified);

        let third_party = tx_context::sender(ctx);
        let ConsignedObj {
            id: id,
            sender: sender,
            item_axe: temp_a,
            item_scroll: temp_b,
        } = obj;

        let item_axe: Item = dynamic_object_field::remove(&mut id, 0);
        let item_axe_id = option::extract(&mut temp_a);
        assert!(object::id(&item_axe) == item_axe_id, 0);

        let item_scroll: Item = dynamic_object_field::remove(&mut id, 1);
        let item_scroll_id = option::extract(&mut temp_b);
        assert!(object::id(&item_scroll) == item_scroll_id, 0);

        assert!(item_axe.itemType == 0 && item_scroll.itemType != 0, EItemType);
        assert!(item_axe.level < 255 && item_scroll.level > 0, EItemLevel);

        let popedOutput = vector::pop_back(&mut output);
        let bonus: u8 = if (popedOutput > 128) { 1 } else { 0 };

        item_axe.level = item_axe.level + item_scroll.level + bonus;
        
        event::emit(ItemUpgrade {
            object_id: item_axe_id,
            creator: third_party,
            name: item_axe.name,
            level: item_axe.level,
        });

        object::delete(id);
        transfer::public_transfer(item_axe, sender);
        burn(item_scroll, ctx);
    }

    /// Permanently delete `Item`
    public entry fun burn(item: Item, _: &mut TxContext) {
        let Item { id, name: _, description: _, url: _, itemType: _, level : _, } = item;
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
### Requirement

In this scenario, you need two accounts. An account that acts as `the game company` that will deploy the Smart Contract, and an account that acts as `the game user`.

### Compile The Source Code

Connect to the WELLDONE Code with `a game company` account, and select the project you want to compile. For now, let's choose `sui/item` and click `Compile` button.

<img src={require('./img/02.png').default} alt='02_project-to-compile-item' style={{width: '480px'}}/>

### Deployment 
If the compilation succeed, you can see mv file `item.mv`.

Click the `Deploy` button.

<img src={require('./img/03.png').default} alt='03_build-file-item' style={{width: '480px'}}/>

and you can see wallet popup. Let's click `Send` button.

<img src={require('./img/04.png').default} alt='04_sui-wallet-popup' style={{width: '480px'}}/>

### Check Out Deployed Contract
After deployment, you can see Item module and functions.

### Calling Contract Functions
1. Change to `a game user` account, and Select `buy` function. Input 0 to buy an axe, and click `buy` button. And input 1 to buy a scroll, and click `buy` button.

2. After sending each transaction, look up the received Tx Hash in [SUI Explorer](https://suiexplorer.com/) to check the object ID of the item that you bought for the next step.

3. Run the `create` function. The first parameter is `the game company` address that deployed this Smart Contract. The second parameter is an object Id of the item that you bought, The value you checked in step 2. The third parameter is the same, but one of these parameters must be axe, and scroll, respectively.

4. After sending the create transaction, look up the received Tx Hash in [SUI Explorer](https://suiexplorer.com/) to check the object ID of the `ConsignedObj` for the next step.

5. Return to `the game company` account and run the `upgrade_level` function. The first parameter is the object ID of `Ownership`. And the second parameter is the object ID of `ConsignedObj` that you checked in Step 4. The third through sixth parameters are associated with the VRF.

6. After enchant transaction, check if Item was returned to `the game user` and updated in [SUI Explorer](https://suiexplorer.com/).

---

## Reference

[https://examples.sui.io/samples/nft.html](https://examples.sui.io/samples/nft.html)

[https://docs.sui.io/learn/cryptography/ecvrf](https://docs.sui.io/learn/cryptography/ecvrf)
