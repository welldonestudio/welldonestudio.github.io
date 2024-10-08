---
title: Arbitrum Stylus Gas Efficiency Test
description: Arbitrum Stylus Gas Efficiency Test
sidebar_position: 10 
---

# Gas Cost Comparison: Stylus Rust vs Solidity

<div>
  <span className='author-sm'>Aug 22, 2024</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/kairoski03' target='_blank'><img src='https://avatars.githubusercontent.com/u/110001241?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Yoonsoo Jang</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Introduction
When developing smart contracts, gas costs are a critical consideration. This article compares the gas costs of smart contracts written in Solidity and Stylus to determine which is more efficient.  
You can download the sample code from the [GitHub repository](https://github.com/dsrvlabs/arbiturm-stylus-solidity-compare).

## Overview

- **Solidity**: The most widely used programming language for writing smart contracts on the Ethereum blockchain.
- **Stylus**: Stylus allows you to write smart contracts in languages that compile to WASM, like Rust and C++, offering high efficiency, lower gas fees, and interoperability with Solidity on the Arbitrum network.

## Testing with Computationally Intensive Functions

One common example of high computational cost in smart contracts is cryptographic operations. For this comparison, we used the `keccak256` hashing function, which is known for its significant computation requirements.  
This test was conducted on the Arbitrum Sepolia testnet. ( RPC: `https://sepolia-rollup.arbitrum.io/rpc` Chain ID: `421614` )


<table>
    <tr>
        <td  valign="top">

#### Solidity Smart Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract HashStorage {
bytes32 public storedHash;
    
    function storeHash(string memory _input) public {
        storedHash = keccak256(abi.encodePacked(_input));
    }
    
}
```

</td>
<td>

#### Stylus Rust

```rust
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

use stylus_sdk::{crypto::keccak, prelude::*, storage::StorageFixedBytes};

#[global_allocator]
static ALLOC: mini_alloc::MiniAlloc = mini_alloc::MiniAlloc::INIT;

sol_storage! {
    #[entrypoint]
    pub struct HashStorage {
        StorageFixedBytes<32> h;
    }
}

#[external]
impl HashStorage {
    pub fn store_hash(&mut self, input: String) {
        let hash = keccak(input.as_bytes());
        self.h.set(hash.into());
    }

    pub fn get_hash(&self) -> String {
        let h = self.h.get();
        hex::encode(h)
    }
}
```
</td>
</tr>
</table> 


&nbsp;You can build and deploy Stylus-Rust using [Remix IDE](https://remix.ethereum.org/) with the `CODE BY WELLDONE STUDIO` plugin,  
and it also supports method calls.  
&nbsp;Please refer to [this document](https://docs.welldonestudio.io/code/getting-started) for instructions on how to use it.

![remix-arbitrum-deploy](img/remix-arbitrum-deploy.png?raw=true 'remix-arbitrum-deploy')
![remix-arbitrum-method-call](img/remix-arbitrum-method-call.png?raw=true 'remix-arbitrum-method-call')

## Gas Consumption Results

2024-09-05 Test Result  
Stylus contracts showed an average gas cost that was `-49.50%` lower compared to Solidity contracts.  
[Solidity Contract](https://sepolia.arbiscan.io/address/0x28e64aa1345a33a584e52eba14fa2350d3fd345f)  
[Stylus Contract](https://sepolia.arbiscan.io/address/0xed8b4559ae0e8e9d51b71b6a8cef5573ca3f8b48)  

| No | Solidity  | Stylus                   |
|-----|----------|--------------------------|
| 1   | 423,734  | 205,441                  |
| 2   | 403,834  | 204,047                  |
| 3   | 403,834  | 205,441                  |
| 4   | 396,946  | 204,047                  |
| 5   | 405,556  | 201,956                  |
| 6   | 403,834  | 204,744                  |
| 7   | 403,834  | 205,441                  |
| 8   | 402,112  | 205,441                  |
| 9   | 403,834  | 205,441                  |
| 10  | 403,834  | 204,047                  |
| Avg | 405,135  | 204,605 **( -49.50 % )** |


2024-08-22 Test Result  
Unexpectedly, Stylus contracts showed an average gas cost that was `+25.26%` higher compared to Solidity contracts.  
[Solidity Contract](https://sepolia.arbiscan.io/address/0x3272317e27ce3198cf37dfa334bd7420586829f0)  
[Stylus Contract](https://sepolia.arbiscan.io/address/0x1994b59ce24d9d26898c9d1be32c49cfe3d17344)  

| No | Solidity | Stylus                 |
|-----|----------|------------------------|
| 1   | 45,018   | 37,111                 |
| 2   | 27,918   | 37,111                 |
| 3   | 27,918   | 37,111                 |
| 4   | 27,918   | 37,111                 |
| 5   | 27,918   | 37,111                 |
| 6   | 27,918   | 37,111                 |
| 7   | 27,918   | 37,111                 |
| 8   | 27,918   | 37,111                 |
| 9   | 27,918   | 37,111                 |
| 10  | 27,918   | 37,111                 |
| Avg | 29,628   | 37,111 **( +25.26% )** |

But the next day, I tested it again and found that the gas costs between the two were similar, or there were cases where Stylus had lower gas costs. Therefore, it was difficult to draw a clear conclusion.


## 2nd Test - Performing 1,000 keccak256 hash operations in a single call.
Assuming that the true potential of Stylus is revealed when the computational intensity reaches a certain level, I modified the code to perform `keccak256` 1,000 times and then tested it as follows.


<table>
    <tr>
        <td  valign="top">

#### Solidity Smart Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract HashStorage1000 {
    bytes32 public storedHash;

    function storeHash(string memory _input) public {
        bytes32 hash = keccak256(abi.encodePacked(_input));

        for (uint i = 0; i < 999; i++) {
            hash = keccak256(abi.encodePacked(hash));
        }

        storedHash = hash;
    }
}
```

</td>
<td>

#### Stylus Rust

```rust
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

use stylus_sdk::{crypto::keccak, prelude::*, storage::StorageFixedBytes};

#[global_allocator]
static ALLOC: mini_alloc::MiniAlloc = mini_alloc::MiniAlloc::INIT;

sol_storage! {
    #[entrypoint]
    pub struct HashStorage1000 {
        StorageFixedBytes<32> h;
    }
}

#[external]
impl HashStorage1000 {
    pub fn store_hash(&mut self, input: String) {
        let mut hash = keccak(input.as_bytes());

        for _ in 1..1000 {
            hash = keccak(&hash);
        }

        self.h.set(hash.into());
    }

    pub fn get_hash(&self) -> String {
        let h = self.h.get();
        hex::encode(h)
    }
}

```
</td>
</tr>
</table> 

### Gas Consumption Results
2024-09-05 Test Result 
That's impressive! The gas costs of Stylus have been reduced by `-9.53%` compared to Solidity.  
[Solidity Contract](https://sepolia.arbiscan.io/address/0x2f0bdc6febd23d304b9861500b4226fda6a54435)    
[Stylus Contract](https://sepolia.arbiscan.io/address/0x860ba6b53d30b80fcc623545845f67fa4c3ed1a8)


| No | Solidity   | Stylus                  |
|-----|-----------|-------------------------|
| 1   | 786,394   | 675,577                 |
| 2   | 764,802   | 695,535                 |
| 3   | 763,110   | 695,535                 |
| 4   | 764,802   | 695,535                 |
| 5   | 763,110   | 695,535                 |
| 6   | 764,802   | 695,535                 |
| 7   | 764,802   | 695,535                 |
| 8   | 764,802   | 695,535                 |
| 9   | 764,802   | 695,535                 |
| 10  | 764,802   | 695,535                 |
| Avg | 766,623   | 693,539  **( -9.53% )** |



2024-08-22 Test Result  
That's impressive! The gas costs of Stylus have been reduced by `-86.3%` compared to Solidity.  
[Solidity Contract](https://sepolia.arbiscan.io/address/0xaf9bfaf830f54f8a1f595c042b7374f144813008)    
[Stylus Contract](https://sepolia.arbiscan.io/address/0x9ba27cc3df28fbe5cbcad8fb0ec56ed11e8ae08d)  


| No | Solidity  | Stylus                    |
|-----|-----------|--------------------------|
| 1   | 412,557   | 53,311                   |
| 2   | 396,540   | 54,397                   |
| 3   | 396,526   | 54,403                   |
| 4   | 396,554   | 54,385                   |
| 5   | 396,530   | 54,381                   |
| 6   | 396,531   | 54,379                   |
| 7   | 396,551   | 54,402                   |
| 8   | 396,569   | 54,440                   |
| 9   | 396,608   | 54,450                   |
| 10  | 396,598   | 54,458                   |
| Avg | 398,156   | 54,301 **( -86.4% )**    |


## 3rd Test - Local Test Node
2024-08-22 Test Result  
This test was conducted in a local node using [Nitro Testnode](https://github.com/OffchainLabs/nitro-testnode). This was done to test in a more controlled environment and minimize the impact of external factors, which we might have encountered during testing on Arbitrum Sepolia. The test results showed that the gas savings rate was 86.6%, which was nearly identical to the results from the local test node.

| No  | Solidity | Stylus                |
|-----|----------|-----------------------|
| 1   | 412,557  | 53,343                |
| 2   | 395,457  | 53,343                |
| 3   | 395,457  | 53,343                |
| 4   | 395,457  | 53,343                |
| 5   | 395,457  | 53,343                |
| 6   | 395,457  | 53,343                |
| 7   | 395,457  | 53,343                |
| 8   | 395,457  | 53,343                |
| 9   | 395,457  | 53,343                |
| 10  | 395,457  | 53,343                |
| Avg | 397,167  | 53,343 **( -86.6% )** |


## Conclusion
The results of these tests clearly demonstrate the significant efficiency gains that can be achieved by using Stylus for smart contract development, particularly in computationally intensive scenarios. While initial tests showed that Stylus contracts might incur higher gas costs for a single `keccak` operation, the true potential of Stylus becomes evident when dealing with more intensive computations, such as executing multiple `keccak` operations. In this test, the fact that gas costs were reduced by up to 86.6% compared to Solidity highlights Stylus's ability to effectively optimize performance and resource utilization. This makes Stylus an attractive option for developers looking to build high-performance, cost-effective smart contracts on the Arbitrum network. As Stylus continues to evolve, it will likely become a key tool in the blockchain developer's toolkit, offering both flexibility and efficiency in contract development.

### Reference
[https://github.com/LimeChain/stylus-benchmark](https://github.com/LimeChain/stylus-benchmark)  
[https://github.com/OffchainLabs/stylus-hello-world](https://github.com/OffchainLabs/stylus-hello-world)  
[https://github.com/OffchainLabs/nitro-testnode](https://github.com/OffchainLabs/nitro-testnode)
