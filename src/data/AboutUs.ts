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
    url: 'https://twitter.com/WelldoneStudio_/status/1612375978868895744?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/FmBPN6faEAEeDoc?format=jpg&name=large',
    wide: false,
  },
  {
    title: 'CELESTIA launching',
    description:
      'WELLDONE Wallet, the first browser extension wallet to officially support Celestia, now joins the modular voyage',
    url: 'https://twitter.com/WelldoneStudio_/status/1604697099521531904?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/FkUHU7YUEAA9PX6?format=jpg&name=medium',
    wide: false,
  },
  {
    title: 'JUNO launching',
    description:
      `We are excited to announce that WELLDONEWallet now joins JUNO's voyage!`,
    url: 'https://twitter.com/WelldoneStudio_/status/1602540185194856448?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/Fj1byWAVUAAW3aw?format=jpg&name=medium',
    wide: false,
  },
  {
    title: 'WELLDONE Code Support JUNO',
    description:
      `We're excited to announce that our WELLDONE Code now allows you to deploy and interact with smart contracts on the @JunoNetwork using Remix IDE.`,
    url: 'https://twitter.com/WelldoneStudio_/status/1635584704572424194?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/FrLDl9VaQAAo574?format=jpg&name=medium',
    wide: false,
  },
  {
    title: 'WELLDONE Code into the NEAR developer docs',
    description:
      `has been officially integrated into the NEAR Protocol developer documentation`,
    url: 'https://twitter.com/WelldoneStudio_/status/1638078237120278531?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/FrufYCaakAcSBr2?format=jpg&name=medium',
    wide: false,
  },
  {
    title: 'Aptos Seoul Hack',
    description:
      '@HyunSooyoung, Lead Software Engineer of @WelldoneStudio_ by @dsrvlabs, introduced Remix IDE Plugin for @Aptos_Network',
    url: 'https://twitter.com/WelldoneStudio_/status/1620663212755795968?s=20&t=mjQxCco2f8SAy00OE0RcaA',
    imageUrl: 'https://pbs.twimg.com/media/Fn2-8b2aMAAdWB4?format=jpg&name=large',
    wide: true,
  },
  {
    title: 'NEAR Blockchain Foundation Week',
    description:
      `@suji_forcrypto's presentation at @Xangle_official Blockchain Foundation Week.`,
    url: 'https://twitter.com/WelldoneStudio_/status/1613101799514439682?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/FmLjZnSaMAEqPga?format=jpg&name=large',
    wide: true,
  },
  {
    title: 'Xin chào, Voyagers!',
    description:
      `Kicking off with our WELLDONE Wallet presentation, look forward to new dev tools next month! Stay tuned!`,
    url: 'https://twitter.com/WelldoneStudio_/status/1637375082300358657?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/FrkdxHtXwAAW_il?format=jpg&name=4096x4096',
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
