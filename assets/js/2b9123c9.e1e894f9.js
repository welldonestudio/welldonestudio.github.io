"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[7362],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7091:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:5,description:"Deploy and Run Neutron Smart Contract",keywords:["Deploy and Run","Neutron","Smart Contract"]},p="Neutron",l={unversionedId:"code/deploy-and-run/neutron",id:"code/deploy-and-run/neutron",title:"Neutron",description:"Deploy and Run Neutron Smart Contract",source:"@site/docs/code/deploy-and-run/neutron.md",sourceDirName:"code/deploy-and-run",slug:"/code/deploy-and-run/neutron",permalink:"/code/deploy-and-run/neutron",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/deploy-and-run/neutron.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Deploy and Run Neutron Smart Contract",keywords:["Deploy and Run","Neutron","Smart Contract"]},sidebar:"tutorialSidebar",previous:{title:"Aptos",permalink:"/code/deploy-and-run/aptos"},next:{title:"NEAR",permalink:"/code/deploy-and-run/near"}},u={},s=[{value:"Connect to WELLDONE Code",id:"connect-to-welldone-code",level:2},{value:"Create the Project",id:"create-the-project",level:2},{value:"Create Template",id:"create-template",level:3},{value:"New Project",id:"new-project",level:3},{value:"Writing Contracts in Rust",id:"writing-contracts-in-rust",level:4},{value:"Compile the Contract",id:"compile-the-contract",level:2},{value:"Store Code",id:"store-code",level:2},{value:"Instantiate the Contract",id:"instantiate-the-contract",level:2},{value:"Execute the Contract",id:"execute-the-contract",level:2},{value:"Migrate the Contract",id:"migrate-the-contract",level:2}],d={toc:s};function m(e){var t=e.components,c=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"neutron"},"Neutron"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/code/getting-started"},"here")," to get started.")),(0,a.kt)("h2",{id:"connect-to-welldone-code"},"Connect to WELLDONE Code"),(0,a.kt)("p",null,"You can activate the ",(0,a.kt)("strong",{parentName:"p"},"WELLDONE Code")," plugin by accessing this deep link: ",(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/?#activate=wds-code-remix"},"WELLDONE Code Remix Plugin"),"."),(0,a.kt)("h2",{id:"create-the-project"},"Create the Project"),(0,a.kt)("p",null,"In Neutron, you can write smart contracts with Rust language. ",(0,a.kt)("strong",{parentName:"p"},"WELLDONE Code")," provides two features to help developers new to Neutron."),(0,a.kt)("h3",{id:"create-template"},"Create Template"),(0,a.kt)("p",null,"Create a simple example contract code written in Rust. You can create a sample contract by selecting the template option and clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," button. More templates may be found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/deus-labs/cw-contracts"},"Neutron Samples"),"."),(0,a.kt)("img",{src:n(69650).Z,alt:"template-code-neutron",style:{width:"50%"}}),(0,a.kt)("h3",{id:"new-project"},"New Project"),(0,a.kt)("p",null,"Automatically generate a contract structure. Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," button to create a contract structure."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"neutron/"),". If you start a new project, the structure should look like the following.")),(0,a.kt)("h4",{id:"writing-contracts-in-rust"},"Writing Contracts in Rust"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"neutron\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 Cargo.toml\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 contract.rs\n    \u2514\u2500\u2500 examples\n        \u2514\u2500\u2500 schema.rs    \n")),(0,a.kt)("h2",{id:"compile-the-contract"},"Compile the Contract"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We now only support the AMD compilation server. The build environment is crucial for contract verification due to the non-deterministic nature of building Rust into Wasm.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": Select the project you want to compile in the ",(0,a.kt)("strong",{parentName:"p"},"TARGET PROJECT")," section."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Select a compilation option and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Compile")," button."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),": When the compilation is complete, a wasm and schema files are returned."),(0,a.kt)("img",{src:n(83479).Z,alt:"neutron-compile",style:{width:"318px"}}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can check the returned wasm file and schema files in ",(0,a.kt)("inlineCode",{parentName:"p"},"neutron/<YOUR_PROJECT_NAME>/artifacts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"neutron/<YOUR_PROJECT_NAME>/schema"),"."),(0,a.kt)("p",{parentName:"admonition"},"When you run the recompilation, the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," folders will be deleted and the compilation process will start anew.")),(0,a.kt)("h2",{id:"store-code"},"Store Code"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": If you have a compiled contract code, then ",(0,a.kt)("inlineCode",{parentName:"p"},"Store Code")," button will be activated."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Gas price is set to 0.025 untrn/untrnx as a default and can be modified. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),": Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Store Code")," button."),(0,a.kt)("img",{src:n(21802).Z,alt:"neutron-store-code",style:{width:"70%"}}),(0,a.kt)("h2",{id:"instantiate-the-contract"},"Instantiate the Contract"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You have the option to Instantiate or Migrate. In the current version, if you want to run either of them again, you need to start over from the compilation process. This will be updated in the future for greater convenience.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": When the Store Code is completed, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Code ID")," is generated."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": You can choose whether to allow contract upgrades or make them unmodifiable through the immutable option."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),": If there are arguments for contract instantiation, input the parameters and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Instantiate")," button. The arguments are generated through ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"react-jsonschema-form"),"."),(0,a.kt)("img",{src:n(4338).Z,alt:"neutron-instantiate",style:{width:"318px"}}),(0,a.kt)("h2",{id:"execute-the-contract"},"Execute the Contract"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": Select the method to run."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Add parameters as you needed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4"),": Run the method via clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Query")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Execute")," button. If you are sending a transaction, you must sign the transaction by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Send")," button in the ",(0,a.kt)("strong",{parentName:"p"},"WELLDONE Wallet"),"."),(0,a.kt)("img",{src:n(39310).Z,alt:"neutron-execute",style:{width:"100%"}}),(0,a.kt)("h2",{id:"migrate-the-contract"},"Migrate the Contract"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You have the option to Instantiate or Migrate. In the current version, if you want to run either of them again, you need to start over from the compilation process. This will be updated in the future for greater convenience.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": When the Store Code is completed, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Code ID")," is generated."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Select the method as ",(0,a.kt)("inlineCode",{parentName:"p"},"migrate"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),": Enter the target contract address for the migration and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Migrate")," button."),(0,a.kt)("img",{src:n(65583).Z,alt:"neutron-migrate",style:{width:"318px"}}))}m.isMDXComponent=!0},83479:function(e,t,n){t.Z=n.p+"assets/images/compile-neutron-3cb09fb4a3361dda74f242d17a6d2999.png"},39310:function(e,t,n){t.Z=n.p+"assets/images/neutron-execute-bd82e6757e180aa24cbd85b5580e4164.png"},4338:function(e,t,n){t.Z=n.p+"assets/images/neutron-instantiate-4d17efe1d0cd02019a1ad7a966c8a47d.png"},65583:function(e,t,n){t.Z=n.p+"assets/images/neutron-migrate-d828179875e2d8ae62f554dbcdfebea9.png"},21802:function(e,t,n){t.Z=n.p+"assets/images/neutron-store-code-3f097f8777216205609b16ddcc0340f4.png"},69650:function(e,t,n){t.Z=n.p+"assets/images/template-code-neutron-7a08437d450cd74c638086b594036f0c.png"}}]);