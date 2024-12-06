"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[2234],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26872:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),o=["components"],s={title:"Starknet verification",description:"Understanding how to verify a deployed Starknet smart contract",sidebar_position:0},c=void 0,l={unversionedId:"veriwell/tutorials/staknet/index",id:"veriwell/tutorials/staknet/index",title:"Starknet verification",description:"Understanding how to verify a deployed Starknet smart contract",source:"@site/docs/veriwell/tutorials/staknet/index.md",sourceDirName:"veriwell/tutorials/staknet",slug:"/veriwell/tutorials/staknet/",permalink:"/veriwell/tutorials/staknet/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/veriwell/tutorials/staknet/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Starknet verification",description:"Understanding how to verify a deployed Starknet smart contract",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/veriwell/tutorials"},next:{title:"Verification API",permalink:"/veriwell/verification-api/"}},p={},d=[{value:"Intro",id:"intro",level:3},{value:"Cairo Language",id:"cairo-language",level:3},{value:"Cairo Code",id:"cairo-code",level:3},{value:"Cairo Verification",id:"cairo-verification",level:3},{value:"Result",id:"result",level:3}],u={toc:d};function m(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Starknet aims to achieve secure, low-cost transactions and high performance by using the STARK cryptographic proof system. Starknet contracts and the Starknet OS are written in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo"},"Cairo"),", a custom-built and specialized programming language."),(0,i.kt)("h3",{id:"cairo-language"},"Cairo Language"),(0,i.kt)("p",null,"The Cairo language is a smart contract language for Starknet, a programming language designed for virtual CPUs. Because the Cairo language is built for cryptographic constraints, not physical ones, it can efficiently prove the execution of any program."),(0,i.kt)("p",null,"While Cairo 0 was compiled directly into CASM (Cairo Assembly), Cairo 1 is a high-level language that is first compiled into Sierra. Sierra (Safe Intermediate Representation) is an intermediate representation between Cairo and CASM that is later compiled into a safe subset of CASM. The resulting compiled CASM code is eventually executed by the Cairo VM on the Starknet OS and generates a STARK proof, which is sent to L1."),(0,i.kt)("p",null,"You can read more about Cairo, Sierra, and CASM in these ",(0,i.kt)("a",{parentName:"p",href:"https://docs.starknet.io/architecture-and-concepts/smart-contracts/cairo-and-sierra/"},"documents"),"."),(0,i.kt)("h3",{id:"cairo-code"},"Cairo Code"),(0,i.kt)("p",null,"Example code for the Cairo language looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="simple_storage.cairo"',title:'"simple_storage.cairo"'},"#[starknet::interface]\ntrait ISimpleStorage<TContractState> {\n    fn set(ref self: TContractState, x: u128);\n    fn get(self: @TContractState) -> u128;\n}\n\n#[starknet::contract]\nmod simple_storage {\n    use starknet::get_caller_address;\n    use starknet::ContractAddress;\n\n    #[storage]\n    struct Storage {\n        stored_data: u128\n    }\n\n    #[abi(embed_v0)]\n    impl SimpleStorage of super::ISimpleStorage<ContractState> {\n        fn set(ref self: ContractState, x: u128) {\n            self.stored_data.write(x);\n        }\n        fn get(self: @ContractState) -> u128 {\n            self.stored_data.read()\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"cairo-verification"},"Cairo Verification"),(0,i.kt)("p",null,"The above ",(0,i.kt)("inlineCode",{parentName:"p"},"simple_storage.cairo")," can be verified using WELLDONE Studio's ",(0,i.kt)("a",{parentName:"p",href:"https://veriwell.dev/"},"VeriWell"),". To deploy a smart contract written in Cairo, you can refer to the Starknet ",(0,i.kt)("a",{parentName:"p",href:"https://docs.starknet.io/quick-start/environment-setup/"},"documentation")," for deployment. Once deployed, you can check that it was deployed correctly with ",(0,i.kt)("a",{parentName:"p",href:"https://starkscan.co/"},"Starkscan")," or ",(0,i.kt)("a",{parentName:"p",href:"https://voyager.online/"},"Nethermind Voyager Explorer"),"."),(0,i.kt)("p",null,"To verify a Cairo smart contract using the Multi-chain Verification Tool, a total of seven pieces of information are required:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Contract Address: Deployed smart contract address")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"DECLARE")," Transaction Hash: Declare transaction hash is required because there is a need to verify not only ",(0,i.kt)("inlineCode",{parentName:"p"},"class_hash")," but also ",(0,i.kt)("inlineCode",{parentName:"p"},"compiled_class_hash"),". In the future, we will remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"DECLARE")," transaction hash.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scarb Version: Scarb is a Cairo package manager that compiles Cairo projects. It depends on the compiler version to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo/blob/410069c5745800bab4fbd2f0f4ff0bbfc59209d6/crates/cairo-lang-starknet-classes/src/contract_class.rs#L49"},"compile"),", so it is important to specify it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Chain ID: To differentiate between Mainnet (",(0,i.kt)("inlineCode",{parentName:"p"},"0x534e5f4d41494e"),") and Sepolia (",(0,i.kt)("inlineCode",{parentName:"p"},"0x534e5f5345504f4c4941"),")"),(0,i.kt)("img",{src:a(69680).Z,alt:"source-code-verification"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cairo project source code")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In order to validate Cairo, you must add the following config to ",(0,i.kt)("inlineCode",{parentName:"p"},"Scarb.toml"),":"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"[[target.starknet-contract]]\ncasm = true\nsierra = true\n")),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"The Cairo project structure is as follows (assuming a DECLARE and DEPLOY to the network):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"\u251c\u2500\u2500 Scarb.lock\n\u251c\u2500\u2500 Scarb.toml\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 lib.cairo\n\u2502\xa0\xa0 \u2514\u2500\u2500 simple_storage.cairo\n\u2514\u2500\u2500 target\n    \u251c\u2500\u2500 CACHEDIR.TAG\n    \u2514\u2500\u2500 dev\n        \u251c\u2500\u2500 simple_storage.starknet_artifacts.json\n        \u251c\u2500\u2500 simple_storage_simple_storage.compiled_contract_class.json\n        \u2514\u2500\u2500 simple_storage_simple_storage.contract_class.json\n")),(0,i.kt)("img",{src:a(18691).Z,alt:"source-code-upload-code"}),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code")),(0,i.kt)("p",null,"For verified contracts, users can review the overall structure, see where each file is located, and examine how the code in each file is written. Even users who are not familiar with reading code can understand what the code does using AI code assistance."),(0,i.kt)("img",{src:a(53481).Z,alt:"code-result"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Interact")),(0,i.kt)("p",null,"Users can directly interact with the contract simply by connecting their wallet."),(0,i.kt)("img",{src:a(93862).Z,alt:"code-interact"}),(0,i.kt)("p",null,"Before initiating a transaction, users can review the code and use AI assistance to understand the functions and features of the contract. Keep in mind that AI code assistance is still a developing tool and may have limitations. While it can provide useful insights, it should be used as a reference rather than a definitive guide."),(0,i.kt)("img",{src:a(71832).Z,alt:"code-interact-show-code"}))}m.isMDXComponent=!0},71832:function(e,t,a){t.Z=a.p+"assets/images/code-interact-show-code-3e7599240a7002ca94f49bb2004e1174.png"},93862:function(e,t,a){t.Z=a.p+"assets/images/code-interact-e2693bc388f27788f36c33fcb2f59c9d.png"},53481:function(e,t,a){t.Z=a.p+"assets/images/code-result-4c4ba8b036fa2d0b3981b1cee1d78c69.png"},18691:function(e,t,a){t.Z=a.p+"assets/images/source-code-upload-code-ed0e359690827861877d39e7b277b76c.png"},69680:function(e,t,a){t.Z=a.p+"assets/images/source-code-verification-b6b94b19170335be2b8b27d13f24c5a8.png"}}]);