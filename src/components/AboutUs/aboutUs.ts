export type NewsItems = {
  title: string;
  description?: string;
  url: string;
  imageUrl: string;
  cols?: number;
  rows?: number;
};

export type MemberInfo = {
  img: string;
  link?: string;
}

export const NewsInfos: { pined: NewsItems[]; more: NewsItems[]; } = {
  pined: [
    {
      title: 'WELLDONE Wallet, your trusted companion in developing the multi-chain universe, hits 1000 dev user!',
      description: `✔️ Supports 10+ major chains ✔️ Integrated with 7 Codes on REMIX IDE ✔️ Ensures solid security in a non-custodial system We've got a lot more in the works! Join for the ride 😉`,
      url: 'https://twitter.com/WelldoneStudio_/status/1735869552280666577',
      imageUrl: 'https://pbs.twimg.com/media/GBcL_dfbsAAoYhh.jpg',
      cols: 2,
      rows: 2,
    },
    {
      title: "<🤝 Official Partnership with @EthereumRemix>",
      description:
        `REMIX team, @ethereum dev standard-setter, & WELLDONE Studio, multi-chain pioneer, are thrilled to announce our partnership from @dsrvlabs' event! 🚀 We'll enhance Web3's growth with our strong foundation & creative scalability!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1698594019545370754',
      imageUrl: 'https://pbs.twimg.com/media/F5KauidacAAcHLP.jpg',
      cols: 2,
      rows: 1,
    },
    {
      title: '#WELLDONEAcademy-Aptos & Seoul Hack 2023',
      description:
        `we're reflecting on our #Aptos contributions via #WELLDONEAcademy-Aptos & Seoul Hack 2023.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1665668297822724096',
      imageUrl: 'https://pbs.twimg.com/media/Fx2kfKDaYAET5Yz.jpg',
      cols: 1,
      rows: 1,
    },
    {
      title: 'Aptos Seoul Hack',
      description:
        '@HyunSooyoung, Lead Software Engineer of @WelldoneStudio_ by @dsrvlabs, introduced Remix IDE Plugin for @Aptos_Network',
      url: 'https://twitter.com/WelldoneStudio_/status/1620663212755795968',
      imageUrl: 'https://pbs.twimg.com/media/Fn2-8b2aMAAdWB4.jpg',
      cols: 1,
      rows: 1,
    },
    {
      title: `Code Verification SIP for Security`,
      description:
        `And we're back from break at #SuiBuilderHouse! 🎉 Next up, we're proud to share the submission of our Code Verification SIP for Security.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1664859406725705736',
      imageUrl: 'https://pbs.twimg.com/media/FxrEpQIaYAEHIe8.jpg',
      cols: 1,
      rows: 1,
    },
    {
      title: '🎉 Success at Hack Holland #AptosWorldTour! 🇳🇱',
      description:
        `#WelldoneStudio has just concluded our presentation on code verification.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1666498577101889539',
      // imageUrl: 'https://pbs.twimg.com/media/FyCO2SracAA4yyd.jpg',
      imageUrl: '/img/sns/FyCO2SracAA4yyd.jpg',
      cols: 1,
      rows: 1,
    },
    {
      title: "At #DSRVBuildersHouse, we had an amazing session with @ve_Rust from @proximityfi and a surprise talk by @ilblackdragon !",
      description:
        `We're thrilled about how game development with Unity 3D on the #NEAR Blockchain OS has become incredibly simple. Gamification is drawing Near! Dive in: https://welldone-gateway.vercel.app @NEARProtocol @dsrvlabs #BOS #KBW2023`,
      url: 'https://twitter.com/WelldoneStudio_/status/1698250039079113145',
      imageUrl: 'https://pbs.twimg.com/media/F5Fizo2bIAAPbVJ?format=jpg&name=4096x4096',
      cols: 2,
      rows: 1,
    },
    {
      title: "Had an electrifying moment demonstrating our #WELLDONEWallet's feature for @CeloOrg with CTO @marek_ 🙌",
      description:
        `We're proud of our contribution, enabling users to select the currency for gas fee and @Ledger in Celo network from our wallet.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1679794767721549826',
      imageUrl: 'https://pbs.twimg.com/media/F0-msDHacAAkc8G.jpg',
      cols: 1,
      rows: 1,
    },
    {
      title: '🍰 10% of all packages on #Sui mainnet were deployed via #WelldoneCode!',
      description:
        `That's 328 of 3,353 packages since launch. We're proud to make a significant contribution to #SuiNetwork.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1656957610594304000',
      imageUrl: 'https://pbs.twimg.com/media/Fv6xmveaMAAmb4j.jpg',
      cols: 1,
      rows: 1,
    },
    {
      title: `We are thrilled to share that we've seamlessly integrated with #zkLogin, a cutting-edge product by @SuiNetwork.`,
      description: `Join zkWallet to enjoy fast, secure, and low-cost transactions with no intermediaries!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1750491245825433607',
      imageUrl: 'https://pbs.twimg.com/media/GEryyLea0AEQxkL?format=jpg&name=large',
      cols: 2,
      rows: 1,
    },
  ],
  more: [
    {
      title: "🔆 Experience #Web3 dev revolution with #WELLDONEWallet & #WELLDONECode!",
      description:`With a focus on the Web3 community, we embarked on a journey filled with activities and contributions.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1677314742686187521',
      imageUrl: 'https://pbs.twimg.com/media/F0cEfMKX0AE2raL.jpg',
    },
    {
      title: '🔆 Experience #Web3 dev revolution with #WELLDONEWallet & #WELLDONECode!',
      description:`Enhancing @EthereumRemix with variety of #blockchain languages like #Solidity, #RustLang, #MoveLang. Voyage to endless opportunities!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1663501882575421441',
      imageUrl: 'https://pbs.twimg.com/media/FxXuFx1aIAAuqZM?format=jpg&name=large',
    },
    {
      title: 'NEAR Migration',
      description:
        'We have an update to our tutorial: How to migrate the smart contract in @NEARProtocol written by @suji_forcrypto',
      url: 'https://twitter.com/WelldoneStudio_/status/1610155387877199873',
      imageUrl: 'https://pbs.twimg.com/media/FlhqddEaUAApfbd.jpg',
    },
    {
      title: '👉Will you be migrating your #NEAR wallet?',
      description:
        `Let's do it well with the WELLDONE wallet!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1684814260546031616',
      imageUrl: 'https://pbs.twimg.com/media/F02b2NCXwA4HQwS.jpg',
    },
    {
      title: 'WELLDONE Code',
      description:
        'The first and best developer tool for multi-chain voyagers, WELLDONE Code, has just made its OFFICIAL debut in Remix IDE!',
      url: 'https://twitter.com/WelldoneStudio_/status/1612375978868895744',
      imageUrl: 'https://pbs.twimg.com/media/FmBPN6faEAEeDoc.jpg',
    },
    {
      title: 'CELESTIA launching',
      description:
        'WELLDONE Wallet, the first browser extension wallet to officially support Celestia, now joins the modular voyage',
      url: 'https://twitter.com/WelldoneStudio_/status/1604697099521531904',
      imageUrl: 'https://pbs.twimg.com/media/FkUHU7YUEAA9PX6.jpg',
    },
    {
      title: 'JUNO launching',
      description:
        `We are excited to announce that WELLDONEWallet now joins JUNO's voyage!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1602540185194856448',
      imageUrl: 'https://pbs.twimg.com/media/Fj1byWAVUAAW3aw.jpg',
    },
    {
      title: 'WELLDONE Code JUNO',
      description:
        `We're excited to announce that our WELLDONE Code now allows you to deploy and interact with smart contracts on the @JunoNetwork using Remix IDE.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1635584704572424194',
      imageUrl: 'https://pbs.twimg.com/media/FrLDl9VaQAAo574.jpg',
    },
    {
      title: 'Ahoy, Web3 voyagers!',
      description:
        `We're thrilled to announce our support for APTOS in WELLDONE Wallet`,
      url: 'https://twitter.com/WelldoneStudio_/status/1640993981575352323',
      imageUrl: 'https://pbs.twimg.com/media/FsX6PdvaIAEOS33.jpg',
    },
    {
      title: '@Neutron_org joined #WELLDONEWallet,',
      description:
        `expanding interchain possibilities for #CosmWasm's ecosystem.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1679076137228533761',
      imageUrl: 'https://pbs.twimg.com/media/F01FxP4WwAAixrS.jpg',
    },
    {
      title: 'WELLDONE Code into the NEAR developer docs',
      description:
        `has been officially integrated into the NEAR Protocol developer documentation`,
      url: 'https://twitter.com/WelldoneStudio_/status/1638078237120278531',
      imageUrl: 'https://pbs.twimg.com/media/FrufYCaakAcSBr2.jpg',
    },
    {
      title: 'WELLDONE Code into the Aptos official docs',
      description:
        `if you are a developer looking for a user-friendly way to develop on APTOS, you can try it with Move language on WELLDONE Code Remix IDE plugin.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1640994335306158080',
      imageUrl: 'https://pbs.twimg.com/media/FsX7fePakAAArwZ.jpg',
    },
    {
      title: "Quantum jump for #Neutron devs and the @cosmos ecosystem is on the horizon with WELLDONE Studio!",
      description:
        `🌌 Discover:
        1. Neutron supported in WELLDONE Wallet and Code.
        2. Explore our listing in the official Neutron docs: https://docs.neutron.org/tutorials/cosmwasm_remix
        
        Learn more at: https://docs.welldonestudio.io/code/getting-started`,
      url: 'https://twitter.com/WelldoneStudio_/status/1689191534221258752',
      imageUrl: 'https://pbs.twimg.com/media/F3E2GWCawAAOAde.jpg',
    },
    {
      title: '🚀 What is @WelldoneStudio_',
      description:
        `supporting the developer ecosystem at @dsrvlabs, doing in the @SuiNetwork ecosystem? Let's dive in! (1/5)`,
      url: 'https://twitter.com/WelldoneStudio_/status/1646491918673801216',
      imageUrl: 'https://pbs.twimg.com/media/FtmDaP0aYAAhisf.jpg',
    },
    {
      title: '🎊 Exciting news! @WelldoneStudio_',
      description:
        `has been awarded a grant from @SuiNetwork following a rigorous milestone review.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1653204149922848768',
      imageUrl: 'https://pbs.twimg.com/media/FvFRpuMaIAE9GR8.jpg',
    },
    {
      title: '#WELLDONEAcademy 2nd',
      description:
        `다음 달 #SuiBuilderHouse in Seoul을 앞두고, #WELLDONEAcademy 가 진행됐습니다🧑‍💻 이번 웰던 아카데미는 Sui에 대한 소개와 이론, 실제 온보딩까지의 지식을 한국의 #Sui 빌더들과 함께 나누었고, @SuiNetwork의 @theharrisonkim님도 함께 해주셔 더욱 뜻깊은 시간을 만들어 나갔습니다 🥳 @dsrvlabs`,
      url: 'https://twitter.com/WelldoneStudio_/status/1659153724550549506',
      imageUrl: 'https://pbs.twimg.com/media/FwZ9bHZacAESxHr.jpg',
    },
    {
      title: '🔭 Voyagers, ready for #SuiBuilderHouse Hackathon in Seoul?',
      description:
        `Dive into browser-based #WELLDONEWallet & #WELLDONECode to build @SuiNetwork's apps.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1664086383449997312',
      imageUrl: 'https://blog.sui.io/content/images/size/w2000/2023/05/InstantCoding1_hdr.jpg',
    },
    {
      title: 'Ready to launch your Coin on Aptos?',
      description:
        `Use #WELLDONEWallet and #WELLDONECode and deploy directly through #RemixIDE.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1660876026065620995',
      imageUrl: 'https://pbs.twimg.com/media/Fwyd8Q8aQAI2Tbj.jpg',
    },
    {
      title: 'Hoi! 🇳🇱 the Hack Holland #AptosWorldTour.',
      description:
        `we're equipping your Move-ment to be 'Apt to Succeed' on your #Aptos voyage. Let's foster the bloom of #Web3 🌷!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1665582483105271808',
      imageUrl: 'https://pbs.twimg.com/media/Fx1UrTgaEAI2A-k.jpg',
    },
    {
      title: 'NEAR Blockchain Foundation Week',
      description:
        `@suji_forcrypto's presentation at @Xangle_official Blockchain Foundation Week.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1613101799514439682',
      imageUrl: 'https://pbs.twimg.com/media/FmLjZnSaMAEqPga.jpg',
    },
    {
      title: 'Xin chào, Voyagers!',
      description:
        `Kicking off with our WELLDONE Wallet presentation, look forward to new dev tools next month! Stay tuned!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1637375082300358657',
      imageUrl: 'https://pbs.twimg.com/media/FrkdxHtXwAAW_il.jpg',
    },
    {
      title: '🇭🇰 We Showcased our contributions to @SuiNetwork',
      description:
        `🎉 Fantastic session at the #SuiBuilderHouse event in Hong Kong today!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1646826264349790212',
      imageUrl: 'https://pbs.twimg.com/media/FtqzfhuaMAA4HoH.jpg',
    },
    {
      title: 'Annyeonghaseyo! 🇰🇷',
      description:
        ` we were thrilled to conduct a workshop on #WELLDONEWallet & #WELLDONECode for #Sui users! We hope you found it useful for optimizing your onboarding process.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1664844779774164994',
      imageUrl: 'https://pbs.twimg.com/media/Fxq2abnaEAADPIT.jpg',
    },
    {
      title: 'The future is #NEAR, and #BOS is the Future!',
      description:
        `Great chat with @ilblackdragon, CEO of @NEARProtocol!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1666821782194753539',
      imageUrl: 'https://pbs.twimg.com/media/FyG9cYsaUAEuW1n.jpg',
    },
    {
      title: 'Sui Move Developer Coworking Meetup',
      description:
        `🧑‍💻 Exciting 'Sui Move Developer Coworking Meetup' (모각코) in Seoul today!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1676956264495210496',
      imageUrl: 'https://pbs.twimg.com/media/F0WzAOcacAEXvq-.jpg',
    },
    {
      title: 'At our workshop hosted by @AwesomWasm,',
      description:
        `We demonstrated how #WELLDONEWallet & #WELLDONECode can help onboard newcomers or developers from other chains to Neutron_org with ease.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1679346745304596480',
      imageUrl: 'https://pbs.twimg.com/media/F00vP2cXgAAkPF_.jpg',
    },
    {
      title: "Thanks to @CosmWasm and @misangmadrid for the fantastic invitation to the incredible #HackWasm event!",
      description:
        `In our session, we delved into the core of code verification and had insightful discussions for the robustness of the Cosmwasm ecosystem. It was an awesome and WELLDONE time😆! @cosmos @AwesomWasm @Neutron_org @dsrvlabs`,
      url: 'https://twitter.com/WelldoneStudio_/status/1680836111101472768',
      imageUrl: 'https://pbs.twimg.com/media/F1OE7s1agAED9rD.jpg',
    },
    {
      title: "🎉 What a fantastic session at @ethconkr!",
      description:
        `WELLDONE Studio talked about our brilliant collaboration with @EthereumRemix, our unified philosophy on multi-chains, and the future of sustainable blockchain dev infrastructure.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1697819572928409883',
      imageUrl: 'https://pbs.twimg.com/media/F4_dAcpaIAA2R2i.jpg',
    },
    {
      title: "🙌 Big S/O to Rob from @EthereumRemix and @maczniak from @AllThatNode for the Remix ZKP Challenge! ",
      description:
        `We used Remix to submit proofs instead of direct answers, ensuring privacy while proving solutions. Correct proofs could earn a Remixer NFT. Stay tuned for our next session! #DSRVBuildersHouse`,
      url: 'https://twitter.com/WelldoneStudio_/status/1698178638179606598',
      imageUrl: 'https://pbs.twimg.com/media/F5Ejx-TboAALFpm.jpg',
    },
    {
      title: "Fantastic live session by @sunny_yooo 🚀!",
      description:
        `She leveraged @NEARProtocol BOS to decentralize gaming ecosystem an innovative approach to web3 development. We're looking forward to a multi-chain ecosystem on #BOS. Try our @SuiNetwork game on BOS!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1703761198049554835',
      imageUrl: 'https://img.youtube.com/vi/RYGNBjdnYfg/maxresdefault.jpg',
    },
    {
      title: "and...One more thing 👀",
      description:
        `To make our idea work seamlessly, we've developed and been using WELLDONE Wallet for multi-chain.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1703761200574828905',
      imageUrl: 'https://img.youtube.com/vi/wtumV7ffuhk/maxresdefault.jpg',
    },
    {
      title: "💧@SuiNetwork에 대한 한국어 강의가 필요하신가요?",
      description:
        `WELLDONE Studio가 한국 최고의 교육 플랫폼 @inflearn에서 Sui 강의를 무료로 배포합니다. 학습 중 궁금한 것이 생기면 편하게 알려주세요. 찾아오시면 더 좋습니다!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1704324117707837593',
      imageUrl: '/img/sns/1704356222814875684.jpeg',
    },
    {
      title: "Yeah, here we go! 🚀",
      description:
        `🇰🇷 WELLDONE Studio has designed a course tailored for Korean-speaking developers interested in building on the @SuiNetwork.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1705075468389720070',
      imageUrl: '/img/sns/1704933531942834232.jpg',
    },
    {
      title: "Ready to unlock Arbitrum's potential with Rust on REMIX, $ARB holders?",
      description:
        `WELLDONE Code is live at @gitcoin's Grant Funding Fest (Dev Tooling). We integrated @EthereumRemix & @rustlang for EVM+ smart contracts!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1705486907613048986',
      imageUrl: 'https://pbs.twimg.com/media/F6sYk32awAA5Q6g.jpg',
    },
    {
      title: '🎊 WELLDONE Studio is celebrating the one-year anniversary of @aptos_network mainnet launch!',
      description: `Our collaboration has created a stronger flow for the L1 blockchain with Move language, and the grant proves it. Let's keep pushing forward together 😉.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1714553743608513007',
      imageUrl: 'https://pbs.twimg.com/media/F8tRVLXbYAAyG-p.jpg',
    },
    {
      title: '💙 Sharing a fantastic partnership session with the @EthereumRemix team!',
      description: `Our collaboration is just beginning, with the aim of further enriching the multi-chain ecosystem!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1715240578311663861',
      imageUrl: 'https://pbs.twimg.com/media/F82xKHeaQAAf1bA.jpg',
    },
    {
      title: '@dsrv/kms by WELLDONE Studio is making a new history as a multi-chain key management package!',
      description: `Explore keys, signatures, and wallets with our experts from @dsrvlabs`,
      url: 'https://twitter.com/WelldoneStudio_/status/1715686215889146133',
      imageUrl: 'https://pbs.twimg.com/media/F89GyoQbYAABPX5.jpg',
    },
    {
      title: '😉WELL-DONE, @movebuilders!',
      description: `We'll always grind to make onboarding for #movelang easier with @EthereumRemix 🚀 #PublicGoodsAreGood`,
      url: 'https://twitter.com/WelldoneStudio_/status/1709802726488777074',
      imageUrl: 'https://pbs.twimg.com/media/F7m2kVuaYAAxf4F.jpg',
      cols: 1,
      rows: 1,
    },
    {
      title: '<Secure Coding: Essential for Safe Applications >',
      description: `🛡 In a dynamic multi-chain dev ecosystem, secure coding is crucial. Last week, WELLDONE Studio held a workshop envisioning an ideal Web3 environment, emphasizing secure practices. Let's always prioritize our code safety!`,
      url: 'https://twitter.com/WelldoneStudio_/status/1730793680498475218',
      imageUrl: 'https://pbs.twimg.com/media/GAUDpULbsAAA4hI.jpg',
    },
    {
      title: "<WELLDONE Studio's 2023 Milestones>",
      description: `Wrapping up 2023, we reflect on a remarkable year at WELLDONE Studio! 🚀`,
      url: 'https://twitter.com/WelldoneStudio_/status/1740613787785506919',
      imageUrl: 'https://pbs.twimg.com/media/GCfkhrpa8AAMw8p.jpg',
    },
    {
      title: "We have just unveiled an article on the Aptos Account Model",
      description: `Resource Accounts, Standard Accounts, Object Model. Available in both English and Korean.`,
      url: 'https://twitter.com/WelldoneStudio_/status/1745371576202371548',
      imageUrl: 'https://pbs.twimg.com/media/GDjOLPjbsAEEfRx.jpg',
    },
  ],
};

export const MembersInfos: MemberInfo[] = [
  {
    img: 'https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Dohyoung-Lim_Head-of-Contribution.jpg',
  },
  {
    img: 'https://www.dsrvlabs.com/wp-content/uploads/2022/05/18.-Sooyoung_Hyun-747x1120.jpg',
  },
  {
    img: 'https://www.dsrvlabs.com/wp-content/uploads/2022/08/Yoonsoo_Jang-747x1120.jpg',
  },
  {
    img: 'https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Hyunsun-Yoo_Software-Engineer.jpg',
  },
  {
    img: 'https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Kwanhyung-Lee_UI_UX-Designer.jpg',
  },
  {
    img: 'https://www.dsrvlabs.com/wp-content/uploads/2023/05/-%EC%B5%9C%EC%A2%85-e1684901426721.jpg',
  },
  {
    img: 'https://avatars.githubusercontent.com/u/81923229?v=4', // '/img/aboutus_member_nahee.png',
    link: 'https://github.com/Nahee-Park',
  },
  {
    img: 'https://avatars.githubusercontent.com/u/70956926?v=4', // '/img/aboutus_member_suji.png',
    link: 'https://github.com/Yoon-Suji',
  },
];
