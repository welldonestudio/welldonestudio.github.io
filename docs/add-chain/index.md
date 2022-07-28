---
slug: /add-chain
sidebar_position: 3
---

# AddChain

WELLDONE Wallet has the **AddChain** feature, which allows you to add networks directly to your wallet. **There are two methods to utilize AddChain**: through the WELLDONE Wallet [AddChain] (https://addchain.welldonestake.io/ethereum) site or using the `window.dapp` method.

## Using AddChain Site

The [AddChain] (https://addchain.welldonestake.io/ethereum) webpage provided by the WELLLDONE Wallet makes it simple to add networks.

### 1. Connect Wallet

To begin, click the **Connect Wallet** button at the top to grant access to your wallet. The button will change to `Add Chain` once the WELLDONE Wallet is successfully connected.
<img src='https://user-images.githubusercontent.com/70956926/177306163-75894ccd-b76e-429c-bb66-64e8976b6773.png' />

### 2. Add Chain

Select the RPC node you wish to connect to in the `Select Node` box by clicking the **Add to Wallet** button for the network you want to add: Choose a node, then press the **Add to Wallet** button.
<img src='https://user-images.githubusercontent.com/70956926/177305919-4e3a5193-2555-4cf1-9356-87d3359a24e8.png' />

:::tip

### All That Node

Both the Local Node and the RPC Node offered by the Node Provider are available to users. We highly recommend using All That Node from DSRV. [All That Node](https://docs.allthatnode.com/) is a multi-chain node platform by DSRV that supports more than 20 different protocols. It is convenient to utilize RPC Nodes that support numerous networks on a single All That Node platform.

:::

Then the `Add Network` window displays as follows, when the WELLDONE Wallet extension has been activated. In the popup box, click the **Accept** button to confirm that you would like to add the network to your wallet. A `User refused added chain` error is returned if you hit the Deny button.
<img src='https://user-images.githubusercontent.com/70956926/177306368-292f4e11-2f09-4dab-a304-a43a3c460693.png' width='500' />

### 3. Suggest Chain

You can request a new network on AddChain to be added via the [GitHub repository](https://github.com/dsrvlabs/wds-addchain-data-list) if it is not already included on the `AddChain`.
Check the sample example on README.md out before adding the `.json` data for the network you wish to add to the relevant network in the data folder. When the commit is merged, our [AddChain] ("https://addchain.welldonestake.io/ethereum") website will instantly update to reflect the change.

---

## Using `dapp:addChain` Method

You can add a new chain that does not already exist in the WELLDONE Wallet by using the `dapp:addChain` function.

```javascript
window.dapp.request(chainName: string, (
    method: "dapp:addChain",
    params: [chainData]
))
```

As of right now, **Ethereum**, **Cosmos**, and **Solana** based chains can be added; each section dedicated to each network below explains what must be passed as parameters.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
