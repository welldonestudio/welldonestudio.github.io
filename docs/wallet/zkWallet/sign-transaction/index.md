---
slug: /wallet/zkWallet/sign-transaction
sidebar_position: 2
description: WELLDONE zkWallet for developer
---

# Sign Transaction

WELLDONE zkWallet for developer

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
