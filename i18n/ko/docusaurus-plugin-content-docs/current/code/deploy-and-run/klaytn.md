---
sidebar_position: 3
description: Klaytn 스마트 컨트랙트 배포 및 실행
keywords: [스마트 컨트랙트 배포 및 실행, 클레이튼, Klaytn, 스마트 컨트랙트]
---

# Klaytn

## Create the Project

**Step 1**: Klaytn에서 스마트 컨트랙트를 작성할 때는 Ethereum과 동일하게 Solidity로 컨트랙트를 작성합니다. 

**Step 2**: 작성한 스마트 컨트랙트 파일을 선택합니다.

![Select Project](img/create-project-celo.png?raw=true 'Select Project')

## Compile the Contract

**Step 1**: 컴파일하고자 하는 컨트랙트 파일을 선택하면 `Compile` 버튼이 활성화됩니다.

**Step 2**: `Complie` 버튼을 클릭합니다.

![Project Compile](img/compile-klaytn.png?raw=true 'Project Compile')

## Deploy the Contract

:::tip
WELLDONE Wallet에서는 해당 지갑 주소에 연결된 네트워크를 자동으로 감지하여 가져옵니다. 따라서 Deploy를 하기 이전에 메인넷에 트랜잭션을 보낼 것인지, 테스트넷에 트랜잭션을 보낼 것인지 미리 고려해두어야 합니다.
:::

**Step 1**: 컴파일이 완료된 컨트랙트 코드가 있는 경우, `Deploy` 버튼이 활성화됩니다.

**Step 2**: `Deploy` 버튼을 클릭하고 **WELLDONE Wallet** 창에서 `Send Tx` 버튼을 클릭하여 트랜잭션에 서명합니다.

![Deploy](img/deploy-klaytn.png?raw=true 'Deploy')

**Step 3**: 컨트랙트 배포가 성공하면 터미널에 트랜잭션 성공 로그가 출력되고, 컨트랙트를 실행시킬 수 있습니다.

![Tx Success Log](img/txlog-success-klaytn.png?raw=true 'Tx Success Log')

<img src={require('./img/deployed-contract-klaytn.png').default} alt='deployed-contract-klaytn' style={{width: '300px'}}/>

## Execute the Contract

:::info
컨트랙트를 가져오는 방법에는 두 가지가 있습니다.

1. 위의 과정을 통해 배포한 컨트랙트를 자동으로 가져오는 방법
2. `At address` 버튼을 통해 기존에 배포된 컨트랙트를 가져오는 방법
:::

**Step 1**: 실행할 메소드를 선택합니다.

**Step 2**: 필요에 따라 매개변수를 추가합니다.

**Step 3**: `call`이나 `transaction` 버튼을 클릭하여 메소드를 실행합니다. 트랜잭션을 전송하는 경우, **WELLDONE Wallet**에서 `Send Tx` 버튼을 눌러 트랜잭션에 서명해야 합니다.

  ![Deployed Contract](img/call_view_celo.png?raw=true 'Deployed Contract')
