---
slug: /add-chain
sidebar_position: 3
---

# Add Chain

WELLDONE Wallet은 지갑에 직접 네트워크를 추가할 수 있는 **Add Chain** 기능을 제공합니다. **Add Chain**을 사용하는 방법에는 WELLDONE Wallet에서 제공하는 [Add Chain](https://addchain.welldonestudio.io/ethereum) 사이트를 사용하는 방법과 `window.dapp` 메소드를 사용하는 방법 두 가지가 있습니다.

## Using Add Chain Site

WELLLDONE Wallet에서 제공하는 [Add Chain](https://addchain.welldonestudio.io/ethereum) 사이트를 이용해서 간단하게 네트워크를 추가할 수 있습니다.

### 1. Connect Wallet

먼저 상단의 **Connect Wallet** 버튼을 눌러 지갑에 대한 접근을 허용합니다. 성공적으로 WELLDONE Wallet이 연결되었다면 버튼이 Add Chain으로 바뀔 것입니다.
<img src='https://user-images.githubusercontent.com/70956926/177306163-75894ccd-b76e-429c-bb66-64e8976b6773.png' />

### 2. Add Chain

추가하고 싶은 네트워크의 **Add to Wallet** 버튼을 클릭하면 다음과 같이 Select node 창에서 연결하고 싶은 RPC 노드를 선택할 수 있습니다. 노드를 선택한 후, Add to wallet 버튼을 클릭합니다.
<img src='https://user-images.githubusercontent.com/70956926/177305919-4e3a5193-2555-4cf1-9356-87d3359a24e8.png' />

:::tip

### All That Node

사용자는 local node를 사용할 수도 있고, node provider가 제공해주는 rpc 노드를 사용할 수도 있습니다. DSRV의 [All That Node](https://docs.allthatnode.com/)는 multi-chain node platform으로 20개가 넘는 다양한 프로토콜을 지원합니다. ATN에서 제공하는 노드를 이용한다면 단일 플랫폼에서 손쉽게 다양한 체인의 rpc 노드를 이용할 수 있습니다.

:::

그러면 다음과 같이 WELLDONE Wallet Extension이 활성화되면서 Add Network 창이 나타납니다. 해당 창에서 **Accept** 버튼을 누르면 지갑에 네트워크가 성공적으로 추가된 것을 확인할 수 있습니다. **Deny** 버튼을 누르는 경우 _'User denied add chain'_ 에러가 반환됩니다.
<img src='https://user-images.githubusercontent.com/70956926/177306368-292f4e11-2f09-4dab-a304-a43a3c460693.png' width='500' />

### 3. Suggest Chain

사이트에 존재하지 않는 새로운 네트워크를 추가하고 싶은 경우에는 [깃허브 저장소](https://github.com/dsrvlabs/wds-addchain-data-list)에서 추가를 요청할 수 있습니다.
깃허브 리드미의 샘플 예제를 참고하여 추가하고자 하는 네트워크의 `.json` 데이터를 data 폴더 안의 알맞은 네트워크 안에 추가하세요. 커밋이 머지되면, 자동으로 우리의 [AddChain](https://addchain.welldonestudio.io/ethereum) 사이트에 반영될 것입니다.

---

## Using `dapp:addChain` Method

WELLDONE Wallet의 `dapp:addChain` 메소드를 이용하면 프론트엔드에서 WELLDONE Wallet에 존재하지 않는 새로운 체인을 추가할 수 있습니다.

```javascript
window.dapp.request(chainName: string, (
    method: "dapp:addChain",
    params: [chainData]
))
```

현재 **Ethereum**, **Cosmos**, **Solana** 기반의 체인을 추가할 수 있으며 아래의 각 체인별 섹션을 통해 체인 별로 `params`에 전달해야 하는 내용을 상세하게 알 수 있습니다.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
