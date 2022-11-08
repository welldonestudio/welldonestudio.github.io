import React, { Dispatch, useState } from 'react';
import { Buffer } from 'buffer';
import nacl from 'tweetnacl';
import bs58 from 'bs58';

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
  setError,
  setParams,
  hash,
}) => {
  const [migrationKey, setMigrationKey] = useState<string>('');
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
    }
  };

  const handleClick = () => {
    try {
      decryptHash();
      setActiveStep('CONNECT_WELLDONE');
    } catch (e) {
      setError('Decrypting accounts failed. Make sure the provided password is correct.');
      console.log(e);
      //   setActiveStep('FAIL'); // FAIL 페이지로 넘어가는 게 아니라 아래에 에러 표시해주도록 수정하기
    }
  };

  return (
    <div>
      <p>Enter your decryption password to complete importing accounts.</p>
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setMigrationKey(e.target.value.trim());
        }}
      />
      <button type="button" onClick={(e) => handleClick()}>
        <small>Continue</small>
      </button>
    </div>
  );
};
