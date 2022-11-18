import React, { Dispatch, useState } from 'react';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import CustomizedSteppers from './ProgressBar';

interface ConnectWelldoneProps {
  setActiveStep: Dispatch<React.SetStateAction<string>>;
  setError: Dispatch<React.SetStateAction<string>>;
  params: string[];
}

export const ConnectWelldone: React.FunctionComponent<ConnectWelldoneProps> = ({
  setActiveStep,
  setError,
  params,
}) => {
  const Logo = require('@site/static/img/image-welldone-white.svg').default;
  const steps = ['Wellcome!', 'Import Account', 'Connect Wallet', 'Well Done!'];

  const handleClick = async () => {
    try {
      const result = await (window as any).dapp.request('near', {
        method: 'experimental:importPrivatekey',
        params: params,
      });
      if (result === true) {
        setError('');
        setActiveStep('SUCCESS');
      }
    } catch (e) {
      console.log(e);
      setError(`WELLDONE Wallet Error: ${e.message.toString()}`);
    }
  };

  return (
    <>
      <span className={styles['near-subtitle']}>Near Wallet Migration Service</span>
      <div className={styles['near-title']}>Connect Wallet</div>
      <div className={styles['near-roundbox']}>
        <span className={styles['near-contents']}>Click the button and import your accounts.</span>
      </div>
      <Button
        sx={{
          padding: '11px 20px',
          fontFamily: 'SUIT',
          textTransform: 'none',
          margin: '0 auto',
          marginBottom: '159px',
        }}
        className={styles['near-btn']}
        color="primary"
        variant="contained"
        onClick={(e) => handleClick()}
      >
        <Logo role="img" />
        <span className={styles['near-btn-text']}>Connect Wallet</span>
      </Button>
      <CustomizedSteppers step={2} steps={steps} />
    </>
  );
};
