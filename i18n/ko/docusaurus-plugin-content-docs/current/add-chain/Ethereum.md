---
description: 이더리움 기반 네트워크 추가
keywords: [네트워크 추가, 이더리움]
---

## Ethereum params

Ethereum 기반 네트워크를 추가하고자 할 때는 `params` 에 다음의 객체를 인자로 넘겨줍니다.

```typescript title="Ethereum"
interface ChainData {
  // Identifier to distinguish the chain
  // 이더리움에서는 Hex로 쓰이지만 코스모스에서는 string이기 때문에 string으로 통일
  chainId: string;
  // The name of the chain to be displayed to the user.
  chainName: string;
  // RPC endpoint of the chain.
  rpcUrls: Array<string>;
  // (Optional) 체인의 식별을 위한 이미지 url
  iconUrls: Array<string>;
  // 기본으로 쓰이는 화폐 설정
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  // (Optional) 체인의 트랜잭션 정보를 제공하는 사이트 url
  blockExplorerUrls: Array<string>;
}
```

## Example

Ethereum 기반의 Ubiq 네트워크를 추가해보는 예제입니다.
`Add Chain` 버튼을 눌러 WELLDONE Wallet에 Ubiq 네트워크를 추가합니다. `dapp:addChain` 메소드를 사용하기 전에 `dapp:accounts` 메소드를 통해 먼저 지갑에 연결해야 합니다.

```jsx live
function addChain() {
  // Ethereum based chain parameter Sample - Ubiq
  const chainData = {
    chainId: '0x8',
    chainName: 'Ubiq',
    rpcUrls: ['https://rpc.octano.dev'],
    iconUrls: [''],
    nativeCurrency: {
      name: 'Ubiq Ether',
      symbol: 'UBQ',
      decimals: 18,
    },
    blockExplorerUrls: ['https://ubiqscan.io'],
  };

  async function addChain() {
    // before adding chain to wallet, you should connect to wallet first
    const accounts = await window.dapp.request('ethereum', {
      method: 'dapp:accounts',
    });
    // add chain to wallet
    const response = await window.dapp.request('ethereum', {
      method: 'dapp:addChain',
      params: [chainData],
    });
  }
  return <Button onClick={addChain}>Add Chain</Button>;
}
```
