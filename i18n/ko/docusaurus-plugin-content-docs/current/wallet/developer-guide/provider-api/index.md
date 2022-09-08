---
slug: /provider-api
sidebar_position: 2
description: WELLDONE Wallet이 제공하는 Provider API를 사용하는 방법
---

# Provider API

:::info
처음 시작하시는 분이라면 [다음 링크](https://feat-tutorial.d36ezp5i3gcg2t.amplifyapp.com/ko/docs/getting-started)에서 간단한 사용법을 확인합니다.
:::

WELLDONE Wallet에서는 사용자가 방문한 웹 사이트에 `window.dapp`이라는 전역 객체를 주입합니다. `window.dapp`을 사용하면 단 하나의 개발 라이브러리만을 활용하여 여러 블록체인 네트워크와 통신할 수 있습니다.

아래의 섹션에서 WELLDONE Wallet이 멀티 체인 환경을 지원하는 방법과 `window.dapp`을 활용하는 방법을 자세히 알아볼 수 있습니다.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
