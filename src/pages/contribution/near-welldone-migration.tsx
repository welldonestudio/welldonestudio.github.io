import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { initConnect, login, logout } from '../../components/WelldoneMigration/utils';
import { AddAccessKey } from '../../components/WelldoneMigration/AddAccessKey';
import { InfoPage } from '../../components/WelldoneMigration/InfoPage';
import { Success } from '../../components/WelldoneMigration/Success';
import { Error } from '../../components/WelldoneMigration/Error';

export default function WelldoneMigration() {
  const [network, setNetwork] = useState<string>('testnet');
  const [account, setAccount] = useState<string>('');
  const [txHash, setTxHash] = useState<string>('');
  const [errorCode, setErrorCode] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  // let account = window.accountId;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const network = urlParams.get('network') ? urlParams.get('network') : 'testnet';
    const transactionHashes = urlParams.get('transactionHashes');
    const errorCode = urlParams.get('errorCode');
    const errorMsg = urlParams.get('errorMessage');

    setNetwork(network ? network : 'testnet');
    setTxHash(transactionHashes ? transactionHashes : '');
    setErrorCode(errorCode ? errorCode : '');
    setErrorMsg(errorMsg ? decodeURI(errorMsg) : '');

    initConnect(network ? network : 'testnet').then(() => {
      const accounts = window.accountId.split('.');
      // check if account matches the network connected
      if (accounts[accounts.length - 1] !== (network === 'mainnet' ? 'near' : network)) {
        setAccount('');
      } else {
        setAccount(window.accountId);
      }
      console.log('account: ', account, ' window.accountId: ', window.accountId);
    });
  }, []);

  return (
    <Layout
      title="WELLDONE Studio - NEAR Wallet Migration Helper"
      description="NEAR Wallet Migration Helper by WELLDONE Studio"
    >
      <main>
        <div className={styles['near-container']}>
          {account === '' && <InfoPage currentNetwork={network} />}
          {account !== '' && txHash === '' && errorCode === '' && (
            <AddAccessKey account={account} currentNetwork={network} />
          )}
          {account !== '' && txHash !== '' && (
            <Success txHash={txHash} network={network} account={account} />
          )}
          {account !== '' && errorCode !== '' && (
            <Error errorCode={errorCode} errorMsg={errorMsg} network={network} account={account} />
          )}
        </div>
      </main>
    </Layout>
  );
}
