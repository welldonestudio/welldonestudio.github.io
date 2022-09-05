---
sidebar_position: 4
keywords: [웰던 월렛 이벤트, dapp:accountsChanged, dapp:chainChanged]
description: dapp provider가 제공하는 이벤트
---

# Events

:::info
dapp provider는 Node.js EventEmitter API를 통해 총 2개의 이벤트를 emitted 합니다.

- [accountsChanged](#accountsChanged)
- [chainChanged](#chainChanged)
  :::

## 1. accountsChanged {#accountsChanged}

- `dapp:accountsChanged` 이벤트는 체인 내부의 계정 변경이 감지되었을 때 발생합니다. 콜백 함수의 인자로 변경된 계정 주소와 퍼블릭 키를 반환합니다.

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

- `dapp:chainChanged` 이벤트는 체인 내부의 네트워크 변경이 감지되었을 때 발생합니다. 콜백 함수의 인자로 변경된 네트워크를 반환합니다.

```typescript
window.dapp.on('dapp:chainChanged', (currentNetwork: string) => {
  console.log(currentNetwork); //celo:0xf370
});
```
