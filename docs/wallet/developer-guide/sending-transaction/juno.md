---
keywords: [Juno sendTransaction, dapp:signAndSendTransaction, Juno]
description: Sending Transactions in Juno
---

# Juno

:::tip
The following is an explanation of how to initiate a transfer transaction in Juno network by invoking the through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.
:::

To send a transaction in Juno network, it needs to be followed the steps below.

1. Detecting of Universal Provider (`window.dapp`)
2. Detecting the Juno network to which the user is linked
3. Import the Juno account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('juno', {
  method: 'dapp:signAndSendTransaction',
  params: [JSON.stringify(transactionParameters)],
```

## 1. Returns

This method returns the transaction hash value as a `Promise` object of type string because you can send multiple transactions as well as one transaction.

```typescript
Promise<string[]>;
```

## 2. Params

The `dapp:signAndSendTransaction` method takes the transaction as HEX string type `HEX_STRING_TX_DATA`. However, Juno networks can take the transaction parameters as JSON string type.

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
  const accounts = await dapp.request('juno', { method: 'dapp:accounts' });
  const sequence = '10';
  const chainId = 'vega-testnet';
  const transactionParameters = {
    signerData: {
      accountNumber: accounts['juno'].address,
      sequence,
      chainId,
    },
    fee: {
      amount: [
        {
          denom: 'ujunox',
          amount: '10000',
        },
      ],
      gas: '180000', // 180k
    },
    memo: '',
    msgs: [
      {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: accounts['juno'].address,
          toAddress: accounts['juno'].address, //allthatnode
          amount: [{ denom: 'ujunox', amount: '10000' }],
        },
      },
    ],
    sequence: `${sequence}`,
  };
  // sending a transaction
  try {
    const response = await dapp.request('juno', {
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
  const CHAIN_NAME = 'juno';
  const sequence = '10';
  const chainId = 'uni-5';
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
      const status = await dapp.request('juno', {
        method: 'status',
      });
      if (status.node_info.network !== 'uni-5') {
        throw new Error('Please change to Juno Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        signerData: {
          accountNumber: accounts,
          sequence,
          chainId,
        },
        fee: {
          amount: [
            {
              denom: 'ujunox',
              amount: '10000',
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
              toAddress: accounts, //send to yourself
              amount: [{ denom: 'ujunox', amount: '10000' }],
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
