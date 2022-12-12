---
sidebar_position: 1
description: Deploy and Run NEAR Smart Contract
keywords: [Deploy and Run, NEAR, Smart Contract]
---

# NEAR

## Select a Chain

First, Select NEAR on the Select a Chain.

![Select Chain](img/select-chain-near.png?raw=true 'Select Chain')

## Connect

You must install `WELLDONE Wallet` to use `WELLDONE Code`.

[➡️ Installation of WELLDONE Wallet](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en)

After [creating a NEAR Accoount](https://docs.welldonestudio.io/wallet/manual/how-to-create-an-account), click `Connect to WELLDONE` button.

![Connect Wallet](img/connect-wallet-near.png?raw=true 'Connect Wallet')

## Create Project

Create a basic example contract code written in AssemblyScript or Rust. By clicking the **Create Template** button, you can create a sample contract. More templates may be found at [NEAR Samples](https://examples.near.org/).

![Template Tree](img/template-tree.png?raw=true 'Template Tree')

If you wish to start a new project, click the **New Project** button.

:::info
However, for the remix plugin to build and deploy the contract, it must be built within the directory `near/`. If you start a new project, the structure should look like the following.
:::

### 1. Writing Contracts in Rust

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── Cargo.toml
      └── src
          └── lib.rs
  ```

### 2. Writing Contracts in AssemblyScript

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      └── assembly
            ├── as_types.d.ts
            ├── index.ts
            └── tsconfig.json
  ```

### 3. Writing Contracts in TypeScript

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── package.json
      ├── babel.config.json
      ├── tsconfig.json
      └── src
        └── contract.ts
  ```

### 4. Writing Contracts in JavaScript

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── package.json
      ├── babel.config.json
      └── src
        └── contract.js
  ```

## Compile

:::info
Six compilation options are now available in WELLDONE Code: `Rust`, `CARGO-NEAR`, `EMBED-ABI`, `AssemblyScript`, `JavaScript`, and `TypeScript`.

We now only support the AMD compilation server, however, we will shortly add support for the ARM compilation server.
:::

- Select the project you want to compile in the **PROJECT TO COMPILE** section.
- Select a compilation method.
- Click the **Compile** button.
- When the compilation is complete, a wasm file is returned.

![Project Compile](img/project-compile.png?raw=true 'Project Compile')

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

When using `-embed-abi` option in `cargo-near`, generates a wasm file containing abi inside. For contracts that have deployed the wasm file compiling with this option, you can get abi information even when importing the contract through `At Address` button. See the [cargo-near](https://github.com/near/cargo-near) repository for a detailed description of the options.

### 4. AssemblyScript Compile

Using [`asbuild`](https://github.com/AssemblyScript/asbuild) to compile a smart contract written in AssemblyScript. The compiler provides a stable compiling.

### 5. JavaScript & TypeScript Compile

Using [`near-sdk-js`](https://github.com/near/near-sdk-js) to compile a smart contract written in JavaScript or TypeScript.

:::note
If you are using JavaScript or TypeScript compile options, you must write the name of the contract file you want to compile as follows to ensure that the compilation runs without error.
- JavaScript: `contract.js`
- TypeScript: `contract.ts` 
:::

## Deploy

:::tip
The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.
:::

- If you have compiled contract code, input the value in `receive_id` then click the `Deploy` button.
- Sign your transaction using your wallet.

![Deploy](img/deploy.png?raw=true 'Deploy')

- You can run methods once the contract has been deployed.

![Deployed Contract](img/deployed-contract.png?raw=true 'Deployed Contract')

## View and Call function

- To invoke an existing contract, provide a contract ID inside the `At Address` field.
- Choose the method to invoke.
- As needed, add parameters.
- The `View` or `Call` commands read the value or send the transaction.

![View Function](img/view-function.png?raw=true 'View Function')

![Function Call](img/function-call.png?raw=true 'Function Call')

:::info
If you deployed the compiled contract using `cargo-near` or `embed-abi` options, you can execute the contract more easily using the ABI without directly entering the parameters of the method.
:::

![cargo-near](img/cargo-near.png?raw=true 'cargo-near')