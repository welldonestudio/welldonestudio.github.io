"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[175],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={keywords:["Klaytn sendTransaction","dapp:sendTransaction","Klaytn"]},l=void 0,c={unversionedId:"sending-transaction/klaytn",id:"sending-transaction/klaytn",title:"klaytn",description:"Klaytn developers make use of external libraries like caver.js. The following is an explanation of how to initiate a transfer transaction by invoking the eth_sendTransaction method through dapp.request. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the API provides.",source:"@site/docs/sending-transaction/klaytn.md",sourceDirName:"sending-transaction",slug:"/sending-transaction/klaytn",permalink:"/docs/sending-transaction/klaytn",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/sending-transaction/klaytn.md",tags:[],version:"current",frontMatter:{keywords:["Klaytn sendTransaction","dapp:sendTransaction","Klaytn"]},sidebar:"tutorialSidebar",previous:{title:"ethereum",permalink:"/docs/sending-transaction/ethereum"},next:{title:"near",permalink:"/docs/sending-transaction/near"}},p={},u=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2},{value:"3. Example",id:"3-example",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Klaytn developers make use of external libraries like ",(0,o.kt)("a",{parentName:"p",href:"https://docs.klaytn.foundation/dapp/sdk/caver-js/getting-started"},"caver.js"),". The following is an explanation of how to initiate a transfer transaction by invoking the ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," method through ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp.request"),". We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the API provides.")),(0,o.kt)("p",null,"To send a transaction from an Klaytn web application, on the dapp for example, it needs to be followed the steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Detection of Dapp providers (",(0,o.kt)("inlineCode",{parentName:"li"},"window.dapp"),")"),(0,o.kt)("li",{parentName:"ol"},"Detecting the Klaytn network to which the user is linked"),(0,o.kt)("li",{parentName:"ol"},"Import the Klaytn account of the user")),(0,o.kt)("p",null,"The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('klaytn', {\n  method: 'dapp:sendTransaction',\n  params: [JSON.stringify(transactionParameters)],\n});\nconst txHash = response;\n")),(0,o.kt)("h2",{id:"1-returns"},"1. Returns"),(0,o.kt)("p",null,"It returns the transaction hash value as a Promise object of type string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string>;\n")),(0,o.kt)("h2",{id:"2-params"},"2. Params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TransactionParameters {\n  from: string; \n  to: string; \n  gas?: string; // overwritten by WELLDONE Wallet\n  gasPrice?: string; // overwritten by WELLDONE Wallet\n  value?: string; \n  input: string; \n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"from")," : The address the transaction is sent from.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"to")," : (optional when creating new contract) The address the transaction is directed to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"gas")," : (optional) Integer of the gas provided for the transaction execution. It will return unused gas.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"gasPrice")," : (optional) Integer of the gasPrice used for each paid gas, in peb.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"value")," : (optional) Integer of the value sent with this transaction, in peb.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"input")," : The compiled code of a contract OR the hash of the invoked method signature and encoded parameters."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"gas")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"gasPrice")," fields are overwritten by the WELLDONE Wallet internal logic."))),(0,o.kt)("h2",{id:"3-example"},"3. Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const sendTransaction = async () => {\n  // get accounts first\n  const accounts = await dapp.request('klaytn', { method: 'dapp:accounts' });\n  const transactionParameters = {\n    from: accounts['klaytn'].address,\n    to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode\n    value: '0x00',\n    input: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n  };\n  // sending a transaction\n  try {\n    const response = await dapp.request('klaytn', {\n      method: 'dapp:sendTransaction',\n      params: [JSON.stringify(transactionParameters)],\n    });\n    const txHash = response.hash;\n  } catch (error) {\n    /* \n      {\n        message: 'User denied transaction signature',\n        code: 4001,\n      }\n    */\n  }\n};\n")),(0,o.kt)("p",null,"To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. ",(0,o.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/klaytn.dsrv"},"The following URL")," will send you a tap of the Klaytn testnet token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'klaytn';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n      if (dapp.networks.klaytn.chain !== '0x329') {\n        throw new Error('Please change to Klaytn Testnet in WELLDONE Wallet');\n      }\n      setAccounts(accounts[CHAIN_NAME].address);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const transactionParameters = {\n        from: accounts,\n        to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode\n        value: '0x00',\n        input: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n      };\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:sendTransaction',\n        params: [JSON.stringify(transactionParameters)],\n      });\n      const txHash = response.hash;\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);