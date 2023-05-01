---
keywords: [Injective sending transaction, dapp:signAndSendTransaction, Injective]
description: Sending Transactions in Injective
---

# Injective

:::tip
The following is an explanation of how to initiate a transfer transaction in Injective network by invoking the through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.
:::

To send a transaction in Injective network, it needs to be followed the steps below.

1. Detecting of Universal Provider (`window.dapp`)
2. Detecting the Injective network to which the user is linked
3. Import the Injective account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('injective', {
  method: 'dapp:signAndSendTransaction',
  params: [HEX_STRING_TX_DATA],
});
```

## 1. Returns

This method returns the transaction hash value as a `Promise` object of type string because you can send multiple transactions as well as one transaction.

```typescript
Promise<string[]>;
```

## 2. Params

```typescript
type HEX_STRING_TX_DATA = string;
```

- `HEX_STRING_TX_DATA` must be passed to the parameter in order for a transaction to be sent from Injective.

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('injective', { method: 'dapp:accounts' });
  const lcdClient = new ChainRestAuthApi(network.rest);
  const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);
  const sequence = fetchAccount.account.base_account.sequence;
  const accountNumber = fetchAccount.account.base_account.account_number;
  const chainId = 'injective-888';
  // creating a transaction
  const messages = MsgSend.fromJSON({
    amount: {
      amount: ethers.utils.parseUnits('0.001', 18).toString(),
      denom: 'inj',
    },
    srcInjectiveAddress: accounts,
    dstInjectiveAddress: accounts, // send to yourself
  });
  const txResult = createTransaction({
    pubKey: Buffer.from(pubKey.replace('0x', ''), 'hex').toString('base64'),
    chainId,
    message: messages.toDirectSign(),
    sequence,
    accountNumber,
  });
  // sending a transaction
  try {
    const response = await dapp.request('injective', {
      method: 'dapp:signAndSendTranssaction',
      params: [`0x${Buffer.from(txResult.signBytes).toString('hex')}`],
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
  const CHAIN_NAME = 'injective';
  const chainId = 'injective-888';
  const [accounts, setAccounts] = React.useState(null);
  const [pubKey, setPubKey] = React.useState(null);
  const [sequence, setSequence] = React.useState(null);
  const [accountNumber, setAccountNumber] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  const network = getNetworkInfo(Network.Testnet);

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      if (Object.keys(accounts).length === 0) {
        throw new Error('There is no accounts.');
      }
      if (dapp.networks.injective.chain !== 'injective-testnet') {
        throw new Error('Please change the network to Testnet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
      const lcdClient = new ChainRestAuthApi(network.rest);
      const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);
      setSequence(fetchAccount.account.base_account.sequence);
      setAccountNumber(fetchAccount.account.base_account.account_number);
      setPubKey(accounts[CHAIN_NAME].pubKey);
    } catch (error) {
      alert(error.message);
    }
  }
  
  async function handleSendTransaction() {
    const createTx = async () => {
      const messages = MsgSend.fromJSON({
        amount: {
          amount: ethers.utils.parseUnits('0.001', 18).toString(),
          denom: 'inj',
        },
        srcInjectiveAddress: accounts,
        dstInjectiveAddress: accounts, // send to yourself
      });
      const txResult = createTransaction({
        pubKey: Buffer.from(pubKey.replace('0x', ''), 'hex').toString('base64'),
        chainId,
        message: messages.toDirectSign(),
        sequence,
        accountNumber,
      });
      return {
        serializedTx: `0x${Buffer.from(txResult.signBytes).toString('hex')}`,
      };
    };

    const tx = await createTx();
    const response = await dapp.request(CHAIN_NAME, {
      method: 'dapp:signAndSendTransaction',
      params: [tx.serializedTx],
    });
    setTxHash(response[0]);
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
