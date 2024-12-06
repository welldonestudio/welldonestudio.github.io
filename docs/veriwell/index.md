---
slug: /veriwell
sidebar_position: 2
title: VeriWell
description: A web-based tool for multi-language verification
---

The process of verifying smart contracts is highly cumbersome, and even when contracts are verified, a platform is needed where users can confirm their verification status and review the code. For various reasons, developers understand the importance of verification but often push it down their list of priorities. However, verifying smart contracts is crucial. In the Ethereum ecosystem, a culture has developed where contracts that are not verified are rarely used. During the early stages of Ethereum, many scam projects emerged, and people naturally began using only verified contracts. This evolution shaped Ethereum's current verification culture. While the blockchain ecosystem has matured enough to enable better identification of scam projects, the threat of such scams still exists, maintaining the need for verification. Our goal is not just to create a simple verification service but to expand Ethereum's healthy verification culture to other blockchains.

Smart contract verification begins by comparing the on-chain contract code with the off-chain source code. This involves compiling the off-chain code into bytecode and comparing it with the bytecode of the deployed on-chain contract. While this fundamental framework is consistent, the verification process varies depending on the programming languages used by different blockchains. This creates a significant burden for developers working in multi-chain environments, often leading to incomplete or skipped verification processes.

VeriWell is a web-based verification platform designed to allow developers to verify their contracts seamlessly within tailored environments. Developers can replicate the deployment environment on VeriWell, input the address or hash of their contract, upload the code, and proceed with the verification process. VeriWell's goal is to support all environments, ensuring comprehensive verification regardless of the developer's setup. To this end, VeriWell supports both development environments and multi-chain deployments. Currently, it supports chains within the EVM ecosystem, such as Ethereum and Arbitrum, with plans to expand to non-EVM blockchains and additional networks. Developers can select their operating system (e.g., macOS, Linux), the blockchain where their contract is deployed, and the compiler version to target their desired environment for verification.

Once the code is verified, users can access the verification status anytime and anywhere through the web interface. While developers handle the code verification on VeriWell, the individuals reviewing verified contracts are often non-developers. These users typically interact with the contract to manage their assets and need assurance of its safety. Since many of them lack coding knowledge, VeriWell provides an AI Code Assistance feature. This AI tool offers a comprehensive explanation of the code and analyzes potential vulnerabilities, enabling even non-technical users to understand the contract and assess its risks. Additionally, VeriWell allows users to interact directly with the contract. Before executing a transaction, users can inspect the functionality of the contract they are engaging with and view explanations from the AI assistant.

By bridging the gap between developers and end-users, VeriWell ensures a safer and more transparent smart contract ecosystem while aiming to expand Ethereum's robust verification culture across multiple blockchain networks.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
