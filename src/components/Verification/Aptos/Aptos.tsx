import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Box, Container, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import JSZip from 'jszip';
import FileViewer from '../CosmWasm/FileViewer';

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
  display: 'inline-block',
}));

const CodeBlock = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  fontFamily: 'monospace',
  fontSize: '0.82rem',
  whiteSpace: 'pre-wrap',
  overflowX: 'auto',
  backgroundColor: '#282c34',
  color: '#a9b7c6',
  border: '1px solid #3b4048',
  lineHeight: 1.5,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

export const Aptos = () => {
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
        'https://api.welldonestudio.io/compiler/aptos-deploy-histories?chainId=testnet&offset=0&fetchSize=50',
      );

      console.log(result.data);
      setData(result.data.reverse());
    };
    fetchData();
  }, []);

  const handleRowClick = async (param: any) => {
    setIsLoading(true);
    setSelectedData(param.row);

    try {
      const response = await axios('https://api.welldonestudio.io/compiler/aptos/verifications', {
        params: { network: 'testnet', packageId: param.row.packageId },
      });
      if (response.status == 200 && response.data.isVerified) {
        let resFile = await fetch(response.data.verifiedSrcUrl);
        console.log(resFile);
        if (!resFile.ok) {
          throw new Error('Network response was not ok');
        }

        const arrayBuffer = await resFile.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'application/zip' });

        console.log(blob);

        const zip = new JSZip();
        const unzipped = await zip.loadAsync(blob);

        const codes = await processFiles(unzipped);

        console.log(codes);
        setUnzippedFiles(codes);
      }
      setVerificationResult(response.data);
      console.log(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const processFiles = async (unzipped: any) => {
    const filePromises: any = [];

    unzipped.forEach((relativePath: any, file: any) => {
      if (!file.dir) {
        const filePromise = file.async('text').then((content: any) => {
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
    handleRowClick,
  }: {
    data: any;
    setData: React.Dispatch<React.SetStateAction<any>>;
    selectedData: any;
    setSelectedData: React.Dispatch<React.SetStateAction<any>>;
    verificationResult: any;
    setVerificationResult: React.Dispatch<React.SetStateAction<any>>;
    handleRowClick: (param: any) => Promise<void>;
  }) => {
    const columns = [
      { field: 'id', headerName: 'ID', width: '10', headerAlign: 'center', align: 'center' },
      {
        field: 'chainId',
        headerName: 'Chain ID',
        width: '100',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'account',
        headerName: 'Publisher',
        width: '300',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'packageId',
        headerName: 'Package Address',
        width: '300',
        headerAlign: 'center',
        align: 'center',
      },
    ];
    return (
      <div style={{ width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns as any}
          onRowClick={handleRowClick}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          style={{
            backgroundColor: '#282c34',
            color: '#a9b7c6',
            marginBottom: '1em',
          }}
        />
        {verificationResult && (
          <div>
            {verificationResult.isVerified ? (
              <div>
                <h2>
                  <span style={{ color: 'green' }}>✓ </span>Verification Successful
                </h2>

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
                <h2>
                  <span style={{ color: 'red' }}>✗ </span>Verification Failed
                </h2>
                <p>{verificationResult.errMsg}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box mb={3}>
          <Typography variant="h4" gutterBottom>
            About
          </Typography>
          <Typography variant="h6" gutterBottom>
            You can view the source code of a package on the Aptos Explorer. However, as indicated
            in the guide, there is no guarantee that the source code shown on the Explorer matches
            the on-chain bytecode. In other words, someone with malicious intent could upload fake
            source code and deceive you.
          </Typography>
          <img
            src={'/img/contrubution/aptos/verification/aptos-explorer-01.png'}
            alt="aptos-explorer"
          ></img>
          <Typography variant="h4" gutterBottom>
            <br />
            Let's try an actual example.
          </Typography>
          <Typography variant="h6" gutterBottom>
            1. Check {` `}
            <a
              href="https://explorer.aptoslabs.com/account/0x9b67139040a4a92f09412f64157fe2c05c55a320f293f2c5369e42cd2e18c6dd/modules/code/fake_message/set_message?network=testnet"
              target="_blank"
            >
              the package code
            </a>
            .
            <br />
            <code>set_message</code> function stores the user's input message in{' '}
            <code>MessageHolder</code>, and{` `}
            <code>get_message</code> function retrieves the stored message.
            <br />
            <img
              src={'/img/contrubution/aptos/verification/aptos-fake-code.png'}
              alt="aptos-fake-code"
              style={{ marginLeft: '1em', marginTop: '0.5em' }}
            ></img>
          </Typography>
          <Typography variant="h6" gutterBottom>
            2. Call {` `}
            <a
              href="https://explorer.aptoslabs.com/account/0x9b67139040a4a92f09412f64157fe2c05c55a320f293f2c5369e42cd2e18c6dd/modules/run/fake_message/set_message?network=testnet"
              target="_blank"
            >
              set_message
            </a>
            {` `} to store a message in <code>MessageHolder</code>.
            <br />
            <img
              src={'/img/contrubution/aptos/verification/aptos-fake-set-message.png'}
              alt="aptos-fake-set-message"
              style={{ marginLeft: '1em', marginTop: '0.5em' }}
            ></img>
          </Typography>
          <Typography variant="h6" gutterBottom>
            3. Query {` `}
            <a
              href="https://explorer.aptoslabs.com/account/0x9b67139040a4a92f09412f64157fe2c05c55a320f293f2c5369e42cd2e18c6dd/modules/view/fake_message/get_message?network=testnet"
              target="_blank"
            >
              get_message
            </a>
            {` `}and check if the message has been stored as it is.
            <br /> <code>get_message</code> will always return "fake" regardless of the argument of{' '}
            <code>set_message</code> passed to it.
            <br />
            <img
              src={'/img/contrubution/aptos/verification/aptos-fake-get-message.png'}
              alt="aptos-fake-get-message"
              style={{ marginLeft: '1em', marginTop: '0.5em' }}
            ></img>
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h5" gutterBottom>
            WELLDONE Studio team provides the following verification API to address this issue.
          </Typography>
          {/*<Typography variant="body1" gutterBottom>*/}
          {/*  <ol>*/}
          {/*    <li><strong>Isolated Build Environment</strong>: Through the Remix IDE, smart contracts are compiled and deployed in an isolated environment. During this process, information such as the build environment details, original source code, generated schema (json), and deployment results are stored.</li>*/}
          {/*    <li><strong>Public Verification Status</strong>: Developers can publicly display the verification status of their smart contracts using this system.</li>*/}
          {/*    <li><strong>Contract List and Verification Request</strong>: Users can request a list of packages deployed from Remix or request verification for a specific package through the system.</li>*/}
          {/*    <li><strong>Verification Process</strong>: Upon receiving a verification request, the system compares the code id from the Remix deployment to the current on-chain code id. If they don't match, it indicates the possibility of migration from another location, and verification is deemed impossible.</li>*/}
          {/*    <li><strong>Verification Results</strong>: If the verification is successful, the system returns information to the user, including URLs for the original source code, Onchain and Offchain Byte code</li>*/}
          {/*  </ol>*/}
          {/*  This system serves as a crucial tool to address the Move module verification challenges in Aptos, offering both developers and users a transparent source code.*/}
          {/*</Typography>*/}
        </Box>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            1. Checking Module Verification Status
          </Typography>
          <ul>
            <li>
              <Typography variant="body1" gutterBottom>
                You can use the following API to check if the package was already verified or the
                source file was already uploaded by remix project
                <Typography variant="body1" gutterBottom>
                  <a
                    href="https://api.welldonestudio.io/compiler/docs#/default/AptosVerificationController_check"
                    target="_blank"
                  >
                    <code>GET /aptos/verifications</code>
                  </a>
                </Typography>
                <CodeBlock>
                  {`curl --location 'https://api.welldonestudio.io/compiler/aptos/verifications?network=testnet&account=0x9b67139040a4a92f09412f64157fe2c05c55a320f293f2c5369e42cd2e18c6dd&moduleName=message'`}
                </CodeBlock>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Response Example:
                <CodeBlock>
                  {`{
    "network": "testnet",
    "account": "0x9b67139040a4a92f09412f64157fe2c05c55a320f293f2c5369e42cd2e18c6dd",
    "moduleName": "message",
    "isRemixSrcUploaded": true,
    "status": "NOT_VERIFIED"
}`}
                </CodeBlock>
              </Typography>
            </li>
          </ul>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            2. Verifying Module
          </Typography>
          <ul>
            <li>
              <Typography variant="body1" gutterBottom>
                You can use the following API to verify a module.
                <Typography variant="body1" gutterBottom>
                  <a
                    href="https://api.welldonestudio.io/compiler/docs#/default/AptosVerificationController_verify"
                    target="_blank"
                  >
                    <code>POST /aptos/verifications</code>
                  </a>
                </Typography>
                <CodeBlock>
                  {`curl --location 'https://api.welldonestudio.io/compiler/aptos/verifications' \\
--header 'Content-Type: application/json' \\
--data '{
    "network": "testnet",
    "account": "0x9b67139040a4a92f09412f64157fe2c05c55a320f293f2c5369e42cd2e18c6dd",
    "moduleName": "message99"
}'`}
                </CodeBlock>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Response Example:
                <CodeBlock>
                  {`{
    "network": "testnet",
    "account": "0x9b67139040a4a92f09412f64157fe2c05c55a320f293f2c5369e42cd2e18c6dd",
    "moduleName": "message",
    "status": "VERIFIED_SAME"
}`}
                </CodeBlock>
              </Typography>
            </li>
          </ul>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            Constraints
          </Typography>
          <Typography variant="body1">
            <ol>
              <li
                style={{
                  marginBottom: '10px',
                  fontSize: '16px',
                  lineHeight: '1.5',
                }}
              >
                Even with the same source code, we found a case where the bytecode differs depending
                on the versions of APTOS CLI and Aptos Framework, and we are currently inquiring
                with the Aptos team. <br />→ To cover this until this problem is solved, we are
                considering restricting it to packages published by CODE BY WELLDONE STUDIO plugin
                of{' '}
                <a href="https://remix.ethereum.org/" target="_blank">
                  <code>Remix</code>
                </a>{' '}
                and the related information will be added in API response and let you know.
                <img
                  src={'/img/contrubution/aptos/verification/aptos-remix-plugin-compile.png'}
                  alt="aptos-remix-plugin-compile"
                ></img>
              </li>{' '}
              <li
                style={{
                  marginBottom: '10px',
                  fontSize: '16px',
                  lineHeight: '1.5',
                }}
              >
                Named address without specific address is not yet supported like below{' '}
                <strong>deploy_account = "_"</strong>
                <img
                  src={'/img/contrubution/aptos/verification/aptos-named-address.png'}
                  alt="aptos-named-address"
                ></img>
              </li>
              <li
                style={{
                  marginBottom: '10px',
                  fontSize: '16px',
                  lineHeight: '1.5',
                }}
              >
                Once the package is compiled and deployed, it will automatically be stored in the
                database and will appear on this page's list.
                <img
                  src={'/img/contrubution/aptos/verification/aptos-plugin-dependencies.png'}
                  alt="aptos-plugin-dependencies"
                ></img>
              </li>
            </ol>
          </Typography>
        </Box>
        {/*<Box mb={3}>*/}
        {/*  <DataTable*/}
        {/*    data={data}*/}
        {/*    setData={setData}*/}
        {/*    selectedData={selectedData}*/}
        {/*    setSelectedData={setSelectedData}*/}
        {/*    verificationResult={verificationResult}*/}
        {/*    setVerificationResult={setVerificationResult}*/}
        {/*    handleRowClick={handleRowClick}*/}
        {/*  />*/}
        {/*</Box>*/}
      </Box>
    </Container>
  );
};
