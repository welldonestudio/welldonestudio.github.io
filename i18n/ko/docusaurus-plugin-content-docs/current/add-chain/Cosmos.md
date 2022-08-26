## Cosmos params

Cosmos 기반 네트워크를 추가하고자 할 때는 `params`에 다음의 객체를 인자로 넘겨줍니다.
아래는 Cosmos의 인터체인을 지원하는 Keplr 에서 제안한 Cosmos 생태계 표준을 따릅니다.

```typescript title="Cosmos"
interface ChainData {
  // Identifier to distinguish the chain
  chainId: string;
  // The name of the chain to be displayed to the user.
  chainName: string;
  // RPC endpoint of the chain
  rpc: string;
  // REST endpoint of the chain.
  rest: string;
  // BIP44 path
  bip44: {
    // We recommend using 118(Cosmos Hub) as this would provide good Ledger hardware wallet compatibility by utilizing the Cosmos Ledger app.
    coinType: number;
  };
  // Bech32 config using the address prefix of the chain
  bech32Config: {
    bech32PrefixAccAddr: string;
    bech32PrefixAccPub: string;
    bech32PrefixValAddr: string;
    bech32PrefixValPub: string;
    bech32PrefixConsAddr: string;
    bech32PrefixConsPub: string;
  };
  // Information on the staking token of the chain
  stakeCurrency: {
    coinDenom: string;
    coinMinimalDenom: string;
    coinDecimals: number;
  };
  // List of all coin/tokens used in this chain.
  currencies: [
    {
      coinDenom: string;
      coinMinimalDenom: string;
      coinDecimals: number;
    }
  ];
  // List of coin/tokens used as a fee token in this chain.
  feeCurrencies: [
    {
      coinDenom: string;
      coinMinimalDenom: string;
      coinDecimals: number;
    }
  ];
  // (Optional) The number of the coin type.
  // This field is only used to fetch the address from ENS.
  // Ideally, it is recommended to be the same with BIP44 path's coin type.
  // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
  // So, this is separated to support such chains.
  coinType: number;
  // (Optional) This is used to set the fee of the transaction.
  // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
  // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
  // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
  gasPriceStep: {
    low: number;
    average: number;
    high: number;
  };
  // (Optional)
  explorer: string;
}
```

## Example

Cosmos 기반의 Osmosis 테스트넷 (`osmo-test-4`) 을 추가해보는 예제를 같이 살펴보겠습니다.
`Add Chain` 버튼을 눌러 WELLDONE Wallet에 Osmosis Testnet 네트워크를 추가해보세요. `dapp:addChain` 메소드를 사용하기 전에 `dapp:accounts` 메소드를 통해 먼저 지갑에 연결해야 합니다.

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
    // gasPriceStep: {
    //   low: 0.01,
    //   average: 0.025,
    //   high: 0.05
    // }
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
