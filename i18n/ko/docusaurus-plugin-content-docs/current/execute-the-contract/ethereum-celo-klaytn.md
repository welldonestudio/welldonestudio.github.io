---
description: EVM 기반 네트워크에서 Universal Provider를 이용하여 컨트랙트와 통신하기
keywords: [컨트랙트 실행시키기, 이더리움, 셀로, 클레이튼, 스마트 컨트랙트]
---

# Ethereum, Celo, Klaytn

:::tip
Ethereum, Celo, Klaytn에서 배포된 EVM계 열의 컨트랙트는 배포 시 abi가 추출되기 때문에 [ethers](https://docs.ethers.io/v5/)나 [web3.js](https://web3js.readthedocs.io/en/v1.2.11/getting-started.html) 와 같은 편의 라이브러리를 이용해 컨트랙트를 실행시키는 것이 편리합니다.
:::

## Ethers

### Params

`new ethers.Contract( address , abi , providerOrSigner )`

- address - String: 요청할 컨트랙트의 주소
- abi - Object: contract의 json interface
- providerOrSigner : constructor에 의해 제공되는 provider또는 signer

```javascript
// Read-Only; By connecting to a Provider, allows:
// - Any constant function
// - Querying Filters
// - Populating Unsigned Transactions for non-constant methods
// - Estimating Gas for non-constant (as an anonymous sender)
// - Static Calling non-constant methods (as anonymous sender)
const myContract = new ethers.Contract(address, abi, provider);

// Read-Write; By connecting to a Signer, allows:
// - Everything from Read-Only (except as Signer, not anonymous)
// - Sending transactions for non-constant functions
const myContract_rw = new ethers.Contract(address, abi, signer);
```

## web3.js

### Params

`new web3.eth.Contract(jsonInterface[, address][, options])`

- jsonInterface - Object: contract의 json interface
- address - String (optional): 요청할 컨트랙트의 주소
- options - Object (optional): 컨트랙트의 옵션
  - from - String: 요청을 보내는 계정의 address
  - gasPrice - String: 트랜잭션에 쓰이는 gas price
  - gas - Number: gas limit값
  - data - String: 컨트랙트의 바이트코드

```javascript
const myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    from: '0x1234567890123456789012345678901234567891', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
```

:::info
자세한 내용은 편의 라이브러리의 공식 독스를 통해 접하실 수 있습니다.

- [web3.js - web3-eth-contract](https://web3js.readthedocs.io/en/v1.7.5/web3-eth-contract.html)
- [ethers - contact connection to a contract](https://docs.ethers.io/v5/api/contract/example/#example-erc-20-contract--connecting-to-a-contract)
  :::
