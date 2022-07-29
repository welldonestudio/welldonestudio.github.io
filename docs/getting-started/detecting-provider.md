---
sidebar_position: 1
---

# Detecting the Provider

## How to detect WELLDONE Wallet

To see if WELLDONE Wallet is set up in your browser, check `window.dapp`. The wallet is not installed if `window.dapp` returns undefined.

## Example

Simple example code to detect the WELLDONE Wallet.

```jsx live
function getProvider() {
  const [provider, setProvider] = React.useState(false);
  function handleProvider() {
    if (!window.dapp) {
      alert("Please install WELLDONE Wallet extension");
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
        <ResultTooltip style={{ background: "#3B48DF" }}>
          <b>Success</b>
        </ResultTooltip>
      )}
    </>
  );
}
```
