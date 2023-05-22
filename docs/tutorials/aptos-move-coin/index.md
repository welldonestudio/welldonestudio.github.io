---
title: APTOS Coin Deployment
description: APTOS Coin Deployment
sidebar_position: 5
---

# Aptos Coin Deployment 

<div>
  <span className='author-sm'>February 22, 2023</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/kairoski03' target='_blank'><img src='https://avatars.githubusercontent.com/u/110001241?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Yoonsoo Jang</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Introduction
This tutorial shows how to deploy your own coin.

:::info
Please refer to [here](https://docs.welldonestudio.io/code/getting-started) to get started.
:::

## Create Template
Create a simple example contract code written in Move.
You can create a sample contract `moon_coin` by selecting the template option
and clicking the `Create Template` button.

<img src={require('./img/template-code-aptos-moon-coin.png').default} alt='template-code-aptos-moon-coin' style={{width: '480px'}}/>

### Source Code

Note that `init_module` function is executed only once during deployment.

```rust title="moon_coin.move"
module MoonCoin::moon_coin {
use aptos_framework::coin;

    struct MoonCoin {}

    fun init_module(sender: &signer) {
        aptos_framework::managed_coin::initialize<MoonCoin>(
            sender,
            b"Moon Coin",
            b"MOON",
            6,
            false,
        );
    }

    public entry fun register(account: &signer) {
        aptos_framework::managed_coin::register<MoonCoin>(account)
    }

    public entry fun mint(account: &signer, dst_addr: address, amount: u64) {
        aptos_framework::managed_coin::mint<MoonCoin>(account, dst_addr, amount);
    }

    public entry fun burn(account: &signer, amount: u64) {
        aptos_framework::managed_coin::burn<MoonCoin>(account, amount);
    }

    public entry fun transfer(from: &signer, to: address, amount: u64,) {
        coin::transfer<MoonCoin>(from, to, amount);
    }
}
```

Note that you should replace MoonCoin address `_` of your own account address.

```rust title="Move.toml"
[package]
name = "Examples"
version = "0.0.0"

[addresses]
MoonCoin = "_" 

[dependencies]
AptosFramework = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-framework/", rev = "main" }

```

## Compile The Source Code

Select the project you want to compile. For now, let's choose `aptos/moon_coin` and click `Compile` button.

<img src={require('./img/project-to-compile-moon-coin.png').default} alt='project-to-compile-moon-coin' style={{width: '480px'}}/>

## Deployment 
If the compilation succeed, you can see mv file `moon-coin.mv`.

Click the `Deploy` button.

<img src={require('./img/build-file-moon-coin.png').default} alt='build-file-moon-coin' style={{width: '480px'}}/>

and you can see wallet popup. Let's click `Send` button.
<img src={require('./img/aptos-moon-coin-wallet-popup.png').default} alt='aptos-moon-coin-wallet-popup' style={{width: '480px'}}/>

## Check Out Deployed Contract
After deployment, you can see moon_coin module and functions.
<img src={require('./img/aptos-moon-coin-deployed.png').default} alt='aptos-moon-coin-deployed' style={{width: '480px'}}/>

## Calling Contract Functions
1. Call `register` function to accept deposits of `MoonCoin`.
<img src={require('./img/aptos-moon-coin-register.png').default} alt='aptos-moon-coin-register' style={{width: '480px'}}/>

2. Select `mint` function. First parameter is the address of receiver for minting coin 
and second parameter is the amount of minting coin. For now, set your account address for the first parameter
because you have already registered above. 
The receiver should call `register` before calling `mint`.
<img src={require('./img/aptos-moon-coin-mint.png').default} alt='aptos-moon-coin-mint' style={{width: '480px'}}/>

3. Check if the coin have been minted in Aptos Explorer Coins tab.
<img src={require('./img/aptos-moon-coin-minted.png').default} alt='aptos-moon-coin-minted' style={{width: '960px'}}/>

## Try more...
1. Call `burn` function and check it out in Aptos Explorer Coins tab.
2. Create and switch to new account address and try `register`.
Switch to the original address again and transfer or mint to the address you just newly created.
---

### Reference

[https://aptos.dev/tutorials/your-first-coin/](https://aptos.dev/tutorials/your-first-coin/)