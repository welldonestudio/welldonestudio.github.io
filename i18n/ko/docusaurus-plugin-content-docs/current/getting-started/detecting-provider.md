---
sidebar_position: 1
keywords: [웰던 월렛 사용법, 웰던 월렛 감지, 웰던 월렛 프로바이더, 웰던 월렛 연결하기]
---

# Detecting the Provider

## How to detect WELLDONE Wallet

브라우저에 WELLDONE Wallet이 설치되어 있는지 확인하기 위해 `window.dapp`을 체크합니다. 만약 `window.dapp`이 undefined를 반환한다면 지갑이 설치되어 있지 않은 것입니다.

## Example

WELLDONE Wallet을 탐지하는 간단한 예제 코드 입니다.

```jsx live
function getProvider() {
  const [provider, setProvider] = React.useState(false);
  function handleProvider() {
    if (!window.dapp) {
      alert('Please install WELLDONE Wallet extension');
    } else {
      setProvider(true);
    }
  }
  return (
    <>
      <Button onClick={handleProvider} type="buton">
        Get Provider
      </Button>
      {provider && (
        <ResultTooltip style={{ background: '#3B48DF' }}>
          <b>Success</b>
        </ResultTooltip>
      )}
    </>
  );
}
```
