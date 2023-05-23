---
title: SUI Coin Deployment
description: SUI Coin Deployment
sidebar_position: 6 
---

# SUI Coin Deployment 

<div>
  <span className='author-sm'>May 23, 2023</span>
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
You can create a sample contract `my_coin` by selecting the template option
and clicking the `Create Template` button.

<img src={require('./img/01_template-code-sui-my-coin.png').default} alt='01_template-code-sui-my-coin' style={{width: '480px'}}/>

### Source Code

Note that `init` function is executed only once during deployment.

```rust title="my_coin.move"
module coin_sample::mycoin {
    use std::option;
    use sui::coin::{Self, Coin, TreasuryCap};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct MYCOIN has drop {}

    fun init(witness: MYCOIN, ctx: &mut TxContext) {
        let (treasury_cap, metadata) = coin::create_currency<MYCOIN>(
            witness,
            2, // decimals
            b"MC", // symbol
            b"MYCOIN", // name
            b"my coin", // description
            option::none(),
            ctx
        );
        transfer::public_freeze_object(metadata);
        transfer::public_transfer(treasury_cap, tx_context::sender(ctx))
    }

    public entry fun mint(
        treasury_cap: &mut TreasuryCap<MYCOIN>, amount:u64, recipient: address, ctx: &mut TxContext
    ) {
        coin::mint_and_transfer(treasury_cap, amount, recipient, ctx)
    }

    public entry fun burn(treasury_cap: &mut TreasuryCap<MYCOIN>, coin: Coin<MYCOIN>) {
        coin::burn(treasury_cap, coin);
    }
}
```

```rust title="Move.toml"
[package]
name = "CoinSample"
version = "0.0.1"

[dependencies]
Sui = { git = "https://github.com/MystenLabs/sui.git", subdir="crates/sui-framework/packages/sui-framework/", rev = "testnet" }

[addresses]
coin_sample = "0x0"
```

## Compile The Source Code

Select the project you want to compile. For now, let's choose `sui/my_coin` and click `Compile` button.

<img src={require('./img/02_project-to-compile-my-coin.png').default} alt='02_project-to-compile-my-coin' style={{width: '480px'}}/>

## Deployment 
If the compilation succeed, you can see mv file `mycoin.mv`.

Click the `Deploy` button.

<img src={require('./img/03_build-file-my-coin.png').default} alt='03_build-file-my-coin' style={{width: '480px'}}/>

and you can see wallet popup. Let's click `Send` button.
<img src={require('./img/04_sui-my-coin-wallet-popup.png').default} alt='04_sui-my-coin-wallet-popup' style={{width: '480px'}}/>

## Check Out Deployed Contract
After deployment, you can see mycoin module and functions.
<img src={require('./img/05_sui-my-coin-deployed.png').default} alt='05_sui-my-coin-deployed' style={{width: '480px'}}/>

## Calling Contract Functions
1. Select `mint` function. First parameter is TreasuryCap object id. 
You can get the object id in the terminal log which shows for above deployment transaction result.
Second parameter is the amount of the minting coin.
Third parameter is the receiver of the minting coin. For now, set the receiver to your account address. 
<img src={require('./img/06_sui-my-coin-mint.png').default} alt='06_sui-my-coin-mint' style={{width: '960px'}}/>

2. After mint transaction, check if MYCOIN was minted in [SUI Explorer](https://suiexplorer.com/).
<img src={require('./img/07_sui-my-coin-minted.png').default} alt='07_sui-my-coin-minted' style={{width: '960px'}}/>

## Try more...
1. Call `burn` function and check it out in [SUI Explorer](https://suiexplorer.com/).
2. Read about One Time Witness ([OTW](https://examples.sui.io/basics/one-time-witness.html)).
---

### Reference

[https://examples.sui.io/basics/one-time-witness.html](https://examples.sui.io/basics/one-time-witness.html)