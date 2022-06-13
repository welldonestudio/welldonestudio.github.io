---
sidebar_position: 1
---
# Detecting the Provider
* You can know if WELLDONE Wallet is installed on the user device by checking `window.welldone`. If `window.welldone` returns undefined, the wallet is not installed. However, `window.welldone` will definitely return Welldone.
* There is a way to use the wallet. Refer to the example below.

```javascript
const getProvider = () => {
  if (!window.welldone) {
        alert("Please install WELLDONE Wallet extension");
    } else {
        const provider = window.welldone;
        return provider;
    }
};
```