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

**Step 2**: Click the `Compile` button.

**Step 3**: When the compilation is complete, a wasm file is returned.

<img src={require('./img/aptos-compile.png').default} alt='aptos-compile' style={{width: '318px'}}/>


:::note
You can check the returned wasm file in `aptos/<YOUR_PROJECT_NAME>/out` directory.

If you need to revise the contract and compile again, delete the `out` directory and click the compile button.
:::

## Deploy the Contract

:::tip
The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.
:::

**Step 1**: If you have a compiled contract code, then `Deploy` button will be activated.

**Step 2**: Enter the Account ID for which you want to deployed the contract and click the `Deploy` button. If you want to add `init function`, click `Deploy Option` to add the method name and arguments.

<img src={require('./img/deploy-option-near.png').default} alt='deploy-option-near' style={{width: '318px'}}/>

**Step 3**: If the AccountId already has a deployed contract, confirm once more.

**Step 4**: Click the `Send Tx` button in the **WELLDONE Wallet** to sign the transaction.

![Deploy](img/deploy-near.png?raw=true 'Deploy')

**Step 5**: A transaction success log will be printed to the terminal and the contract can be executed if contract deployment is successful.

<img src={require('./img/deployed-contract-near.png').default} alt='deployed-contract-near' style={{width: '318px'}}/>

## Execute the Contract

:::info
There are two ways to import contracts.

1. Automatically import contracts deployed through the above process.
2. Import existing deployed contracts through `At Address` button.

:::

**Step 1**: Select the method to run.

**Step 2**: Add parameters as you needed.

**Step 3**: In the case of the `Call` function, You can specify the number of NEAR tokens to attach to a function call and the GAS LIMIT.

**Step 4**: Run the method via clicking `View` or `Call` button. If you are sending a transaction, you must sign the transaction by clicking the `Send Tx` button in the **WELLDONE Wallet**.

<img src={require('./img/function-call.png').default} alt='function-call' style={{width: '318px'}}/>


:::info
If you deployed the compiled contract using `CARGO-NEAR` or `EMBED-ABI` options, you can execute the contract more easily using the ABI without directly entering the parameters of the method.
:::

<img src={require('./img/cargo-near.png').default} alt='cargo-near' style={{width: '318px'}}/>
<img src={require('./img/cargo-near1.png').default} alt='cargo-near1' style={{width: '318px'}}/>
<img src={require('./img/cargo-near2.png').default} alt='cargo-near2' style={{width: '318px'}}/>