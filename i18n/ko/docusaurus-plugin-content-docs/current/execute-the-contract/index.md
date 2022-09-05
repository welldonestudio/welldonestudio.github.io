---
slug: /Execute-the-Contract
keywords: [컨트랙트 실행, 웰던 월렛, 스마트 컨트랙트]
description: Universal Provider를 사용해서 컨트랙트와 통신하기
---

# Execute the Contract

본 문서에서는 WELLDONE Wallet의 `dapp:sendTransaction` 메소드를 사용해서 체인별로 배포된 스마트 컨트랙트와 통신하는 방법을 간단한 카운터 예제를 통해 살펴보고자 합니다.

우리가 사용할 카운터 예제는 체인 별로 컨트랙트 세부 구현 사항은 조금씩 다르지만 공통으로 `increment`, `reset` 함수를 구현하고 있습니다.
Solidity 수도코드로 간단하게 구현해보면 다음과 같습니다.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Counter {
    int private count = 0;

    constructor(uint256 _count) {
      count = _count;
    }

    function increment(uint256 _count) public {
        count += _count;
    }

    function reset(uint256 _count) public {
        count = _count
    }
}
```

스마트 컨트랙트와 통신하는 방법은 공통으로 아래와 같은 포맷을 통해 이뤄집니다. 파라미터로 `CHAIN_NAME`과 `TRANSACTION_PARAMETER`를 전달하는데, `TRANSACTION_PARAMETER`는 transaction을 string type으로 변환한 값을 의미합니다. 체인별로 transaction 포맷이 상이하기 때문에, WELLDONE Wallet에서는 아래와 같이 string 형으로 변환된 꼴을 공통으로 받아 트랜잭션을 전송하고 있습니다.

```javascript
type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';
type TRANSACTION_PARAMETER = 'string';

const response = await dapp.request(CHAIN_NAME, {
  method: 'dapp:sendTransaction',
  params: [TRANSACTION_PARAMETER],
});
const txHash = response.hash;
```

아래의 체인별 섹션을 통해 체인 별로 어떻게 컨트랙트와 통신할 수 있는지 상세하게 확인할 수 있습니다.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
