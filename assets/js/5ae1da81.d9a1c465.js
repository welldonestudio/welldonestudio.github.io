"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[130],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3573:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],s={},i=void 0,u={unversionedId:"execute-the-contract/NEAR",id:"execute-the-contract/NEAR",title:"NEAR",description:"Params",source:"@site/docs/execute-the-contract/NEAR.md",sourceDirName:"execute-the-contract",slug:"/execute-the-contract/NEAR",permalink:"/docs/execute-the-contract/NEAR",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/execute-the-contract/NEAR.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ethereum, Celo, Klaytn",permalink:"/docs/execute-the-contract/Ethereum, Celo, Klaytn"}},l={},p=[{value:"Params",id:"params",level:2},{value:"Example",id:"example",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"params"},"Params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type serializedTransaction = string;\n")),(0,o.kt)("p",null,"solana\uc5d0\uc11c \ud2b8\ub79c\uc81d\uc158\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574\uc120 ",(0,o.kt)("inlineCode",{parentName:"p"},"serializedTransaction"),"\uc744 params\ub85c \ub118\uaca8\uc57c \ud569\ub2c8\ub2e4. \ud574\ub2f9 \uac12\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"near-api-js")," \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud1b5\ud574 \uc5bb\uc744 \uc218 \uc788\uc73c\uba70, \uc790\uc138\ud55c \uc0ac\uc6a9 \ubc29\uc2dd\uc740 \ub2e4\uc74c\uc758 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/integrator/create-transactions"},"\ub9c1\ud06c"),"\uc640 \uc544\ub798 \uc608\uc2dc\ub97c \ud1b5\ud574 \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"NEAR Testnet\uc5d0 \ubbf8\ub9ac \ubc30\ud3ec\ud55c \uce74\uc6b4\ud130 \ucee8\ud2b8\ub799\ud2b8\uc640 \ud1b5\uc2e0\ud558\ub294 \uc608\uc81c\ub97c \uac19\uc774 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub294 \ub2e4\uc74c\uc758 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DSRV-DevGuild/near-counter-example"},"\uc800\uc7a5\uc18c"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8 \ub0b4\ubd80\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 \uac00\uc2a4 \ube44\uc6a9\uc744 \uc9c0\ubd88\ud574\uc57c \ud558\ubbc0\ub85c \ub2e4\uc74c \ub9c1\ud06c\uc5d0\uc11c ",(0,o.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/near.dsrv"},"faucet"),"\uc744 \uc694\uccad\ud574\uc8fc\uc138\uc694."),(0,o.kt)("p",null,"\ub2e4\uc74c\uc758 \uc608\uc81c\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," \uba54\uc18c\ub4dc\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub0a0\ub9ac\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4.\n",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," \uba54\uc18c\ub4dc\ub294 \ucee8\ud2b8\ub799\ud2b8 \ub0b4\ubd80\uc758 \uce74\uc6b4\ud130 \uac12\uc5d0 \uc778\uc790\ub85c \uc804\ub2ec\ud55c count \uac12 \ub9cc\ud07c \ub354\ud574\uc8fc\ub294 \uba54\uc18c\ub4dc\ub85c, ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Actions#functioncallaction"},"FunctionCall")," action type\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'near';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n  const getSerializedTransaction = async () => {\n    try {\n      const rpc = 'https://rpc.testnet.near.org';\n      const provider = new providers.JsonRpcProvider(rpc);\n      const signerId = accounts.address;\n      const publicKey = accounts.pubKey;\n\n      const accessKey = await provider.query(`access_key/${signerId}/${publicKey}`, '');\n\n      const actions = [transactions.functionCall(\n        \"increment\", // methodName\n        {\"count\" : 5}, // args\n        new BN('30000000000000'), // 30 TGas\n        new BN(0),\n      )];\n      const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);\n\n      // make transaction\n      const transaction = transactions.createTransaction(\n        signerId, // signerId\n        utils.PublicKey.fromString(publicKey), //pubKey\n        'mycontract.myaccount8.testnet', // contract Id\n        accessKey.nonce + 1, // nonce\n        actions, // actions\n        recentBlockHash, // recentBlockHash\n      );\n      console.log(transaction);\n      const bytes = transaction.encode();\n\n      return Buffer.from(bytes).toString('base64');\n    } catch (error) {\n      /* error */\n      console.log(error);\n    }\n  };\n\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n\n      setAccounts(accounts[CHAIN_NAME]);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const serializedTransaction = await getSerializedTransaction();\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:sendTransaction',\n        params: [`${serializedTransaction}`],\n      });\n      const txHash = response;\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts.address}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);