---
sidebar_position: 1
description: Deploy and Run Near Smart Contract
keywords: [Deploy and Run, Near, Smart Contract]
---

# Near

## Choose a wallet

You must first install `WELLDONE Wallet` before you can utilize `WELLDONE Code`.

[➡️ Installation of WELLDONE Wallet](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en)

![Select Wallet](img/select-wallet.png?raw=true 'Select Wallet')

WELLDONE CODE will soon support NEAR Web Wallet.

## Connect

Create a NEAR account in `WELLDONE wallet` before connecting to the network.

![Connect Wallet](img/connect-wallet.png?raw=true 'Connect Wallet')

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
      ├── .cargo
      │   └── config
      ├── Cargo.toml
      └── src
          └── lib.rs
  ```

### 2. Writing Contracts in AssemblyScript

- near/<YOUR_PROJECT_NAME>
  ```
  near
  └── <YOUR_PROJECT_NAME>
      ├── as_types.d.ts
      ├── index.ts
      └── tsconfig.json
  ```

## Compile

:::info
WELLDONE Code provides three choices for compilation - We now only support the AMD compilation server, however, we will shortly add support for the ARM compilation server.
:::

### 1. NEAR Compiler for Rust

The option to utilize the default compiler of NEAR, which provides a stable compilation. Meanwhile, it is cumbersome to explicitly input method arguments during the testing of contracts.

WELLDONE Code is planning to provide the Raen Compile option to overcome this problem.

### 2. Raen Compiler for Rust | Stay Tuned :D

Another option to compile is using `raen build`, which is in an experimental stage, it occasionally fails to function properly. However, if this option is used, it is not required to input method parameters during the testing of contracts. You can also extract contract method information in JSON format.

More information can be found at [GitHub Raen](https://github.com/raendev/raen).

### 3. AssemblyScript Compile (for AssemblyScript)

Compile the contract created with AssemblyScript. The compiler provides a stable compiling.

### 3. How to Compile

- Select the project you want to compile in the **PROJECT TO COMPILE** section.
- Select a compilation method.
- Click the **Compile** button.
- When the compilation is complete, a wasm file is returned.

![Project Compile](img/project-compile.png?raw=true 'Project Compile')

:::note
If you need to revise the contract, delete the `near/out` directory and re-compile the contract.
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

:::info
The WELLDONE Code is planning to support `raen build` for NEAR Contract compilation by default. You may quickly test the method with the `view` or `call` option, without entering additional arguments. If a contract is built in a way other than `raen build` that is loaded into `At Address`, you are expected to enter the method parameters separately.
:::

- To invoke an existing contract, provide a contract ID inside the `At Address` field.
- Choose the method to invoke.
- As needed, add parameters.
- The 'View' or 'Call' commands read the value or send the transaction.

![View Function](img/view-function.png?raw=true 'View Function')

![Function Call](img/function-call.png?raw=true 'Function Call')
