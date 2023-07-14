import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function Roadmap() {
  const [roadmap, setRoadmap] = React.useState<string>('code');

  const handleRoadmap = (event: React.MouseEvent<HTMLElement>, product: string) => {
    setRoadmap(product ? product : roadmap);
  };

  return (
    <Box>
      <ToggleButtonGroup
        value={roadmap}
        exclusive
        onChange={handleRoadmap}
        aria-label="roadmap"
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
        <ToggleButton value="code" aria-label="left aligned">
          CODE
        </ToggleButton>
        <ToggleButton value="wallet" aria-label="centered">
          WALLET
        </ToggleButton>
      </ToggleButtonGroup>
      {roadmap === 'code' ? (
        <div
          style={{
              backgroundImage: `url('/img/aboutus_roadmap_code.jpg')`,
              backgroundSize: 'cover',
              width: '100%',
              aspectRatio: '2400/3024'
          }}
        />
      ) : (
        <div
          style={{
            backgroundImage: `url('/img/aboutus_roadmap_wallet.jpg')`,
            backgroundSize: 'cover',
            width: '100%',
            aspectRatio: '2400/3024'
            }}
            />
        )}
    </Box>
  );
}
