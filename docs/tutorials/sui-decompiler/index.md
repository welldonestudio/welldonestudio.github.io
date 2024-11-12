---
title: Challenges and Limitations of Sui Move Decompiler in Smart Contract Verification
description: Why Decompiler Alone Might Not Be Sufficient for Contract Verification?
sidebar_position: 6
---

# Challenges and Limitations of Sui Move Decompiler in Smart Contract Verification

<div>
  <span className='author-sm'>Nov 12, 2024</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/altpd13' target='_blank'><img src='https://avatars.githubusercontent.com/u/69383768?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Minseok Kim</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Introduction

:::warning
Disclaimer: This article is intended solely for educational purposes to understand the potential limitations of decompilation tools, such as Revela, when auditing Sui Move contracts. The information provided is not intended to encourage, condone, or support any misuse of decompilation software or methods for unauthorized purposes. Always consult legal and security experts when working with or auditing smart contracts.
:::

Move on Sui is a powerful programming language that enables developers to create secure and efficient smart contracts with reduced concerns over security risks and resource management. As DApps, DeFi protocols, NFTs, and tokens continue to expand on the Sui blockchain, Move on Sui helps reduce vulnerabilities that might otherwise compromise these projects. However, there remains a notable shortage of open-source projects within this ecosystem.

Open-source projects bring transparency, allowing developers and users to publicly audit smart contracts and verify their integrity. Yet, an analysis on DefiLlama of the top ten projects by total value locked (TVL) shows that only four of these are open-source. NFTs and tokens also demonstrate similarly low levels of open-source adoption, limiting transparency across the space.
  
To solve this issue, [Revela Decompiler](https://revela.verichains.io/), developed by [veriChains](https://verichains.io/), provides the ability to decompile Move bytecode, enabling users to inspect the code of non-open-source smart contracts. By examining decompiled code, Users can assess the legitimacy and functionality of non-open-source contracts.

## Understanding Decompiler Benefits and Limitations

Using a decompiler offers several advantages when auditing code, especially within the Sui blockchain ecosystem. The primary benefit is that with only on-chain data, users can effectively audit smart contracts. This means that even closed-source contracts can be analyzed for security, integrity, and functionality. In this way, no contract can completely hide its code from the public.

However, there are important limitations to consider with Revela Decompiler:

1. <b>Original Variable Names Are Lost</b>: Decompiled code cannot restore the original names of variables, which often makes understanding specific functions and logic more challenging.

2. <b>Unused Variables Are Omitted</b>: If variables are initialized but never used, they do not appear in the decompiled output, which can obscure certain aspects of the original code structure and intent.

3. <b>Package Naming Is Obscured</b>: Package names are displayed as generic `packageIds`, making it difficult to discern specific packages and resulting in less comprehensible code.

4. <b>Decompiled Code Is Not Directly Recompilable</b>: Unlike source code, decompiled code cannot be directly recompiled due to structural and syntactical discrepancies introduced during the decompilation process.

Let’s look at some example code to illustrate these limitations in practice.

## Decompiler's Limitations

The Party contract is a simple smart contract that includes a shared object called Balloon. The primary functionality of this contract is straightforward: users can "pop" the balloon, changing its state to signify that it has been interacted with. However, several additional, unusual functions add unexpected behaviors to the contract.

This is the original source code.

```
module exploit_final::exploits {
    
    const HelloWorld:u256 = 0;
    
    const HELLO_WORLD: vector<u8> = b"Hello, World!";
    
    public struct Balloon has key {
        id: UID,
        popped: bool
    }
    
    public struct FakeBalloon has key {
        id: UID,
        popped: bool
    }
    
    fun init(ctx: &mut TxContext) {
        let iamnumber: u8 = 0;
        make_new_balloon(ctx);
    }
    
    public entry fun fill_up_balloon (ctx: &mut TxContext) {
        make_new_balloon(ctx);
    }
    
    public entry fun fill_up_balloon_with_malicious_action(ctx: &mut TxContext) {
        make_new_balloon(ctx);
        let malicious_stuff = malicious_action(ctx) + 1;
    }

    public entry fun fill_up_balloon_with_hidden_code(ctx: &mut TxContext) {
        if(false){
            malicious_action(ctx);
        } else {
            make_new_balloon(ctx);
        }
    }
    
    fun make_new_balloon(ctx: &mut TxContext) {
        let balloon = Balloon {
            id: object::new(ctx),
            popped:false
        };
        transfer::share_object(balloon);
    }
    
    fun malicious_action(ctx: &mut TxContext):u8 {
        let fake_balloon = FakeBalloon {
            id: object::new(ctx),
            popped: false
        };
        transfer::share_object(fake_balloon);
        1
    }
}
```
The code below is decompiled code.
```
module 0xdee46963f2881139948931c1152dde50589a780120ba8c9bf9536ea6cb871569::exploits {
    struct Balloon has key {
        id: 0x2::object::UID,
        popped: bool,
    }
    
    struct FakeBalloon has key {
        id: 0x2::object::UID,
        popped: bool,
    }
    
    public entry fun fill_up_balloon(arg0: &mut 0x2::tx_context::TxContext) {
        make_new_balloon(arg0);
    }
    
    public entry fun fill_up_balloon_with_hidden_code(arg0: &mut 0x2::tx_context::TxContext) {
        make_new_balloon(arg0);
    }
    
    public entry fun fill_up_balloon_with_malicious_action(arg0: &mut 0x2::tx_context::TxContext) {
        make_new_balloon(arg0);
    }
    
    fun init(arg0: &mut 0x2::tx_context::TxContext) {
        make_new_balloon(arg0);
    }
    
    fun make_new_balloon(arg0: &mut 0x2::tx_context::TxContext) {
        let v0 = Balloon{
            id     : 0x2::object::new(arg0), 
            popped : false,
        };
        0x2::transfer::share_object<Balloon>(v0);
    }
    
    fun malicious_action(arg0: &mut 0x2::tx_context::TxContext) : u8 {
        let v0 = FakeBalloon{
            id     : 0x2::object::new(arg0), 
            popped : false,
        };
        0x2::transfer::share_object<FakeBalloon>(v0);
        1
    }
    
    // decompiled from Move bytecode v6
}
```
Using a decompiler to audit Sui Move contracts has several limitations that can impact code readability, usability, and accuracy:

1. <b>Variable and Module Renaming</b>
- As mentioned, decompilers tend to replace original variable names with generic identifiers like `v0`, `v1`, `arg0`, and `arg1`. Additionally, modules may appear with generic labels such as `packageID`, which significantly reduces code readability and makes it challenging for auditors to understand the exact functionality.

2. <b>Inability to Directly Recompile Decompiled Code</b>
- Decompiled code cannot be directly recompiled due to the complexity of the Move compiler’s rules, which a decompiler might struggle to handle. This is a critical issue because it indicates that the decompilation is incomplete or inaccurate. If users cannot recompile the decompiled code and verify its functionality, they risk overlooking potential vulnerabilities.

3. <b>MisMatch with Original Source Code</b>
- The most significant limitation is that decompiled code cannot be a 100% replica of the original source code. Certain aspects, such as function names, comments, and inline documentation, are lost in decompilation. This mismatch prevents the decompiled version from providing a fully transparent view of the original contract’s behavior.

Through code obfuscation, smart contract developers can intentionally hide some parts of the original source code, further complicating the decompiler’s task. Obfuscation techniques can include renaming functions to confusing identifiers, adding dead code, or using complex control flow, all of which can make the decompiled output even harder to interpret.

:::info
You can read more about [Code Obfuscation here](https://en.wikipedia.org/wiki/Obfuscation_(software))
:::

And here is the examples of using code obfuscation.

This is the orignal code.

```
public entry fun fill_up_balloon_with_hidden_code(ctx: &mut TxContext) {
        if(false){
            // this part will never be executed
            malicious_action(ctx);
        } else {
            make_new_balloon(ctx);
        }
    }
```
And this is the decompiled code.
```
public entry fun fill_up_balloon_with_hidden_code(arg0: &mut 0x2::tx_context::TxContext) {
  make_new_balloon(arg0);
}
```
As you can see `malicious_action` part is stripped(if else is gone too) because that part will never be executed. 
But this only strips the part of the original code which has no function at all.

<b>This code obfuscation could be really exploited.</b>
`fill_up_balloon_with_malicious_action` has `malicious_action` as well.

```
public entry fun fill_up_balloon_with_malicious_action(ctx: &mut TxContext) {
	make_new_balloon(ctx);
	let malicious_stuff = malicious_action(ctx) + 1;
}
```
but this time when it's decompiled

```
public entry fun fill_up_balloon_with_malicious_action(arg0: &mut 0x2::tx_context::TxContext) {
	make_new_balloon(arg0);
}
```
Whole `malicious_action` is gone. And what is more terrible is that when this function is called.
<img src={require('./img/Execute.png').default} alt='execute-sui-decompiler' style={{width:'960px'}} />

When user can only audit the contract through decompile they will probably think `fill_up_balloon_with_malicious_action` will only execute `make_new_balloon` but `FakeBalloon` have been created by `malicious_action`.
Though the `malicious_action` is a example function and present inside the module. But hackers can use code obfuscation to make function unreadable when decompiled.

The most important thing is that decompiled code is different from orignal source code.

## Enhancing Smart Contract Transparency

Scams and phishing attacks can happen in various forms, including malicious URLs, fake websites, and scam contracts. While users can protect themselves against phishing links and fake websites with caution,but avoiding scams embedded within smart contracts requires more robust methods than caution alone.

Using the [WELLDONE Studio Verification API](https://docs.welldonestudio.io/code/verification-api/suimove), contract deployers can verify their smart contracts to ensure the deployed bytecode is an exact match to the source code. This means that the source code and the deployed contract are 100% identical, allowing users to trust that the contract’s behavior matches the developer's intent.

Users and developers can verify it with the API or verify contracts directly on SuiScan to confirm the integrity and authenticity of smart contracts before interaction.
<img src={require('./img/Verify.png').default} alt='verify-sui-decompiler' style={{width:'960px'}} />


 

