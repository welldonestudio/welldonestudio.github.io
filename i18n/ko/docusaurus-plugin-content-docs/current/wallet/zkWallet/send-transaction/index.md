---
slug: /wallet/zkWallet/send-transaction
sidebar_position: 3
description: WELLDONE zkWallet for developer
---

# Send Transaction

이 섹션에서는 서명된 트랜잭션을 Sui 블록체인에 전송하는 방법을 설명합니다. 이 과정은 DApp이 "Sign Transaction" 파트에서 서명된 트랜잭션을 받고, 이를 블록체인에 배포하는 과정을 포함합니다.

### 구현 방법

**트랜잭션 준비**: DApp은 서명된 트랜잭션을 받습니다.

**블록체인에 전송**: 사용자가 'Send a Transaction' 버튼을 클릭하면, DApp은 트랜잭션을 Sui 블록체인에 전송합니다.

**결과 확인**: 트랜잭션이 성공적으로 처리되면, DApp은 트랜잭션 해시를 사용자에게 보여줍니다.


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
