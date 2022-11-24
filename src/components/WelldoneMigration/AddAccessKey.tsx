import React, { useState } from 'react';
import { Buffer } from 'buffer';
import { utils } from 'near-api-js';
import styles from './styles.module.css';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import CustomizedSteppers from '../NearMigration/ProgressBar';
import { LanguageToggleButtonGroup } from './Toggle';
import ToggleButton from '@mui/material/ToggleButton';
import { logout } from './utils';

const bs58 = require('bs58');

interface AddAccessKeyProps {
  account: string;
  currentNetwork: string;
}

export const AddAccessKey: React.FunctionComponent<AddAccessKeyProps> = ({
  account,
  currentNetwork,
}) => {
  const [publicKey, setPublicKey] = useState<string>('');
  const [addPubKey, setAddPubKey] = useState<string>('');
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [lang, setLang] = useState<string>('');
  const Enter = require('@site/static/img/enter.svg').default;
  const steps = ['Wellcome!', 'Enter Key', 'Add Access Key', 'Well Done!'];

  window.Buffer = window.Buffer || require('buffer').Buffer;

  const handleLang = (event: React.MouseEvent<HTMLElement>, language: string) => {
    setLang(language ? language : lang);
  };

  const onChangeHandler = (currentPubKey: string) => {
    setPublicKey(currentPubKey);
    try {
      let pubKey = currentPubKey;
      // convert implicit account id to base58 public key
      if (pubKey.length === 64) {
        console.log('implicit account id');
        const buffer = Buffer.from(pubKey, 'hex');
        pubKey = bs58.encode(buffer);
      }
      console.log(pubKey);
      if (utils.PublicKey.fromString(pubKey).data.length !== 32) {
        throw new Error('Invalid access key. Please make sure the access key correct.');
      }
      setIsSubmit(true);
      setAddPubKey(pubKey);
      setError('');
    } catch (e) {
      console.log(e);
      setError(e.message);
      setIsSubmit(false);
    }
  };

  const pubKeyHandler = () => {
    try {
      let pubKey = publicKey;
      // convert implicit account id to base58 public key
      if (pubKey.length === 64) {
        console.log('implicit account id');
        const buffer = Buffer.from(pubKey, 'hex');
        pubKey = bs58.encode(buffer);
      }
      console.log(pubKey);
      if (utils.PublicKey.fromString(pubKey).data.length !== 32) {
        throw new Error('Invalid access key. Please make sure the access key correct.');
      }
      setIsSubmit(true);
      setAddPubKey(pubKey);
      setError('');
    } catch (e) {
      console.log(e);
      setError(e.message);
      setIsSubmit(false);
    }
  };

  const addKey = async () => {
    try {
      const account = window.walletConnection.account();
      const receipt = await account.addKey(addPubKey);
      console.log('addKey ', receipt);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    logout();
    window.location.href = window.location.href.split('?')[0] + '?network=' + currentNetwork;
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

      <div className={styles['near-div-box']}>
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
          {currentNetwork}
        </Fab>
        <p className={styles['add-key-info']}>Enter the Public key or ID of implicit account</p>
        <div>
          <TextField
            id={error !== '' ? 'outlined-error-helper-text' : 'outlined-helperText'}
            error={error !== ''}
            helperText={error === '' ? '' : error}
            autoComplete="off"
            sx={{
              '& label.Mui-focused': {
                color: '#3B72F2',
              },
              '& .MuiInputLabel-root': {
                fontFamily: 'SUIT',
                fontWeight: '500',
                lineHeight: '160%',
                color: error === '' ? '#6E7891' : '#FF483A',
              },
              '& .MuiOutlinedInput-root': {
                width: '440px',
                height: '44px',
                fontFamily: 'SUIT',
                fontWeight: '400',
                padding: '0',
                color: '#8F98AE',
                '& > fieldset': { borderRadius: '8px', borderColor: '#6E7891' },
                '&:hover fieldset': {
                  borderColor: error === '' ? '#3B72F2' : '#FF483A',
                },
              },
              '& .MuiFormLabel-root.Mui-error': {
                color: '#FF483A !important',
              },
              '& .MuiFormHelperText-root': {
                fontFamily: 'SUIT',
                fontSize: '1.0rem',
                fontWeight: '600',
                lineHeight: '155%',
                letterSpacing: '-0.004em',
              },
            }}
            variant="outlined"
            label="access key"
            InputLabelProps={{ shrink: true }}
            placeholder="New full acces key"
            onChange={(e) => {
              // setPublicKey(e.target.value.trim());
              onChangeHandler(e.target.value.trim());
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <button
                    type="button"
                    onClick={(e) => pubKeyHandler()}
                    style={{ background: 'none', border: 'none' }}
                  >
                    <Enter />
                  </button>
                </InputAdornment>
              ),
              sx: {
                '&::placeholder': {
                  color: '#8F98AE',
                },
              },
            }}
          />
        </div>
        <Button
          sx={{
            '&.Mui-disabled': {
              background: 'rgba(145, 158, 171, 0.24)',
              color: 'rgba(145, 158, 171, 0.8)',
            },
            background: '#3B72F2',
            color: 'white',
            padding: '4px 12px',
            fontFamily: 'SUIT',
            textTransform: 'none',
            marginTop: '20px',
          }}
          variant="contained"
          disabled={!isSubmit}
          onClick={addKey}
        >
          <span>Add Full Access Key</span>
        </Button>
      </div>
      <div style={{ marginTop: '48px', marginBottom: '104px' }}>
        <p>Connected Account: {account}</p>
        <Button
          sx={{
            textTransform: 'none',
            color: '#FF483A',
            borderColor: '#FF483A',
            '&:hover': {
              borderColor: '#FF483A',
            },
          }}
          variant="outlined"
          onClick={handleClick}
        >
          Disconnect
        </Button>
      </div>
      <CustomizedSteppers step={isSubmit ? 2 : 1} steps={steps} />
    </>
  );
};
