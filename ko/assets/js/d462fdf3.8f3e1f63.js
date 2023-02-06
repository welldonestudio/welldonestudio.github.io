"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[429],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return p}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},s=Object.keys(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),u=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=u(n.components);return a.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,c=n.parentName,l=o(n,["components","mdxType","originalType","parentName"]),g=u(t),p=r,m=g["".concat(c,".").concat(p)]||g[p]||d[p]||s;return t?a.createElement(m,i(i({ref:e},l),{},{components:t})):a.createElement(m,i({ref:e},l))}));function p(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,i=new Array(s);i[0]=g;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:r,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},89833:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=t(83117),r=t(80102),s=(t(67294),t(3905)),i=["components"],o={keywords:["NEAR sendTransaction","dapp:sendTransaction","NEAR","kms","@dsrv/kms"],description:"Sending Transactions using @dsrv/kms in NEAR"},c="NEAR",u={unversionedId:"tutorials/kms/near",id:"tutorials/kms/near",title:"NEAR",description:"Sending Transactions using @dsrv/kms in NEAR",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/kms/near.md",sourceDirName:"tutorials/kms",slug:"/tutorials/kms/near",permalink:"/ko/tutorials/kms/near",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/kms/near.md",tags:[],version:"current",frontMatter:{keywords:["NEAR sendTransaction","dapp:sendTransaction","NEAR","kms","@dsrv/kms"],description:"Sending Transactions using @dsrv/kms in NEAR"},sidebar:"tutorialSidebar",previous:{title:"Ethereum",permalink:"/ko/tutorials/kms/ethereum"},next:{title:"Solana",permalink:"/ko/tutorials/kms/solana"}},l={},d=[{value:"Signed transaction \uc0dd\uc131\ud558\uae30",id:"signed-transaction-\uc0dd\uc131\ud558\uae30",level:2},{value:"1. getNearTx",id:"1-getneartx",level:3},{value:"2. getNearSignature",id:"2-getnearsignature",level:3},{value:"3. createNearSignedTx",id:"3-createnearsignedtx",level:3},{value:"Signed transaction \uc804\uc1a1\ud558\uae30",id:"signed-transaction-\uc804\uc1a1\ud558\uae30",level:2},{value:"Examples",id:"examples",level:2}],g={toc:d};function p(n){var e=n.components,t=(0,r.Z)(n,i);return(0,s.kt)("wrapper",(0,a.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"near"},"NEAR"),(0,s.kt)("div",null,(0,s.kt)("span",{className:"author-sm"},"November 11, 2022"),(0,s.kt)("div",{className:"author-div"},(0,s.kt)("div",{className:"author-avatars"},(0,s.kt)("a",{href:"https://github.com/Nahee-Park",target:"_blank"},(0,s.kt)("img",{src:"https://avatars.githubusercontent.com/u/81923229?v=4"}))),(0,s.kt)("div",null,(0,s.kt)("span",{className:"author-name"},"Nahee Park"),(0,s.kt)("br",null),(0,s.kt)("span",{className:"author-sm"},"Software Engineer, DSRV ")))),(0,s.kt)("br",null),(0,s.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"NEAR \ud30c\ud2b8\uc5d0\uc11c\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/"},"naer-api-js"),"\ub97c \ucd94\uac00\ub85c \uc774\uc6a9\ud558\uc5ec \uc2e4\uc2b5\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4. \ud574\ub2f9 \ud328\ud0a4\uc9c0\ub97c \ubbf8\ub9ac \uc124\uce58\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("h2",{id:"signed-transaction-\uc0dd\uc131\ud558\uae30"},"Signed transaction \uc0dd\uc131\ud558\uae30"),(0,s.kt)("p",null,"signed transaction\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574\uc120 \ud06c\uac8c \uc138 \uac00\uc9c0 \uc808\ucc28\ub97c \uac70\uccd0\uc57c \ud569\ub2c8\ub2e4."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"raw transaction \uc0dd\uc131"),(0,s.kt)("li",{parentName:"ol"},"raw transaction\uc5d0 \ub300\ud55c signature \uc0dd\uc131"),(0,s.kt)("li",{parentName:"ol"},"raw transaction\uacfc signature\uc744 \ud569\uccd0 signed transaction \uc0dd\uc131")),(0,s.kt)("h3",{id:"1-getneartx"},"1. getNearTx"),(0,s.kt)("p",null,"signed transaction\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 raw transaction\uacfc signature\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. kms\ub97c \ud1b5\ud574 signature\ub97c \uc5bb\uae30 \uc704\ud574\uc120 raw transaction\uc774 \ud544\uc694\ud558\uae30 \ub54c\ubb38\uc5d0 \uba3c\uc800 raw transaction\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud55c ",(0,s.kt)("inlineCode",{parentName:"p"},"getNearTx")," \ud568\uc218\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"NEAR\ub294 account index\uac00 1\ubd80\ud130 \uc2dc\uc791\ud558\uae30 \ub54c\ubb38\uc5d0, getAccount\uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \ub54c index\uac12\uc744 1\ubd80\ud130 \ub123\uc5b4\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="getNearTx.ts"',title:'"getNearTx.ts"'},"import { providers, transactions, utils } from 'near-api-js';\nimport { AccessKeyView } from 'near-api-js/lib/providers/provider';\nimport { Transaction } from 'near-api-js/lib/transaction';\nimport { Account, CHAIN } from '@dsrv/kms/lib/types';\nimport { Near } from '@dsrv/kms/lib/blockchains/near';\n\ninterface RawTransaction {\n  unSignedTx: Transaction;\n  serializedTx: string;\n}\n\nexport const getNearTx = async (mnemonic: string): Promise<RawTransaction> => {\n  /* 1. get Account */\n  const account = Near.getAccount({\n    mnemonic,\n    path: { type: CHAIN.NEAR, account: 0, index: 1 },\n  });\n\n  /* 2. make raw transaction */\n  const provider = new providers.JsonRpcProvider({\n    url: 'https://rpc.testnet.near.org',\n  });\n  const helperURL = `https://near-utils.welldonestudio.io/accounts?address=${account.address}`;\n  const accountIds = await fetch(helperURL).then((res) => res.json());\n\n  const signerId = accountIds[Object.keys(accountIds).length - 1];\n  const { publicKey } = account;\n\n  const param = {\n    request_type: 'view_access_key',\n    finality: 'final',\n    account_id: signerId,\n    public_key: publicKey,\n  };\n\n  const accessKey = await provider.query<AccessKeyView>(param);\n  const actions = [transactions.transfer(new BN(10))];\n  const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);\n\n  const transaction = transactions.createTransaction(\n    accountIds[0],\n    utils.PublicKey.fromString(publicKey),\n    accountIds[0],\n    Number(accessKey.nonce) + 1,\n    actions,\n    recentBlockHash,\n  );\n\n  const bytes = transaction.encode();\n\n  return {\n    serializedTx: `0x${Buffer.from(bytes).toString('hex')}`,\n    unSignedTx: transaction,\n  };\n};\n")),(0,s.kt)("h3",{id:"2-getnearsignature"},"2. getNearSignature"),(0,s.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c transaction\uc5d0 \ub300\ud55c signature\ub97c \uc5bb\uae30 \uc704\ud574, serializedTx\ub97c \uc778\uc790\ub85c \ubc1b\uc544\uc11c signature\ub97c \uc0dd\uc131\ud558\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"getNearSignature")," \ud568\uc218\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="getNearSignature.ts"',title:'"getNearSignature.ts"'},"import { CHAIN } from '@dsrv/kms/lib/types';\nimport { Near } from '@dsrv/kms/lib/blockchains/near';\n\nexport const getNearSignature = (serializedTx: string): string => {\n  const { signature } = Near.signTx(\n    {\n      mnemonic,\n      path: { type: CHAIN.NEAR, account: 0, index: 1 },\n    },\n    serializedTx,\n  );\n\n  return signature;\n};\n")),(0,s.kt)("h3",{id:"3-createnearsignedtx"},"3. createNearSignedTx"),(0,s.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc704\uc5d0\uc11c \uc0dd\uc131\ud55c ",(0,s.kt)("inlineCode",{parentName:"p"},"unSignedTx"),"\uc640 ",(0,s.kt)("inlineCode",{parentName:"p"},"signature"),"\ub97c \ud1b5\ud574 signed transaction\uc744 \ub9ac\ud134\ud574\uc8fc\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"createNearSignedTx")," \ud568\uc218\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="createNearSignedTx.ts"',title:'"createNearSignedTx.ts"'},"import { Signature, SignedTransaction, Transaction } from 'near-api-js/lib/transaction';\n\ninterface createNearSignedTxProps {\n  unSignedTx: Transaction;\n  signature: string;\n}\n\n/* create singedTx by combining tx and signature */\nexport const createNearSignedTx = ({ unSignedTx, signature }: createNearSignedTxProps): string => {\n  const unSignedbytes = unSignedTx.encode();\n  const unSignedSerializedTx = Buffer.from(unSignedbytes).toString('base64');\n  const transaction = Transaction.decode(Buffer.from(unSignedSerializedTx, 'base64'));\n\n  const signedTx = new SignedTransaction({\n    transaction,\n    signature: new Signature({\n      keyType: transaction.publicKey.keyType,\n      data: Buffer.from(signature.replace('0x', ''), 'hex'),\n    }),\n  });\n\n  const bytes = signedTx.encode();\n  const serializedTx = Buffer.from(bytes).toString('base64');\n\n  return serializedTx;\n};\n")),(0,s.kt)("p",null,"\ucd5c\uc885\uc801\uc73c\ub85c \uc704\uc5d0\uc11c \ub9cc\ub4e0 \ud568\uc218, ",(0,s.kt)("inlineCode",{parentName:"p"},"getNearTx"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"getNearSignature"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"createNearSignedTx")," \ub97c \uc774\uc6a9\ud574 signed transaction\uc744 \ub9ac\ud134\ud558\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"getNearSignedTx"),"\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="getNearSignedTx.ts"',title:'"getNearSignedTx.ts"'},"export const getNearSignedTx = async (mnemonic: string) => {\n  /* 1. get rawTransaction */\n  const { serializedTx, unSignedTx } = await getNearTx(mnemonic);\n  /* 2. get signature */\n  const nearSignature = getNearSignature(serializedTx);\n  /* 3. create singedTx by combining rawTransaction and signature */\n  const nearSignedTx = createNearSignedTx({\n    unSignedTx,\n    signature: nearSignature,\n  });\n\n  return nearSignedTx;\n};\n")),(0,s.kt)("h2",{id:"signed-transaction-\uc804\uc1a1\ud558\uae30"},"Signed transaction \uc804\uc1a1\ud558\uae30"),(0,s.kt)("p",null,"Signed transaction\uc744 \uc0dd\uc131\ud588\ub2e4\uba74, \uadf8\uac83\uc744 \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="sendNearTransaction.ts"',title:'"sendNearTransaction.ts"'},"import { providers } from 'near-api-js';\n\nexport const sendNearTransaction = async (serializedTx: string) => {\n  const rpcUrl = 'https://rpc.testnet.near.org';\n\n  const provider = new providers.JsonRpcProvider({ url: rpcUrl });\n\n  const txResult = await provider.sendJsonRpc('broadcast_tx_commit', [serializedTx]);\n  return txResult;\n};\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},"const mnemonic = 'sample mnemonic';\nconst main = async () => {\n  const nearSignedTx = await getNearSignedTx(mnemonic);\n  const nearTxResult = await sendNearTransaction(nearSignedTx);\n  console.log('Near Tx Result : ', nearTxResult);\n};\nmain();\n")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"\uc544\ub798\uc758 \uc608\uc81c\ub97c \ud1b5\ud574 \uc2e4\uc81c\ub85c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574\uc120 \ud14c\uc2a4\ud2b8\ub137 \ud1a0\ud070\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc9c0\uac11 \ub0b4\uc758 FAUCET \ud0ed\uc5d0\uc11c faucet\uc744 \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"\ub2c8\ubaa8\ub2c9\uc774 \uc720\ucd9c\ub420 \uacbd\uc6b0, \uc554\ud638\ud654\ud3d0 \uc790\uc0b0\uc744 \ubaa8\ub450 \uc783\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc758 \uc608\uc81c\ub97c \uc2e4\ud589\uc2dc\ud0ac \ub54c\uc5d0\ub294 \ud14c\uc2a4\ud2b8\uc6a9 \ud639\uc740 \uac1c\ubc1c\uc6a9 \ub2c8\ubaa8\ub2c9\uc744 \uc0ac\uc6a9\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const [mnemonic, setMnemonic] = React.useState('');\n  const [account, setAccount] = React.useState(null);\n  const [signature, setSignature] = React.useState(null);\n  const [signedTx, setSignedTx] = React.useState(null);\n  const [txResult, setTxResult] = React.useState(null);\n\n  const getNearTx = async () => {\n    try {\n      /* 1. get Account */\n      const account = Near.getAccount({\n        mnemonic,\n        path: { type: CHAIN.NEAR, account: 0, index: 1 },\n      });\n      setAccount(account.address);\n\n      /* 2. make raw transaction */\n      const provider = new providers.JsonRpcProvider({\n        url: 'https://rpc.testnet.near.org',\n      });\n      const helperURL = `https://near-utils.welldonestudio.io/accounts?address=${account.address}`;\n      const accountIds = await fetch(helperURL).then((res) => res.json());\n\n      // only for testnet\n      const testnetAccountIds = accountIds.filter((el) => {\n        const splitAccount = el.split('.');\n        return splitAccount[1] === 'testnet';\n      });\n\n      const signerId = testnetAccountIds[Object.keys(testnetAccountIds).length - 1];\n      const { publicKey } = account;\n\n      const param = {\n        request_type: 'view_access_key',\n        finality: 'final',\n        account_id: signerId,\n        public_key: publicKey,\n      };\n\n      const accessKey = await provider.query(param);\n      const actions = [transactions.transfer(new BN(10))];\n      const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);\n\n      const transaction = transactions.createTransaction(\n        testnetAccountIds[0],\n        utils.PublicKey.fromString(publicKey),\n        testnetAccountIds[0],\n        Number(accessKey.nonce) + 1,\n        actions,\n        recentBlockHash,\n      );\n\n      const bytes = transaction.encode();\n\n      return {\n        serializedTx: `0x${Buffer.from(bytes).toString('hex')}`,\n        unSignedTx: transaction,\n      };\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n  const getNearSignature = (serializedTx) => {\n    try {\n      const { signature } = Near.signTx(\n        {\n          mnemonic,\n          path: { type: CHAIN.NEAR, account: 0, index: 1 },\n        },\n        serializedTx,\n      );\n      setSignature(signature);\n      return signature;\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n  const createNearSignedTx = ({ unSignedTx, signature }) => {\n    try {\n      const unSignedbytes = unSignedTx.encode();\n      const unSignedSerializedTx = Buffer.from(unSignedbytes).toString('base64');\n      // export Transaction as NearTransaction\n      const transaction = NearTransaction.decode(Buffer.from(unSignedSerializedTx, 'base64'));\n\n      const signedTx = new SignedTransaction({\n        transaction,\n        signature: new Signature({\n          keyType: transaction.publicKey.keyType,\n          data: Buffer.from(signature.replace('0x', ''), 'hex'),\n        }),\n      });\n\n      const bytes = signedTx.encode();\n      const serializedTx = Buffer.from(bytes).toString('base64');\n\n      return serializedTx;\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n  const getNearSignedTx = async () => {\n    try {\n      /* 1. get rawTransaction */\n      const { serializedTx, unSignedTx } = await getNearTx();\n      /* 2. get signature */\n      const nearSignature = getNearSignature(serializedTx);\n      /* 3. create singedTx by combining rawTransaction and signature */\n      const nearSignedTx = createNearSignedTx({\n        unSignedTx,\n        signature: nearSignature,\n      });\n      setSignedTx(nearSignedTx);\n      return nearSignedTx;\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n  const sendNearTransaction = async (nearSignedTx) => {\n    try {\n      const rpcUrl = 'https://rpc.testnet.near.org';\n\n      const provider = new providers.JsonRpcProvider({ url: rpcUrl });\n\n      const txResult = await provider.sendJsonRpc('broadcast_tx_commit', [nearSignedTx]);\n\n      return txResult;\n    } catch (e) {\n      alert(`error : ${e.message}`);\n    }\n  };\n\n  const handleClick = async () => {\n    account && setAccount(null);\n    signature && setSignature(null);\n    signedTx && setSignedTx(null);\n    txResult && setTxResult(null);\n    const nearSignedTx = await getNearSignedTx();\n    const nearTxResult = await sendNearTransaction(nearSignedTx);\n    setTxResult(nearTxResult);\n  };\n\n  const handleChange = (e) => {\n    setMnemonic(e.target.value);\n\n    account && setAccount(null);\n    signature && setSignature(null);\n    signedTx && setSignedTx(null);\n    txResult && setTxResult(null);\n  };\n\n  return (\n    <>\n      <Input\n        value={mnemonic}\n        onChange={handleChange}\n        placeholder=\"Your test mnemonic\"\n        style={{ marginRight: '8px' }}\n      />\n      <Button onClick={handleClick} type=\"button\">\n        send transaction\n      </Button>\n      {account && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Account:</b> {account}\n        </ResultTooltip>\n      )}\n      {signature && (\n        <ResultTooltip style={{ background: '#F4F4F4', color: 'black' }}>\n          <b>Signature:</b> {signature}\n        </ResultTooltip>\n      )}\n      {signedTx && (\n        <ResultTooltip style={{ background: '#3B48DF' }}>\n          <b>Signed Transaction:</b> {signedTx}\n        </ResultTooltip>\n      )}\n      {txResult && (\n        <ResultTooltip style={{ background: '#FFD400', color: 'black' }}>\n          <b>Transaction Hash:</b> {txResult.transaction.hash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}p.isMDXComponent=!0}}]);