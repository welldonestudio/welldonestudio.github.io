---
sidebar_position: 0
title: Getting Started
description: About multi-language verification tool
keywords: [Multi chain contract, smart contracts]
---

### Developer

Developers need to know the contract's address or deployment hash. Additionally, they must be aware of the OS and compiler version used during deployment. Depending on the programming language of the contract, the compilation process may or may not depend on the OS. For example, Arbitrum's Stylus generates different bytecode depending on the OS used during compilation. Similarly, compiler versions can affect compatibility; certain functions may be backward-compatible with earlier versions, while others may not.

As a result, if the OS and compiler versions differ between deployment and verification, successful verification may still be possible in some cases. However, in other scenarios, the verification process might fail without a matching environment. Therefore, developers must know the OS or compiler versions used during deployment to replicate the same build and compilation environment, ensuring successful verification.

Once the contract address or hash and the deployment environment are configured, developers can upload the code for compilation. The code is compiled according to the specified environment, and if the compiled output matches the on-chain code, the contract is verified successfully.

### User

No preparation is required. Simply access the (VeriWell)[https://veriwell.dev/] website and input the the address of the contract and the source code zip file you wish to verify. If the contract is verified, you will be redirected to a results page where you can review the contract's code along with explanations provided by AI support about the code's functionality.

Additionally, by connecting your wallet, you can directly interact with the contract. When creating transactions, you can rely on the AI Code Assistance to ensure you fully understand the code's purpose and functionality before executing any actions. However, remember that AI code assistance serves as a reference tool and is not yet fully reliable. Its capabilities are continuously being enhanced, but users should exercise caution and perform their own assessments.
