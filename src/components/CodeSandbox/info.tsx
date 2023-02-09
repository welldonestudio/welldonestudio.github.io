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
    <Card sx={{ backgroundColor: "#343844", padding: "30px 15px", color: "white", }}>
      <Grid container key={1} sx={{ mb: "20px" }}>
        <Grid item xs={3}>
          <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)" }}>Balance:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">{balance + " APT"}</Typography>
        </Grid>
      </Grid>
      <Grid container key={2} sx={{ mb: "20px" }}>
        <Grid item xs={3}>
          <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)" }}>Sequence Number:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">{targetAccount.sequence_number}</Typography>
        </Grid>
      </Grid>
      <Grid container key={3}>
        <Grid item xs={3}>
          <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)" }}>Authentication Key: </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">{targetAccount.authentication_key}</Typography>
        </Grid>
      </Grid>
    </Card>
  )

}

export default Info
