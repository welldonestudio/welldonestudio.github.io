---
title: Kms
description: Sending Transactions using @dsrv/kms
---

# @dsrv/kms

:::info
이번 튜토리얼에서 우리는 [@dsrv/kms](https://www.npmjs.com/package/@dsrv/kms) 패키지를 이용해, 체인별로 transaction 전송하는 방법을 살퍄볼 예정입니다. 그 전에 아래 명령어를 통해 [@dsrv/kms](https://www.npmjs.com/package/@dsrv/kms)를 설치해주세요.
:::

```bash
# using npm
npm install @dsrv/kms

# using yarn
yarn add @dsrv/kms
```

`@dsrv/kms` transaction을 전송하기 위한 구체적인 과정은 체인별로 상이하지만, 대부분의 체인은 공통적인 프로세스를 따릅니다.

1. SDK를 사용하여 각 체인에 대한 raw transaction을 만듭니다.
2. `@dsrv/kms`의 `signTx`메서드를 통해 signature를 받습니다.
3. `@dsrv/kms`를 통해 생성한 signature와 앞서 생성한 raw transaction을 합쳐 signed transaction을 생성합니다.
4. 체인별로 SDK를 통해 signed transaction을 전송합니다.

체인별 섹션을 통해 체인별로 요청을 보내는 상세한 방식과 예제를 살펴볼 수 있습니다.

:::tip
해당 튜토리얼은 HTML, CSS 및 JavaScript에 대한 기본적인 지식을 갖추고 계신 분이 읽으시길 추천합니다.
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
