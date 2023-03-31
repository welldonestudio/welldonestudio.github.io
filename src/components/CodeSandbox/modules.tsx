
import React, { useEffect } from 'react';
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
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";
import { AptosClient, Types, TxnBuilderTypes } from 'aptos';
import { ArgTypeValuePair, genPayload, serializedArgs } from './aptos-helper';
import CheckIcon from '@mui/icons-material/Check';
import { Parameters } from './Parameters';

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
  const [selectedModuleState, setSelectedModuleState] = React.useState<Record<string, { moveFunction: any, parameters: any[] }>>({});

  const [moveFunction, setMoveFunction] = React.useState<Types.MoveFunction | undefined>();
  const [genericParameters, setGenericParameters] = React.useState<string[]>([]);
  const [parameters, setParameters] = React.useState<ArgTypeValuePair[]>([]);
  const [targetModule, setTargetModule] = React.useState<string>('');

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

  const handleExpandClick = (modKey, modName) => {
    setExpandedStates((prevState) => {

      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      newState[modKey] = !prevState[modKey];
      return newState;
    });

    setTargetModule(modName);
    setParameters([]);
    setGenericParameters([]);

    const module = targetModules.find((m) => m.abi?.name === modName);
    if (module && !selectedModuleState[modKey]?.moveFunction) {
      setSelectedModuleState((prevState) => ({
        ...prevState,
        [modKey]: {
          ...prevState[modKey],
          moveFunction: module.abi?.exposed_functions[0],
          parameters: [],
        },
      }));
    }
  };

  const view = async (fullFunctionName: string) => {

  }

  const entry = async (fullFunctionName: string) => {
    console.log('parameters', JSON.stringify(parameters, null, 2));

    const aptosClient = new AptosClient(aptosNodeUrl());

    const payload = {
      type: "entry_function_payload",
      function: accountAddress + "::" + targetModule + "::" + fullFunctionName,
      type_arguments: genericParameters,
      arguments: parameters,
    };

    console.log(payload)

    try {
      const response = await signAndSubmitTransaction(payload as any);
      console.log(response)
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

  const handleFunction = (e, modKey) => {
    setParameters([]);
    setGenericParameters([]);
    const functionName = e.target.value;
    setSelectedModuleState((prevState) => {
      // 이전 상태를 기반으로 새로운 상태를 생성합니다.
      const newState = {
        ...prevState,
        [modKey]: {
          ...prevState[modKey],
        },
      };

      const module = targetModules.find((m) => m.abi?.name === targetModule);
      if (!module) {
        return newState;
      }

      const matchFunc = module.abi?.exposed_functions.find((f) => {
        return f.name === functionName;
      });

      // 새로운 함수를 선택한 모듈의 moveFunction으로 설정합니다.
      newState[modKey].moveFunction = matchFunc;
      newState[modKey].parameters = [];
      newState[modKey].genericParameters = [];

      return newState;
    });

    const selectedFunction = targetModules
      .find((mod) => mod.abi.name === targetModule)
      ?.abi.exposed_functions.find((func) => func.name === functionName);

    if (selectedFunction) {
      // selectedFunction.inputs와 selectedFunction.generic_type_params가 undefined인 경우를 처리
      setParameters(
        selectedFunction.inputs ? selectedFunction.inputs.map(() => ({})) : []
      );
      setGenericParameters(
        selectedFunction.generic_type_params
          ? selectedFunction.generic_type_params.map(() => "")
          : []
      );
    } else {
      // selectedFunction이 undefined인 경우, 파라미터와 제네릭 파라미터를 초기화합니다.
      setParameters([]);
      setGenericParameters([]);
    }
  };


  const setModuleAndABI = (e: any) => {
    setTargetModule(e.target.value);
    if (targetModules.length) {
      targetModules.map((mod, idx) => {
        if (mod.abi?.name === e.target.value) {
          setMoveFunction(mod.abi?.exposed_functions[0]);
          setParameters([]);
        }
      });
    }
  };

  const expandedModuleKey = Object.keys(expandedStates).find(
    (key) => expandedStates[key] === true
  );

  const currentMoveFunction =
    expandedModuleKey && selectedModuleState[expandedModuleKey]?.moveFunction
      ? { ...selectedModuleState[expandedModuleKey].moveFunction, parameters: selectedModuleState[expandedModuleKey].parameters }
      : null;

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
          targetModules.map((module, idx) => {
            const modName = `${module.abi.name}-${idx}`;
            return (
              <Card key={`${module.abi.name}-${idx}`} sx={{ backgroundColor: "#20222A", marginBottom: "10px" }}>
                <CardActions disableSpacing onClick={() => { handleExpandClick(`${module.abi.name}-${idx}`, module.abi.name) }}>
                  <Grid container key={1} sx={{ display: "flex", alignItems: "center" }}>
                    <Grid item xs={2}>
                      <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)", pl: "20px" }}>Name:</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                      <Typography variant="body2" color="text.primary" sx={{ color: "white", padding: "16px 0" }}>
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
                        <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)", pl: "10px" }}>Functions:</Typography>
                      </Grid>
                      <Grid item xs={10} sx={{ alignItems: "top" }}>
                        {targetModules.length > 0 ? (
                          <>
                            <Container maxWidth="md" component="main" sx={{
                              marginBottom: "20px",
                              paddingLeft: "0px !important",
                              marginTop: "-10px"
                            }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginTop: "10px",
                                }}
                              >
                                <Select
                                  value={selectedModuleState[modName]?.moveFunction?.name || ""}
                                  onChange={(e) => handleFunction(e, modName)}
                                  sx={{
                                    '& .MuiSelect-select': {
                                      color: 'white',
                                      backgroundColor: '#343844',
                                      padding: '10px'
                                    }
                                  }}
                                >
                                  {targetModules.map((mod, idx) => {
                                    if (mod.abi?.name === targetModule) {
                                      return mod.abi.exposed_functions.map((func: any, idx: any) => {
                                        return (
                                          <MenuItem value={func.name} key={idx}>
                                            {func.name}
                                          </MenuItem>
                                        );
                                      });
                                    }
                                  })}
                                </Select>
                              </div>
                            </Container>

                            {currentMoveFunction ? (
                              <>
                                <Parameters
                                  func={currentMoveFunction}
                                  setGenericParameters={setGenericParameters}
                                  setParameters={setParameters}
                                />
                                <div>
                                  {currentMoveFunction.is_entry ? (
                                    <Button
                                      variant="contained"
                                      size="small"
                                      disabled={!connected}
                                      sx={{
                                        backgroundColor: connected ? "#252525" : "#CCCCCC !important",
                                        color: connected ? "#FFFFFF" : "#666666",
                                        fontSize: "10px !important"
                                      }}
                                      onClick={() => { entry(currentMoveFunction.name) }}
                                    >
                                      {currentMoveFunction.name}
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="contained"
                                      size="small"
                                      sx={{ backgroundColor: "#252525", fontSize: "10px !important" }}>
                                      {currentMoveFunction.name}
                                    </Button>
                                  )}
                                </div>
                              </>
                            ) : (
                              false
                            )}
                          </>
                        ) : (
                          <Typography variant="body2" color="white" sx={{ color: "white", pl: "10px" }}>
                            No Data
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Collapse>
              </Card>
            )
          })
      }
    </>
  );
}

export default Modules;

