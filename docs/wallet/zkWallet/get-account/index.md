---
slug: /wallet/zkWallet/get-account
sidebar_position: 1
description: WELLDONE zkWallet for developer
---

# Get Account

In this section, we explain how to retrieve a user's wallet address using zkWallet. This process involves the DApp requesting the user's wallet address and the user providing it through zkWallet.

### Implementation Method

**Setting Callback URL**: The DApp provides a callback URL to zkWallet. This URL is where the user will be redirected after completing the wallet connection.

**Requesting Wallet Connection**: When the user clicks the 'Get Account' button, the DApp sends a request to the 'connect' endpoint of zkWallet.

**Returning the Address**: Once the user completes authentication in zkWallet, zkWallet returns the user's wallet address to the callback URL.

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