---
sidebar_position: 5
description: Deploy and Run inEVM Smart Contract
keywords: [Deploy and Run, inEVM, Smart Contract]
---

# inEVM

:::info
Please refer to [here](https://docs.welldonestudio.io/code/getting-started) to get started.  
You can find more information about inEVM [here](https://docs.inevm.com/)
:::

## Connect to WELLDONE Code

You can activate the **WELLDONE Code** plugin by accessing this deep link: [WELLDONE Code Remix Plugin](https://remix.ethereum.org/?#activate=wds-code-remix).

## Change to inEVM network

:::info
Currently inEVM features can only be used with MetaMask Wallet.
:::
To activate inEVM features you need to set the network to either inEVM Mainnet or inEVM Testnet by changing the network.

<img src={require('./img/injective-inEvm-change-network.png').default} alt='change-network-injective' style={{width: '50%'}}/>

## Compile & Deploy & Execute

In inEVM, you can write smart contracts with Solidity.  
**WELLDONE Code** provides three features to help developers who want to port and run solidity contract deployed on other evm supported networks.

### Compile the Contract

:::info
In this documentation We are using ERC721 contract as a example created from Remix Workspace.
:::
Create a simple example contract code written in Solidity.  
Or Simply open the contract file on Remix and click on `Compile Solidity Contract`.

<img src={require('./img/injective-inEvm-compile.png').default} alt='compile-button-injective' style={{width: '50%'}}/>

### Deploy the Contract

:::info
Code Deployment takes up few seconds
:::

After compilation You can deploy contract.  
Consturctor field will be automatically generated via ABI.  
After filling up the constructor click on Deploy Button below.

<img src={require('./img/injective-inEvm-deploy.png').default} alt='deploy-button-injective' style={{width: '50%'}}/>

### Execute the Contract

After deployment is done You can interact with deployed contract.  
Click on the function want to call, fill out the arguments and click transact.

<img src={require('./img/injective-inEvm-interact.png').default} alt='interact-form-injective' style={{width: '50%'}}/>

After confirming the transaction, Transaction result will be displayed on Remix terminal if successful.

<img src={require('./img/injective-inEvm-terminal-result.png').default} alt='interact-form-injective' style={{width: '100%'}}/>

