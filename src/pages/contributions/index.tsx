import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import styles from './index.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardInfo, CardInfos, Tags } from '../../data/ContributionInfo';
import { Chip } from '@mui/material';

function ContributionHeader() {
  const location = useLocation();
  const lang = location.pathname.split('/')[0] === '' ? 'en' : 'ko';
  const description = {
    ko: '아래는 WELLDONE Studio에서 외부에 기고한 컨텐츠 목록입니다. WELLDONE Studio는 Web3 항해자들을 위해 ',
    en: 'Below is a list of contents that WELLDONE Studio contributed to outside.',
  };
  return (
    <section className={styles['header-section']}>
      <h1>WELLDONE Studio's Contribution</h1>
      <p>{description[lang]}</p>
    </section>
  );
}

function ContributionTags() {
  return (
    <section>
      <h2>Tags</h2>
      <div></div>
    </section>
  );
}

function ContributionList() {
  const tagLists = (card: CardInfo) => {
    return card.tags.map((tag, index) => {
      return <Chip label={Tags[tag].name} variant="outlined" color="warning" size="small" />;
    });
  };

  const cardLists = CardInfos.map((card: CardInfo, index: number) => {
    return (
      <Card
        sx={{ maxWidth: 350, maxHeight: 400, borderRadius: '24px', backgroundColor: '#20222A' }}
      >
        <CardMedia sx={{ height: 150 }} image={card.imgUrl} title={card.title} />
        <CardContent sx={{ color: 'white' }}>
          <Link to={card.url} style={{ color: 'white' }}>
            <p className={styles['card-title']}>{card.title}</p>
          </Link>
          <p className={styles['card-desc']}>{card.description}</p>
          {tagLists(card)}
        </CardContent>
      </Card>
    );
  });
  return (
    <div>
      <section>
        <h2>Medium</h2>
        <div className={clsx('row', 'container')} style={{ gap: '16px', marginBottom: '50px' }}>
          {cardLists}
        </div>
      </section>
      <section>
        <h2>Open Source Contribution</h2>
        <div className={clsx('row', 'container')} style={{ gap: '16px', marginBottom: '50px' }}>
          {cardLists}
        </div>
      </section>
    </div>
  );
}

export default function Contribution() {
  return (
    <Layout
      title="WELLDONE Studio - Contribution List"
      description="WELLDONE Studio Contribution List"
    >
      <main className="container">
        <ContributionHeader />
        <ContributionTags />
        <ContributionList />
      </main>
    </Layout>
  );
}
