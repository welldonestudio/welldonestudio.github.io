import React, { Dispatch, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import CustomizedSteppers from './ProgressBar';
import { WalletNotDetected } from './modal/WalletNotDetected';
import { AccountNotDetected } from './modal/AccountNotDetected';
import { createPortal } from 'react-dom/cjs/react-dom.development';

interface DownloadWelldoneProps {
  setActiveStep: Dispatch<React.SetStateAction<string>>;
  setActiveModal: Dispatch<React.SetStateAction<string>>;
  activeModal: string;
}

export const DownloadWelldone: React.FunctionComponent<DownloadWelldoneProps> = ({
  setActiveStep,
  setActiveModal,
  activeModal,
}) => {
  const [openWallet, setOpenWallet] = useState<boolean>(false);
  const [openAccount, setOpenAccount] = useState<boolean>(false);
  // const [activeModal, setActiveModal] = useState<string>('');

  const TextBox = require('@site/static/img/near-migration-textbox.svg').default;
  const Bird = require('@site/static/img/near-migration-bird.svg').default;
  const ArrowRight = require('@site/static/img/arrow-right-white.svg').default;

  // 새로고침될 때마다 설치 여부 확인 ?
  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = () => {
    if (checkInstall()) {
      if (checkCreate()) {
        console.log('go import_account');
        setActiveStep('IMPORT_ACCOUNT');
      } else {
        console.log('account_not_detect');
        setActiveModal('ACCOUNT_NOT_DETECT');
      }
    } else {
      console.log('wallet_not_detected');
      setActiveModal('WALLET_NOT_DETECT');
    }
  };

  const handleWelldone = () => {
    window.open(
      'https://chrome.google.com/webstore/detail/welldone-wallet-for-multi/bmkakpenjmcpfhhjadflneinmhboecjf',
    );
  };

  const handleManual = () => {
    window.open('https://docs.welldonestudio.io/wallet/manual/how-to-create-a-wallet');
  };

  const checkInstall = () => {
    if ((window as any).dapp) {
      return true;
    }
    return false;
  };

  const checkCreate = () => {
    if (Object.keys((window as any).dapp.networks).length === 0) {
      return false;
    }
    return true;
  };

  const handleClick = () => {
    if (!(window as any).dapp) {
      setOpenWallet(true);
    } else if (checkCreate()) {
      setActiveStep('IMPORT_ACCOUNT');
    } else {
      setOpenAccount(true);
    }
  };

  const detectWallet = () => {
    // if (checkInstall()) {
    //   setIsInstall(true);
    // }
  };

  const detectAccount = () => {
    handleClick();
  };

  return (
    <>
      <span className={styles['near-subtitle']}>Wellcome to WELLDONE Wallet!</span>
      <div className={styles['near-title']}>Near Wallet Migration Service</div>
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
              <br /> create a wallet for Near account {'('}
              <button className={styles['welldone-link']} onClick={handleManual}>
                manual
              </button>
              {') '}
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
        {activeModal === 'WALLET_NOT_DETECT' ? (
          <WalletNotDetected
            isOpen={true}
            detectWallet={detectWallet}
            setOpenWallet={setOpenWallet}
            setActiveModal={setActiveModal}
          />
        ) : (
          <WalletNotDetected
            isOpen={openWallet}
            detectWallet={detectWallet}
            setOpenWallet={setOpenWallet}
            setActiveModal={setActiveModal}
          />
        )}
        {activeModal === 'ACCOUNT_NOT_DETECT' ? (
          <AccountNotDetected
            isOpen={true}
            detectAccount={detectAccount}
            setOpenAccount={setOpenAccount}
            setActiveModal={setActiveModal}
          />
        ) : (
          <AccountNotDetected
            isOpen={openAccount}
            detectAccount={detectAccount}
            setOpenAccount={setOpenAccount}
            setActiveModal={setActiveModal}
          />
        )}
      </div>
      <CustomizedSteppers step={0} />
    </>
  );
};
