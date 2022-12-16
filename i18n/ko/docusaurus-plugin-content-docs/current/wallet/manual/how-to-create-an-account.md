---
sidebar_position: 3
description: 웰던 월렛에 계정 생성하기
---

# How to Create an Account

계정을 추가하는 방법은 두가지가 있습니다. **1) 지갑에 등록한 니모닉으로 파생된 계정을 추가하는 방법**과 **2) Private Key를 입력해서 계정을 추가하는 방법**이 있습니다.

첫 번째 방법이 지갑에 등록한 니모닉으로부터 계정을 복구하는 기본적인 방법입니다. 두 번째 방법의 경우 지갑에 등록한 니모닉과 다른 니모닉에서 파생된 계정을 이미 사용 중이었을때 이러한 계정들을 WELLDONE Wallet에서 사용하고 싶은 경우 사용할 수 있습니다.

## Create an account with Keystore

**Step 1**: 추가하고 싶은 체인을 선택합니다.

**Step 2**: **Add Account with Keystore**(등록한 니모닉으로 파생된 계정을 사용하고 싶은 경우나 따로 사용하던 계정이 없는 경우에 일반적으로 선택하면 됩니다.) 버튼을 클릭합니다.

![3_1_1](./img/3_1_1.png?raw=true '3_1_1')
![3_1_2](./img/3_1_2.png?raw=true '3_1_2')

**Step 3**: 지갑에서 사용할 별칭인 계정 이름을 생성합니다. 드롭 다운 아이콘을 클릭하면 HD Path를 선택할 수 있습니다. 

첫번째 항목이 해당 체인에서 주로 사용하는 표준입니다. 특별히 커스텀하고 싶지 않다면 가장 첫번째 항목을 선택하면 됩니다. HD Path를 선택하고 나면 이에 따라 주소를 보여줍니다. 주소를 확인하고 **Add Account** 버튼을 클릭합니다.

![3_1_3](./img/3_1_3.png?raw=true '3_1_3')
![3_1_4](./img/3_1_45.png?raw=true '3_1_4')

:::note
**HD Path** 는 하나의 니모닉으로 부터 여러 개의 계정을 생성하기 위해 생겨난 개념입니다. 같은 니모닉이라도 HD Path가 다르면 다른 계정 주소가 생성됩니다. 이처럼 체인마다 각각 다른 HD Path를 표준으로 사용하기 때문에 같은 니모닉으로 부터 다른 계정 주소들이 생성되는 것입니다. 

하지만 한 체인내에서 여러 가지 HD Path를 혼재하여 사용하는 경우가 있습니다. 예를 들어 Celo의 경우, Celo의 기본 HD Path가 존재하지만, Ethereum HD Path를 사용하는 Metamask와 같은 지갑으로 Celo를 이용하는 사용자들이 있습니다. 따라서 WELLDONE Wallet은 이러한 다양한 경우들을 지원하기 위해 체인내에서 사용자가 직접 HD Path를 선택할 수 있도록 지원합니다. 또한 HD Path의 가장 마지막 항목인 Index도 조절할 수 있도록 지원합니다. HD Path를 조정해서 추가하고자 했던 계정의 주소를 확인합니다.
:::

## Create an account with Private Key

**Step 1**: 추가하고 싶은 체인을 선택합니다.

**Step 2**: **Import Private Key**(이미 사용하던 계정을 Private Key로 등록해서 사용하고 싶은 경우) 버튼을 클릭합니다.

![3_2_1](./img/3_2_1.png?raw=true '3_2_1')
![3_2_2](./img/3_2_25.png?raw=true '3_2_2')

**Step 3**: 지갑에서 사용할 별칭인 계정 이름을 생성합니다. Private Key를 입력한 뒤 생성된 계정 주소를 확인하고 **Add Account** 버튼을 클릭합니다.

![3_2_3](./img/3_2_3.png?raw=true '3_2_3')

## Create an Account in NEAR

대부분의 체인은 위의 방법을 통해 계정을 생성할 수 있지만, NEAR의 경우에는 Keystore를 사용하여 계정을 생성할 때 몇 가지 과정이 추가로 필요합니다.

**Step 1**: Address에 연결된 기존 계정이 없다면 **Create New** 버튼을 클릭하여 AccountID를 입력합니다. 테스트넷 계정을 생성할 경우에는 `.testnet`을, 메인넷 계정을 생성할 경우에는 `.near`를 선택합니다.

![3_3_1](./img/3_3_1.png?raw=true '3_3_1')
![3_3_2](./img/3_3_2.png?raw=true '3_3_2')

:::note

NEAR의 경우 human-readable 한 ID를 갖기 때문에 중복되지 않는 Account ID 값을 입력해줘야 하고, 해당 계정을 활성화하기 위해서는 일정량의 NEAR 토큰을 해당 계정으로 보내야 합니다. 다음 [링크](https://www.allthatnode.com/faucet/near.dsrv)에서 NEAR 테스트넷 faucet을 요청합니다.

:::

**Step 2**: 계정에 토큰이 들어온 것이 확인되면 아래와 같이 **Create New** 버튼이 활성화 됩니다. 버튼을 클릭하면 NEAR 계정이 생성됩니다.

![3_3_3](./img/3_3_3.png?raw=true '3_3_3')

:::note

처음 계정을 활성화하기 위해 보내는 토큰 이외에 해당 계정을 사용해서 컨트랙트를 배포하고 트랜잭션을 실행하기 위해서는 일정량의 토큰이 필요합니다. 테스트넷 계정의 경우 다음 [링크](https://www.allthatnode.com/faucet/near.dsrv)에서 NEAR 테스트넷 faucet을 요청할 수 있습니다.

:::
