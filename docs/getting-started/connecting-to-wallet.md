---
sidebar_position: 2
---

# Connecting to Wallet

## How to connect to WELLDONE Wallet

You must first request a connection to your wallet in order to use the WELLDONE Wallet in a dApp. A website can connect to your wallet using the methods below, and once connected, a user in your wallet can grant you access to your account.

```javascript
window.dapp.request(chainName: string, { method: "dapp:accounts" }
```

When you execute this method, a pop-up window requesting your consent appears: The connection request is declined with an error if the user clicks **Deny** or closes the window. If the user clicks **Accept**, the method returns a Promise object with the address and public key details for the account `chainName`.

<img src="https://user-images.githubusercontent.com/70956926/178187041-243f3349-b62b-4d2b-bd22-d072eb1b5795.png" width="500"/>

The method simultaneously requests connections from every networks. For example, you give a consent to connect to the dApp to `cosmos` or other chains if you already agreed on connecting `ethereum` in the `chainName` field. If the website is already linked to your wallet, it immediately imports the data from your account without requiring your interaction. Here is an illustration of the object that the method with `ethereum` in the `chainName` returned.

```json
{ "ethereum": { "address": "0x....", "pubKey": "0x...." } }
```

Only one address/public key pair is supported by WELLDONE Wallet at this time per chain ID. The method returns an empty object if the account in the corresponding `chainName` network is not present in the wallet.

## Example

A simple example of connecting to a WELLDONE Wallet to get information about an Ethereum account. Press the `Connect Wallet` button to send the `dapp:accounts` method to connect to your wallet and get the address and public key of your account.

```jsx live
function connect() {
  const [address, setAddress] = React.useState(null);
  const [pubKey, setPubKey] = React.useState(null);
  async function getAccounts() {
    // request connection to WELLDONE extension
    const accounts = await window.dapp.request("ethereum", {
      method: "dapp:accounts"
    });
    // check if accounts exists
    if (Object.keys(accounts).length !== 0) {
      setAddress(accounts.ethereum.address);
      setPubKey(accounts.ethereum.pubKey);
    }
  }
  return (
    <>
      <Button onClick={getAccounts}>Connect Wallet</Button>
      {address && (
        <ResultTooltip style={{ background: "#3B48DF" }}>
          <b>address: </b> {address} <br />
          <b>pubKey: </b> {pubKey}
        </ResultTooltip>
      )}
    </>
  );
}
```
