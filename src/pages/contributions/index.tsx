import React, { Dispatch, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardInfo, Resources, Tags, TagType } from '../../data/ContributionInfo';
import { Chip } from '@mui/material';

function ContributionHeader() {
  return (
    <section className={styles['header-section']}>
      <p className={styles['title']}>WELLDONE Studio's Contribution</p>
      <p className={styles['desc']}>
        Below is a list of contents that WELLDONE Studio contributed to outside.
      </p>
    </section>
  );
}

function ContributionTags({ setTag }: { setTag: Dispatch<React.SetStateAction<string>> }) {
  const [selectedTag, setSelectedTag] = useState('');

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag('');
      setTag('');
    } else {
      setSelectedTag(tag);
      setTag(tag);
    }
  };

  const tagLists = Object.keys(Tags).map((key) => {
    const isTagSelected = selectedTag === key;
    console.log(key, isTagSelected, selectedTag);
    return (
      <Chip
        sx={{
          border: `1px solid ${Tags[key].color}`,
          color: key === selectedTag ? 'black' : `${Tags[key].color}`,
          backgroundColor: key === selectedTag ? `${Tags[key].color}` : 'transparent',
          '&:hover': {
            backgroundColor: key === selectedTag ? `${Tags[key].color} !important` : 'transparent',
          },
          '& .MuiButtonBase-root-MuiChip-root:hover': {
            backgroundColor: 'red',
          },
        }}
        label={Tags[key].name}
        variant="outlined"
        size="medium"
        onClick={() => {
          handleTagClick(key);
        }}
      />
    );
  });
  return (
    <section>
      <h2>Tags</h2>
      <div className={styles['tag-contents']}>{tagLists}</div>
    </section>
  );
}

function ContributionList({ tag }: { tag: string }) {
  const tagLists = (card: CardInfo) => {
    return card.tags.map((tag, index) => {
      return (
        <Chip
          sx={{ border: `1px solid ${Tags[tag].color}`, color: `${Tags[tag].color}` }}
          label={Tags[tag].name}
          variant="outlined"
          size="small"
        />
      );
    });
  };

  const cardLists = (Cards: CardInfo[]) => {
    return Cards.filter((card: CardInfo) => {
      if (tag) {
        return card.tags.includes(tag as TagType);
      } else {
        return true;
      }
    }).map((card: CardInfo) => {
      return (
        <Card
          sx={{ maxHeight: 400, borderRadius: '24px', backgroundColor: '#20222A' }}
        >
          <CardMedia sx={{ height: 150 }} image={card.imgUrl} title={card.title} />
          <CardContent
            sx={{
              color: 'white',
              height: 240,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Link to={card.url} style={{ color: 'white' }}>
                <p className={styles['card-title']}>{card.title}</p>
              </Link>
              <p className={styles['card-desc']}>{card.description}</p>
            </div>
            <div className={styles['tags']}>{tagLists(card)}</div>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <div>
      <section>
        <h2>Contributions</h2>
        <div className={styles['content-section']}>{cardLists(Resources)}</div>
      </section>
    </div>
  );
}

export default function Contribution() {
  const [tag, setTag] = useState('');
  return (
    <Layout
      title="WELLDONE Studio - Contribution List"
      description="WELLDONE Studio Contribution List"
    >
      <main className={styles['container']}>
        <ContributionHeader />
        <ContributionTags setTag={setTag} />
        <ContributionList tag={tag} />
      </main>
    </Layout>
  );
}
