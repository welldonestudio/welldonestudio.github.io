---
sidebar_position: 2
keywords: [Methods, dapp:accounts, dapp:addChain, dapp:sendTransaction, dapp:getBalance]
description: Methods that Universal Provider support
---

# Methods

:::info
**Universal Providerr** has the following methods.

- [dapp:accounts](#account)
- [dapp:getBalance](#getBalance)
- [dapp:addChain](#addChain)
- [dapp:switchChain](#switchChain)
- [dapp:signMessage](#signMessage)
- [dapp:signTransaction](#signTransaction)
- [dapp:signAndSendTransaction](#signAndSendTransaction)

:::

## 1. dapp:accounts {#account}

This method is used to request a wallet connection. A website can use this function to request a connection to your wallet, and if the user in the wallet approves the connection, the website can access your account. This approach asks for connections to all chains at the same time. In other words, if you make a request with `ethereum` in `chainName`, you will be granted access to the `cosmos` or other networks. If the webpage is already linked to your wallet, it imports the information from your account without asking for your additional authorization.

### Params

The method takes the following input argument as a `chainName`.

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';

const account = await window.dapp.request(CHAIN_NAME, { method: "dapp:accounts" })
```

### Returns

The method returns the `Promise` object with an address and pubKey value with the given chain account. WELLDONE Wallet currently only supports one address/public key pair per chainID

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

## 2. dapp:getBalance {#getBalance}

This method returns the balance of the address.

### Params

This method takes the network and account information to query balance as an argument.

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type ACCOUNTS = string;

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:getBalance',
  params: [ACCOUNTS],
});
```

### Returns

The method returns the balance of the address as a string type `Promise` object.

```typescript
Promise<string>;
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
      const accounts = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });

      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleGetBalance() {
    try {
      const response = await window.dapp.request(CHAIN_NAME, {
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

## 3. dapp:addChain {#addChain}

This method is to be utilized when adding other networks on the WELLDONE wallet. For the earlier release of WELLDONE wallet, it supports **Ethereum**, **Cosmos** and **Solana**. We are planning to support more networks for future releases.

:::tip
WELLDONE Studio operates [AddChain](https://addchain.welldonestudio.io) to add networks to your wallet, as well as the directly using `dapp:addChain` method. More details may be found [here](https://docs.welldonestudio.io/add-chain).
:::

### Params

The method takes `chainName` and `chainData` that designates the network that you are going to add. See more information that you are required to pass on `params` for the following sections.

- [For Cosmos-based networks](https://docs.welldonestudio.io/add-chain/developer-guide/cosmos)
- [For EVM-compatible networks](https://docs.welldonestudio.io/add-chain/developer-guide/ethereum)
- [For Solana and other networks](https://docs.welldonestudio.io/add-chain/developer-guide/solana)

```javascript
type CHAIN_NAME = 'cosmos' | 'ethereum' | 'solana';

await window.dapp.request(chainName: ChainName, (
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

## 4. dapp:switchChain {#switchChain}

This is the method that switch the network in the chain.

### Params

The method takes `CHAIN_NAME` which is the name of the chain to change the network and `NETWORK_ID` of the network.

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type NETWORK_ID = string;

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:switchChain',
  params: [NETWORK_ID],
});
```

### Example

The following is an example of switching the network to Goerli Testnet in Ethereum.

```jsx live
function switchChain() {
  async function switchChain() {
    // before switching chain, you should connect to wallet first
    const accounts = await window.dapp.request('ethereum', {
      method: 'dapp:accounts',
    });
    // add chain to wallet
    const response = await window.dapp.request('ethereum', {
      method: 'dapp:switchChain',
      params: ['0x5'], // Goerli Testnet network ID
    });
  }
  return <Button onClick={switchChain}>Switch Chain</Button>;
}
```

## 5. dapp:signMessage {#signMessage}

This is the method for signing messages.

### Params

The method takes the name of the chain `CHAIN_NAME` and the message `MESSAGE` you want to sign as parameters in string type.

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type MESSAGE = string;

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:signMessage',
  params: [MESSAGE],
});
```

### Returns

The method returns the `Promise` object array including `signature` value that signed the transaction and the `publicKey` used for signing.

```typescript
Promise<[{ signature: string; publicKey: string }]>;
```

### Example

The following is an example of signing messages in Ethereum. You can verify returned signature using `Verify Signature` feature in [Etherscan](https://etherscan.io/verifiedSignatures#).

```jsx live
function signMessage() {
  const CHAIN_NAME = 'ethereum';
  const [accounts, setAccounts] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [signed, setSigned] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      const chainId = await window.dapp.request(CHAIN_NAME, {
        method: 'eth_chainId',
        params: [],
      });
      if (chainId !== '0x5') {
        throw new Error('Please change to Goerli Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME]);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSignMessage() {
    try {
      const response = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:signMessage',
        params: [message],
      });
      setSigned(response[0]);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessage = () => {
    setIsSubmit(true);
  };

  return (
    <>
      {accounts ? (
        <>
          {isSubmit ? (
            <Button onClick={handleSignMessage} type="button">
              Sign Message
            </Button>
          ) : (
            <>
              <Input
                value={message}
                onChange={handleChange}
                placeholder="Message to sign"
                style={{ marginRight: '8px' }}
              />
              <Button onClick={handleMessage} type="button">
                Set a Message
              </Button>
            </>
          )}
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts.address}
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
      {signed && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Signature:</b> {signed.signature}
        </ResultTooltip>
      )}
    </>
  );
}
```

## 6. dapp:signTransaction {#signTransaction}

This is the method for signing transactions.

### Params

The method takes the name of the chain `CHAIN_NAME` and the transaction `HEX_STRING_TX_DATA` you want to sign as parameters in string type. Because a transaction format differs by the network, WELLDONE Wallet takes the input transaction in HEX string type.

:::info
You can put the transaction objects as they are in EVM networks.
:::

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type HEX_STRING_TX_DATA = string;

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:signTransaction',
  params: [HEX_STRING_TX_DATA],
});
```

### Returns

The method returns the `Promise` object array including `signature` value that signed the transaction and the `publicKey` used for signing.

```typescript
Promise<[{ signature: string; publicKey: string }]>;
```

### Example

The following is an example of a signing a transaction in Ethereum.

```jsx live
function signTransaction() {
  const CHAIN_NAME = 'ethereum';
  const [accounts, setAccounts] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [signed, setSigned] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      const chainId = await window.dapp.request(CHAIN_NAME, {
        method: 'eth_chainId',
        params: [],
      });
      if (chainId !== '0x5') {
        throw new Error('Please change to Goerli Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME]);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSignTransaction() {
    try {
      const tx = {
        from: accounts.address,
        to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
        gas: '0x76c0',
        gasPrice: '0x9184e72a000',
        value: '0x00',
        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:signTransaction',
        params: [tx],
      });
      setSigned(response[0]);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <>
      {accounts ? (
        <>
          <Button onClick={handleSignTransaction} type="button">
            Sign Transaction
          </Button>
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts.address}
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
      {signed && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Signature:</b> {signed.signature}
        </ResultTooltip>
      )}
    </>
  );
}
```

## 7. dapp:signAndSendTransaction {#signAndSendTransaction}

This is the method that signs and sends the transaction. From simple token transfer to contract deployment and change the state of the blockchain, this method can be used. You can send multiple transactions as well as one transaction.
The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet.

### Params

`CHAIN NAME` and `HEX_STRING_TX_DATA` are two parameters. `CHAIN_NAME` is the name of the network to which you wish to add, and `HEX_STRING_TX_DATA` is the value of converting the transaction to a HEX string type. Because a transaction format differs by networks, WELLDONE Wallet executes the transaction by taking the input argument in hex string type then translate it to compatible to the targeted network.

:::info
You can put the transaction objects as they are in EVM networks.
:::

```javascript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type HEX_STRING_TX_DATA = 'string';

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:signAndSendTransaction',
  params: [HEX_STRING_TX_DATA],
});
```

The following sections for each network provide details of what needs to be communicated to the `HEX_STRING_TX_DATA`.

- [Ethereum](https://docs.welldonestudio.io/wallet/developer-guide/sending-transaction/ethereum)
- [Cosmos](https://docs.welldonestudio.io/wallet/developer-guide/sending-transaction/cosmos)
- [NEAR](https://docs.welldonestudio.io/wallet/developer-guide/sending-transaction/near)
- [Klaytn](https://docs.welldonestudio.io/wallet/developer-guide/sending-transaction/klaytn)
- [Celo](https://docs.welldonestudio.io/wallet/developer-guide/sending-transaction/celo)

### Returns

This method returns the transaction hash value as a `Promise` object of type string because you can send multiple transactions as well as one transaction.

```typescript
Promise<string[]>;
```

### Example

The following is an example of sending a transaction on Ethereum network. A faucet is required to transmit a transaction. You can request faucet through the FAUCET tab in the wallet.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'ethereum';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);

  async function handleGetAccount() {
    try {
      const accounts = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      const chainId = await window.dapp.request(CHAIN_NAME, {
        method: 'eth_chainId',
        params: [],
      });
      if (chainId !== '0x5') {
        throw new Error('Please change to Goerli Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const tx = {
        from: accounts,
        to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
        gas: '0x76c0',
        gasPrice: '0x9184e72a000',
        value: '0x00',
        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await window.dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [tx],
      });
      const txHash = response[0];

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
