import React, { Dispatch, useState } from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CustomizedSteppers from './ProgressBar';
import { decryptAccountData } from '@near-wallet-selector/account-export';
import useIsBrowser from '@docusaurus/useIsBrowser';

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
  const steps = ['Wellcome!', 'Import Account', 'Connect Wallet', 'Well Done!'];
  const isBrowser = useIsBrowser();

  if (isBrowser) {
    window.global = window;
    window.Buffer = window.Buffer || require('buffer').Buffer;
  }
  //   ciphertext: string,
  //   secretKey: string,
  // ) => {
  //   if (!secretKey) {
  //     throw new Error("Secret key is required");
  //   }
  //   try {
  //     console.log('step 1 ');
  //     console.log(nacl);
  //     console.log(nacl.util);
  //     console.log(decodeBase64);
  //     console.log(decryptAccountData)
  //     console.log(Buffer.from(secretKey).toString('base64'));
  //     const keyUint8Array = nacl.util.decodeBase64(
  //       Buffer.from(secretKey).toString("base64")
  //     );
  //     console.log("keyUint >> ", keyUint8Array);
  //     const messageWithNonceAsUint8Array = nacl.util.decodeBase64(ciphertext);
  //     console.log("msgWithNonce >> ", messageWithNonceAsUint8Array);
  //     const nonce = messageWithNonceAsUint8Array.slice(
  //       0,
  //       nacl.secretbox.nonceLength
  //     );
  //     console.log("nonce >> ", nonce);
  //     const message = messageWithNonceAsUint8Array.slice(
  //       nacl.secretbox.nonceLength,
  //       ciphertext.length
  //     );
  //     console.log("message >> ", message);
  //     const decrypted = nacl.secretbox.open(message, nonce, keyUint8Array);
  //     console.log("decrypted >> ", decrypted);
  //     if (!decrypted) {
  //       throw new Error("Unable to decrypt account data");
  //     }
  //     const base64DecryptedMessage = nacl.util.encodeUTF8(decrypted);
  //     console.log("base64 >> ", base64DecryptedMessage);
  //     return JSON.parse(base64DecryptedMessage);
  //   } catch(e) {
  //     console.log(e);
  //     throw new Error("Unable to decrypt account data");
  //   }
  // };

  const decryptHash = () => {
    try {
      const accounts = decryptAccountData({
        ciphertext:
          history.state.hash,
        secretKey: migrationKey,
      })
      const params = accounts.map((account) => {
        if (account.privateKey.slice(0, 8) == 'ed25519:') {
          return account.privateKey.slice(8);
        }
        return account.privateKey
      });
      setParams(params);
    } catch (e) {
      console.log(e);
      throw new Error(e);
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

  return (
    <>
      <span className={styles['near-subtitle']}>NEAR Wallet Migration Service</span>
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
      <CustomizedSteppers step={1} steps={steps} />
    </>
  );
};
