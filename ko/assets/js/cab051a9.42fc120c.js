"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[6623],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return m}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=a.createContext({}),u=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},l=function(n){var e=u(n.components);return a.createElement(i.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,c(c({ref:e},l),{},{components:t})):a.createElement(g,c({ref:e},l))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,c=new Array(o);c[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s.mdxType="string"==typeof n?n:r,c[1]=s;for(var u=2;u<o;u++)c[u]=t[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98592:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),c=["components"],s={keywords:["Injective \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1","dapp:signAndSendTransaction","Injective"],description:"Injective\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ubcf4\ub0b4\uae30"},i="Injective",u={unversionedId:"wallet/developer-guide/sending-transaction/injective",id:"wallet/developer-guide/sending-transaction/injective",title:"Injective",description:"Injective\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ubcf4\ub0b4\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/wallet/developer-guide/sending-transaction/injective.md",sourceDirName:"wallet/developer-guide/sending-transaction",slug:"/wallet/developer-guide/sending-transaction/injective",permalink:"/ko/wallet/developer-guide/sending-transaction/injective",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/sending-transaction/injective.md",tags:[],version:"current",frontMatter:{keywords:["Injective \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1","dapp:signAndSendTransaction","Injective"],description:"Injective\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ubcf4\ub0b4\uae30"},sidebar:"tutorialSidebar",previous:{title:"Ethereum",permalink:"/ko/wallet/developer-guide/sending-transaction/ethereum"},next:{title:"Klaytn",permalink:"/ko/wallet/developer-guide/sending-transaction/klaytn"}},l={},d=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2},{value:"3. Example",id:"3-example",level:2}],p={toc:d};function m(n){var e=n.components,t=(0,r.Z)(n,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"injective"},"Injective"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\uc774 \ud30c\ud2b8\uc5d0\uc11c\ub294 Injective \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp.request"),"\ub97c \ud1b5\ud574 \uc2dc\uc791\ud558\ub294 \ubc29\uc2dd\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4. \uc774 API\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uac83\ubcf4\ub2e4 \ub354 \ub192\uc740 \uc218\uc900\uc758 \ucd94\uc0c1\ud654\uac00 \ud544\uc694\ud55c \uacbd\uc6b0 \uacf5\uae09\uc790\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0, \ud3b8\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. WELLDONE Wallet\uc740 dapp \uba54\uc18c\ub4dc\uc758 \ud3b8\ub9ac\ud55c \uc0ac\uc6a9\uc744 \uc704\ud55c \ubc29\ubc95\uc744 \uac15\uad6c \uc911\uc785\ub2c8\ub2e4.")),(0,o.kt)("p",null,"Injective \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c\uc758 \uacfc\uc815\uc774 \uba3c\uc800 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Universal Provider (",(0,o.kt)("inlineCode",{parentName:"li"},"window.dapp"),") \uac10\uc9c0"),(0,o.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uac00 \uc5f0\uacb0\ub41c Injective \ub124\ud2b8\uc6cc\ud06c \uac10\uc9c0"),(0,o.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uc758 Injective \uacc4\uc815 \uac00\uc838\uc624\uae30")),(0,o.kt)("p",null,"\uc758 \uc804\uc81c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. WELLDONE Wallet\uc5d0\uc11c\ub294 \ud574\ub2f9 \uc9c0\uac11 \uc8fc\uc18c\uc5d0 \uc5f0\uacb0\ub41c \ub124\ud2b8\uc6cc\ud06c\ub97c \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud558\uc5ec \uac00\uc838\uc635\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uae30 \uc774\uc804\uc5d0 \uba54\uc778\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0, \ud14c\uc2a4\ud2b8\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0 \ubbf8\ub9ac \uace0\ub824\ud574\ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc740 \uc544\ub798\uc640 \uac19\uc740 \ud3ec\ub9f7\uc744 \ud1b5\ud574 \uc804\uc1a1\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('injective', {\n  method: 'dapp:signAndSendTransaction',\n  params: [HEX_STRING_TX_DATA],\n});\n")),(0,o.kt)("h2",{id:"1-returns"},"1. Returns"),(0,o.kt)("p",null,"\ud574\ub2f9 \uba54\uc18c\ub4dc\ub294 \ub2e8\uc77c \ud2b8\ub79c\uc7ad\uc158 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uc5ec\ub7ec \uac1c\uc758 \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1\uc774 \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0, \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc \uac12\uc744 string \ud0c0\uc785\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \ubc30\uc5f4\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string[]>;\n")),(0,o.kt)("h2",{id:"2-params"},"2. Params"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dapp:signAndSendTransaction")," \uba54\uc18c\ub4dc\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 HEX string \ud0c0\uc785\uc73c\ub85c \ubcc0\ud658\ud55c \uac12 ",(0,o.kt)("inlineCode",{parentName:"p"},"HEX_STRING_TX_DATA"),"\uc744 \uc778\uc790\ub85c \ubc1b\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc Injective \uacc4\uc5f4\uc758 \ub124\ud2b8\uc6cc\ud06c\ub294 \ud2b8\ub79c\uc7ad\uc158 \uac1d\uccb4\ub97c JSON String \ud0c0\uc785\uc73c\ub85c \ubcc0\ud658\ud55c \uac12\uc744 \uc778\uc790\ub85c \uc804\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TransactionParameters {\n  signerData: {\n    accountNumber: string;\n    sequence: string;\n    chainId: string;\n  };\n  fee: {\n    amount: [\n      {\n        denom: string;\n        amount: string;\n      },\n    ];\n    gas: string;\n  };\n  memo: string;\n  msgs: [\n    {\n      typeUrl: '/cosmos.bank.v1beta1.MsgSend';\n      value: {\n        fromAddress: string;\n        toAddress: string;\n        amount: [{ denom: string; amount: string }];\n      };\n    },\n  ];\n  sequence: string;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"typeUrl"),"\uc758 \uc885\ub958\uc640 \uc2e4\ud589\ud558\uace0\uc790 \ud558\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \uba54\uc18c\ub4dc\uc5d0 \ub530\ub77c\uc11c ",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\uc758 \uac12\uc774 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \uc704\uc758 \ud30c\ub77c\ubbf8\ud130\ub294 \ub2e4\ub978 \uacc4\uc815\uc5d0\uac8c \ucf54\uc778\uc744 \ubcf4\ub0b4\ub294 \ud2b8\ub79c\uc7ad\uc158 \ud0c0\uc785\uc758 \uc608\uc2dc\uc785\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"3-example"},"3. Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const sendTransaction = async () => {\n  // get accounts first\n  const accounts = await dapp.request('injective', { method: 'dapp:accounts' });\n  const chainId = 'injective-888';\n  const lcdClient = new ChainRestAuthApi(network.rest);\n  const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);\n  const sequence = fetchAccount.account.base_account.sequence;\n  const accountNumber = fetchAccount.account.base_account.account_number;\n  // creating a transaction\n  const const transactionParameters = {\n    signerData: {\n      accountNumber,\n      sequence,\n      chainId,\n    },\n    fee: {\n      amount: [\n        {\n          denom: 'inj',\n          amount: '90000000000000',\n        },\n      ],\n      gas: '180000', // 180k\n    },\n    memo: '',\n    msgs: [\n      {\n        typeUrl: '/cosmos.bank.v1beta1.MsgSend',\n        value: {\n          fromAddress: accounts,\n          toAddress: accounts, //allthatnode\n          amount: [{ denom: 'inj', amount: '10000' }],\n        },\n      },\n    ],\n    sequence: `${sequence}`,\n  };\n  // sending a transaction\n  try {\n    const response = await dapp.request('injective', {\n      method: 'dapp:signAndSendTranssaction',\n      params: [JSON.stringify(transactionParameters)],\n    });\n    const txHash = response[0];\n  } catch (error) {\n    /*\n      {\n        message: 'User denied transaction signature',\n        code: 4001,\n      }\n    */\n  }\n};\n")),(0,o.kt)("p",null,"\uc544\ub798\uc758 \uc608\uc81c\ub97c \ud1b5\ud574 \uc2e4\uc81c\ub85c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\ub97c \ud1b5\ud574 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574\uc120 Injective \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uacfc \ud14c\uc2a4\ud2b8\ub137 \ud1a0\ud070\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc9c0\uac11 \ub0b4\uc758 FAUCET \ud0ed\uc5d0\uc11c faucet\uc744 \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'injective';\n  const chainId = 'injective-888';\n  const [accounts, setAccounts] = React.useState(null);\n  const [sequence, setSequence] = React.useState(null);\n  const [accountNumber, setAccountNumber] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  const network = getNetworkInfo(Network.Testnet);\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n      if (Object.keys(accounts).length === 0) {\n        throw new Error('There is no accounts.');\n      }\n      const status = await dapp.request('injective', {\n        method: 'status',\n      });\n      if (status.node_info.network !== chainId) {\n        throw new Error('Please change to Cosmos Testnet in WELLDONE Wallet');\n      }\n      setAccounts(accounts[CHAIN_NAME].address);\n      const lcdClient = new ChainRestAuthApi(network.rest);\n      const fetchAccount = await lcdClient.fetchAccount(accounts[CHAIN_NAME].address);\n      setSequence(fetchAccount.account.base_account.sequence);\n      setAccountNumber(fetchAccount.account.base_account.account_number);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const transactionParameters = {\n        signerData: {\n          accountNumber,\n          sequence,\n          chainId,\n        },\n        fee: {\n          amount: [\n            {\n              denom: 'inj',\n              amount: '90000000000000',\n            },\n          ],\n          gas: '180000', // 180k\n        },\n        memo: '',\n        msgs: [\n          {\n            typeUrl: '/cosmos.bank.v1beta1.MsgSend',\n            value: {\n              fromAddress: accounts,\n              toAddress: accounts, //allthatnode\n              amount: [{ denom: 'inj', amount: '10000' }],\n            },\n          },\n        ],\n        sequence: `${sequence}`,\n      };\n\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:signAndSendTransaction',\n        params: [JSON.stringify(transactionParameters)],\n      });\n      const txHash = response[0];\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);