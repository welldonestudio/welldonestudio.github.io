import React from 'react';
import styles from './styles.module.css';

export const DownloadWelldone = () => {
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
    <div>
      <p>
        Please install WELLDONE wallet from{' '}
        <button className={styles['welldone-link']} onClick={handleWelldone}>
          here
        </button>{' '}
        and create a wallet following this{' '}
        <button className={styles['welldone-link']} onClick={handleManual}>
          manual
        </button>
        .
        <br />
        Click refresh button to go next step.
      </p>
      <button type="button" onClick={(e) => handleClick()}>
        <small>Refresh</small>
      </button>
    </div>
  );
};
