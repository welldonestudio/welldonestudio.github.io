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
  const video = require('@site/static/video/banner.mp4').default;
  return (
    <header className={clsx('hero--primary', styles.heroBanner)}>
      <div className={styles.videoContainer}>
        <video muted playsInline autoPlay loop>
          <source src={`${video}`} type="video/mp4"></source>
        </video>
        <div className={styles.container}>
          <div>
            <h1 className="hero__title">Tools for Web3 Voyagers.</h1>
            <p className="hero__subtitle">{description[lang]}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.button)}
                to="/intro"
              >
                Getting Started ⚡
              </Link>
            </div>
          </div>
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
      description="Delivering a powerfully enhanced and integrated experience for Web3 players across all blockchains - ethereum, cosmos, solana, near, sui, aptos, juno, injective, archway, celo"
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <meta name="title" content="WELLDONE Studio - For Web3 Voyagers" />
        <meta
          name="description"
          content="Delivering a powerfully enhanced and integrated experience for Web3 players across all blockchains"
        />

        <meta property="og:title" content="WELLDONE Studio - For Web3 Voyagers" />
        <meta
          property="og:description"
          content="Delivering a powerfully enhanced and integrated experience for Web3 players across all blockchains"
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
          content="Delivering a powerfully enhanced and integrated experience for Web3 players across all blockchains"
        />
        <meta
          property="twitter:image"
          content="https://docs.welldonestudio.io/img/seo/twitter_max.png"
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
