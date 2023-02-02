---
sidebar_position: 2
description: Deploy and Run Aptos Smart Contract
keywords: [Deploy and Run, Aptos, Smart Contract]
---

# Aptos

## Create the Project

In Aptos, you can write smart contracts with Move langauge. **WELLDONE Code** provides two features to help developers new to Aptos and Move.

### Create Template

Create a simple example contract code written in Move. You can create a sample contract by selecting the template option and clicking the `Create a Template` button.

![template-code-aptos](img/template-code-aptos.png?raw=true 'template-code-aptos')

### New Project

Automatically generate a contract structure based on the smart contract language you want to use. Select the language option, write a name for the project, and click the `New Project` button to create a contract structure that is appropriate for the language.

![new-project-aptos](img/new-project-aptos.png?raw=true 'new-project-aptos')

:::info
You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory `aptos/`. If you start a new project, the structure should look like the following.
:::

  ```
  aptos
  └── <YOUR_PROJECT_NAME>
      ├── Move.toml
      └── sources
          └── YOUR_CONTRACT_FILE.move
  ```

## Compile the Contract

**Step 1**: Select the project you want to compile in the **PROJECT TO COMPILE** section.

**Step 2**: Click the `Compile` button. Don't forget to write your address in Move.toml
  ```
  [package]
  name = "Examples"
  version = "0.0.0"

  [addresses]
  hello_blockchain = "your address"

  [dependencies]
  AptosFramework = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-framework/", rev = "aptos-node-v1.2.0" }

  ```

**Step 3**: When the compilation is complete, a compiled binary file is returned.

<img src={require('./img/aptos-compile.png').default} alt='aptos-compile' style={{width: '318px'}}/>


:::note
You can check the returned compiled binary file in `aptos/<YOUR_PROJECT_NAME>/out` directory.

If you need to revise the contract and compile again, delete the `out` directory and click the compile button.
:::

:::info 
There is a bug that prevents you from signing transactions if your current account does not have enough APT (approximately 0.3APT). We are analyzing the cause and will fix it soon. Please refer to it for development. 
:::

## Deploy the Contract
:::tip The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet. :::

**Step 1**: If you have a compiled contract code, then `Deploy` button will be activated.

**Step 2**: Click the `Send` button in the **WELLDONE Wallet** to sign the transaction.

![Deploy](img/deploy-aptos.png?raw=true 'Deploy')

**Step 3**
: A transaction success log will be printed to the terminal and the contract can be executed if contract deployment is successful.

![Deploy](img/deployed-contract-aptos.png?raw=true 'Deploy')

## Execute the Contract

:::info
There are two ways to import contracts.

1. Automatically import contracts deployed through the above process.
2. Import existing deployed contracts through `At Address` button.

:::

**Step 1**: You can check the modules and resources owned by the current account, and you can read the resources through the `Get Resource` button.

**Step 2**: You can select a function, enter parameters as needed, and click a button to run the function. For the entry function, not the view function, a signature from the **WELLDONE Wallet** is required because the transaction signature and request are required.

<img src={require('./img/view-aptos.png').default} alt='view-aptos' style={{width: '318px'}}/>
<img src={require('./img/entry-aptos.png').default} alt='entry-aptos' style={{width: '318px'}}/>