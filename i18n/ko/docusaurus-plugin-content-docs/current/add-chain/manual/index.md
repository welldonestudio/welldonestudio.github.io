---
slug: /add-chain/manual
sidebar_position: 1
description: WELLDONE Wallet에 체인을 추가하는 방법
---

# Manual

## Using Add Chain Site

WELLLDONE Wallet에서 제공하는 [Add Chain](https://addchain.welldonestudio.io) 사이트를 이용해서 간단하게 네트워크를 추가할 수 있습니다.

### 1. Search Chain and Connect Wallet

먼저 추가하고자 하는 체인을 검색합니다. 그리고 **Connect Wallet** 버튼을 눌러 지갑에 대한 접근을 허용합니다. 성공적으로 WELLDONE Wallet이 연결되었다면 버튼이 Add Chain으로 바뀔 것입니다.

![Connect Wallet](../developer-guide/img/connect_wallet.png?raw=true 'Connect Wallet')
![Connect Wallet](../developer-guide/img/addchain.png?raw=true 'Connect Wallet')

### 2. Add Chain

추가하고 싶은 네트워크의 **Add to Wallet** 버튼을 클릭하면 다음과 같이 Select node 창에서 연결하고 싶은 RPC 노드를 선택할 수 있습니다. 노드를 선택한 후, Add to wallet 버튼을 클릭합니다.

![Connect Wallet](../developer-guide/img/add_to_wallet.png?raw=true 'Add Chain to Wallet')

:::tip

### All That Node

사용자는 local node를 사용할 수도 있고, node provider가 제공해주는 rpc 노드를 사용할 수도 있습니다. DSRV의 [All That Node](https://docs.allthatnode.com/)는 multi-chain node platform으로 20개가 넘는 다양한 프로토콜을 지원합니다. ATN에서 제공하는 노드를 이용한다면 단일 플랫폼에서 손쉽게 다양한 체인의 rpc 노드를 이용할 수 있습니다.
:::

그러면 다음과 같이 WELLDONE Wallet Extension이 활성화되면서 Add Network 창이 나타납니다. 해당 창에서 **Accept** 버튼을 누르면 지갑에 네트워크가 성공적으로 추가된 것을 확인할 수 있습니다. **Deny** 버튼을 누르는 경우 _'User denied add chain'_ 에러가 반환됩니다.
<img src='https://user-images.githubusercontent.com/70956926/177306368-292f4e11-2f09-4dab-a304-a43a3c460693.png' width='500' />
