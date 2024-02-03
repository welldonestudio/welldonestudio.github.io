---
slug: /wallet/zkWallet/get-account
sidebar_position: 1
description: WELLDONE zkWallet for developer
---

# Get Account

이 섹션에서는 zkWallet을 사용하여 사용자의 지갑 주소를 가져오는 방법을 설명합니다. 이 과정은 DApp이 사용자의 지갑 주소를 요청하고, 사용자가 zkWallet을 통해 이를 제공하는 과정을 포함합니다.

### 구현 방법

**콜백 URL 설정**: DApp은 zkWallet에 콜백 URL을 제공합니다. 이 URL은 사용자가 지갑 연결을 완료한 후 리디렉션될 주소입니다.

**지갑 연결 요청**: 사용자가 'Get Account' 버튼을 클릭하면, DApp은 zkWallet의 'connect' 엔드포인트로 요청을 보냅니다.

**주소 반환**: 사용자가 zkWallet에서 인증을 완료하면, zkWallet은 콜백 URL로 사용자의 지갑 주소를 반환합니다.

```jsx live
function getAccount() {
  const ZKWALLET = 'https://zkwallet.welldonestudio.io';
  const CHAIN_NAME = `sui:devnet`;

  function handleGetAccount() {
    const url = new URL('connect', ZKWALLET);
    url.searchParams.set('chain', CHAIN_NAME);
    url.searchParams.set('callback', `${window.location.origin}/wallet/zkWallet/sign-transaction`);
    url.searchParams.set('jsonrpc', JSON.stringify({
      jsonrpc: '2.0',
      id: 0,
      method: 'dapp:accounts',
    }));
    window.location.href = url.toString();
  }

  return (
    <>
      <Button onClick={handleGetAccount} type="button">
        Get Account
      </Button>
      <div>You have to get account first!</div>
    </>
  );
}
```