---
title: Starknet verification
description: Understanding how to verify a deployed Starknet smart contract
sidebar_position: 0
---

### Intro

Starknet aims to achieve secure, low-cost transactions and high performance by using the STARK cryptographic proof system. Starknet contracts and the Starknet OS are written in [Cairo](https://github.com/starkware-libs/cairo), a custom-built and specialized programming language.

### Cairo Language

The Cairo language is a smart contract language for Starknet, a programming language designed for virtual CPUs. Because the Cairo language is built for cryptographic constraints, not physical ones, it can efficiently prove the execution of any program.

While Cairo 0 was compiled directly into CASM (Cairo Assembly), Cairo 1 is a high-level language that is first compiled into Sierra. Sierra (Safe Intermediate Representation) is an intermediate representation between Cairo and CASM that is later compiled into a safe subset of CASM. The resulting compiled CASM code is eventually executed by the Cairo VM on the Starknet OS and generates a STARK proof, which is sent to L1.

You can read more about Cairo, Sierra, and CASM in these [documents](https://docs.starknet.io/architecture-and-concepts/smart-contracts/cairo-and-sierra/).

### Cairo Code

Example code for the Cairo language looks like this:

```rust title="simple_storage.cairo"
#[starknet::interface]
trait ISimpleStorage<TContractState> {
    fn set(ref self: TContractState, x: u128);
    fn get(self: @TContractState) -> u128;
}

#[starknet::contract]
mod simple_storage {
    use starknet::get_caller_address;
    use starknet::ContractAddress;

    #[storage]
    struct Storage {
        stored_data: u128
    }

    #[abi(embed_v0)]
    impl SimpleStorage of super::ISimpleStorage<ContractState> {
        fn set(ref self: ContractState, x: u128) {
            self.stored_data.write(x);
        }
        fn get(self: @ContractState) -> u128 {
            self.stored_data.read()
        }
    }
}
```

### Cairo Verification

The above `simple_storage.cairo` can be verified using WELLDONE Studio's upcoming Multi-chain Verification Tool. To deploy a smart contract written in Cairo, you can refer to the Starknet [documentation](https://docs.starknet.io/quick-start/environment-setup/) for deployment. Once deployed, you can check that it was deployed correctly with [Starkscan](https://starkscan.co/) or [Nethermind Voyager Explorer](https://voyager.online/).

To verify a Cairo smart contract using the Multi-chain Verification Tool, a total of seven pieces of information are required:

1. Contract Address: Deployed smart contract address
2. `DECLARE` Transaction Hash: Declare transaction hash is required because there is a need to verify not only `class_hash` but also `compiled_class_hash`. In the future, we will remove the `DECLARE` transaction hash.
3. Scarb Version: Scarb is a Cairo package manager that compiles Cairo projects. It depends on the compiler version to [compile](https://github.com/starkware-libs/cairo/blob/410069c5745800bab4fbd2f0f4ff0bbfc59209d6/crates/cairo-lang-starknet-classes/src/contract_class.rs#L49), so it is important to specify it.
4. Chain ID: To differentiate between Mainnet (`0x534e5f4d41494e`) and Sepolia (`0x534e5f5345504f4c4941`)
   <img src={require('./img/source-code-verification.png').default} alt='source-code-verification' />

5. Cairo project source code
6. In order to validate Cairo, you must add the following config to `Scarb.toml`:

```toml
[[target.starknet-contract]]
casm = true
sierra = true
```

7. The Cairo project structure is as follows (assuming a DECLARE and DEPLOY to the network):

```toml
├── Scarb.lock
├── Scarb.toml
├── src
│   ├── lib.cairo
│   └── simple_storage.cairo
└── target
    ├── CACHEDIR.TAG
    └── dev
        ├── simple_storage.starknet_artifacts.json
        ├── simple_storage_simple_storage.compiled_contract_class.json
        └── simple_storage_simple_storage.contract_class.json
```

<img src={require('./img/source-code-upload-code.png').default} alt='source-code-upload-code' />

### Result

**Code**

For verified contracts, users can review the overall structure, see where each file is located, and examine how the code in each file is written. Even users who are not familiar with reading code can understand what the code does using AI code assistance.
<img src={require('./img/code-result.png').default} alt='code-result' />

**Interact**

Users can directly interact with the contract simply by connecting their wallet.
<img src={require('./img/code-interact.png').default} alt='code-interact' />

Before initiating a transaction, users can review the code and use AI assistance to understand the functions and features of the contract.
<img src={require('./img/code-interact-show-code.png').default} alt='code-interact-show-code' />
