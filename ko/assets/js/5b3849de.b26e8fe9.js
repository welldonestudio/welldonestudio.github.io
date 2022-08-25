"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[637],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6446:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={},c=void 0,l={unversionedId:"Sending Transactions/Ethereum",id:"Sending Transactions/Ethereum",title:"Ethereum",description:"ethereum\uc5d0 \uc788\uc5b4\uc11c \ub9ce\uc740 \uac1c\ubc1c\uc790\uac00 ethers \uc640 \uac19\uc740 \ud3b8\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc544\ub798\ub294 eth_sendTransaction \uba54\uc18c\ub4dc \ud638\ucd9c\uacfc \ud568\uaed8 \uc2dc\uc791\ub418\ub294 \ud2b8\ub79c\uc81d\uc158 \uc804\uc1a1\uc744 dapp.request\ub97c \ud1b5\ud574 \uc2dc\uc791\ud558\ub294 \ubc29\uc2dd\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4. \uc774 API\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uac83\ubcf4\ub2e4 \ub354 \ub192\uc740 \uc218\uc900\uc758 \ucd94\uc0c1\ud654\uac00 \ud544\uc694\ud55c \uacbd\uc6b0 \uacf5\uae09\uc790\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0, \ud3b8\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Sending Transactions/Ethereum.md",sourceDirName:"Sending Transactions",slug:"/Sending Transactions/Ethereum",permalink:"/ko/docs/Sending Transactions/Ethereum",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sending Transactions/Ethereum.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cosmos",permalink:"/ko/docs/Sending Transactions/Cosmos"},next:{title:"Klaytn",permalink:"/ko/docs/Sending Transactions/Klaytn"}},u={},p=[{value:"1. Returns",id:"1-returns",level:2},{value:"2. Params",id:"2-params",level:2},{value:"To semi-optional",id:"to-semi-optional",level:3},{value:"Gas Limit optional",id:"gas-limit-optional",level:3},{value:"Gas Price optional",id:"gas-price-optional",level:3},{value:"Value optional",id:"value-optional",level:3},{value:"data semi-optional",id:"data-semi-optional",level:3},{value:"3. Example",id:"3-example",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"ethereum\uc5d0 \uc788\uc5b4\uc11c \ub9ce\uc740 \uac1c\ubc1c\uc790\uac00 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/"},"ethers")," \uc640 \uac19\uc740 \ud3b8\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc544\ub798\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," \uba54\uc18c\ub4dc \ud638\ucd9c\uacfc \ud568\uaed8 \uc2dc\uc791\ub418\ub294 \ud2b8\ub79c\uc81d\uc158 \uc804\uc1a1\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"dapp.request"),"\ub97c \ud1b5\ud574 \uc2dc\uc791\ud558\ub294 \ubc29\uc2dd\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4. \uc774 API\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uac83\ubcf4\ub2e4 \ub354 \ub192\uc740 \uc218\uc900\uc758 \ucd94\uc0c1\ud654\uac00 \ud544\uc694\ud55c \uacbd\uc6b0 \uacf5\uae09\uc790\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0, \ud3b8\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."))),(0,o.kt)("p",null,"ethereum \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158(dapp, web3 \uc0ac\uc774\ud2b8 \ub4f1)\uc5d0\uc11c \ud2b8\ub79c\uc81d\uc158\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574\uc120 "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"dapp provider (window.dapp) \uac10\uc9c0"),(0,o.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294 ethereum \ub124\ud2b8\uc6cc\ud06c \uac10\uc9c0"),(0,o.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uc758 ethereum \uacc4\uc815 \uac00\uc838\uc624\uae30")),(0,o.kt)("p",null,"\uc758 \uc804\uc81c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. WELLDONE Wallet\uc5d0\uc11c\ub294 \ud574\ub2f9 \uc9c0\uac11 \uc8fc\uc18c\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud558\uc5ec \uac00\uc838\uc635\ub2c8\ub2e4. \ub530\ub77c\uc11c transaction\uc744 \ubcf4\ub0b4\uae30 \uc774\uc804\uc5d0 \uba54\uc778\ub137\uc5d0 \ud2b8\ub79c\uc81d\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0, \ud14c\uc2a4\ud2b8\ub137\uc5d0 \ud2b8\ub79c\uc81d\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0 \ubbf8\ub9ac \uace0\ub824\ud574\ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc81d\uc158\uc740 \uc544\ub798\uc640 \uac19\uc740 \ud3ec\ub9f7\uc744 \ud1b5\ud574 \uc804\uc1a1\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const response = await dapp.request('ethereum' ,{\n    method: 'dapp:sendTransaction',\n    params: [\n      JSON.stringify(transactionParameters),\n    ]\n  });\nconst txHash = response.hash;\n")),(0,o.kt)("h2",{id:"1-returns"},"1. Returns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc704\uc640 \uac19\uc740 \ud0c0\uc785\uc73c\ub85c transaction hash \uac12\uc744 \ubc18\ud658\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"2-params"},"2. Params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TransactionParameters {\n  from: string; // must match user's active address.\n  to: string; // Required except during contract publications.\n  gas?: string; // customizable by user\n  gasPrice?: string; // customizable by user\n  value?: string; // Only required to send ether to the recipient from the initiating external account.\n  data?: string; // Optional, but used for defining smart contract creation and interaction.\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Required for smart contract creation. And this field is also used for specifying contract methods and their parameters.")),(0,o.kt)("h3",{id:"to-semi-optional"},"To ","[semi-optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A hex-encoded chain address. Required for transactions with a recipient (all transactions except for contract creation)."),(0,o.kt)("li",{parentName:"ul"},"Contract creation occurs when there is no to value but there is a data value.")),(0,o.kt)("h3",{id:"gas-limit-optional"},"Gas Limit ","[optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Optional parameter. Rarely useful to Dapp developers.")),(0,o.kt)("h3",{id:"gas-price-optional"},"Gas Price ","[optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Optional parameter - best used on private blockchains.")),(0,o.kt)("h3",{id:"value-optional"},"Value ","[optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hex-encoded value of the network's native currency to send. On the Main Ethereum network, this is ether, which is denominated in wei, which is 1e-18 ether."),(0,o.kt)("li",{parentName:"ul"},"Only required to send ether to the recipient from the initiating external account.")),(0,o.kt)("h3",{id:"data-semi-optional"},"data ","[semi-optional]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Required for smart contract creation."),(0,o.kt)("li",{parentName:"ul"},"This field is also used for specifying contract methods and their parameters. ")),(0,o.kt)("h2",{id:"3-example"},"3. Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const sendTransaction = async () => {\n  // get accounts first\n  const accounts = await dapp.request('ethereum', { method: 'dapp:accounts' });\n  const transactionParameters = {\n    from: accounts['ethereum'].address,\n    to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode\n    gas: '0x76c0',\n    gasPrice: '0x9184e72a000',\n    value: '0x00',\n    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n  };\n  // sending a transaction\n  try{\n    const response = await dapp.request('ethereum' ,{\n      method: 'dapp:sendTransaction',\n      params: [\n        JSON.stringify(transactionParameters),\n      ]\n    });\n    const txHash = response.hash;\n  } catch (error) {\n    /* \n      {\n        message: 'User denied transaction signature',\n        code: 4001,\n      }\n    */\n  }\n}\n")),(0,o.kt)("p",null,"\uc544\ub798\uc758 \uc608\uc81c\ub97c \ud1b5\ud574 \uc2e4\uc81c\ub85c \ud2b8\ub79c\uc81d\uc158\uc744 \uc804\uc1a1\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc81d\uc158\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574\uc120 faucet\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.egorfine.com/"},"\uc774 \ub9c1\ud06c"),"\ub97c \ud1b5\ud574 Ethereum \ud14c\uc2a4\ud2b8\ub137\uc758 faucet\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function sendTransaction() {\n  const CHAIN_NAME = 'ethereum';\n  const [accounts, setAccounts] = React.useState(null);\n  const [txHash, setTxHash] = React.useState(null);\n\n  async function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:accounts',\n      });\n\n      setAccounts(accounts[CHAIN_NAME].address);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n  async function handleSendTransaction() {\n    try {\n      const transactionParameters = {\n        from: accounts,\n        to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode\n        gas: '0x76c0',\n        gasPrice: '0x9184e72a000',\n        value: '0x00',\n        data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',\n      };\n      const response = await dapp.request(CHAIN_NAME, {\n        method: 'dapp:sendTransaction',\n        params: [JSON.stringify(transactionParameters)],\n      });\n      const txHash = response.hash;\n\n      setTxHash(txHash);\n    } catch (error) {\n      console.log(error);\n      alert(`Error Message: ${error.message}\\nError Code: ${error.code}`);\n    }\n  }\n\n  return (\n    <>\n      {accounts ? (\n        <>\n          <Button onClick={handleSendTransaction} type=\"button\">\n            Send a Transaction\n          </Button>\n          <ResultTooltip style={{ background: '#3B48DF' }}>\n            <b>Accounts:</b> {accounts}\n          </ResultTooltip>\n        </>\n      ) : (\n        <>\n          <Button onClick={handleGetAccount} type=\"button\">\n            Get Account\n          </Button>\n          <div>You have to get account first!</div>\n        </>\n      )}\n      {txHash && (\n        <ResultTooltip style={{ background: '#F08080' }}>\n          <b>Transaction Hash:</b> {txHash}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n\n")))}m.isMDXComponent=!0}}]);