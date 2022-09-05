---
sidebar_position: 4
keywords: [WELLDONE Wallet Events, dapp:accountsChanged, dapp:chainChanged]
description: Events that dapp provider support
---

# Events

:::info
dapp provider emits two events through the EventEmitter API on Node.js.

- [accountsChanged](#accountsChanged)
- [chainChanged](#chainChanged)
  :::

## 1. accountsChanged {#accountsChanged}

- The `dapp:accountsChanged` event is triggered when an account change is detected inside the network. Returns the account address and public key as the input argument from a callback function.

```typescript
type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';

interface ACCOUNT_INFO {
  address: string;
  pubKey: string;
}

window.dapp.on('dapp:accountsChanged', (currentAccount: Record<CHAIN_NAME, ACCOUNT_INFO>) => {
  console.log(currentAccount);
  /*
  {
    ethereum: {
      address: "0x....",
      pubKey: "0x....",
    }
  }
  */
});
```

## 2. chainChanged {#chainChanged}

- The `dapp:chainChanged` event is triggered when a network change inside the chain is identified. Returns the network as modified by the input argument on a callback function.

```typescript
window.dapp.on('dapp:chainChanged', (currentNetwork: string) => {
  console.log(currentNetwork); //celo:0xf370
});
```
