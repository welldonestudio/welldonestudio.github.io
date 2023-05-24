import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

interface InterfaceProps {
  targetAccount: any;
  balance: string
}

const Info: React.FunctionComponent<InterfaceProps> = ({
  targetAccount,
  balance
}) => {

  return (
    <Card sx={{ backgroundColor: "#20222A", color: "white", }}>
      <Grid container key={1} sx={{ padding: '32px 40px', height: '118px', borderBottom: '1px solid #343844' }}>
        <Typography variant="body1" sx={{ color: '#8F98AE', width: '100%', fontSize: '14px', height: '22px', fontWeight: '300' }}>
          Balance:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '18px', height: '28px', fontWeight: '700' }}>
          {balance + " APT"}
        </Typography>
      </Grid>
      <Grid container key={2} sx={{ padding: '32px 40px', height: '118px', borderBottom: '1px solid #343844' }}>
        <Typography variant="body1" sx={{ color: '#8F98AE', width: '100%', fontSize: '14px', height: '22px', fontWeight: '300' }}>
          Sequence Number:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '18px', height: '28px', fontWeight: '700' }}>
          {targetAccount.sequence_number}
        </Typography>
      </Grid>
      <Grid container key={3} sx={{ padding: '32px 40px', height: '118px', borderBottom: '1px solid #343844' }}>
        <Typography variant="body1" sx={{ color: '#8F98AE', width: '100%', fontSize: '14px', height: '22px', fontWeight: '300' }}>
          Authentication Key:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '18px', height: '28px', fontWeight: '700' }}>
          {targetAccount.authentication_key}
        </Typography>
      </Grid>
    </Card >
  )

}

export default Info
