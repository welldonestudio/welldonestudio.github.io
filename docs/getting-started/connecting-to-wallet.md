---
sidebar_position: 2
---

# Connecting to Wallet
## Specification
* In order to use WELLDONE Wallet in your dApp, you must first request a connection to the wallet extension.
* **Connecting to Wallet** means that **a user permits a webpage to access their account**.
* The `window.welldone.request()` method requests a connection to the extension if the webpage is not connected to it. The connectWallet method requests permission for all chains at once. 
* This promise-returning function resolves when the user has allowed the connection request. And it will reject with an error if the user denies the request or closes the popup.
* If the webpage already has established a connection, it will be whitelisted for the connection request.

## Example
* Provide a button for the user to connect wallet. Clicking this button should call the `request` method.

```jsx live
function connect() {
  function getAccounts() {
    window.dapp.request({ net: 'ethereum:*', method: "dapp:accounts" });
  }
  return <button onClick={getAccounts}>Connect Wallet</button>;
}
```
