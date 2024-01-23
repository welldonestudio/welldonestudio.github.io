---
slug: /wallet/zkWallet/send-transaction
sidebar_position: 3
description: WELLDONE zkWallet for developer
---

# Send Transaction

WELLDONE zkWallet for developer

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'sui';
  const SUI_RPC_URL = 'https://wallet-rpc.devnet.sui.io/';
  const [txHash, setTxHash] = React.useState(null);
  const [unsignedTx, setUnsignedTx] = React.useState(null);
  const [signature, setSingnature] = React.useState(null);
  
  const request = async (method, params) => {
    const res = await fetch(SUI_RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 0,
        jsonrpc: '2.0',
        method,
        params: params || [],
      }),
    });

    const { result } = await res.json();
    return result;
  };

  async function handleSendTransaction() {
    try {
      const { digest } = await request('sui_executeTransactionBlock', [
          Buffer.from(unsignedTx.replace('0x', ''), 'hex').toString('base64'),
          [Buffer.from(signature.replace('0x', ''), 'hex').toString('base64')],
      ]);
      digest && setTxHash(digest)
    } catch (error) {
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const { result } = JSON.parse(url.searchParams.get('jsonrpc'));
      if (result) {
        setUnsignedTx(result[0].unsignedTx);
        setSingnature(result[0].signature);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      {(signature && !txHash)&& (
        <Button onClick={handleSendTransaction} type="button">
          Send a Transaction
        </Button>
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
