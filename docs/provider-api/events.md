---
sidebar_position: 4
---

# Events

# isConnected()
* If the provider is connected to the current chain, returns true; otherwise, returns false.
* If the provider is not connected, the page must be refreshed to re-establish the connection. The term "connected" is frequently used to indicate to whether a web3 site can access the user's accounts. However, "connected" and "disconnected" in the provider interface relate to whether the provider may perform RPC queries to the current chain.

```javascript
isConnected(): boolean {
    return this._state.isConnected;
}

const isConnected = dapp.isConnected(); // true or false
```