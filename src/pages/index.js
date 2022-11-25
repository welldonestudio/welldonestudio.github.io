import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';

import styles from './index.module.css';
import Banner from '../components/Banner';

function HomepageHeader() {
  const location = useLocation();
  const lang = location.pathname === '/' ? 'en' : 'ko';
  const { siteConfig } = useDocusaurusContext();
  const description = {
    ko: '다양한 목적의 블록체인 인프라를 사용자 친화적인 인터페이스로 구축합니다.',
    en: siteConfig.tagline,
  };
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{description[lang]}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/intro">
            Getting Started ⚡
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="WELLDONE Studio - For Web3 Voyagers"
      description="Delivering a powerfully enhanced and integrated experience for Web3 players across all chains"
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <meta name="title" content="WELLDONE Studio - For Web3 Voyagers" />
        <meta
          name="description"
          content="Delivering a powerfully enhanced and integrated experience for Web3 players across all chains"
        />

        <meta property="og:title" content="WELLDONE Studio - For Web3 Voyagers" />
        <meta
          property="og:description"
          content="Delivering a powerfully enhanced and integrated experience for Web3 players across all chains"
        />
        <meta property="og:image" content="https://docs.welldonestudio.io/img/seo/discord_fb.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://www.welldonestudio.com" />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@WelldoneStudio_" />
        <meta property="twitter:title" content="WELLDONE Studio - For Web3 Voyagers" />
        <meta
          property="twitter:description"
          content="Delivering a powerfully enhanced and integrated experience for Web3 players across all chains"
        />
        <meta
          property="twitter:image"
          content="https://docs.welldonestudio.io/img/seo/twitter_max.png"
        />

        <meta
          name="keywords"
          // eslint-disable-next-line max-len
          content="WELLDONE, WELLDONE Studio, WELLDONE Wallet, WELLDONE Assets, WELLDONE Code, WELLDONE Docs, WELLDONE Add Chain, Multichain, dsrv, allthatnode, web3, web3 voyager, blockchain, blockchain infra, chain, asset management, klaytn asset management, provider, smart contract, chain network, IDE, Celo extension wallet, defi, bridge, ethereum, cosmos, celo, solana, neon, near, klaytn, sui, aptos, 웰던 독스, 웰던 코드, 웰던 월렛, 웰던, 디에스알브이랩스 웰던 독스, 웰던스튜디오, 웰던 스튜디오, dsrv 웰던, dsrvlabs 웰던"
        />
      </Head>
      <HomepageHeader />
      <aside className={styles.banner}>
        <Banner />
      </aside>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
