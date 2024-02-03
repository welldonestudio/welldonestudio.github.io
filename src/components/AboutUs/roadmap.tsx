import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';

export default function Roadmap() {
  const [milestone, setMileStone] = React.useState<number>(2);

  return (
    <Box>
      <Tabs variant="fullWidth" textColor="inherit" value={milestone}
        onChange={(_, newValue) => setMileStone(newValue)}
      >
        <Tab label="2022" style={{ fontFamily: 'SUIT', fontWeight: '800', fontSize: '1.5rem'}} />
        <Tab label="2023" style={{ fontFamily: 'SUIT', fontWeight: '800', fontSize: '1.5rem'}} />
        <Tab label="2024" style={{ fontFamily: 'SUIT', fontWeight: '800', fontSize: '1.5rem'}} />
      </Tabs>
      {milestone === 0 && (
        <div
          style={{
            backgroundImage: `url('/img/aboutus_roadmap_2022.webp')`,
            backgroundSize: 'cover',
            width: '100%',
            aspectRatio: '3200/3981'
          }}
        />
      )}
      {milestone === 1 && (
        <div
          style={{
              backgroundImage: `url('/img/aboutus_roadmap_2023.webp')`,
              backgroundSize: 'cover',
              width: '100%',
              aspectRatio: '2200/6376'
          }}
        />      
      )}
      {milestone === 2 && (
        <div
          style={{
              backgroundImage: `url('/img/aboutus_roadmap_2024.webp')`,
              backgroundSize: 'cover',
              width: '100%',
              aspectRatio: '2000/3490'
          }}
        />      
      )}
    </Box>
  );
}
