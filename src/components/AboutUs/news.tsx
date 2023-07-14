import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Card from '../Card';
import { NewsInfos } from './aboutUs';

export default function News() {
  const [width, setWidth] = useState<number>(window.innerWidth);

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
    <Box
      style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {NewsInfos.map((news, idex) => {
          return  (<Card
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
    </Box>
  );
}
