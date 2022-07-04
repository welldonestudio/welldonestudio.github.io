# Example
## Live Example 
This is a live example where you can sendTransaction by chain.

```jsx live
function sendTransaction() {
  const [accounts, setAccounts] = React.useState(null);
  const [chainName, setChainName] = React.useState('ethereum');

  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(chainName, {
        method: 'dapp:accounts',
      });

      alert('Get Account successful!');
      setAccounts(accounts[chainName].address);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        from: accounts,
        to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
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
          <button onClick={handleSendTransaction}>Send a Transaction</button>
          <div>
            Current Chain : <b>{chainName}</b>
          </div>
          <select onChange={handleChainChange}>
            <option value="ethereum">ethereum</option>
            <option value="cosmos">cosmos</option>
            <option value="near">near</option>
            <option value="solana">solana</option>
            <option value="klay">klay</option>
            <option value="celo">celo</option>
            <option value="neon">neon</option>
          </select>
        </>
      ) : (
        <>
          <button onClick={handleGetAccount}>Get Account</button>
          <div>You have to get account first!</div>
        </>
      )}
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
    to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
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

## Cosmos
```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('cosmos', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['cosmos'].address,
    to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };

  // sending a transaction
  try{
    const response = await dapp.request('cosmos' ,{
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

## Solana
```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('solana', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['solana'].address,
    to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };

  // sending a transaction
  try{
    const response = await dapp.request('solana' ,{
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

## Klay
```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('klay', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['klay'].address,
    to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };

  // sending a transaction
  try{
    const response = await dapp.request('klay' ,{
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
    to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
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
    to: '0x91ac88FF3d5583d887BFb5BCB599a3E4164b3786',
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