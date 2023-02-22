---
keywords: [Solana sendTransaction, dapp:sendTransaction, Solana]
description: Sending Transactions in Solana
---

# Solana

:::tip
The following is an explanation of how to initiate a transfer transaction in Solana network by invoking the through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.
:::

To send a transaction in Solana network, it needs to be followed the steps below.

1. Detecting of Universal Provider (`window.dapp`)
2. Detecting the Solana network to which the user is linked
3. Import the Solana account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('solana', {
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

- `HEX_STRING_TX_DATA` must be passed to the parameter in order for a transaction to be sent from Solana.

## 3. Example

```javascript
const getSerializedTransaction = async (accounts) => {
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
  const pubKey = new PublicKey(accounts.pubKey);
  const RecentBlockHash = await connection.getLatestBlockhash();

  const transaction = new Transaction({
    /* new blockHash */
    blockhash: RecentBlockHash.blockhash,
    lastValidBlockHeight: RecentBlockHash.lastValidBlockHeight,
    feePayer: pubKey,
  });

  transaction.add(
    SystemProgram.transfer({
      fromPubkey: pubKey,
      lamports: Number(0.1) * LAMPORTS_PER_SOL,
      toPubkey: pubKey, // send to yourself
    }),
  );
  return transaction.compileMessage().serialize().toString('hex');
};

const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('solana', { method: 'dapp:accounts' });
  const HEX_STRING_TX_DATA = await getSerializedTransaction(accounts['solana']);
  // sending a transaction
  try {
    const response = await dapp.request('solana', {
      method: 'dapp:signAndSendTransaction',
      params: [
        // use serialized transaction
        [`0x${HEX_STRING_TX_DATA}`],
      ],
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
  const CHAIN_NAME = 'solana';
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
      setAccounts(accounts[CHAIN_NAME]);
    } catch (error) {
      alert(error.message);
    }
  }

  const getSerializedTransaction = async () => {
    try {
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
      const pubKey = new PublicKey(accounts.pubKey);
      const RecentBlockHash = await connection.getLatestBlockhash();

      const transaction = new Transaction({
        /* new blockHash */
        blockhash: RecentBlockHash.blockhash,
        lastValidBlockHeight: RecentBlockHash.lastValidBlockHeight,
        feePayer: pubKey,
      });

      transaction.add(
        SystemProgram.transfer({
          fromPubkey: pubKey,
          lamports: Number(0.1) * LAMPORTS_PER_SOL,
          toPubkey: pubKey, // send to yourself
        }),
      );

      return transaction.compileMessage().serialize().toString('hex');
    } catch (error) {
      /* error */
      console.log(error);
    }
  };

  async function handleSendTransaction() {
    try {
      const HEX_STRING_TX_DATA = await getSerializedTransaction();
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [`0x${HEX_STRING_TX_DATA}`],
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
      {txHash && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Transaction Hash:</b> {txHash}
        </ResultTooltip>
      )}
    </>
  );
}
```
