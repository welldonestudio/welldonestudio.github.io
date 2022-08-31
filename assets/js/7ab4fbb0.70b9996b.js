"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[896],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(h,a(a({ref:r},c),{},{components:t})):n.createElement(h,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4034:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],l={},s="About Universal Provider",p={unversionedId:"provider-api/how-we-wrap-for-multichain",id:"provider-api/how-we-wrap-for-multichain",title:"About Universal Provider",description:"How does Universal Provider wrap for multi-chain developers?",source:"@site/docs/provider-api/how-we-wrap-for-multichain.md",sourceDirName:"provider-api",slug:"/provider-api/how-we-wrap-for-multichain",permalink:"/docs/provider-api/how-we-wrap-for-multichain",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/docs/provider-api/how-we-wrap-for-multichain.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/provider-api/events"},next:{title:"Sending Transactions",permalink:"/docs/Sending Transactions"}},c={},u=[{value:"How does Universal Provider wrap for multi-chain developers?",id:"how-does-universal-provider-wrap-for-multi-chain-developers",level:2}],d={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-universal-provider"},"About Universal Provider"),(0,i.kt)("h2",{id:"how-does-universal-provider-wrap-for-multi-chain-developers"},"How does Universal Provider wrap for multi-chain developers?"),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"Universal Provider")," supports multi-chain environments, Web3 developers may simply manage their development environments by utilizing WELLDONE Wallet, without having to install and maintain numerous libraries. The provider injects libraries supported by each blockchain network, such as Ethereum's ethers.js, NEAR's near-api-js, Cosmos' cosmjs, Solana's web3.js, Celo's ContractKit, Polkadot's util-crypto, and others."),(0,i.kt)("p",null,"SInce it is directly linked to developer-friendly WELLDONE Wallet, ",(0,i.kt)("inlineCode",{parentName:"p"},"Universal Provider")," offers middleware that captures and processes multiple requests from plethora of networks sent from the frontend of the wallet. If you would like to execute a transaction to Neon network, for example, you merely need to utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp:sendTransaction")," method. The method helps your request to be routed to WELLDONE Wallet that wraps the libraries from plethora of blockchain networks. Universal Provider covers and generalizes all network-related methods in this way, eliminating the need to manage each separate library. Just designate the network that you wish to query or request with a single ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const DAPP_SEND_TRANSACTION_METHOD = 'dapp:sendTransaction'\n\nasync function handleGetAccount() {\n    try {\n      const accounts = await dapp.request(CHAIN_NAME, {\n        method: DAPP_SEND_TRANSACTION_METHOD,\n      });\n      setAccounts(accounts[CHAIN_NAME].address);\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n")),(0,i.kt)("p",null,"Universal Provider also supports the default API method that is already frequently utilized on web3 developer world. When developing your own multi-chain dApps, you do not need to worry about maintaining a slew of development dependencies since you only need to inject the ",(0,i.kt)("inlineCode",{parentName:"p"},"Universal Provider")," to support plethora of networks. For example, you may use the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_accounts")," methods to query all addresses from the Ethereum blockchain. Simply browse to the official document, choose the API method, and apply it to the Universal Provider. These solutions are straightforward, making web3 development easy."))}m.isMDXComponent=!0}}]);