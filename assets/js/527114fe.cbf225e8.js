"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[9153],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),a=n(34334),o=n(93651),i=n(39960),c=n(13919),l=n(95999),d="cardContainer_fWXF",u="cardTitle_rnsV",s="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",d)},n)}function f(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",s),title:i},i))}function m(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t,n=e.item,a=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:a,title:n.label,description:null==i?void 0:i.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,a.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},3243:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return f}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(52991),c=n(93651),l=["components"],d={slug:"/add-chain",sidebar_position:3,description:"How to Add a Chain to your WELLDONE Wallet"},u="Add Chain",s={unversionedId:"add-chain/index",id:"add-chain/index",title:"Add Chain",description:"How to Add a Chain to your WELLDONE Wallet",source:"@site/docs/add-chain/index.md",sourceDirName:"add-chain",slug:"/add-chain",permalink:"/add-chain",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/add-chain/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/add-chain",sidebar_position:3,description:"How to Add a Chain to your WELLDONE Wallet"},sidebar:"tutorialSidebar",previous:{title:"Near",permalink:"/wallet/developer-guide/execute-the-contract/near"},next:{title:"Manual",permalink:"/add-chain/manual"}},p={},f=[],m={toc:f};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-chain"},"Add Chain"),(0,o.kt)("p",null,"WELLDONE Wallet has the ",(0,o.kt)("strong",{parentName:"p"},"Add Chain")," function by default, which allows you to effortlessly add networks to your wallet. To use the tool, go to the WELLDONE Wallet ",(0,o.kt)("a",{parentName:"p",href:"https://addchain.welldonestudio.io"},"Add Chain Website")," or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.dapp")," method."),(0,o.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);