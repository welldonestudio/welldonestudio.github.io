---
sidebar_position: 4
description: Deploy and Run Juno Smart Contract
keywords: [Deploy and Run, Juno, Smart Contract]
---

# Juno

:::info
Please refer to [here](https://docs.welldonestudio.io/code/getting-started) to get started.
:::

## Create the Project

In Juno, you can write smart contracts with Rust language. **WELLDONE Code** provides two features to help developers new to Juno.

### Create Template

Create a simple example contract code written in Rust. You can create a sample contract by selecting the template option and clicking the `Create` button. More templates may be found at [Juno Samples](https://github.com/deus-labs/cw-contracts).

<img src={require('./img/template-code-juno.png').default} alt='template-code-juno' style={{width: '50%'}}/>

### New Project

Automatically generate a contract structure. Click the `Create` button to create a contract structure.

:::info
You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory `juno/`. If you start a new project, the structure should look like the following.
:::

#### Writing Contracts in Rust
  ```
  juno
  └── <YOUR_PROJECT_NAME>
      ├── Cargo.toml
      └── src
          └── contract.rs
      └── examples
          └── schema.rs    
  ```

## Compile the Contract

:::info
We now only support the AMD compilation server.
:::

**Step 1**: Select the project you want to compile in the **TARGET PROJECT** section.

**Step 2**: Select a compilation option and click the `Compile` button.

**Step 3**: When the compilation is complete, a wasm and schema files are returned.

<img src={require('./img/compile-juno.png').default} alt='juno-compile' style={{width: '318px'}}/>


:::note
You can check the returned wasm file and schema files in `juno/<YOUR_PROJECT_NAME>/artifacts` and `juno/<YOUR_PROJECT_NAME>/schema`.

If you need to revise the contract and compile again, delete the `artifacts`, `schema` directory and click the compile button.
:::

## Store Code

:::tip
The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.
:::

**Step 1**: If you have a compiled contract code, then `Store Code` button will be activated.

**Step 2**: Gas price is set to 0.025 ujuno/ujunox as a default and can be modified. 

**Step 3**: Click the `Store Code` button.

<img src={require('./img/juno-store-code.png').default} alt='juno-store-code' style={{width: '70%'}}/>

## Instantiate the Contract

**Step 1**: When the Store Code is completed, a `Code ID` is generated.

**Step 2**: If there are arguments for contract instantiation, input the parameters and click the `Instantiate` button. The arguments are generated through [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form).

<img src={require('./img/juno-instantiate.png').default} alt='juno-instantiate' style={{width: '318px'}}/>

## Execute the Contract

**Step 1**: Select the method to run.

**Step 2**: Add parameters as you needed.

**Step 4**: Run the method via clicking `Query` or `Execute` button. If you are sending a transaction, you must sign the transaction by clicking the `Send` button in the **WELLDONE Wallet**.

<img src={require('./img/juno-execute.png').default} alt='juno-execute' style={{width: '100%'}}/>

