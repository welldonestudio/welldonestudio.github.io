---
slug: /sending-transaction
sidebar_position: 3
description: Sending Transactions using Universal Provider
---

# Sending Transactions

:::note
The undeniable but fundamental activity in the web3 universe is **Sending Transactions**. This action can invoke simple token transfers, the creation of new smart contracts, or change the status of the blockchain in a variety of ways. Sending Transactions can be largely divided into two stages: transaction signing and transaction sending, and WELLDONE Wallet can sign and send transactions at once using the `dapp:signAndSendTransaction` method.
:::

`CHAIN NAME` and `HEX_STRING_TX_DATA` are two parameters for `dapp:signAndSendTransaction`. `CHAIN_NAME` is the name of the network to which you wish to add, and `HEX_STRING_TX_DATA` is the value of converting the transaction to a HEX string type. Because a transaction format differs by networks, WELLDONE Wallet executes the transaction by taking the input argument in hex string type then translate it to compatible to the targeted network.

:::info
You can put the transaction objects as they are in EVM networks.
:::

```typescript
type CHAIN_NAME =
  | 'celestia'
  | 'celo'
  | 'cosmos'
  | 'ethereum'
  | 'juno'
  | 'klaytn'
  | 'near'
  | 'neon'
  | 'solana'
  | 'sui';
type HEX_STRING_TX_DATA = 'string';

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:signAndSendTransaction',
  params: [HEX_STRING_TX_DATA],
});
```

There is a difference in how to construct `HEX_STRING_TX_DATA` since each chain's transaction format is different, even though all chains use the same method `dapp:signAndSendTransaction`. Each chain-specific section below provides details on how to send requests by the chain with simple token transfer transaction example.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
