import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

const CONTENTS = {
  WELLCOME: '🎉  Welldone Wallet is out!',
  TRY: 'Try a single wallet for all your crypto assets.',
  BUTTON: 'See More...',
};

function Banner() {
  const handleClick = () => {
    window.open(
      'https://chrome.google.com/webstore/detail/welldone-wallet-for-multi/bmkakpenjmcpfhhjadflneinmhboecjf',
    );
  };
  return (
    <section className={styles.banner_wrapper}>
      <div className={styles['contents--wellcome']}>{CONTENTS.WELLCOME}</div>
      <div className={styles['contents--try']}>{CONTENTS.TRY}</div>
      <buttun className={styles['contents--button']} onClick={handleClick}>
        {CONTENTS.BUTTON}
      </buttun>
    </section>
  );
}

export default Banner;
