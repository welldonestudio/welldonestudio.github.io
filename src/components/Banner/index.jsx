import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CONTENTS = {
  WELLCOME: '🎉  Welldone Wallet is out!',
  TRY: 'Try a single wallet for all your crypto assets.',
  NEAR: 'NEAR Migration Helper',
  NEAR_TRY: 'Try to Move your NEAR asset to a private wallet.',
};

function Banner() {
  const handleClick = () => {
    window.open('https://welldonestudio.io/#wallet');
  };
  const handleNear = () => {
    window.open('https://docs.welldonestudio.io/contribution/near-welldone-migration/');
  }
  return (
    <section className={styles.banner_wrapper}>
      {/* <div onClick={handleClick} className={styles['banner-section']}>
        <div className={clsx(styles['banner-contents'], styles['banner-contents-left'])}>
          <span className={styles['contents--wellcome']}>{CONTENTS.WELLCOME}</span><br/>
          <span className={styles['contents--try']}>{CONTENTS.TRY}</span>
          <AddIcon sx={{fontSize: 24}} className={styles['add--icon']}/>
        </div>
      </div>
      <div onClick={handleNear} className={clsx(styles['banner-section'], styles['banner-section-right'])}>
        <div className={clsx(styles['banner-contents'],styles['banner-contents-right'], )}>
          <span className={styles['contents--near']}>{CONTENTS.NEAR}</span><br/>
          <span className={styles['contents--try']}>{CONTENTS.NEAR_TRY}</span>
          <ArrowForwardIcon sx={{fontSize: 24}} className={styles['add--icon']} />
        </div>
      </div> */}
      <div onClick={handleClick} className={styles['banner-section']}>
        <div className={clsx(styles['banner-contents'], styles['banner-contents-left'])}>
          <span className={styles['contents--wellcome']}>{CONTENTS.WELLCOME}</span><br/>
          <span className={styles['contents--try']}>{CONTENTS.TRY}</span>
          <AddIcon sx={{fontSize: 24}} className={styles['add--icon']}/>
        </div>
      </div>
    </section>
  );
}

export default Banner;
