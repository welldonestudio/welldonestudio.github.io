"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[7197],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37641:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"APTOS Coin Deployment",description:"APTOS Coin Deployment",sidebar_position:6},c="Aptos Coin Deployment",s={unversionedId:"tutorials/aptos-move-coin/index",id:"tutorials/aptos-move-coin/index",title:"APTOS Coin Deployment",description:"APTOS Coin Deployment",source:"@site/docs/tutorials/aptos-move-coin/index.md",sourceDirName:"tutorials/aptos-move-coin",slug:"/tutorials/aptos-move-coin/",permalink:"/tutorials/aptos-move-coin/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/aptos-move-coin/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"APTOS Coin Deployment",description:"APTOS Coin Deployment",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"APTOS Move Prover",permalink:"/tutorials/aptos-move-prover/"},next:{title:"Injective Atomic Order",permalink:"/tutorials/injective-atomic-order/"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Create Template",id:"create-template",level:2},{value:"Source Code",id:"source-code",level:3},{value:"Compile The Source Code",id:"compile-the-source-code",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Check Out Deployed Contract",id:"check-out-deployed-contract",level:2},{value:"Calling Contract Functions",id:"calling-contract-functions",level:2},{value:"Try more...",id:"try-more",level:2},{value:"Reference",id:"reference",level:3}],m={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aptos-coin-deployment"},"Aptos Coin Deployment"),(0,i.kt)("div",null,(0,i.kt)("span",{className:"author-sm"},"May 23, 2023"),(0,i.kt)("div",{className:"author-div"},(0,i.kt)("div",{className:"author-avatars"},(0,i.kt)("a",{href:"https://github.com/kairoski03",target:"_blank"},(0,i.kt)("img",{src:"https://avatars.githubusercontent.com/u/110001241?v=4"}))),(0,i.kt)("div",null,(0,i.kt)("span",{className:"author-name"},"Yoonsoo Jang"),(0,i.kt)("br",null),(0,i.kt)("span",{className:"author-sm"},"Software Engineer, DSRV ")))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This tutorial shows how to deploy your own coin."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/code/getting-started"},"here")," to get started.")),(0,i.kt)("h2",{id:"create-template"},"Create Template"),(0,i.kt)("p",null,"Create a simple example contract code written in Move.\nYou can create a sample contract ",(0,i.kt)("inlineCode",{parentName:"p"},"moon_coin")," by selecting the template option\nand clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Template")," button."),(0,i.kt)("img",{src:n(11223).Z,alt:"template-code-aptos-moon-coin",style:{width:"480px"}}),(0,i.kt)("h3",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"init_module")," function is executed only once during deployment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="moon_coin.move"',title:'"moon_coin.move"'},'module MoonCoin::moon_coin {\nuse aptos_framework::coin;\n\n    struct MoonCoin {}\n\n    fun init_module(sender: &signer) {\n        aptos_framework::managed_coin::initialize<MoonCoin>(\n            sender,\n            b"Moon Coin",\n            b"MOON",\n            6,\n            false,\n        );\n    }\n\n    public entry fun register(account: &signer) {\n        aptos_framework::managed_coin::register<MoonCoin>(account)\n    }\n\n    public entry fun mint(account: &signer, dst_addr: address, amount: u64) {\n        aptos_framework::managed_coin::mint<MoonCoin>(account, dst_addr, amount);\n    }\n\n    public entry fun burn(account: &signer, amount: u64) {\n        aptos_framework::managed_coin::burn<MoonCoin>(account, amount);\n    }\n\n    public entry fun transfer(from: &signer, to: address, amount: u64,) {\n        coin::transfer<MoonCoin>(from, to, amount);\n    }\n}\n')),(0,i.kt)("p",null,"Note that you should replace MoonCoin address ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," of your own account address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Move.toml"',title:'"Move.toml"'},'[package]\nname = "Examples"\nversion = "0.0.0"\n\n[addresses]\nMoonCoin = "_" \n\n[dependencies]\nAptosFramework = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-framework/", rev = "main" }\n\n')),(0,i.kt)("h2",{id:"compile-the-source-code"},"Compile The Source Code"),(0,i.kt)("p",null,"Select the project you want to compile. For now, let's choose ",(0,i.kt)("inlineCode",{parentName:"p"},"aptos/moon_coin")," and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Compile")," button."),(0,i.kt)("img",{src:n(14055).Z,alt:"project-to-compile-moon-coin",style:{width:"480px"}}),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"If the compilation succeed, you can see mv file ",(0,i.kt)("inlineCode",{parentName:"p"},"moon-coin.mv"),"."),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," button."),(0,i.kt)("img",{src:n(38354).Z,alt:"build-file-moon-coin",style:{width:"480px"}}),(0,i.kt)("p",null,"and you can see wallet popup. Let's click ",(0,i.kt)("inlineCode",{parentName:"p"},"Send")," button."),(0,i.kt)("img",{src:n(29940).Z,alt:"aptos-moon-coin-wallet-popup",style:{width:"480px"}}),(0,i.kt)("h2",{id:"check-out-deployed-contract"},"Check Out Deployed Contract"),(0,i.kt)("p",null,"After deployment, you can see moon_coin module and functions."),(0,i.kt)("img",{src:n(92015).Z,alt:"aptos-moon-coin-deployed",style:{width:"480px"}}),(0,i.kt)("h2",{id:"calling-contract-functions"},"Calling Contract Functions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," function to accept deposits of ",(0,i.kt)("inlineCode",{parentName:"p"},"MoonCoin"),"."),(0,i.kt)("img",{src:n(93420).Z,alt:"aptos-moon-coin-register",style:{width:"480px"}})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," function. First parameter is the address of receiver for minting coin\nand second parameter is the amount of minting coin. For now, set your account address for the first parameter\nbecause you have already registered above.\nThe receiver should call ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," before calling ",(0,i.kt)("inlineCode",{parentName:"p"},"mint"),"."),(0,i.kt)("img",{src:n(28345).Z,alt:"aptos-moon-coin-mint",style:{width:"480px"}})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check if the coin have been minted in Aptos Explorer Coins tab."),(0,i.kt)("img",{src:n(73532).Z,alt:"aptos-moon-coin-minted",style:{width:"960px"}}))),(0,i.kt)("h2",{id:"try-more"},"Try more..."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"burn")," function and check it out in Aptos Explorer Coins tab."),(0,i.kt)("li",{parentName:"ol"},"Create and switch to new account address and try ",(0,i.kt)("inlineCode",{parentName:"li"},"register"),".\nSwitch to the original address again and transfer or mint to the address you just newly created.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://aptos.dev/tutorials/your-first-coin/"},"https://aptos.dev/tutorials/your-first-coin/")))}d.isMDXComponent=!0},92015:function(e,t,n){t.Z=n.p+"assets/images/aptos-moon-coin-deployed-47b7393037b19554d204227ebf620e4e.png"},28345:function(e,t,n){t.Z=n.p+"assets/images/aptos-moon-coin-mint-75049678bd3d64b335e8b7942d3cee90.png"},73532:function(e,t,n){t.Z=n.p+"assets/images/aptos-moon-coin-minted-6e9488de421db43ad5eac1964f493d8a.png"},93420:function(e,t,n){t.Z=n.p+"assets/images/aptos-moon-coin-register-0b6ceceb9d61927e987202d0abf8cadd.png"},29940:function(e,t,n){t.Z=n.p+"assets/images/aptos-moon-coin-wallet-popup-7b0864a05f4739f85913366944777a57.png"},38354:function(e,t,n){t.Z=n.p+"assets/images/build-file-moon-coin-c915c510cd7ceeb38d925b39f119e37e.png"},14055:function(e,t,n){t.Z=n.p+"assets/images/project-to-compile-moon-coin-617263ca29d26ea6ed87896b026a57b3.png"},11223:function(e,t,n){t.Z=n.p+"assets/images/template-code-aptos-moon-coin-ff581ce486823c225340881a0d8b340a.png"}}]);