"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[3083],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91316:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],l={sidebar_position:1,description:"Deploy and Run NEAR Smart Contract",keywords:["Deploy and Run","NEAR","Smart Contract"]},c="NEAR",p={unversionedId:"code/deploy-and-run/near",id:"code/deploy-and-run/near",title:"NEAR",description:"Deploy and Run NEAR Smart Contract",source:"@site/docs/code/deploy-and-run/near.md",sourceDirName:"code/deploy-and-run",slug:"/code/deploy-and-run/near",permalink:"/code/deploy-and-run/near",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/deploy-and-run/near.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Deploy and Run NEAR Smart Contract",keywords:["Deploy and Run","NEAR","Smart Contract"]},sidebar:"tutorialSidebar",previous:{title:"Deploy and Run",permalink:"/code/deploy-and-run"},next:{title:"Celo",permalink:"/code/deploy-and-run/celo"}},s={},d=[{value:"Select a Chain",id:"select-a-chain",level:2},{value:"Connect",id:"connect",level:2},{value:"Create Project",id:"create-project",level:2},{value:"1. Writing Contracts in Rust",id:"1-writing-contracts-in-rust",level:3},{value:"2. Writing Contracts in AssemblyScript",id:"2-writing-contracts-in-assemblyscript",level:3},{value:"Compile",id:"compile",level:2},{value:"1. NEAR Compiler for Rust",id:"1-near-compiler-for-rust",level:3},{value:"2. Cargo-near Compile (for Rust) - <code>Experimental</code>",id:"2-cargo-near-compile-for-rust---experimental",level:3},{value:"3. AssemblyScript Compile (for AssemblyScript)",id:"3-assemblyscript-compile-for-assemblyscript",level:3},{value:"4. How to Compile",id:"4-how-to-compile",level:3},{value:"Deploy",id:"deploy",level:2},{value:"View and Call function",id:"view-and-call-function",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"near"},"NEAR"),(0,i.kt)("h2",{id:"select-a-chain"},"Select a Chain"),(0,i.kt)("p",null,"First, Select NEAR on the Select a Chain."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select Chain",src:n(38104).Z,title:"Select Chain",width:"319",height:"424"})),(0,i.kt)("h2",{id:"connect"},"Connect"),(0,i.kt)("p",null,"You must install ",(0,i.kt)("inlineCode",{parentName:"p"},"WELLDONE Wallet")," to use ",(0,i.kt)("inlineCode",{parentName:"p"},"WELLDONE Code"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=en"},"\u27a1\ufe0f Installation of WELLDONE Wallet")),(0,i.kt)("p",null,"After ",(0,i.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/wallet/manual/how-to-create-an-account"},"creating a NEAR Accoount"),", click ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect to WELLDONE")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connect Wallet",src:n(65892).Z,title:"Connect Wallet",width:"920",height:"747"})),(0,i.kt)("h2",{id:"create-project"},"Create Project"),(0,i.kt)("p",null,"Create a basic example contract code written in AssemblyScript or Rust. By clicking the ",(0,i.kt)("strong",{parentName:"p"},"Create Template")," button, you can create a sample contract. More templates may be found at ",(0,i.kt)("a",{parentName:"p",href:"https://examples.near.org/"},"NEAR Samples"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Template Tree",src:n(28305).Z,title:"Template Tree",width:"2000",height:"1448"})),(0,i.kt)("p",null,"If you wish to start a new project, click the ",(0,i.kt)("strong",{parentName:"p"},"New Project")," button."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"However, for the remix plugin to build and deploy the contract, it must be built within the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"near/"),". If you start a new project, the structure should look like the following.")),(0,i.kt)("h3",{id:"1-writing-contracts-in-rust"},"1. Writing Contracts in Rust"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"near/<YOUR_PROJECT_NAME>",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 Cargo.toml\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 lib.rs\n")))),(0,i.kt)("h3",{id:"2-writing-contracts-in-assemblyscript"},"2. Writing Contracts in AssemblyScript"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"near/<YOUR_PROJECT_NAME>",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 as_types.d.ts\n    \u251c\u2500\u2500 index.ts\n    \u2514\u2500\u2500 tsconfig.json\n")))),(0,i.kt)("h2",{id:"compile"},"Compile"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"WELLDONE Code provides three choices for compilation - We now only support the AMD compilation server, however, we will shortly add support for the ARM compilation server.")),(0,i.kt)("h3",{id:"1-near-compiler-for-rust"},"1. NEAR Compiler for Rust"),(0,i.kt)("p",null,"The option to utilize the default compiler of NEAR, which provides a stable compilation. Meanwhile, it is cumbersome to explicitly input method arguments during the testing of contracts."),(0,i.kt)("p",null,"WELLDONE Code is planning to provide the Raen Compile option to overcome this problem."),(0,i.kt)("h3",{id:"2-cargo-near-compile-for-rust---experimental"},"2. Cargo-near Compile (for Rust) - ",(0,i.kt)("inlineCode",{parentName:"h3"},"Experimental")),(0,i.kt)("p",null,"Compile using ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo near")," which is officially being developed by NEAR. If Compile is successful, an executable wasm binary file and a json file containing the ABI of the contract are created together. If you have deployed and imported a compiled contract using ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-near"),", you can find out the parameter type of the method, making it easier to run the contract."),(0,i.kt)("p",null,"However, because this feature is still under development, the ",(0,i.kt)("inlineCode",{parentName:"p"},"near-sdk-rs")," version must be specified at ",(0,i.kt)("strong",{parentName:"p"},"4.1.0-pre.3")," or higher in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file, and unexpected issues may occur during compilation."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You must specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"near-sdk")," version in ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," as follows if you want to compile using ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-near")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'[dependencies]\nnear-sdk = { version = "4.1.0-pre.3", features = ["abi"] }\n'))),(0,i.kt)("h3",{id:"3-assemblyscript-compile-for-assemblyscript"},"3. AssemblyScript Compile (for AssemblyScript)"),(0,i.kt)("p",null,"Compile the contract created with AssemblyScript. The compiler provides a stable compiling."),(0,i.kt)("h3",{id:"4-how-to-compile"},"4. How to Compile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the project you want to compile in the ",(0,i.kt)("strong",{parentName:"li"},"PROJECT TO COMPILE")," section."),(0,i.kt)("li",{parentName:"ul"},"Select a compilation method."),(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Compile")," button."),(0,i.kt)("li",{parentName:"ul"},"When the compilation is complete, a wasm file is returned.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project Compile",src:n(22005).Z,title:"Project Compile",width:"755",height:"1172"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you need to revise the contract, delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"near/out")," directory and re-compile the contract.")),(0,i.kt)("h2",{id:"deploy"},"Deploy"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have compiled contract code, input the value in ",(0,i.kt)("inlineCode",{parentName:"li"},"receive_id")," then click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Deploy")," button."),(0,i.kt)("li",{parentName:"ul"},"Sign your transaction using your wallet.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deploy",src:n(72139).Z,title:"Deploy",width:"1546",height:"1658"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can run methods once the contract has been deployed.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deployed Contract",src:n(61194).Z,title:"Deployed Contract",width:"594",height:"1084"})),(0,i.kt)("h2",{id:"view-and-call-function"},"View and Call function"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To invoke an existing contract, provide a contract ID inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"At Address")," field."),(0,i.kt)("li",{parentName:"ul"},"Choose the method to invoke."),(0,i.kt)("li",{parentName:"ul"},"As needed, add parameters."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"View")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Call")," commands read the value or send the transaction.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View Function",src:n(45606).Z,title:"View Function",width:"1087",height:"2529"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Function Call",src:n(47996).Z,title:"Function Call",width:"1540",height:"1686"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you deployed the compiled contract using ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-near"),", you can execute the contract more easily using the ABI without directly entering the parameters of the method.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cargo-near",src:n(51728).Z,title:"cargo-near",width:"291",height:"568"})))}m.isMDXComponent=!0},51728:function(e,t,n){t.Z=n.p+"assets/images/cargo-near-b25c449dd8d1a7052452782a1b051f74.png"},65892:function(e,t,n){t.Z=n.p+"assets/images/connect-wallet-near-58e6bb7f0301392815a8fc2875fb0fbe.png"},72139:function(e,t,n){t.Z=n.p+"assets/images/deploy-7063dae121cf1c68dc2c399de97f5673.png"},61194:function(e,t,n){t.Z=n.p+"assets/images/deployed-contract-08ab302ea78bd8bed75e6f1e8310f26b.png"},47996:function(e,t,n){t.Z=n.p+"assets/images/function-call-89370f39b6e2e8129077ebf160778507.png"},22005:function(e,t,n){t.Z=n.p+"assets/images/project-compile-6c0b2bb6b3eee9f747d086bdce6b1edb.png"},38104:function(e,t,n){t.Z=n.p+"assets/images/select-chain-near-4023882489615296d7c18e427d62fd4e.png"},28305:function(e,t,n){t.Z=n.p+"assets/images/template-tree-fae5cf910cbdffafde1b3aa9d3f59853.png"},45606:function(e,t,n){t.Z=n.p+"assets/images/view-function-8cfdf7ad196578e362d36c482a6be386.png"}}]);