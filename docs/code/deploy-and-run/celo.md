---
sidebar_position: 2
description: Deploy and Run Celo Smart Contract
keywords: [Deploy and Run, Celo, Smart Contract]
---

# Celo

## Select a Chain

First, Select NEAR on the Select a Chain.

![Select Chain](img/select-chain-celo.png?raw=true 'Select Chain')

## Connect

You must install `WELLDONE Wallet` to use `WELLDONE Code`.

[➡️ Installation of WELLDONE Wallet](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en)

After [creating a CELO Accoount](https://docs.welldonestudio.io/wallet/manual/how-to-create-an-account), click `Connect to WELLDONE` button.

![Connect Wallet](img/select-wallet-celo.png?raw=true 'Connect Wallet')

## Create Project

Write a contract in solidity, then select a contract file you have written.

![Select Project](img/create-project-celo.png?raw=true 'Select Project')

## Compile

1. Click the Compile button after selecting the solidity contract code.
2. Select the Compile option.

![Project Compile](img/compile-celo.png?raw=true 'Project Compile')

## Deploy

:::tip
The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.
:::

- If you have built contract code, click the `Deploy` button.
- Sign your transaction using your wallet.

![Deploy](img/deploy-celo.png?raw=true 'Deploy')

- You can run methods once the contract has been deployed.

![Deployed Contract](img/call_view_celo.png?raw=true 'Deployed Contract')

## View and Call function

- If you have followed the aforementioned steps to deploy the contract, it is automatically triggered on the website.
- You can alternatively initiate an existing contract by putting the contract address into the `At Address` field and clicking the button.

  ![At Address](img/contract_address.png?raw=true 'At Address')

- Choose the method to invoke.
- Add parameters as you needed.
- Reads the value through `call` or `transact` or sends a transaction.
  <!-- ![At Address](img/call_at_address.png?raw=true "At Address") -->

  ![Deployed Contract](img/call_view_celo.png?raw=true 'Deployed Contract')
