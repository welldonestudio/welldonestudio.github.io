"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[392],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?i.createElement(y,a(a({ref:t},u),{},{components:n})):i.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var i=n(83117),o=n(80102),r=(n(67294),n(3905)),a=["components"],c={title:"SUI Coin Deployment",description:"SUI Coin Deployment",sidebar_position:6},l="SUI Coin Deployment",s={unversionedId:"tutorials/sui-move-coin/index",id:"tutorials/sui-move-coin/index",title:"SUI Coin Deployment",description:"SUI Coin Deployment",source:"@site/docs/tutorials/sui-move-coin/index.md",sourceDirName:"tutorials/sui-move-coin",slug:"/tutorials/sui-move-coin/",permalink:"/tutorials/sui-move-coin/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/sui-move-coin/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"SUI Coin Deployment",description:"SUI Coin Deployment",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"APTOS Coin Deployment",permalink:"/tutorials/aptos-move-coin/"},next:{title:"SUI Game Example",permalink:"/tutorials/sui-game/"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Create Template",id:"create-template",level:2},{value:"Source Code",id:"source-code",level:3},{value:"Compile The Source Code",id:"compile-the-source-code",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Check Out Deployed Contract",id:"check-out-deployed-contract",level:2},{value:"Calling Contract Functions",id:"calling-contract-functions",level:2},{value:"Try more...",id:"try-more",level:2},{value:"Reference",id:"reference",level:3}],m={toc:p};function d(e){var t=e.components,c=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sui-coin-deployment"},"SUI Coin Deployment"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"author-sm"},"May 23, 2023"),(0,r.kt)("div",{className:"author-div"},(0,r.kt)("div",{className:"author-avatars"},(0,r.kt)("a",{href:"https://github.com/kairoski03",target:"_blank"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/110001241?v=4"}))),(0,r.kt)("div",null,(0,r.kt)("span",{className:"author-name"},"Yoonsoo Jang"),(0,r.kt)("br",null),(0,r.kt)("span",{className:"author-sm"},"Software Engineer, DSRV ")))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This tutorial shows how to deploy your own coin."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/code/getting-started"},"here")," to get started.")),(0,r.kt)("h2",{id:"create-template"},"Create Template"),(0,r.kt)("p",null,"Create a simple example contract code written in Move.\nYou can create a sample contract ",(0,r.kt)("inlineCode",{parentName:"p"},"my_coin")," by selecting the template option\nand clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Template")," button."),(0,r.kt)("img",{src:n(31396).Z,alt:"01_template-code-sui-my-coin",style:{width:"480px"}}),(0,r.kt)("h3",{id:"source-code"},"Source Code"),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," function is executed only once during deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="my_coin.move"',title:'"my_coin.move"'},'module coin_sample::mycoin {\n    use std::option;\n    use sui::coin::{Self, Coin, TreasuryCap};\n    use sui::transfer;\n    use sui::tx_context::{Self, TxContext};\n\n    struct MYCOIN has drop {}\n\n    fun init(witness: MYCOIN, ctx: &mut TxContext) {\n        let (treasury_cap, metadata) = coin::create_currency<MYCOIN>(\n            witness,\n            2, // decimals\n            b"MC", // symbol\n            b"MYCOIN", // name\n            b"my coin", // description\n            option::none(),\n            ctx\n        );\n        transfer::public_freeze_object(metadata);\n        transfer::public_transfer(treasury_cap, tx_context::sender(ctx))\n    }\n\n    public entry fun mint(\n        treasury_cap: &mut TreasuryCap<MYCOIN>, amount:u64, recipient: address, ctx: &mut TxContext\n    ) {\n        coin::mint_and_transfer(treasury_cap, amount, recipient, ctx)\n    }\n\n    public entry fun burn(treasury_cap: &mut TreasuryCap<MYCOIN>, coin: Coin<MYCOIN>) {\n        coin::burn(treasury_cap, coin);\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Move.toml"',title:'"Move.toml"'},'[package]\nname = "CoinSample"\nversion = "0.0.1"\n\n[dependencies]\nSui = { git = "https://github.com/MystenLabs/sui.git", subdir="crates/sui-framework/packages/sui-framework/", rev = "testnet" }\n\n[addresses]\ncoin_sample = "0x0"\n')),(0,r.kt)("h2",{id:"compile-the-source-code"},"Compile The Source Code"),(0,r.kt)("p",null,"Select the project you want to compile. For now, let's choose ",(0,r.kt)("inlineCode",{parentName:"p"},"sui/my_coin")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Compile")," button."),(0,r.kt)("img",{src:n(36669).Z,alt:"02_project-to-compile-my-coin",style:{width:"480px"}}),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"If the compilation succeed, you can see mv file ",(0,r.kt)("inlineCode",{parentName:"p"},"mycoin.mv"),"."),(0,r.kt)("p",null,"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," button."),(0,r.kt)("img",{src:n(64386).Z,alt:"03_build-file-my-coin",style:{width:"480px"}}),(0,r.kt)("p",null,"and you can see wallet popup. Let's click ",(0,r.kt)("inlineCode",{parentName:"p"},"Send")," button."),(0,r.kt)("img",{src:n(71180).Z,alt:"04_sui-my-coin-wallet-popup",style:{width:"480px"}}),(0,r.kt)("h2",{id:"check-out-deployed-contract"},"Check Out Deployed Contract"),(0,r.kt)("p",null,"After deployment, you can see mycoin module and functions."),(0,r.kt)("img",{src:n(27434).Z,alt:"05_sui-my-coin-deployed",style:{width:"480px"}}),(0,r.kt)("h2",{id:"calling-contract-functions"},"Calling Contract Functions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," function. First parameter is TreasuryCap object id.\nYou can get the object id in the terminal log which shows for above deployment transaction result.\nSecond parameter is the amount of the minting coin.\nThird parameter is the receiver of the minting coin. For now, set the receiver to your account address. "),(0,r.kt)("img",{src:n(99297).Z,alt:"06_sui-my-coin-mint",style:{width:"960px"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After mint transaction, check if MYCOIN was minted in ",(0,r.kt)("a",{parentName:"p",href:"https://suiexplorer.com/"},"SUI Explorer"),"."),(0,r.kt)("img",{src:n(318).Z,alt:"07_sui-my-coin-minted",style:{width:"960px"}}))),(0,r.kt)("h2",{id:"try-more"},"Try more..."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"burn")," function and check it out in ",(0,r.kt)("a",{parentName:"li",href:"https://suiexplorer.com/"},"SUI Explorer"),"."),(0,r.kt)("li",{parentName:"ol"},"Read about One Time Witness (",(0,r.kt)("a",{parentName:"li",href:"https://examples.sui.io/basics/one-time-witness.html"},"OTW"),").")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://examples.sui.io/basics/one-time-witness.html"},"https://examples.sui.io/basics/one-time-witness.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MystenLabs/sui/tree/main/sui_programmability/examples/fungible_tokens"},"https://github.com/MystenLabs/sui/tree/main/sui_programmability/examples/fungible_tokens")))}d.isMDXComponent=!0},31396:function(e,t,n){t.Z=n.p+"assets/images/01_template-code-sui-my-coin-d4c0d17af850119df5ce5a7259eea133.png"},36669:function(e,t,n){t.Z=n.p+"assets/images/02_project-to-compile-my-coin-9374b6634c300008a74361229adad148.png"},64386:function(e,t,n){t.Z=n.p+"assets/images/03_build-file-my-coin-30f1824b01ab24be5c42312487bd50b9.png"},71180:function(e,t,n){t.Z=n.p+"assets/images/04_sui-my-coin-wallet-popup-cc7599d0839c3d94ecbf80ec1340876f.png"},27434:function(e,t,n){t.Z=n.p+"assets/images/05_sui-my-coin-deployed-94167babcabe59cac36e5df64253bfd0.png"},99297:function(e,t,n){t.Z=n.p+"assets/images/06_sui-my-coin-mint-e83fb709679131a34c4accdc2900fbd3.png"},318:function(e,t,n){t.Z=n.p+"assets/images/07_sui-my-coin-minted-bb6e6a2716e68ee4036b0c98b2b0017e.png"}}]);