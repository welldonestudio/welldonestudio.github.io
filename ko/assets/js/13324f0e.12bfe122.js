"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[417],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return v}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),v=o,f=d["".concat(c,".").concat(v)]||d[v]||u[v]||i;return n?t.createElement(f,a(a({ref:r},p),{},{components:n})):t.createElement(f,a({ref:r},p))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4008:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var t=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={keywords:["Universal Provider","How does Universal Provider wrap for multi-chain developers?"]},c="About Universal Provider",s={unversionedId:"provider-api/how-we-wrap-for-multichain",id:"provider-api/how-we-wrap-for-multichain",title:"About Universal Provider",description:"How does the Universal Provider wrap for multi-chain developers?",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/provider-api/how-we-wrap-for-multichain.md",sourceDirName:"provider-api",slug:"/provider-api/how-we-wrap-for-multichain",permalink:"/ko/docs/provider-api/how-we-wrap-for-multichain",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/provider-api/how-we-wrap-for-multichain.md",tags:[],version:"current",frontMatter:{keywords:["Universal Provider","How does Universal Provider wrap for multi-chain developers?"]},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/ko/docs/provider-api/events"},next:{title:"Sending Transactions",permalink:"/ko/docs/Sending Transactions"}},p={},u=[{value:"How does the Universal Provider wrap for multi-chain developers?",id:"how-does-the-universal-provider-wrap-for-multi-chain-developers",level:2}],d={toc:u};function v(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-universal-provider"},"About Universal Provider"),(0,i.kt)("h2",{id:"how-does-the-universal-provider-wrap-for-multi-chain-developers"},"How does the Universal Provider wrap for multi-chain developers?"),(0,i.kt)("p",null,"Web3 \uac1c\ubc1c\uc790\ub294 \uba40\ud2f0\uccb4\uc778 \ud658\uacbd\uc744 \uc9c0\uc6d0\ud558\ub294 Universal Provider \ub355\ubd84\uc5d0 \ud55c \ubc88\uc758 \uc694\uccad\uc73c\ub85c \uc5ec\ub7ec \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ub3d9\uc2dc\uc5d0 \uc124\uce58 \ubc0f \uad00\ub9ac\ud560 \ud544\uc694 \uc5c6\uc774 Web3 \uac1c\ubc1c \ud658\uacbd\uc744 \uc27d\uac8c \ub2e4\ub8f0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Universal Provider\ub294 Ethereum\uc758 ethers.js, NEAR \ub124\ud2b8\uc6cc\ud06c\uc758 near-api-js, Cosmos\uc758 cosmjs, Solana\uc758 web3.js, Celo\uc758 ContractKit, Polkadot\uc758 util-crypto \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucd94\uc0c1\ud654\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"Universal Provider\ub294 \uac1c\ubc1c\uc790 \uce5c\ud654\uc801\uc778 WELLDONE Wallet\uacfc \uc9c1\uc811 \uc5f0\uacb0\ub418\uae30 \ub54c\ubb38\uc5d0 \uc9c0\uac11 \ub2e8\uc5d0\uc11c \uc5ec\ub7ec \uccb4\uc778\uc758 \uc815\ubcf4\ub97c qke\ub294 \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, Neon \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uace0 \uc2f6\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp:sendTransaction"),"\uba54\uc18c\ub4dc\ub9cc \ud65c\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 request\ub97c WELLDONE Wallet\uc73c\ub85c \ub77c\uc6b0\ud305\ud558\ub294 \ubbf8\ub4e4\uc6e8\uc5b4\uc785\ub2c8\ub2e4. Universal Provider\ub294 \uac1c\ubcc4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc774\ud574\ud560 \ud544\uc694\uac00 \uc5c6\ub3c4\ub85d \ubaa8\ub4e0 API \uba54\uc18c\ub4dc\ub97c \ucd94\uc0c1\ud654\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const DAPP_SEND_TRANSACTION_METHOD = 'dapp:sendTransaction';\n\nasync function handleGetAccount() {\n  try {\n    const accounts = await dapp.request(CHAIN_NAME, {\n      method: DAPP_SEND_TRANSACTION_METHOD,\n    });\n    setAccounts(accounts[CHAIN_NAME].address);\n  } catch (error) {\n    alert(error.message);\n  }\n}\n")),(0,i.kt)("p",null,"\ub610\ud55c Universal Provider\ub294 \uc5ec\ub7ec \ube14\ub85d\uccb4\uc778\uc758 \uae30\ubcf8 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc9c0\uc6d0\ud558\ub294 API \uba54\uc18c\ub4dc\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uccb4\uc778 \ubcc4\ub85c \uc798 \uc54c\ub824\uc9c4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc758 \uc694\uad6c\uc0ac\ud56d\uc744 Universal Provider\uc5d0 \uc9c1\uc811 \uc8fc\uc785\ud558\uace0 \ucd94\uc0c1\ud654\ud588\uae30 \ub54c\ubb38\uc5d0, \uba40\ud2f0\uccb4\uc778 dApp\uc744 \ub9cc\ub4e4 \ub54c \uc218\ub9ce\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uad00\ub9ac\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uae30\uc874\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_accounts")," \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \uc774\ub354\ub9ac\uc6c0 \uacc4\uc815 \uc8fc\uc18c\ub97c \uac00\uc838\uc624\ub3c4\ub85d \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacf5\uc2dd \ubb38\uc11c\uc758 API \uba54\uc18c\ub4dc\ub97c Universal Provider\uc5d0\uc11c \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}v.isMDXComponent=!0}}]);