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

* The `dapp:accounts` method returns an array of the `WalletAccount` object for that chain. `WalletAccount` object follows like the examples shown below.
* Ethereum
```javascript
const accountsEthereum = await dapp.request('ethereum', { method: 'dapp:accounts' });

{ 
	ethereum: {
		address: "cosmos1cmlp5vnvq54jkx89ju6yv48mp85m5rzer27xwh"
		pubKey: "Asye4JL/+Qd78NGrjErwMM/M07/lWJdw1jFVV0DO/YWc"
	}
}
```
* Cosmos
```javascript
const accountsCosmos = await dapp.request('cosmos', { method: 'dapp:accounts' });

{ 
	cosmos: {
		address: "cosmos1cmlp5vnvq54jkx89ju6yv48mp85m5rzer27xwh"
		pubKey: "Asye4JL/+Qd78NGrjErwMM/M07/lWJdw1jFVV0DO/YWc"
	}
}
```

* NEAR
```javascript
const accountsNear = await dapp.request('near', { method: 'dapp:accounts' });

{ 
	near: {
		address: "cosmos1cmlp5vnvq54jkx89ju6yv48mp85m5rzer27xwh"
		pubKey: "Asye4JL/+Qd78NGrjErwMM/M07/lWJdw1jFVV0DO/YWc"
	}
}
```

* Solana
```javascript
await dapp.request('solana', { method: 'dapp:accounts' });
{ 
	solana: {
		address: "7UmaHZK63vNpkGTsMh8R8mf8hpKAQfUVhizH1QLa5hMo"
		pubKey: "7UmaHZK63vNpkGTsMh8R8mf8hpKAQfUVhizH1QLa5hMo"
	}
}
```

* Celo
```javascript
const celo = await dapp.request('celo', { method: 'dapp:accounts' });

{ 
	celo: {
		address: "0x35fc5bd4d1f20cc8cb9b07afa61316803403c462"
		pubKey: "0x03d2bb960139dc3965e582b10861f7ceb918ec1a48386b876af18ed6b31ed4afcd"
	}
}
```
* In the future, the WalletAccounts array may contain more than one WalletAccount.

## Parameter
### Chain 
* Chain name. Required to identify on which chain to get accounts.
* Check other chain names that we support [here](https://wds-code-docs.vercel.app/docs/provider-api/chain-names).

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