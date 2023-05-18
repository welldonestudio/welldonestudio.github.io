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
  params: [JSON.stringify(transactionParameters)],
});
```

## 1. Returns

This method returns the transaction hash value as a `Promise` object of type string because you can send multiple transactions as well as one transaction.

```typescript
Promise<string[]>;
```

## 2. Params

The `dapp:signAndSendTransaction` method takes the transaction as HEX string type `HEX_STRING_TX_DATA`. However, Injective networks can take the transaction parameters as JSON string type.

```typescript
interface TransactionParameters {
  signerData: {
    accountNumber: string;
    sequence: string;
    chainId: string;
  };
  fee: {
    amount: [
      {
        denom: string;
        amount: string;
      },
    ];
    gas: string;
  };
  memo: string;
  msgs: [
    {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend';
      value: {
        fromAddress: string;
        toAddress: string;
        amount: [{ denom: string; amount: string }];
      };
    },
  ];
  sequence: string;
}
```

- The `value` depends on the type of `typeUrl` and the method of the contract you want to execute. The above parameters are examples of transaction types that send coins to other accounts.

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('injective', { method: 'dapp:accounts' });
  const chainId = 'injective-888';
  const lcdClient = new ChainRestAuthApi(network.rest);
  const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);
  const sequence = fetchAccount.account.base_account.sequence;
  const accountNumber = fetchAccount.account.base_account.account_number;
  // creating a transaction
  const const transactionParameters = {
    signerData: {
      accountNumber,
      sequence,
      chainId,
    },
    fee: {
      amount: [
        {
          denom: 'inj',
          amount: '90000000000000',
        },
      ],
      gas: '180000', // 180k
    },
    memo: '',
    msgs: [
      {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: accounts,
          toAddress: accounts, //allthatnode
          amount: [{ denom: 'inj', amount: '10000' }],
        },
      },
    ],
    sequence: `${sequence}`,
  };
  // sending a transaction
  try {
    const response = await dapp.request('injective', {
      method: 'dapp:signAndSendTranssaction',
      params: [JSON.stringify(transactionParameters)],
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
      const status = await dapp.request('injective', {
        method: 'status',
      });
      if (status.node_info.network !== chainId) {
        throw new Error('Please change to Cosmos Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
      const lcdClient = new ChainRestAuthApi(network.rest);
      const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);
      setSequence(fetchAccount.account.base_account.sequence);
      setAccountNumber(fetchAccount.account.base_account.account_number);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        signerData: {
          accountNumber,
          sequence,
          chainId,
        },
        fee: {
          amount: [
            {
              denom: 'inj',
              amount: '90000000000000',
            },
          ],
          gas: '180000', // 180k
        },
        memo: '',
        msgs: [
          {
            typeUrl: '/cosmos.bank.v1beta1.MsgSend',
            value: {
              fromAddress: accounts,
              toAddress: accounts, //allthatnode
              amount: [{ denom: 'inj', amount: '10000' }],
            },
          },
        ],
        sequence: `${sequence}`,
      };

      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:signAndSendTransaction',
        params: [JSON.stringify(transactionParameters)],
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
