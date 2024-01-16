---
slug: /wallet/zkWallet/get-account
sidebar_position: 1
description: WELLDONE zkWallet for developer
---

# Get Account

WELLDONE zkWallet for developer

```jsx live
function getAccount() {
  const ZKWALLET = 'https://zkwallet.welldonestudio.io';
  const CHAIN_NAME = `sui:devnet`;

  function handleGetAccount() {
    const url = new URL('connect', ZKWALLET);
    url.searchParams.set('chain', CHAIN_NAME);
    url.searchParams.set('callback', `${window.location.origin}/wallet/zkWallet/sign-transaction`);
    url.searchParams.set('jsonrpc', JSON.stringify({
      jsonrpc: '2.0',
      id: 0,
      method: 'dapp:accounts',
    }));
    window.location.href = url.toString();
  }

  return (
    <>
      <Button onClick={handleGetAccount} type="button">
        Get Account
      </Button>
      <div>You have to get account first!</div>
    </>
  );
}
```