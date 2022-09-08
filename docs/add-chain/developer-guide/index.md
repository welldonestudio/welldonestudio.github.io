---
slug: /add-chain/developer-guide
sidebar_position: 3
description: How to Add a Chain to your WELLDONE Wallet
---

# Developer Guide

:::tip
If you wish to add a new network that does not yet exist on the [AddChain](https://addchain.welldonestudio.io), request it directly on the [GitHub Repository](https://github.com/dsrvlabs/wds-addchain-data-list).

Please refer to the example on the README then place the `.json` data of the network you would like to add into the relevant network in the data folder. Once your pull request is merged, the change will be reflected directly on our [AddChain](https://addchain.welldonestudio.io) website.
:::

## Using `dapp:addChain` Method

The ₩dapp:addChain₩ method in the WELLDONE Wallet allows you to add new chains that do not exist in the Welldone Wallet directly at the front end.

```javascript
window.dapp.request(chainName: string, (
    method: "dapp:addChain",
    params: [chainData]
))
```

Currently, **Ethereum**, **Cosmos**, and **Solana**-based chains may be added, and each chain-specific section below offers instructions on what has to be provided to the `params` for each network.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
