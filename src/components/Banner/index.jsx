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
    window.open('https://welldonestudio.io/#wallet');
  };
  return (
    <section className={styles.banner_wrapper}>
      <div className={styles['contents--wellcome']}>{CONTENTS.WELLCOME}</div>
      <div className={styles['contents--try']}>{CONTENTS.TRY}</div>
      <button className={styles['contents--button']} onClick={handleClick}>
        {CONTENTS.BUTTON}
      </button>
      <button className={styles['contents--button--mobile']} onClick={handleClick}></button>
    </section>
  );
}

export default Banner;
