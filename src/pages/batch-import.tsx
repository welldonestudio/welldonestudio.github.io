import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import bs58 from 'bs58';

import styles from './index.module.css';
import { ImportAccount } from '../components/NearMigration/ImportAccount';
import { ConnectWelldone } from '../components/NearMigration/ConnectWelldoone';
import { DownloadWelldone } from '../components/NearMigration/DownloadWelldone';
import { Success } from '../components/NearMigration/Success';
import { MigrationModal } from '../components/NearMigration/CommonModal';

function Header() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">WELCOME to WELLDONE Wallet</h1>
        <p className="hero__subtitle">
          Hello, Web3 Voyagers. Let’s start a new voyage with WELLDONE!
        </p>
      </div>
    </header>
  );
}

export default function NearMigration() {
  const [hash, setHash] = useState<string>('');
  const [params, setParams] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState<string>('');
  const [error, setError] = useState<string>('');
  const key = '6iZfZNzDUHZi3e67oKWUXkcqXvff3SqycfSjS3vizuJ3';
  useEffect(() => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      setHash(hash);
      if (!(window as any).dapp) {
        setActiveStep('DOWNLOAD_WELLDONE');
      } else {
        setActiveStep('IMPORT_ACCOUNT');
      }
    } else {
      setError('There is no hash value. Make sure the hash value passed correctly.');
    }
  }, []);

  const handleAlert = () => {
    setError('');
  };

  return (
    <Layout
      title="WELLDONE Studio - NEAR Wallet Migration Batch-Import"
      description="NEAR Wallet Migration Batch-Import"
    >
      {/* <Head></Head> */}
      <Header />
      <main>
        <section className={styles.features}>
          <div className="container">
            <MigrationModal>
              {activeStep === 'DOWNLOAD_WELLDONE' && (
                <>
                  <DownloadWelldone />
                </>
              )}
              {activeStep === 'IMPORT_ACCOUNT' && (
                <>
                  <ImportAccount
                    setActiveStep={setActiveStep}
                    setError={setError}
                    setParams={setParams}
                    hash={hash}
                  />
                </>
              )}
              {activeStep === 'CONNECT_WELLDONE' && (
                <>
                  <ConnectWelldone
                    setActiveStep={setActiveStep}
                    setError={setError}
                    params={params}
                  />
                </>
              )}
              {activeStep === 'SUCCESS' && (
                <>
                  <Success />
                </>
              )}
              {/* {activeStep === 'FAIL' && (
                <>
                  <Fail error={error} />
                </>
              )} */}
              <div
                className={styles['alert']}
                style={{ visibility: error === '' ? 'hidden' : 'visible' }}
              >
                <span className={styles['closebtn']} onClick={handleAlert}>
                  &times;
                </span>
                <strong>Something went wrong!</strong> <br /> {error}
              </div>
            </MigrationModal>
          </div>
        </section>
      </main>
    </Layout>
  );
}
