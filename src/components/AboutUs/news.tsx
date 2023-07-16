import React from 'react';
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import { NewsInfos } from './aboutUs';

export default function News() {
  return (
    <Grid container spacing={1}>
      {NewsInfos.map((news, idex) => {
        return  (<Grid
          key={idex}
          item
          xs={news.wide ? 12 : 6}
          md={news.wide ? 6 : 3}
        >
          <Card
            sx={{
              background: `url(${news.imageUrl}) no-repeat center`,
              backgroundSize: 'cover',
              aspectRatio: `${news.wide ? 2/1 : 1}`
            }}
          >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0)',
                  '&:hover': {
                    background: 'rgba(0, 0, 0, 0.8)',
                    transition: '0.5s',
                    '.desc': {
                      transform: 'translateY(0%)',
                      transition: '0.5s',
                    }
                  },
                }}
              >
                <CardActionArea
                  sx={{ height: '100%' }}
                  style={{ textDecoration: 'none' }}
                  LinkComponent='a'
                  target='_blank'
                  href={news.url}
                  
                >
                  <CardContent
                    className='desc'
                    sx={{
                      transform: 'translateY(-100%)',
                    }}
                  >
                    <Typography variant='subtitle1' color="white" >
                      {news.title}                
                    </Typography>
                    <Typography variant='caption' color="white">
                      {news.description}                
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Box>
          </Card>
        </Grid>)        
      })}
    </Grid>
  );
}
