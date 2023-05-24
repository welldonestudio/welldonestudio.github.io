import React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import useIsBrowser from '@docusaurus/useIsBrowser';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import { AptosClient } from 'aptos';
import Menu from './menu'
import { NetworkName } from '@aptos-labs/wallet-adapter-react';

const CodeSandbox = () => {

  const [error, setError] = React.useState<string>('');
  const [moduleStatus, setModuleStatus] = React.useState<string>('');
  const [resourceStatus, setResourceStatus] = React.useState<string>('');

  const [chainId, setChainId] = React.useState('testnet');
  const [inputValue, setInputValue] = React.useState('');

  const [targetAccount, setTargetAccount] = React.useState({});
  const [targetModules, setTargetModules] = React.useState([] as any);
  const [targetResources, setTargetResources] = React.useState([] as any);

  const [balance, setBalance] = React.useState('');

  const isBrowser = useIsBrowser();

  if (isBrowser) {
    window.global = window;
    window.Buffer = window.Buffer || require('buffer').Buffer;
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      searchContract()
    }
  }

  const searchContract = async () => {
    await getAccount(inputValue);
    await getAccountResources(inputValue);
    await getAccountModules(inputValue);
  }

  const getAccount = async (account: string) => {
    try {
      setError('');
      const aptosClient = new AptosClient(aptosNodeUrl(chainId));
      const accountInfo = await aptosClient.getAccount(account);
      setTargetAccount(accountInfo)
    } catch (e) {
      setError(e.message);
      setTargetAccount({});
    }
  }

  const getAccountModules = async (account: string) => {
    try {
      setModuleStatus('');
      const aptosClient = new AptosClient(aptosNodeUrl(chainId));
      const modules = await aptosClient.getAccountModules(account)
      setTargetModules(modules)
    } catch (e) {
      setModuleStatus(e.message);
      setTargetModules([])
    }
  }

  const getAccountResources = async (account: string) => {
    try {
      setResourceStatus('')
      setBalance('')
      const aptosClient = new AptosClient(aptosNodeUrl(chainId));
      const resources = await aptosClient.getAccountResources(account);

      // get balance
      resources.map((r: any, i) => {
        if (r.type === "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>") {
          setBalance(getFormattedBalanceStr(r.data.coin.value))
        }
      })

      setTargetResources(resources)
    } catch (e) {
      setResourceStatus(e.message);
      setBalance('')
      setTargetResources([])
    }
  }

  const aptosNodeUrl = (network: string) => {
    if (network === 'mainnet') {
      return 'https://fullnode.mainnet.aptoslabs.com';
    }

    if (network === 'testnet') {
      return 'https://fullnode.testnet.aptoslabs.com';
    }

    if (network === 'devnet') {
      return 'https://fullnode.devnet.aptoslabs.com';
    }

    throw new Error(`Invalid chainId=${chainId}`);
  }

  return (
    <>
      <Container disableGutters maxWidth="lg" component="main" style={{
        fontFamily: 'SUIT Variable',
        fontStyle: 'normal'
      }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          gutterBottom
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, fontWeight: 'bold', fontSize: '32px', mb: '0px !important' }}
        >
          Code Sandbox
        </Typography>
        <Typography align="center" component="p" sx={{ fontSize: '20px', fontWeight: '700', mb: '20px !important' }}>
          makes it easy to explore contracts on Blockchain.
        </Typography>
        <Typography align="center" component="p" sx={{ fontSize: '16px', fontWeight: '400', color: '#8F98AE' }}>
          Enter a contract account below (i.e. 0x...)
        </Typography>
      </Container>
      <Container maxWidth="md" component="main" sx={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            paddingLeft: "0px"
          }}
        >
          <Select
            defaultValue={chainId}
            value={chainId}
            onChange={(e) => { setChainId(e.target.value) }}
            sx={{
              '& .MuiSelect-select': {
                color: 'white',
                border: '1.5px solid #0288d1',
              },
              marginRight: '10px',
              '.MuiSvgIcon-root ': {
                fill: "white",
              }
            }}
          >
            <MenuItem value={'mainnet'}>Mainnet</MenuItem>
            <MenuItem value={'testnet'}>Testnet</MenuItem>
            <MenuItem value={'devnet'}>Devnet</MenuItem>
          </Select>
          <TextField
            id="search-bar"
            label="Search by Address"
            variant="outlined"
            placeholder="Search..."
            size="medium"
            fullWidth
            color='info'
            value={inputValue}
            focused
            InputProps={{
              style: {
                color: 'var(--input-color)',
              },
            }}
            onChange={(e) => { setInputValue(e.target.value) }}
            onKeyDown={handleKeyDown}
          />
          <IconButton type="submit" aria-label="search" color='info' onClick={searchContract}>
            <SearchIcon style={{ fill: "" }} />
          </IconButton>
        </div>
      </Container>
      {
        error ?
          <Box sx={{ width: '90%', padding: '10px', backgroundColor: 'rgba(222,68,55,.1)', borderRadius: '10px', marginBottom: '30px', margin: '0 auto' }}>
            <Typography variant="body1" gutterBottom color={'error'} sx={{ fontSize: "12px" }}>
              {error}
            </Typography>
          </Box>
          : false
      }
      {
        Object.keys(targetAccount).length ?
          <Menu
            accountAddress={inputValue}
            targetAccount={targetAccount}
            targetResources={targetResources}
            targetModules={targetModules}
            moduleStatus={moduleStatus}
            resourceStatus={resourceStatus}
            balance={balance}
            chainId={chainId}
          />
          : false
      }

    </>
  )
}


export default CodeSandbox;
// helper

const trimRight = (rightSide: string) => {
  while (rightSide.endsWith("0")) {
    rightSide = rightSide.slice(0, -1);
  }
  return rightSide;
}

const getFormattedBalanceStr = (
  balance: string,
  decimals?: number,
  fixedDecimalPlaces?: number,
) => {
  // If balance is zero or decimals is 0, just return it
  if (balance == "0" || (decimals !== undefined && decimals === 0)) {
    return balance;
  }
  const APTOS_DECIMALS = 8;
  const len = balance.length;
  decimals = decimals || APTOS_DECIMALS;

  // If length is less than decimals, pad with 0s to decimals length and return
  if (len <= decimals) {
    return "0." + (trimRight("0".repeat(decimals - len) + balance) || "0");
  }

  // Otherwise, insert decimal point at len - decimals
  const leftSide = BigInt(balance.slice(0, len - decimals)).toLocaleString(
    "en-US",
  );
  let rightSide = balance.slice(len - decimals);
  if (BigInt(rightSide) == BigInt(0)) {
    return leftSide;
  }

  // remove trailing 0s
  rightSide = trimRight(rightSide);
  if (
    fixedDecimalPlaces !== undefined &&
    rightSide.length > fixedDecimalPlaces
  ) {
    rightSide = rightSide.slice(0, fixedDecimalPlaces - rightSide.length);
  }

  if (rightSide.length === 0) {
    return leftSide;
  }

  return leftSide + "." + trimRight(rightSide);
}