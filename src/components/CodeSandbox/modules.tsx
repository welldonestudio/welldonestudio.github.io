
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
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";

import { AptosClient, BCS, TransactionBuilderRemoteABI, } from 'aptos';
import { sha3_256 } from 'js-sha3';

import CheckIcon from '@mui/icons-material/Check';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  color: 'white',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface InterfaceProps {
  targetModules: any;
  moduleStatus: string;
  chainId: string;
  targetAccount: string;
  accountAddress: string;
}

const Modules: React.FC<InterfaceProps> = ({
  targetModules,
  moduleStatus,
  chainId,
  targetAccount,
  accountAddress
}) => {
  const [expandedStates, setExpandedStates] = React.useState<{ [key: string]: boolean }>({});
  const [expandedFunctionStates, setExpandedFunctionStates] = React.useState<{ [key: string]: boolean }>({});
  const [paramValues, setParamValues] = React.useState<string[]>([]);
  const [typeParamValues, setTypeParamValues] = React.useState<string[]>([]);

  const [returnValues, setReturnValues] = React.useState<{ [key: string]: any }>({});
  const [error, setError] = React.useState<{ [key: string]: string }>({});

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

  const handleExpandClick = (id: string) => {
    setExpandedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleFunctionExpandClick = (id: string) => {
    setExpandedFunctionStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const view = async (fullFunctionName: string) => {

    setReturnValues((prevState) => ({
      ...prevState,
      [fullFunctionName]: '',
    }))

    setError((prevState) => ({
      ...prevState,
      [fullFunctionName]: '',
    }))

    const inputParamValues = Object.entries(paramValues)
      .filter(([paramName, value]) => paramName.startsWith(fullFunctionName))
      .map(([paramName, value]) => value);

    const strArr = fullFunctionName.split("-");
    const moduleName = strArr[2];
    const functionName = strArr[3];

    const inputTypeParamValues = Object.entries(typeParamValues)
      .filter(([paramName, value]) => paramName.startsWith(fullFunctionName))
      .map(([paramName, value]) => value);

    // call view function
    const aptosClient = new AptosClient(aptosNodeUrl());

    const payload = {
      function: accountAddress + "::" + moduleName + "::" + functionName,
      type_arguments: inputTypeParamValues,
      arguments: inputParamValues,
    };

    try {
      const result = await aptosClient.view(payload);

      setReturnValues((prevState) => ({
        ...prevState,
        [fullFunctionName]: result,
      }))
    } catch (e) {
      setError((prevState) => ({
        ...prevState,
        [fullFunctionName]: e.message,
      }))
    }


  }

  const entry = async (fullFunctionName: string) => {
    setError((prevState) => ({
      ...prevState,
      [fullFunctionName]: '',
    }))

    const inputParamValues = Object.entries(paramValues)
      .filter(([paramName, value]) => paramName.startsWith(fullFunctionName))
      .map(([paramName, value]) => value);

    const strArr = fullFunctionName.split("-");
    const moduleName = strArr[2];
    const functionName = strArr[3];

    const typeParamKey = strArr[0] + "-type-" + strArr[1] + "-" + strArr[2] + "-" + strArr[3]

    const inputTypeParamValues = Object.entries(typeParamValues)
      .filter(([paramName, value]) => paramName.startsWith(typeParamKey))
      .map(([paramName, value]) => value);

    // call entry function
    const aptosClient = new AptosClient(aptosNodeUrl());

    const payload = {
      type: "entry_function_payload",
      function: accountAddress + "::" + moduleName + "::" + functionName,
      type_arguments: inputTypeParamValues,
      arguments: inputParamValues,
    };

    try {
      const response = await signAndSubmitTransaction(payload);
      // if you want to wait for transaction
      await aptosClient.waitForTransaction(response?.hash || "");
      console.log(response?.hash)
    } catch (error: any) {
      console.log("error", error);
    }
  }

  const aptosNodeUrl = () => {
    if (chainId === 'mainnet') {
      return 'https://fullnode.mainnet.aptoslabs.com';
    }

    if (chainId === 'testnet') {
      return 'https://fullnode.testnet.aptoslabs.com';
    }

    if (chainId === 'devnet') {
      return 'https://fullnode.devnet.aptoslabs.com';
    }

    throw new Error(`Invalid chainId=${chainId}`);
  }

  const handleNavigate = () => {
    window.open('https://explorer.aptoslabs.com/account/' + account?.address, '_blank');
  }

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <WalletConnector handleNavigate={handleNavigate} />
      </div>
      {
        moduleStatus || !targetModules.length ?
          <Box sx={{ width: '100%', padding: '10px', backgroundColor: 'rgba(222,68,55,.1)', borderRadius: '10px', marginBottom: '30px', margin: '0 auto' }}>
            <Typography variant="body1" gutterBottom color={'error'} sx={{ fontSize: "15px" }}>
              {targetModules.length ? moduleStatus : "No Data Found"}
            </Typography>
          </Box>
          :
          targetModules.map((module, idx) => (
            <Card key={`${module.abi.name}-${idx}`} sx={{ backgroundColor: "#343844", marginBottom: "10px" }}>
              <CardActions disableSpacing onClick={() => { handleExpandClick(`${module.abi.name}-${idx}`) }}>
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
                      expand={expandedStates[`${module.abi.name}-${idx}`]}
                      aria-expanded={expandedStates[`${module.abi.name}-${idx}`]}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </Grid>
                </Grid>
              </CardActions>
              <Collapse in={expandedStates[`${module.abi.name}-${idx}`]} timeout="auto" unmountOnExit sx={{ backgroundColor: "#2d3345" }}>
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
                  <Grid container key={3} sx={{ mb: "20px" }}>
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

                  <Grid container key={4} sx={{ mb: "20px", justifyContent: "flex-end" }}>
                    <Grid item xs={2}>
                      <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)", pl: "10px" }}>View:</Typography>
                    </Grid>
                    {
                      module.abi.exposed_functions.length ? (
                        module.abi.exposed_functions.some((f) => !f.is_entry) ? (
                          module.abi.exposed_functions.map((f, i) => {
                            if (!f.is_entry) {
                              return (
                                <Grid item xs={10}>
                                  < Card key={`${'view'}-${module.abi.name}-${f.name}-${i}`} sx={{ backgroundColor: "#343844", marginBottom: "10px" }}>
                                    <CardActions disableSpacing onClick={() => { handleFunctionExpandClick(`${'view'}-${module.abi.name}-${f.name}-${i}`) }} sx={{ padding: "0", backgroundColor: "#252525" }}>
                                      <Grid container key={1} sx={{ display: "flex", alignItems: "center", pl: "5px" }}>
                                        <Grid item xs={11}>
                                          <Typography variant="body2" color="white" sx={{ color: "white", pl: "10px" }}>
                                            {f.name}
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                          <ExpandMore
                                            expand={expandedFunctionStates[`${'view'}-${module.abi.name}-${f.name}-${i}`]}
                                            aria-expanded={expandedFunctionStates[`${'view'}-${module.abi.name}-${f.name}-${i}`]}
                                            aria-label="show more"
                                          >
                                            <ExpandMoreIcon />
                                          </ExpandMore>
                                        </Grid>
                                      </Grid>
                                    </CardActions>
                                    <Collapse in={expandedFunctionStates[`view-${module.abi.name}-${f.name}-${i}`]} timeout="auto" unmountOnExit sx={{ backgroundColor: "#111111", color: "white" }}>
                                      <CardContent>
                                        {
                                          f.generic_type_params.map((gp, gpi) => (
                                            <>
                                              <Grid container key={gpi} sx={{ mb: "20px" }}>
                                                <Grid item xs={12}>
                                                  <TextField
                                                    id={`view-type-param-${module.abi.name}-${f.name}-${gpi}`}
                                                    label={'Type Arg ' + (gpi + 1)}
                                                    variant="outlined"
                                                    size="medium"
                                                    fullWidth
                                                    color='info'
                                                    InputProps={{
                                                      style: {
                                                        color: 'var(--input-color)',
                                                        fontSize: '14px'
                                                      },
                                                    }}
                                                    focused
                                                    value={typeParamValues[`view-type-param-${module.abi.name}-${f.name}-${gpi}`] || ''}
                                                    onChange={(e) => setTypeParamValues({ ...typeParamValues, [`view-type-param-${module.abi.name}-${f.name}-${gpi}`]: e.target.value })}
                                                    sx={{
                                                      "& .MuiInputLabel-root.Mui-disabled": {
                                                        color: "grey",
                                                        position: "absolute",
                                                        top: -10,
                                                        left: 0,
                                                      },
                                                      "& input": {
                                                        padding: '10px !important',
                                                        borderColor: "#343a40",
                                                      },
                                                      "& .MuiOutlinedInput-root": {
                                                        "& fieldset": {
                                                          borderColor: "#343a40",
                                                          borderWidth: "2px"
                                                        },
                                                        "&:hover fieldset": {
                                                          borderColor: "#343a40",
                                                          borderWidth: "2px"
                                                        },
                                                        "&.Mui-focused fieldset": {
                                                          borderColor: "#343a40",
                                                          borderWidth: "2px"
                                                        },
                                                        "& .Mui-disabled fieldset": {
                                                          borderColor: "#343a40 !important",
                                                          borderWidth: "2px !important",
                                                        }
                                                      }
                                                    }}
                                                    InputLabelProps={{
                                                      sx: {
                                                        '&.Mui-focused': {
                                                          color: '#ebebeb',
                                                        },
                                                      }
                                                    }}
                                                  />
                                                </Grid>
                                              </Grid>
                                              {gpi + 1 === f.generic_type_params.length ? <hr style={{ backgroundColor: "#343a40" }} /> : null}
                                            </>
                                          ))}
                                        {
                                          f.params.map((p, pi) => (
                                            <Grid container key={pi} sx={{ mb: "20px" }}>
                                              <Grid item xs={12}>
                                                <TextField
                                                  id={`view-param-${module.abi.name}-${f.name}-${pi}`}
                                                  label={p}
                                                  variant="outlined"
                                                  size="medium"
                                                  fullWidth
                                                  color='info'
                                                  InputProps={{
                                                    style: {
                                                      color: 'var(--input-color)',
                                                      fontSize: '14px'
                                                    },
                                                  }}
                                                  disabled={p === 'signer' || p === '&signer'}
                                                  focused
                                                  placeholder={p === 'signer' || p === '&signer' ? account?.address : ''}
                                                  value={paramValues[`view-param-${module.abi.name}-${f.name}-${pi}`] || ''}
                                                  onChange={(e) => setParamValues({ ...paramValues, [`view-param-${module.abi.name}-${f.name}-${pi}`]: e.target.value })}
                                                  sx={{
                                                    "& .MuiInputLabel-root.Mui-disabled": {
                                                      color: "grey",
                                                      position: "absolute",
                                                      top: -10,
                                                      left: 0,
                                                    },
                                                    "& input": {
                                                      padding: '10px !important',
                                                      borderColor: "#343a40",
                                                    },
                                                    "& .MuiOutlinedInput-root": {
                                                      "& fieldset": {
                                                        borderColor: "#343a40",
                                                        borderWidth: "2px"
                                                      },
                                                      "&:hover fieldset": {
                                                        borderColor: "#343a40",
                                                        borderWidth: "2px"
                                                      },
                                                      "&.Mui-focused fieldset": {
                                                        borderColor: "#343a40",
                                                        borderWidth: "2px"
                                                      },
                                                      "& .Mui-disabled fieldset": {
                                                        borderColor: "#343a40 !important",
                                                        borderWidth: "2px !important",
                                                      }
                                                    }
                                                  }}
                                                  InputLabelProps={{
                                                    sx: {
                                                      '&.Mui-focused': {
                                                        color: '#ebebeb',
                                                      },
                                                    }
                                                  }}
                                                />
                                              </Grid>
                                            </Grid>

                                          ))}
                                        <Grid container key={5} sx={{}}>
                                          <Grid item xs={2}>

                                            <Button
                                              variant="contained"
                                              size="small"
                                              sx={{ backgroundColor: "#252525", fontSize: "10px !important" }}
                                              onClick={() => { view(`view-param-${module.abi.name}-${f.name}`) }}
                                            >
                                              Query
                                            </Button>
                                          </Grid>
                                          <Grid item xs={10}></Grid>
                                        </Grid>
                                        {
                                          error[`view-param-${module.abi.name}-${f.name}`] ?
                                            <>
                                              <Typography variant="body1" gutterBottom color={'error'} sx={{ fontSize: "13px", mt: "10px", }}>
                                                {error[`view-param-${module.abi.name}-${f.name}`]}
                                              </Typography>
                                              <Typography variant="body1" gutterBottom color={'error'} sx={{ fontSize: "13px", }}>
                                                {"If you have entered the parameter correctly, check if the function of the module is set to 'view'."}
                                              </Typography>
                                            </>
                                            : null
                                        }
                                        {
                                          returnValues[`view-param-${module.abi.name}-${f.name}`] ?
                                            <Typography variant="body1" gutterBottom color={'info'} sx={{ fontSize: "14px", mt: "10px" }}>
                                              <CheckIcon color='info' style={{ verticalAlign: "bottom" }} /> {returnValues[`view-param-${module.abi.name}-${f.name}`]}
                                            </Typography> : null
                                        }
                                      </CardContent>
                                    </Collapse>
                                  </Card>
                                </Grid>)
                            }
                          }
                          )) : (
                          <Grid item xs={10}>
                            <Typography variant="body2" color="white" sx={{ color: "white", pl: "10px" }}>
                              No Data
                            </Typography>
                          </Grid>
                        ))
                        : <Grid item xs={10}>No Data</Grid>
                    }

                  </Grid>

                  <Grid container key={5} sx={{ justifyContent: "flex-end" }}>
                    <Grid item xs={2}>
                      <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)", pl: "10px" }}>Entry:</Typography>
                    </Grid>
                    {
                      module.abi.exposed_functions.length ? (
                        module.abi.exposed_functions.some((f) => f.is_entry) ? (
                          module.abi.exposed_functions.map((f, i) => {
                            if (f.is_entry) {
                              return (
                                <Grid item xs={10}>
                                  < Card key={`${'entry'}-${module.abi.name}-${f.name}-${i}`} sx={{ backgroundColor: "#343844", marginBottom: "10px" }}>
                                    <CardActions disableSpacing onClick={() => { handleFunctionExpandClick(`${'entry'}-${module.abi.name}-${f.name}-${i}`) }} sx={{ padding: "0", backgroundColor: "#252525" }}>
                                      <Grid container key={1} sx={{ display: "flex", alignItems: "center", pl: "5px" }}>
                                        <Grid item xs={11}>
                                          <Typography variant="body2" color="white" sx={{ color: "white", pl: "10px" }}>
                                            {f.name}
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                          <ExpandMore
                                            expand={expandedFunctionStates[`${'entry'}-${module.abi.name}-${f.name}-${i}`]}
                                            aria-expanded={expandedFunctionStates[`${'entry'}-${module.abi.name}-${f.name}-${i}`]}
                                            aria-label="show more"
                                          >
                                            <ExpandMoreIcon />
                                          </ExpandMore>
                                        </Grid>
                                      </Grid>
                                    </CardActions>
                                    <Collapse in={expandedFunctionStates[`${'entry'}-${module.abi.name}-${f.name}-${i}`]} timeout="auto" unmountOnExit sx={{ backgroundColor: "#111111", color: "white" }}>
                                      <CardContent>
                                        {
                                          f.generic_type_params.map((gp, gpi) => (
                                            <>
                                              <Grid container key={gpi} sx={{ mb: "20px" }}>
                                                <Grid item xs={12}>
                                                  <TextField
                                                    id={`entry-type-param-${module.abi.name}-${f.name}-${gpi}`}
                                                    label={'Type Arg ' + (gpi + 1)}
                                                    variant="outlined"
                                                    size="medium"
                                                    fullWidth
                                                    color={'info'}
                                                    InputProps={{
                                                      style: {
                                                        color: 'var(--input-color)',
                                                        fontSize: '14px'
                                                      },
                                                    }}
                                                    focused
                                                    value={
                                                      typeParamValues[`entry-type-param-${module.abi.name}-${f.name}-${gpi}`] || ''
                                                    }
                                                    onChange={
                                                      (e) => setTypeParamValues({ ...typeParamValues, [`entry-type-param-${module.abi.name}-${f.name}-${gpi}`]: e.target.value })
                                                    }
                                                    sx={{
                                                      "& .MuiInputLabel-root.Mui-disabled": {
                                                        color: "grey",
                                                        position: "absolute",
                                                        top: -10,
                                                        left: 0,
                                                      },
                                                      "& input": {
                                                        padding: '10px !important',
                                                        borderColor: "#343a40",
                                                      },
                                                      "& .MuiOutlinedInput-root": {
                                                        "& fieldset": {
                                                          borderColor: "#343a40",
                                                          borderWidth: "2px"
                                                        },
                                                        "&:hover fieldset": {
                                                          borderColor: "#343a40",
                                                          borderWidth: "2px"
                                                        },
                                                        "&.Mui-focused fieldset": {
                                                          borderColor: "#343a40",
                                                          borderWidth: "2px"
                                                        },
                                                        "& .Mui-disabled fieldset": {
                                                          borderColor: "#343a40 !important",
                                                          borderWidth: "2px !important",
                                                        }
                                                      }
                                                    }}
                                                    InputLabelProps={{
                                                      sx: {
                                                        '&.Mui-focused': {
                                                          color: '#ebebeb',
                                                        },
                                                      }
                                                    }}
                                                  />
                                                </Grid>
                                              </Grid>
                                              {gpi + 1 === f.generic_type_params.length ? <hr style={{ backgroundColor: "#343a40" }} /> : null}
                                            </>
                                          ))}
                                        {
                                          f.params.map((p, pi) => (
                                            <Grid container key={pi} sx={{ mb: "20px" }}>
                                              <Grid item xs={12}>
                                                <TextField
                                                  id={`entry-param-${module.abi.name}-${f.name}-${pi}`}
                                                  label={p}
                                                  variant="outlined"
                                                  size="medium"
                                                  fullWidth
                                                  color={'info'}
                                                  InputProps={{
                                                    style: {
                                                      color: 'var(--input-color)',
                                                      fontSize: '14px'
                                                    },
                                                  }}
                                                  disabled={p === 'signer' || p === '&signer'}
                                                  focused
                                                  placeholder={p === 'signer' || p === '&signer' ? account?.address : ''}
                                                  value={
                                                    paramValues[`entry-param-${module.abi.name}-${f.name}-${pi}`] || ''
                                                  }
                                                  onChange={
                                                    (e) => setParamValues({ ...paramValues, [`entry-param-${module.abi.name}-${f.name}-${pi}`]: e.target.value })
                                                  }
                                                  sx={{
                                                    "& .MuiInputLabel-root.Mui-disabled": {
                                                      color: "grey",
                                                      position: "absolute",
                                                      top: -10,
                                                      left: 0,
                                                    },
                                                    "& input": {
                                                      padding: '10px !important',
                                                      borderColor: "#343a40",
                                                    },
                                                    "& .MuiOutlinedInput-root": {
                                                      "& fieldset": {
                                                        borderColor: "#343a40",
                                                        borderWidth: "2px"
                                                      },
                                                      "&:hover fieldset": {
                                                        borderColor: "#343a40",
                                                        borderWidth: "2px"
                                                      },
                                                      "&.Mui-focused fieldset": {
                                                        borderColor: "#343a40",
                                                        borderWidth: "2px"
                                                      },
                                                      "& .Mui-disabled fieldset": {
                                                        borderColor: "#343a40 !important",
                                                        borderWidth: "2px !important",
                                                      }
                                                    }
                                                  }}
                                                  InputLabelProps={{
                                                    sx: {
                                                      '&.Mui-focused': {
                                                        color: '#ebebeb',
                                                      },
                                                    }
                                                  }}
                                                />
                                              </Grid>
                                            </Grid>

                                          ))}
                                        <Grid container key={5} sx={{}}>
                                          <Grid item xs={2}>

                                            <Button
                                              variant="contained"
                                              size="small"
                                              disabled={!connected}
                                              sx={{
                                                backgroundColor: connected ? "#252525" : "#CCCCCC !important",
                                                color: connected ? "#FFFFFF" : "#666666",
                                                fontSize: "10px !important"
                                              }}
                                              onClick={() => { entry(`entry-param-${module.abi.name}-${f.name}`) }}
                                            >
                                              Write
                                            </Button>
                                          </Grid>
                                          <Grid item xs={10}></Grid>
                                        </Grid>
                                      </CardContent>
                                    </Collapse>
                                  </Card>
                                </Grid>)
                            }
                          }
                          )) : (
                          <Grid item xs={10}>
                            <Typography variant="body2" color="white" sx={{ color: "white", pl: "10px" }}>
                              No Data
                            </Typography>
                          </Grid>
                        ))
                        : <Grid item xs={10}>No Data</Grid>
                    }
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          ))
      }
    </>
  );
}

export default Modules;
