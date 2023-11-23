import React, { Dispatch, useState } from 'react';
import { Chip, Card, CardContent, CardMedia, Grid, Stack, Typography, Link } from '@mui/material';
import { CardInfo, Resources, Tags, TagType } from './contributions';

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

  const tagLists = Object.keys(Tags).map((key, index) =>
    <Chip
      key={index}
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

  return (
    <>
      <h2>Tags</h2>
      <div>{tagLists}</div>
    </>
  );
}

function ContributionList({ tag }: { tag: string }) {
  const tagLists = (card: CardInfo) => {
    return card.tags.map((tag, index) => {
      return (
        <Chip
          key={index}
          sx={{ border: `1px solid ${Tags[tag].color}`, color: `${Tags[tag].color}` }}
          label={Tags[tag].name}
          variant="outlined"
          size="small"
        />
      );
    });
  };

  const cardLists = () => {
    return Resources.filter((card: CardInfo) => {
      if (tag) {
        return card.tags.includes(tag as TagType);
      } else {
        return true;
      }
    }).map((card: CardInfo, index) => {
      return (
        <Grid key={index} item xs={12} md={6} lg={6} xl={4}>
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
              <Stack>
                <Typography gutterBottom variant="body1" color="white" component={Link} href={card.url} target='_blank' sx={{ fontWeight: 'bold' }}>
                  {card.title}
                </Typography>
                <Typography variant="caption" color="white">
                  {card.description}
                </Typography>
              </Stack>
              <div>{tagLists(card)}</div>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <>
      <h2>Contributions</h2>
      <Grid container spacing={1}>{cardLists()}</Grid>
    </>
  );
}

export default function Contributions() {
  const [tag, setTag] = useState('');
  return (
    <>
      <ContributionTags setTag={setTag} />
      <ContributionList tag={tag} />
    </>
  );
}
