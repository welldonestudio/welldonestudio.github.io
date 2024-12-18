---
title: Starknet Cairo Verification
description: Starknet Cairo Smart Contract Verification
sidebar_position: 10
---

# Starknet Cairo Verification

<div>
  <span className='author-sm'>Oct 8, 2024</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/inchori' target='_blank'><img src='https://avatars.githubusercontent.com/u/49394875?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Inchul Song</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Starknet

Starknet is an Ethereum L2 chain that provides Validity-Rollup. Validity-Rollup is also known as Zero-Knowledge Rollup (ZK-Rollup).

Starknet is composed of the following components:

- Sequencer: The sequencer receives transactions generated by the L2 and generates L2 blocks. It is responsible for sending the generated L2 blocks to the Prover.
- Prover: The Prover receives the generated blocks and transactions from the Sequencer and verifies them. After executing the proof program with the Cairo VM of Starknet OS, it generates a STARK proof and sends it to the L1 chain.
- L1 (Ethereum): Validates the STARK proof and, if valid, updates the Starknet state root of L1.

## Starknet Transaction Lifecycle

![starknet-tx-lifecycle](img/starknet-tx-lifecycle.png?raw=true 'starknet-tx-lifecycle')

The transaction lifecycle on Starknet proceeds in the following order:

1. Transaction submission: The transaction is submitted to one Sequencer and marked with the status `RECEVIED`.
2. Mempool validation: The transaction is validated in the Mempool and checked for the following cases.
   - The current account balance exceeds `max_fee`.
   - Whether the transaction's calldata exceeds the limit.
3. Sequencer validation: Sequencer performs preliminary validation before executing the transaction.
4. Execution: Sequencer executes all transactions that pass preliminary validation sequentially. If successful, the transaction is marked with the status `ACCEPTED_ON_L2`. If the transaction fails during execution, it is marked as `REVERTED`.
5. Proof generation and verification: The Prover runs the operating system in a new block, computes the proof, and sends it to the L1 validator. If the proof passes verification on L1, it is marked as `ACCEPTED_ON_L1`.

## Cairo Language

The Cairo language is a smart contract language for Starknet, a programming language designed for virtual CPUs. Because the Cairo language is built for cryptographic constraints, not physical ones, it can efficiently prove the execution of any program.

While Cairo 0 was compiled directly into CASM (Cairo Assembly), Cairo 1 is a high-level language that is first compiled into Sierra. Sierra (Safe Intermediate Representation) is an intermediate representation between Cairo and CASM that is later compiled into a safe subset of CASM. The resulting compiled CASM code is eventually executed by the Cairo VM on the Starknet OS and generates a STARK proof, which is sent to L1.

You can read more about Cairo, Sierra, and CASM in these [documents](https://docs.starknet.io/architecture-and-concepts/smart-contracts/cairo-and-sierra/).

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

## How to verify Cairo Smart Contract?

The above `simple_storage.cairo` can be verified using WELLDONE Studio's [VeriWell](https://veriwell.dev/). To deploy a smart contract written in Cairo, you can refer to the Starknet [documentation](https://docs.starknet.io/quick-start/environment-setup/) for deployment. Once deployed, you can check that it was deployed correctly with [Starkscan](https://starkscan.co/) or [Nethermind Voyager Explorer](https://voyager.online/).

To verify a Cairo smart contract using the Multi-chain Verification Tool, a total of five pieces of information are required:

1. Contract Address: Deployed smart contract address
2. `DECLARE` Transaction Hash: Declare transaction hash is required because there is a need to verify not only `class_hash` but also `compiled_class_hash`. In the future, we will remove the `DECLARE` transaction hash.
3. Scarb Version: Scarb is a Cairo package manager that compiles Cairo projects. It depends on the compiler version to [compile](https://github.com/starkware-libs/cairo/blob/410069c5745800bab4fbd2f0f4ff0bbfc59209d6/crates/cairo-lang-starknet-classes/src/contract_class.rs#L49), so it is important to specify it.
4. Chain ID: To differentiate between Mainnet (`0x534e5f4d41494e`) and Sepolia (`0x534e5f5345504f4c4941`)
5. Cairo project source code

In order to validate Cairo, you must add the following config to `Scarb.toml`:

```toml
[[target.starknet-contract]]
casm = true
sierra = true
```

The Cairo project structure is as follows (assuming a `DECLARE` and `DEPLOY` to the network):

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

When you request verification from Multi-chain Verification Tool `/starknet/verifications` API, which will be released later, it compiles the code according to the compiler version, computes `class_hash` and `compiled_class_hash`, and compares the class hash value of the Starknet network with the compiled class hash value.

### Why do we need to verify two hash values?

To validate a smart contract written in Solidity on Ethereum, we compare one compiled bytecode result to the bytecode on the network. However, Starknet compares not one, but two hash values: `class_hash` and `compiled_class_hash`. [Class hash](https://docs.starknet.io/architecture-and-concepts/smart-contracts/class-hash/) and [Compiled class hash](https://docs.starknet.io/architecture-and-concepts/smart-contracts/compiled-class-hash/) are covered in detail in this document.

When a user sends a `DECLARE` transaction, both the `class_hash` and the `compiled_class_hash` are signed simultaneously. Sequencer performs a Sierra → CASM compilation and compares the resulting `compiled_class_hash` to the user-signed `compiled_class_hash`. If the sequencer is malicious, it also compares the `compiled_class_hash` value because it can get classes declared by CASM that are not related to Sierra.

### Reference

[https://docs.starknet.io/](https://docs.starknet.io/)  
[https://www.cairo-lang.org/](https://www.cairo-lang.org/)  
[https://book.cairo-lang.org/](https://book.cairo-lang.org/)  
[https://github.com/starkware-libs/cairo](https://github.com/starkware-libs/cairo)
