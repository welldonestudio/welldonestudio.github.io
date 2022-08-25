"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[417],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return v}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),v=o,f=d["".concat(l,".").concat(v)]||d[v]||u[v]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4008:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},l="About Universal Provider",p={unversionedId:"provider-api/how-we-wrap-for-multichain",id:"provider-api/how-we-wrap-for-multichain",title:"About Universal Provider",description:"How does the Universal Provider wrap for multi-chain developers?",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/provider-api/how-we-wrap-for-multichain.md",sourceDirName:"provider-api",slug:"/provider-api/how-we-wrap-for-multichain",permalink:"/ko/docs/provider-api/how-we-wrap-for-multichain",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/provider-api/how-we-wrap-for-multichain.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/ko/docs/provider-api/events"},next:{title:"Sending Transactions",permalink:"/ko/docs/Sending Transactions"}},s={},u=[{value:"How does the Universal Provider wrap for multi-chain developers?",id:"how-does-the-universal-provider-wrap-for-multi-chain-developers",level:2}],d={toc:u};function v(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-universal-provider"},"About Universal Provider"),(0,a.kt)("h2",{id:"how-does-the-universal-provider-wrap-for-multi-chain-developers"},"How does the Universal Provider wrap for multi-chain developers?"),(0,a.kt)("p",null,"Web3 \uac1c\ubc1c\uc790\ub294 \uba40\ud2f0\uccb4\uc778 \ud658\uacbd\uc744 \uc9c0\uc6d0\ud558\ub294 Universal Provider \ub355\ubd84\uc5d0 \ud55c \ubc88\uc758 \uc694\uccad\uc73c\ub85c \uc5ec\ub7ec \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ub3d9\uc2dc\uc5d0 \uc124\uce58 \ubc0f \uad00\ub9ac\ud560 \ud544\uc694 \uc5c6\uc774 Web3 \uac1c\ubc1c \ud658\uacbd\uc744 \uc27d\uac8c \ub2e4\ub8f0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc81c\uacf5\uc790\ub294 Ethereum\uc758 ethers.js, NEAR \ub124\ud2b8\uc6cc\ud06c\uc758 Near-api-js, Cosmos\uc758 cosmjs, Solana\uc758 web3.js, Celo\uc758 ContractKit, Polkadot\uc758 util-crypto \ub4f1\uc744 \ud3ec\ud568\ud558\uc5ec \uac01 \ube14\ub85d\uccb4\uc778 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc8fc\uc785\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"Universal Provider\ub294 \uac1c\ubc1c\uc790 \uce5c\ud654\uc801\uc778 Welldone Wallet\uacfc \uc9c1\uc811 \uc5f0\uacb0\ub418\uae30 \ub54c\ubb38\uc5d0 \uc9c0\uac11 \ub2e8\uc5d0\uc11c \uc5ec\ub7ec \uccb4\uc778\uc758 \uc815\ubcf4\ub97c \uce90\uce58\ud558\ub294 \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, Neon \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uace0 \uc2f6\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"dapp:sendTransaction"),"\uba54\uc18c\ub4dc\ub9cc \ud65c\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 \ub2f9\uc2e0\uc758 request\ub97c Welldone Wallet\uc73c\ub85c \ub77c\uc6b0\ud305 \uc2dc\ud0a4\ub294 \ubbf8\ub4e4\uc6e8\uc5b4\uc785\ub2c8\ub2e4. \uc774\ucc98\ub7fc Universal Provider\ub294 \uac01 \uac1c\ubcc4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc774\ud574\ud560 \ud544\uc694\uac00 \uc5c6\ub3c4\ub85d \ubaa8\ub4e0 \ub124\ud2b8\uc6cc\ud06c \uad00\ub828 \ubc29\ubc95\uc744 \ub798\ud551\ud558\uc5ec \uc77c\ubc18\ud654\ud569\ub2c8\ub2e4. \ub2f9\uc2e0\uc774 \uc694\uccad\uc744 \uc6d0\ud558\ub294 Network\ub97c \uc120\uc5b8\ud558\uace0, \uc77c\ubc18\ud654\ub41c ",(0,a.kt)("inlineCode",{parentName:"p"},"dapp method"),"\ub97c \ud65c\uc6a9\ud558\uc138\uc694. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const DAPP_SEND_TRANSACTION_METHOD = 'dapp:sendTransaction'\n\nasync function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: DAPP_SEND_TRANSACTION_METHOD,\n      });\n      setAccounts(accounts[CHAIN_NAME].address);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n")),(0,a.kt)("p",null,"\ub610\ud55c Universal Provider\ub294 \ub9ce\uc740 \ube14\ub85d\uccb4\uc778 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc798 \uc54c\ub824\uc9c4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uac8c\uc2dc\ub41c \uae30\ubcf8 API \ubc29\ubc95\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uccb4\uc778 \ubcc4\ub85c \uc798 \uc54c\ub824\uc9c4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc758 \uc694\uad6c\uc0ac\ud56d\uc744 Universal Provider\uc5d0 \uc9c1\uc811 \uc8fc\uc785\ud558\uace0 web3 \uac1c\ubc1c\uc790\ub97c \uc704\ud574 \ub798\ud551\ud588\uc73c\ubbc0\ub85c \uc790\uccb4 \ub2e4\uc911 \uccb4\uc778 dApp\uc744 \ub9cc\ub4e4 \ub54c \uc218\ub9ce\uc740 \uac1c\ubc1c \uc885\uc18d\uc131\uc744 \uad00\ub9ac\ud558\ub294 \uac83\uc5d0 \ub300\ud574 \uac71\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc2dc \uae30\uc874\uc758 'eth_accounts' \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \uc774\ub354\ub9ac\uc6c0 \uacc4\uc815 \uc8fc\uc18c\ub97c \uac00\uc838\uc624\ub3c4\ub85d \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2f9\uc2e0\uc740 \uacf5\uc2dd \ubb38\uc11c\ub85c \uc774\ub3d9\ud558\uc5ec API \uba54\uc11c\ub4dc\ub97c \uc120\ud0dd\ud558\uace0 Universal Provider\uc5d0 \ubc14\ub85c \uc801\uc6a9\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4. \uc774 \ubc29\uc2dd\ub4e4\uc740 \ub9e4\uc6b0 \uac04\ub2e8\ud558\uc5ec web3 \uac1c\ubc1c\uc744 \ubcf4\ub2e4 \uc6a9\uc774\ud558\uac8c \ub9cc\ub4ed\ub2c8\ub2e4."))}v.isMDXComponent=!0}}]);