## Ethereum params

To add an Ethereum-compatible network, send the following object to `params`.

```jsx title="Ethereum"
{
    // Identifier to distinguish the chain
    // string type
    "chainId": "",
    // The name of the chain to be displayed to the user.
    "chainName": "",
    // RPC endpoint of the chain.
    "rpcUrls": [""],
    // (Optional) iconUrl that distinguishes different networks
    "iconUrls": [""],
    // default currency or coin
    "nativeCurrency": {
      "name": "",
      "symbol": "",
      "decimals": 0
    },
    // (Optional) block explorer url
    "blockExplorerUrls": [""]
}
```

## Example

Consider the addition of an Ethereum-compatible Ubiq network.
To add a Ubiq network to the WELLDONE Wallet, click the `Add Chain` button. You must first connect to your wallet using the `dapp:accounts` method before using the `dapp:addChain` method.

```jsx live
function addChain() {
  // Ethereum based chain parameter Sample - Ubiq
  const chainData = {
    chainId: "0x8",
    chainName: "Ubiq",
    rpcUrls: ["https://rpc.octano.dev"],
    iconUrls: [""],
    nativeCurrency: {
      name: "Ubiq Ether",
      symbol: "UBQ",
      decimals: 18
    },
    blockExplorerUrls: ["https://ubiqscan.io"]
  };

  async function addChain() {
    // before adding chain to wallet, you should connect to wallet first
    const accounts = await window.dapp.request("ethereum", {
      method: "dapp:accounts"
    });
    // add chain to wallet
    const response = await window.dapp.request("ethereum", {
      method: "dapp:addChain",
      params: [chainData]
    });
  }
  return <Button onClick={addChain}>Add Chain</Button>;
}
```
