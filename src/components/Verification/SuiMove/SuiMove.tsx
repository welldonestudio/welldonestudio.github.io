import React, { useState, useEffect } from "react";

import axios from "axios";
import {
    Box,
    Container,
    Typography,
    Grid,
    CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DataGrid } from '@mui/x-data-grid';
import { styled } from "@mui/system";
import JSZip from "jszip";
import FileViewer from "../CosmWasm/FileViewer";

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

export const SuiMove = () => {

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
                'https://api.welldonestudio.io/compiler/sui/packages?fetchSize=50&order=DESC&chainId=testnet'
            );

            const remixUploadedSrc = result.data.filter((arr: any) => arr.isRemixSrcUploaded == true)
            setData(remixUploadedSrc);
        };
        fetchData();
    }, []);

    const handleRowClick = async (param: any) => {
        setIsLoading(true)
        setSelectedData(param.row);

        try {
            if (param.row.isVerified === true) {
                const response = await axios('https://api.welldonestudio.io/compiler/sui/verifications', { params: { network: param.row.chainId, packageId: param.row.packageId } })
                if (response.status == 200 && response.data.isVerified) {
                    let resFile = await fetch(response.data.verifiedSrcUrl)
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
                setVerificationResult(response.data);
                console.log(response.data)
                setIsLoading(false)
            } else {
                const response = await axios.post(
                    'https://api.welldonestudio.io/compiler/sui/verifications', { network: param.row.chainId, packageId: param.row.packageId }
                );
                if (response.status == 201 && response.data.isVerified) {
                    let resFile = await fetch(response.data.verifiedSrcUrl)
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
                setVerificationResult(response.data);
                console.log(response.data)
                setIsLoading(false)
            }
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
            { field: 'account', headerName: 'Publisher', width: '300', headerAlign: 'center', align: 'center' },
            { field: 'packageId', headerName: 'Package Address', width: '300', headerAlign: 'center', align: 'center' },
            { field: 'isVerified', headerName: 'Verified', width: '100', headerAlign: 'center', align: 'center' }
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
                    style={{
                        backgroundColor: "#282c34",
                        color: "#a9b7c6",
                        marginBottom: '1em',
                    }}
                />
                {verificationResult && (
                    <div>
                        {verificationResult.isVerified ? (
                            <div>
                                <h2><span style={{ color: 'green' }}>✓ </span>Verification Successful</h2>

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
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }

    return (<Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
            <Box mb={3}>
                <Typography variant="h6" gutterBottom>
                    About
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Sui Move developers faces challenges in verifying Move module source code deployed on Sui. Without knowing the source code could lead to fatal consequences. To overcome this issue, we utilize the Remix IDE & WELLDONE Code to provide accurate Move module source code.
                </Typography>
            </Box>
            <Box mb={3}>
                <Typography variant="h6" gutterBottom>
                    Key Features
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <ol>
                        <li><strong>Isolated Build Environment</strong>: Through the Remix IDE, Move Modules are compiled and deployed in an isolated environment. During this process, information such as original source code, and deployment results are stored.</li>
                        <li><strong>Public Verification Status</strong>: Developers can publicly display the verification status of their packages using this system.</li>
                        <li><strong>Contract List and Verification Request</strong>: Users can request a list of packages deployed from Remix or request verification for a specific package through the system.</li>
                        <li><strong>Verification Process</strong>: Upon receiving a verification request, the system compares the code id from the Remix deployment to the current on-chain code id. If they don't match, it indicates the possibility of migration from another location, and verification is deemed impossible.</li>
                        <li><strong>Verification Results</strong>: If the verification is successful, the system returns information to the user, including URLs for the original source code, Onchain and Offchain Byte code</li>
                    </ol>
                    This system serves as a crucial tool to address the Move module verification challenges in Sui, offering both developers and users a transparent source code.
                </Typography>
            </Box>
            <Box mb={3}>
                <Typography variant="h6" gutterBottom>
                    Checking verification
                </Typography>
                <Typography variant="body1" gutterBottom>
                    You can use the following API to check if the package was already verified or the source file was already uploaded by remix project
                    <Typography variant="body1" gutterBottom>
                        <a href="https://api.welldonestudio.io/compiler/docs#/default/SuiVerificationController_checkVerification" target="_blank"><code>GET sui/verifications</code></a>
                    </Typography>
                    <CodeBlock>
                        {`curl --location 'https://api.welldonestudio.io/compiler/sui/verifications?network=testnet&packageId=0xa26ed098438ab05122f4e2b6902946df1d001f61e77d69e587b6064f0a907bd3'`}
                    </CodeBlock>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Response Example:
                    <CodeBlock>
                        {`{
    "network": "testnet",
    "packageId": "0xa26ed098438ab05122f4e2b6902946df1d001f61e77d69e587b6064f0a907bd3",
    "isVerified": false,
    "isRemixSrcUploaded": true,
    "verifiedSrcUrl": null,
    "errMsg": null
}
              `}
                    </CodeBlock>
                </Typography>
                <Typography variant="body1">
                    The package published by <strong><code>CODE BY WELLDONE STUDIO</code></strong> plugin in remix-project.
                    <img src={'/img/wds-code-sui-1.png'} alt="remix sui"></img>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    If <strong>isRemixSrcUploaded</strong> is true, you can skip below api which get a srcFileId.
                    <CodeBlock>
                        {`curl --location 'https://api.welldonestudio.io/compiler/sui/verifications/sources' \\ 
     --form 'network="testnet"' \\
     --form 'packageId="0x8d1b84eaf4b007ef723b6f4a0181f0be1d060aa85a6f818fc58613b50c4ed112"' \\
     --form 'srcZipFile=@"/Users/lt-051/IdeaProjects/move_example/examples/move/locked_stake/locked_stake.zip"'`}
                    </CodeBlock>
                    <CodeBlock>
                        {`{
    "srcFileId":"1710735648898"
}`}
                    </CodeBlock>
                </Typography>
                <Typography variant="body1">
                    If <strong>isRemixSrcUploaded</strong> is true, you can omit <strong>srcFileId</strong> parameter. The api server will ignore <strong>srcFileId</strong> parameter if the package source file was already uploaded by remix project.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <a href="https://api.welldonestudio.io/compiler/docs#/default/SuiVerificationController_verifyPackage" target="_blank"><code>POST sui/verifications</code></a> ( Verify the package with the srcFileId. )
                </Typography>
                <Typography gutterBottom>
                    <CodeBlock>
                        {`curl --location 'https://api.welldonestudio.io/compiler/sui/verifications' \\
                    --header 'Content-Type: application/json' \\
                    --data '{
                        "network": "testnet",
                        "packageId": "0x8d1b84eaf4b007ef723b6f4a0181f0be1d060aa85a6f818fc58613b50c4ed112",
                        "srcFileId": "1710735648898"
                    }'`}
                    </CodeBlock>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Reponse example:
                    <CodeBlock>
                        {`{
    "network": "testnet",
    "packageId": "0x8d1b84eaf4b007ef723b6f4a0181f0be1d060aa85a6f818fc58613b50c4ed112",
    "isVerified": true,
    "modules": [
        {
            "moduleName": "epoch_time_lock",
            "isVerified": true,
            "onChainByteCode": "0xa11ceb0b060000000a010004020408030c140...",
            "offChainByteCode": "0xa11ceb0b060000000a010004020408030c140..."
        },
        {
            "moduleName": "locked_stake",
            "isVerified": true,
            "onChainByteCode": "0xa11ceb0b060000000b0100140214340348900104d8011405ec01a...",
            "offChainByteCode": "0xa11ceb0b060000000b0100140214340348900104d8011405ec01a..."
        }
    ],
    "verifiedSrcUrl": "https://wds-code-verification.s3.us-east-2.amazonaws.com/sui/testnet/0x8d1b84eaf4b007ef723b6f4a0181f0be1d060aa85a6f818fc58613b50c4ed112/1710735648898/1710735648898.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARWJFXWEJUXCAVHPD%2F20240318%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240318T043102Z&X-Amz-Expires=604800&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQC3IHJ4PCyMHZV08U6bXtIqpXS5pPwwF7x%2B%2FwN3VZV0hwIgfA8AXH15xhYii40UhnC6EQBugAHzbYoXDbazf92w85kq5gMIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMTY1ODAxMzUxODciDF3nVuD7uy1%2FaVkf9yq6A%2F2pLLyMm8uKBEQc65Scoyzm7e%2FPUh%2FBILFelY6XJBDzRVLDYYZ5V6d7EwE3eQ8HOWH%2BEdL5OzyqtVZhIoQgsROSPvpeR7yQCmyI2KxiSsAtI6xQTj%2FiyiyeKrf8bJLJ3WCSBWamSeCxgG1pB4e%2B87lLhSfyGHi9p%2Fx7o8NugAWICNsl2mkeZwAxMOGtWL0ivysqRjRAXpJ%2FKsUWzt0UwG08QWSCbnPLPHUYV0UI3ZtVb%2BA7OZqc%2BLPn%2B4p7HPJ6H085JtR4oMP%2B8DhRqXFhmAKM5p%2Bk42wiIZK1aEjDql6%2B9YcAJFydBmloSEmFKh%2FG01SEA1bejZHRR4PxDettRu1h%2BEhgTSHJbNrKS04rnBt3a6LbOUJvcTzzG00AKCC0T8OBYnnlZ6jsrwfO07AvlubCioZHv6dLjAGm6WtzqG2V69av004W4IXMQT%2BIE85NvB365hDG26YGOTGB%2FcMm1URB%2BLa%2FbwthryDxWWns0KmMbNRZiI4%2F8Y9yNTJIzssj7UVlI0qPeO5ngL%2B1HGsDp9Zx%2F%2BfCZkiXY9Kn0sl%2Fpd%2BLlbYEqzM2f8%2BXZwBuilOXvDFBaOUhCK%2BgbMQwqLberwY6pQG%2BLUZQXvjA99KsRJ69i0dkhBKYMQBO%2B7zCSVvUuPe0XIg5TSQhO3v8YCZxWbZX%2BnZ6pQ37E9vZAAf%2BVBz2U4xy%2BD0UY04NoSmUZnPvHTsqSBubOW6Vnz%2B22Q4QLbhV9TpCHeDfxLmpBdxMFklFXwKAl%2BcKMW%2BKQKUfqDHjPhkOlwTnrVVk3cMOHE2xkp4VScju%2BuVa%2FNdXHNWehzC9FF04%2B%2B1c8GA%3D&X-Amz-Signature=7a1b7960526353b4676e9cf08f467cc84da9bb261423f6ac59b6498fa21da613&X-Amz-SignedHeaders=host",
    "errMsg": null
}`}
                    </CodeBlock>
                </Typography>
                <Typography gutterBottom>
                    <a href="https://api.welldonestudio.io/compiler/docs#/default/SuiPackageController_find" target="_blank"><code>GET sui/packages</code></a>
                </Typography>
                <CodeBlock>
                    {`curl --location 'https://api.welldonestudio.io/compiler/sui/packages?order=DESC&fetchSize=1'`}
                </CodeBlock>
                <CodeBlock>
                    {`[
	{
        "id": 1578,
        "chainId": "testnet",
        "account": "0x6741c41565eb5efbe0bbdec438f1fab5927d3d989967c81cc1760b6278a63d59",
        "packageId": "0x8d1b84eaf4b007ef723b6f4a0181f0be1d060aa85a6f818fc58613b50c4ed112",
        "packageName": "Locked Stake",
        "isVerified": true,
        "isRemixSrcUploaded": true,
        "compiledAt": "2024-03-18T04:08:03.088Z",
        "deployedAt": "2024-03-18T04:08:20.589Z",
        "verifiedSrcUrl": "https://wds-code-verification.s3.us-east-2.amazonaws.com/sui/testnet/0x8d1b84eaf4b007ef723b6f4a0181f0be1d060aa85a6f818fc58613b50c4ed112/1710737438117/1710737438117.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARWJFXWEJUXCAVHPD%2F20240318%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240318T054446Z&X-Amz-Expires=604800&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQC3IHJ4PCyMHZV08U6bXtIqpXS5pPwwF7x%2B%2FwN3VZV0hwIgfA8AXH15xhYii40UhnC6EQBugAHzbYoXDbazf92w85kq5gMIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMTY1ODAxMzUxODciDF3nVuD7uy1%2FaVkf9yq6A%2F2pLLyMm8uKBEQc65Scoyzm7e%2FPUh%2FBILFelY6XJBDzRVLDYYZ5V6d7EwE3eQ8HOWH%2BEdL5OzyqtVZhIoQgsROSPvpeR7yQCmyI2KxiSsAtI6xQTj%2FiyiyeKrf8bJLJ3WCSBWamSeCxgG1pB4e%2B87lLhSfyGHi9p%2Fx7o8NugAWICNsl2mkeZwAxMOGtWL0ivysqRjRAXpJ%2FKsUWzt0UwG08QWSCbnPLPHUYV0UI3ZtVb%2BA7OZqc%2BLPn%2B4p7HPJ6H085JtR4oMP%2B8DhRqXFhmAKM5p%2Bk42wiIZK1aEjDql6%2B9YcAJFydBmloSEmFKh%2FG01SEA1bejZHRR4PxDettRu1h%2BEhgTSHJbNrKS04rnBt3a6LbOUJvcTzzG00AKCC0T8OBYnnlZ6jsrwfO07AvlubCioZHv6dLjAGm6WtzqG2V69av004W4IXMQT%2BIE85NvB365hDG26YGOTGB%2FcMm1URB%2BLa%2FbwthryDxWWns0KmMbNRZiI4%2F8Y9yNTJIzssj7UVlI0qPeO5ngL%2B1HGsDp9Zx%2F%2BfCZkiXY9Kn0sl%2Fpd%2BLlbYEqzM2f8%2BXZwBuilOXvDFBaOUhCK%2BgbMQwqLberwY6pQG%2BLUZQXvjA99KsRJ69i0dkhBKYMQBO%2B7zCSVvUuPe0XIg5TSQhO3v8YCZxWbZX%2BnZ6pQ37E9vZAAf%2BVBz2U4xy%2BD0UY04NoSmUZnPvHTsqSBubOW6Vnz%2B22Q4QLbhV9TpCHeDfxLmpBdxMFklFXwKAl%2BcKMW%2BKQKUfqDHjPhkOlwTnrVVk3cMOHE2xkp4VScju%2BuVa%2FNdXHNWehzC9FF04%2B%2B1c8GA%3D&X-Amz-Signature=8c2bab6c3358c81f681494bad9494991f042b8f9bc565efcf91659c01b4e43b1&X-Amz-SignedHeaders=host"
    }
]
`}
                </CodeBlock>
                <Typography variant="body1" gutterBottom>
                    Explanation of Key Response Fields:
                    <ul>
                        <li><strong><code>isVerified</code></strong>: Indicates the verification status of the package.</li>
                        <li><strong><code>account</code></strong>: Publisher address</li>
                        <li><strong><code>isRemixSrcUploaded</code></strong>: Indicates source code was uploaded via Remix IDE</li>
                        <li><strong><code>onChainByteCode</code></strong>:Compiled Byte Code published on-chain </li>
                        <li><strong><code>offChainByteCode</code></strong>:Locally compiled Byte Code</li>
                    </ul>
                </Typography>
            </Box>
            <Box mb={3}>
                <Typography variant="h6">
                    <strong>Verification constraints</strong>
                </Typography>
                <Typography variant="body1">
                    We do not support dependencies that are not internal folders. You need to specify it as a git dependency or define the dependencies in internal folder.
                    <img src='/img/wds-code-sui-1.png'></img>
                </Typography>
            </Box>
            <Box mb={3}>
                <Typography variant="h6" gutterBottom>
                    Usage Example
                </Typography>
                <Typography variant="h8">Via Remix IDE</Typography>
                <Typography variant="body1">
                    <ul>
                        <li style={{
                            marginBottom: '10px',
                            fontSize: '16px',
                            lineHeight: '1.5'
                        }}>Refer to the <a href="https://docs.welldonestudio.io/code/deploy-and-run/sui" target="_blank">Manual</a> to write and compile your move package, then proceed with the deployment. The process of move package creation and compilation can be complex, so handle it with care.</li>
                        <li style={{
                            marginBottom: '10px',
                            fontSize: '16px',
                            lineHeight: '1.5'
                        }}>Once the package is compiled and deployed, it will automatically be stored in the database and will appear on this page's list.</li>
                        <li style={{
                            marginBottom: '10px',
                            fontSize: '16px',
                            lineHeight: '1.5'
                        }}>By clicking on a specific package address in the table below, you can verify the package by comparing the off-chain byte code with the on-chain byte code. This step is crucial for confirming the integrity of the package.</li>
                        <li style={{
                            marginBottom: '10px',
                            fontSize: '16px',
                            lineHeight: '1.5'
                        }}>While we do provide the verification feature directly, a key point is that we provide information about the source code to allow anyone to verify package. Given that most of Sui block explorers don't support showing the source code of the package, sharing and verifying the source code of the package becomes especially important for developers trying to avoid malicious package. </li>
                        <li style={{
                            marginBottom: '10px',
                            fontSize: '16px',
                            lineHeight: '1.5'
                        }}>Once you verify the source code. For related API documentation, please refer <a href="https://api.welldonestudio.io/compiler/docs#/default/" target="_blank">here</a>.</li>
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
    </Container>)
}