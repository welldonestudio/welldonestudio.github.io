# welldone.getAccount(args)

```javascript
interface WalletAccount {
    name: string;
    chain: string;
    address: string;
    publicKey: string;
    path: {
      type: number;
      account: number;
      index: number;
    };
    tokens: {
      name: string;
      ticker: string;
      address?: string;
    }[];
}

getAccount(chain: string): Promise<WalletAccount[]>
```

* The `window.welldone.getAccount()` will return an array of the `WalletAccount` object for that chain. `WalletAccount` object includes address string.
* In the future, the WalletAccounts array may contain more than one WalletAccount. If the first WalletAccount in the returned array isn't the WalletAccount you expected, you should notify the user.

## Parameter
### Chain 
* Chain name. Required to identify on which chain to get accounts.
* Check other chain names that we support here.

### Example
```javascript
<button class="connectWalletButton">Connect Wallet</button>
<button class="getAccountButton">Get Account</button>
const connectWalletButton = document.querySelector('.connectWalletButton');
const getAccountButton = document.querySelector('.getAccountButton');

let accounts = [];

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