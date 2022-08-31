---
slug: /add-chain
sidebar_position: 3
---

# Add Chain

WELLDONE Wallet has the **Add Chain** function by default, which allows you to effortlessly add networks to your wallet. To use the tool, go to the WELLDONE Wallet [Add Chain Website](https://addchain.welldonestake.io/ethereum) or use the `window.dapp` method.

## Using Add Chain Site

The [Add Chain](https://addchain.welldonestake.io/ethereum) webpage provided by the WELLDONE Wallet makes your life much easier by letting you add networks seamlessly.

### 1. Connect Wallet

To begin, click the **Connect Wallet** button at the top to grant access to your wallet. The button will change to **Add Chain** once the WELLDONE Wallet is successfully linked to the website.

<img src='https://user-images.githubusercontent.com/70956926/177306163-75894ccd-b76e-429c-bb66-64e8976b6773.png' />

### 2. Add Chain

Select the RPC node you wish to connect to in the **Select node** box by clicking the **Add to Wallet** button for the network you want to add: Choose a node, then press the **Add to Wallet** button.

<img src='https://user-images.githubusercontent.com/70956926/177305919-4e3a5193-2555-4cf1-9356-87d3359a24e8.png' />

:::tip

### All That Node

The user can connect to the node provider's local node or the RPC node. We strongly advise you to use DSRV's [All That Node (ATN)](https://docs.allthatnode.com/), a multi-chain node platform that supports over 20 distinct protocols. Using ATN nodes makes it simple to employ mutliple chain RPC nodes on a single platform seamlessly.

:::

WELLDONE Wallet Extension would go active, then the `Add Network` window displays as seen below: To confirm that the network has been successfully added to your wallet, click the **Accept** button in the corresponding box. If the Deny button is selected, the error **User denied added chain** is returned.

<img src='https://user-images.githubusercontent.com/70956926/177306368-292f4e11-2f09-4dab-a304-a43a3c460693.png' width='500' />

### 3. Suggest Chain

If you wish to add a new network that does not yet exist on the [AddChain](https://addchain.welldonestake.io/ethereum), request directly on the [GitHub Repository](https://github.com/dsrvlabs/wds-addchain-data-list).

Please refer to the example on the README then place the `.json` data of the network you would like to add into the relevant network in the data folder. Once your pull request is merged, the change will be reflected directly on our [AddChain](https://addchain.welldonestake.io/ethereum) website.

---

## Using `dapp:addChain` Method

The `dapp:addChain` method in the WELLDONE Wallet allows you to add a new chain that does not exist in the WELLDONE Wallet at the frontend by default.

```javascript
window.dapp.request(chainName: string, (
    method: "dapp:addChain",
    params: [chainData]
))
```

Currently, **Ethereum**, **Cosmos**, and **Solana** based chains may be added, and each chain-specific section below offers instructions on what has to be provided to the `params` for each network.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
