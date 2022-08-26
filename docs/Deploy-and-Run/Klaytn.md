---
sidebar_position: 3
---


# Klaytn

## Choose a wallet
`WELLDONE Code`를 사용하기 위해서는 `WELLDONE Wallet`을 설치해야 합니다.

[➡️ WELLDONE Wallet 설치하기](https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en)

![Select Wallet](img/select-wallet.png?raw=true "Select Wallet")


## Connect
`WELLDONE wallet`을 연결하기 이전에 `WELLDONE wallet`에 Celo account를 생성해주세요.

![Connect Wallet](img/connect-wallet-klaytn.png?raw=true "Connect Wallet")

## Create Project

solidity로 컨트랙트를 작성해주세요. 그리고 solidity로 작성된 컨트랙트 파일을 선택해주세요.

![Select Project](img/create-project-celo.png?raw=true "Select Project")

## Compile

- solidity 컨트랙트 코드를 선택하면 Compile 버튼이 활성화됩니다.
- Complie버튼을 클릭하세요.
- 컴파일이 완료되면, wasm file이 반환됩니다.

![Project Compile](img/compile-klaytn.png?raw=true "Project Compile")

## Deploy

:::tip
WELLDONE Wallet에서는 해당 지갑 주소에 연결되어 있는 네트워크를 자동으로 감지하여 가져옵니다. 따라서 Deploy를 하기 이전에 메인넷에 트랜젝션을 보낼 것인지, 테스트넷에 트랜젝션을 보낼 것인지 미리 고려해두어야 합니다. 
:::

- 컴파일된 컨트랙트 코드가 있는 경우 디플로이 버튼을 클릭하세요.
- 지갑을 사용하여 거래에 서명하십시오.

![Deploy](img/deploy-klaytn.png?raw=true "Deploy")

- 컨트랙트가 배포되면, 당신은 함수를 실행시킬 수 있습니다.

![Deployed Contract](img/call_view_celo.png?raw=true "Deployed Contract")

## View and Call function

- 위의 과정을 통해 컨트랙트를 배포하면 자동으로 배포된 컨트랙트가 호출됩니다.
- 혹은 `At Address` 내부에 컨트랙트 아이디를 입력하고 `At Address`버튼을 눌러 기존에 배포된 컨트랙트를 호출할 수 있습니다.

  ![At Address](img/contract_address.png?raw=true "At Address")

- 호출할 메서드를 선택합니다.
- 필요에 따라 매개변수를 추가합니다.
- `call`이나 `transact`를 통해 값을 읽거나 트랜젝션을 전송합니다.

  ![Deployed Contract](img/call_view_celo.png?raw=true "Deployed Contract")