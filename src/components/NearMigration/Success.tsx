import React from 'react';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import CustomizedSteppers from './ProgressBar';

export const Success = () => {
  const Logo = require('@site/static/img/image-welldone-littlebird.svg').default;
  const handleClick = (e) => {
    window.open('https://docs.welldonestudio.io/', '_self');
  };
  return (
    <>
      <span className={styles['near-subtitle']}>Near Wallet Migration Service</span>
      <div className={styles['near-title']} style={{ marginBottom: '86px' }}>
        <span style={{ paddingRight: '15.6px' }}>Well done!</span>
        <Logo role="img" />
      </div>
      <div className={styles['near-roundbox']} style={{ marginBottom: '32px' }}>
        <span className={styles['near-contents']}>
          Wallet migration succeeded. <br /> We are very happy that you have started <br /> your
          voyage with WELLDONE Studio.
          <br />
          <br />
          Feel free to explore other production in WELLDONE Studio!
        </span>
      </div>
      <Button
        sx={{
          padding: '11px 20px',
          fontFamily: 'SUIT',
          textTransform: 'none',
          margin: '0 auto',
          marginBottom: '93px',
        }}
        className={styles['near-btn']}
        color="primary"
        variant="contained"
        onClick={handleClick}
      >
        <span className={styles['near-btn-text']} style={{ padding: '0' }}>
          Go to Mainpage
        </span>
      </Button>
      <CustomizedSteppers step={4} />
    </>
  );
};
