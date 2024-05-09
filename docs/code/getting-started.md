---
sidebar_position: 0
title: Getting Started
description: About WELLDONE Code
keywords: [remix plugin, Multi chain contract, smart contracts, smart contracts ide]
---

## Connect to WELLDONE Code

**WELLDONE Code** is the official Remix IDE Plug-in. Please visit the [Remix IDE](https://remix.ethereum.org/) and follow the guide below.

**Step 1**: Click **Plugin Manager** button in the left bar.

![Plugin Manager](deploy-and-run/img/plugin-manager.png?raw=true 'Plugin Manager')

**Step 2**: Search for **CODE BY WELLDONE STUDIO** and click the `Activate` button.

![Activate Plugin](deploy-and-run/img/activate-plugin.png?raw=true 'Activate Plugin')

If the plug-in has been successfully added, you can run the **WELLDONE Code** by clicking the icon shown in the left bar.

## Select a Chain

Below is a screenshot of WELLDONE Code's main screen. Choose the chain you want to develop the contract with from the `Select a Chain` section.

If you click the `Documentation` button, go to WELLDONE Docs, and if you find a problem or have any questions while using it, click the `Make an issue` button to go to the [Github Repository](https://github.com/welldonestudio/welldonestudio.github.io) and feel free to create an issue.

<img src={require('./deploy-and-run/img/select-chain.png').default} alt='Select Chain' style={{width: '320px'}}/>

## Connect to Wallet

### Supported Wallets by Chain

Refer to the table below for the chains and their supported wallets:

| Chain       | Supported Wallets        |
|-------------|--------------------------|
| Neutron     | **Keplr Wallet**, **WELLDONE Wallet**         |

> **Note:** We plan to add more wallets for other chains, so keep an eye on plugin updates for the latest supported wallets.

## Connect to WELLDONE Wallet

After choosing a chain, click the `Connect to WELLDONE` button to connect to the **WELLDONE Wallet** in order to use the **WELLDONE Code**.

The error `Install WELLDONE Wallet` will appear if the **WELLDONE Wallet** is not installed, and the error `Unlock your WELLDONE Wallet OR Create Account` will apear if the **WELLDONE Wallet** is installed but the wallet is locked or no account in the chain is created.

![Connect Wallet Install Error](deploy-and-run/img/connect-wallet-notinstall.png?raw=true 'Connect Wallet Install Error')
![Connect Wallet Locked](deploy-and-run/img/connect-wallet-lock.png?raw=true 'Connect Wallet Locked')

If you haven't installed the WELLDONE Wallet yet, please follow the following [manual](https://docs.welldonestudio.io/wallet/manual/) to install and create a wallet and create an account for the selected chain. 
Finally, go into the Setting tab of your wallet and activate Developer Mode.

<img src={require('./deploy-and-run/img/wallet-developer-mode.png').default} alt='Developer Mode' style={{width: '320px'}}/>

And you must click the `Refresh` button in the upper right corner of the plug-in to apply changes to your wallet. If you successfully connect to the **WELLDONE Wallet**, the name and token balance of the linked account will be displayed in the plug-in.

<img src={require('./deploy-and-run/img/connect-wallet-success.png').default} alt='Connect Wallet' style={{width: '320px'}}/>

Please refer to the next section for instructions on how to use the **WELLDONE Code** by chain.

---

#### Related

- For more information on how to use Remix IDE, see [Remix IDE Official Docs](https://remix-ide.readthedocs.io/en/latest/).
