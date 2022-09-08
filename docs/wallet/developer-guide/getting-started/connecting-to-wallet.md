---
sidebar_position: 2
keywords:
  [
    How to use WELLDONE Wallet,
    detect WELLDONE Wallet,
    Detecting the WELLDONE Wallet Provider,
    Connecting to Wallet,
  ]
---

# Connecting to Wallet

## How to connect to WELLDONE Wallet

You must first request a connection to your WELLDONE Wallet to utilize in a dApp. A webpage can connect to your WELLDONE wallet using the methods listed below, and once connected, a user in your wallet can grant you access to your account.

```javascript
window.dapp.request(chainName: string, { method: "dapp:accounts" }
```

When you execute this method, a pop-up window opens asking for your approval. If the user hits **Deny** or closes the window, the connection request is refused with an error; if the user clicks **Accept**, the method returns a Promise object containing the address and public key information for the account corresponding to the `chainName`.
<img src="https://user-images.githubusercontent.com/70956926/178187041-243f3349-b62b-4d2b-bd22-d072eb1b5795.png" width="500"/>

The method asks for connections to all networks registered on the WELLDONE Wallet at the same time. In other words, if younrequest with `ethereum` in `chainName`, you will be automatically granted access to the `cosmos` or other chains, in addition to `ethereum`. If the webpage is already linked to your wallet, it imports the information from your account without asking further authorization.

The example that illustrates the object returned when providing `ethereum` as an argument in `chainName` is shown below.

```json
{ "ethereum": { "address": "0x....", "pubKey": "0x...." } }
```

WELLDONE Wallet currently only supports one address/public key pair per chainID. If there are no accounts in each network, the method produces an empty object.

## Example

A basic example of connecting to a WELLDONE Wallet to obtain information about an Ethereum account. Press the `Connect Wallet` button to send the `dapp:accounts` method to connect to your wallet and retrieve your account's address and public key.

```jsx live
function connect() {
  const [address, setAddress] = React.useState(null);
  const [pubKey, setPubKey] = React.useState(null);
  async function getAccounts() {
    // request connection to WELLDONE extension
    const accounts = await window.dapp.request('ethereum', {
      method: 'dapp:accounts',
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
        <ResultTooltip style={{ background: '#3B48DF' }}>
          <b>address: </b> {address} <br />
          <b>pubKey: </b> {pubKey}
        </ResultTooltip>
      )}
    </>
  );
}
```
