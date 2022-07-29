:::note
Juno is an interoperable smart contract network created with the Cosmos SDK. A detailed description of Juno can be found at the official [docs] (https://docs.junonetwork.io/juno/readme).
:::
## Params
```
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

      };
    },
  ];
  sequence: string;
}
```
Pass `/cosmwasm.wasm.v1.MsgExecuteContract` to the `typeUrl` to send a transaction that executes a contract, and `/cosmos.bank.v1beta1.sg` to send a transaction that sends a token.
The `value` that requires also depends on the type of `typeUrl` and the type of contract methods you want to execute.

## Example
Here is an example of interacting with the deployed Counter contract on the Juno Testnet `uni-3`. On the [Repository] (https://github.com/DSRV-DevGuild/cosmwasm-counter-example), you may find the contract code. You must pay for gas to execute a transaction that alters the state of the contract. Refer to the following link and request a test token on [faucet] (https://docs.junonetwork.io/validators/joining-the-testnets#get-some-testnet-tokens)) in advance.

The code that runs a transaction using a contract `increment` function is shown in the example below. Since the contract is executed to modify the internal state, it can be observed that `/cosmwasm.wasm.v1.MsgExecuteContract` is included in the `typeUrl`. The `increment` method increments the counter value within the contract by the `count` value.

Prior to sending the transaction, click the **Send a Transaction** button to establish a connection to your wallet.

```jsx live 
function sendTransaction() {
  const CHAIN_NAME = 'juno';
  const sequence = '10';
  const chainId = 'uni-3';
  const contractAddress = "juno1yfp9zyx9zhqe77d05yqjx3ctqjhzha0xn5d9x8zxcpp658ks2hvqlfjt72";
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  // connect to wallet
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
  // execute the contract
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
              amount: '1000000',
            },
          ],
          gas: '18000000', // 180k
        },
        memo: '',
        msgs: [
          {
            typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
            value: MsgExecuteContract.fromPartial({
                sender: accounts,
                contract: contractAddress,
                msg: toBase64(toUtf8(JSON.stringify({
                  "increment" : {
                    "count": 5
                  }
                })))
            }),
          },
        ],
        sequence: `${sequence}`,
      };
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:sendTransaction',
        params: [JSON.stringify(transactionParameters)],
      });
      console.log(response);
      const txHash = response

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