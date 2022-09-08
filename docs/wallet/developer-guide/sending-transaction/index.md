---
slug: /sending-transaction
sidebar_position: 3
description: Sending Transactions using Universal Provider
---

# Sending Transactions

:::note
The undeniable but fundamental activity in the web3 universe is **Send Transactions**. This action can invoke simple token transfers, the creation of new smart contracts, or change the status of the blockchain in a variety of ways. When the dApp is linked to the WELLDONE Wallet, you may use the `dapp:sendTransaction` function to send a transaction request.
:::

Transactions are often sent in the following formats: `CHAIN NAME` and `TRANSACTION PARAMETER` are two parameters. `CHAIN NAME` is the name of the chain to which you wish to join, and `TRANSACTION PARAMETER` is the value of converting the transaction to a string type. Because each chain's transaction format differs, the WELLDONE Wallet delivers the transaction by receiving the deserialized format into a string type, as seen below.

```javascript
type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon' | 'juno';
type TRANSACTION_PARAMETER = 'string';

const response = await dapp.request(CHAIN_NAME, {
  method: 'dapp:sendTransaction',
  params: [TRANSACTION_PARAMETER],
});
const txHash = response;
```

Despite the fact that the same procedure is utilized across networks, there is little change in the parameters that must be supplied for each network. Each chain-specific section below provides details on how to send requests by the chain.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
