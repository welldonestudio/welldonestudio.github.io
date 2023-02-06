import React from 'react';
import styles from './styles.module.css';

export const Error = (props) => {
  return (
    <>
      <span className={styles['near-subtitle']}>Error!</span>
      <span className={styles['near-title']}>NEAR Wallet Migration Service</span>
      <div
        className={styles['near-roundbox']}
        style={{ marginBottom: '300px', border: 'solid 1px #f44336' }}
      >
        <span
          className={styles['near-contents']}
          style={{
            color: '#f44336',
          }}
        >
          {props.error}
        </span>
      </div>
    </>
  );
};
