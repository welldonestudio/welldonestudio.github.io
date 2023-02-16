
import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactJson from 'react-json-view'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
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
  targetModules: any;
  moduleStatus: string
}

const Modules: React.FC<InterfaceProps> = ({
  targetModules,
  moduleStatus
}) => {
  const [expandedStates, setExpandedStates] = React.useState<boolean[]>([]);
  const [address, setAddress] = React.useState('');

  const {
    connect,
    account,
    network,
    connected,
    disconnect,
    wallet,
    wallets,
    signAndSubmitTransaction,
    signTransaction,
    signMessage,
    signMessageAndVerify,
  } = useWallet();

  const handleExpandClick = (index: number) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <WalletConnector />
      </div>
      {/* <Chip
        icon={<CircleIcon color={address ? 'primary' : 'error'} fontSize='small' />}
        label={address || "Connect to Web3"}
        sx={{ marginBottom: '10px', color: "white", backgroundColor: "rgba(222,68,55,.1)" }}
        clickable
        onClick={() => {
          console.log(wallet)
          connect((wallet as any).name)
        }} /> */}
      {
        moduleStatus || !targetModules.length ?
          <Box sx={{ width: '100%', padding: '10px', backgroundColor: 'rgba(222,68,55,.1)', borderRadius: '10px', marginBottom: '30px', margin: '0 auto' }}>
            <Typography variant="body1" gutterBottom color={'error'} sx={{ fontSize: "15px" }}>
              {targetModules.length ? moduleStatus : "No Data Found"}
            </Typography>
          </Box>
          :
          targetModules.map((module, idx) => (
            <>
              <Card sx={{ backgroundColor: "#343844", mb: "10px" }}>
                <CardActions disableSpacing onClick={() => { handleExpandClick(idx) }}>
                  <Grid container key={1} sx={{ display: "flex", alignItems: "center" }}>
                    <Grid item xs={2}>
                      <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)", pl: "20px" }}>Name:</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                      <Typography variant="body2" color="text.primary" sx={{ color: "rgb(144, 144, 153)", pl: "10px" }}>
                        {module.abi.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={0.5}>
                      <ExpandMore
                        expand={expandedStates[idx]}
                        aria-expanded={expandedStates[idx]}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </Grid>
                  </Grid>
                </CardActions>
                {/*  */}
                <Collapse in={expandedStates[idx]} timeout="auto" unmountOnExit sx={{ backgroundColor: "#2d3345" }}>
                  <CardContent>
                    <Grid container key={2} sx={{ mb: "20px" }}>
                      <Grid item xs={2}>
                        <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)", pl: "10px" }}>Bytecode:</Typography>
                      </Grid>
                      <Grid item xs={10} sx={{ overflow: "auto" }}>
                        <Typography variant="body2" color="text.primary" sx={{ color: "white", overflowWrap: "break-word", maxHeight: "60px" }}>
                          {module.bytecode}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container key={3} sx={{}}>
                      <Grid item xs={2}>
                        <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)", pl: "10px" }}>ABI:</Typography>
                      </Grid>
                      <Grid item xs={10}>
                        <ReactJson
                          src={module.abi}
                          theme="harmonic"
                          collapsed
                          name={null}
                          collapseStringsAfterLength={80}
                          displayObjectSize={false}
                          displayDataTypes={false}
                          style={{ borderRadius: "10px", padding: "10px" }} />
                      </Grid>
                    </Grid>

                  </CardContent>
                </Collapse>
              </Card>
            </>
          ))
      }
    </>
  );
}

export default Modules;
