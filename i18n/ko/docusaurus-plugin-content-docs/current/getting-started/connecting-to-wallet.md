---
sidebar_position: 2
---

# Connecting to Wallet

## How to connect to WELLDONE Wallet

WELLDONE Wallet을 dApp에서 사용하기 위해서는 먼저 지갑에 연결을 요청해야 합니다. 다음의 메소드를 이용해서 웹페이지는 지갑에 연결을 요청할 수 있고, 지갑의 사용자가 연결을 허락하면 웹페이지는 사용자의 계정에 접근할 수 있습니다.

```javascript
window.dapp.request(chainName: string, { method: "dapp:accounts" }
```

해당 메소드를 실행하면 다음과 같이 사용자의 허락을 구하는 팝업이 나타납니다. 사용자가 **Deny**를 클릭하거나 창을 닫으면 에러와 함께 연결 요청이 거부되고, 사용자가 **Accept**를 클릭하면 메소드는 `chainName`에 해당하는 계정의 address와 public key 정보가 담긴 Promise 객체를 반환합니다.
<img src="https://user-images.githubusercontent.com/70956926/178187041-243f3349-b62b-4d2b-bd22-d072eb1b5795.png" width="500"/>

메소드는 모든 체인에 대한 연결을 한 번에 요청합니다. 즉, `chainName`에 'ethereum'을 넣어 요청을 보낸 후 사용자의 허락을 받으면 'cosmos'나 다른 체인에 대해서도 연결 허락을 받은 것입니다. 웹페이지가 지갑에 이미 연결된 경우에는 사용자의 상호작용을 요구하지 않고 바로 계정의 정보를 가져옵니다. 아래는 `chainName`에 'ethereum'을 넣은 메소드가 반환하는 객체의 예시입니다.

```json
{ "ethereum": { "address": "0x....", "pubKey": "0x...." } }
```

현재 WELLDONE Wallet은 체인 아이디 당 하나의 주소/퍼블릭 키 페어만 지원합니다. 만약 chainName 체인의 계정이 지갑에 없다면 메소드는 빈 객체를 반환합니다.

## Example

Welldone Wallet에 연결해서 이더리움 계정의 정보를 가져오는 간단한 예제입니다. `Connect Wallet` 버튼을 눌러 `dapp:accounts` 메소드를 보내 지갑에 연결하고 계정의 주소와 퍼블릭키를 가져올 수 있습니다.

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
