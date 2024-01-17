"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[1948],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98615:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),c=["components"],s={description:"How to execute transactions from NEAR with WELLDONE Wallet.",keywords:["Execute transactions","WELLDONE Wallet"]},i="NEAR",l={unversionedId:"wallet/developer-guide/execute-the-contract/near",id:"wallet/developer-guide/execute-the-contract/near",title:"NEAR",description:"How to execute transactions from NEAR with WELLDONE Wallet.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/wallet/developer-guide/execute-the-contract/near.md",sourceDirName:"wallet/developer-guide/execute-the-contract",slug:"/wallet/developer-guide/execute-the-contract/near",permalink:"/ko/wallet/developer-guide/execute-the-contract/near",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/execute-the-contract/near.md",tags:[],version:"current",frontMatter:{description:"How to execute transactions from NEAR with WELLDONE Wallet.",keywords:["Execute transactions","WELLDONE Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Ethereum, Celo, Klaytn",permalink:"/ko/wallet/developer-guide/execute-the-contract/ethereum-celo-klaytn"},next:{title:"zkWallet",permalink:"/ko/wallet/zkWallet"}},u={},p=[{value:"Params",id:"params",level:2},{value:"Example",id:"example",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"near"},"NEAR"),(0,o.kt)("h2",{id:"params"},"Params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type serializedTransaction = string;\n")),(0,o.kt)("p",null,"To execute transactions from NEAR, the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"serializedTransaction")," must be provided. These data are available through the ",(0,o.kt)("inlineCode",{parentName:"p"},"near-api-js")," library, and comprehensive usage is explained in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/integrator/create-transactions"},"link")," and the example below."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Consider the following example of connecting with a pre-deployed counter contract on the NEAR Testnet. The contract code is available on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DSRV-DevGuild/near-counter-example"},"repository"),"."),(0,o.kt)("p",null,"You are required to have at least a certain amount of NEAR to execute a transaction that modifies the state of the contract. You can request faucet through the FAUCET tab in the wallet."),(0,o.kt)("p",null,"The code that follows sends a transaction that runs the contract's ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," operation.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," method employs the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Actions#functioncallaction"},"FunctionCall")," action type to add the counter value within the contract by the count value supplied as an input parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'near';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  const getSerializedTransaction = async () => {\n    try {\n      const rpc = 'https://rpc.testnet.near.org';\n      const provider = new providers.JsonRpcProvider(rpc);\n      const signerId = accounts.address;\n      const publicKey = accounts.pubKey;\n\n      const accessKey = await provider.query(`access_key/${signerId}/${publicKey}`, '');\n\n      const actions = [\n        transactions.functionCall(\n          'increment', // methodName\n          { count: 5 }, // args\n          new BN('30000000000000'), // 30 TGas\n          new BN(0),\n        ),\n      ];\n      const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);\n\n      // make transaction\n      const transaction = transactions.createTransaction(\n        signerId, // signerId\n        utils.PublicKey.fromString(publicKey), //pubKey\n        'mycontract.myaccount8.testnet', // contract Id\n        accessKey.nonce + 1, // nonce\n        actions, // actions\n        recentBlockHash, // recentBlockHash\n      );\n      const bytes = transaction.encode();\n\n      return Buffer.from(bytes).toString('base64');\n    } catch (error) {\n      /* error */\n      console.log(error);\n    }\n  };\n\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n\n      setAccounts(accounts[CHAIN_NAME]);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const serializedTransaction = await getSerializedTransaction();\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:sendTransaction',\n        params: [`${serializedTransaction}`],\n      });\n      const txHash = response;\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts.address}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}h.isMDXComponent=!0}}]);