---
sidebar_position: 1
---
# About Universal Provider
## How does the Universal Provider wrap for multi-chain developers?

Web3 developers may easily handle a web3 development environment without having to install and manage several libraries simultaneously in a single request thanks to the Universal Provider, which aims to support multi-chain environment. The provider injects libraries supported by each blockchain network including ethers.js from Ethereum, near-api-js from NEAR network, cosmjs from Cosmos, web3.js from Solana, ContractKit from Celo, util-crypto from Polkadot and more.

The Universal Provider includes middleware to catch the information of several chains on your wallet level because it is directly connected to the developer-friendly Welldone Wallet. For instance, if you want to send a transaction over the Neon network, what you only need to utilize is `dapp:sendTransaction` method. This method is a middleware that intercepts your request and routes it through the Welldone Wallet. It just wraps and generalizes all of the network-specific methods so that you don't need to understand the nuances of each individual library. Just declare which network you would like to request, and utilize with `dapp` method while providing adequate input parameters.

```javascript
const DAPP_SEND_TRANSACTION_METHOD = 'dapp:sendTransaction'

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

The Universal Provider also supports native API methods published on well-known libraries from many blockchain networks. We've injected those requirements straight into the Universal Provider and wrapped them for web3 developers so you don't have to worry about managing a slew of dev dependencies when creating your own multi-chain dApp. For instance again, you can request to get all of Ethereum account addresses using the conventional 'eth_accounts' method. Simply go to the official documentation, select a API method, and apply it straight to the Universal Provider. Super simple, making the life of a web3 developer much easier than ever before.