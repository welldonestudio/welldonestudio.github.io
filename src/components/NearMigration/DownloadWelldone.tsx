import React from 'react';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import CustomizedSteppers from './ProgressBar';

export const DownloadWelldone = () => {
  const TextBox = require('@site/static/img/near-migration-textbox.svg').default;
  const Bird = require('@site/static/img/near-migration-bird.svg').default;
  const ArrowRight = require('@site/static/img/arrow-right-white.svg').default;
  console.log(styles);
  console.log(styles['near-subtitle']);
  const handleClick = () => {
    window.location.reload();
  };
  const handleWelldone = () => {
    window.open(
      'https://chrome.google.com/webstore/detail/welldone-wallet-for-multi/bmkakpenjmcpfhhjadflneinmhboecjf',
    );
  };

  const handleManual = () => {
    window.open('https://docs.welldonestudio.io/wallet/manual/how-to-create-a-wallet');
  };
  return (
    <>
      <span className={styles['near-subtitle']}>Near Wallet Migration Service</span>
      <div className={styles['near-title']}>Wellcome to WELLDONE Wallet!</div>
      <div className={styles['near-welldone-info']}>
        <Bird role="img" />
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <TextBox role="img" />
          <div className={styles['near-text-box']}>
            <span className={styles['near-download']}>
              Please install WELLDONE Wallet from{' '}
              <button className={styles['welldone-link']} onClick={handleWelldone}>
                Webstore
              </button>{' '}
              and
              <br /> create a wallet for Near account{' '}
              <button className={styles['welldone-link']} onClick={handleManual}>
                manual
              </button>{' '}
              <br />
              <br /> If you're done, Let's migrate!
              <Button
                sx={{ marginLeft: '20px', fontFamily: 'SUIT', textTransform: 'none' }}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick()}
                endIcon={<ArrowRight style={{ fill: 'white' }} />}
              >
                <span className={styles['near-btn-text']} style={{ padding: '0' }}>
                  Start{' '}
                </span>
              </Button>
            </span>
          </div>
        </div>
      </div>
      <CustomizedSteppers step={0} />
    </>
  );
};
