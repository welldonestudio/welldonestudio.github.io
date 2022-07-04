# How to Sending a Transaction
## Description
Transactions are a formal action on a blockchain. They can involve a simple sending of tokens, creating a new smart contract, or changing state on the blockchain in any number of ways. They are always initiated by a signature from an external account, or a simple key pair.

In WELLDONE Wallet, using the `dapp.request` method directly, sending a transaction will involve composing an options object like this:    

```tsx
const response = await dapp.request(chainName ,{
    method: 'dapp:sendTransaction',
    params: [
      JSON.stringify(transactionParameters),
    ]
  });
const txHash = response.hash;
```
    
The following descriptions of [Request Values](#request-values) and [Return Values](#return-values) give you a detailed idea of what factors should be included in `chainName` and `transactionParameters`.

## Request Values {#request-values}

### 1. Chain Name

```typescript
type ChainName = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klay' | 'celo' | 'neon';
```
* Required to identify on which chain to send a transaction. In the ethereum case, It should be 'ethereum'. 
* Check other chain names that we support here.

### 2. Transaction Parameters

```typescript
interface TransactionParameters {
  from: string; // must match user's active address.
  to: string; // Required except during contract publications.
  gas: string; // customizable by user
  gasPrice: string; // customizable by user
  value?: string; // Only required to send ether to the recipient from the initiating external account.
  data?: string; // Optional, but used for defining smart contract creation and interaction.
};
```

* Required for smart contract creation. And this field is also used for specifying contract methods and their parameters.
#### To [semi-optional] 
  * A hex-encoded chain address. Required for transactions with a recipient (all transactions except for contract creation).
  * Contract creation occurs when there is no to value but there is a data value.
#### Gas Limit [optional] 
  * Optional parameter. Rarely useful to Dapp developers.

#### Gas Price [optional] 
  * Optional parameter - best used on private blockchains.

#### Value [optional] 
  * Hex-encoded value of the network's native currency to send. On the Main Ethereum network, this is ether, which is denominated in wei, which is 1e-18 ether.
  * Only required to send ether to the recipient from the initiating external account.
#### data [semi-optional]
  * Required for smart contract creation.
  * This field is also used for specifying contract methods and their parameters. 

## Return Values {#return-values}

```typescript
Promise<{ hash: string }>
```
  * You can get a `txHash` back.

## Basic Usage
```typescript
const accounts = await dapp.request('ethereum', { method: 'dapp:accounts' });
const chanName : ChainName = 'ethereum';
const transactionParameters : TransactionParameters = {
  from: accounts.address,
  to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
  gas: '0x76c0',
  gasPrice: '0x9184e72a000',
  value: '0x00',
  data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
};

const sendTransaction = async () => {
  // sending a transaction
  const response = await dapp.request(chainName ,{
    method: 'dapp:sendTransaction',
    params: [
      JSON.stringify(transactionParameters),
    ]
  });
  const txHash = response.hash;
}
```