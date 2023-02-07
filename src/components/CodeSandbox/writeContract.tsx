
import React, { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { transactions, utils } from 'near-api-js';
import BN from 'bn.js';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore1 = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandMore2 = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandMore3 = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface InterfaceProps {
  contractAddress: string;
  schema: Object;
}

const WriteContract = (props) => {

  const { contractAddress, schema } = props;
  const [address, setAddress] = React.useState('');

  // 스키마 표준 정해지면 수정
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [param, setParam] = React.useState('')

  const setParameter = (e: any) => {
    setParam(e.target.value);
  }

  const handleExpandClick1 = async () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = async () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = async () => {
    setExpanded3(!expanded3);
  };

  const connect = () => {
    const dappProvider = (window as any).dapp
    dappProvider.on('chainChanged', (provider: any) => {
      console.log(provider)
      window.location.reload();
    })

    dappProvider.on('accountsChanged', (provider: any) => {
      console.log(provider)
      window.location.reload();
    })

    dappProvider.request('near', {
      method: 'dapp:accounts'
    }).then((account: { [x: string]: { address: any; }; }) => {
      setAddress((account.near as any).address)
    })
  }

  const signAndSendTransaction = () => {

    const rpcURL = 'https://rpc.testnet.near.org';

    // eslint-disable-next-line no-undef
    // Get PublicKey // helper로 변경 맨 마지막 퍼블릭키 사용
    fetch(rpcURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'dontcare',
        method: 'query',
        params: {
          request_type: 'view_access_key_list',
          finality: 'final',
          account_id: address,
        },
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        // eslint-disable-next-line no-undef
        // const key = data.result.keys.filter((key: any) => key['public_key'] === account.pubKey);
        const key = data.result.keys.filter((key: any) => key['public_key'] === 'ed25519:AW35EZSB4SjwqcTBVE2fMXyeVVj6zoPCzLpy1PXeXPxH')

        const nonce = key[0]['access_key'].nonce + 1;

        const recentBlockHash = utils.serialize.base_decode(data.result.block_hash);

        const param = {} as any;

        const actions = [
          transactions.functionCall(
            'increment',
            {
              'count': param
            },
            new BN(30000000000000),
            new BN(0) as any,
          ),
        ];

        const transaction = transactions.createTransaction(
          address, // sender_id
          utils.PublicKey.fromString('ed25519:AW35EZSB4SjwqcTBVE2fMXyeVVj6zoPCzLpy1PXeXPxH'),
          address, // receiver_id
          nonce,
          actions,
          recentBlockHash,
        );

        // const receipt = await walletRpcProvider.signAndSendTransaction(transaction);
        const bytes = transaction.encode();


        const request = {
          method: 'dapp:sendTransaction',
          params: [Buffer.from(bytes).toString('base64')],
          id: (123),
          jsonrpc: '2.0'
        };

        console.log((window as any).dapp.request)

        const response = await (window as any).dapp.request('near', request);

        console.log(response)
      })
  }

  const Button = (props) => {
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


  return (
    <>
      <Chip
        icon={<CircleIcon color='primary' fontSize='small' />}
        label={address || "Connect to Web3"}
        sx={{ marginBottom: '10px' }}
        clickable
        onClick={connect} />

      <Card sx={{ marginBottom: '10px' }}>
        <CardActions disableSpacing onClick={handleExpandClick1}>
          <Typography variant="body2" color="text.primary" sx={{ marginLeft: '10px' }}>
            1. increment
          </Typography>
          <ExpandMore1
            expand={expanded1}
            aria-expanded={expanded1}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore1>
        </CardActions>
        <Collapse in={expanded1} timeout="auto" unmountOnExit>
          <CardContent>
            <FormControl fullWidth sx={{ marginBottom: '50px' }}>
              {/* <InputLabel id="contractAddress-input-label">Please enter the Contract Address you would like to verify</InputLabel> */}
              <TextField
                label="_count (integer)"
                id="contractAddress-input"
                value={param}
                onChange={setParameter}
                required
                placeholder='_count(integer)'
              />
            </FormControl>
            <Button
              variant='contained'
              color="primary"
              size="small"
              onClick={signAndSendTransaction}
            >Write</Button>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ marginBottom: '10px' }}>
        <CardActions disableSpacing onClick={handleExpandClick2}>
          <Typography variant="body2" color="text.primary" sx={{ marginLeft: '10px' }}>
            2. decrement
          </Typography>
          <ExpandMore2
            expand={expanded2}
            aria-expanded={expanded2}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore2>
        </CardActions>
        <Collapse in={expanded2} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card>
        <CardActions disableSpacing onClick={handleExpandClick3}>
          <Typography variant="body2" color="text.primary" sx={{ marginLeft: '10px' }}>
            3. reset
          </Typography>
          <ExpandMore3
            expand={expanded3}
            aria-expanded={expanded3}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore3>
        </CardActions>
        <Collapse in={expanded3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default WriteContract;
