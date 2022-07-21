:::tip
Celo developers make use of external libraries like [web3.js](https://web3js.readthedocs.io/en/v1.5.2/). The following is an explanation of how to initiate a transfer transaction by invoking the `eth sendTransaction` method through `dapp.request`. We recommend utilizing a dedicated library rather accessing the service directly if you want a greater degree of abstraction than the API provides.
:::

To send a transaction from a celo web application, on the dapp for example, it needs to be followed the steps below.

1. Detection of Dapp providers (window.dapp)
2. Detecting the celo network to which the user is linked
3. Import the celo account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:


```tsx
const response = await dapp.request('celo' ,{
    method: 'dapp:sendTransaction',
    params: [
      JSON.stringify(transactionParameters),
    ]
  });
const txHash = response.hash;
```
## 1. Returns
```typescript
Promise<{ hash: string }>
```
  * The same type of value above as transaction hash can be obtained.

## 2. Params
```typescript
interface TransactionParameters {
  from: string; // must match user's active address.
  to: string; // Required except during contract publications.
  gas?: string; // customizable by user
  gasPrice?: string; // customizable by user
  value?: string; // Only required to send ether to the recipient from the initiating external account.
  data?: string; // Optional, but used for defining smart contract creation and interaction.
};
```

* Required for smart contract creation. And this field is also used for specifying contract methods and their parameters.

### To [semi-optional] 
  * A hex-encoded chain address. Required for transactions with a recipient (all transactions except for contract creation).
  * Contract creation occurs when there is no to value but there is a data value.
### Gas Limit [optional] 
  * Optional parameter. Rarely useful to Dapp developers.

### Gas Price [optional] 
  * Optional parameter - best used on private blockchains.

### Value [optional] 
  * Hex-encoded value of the network's native currency to send. On the Main Ethereum network, this is ether, which is denominated in wei, which is 1e-18 ether.
  * Only required to send ether to the recipient from the initiating external account.
### data [semi-optional]
  * Required for smart contract creation.
  * This field is also used for specifying contract methods and their parameters. 

## 3. Example
```javascript 
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('celo', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['celo'].address,
    to: '0x502fB76a1A310d048973DeE209dC6c6ce572f7e4', // allthatnode
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };
  // sending a transaction
  try{
    const response = await dapp.request('celo' ,{
      method: 'dapp:sendTransaction',
      params: [
        JSON.stringify(transactionParameters),
      ]
    });
    const txHash = response.hash;
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
To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. [The following URL](https://celo.org/developers/faucet) will send you a tap of the celo testnet.

```jsx live 
function sendTransaction() {
  const CHAIN_NAME = 'celo';
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
        from: accounts,
        to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode
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