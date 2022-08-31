:::tip
The EVM-compatible networks, such as Ethereum, Celo, and Klaytn, extract ABI (Application Binary Interface) when the contract is deployed, implying that using a dedicated library such as [ethers.js](https://docs.ethers.io/v5/) and [web3.js](https://web3js.readthedocs.io/en/v1.2.11/getting-started.html)
:::
## Ethers
### Params
`new ethers.Contract( address , abi , providerOrSigner )`
- address - String: A contract address to be requested
- abi - Object: JSON interface for contracts
- providerOrSigner : A provider or signer that is instantiated by constructor

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
- jsonInterface - Object: JSON interface for contracts
- address - String (optional): A contract address to be requested
- options - Object (optional): The options for a contract
  - from - String: The address that sends a transaction
  - gasPrice - String: Gas price to be payed in a transaction
  - gas - Number: gas limit
  - data - String: Contract Bytecode
```javascript
const myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    from: '0x1234567890123456789012345678901234567891', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
``` 

:::info
Visit the official docs for further information.

- [web3.js - web3-eth-contract](https://web3js.readthedocs.io/en/v1.7.5/web3-eth-contract.html) 
- [ethers - contact connection to a contract](https://docs.ethers.io/v5/api/contract/example/#example-erc-20-contract--connecting-to-a-contract)
:::