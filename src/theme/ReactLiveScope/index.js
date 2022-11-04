import React from 'react';
import './index.css';
import * as ecc from 'tiny-secp256k1';

import web3, {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import BN from 'bn.js';
import useIsBrowser from '@docusaurus/useIsBrowser';

import { providers, transactions, utils } from 'near-api-js';
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';
import { toBase64, toUtf8 } from '@cosmjs/encoding';
import { Ethereum } from '@Nahee-Park/kms';
import { CHAIN } from '@Nahee-Park/kms/lib/types';

import { ethers } from 'ethers';
const Button = (props) => {
  const isBrowser = useIsBrowser();
  if (isBrowser) {
    window.global = window;
    window.Buffer = window.Buffer || require('buffer').Buffer;
  }

  return (
    <button
      {...props}
      style={{
        borderRadius: '8px',
        padding: '10px 16px',
        color: 'white',
        background: '#009400',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        marginBottom: '4px',
        ...props.style,
      }}
    />
  );
};

const ResultTooltip = (props) => (
  <div
    {...props}
    style={{
      width: '100%',
      borderRadius: '8px',
      padding: '16px',
      color: 'white',
      animation: 'fadeMe 2s',
      marginTop: '8px',
      ...props.style,
    }}
  />
);

const Input = (props) => (
  <input
    {...props}
    style={{
      minWidth: '40%',
      borderRadius: '8px',
      padding: '10px 16px',
      color: 'black',
      background: 'white',
      border: '1px solid white',
      fontSize: '14px',
      marginTop: '4px',
      marginBottom: '4px',
      ...props.style,
    }}
  />
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  ...React,
  ResultTooltip,
  Button,
  providers,
  transactions,
  utils,
  MsgExecuteContract,
  toBase64,
  toUtf8,
  BN,
  useIsBrowser,
  Input,
  ethers,
  Ethereum,
  CHAIN,
  ecc,
};
export default ReactLiveScope;
