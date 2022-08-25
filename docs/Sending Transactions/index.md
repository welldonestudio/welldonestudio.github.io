---
slug: /Sending Transactions
sidebar_position: 5
---

# Sending Transactions

:::note
Send Transactions는 블록체인의 공식적인 action입니다. 이 action은 간단한 토큰 전송을 포함할 수 있으며, 새로운 스마트 계약을 생성하거나 다양한 방식으로 블록체인의 상태 변경을 유발할 수 있습니다. dApp이 WELLDONE Wallet과 연결되면, `dapp:sendTransaction` 메소드를 통해 transaction 요청을 보낼 수 있습니다. 
:::

Sending Transactions 은 공통적으로 아래와 같은 포맷을 통해 이뤄집니다. 파라미터로는 크게 `CHAIN_NAME`과 `TRANSACTION_PARAMETER`가 있습니다.  `CHAIN_NAME`은 연결하고자 하는 체인의 이름을, `TRANSACTION_PARAMETER`는 transaction을 string형으로 변환한 값을 의미합니다. 다양한 체인들의 transaction 포맷이 상이하기 때문에, WELLDONE Wallet에서는 아래와 같이 string 형으로 변환된 꼴을 공통으로 받아 트랜젝션을 전송하고 있습니다.

```javascript
type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';
type TRANSACTION_PARAMETER = 'string'; 

const response = await dapp.request(CHAIN_NAME ,{
    method: 'dapp:sendTransaction',
    params: [TRANSACTION_PARAMETER]
  });
const txHash = response.hash;
```

체인 별로 동일한 메서드를 사용하지만, 체인 별로 보내야 하는 parameters에 조금씩 차이가 있습니다. 아래의 각 체인별 섹션을 통해 체인 별로 어떻게 요청을 보내는 지 상세하게 알 수 있습니다.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```