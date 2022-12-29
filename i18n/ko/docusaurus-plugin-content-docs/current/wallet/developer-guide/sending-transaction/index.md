---
slug: /sending-transaction
sidebar_position: 3
description: Universal Provider를 사용하여 멀티 체인 상에서 트랜잭션 보내기
---

# Sending Transactions

:::note
트랜잭션을 전송하는 것은 블록체인의 공식적인 액션입니다. 이 액션은 간단한 토큰 전송, 새로운 스마트 컨트랙트 배포 및 다양한 방식으로 블록체인 상의 상태 변경을 유발할 수 있습니다. 트랜잭션을 전송한다는 것은 크게 트랜잭션 서명과 트랜잭션 전송 두 단계로 나눌 수 있는데, WELLDONE Wallet은 `dapp:signAndSendTransaction` 메소드를 통해 트랜잭션을 서명하고 전송하는 과정을 한 번에 진행할 수 있습니다.
:::

`dapp:signAndSendTransaction` 메소드의 파라미터로는 크게 `CHAIN_NAME`과 `HEX_STRING_TX_DATA`가 있습니다. `CHAIN_NAME`은 연결하고자 하는 체인의 이름을, `HEX_STRING_TX_DATA`는 트랜잭션을 HEX string 형으로 변환한 값을 의미합니다. 다양한 체인들의 트랜잭션 포맷이 상이하기 때문에, WELLDONE Wallet에서는 트랜잭션을 HEX string 타입으로 변환한 값을 인자로 받아 트랜잭션을 전송합니다.

```info
EVM 계열의 경우 트랜잭션 객체를 그대로 넣어서 전송하는 것도 가능합니다.
```

```typescript
type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';
type HEX_STRING_TX_DATA = 'string';

const response = await window.dapp.request(CHAIN_NAME, {
  method: 'dapp:signAndSendTransaction',
  params: [HEX_STRING_TX_DATA],
});
```

체인별로 동일한 메소드 `dapp:signAndSendTransaction`를 사용하지만, 체인별로 트랜잭션 포맷이 다르기 때문에 `HEX_STRING_TX_DATA`를 만드는 방법에 차이가 있습니다. 아래의 체인별 섹션을 통해 체인별로 어떻게 요청을 보내는지 토큰을 전송하는 트랜잭션 예제와 함께 상세하게 알 수 있습니다.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
