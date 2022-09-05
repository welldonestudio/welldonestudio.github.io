---
slug: /getting-started
sidebar_position: 2
keywords: [웰던 월렛 사용법, 웰던 월렛 감지, 웰던 월렛 프로바이더, 웰던 월렛 연결하기]
description: WELLDON Wallet 시작하기
---

# Getting Started

브라우저에 WELLDONE Wallet을 설치합니다. [여기](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=ko)에서 다운로드 받으실 수 있습니다.

:::note
이 가이드는 HTML, CSS 및 JavaScript에 대한 중급 지식을 갖추고 계신 분이 읽으시길 추천합니다.
:::

WELLDONE Wallet이 설치되면, 새 브라우저 탭에서 개발자 콘솔을 열어 `window.dapp` 객체가 있음을 확인합니다. WELLDONE Wallet에서는 사용자가 방문한 웹 사이트에 `window.dapp`이라는 전역 객체를 주입하고, 해당 객체를 이용해 웹 사이트와 WELLDONE Wallet이 통신할 수 있습니다. 아래의 섹션에서 브라우저에 지갑이 설치되어 있는지 확인하고 브라우저와 지갑을 연결하는 방법을 상세하게 알 수 있습니다. 

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
