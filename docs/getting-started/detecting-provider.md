---
sidebar_position: 1
---

# Detecting the Provider

## How to detect WELLDONE Wallet

Check `window.dapp` to determine if your browser has WELLDONE Wallet installed. The wallet is not installed if `window.dapp` returns undefined.

## Example

The following code is an simple example that detects the WELLDONE Wallet.

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
