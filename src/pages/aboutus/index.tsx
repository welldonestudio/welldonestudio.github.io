import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import CardNews from '../../components/Card';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MembersImg, NewsInfos } from '../../data/AboutUs';
import BrowserOnly from '@docusaurus/BrowserOnly';

function Introdunction() {
  return (
    <section className="introduction">
      <div className={styles['brand-img']}></div>
      <p className={styles['section-title']}>WELCOME to WELLDONE!</p>
      <p className={styles['section-contents']}>
        WELLDONE Studio is a subteam of DSRV that specializes in creating tools for web3 developers.
        We offer a suite of products that integrate disparate web3 development experiences to assist
        builders in developing more naturally and simply. We goal is to make the Web3 experience
        more familiar for developers and to help them realize their full potential.
      </p>
      <p className={styles['section-contents']}>
        The products offered by WELLDONE Studio include WELLDONE Wallet, WELLDONE AddChain, and
        WELLDONE Code. WELLDONE Wallet allows users to create an account in a multi-chain
        environment with a single click and manage assets across any network. AddChain allows users
        to simply add a network, and WELLDONE Code allows users to easily deploy and execute
        contracts to multi-networks in a Remix IDE environment. Our team plans to support more
        networks in the future and to provide a standardized and integrated multi-chain development
        environment for developers.
      </p>
    </section>
  );
}

function Roadmap() {
  const [roadmap, setRoadmap] = React.useState<string>('code');

  const handleRoadmap = (event: React.MouseEvent<HTMLElement>, product: string) => {
    setRoadmap(product ? product : roadmap);
  };

  return (
    <section className="roadmap">
      <p className={styles['section-title']}>Our Roadmap</p>
      <ToggleButtonGroup
        value={roadmap}
        exclusive
        onChange={handleRoadmap}
        aria-label="roadmap"
        className={styles['button-groups']}
        sx={{
          gap: '8px',
          width: '100%',
          paddingBottom: '32px',
          '& .MuiToggleButton-root': {
            '&.Mui-selected': {
              border: '2px solid #FFFFFF',
              borderRadius: '2px',
              color: 'white',
            },
          },
          '& .MuiToggleButton-root:hover': {
            background: 'rgba(255, 255, 255, 0.08);',
          },
          '& .MuiToggleButtonGroup-grouped': {
            width: '50%',
            height: '64px',
            fontFamily: 'SUIT',
            fontWeight: '800',
            fontSize: '1.5rem',
            lineHeight: '150%',
            color: 'white',
          },
        }}
      >
        <ToggleButton value="code" aria-label="left aligned" className={styles['code-buttons']}>
          CODE
        </ToggleButton>
        <ToggleButton value="wallet" aria-label="centered" className={styles['wallet-buttons']}>
          WALLET
        </ToggleButton>
      </ToggleButtonGroup>
      {roadmap === 'code' ? (
        <div
          className={styles['roadmap']}
          style={{ backgroundImage: `url('img/aboutus_code_roadmap.png')` }}
        ></div>
      ) : (
        <div
          className={styles['roadmap']}
          style={{ backgroundImage: `url('img/aboutus_wallet_roadmap.png')` }}
        ></div>
      )}
    </section>
  );
}

function News() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const Twitter = require('@site/static/img/aboutus_twitter.svg').default;
  const Medium = require('@site/static/img/aboutus_medium.svg').default;

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  });

  return (
    <section
      className="news"
      style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
    >
      <div className={styles['news-title']}>
        <p className={styles['section-title']}>News</p>
        <div className={styles['news-icons']}>
          <button
            className={styles['news-button']}
            onClick={() => window.open('https://twitter.com/WelldoneStudio_')}
          >
            <Twitter role="img" />
          </button>
          <button
            className={styles['news-button']}
            onClick={() => window.open('https://dsrv.medium.com/')}
          >
            <Medium role="img" />
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {NewsInfos.map((news, idx) => {
          if (width >= 982) {
            return (
              <CardNews
                title={news.title}
                url={news.url}
                imageUrl={news.imageUrl}
                description={news.description}
                idx={idx}
              />
            );
          }
          if (width <= 768 && idx < 5) {
            return (
              <CardNews title={news.title} url={news.url} imageUrl={news.imageUrl} idx={idx} />
            );
          } else if (width > 768) {
            return (
              <CardNews title={news.title} url={news.url} imageUrl={news.imageUrl} idx={idx} />
            );
          }
        })}
      </div>
    </section>
  );
}

function Brand() {
  return (
    <section className="brand">
      <p className={styles['section-title']}>Our Brand</p>
      <div className={styles['intro-img']}></div>
      <p className={styles['section-contents']}>
        WELLDONE Studio is a leading developer of blockchain tools and solutions. Our flagship
        product, WELLDONE Code, is a web-based IDE that supports multiple blockchain protocols
        including Ethereum, NEAR, Celo, and Klaytn. The tool is designed to streamline the building
        process for developers, providing them with a single platform for all their web3 building
        needs. In addition to WELLDONE Code, we also offer WELLDONE Wallet, a multi-chain wallet
        that supports popular protocols such as Ethereum, Celo, Klaytn, and NEAR. The wallet is
        designed to provide users with a seamless and secure way to manage their digital assets
        across multiple blockchain networks. Our mission is to empower developers and users alike to
        easily navigate and build on multiple blockchain protocols, thus enabling them to fully
        realize the potential of web3 technology. With our cutting-edge tools and solutions, we
        strive to make the blockchain ecosystem more accessible and user-friendly.
      </p>
    </section>
  );
}

function Members() {
  const member1 = (url: string) => {
    return (
      <div
        className={styles['members-1']}
        style={{
          background: `url(${url}) no-repeat center`,
          backgroundSize: 'cover',
        }}
        onClick={() => window.open('https://www.dsrvlabs.com/about/#member')}
      ></div>
    );
  };
  const member2 = (url: string) => {
    return (
      <div
        className={styles['members-2']}
        style={{
          background: `url(${url}) no-repeat center`,
          backgroundSize: 'cover',
        }}
        onClick={() => window.open('https://www.dsrvlabs.com/about/#member')}
      ></div>
    );
  };
  return (
    <section className="members">
      <p className={styles['section-title']}>Our Members</p>
      <div className={styles['members']}>
        {MembersImg.map((url, idx) => {
          if (idx < 3) {
            return member1(url);
          }
          return member2(url);
        })}
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <Layout
      title="WELLDONE Studio - Contribution List"
      description="WELLDONE Studio Contribution List"
    >
      <main className={styles['container']}>
        <Introdunction />
        <Roadmap />
        <BrowserOnly>{() => <News />}</BrowserOnly>
        <Brand />
        <Members />
      </main>
    </Layout>
  );
}
