---
sidebar_position: 0
---

Every time the development target chain changes, the developer must rebuild the development environment since the smart contract development environment differs for each network.

Developers may easily create and test EVM-based smart contracts using the web-based IDE Remix.

We offer a "multichain-builder" so that chains supported by the WELLDONE wallet, including non-EVM chains, may create smart contracts in Remix.

It is an excellent tool for introducing developers to each chain ecosystem since "multichain-builder" enables developers to utilize it without having to create a separate development environment.

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

