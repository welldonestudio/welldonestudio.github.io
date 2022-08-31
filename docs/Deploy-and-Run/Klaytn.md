---
sidebar_position: 3
description: Deploy and Run Klaytn Smart Contract
---

# Klaytn

## Choose a wallet

You must first install `WELLDONE Wallet` before you can utilize `WELLDONE Code`.

[➡️ Installation of WELLDONE Wallet](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en)

![Select Wallet](img/select-wallet.png?raw=true 'Select Wallet')

## Connect

Create a Klaytn account in `WELLDONE wallet` before connecting to the network.

![Connect Wallet](img/connect-wallet-klaytn.png?raw=true 'Connect Wallet')

## Create Project

Write a contract in solidity, then select a contract file you have written.

![Select Project](img/create-project-celo.png?raw=true 'Select Project')

## Compile

1. Click the Compile button after selecting the solidity contract code.
2. Select the Compile option.

![Project Compile](img/compile-klaytn.png?raw=true 'Project Compile')

## Deploy

:::tip
The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.
:::

- If you have built contract code, click the `Deploy` button.
- Sign your transaction using your wallet.

![Deploy](img/deploy-klaytn.png?raw=true 'Deploy')

- You can run methods once the contract has been deployed.

![Deployed Contract](img/call_view_celo.png?raw=true 'Deployed Contract')

## View and Call function

- If you have followed the aforementioned steps to deploy the contract, it is automatically triggered on the website.
- You can alternatively initiate an existing contract by putting the contract address into the `At Address` field and click the button.

  ![At Address](img/contract_address.png?raw=true 'At Address')

- Choose the method to invoke.
- Add parameters as you needed.
- Reads the value through `call` or `transact` or sends a transaction.

  ![Deployed Contract](img/call_view_celo.png?raw=true 'Deployed Contract')
