"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[8017],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85865:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],c={title:"Injective At Address",description:"How to use At Address injective feature",sidebar_position:6},s="Injective Atomic Order Example Contract",l={unversionedId:"tutorials/injective-at-address/index",id:"tutorials/injective-at-address/index",title:"Injective At Address",description:"How to use At Address injective feature",source:"@site/docs/tutorials/injective-at-address/index.md",sourceDirName:"tutorials/injective-at-address",slug:"/tutorials/injective-at-address/",permalink:"/ko/tutorials/injective-at-address/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/injective-at-address/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Injective At Address",description:"How to use At Address injective feature",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"APTOS Coin Deployment",permalink:"/ko/tutorials/aptos-move-coin/"},next:{title:"Injective Atomic Order",permalink:"/ko/tutorials/injective-atomic-order/"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to use At Address",id:"how-to-use-at-address",level:2},{value:"Contract interaction form manual",id:"contract-interaction-form-manual",level:2}],p={toc:d};function m(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"injective-atomic-order-example-contract"},"Injective Atomic Order Example Contract"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"author-sm"},"Dec 19, 2024"),(0,a.kt)("div",{className:"author-div"},(0,a.kt)("div",{className:"author-avatars"},(0,a.kt)("a",{href:"https://github.com/altpd13",target:"_blank"},(0,a.kt)("img",{src:"https://avatars.githubusercontent.com/u/69383768?v=4"}))),(0,a.kt)("div",null,(0,a.kt)("span",{className:"author-name"},"Minseok Kim"),(0,a.kt)("br",null),(0,a.kt)("span",{className:"author-sm"},"Software Engineer, DSRV ")))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"To interact with Instantiated Contracts on Injective Users need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"injectived")," which could be challenging for users who just want to use interaction feature.\nUsing At Address feature in ",(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/?#activate=wds-code-remix"},"WELLDONE Studio Code Remix Plugin")," users can easily interact with instantiated injective smart contracts."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Currently Only Contract Address can be used to interact")),(0,a.kt)("h2",{id:"how-to-use-at-address"},"How to use At Address"),(0,a.kt)("p",null,"First, You need to select Injective"),(0,a.kt)("img",{src:n(32258).Z,alt:"injective-select-injective",style:{width:"480px"}}),(0,a.kt)("p",null,"Second, Choose Wallet to use"),(0,a.kt)("img",{src:n(64525).Z,alt:"injective-select-wallet",style:{width:"480px"}}),(0,a.kt)("p",null,"Third, Choose Network where the contract is instantiated"),(0,a.kt)("img",{src:n(82427).Z,alt:"injective-select-network",style:{width:"480px"}}),(0,a.kt)("p",null,"Fourth, Put the instantiated contract address in the At address input form which can be found at the bottom.",(0,a.kt)("br",{parentName:"p"}),"\n","And click on Search"),(0,a.kt)("img",{src:n(46806).Z,alt:"injective-at-address",style:{width:"480px"}}),(0,a.kt)("p",null,"Finally, You can interact with instantiated smart contract"),(0,a.kt)("img",{src:n(13278).Z,alt:"injective-interact-contract",style:{width:"480px"}}),(0,a.kt)("h2",{id:"contract-interaction-form-manual"},"Contract interaction form manual"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Function parameters are not provided in JSON Message. You need to find the JSON Message Schema by yourself")),(0,a.kt)("div",{style:{display:"flex",gap:"18px"}},(0,a.kt)("img",{src:n(89717).Z,alt:"injective-interact-contract-exec-final",style:{width:"480px"}}),(0,a.kt)("div",{style:{marginTop:"5rem"}},(0,a.kt)("h4",null,"1. Choose between Query Message and Execute Message"),(0,a.kt)("h4",null,"2. Select function to call"),(0,a.kt)("h4",null,"3. Fund Amount to include in the transaction"),(0,a.kt)("h4",null,"4. Fund Denom to include in the transaction"),(0,a.kt)("h4",null,"5. JSON Message Field for function parameters. You can edit the JSON by yourself"),(0,a.kt)("h4",null,"6. Prettify ugly JSON"),(0,a.kt)("h4",null,"7. When transaction is successful TxHash will appear in green if not red error message will be shown"),(0,a.kt)("h4",null,"8. Send Query / Execute JSON Message "))))}m.isMDXComponent=!0},46806:function(e,t,n){t.Z=n.p+"assets/images/injective-at-address-448c9679a268d2c6cafeeb9afe0dcdee.png"},89717:function(e,t,n){t.Z=n.p+"assets/images/injective-interact-contract-exec-final-94ca2ce5b90cb1330821a835174c61a8.png"},13278:function(e,t,n){t.Z=n.p+"assets/images/injective-interact-contract-273b3d1b79dd72f830f857d7eb539312.png"},32258:function(e,t,n){t.Z=n.p+"assets/images/injective-select-injective-a02559336a419d2b3320d037c04340a9.png"},82427:function(e,t,n){t.Z=n.p+"assets/images/injective-select-network-0b477899cf2ef97517c4817cda5efe7d.png"},64525:function(e,t,n){t.Z=n.p+"assets/images/injective-select-wallet-6cee636bf1c681e67db4b709b7664363.png"}}]);