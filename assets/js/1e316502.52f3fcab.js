"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[752],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=n(3117),l=n(102),a=(n(7294),n(3905)),r=["components"],i={sidebar_position:2,description:"Deploy and Run Celo Smart Contract",keywords:["Deploy and Run","Celo","Smart Contract"]},c=void 0,p={unversionedId:"deploy-and-run/celo",id:"deploy-and-run/celo",title:"celo",description:"Deploy and Run Celo Smart Contract",source:"@site/docs/deploy-and-run/celo.md",sourceDirName:"deploy-and-run",slug:"/deploy-and-run/celo",permalink:"/docs/deploy-and-run/celo",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/deploy-and-run/celo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Deploy and Run Celo Smart Contract",keywords:["Deploy and Run","Celo","Smart Contract"]},sidebar:"tutorialSidebar",previous:{title:"near",permalink:"/docs/deploy-and-run/near"},next:{title:"Klaytn",permalink:"/docs/deploy-and-run/klaytn"}},d={},u=[{value:"Choose a wallet",id:"choose-a-wallet",level:2},{value:"Connect",id:"connect",level:2},{value:"Create Project",id:"create-project",level:2},{value:"Compile",id:"compile",level:2},{value:"Deploy",id:"deploy",level:2},{value:"View and Call function",id:"view-and-call-function",level:2}],s={toc:u};function m(e){var t=e.components,i=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"choose-a-wallet"},"Choose a wallet"),(0,a.kt)("p",null,"You must first install ",(0,a.kt)("inlineCode",{parentName:"p"},"WELLDONE Wallet")," before you can utilize ",(0,a.kt)("inlineCode",{parentName:"p"},"WELLDONE Code"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en"},"\u27a1\ufe0f Installation of WELLDONE Wallet")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select Wallet",src:n(2735).Z,title:"Select Wallet",width:"1354",height:"970"})),(0,a.kt)("h2",{id:"connect"},"Connect"),(0,a.kt)("p",null,"Create a Celo account in ",(0,a.kt)("inlineCode",{parentName:"p"},"WELLDONE wallet")," before connecting to the network."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connect Wallet",src:n(9737).Z,title:"Connect Wallet",width:"1774",height:"1240"})),(0,a.kt)("h2",{id:"create-project"},"Create Project"),(0,a.kt)("p",null,"Write a contract in solidity, then select a contract file you have written."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select Project",src:n(3870).Z,title:"Select Project",width:"1788",height:"562"})),(0,a.kt)("h2",{id:"compile"},"Compile"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the Compile button after selecting the solidity contract code."),(0,a.kt)("li",{parentName:"ol"},"Select the Compile option.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Compile",src:n(4414).Z,title:"Project Compile",width:"592",height:"698"})),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you have built contract code, click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Deploy")," button."),(0,a.kt)("li",{parentName:"ul"},"Sign your transaction using your wallet.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy",src:n(1274).Z,title:"Deploy",width:"1410",height:"1318"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can run methods once the contract has been deployed.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deployed Contract",src:n(6117).Z,title:"Deployed Contract",width:"580",height:"636"})),(0,a.kt)("h2",{id:"view-and-call-function"},"View and Call function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you have followed the aforementioned steps to deploy the contract, it is automatically triggered on the website.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can alternatively initiate an existing contract by putting the contract address into the ",(0,a.kt)("inlineCode",{parentName:"p"},"At Address")," field and clicking the button."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"At Address",src:n(4114).Z,title:"At Address",width:"582",height:"150"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choose the method to invoke.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add parameters as you needed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reads the value through ",(0,a.kt)("inlineCode",{parentName:"p"},"call")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"transact")," or sends a transaction."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Deployed Contract",src:n(6117).Z,title:"Deployed Contract",width:"580",height:"636"})))))}m.isMDXComponent=!0},6117:function(e,t,n){t.Z=n.p+"assets/images/call_view_celo-fcd33bb14854d3d20f7f939a2a14bb58.png"},4414:function(e,t,n){t.Z=n.p+"assets/images/compile-celo-80f1ad81336de0f709f27f3d012827ac.png"},4114:function(e,t,n){t.Z=n.p+"assets/images/contract_address-ec30bfaa4527befb311f67d387ae4b3f.png"},3870:function(e,t,n){t.Z=n.p+"assets/images/create-project-celo-e10ecdf33f1e0a8f4ddea9065797bce2.png"},1274:function(e,t,n){t.Z=n.p+"assets/images/deploy-celo-b125c5585b534243ce76ed78de79b362.png"},9737:function(e,t,n){t.Z=n.p+"assets/images/select-wallet-celo-90a940ff3067788efcfbb1dd40508bac.png"},2735:function(e,t,n){t.Z=n.p+"assets/images/select-wallet-bc6a727b80fedced25d62154ce5b092d.png"}}]);