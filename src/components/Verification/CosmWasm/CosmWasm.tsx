import React, { useState, useEffect } from "react";

import useIsBrowser from '@docusaurus/useIsBrowser';
import axios, { AxiosResponse } from "axios";
import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import VerifyIcon from "@mui/icons-material/Verified";
import JSZip from "jszip";
import { DataGrid } from '@mui/x-data-grid';
import FileViewer from './FileViewer';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingMessage: {
    color: '#ffffff',
    fontSize: '2em',
    textAlign: 'center',
  },
}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
  borderBottom: `4px solid`,
  display: "inline-block",
}));

const CodeBlock = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  fontFamily: "monospace",
  fontSize: "0.82rem",
  whiteSpace: "pre-wrap",
  overflowX: "auto",
  backgroundColor: "#282c34",
  color: "#a9b7c6",
  border: "1px solid #3b4048", 
  lineHeight: 1.5,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

export const CosmWasm = () => {

  const [unzippedFiles, setUnzippedFiles] = useState<any>([]);
  const [activeTab, setActiveTab] = useState(0);

  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://prod.compiler.welldonestudio.io/deploy-histories?chainId=pion-1&offset=0&fetchSize=50',
      );

      console.log(result.data)
      setData(result.data.reverse());
    };
    fetchData();
  }, []);

  const handleRowClick = async (param: any) => {
    setIsLoading(true)
    setSelectedData(param.row);

    try {
      const response = await axios.post(
        'https://prod.compiler.welldonestudio.io/verification/neutron',
        { contractAddress: param.row.contractAddress, chainId: 'pion-1' }
      );
      if (response.data.status === '1' && response.data.result.isVerified) {
        let resFile = await fetch(response.data.srcUrl)
        console.log(resFile)
        if (!resFile.ok) {
          throw new Error('Network response was not ok');
        }

        const arrayBuffer = await resFile.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: "application/zip" });

        console.log(blob);

        const zip = new JSZip();
        const unzipped = await zip.loadAsync(blob);

        const codes = await processFiles(unzipped);

        console.log(codes)
        setUnzippedFiles(codes);
      }
      setVerificationResult(response.data.result);
      console.log(response.data.result)
      setIsLoading(false)
    } catch (err) {
      console.error(err);
      setIsLoading(false)
    }
  };

  const processFiles = async (unzipped: any) => {
    const filePromises: any = [];

    unzipped.forEach((relativePath: any, file: any) => {
      if (!file.dir) {
        const filePromise = file.async("text").then((content: any) => {
          return { name: file.name, content: content };
        });
        filePromises.push(filePromise);
      }
    });

    const codes = await Promise.all(filePromises);
    return codes;
  };

  const DataTable = ({
    data,
    setData,
    selectedData,
    setSelectedData,
    verificationResult,
    setVerificationResult,
    handleRowClick
  }: {
    data: any,
    setData: React.Dispatch<React.SetStateAction<any>>,
    selectedData: any,
    setSelectedData: React.Dispatch<React.SetStateAction<any>>,
    verificationResult: any,
    setVerificationResult: React.Dispatch<React.SetStateAction<any>>,
    handleRowClick: (param: any) => Promise<void>
  }) => {
    const columns = [
      { field: 'id', headerName: 'ID', width: '10', headerAlign: 'center', align: 'center' },
      { field: 'chainId', headerName: 'Chain ID', width: '100', headerAlign: 'center', align: 'center' },
      { field: 'account', headerName: 'Deployer', width: '300', headerAlign: 'center', align: 'center' },
      { field: 'contractAddress', headerName: 'Contract Address', width: '300', headerAlign: 'center', align: 'center' },
    ];
    return (
      <div style={{ width: '100%' }}>
        <DataGrid rows={data} columns={columns as any} onRowClick={handleRowClick}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          style={{ backgroundColor: "#282c34",
          color: "#a9b7c6",}}
        />
        {verificationResult && (
          <div>
            {verificationResult.isVerified ? (
              <div>
                <h2><span style={{ color: 'green' }}>✓ </span>Verification Successful</h2>
                <Box mb={3}>
                  <p>isImmutable: {verificationResult.isImmutable ? 'Yes' : <>No <span style={{ color: 'red' }}>(This is upgradable)</span></>}</p>
                </Box>
                <Box mb={3}>
                  <h3>Build & Optimize Script</h3>
                  <FileViewer code={'> ' + verificationResult?.envBuildScript + '\n' + '> ' + verificationResult?.envOptimizerScript} />
                </Box>

                <Box mb={3}>
                  <div>
                    <div>
                      {unzippedFiles.map((file: any, index: any) => (
                        <button
                          type="button"
                          key={index}
                          onClick={(event) => {
                              event.preventDefault();
                              setActiveTab(index);
                          }}
                        >
                          {file.name}
                        </button>
                      ))}
                    </div>

                    <div>
                      <h3>{unzippedFiles[activeTab]?.name}</h3>
                      <FileViewer code={unzippedFiles[activeTab]?.content} />
                    </div>
                  </div>
                </Box>
              </div>
            ) : (
              <div>
                  <h2><span style={{ color: 'red' }}>✗ </span>Verification Failed</h2>
                  <p>{verificationResult.errMsg}</p>
                  <Box mb={3}>
                      <p>isImmutable: {verificationResult.isImmutable ? 'Yes' : <>No <span style={{ color: 'red' }}>(This is upgradable)</span></>}</p>
                  </Box>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <VerifyIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Box component="h1">
              <HeaderTypography variant="h4">How Verification API Works</HeaderTypography>
            </Box>
          </Grid>
        </Grid>

        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" gutterBottom>
          The CosmWasm environment presents challenges in verifying the consistency of smart contract code. The same source code can produce different binary outputs when compiled in various build environments. To overcome this issue, we utilize the Remix IDE & WELLDONE Code to provide a standardized build environment.
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            Key Features
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ol>
              <li><strong>Isolated Build Environment</strong>: Through the Remix IDE, smart contracts are compiled and deployed in an isolated environment. During this process, information such as the build environment details, original source code, generated schema (json), and deployment results are stored.</li>
              <li><strong>Public Verification Status</strong>: Developers can publicly display the verification status of their smart contracts using this system.</li>
              <li><strong>Contract List and Verification Request</strong>: Users can request a list of contracts deployed from Remix or request verification for a specific contract through the system.</li>
              <li><strong>Verification Process</strong>: Upon receiving a verification request, the system compares the code id from the Remix deployment to the current on-chain code id. If they don't match, it indicates the possibility of migration from another location, and verification is deemed impossible.</li>
              <li><strong>Verification Results</strong>: If the verification is successful, the system returns information to the user, including the code id, URLs for the original source code and schema json, isImmutable status, build environment, and build script.</li>
            </ol>
            This system serves as a crucial tool to address the smart contract verification challenges in the CosmWasm environment, offering both developers and users a transparent and trustworthy smart contract environment.
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            Retrieving the Deployed Contracts
          </Typography>
          <Typography variant="body1" gutterBottom>
          You can use the following API to check if a specific contract is verifiable.
            <CodeBlock>
              curl 'https://prod.compiler.welldonestudio.io/deploy-histories/pion-1?contract=neutron1gesll6lepas7xzt22pg7r07v9vd652md82z8m2fqp5zt43rznu5sl42s74'
            </CodeBlock>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Response Example:
            <CodeBlock>
              {`{
    "chainId": "pion-1",
    "account": "neutron1tpurcpqmd8au3waymfajxd3z5n796p5cleqjrs",
    "codeId": "1114",
    "contract": "neutron1gesll6lepas7xzt22pg7r07v9vd652md82z8m2fqp5zt43rznu5sl42s74",
    "txHash": "F92BCC5C25263680F5E05B873992D2B403A0206E0FA78F4490F14ACD447626AA"
}
              `}
            </CodeBlock>
          </Typography>
          <Typography variant="body1" gutterBottom>
          You can use the following API to retrieve a complete list of verifiable contracts:
            <CodeBlock>
              curl 'https://prod.compiler.welldonestudio.io/deploy-histories?chainId=pion-1&offset=0&fetchSize=50'
            </CodeBlock>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Response Example:
            <CodeBlock>
              {`[
  {
    "id": 26,
    "chainId": "pion-1",
    "account": "neutron1vvkxv9dyen4a34yacc24wjgen05m9jkylp0n33",
    "contractAddress": "neutron1qdzdy8g9tmd04kvaq952zgjlntjjayaglnk7kz9zx599a5uw67dq0gqag0"
  },
  ...
]
              `}
            </CodeBlock>
            </Typography>
          </Box>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            Requesting Verification for a Specific Contract
          </Typography>
          <Typography variant="body1" gutterBottom>
            To request verification for a specific contract, use the following API:
            <CodeBlock>
              {`curl -X POST 'https://prod.compiler.welldonestudio.io/verification/neutron' 
    -H 'Content-Type: application/json' 
    -d '{"contractAddress": "YOUR_CONTRACT_ADDRESS", "chainId": "NETWORK_INFO"}'`}
            </CodeBlock>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Response Example:
            <CodeBlock>
              {`{
    "status": "1",
    "message": "OK",
    "result": {
        "chainId": "pion-1",
        "contractAddress": "neutron18pj2pxd0dthkpz6gfytc07qa0ru2nfflyh7ylk3y75nd8d8erersfc4d2n",
        "isVerified": true,
        "onchainCodeId": 1542,
        "historyCodeId": 1542,
        "isImmutable": false,
        "errMsg": null,
        "envOsMachine": "x86_64",
        "envOsName": "Ubuntu",
        "envOsVersion": "22.04.1",
        "envRustcVersion": "1.68.0",
        "envCargoWasmVersion": "0.4.1",
        "envBuildScript": "cargo wasm build",
        "envOptimizerScript": "docker run --rm -v \\"$(pwd)\\":/code --mount type=volume,source=\\"$(basename \\"$(pwd)\\")_cache\\",target=/code/target --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry cosmwasm/rust-optimizer:0.12.11",
        "srcUrl": "https://wds-code-build.s3.us-east80976900/1695280976900.zip",
        "schemaUrl": "https://wds-code-build.s3.us-east280976900/schema.zip"
    }
}
              `}
            </CodeBlock>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Explanation of Key Response Fields:
            <ul>
              <li><strong><code>isVerified</code></strong>: Indicates the verification status of the contract.</li>
              <li><strong><code>onchainCodeId</code></strong>: The current on-chain code ID for the contract.</li>
              <li><strong><code>historyCodeId</code></strong>: Represents the code ID from when it was previously deployed on Remix IDE. If it differs from <strong><code>onchainCodeId</code></strong>, it might have been migrated from a different build environment, and in such cases, verification is not supported.</li>
              <li><strong><code>isImmutable</code></strong>: Indicates the immutability status of the contract.</li>
              <li><strong><code>envOsMachine</code></strong> ~ <strong><code>envCargoWasmVersion</code></strong>: Detailed information about the build environment.</li>
              <li><strong><code>srcUrl</code></strong>: The URL for the original source code.</li>
              <li><strong><code>schemaUrl</code></strong>: The URL for the schema file.</li>
            </ul>
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            Usage Example
          </Typography>
          <Typography variant="body1">
            <ul>
              <li style={{
                marginBottom: '10px',
                fontSize: '16px',
                lineHeight: '1.5'
              }}>Refer to the <a href="https://docs.welldonestudio.io/code/deploy-and-run/neutron" target="_blank">Manual</a> to write and compile your contract, then proceed with the deployment. The process of contract creation and compilation can be complex, so handle it with care.</li>
              <li style={{
                marginBottom: '10px',
                fontSize: '16px',
                lineHeight: '1.5'
              }}>Once the contract is compiled and deployed, it will automatically be stored in the database and will appear on this page's list.</li>
              <li style={{
                marginBottom: '10px',
                fontSize: '16px',
                lineHeight: '1.5'
              }}>By clicking on a specific contract address in the table below, you can verify the contract by comparing the code id and checksum stored in the DB with the code id and checksum on-chain. This step is crucial for confirming the integrity of the contract.</li>
              <li style={{
                marginBottom: '10px',
                fontSize: '16px',
                lineHeight: '1.5'
              }}>While we do provide the verification feature directly, a key point is that we offer information about the Rust build environment to allow anyone to verify contracts. Given that Rust's build results are non-deterministic when compiling into wasm, the provision of this build environment information becomes especially important. This information will allow developers to definitively ascertain if the contract is functioning as expected.</li>
            </ul>
          </Typography>
        </Box>
        <Box mb={3}>
          <DataTable
            data={data}
            setData={setData}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
            verificationResult={verificationResult}
            setVerificationResult={setVerificationResult}
            handleRowClick={handleRowClick}
          />
        </Box>
      </Box>
      {
        isLoading && (
          <div className={classes.overlay}>
            <div className={classes.loadingMessage}>
              <CircularProgress color="inherit" />
              <p>Verifying...</p>
            </div>
          </div>
        )
      }
    </Container >
);
};
