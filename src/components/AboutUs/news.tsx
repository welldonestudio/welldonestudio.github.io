import React from 'react';
import { Button, Divider, ImageList, ImageListItem, ImageListItemBar, useMediaQuery, useTheme } from '@mui/material';
import { News, NewsInfos } from './aboutUs';

export default function News() {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
  const [isOpen, setIsopen] = React.useState<boolean>(false);

  const DrawImage = ({item}: {item: News}) => {
    return (
      <ImageListItem
        cols={item.cols || 1}
        rows={item.rows || 1}
        sx={{
          background: 'rgba(0, 0, 0, 0)',
          '&:hover': {
            '& .image': {
              transform: 'scale(1.2)',
              transition: '1s',
            },
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
        <a target='_blank' href={item.url}>
          <img
            className='image'
            src={item.imageUrl}
            alt={item.title}
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
            title={item.title}
            subtitle={item.description}
            sx={{
              transform: 'translateY(100%)',
              opacity: 0,
            }}
          />
        </a>
      </ImageListItem>
    );
  }

  return (
    <>
      <ImageList cols={matchDownMd ? 2 : 4} rowHeight={250} variant="quilted">
        {NewsInfos.pined.map((item, key) => (
          <DrawImage key={key} item={item} />
        ))}
      </ImageList>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <hr style={{ flex: 1, opacity: 0.5 }} />
          <Button
            sx={{ marginX: 1 }}
            onClick={()=>setIsopen(!isOpen)}
          >
            More
          </Button>
        <hr style={{ flex: 1, opacity: 0.5 }} />
      </div>
      <div
        style={{
          opacity: !isOpen ? "0" : "1",
          transition: "all .2s",
          visibility: !isOpen ? "hidden" : "visible",
          display: !isOpen ? "none" : "block",
        }}
      >
        <ImageList
          cols={matchDownMd ? 2 : 4}
          rowHeight={250}
          style={{ marginTop: 12 }}
        >
          {NewsInfos.more.map((item, key) => (
            <DrawImage key={key} item={item} />
          ))}
        </ImageList>
      </div>
    </>
  );
}
