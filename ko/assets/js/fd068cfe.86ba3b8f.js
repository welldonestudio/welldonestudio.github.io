"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[5932],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=a.createContext({}),c=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(k,s(s({ref:e},p),{},{components:t})):a.createElement(k,s({ref:e},p))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l.mdxType="string"==typeof n?n:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63254:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),s=["components"],l={keywords:["\ud074\ub808\uc774\ud2bc \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1","dapp:sendTransaction","\ud074\ub808\uc774\ud2bc"],description:"Klaytn\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ubcf4\ub0b4\uae30"},i="Klaytn",c={unversionedId:"wallet/developer-guide/sending-transaction/klaytn",id:"wallet/developer-guide/sending-transaction/klaytn",title:"Klaytn",description:"Klaytn\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ubcf4\ub0b4\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/wallet/developer-guide/sending-transaction/klaytn.md",sourceDirName:"wallet/developer-guide/sending-transaction",slug:"/wallet/developer-guide/sending-transaction/klaytn",permalink:"/ko/wallet/developer-guide/sending-transaction/klaytn",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/sending-transaction/klaytn.md",tags:[],version:"current",frontMatter:{keywords:["\ud074\ub808\uc774\ud2bc \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1","dapp:sendTransaction","\ud074\ub808\uc774\ud2bc"],description:"Klaytn\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ubcf4\ub0b4\uae30"},sidebar:"tutorialSidebar",previous:{title:"Ethereum",permalink:"/ko/wallet/developer-guide/sending-transaction/ethereum"},next:{title:"NEAR",permalink:"/ko/wallet/developer-guide/sending-transaction/near"}},p={},u=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2},{value:"3. Example",id:"3-example",level:2}],d={toc:u};function m(n){var e=n.components,t=(0,r.Z)(n,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"klaytn"},"Klaytn"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Klaytn\uc5d0 \uc788\uc5b4\uc11c \ub9ce\uc740 \uac1c\ubc1c\uc790\uac00 ",(0,o.kt)("a",{parentName:"p",href:"https://ko.docs.klaytn.foundation/dapp/sdk/caver-js/getting-started"},"caver.js"),"\uc640 \uac19\uc740 \ud3b8\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc544\ub798\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," \uba54\uc18c\ub4dc \ud638\ucd9c\uacfc \ud568\uaed8 \uc2dc\uc791\ub418\ub294 \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp.request"),"\ub97c \ud1b5\ud574 \uc2dc\uc791\ud558\ub294 \ubc29\uc2dd\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4. \uc774 API\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uac83\ubcf4\ub2e4 \ub354 \ub192\uc740 \uc218\uc900\uc758 \ucd94\uc0c1\ud654\uac00 \ud544\uc694\ud55c \uacbd\uc6b0 \uacf5\uae09\uc790\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0, \ud3b8\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("p",null,"Klaytn \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158(dapp, web3 \uc0ac\uc774\ud2b8 \ub4f1)\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574\uc120"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"dapp provider (",(0,o.kt)("inlineCode",{parentName:"li"},"window.dapp"),") \uac10\uc9c0"),(0,o.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uac00 \uc5f0\uacb0\ub41c Klaytn \ub124\ud2b8\uc6cc\ud06c \uac10\uc9c0"),(0,o.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uc758 Klaytn \uacc4\uc815 \uac00\uc838\uc624\uae30")),(0,o.kt)("p",null,"\uc758 \uc804\uc81c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. WELLDONE Wallet\uc5d0\uc11c\ub294 \ud574\ub2f9 \uc9c0\uac11 \uc8fc\uc18c\uc5d0 \uc5f0\uacb0\ub41c \ub124\ud2b8\uc6cc\ud06c\ub97c \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud558\uc5ec \uac00\uc838\uc635\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uae30 \uc774\uc804\uc5d0 \uba54\uc778\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0, \ud14c\uc2a4\ud2b8\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0 \ubbf8\ub9ac \uace0\ub824\ud574\ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc740 \uc544\ub798\uc640 \uac19\uc740 \ud3ec\ub9f7\uc744 \ud1b5\ud574 \uc804\uc1a1\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('klaytn', {\n  method: 'dapp:sendTransaction',\n  params: [JSON.stringify(transactionParameters)],\n});\nconst txHash = response.hash;\n")),(0,o.kt)("h2",{id:"1-returns"},"1. Returns"),(0,o.kt)("p",null,"\ud574\ub2f9 \uba54\uc18c\ub4dc\ub294 transaction hash \uac12\uc744 string \ud0c0\uc785\uc758 Promise \uac1d\uccb4\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string>;\n")),(0,o.kt)("h2",{id:"2-params"},"2. Params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TransactionParameters {\n  from: string;\n  to: string;\n  gas?: string; // overwritten by WELLDONE Wallet\n  gasPrice?: string; // overwritten by WELLDONE Wallet\n  value?: string;\n  input: string;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"from")," : \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\ub294 \uc8fc\uc18c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"to")," : (optional when creating new contract) \ud2b8\ub79c\uc7ad\uc158\uc744 \ubc1b\ub294 \uc8fc\uc18c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"gas")," : (optional) \ud2b8\ub79c\uc7ad\uc158 \uc2e4\ud589\uc744 \uc704\ud574 \uc9c0\ubd88\ud560 \uac00\uc2a4\uc758 \ucd5c\ub300\ub7c9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"gasPrice")," : (optional) \uac00\uc2a4\uc758 \ub2e8\uc704 \uac00\uaca9 (peb)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"value")," : (optional) \ud2b8\ub79c\uc7ad\uc158\uacfc \ud568\uaed8 \ubcf4\ub0b4\ub294 \ud1a0\ud070 (peb)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"input")," : \ucef4\ud30c\uc77c\ub41c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc \ub610\ub294 \ud638\ucd9c\ud558\ub294 \uba54\uc18c\ub4dc\uc758 \uc2dc\uadf8\ub2c8\ucc98 \ubc0f \uc778\ucf54\ub529\ub41c \ub9e4\uac1c \ubcc0\uc218\uc758 \ud574\uc2dc \uac12"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gas"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"gasPrice")," \ud544\ub4dc\uc758 \uacbd\uc6b0 WELLDONE Wallet \ub0b4\ubd80 \uc790\uccb4 \ub85c\uc9c1\uc744 \ud1b5\ud574 overwrite \ub41c \uac12\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4."))),(0,o.kt)("h2",{id:"3-example"},"3. Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const sendTransaction = async () => {\n  // get accounts first\n  const accounts = await dapp.request('klaytn', { method: 'dapp:accounts' });\n  const transactionParameters = {\n    from: accounts['klaytn'].address,\n    to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode\n    value: '0x00',\n    input: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n  };\n  // sending a transaction\n  try {\n    const response = await dapp.request('klaytn', {\n      method: 'dapp:sendTransaction',\n      params: [JSON.stringify(transactionParameters)],\n    });\n    const txHash = response.hash;\n  } catch (error) {\n    /* \n      {\n        message: 'User denied transaction signature',\n        code: 4001,\n      }\n    */\n  }\n};\n")),(0,o.kt)("p",null,"\uc544\ub798\uc758 \uc608\uc81c\ub97c \ud1b5\ud574 \uc2e4\uc81c\ub85c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574\uc120 faucet\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://baobab.wallet.klaytn.foundation/faucet"},"\uc774 \ub9c1\ud06c"),"\ub97c \ud1b5\ud574 Klaytn \ud14c\uc2a4\ud2b8\ub137\uc758 faucet\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'klaytn';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n      if (dapp.networks.klaytn.chain !== '0x329') {\n        throw new Error('Please change to Klaytn Testnet in WELLDONE Wallet');\n      }\n      setAccounts(accounts[CHAIN_NAME].address);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const transactionParameters = {\n        from: accounts,\n        to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode\n        value: '0x00',\n        input: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n      };\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:sendTransaction',\n        params: [JSON.stringify(transactionParameters)],\n      });\n      const txHash = response.hash;\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);