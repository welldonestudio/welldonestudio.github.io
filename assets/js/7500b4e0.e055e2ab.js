"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[5304],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},s=Object.keys(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=a.createContext({}),l=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=l(n.components);return a.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,s=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return t?a.createElement(g,r(r({ref:e},u),{},{components:t})):a.createElement(g,r({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var s=t.length,r=new Array(s);r[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:o,r[1]=i;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},94005:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=t(83117),o=t(80102),s=(t(67294),t(3905)),r=["components"],i={keywords:["Cosmos sending transaction","dapp:signAndSendTransaction","Cosmos"],description:"Sending Transactions in Cosmos"},c="Cosmos",l={unversionedId:"wallet/developer-guide/sending-transaction/cosmos",id:"wallet/developer-guide/sending-transaction/cosmos",title:"Cosmos",description:"Sending Transactions in Cosmos",source:"@site/docs/wallet/developer-guide/sending-transaction/cosmos.md",sourceDirName:"wallet/developer-guide/sending-transaction",slug:"/wallet/developer-guide/sending-transaction/cosmos",permalink:"/wallet/developer-guide/sending-transaction/cosmos",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/sending-transaction/cosmos.md",tags:[],version:"current",frontMatter:{keywords:["Cosmos sending transaction","dapp:signAndSendTransaction","Cosmos"],description:"Sending Transactions in Cosmos"},sidebar:"tutorialSidebar",previous:{title:"Celo",permalink:"/wallet/developer-guide/sending-transaction/celo"},next:{title:"Ethereum",permalink:"/wallet/developer-guide/sending-transaction/ethereum"}},u={},d=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2},{value:"3. Example",id:"3-example",level:2}],p={toc:d};function m(n){var e=n.components,t=(0,o.Z)(n,r);return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cosmos"},"Cosmos"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Cosmos developers make use of external libraries like ",(0,s.kt)("a",{parentName:"p",href:"https://cosmos.github.io/cosmjs/"},"CosmJS"),". The following is an explanation of how to initiate a transfer transaction by invoking the method through ",(0,s.kt)("inlineCode",{parentName:"p"},"dapp.request"),". We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the API provides.")),(0,s.kt)("p",null,"To send a transaction in Cosmos network, it needs to be followed the steps below."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Detecting of Universal Provider (",(0,s.kt)("inlineCode",{parentName:"li"},"window.dapp"),")"),(0,s.kt)("li",{parentName:"ol"},"Detecting the Cosmos network to which the user is linked"),(0,s.kt)("li",{parentName:"ol"},"Import the Cosmos account of the user")),(0,s.kt)("p",null,"The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('cosmos', {\n  method: 'dapp:signAndSendTransaction',\n  params: [JSON.stringify(transactionParameters)],\n")),(0,s.kt)("h2",{id:"1-returns"},"1. Returns"),(0,s.kt)("p",null,"This method returns the transaction hash value as a ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise")," object of type string because you can send multiple transactions as well as one transaction."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string[]>;\n")),(0,s.kt)("h2",{id:"2-params"},"2. Params"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"dapp:signAndSendTransaction")," method takes the transaction as HEX string type ",(0,s.kt)("inlineCode",{parentName:"p"},"HEX_STRING_TX_DATA"),". However, Cosmos networks can take the transaction parameters as JSON string type."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TransactionParameters {\n  signerData: {\n    accountNumber: string;\n    sequence: string;\n    chainId: string;\n  };\n  fee: {\n    amount: [\n      {\n        denom: string;\n        amount: string;\n      },\n    ];\n    gas: string;\n  };\n  memo: string;\n  msgs: [\n    {\n      typeUrl: '/cosmos.bank.v1beta1.MsgSend';\n      value: {\n        fromAddress: string;\n        toAddress: string;\n        amount: [{ denom: string; amount: string }];\n      };\n    },\n  ];\n  sequence: string;\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"value")," depends on the type of ",(0,s.kt)("inlineCode",{parentName:"li"},"typeUrl")," and the method of the contract you want to execute. The above parameters are examples of transaction types that send coins to other accounts.")),(0,s.kt)("h2",{id:"3-example"},"3. Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const sendTransaction = async () => {\n  // get accounts first\n  const accounts = await dapp.request('cosmos', { method: 'dapp:accounts' });\n  const sequence = '10';\n  const chainId = 'vega-testnet';\n  const transactionParameters = {\n    signerData: {\n      accountNumber: accounts['cosmos'].address,\n      sequence,\n      chainId,\n    },\n    fee: {\n      amount: [\n        {\n          denom: 'uatom',\n          amount: '10000',\n        },\n      ],\n      gas: '180000', // 180k\n    },\n    memo: '',\n    msgs: [\n      {\n        typeUrl: '/cosmos.bank.v1beta1.MsgSend',\n        value: {\n          fromAddress: accounts['cosmos'].address,\n          toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode\n          amount: [{ denom: 'uatom', amount: '10000' }],\n        },\n      },\n    ],\n    sequence: `${sequence}`,\n  };\n  // sending a transaction\n  try {\n    const response = await dapp.request('cosmos', {\n      method: 'dapp:signAndSendTranssaction',\n      params: [JSON.stringify(transactionParameters)],\n    });\n    const txHash = response[0];\n  } catch (error) {\n    /* \n      {\n        message: 'User denied transaction signature',\n        code: 4001,\n      }\n    */\n  }\n};\n")),(0,s.kt)("p",null,"To complete the transaction, follow the steps outlined below. The testnet token is required to transmit a transaction. You can request faucet through the FAUCET tab in the wallet."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'cosmos';\n  const sequence = '10';\n  const chainId = 'vega-testnet';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n      if (Object.keys(accounts).length === 0) {\n        throw new Error('There is no accounts.');\n      }\n      const status = await dapp.request('cosmos', {\n        method: 'status',\n      });\n      if (status.node_info.network !== 'theta-testnet-001') {\n        throw new Error('Please change to Cosmos Testnet in WELLDONE Wallet');\n      }\n      setAccounts(accounts[CHAIN_NAME].address);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const transactionParameters = {\n        signerData: {\n          accountNumber: accounts,\n          sequence,\n          chainId,\n        },\n        fee: {\n          amount: [\n            {\n              denom: 'uatom',\n              amount: '10000',\n            },\n          ],\n          gas: '180000', // 180k\n        },\n        memo: '',\n        msgs: [\n          {\n            typeUrl: '/cosmos.bank.v1beta1.MsgSend',\n            value: {\n              fromAddress: accounts,\n              toAddress: 'cosmos12xt4x49p96n9aw4umjwyp3huct27nwr2g4r6p2', //allthatnode\n              amount: [{ denom: 'uatom', amount: '10000' }],\n            },\n          },\n        ],\n        sequence: `${sequence}`,\n      };\n\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:signAndSendTransaction',\n        params: [JSON.stringify(transactionParameters)],\n      });\n      const txHash = response[0];\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);