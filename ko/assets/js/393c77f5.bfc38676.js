"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[4353],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77500:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],c={sidebar_position:5,description:"Deploy and Run inEVM Smart Contract",keywords:["Deploy and Run","inEVM","Smart Contract"]},l="Injective inEVM",p={unversionedId:"code/deploy-and-run/Injective inEVM",id:"code/deploy-and-run/Injective inEVM",title:"Injective inEVM",description:"Deploy and Run inEVM Smart Contract",source:"@site/docs/code/deploy-and-run/Injective inEVM.md",sourceDirName:"code/deploy-and-run",slug:"/code/deploy-and-run/Injective inEVM",permalink:"/ko/code/deploy-and-run/Injective inEVM",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/deploy-and-run/Injective inEVM.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Deploy and Run inEVM Smart Contract",keywords:["Deploy and Run","inEVM","Smart Contract"]},sidebar:"tutorialSidebar",previous:{title:"Sui",permalink:"/ko/code/deploy-and-run/sui"},next:{title:"Injective",permalink:"/ko/code/deploy-and-run/injective"}},d={},u=[{value:"Connect to WELLDONE Code",id:"connect-to-welldone-code",level:2},{value:"Change to inEVM network",id:"change-to-inevm-network",level:2},{value:"Compile &amp; Deploy &amp; Execute",id:"compile--deploy--execute",level:2},{value:"Compile the Contract",id:"compile-the-contract",level:3},{value:"Deploy the Contract",id:"deploy-the-contract",level:3},{value:"Execute the Contract",id:"execute-the-contract",level:3}],s={toc:u};function m(e){var t=e.components,c=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"injective-inevm"},"Injective inEVM"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/code/getting-started"},"here")," to get started.",(0,i.kt)("br",{parentName:"p"}),"\n","You can find more information about inEVM ",(0,i.kt)("a",{parentName:"p",href:"https://docs.inevm.com/"},"here"))),(0,i.kt)("h2",{id:"connect-to-welldone-code"},"Connect to WELLDONE Code"),(0,i.kt)("p",null,"You can activate the ",(0,i.kt)("strong",{parentName:"p"},"WELLDONE Code")," plugin by accessing this deep link: ",(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/?#activate=wds-code-remix"},"WELLDONE Code Remix Plugin"),"."),(0,i.kt)("h2",{id:"change-to-inevm-network"},"Change to inEVM network"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Currently inEVM features can only be used with MetaMask Wallet.")),(0,i.kt)("p",null,"To activate inEVM features you need to set the network to either inEVM Mainnet or inEVM Testnet by changing the network."),(0,i.kt)("img",{src:n(54025).Z,alt:"change-network-injective",style:{width:"50%"}}),(0,i.kt)("h2",{id:"compile--deploy--execute"},"Compile & Deploy & Execute"),(0,i.kt)("p",null,"In inEVM, you can write smart contracts with Solidity.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"WELLDONE Code")," provides three features to help developers who want to port and run solidity contract deployed on other evm supported networks."),(0,i.kt)("h3",{id:"compile-the-contract"},"Compile the Contract"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In this documentation We are using ERC721 contract as a example created from Remix Workspace.")),(0,i.kt)("p",null,"Create a simple example contract code written in Solidity.",(0,i.kt)("br",{parentName:"p"}),"\n","Or Simply open the contract file on Remix and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Compile Solidity Contract"),"."),(0,i.kt)("img",{src:n(16731).Z,alt:"compile-button-injective",style:{width:"50%"}}),(0,i.kt)("h3",{id:"deploy-the-contract"},"Deploy the Contract"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Code Deployment takes up few seconds")),(0,i.kt)("p",null,"After compilation You can deploy contract.",(0,i.kt)("br",{parentName:"p"}),"\n","Consturctor field will be automatically generated via ABI.",(0,i.kt)("br",{parentName:"p"}),"\n","After filling up the constructor click on Deploy Button below."),(0,i.kt)("img",{src:n(25183).Z,alt:"deploy-button-injective",style:{width:"50%"}}),(0,i.kt)("h3",{id:"execute-the-contract"},"Execute the Contract"),(0,i.kt)("p",null,"After deployment is done You can interact with deployed contract.",(0,i.kt)("br",{parentName:"p"}),"\n","Click on the function want to call, fill out the arguments and click transact."),(0,i.kt)("img",{src:n(46744).Z,alt:"interact-form-injective",style:{width:"50%"}}),(0,i.kt)("p",null,"After confirming the transaction, Transaction result will be displayed on Remix terminal if successful."),(0,i.kt)("img",{src:n(18985).Z,alt:"interact-form-injective",style:{width:"100%"}}))}m.isMDXComponent=!0},54025:function(e,t,n){t.Z=n.p+"assets/images/injective-inEvm-change-network-28528c46992cbe96d3f745b2b03502a1.png"},16731:function(e,t,n){t.Z=n.p+"assets/images/injective-inEvm-compile-4ce69d2120d1690eb92a9e5840c22c65.png"},25183:function(e,t,n){t.Z=n.p+"assets/images/injective-inEvm-deploy-ee8d4a12dfbebe39ea86d4e60a458e5f.png"},46744:function(e,t,n){t.Z=n.p+"assets/images/injective-inEvm-interact-bb1a4dce0b705ae83cb17fd3f5e25a18.png"},18985:function(e,t,n){t.Z=n.p+"assets/images/injective-inEvm-terminal-result-84868930388d618f28ef2f42ffcb4861.png"}}]);