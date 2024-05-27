---
sidebar_position: 9
description: Deploy and Run Klaytn Smart Contract
keywords: [Deploy and Run, Klaytn, Smart Contract]
---

# Klaytn

## Create the Project

**Step 1**: When writing a smart contract in Klaytn, write a contract with Solidity like Ethereum. 

**Step 2**: Select a contract file you have written.

![Select Project](img/create-project-celo.png?raw=true 'Select Project')

## Compile the Contract

**Step 1**: If you select a contract file you want to compile, then `Compile` button will be activated.

**Step 2**: Click the `Compile` button.

![Project Compile](img/compile-klaytn.png?raw=true 'Project Compile')

## Deploy the Contract

:::tip
The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.
:::

**Step 1**: If you have a compiled contract code, then `Deploy` button will be activated.

**Step 2**: Click the `Deploy` button and click the `Send Tx` button in the **WELLDONE Wallet** to sign the transaction.

![Deploy](img/deploy-klaytn.png?raw=true 'Deploy')

**Step 3**: A transaction success log will be printed to the terminal and the contract can be executed if contract deployment is successful.

![Tx Success Log](img/txlog-success-klaytn.png?raw=true 'Tx Success Log')

<img src={require('./img/deployed-contract-klaytn.png').default} alt='deployed-contract-klaytn' style={{width: '300px'}}/>

## Execute the Contract

:::info
There are two ways to import contracts.

1. Automatically import contracts deployed through the above process.
2. Import existing deployed contracts through `At Address` button.
:::

**Step 1**: Select the method to run.

**Step 2**: Add parameters as you needed.

**Step 3**: Run the method via clicking `call` or `transaction` button. If you are sending a transaction, you must sign the transaction by clicking the `Send Tx` button in the **WELLDONE Wallet**.

  ![Deployed Contract](img/call_view_celo.png?raw=true 'Deployed Contract')
