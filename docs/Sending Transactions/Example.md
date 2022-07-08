# Example

<!-- This is a live example where you can sendTransaction by chain. -->
아래의 live etitor를 실행시킨 것과 같이, 트랜젝션을 보낼 때엔 해당 지갑 주소에 연결되어 있는 네트워크로 자동 연결됩니다.
transaction을 보내기 이전에 메인넷에 트랜젝션을 보낼 것인지, 테스트넷에 트랜젝션을 보낼 것인지 미리 고려해두어야 합니다.

```jsx live 
function sendTransaction() {
  const [accounts, setAccounts] = React.useState(null);
  const [chainName, setChainName] = React.useState();

  React.useEffect(()=>{
    setChainName('ethereum');
  },[])

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(chainName, {
        method: 'dapp:accounts',
      });

      setAccounts(accounts[chainName].address);
      alert('Get Account successful!');
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        Signature: accounts,
        Recipient: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
        gas: '0x76c0',
        gasPrice: '0x9184e72a000',
        value: '0x00',
        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await dapp.request(chainName, {
        method: 'dapp:sendTransaction',
        params: [JSON.stringify(transactionParameters)],
      });
      const txHash = response.hash;

      alert(`txHash : ${txHash}`);
    } catch (error) {
      console.log(error);
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }

  const handleChainChange = (e) => {
    setChainName(e.target.value);
  };

  return (
    <>
      {accounts ? (
        <>
          <button onClick={handleSendTransaction} type="button">
            Send a Transaction
          </button>
        </>
      ) : (
        <>
          <button onClick={handleGetAccount} type="button">
            Get Account
          </button>
          <div>You have to get account first!</div>
        </>
      )}
      <div>
        Current Chain : <b>{chainName}</b>
      </div>
      <select onChange={handleChainChange}>
        <option value="ethereum">ethereum</option>
        <option value="klaytn">klaytn</option>
        <option value="celo">celo</option>
        <option value="neon">neon</option>
        <option value="cosmos">cosmos</option>
      </select>
    </>
  );
}
```

## Ethereum
```javascript 
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('ethereum', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['ethereum'].address,
    to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };

  // sending a transaction
  try{
    const response = await dapp.request('ethereum' ,{
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

## Klaytn
```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('klaytn', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['klaytn'].address,
    to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };

  // sending a transaction
  try{
    const response = await dapp.request('klaytn' ,{
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

## Celo
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

## Neon
```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('neon', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['neon'].address,
    to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786', //where . . ?
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };

  // sending a transaction
  try{
    const response = await dapp.request('neon' ,{
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

## Solana
[https://docs.solana.com/developing/clients/javascript-reference](https://docs.solana.com/developing/clients/javascript-reference)
```javascript
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';

const getSerializedTransaction = async (accounts) => {
  try {
    const solana = new Connection(clusterApiUrl('devnet'), 'confirmed');

    const fromPubkey = new PublicKey(accounts['solana']?.address);
    const toPubkey = new PublicKey('BnBydTNPrTwDz4ZSkhJiGiSZwakPQFVeN8rgdAS2Yc7F'); // allthatnode 
    const { blockhash } = await solana.getLatestBlockhash();

    const transaction = new Transaction({
      recentBlockhash: blockhash,
      feePayer: fromPubkey,
    }).add(
      SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: LAMPORTS_PER_SOL / 100,
      }),
    );

    return transaction.serialize({ verifySignatures: false }).toString('hex');
  } catch (error) {
    /* error */
  }
};

const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('solana', { method: 'dapp:accounts' });
  const serializedTransaction = await getSerializedTransaction(accounts);

  // sending a transaction
  try{
    const response = await dapp.request('solana' ,{
      method: 'dapp:sendTransaction',
      params: [
        [`0x${serializedTransaction}`]
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

## Cosmos
```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('cosmos', { method: 'dapp:accounts' });
  const sequence = '';
  const chainId = 'vega-testnet';

  const transactionParameters = {
    signerData: {
      accountNumber: currentAccount['cosmos']?.address,
      sequence,
      chainId,
    },
    // { amount: [{ amount: "5000", denom: "uatom" }], gas: "200000" },
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
          fromAddress: currentAccount['cosmos']?.address,
          toAddress: 'cosmos1504ydgffhgke5y60xafjnlwnwzxhr9emvk9fgh',
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

## Near
```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('near', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['near'].address,
    to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };

  // sending a transaction
  try{
    const response = await dapp.request('near' ,{
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



