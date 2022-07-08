---
sidebar_position: 0
---

Since the smart contract development environment is different for each chain, the developer has to rebuild the development environment whenever the development target chain changes.

Remix is ​​a web-based IDE that developers can conveniently develop and test EVM-based smart contracts.
 
We provide `multichain-builder` to develop smart contracts in Remix for chains supported by the Welldone wallet, including non-evm chains.

`multichain-builder` allows developers to use it easily without having to build a separate development environment, making it a very suitable tool for onboarding developers to each chain ecosystem.

## Features

- Supports multichain
- Easy flow of contract deployment and function execution 

## How to connect to Remix

Go to https://remix.ethereum.org/, navigate to plugin section.

- Click 'Plugin Manager' in the left bar.
- Click 'Connect to a Local Plugin'.

![Plugin Manager](img/plugin-manager.png?raw=true "Plugin Manager")

- Provide a plugin name and a display name.
- In the URL field add 'http://localhost:3000'.
- Click OK

![Local Plugin](img/local-plugin.png?raw=true "Local Plugin")

Now you will see the new plugin in the left bar.
Click new plugin and choose the chain you want.

## Related 

- [Remix IDE Documentation](https://remix-ide.readthedocs.io/en/latest/)
- [Github repository](https://github.com/ethereum/remix-ide)


## Issues

If you have any issues, please feel free to create an issue in our [Github repository](https://github.com/0xhsy/multichain-builder/issues).

