import React, { useEffect, useState } from 'react';
import * as nearAPI from 'near-api-js';
import { getConfig, logout } from './utils';
import { FinalExecutionOutcome } from 'near-api-js/lib/providers';
import styles from './styles.module.css';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import CustomizedSteppers from '../NearMigration/ProgressBar';
import { LanguageToggleButtonGroup } from './Toggle';
import ToggleButton from '@mui/material/ToggleButton';

interface SuccessProps {
  txHash: string;
  network: string;
  account: string;
}

export const Success: React.FunctionComponent<SuccessProps> = ({ txHash, network, account }) => {
  const [receipt, setReceipt] = useState<FinalExecutionOutcome>();
  const [lang, setLang] = useState<string>('eng');
  const steps = ['Wellcome!', 'Enter Key', 'Add Access Key', 'Well Done!'];

  useEffect(() => {
    const getTxStatus = async () => {
      const url = getConfig(network).nodeUrl;
      const provider = new nearAPI.providers.JsonRpcProvider({ url: url });
      const receipt = await provider.txStatus(txHash, window.accountId);
      setReceipt(receipt);
      console.log(receipt);
      return receipt;
    };
    getTxStatus();
  }, [txHash]);

  const handleLang = (event: React.MouseEvent<HTMLElement>, language: string) => {
    setLang(language ? language : lang);
  };

  const handleClick = () => {
    logout();
    window.location.href = window.location.href.split('?')[0];
  };

  return (
    <>
      <div>
        <p className={styles['near-subtitle']}>Wellcome to WELLDONE Wallet!</p>
        <br />
        <p className={styles['near-title']}>NEAR Wallet Migration Helper</p>
        <div style={{ position: 'absolute', top: '114px', right: '144px' }}>
          <LanguageToggleButtonGroup
            value={lang}
            exclusive
            onChange={handleLang}
            aria-label="Platform"
          >
            <ToggleButton value="eng">Eng</ToggleButton>
            <ToggleButton value="kor">Kor</ToggleButton>
          </LanguageToggleButtonGroup>
        </div>
      </div>

      <div className={styles['near-div-box']} style={{ width: '533px' }}>
        <Fab
          variant="extended"
          size="small"
          disableRipple={true}
          sx={{
            background: 'transparent',
            border: '1px solid rgba(143, 152, 174, 0.24)',
            borderRadius: '50px',
            padding: '5px 12px',
            gap: '8px',
            color: 'white',
            fontFamily: 'SUIT',
            fontWeight: '500',
            fontSize: '0.875rem',
            lineHeight: '170%',
          }}
        >
          {network}
        </Fab>
        {receipt ? (
          <>
            <div style={{ marginTop: '20px' }}>
              <span className={styles['content-title']}>Status</span>
              <br />
              <span className={styles['content']}>
                {Object.keys(receipt.status).includes('SuccessValue') ? 'Success' : 'Fail'}
              </span>
              <br />
              <br />
              <span className={styles['content-title']}>Transaction Hash</span>
              <br />
              <span className={styles['content']}>{txHash}</span>
              <br />
              <br />
              <span className={styles['content-title']}>New Full Access Key</span>
              <br />
              <span className={styles['content']}>
                {receipt.transaction.actions[0].AddKey.public_key}
              </span>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div style={{ marginTop: '22px', marginBottom: '104px' }}>
        <p
          style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            lineHeight: '155%',
          }}
        >
          Connected Account: {account}
        </p>
        <Button
          sx={{
            textTransform: 'none',
            color: 'white',
            fontFamily: 'SUIT',
            fontSize: '0.9375rem',
            lineHeight: '170%',
            letterSpacing: '0.01em',
            borderColor: '#FF483A',
            '&:hover': {
              borderColor: '#FF483A',
            },
          }}
          variant="contained"
          onClick={handleClick}
        >
          Go to Mainpage
        </Button>
      </div>
      <CustomizedSteppers step={4} steps={steps} />
    </>
  );
};
