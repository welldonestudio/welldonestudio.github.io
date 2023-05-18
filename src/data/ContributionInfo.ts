export type CardInfo = {
  title: string;
  description: string;
  imgUrl: string;
  tags: TagType[];
  url: string;
};

export const Resources: CardInfo[] = [
  {
    title: 'WELLDONE Code(1) — Remix IDE plugin for Multichain',
    description: 'Introducing WELLDONE Code (Remix IDE Plugin) to NEAR Protocol Medium.',
    imgUrl: 'https://miro.medium.com/max/634/1*aUYd5CuQyRgLAtZzFjizGQ.png',
    tags: ['near', 'welldonecode', 'remix', 'article'],
    url: 'https://medium.com/nearprotocol/welldone-code-1-remix-ide-plugin-for-multichain-4b5228419ce5',
  },
  {
    title: 'WELLDONE Code(2) — Don’t trust, verify.',
    description: 'Introducing WELLDONE Code (Verification) to NEAR Protocol Medium.',
    imgUrl: 'https://miro.medium.com/max/1400/1*LR30Oix1WNjarT4yBmIkSQ.webp',
    tags: ['near', 'welldonecode', 'article'],
    url: 'https://medium.com/nearprotocol/welldone-code-2-dont-trust-verify-92a7ae2fe0b2',
  },
  {
    title: 'AwesomeNEAR - WELLDONE Wallet',
    description: 'Wallet for Web3 Voyagers',
    imgUrl: 'https://miro.medium.com/max/634/1*aUYd5CuQyRgLAtZzFjizGQ.png',
    tags: ['near', 'welldonewallet'],
    url: 'https://awesomenear.com/welldone-wallet',
  },
  {
    title: 'NEAR Wallet Selector',
    description:
      'This is a wallet selector modal that allows users to interact with NEAR dApps with a selection of available wallets.',
    imgUrl: 'https://miro.medium.com/max/634/1*aUYd5CuQyRgLAtZzFjizGQ.png',
    tags: ['near', 'welldonewallet', 'opensource'],
    url: 'https://github.com/near/wallet-selector',
  },
  {
    title: 'APTOS Wallet Adapter',
    description: 'A monorepo modular wallet adapter for Aptos applications',
    imgUrl: 'https://pbs.twimg.com/media/FsX6eDzagAImafI?format=jpg&name=medium',
    tags: ['aptos', 'welldonewallet', 'opensource'],
    url: 'https://github.com/aptos-labs/aptos-wallet-adapter',
  },
  {
    title: 'NEAR Official Docs',
    description: 'Introduction to how to use WELLDONE Code on NEAR',
    imgUrl: 'https://pbs.twimg.com/media/FrufYCaakAcSBr2?format=jpg&name=medium',
    tags: ['near', 'welldonecode', 'remix', 'article'],
    url: 'https://github.com/aptos-labs/aptos-wallet-adapter',
  },
  {
    title: 'APTOS Official Docs',
    description: 'Introduction to how to use WELLDONE Code on Aptos',
    imgUrl: 'https://pbs.twimg.com/media/FsX7fePakAAArwZ?format=jpg&name=large',
    tags: ['aptos', 'welldonecode', 'remix', 'article'],
    url: 'https://aptos.dev/community/contributions/remix-ide-plugin/',
  },
  {
    title: 'SUI Directory - WELLDONE Wallet',
    description:
      'WELLDONE Wallet is an integrated, non-custodial wallet that allows you to freely manage your assets across any network.',
    imgUrl: 'https://pbs.twimg.com/media/FtmDaP0aYAAhisf?format=jpg&name=medium',
    tags: ['sui', 'welldonewallet'],
    url: 'https://sui.directory/project/welldone-wallet/',
  },
  {
    title: 'SUI Directory - WELLDONE Code',
    description:
      'WELLDONE Code is a web-based tool with Move module deployment features and capabilities for developers to interact with deployed modules.',
    imgUrl: 'https://pbs.twimg.com/media/FtmDaP0aYAAhisf?format=jpg&name=medium',
    tags: ['sui', 'welldonecode'],
    url: 'https://sui.directory/project/welldone-code/',
  },
  {
    title: 'SUI Developer Portal - WELLDONE Code',
    description:
      'This plug-in for the Remix web-based IDE features a graphical interface for developing Move modules.',
    imgUrl: 'https://pbs.twimg.com/media/FtmDaP0aYAAhisf?format=jpg&name=medium',
    tags: ['sui', 'welldonecode'],
    url: 'https://sui.io/developers',
  },
  {
    title: 'Deploy & Write NEAR Smart Contracts on REMIX IDE',
    description: 'Tutorial video about how to deploy & write NEAR Smart Contracts on REMIX IDE',
    imgUrl: 'https://img.youtube.com/vi/wtumV7ffuhk/0.jpg',
    tags: ['near', 'welldonecode', 'remix', 'video'],
    url: 'https://www.youtube.com/watch?v=wtumV7ffuhk',
  },
  {
    title: 'JUNO Ecosystem - WELLDONE Code',
    description:
      'WELLDONE Code is a Remix IDE plugin to deploy and execute CosmWasm smart contracts',
    imgUrl: 'https://pbs.twimg.com/media/FrLDl9VaQAAo574?format=jpg&name=medium',
    tags: ['juno', 'welldonecode'],
    url: 'https://junonetwork.io/ecosystem/',
  },
  {
    title: 'Awesome-CosmWasm: WELLDONE Code',
    description: 'Remix IDE plugin that supports CosmWasm.',
    imgUrl: 'https://miro.medium.com/max/1400/1*LR30Oix1WNjarT4yBmIkSQ.webp',
    tags: ['cosmos', 'welldonecode', 'cosmwasm'],
    url: 'https://github.com/CosmWasm/awesome-cosmwasm',
  },
];

export type TagType =
  | 'near'
  | 'aptos'
  | 'sui'
  | 'juno'
  | 'cosmos'
  | 'welldonecode'
  | 'remix'
  | 'cosmwasm'
  //   | 'verification'
  | 'welldonewallet'
  | 'article'
  | 'video'
  | 'opensource';

export const Tags: { [type in TagType]: { color: string; name: string } } = {
  near: {
    color: 'var(--ifm-color-primary)',
    name: 'NEAR',
  },
  aptos: {
    color: 'var(--ifm-color-primary)',
    name: 'APTOS',
  },
  sui: {
    color: 'var(--ifm-color-primary)',
    name: 'SUI',
  },
  juno: {
    color: 'var(--ifm-color-primary)',
    name: 'JUNO',
  },
  cosmos: {
    color: 'var(--ifm-color-primary)',
    name: 'COSMOS',
  },
  welldonecode: {
    color: 'var(--ifm-color-secondary)',
    name: 'WELLDONE Code',
  },
  welldonewallet: {
    color: 'var(--ifm-color-secondary)',
    name: 'WELLDONE Wallet',
  },
  remix: {
    color: 'var(--ifm-color-primary-dark)',
    name: 'RemixIDE',
  },
  cosmwasm: {
    color: 'var(--ifm-color-primary-dark)',
    name: 'CosmWasm',
  },
  article: {
    color: 'var(--ifm-color-warning)',
    name: 'Article',
  },
  video: {
    color: 'var(--ifm-color-warning)',
    name: 'Video',
  },
  opensource: {
    color: 'var(--ifm-color-warning)',
    name: 'Open Source',
  },
};
