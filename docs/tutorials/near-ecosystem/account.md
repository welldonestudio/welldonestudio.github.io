---
title: NEAR Account Model
description: Learning about NEAR Account Model
---

# NEAR Account Model

## Introduction

NEAR Accounts have a unique model when compared to other blockchain ecosystems. In this tutorial, we learn more about the characteristics of NEAR Accounts with some hands-on practices.

:::tip Prerequisites

- Basic understanding of blockchain ecosystem.

:::

## Human-Readable Accounts

The **Human-Readable Account ID** is the primary characteristic of NEAR Accounts. The account ID in a typical blockchain uses public key hash values such as `0x71C7656EC7ab88b098defB751B7401B5f6d8976F`. NEAR’s Account ID, on the other hand, has names that people can read and understand, such as `welldone.near`, giving users a more user-friendly experience. Let’s take a closer look at how the Account model works in NEAR.

### Implicit Accounts

Implicit accounts are defined by a 64 character address, which correspond to a unique [ED25519](https://en.wikipedia.org/wiki/EdDSA) key pair(public key - private key). The implicit account ID is a lowercase hex representation of the pubic key.

- The **public key** in **base58**: `BGCCDDHfysuuVnaNVtEhhqeT4k9Muyem3Kpgq2U1m9HX`
- Refers to the i**mplicit account**: `98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de`

Now let's use `near-cli` and `near repl` to create our Implicit Accounts and see how accounts are created. If [near-cli](https://docs.near.org/tools/near-cli#installation) is not installed, please install it first.

Implicit Accounts correspond to a unique ED25519 key pair. So first, let's create a key pair locally. Please enter the following command in the terminal.

```bash
near generate-key
```

When you execute the above command, you will see a log indicating the account ID corresponding to the public key as shown below. The corresponding key pair is stored in `~/.found in near-credentials/testnet/{accountId}.json`. Let's see if the public key in the generated key pair really corresponds to the account ID.

Enter `near repl` in the terminal to open the REPL terminal and enter the following command.

```jsx
const pk = 'ed25519:publicKey';
nearAPI.utils.PublicKey.fromString(pk).data.hexSlice();
```

Then, you can see that the output is the same as the account ID value displayed in the previous `near generate-key` result log.

![account_1](./img/account_1.png 'account_1')

However, you will get the result **“Account not found”** if you serach for Account ID in [Explorer](https://explorer.testnet.near.org/). This is because only the [`Transfer`](https://nomicon.io/RuntimeSpec/Actions#transferaction) action creates an implicit account. If you transfer at least 0.001 NEAR tokens to that Account ID and search again, you will see that your account is discovered in Explorer.

![account_2](./img/account_2.png 'account_2')
![account_3](./img/account_3.png 'account_3')

### Named Accounts

**Named Accounts** refer to human-readable accounts like `welldone.near` and `welldone.testnet`. Named Accounts can also create sub-accounts, e.g. named accounts on the mainnet(e.g. `welldone.near`) are all sub-accounts of `near`, and named accounts on the testnet(e.g. `welldone.testnet`) are all sub-accounts of `testnet`. So how do you make accounts like `near`, `testnet`, and `aurora`?

Generally, Account ID in NEAR consists of characters with lengths ranging from 2 to 64, of which accounts with length 64 and lowercase hex characters a specific implicit account ID.

Accounts such as `near`, `testnet` are called **top-level accounts (TLA)**, and short-top-level accounts shorter than 32 in length, such as `near`, `testnet`, can only be created with the account ID `registrar`. Anyone can create long top-level accounts that are longer than 32.

After that, only the `near` account can create `welldone.near`, and only `welldone.near` can create `first.welldone.near`. At this time, the parent account can create a sub-account, but it does not share the access key, so it has no control.

Implicit accounts can be created without using other accounts, but named accounts can only be created with other accounts that already exist. To create an account on the mainnet, you must call the `create_account` method from the smart contract deployed in the `near` account, and to create an account on the testnet, you must call the `create_account` method from the smart contract deployed in the `testnet` account.

```bash
near call testnet create_account '{"new_account_id": "<account-name>.testnet", "new_public_key": "ed25519:<data>"}' --deposit 0.00182 --accountId <account-with-funds>
```

At this time, `account-name` should not overlap with the existing IDs, and `new_public_key` will be the Full Access Key of the account you create. Let's create named accounts using the public key of implicit accounts that we made in the previous practice.

![account_4](./img/account_4.png 'account_4')
![account_5](./img/account_5.png 'account_5')
![account_6](./img/account_6.png 'account_6')

Now, you can see that the named account has been created successfully and is searched in Explorer. And you can also see that the value passed by the `new_public_key` has been added as the Full Access Key.

## Permissions Through Access Keys

Using an account in a blockchain means using the account’s private key to sign a transaction. NEAR’s Accounts can have multiple access keys(public key - private key pair) and each access key has access to the Account. The access keys belong to the account and are stored in the form `account_id`, `public_key`. This has the advantage of giving limited authorization to third parties requiring permission to the account and being able to delete permissions at any time. An account can have multiple access keys, and a single access key can also be added to multiple accounts.

### Full Access Keys

There are two types of access keys in NEAR: **Full Access Key** and **Function Call Key**.

**Full Access Key** can sign any transactions that take any actions, and has the right to add or delete other access keys to the account and also delete the account itself. You will add the first Full Access Key when you create an account for the first time.

If you want to add a Full Access Key to the account you created earlier, you can simply add it with the command below using `near-cli`.

```bash
near add-key {account_id} {public_key}
```

:::tip WELLDONESTUDIO’s Tip
If you want to check the access keys stored in your account, enter the following command:

```bash
near keys {account_id}
```

Since `near-cli`’s default network is testnet, if you want to search on mainnet, specify the following environment variables:

```bash
export NEAR_ENV=mainnet
```

:::

### Function Call Keys

Function Call Keys only have permission to call non-payable method on contracts, i.e. methods that do not require you to attach NEAR Ⓝ. It allows you to specify the methods the key allows to calls, if you specify nothing it allows all non-payable methods.

The `near-cli` command to add Function Call Key is as follows:

```bash
near add-key {account_id} {public_key} --contract-id {contract_id} --method-names {method_name} --allowance {allowance}
```

Required arguments are `account_id`, `public_key`, `contract_id`. `method_name` allows permission to invoke all non-payable methods if omitted. `allowance` specifies the balance limit that can be paid when using the access key. That is, each time you call the method using the access key and pay the gas fee, the balance in the account and the allowance in the access key decrease together. You can pass `None` as an allowance to not limit the balance, and if the value is omitted, only view methods that do not cost the gas fee can be called.

Most of NEAR’s dApps generate a Function Call Key and request permission from the user. Therefore, if you use the non-payable function, you can proceed without additional interaction from the user, and if you want to send a token, you must ask the user for authorization once again.

## Simple to Develop Smart Contracts

An account is required to deploy smart contracts in NEAR. Only one smart contract can be deployed and activated per account, which is stored in the state of the account. Contracts can also have their own storage and execute transactions in the name of the account.

Smart Contracts need to be compiled into WebAssembly and NEAR currently supports Rust, Javascript, and Assemblyscript in languages that can write smart contracts. A detailed description of the contract for NEAR will be covered in the next tutorial.

## Mutable State (Storage)

Each account has an state associated where it stores its **metadata** and all the contract-related data **(contract's code + storage)**. Accounts' states can be **read by anyone**
 in the network, but only the account itself can change it. Also, each account **pays for their own storage** by locking a part of their balance proportional to the space used.

### Account’s Metadata

The state in the Account stores metadata. Check the state of the previously created account with following command:

```bash
near state {account_id}
```

![account_7](./img/account_7.png 'account_7')

- `amount`: The accounts balance expressed in yoctoNEAR (1 Ⓝ = 10^24yⓃ).
- `code_hash`: A hash of the contract’s Wasm file, filled with `1s` if no contract is present. In the example above, you can see that the value is filled with 1 because the contract is not deployed to the account.
- `storage_usage`: Amount of bytes used for storage by the account (code + metadata + data storage)

### Contract’s State

The state is also the place where both the **contract's code** and the **contract's storage** are stored. The contract's storage is organized as **key-value pairs** encoded using base64 and JSON serialization (or [Borsh](https://borsh.io/) in Rust).

You can check an accounts contract state by running the following command:

```bash
near view-state {account_id} --finality final --utf8 true
```

If the smart contract is not deployed in the account, an empty array will be returned, and if the contract is deployed, the value stored in the contract will be returned to the key-value pair as shown below.

![account_8](./img/account_8.png 'account_8')

### Paying for Storage

In order to pay for storage, accounts needs to lock a portion of their balance proportional to the amount of data being stored. If more data is added and the state increases, the account’s balance decreases, and if data is deleted and the state decreases, the account’s balance increases.

Currently(2022.10.17 NEAR [Docs](https://docs.near.org/concepts/basics/accounts/state)), it cost approximately **1 Ⓝ** to store **100kb** of data.

## Wrap-Up

We learned how the account model works in the NEAR ecosystem and created an account using near-cli. The characteristic of NEAR Account is

1. Human-Readable Account ID
2. Multiple Access Keys: Full Access Key & Function Call Key
3. Smart Contract deployed in Account
4. Has a State that stores metadata, code, and storage of contracts.

We hope that this tutorial will help those who are curious about NEAR’s Account model, and we will be back with a tutorial on NEAR’s contract next time.

---

### Reference

[https://docs.near.org/concepts/basics/accounts/model](https://docs.near.org/concepts/basics/accounts/model)

[https://nomicon.io/DataStructures/Account](https://nomicon.io/DataStructures/Account)

[https://docs.near.org/integrator/implicit-accounts](https://docs.near.org/integrator/implicit-accounts)
