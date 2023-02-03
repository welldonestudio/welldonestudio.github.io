export type News = {
  title: string;
  description?: string;
  url: string;
  imageUrl: string;
};

export const NewsInfos: News[] = [
  {
    title: 'NEAR Migration',
    description:
      'We have an update to our tutorial: How to migrate the smart contract in @NEARProtocol written by @suji_forcrypto',
    url: 'https://twitter.com/WelldoneStudio_/status/1610155387877199873',
    imageUrl: 'https://pbs.twimg.com/media/FlhqddEaUAApfbd?format=jpg&name=medium'
  },
  {
    title: 'WELLDONE Code',
    description:
      'The first and best developer tool for multi-chain voyagers, WELLDONE Code, has just made its OFFICIAL debut in Remix IDE!',
    url: 'https://twitter.com/WelldoneStudio_/status/1612375978868895744?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/FmBPN6faEAEeDoc?format=jpg&name=large'
  },
  {
    title: 'CELESTIA launching',
    description:
      'WELLDONE Wallet, the first browser extension wallet to officially support Celestia, now joins the modular voyage',
    url: 'https://twitter.com/WelldoneStudio_/status/1604697099521531904?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/FkUHU7YUEAA9PX6?format=jpg&name=medium'
  },
  {
    title: 'JUNO launching',
    description:
      `We are excited to announce that WELLDONEWallet now joins JUNO's voyage!`,
    url: 'https://twitter.com/WelldoneStudio_/status/1602540185194856448?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/Fj1byWAVUAAW3aw?format=jpg&name=medium'
  },
  {
    title: 'Aptos Seoul Hack',
    description:
      '@HyunSooyoung, Lead Software Engineer of @WelldoneStudio_ by @dsrvlabs, introduced Remix IDE Plugin for @Aptos_Network',
    url: 'https://twitter.com/WelldoneStudio_/status/1620663212755795968?s=20&t=mjQxCco2f8SAy00OE0RcaA',
    imageUrl: 'https://pbs.twimg.com/media/Fn2-8b2aMAAdWB4?format=jpg&name=large'
  },
  {
    title: 'NEAR Blockchain Foundation Week',
    description:
      `@suji_forcrypto's presentation at @Xangle_official Blockchain Foundation Week.`,
    url: 'https://twitter.com/WelldoneStudio_/status/1613101799514439682?s=20&t=NUSFM_8JQYAQeo8xVyRRbw',
    imageUrl: 'https://pbs.twimg.com/media/FmLjZnSaMAEqPga?format=jpg&name=large'
  }
];

export const MembersImg: string[] = [
  'https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Dohyoung-Lim_Head-of-Contribution.jpg',
  'https://www.dsrvlabs.com/wp-content/uploads/2022/05/18.-Sooyoung_Hyun-747x1120.jpg',
  'https://www.dsrvlabs.com/wp-content/uploads/2022/08/Yoonsoo_Jang-747x1120.jpg',
  'https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Hyunsun-Yoo_Software-Engineer.jpg',
  'https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Kwanhyung-Lee_UI_UX-Designer.jpg',
  'img/aboutus_member_nahee.png',
  'img/aboutus_member_suji.png'
];
