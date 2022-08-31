## Ethereum params

To add EVM-compatible networks to the WELLDONE wallet, send the following object as a factor to `params`.

```typescript title="Ethereum"
interface ChainData {
  // Identifier to distinguish the chain
  chainId: string;
  // The name of the chain to be displayed to the user.
  chainName: string;
  // RPC endpoint of the chain.
  rpcUrls: Array<string>;
  iconUrls: Array<string>;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls: Array<string>;
}
```

## Example

The following is the example that the addition of a EVM-compatible Ubiq testnet.
Click the 'Add Chain' button. You must first connect to your wallet using the `dapp:accounts` method before using the `dapp:addChain` method.

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
