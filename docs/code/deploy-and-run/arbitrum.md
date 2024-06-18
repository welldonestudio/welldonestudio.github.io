---
sidebar_position: 2
description: Deploy and Run Arbitrum Smart Contract
keywords: [Deploy and Run, Arbitrum, Smart Contract]
---

# Arbitrum

## Connect to WELLDONE Code

You can activate the **WELLDONE Code** plugin by accessing this deep link: [WELLDONE Code Remix Plugin](https://remix.ethereum.org/?#activate=wds-code-remix).

## Add Network to MetaMask

Before you start deploying contracts on the Arbitrum network, you need to add the network to your MetaMask wallet. Follow these steps:

1. Open MetaMask and click on the network dropdown at the top.
2. Select **Add Network**.
3. Enter the following network details:
- **Network Name:** Arbitrum Sepolia
- **New RPC URL:** `https://sepolia-rollup.arbitrum.io/rpc`
- **Chain ID:** `421614`
- **Currency Symbol:** ETH
- **Block Explorer URL (Optional):** `https://sepolia.arbiscan.io`

4. Click **Save**.

Now you have successfully added the Arbitrum network to your MetaMask wallet.

## Create the Project

In Arbitrum Stylus, you can write smart contracts with Rust language. **WELLDONE Code** provides two features to help developers new to Stylus.

### Create Template

Create a simple example contract code written in Rust. You can create a sample contract by selecting the template option and clicking the `Create` button. More templates may be found at [Stylus Samples](https://github.com/OffchainLabs/stylus-workshop-rust-solidity).

<img src={require('./img/template-code-arbitrum.png').default} alt='template-code-arbitrum' style={{width: '50%'}}/>

### New Project

Automatically generate a contract structure. Click the `Create` button to create a contract structure.

:::info
You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory `arbitrum/`. If you start a new project, the structure should look like the following.
:::

#### Writing Contracts in Rust
  ```
  neutron
  └── <YOUR_PROJECT_NAME>
      ├── Cargo.toml
      └── src
          └── contract.rs
      └── examples
          └── schema.rs    
  ```

## Compile the Contract

:::info
We now only support the AMD compilation server. The build environment is crucial for contract verification due to the non-deterministic nature of building Rust into Wasm.
:::

**Step 1**: Select the project you want to compile in the **TARGET PROJECT** section.

**Step 2**: Select a compilation option and click the `Compile` button.

**Step 3**: When the compilation is complete, a tx_data and abi files are returned.

<img src={require('./img/arbitrum-compile.png').default} alt='arbitrum-compile' style={{width: '318px'}}/>


:::note
You can check the returned tx_data file and abi file in `neutron/<YOUR_PROJECT_NAME>/output`.

When you run the recompilation, the existing `output` folders will be deleted and the compilation process will start anew.
:::

## Deploy the Contract
The deployment stage involves uploading the compiled WebAssembly (WASM) smart contract code to the blockchain. This step is necessary to make the smart contract available for use on the blockchain.

### When is Deployment Needed?
- **New Contracts:** When deploying a new smart contract to the blockchain for the first time.
- **Contract Updates:** When changing the core logic or adding new functionalities to the smart contract, requiring a new version to be deployed.

<img src={require('./img/arbitrum-contract.png').default} alt='arbitrum-contract' style={{width: '318px'}}/>

## Activate the Contract
The activation stage ensures that the deployed contract is fully operational and can be interacted with on the Arbitrum network. This step verifies that the contract is ready for actual use.

#### When is Activation Needed?
- **Post-Deployment:** After deploying the contract, activation is needed to ensure the contract is recognized by the network and fully operational.
- **Re-Deployments:** When redeploying an updated version of the contract, activation ensures that the new version is properly initialized and functional.

## Execute the Contract

**Step 1**: Select the method to run.

**Step 2**: Add parameters as you needed.