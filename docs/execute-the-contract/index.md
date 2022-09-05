---
slug: /excute-the-contract
keywords: [Smart Contract, WELLDONE Wallet, Execute the Contract]
description: How to Execute the Contract using Universal Provider
---

# Execute the Contract

This article would like to provide a brief Counter example to demonstrate how to use a `dapp:sendTransaction` method to send transactions to smart contracts distributed by networks.

The Counter example has `increment` and `reset` methods while the implementations are different for each network.

The following is a straightforward example of the Solidity pseudocode.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Counter {
    int private count = 0;

    constructor(uint256 _count) {
      count = _count;
    }

    function increment(uint256 _count) public {
        count += _count;
    }

    function reset(uint256 _count) public {
        count = _count
    }
}
```

The following formats are frequently used for communication with smart contracts: `TRANSACTION PARAMETER` refers to the value of turning the transaction into a string type, and the parameters `CHAIN NAME` and `TRANSACTION PARAMETER` are transferred.

The transaction is sent by WELLDONE Wallet by getting the pattern translated into a string type as shown below because each network has a unique transaction format.

```javascript
type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';
type TRANSACTION_PARAMETER = 'string';

const response = await dapp.request(CHAIN_NAME, {
  method: 'dapp:sendTransaction',
  params: [TRANSACTION_PARAMETER],
});
const txHash = response.hash;
```

Each chain section below explains how each network can communicate with the contract.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
