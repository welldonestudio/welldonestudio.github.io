---
slug: /provider-api
sidebar_position: 4
---
# Provider API

:::info
모든 web3 사이트 개발자는 [기본 사용법](https://docs.welldonestudio.io/docs/getting-started) 섹션을 읽을 것을 권장합니다.
:::

WELLDONE Wallet에서는 사용자가 방문한 웹 사이트에 `window.dapp`이라는 글로벌 API를 주입합니다 `window.dapp` API를 사용하면 웹사이트에서 사용자의 계정을 요청하고 사용자가 연결된 블록체인에서 데이터를 읽고 사용자가 메시지 및 트랜잭션에 서명하도록 제안할 수 있습니다. 

어떻게 멀티체인에 요청을 보낼 수 있는지, 우리가 어떻게 멀티체인 환경을 지원하고 있는 지 궁금하다면 아래의 가이드를 통해 더 상세한 내용을 알 수 있습니다. 


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
