"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[4101],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(67294),a=n(34334),i=n(54951),l=n(39960),o=n(13919),s=n(95999),c="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},n)}function d(e){var t=e.href,n=e.icon,i=e.title,l=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},n," ",i),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:l},l))}function k(e){var t,n=e.item,a=(0,i.Wl)(n);return a?r.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function f(e){var t,n,a=e.item,l=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(d,{href:a.href,icon:l,title:a.label,description:null!=(n=a.description)?n:null==s?void 0:s.description})}function v(e){var t=e.item;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(k,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,n=(0,i.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){var t=e.items,n=e.className;if(!t)return r.createElement(g,e);var l=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},l.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e}))})))}},5799:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(52991),o=n(54951),s=["components"],c={title:"KMS",description:"Sending Transactions using @dsrv/kms"},u="@dsrv/kms",m={unversionedId:"tutorials/kms/index",id:"tutorials/kms/index",title:"KMS",description:"Sending Transactions using @dsrv/kms",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/kms/index.md",sourceDirName:"tutorials/kms",slug:"/tutorials/kms/",permalink:"/ko/tutorials/kms/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/kms/index.md",tags:[],version:"current",frontMatter:{title:"KMS",description:"Sending Transactions using @dsrv/kms"},sidebar:"tutorialSidebar",previous:{title:"SUI Coin Deployment",permalink:"/ko/tutorials/sui-move-coin/"},next:{title:"Aptos",permalink:"/ko/tutorials/kms/aptos"}},p={},d=[{value:"Sign Transaction General",id:"sign-transaction-general",level:2},{value:"1. \uc554\ud638\ud654 \uae30\ubcf8",id:"1-\uc554\ud638\ud654-\uae30\ubcf8",level:3},{value:"2. \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1",id:"2-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1",level:3},{value:"Tutorial",id:"tutorial",level:2}],k={toc:d};function f(e){var t=e.components,c=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dsrvkms"},"@dsrv/kms"),(0,i.kt)("div",null,(0,i.kt)("span",{className:"author-sm"},"November 11, 2022"),(0,i.kt)("div",{className:"author-div"},(0,i.kt)("div",{className:"author-avatars"},(0,i.kt)("a",{href:"https://github.com/Nahee-Park",target:"_blank"},(0,i.kt)("img",{src:"https://avatars.githubusercontent.com/u/81923229?v=4"}))),(0,i.kt)("div",null,(0,i.kt)("span",{className:"author-name"},"Nahee Park"),(0,i.kt)("br",null),(0,i.kt)("span",{className:"author-sm"},"Software Engineer, DSRV ")))),(0,i.kt)("h2",{id:"sign-transaction-general"},"Sign Transaction General"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@dsrv/kms"},"@dsrv/kms")," \ud328\ud0a4\uc9c0\ub97c \uc774\uc6a9\ud574 \uccb4\uc778\ubcc4\ub85c transaction\uc744 \uc804\uc1a1\ud558\ub294 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0 \uc55e\uc11c, transaction \uc11c\uba85\uc5d0 \ub300\ud55c \uac1c\ub150\uc801\uc778 \ub0b4\uc6a9\uc744 \uba3c\uc800 \uc0b4\ud3b4\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"1-\uc554\ud638\ud654-\uae30\ubcf8"},"1. \uc554\ud638\ud654 \uae30\ubcf8"),(0,i.kt)("p",null,"\uc554\ud638\ud654\ub294 \uc911\uc694\ud55c \ubb38\uc11c\ub97c \uc77d\uae30 \uc5b4\ub824\uc6b4 \uac12\uc73c\ub85c \ubcc0\ud658\ud558\uc5ec \uc81c 3\uc790\uac00 \ubcfc\uc218 \uc5c6\ub3c4\ub85d \ud558\uac70\ub098, \uacf5\uac1c\ub41c \ubb38\uc11c\uc758 \uc9c4\uc704\uc5ec\ubd80\ub97c \uac00\ub9ac\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \uae30\uc220\uc785\ub2c8\ub2e4. \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 \ube44\ub300\uce6d \uc554\ud638\ud654(Asymmetric Key Cryptography)\ub294 \uc554\ud638\ud654\uc640 \ubcf5\ud638\ud654\uc5d0 \uc11c\ub85c \ub2e4\ub978 \ud0a4\ub4e4\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc744 \ub73b\ud569\ub2c8\ub2e4. \uc774 \ub54c \uc11c\ub85c \ub2e4\ub978 \ub450 \uac1c\uc758 \ud0a4\ub4e4\uc744 \uac1c\uc778\ud0a4, \uacf5\uac1c\ud0a4\ub77c\uace0 \ud558\ub294\ub370, \uc774\uac83 \ub54c\ubb38\uc5d0 \uacf5\uac1c\ud0a4 \ubc29\uc2dd(Public-key Encryption)\uc774\ub77c\uace0 \uc77c\uceeb\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uadf8\ub7fc \uc774\ub7ec\ud55c \uc554\ud638\ud654 \uae30\uc220\uc774 \ubb38\uc11c\uc758 \uc9c4\uc704\ub97c \uac00\ub9b4 \ub54c \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ub420\uae4c\uc694? \uc544\ub798 \uc608\uc2dc\ub97c \ud1b5\ud574 \ud568\uaed8 \ubd05\uc2dc\ub2e4.\n",(0,i.kt)("img",{alt:"kms-tutorial",src:n(86858).Z,title:"kms-tutorial",width:"4096",height:"3120"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Alice\ub294 \ube44\ub300\uce6d \uc54c\uace0\ub9ac\uc998\uc73c\ub85c \ud55c \uc30d\uc758 \ud0a4\uc30d\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Alice\ub294 \uc790\uc2e0\uc758 \uc2e0\uc6d0\uc744 \ud37c\ube14\ub9ad\ud0a4\ub97c \ud1b5\ud574 \uc99d\uba85\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ol"},"Alice\ub294 \uc804\uc1a1\ud560 \ud3c9\ubb38\uc744 \ud574\uc2dc\ud558\uc5ec \uace0\uc815 \uae38\uc774\ub85c \ubcc0\ud658 \ud569\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud3c9\ubb38 \uc548\uc5d0\ub294 \uc791\uc131\uc790\uac00 \ub204\uad6c\uc778\uc9c0 \uc54c \uc218 \uc788\ub294 \ud56d\ubaa9\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud56d\ubaa9\uc758 \ub0b4\uc6a9\uc740 \ud37c\ube14\ub9ad\ud0a4 \uc785\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ol"},"\uace0\uc815\uae38\uc774\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \ubb38\uc7a5\uc758 \ud574\uc2dc\ub97c Alice\uc758 \uac1c\uc778\ud0a4\ub85c \uc11c\uba85\uc744 \ud569\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc774\ub54c Alice\ub294 \ubb38\uc7a5\uc758 \uc2dc\uadf8\ub2c8\uccd0\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ol"},"Alice\ub294 \uc11c\uba85\ub41c \uba54\uc2dc\uc9c0(\uc2dc\uadf8\ub2c8\uccd0\uc640 \ud3c9\ubb38)\ub97c Bob\uc5d0\uac8c \ubcf4\ub0b4\uc90d\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"Bob\uc740 \uc2dc\uadf8\ub2c8\uccd0\uc640 \ud3c9\ubb38\uc548\uc5d0 \ub4e4\uc5b4 \uc788\ub294 \ud37c\ube14\ub9ad\ud0a4\ub97c \uc774\uc6a9\ud574 \ubcf5\ud638\ub97c \ud558\uba74 \ud3c9\ubb38\uc758 \ud574\uc2dc\uac12\uc744 \ub2e4\uc2dc \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc774\ub54c Bob\uc774 \ud3c9\ubb38\uc744 \ud574\uc2dc\ud55c \uac12\uacfc \ubcf5\ud638\ub97c \ud1b5\ud574 \uc5bb\uc740 \ud574\uc2dc\uac12\uc774 \uac19\ub2e4\uba74 Bob\uc740 Alice\uac00 \ubb38\uc7a5\uc744 \ub9cc\ub4e4\uc5c8\ub2e4\ub294 \uac83\uc744 \ud655\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,i.kt)("p",null,"\uc774 \uacf5\uac1c\ud0a4 \ubc29\uc2dd\uc758 \ud575\uc2ec\uc740, Alice\uc758 \uac1c\uc778\ud0a4\ub85c\ub9cc \uc11c\uba85\ub41c \uba54\uc2dc\uc9c0\ub294 Alice\uc758 \ud37c\ube14\ub9ad\ud0a4\ub85c\ub9cc \ubcf5\ud638\ud654\ub420 \uc218 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uc0ac\ub78c\uc774 \uc11c\uba85\ud574\uc11c \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\ub294 \uacbd\uc6b0, Alice\uc758 \ud37c\ube14\ub9ad\ud0a4\ub85c \ubcf5\ud638\ud654\ud558\uc600\uc744 \ub54c \uc6d0\ubb38\uc774 \uc81c\ub300\ub85c \ub098\uc624\uc9c0 \uc54a\uac8c \ub418\ubbc0\ub85c \uc9c4\uc704\uc5ec\ubd80\ub97c \ud310\ubcc4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"2-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1"},"2. \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1"),(0,i.kt)("p",null,"\uadf8\ub7fc \uc704\uc5d0\uc11c \uc0b4\ud3b4\ubcf8 \uc9c4\uc704\ub97c \uac00\ub9ac\ub294 \ube44\ub300\uce6d \uc554\ud638\ud654 \uae30\uc220\uc774 \ube14\ub85d\uccb4\uc778\uc5d0\uc11c\ub294 \uc5b4\ub5bb\uac8c \uc751\uc6a9\ub420\uae4c\uc694? \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc554\ud638\ud654\ub294 \uc8fc\ub85c \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0bc \ub54c \ud2b8\ub79c\uc7ad\uc158\uc758 \uc9c4\uc704\uc5ec\ubd80\ub97c \uac00\ub9ac\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub9cc\uc57d Alice\uc758 \uacc4\uc88c\uc758 \ub3c8\uc744 Bob\uacc4\uc88c\ub85c \uc804\uc1a1 \ud558\uae30 \uc704\ud574 \uc5b4\ub5a4 \uc0ac\uc6a9\uc790\uac00 \ube14\ub85d\uccb4\uc778 \ub178\ub4dc\ub85c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud55c \uacbd\uc6b0, \ud574\ub2f9 \uc0ac\uc6a9\uc790\uac00 Alice \uacc4\uc88c\uc758 \uc815\ub2f9\ud55c \uc18c\uc720\uc8fc\uc778\uc9c0 \ub178\ub4dc\ub294 \ud310\ub2e8\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub97c \uc880 \ub354 \uc27d\uac8c \uc774\ud574\ud558\uae30 \uc704\ud574 \uc544\ub798 \uc608\uc2dc\ub97c \ud1b5\ud574 \ud568\uaed8 \uc0b4\ud3b4\ubd05\uc2dc\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc5b4\ub5a4 \uc0ac\uc6a9\uc790\uac00 \ubcf8\uc778\uc758 \uacc4\uc88c\uc5d0\uc11c Bob\uc758 \uacc4\uc88c\ub85c \uc5bc\ub9c8\uc758 \uae08\uc561\uc744 \uc774\ub3d9\ud55c\ub2e4\ub294 \ub0b4\uc6a9\uc758 \ud2b8\ub79c\uc7ad\uc158 \ud3c9\ubb38\uc744 \uac1c\uc778\ud0a4\ub85c \uc11c\uba85\ud558\uc5ec \uc554\ud638\ud654\ud569\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud568\uc73c\ub85c\uc368 \uc2dc\uadf8\ub2c8\uccd0\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("li",{parentName:"ol"},"\uc11c\uba85\ub41c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc81c 3\uc790\uc778 \ub178\ub4dc\ub85c \ubcf4\ub0c5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ub178\ub4dc\ub294 \uc774\uc81c \uc11c\uba85\ub41c \ud2b8\ub79c\uc7ad\uc158\uc758 \uc9c4\uc704\uc5ec\ubd80\ub97c \ud310\ub2e8\ud560 \uac83\uc785\ub2c8\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ub178\ub4dc\ub294 \uc791\uc131\uc790\uac00 Alice\uac00 \uc11c\uba85\ud55c \ud2b8\ub79c\uc7ad\uc158\uc774\ub77c\uace0 \uac00\uc815\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 Alice\uc758 \ud37c\ube14\ub9ad\ud0a4\ub97c \uc774\uc6a9\ud574 \ud574\ub2f9 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf5\ud638\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"Alice\uc758 \ud37c\ube14\ub9ad\ud0a4\ub85c \ubcf5\ud638\ud55c \ud2b8\ub79c\uc7ad\uc158 \uc6d0\ubb38\uc774 \uc6d0\ubcf8 \ud2b8\ub79c\uc7ad\uc158\uacfc \uc77c\uce58\ud558\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud1b5\ud574 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc9c4\uc704\ub97c \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,i.kt)("p",null,"\ubaa8\ub4e0 \ube14\ub85d\uccb4\uc778\ub4e4\uc740 \ud2b8\ub79c\uc7ad\uc158\uc744 byteArray\ub85c \ubc14\uafb8\ub294 serialize\uc758 \ud45c\uc900\ub4e4\uc774 \uc874\uc7ac\ud558\uba70, \uccb4\uc778\ub4e4\uc758 sdk\ub97c \ubcf4\uba74 \ud2b8\ub79c\uc7ad\uc158\ub9c8\ub2e4 \ud574\ub2f9 serialize, deserialize \ud568\uc218\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc758 serialize\ub97c \ud1b5\ud574 \uc5bb\uc740 byteArray\uac00 \ubc14\ub85c \uc11c\uba85\uc744 \ud558\uae30\uc804\uc758 \ud3c9\ubb38\uc774\uba70, \uc5ec\ub7ec\ubd84\ub4e4\uc758 \uc9c0\uac11\uc5d0 \ub4e4\uc5b4 \uc788\ub294 \ud504\ub77c\uc774\ube57\ud0a4\uc640 \ud37c\ube14\ub9ad\ud0a4\ub4e4\uc774 \uc11c\uba85\uc744 \ud558\uae30 \uc704\ud55c \ud0a4\uc640 \uc790\uc2e0\uc774 \uc18c\uc720\ud558\uace0 \uc788\ub294 \ube14\ub85d\uccb4\uc778\uc758 \uc8fc\uc18c\uc785\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\uc774\ubc88 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc6b0\ub9ac\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@dsrv/kms"},"@dsrv/kms")," \ud328\ud0a4\uc9c0\ub97c \uc774\uc6a9\ud574, \uccb4\uc778\ubcc4\ub85c transaction \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcfc \uc608\uc815\uc785\ub2c8\ub2e4. \uadf8 \uc804\uc5d0 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@dsrv/kms"},"@dsrv/kms"),"\ub97c \uc124\uce58\ud574\uc8fc\uc138\uc694.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# using npm\nnpm install @dsrv/kms\n\n# using yarn\nyarn add @dsrv/kms\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@dsrv/kms")," transaction\uc744 \uc804\uc1a1\ud558\uae30 \uc704\ud55c \uad6c\uccb4\uc801\uc778 \uacfc\uc815\uc740 \uccb4\uc778\ubcc4\ub85c \uc0c1\uc774\ud558\uc9c0\ub9cc, \ub300\ubd80\ubd84\uc758 \uccb4\uc778\uc740 \uacf5\ud1b5\uc801\uc778 \ud504\ub85c\uc138\uc2a4\ub97c \ub530\ub985\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"SDK\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac01 \uccb4\uc778\uc5d0 \ub300\ud55c raw transaction\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"@dsrv/kms"),"\uc758 ",(0,i.kt)("inlineCode",{parentName:"li"},"signTx"),"\uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 signature\ub97c \ubc1b\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"@dsrv/kms"),"\ub97c \ud1b5\ud574 \uc0dd\uc131\ud55c signature\uc640 \uc55e\uc11c \uc0dd\uc131\ud55c raw transaction\uc744 \ud569\uccd0 signed transaction\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uccb4\uc778\ubcc4\ub85c SDK\ub97c \ud1b5\ud574 signed transaction\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\uccb4\uc778\ubcc4 \uc139\uc158\uc744 \ud1b5\ud574 \uccb4\uc778\ubcc4\ub85c \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \uc0c1\uc138\ud55c \ubc29\uc2dd\uacfc \uc608\uc81c\ub97c \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\ud574\ub2f9 \ud29c\ud1a0\ub9ac\uc5bc\uc740 HTML, CSS \ubc0f JavaScript\uc5d0 \ub300\ud55c \uae30\ubcf8\uc801\uc778 \uc9c0\uc2dd\uc744 \uac16\ucd94\uace0 \uacc4\uc2e0 \ubd84\uc774 \uc77d\uc73c\uc2dc\uae38 \ucd94\ucc9c\ud569\ub2c8\ub2e4.")),(0,i.kt)(l.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},86858:function(e,t,n){t.Z=n.p+"assets/images/kms-tutorial-13f5c0b905bbb9703b75b17a522a9de4.png"}}]);