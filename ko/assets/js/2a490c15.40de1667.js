"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[35],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(7294),r=n(6010),i=n(8425),o=n(9960),d=n(3919),c=n(5999),l="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function u(e){var t=e.href,n=e.children;return a.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},n)}function m(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",s),title:i},n," ",i),o&&a.createElement("p",{className:(0,r.Z)("text--truncate",p),title:o},o))}function h(e){var t=e.item,n=(0,i.Wl)(t);return n?a.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t,n=e.item,r=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(m,{href:n.href,icon:r,title:n.label,description:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){var t=e.items,n=e.className;return a.createElement("section",{className:(0,r.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{key:t,item:e}))})))}},4260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(2991),d=n(8425),c=["components"],l={slug:"/add-chain",sidebar_position:3},s="Add Chain",p={unversionedId:"add-chain/index",id:"add-chain/index",title:"Add Chain",description:"WELLDONE Wallet\uc740 \uc9c0\uac11\uc5d0 \uc9c1\uc811 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub294 Add Chain \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. Add Chain\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 WELLDONE Wallet\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Add Chain \uc0ac\uc774\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uacfc window.dapp \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/add-chain/index.md",sourceDirName:"add-chain",slug:"/add-chain",permalink:"/ko/docs/add-chain",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/add-chain/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/add-chain",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Connecting to Wallet",permalink:"/ko/docs/getting-started/connecting-to-wallet"},next:{title:"Cosmos",permalink:"/ko/docs/add-chain/Cosmos"}},u={},m=[{value:"Using Add Chain Site",id:"using-add-chain-site",level:2},{value:"1. Connect Wallet",id:"1-connect-wallet",level:3},{value:"2. Add Chain",id:"2-add-chain",level:3},{value:"3. Suggest Chain",id:"3-suggest-chain",level:3},{value:"Using <code>dapp:addChain</code> Method",id:"using-dappaddchain-method",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-chain"},"Add Chain"),(0,i.kt)("p",null,"WELLDONE Wallet\uc740 \uc9c0\uac11\uc5d0 \uc9c1\uc811 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub294 ",(0,i.kt)("strong",{parentName:"p"},"Add Chain")," \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,i.kt)("strong",{parentName:"p"},"Add Chain"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 WELLDONE Wallet\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://addchain.welldonestake.io/ethereum"},"Add Chain")," \uc0ac\uc774\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"window.dapp")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"using-add-chain-site"},"Using Add Chain Site"),(0,i.kt)("p",null,"WELLLDONE Wallet\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://addchain.welldonestake.io/ethereum"},"Add Chain")," \uc0ac\uc774\ud2b8\ub97c \uc774\uc6a9\ud574\uc11c \uac04\ub2e8\ud558\uac8c \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"1-connect-wallet"},"1. Connect Wallet"),(0,i.kt)("p",null,"\uba3c\uc800 \uc0c1\ub2e8\uc758 ",(0,i.kt)("strong",{parentName:"p"},"Connect Wallet")," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc9c0\uac11\uc5d0 \ub300\ud55c \uc811\uadfc\uc744 \ud5c8\uc6a9\ud569\ub2c8\ub2e4. \uc131\uacf5\uc801\uc73c\ub85c Welldone Wallet\uc774 \uc5f0\uacb0\ub418\uc5c8\ub2e4\uba74 \ubc84\ud2bc\uc774 Add Chain\uc73c\ub85c \ubc14\ub014 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/70956926/177306163-75894ccd-b76e-429c-bb66-64e8976b6773.png"}),(0,i.kt)("h3",{id:"2-add-chain"},"2. Add Chain"),(0,i.kt)("p",null,"\ucd94\uac00\ud558\uace0 \uc2f6\uc740 \ub124\ud2b8\uc6cc\ud06c\uc758 ",(0,i.kt)("strong",{parentName:"p"},"Add to Wallet")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 Select node \ucc3d\uc5d0\uc11c \uc5f0\uacb0\ud558\uace0 \uc2f6\uc740 RPC \ub178\ub4dc\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub178\ub4dc\ub97c \uc120\ud0dd\ud55c \ud6c4, Add to wallet \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/70956926/177305919-4e3a5193-2555-4cf1-9356-87d3359a24e8.png"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"all-that-node"},"All That Node"),(0,i.kt)("p",{parentName:"div"},"\uc0ac\uc6a9\uc790\ub294 local node\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uace0, node provider\uac00 \uc81c\uacf5\ud574\uc8fc\ub294 rpc \ub178\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. DSRV\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.allthatnode.com/"},"All That Node")," \ub294 multi-chain node platform\uc73c\ub85c 20\uac1c\uac00 \ub118\ub294 \ub2e4\uc591\ud55c \ud504\ub85c\ud1a0\ucf5c\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. ATN\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub178\ub4dc\ub97c \uc774\uc6a9\ud55c\ub2e4\uba74 \ub2e8\uc77c \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc190\uc27d\uac8c \ub2e4\uc591\ud55c \uccb4\uc778\uc758 rpc \ub178\ub4dc\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("p",null,"\uadf8\ub7ec\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 Welldone Wallet Extension\uc774 \ud65c\uc131\ud654\ub418\uba74\uc11c Add Network \ucc3d\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4. \ud574\ub2f9 \ucc3d\uc5d0\uc11c ",(0,i.kt)("strong",{parentName:"p"},"Accept")," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc9c0\uac11\uc5d0 \ub124\ud2b8\uc6cc\ud06c\uac00 \uc131\uacf5\uc801\uc73c\ub85c \ucd94\uac00\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("strong",{parentName:"p"},"Deny")," \ubc84\ud2bc\uc744 \ub204\ub974\ub294 \uacbd\uc6b0 ",(0,i.kt)("em",{parentName:"p"},"'User denied add chain'")," \uc5d0\ub7ec\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/70956926/177306368-292f4e11-2f09-4dab-a304-a43a3c460693.png",width:"500"}),(0,i.kt)("h3",{id:"3-suggest-chain"},"3. Suggest Chain"),(0,i.kt)("p",null,"\uc0ac\uc774\ud2b8\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc0c8\ub85c\uc6b4 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucd94\uac00\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dsrvlabs/wds-addchain-data-list"},"\uae43\ud5c8\ube0c \uc800\uc7a5\uc18c"),"\uc5d0\uc11c \ucd94\uac00\ub97c \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uae43\ud5c8\ube0c \ub9ac\ub4dc\ubbf8\uc758 \uc0d8\ud50c \uc608\uc81c\ub97c \ucc38\uace0\ud558\uc5ec \ucd94\uac00\ud558\uace0\uc790 \ud558\ub294 \ub124\ud2b8\uc6cc\ud06c\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," \ub370\uc774\ud130\ub97c data \ud3f4\ub354 \uc548\uc758 \uc54c\ub9de\uc740 \ub124\ud2b8\uc6cc\ud06c \uc548\uc5d0 \ucd94\uac00\ud558\uc138\uc694. \ucee4\ubc0b\uc774 \uba38\uc9c0\ub418\uba74, \uc790\ub3d9\uc73c\ub85c \uc6b0\ub9ac\uc758 ",(0,i.kt)("a",{parentName:"p",href:"%22https://addchain.welldonestake.io/ethereum%22"},"AddChain")," \uc0ac\uc774\ud2b8\uc5d0 \ubc18\uc601\ub420 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"using-dappaddchain-method"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"dapp:addChain")," Method"),(0,i.kt)("p",null,"Welldone Wallet\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp:addChain")," \uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud558\uba74 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c Welldone Wallet\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc0c8\ub85c\uc6b4 \uccb4\uc778\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'window.dapp.request(chainName: string, (\n    method: "dapp:addChain",\n    params: [chainData]\n))\n')),(0,i.kt)("p",null,"\ud604\uc7ac ",(0,i.kt)("strong",{parentName:"p"},"Ethereum"),", ",(0,i.kt)("strong",{parentName:"p"},"Cosmos"),", ",(0,i.kt)("strong",{parentName:"p"},"Solana")," \uae30\ubc18\uc758 \uccb4\uc778\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc73c\uba70 \uc544\ub798\uc758 \uac01 \uccb4\uc778\ubcc4 \uc139\uc158\uc744 \ud1b5\ud574 \uccb4\uc778 \ubcc4\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"\uc5d0 \uc804\ub2ec\ud574\uc57c \ud558\ub294 \ub0b4\uc6a9\uc744 \uc0c1\uc138\ud558\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)(o.Z,{items:(0,d.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);