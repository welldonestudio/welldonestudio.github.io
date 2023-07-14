import React from 'react';
import { Box, Grid } from '@mui/material';
import { MembersInfos } from './aboutUs';

export default function Members() {
  return (
    <Box>
      <Grid container spacing={1}>
        {MembersInfos.map(({ img, link }, index) => {
          return (
              <Grid item key={index} xs={6} md={3}>
            <a target='_blank' href={link ? link : 'https://www.dsrvlabs.com/about/#member'}>
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
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
  