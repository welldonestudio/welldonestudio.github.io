import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Getting Started ⚡
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="WELLDONE Studio Docs by DSRV">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />

          <meta name="title" content="WELLDONE Studio - For Web3 Voyagers" />
          <meta name="description" content="Delivering a powerfully enhanced and integrated experience for Web3 players across all chains" />

          <meta property="og:title" content="WELLDONE Studio - For Web3 Voyagers" />
          <meta property="og:description" content="Delivering a powerfully enhanced and integrated experience for Web3 players across all chains" />
          <meta property="og:image" content="https://docs.welldonestudio.io/img/seo/discord_fb.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:url" content="https://www.welldonestudio.com" />
          <meta property="og:type" content="website" />

          <meta property="twitter:card" content="website" />
          <meta property="twitter:site" content="https://www.welldonestudio.com" />
          <meta property="twitter:title" content="WELLDONE Studio - For Web3 Voyagers" />
          <meta
            property="twitter:description"
            content="Delivering a powerfully enhanced and integrated experience for Web3 players across all chains"
          />
          <meta property="twitter:image" content="https://docs.welldonestudio.io/img/seo/twitter_max.png" />

          <meta
            name="keywords"
            // eslint-disable-next-line max-len
            content="WELLDONE, WELLDONE Studio, WELLDONE Wallet, WELLDONE Assets, WELLDONE Code, WELLDONE Add Chain, Multichain, dsrv, allthatnode, web3, web3 voyager, blockchain, blockchain infra, chain, asset management, klaytn asset management, provider, smart contract, chain network, IDE, Celo extension wallet, defi, bridge, ethereum, cosmos, celo, solana, neon, near, klaytn, sui, aptos"
          />
        </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
