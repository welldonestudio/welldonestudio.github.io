---
slug: /wallet/zkWallet/sign-transaction
sidebar_position: 2
description: WELLDONE zkWallet for developer
---

# Sign Transaction

이 섹션에서는 사용자가 zkWallet을 사용하여 트랜잭션에 서명하는 방법을 다룹니다. "Get Account"에서 얻은 주소를 기반으로 DApp이 트랜잭션을 생성하고, 사용자는 이를 zkWallet에서 서명합니다. 이 과정은 블록체인 트랜잭션의 보안성과 무결성을 보장하는 핵심 단계로, 서명된 트랜잭션은 최종적으로 블록체인에 전송되기 전 필수적인 검증 절차를 거칩니다.

### 구현 방법

**트랜잭션 생성**: DApp은 사용자의 지갑 주소를 사용하여 트랜잭션을 생성합니다.

**서명 요청**: 사용자가 'Sign Transaction' 버튼을 클릭하면, DApp은 zkWallet의 'connect' 엔드포인트로 서명 요청을 보냅니다.

**서명 반환**: 사용자가 zkWallet에서 트랜잭션에 서명하면, 서명된 트랜잭션은 콜백 URL을 통해 DApp에 반환됩니다.

```jsx live
function signTransaction() {
  const ZKWALLET = 'https://zkwallet.welldonestudio.io';
  const CHAIN_NAME = `sui:devnet`;
  const SUI_RPC_URL = 'https://wallet-rpc.devnet.sui.io/';
  const [account, setAccount] = useState(null);

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

  /*
    This is an example of a sui provider
    Production development should use JsonRpcProvider from @mysten/sui.js
    https://github.com/MystenLabs/sui/tree/main/sdk/typescript#writing-apis
  */
  const suiProvider = {
    provider: {
      getReferenceGasPrice: async () => {
        const result = await request('suix_getReferenceGasPrice', []);
        return result;
      },
      getCoins: async ({ owner, coinType }) => {
        const result = await request('suix_getCoins', [owner, coinType]);
        return result;
      },
      multiGetObjects: async ({ ids, options }) => {
        const result = await request('sui_multiGetObjects', [ids, options]);
        return result;
      },
      dryRunTransactionBlock: async ({ transactionBlock }) => {
        const result = await request('sui_dryRunTransactionBlock', [
          typeof transactionBlock === 'string'
            ? transactionBlock
            : Buffer.from(transactionBlock).toString('base64'),
        ]);
        return result;
      },
    },
  };

  const getSerializedTransaction = async () => {
    try {
      const coins = await request('suix_getCoins', [account]);

      const coinType = '0x2::sui::SUI';
      const filtered = coins.data.filter((item) => item.coinType === coinType);

      const txb = new TransactionBlock();
      txb.setSender(account);

      txb.setGasPayment(
        filtered.map((item) => {
          return {
            objectId: item.coinObjectId,
            version: item.version,
            digest: item.digest,
          };
        }),
      );
      const [coin] = txb.splitCoins(txb.gas, [txb.pure(10000000)]);

      txb.transferObjects([coin], txb.pure(account));
      const transactionBlock = await txb.build(suiProvider);
      return `0x${Buffer.from(transactionBlock).toString('hex')}`;
    } catch (error) {
      alert(error.message);
    }
  };

  async function handleSignTransaction() {
    const unsignedTx = await getSerializedTransaction();
    const url = new URL('connect', ZKWALLET);
    url.searchParams.set('chain', CHAIN_NAME);
    url.searchParams.set('callback', `${window.location.origin}/wallet/zkWallet/send-transaction`);
    url.searchParams.set('jsonrpc', JSON.stringify({
      jsonrpc: '2.0',
      id: 0,
      method: 'dapp:signTransaction',
      params: [
        {
          unsignedTx,
        }
      ]
    }));
    window.location.href = url.toString();
  }

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const { result } = JSON.parse(url.searchParams.get('jsonrpc'));
      result && result[0] && setAccount(result[0].address);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Button disabled={!account} onClick={handleSignTransaction} type="button">
        Sign Transaction
      </Button>
      <div>{!!account ? 'You can sign transaction' : 'You can not sign transaction'}</div>
    </>
  );
}
```
