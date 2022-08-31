## Solana params

To add Solana-compatible networks to the WELLDONE wallet, send the following object as a factor to `params`. WELLDONE wallet suggests the **Universal Chain Standard** for the Solana network, as the following.

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

Consider adding a Solana Devnet network to the WELLDONE wallet as an example. To add a Solana Devnet network to the WELLDONE Wallet, click the `Add Chain` button. You must first connect to your wallet using the `dapp:accounts` method before using the method.

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
