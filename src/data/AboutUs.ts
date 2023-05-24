export type News = {
  title: string;
  description?: string;
  url: string;
  imageUrl: string;
  wide: boolean;
};

export type MemberInfo = {
  img: string;
  link?: string;
}

export const NewsInfos: News[] = [
  {
    title: 'NEAR Migration',
    description:
      'We have an update to our tutorial: How to migrate the smart contract in @NEARProtocol written by @suji_forcrypto',
    url: 'https://twitter.com/WelldoneStudio_/status/1610155387877199873',
    imageUrl: 'https://pbs.twimg.com/media/FlhqddEaUAApfbd?format=jpg&name=medium',
    wide: false,
  },
  {
    title: 'WELLDONE Code',
    description:
      'The first and best developer tool for multi-chain voyagers, WELLDONE Code, has just made its OFFICIAL debut in Remix IDE!',
    url: 'https://twitter.com/WelldoneStudio_/status/1612375978868895744',
    imageUrl: 'https://pbs.twimg.com/media/FmBPN6faEAEeDoc?format=jpg&name=large',
    wide: false,
  },
  {
    title: 'CELESTIA launching',
    description:
      'WELLDONE Wallet, the first browser extension wallet to officially support Celestia, now joins the modular voyage',
    url: 'https://twitter.com/WelldoneStudio_/status/1604697099521531904',
    imageUrl: 'https://pbs.twimg.com/media/FkUHU7YUEAA9PX6?format=jpg&name=medium',
    wide: false,
  },
  {
    title: 'JUNO launching',
    description:
      `We are excited to announce that WELLDONEWallet now joins JUNO's voyage!`,
    url: 'https://twitter.com/WelldoneStudio_/status/1602540185194856448',
    imageUrl: 'https://pbs.twimg.com/media/Fj1byWAVUAAW3aw?format=jpg&name=medium',
    wide: false,
  },
  {
    title: 'WELLDONE Code JUNO',
    description:
      `We're excited to announce that our WELLDONE Code now allows you to deploy and interact with smart contracts on the @JunoNetwork using Remix IDE.`,
    url: 'https://twitter.com/WelldoneStudio_/status/1635584704572424194',
    imageUrl: 'https://pbs.twimg.com/media/FrLDl9VaQAAo574?format=jpg&name=medium',
    wide: false,
  },
  {
    title: 'Ahoy, Web3 voyagers!',
    description:
      `We're thrilled to announce our support for APTOS in WELLDONE Wallet`,
    url: 'https://twitter.com/WelldoneStudio_/status/1640993981575352323',
    imageUrl: 'https://pbs.twimg.com/media/FsX6PdvaIAEOS33?format=jpg&name=medium',
    wide: false,
  },
  {
    title: 'WELLDONE Code into the NEAR developer docs',
    description:
      `has been officially integrated into the NEAR Protocol developer documentation`,
    url: 'https://twitter.com/WelldoneStudio_/status/1638078237120278531',
    imageUrl: 'https://pbs.twimg.com/media/FrufYCaakAcSBr2?format=jpg&name=medium',
    wide: true,
  },
  {
    title: 'WELLDONE Code into the Aptos official docs',
    description:
      `if you are a developer looking for a user-friendly way to develop on APTOS, you can try it with Move language on WELLDONE Code Remix IDE plugin.`,
    url: 'https://twitter.com/WelldoneStudio_/status/1640994335306158080',
    imageUrl: 'https://pbs.twimg.com/media/FsX7fePakAAArwZ?format=jpg&name=medium',
    wide: true,
  },
  {
    title: '🚀 What is @WelldoneStudio_',
    description:
      `🚀 What is @WelldoneStudio_, supporting the developer ecosystem at @dsrvlabs, doing in the @SuiNetwork ecosystem? Let's dive in! (1/5)`,
    url: 'https://twitter.com/WelldoneStudio_/status/1646491918673801216',
    imageUrl: 'https://pbs.twimg.com/media/FtmDaP0aYAAhisf?format=jpg&name=large',
    wide: false,
  },
  {
    title: '🎊 Exciting news! @WelldoneStudio_',
    description:
      `🎊 Exciting news! @WelldoneStudio_ has been awarded a grant from @SuiNetwork following a rigorous milestone review.`,
    url: 'https://twitter.com/WelldoneStudio_/status/1653204149922848768',
    imageUrl: 'https://pbs.twimg.com/media/FvFRpuMaIAE9GR8?format=jpg&name=large',
    wide: false,
  },
  {
    title: '🍰 10% of all packages on #Sui mainnet were deployed',
    description:
      `🍰 10% of all packages on #Sui mainnet were deployed via #WelldoneCode! That's 328 of 3,353 packages since launch.`,
    url: 'https://twitter.com/WelldoneStudio_/status/1656957610594304000',
    imageUrl: 'https://pbs.twimg.com/media/Fv6xmveaMAAmb4j?format=jpg&name=large',
    wide: false,
  },
  {
    title: 'Ready to launch your Coin on Aptos?',
    description:
      `Use #WELLDONEWallet and #WELLDONECode and deploy directly through #RemixIDE.`,
    url: 'https://twitter.com/WelldoneStudio_/status/1660876026065620995',
    imageUrl: 'https://pbs.twimg.com/media/Fwyd8Q8aQAI2Tbj?format=jpg&name=large',
    wide: false,
  },
  {
    title: '#WELLDONEAcademy 2nd',
    description:
      `다음 달 #SuiBuilderHouse in Seoul을 앞두고, #WELLDONEAcademy 가 진행됐습니다🧑‍💻 이번 웰던 아카데미는 Sui에 대한 소개와 이론, 실제 온보딩까지의 지식을 한국의 #Sui 빌더들과 함께 나누었고, @SuiNetwork의 @theharrisonkim님도 함께 해주셔 더욱 뜻깊은 시간을 만들어 나갔습니다 🥳 @dsrvlabs`,
    url: 'https://twitter.com/WelldoneStudio_/status/1659153724550549506',
    imageUrl: 'https://pbs.twimg.com/media/FwZ9bHZacAESxHr?format=jpg&name=large',
    wide: true,
  },
  {
    title: 'Aptos Seoul Hack',
    description:
      '@HyunSooyoung, Lead Software Engineer of @WelldoneStudio_ by @dsrvlabs, introduced Remix IDE Plugin for @Aptos_Network',
    url: 'https://twitter.com/WelldoneStudio_/status/1620663212755795968',
    imageUrl: 'https://pbs.twimg.com/media/Fn2-8b2aMAAdWB4?format=jpg&name=large',
    wide: true,
  },
  {
    title: 'NEAR Blockchain Foundation Week',
    description:
      `@suji_forcrypto's presentation at @Xangle_official Blockchain Foundation Week.`,
    url: 'https://twitter.com/WelldoneStudio_/status/1613101799514439682',
    imageUrl: 'https://pbs.twimg.com/media/FmLjZnSaMAEqPga?format=jpg&name=large',
    wide: true,
  },
  {
    title: 'Xin chào, Voyagers!',
    description:
      `Kicking off with our WELLDONE Wallet presentation, look forward to new dev tools next month! Stay tuned!`,
    url: 'https://twitter.com/WelldoneStudio_/status/1637375082300358657',
    imageUrl: 'https://pbs.twimg.com/media/FrkdxHtXwAAW_il?format=jpg&name=large',
    wide: true,
  },
  {
    title: '🇭🇰 We Showcased our contributions to @SuiNetwork',
    description:
      `🎉 Fantastic session at the #SuiBuilderHouse event in Hong Kong today!`,
    url: 'https://twitter.com/WelldoneStudio_/status/1646826264349790212',
    imageUrl: 'https://pbs.twimg.com/media/FtqzfhuaMAA4HoH?format=jpg&name=large',
    wide: true,
  },
];

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
    img: 'https://avatars.githubusercontent.com/u/81923229?v=4', // '/img/aboutus_member_nahee.png',
    link: 'https://github.com/Nahee-Park',
  },
  {
    img: 'https://avatars.githubusercontent.com/u/70956926?v=4', // '/img/aboutus_member_suji.png',
    link: 'https://github.com/Yoon-Suji',
  },
];
