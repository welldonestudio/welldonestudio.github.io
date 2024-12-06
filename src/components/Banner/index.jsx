import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Chip, Hidden } from '@mui/material';
import Player from '../utils/player';

const CONTENTS = {
  WELLCOME: '🎉  WELLDONE Wallet is out!',
  ZKWALLET1: 'Incredibly simple,',
  ZKWALLET2: 'transactions in a flash.',
  TRY: 'Try a single wallet for all your crypto assets.',
  NEAR: 'NEAR Migration Helper',
  NEAR_TRY: 'Try to Move your NEAR asset to a private wallet.',
};

function Banner() {
  const handleClick = () => {
    window.open('http://docs.welldonestudio.io/tutorials/sui-zklogin/');
  };
  const handleNear = () => {
    window.open('https://docs.welldonestudio.io/contribution/near-welldone-migration/');
  };
  return (
    <section className={styles.banner_wrapper}>
      <Box
        className={styles['banner-section2']}
        sx={{
          width: {
            xs: '100%',
            sm: 'calc(100% - 10px * 2)',
          },
          marginTop: {
            xs: '16px',
            sm: '32px',
          },
        }}
        onClick={handleClick}
      >
        <span className={styles['contents--wellcome']}>
          <Box
            style={{ display: 'flex', justifyContent: 'space-between' }}
            sx={{ padding: { xs: '20px', md: '40px' } }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                width: { xs: '43px', md: '61px' },
              }}
            >
              <img src={'/img/veriwell-w.svg'} />
              <Box
                sx={{
                  fontSize: { xs: '16px', md: '24px' },
                  marginBottom: '0',
                  lineHeight: '120%',
                  letterSpacing: '-1px',
                }}
              >
                WELLDONE <br />
                VeriWell
              </Box>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Box
                className={styles['banner-linear-gradient']}
                sx={{ fontSize: { xs: '14px', md: '24px', textAlign: 'end' } }}
              >
                Web-based multi-chain <br />
                smart contract verification platform.
              </Box>
              <ArrowForwardIcon
                sx={{ fontSize: 24, display: { xs: 'none', sm: 'block' }, marginLeft: '16px' }}
              />
            </Box>
          </Box>
        </span>
        <Box
          sx={{
            marginTop: '20px',
            width: '100%',
            height: '100%',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://veriwell.dev/?address=0x050156fbc05986ecb19c7b64a5f951d0d83dfa4920bb61be7b8365e25af93a65"
            title="VeriWell"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </Box>
        {/* iframe here */}
      </Box>
      <Chip
        label="New"
        color="primary"
        size="small"
        sx={{
          position: 'absolute',
          top: { xs: '44px', sm: '60px' },
          left: { xs: '20px', sm: '40px' },
        }}
      />
    </section>
  );
}

export default Banner;
