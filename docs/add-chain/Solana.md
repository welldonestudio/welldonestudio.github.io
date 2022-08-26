## Solana params

Solana 기반의 네트워크, 혹은 그 외의 네트워크를 추가하고자 할 때는 `params`에 다음의 객체를 인자로 넘겨줍니다. 이는 WELLDONE Wallet에서 제안하는 Universal Chain 표준입니다.

```typescript title="Solana"
interface RpcUrl {
  providerName: string;
  url: string;
}

interface Currency {
  name: string;
  symbol: string;
  decimals: number;
  address?: string;
}

interface ExplorerUrl {
  name: string;
  url: string;
  standard?: string;
}

interface ChainData {
  chainId: string;
  chainName: string;
  rpcUrls: Array<RpcUrl>;
  nativeCurrencies: Array<Currency>;
  feeCurrencies: Array<Currency>;
  // (Optional)
  blockExplorerUrls: Array<ExplorerUrl>;
  // (Optional)
  iconUrls: Array<string>;
  slip44: string;
}
```

## Example

Solana Devnet 네트워크를 추가해보는 예제를 같이 살펴보겠습니다.
`Add Chain` 버튼을 눌러 Welldone Wallet에 Solana Devnet 네트워크를 추가해보세요. `dapp:addChain` 메소드를 사용하기 전에 `dapp:accounts` 메소드를 통해 먼저 지갑에 연결해야 합니다.

```jsx live
function addChain() {
  const chainData = {
    chainId: "devnet",
    chainName: "Solana Devnet",
    rpcUrls: [
      {
        providerName: "All That Node",
        url: "https://solana-devnet-rpc.allthatnode.com/"
      }
    ],
    nativeCurrencies: [
      {
        name: "Solana",
        symbol: "SOL",
        decimals: 18
      }
    ],
    feeCurrencies: [
      {
        name: "Solana",
        symbol: "SOL",
        decimals: 18
      }
    ],
    blockExplorerUrls: [
      {
        name: "Solana Devnet Explorer",
        url: "https://explorer.solana.com/?cluster=devnet"
      }
    ],
    iconUrls: [],
    slip44: "501"
  };

  async function addChain() {
    // before adding chain to wallet, you should connect to wallet first
    const accounts = await window.dapp.request("solana", {
      method: "dapp:accounts"
    });
    // add chain to wallet
    const response = await window.dapp.request("solana", {
      method: "dapp:addChain",
      params: [chainData]
    });
  }
  return <Button onClick={addChain}>Add Chain</Button>;
}
```
