"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[7580],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?o.createElement(g,r(r({ref:t},d),{},{components:n})):o.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],c={sidebar_position:5,description:"Deploy and Run Injective Smart Contract",keywords:["Deploy and Run","Injective","Smart Contract"]},p="Injective",l={unversionedId:"code/deploy-and-run/injective",id:"code/deploy-and-run/injective",title:"Injective",description:"Deploy and Run Injective Smart Contract",source:"@site/docs/code/deploy-and-run/injective.md",sourceDirName:"code/deploy-and-run",slug:"/code/deploy-and-run/injective",permalink:"/code/deploy-and-run/injective",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/deploy-and-run/injective.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Deploy and Run Injective Smart Contract",keywords:["Deploy and Run","Injective","Smart Contract"]},sidebar:"tutorialSidebar",previous:{title:"Injective inEVM",permalink:"/code/deploy-and-run/Injective inEVM"},next:{title:"Neutron",permalink:"/code/deploy-and-run/neutron"}},d={},s=[{value:"Connect to WELLDONE Code",id:"connect-to-welldone-code",level:2},{value:"Create the Project",id:"create-the-project",level:2},{value:"Create Template",id:"create-template",level:3},{value:"New Project",id:"new-project",level:3},{value:"Writing Contracts in Rust",id:"writing-contracts-in-rust",level:4},{value:"Compile the Contract",id:"compile-the-contract",level:2},{value:"Store Code",id:"store-code",level:2},{value:"Instantiate the Contract",id:"instantiate-the-contract",level:2},{value:"Execute the Contract",id:"execute-the-contract",level:2},{value:"Migrate the Contract",id:"migrate-the-contract",level:2}],u={toc:s};function m(e){var t=e.components,c=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"injective"},"Injective"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/code/getting-started"},"here")," to get started.")),(0,i.kt)("h2",{id:"connect-to-welldone-code"},"Connect to WELLDONE Code"),(0,i.kt)("p",null,"You can activate the ",(0,i.kt)("strong",{parentName:"p"},"WELLDONE Code")," plugin by accessing this deep link: ",(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/?#activate=wds-code-remix"},"WELLDONE Code Remix Plugin"),"."),(0,i.kt)("h2",{id:"create-the-project"},"Create the Project"),(0,i.kt)("p",null,"In Injective, you can write smart contracts with Rust language. ",(0,i.kt)("strong",{parentName:"p"},"WELLDONE Code")," provides two features to help developers new to Injective."),(0,i.kt)("h3",{id:"create-template"},"Create Template"),(0,i.kt)("p",null,"Create a simple example contract code written in Rust. You can create a sample contract by selecting the template option and clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," button. More templates may be found at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/InjectiveLabs/cw-injective/tree/dev/contracts"},"Injective Samples"),"."),(0,i.kt)("img",{src:n(27811).Z,alt:"template-code-injective",style:{width:"50%"}}),(0,i.kt)("h3",{id:"new-project"},"New Project"),(0,i.kt)("p",null,"Automatically generate a contract structure. Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," button to create a contract structure."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"injective/"),". If you start a new project, the structure should look like the following.")),(0,i.kt)("h4",{id:"writing-contracts-in-rust"},"Writing Contracts in Rust"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"injective\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 Cargo.toml\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 contract.rs\n    \u2514\u2500\u2500 examples\n        \u2514\u2500\u2500 schema.rs\n")),(0,i.kt)("h2",{id:"compile-the-contract"},"Compile the Contract"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We now only support the Intel/AMD compilation server. The build environment is crucial for contract verification due to the non-deterministic nature of building Rust into Wasm.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": Select the project you want to compile in the ",(0,i.kt)("strong",{parentName:"p"},"TARGET PROJECT")," section."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Select a compilation option and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Compile")," button."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3"),": When the compilation is complete, a wasm and schema files are returned."),(0,i.kt)("img",{src:n(10107).Z,alt:"injective-compile",style:{width:"318px"}}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can check the returned wasm file and schema files in ",(0,i.kt)("inlineCode",{parentName:"p"},"injective/<YOUR_PROJECT_NAME>/artifacts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"injective/<YOUR_PROJECT_NAME>/schema"),"."),(0,i.kt)("p",{parentName:"admonition"},"When you run the recompilation, the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," folders will be deleted and the compilation process will start anew.")),(0,i.kt)("h2",{id:"store-code"},"Store Code"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Before deploying, you should choose whether you want to send a transaction to mainnet(",(0,i.kt)("inlineCode",{parentName:"p"},"injective-1"),") or testnet(",(0,i.kt)("inlineCode",{parentName:"p"},"injective-888"),").")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": If you have a compiled contract code, then ",(0,i.kt)("inlineCode",{parentName:"p"},"Store Code")," button will be activated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Gas price is simulated before sending transaction and set as gas fee while sending transaction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3"),": Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Store Code")," button."),(0,i.kt)("img",{src:n(29018).Z,alt:"injective-store-code",style:{width:"70%"}}),(0,i.kt)("h2",{id:"instantiate-the-contract"},"Instantiate the Contract"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You have the option to Instantiate or Migrate. In the current version, if you want to run either of them again, you need to start over from the compilation process. This will be updated in the future for greater convenience.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": When the Store Code is completed, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Code ID")," is generated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": You can choose whether to allow contract upgrades or make them unmodifiable through the immutable option."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3"),": If there are arguments for contract instantiation, input the parameters and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Instantiate")," button. The arguments are generated through ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"react-jsonschema-form"),"."),(0,i.kt)("img",{src:n(22221).Z,alt:"injective-instantiate",style:{width:"318px"}}),(0,i.kt)("h2",{id:"execute-the-contract"},"Execute the Contract"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": Select the method to run."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Add parameters as you needed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4"),": Run the method via clicking ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Execute")," button. If you are sending a transaction, you must sign the transaction by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Send")," button in the ",(0,i.kt)("strong",{parentName:"p"},"Keplr Wallet"),"."),(0,i.kt)("img",{src:n(64544).Z,alt:"injective-execute",style:{width:"318px"}}),(0,i.kt)("h2",{id:"migrate-the-contract"},"Migrate the Contract"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You have the option to Instantiate or Migrate. In the current version, if you want to run either of them again, you need to start over from the compilation process. This will be updated in the future for greater convenience.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": When the Store Code is completed, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Code ID")," is generated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Select the method as ",(0,i.kt)("inlineCode",{parentName:"p"},"migrate"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3"),": Enter the target contract address for the migration and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Migrate")," button."),(0,i.kt)("img",{src:n(54415).Z,alt:"injective-migration",style:{width:"318px"}}))}m.isMDXComponent=!0},10107:function(e,t){t.Z="data:image/png;base64,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"},64544:function(e,t,n){t.Z=n.p+"assets/images/injective-execute-10c9f9ef33b91dc57aede2c0b5a6c45e.png"},22221:function(e,t,n){t.Z=n.p+"assets/images/injective-instantiate-6b02f47a1dd92f93d4d9eed145c0cca5.png"},54415:function(e,t,n){t.Z=n.p+"assets/images/injective-migration-d68c1c8cb2f316df2312f415845ecf20.png"},29018:function(e,t,n){t.Z=n.p+"assets/images/injective-store-code-95e13f22d9491b92cf18fe098018d8b6.png"},27811:function(e,t,n){t.Z=n.p+"assets/images/template-code-injective-01c788e9a1a2867017a5457dd07125ea.png"}}]);