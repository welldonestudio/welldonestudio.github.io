"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[35],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(7294),r=n(4334),i=n(3651),o=n(9960),d=n(3919),l=n(5999),c="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function u(e){var t=e.href,n=e.children;return a.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},n)}function h(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",s),title:i},n," ",i),o&&a.createElement("p",{className:(0,r.Z)("text--truncate",p),title:o},o))}function m(e){var t=e.item,n=(0,i.Wl)(t);return n?a.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t,n=e.item,r=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(h,{href:n.href,icon:r,title:n.label,description:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){var t=e.items,n=e.className;return a.createElement("section",{className:(0,r.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e}))})))}},4260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(2991),d=n(3651),l=["components"],c={slug:"/add-chain",sidebar_position:3},s="Add Chain",p={unversionedId:"add-chain/index",id:"add-chain/index",title:"Add Chain",description:"WELLDONE Wallet\uc740 \uc9c0\uac11\uc5d0 \uc9c1\uc811 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub294 Add Chain \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. Add Chain\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 WELLDONE Wallet\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Add Chain \uc0ac\uc774\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uacfc window.dapp \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/add-chain/index.md",sourceDirName:"add-chain",slug:"/add-chain",permalink:"/ko/docs/add-chain",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/add-chain/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/add-chain",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Connecting to Wallet",permalink:"/ko/docs/getting-started/connecting-to-wallet"},next:{title:"Cosmos",permalink:"/ko/docs/add-chain/Cosmos"}},u={},h=[{value:"Using Add Chain Site",id:"using-add-chain-site",level:2},{value:"1. Search Chain and Connect Wallet",id:"1-search-chain-and-connect-wallet",level:3},{value:"2. Add Chain",id:"2-add-chain",level:3},{value:"3. Suggest Chain",id:"3-suggest-chain",level:3},{value:"Using <code>dapp:addChain</code> Method",id:"using-dappaddchain-method",level:2}],m={toc:h};function f(e){var t=e.components,c=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-chain"},"Add Chain"),(0,i.kt)("p",null,"WELLDONE Wallet\uc740 \uc9c0\uac11\uc5d0 \uc9c1\uc811 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub294 ",(0,i.kt)("strong",{parentName:"p"},"Add Chain")," \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,i.kt)("strong",{parentName:"p"},"Add Chain"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 WELLDONE Wallet\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://addchain.welldonestudio.io"},"Add Chain")," \uc0ac\uc774\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"window.dapp")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"using-add-chain-site"},"Using Add Chain Site"),(0,i.kt)("p",null,"WELLLDONE Wallet\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://addchain.welldonestudio.io"},"Add Chain")," \uc0ac\uc774\ud2b8\ub97c \uc774\uc6a9\ud574\uc11c \uac04\ub2e8\ud558\uac8c \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"1-search-chain-and-connect-wallet"},"1. Search Chain and Connect Wallet"),(0,i.kt)("p",null,"\uba3c\uc800 \ucd94\uac00\ud558\uace0\uc790 \ud558\ub294 \uccb4\uc778\uc744 \uac80\uc0c9\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 ",(0,i.kt)("strong",{parentName:"p"},"Connect Wallet")," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc9c0\uac11\uc5d0 \ub300\ud55c \uc811\uadfc\uc744 \ud5c8\uc6a9\ud569\ub2c8\ub2e4. \uc131\uacf5\uc801\uc73c\ub85c WELLDONE Wallet\uc774 \uc5f0\uacb0\ub418\uc5c8\ub2e4\uba74 \ubc84\ud2bc\uc774 Add Chain\uc73c\ub85c \ubc14\ub014 \uac83\uc785\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Connect Wallet",src:n(1877).Z,title:"Connect Wallet",width:"3232",height:"2074"}),"\n",(0,i.kt)("img",{alt:"Connect Wallet",src:n(6817).Z,title:"Connect Wallet",width:"784",height:"1268"})),(0,i.kt)("h3",{id:"2-add-chain"},"2. Add Chain"),(0,i.kt)("p",null,"\ucd94\uac00\ud558\uace0 \uc2f6\uc740 \ub124\ud2b8\uc6cc\ud06c\uc758 ",(0,i.kt)("strong",{parentName:"p"},"Add to Wallet")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 Select node \ucc3d\uc5d0\uc11c \uc5f0\uacb0\ud558\uace0 \uc2f6\uc740 RPC \ub178\ub4dc\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub178\ub4dc\ub97c \uc120\ud0dd\ud55c \ud6c4, Add to wallet \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"Connect Wallet",src:n(2181).Z,title:"Add Chain to Wallet",width:"926",height:"808"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("h3",{parentName:"admonition",id:"all-that-node"},"All That Node"),(0,i.kt)("p",{parentName:"admonition"},"\uc0ac\uc6a9\uc790\ub294 local node\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uace0, node provider\uac00 \uc81c\uacf5\ud574\uc8fc\ub294 rpc \ub178\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. DSRV\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.allthatnode.com/"},"All That Node"),"\ub294 multi-chain node platform\uc73c\ub85c 20\uac1c\uac00 \ub118\ub294 \ub2e4\uc591\ud55c \ud504\ub85c\ud1a0\ucf5c\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. ATN\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub178\ub4dc\ub97c \uc774\uc6a9\ud55c\ub2e4\uba74 \ub2e8\uc77c \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc190\uc27d\uac8c \ub2e4\uc591\ud55c \uccb4\uc778\uc758 rpc \ub178\ub4dc\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\uadf8\ub7ec\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 WELLDONE Wallet Extension\uc774 \ud65c\uc131\ud654\ub418\uba74\uc11c Add Network \ucc3d\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4. \ud574\ub2f9 \ucc3d\uc5d0\uc11c ",(0,i.kt)("strong",{parentName:"p"},"Accept")," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc9c0\uac11\uc5d0 \ub124\ud2b8\uc6cc\ud06c\uac00 \uc131\uacf5\uc801\uc73c\ub85c \ucd94\uac00\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("strong",{parentName:"p"},"Deny")," \ubc84\ud2bc\uc744 \ub204\ub974\ub294 \uacbd\uc6b0 ",(0,i.kt)("em",{parentName:"p"},"'User denied add chain'")," \uc5d0\ub7ec\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/70956926/177306368-292f4e11-2f09-4dab-a304-a43a3c460693.png",width:"500"}),(0,i.kt)("h3",{id:"3-suggest-chain"},"3. Suggest Chain"),(0,i.kt)("p",null,"\uc0ac\uc774\ud2b8\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc0c8\ub85c\uc6b4 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dsrvlabs/wds-addchain-data-list"},"\uae43\ud5c8\ube0c \uc800\uc7a5\uc18c"),"\uc5d0\uc11c \ucd94\uac00\ub97c \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uae43\ud5c8\ube0c \ub9ac\ub4dc\ubbf8\uc758 \uc0d8\ud50c \uc608\uc81c\ub97c \ucc38\uace0\ud558\uc5ec \ucd94\uac00\ud558\uace0\uc790 \ud558\ub294 \ub124\ud2b8\uc6cc\ud06c\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," \ub370\uc774\ud130\ub97c data \ud3f4\ub354 \uc548\uc758 \uc54c\ub9de\uc740 \ub124\ud2b8\uc6cc\ud06c \uc548\uc5d0 \ucd94\uac00\ud558\uc138\uc694. \ucee4\ubc0b\uc774 \uba38\uc9c0\ub418\uba74, \uc790\ub3d9\uc73c\ub85c \uc6b0\ub9ac\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://addchain.welldonestudio.io"},"AddChain")," \uc0ac\uc774\ud2b8\uc5d0 \ubc18\uc601\ub420 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"using-dappaddchain-method"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"dapp:addChain")," Method"),(0,i.kt)("p",null,"WELLDONE Wallet\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp:addChain")," \uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud558\uba74 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c WELLDONE Wallet\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc0c8\ub85c\uc6b4 \uccb4\uc778\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'window.dapp.request(chainName: string, (\n    method: "dapp:addChain",\n    params: [chainData]\n))\n')),(0,i.kt)("p",null,"\ud604\uc7ac ",(0,i.kt)("strong",{parentName:"p"},"Ethereum"),", ",(0,i.kt)("strong",{parentName:"p"},"Cosmos"),", ",(0,i.kt)("strong",{parentName:"p"},"Solana")," \uae30\ubc18\uc758 \uccb4\uc778\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc73c\uba70 \uc544\ub798\uc758 \uac01 \uccb4\uc778\ubcc4 \uc139\uc158\uc744 \ud1b5\ud574 \uccb4\uc778 \ubcc4\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"\uc5d0 \uc804\ub2ec\ud574\uc57c \ud558\ub294 \ub0b4\uc6a9\uc744 \uc0c1\uc138\ud558\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)(o.Z,{items:(0,d.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},2181:function(e,t,n){t.Z=n.p+"assets/images/add_to_wallet-3b70ab9687d804362cde083c81ef00ff.png"},6817:function(e,t,n){t.Z=n.p+"assets/images/addchain-6f93a439aed00207f0196683a3889f36.png"},1877:function(e,t,n){t.Z=n.p+"assets/images/connect_wallet-1e22ddb67370d61f1d700a317d1488a7.png"}}]);