---
title: Kms
description: Sending Transactions using @dsrv/kms
---

# @dsrv/kms

## Sign Transaction General

:::info
[@dsrv/kms](https://www.npmjs.com/package/@dsrv/kms) 패키지를 이용해 체인별로 transaction을 전송하는 튜토리얼에 앞서, transaction 서명에 대한 개념적인 내용을 먼저 살펴보고자 합니다.
:::

### 1. 암호화 기본

암호화는 중요한 문서를 읽기 어려운 값으로 변화하여 제 3자가 볼수 없도록 하거나, 공개된 문서의 진위여부를 가리기 위하기 위해 사용하는 기술입니다. 블록체인에서 주로 사용하는 비대칭 암호화(Asymmetric Key Cryptography)는 암호화와 복호에 사용에 서로 다른 키들을 사용하는 방식을 뜻합니다. 이 때 서로 다른 2개의 키들을 개인키, 공개키라고 하는데, 이것 때문에 공개키 방식(Public-key Encryption)이라고 일컫기도 합니다. 그럼 이러한 암호화 기술이 문서의 진위 여부를 가릴 때 어떻게 사용될까요? 아래 예시를 통해 함께 봅시다.

1. Alice는 비대칭 알고리즘으로 한 쌍의 키쌍을 생성합니다.
   - Alice는 자신의 신원을 퍼블릭키를 통해 증명 할 수 있습니다.
2. Alice는 전송할 평문을 해시하여 고정 길이로 변환을 합니다.
   - 평문 안에는 작성자가 누구인지 알 수 있는 항목이 포함되어 있습니다.
   - 항목의 내용은 퍼블릭키 입니다.
3. 고정길이로 만들어진 문장의 해시를 Alice의 개인키로 서명을 합니다.
   - 이때 Alice는 문장의 시그니쳐를 얻을 수 있습니다.
4. Alice는 서명된 메시지(시그니쳐와 평문)를 Bob에게 보내줍니다.
5. Bob은 시그니쳐와 평문안에 들어 있는 퍼블릭키를 이용해 복호를 하면 평문의 해시값을 다시 얻을 수 있습니다.
   - 이때 Bob이 평문을 해시한 값과 복호를 통해 얻은 해시값이 같다면 Bob은 Alice가 문장을 만들었다는 것을 확신할 수 있습니다.

이 공개키 방식의 핵심은, Alice의 개인키로만 서명된 메시지는 Alice의 퍼블릭키로만 복호화될 수 있다는 것입니다. 그렇기 때문에 다른 사람이 서명해서 메시지를 보내는 경우, Alice의 퍼블릭키로 복호화하였을 때 원문이 제대로 나오지 않게 되므로 진위여부를 판별할 수 있습니다.

### 2. 트랜잭션 전송

그럼 위에서 살펴본 진위 여부를 가리는 비대칭 암호화 기술이 블록체인에서는 어떻게 응용될까요? 블록체인에서 암호화는 주로 트랜젝션을 보낼 때 트랜잭션의 진위여부를 가리기 위해 사용됩니다. 만약 Alice의 계좌의 돈을 Bob계좌로 인출 하기 위해 어떤 사용자가 블록체인 노드로 트랜젝션을 전송한 경우, 해당 사용자가 Alice 계좌의 정당한 소유주인지 노드는 판단할 수 있어야 합니다. 이를 좀 더 쉽게 이해하기 위해 아래 예시를 통해 함께 살펴봅시다.

1. 어떤 사용자가 본인의 계좌에서 Bob의 계좌로 얼마의 금액을 이동한다는 내용의 트랜잭션 평문을 개인키로 서명하여 암호화합니다.
   - 해당 트랜잭션에 서명함으로써 시그니쳐를 얻을 수 있습니다.
2. 서명된 트랜잭션을 제 3자인 노드로 보냅니다.
3. 노드는 이제 서명된 트랜잭션의 진위여부를 판단할 것입니다.
   - 노드는 작성자가 Alice가 서명한 트랜잭션이라고 가정하고 있기 때문에 Alice의 퍼블릭키를 이용해 해당 트랜잭션을 복호합니다.
   - Alice의 퍼블릭키로 복호한 트랜잭션 원문이 원본 트랜잭션과 일치하는지 여부를 통해 트랜잭션의 진위 여부를 파악할 수 있습니다.

모든 블록체인들은 트랜잭션을 byteArray로 바꾸는 serialize의 표준들이 존재하며, 체인들의 sdk를 보면 트랜젝션마다 해당 serialize, deserialize 함수들을 가지고 있습니다. 트랜잭션의 serialize를 통해 얻은 byteArray가 바로 서명을 하기전의 평문이며, 여러분들의 지갑에 들어 있는 프라이빗키와 퍼블릭키들이 서명을 하기 위한 키와 자신이 소유하고 있는 블록체인의 주소입니다.

## Tutorial

:::info
이번 튜토리얼에서 우리는 [@dsrv/kms](https://www.npmjs.com/package/@dsrv/kms) 패키지를 이용해, 체인별로 transaction 전송하는 방법을 살펴볼 예정입니다. 그 전에 아래 명령어를 통해 [@dsrv/kms](https://www.npmjs.com/package/@dsrv/kms)를 설치해주세요.
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
