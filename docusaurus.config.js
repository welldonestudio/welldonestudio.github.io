// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welldone Studio Docs by DSRV',
  tagline: 'We build multi-purpose blockchain infrastructure with a user-friendly interface.',
  url: 'https://welldonestudio.github.io/',
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
      metadata: [{name: 'welldone studio code docs', content: 'welldone studio, dsrvlabs, add chain, dsrv, all that node, welldone wallet'}],
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
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                to: 'https://github.com/dsrvlabs/wds-code-docs',
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
        apiKey: 'afcc898bfecc17633f3c2dfc4c4092f9',
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
                href: 'https://addchain.welldonestake.io/ethereum',
              },
              {
                label: 'All That Node',
                href: 'https://www.allthatnode.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DSRV.`,
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
        "docusaurus2-dotenv",
        {
          systemvars: true,
        },
      ],
    ],
};

module.exports = config;
