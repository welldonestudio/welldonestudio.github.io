---
sidebar_position: 3
keywords: [Methods, dapp:accounts, dapp:addChain, dapp:sendTransaction, dapp:getBalance]
description: Methods that dapp provider support
---

# Methods

:::info
**dapp provider** has the following methods.

- [dapp:accounts](#account)
- [dapp:addChain](#addChain)
- [dapp:sendTransaction](#sendTransaction)
- [dapp:getBalance](#getBalance)

:::

## 1. dapp:accounts {#account}

This method is used to request a wallet connection. A website can use this function to request a connection to your wallet, and if the user in the wallet approves the connection, the website can access your account. This approach asks for connections to all chains at the same time. In other words, if you make a request with `ethereum` in `chainName`, you will be granted access to the `cosmos` or other networks. If the webpage is already linked to your wallet, it imports the information from your account without asking for your additional authorization.

### Params

The method takes the following input argument as a `chainName`.

```javascript
type ChainName = 'celo' | 'cosmos' | 'ethereum' | 'klaytn' | 'near' | 'neon' | 'solana';

window.dapp.request(chainName: ChainName, { method: "dapp:accounts" })
```

### Returns

The method returns the `promise` object with an address and pubKey value with the given chain account. WELLDONE Wallet currently only supports one address/public key pair per chainID

```json
{ "ethereum": { "address": "0x....", "pubKey": "0x...." } }
```

### Example

This example is to query the account information of Ethereum from your WELLDONE Wallet.

```jsx live
function connect() {
  const [address, setAddress] = React.useState(null);
  const [pubKey, setPubKey] = React.useState(null);
  async function getAccounts() {
    // request connection to WELLDONE extension
    const accounts = await window.dapp.request('ethereum', {
      method: 'dapp:accounts',
    });
    // check if accounts exists
    if (Object.keys(accounts).length !== 0) {
      setAddress(accounts.ethereum.address);
      setPubKey(accounts.ethereum.pubKey);
    }
  }
  return (
    <>
      <Button onClick={getAccounts}>Connect Wallet</Button>
      {address && (
        <ResultTooltip style={{ background: '#3B48DF' }}>
          <b>address: </b> {address} <br />
          <b>pubKey: </b> {pubKey}
        </ResultTooltip>
      )}
    </>
  );
}
```

## 2. dapp:addChain {#addChain}

This method is to be utilized when adding other networks on the WELLDONE wallet. For the earlier release of WELLDONE wallet, it supports **Ethereum**, **Cosmos** and **Solana**. We are planning to support more networks for future releases.

:::tip
WELLDONE Studio operates [AddChain](https://addchain.welldonestudio.io) to add networks to your wallet, as well as the directly using `dapp:addChain` method. More details may be found [here](https://docs.welldonestudio.io/docs/add-chain).
:::

### Params

The method takes `chainName` and `chainData` that designates the network that you are going to add. See more information that you are required to pass on `params` for the following sections.

- [For Cosmos-based networks](https://docs.welldonestudio.io/docs/add-chain/developer-guide/cosmos)
- [For EVM-compatible networks](https://docs.welldonestudio.io/docs/add-chain/developer-guide/ethereum)
- [For Solana and other networks](https://docs.welldonestudio.io/docs/add-chain/developer-guide/solana)

```javascript
type ChainName = 'cosmos' | 'ethereum' | 'solana';

await dapp.request(chainName: ChainName, (
    method: "dapp:addChain",
    params: [chainData]
))
```

### Example

The following is a simple example that adds Ubiq network that is EVM compatible.

```jsx live
function addChain() {
  // Ethereum based chain parameter Sample - Ubiq
  const chainData = {
    chainId: '0x8',
    chainName: 'Ubiq',
    rpcUrls: ['https://rpc.octano.dev'],
    iconUrls: [''],
    nativeCurrency: {
      name: 'Ubiq Ether',
      symbol: 'UBQ',
      decimals: 18,
    },
    blockExplorerUrls: ['https://ubiqscan.io'],
  };

  async function addChain() {
    // before adding chain to wallet, you should connect to wallet first
    const accounts = await window.dapp.request('ethereum', {
      method: 'dapp:accounts',
    });
    // add chain to wallet
    const response = await window.dapp.request('ethereum', {
      method: 'dapp:addChain',
      params: [chainData],
    });
  }
  return <Button onClick={addChain}>Add Chain</Button>;
}
```

## 3. dapp:sendTransaction {#sendTransaction}

This is the method that sends the transaction. From simple token transfer to contract distribution and change the state of the blockchain, this method can be used.
The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet.

### Params

`CHAIN NAME` and `TRANSACTION_PARAMETER` are two parameters. `CHAIN_NAME` is the name of the network to which you wish to add, and `TRANSACTION_PARAMETER` is the value of converting the transaction to a string type. Because a transaction format differs by networks, WELLDONE Wallet executes the transaction by taking the input argument in string type then translate it to compatible to the targeted network.

```javascript
type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';
type TRANSACTION_PARAMETER = 'string';

const response = await dapp.request(CHAIN_NAME, {
  method: 'dapp:sendTransaction',
  params: [TRANSACTION_PARAMETER],
});
```

The following sections for each network provide details of what needs to be communicated to the `TRANSACTION_PARAMETER`.

- [Ethereum](https://docs.welldonestudio.io/docs/wallet/developer-guide/sending-transaction/ethereum)
- [Cosmos](https://docs.welldonestudio.io/docs/wallet/developer-guide/sending-transaction/cosmos)
- [Near](https://docs.welldonestudio.io/docs/wallet/developer-guide/sending-transaction/near)
- [Klaytn](https://docs.welldonestudio.io/docs/wallet/developer-guide/sending-transaction/klaytn)
- [Celo](https://docs.welldonestudio.io/docs/wallet/developer-guide/sending-transaction/celo)

### Returns

This method returns the transaction hash value as a Promise object of type string.

```typescript
Promise<string>;
```

### Example

The following is an example of sending a transaction on Ethereum network. A faucet is required to transmit a transaction. [The following URL](https://www.allthatnode.com/faucet/ethereum.dsrv) will send you a tap of the Ethereum Ropsten testnet token.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'ethereum';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      if (dapp.networks.ethereum.chain === '0x1') {
        throw new Error('Please change to Ethereum Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        from: accounts,
        to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
        gas: '0x76c0',
        gasPrice: '0x9184e72a000',
        value: '0x00',
        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:sendTransaction',
        params: [JSON.stringify(transactionParameters)],
      });
      const txHash = response.hash;

      setTxHash(txHash);
    } catch (error) {
      console.log(error);
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }

  return (
    <>
      {accounts ? (
        <>
          <Button onClick={handleSendTransaction} type="button">
            Send a Transaction
          </Button>
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts}
          </ResultTooltip>
        </>
      ) : (
        <>
          <Button onClick={handleGetAccount} type="button">
            Get Account
          </Button>
          <div>You have to get account first!</div>
        </>
      )}
      {txHash && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Transaction Hash:</b> {txHash}
        </ResultTooltip>
      )}
    </>
  );
}
```

## 4. dapp:getBalance {#getBalance}

This method returns the balance of the address.

### Params

This method takes the network and account information to query balance as an argument.

```javascript
type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';
type ACCOUNTS = string;

const response = await dapp.request(CHAIN_NAME, {
  method: 'dapp:getBalance',
  params: [ACCOUNTS],
});
const txHash = response.hash;
```

### Returns

The return value is differed from the networks that you are going to access.

- ethereum, klaytn, celo, neon, near, solana

  ```javascript
  Promise<string>
  ```

- cosmos
  ```javascript
  Promise<[{ ammout: string, denom: string }]>
  ```

### Example

This example is to query balance from the Ethereum account.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'ethereum';
  const [accounts, setAccounts] = React.useState(null);
  const [balance, setBalance] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });

      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleGetBalance() {
    try {
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:getBalance',
        params: [accounts],
      });

      setBalance(response);
    } catch (error) {
      console.log(error);
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }

  return (
    <>
      {accounts ? (
        <>
          <Button onClick={handleGetBalance} type="button">
            Get Balance
          </Button>
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts}
          </ResultTooltip>
        </>
      ) : (
        <>
          <Button onClick={handleGetAccount} type="button">
            Get Account
          </Button>
          <div>You have to get account first!</div>
        </>
      )}
      {balance && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Balance:</b> {balance}
        </ResultTooltip>
      )}
    </>
  );
}
```
