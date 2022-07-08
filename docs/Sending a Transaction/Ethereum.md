* Once your dApp is connected to WELLDONE Wallet, the user can permit the webpage to send a transaction. A transaction can involve a simple sending token, creating a new smart contract, or changing a state on the blockchain.

## Sending Transaction
```javascript
const transactionParameters = {
  from: accounts?.address,
  to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
  gas: '0x76c0',
  gasPrice: '0x9184e72a000',
  value: '0x00',
  data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198'
};

dapp.request('ethereum',{
	method: 'dapp:sendTransaction',
	params: [
		JSON.stringify(transactionParameters),
	]
});
```
### Transaction Parameters
### Chain
### Example

* When the `window.welldone.sendTransaction()` is called, a transaction will be created. After the transaction is created, the user is asked to sign and send the transaction.
* This promise-returning function resolves with a hash when the user has allowed the send transaction request. And it will reject with an error if the user denies the request or closes the popup.

## Transaction Parameters
```javascript
const response = await window.welldone.sendTransaction(
  'ethereum',
  '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  '0x6d6b337a53B6787A480E96B07B1Fe2DDaBEAB504',
  '0x00',
);


const txHash = response.hash;
```

## Chain 
* Chain name. Required to identify on which chain to send a transaction. In the ethereum case, It should be 'ethereum'. Check other chain names that we support here.

## Data 
* Required for smart contract creation. And this field is also used for specifying contract methods and their parameters.
* To [semi-optional] 
  * A hex-encoded Ethereum address. Required for transactions with a recipient (all transactions except for contract creation).
  * Contract creation occurs when there is no to value but there is a data value.
* Value [optional] 
  * Hex-encoded value of the network's native currency to send. On the Main Ethereum network, this is ether, which is denominated in wei, which is 1e-18 ether.
  * Only required to send ether to the recipient from the initiating external account.

## Example

```javascript
<button class="connectWalletButton">Connect Wallet</button>
<button class="getAccountButton">Get Account</button>
<button class="sendTxButton">Send Transaction</button>
const connectWalletButton = document.querySelector('.connectWalletButton');
const getAccountButton = document.querySelector('.getAccountButton');
const sendTxButton = document.querySelector('.sendTxButton');

let accounts = [];

sendTxButton.addEventListener('click', async () => {
    try {
      const response = await window.welldone.sendTransaction(
        'ethereum',
        '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
        '0x6d6b337a53B6787A480E96B07B1Fe2DDaBEAB504',
      );
      const txHash = response.hash;
    } catch (error) {
      // {message: 'User rejected sending transaction' || 'User closed the popup'}
    }
});

getAccountButton.addEventListener('click', async () => {
    try {
      const accounts = await window.welldone.getAccount('ethereum');
      const account = accounts[0];
      const selectedAddress = account.address
    } catch (error) {
      // {message: 'Didn't be connected to wallet yet'}
    }
});

connectWalletButton.addEventListener('click', async () => {
    try {
      await window.welldone.connectWallet();
    } catch (error) {
      // {message: 'User rejected the connection' || 'User closed the popup'}
    }
});
```