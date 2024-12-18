"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[8794],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),A=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=A(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=A(n),s=r,g=u["".concat(c,".").concat(s)]||u[s]||d[s]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var A=2;A<a;A++)i[A]=n[A];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return A},toc:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:7,description:"Deploy and Run Celo Smart Contract",keywords:["Deploy and Run","Celo","Smart Contract"]},c="Celo",A={unversionedId:"code/deploy-and-run/celo",id:"code/deploy-and-run/celo",title:"Celo",description:"Deploy and Run Celo Smart Contract",source:"@site/docs/code/deploy-and-run/celo.md",sourceDirName:"code/deploy-and-run",slug:"/code/deploy-and-run/celo",permalink:"/code/deploy-and-run/celo",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/deploy-and-run/celo.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Deploy and Run Celo Smart Contract",keywords:["Deploy and Run","Celo","Smart Contract"]},sidebar:"tutorialSidebar",previous:{title:"NEAR",permalink:"/code/deploy-and-run/near"},next:{title:"Juno",permalink:"/code/deploy-and-run/juno"}},p={},d=[{value:"Create the Project",id:"create-the-project",level:2},{value:"Compile the Contract",id:"compile-the-contract",level:2},{value:"Deploy the Contract",id:"deploy-the-contract",level:2},{value:"Execute the Contract",id:"execute-the-contract",level:2}],u={toc:d};function s(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celo"},"Celo"),(0,a.kt)("h2",{id:"create-the-project"},"Create the Project"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": When writing a smart contract in Celo, write a contract with Solidity like Ethereum. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Select a contract file you have written."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select Project",src:n(68521).Z,title:"Select Project",width:"1788",height:"562"})),(0,a.kt)("h2",{id:"compile-the-contract"},"Compile the Contract"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": If you select a contract file you want to compile, then ",(0,a.kt)("inlineCode",{parentName:"p"},"Compile")," button will be activated."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Compile")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Compile",src:n(94692).Z,title:"Project Compile",width:"592",height:"698"})),(0,a.kt)("h2",{id:"deploy-the-contract"},"Deploy the Contract"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": If you have a compiled contract code, then ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," button will be activated."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," button and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Send Tx")," button in the ",(0,a.kt)("strong",{parentName:"p"},"WELLDONE Wallet")," to sign the transaction."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy",src:n(47120).Z,title:"Deploy",width:"1410",height:"1318"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),": A transaction success log will be printed to the terminal and the contract can be executed if contract deployment is successful."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tx Success Log",src:n(2916).Z,title:"Tx Success Log",width:"1063",height:"237"})),(0,a.kt)("img",{src:n(65785).Z,alt:"deployed-contract-celo",style:{width:"300px"}}),(0,a.kt)("h2",{id:"execute-the-contract"},"Execute the Contract"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There are two ways to import contracts."),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Automatically import contracts deployed through the above process."),(0,a.kt)("li",{parentName:"ol"},"Import existing deployed contracts through ",(0,a.kt)("inlineCode",{parentName:"li"},"At Address")," button."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": Select the method to run."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Add parameters as you needed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),": Run the method via clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"call")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction")," button. If you are sending a transaction, you must sign the transaction by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Send Tx")," button in the ",(0,a.kt)("strong",{parentName:"p"},"WELLDONE Wallet"),"."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"Deployed Contract",src:n(67715).Z,title:"Deployed Contract",width:"580",height:"636"})))}s.isMDXComponent=!0},65785:function(e,t){t.Z="data:image/png;base64,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"},67715:function(e,t,n){t.Z=n.p+"assets/images/call_view_celo-fcd33bb14854d3d20f7f939a2a14bb58.png"},94692:function(e,t,n){t.Z=n.p+"assets/images/compile-celo-80f1ad81336de0f709f27f3d012827ac.png"},68521:function(e,t,n){t.Z=n.p+"assets/images/create-project-celo-e10ecdf33f1e0a8f4ddea9065797bce2.png"},47120:function(e,t,n){t.Z=n.p+"assets/images/deploy-celo-b125c5585b534243ce76ed78de79b362.png"},2916:function(e,t,n){t.Z=n.p+"assets/images/txlog-success-celo-a0a1b5125ac5fdbdb03192a7b79cdf16.png"}}]);