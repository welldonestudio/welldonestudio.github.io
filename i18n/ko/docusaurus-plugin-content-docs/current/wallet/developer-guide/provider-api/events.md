---
sidebar_position: 3
keywords: [웰던 월렛 이벤트, dapp:accountsChanged, dapp:chainChanged]
description: Universal Provider가 제공하는 이벤트
---

# Events

:::info
Universal Provider는 Node.js EventEmitter API를 통해 총 2개의 이벤트를 발생합니다.

- [dapp:accountsChanged](#accountsChanged)
- [dapp:chainChanged](#chainChanged)

:::

## 1. accountsChanged {#accountsChanged}

- `dapp:accountsChanged` 이벤트는 체인 내부의 계정 변경이 감지되었을 때 발생합니다. 콜백 함수의 인자로 변경된 계정 주소 `address`와 현재 체인의 이름 `CHAIN_NAME`을 `CHAIN_NAME:address` 형태로 반환합니다.

```typescript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';

window.dapp.on('dapp:accountsChanged', (currentAccount: string) => {
  console.log(currentAccount); // near:welldone.testnet
});
```

## 2. chainChanged {#chainChanged}

- `dapp:chainChanged` 이벤트는 체인 내부의 네트워크 변경이 감지되었을 때 발생합니다. 콜백 함수의 인자로 변경된 네트워크의 ID`networkID`와 현재 체인의 이름 `CHAIN_NAME`을 `CHAIN_NAME:networkID` 형태로 반환합니다.

```typescript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';

window.dapp.on('dapp:chainChanged', (currentNetwork: string) => {
  console.log(currentNetwork); //celo:0xf370
});
```
