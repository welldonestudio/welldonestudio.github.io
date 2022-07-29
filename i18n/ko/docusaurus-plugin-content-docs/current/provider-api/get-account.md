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

* `dapp:accounts` 메서드는 해당 체인에 대한 `WalletAccount` 객체 배열을 반환합니다. `WalletAccount` 객체는 아래의 표시된 예시를 따릅니다.
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
* 추후 WalletAccounts 배열은 두 개 이상의 WalletAccount를 포함할 수 있도록 지원할 예정입니다.

## Parameter
### Chain 
* 체인 이름은 계정을 가져올 체인을 식별하는 데에 필요합니다. 
* [이곳](https://wds-code-docs.vercel.app/docs/provider-api/chain-names)에서 우리가 지원하는 다른 체인 이름들을 확인하세요.

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