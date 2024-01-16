---
title: Sui zkLogin
description: Sui zkLogin Tutorial 
sidebar_position: 9
---

# Sui zkLogin

<div>
  <span className='author-sm'>January 16, 2024</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/0xhsy' target='_blank'><img src='https://avatars.githubusercontent.com/u/102006034?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Sooyoung Hyun</span><br/>
      <span className='author-sm'>Lead Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Introduction

The evolution of blockchain technology is presenting new requirements for user interfaces and security. Against this backdrop, WELLDONE zkWallet integrates the zkLogin feature of the Sui blockchain, providing an efficient way for users to access blockchain services using their existing Web2 credentials. This article will explore how WELLDONE zkWallet leverages zkLogin to enhance user experience and facilitate connections with various browser extension wallets.

**WELLDONE zkWallet and Sui's zkLogin: A Structural Approach to Enhancing User Experience and Security**

The way WELLDONE zkWallet integrates Sui's zkLogin feature offers a structural approach that simultaneously enhances the accessibility and security of blockchain technology. This integration is achieved in the following ways:

1. **Separate Webpage Integration**: WELLDONE zkWallet provides a separate webpage that allows users to choose and connect to various browser extension wallets. This webpage is directly integrated with Sui's zkLogin feature, enabling users to access blockchain services using their existing Web2 credentials.
2. **Zero-Knowledge Proof Mechanism**: The core of zkLogin is its zero-knowledge proof technology. This technology conceals users' identity information while allowing safe access to blockchain services. Users can access services without revealing their identity, fully protecting their personal information.
3. **Dual Authentication Mechanism**: WELLDONE zkWallet combines wallet key management with OAuth authentication to provide a dual-layer of security. Users must satisfy both elements to access their wallet: the wallet's private key and authentication through an OAuth provider. This dual authentication approach offers much stronger security than single-factor methods.
4. **Simplified User Interface**: The web interface of WELLDONE zkWallet is user-friendly and intuitive. Users can access their wallet through their web account with just a few clicks, offering convenience while maintaining security.

This structural approach reduces the complexity of blockchain technology, making it easier for users to understand and utilize. The integration of WELLDONE zkWallet focuses on enabling users to use blockchain technology easily and safely, without worrying about technical barriers. We will now take a closer look through the following tutorial.

## Tutorial

0. [Install WELLDONE Wallet](https://docs.welldonestudio.io/wallet/manual) or another browser extension wallet. You will receive a **JSON Web Token (JWT)** through the Public Key of the extension wallet and OAuth login, and sign transactions with the Private Key of the extension wallet. For practice, create a Sui account and set the network to Devnet.

<img src={require('./img/install-wallet.png').default} alt='install-wallet' style={{width: '300px', marginBottom: '30px'}}/>

1. Connect your wallet to the site at [https://zkwallet.welldonestudio.io](https://zkwallet.welldonestudio.io/). Note that using an address already created through zkLogin with Sui Wallet will not work, as the Public Key is unknown.

<img src={require('./img/connect-wallet.png').default} alt='connect-wallet'  style={{marginBottom: '30px'}}/>

2. Obtain a JWT from the **OpenID provider (OP)** through your credentials.

<img src={require('./img/oauth-login.png').default} alt='oauth-login' style={{marginBottom: '30px'}}/>

3. You will then be logged into WELLDONE zkWallet, Sui's first Web wallet, as shown below. A new address is created using the Public Key of the extension wallet, JWT, and User Salt. We do not know the key pair of this address. However, by controlling it through independent elements like the wallet's key and OP authentication, we achieve robust security.

<img src={require('./img/check-address.png').default} alt='check-address' style={{marginBottom: '30px'}}/>

4. Receive SUI coins through the [faucet](https://docs.sui.io/guides/developer/getting-started/get-coins) and execute a Stake TX.

<img src={require('./img/send-tx.png').default} alt='send-tx' style={{marginBottom: '30px'}}/>

5. Sign the transaction with the Private Key of the account in the browser extension wallet.

<img src={require('./img/sign-tx.png').default} alt='sign-tx' style={{marginBottom: '30px'}}/>

6. You can confirm that the transaction has been successfully sent and the stake has been executed.

<img src={require('./img/check-result.png').default} alt='check-result' style={{marginBottom: '30px'}}/>

The process outlined above can be summarized as follows:

<img src={require('./img/process.png').default} alt='process' style={{marginBottom: '30px'}}/>

For detailed explanations of the terminology and internal workings, refer to the [Sui documentation](https://docs.sui.io/concepts/cryptography/zklogin).

## Conclusion

We have explored the operation of the Sui web wallet using Sui's zkLogin feature. The separation of the extension wallet and zkLogin authentication process increases compatibility with various wallet options. Users can choose their preferred wallet, and WELLDONE zkWallet's authentication system seamlessly integrates with these diverse wallets. This provides users with more choices and caters to a variety of user needs. Extension wallets, which require management of mnemonics or private keys, can be used like a Ledger wallet.

Furthermore, the web wallet can directly interact with various Dapps. Interactions between Dapps and the web wallet can be found in [this document](http://localhost:3000/wallet/developer-guide/sending-transaction/sui).

The integration of Sui zkLogin with WELLDONE zkWallet enables users to use blockchain technology more safely and intuitively. WELLDONE zkWallet, through this innovation, enhances the practicality and security of blockchain technology, elevating the user experience to a new level.