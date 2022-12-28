---
sidebar_position: 3
keywords: [WELLDONE Wallet Events, dapp:accountsChanged, dapp:chainChanged]
description: Events that Universal Provider support
---

# Events

:::info
Universal Provider emits two events through the EventEmitter API on Node.js.

- [dapp:accountsChanged](#accountsChanged)
- [dapp:chainChanged](#chainChanged)

:::

## 1. accountsChanged {#accountsChanged}

- The `dapp:accountsChanged` event is triggered when an account change is detected inside the network. Returns the changed account address `address` and current chain name `CHAIN_NAME` in the form `CHAIN_NAME:address` as the input argument from a callback function.

```typescript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';

window.dapp.on('dapp:accountsChanged', (currentAccount: string) => {
  console.log(currentAccount); // near:welldone.testnet
});
```

## 2. chainChanged {#chainChanged}

- The `dapp:chainChanged` event is triggered when a network change inside the chain is identified. Returns the network ID `networkID` and current chain name `CHAIN_NAME` in the form `CHAIN_NAME:networkID` as modified by the input argument on a callback function.

```typescript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';

window.dapp.on('dapp:chainChanged', (currentNetwork: string) => {
  console.log(currentNetwork); //celo:0xf370
});
```
