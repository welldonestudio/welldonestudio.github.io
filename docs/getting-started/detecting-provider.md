---
sidebar_position: 1
---
# Detecting the Provider
* You can know if WELLDONE Wallet is installed on the user device by checking `window.dapp`. If `window.dapp` returns undefined, the wallet is not installed. However, `window.dapp` will definitely return Welldone.
* There is a way to use the wallet. Refer to the example below.

```jsx live
function getProvider() {
    function handleProvider() {
        if (!window.dapp) {
            alert("Please install WELLDONE Wallet extension");
        } else {
            alert("success");
        }
    }
    return <button onClick={handleProvider}>Get Provider</button>;
}
```
