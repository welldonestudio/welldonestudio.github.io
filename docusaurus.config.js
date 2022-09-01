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
          editUrl: 'https://github.com/welldonestudio/welldonestudio.github.io/blob/master',
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
      metadata: [
        {
          name: 'welldone studio code docs',
          content: 'welldone studio, dsrvlabs, add chain, dsrv, all that node, welldone wallet',
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
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            // type: 'doc',
            // docId: 'Deploy-and-Run/index',
            to: 'https://docs.welldonestudio.io/docs/Deploy-and-Run',
            target: '_self',
            position: 'left',
            label: 'WELLDONE Code',
          },
          {
            // type: 'doc',
            // docId: 'Deploy-and-Run/index',
            to: 'https://docs.welldonestudio.io/docs/add-chain',
            target: '_self',
            position: 'left',
            label: 'WELLDONE Addchain',
          },
          // {
          //   href: 'https://addchain.welldonestudio.io/',
          //   target: '_blank',
          //   position: 'left',
          //   label: 'WELLDONE Addchain',
          // },
          {
            href: 'https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf',
            target: '_blank',
            position: 'left',
            label: 'WELLDONE Wallet',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                to: 'https://github.com/welldonestudio/welldonestudio.github.io',
                label: 'Help us translate',
              },
            ],
          },
          {
            href: 'https://github.com/welldonestudio/welldonestudio.github.io',
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
                href: 'https://github.com/welldonestudio/welldonestudio.github.io',
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
                href: 'https://addchain.welldonestudio.io/ethereum',
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
