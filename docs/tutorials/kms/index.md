---
title: KMS
description: Sending Transactions using @dsrv/kms
---

# @dsrv/kms

<div>
  <span className='author-sm'>November 11, 2022</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/Nahee-Park' target='_blank'><img src='https://avatars.githubusercontent.com/u/81923229?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Nahee Park</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Sign Transaction General

:::info
We'd like to look at the conceptual information contained in transaction signatures before moving on to the tutorial on sending transactions by chain using the [@dsrv/kms](https://www.npmjs.com/package/@dsrv/kms) package.
:::

### 1. About Encryption

Encryption is a method used to hide sensitive information from prying eyes and prevent unauthorized access, as well as to validate the validity of published papers. In blockchain, asymmetric key cryptography is a term that describes the usage of various keys for encryption and decoding. The two distinct keys are referred to as private keys and public keys, which is also known as public-key encryption. Then, how do these encryption techniques function to verify the legitimacy of documents? Let's examine the following example.
![kms-tutorial](./img/kms-tutorial.png 'kms-tutorial')

1. Using an asymmetric technique, Alice creates a pair of key pairs. - Alice can validate her identity using a public key.
2. Alice hashes the plaintext to send and reduces it to a predetermined length.
   - There are items in the plaintext that identify the author.
   - Public keys are contained in the item.
3. Utilize Alice's private key to sign the sentence's hash.
   - Alice can then obtain the sentence's signature.
4. Alice delivers a signed message(plaintext and sentence's signature) to Bob.
5. Using the signature and the public key in plaintext, Bob may decrypt the plaintext again and retrieve the hash value.
   - At this stage, Bob can be certain that Alice created the phrase if he or she has the same hash value as the hash value obtained through decryption.

This public key strategy's primary feature is that messages signed exclusively using Alice's private key can only be unlocked using Alice's public key. Since Alice's public key may be used to decrypt messages, it is possible to tell whether or not someone else signed and sent the message because the original content will not display correctly.

### 2. Encryption used for transaction transmission

So how does blockchain use the asymmetric encryption technology that establishes authenticity stated above? When sending transactions on the blockchain, encryption is primarily used to verify the legitimacy of the transaction. If a user requests that money be transferred from Alice's account to Bob's account via a blockchain transaction, the blockchain node must be able to confirm that the user is the rightful owner of Alice's account. Let's examine the examples below to help you grasp this.

1. A user encrypts a transaction statement by signing it with a private key and transferring money from their account to Bob's account.
   - By signing the transaction, you can collect signatures.
2. Transmits signed transactions to nodes in the third party.
3. The node will now verify the legitimacy of the signed transaction.
   - To decode the transaction, the node uses Alice's public key since it believes the author to be a transaction signed by Alice.
   - You can tell if a transaction is genuine by comparing the transaction text that was decrypted using Alice's public key to the original transaction.

If you look at the sdk of the chains, each transaction has its own serialize and deserialize routines. All blockchains contain serialize standards that turn transactions into byteArray. Before signing, the ByteArray that results from serializing the transaction is just plain text. The private and public keys in your wallet serve as the signature keys and the address of the blockchain that you control.

## Tutorial

:::info
In this lesson, we'll look at using the [@dsrv/kms](https://www.npmjs.com/package/@dsrv/kms) package to transfer transactions in chains. Install [@dsrv/kms](https://www.npmjs.com/package/@dsrv/kms) first by running the following command.
:::

```bash
# using npm
npm install @dsrv/kms

# using yarn
yarn add @dsrv/kms
```

Each chain has its own individual procedure for using `@dsrv/kms` to transmit transactions, however most chains adhere to a standard procedure.

1. Using SDK, generate raw transactions for each chain.
2. Obtain a signature by using the `signTx` method of `@dsrv/kms`.
3. 3. Combine the raw transaction produced earlier with the signature produced by `@dsrv/kms` to create a signed transaction.
4. The signed transaction is sent across the SDK by chain.

Sending transactions by chain is explained in great detail in the Chain by section.

:::tip
For individuals having a foundational understanding of HTML, CSS, and JavaScript, this tutorial is advised.
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
