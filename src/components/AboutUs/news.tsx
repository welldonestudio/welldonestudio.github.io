import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery, useTheme } from '@mui/material';
import { NewsInfos } from './aboutUs';

export default function News() {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <ImageList cols={matchDownMd ? 2 : 4} rowHeight={250}>
      {NewsInfos.map((news, key) => (
        <ImageListItem
          key={key}
          cols={news.wide ? 2 : 1}
          sx={{
            background: 'rgba(0, 0, 0, 0)',
            '&:hover': {
              border: `solid 3px rgba(0,0,0,0)`,
              transition: '0.5s',
              '& .desc': {
                background: 'rgba(1, 1, 1, 1)',
                transform: 'translateY(0%)',
                opacity: 1,
                transition: '0.5s',
              }
            },
            overflow: 'clip'
          }}
        >
          <a target='_blank' href={news.url}>
            <img
              src={news.imageUrl}
              alt={news.title}
              loading="lazy"
              style={{
                  position: 'absolute',
                  top:0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
              }}
            />
            <ImageListItemBar
              className='desc'
              title={news.title}
              subtitle={news.description}
              sx={{
                transform: 'translateY(100%)',
                opacity: 0,
              }}
            />
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
