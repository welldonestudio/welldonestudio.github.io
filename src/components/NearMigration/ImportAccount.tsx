import React, { Dispatch, useState } from 'react';
import { Buffer } from 'buffer';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import CustomizedSteppers from './ProgressBar';

interface ImportAccountProps {
  setActiveStep: Dispatch<React.SetStateAction<string>>;
  setError: Dispatch<React.SetStateAction<string>>;
  setParams: Dispatch<React.SetStateAction<string[]>>;
  hash: string;
}

const STATIC_NONCE = new Uint8Array([
  190, 12, 82, 22, 119, 120, 120, 8, 122, 124, 234, 14, 28, 83, 74, 168, 174, 124, 146, 88, 46, 200,
  208, 82,
]);

export const ImportAccount: React.FunctionComponent<ImportAccountProps> = ({
  setActiveStep,
  // setError,
  setParams,
  hash,
}) => {
  const [migrationKey, setMigrationKey] = useState<string>('');
  const [error, setError] = useState<string>('');
  const ArrowRight = require('@site/static/img/arrow-right.svg').default;

  const decryptHash = () => {
    const decodedHash = Buffer.from(JSON.parse('[' + window.atob(hash) + ']'));
    const decodedMigrationKey = bs58.decode(migrationKey);
    const decryptedMsg = nacl.secretbox.open(decodedHash, STATIC_NONCE, decodedMigrationKey);
    if (decryptedMsg) {
      const decoder = new TextDecoder();
      const msg = decoder.decode(decryptedMsg);
      const accountsData = msg.split('*');
      const params = accountsData.map((accountData) => {
        const data = accountData.split('=');
        return data[1];
      });
      setParams(params);
    } else {
      throw new Error();
    }
  };

  const handleClick = () => {
    try {
      decryptHash();
      setError('');
      setActiveStep('CONNECT_WELLDONE');
    } catch (e) {
      setError('Invalid password. Please make sure the password correct.');
    }
  };

  const NearTextField = styled(TextField)({
    '& label': {
      color: '#566077',
    },
    '& input:valid + fieldset': {
      borderColor: 'rgba(145, 158, 171, 0.32)',
      borderWidth: '1px',
      borderRadius: '8px',
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      // borderLeftWidth: 6,
      // padding: '4px !important', // override inline-style
    },
  });

  return (
    <>
      <span className={styles['near-subtitle']}>Near Wallet Migration Service</span>
      <div className={styles['near-title']}>Import Account</div>
      <div className={styles['near-roundbox']}>
        <span className={styles['near-contents']}>
          Enter your decryption password to complete importing accounts
        </span>
      </div>
      <TextField
        id={error !== '' ? 'outlined-error-helper-text' : 'outlined-helperText'}
        error={error !== ''}
        helperText={error === '' ? '' : error}
        autoComplete="off"
        sx={{
          margin: '0 auto',
          marginBottom: '167px',
          '& label.Mui-focused': {
            color: '#3B72F2',
          },
          '& .MuiInputLabel-root': {
            fontFamily: 'SUIT',
            fontWeight: '500',
            lineHeight: '160%',
            color: error === '' ? '#566077' : '#FF483A',
          },
          '& .MuiOutlinedInput-root': {
            width: '611px',
            height: '44px',
            fontFamily: 'SUIT',
            fontWeight: '400',
            color: '#8F98AE',
            '& > fieldset': { borderRadius: '8px', borderColor: '#566077' },
            '&:hover fieldset': {
              borderColor: '#3B72F2',
            },
          },
        }}
        variant="outlined"
        label="Password"
        InputLabelProps={{ shrink: true }}
        placeholder="Decryption Password"
        onChange={(e) => {
          setMigrationKey(e.target.value.trim());
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <button
                type="button"
                onClick={(e) => handleClick()}
                style={{ background: 'none', border: 'none' }}
              >
                <ArrowRight />
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
      <CustomizedSteppers step={1} />
    </>
  );
};
