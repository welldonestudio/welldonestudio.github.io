---
sidebar_position: 2
description: Deploy and Run Sui Smart Contract
keywords: [Deploy and Run, Sui, Smart Contract]
---

# Sui

:::info
Please refer to [here](https://docs.welldonestudio.io/code/getting-started) to get started.
:::

## Connect to WELLDONE Code

You can activate the **WELLDONE Code** plugin by accessing this deep link: [WELLDONE Code Remix Plugin](https://remix.ethereum.org/?#activate=wds-code-remix).

## Create the Project

In Sui, you can write smart contracts with Move language. **WELLDONE Code** provides two features to help developers new to Sui and Move.

### Create Template

Create a simple example contract code written in Move. You can create a sample contract by selecting the template option and clicking the `Create` button.

<img src={require('./img/template-code-sui.png').default} alt='template-code-sui' style={{width: '50%'}}/>


### New Project

Automatically generate a contract structure. Click the `Create` button to create a contract structure.

<img src={require('./img/new-project-sui.png').default} alt='template-code-sui' style={{width: '50%'}}/>

:::info
You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory `sui/`. If you start a new project, the structure should look like the following.
:::

  ```
  sui
  └── <YOUR_PROJECT_NAME>
      ├── Move.toml
      ├── Move.lock
      └── sources
          └── YOUR_CONTRACT_FILE.move
  ```

## Compile the Contract

**Step 1**: Select the project you want to compile in the **TARGET PROJECT** section.

**Step 2**: Click the `Compile` button. 

**Step 3**: When the compilation is complete, a compiled binary file is returned.

<img src={require('./img/sui-compile.png').default} alt='sui-compile' style={{width: '318px'}}/>


:::note
You can check the returned compiled binary file in `sui/<YOUR_PROJECT_NAME>/out` directory.
:::

## Deploy the Contract
:::tip 
The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.
:::

**Step 1**: If you have a compiled contract code, then `Deploy` button will be activated.

**Step 2**: Click the `Send` button in the **WELLDONE Wallet** to sign the transaction.

![Deploy](img/deploy-sui.png?raw=true 'Deploy')

**Step 3**
: A transaction success log will be printed to the terminal and the contract can be executed if contract deployment is successful.

![Deploy](img/deployed-contract-sui.png?raw=true 'Deploy')

## Execute the Contract

:::info
There are two ways to import contracts.

1. Automatically import contracts deployed through the above process.
2. Import existing deployed contracts through `At Address` button.

:::

**Step 1**: You can check the Packages, and Modules owned by the current account, and you can read the Objects through the `Query Object` button.

**Step 2**: You can select a function, enter parameters as needed, and click a button to run the function. For the entry function, not the view function, a signature from the **WELLDONE Wallet** is required because the transaction signature and request are required.

<img src={require('./img/entry-sui.png').default} alt='entry-sui' style={{width: '500px'}}/>
