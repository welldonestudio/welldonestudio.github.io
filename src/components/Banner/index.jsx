import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Chip, Hidden } from '@mui/material';
import Player from '../utils/player'

const CONTENTS = {
    WELLCOME: '🎉  WELLDONE Wallet is out!',
    ZKWALLET: 'Incredibly simple, transactions in a flash.',
    TRY: 'Try a single wallet for all your crypto assets.',
    NEAR: 'NEAR Migration Helper',
    NEAR_TRY: 'Try to Move your NEAR asset to a private wallet.'
};

function Banner() {
    const handleClick = () => {
        window.open('http://localhost:3000/tutorials/sui-zklogin/');
    };
    const handleNear = () => {
        window.open('https://docs.welldonestudio.io/contribution/near-welldone-migration/');
    };
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
      </div>

        <div onClick={handleClick} className={styles['banner-section']}>
            <div className={clsx(styles['banner-contents'], styles['banner-contents-left'])}>
                <span className={styles['contents--wellcome']}>
                    {CONTENTS.WELLCOME}
                </span>
                <br />
                <span className={styles['contents--try']}>
                    {CONTENTS.TRY}
                </span>
                <AddIcon sx={{ fontSize: 24, display: { xs: 'none', sm: 'block' } }} className={styles['add--icon']} />
            </div>
        </div>
      */}
            <div className={styles['banner-section']} style={{ paddingLeft: 0, marginTop: '32px' }} onClick={handleClick}>
                <Chip label="NEW" color="primary" size='small' style={{ position: 'absolute', top: '-12px', left: '40px' }}/>
                <span className={styles['contents--wellcome']}>
                    <Box style={{ padding: '40px', display: 'flex', justifyContent: 'space-between' }}>
                        <Box width="194px">
                            <img src={'/img/zkwallet.svg'}/>
                        </Box>
                        <Box style={{ display: 'flex',  alignItems: 'center' }}>
                            <Box
                                style={{
                                    background: 'linear-gradient(270deg, #FF912C 24%, #2D6CFF 78%, #6AB8FF 100%)',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                                sx={{ display: { xs: 'none', sm: 'none', md: 'block' }}}
                            >
                                {CONTENTS.ZKWALLET}
                            </Box>
                            <ArrowForwardIcon sx={{ fontSize: 24, display: { xs: 'none', sm: 'block' }, marginLeft: '16px' }} />   
                        </Box>
                    </Box>
                    
                </span>
                <Player video={require('@site/static/video/zkwallet.mp4').default} />
            </div>
        </section>
    );
}

export default Banner;
