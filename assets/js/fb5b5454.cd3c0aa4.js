"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[0],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7294),o=n(6010),a=n(8425),i=n(9960),c=n(3919),l=n(5999),u="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},n)}function m(e){var t=e.href,n=e.icon,a=e.title,i=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function f(e){var t=e.item,n=(0,a.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,o=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:o,title:n.label,description:null==i?void 0:i.description})}function v(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,o.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,a.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{key:t,item:e}))})))}},1309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(2991),c=n(8425),l=["components"],u={slug:"/Deploy-and-Run",sidebar_position:6},s="Deploy and Run",d={unversionedId:"Deploy-and-Run/index",id:"Deploy-and-Run/index",title:"Deploy and Run",description:"WELLDONE Wallet\uacfc Remix IDE\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \uac1c\ubc1c\ud55c\ub2e4\uba74, WELLDONE Studio\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Remix IDE Plugin\uc744 \ud1b5\ud574 \uc27d\uac8c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0, \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc544\ub798 \uac00\uc774\ub4dc\ub97c \ud1b5\ud574 \uae30\ubcf8\uc801\uc778 \uc124\uc815 \ubc29\ubc95\uacfc \ubc30\ud3ec \ubc0f \ud638\ucd9c \ubc29\uc2dd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/docs/Deploy-and-Run/index.md",sourceDirName:"Deploy-and-Run",slug:"/Deploy-and-Run",permalink:"/docs/Deploy-and-Run",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Deploy-and-Run/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/Deploy-and-Run",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Solana",permalink:"/docs/Sending Transactions/Solana"},next:{title:"Introduction",permalink:"/docs/Deploy-and-Run/Introduction"}},p={},m=[],f={toc:m};function y(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-and-run"},"Deploy and Run"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"WELLDONE Wallet\uacfc Remix IDE\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \uac1c\ubc1c\ud55c\ub2e4\uba74, WELLDONE Studio\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Remix IDE Plugin\uc744 \ud1b5\ud574 \uc27d\uac8c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0, \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc544\ub798 \uac00\uc774\ub4dc\ub97c \ud1b5\ud574 \uae30\ubcf8\uc801\uc778 \uc124\uc815 \ubc29\ubc95\uacfc \ubc30\ud3ec \ubc0f \ud638\ucd9c \ubc29\uc2dd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."))),(0,a.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);