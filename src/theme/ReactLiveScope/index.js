import React from 'react';
import styles from './index.module.css';
import * as ecc from 'tiny-secp256k1';

import {
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
import {
  Signature,
  SignedTransaction,
  Transaction as NearTransaction,
} from 'near-api-js/lib/transaction';
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';
import { toBase64, toUtf8 } from '@cosmjs/encoding';
import { Ethereum, Near, Aptos, Cosmos, Solana, CHAIN } from '@dsrv/kms';
// import { Ethereum, Near, Aptos, Cosmos, Solana, CHAIN } from '@Nahee-Park/kms';
import { base58 } from 'ethers/lib/utils';
import { ChainRestAuthApi, createTransaction, MsgSend } from '@injectivelabs/sdk-ts';
import { getNetworkInfo, Network } from '@injectivelabs/networks';
import {
  Registry,
  makeAuthInfoBytes,
  makeSignDoc,
  encodePubkey,
  makeSignBytes,
  DirectSecp256k1HdWallet,
} from '@cosmjs/proto-signing';
import { encodeSecp256k1Pubkey } from '@cosmjs/amino';
import { StargateClient, defaultRegistryTypes } from '@cosmjs/stargate';
import { TxRaw, SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
// import {
//   TxRaw as InjectiveTxRaw,
//   AuthInfo,
// } from '@injectivelabs/chain-api/cosmos/tx/v1beta1/tx_pb';
import { Int53 } from '@cosmjs/math';

import { AptosClient, TxnBuilderTypes, BCS, Types } from 'aptos';
import { sha3_256 } from 'js-sha3';

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

const ResultTooltip = (props) => {
  const isBrowser = useIsBrowser();
  if (isBrowser) {
    window.global = window;
    window.Buffer = window.Buffer || require('buffer').Buffer;
  }

  return (
    <div
      {...props}
      className={styles.fadeMeAnimation}
      style={{
        width: '100%',
        borderRadius: '8px',
        padding: '16px',
        color: 'white',
        marginTop: '8px',
        ...props.style,
      }}
    />
  );
};

const Input = (props) => {
  const isBrowser = useIsBrowser();
  if (isBrowser) {
    window.global = window;
    window.Buffer = window.Buffer || require('buffer').Buffer;
  }

  return (
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
};

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
  Near,
  Aptos,
  Cosmos,
  Solana,
  // kms near send transaction
  Signature,
  SignedTransaction,
  NearTransaction,
  // kms cosmos send transaction
  Registry,
  makeAuthInfoBytes,
  makeSignDoc,
  encodePubkey,
  makeSignBytes,
  DirectSecp256k1HdWallet,
  TxBodyEncodeObject,
  StargateClient,
  defaultRegistryTypes,
  encodeSecp256k1Pubkey,
  TxRaw,
  SignDoc,
  Int53,
  // kms solana send transaction
  base58,
  // kms aptos send transaction
  AptosClient,
  TxnBuilderTypes,
  BCS,
  sha3_256,
  Types,
  // injective
  ChainRestAuthApi,
  getNetworkInfo,
  Network,
  createTransaction,
  MsgSend,
};
export default ReactLiveScope;
