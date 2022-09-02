"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[500],{3905:function(n,e,t){t.d(e,{Zo:function(){return d},kt:function(){return f}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=a.createContext({}),l=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=l(n.components);return a.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,d=c(n,["components","mdxType","originalType","parentName"]),p=l(t),f=r,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return t?a.createElement(m,s(s({ref:e},d),{},{components:t})):a.createElement(m,s({ref:e},d))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,s=new Array(o);s[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=n,c.mdxType="string"==typeof n?n:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2855:function(n,e,t){t.r(e),t.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),s=["components"],c={keywords:["Near sendTransaction","dapp:sendTransaction","Near"]},i=void 0,l={unversionedId:"Sending Transactions/Near",id:"Sending Transactions/Near",title:"Near",description:"The following is an explanation of how to initiate a transfer transaction in NEAR network by invoking the through dapp.request. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.",source:"@site/docs/Sending Transactions/Near.md",sourceDirName:"Sending Transactions",slug:"/Sending Transactions/Near",permalink:"/docs/Sending Transactions/Near",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/Sending Transactions/Near.md",tags:[],version:"current",frontMatter:{keywords:["Near sendTransaction","dapp:sendTransaction","Near"]},sidebar:"tutorialSidebar",previous:{title:"Klaytn",permalink:"/docs/Sending Transactions/Klaytn"},next:{title:"Deploy and Run",permalink:"/docs/Deploy-and-Run"}},d={},u=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2},{value:"3. Example",id:"3-example",level:2}],p={toc:u};function f(n){var e=n.components,t=(0,r.Z)(n,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The following is an explanation of how to initiate a transfer transaction in NEAR network by invoking the through ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp.request"),". We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the official API provides.")),(0,o.kt)("p",null,"To send a transaction from the Juno-supported dApp, it needs to be followed the steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Detection of Dapp providers (window.dapp)"),(0,o.kt)("li",{parentName:"ol"},"Detecting the NEAR network to which the user is linked"),(0,o.kt)("li",{parentName:"ol"},"Import the NEAR account of the user")),(0,o.kt)("p",null,"The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('near', {\n  method: 'dapp:sendTransaction',\n  params: [JSON.stringify(transactionParameters)],\n});\nconst txHash = response;\n")),(0,o.kt)("h2",{id:"1-returns"},"1. Returns"),(0,o.kt)("p",null,"It returns the transaction hash value as a Promise object of type string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string>;\n")),(0,o.kt)("h2",{id:"2-params"},"2. Params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type serializedTransaction = string;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"serializedTransaction")," must be passed to the parameter in order for a transaction to be sent from NEAR. The ",(0,o.kt)("inlineCode",{parentName:"li"},"near-api-js")," library can provide these values, and the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.near.org/integrator/create-transactions"},"link")," and the example below can explain their detailed usage.")),(0,o.kt)("h2",{id:"3-example"},"3. Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { providers, transactions, utils } from 'near-api-js';\nconst getSerializedTransaction = async ( accounts ) => {\n  const rpc = 'https://rpc.testnet.near.org';\n  const provider = new providers.JsonRpcProvider(rpc);\n  const accountLocal = currentAccount['near'].address;\n  const publicKey = currentAccount['near'].pubKey;\n  const signerId = accountLocal;\n  const accessKey = await provider.query(`access_key/${signerId}/${publicKey}`, '');\n  const actions = [transactions.transfer(new BN(10))];\n  const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);\n\n  const transaction = transactions.createTransaction(\n    accountLocal,\n    utils.PublicKey.fromString(publicKey),\n    '9bfd12934cd6fdd09199e2e267803c70bd7c6cb40832ac6f29811948dde2b723',\n    accessKey.nonce + 1,\n    actions,\n    recentBlockHash,\n  );\n\n  const bytes = transaction.encode();\n\n  return Buffer.from(bytes).toString('base64');\n};\n\nconst sendTransaction = async = () => {\n  // get accounts first\n  const accounts = await dapp.request('near', { method: 'dapp:accounts' });\n  const serializedTransaction = await getSerializedTransaction(accounts);\n  // sending a transaction\n    try{\n      const response = await dapp.request('near' ,{\n        method: 'dapp:sendTransaction',\n        params: [\n          // use serialized transaction\n          [`${serializedTransaction}`]\n        ]\n      });\n      const txHash = response;\n    } catch (error) {\n      /*\n        {\n          message: 'User denied transaction signature',\n          code: 4001,\n        }\n      */\n    }\n  }\n")),(0,o.kt)("p",null,"To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. ",(0,o.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/near.dsrv"},"The following URL")," will send you a tap of the NEAR testnet token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'near';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  const getSerializedTransaction = async () => {\n    try {\n      const rpc = 'https://rpc.testnet.near.org';\n      const provider = new providers.JsonRpcProvider(rpc);\n      const signerId = accounts.address;\n      const publicKey = accounts.pubKey;\n\n      const accessKey = await provider.query(`access_key/${signerId}/${publicKey}`, '');\n\n      const actions = [transactions.transfer(new BN(10))];\n      const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);\n\n      // make transaction\n      const transaction = transactions.createTransaction(\n        signerId, // signerId\n        utils.PublicKey.fromString(publicKey), //pubKey\n        '9bfd12934cd6fdd09199e2e267803c70bd7c6cb40832ac6f29811948dde2b723', // receiver\n        accessKey.nonce + 1, // nonce\n        actions, // actions\n        recentBlockHash, // recentBlockHash\n      );\n      const bytes = transaction.encode();\n\n      return Buffer.from(bytes).toString('base64');\n    } catch (error) {\n      /* error */\n      console.log(error);\n    }\n  };\n\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n\n      setAccounts(accounts[CHAIN_NAME]);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const serializedTransaction = await getSerializedTransaction();\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:sendTransaction',\n        params: [`${serializedTransaction}`],\n      });\n      const txHash = response;\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts.address}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}f.isMDXComponent=!0}}]);