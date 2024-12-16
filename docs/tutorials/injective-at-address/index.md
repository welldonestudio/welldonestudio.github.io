---
title: Injective At Address
description: How to use At Address injective feature
sidebar_position: 6
---

# Injective Atomic Order Example Contract

<div>
  <span className='author-sm'>Dec 19, 2024</span>
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

To interact with Instantiated Contracts on Injective Users need to install `injectived` which could be challenging for users who just want to use interaction feature.
Using At Address feature in [WELLDONE Studio Code Remix Plugin](https://remix.ethereum.org/?#activate=wds-code-remix) users can easily interact with instantiated injective smart contracts.

:::info
Currently Only Contract Address can be used to interact
:::

## How to use At Address

First, You need to select Injective
<img src={require('./img/injective-select-injective.png').default} alt='injective-select-injective' style={{width:'480px'}} />

Second, Choose Wallet to use
<img src={require('./img/injective-select-wallet.png').default} alt='injective-select-wallet' style={{width:'480px'}} />

Third, Choose Network where the contract is instantiated
<img src={require('./img/injective-select-network.png').default} alt='injective-select-network' style={{width:'480px'}} />

Fourth, Put the instantiated contract address in the At address input form which can be found at the bottom.  
And click on Search
<img src={require('./img/injective-at-address.png').default} alt='injective-at-address' style={{width:'480px'}} />

Finally, You can interact with instantiated smart contract
<img src={require('./img/injective-interact-contract.png').default} alt='injective-interact-contract' style={{width:'480px'}} />

## Contract interaction form manual

:::info
Function parameters are not provided in JSON Message. You need to find the JSON Message Schema by yourself
:::

<div style={{display:'flex', gap:'18px'}}>
  <img src={require('./img/injective-interact-contract-exec-final.png').default} alt='injective-interact-contract-exec-final' style={{width:'480px'}} />
  <div  style={{marginTop:'5rem'}}>
    <h4>1. Choose between Query Message and Execute Message</h4>
    <h4>2. Select function to call</h4>
    <h4>3. Fund Amount to include in the transaction</h4>
    <h4>4. Fund Denom to include in the transaction</h4>
    <h4>5. JSON Message Field for function parameters. You can edit the JSON by yourself</h4>
    <h4>6. Prettify ugly JSON</h4>
    <h4>7. When transaction is successful TxHash will appear in green if not red error message will be shown</h4>
    <h4>8. Send Query / Execute JSON Message </h4>
  </div>
</div>
