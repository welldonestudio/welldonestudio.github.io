import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { ImportAccount } from '../../components/NearMigration/ImportAccount';
import { ConnectWelldone } from '../../components/NearMigration/ConnectWelldoone';
import { DownloadWelldone } from '../../components/NearMigration/DownloadWelldone';
import { Success } from '../../components/NearMigration/Success';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Error } from '../../components/NearMigration/Error';

export default function NearMigration() {
  const [hash, setHash] = useState<string>('');
  const [params, setParams] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState<string>('');
  const [error, setError] = useState<string>(''); // error 처리
  const [activeModal, setActiveModal] = useState<string>('');

  useEffect(() => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      setHash(hash);
      window.localStorage.setItem('WELLDONE:hash', hash);
      history.replaceState(null, '', '/contribution/202211-batch-import');
      setActiveStep('DOWNLOAD_WELLDONE');
    } else {
      const localHash = window.localStorage.getItem('WELLDONE:hash');
      if (localHash) {
        setHash(localHash);
        setError('');
        setActiveStep('DOWNLOAD_WELLDONE');
      } else {
        setError('There is no hash value. Make sure the hash value passed correctly.');
      }
    }
  }, []);

  return (
    <Layout
      title="WELLDONE Studio - NEAR Wallet Migration Batch-Import"
      description="NEAR Wallet Migration Batch-Import"
    >
      <main>
        <div className={styles['near-container']}>
          {error && (
            <>
              <Error error={error} />
            </>
          )}
          {activeStep === 'DOWNLOAD_WELLDONE' && (
            <>
              <DownloadWelldone
                setActiveStep={setActiveStep}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
              />
            </>
          )}
          {activeStep === 'IMPORT_ACCOUNT' && (
            <>
              <BrowserOnly>
                {() => (
                  <ImportAccount setActiveStep={setActiveStep} setParams={setParams} hash={hash} />
                )}
              </BrowserOnly>
            </>
          )}
          {activeStep === 'CONNECT_WELLDONE' && (
            <>
              <ConnectWelldone setActiveStep={setActiveStep} params={params} />
            </>
          )}
          {activeStep === 'SUCCESS' && (
            <>
              <Success />
            </>
          )}
        </div>
      </main>
    </Layout>
  );
}
