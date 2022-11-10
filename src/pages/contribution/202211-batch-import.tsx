import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { ImportAccount } from '../../components/NearMigration/ImportAccount';
import { ConnectWelldone } from '../../components/NearMigration/ConnectWelldoone';
import { DownloadWelldone } from '../../components/NearMigration/DownloadWelldone';
import { Success } from '../../components/NearMigration/Success';

export default function NearMigration() {
  const [hash, setHash] = useState<string>('');
  const [params, setParams] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState<string>('');
  const [error, setError] = useState<string>('');
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

  return (
    <Layout
      title="WELLDONE Studio - NEAR Wallet Migration Batch-Import"
      description="NEAR Wallet Migration Batch-Import"
    >
      <main>
        <div className={styles['near-container']}>
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
              <ConnectWelldone setActiveStep={setActiveStep} setError={setError} params={params} />
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
