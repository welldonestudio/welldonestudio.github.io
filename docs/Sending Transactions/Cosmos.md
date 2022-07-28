:::tip
Cosmos developers make use of external libraries like [CosmJS](https://cosmos.github.io/cosmjs/). The following is an explanation of how to initiate a transfer transaction by invoking the method through `dapp.request`. We recommend utilizing a dedicated library rather accessing the service directly if you want a greater degree of abstraction than the API provides.
:::

To send a transaction from a cosmos web application, on the dapp for example, it needs to be followed the steps below.

1. Detection of Dapp providers (window.dapp)
2. Detecting the Cosmos network to which the user is linked
3. Import the Cosmos account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('cosmos' ,{
    method: 'dapp:sendTransaction',
    params: [
      JSON.stringify(transactionParameters),
    ]
  });
const txHash = response;
```
## 1. Returns
```typescript
Promise<string>
```
  * The same type of value above as transaction hash can be obtained.

## 2. Params
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
      typeUrl: string;
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

* The parameters are described in detail at the [link](https://v1.cosmos.network/rpc/v0.41.4).

## 3. Example
```javascript 
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('cosmos', { method: 'dapp:accounts' });
  const sequence = '10';
  const chainId = 'vega-testnet';
  const transactionParameters = {
    signerData: {
      accountNumber: accounts,
      sequence,
      chainId,
    },
    fee: {
      amount: [
        {
          denom: 'uatom',
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
          toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode
          amount: [{ denom: 'uatom', amount: '10000' }],
        },
      },
    ],
    sequence: `${sequence}`,
  };
  // sending a transaction
  try{
    const response = await dapp.request('cosmos' ,{
      method: 'dapp:sendTransaction',
      params: [
        JSON.stringify(transactionParameters),
      ]
    });
    const txHash = response.transactionHash;
  } catch (error) {
    /* 
      {
        message: 'User denied transaction signature',
        code: 4001,
      }
    */
  }
}
```

To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. [The following URL](https://www.allthatnode.com/faucet/cosmos.dsrv) will send you a tap of the Cosmos testnet.

```jsx live 
function sendTransaction() {
  const CHAIN_NAME = 'cosmos';
  const sequence = '10';
  const chainId = 'vega-testnet';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
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
              denom: 'uatom',
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
              toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode
              amount: [{ denom: 'uatom', amount: '10000' }],
            },
          },
        ],
        sequence: `${sequence}`,
      };
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:sendTransaction',
        params: [JSON.stringify(transactionParameters)],
      });
      const txHash = response;

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