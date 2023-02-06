---
keywords: [Ethereum sendTransaction, dapp:sendTransaction, Ethereum]
description: Sending Transactions in Ethereum
---

# Ethereum

:::tip

Ethereum developers make use of external libraries like [ethers](https://docs.ethers.io/v5/). The following is an explanation of how to initiate a transfer transaction by invoking the `eth_sendTransaction` method through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the API provides.
:::

To send a transaction in Ethereum network, it needs to be followed the steps below.

1. Detecting of Universal Provider (`window.dapp`)
2. Detecting the Ethereum network to which the user is linked
3. Import the Ethereum account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('ethereum', {
  method: 'dapp:signAndSendTransaction',
  params: [TransactionParameters],
});
```

## 1. Returns

This method returns the transaction hash value as a `Promise` object of type string because you can send multiple transactions as well as one transaction.

```typescript
Promise<string[]>;
```

## 2. Params

The `dapp:signAndSendTransaction` method takes the transaction as HEX string type `HEX_STRING_TX_DATA`. However, EVM networks can take the `eth_sendTransaction` parameters as it is. In other words, you can put the transaction objects in the parameters as they are.

```typescript
interface TransactionParameters {
  from: string;
  to: string;
  gas?: string; // overwritten by WELLDONE Wallet
  gasPrice?: string; // overwritten by WELLDONE Wallet
  value?: string;
  data: string;
}
```

- **from** : The address the transaction is sent from.

- **to** : (optional when creating new contract) The address the transaction is directed to.

- **gas** : (optional) Integer of the gas provided for the transaction execution. It will return unused gas.

- **gasPrice** : (optional) Integer of the gasPrice used for each paid gas, in Wei.

- **value** : (optional) Integer of the value sent with this transaction, in Wei.

- **data** : The compiled code of a contract OR the hash of the invoked method signature and encoded parameters.

:::note

- The `gas` and `gasPrice` fields are overwritten by the WELLDONE Wallet internal logic.

:::

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('ethereum', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['ethereum'].address,
    to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };
  // sending a transaction
  try {
    const response = await dapp.request('ethereum', {
      method: 'dapp:signAndSendTransaction',
      params: [transactionParameters],
    });
    const txHash = response[0];
  } catch (error) {
    /* 
      {
        message: 'User denied transaction signature',
        code: 4001,
      }
    */
  }
};
```

To complete the transaction, follow the steps outlined below. The testnet token is required to transmit a transaction. You can request faucet through the FAUCET tab in the wallet.

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
      if (Object.keys(accounts).length === 0) {
        throw new Error('There is no accounts.');
      }
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
      const transactionParameters = {
        from: accounts,
        to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
        value: '0x00',
        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [transactionParameters],
      });
      const txHash = response[0];

      setTxHash(txHash);
    } catch (error) {
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
