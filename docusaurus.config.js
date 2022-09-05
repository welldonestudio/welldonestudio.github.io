// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welldone Studio Docs',
  tagline: 'We build multi-purpose blockchain infrastructure with a user-friendly interface.',
  url: 'https://docs.welldonestudio.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'welldonestudio', // Usually your GitHub org/user name.
  projectName: 'welldonestudio.github.io', // Usually your repo name.
  deploymentBranch: 'gp-deploy',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
    },
  },

  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/welldonestudio/welldonestudio.github.io/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'always',
          priority: 1,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
    // [
    //   '@docusaurus/preset-classic',
    //   {
    //     googleAnalytics: {
    //       trackingID: 'G-BSDBQBFKPH',
    //       anonymizeIP: true,
    //     },
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      metadata: [
        {
          name: 'twitter:image',
          content: 'https://docs.welldonestudio.io/img/seo/twitter_max.png',
        },
        {
          name: 'og:image',
          content: 'https://docs.welldonestudio.io/img/seo/discord_fb.png',
        },
        {
          name: 'og:image:type',
          content: 'image/png',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:site_name',
          content: 'welldonestudio.io',
        },
        {
          name: 'twitter:site',
          content: 'welldonestudio.io',
        },
        {
          name: 'twitter:card',
          content: 'website',
        },
        {
          name: 'twitter:title',
          content: 'WELLDONE Studio - For Web3 Voyagers',
        },
        {
          name: 'twitter:description',
          content:
            'Delivering a powerfully enhanced and integrated experience for Web3 players across all chains',
        },
        {
          name: 'keywords',
          content:
            'WELLDONE, WELLDONE Studio, WELLDONE Wallet, WELLDONE Assets, WELLDONE Code, WELLDONE Docs, WELLDONE Add Chain, Multichain, dsrv, allthatnode, web3, web3 voyager, blockchain, blockchain infra, chain, asset management, klaytn asset management, provider, smart contract, chain network, IDE, Celo extension wallet, defi, bridge, ethereum, cosmos, celo, solana, neon, near, klaytn, sui, aptos, 웰던 독스, 웰던 코드, 웰던 월렛, 웰던, 디에스알브이랩스 웰던 독스, 웰던스튜디오, 웰던 스튜디오, dsrv 웰던, dsrvlabs 웰던',
        },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'site logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            to: '/docs/intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            // type: 'doc2',
            to: '/docs/deploy-and-run',
            // to: 'https://docs.welldonestudio.io/docs/deploy-and-run',
            // target: '_self',
            position: 'left',
            label: 'WELLDONE Code',
          },
          {
            // type: 'doc3',
            to: '/docs/add-chain',
            // target: '_self',
            position: 'left',
            label: 'WELLDONE Addchain',
          },
          // {
          //   href: 'https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf',
          //   target: '_blank',
          //   position: 'left',
          //   label: 'WELLDONE Wallet',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                to: 'https://github.com/welldonestudio/welldonestudio.github.io/tree/master',
                label: 'Help us translate',
              },
            ],
          },
          {
            href: 'https://github.com/welldonestudio/welldonestudio.github.io/tree/master',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      algolia: {
        appId: 'PJZVC50ZFW',
        apiKey: '6e4eb2d00091f243294acfb28f221b36',
        indexName: 'dev_welldone',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'WELLDONE Studio Docs',
                href: 'https://github.com/welldonestudio/welldonestudio.github.io/tree/master',
              },
              {
                label: 'DSRV',
                href: 'https://github.com/dsrvlabs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'DSRV',
                href: 'https://www.dsrvlabs.com/',
              },
              {
                label: 'Blog',
                href: 'https://dsrv.medium.com/',
              },
              {
                label: 'Add Chain',
                href: 'https://addchain.welldonestudio.io',
              },
              {
                label: 'All That Node',
                href: 'https://www.allthatnode.com',
              },
            ],
          },
        ],
        logo: {
          alt: 'Powered by DSRV',
          src: 'img/iso_dsrv.png',
          // width: 50,
          height: 50,
        },
        copyright: '© DSRV labs. All Rights Reserved.',
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    },
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-BSDBQBFKPH',
        anonymizeIP: true,
      },
    ],
    [
      'docusaurus2-dotenv',
      {
        systemvars: true,
      },
    ],
  ],
};

module.exports = config;
