"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[926],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2991:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(7294),a=t(6010),i=t(8425),o=t(9960),c=t(3919),s=t(5999),l="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function u(e){var n=e.href,t=e.children;return r.createElement(o.Z,{href:n,className:(0,a.Z)("card padding--lg",l)},t)}function m(e){var n=e.href,t=e.icon,i=e.title,o=e.description;return r.createElement(u,{href:n},r.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:i},t," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",p),title:o},o))}function f(e){var n=e.item,t=(0,i.Wl)(n);return t?r.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function g(e){var n,t=e.item,a=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(n=t.docId)?n:void 0);return r.createElement(m,{href:t.href,icon:a,title:t.label,description:null==o?void 0:o.description})}function v(e){var n=e.item;switch(n.type){case"link":return r.createElement(g,{item:n});case"category":return r.createElement(f,{item:n});default:throw new Error("unknown item type "+JSON.stringify(n))}}function y(e){var n=e.items,t=e.className;return r.createElement("section",{className:(0,a.Z)("row",t)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(n).map((function(e,n){return r.createElement("article",{key:n,className:"col col--6 margin-bottom--lg"},r.createElement(v,{key:n,item:e}))})))}},7393:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(2991),c=t(8425),s=["components"],l={slug:"/Sending Transactions",sidebar_position:5},d="Sending Transactions",p={unversionedId:"Sending Transactions/index",id:"Sending Transactions/index",title:"Sending Transactions",description:"Send Transactions\ub294 \ube14\ub85d\uccb4\uc778\uc758 \uacf5\uc2dd\uc801\uc778 action\uc785\ub2c8\ub2e4. \uc774 action\uc740 \uac04\ub2e8\ud55c \ud1a0\ud070 \uc804\uc1a1\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc73c\uba70, \uc0c8\ub85c\uc6b4 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc744 \uc0dd\uc131\ud558\uac70\ub098 \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \ube14\ub85d\uccb4\uc778\uc758 \uc0c1\ud0dc \ubcc0\uacbd\uc744 \uc720\ubc1c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. dApp\uc774 WELLDONE Wallet\uacfc \uc5f0\uacb0\ub418\uba74, dapp:sendTransaction \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 transaction \uc694\uccad\uc744 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Sending Transactions/index.md",sourceDirName:"Sending Transactions",slug:"/Sending Transactions",permalink:"/ko/docs/Sending Transactions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sending Transactions/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/Sending Transactions",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"About Universal Provider",permalink:"/ko/docs/provider-api/how-we-wrap-for-multichain"},next:{title:"Celo",permalink:"/ko/docs/Sending Transactions/Celo"}},u={},m=[],f={toc:m};function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-transactions"},"Sending Transactions"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Send Transactions\ub294 \ube14\ub85d\uccb4\uc778\uc758 \uacf5\uc2dd\uc801\uc778 action\uc785\ub2c8\ub2e4. \uc774 action\uc740 \uac04\ub2e8\ud55c \ud1a0\ud070 \uc804\uc1a1\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc73c\uba70, \uc0c8\ub85c\uc6b4 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc744 \uc0dd\uc131\ud558\uac70\ub098 \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \ube14\ub85d\uccb4\uc778\uc758 \uc0c1\ud0dc \ubcc0\uacbd\uc744 \uc720\ubc1c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. dApp\uc774 WELLDONE Wallet\uacfc \uc5f0\uacb0\ub418\uba74, ",(0,i.kt)("inlineCode",{parentName:"p"},"dapp:sendTransaction")," \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 transaction \uc694\uccad\uc744 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "))),(0,i.kt)("p",null,"Sending Transactions \uc740 \uacf5\ud1b5\uc801\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \ud3ec\ub9f7\uc744 \ud1b5\ud574 \uc774\ub904\uc9d1\ub2c8\ub2e4. \ud30c\ub77c\ubbf8\ud130\ub85c\ub294 \ud06c\uac8c ",(0,i.kt)("inlineCode",{parentName:"p"},"CHAIN_NAME"),"\uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"TRANSACTION_PARAMETER"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4.  ",(0,i.kt)("inlineCode",{parentName:"p"},"CHAIN_NAME"),"\uc740 \uc5f0\uacb0\ud558\uace0\uc790 \ud558\ub294 \uccb4\uc778\uc758 \uc774\ub984\uc744, ",(0,i.kt)("inlineCode",{parentName:"p"},"TRANSACTION_PARAMETER"),"\ub294 transaction\uc744 string\ud615\uc73c\ub85c \ubcc0\ud658\ud55c \uac12\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub2e4\uc591\ud55c \uccb4\uc778\ub4e4\uc758 transaction \ud3ec\ub9f7\uc774 \uc0c1\uc774\ud558\uae30 \ub54c\ubb38\uc5d0, WELLDONE Wallet\uc5d0\uc11c\ub294 \uc544\ub798\uc640 \uac19\uc774 string \ud615\uc73c\ub85c \ubcc0\ud658\ub41c \uaf34\uc744 \uacf5\ud1b5\uc73c\ub85c \ubc1b\uc544 \ud2b8\ub79c\uc81d\uc158\uc744 \uc804\uc1a1\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';\ntype TRANSACTION_PARAMETER = 'string'; \n\nconst response = await dapp.request(CHAIN_NAME ,{\n    method: 'dapp:sendTransaction',\n    params: [TRANSACTION_PARAMETER]\n  });\nconst txHash = response.hash;\n")),(0,i.kt)("p",null,"\uccb4\uc778 \ubcc4\ub85c \ub3d9\uc77c\ud55c \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc9c0\ub9cc, \uccb4\uc778 \ubcc4\ub85c \ubcf4\ub0b4\uc57c \ud558\ub294 parameters\uc5d0 \uc870\uae08\uc529 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc758 \uac01 \uccb4\uc778\ubcc4 \uc139\uc158\uc744 \ud1b5\ud574 \uccb4\uc778 \ubcc4\ub85c \uc5b4\ub5bb\uac8c \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \uc9c0 \uc0c1\uc138\ud558\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);