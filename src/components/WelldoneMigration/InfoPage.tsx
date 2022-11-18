import React, { useState } from 'react';
import styles from './styles.module.css';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { login, logout } from './utils';
import { useEffect } from 'react';
import { LanguageToggleButtonGroup, NetworkToggleButtonGroup } from './Toggle';
import { InfoContents } from './Info';

const BlurButton = styled(Button)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '0.875rem',
  fontWeight: '600',
  lineHeight: '155%',
  color: '#D0D5E2',
  padding: '6px 12px',
  border: '0',
  borderRadius: '8px',
  backgroundColor: 'rgba(143, 152, 174, 0.08)',
  backdropFilter: 'blur(8px)',
  fontFamily: 'SUIT',
  '&:hover': {
    backgroundColor: 'inherit',
    boxShadow: 'none',
    border: '0',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
    border: '0',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    border: '0',
  },
});

interface InfoPageProps {
  currentNetwork: string;
}

export const InfoPage: React.FunctionComponent<InfoPageProps> = ({ currentNetwork }) => {
  const [lang, setLang] = useState<string>('eng');
  const [network, setNetwork] = useState<string>(currentNetwork);
  const [visible, setVisible] = useState<string>('visible');
  const info = InfoContents;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const network = urlParams.get('network');
    setNetwork(network ? network : 'testnet');
  }, []);

  const handleLang = (event: React.MouseEvent<HTMLElement>, language: string) => {
    setLang(language ? language : lang);
  };

  const handleNetwork = (event: React.MouseEvent<HTMLElement>, net: string) => {
    setNetwork(net ? net : network);
    window.location.href = window.location.href.split('?')[0] + '?network=' + (net ? net : network);
  };

  const handleVisible = () => {
    setVisible('hidden');
  };

  const handleConnect = () => {
    if (window.accountId !== '') {
      logout();
    }
    login();
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <p className={styles['near-subtitle']}>Wellcome to WELLDONE Wallet!</p>
        <br />
        <p className={styles['near-title']}>Near Wallet Migration Helper</p>
        <br />
        <p className={styles['near-contents']}>{info.pageInfo[lang]}</p>
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

      {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '45px',
        }}
      >
        <div
          style={{
            borderLeft: '6px solid #FF484A',
            textAlign: 'left',
            marginRight: '80px',
            width: '445px',
          }}
        >
          <p style={{ marginLeft: '22px', marginBottom: 'auto', marginTop: 'auto' }}>
            <span style={{ fontSize: '1.0rem', fontWeight: '600' }}>
              <b>{info.nearInfo.title[lang]}</b>
            </span>
            <br />
            <span style={{ display: 'block', fontSize: '0.875rem', marginTop: '20px' }}>
              {info.nearInfo.desc[lang]}
            </span>
          </p>
        </div>
        <div
          style={{
            borderLeft: '6px solid #3B72F2',
            textAlign: 'left',
            width: '468px',
          }}
        >
          <p style={{ marginLeft: '22px', marginBottom: 'auto', marginTop: 'auto' }}>
            <span style={{ fontSize: '1.0rem', fontWeight: '600' }}>
              <b>{info.welldoneInfo.title[lang]}</b>
            </span>
            <br />
            <span style={{ display: 'block', fontSize: '0.875rem', marginTop: '20px' }}>
              {info.welldoneInfo.desc[lang]}
            </span>
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: '32px',
        }}
      >
        <div style={{ display: 'inline-flex', position: 'relative' }}>
          <div style={{ display: 'inline-block', marginRight: lang === 'eng' ? '33px' : '60px' }}>
            <div className={styles['near-guide-block']}>
              <p className={styles['near-guide-text-1']}>{info.nearInfo.guide[lang]}</p>
            </div>
          </div>
          <div style={{ display: 'inline-block' }}>
            <div className={styles['near-guide-block']} style={{ padding: '24px' }}>
              <p className={styles['near-guide-text-2']}>{info.welldoneInfo.guide[lang]}</p>
            </div>
            <div>
              <p
                style={{
                  marginTop: '16px',
                  marginBottom: '0',
                  textAlign: 'right',
                  fontSize: '0.75rem',
                  fontWeight: '300',
                  lineHeight: '160%',
                  color: '#8F98AE',
                }}
              >
                {info.welldoneInfo.comment[lang]}
              </p>
            </div>
          </div>
          <BlurButton
            variant="contained"
            disableRipple
            sx={{
              visibility: visible,
            }}
            onClick={handleVisible}
          >
            {info.blurbox[lang]}
          </BlurButton>
        </div>
      </div>

      <div>
        <p
          style={{
            fontWeight: '600',
            fontSize: '0.875rem',
            marginBottom: '12px',
            color: '#8F98AE',
          }}
        >
          {info.bottom.comment[lang]}
        </p>
        <Button
          sx={{
            padding: '11px 20px',
            fontFamily: 'SUIT',
            textTransform: 'none',
            margin: '0 auto',
          }}
          className={styles['near-btn']}
          color="primary"
          variant="contained"
          onClick={handleConnect}
        >
          <span className={styles['near-btn-text']}>{info.bottom.button[lang]}</span>
        </Button>
        <div
          style={{
            marginTop: '16px',
            marginBottom: '56px',
          }}
        >
          <NetworkToggleButtonGroup
            value={network}
            exclusive
            onChange={handleNetwork}
            aria-label="Platform"
          >
            <ToggleButton value="mainnet">Mainnet</ToggleButton>
            <ToggleButton value="testnet">Testnet</ToggleButton>
          </NetworkToggleButtonGroup>
        </div>
      </div>
    </>
  );
};
