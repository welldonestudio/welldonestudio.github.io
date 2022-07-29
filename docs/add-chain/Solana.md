## Solana

Pass the following object to `params` to add Solana or other networks. The Universal Chain standard that WELLDONE Wallet has suggested is the following.

```json title="Solana"
{
  "chainId": "",
  "chainName": "",
  "rpcUrls": [
    {
      "providerName": "",
      "url": ""
    }
  ],
  "nativeCurrencies": [
    {
      "name": "",
      "symbol": "",
      "decimals": 9
    }
  ],
  "feeCurrencies": [
    {
      "name": "",
      "symbol": "",
      "decimals": 9
    }
  ],
  // (Optional)
  "blockExplorerUrls": [
    {
      "name": "",
      "url": ""
    }
  ],
  // (Optional)
  "iconUrls": [],
  "slip44": "501"
}
```

## Example

Let's examine a scenario where a Solana Devnet network is added.
To add a Solana Devnet network to the WELLDONE Wallet, click the `Add Chain` button. You must first establish a connection to your wallet using the `dapp:accounts` function before using the `dapp:addChain` method.

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
