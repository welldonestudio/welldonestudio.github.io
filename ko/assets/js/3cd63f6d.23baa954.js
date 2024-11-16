"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[1362],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return A}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),A=r,u=d["".concat(l,".").concat(A)]||d[A]||m[A]||p;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return A},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(83117),r=n(80102),p=(n(67294),n(3905)),o=["components"],i={sidebar_position:1,description:"NEAR \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589",keywords:["\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589","\ub2c8\uc5b4","\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8"]},l="NEAR",c={unversionedId:"code/deploy-and-run/near",id:"code/deploy-and-run/near",title:"NEAR",description:"NEAR \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/code/deploy-and-run/near.md",sourceDirName:"code/deploy-and-run",slug:"/code/deploy-and-run/near",permalink:"/ko/code/deploy-and-run/near",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/deploy-and-run/near.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"NEAR \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589",keywords:["\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec \ubc0f \uc2e4\ud589","\ub2c8\uc5b4","\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8"]},sidebar:"tutorialSidebar",previous:{title:"Arbitrum",permalink:"/ko/code/deploy-and-run/arbitrum"},next:{title:"Aptos",permalink:"/ko/code/deploy-and-run/aptos"}},s={},m=[{value:"WELLDONE Code\ub85c \uc811\uc18d",id:"welldone-code\ub85c-\uc811\uc18d",level:3},{value:"Create the Project",id:"create-the-project",level:2},{value:"Create Template",id:"create-template",level:3},{value:"New Project",id:"new-project",level:3},{value:"1. Rust\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0",id:"1-rust\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0",level:4},{value:"2. AssemblyScript\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0",id:"2-assemblyscript\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0",level:4},{value:"3. TypeScript\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0",id:"3-typescript\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0",level:4},{value:"4. JavaScript\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0",id:"4-javascript\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0",level:4},{value:"Compile the Contract",id:"compile-the-contract",level:2},{value:"1. Rust Compile",id:"1-rust-compile",level:3},{value:"2. CARGO-NEAR Compile (for Rust) - <code>Experimental</code>",id:"2-cargo-near-compile-for-rust---experimental",level:3},{value:"3. EMBED-ABI Compile (for Rust) - <code>Experimental</code>",id:"3-embed-abi-compile-for-rust---experimental",level:3},{value:"4. AssemblyScript Compile",id:"4-assemblyscript-compile",level:3},{value:"5. JavaScript &amp; TypeScript Compile",id:"5-javascript--typescript-compile",level:3},{value:"Deploy the Contract",id:"deploy-the-contract",level:2},{value:"Execute the Contract",id:"execute-the-contract",level:2}],d={toc:m};function A(e){var t=e.components,i=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"near"},"NEAR"),(0,p.kt)("h3",{id:"welldone-code\ub85c-\uc811\uc18d"},"WELLDONE Code\ub85c \uc811\uc18d"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/?#activate=wds-code-remix"},"WELLDONE Code \ud50c\ub7ec\uadf8\uc778")," \ub525 \ub9c1\ud06c\ub97c \ud1b5\ud574 \uc811\uc18d\ud558\uba74 ",(0,p.kt)("strong",{parentName:"p"},"WELLDONE Code")," \ud50c\ub7ec\uadf8\uc778\uc744 \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"create-the-project"},"Create the Project"),(0,p.kt)("p",null,"NEAR\ub294 AssemblyScript, Rust, JavaScript, TypeScript\ub85c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \uc5b8\uc5b4 \ubcc4\ub85c \ucee8\ud2b8\ub799\ud2b8\uc758 \uad6c\uc870\uac00 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 WELLDONE Code\ub294 NEAR\uc5d0 \uc785\ubb38\ud558\ub294 \uac1c\ubc1c\uc790\ub4e4\uc744 \ub3c4\uc640\uc8fc\uae30 \uc704\ud574 \ub450 \uac00\uc9c0 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"create-template"},"Create Template"),(0,p.kt)("p",null,"AssemblyScript, Rust, JavaScript, TypeScript\ub85c \uc791\uc131\ub41c \uac04\ub2e8\ud55c \uc0d8\ud50c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc6d0\ud558\ub294 \ud15c\ud50c\ub9bf \uc635\uc158\uc744 \uc120\ud0dd\ud55c \ud6c4 ",(0,p.kt)("inlineCode",{parentName:"p"},"Create Template")," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc0d8\ud50c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub354 \ub9ce\uc740 \uc608\uc81c \ucf54\ub4dc \uc18c\uc2a4\ub294 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/near-examples"},"NEAR Examples"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"template-code-near",src:n(79421).Z,title:"template-code-near",width:"318",height:"182"})),(0,p.kt)("h3",{id:"new-project"},"New Project"),(0,p.kt)("p",null,"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\uace0\uc790 \ud558\ub294 \uc5b8\uc5b4\uc5d0 \ub530\ub978 \ucee8\ud2b8\ub799\ud2b8 \uad6c\uc870\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc6d0\ud558\ub294 \uc5b8\uc5b4 \uc635\uc158\uc744 \uc120\ud0dd\ud558\uace0, \ud504\ub85c\uc81d\ud2b8\uc758 \uc774\ub984\uc744 \uc791\uc131\ud55c \ud6c4 ",(0,p.kt)("inlineCode",{parentName:"p"},"New Project")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \uc5b8\uc5b4\uc5d0 \uc54c\ub9de\uc740 \ucee8\ud2b8\ub799\ud2b8 \uad6c\uc870\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"new-project-near",src:n(20409).Z,title:"new-project-near",width:"318",height:"100"})),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"WELLDONE Code\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc744 \uc774\uc6a9\ud558\uc9c0 \uc54a\uace0\ub3c4 \uc9c1\uc811 \ucee8\ud2b8\ub799\ud2b8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8, \ub9ac\ubbf9\uc2a4 \ud50c\ub7ec\uadf8\uc778\uc744 \ud1b5\ud574 \ucef4\ud30c\uc77c \ubc0f \ubc30\ud3ec\ud558\uae30 \uc704\ud574\uc11c\ub294 near/ \ud3f4\ub354 \ub0b4\ubd80\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \uc0c8\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud55c\ub2e4\uba74 \ud504\ub85c\uc81d\ud2b8\uc758 \uad6c\uc870\ub294 \uc544\ub798\uc640 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4.")),(0,p.kt)("h4",{id:"1-rust\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0"},"1. Rust\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 Cargo.toml\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 lib.rs\n")),(0,p.kt)("h4",{id:"2-assemblyscript\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0"},"2. AssemblyScript\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u2514\u2500\u2500 assembly\n      \u251c\u2500\u2500 as_types.d.ts\n      \u251c\u2500\u2500 index.ts\n      \u2514\u2500\u2500 tsconfig.json\n")),(0,p.kt)("h4",{id:"3-typescript\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0"},"3. TypeScript\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 babel.config.json\n    \u251c\u2500\u2500 tsconfig.json\n    \u2514\u2500\u2500 src\n      \u2514\u2500\u2500 contract.ts\n")),(0,p.kt)("h4",{id:"4-javascript\ub85c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\uc791\uc131\ud558\ub294-\uacbd\uc6b0"},"4. JavaScript\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 babel.config.json\n    \u2514\u2500\u2500 src\n      \u2514\u2500\u2500 contract.js\n")),(0,p.kt)("h2",{id:"compile-the-contract"},"Compile the Contract"),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"WELLDONE Code\uc5d0\uc11c\ub294 \ud604\uc7ac Rust, CARGO-NEAR, EMBED-ABI, AseemblyScript, JavaScript, TypeScript \ucd1d 6\uac00\uc9c0 \ucef4\ud30c\uc77c \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud604\uc7ac\ub294 AMD \ucef4\ud30c\uc77c \uc11c\ubc84\ub9cc \uc9c0\uc6d0\ud558\uace0 \uc788\uc73c\uba70, \uace7 ARM \ucef4\ud30c\uc77c \uc11c\ubc84\ub3c4 \uc9c0\uc6d0\ud560 \uc608\uc815\uc785\ub2c8\ub2e4.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 1"),": ",(0,p.kt)("strong",{parentName:"p"},"PROJECT TO COMPILE")," \uc139\uc158\uc5d0\uc11c \ucef4\ud30c\uc77c\ud558\uace0\uc790 \ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 2"),": \ucef4\ud30c\uc77c \uc635\uc158\uc744 \uc120\ud0dd\ud55c \ud6c4 ",(0,p.kt)("inlineCode",{parentName:"p"},"Compile")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 3"),": \ucef4\ud30c\uc77c\uc774 \uc644\ub8cc\ub418\uba74 wasm \ud30c\uc77c\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"PROJECT TO COMPILE")," \uc139\uc158\uc5d0\uc11c \ucef4\ud30c\uc77c\ud558\uace0\uc790 \ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,p.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \ubc29\uc2dd\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Complie")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,p.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\uc774 \uc644\ub8cc\ub418\uba74, wasm file\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4.")),(0,p.kt)("img",{src:n(15479).Z,alt:"near-compile",style:{width:"318px"}}),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\ubc18\ud658\ub41c wasm \ud30c\uc77c\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"near/<YOUR_PROJECT_NAME>/out")," \ub514\ub809\ud1a0\ub9ac \uc548\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,p.kt)("p",{parentName:"admonition"},"\ub2e8, \uc218\uc815 \ud6c4 \ucef4\ud30c\uc77c\uc744 \ub2e4\uc2dc \ud574\uc57c \ud55c\ub2e4\uba74 \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc758 ",(0,p.kt)("inlineCode",{parentName:"p"},"out")," \ub514\ub809\ud1a0\ub9ac\ub97c \uc0ad\uc81c\ud558\uace0 \ub2e4\uc2dc \ucef4\ud30c\uc77c\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,p.kt)("h3",{id:"1-rust-compile"},"1. Rust Compile"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/commands/cargo-build.html"},(0,p.kt)("inlineCode",{parentName:"a"},"cargo build"))," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub7ec\uc2a4\ud2b8\ub85c \uc791\uc131\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4. \uc548\uc815\uc801\uc778 \ucef4\ud30c\uc77c\uc744 \uc81c\uacf5\ud558\uc9c0\ub9cc, \ucee8\ud2b8\ub799\ud2b8 \uc2e4\ud589 \uc2dc \uba54\uc18c\ub4dc\uc758 params\ub97c \uc9c1\uc811 \uc785\ub825\ud574\uc57c \ud558\ub294 \ubd88\ud3b8\ud568\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"2-cargo-near-compile-for-rust---experimental"},"2. CARGO-NEAR Compile (for Rust) - ",(0,p.kt)("inlineCode",{parentName:"h3"},"Experimental")),(0,p.kt)("p",null,"NEAR\uc5d0\uc11c \uacf5\uc2dd\uc801\uc73c\ub85c \uac1c\ubc1c \uc911\uc778 ",(0,p.kt)("inlineCode",{parentName:"p"},"cargo near"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4. \ucef4\ud30c\uc77c\uc774 \uc131\uacf5\ud558\uba74 \uc2e4\ud589 \uac00\ub2a5\ud55c wasm \ubc14\uc774\ub108\ub9ac \ud30c\uc77c\uacfc \ucee8\ud2b8\ub799\ud2b8\uc758 ABI\uac00 \ub2f4\uae34 json \ud30c\uc77c\uc774 \ud568\uaed8 \uc0dd\uc131\ub429\ub2c8\ub2e4. ",(0,p.kt)("inlineCode",{parentName:"p"},"cargo-near"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \ucef4\ud30c\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uc5ec \uac00\uc838\uc628 \uacbd\uc6b0\uc5d0\ub294 \uba54\uc18c\ub4dc\uc758 \ud30c\ub77c\ubbf8\ud130 \ud0c0\uc785\uc744 \uc54c \uc218 \uc788\uc5b4 \ub354\uc6b1 \ud3b8\ud558\uac8c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\ud558\uc9c0\ub9cc \ud574\ub2f9 \uae30\ub2a5\uc740 \uc544\uc9c1 \uac1c\ubc1c \uc911\uc778 \uae30\ub2a5\uc774\uae30 \ub54c\ubb38\uc5d0, ",(0,p.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," \ud30c\uc77c\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"near-sdk-rs")," \ubc84\uc804\uc744 ",(0,p.kt)("strong",{parentName:"p"},"4.1.0")," \uc774\uc0c1\uc73c\ub85c \uc9c0\uc815\ud574\uc8fc\uc5b4\uc57c \ud558\uace0 \ucef4\ud30c\uc77c \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 NEAR\uc758 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/near/abi"},"\uacf5\uc2dd \ub808\ud3ec\uc9c0\ud1a0\ub9ac"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"3-embed-abi-compile-for-rust---experimental"},"3. EMBED-ABI Compile (for Rust) - ",(0,p.kt)("inlineCode",{parentName:"h3"},"Experimental")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"cargo-near"),"\uc758 ",(0,p.kt)("inlineCode",{parentName:"p"},"-embed-abi")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 ABI\ub97c \ud3ec\ud568\uc2dc\ud0a8 wasm \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \ud574\ub2f9 \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucef4\ud30c\uc77c\ud55c wasm \ud30c\uc77c\uc744 \ubc30\ud3ec\ud55c \ucee8\ud2b8\ub799\ud2b8\uc758 \uacbd\uc6b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"At Address")," \ubc84\ud2bc\uc744 \ud1b5\ud574\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc784\ud3ec\ud2b8\ud560 \ub54c\ub3c4 ABI \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc635\uc158\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc740 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/near/cargo-near"},"cargo-near")," \ub808\ud3ec\uc9c0\ud1a0\ub9ac\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,p.kt)("h3",{id:"4-assemblyscript-compile"},"4. AssemblyScript Compile"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/AssemblyScript/asbuild"},(0,p.kt)("inlineCode",{parentName:"a"},"asbuild")),"\ub97c \uc0ac\uc6a9\ud558\uc5ec AssemblyScript\ub85c \uc791\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4. \uc548\uc815\uc801\uc778 \ucef4\ud30c\uc77c\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"5-javascript--typescript-compile"},"5. JavaScript & TypeScript Compile"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-js"},(0,p.kt)("inlineCode",{parentName:"a"},"near-sdk-js")),"\ub97c \uc0ac\uc6a9\ud558\uc5ec JavaScript \ud639\uc740 TypeScript\ub85c \uc791\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4."),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"JavaScript \ud639\uc740 TypeScript \ucef4\ud30c\uc77c \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, \ubc18\ub4dc\uc2dc \ucef4\ud30c\uc77c\ud558\uace0\uc790 \ud558\ub294 \ucee8\ud2b8\ub799\ud2b8 \ud30c\uc77c\uc758 \uc774\ub984\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc9c0\uc815\ud574\uc8fc\uc5b4\uc57c \uc815\uc0c1\uc801\uc73c\ub85c \ucef4\ud30c\uc77c\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,p.kt)("ul",{parentName:"admonition"},(0,p.kt)("li",{parentName:"ul"},"JavaScript: ",(0,p.kt)("inlineCode",{parentName:"li"},"contract.js")),(0,p.kt)("li",{parentName:"ul"},"TypeScript: ",(0,p.kt)("inlineCode",{parentName:"li"},"contract.ts")," "))),(0,p.kt)("h2",{id:"deploy-the-contract"},"Deploy the Contract"),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"WELLDONE Wallet\uc5d0\uc11c\ub294 \ud574\ub2f9 \uc9c0\uac11 \uc8fc\uc18c\uc5d0 \uc5f0\uacb0\ub41c \ub124\ud2b8\uc6cc\ud06c\ub97c \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud558\uc5ec \uac00\uc838\uc635\ub2c8\ub2e4. \ub530\ub77c\uc11c Deploy\ub97c \ud558\uae30 \uc774\uc804\uc5d0 \uba54\uc778\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0, \ud14c\uc2a4\ud2b8\ub137\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0 \ubbf8\ub9ac \uace0\ub824\ud574\ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 1"),": \ucef4\ud30c\uc77c\uc774 \uc644\ub8cc\ub41c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\uac00 \uc788\ub294 \uacbd\uc6b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"Deploy")," \ubc84\ud2bc\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 2"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"receive_id"),"\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \uacc4\uc815\uc758 ID\ub97c \uc785\ub825\ud558\uace0 ",(0,p.kt)("inlineCode",{parentName:"p"},"Deploy")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. ",(0,p.kt)("inlineCode",{parentName:"p"},"init function"),"\uc744 \ucd94\uac00\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"Deploy Option")," \uc744 \ud074\ub9ad\ud558\uc5ec \uba54\uc18c\ub4dc \uc774\ub984\uacfc \uc778\uc790\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,p.kt)("img",{src:n(89281).Z,alt:"deploy-option-near",style:{width:"318px"}}),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 3"),": \ub9cc\uc57d \ud574\ub2f9 \uacc4\uc815\uc5d0 \uc774\ubbf8 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\uac00 \uc788\ub2e4\uba74 \ud55c \ubc88 \ub354 \uc0ac\uc6a9\uc790\uc758 \ud655\uc778\uc744 \uc694\uccad\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 4"),": ",(0,p.kt)("strong",{parentName:"p"},"WELLDONE Wallet")," \ucc3d\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"Send Tx")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Deploy",src:n(59263).Z,title:"Deploy",width:"713",height:"870"})),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 5"),": \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec\uac00 \uc131\uacf5\ud558\uba74 \ud130\ubbf8\ub110\uc5d0 \ud2b8\ub79c\uc7ad\uc158 \uc131\uacf5 \ub85c\uadf8\uac00 \ucd9c\ub825\ub418\uace0, \ucee8\ud2b8\ub799\ud2b8\ub97c \uc2e4\ud589\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("img",{src:n(12549).Z,alt:"deployed-contract-near",style:{width:"318px"}}),(0,p.kt)("h2",{id:"execute-the-contract"},"Execute the Contract"),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"\ucee8\ud2b8\ub799\ud2b8\ub97c \uac00\uc838\uc624\ub294 \ubc29\ubc95\uc5d0\ub294 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("ol",{parentName:"admonition"},(0,p.kt)("li",{parentName:"ol"},"\uc704\uc758 \uacfc\uc815\uc744 \ud1b5\ud574 \ubc30\ud3ec\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc790\ub3d9\uc73c\ub85c \uac00\uc838\uc624\ub294 \ubc29\ubc95"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"At address")," \ubc84\ud2bc\uc744 \ud1b5\ud574 \uae30\uc874\uc5d0 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \uac00\uc838\uc624\ub294 \ubc29\ubc95"))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 1"),": \uc2e4\ud589\ud560 \uba54\uc18c\ub4dc\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 2"),": \ud544\uc694\uc5d0 \ub530\ub77c \ub9e4\uac1c\ubcc0\uc218\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 3"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"Call")," \ud568\uc218\uc77c \uacbd\uc6b0, \ud568\uc218 \ud638\ucd9c\uacfc \ud568\uaed8 \ubcf4\ub0bc NEAR \ud1a0\ud070 \uc591\uacfc GAS LIMIT\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Step 4"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"View")," \ub610\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"Call")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uba54\uc18c\ub4dc\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0, ",(0,p.kt)("strong",{parentName:"p"},"WELLDONE Wallet"),"\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"Send Tx")," \ubc84\ud2bc\uc744 \ub20c\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,p.kt)("img",{src:n(45580).Z,alt:"function-call",style:{width:"318px"}}),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("inlineCode",{parentName:"p"},"CARGO-NEAR")," \ud639\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"EMBED-ABI")," \uc635\uc158\uc744 \uc120\ud0dd\ud558\uc5ec \ucef4\ud30c\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud55c \uacbd\uc6b0\uc5d0\ub294 \uc2e4\ud589\ud560 \uba54\uc18c\ub4dc\uc758 \ud30c\ub77c\ubbf8\ud130\ub97c \uc9c1\uc811 \uc785\ub825\ud558\uc9c0 \uc54a\uace0 ABI\uc758 \uc815\ubcf4\ub97c \uc774\uc6a9\ud574\uc11c \ub354\uc6b1 \uac04\ub2e8\ud558\uac8c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("img",{src:n(56143).Z,alt:"cargo-near",style:{width:"318px"}}),(0,p.kt)("img",{src:n(48532).Z,alt:"cargo-near1",style:{width:"318px"}}),(0,p.kt)("img",{src:n(85635).Z,alt:"cargo-near2",style:{width:"318px"}}))}A.isMDXComponent=!0},56143:function(e,t,n){t.Z=n.p+"assets/images/cargo-near-c568fd71c61f12a85da6cc7d0dfa1287.png"},48532:function(e,t,n){t.Z=n.p+"assets/images/cargo-near1-63a86879b1ab80e22f7ffaeef8b8e0af.png"},85635:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAABwCAYAAABhNNfcAAABR2lDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8bAwyDCwMUgxiCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsgs63WXnVdfSy//Ui0neujiAjZM9SiAKyW1OBlI/wHitOSCohIGBsYUIFu5vKQAxO4AskWKgI4CsueA2OkQ9gYQOwnCPgJWExLkDGTfALIFkjMSgWYwvgCydZKQxNOR2FB7QYAn1CckyN9PwdjI3IKAc0kHJakVJSDaOb+gsigzPaNEwREYSqkKnnnJejoKRgZGRgwMoDCHqP4cBA5LRrF9CLH8JQwMFt8YGJgnIsSSpjAwbG9jYJC4hRBTmcfAwN/CwLDtUEFiUSLcAYzfWIrTjI0gbB57BgbWu///f9ZgYGCfyMDwd+L//78X////dzHQ/NsMDAcqAWelYRKOYoPxAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAAE7oAMABAAAAAEAAABwAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdHs0hlYAAAHWaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjExMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMTU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KNk+gkgAAC0dJREFUeAHt3etvFNcdxvHf2mu8xji+rb1gbLDXGFNCEkCkJoATCESBNCWBSpQkrdoikraR2iqqlIpX7R/QV1VfVKpU9UWlqmojhQqigEkgJCUmoSmEcjUBF1+wMTa+wvqy654z9mzWxgizs96dGX9H2szseM6Zcz5HenJmZnfxVFXXjMr4UlDkl7bmZvNtXGvfvBzxRCJxlaUQAgggMFlgNC1NQv19k3dP+31JadA4Nm3aJTgQAQQQcLCAdybaPjw0OBPVUicCCMxCAa8vKyG9npGw82ZkqsZxKZuQEaISBGatgEf1XL8Ss8zQZSxBl5jhoRYEZrOAfpyQuCyZobCbzQNE3xFAwI4ChJ0dR4U2IYBAwgUIu4STUiECCNhRgLCz46jQJgQQSLgAYZdwUipEAAE7ChB2dhwV2oQAAgkXIOwSTkqFCCBgRwHCzo6jQpsQQCDhAoRdwkmpEAEE7ChA2NlxVGgTAggkXICwSzgpFSKAgB0FCDs7jgptQgCBhAs4JuwWLwqKfrEggAAC8QjMyE88xdOQB5WpqKgyDvnf9asPOpS/I4AAAvcIpBf6S39j7s3Kniv9vb3m27jW3jnqt+xGp/5ZFp/6Eb7aDVtk3bqNMn9+iUTUz7evXlUj1xqvGOfKy82X9euflbU1tVLkD8jNmzdkeHhY1qxZJ8uXPyEFBX6pCFbJ5cvnZHQ0+mvyU7Zz587XpK+vVzZt3CqPLl8pEXV8Z+dN49jNz74gd+8OSP/4Tz2Xl1caxzQ1NYq/sFhqazeL1+uVLZtflKAK2dbWJlmxYpVs2rRNgsGlRrtCobtTnpedCCCQYAH1s+wjQ0NxV5rzSL5RNqmXsdu/vUt04NXVHZDGxq9UED0vgcACoyGZmT7ZseNV6entlrojByUcCctL278rHo9HLl44K83Njcbr6NH3JRwOP7Dji8rKjSCtrz8u586fVsH1LcnLKzDKBVTQ+nxzo3VkZ8+ToqLAeDsypWrpcinI98uRDw7IyMiwvLJ7j/gys+TQ+/uNgNR1sSCAgLMEkhZ2etZWXDxfDh3eLx0dbdLQcEHOnv0iqlW+uFJ6e3vk1KkTcutWuxw/Xic6hPz+Yukf6JNQKGS8urpuRcs8aOPkZ59Iu5odXrp0TpqarkmlmpVNZwmPjMin9R+pmWCHnD7zuWRkzJETnx6Tzq4OOXPmlBSqNrEggICzBJJ2zy5XhZ2+rNSXruZyu7vL3JQiFYSLFlXInh/9LLovJydX8vMLVTi2R/c9zEZ//9eX5L19PZI5zd+yv3v3TvQ0kXBEXUp/PYUOh0ckzZO0/0dE28EGAghYE0ha2OlZkg48fRlr3u8qWVAabX1vz211L+68HHzvnei+mdoYVYGbqe8tji8Z3jnmJmsEEHCpQNKmKPpS9NKl/8pOdV/uMXWzv3bDZimvWBJlva4eDpSp+2z6wYVecnIekZdfekXmqX+HVi8Dqrx+QKHv4Vldum53SmVltaSnpxuXqNXVK6xWSXkEELC5QNLCTjsc+eCgugd2SooDJer+XLecOHFM7R1butUlbd2RA7Jt6w554/W35LVXX1dPaRuiT0z1rM+XlSVv/vRt40mpWS6e9cmTH4t+SPHjN36pzrNX2tpb4qmGMggg4CABT1V1TfQzHAVFfmlrbrbUfJ+eian7WlMt+mMmV69elm51yaqXTZu2GjOrw4f/OeFwn3oyO6j+7dmpPl6Sph5DF6qPhxSPPz2dUFC90R8xuXDhy8m7p3wfe0k95QHsRACB1AukeyU0/jGxeBpTUho0iiXtnp0+mzcjQ3bt+qG0tFxX9+/yJCsrW97d/9d72h8aDN2zz9yhH3DosmXqYcZUS0R9LGW6YWfeO5yqHvYhgIC7BJI6s9N0+rNu+uMk+omn+aFhd5HSGwQQSKiAE2d2GkDfm9MvFgQQQCCZAkl9QJHMjnEuBBBAIFaAsIvVYBsBBFwrQNi5dmjpGAIIxAoQdrEabCOAgGsFCDvXDi0dQwCBWAHCLlaDbQQQcK0AYefaoaVjCCAQKzAj36Dw8BNIscZsI4CABYHo91kt1KGLMrOzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhgBh54xxopUIIGBRgLCzCEhxBBBwhoA3Fc3sKamS9mVrJZKekYrT3/ecaeFhCVysl9zWhvsewx8QQMCZAimZ2dkx6PTw6fDVbWNBAAH3CaQk7Ow2o4sdVju3LbadbCOAwMMJpCTsHq6JHI0AAghYFyDsrBtSAwIIOECAsHPAINFEBBCwLkDYWTekBgQQcIAAYeeAQaKJCCBgXYCws25IDQgg4AABws4Bg0QTEUDAuoDjwm7Fgnz5RiDPes+pAQEEZpWA48KuujhXlqoXCwIIIPAwArYNu7c3Py47Hy83+pLm8cgnv3hR9Do/K1MeyRz7Tu2aMr/Uv7Vdzu/7juxdW20c++utq+SZJfON7d/tfEp2rw4a2/u2PCFblpYY2/wHAQRmn4Btw+5oww15+bHFxog8ucgvVzp6JTI6KvMyveo1FnZ/3L1Bvv+XY7L6t+/K3qeqJViYI1+2dsmGirGwW1laIM9VLzTq2LhkgXzR3Dn7RpgeI4CAIZCSXz2Zjv3n1ztkWSDXmM29sLxM/n762oRipXnZsnJhodQGx4JNh+A3FxdJ3aUW+cGTVVKm/v7vpltSUZAjakIomd506bozOKEO3iCAwOwRsO3MTg/BR1faRM/q1lcEjBCLHZbsOV5REz0jDPXl7R/+dVHOtt6WzoFBmav+9oyayX14+YY0dvWry9eFcrqFWV2sH9sIzDYB287s9ED848w12VOzVFp67shQODJhbK7c6pWGjh7523+uSt/gsHE/bmBo2DjmQnu3fG9Npez684fGrO5X6v7f7z8+P6E8bxBAYHYJ2Hpm95m6lH1+Wam8o0Jv8hKOjMq+A6ek7s1tcugnW+XnTz8qN/tDxmHHrtwwHmT0hoaN2eHTlfPl+Fdtk6vgPQIIzCIBT1V1jboYHFsKivzS1txsvo1r7Zun7pFFJs7CJld08bk9k3fF/V7fj5ub4ZWBoZG465hccFndnybv4j0CCKRIYDQtTUL9fXGfvaQ0aJS19cxuOr3T9+0SGXTTOSfHIICA8wQcH3bOI6fFCCCQCgHCLhXqnBMBBJIuQNglnZwTIoBAKgQIu1Soc04EEEi6AGGXdHJOiAACqRAg7FKhzjkRQCDpAikJu7Tw2Dcdkt7baZzQzm2bRvM5BAEE7iOQkrALXKwXO4aKbpNuGwsCCLhPICXfjc1tbRD9YkEAAQSSJZCSmV2yOsd5EEAAAVOAsDMlWCOAgKsFCDtXDy+dQwABU4CwMyVYI4CAqwUIO1cPL51DAAFTgLAzJVgjgICrBQg7Vw8vnUMAAVOAsDMlWCOAgKsFCDtXDy+dQwABU4CwMyVYI4CAqwUIO1cPL51DAAFTgLAzJVgjgICrBQg7Vw8vnUMAAVOAsDMlWCOAgKsFCDtXDy+dQwABU4CwMyVYI4CAqwUIO1cPL51DAAFTgLAzJVgjgICrBf4PefA6tQPf+T8AAAAASUVORK5CYII="},89281:function(e,t,n){t.Z=n.p+"assets/images/deploy-option-near-fdbe115f2a885fcaf1f1f6ad4eb2995c.png"},12549:function(e,t,n){t.Z=n.p+"assets/images/deployed-contract-near-7efeed4abf28f4791c3f9d54dac7083e.png"},45580:function(e,t,n){t.Z=n.p+"assets/images/function-call-847ffb3dc6c1386cd8c482602eb68864.png"},15479:function(e,t,n){t.Z=n.p+"assets/images/project-compile-8d1e5eaf8fb296055fc02c6f0cb4825c.png"},59263:function(e,t,n){t.Z=n.p+"assets/images/deploy-near-5064c578366ef3cbf0eb88a7d241e2f7.png"},20409:function(e,t,n){t.Z=n.p+"assets/images/new-project-near-66c80e06b15f523ccd5a53569fbefb89.png"},79421:function(e,t,n){t.Z=n.p+"assets/images/template-code-near-9cb4d704a5d9a66a5b8058a4f7aa8e54.png"}}]);