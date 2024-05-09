---
sidebar_position: 1
description: Deploy and Run NEAR Smart Contract
keywords: [Deploy and Run, NEAR, Smart Contract]
---

# NEAR

## Connect to WELLDONE Code

You can activate the **WELLDONE Code** plugin by accessing this deep link: [WELLDONE Code Remix Plugin](https://remix.ethereum.org/?#activate=wds-code-remix).

## Create the Project

In NEAR, you can write smart contracts with AssemblyScript, Rust, JavaScript, and TypeScript. Because the structure of the contract is different in each language, **WELLDONE Code** provides two features to help developers new to NEAR.

### Create Template

Create a simple example contract code written in AssemblyScript, Rust, JavaScript, and TypeScript. You can create a sample contract by selecting the template option and clicking the `Create a Template` button. More templates may be found at [NEAR Samples](https://github.com/near-examples/).

![template-code-near](img/template-code-near.png?raw=true 'template-code-near')

### New Project

Automatically generate a contract structure based on the smart contract language you want to use. Select the language option, write a name for the project, and click the `New Project` button to create a contract structure that is appropriate for the language.

![new-project-near](img/new-project-near.png?raw=true 'new-project-near')

:::info
You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory `near/`. If you start a new project, the structure should look like the following.
:::

#### 1. Writing Contracts in Rust
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── Cargo.toml
      └── src
          └── lib.rs
  ```

#### 2. Writing Contracts in AssemblyScript
  ```
  near
  └── <YOUR_PROJECT_NAME>
      └── assembly
            ├── as_types.d.ts
            ├── index.ts
            └── tsconfig.json
  ```

#### 3. Writing Contracts in TypeScript
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── package.json
      ├── babel.config.json
      ├── tsconfig.json
      └── src
        └── contract.ts
  ```

#### 4. Writing Contracts in JavaScript
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── package.json
      ├── babel.config.json
      └── src
        └── contract.js
  ```

## Compile the Contract

:::info
Six compilation options are now available in WELLDONE Code: `Rust`, `CARGO-NEAR`, `EMBED-ABI`, `AssemblyScript`, `JavaScript`, and `TypeScript`.

We now only support the AMD compilation server, however, we will shortly add support for the ARM compilation server.
:::

**Step 1**: Select the project you want to compile in the **PROJECT TO COMPILE** section.

**Step 2**: Select a compilation option and click the `Compile` button.

**Step 3**: When the compilation is complete, a wasm file is returned.

<img src={require('./img/project-compile.png').default} alt='near-compile' style={{width: '318px'}}/>


:::note
You can check the returned wasm file in `near/<YOUR_PROJECT_NAME>/out` directory.

If you need to revise the contract and compile again, delete the `out` directory and click the compile button.
:::

### 1. Rust Compile

Using the `cargo build` command to compile a smart contract written in Rust. Although it offers a stable compile, it is inconvenient to enter the method's parameters directly when executing the contract.

### 2. CARGO-NEAR Compile (for Rust) - `Experimental`

Compile using `cargo near` which is officially being developed by NEAR. If Compile is successful, an executable wasm binary file and a json file containing the ABI of the contract are created together. If you have deployed and imported a compiled contract using `cargo-near`, you can find out the parameter type of the method, making it easier to run the contract.

However, because this feature is still under development, the `near-sdk-rs` version must be specified at **4.1.0** or higher in the `Cargo.toml` file, and unexpected issues may occur during compilation. Please check out the NEAR's [repository](https://github.com/near/abi) for more detail.

### 3. EMBED-ABI Compile (for Rust) - `Experimental`

When using `-embed-abi` option in `cargo-near`, generates a wasm file containing ABI inside. For contracts that have deployed the wasm file compiling with this option, you can get ABI information even when importing the contract through `At Address` button. See the [cargo-near](https://github.com/near/cargo-near) repository for a detailed description of the options.

### 4. AssemblyScript Compile

Using [`asbuild`](https://github.com/AssemblyScript/asbuild) to compile a smart contract written in AssemblyScript. The compiler provides a stable compiling.

### 5. JavaScript & TypeScript Compile

Using [`near-sdk-js`](https://github.com/near/near-sdk-js) to compile a smart contract written in JavaScript or TypeScript.

:::note
If you are using JavaScript or TypeScript compile options, you must write the name of the contract file you want to compile as follows to ensure that the compilation runs without error.
- JavaScript: `contract.js`
- TypeScript: `contract.ts` 
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