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

## Execute the Contract
