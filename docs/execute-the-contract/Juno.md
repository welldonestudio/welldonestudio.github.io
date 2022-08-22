:::note
Juno는 Cosmos SDK로 만들어진 상호 운용이 가능한 스마트 컨트랙트 네트워크입니다. Juno에 대한 자세한 설명은 공식 [docs](https://docs.junonetwork.io/juno/readme) 에서 확인할 수 있습니다.
:::
## Params
```
interface TransactionParameters {
  signerData: {
    accountNumber: string;
    sequence: string;
    chainId: string;
  };
  fee: {
    amount: [
      {
        denom: string;
        amount: string;
      },
    ];
    gas: string;
  };
  memo: string;
  msgs: [
    {
      typeUrl: string;
      value: {

      };
    },
  ];
  sequence: string;
}
```
컨트랙트를 실행하는 트랜잭션을 보내기 위해서는 인자의 `typeUrl` 에 `'/cosmwasm.wasm.v1.MsgExecuteContract'`을 전달하고, 토큰을 전송하는 트랜잭션을 보내기 위해서는 인자의 `typeUrl`에 `'/cosmos.bank.v1beta1.MsgSend'`을 전달합니다.
또한 `typeUrl`의 종류에 따라서 그리고 실행하고자 하는 컨트랙트의 함수 종류에 따라서 `value`의 인자값도 달라집니다. 

## Example
Juno Testnet (`uni-3`)에 미리 배포한 카운터 컨트랙트와 통신하는 예제를 같이 살펴보겠습니다. 컨트랙트 코드는 다음의 [저장소](https://github.com/DSRV-DevGuild/cosmwasm-counter-example)에서 확인할 수 있습니다. 컨트랙트 내부의 상태를 변경하는 트랜잭션을 실행하기 위해서는 가스 비용을 지불해야 하므로 다음 링크를 참고하여 미리 [faucet](https://docs.junonetwork.io/validators/joining-the-testnets#get-some-testnet-tokens)을 요청해주세요.

다음의 예제는 컨트랙트의 `increment` 메소드를 실행시키는 트랜잭션을 날리는 코드입니다. 
`increment` 메소드는 컨트랙트 내부의 카운터 값에 인자로 전달한 count 값 만큼 더해주는 메소드로, 컨트랙트를 실행시켜 내부의 상태를 변화시키기 때문에 `typeUrl`에 `'/cosmwasm.wasm.v1.MsgExecuteContract'`이 들어가는 것을 확인할 수 있습니다.

**Get Account** 버튼을 눌러 먼저 지갑에 연결한 후, **Send a Transaction** 버튼을 눌러 트랜잭션을 보내보세요.
```jsx live 
function sendTransaction() {
  const CHAIN_NAME = 'juno';
  const sequence = '10';
  const chainId = 'uni-3';
  const contractAddress = "juno1yfp9zyx9zhqe77d05yqjx3ctqjhzha0xn5d9x8zxcpp658ks2hvqlfjt72";
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  // connect to wallet
  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  // execute the contract
  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        signerData: {
          accountNumber: accounts,
          sequence,
          chainId,
        },
        fee: {
          amount: [
            {
              denom: 'ujunox',
              amount: '1000000',
            },
          ],
          gas: '18000000', // 180k
        },
        memo: '',
        msgs: [
          {
            typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
            value: MsgExecuteContract.fromPartial({
                sender: accounts,
                contract: contractAddress,
                msg: toBase64(toUtf8(JSON.stringify({
                  "increment" : {
                    "count": 5
                  }
                })))
            }),
          },
        ],
        sequence: `${sequence}`,
      };
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:sendTransaction',
        params: [JSON.stringify(transactionParameters)],
      });
      console.log(response);
      const txHash = response

      setTxHash(txHash);
    } catch (error) {
      console.log(error);
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }
  return (
    <>
      {accounts ? (
        <>
          <Button onClick={handleSendTransaction} type="button">
            Send a Transaction
          </Button>
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts}
          </ResultTooltip>
        </>
      ) : (
        <>
          <Button onClick={handleGetAccount} type="button">
            Get Account
          </Button>
          <div>You have to get account first!</div>
        </>
      )}
      {txHash && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Transaction Hash:</b> {txHash}
        </ResultTooltip>
      )}
    </>
  );
}
```