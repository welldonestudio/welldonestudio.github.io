import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import CardNews from '../../components/Card';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MembersInfos, NewsInfos } from '../../data/AboutUs';

function Introdunction() {
  return (
    <section className="introduction">
      <p className={styles['section-title']}>WELCOME to WELLDONE!</p>
      <p className={styles['section-contents']}>
        WELLDONE Studio is a specialist team within <a href='https://dsrvlabs.com' target="_blank">DSRV</a>,
        dedicated to crafting tools that streamline the web3 development process.
        With our comprehensive suite of products, we aim to create a familiar,
        integrated environment for developers to harness the full potential of Web3.
      </p>
      <div className={styles['brand-img']}></div>
      <p className={styles['section-contents']}>
        Our offerings, such as the <a href='https://chrome.google.com/webstore/detail/welldone-wallet-for-multi/bmkakpenjmcpfhhjadflneinmhboecjf' target="_blank">WELLDONE Wallet</a>,
        <a href='https://addchain.welldonestudio.io/' target="_blank">WELLDONE AddChain</a>, and <a href='https://docs.welldonestudio.io/code' target="_blank">WELLDONE Code</a>,
        are specifically designed to address the unique challenges of multi-chain development.
        These tools simplify various tasks from account creation and asset management to the addition of new networks and contract deployment across multiple networks. 
      </p>
      <p className={styles['section-contents']}>
        As we continuously expand our support for additional networks, our goal remains to provide a standardized and integrated multi-chain development platform.
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
          style={{ backgroundImage: `url('/img/aboutus_roadmap_code.jpg')` }}
        ></div>
      ) : (
        <div
          className={styles['roadmap']}
          style={{ backgroundImage: `url('/img/aboutus_roadmap_wallet.jpg')` }}
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
          <a className={styles['news-button']} target='_blank' href='https://twitter.com/WelldoneStudio_'>
            <Twitter role="img" />
          </a>
          <a className={styles['news-button']} target='_blank' href='https://dsrv.medium.com/'>
            <Medium role="img" />
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {NewsInfos.map((news, idex) => {
          return  (<CardNews
            key={idex}
            title={news.title}
            url={news.url}
            imageUrl={news.imageUrl}
            description={news.description}
            width={width}
            wide={news.wide}
          />)        
        })}
      </div>
    </section>
  );
}

function Brand() {
  return (
    <section className="brand">
      <p className={styles['section-title']}>For Web3 Voyagers.</p>
      <p className={styles['section-contents']}>
        Elevating the Web3 space, our brand paves the way for a streamlined journey across the digital frontier.
        We champion standardization, offering state-of-the-art tools that translate into a seamless, consistent experience for Web3 explorers.
      </p>
      <p className={styles['section-contents']}>
        With us, the value of Web3 unfolds through a harmonized expedition, universally accessible.
        We leave our footprint at every Web3 gateway, demonstrating our contribution and pioneering expertise in the ever-evolving Web3 standards. Explore with us.
        Pioneer with us. Let's shape the future of Web3 together.
      </p>
      <div className={styles['intro-img']}></div>
    </section>
  );
}

function Members() {
  return (
    <section className="members">
      <p className={styles['section-title']}>Our Members</p>
      <div className={styles['members']}>
        {MembersInfos.map(({ img, link }, index) => {
          return (
            <a key={index} className={styles['members-1']} target='_blank' href={link ? link : 'https://www.dsrvlabs.com/about/#member'}>
              <img
                src={img}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)'
                }}
              />
            </a>
          );
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
