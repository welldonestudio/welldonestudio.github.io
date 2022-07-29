## Add Chain for Cosmos

If you wish to add a Cosmos SDK-based network, send the following object to `params`.
The standard is suggested by Keplr wallet, which supports Cosmos-compatible networks, is explained below.

```json title="Cosmos"
{
  // Identifier to distinguish the chain
  "chainId": "",
  // The name of the chain to be displayed to the user.
  "chainName": "",
  // RPC endpoint of the chain
  "rpc": "",
  // REST endpoint of the chain.
  "rest": "",
  // BIP44 path
  "bip44": {
    // We recommend using 118(Cosmos Hub) as this would provide good Ledger hardware wallet compatibility by utilizing the Cosmos Ledger app.
    "coinType": 118
  },
  // Bech32 config using the address prefix of the chain
  "bech32Config": {
    "bech32PrefixAccAddr": "",
    "bech32PrefixAccPub": "pub",
    "bech32PrefixValAddr": "valoper",
    "bech32PrefixValPub": "valoperpub",
    "bech32PrefixConsAddr": "valcons",
    "bech32PrefixConsPub": "valconspub"
  },
  // Information on the staking token of the chain
  "stakeCurrency": {
    "coinDenom": "",
    "coinMinimalDenom": "",
    "coinDecimals": 6
  },
  // List of all coin/tokens used in this chain.
  "currencies": [
    {
      "coinDenom": "",
      "coinMinimalDenom": "",
      "coinDecimals": 6
    }
  ],
  // List of coin/tokens used as a fee token in this chain.
  "feeCurrencies": [
    {
      "coinDenom": "",
      "coinMinimalDenom": "",
      "coinDecimals": 6
    }
  ],
  // (Optional) The number of the coin type.
  // This field is only used to fetch the address from ENS.
  // Ideally, it is recommended to be the same with BIP44 path's coin type.
  // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
  // So, this is separated to support such chains.
  "coinType": 118,
  // (Optional) This is used to set the fee of the transaction.
  // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
  // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
  // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
  "gasPriceStep": {
    "low": 0.01,
    "average": 0.025,
    "high": 0.03
  },
  // (Optional)
  "explorer": ""
}
```

## Example

This example shows the way to add a Cosmos-compatible Osmosis testnet `osmo-test-4`.
To add an Osmosis Testnet network to the WELLDONE Wallet, click the 'Add Chain' button. You must first connect to your wallet using the `dapp:accounts` method before using the `dapp:addChain` method.

```jsx live
function addChain() {
  // Cosmos-SDK based chain parameter Sample - Osmosis Testnet
  const chainData = {
    chainId: "osmo-test-4",
    chainName: "Osmosis Testnet",
    rpc: "https://osmosis-testnet-rpc.allthatnode.com:26657/",
    rest: "https://osmosis-testnet-rpc.allthatnode.com:1317/",
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: "osmo",
      bech32PrefixAccPub: "osmopub",
      bech32PrefixValAddr: "osmovaloper",
      bech32PrefixValPub: "osmovaloperpub",
      bech32PrefixConsAddr: "osmovalcons",
      bech32PrefixConsPub: "osmovalconspub"
    },
    stakeCurrency: {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6
    },
    currencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6
      }
    ],
    explorer: "https://testnet.mintscan.io/osmosis-testnet",
    coinType: 118
  };

  async function addChain() {
    // before adding chain to wallet, you should connect to wallet
    const accounts = await window.dapp.request("cosmos", {
      method: "dapp:accounts"
    });
    // add chain to wallet
    const response = await window.dapp.request("cosmos", {
      method: "dapp:addChain",
      params: [chainData]
    });
  }

  return <Button onClick={addChain}>Add Chain</Button>;
}
```
