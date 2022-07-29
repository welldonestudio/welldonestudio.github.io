---
sidebar_position: 2
---

# isConnected()
* Provider가 현재 체인에 연결되어 있으면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.
* Provider가 연결되지 않은 경우 연결을 다시 설정하려면 페이지를 새로고침 해주세요. "connected"이라는 용어는 주로 web3 사이트가 사용자 계정에 액세스할 수 있는지 여부를 나타내는 데에 사용됩니다. 그러나 Provider Interface에서 "connected" 및 "disconnected"는 Provider가 현재 체인에 대해 RPC 쿼리를 수행할 수 있는지 여부와 관련됩니다.

```javascript
isConnected(): boolean {
    return this._state.isConnected;
}

const isConnected = dapp.isConnected(); // true or false
```