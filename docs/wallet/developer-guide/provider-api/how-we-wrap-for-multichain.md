---
keywords: [Universal Provider, How does Universal Provider wrap for multi-chain developers?]
description: How Universal Provider supports multi-chain developers
sidebar_position: 1
---

# About Universal Provider

## How does the Universal Provider wrap for multi-chain developers?

Since **Universal Provider** supports multi-chain environments, Web3 developers may simply manage their development environments by utilizing WELLDONE Wallet, without having to install and maintain numerous libraries. The provider injects libraries supported by each blockchain network, such as Ethereum's `ethers.js`, NEAR's `near-api-js`, Cosmos' `cosmjs`, Solana's `web3.js`, Celo's `ContractKit`, Polkadot's `util-crypto`, and others.

Since it is directly linked to the developer-friendly WELLDONE Wallet, **Universal Provider** offers middleware that captures and processes multiple requests from a plethora of networks sent from the frontend of the wallet. For example, if you would like to execute a transaction to Neon network, for example, you merely need to utilize the `dapp:sendTransaction` method. The method helps your request to be routed to WELLDONE Wallet that wraps the libraries from a plethora of blockchain networks. Universal Provider covers and generalizes all network-related methods in this way, eliminating the need to manage each separate library. Just designate the network that you wish to query or request with a single `dapp` command.

```javascript
const DAPP_SEND_TRANSACTION_METHOD = 'dapp:sendTransaction';

async function handleGetAccount() {
  try {
    const accounts = await dapp.request(CHAIN_NAME, {
      method: DAPP_SEND_TRANSACTION_METHOD,
    });
    setAccounts(accounts[CHAIN_NAME].address);
  } catch (error) {
    alert(error.message);
  }
}
```

**Universal Provider** also supports the default API method that is already frequently utilized in web3 developer world. When developing your own multi-chain dApps, you do not need to worry about maintaining a slew of development dependencies since you only need to inject the `Universal Provider` to support a plethora of networks. For example, you may use the existing `eth_accounts` methods to query all addresses from the Ethereum blockchain. Simply browse the official document, choose the API method, and apply it to the **Universal Provider**. These solutions are straightforward, making web3 development easy.
