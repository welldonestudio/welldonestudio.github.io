---
slug: /add-chain/developer-guide
sidebar_position: 3
description: WELLDONE Wallet에 체인을 추가하는 방법
---

# Developer Guide

:::tip
사이트에 존재하지 않는 새로운 네트워크를 추가하고 싶은 경우에는 [깃허브 저장소](https://github.com/dsrvlabs/wds-addchain-data-list)에서 추가를 요청할 수 있습니다.
깃허브 리드미의 샘플 예제를 참고하여 추가하고자 하는 네트워크의 `.json` 데이터를 data 폴더 안의 알맞은 네트워크 안에 추가하세요. 커밋이 머지되면, 자동으로 우리의 [AddChain](https://addchain.welldonestudio.io) 사이트에 반영될 것입니다.
:::

## Using `dapp:addChain` Method

WELLDONE Wallet의 `dapp:addChain` 메소드를 이용하면 프론트엔드에서 WELLDONE Wallet에 존재하지 않는 새로운 체인을 추가할 수 있습니다.

```javascript
window.dapp.request(chainName: string, (
    method: "dapp:addChain",
    params: [chainData]
))
```

현재 **Ethereum**, **Cosmos**, **Solana** 기반의 체인을 추가할 수 있으며 아래의 체인별 섹션을 통해 체인별로 `params`에 전달해야 하는 내용을 상세하게 알 수 있습니다.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
