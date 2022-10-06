"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[1362],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1,description:"Near \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589",keywords:["\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589","\ub2c8\uc5b4","\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8"]},p="Near",c={unversionedId:"code/deploy-and-run/near",id:"code/deploy-and-run/near",title:"Near",description:"Near \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/code/deploy-and-run/near.md",sourceDirName:"code/deploy-and-run",slug:"/code/deploy-and-run/near",permalink:"/ko/code/deploy-and-run/near",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/deploy-and-run/near.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Near \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589",keywords:["\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589","\ub2c8\uc5b4","\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8"]},sidebar:"tutorialSidebar",previous:{title:"Deploy and Run",permalink:"/ko/code/deploy-and-run"},next:{title:"Celo",permalink:"/ko/code/deploy-and-run/celo"}},d={},s=[{value:"Select a Chain",id:"select-a-chain",level:2},{value:"Connect",id:"connect",level:2},{value:"Create Project",id:"create-project",level:2},{value:"1. Rust\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0",id:"1-rust\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0",level:3},{value:"2. AssemblyScript\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0",id:"2-assemblyscript\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0",level:3},{value:"Compile",id:"compile",level:2},{value:"1. Near Compile (for Rust)",id:"1-near-compile-for-rust",level:3},{value:"2. Cargo-near Compile (for Rust) - <code>Experimental</code>",id:"2-cargo-near-compile-for-rust---experimental",level:3},{value:"3. AssemblyScript Compile (for AssemblyScript)",id:"3-assemblyscript-compile-for-assemblyscript",level:3},{value:"4. How to Compile",id:"4-how-to-compile",level:3},{value:"Deploy",id:"deploy",level:2},{value:"View and Call function",id:"view-and-call-function",level:2}],m={toc:s};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"near"},"Near"),(0,l.kt)("h2",{id:"select-a-chain"},"Select a Chain"),(0,l.kt)("p",null,"\uba3c\uc800 Select a Chain \ud654\uba74\uc5d0\uc11c NEAR\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Select Chain",src:n(568).Z,title:"Select Chain",width:"319",height:"424"})),(0,l.kt)("h2",{id:"connect"},"Connect"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WELLDONE Code"),"\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"WELLDONE Wallet"),"\uc744 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf?hl=ko"},"\u27a1\ufe0f WELLDONE Wallet \uc124\uce58\ud558\uae30")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WELLDONE wallet"),"\uc5d0 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/ko/wallet/manual/how-to-create-an-account/"},"NEAR account\ub97c \uc0dd\uc131"),"\ud55c \ud6c4 ",(0,l.kt)("inlineCode",{parentName:"p"},"Connect to WELLDONE")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc9c0\uac11\uacfc \uc5f0\uacb0\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Connect Wallet",src:n(910).Z,title:"Connect Wallet",width:"920",height:"747"})),(0,l.kt)("h2",{id:"create-project"},"Create Project"),(0,l.kt)("p",null,"AssemblyScript\ub098 Rust\ub85c \uc791\uc131\ub41c \uac04\ub2e8\ud55c \uc0d8\ud50c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc \ud0ec\ud50c\ub9bf\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"Create Template")," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc0d8\ud50c \ud15c\ud50c\ub9bf\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub354 \ub9ce\uc740 \ud15c\ud50c\ub9bf \uc18c\uc2a4\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://examples.near.org/"},"NEAR Examples"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Template Tree",src:n(5859).Z,title:"Template Tree",width:"2000",height:"1448"})),(0,l.kt)("p",null,"\ud639\uc740 \uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\uace0\uc790 \ud55c\ub2e4\uba74, New Project \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\ub2e8, \ub9ac\ubbf9\uc2a4 \ud50c\ub7ec\uadf8\uc778\uc744 \ud1b5\ud574 \ucef4\ud30c\uc77c \ubc0f \ubc30\ud3ec\ud558\uae30 \uc704\ud574\uc11c\ub294 near/ \ud3f4\ub354 \ub0b4\ubd80\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \uc0c8\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud55c\ub2e4\uba74 \ud504\ub85c\uc81d\ud2b8\uc758 \uad6c\uc870\ub294 \uc544\ub798\uc640 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"1-rust\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0"},"1. Rust\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"near/<YOUR_PROJECT_NAME>",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 Cargo.toml\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 lib.rs\n")))),(0,l.kt)("h3",{id:"2-assemblyscript\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0"},"2. AssemblyScript\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"near/<YOUR_PROJECT_NAME>",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 as_types.d.ts\n    \u251c\u2500\u2500 index.ts\n    \u2514\u2500\u2500 tsconfig.json\n")))),(0,l.kt)("h2",{id:"compile"},"Compile"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"WELLDONE Code\uc5d0\uc11c\ub294 \uc138 \uac00\uc9c0 \ucef4\ud30c\uc77c \uc635\uc158\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4. \ud604\uc7ac\ub294 AMD \ucef4\ud30c\uc77c \uc11c\ubc84\ub9cc \uc9c0\uc6d0\ud558\uace0 \uc788\uc73c\uba70, \uace7 ARM \ucef4\ud30c\uc77c \uc11c\ubc84\ub3c4 \uc9c0\uc6d0\ud560 \uc608\uc815\uc785\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"1-near-compile-for-rust"},"1. Near Compile (for Rust)"),(0,l.kt)("p",null,"NEAR\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ubcf8 compile\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4. \uc548\uc815\uc801\uc778 compile\uc744 \uc81c\uacf5\ud558\uc9c0\ub9cc, \ucee8\ud2b8\ub799\ud2b8 \ud14c\uc2a4\ud2b8 \uc2dc method\uc758 params\ub97c \uc9c1\uc811 \uc785\ub825\ud574\uc57c \ud558\ub294 \ubd88\ud3b8\ud568\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubd88\ud3b8\ud568\uc744 \ud574\uc18c\ud558\uace0\uc790 WELLDONE Code\uc5d0\uc11c\ub294 Raen Compile \uc635\uc158\ub3c4 \ud568\uaed8 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"2-cargo-near-compile-for-rust---experimental"},"2. Cargo-near Compile (for Rust) - ",(0,l.kt)("inlineCode",{parentName:"h3"},"Experimental")),(0,l.kt)("p",null,"NEAR\uc5d0\uc11c \uacf5\uc2dd\uc801\uc73c\ub85c \uac1c\ubc1c \uc911\uc778 ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo near"),"\ub97c \uc774\uc6a9\ud558\uc5ec Compile \ud569\ub2c8\ub2e4. Compile\uc774 \uc131\uacf5\ud558\uba74 \uc2e4\ud589 \uac00\ub2a5\ud55c wasm \ubc14\uc774\ub108\ub9ac \ud30c\uc77c\uacfc \ucee8\ud2b8\ub799\ud2b8\uc758 abi\uac00 \ub2f4\uae34 json \ud30c\uc77c\uc774 \ud568\uaed8 \uc0dd\uc131\ub429\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo-near"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \ucef4\ud30c\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uc5ec \uac00\uc838\uc628 \uacbd\uc6b0\uc5d0\ub294 \uba54\uc18c\ub4dc\uc758 \ud30c\ub77c\ubbf8\ud130 \ud0c0\uc785\uc744 \uc54c \uc218 \uc788\uc5b4 \ub354\uc6b1 \ud3b8\ud558\uac8c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc \ud574\ub2f9 \uae30\ub2a5\uc740 \uc544\uc9c1 \uac1c\ubc1c \uc911\uc778 \uae30\ub2a5\uc774\uae30 \ub54c\ubb38\uc5d0, ",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," \ud30c\uc77c\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"near-sdk-rs")," \ubc84\uc804\uc744 ",(0,l.kt)("strong",{parentName:"p"},"4.1.0-pre.3")," \uc774\uc0c1\uc73c\ub85c \uc9c0\uc815\ud574\uc8fc\uc5b4\uc57c \ud558\uace0 \ucef4\ud30c\uc77c \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 near\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/abi"},"\uacf5\uc2dd \ub808\ud3ec\uc9c0\ud1a0\ub9ac"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"cargo-near")," \ub97c \uc774\uc6a9\ud574\uc11c \ucef4\ud30c\uc77c\uc744 \ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"near-sdk")," \ubc84\uc804\uc744 \uc544\ub798\uc640 \uac19\uc740 \ud615\ud0dc\ub85c \uc9c0\uc815\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},'[dependencies]\nnear-sdk = { version = "4.1.0-pre.3", features = ["abi"] }\n'))),(0,l.kt)("h3",{id:"3-assemblyscript-compile-for-assemblyscript"},"3. AssemblyScript Compile (for AssemblyScript)"),(0,l.kt)("p",null,"AssemblyScript\ub85c \uc791\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c Compile \ud569\ub2c8\ub2e4. \uc548\uc815\uc801\uc778 Compile\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"4-how-to-compile"},"4. How to Compile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PROJECT TO COMPILE")," \uc139\uc158\uc5d0\uc11c \ucef4\ud30c\uc77c\ud558\uace0\uc790 \ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \ubc29\uc2dd\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Complie \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\uc774 \uc644\ub8cc\ub418\uba74, wasm file\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Project Compile",src:n(6750).Z,title:"Project Compile",width:"755",height:"1172"})),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\ub2e8, \uc218\uc815 \ud6c4 \ucef4\ud30c\uc77c\uc744 \ub2e4\uc2dc \ud574\uc57c \ud55c\ub2e4\uba74 near/out \ub514\ub809\ud1a0\ub9ac\ub97c \uc0ad\uc81c\ud558\uace0 \ub2e4\uc2dc \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"deploy"},"Deploy"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"WELLDONE Wallet\uc5d0\uc11c\ub294 \ud574\ub2f9 \uc9c0\uac11 \uc8fc\uc18c\uc5d0 \uc5f0\uacb0\ub41c \ub124\ud2b8\uc6cc\ud06c\ub97c \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud558\uc5ec \uac00\uc838\uc635\ub2c8\ub2e4. \ub530\ub77c\uc11c Deploy\ub97c \ud558\uae30 \uc774\uc804\uc5d0 \uba54\uc778\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0, \ud14c\uc2a4\ud2b8\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0 \ubbf8\ub9ac \uace0\ub824\ud574\ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub41c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\uac00 \uc788\ub294 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"receive_id"),"\uc5d0 \uac12\uc744 \uc785\ub825\ud558\uace0 \ub514\ud50c\ub85c\uc774 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec \uac70\ub798\uc5d0 \uc11c\uba85\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deploy",src:n(9136).Z,title:"Deploy",width:"1546",height:"1658"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ud6c4\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \uba54\uc18c\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deployed Contract",src:n(9756).Z,title:"Deployed Contract",width:"594",height:"1084"})),(0,l.kt)("h2",{id:"view-and-call-function"},"View and Call function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"At Address")," \ub0b4\ubd80\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc5ec \uae30\uc874\uc5d0 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud638\ucd9c\ud560 \uba54\uc18c\ub4dc\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud544\uc694\uc5d0 \ub530\ub77c \ub9e4\uac1c\ubcc0\uc218\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"View")," \ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"Call")," \uba85\ub839\uc744 \ud1b5\ud574 \uac12\uc744 \uc77d\uac70\ub098 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"View Function",src:n(8609).Z,title:"View Function",width:"1087",height:"2529"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Function Call",src:n(9241).Z,title:"Function Call",width:"1540",height:"1686"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"cargo-near")," \ub97c \uc120\ud0dd\ud558\uc5ec \ucef4\ud30c\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud55c \uacbd\uc6b0\uc5d0\ub294 \uc2e4\ud589\ud560 \uba54\uc18c\ub4dc\uc758 \ud30c\ub77c\ubbf8\ud130\ub97c \uc9c1\uc811 \uc785\ub825\ud558\uc9c0 \uc54a\uace0 abi\uc758 \uc815\ubcf4\ub97c \uc774\uc6a9\ud574\uc11c \ub354\uc6b1 \uac04\ub2e8\ud558\uac8c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"cargo-near",src:n(5889).Z,title:"cargo-near",width:"291",height:"568"})))}u.isMDXComponent=!0},5889:function(e,t,n){t.Z=n.p+"assets/images/cargo-near-b25c449dd8d1a7052452782a1b051f74.png"},910:function(e,t,n){t.Z=n.p+"assets/images/connect-wallet-near-58e6bb7f0301392815a8fc2875fb0fbe.png"},9136:function(e,t,n){t.Z=n.p+"assets/images/deploy-7063dae121cf1c68dc2c399de97f5673.png"},9756:function(e,t,n){t.Z=n.p+"assets/images/deployed-contract-08ab302ea78bd8bed75e6f1e8310f26b.png"},9241:function(e,t,n){t.Z=n.p+"assets/images/function-call-89370f39b6e2e8129077ebf160778507.png"},6750:function(e,t,n){t.Z=n.p+"assets/images/project-compile-6c0b2bb6b3eee9f747d086bdce6b1edb.png"},568:function(e,t,n){t.Z=n.p+"assets/images/select-chain-near-4023882489615296d7c18e427d62fd4e.png"},5859:function(e,t,n){t.Z=n.p+"assets/images/template-tree-fae5cf910cbdffafde1b3aa9d3f59853.png"},8609:function(e,t,n){t.Z=n.p+"assets/images/view-function-8cfdf7ad196578e362d36c482a6be386.png"}}]);