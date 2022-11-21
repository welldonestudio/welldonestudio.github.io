---
title: Execute Near Smart Contract
description: Universal Provider를 사용하여 니어 컨트랙트 실행하기
---

# Universal Provider를 사용하여 니어 컨트랙트 실행하기

<div>
  <span className='author-sm'>September 8, 2022</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/Yoon-Suji' target='_blank'><img src='https://avatars.githubusercontent.com/u/70956926?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Suji Yoon</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Example Code

```jsx live
function increment() {
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  const [contractAddress, setContractAddress] = React.useState(null);
  const [isSubmit, setIsSubmit] = React.useState(false);

  async function handleGetAccount() {
    const account = await dapp.request('near', {
      method: 'dapp:accounts',
    });
    setAccounts(account['near']);
  }

  async function handleSendTransaction() {
    const rpc = 'https://near-testnet-rpc.allthatnode.com:3030';
    const provider = new providers.JsonRpcProvider(rpc);
    const accessKey = await provider.query(`access_key/${accounts.address}/${accounts.pubKey}`, '');
    const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);

    const actions = [
      transactions.functionCall(
        'increment', // methodName
        {}, // args
        new BN('30000000000000'), // 30 TGas
        new BN(0), // deposit
      ),
    ];

    const transaction = transactions.createTransaction(
      accounts.address, // signerId
      utils.PublicKey.fromString(accounts.pubKey), //pubKey
      contractAddress, // contract Id
      accessKey.nonce + 1, // nonce
      actions, // actions
      recentBlockHash, // recentBlockHash
    );

    const serializedTransaction = Buffer.from(transaction.encode()).toString('base64');
    const txHash = await dapp.request('near', {
      method: 'dapp:sendTransaction',
      params: [serializedTransaction],
    });
    setTxHash(txHash);
  }

  const handleChange = (e) => {
    setContractAddress(e.target.value);
  };

  const handleContractId = () => {
    if (
      contractAddress.includes('near') ||
      contractAddress.includes('testnet') ||
      contractAddress.includes('devnet')
    ) {
      setIsSubmit(true);
    } else {
      alert('You have to enter valid contract address');
    }
  };

  return (
    <>
      {accounts ? (
        <>
          {isSubmit ? (
            <Button onClick={handleSendTransaction} type="button">
              Send a Transaction
            </Button>
          ) : (
            <>
              <Input
                value={contractAddress}
                onChange={handleChange}
                placeholder="Deploayed Contract Address"
                style={{ marginRight: '8px' }}
              />
              <Button onClick={handleContractId} type="button">
                Set a Contract Address
              </Button>
            </>
          )}
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts.address}
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
      {contractAddress && isSubmit && (
        <ResultTooltip style={{ background: '#F4F4F4', color: 'black' }}>
          <b>Contract Address:</b> {contractAddress}
        </ResultTooltip>
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
