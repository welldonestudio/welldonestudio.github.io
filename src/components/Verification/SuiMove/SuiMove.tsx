import React, { useState, useEffect } from "react";

import axios from "axios";
import {
    Box,
    Container,
    Typography,
    Grid,
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
                'https://api.welldonestudio.io/compiler/sui-deploy-histories?chainId=testnet&offset=0&fetchSize=50',
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
            const response = await axios(
                'https://api.welldonestudio.io/compiler/sui/verifications', { params: { network: 'testnet', packageId: param.row.packageId } }
            );
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
                        <li><strong>Isolated Build Environment</strong>: Through the Remix IDE, smart contracts are compiled and deployed in an isolated environment. During this process, information such as the build environment details, original source code, generated schema (json), and deployment results are stored.</li>
                        <li><strong>Public Verification Status</strong>: Developers can publicly display the verification status of their smart contracts using this system.</li>
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
                        {`"srcFileId":"1710735648898"`}
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
            "onChainByteCode": "0xa11ceb0b060000000a010004020408030c14052019073945087e4006be01140ad201050cd701400d9702020004010600000500010102000005000100000202030000030405000103060500020306080101080002080006080100010608000103010608010d45706f636854696d654c6f636b095478436f6e746578740764657374726f790565706f63680f65706f63685f74696d655f6c6f636b036e65770a74785f636f6e746578748d1b84eaf4b007ef723b6f4a0181f0be1d060aa85a6f818fc58613b50c4ed11200000000000000000000000000000000000000000000000000000000000000020308000000000000000003080100000000000000000201030300010000030b0b0111030a0023040605080700270b0012000201010000050c0b0013000c020b0111030b02260409050b070127020201000003040b0010001402000000",
            "offChainByteCode": "0xa11ceb0b060000000a010004020408030c14052019073945087e4006be01140ad201050cd701400d9702020004010600000500010102000005000100000202030000030405000103060500020306080101080002080006080100010608000103010608010d45706f636854696d654c6f636b095478436f6e746578740764657374726f790565706f63680f65706f63685f74696d655f6c6f636b036e65770a74785f636f6e74657874000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020308000000000000000003080100000000000000000201030300010000030b0b0111030a0023040605080700270b0012000201010000050c0b0013000c020b0111030b02260409050b070127020201000003040b0010001402000000"
        },
        {
            "moduleName": "locked_stake",
            "isVerified": true,
            "onChainByteCode": "0xa11ceb0b060000000b0100140214340348900104d8011405ec01aa02079604b30308c9076006a908140abd08170cd40897020deb0a0600190014010b010c011c01240127012b02230226000408000102050002000401000103010c01000104030700040904000505020006080200070a07020100000008060c0009070800001b0001000028020300000f04050000100605000021070500002908090000220a0b0000250a0900001a0a090001111605000113280900011b13140002181b09010002201d120100022a1c090100022c0512010003151e1f0100040e0e0500041619170108041b0d0e00070d22230201000712051002010007171a05020100071d2425020100091e201800091f262700150f0f111218160f0c110e110d111011140f170f0203070807010800020800060807020b0802080408090b0201080602070800080900020708000b020108060507080007080a03050708070407080007080a080407080701030106080001060b08020804080905030708070b020108060b0802080408090805010708070108050208040809010b080209000901010806010b02010900020306080701080104080508010b0802080408090b020108060208010608070108040108090106090003070b0802090009010900090102070b020109000b0201090001060b0201090002070b0201090003020b02010900070807010b030109000407080a0b0301080605070807030308090b0201080602060b080209000901060900010102070b08020900090106090002090009010307080a0809070807010b02010806010608010742616c616e636504436f696e0d45706f636854696d654c6f636b0249440b4c6f636b65645374616b6503535549095374616b65645375690e53756953797374656d5374617465095478436f6e7465787403554944065665634d61700762616c616e636504636f696e08636f6e7461696e730664656c657465126465706f7369745f7374616b65645f7375690b6465706f7369745f7375690764657374726f7905656d7074790565706f63680f65706f63685f74696d655f6c6f636b0c66726f6d5f62616c616e636502696406696e73657274046a6f696e0c6c6f636b65645f7374616b65126c6f636b65645f756e74696c5f65706f6368036e6577066f626a6563740672656d6f76651b726571756573745f6164645f7374616b655f6e6f6e5f656e74727920726571756573745f77697468647261775f7374616b655f6e6f6e5f656e7472790573706c6974057374616b650a7374616b65645f7375690c7374616b696e675f706f6f6c037375690b7375695f62616c616e63650a7375695f73797374656d0a74785f636f6e7465787406756e6c6f636b07756e7374616b650576616c7565077665635f6d6170047a65726f8d1b84eaf4b007ef723b6f4a0181f0be1d060aa85a6f818fc58613b50c4ed112000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000030308000000000000000003080100000000000000000204160805220b080208040809240b020108061a0801000100000c140a0111130c0638000c0538010c040b000b010c030c020b060b050b040b020b032e110b12000201010000150e0b0013000c030c050c040c020b030b0111090b0211110b040b05020201000017090e0138020c020b000f000b020b013803020301000005060b000f010b013804010204010000181e0a00100138050a02260407050f0b01010b00010b04010700270b010a000f010b0238060a0438070b030b0411180c050b000b051102020501000021210a0010000e0238080406050e0b01010b00010b03010701270a000f000e0238090c05010b010b050b0311190c060e0638050c040b000b0611030b04020601000005030b001000020701000005040b0010013805020801000005040b001002110a0200010002000300",
            "offChainByteCode": "0xa11ceb0b060000000b0100140214340348900104d8011405ec01aa02079604b30308c9076006a908140abd08170cd40897020deb0a0600190014010b010c011c01240127012b02230226000408000102050002000401000103010c01000104030700040904000505020006080200070a07020100000008060c0009070800001b0001000028020300000f04050000100605000021070500002908090000220a0b0000250a0900001a0a090001111605000113280900011b13140002181b09010002201d120100022a1c090100022c0512010003151e1f0100040e0e0500041619170108041b0d0e00070d22230201000712051002010007171a05020100071d2425020100091e201800091f262700150f0f111218160f0c110e110d111011140f170f0203070807010800020800060807020b0802080408090b0201080602070800080900020708000b020108060507080007080a03050708070407080007080a080407080701030106080001060b08020804080905030708070b020108060b0802080408090805010708070108050208040809010b080209000901010806010b02010900020306080701080104080508010b0802080408090b020108060208010608070108040108090106090003070b0802090009010900090102070b020109000b0201090001060b0201090002070b0201090003020b02010900070807010b030109000407080a0b0301080605070807030308090b0201080602060b080209000901060900010102070b08020900090106090002090009010307080a0809070807010b02010806010608010742616c616e636504436f696e0d45706f636854696d654c6f636b0249440b4c6f636b65645374616b6503535549095374616b65645375690e53756953797374656d5374617465095478436f6e7465787403554944065665634d61700762616c616e636504636f696e08636f6e7461696e730664656c657465126465706f7369745f7374616b65645f7375690b6465706f7369745f7375690764657374726f7905656d7074790565706f63680f65706f63685f74696d655f6c6f636b0c66726f6d5f62616c616e636502696406696e73657274046a6f696e0c6c6f636b65645f7374616b65126c6f636b65645f756e74696c5f65706f6368036e6577066f626a6563740672656d6f76651b726571756573745f6164645f7374616b655f6e6f6e5f656e74727920726571756573745f77697468647261775f7374616b655f6e6f6e5f656e7472790573706c6974057374616b650a7374616b65645f7375690c7374616b696e675f706f6f6c037375690b7375695f62616c616e63650a7375695f73797374656d0a74785f636f6e7465787406756e6c6f636b07756e7374616b650576616c7565077665635f6d6170047a65726f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000030308000000000000000003080100000000000000000204160805220b080208040809240b020108061a0801000100000c140a0111130c0638000c0538010c040b000b010c030c020b060b050b040b020b032e110b12000201010000150e0b0013000c030c050c040c020b030b0111090b0211110b040b05020201000017090e0138020c020b000f000b020b013803020301000005060b000f010b013804010204010000181e0a00100138050a02260407050f0b01010b00010b04010700270b010a000f010b0238060a0438070b030b0411180c050b000b051102020501000021210a0010000e0238080406050e0b01010b00010b03010701270a000f000e0238090c05010b010b050b0311190c060e0638050c040b000b0611030b04020601000005030b001000020701000005040b0010013805020801000005040b001002110a0200010002000300"
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
                        }}>By clicking on a specific package address in the table below, you can verify the package by comparing the off-chain byte code stored in the DB with the on-chain byte code. This step is crucial for confirming the integrity of the package.</li>
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
    </Container>)
}