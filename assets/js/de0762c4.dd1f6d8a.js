"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[4646],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(67294),i=r(34334),o=r(93651),a=r(39960),c=r(13919),l=r(95999),u="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function p(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},r)}function m(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:a},a))}function f(e){var t=e.item,r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){var t,r=e.item,i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:i,title:r.label,description:null==a?void 0:a.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}},49950:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=r(52991),c=r(93651),l=["components"],u={slug:"/provider-api",sidebar_position:2,description:"How to use Provider API"},s="Provider API",d={unversionedId:"wallet/developer-guide/provider-api/index",id:"wallet/developer-guide/provider-api/index",title:"Provider API",description:"How to use Provider API",source:"@site/docs/wallet/developer-guide/provider-api/index.md",sourceDirName:"wallet/developer-guide/provider-api",slug:"/provider-api",permalink:"/provider-api",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/provider-api/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/provider-api",sidebar_position:2,description:"How to use Provider API"},sidebar:"tutorialSidebar",previous:{title:"Connecting to Wallet",permalink:"/wallet/developer-guide/getting-started/connecting-to-wallet"},next:{title:"Chain Names",permalink:"/wallet/developer-guide/provider-api/chain-names"}},p={},m=[],f={toc:m};function v(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"provider-api"},"Provider API"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We recommend you go through ",(0,o.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/getting-started"},"the basics")," before reading the material.")),(0,o.kt)("p",null,"WELLDONE Wallet injects a global API known as ",(0,o.kt)("inlineCode",{parentName:"p"},"window.dapp")," into the website that you visit. You may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.dapp")," API to request a user's account from a website, query data from a blockchain to which the user is linked, and let the user sign messages and transactions."),(0,o.kt)("p",null,"If you're wondering about how you can send requests to many chains with ",(0,o.kt)("inlineCode",{parentName:"p"},"WELLDONE Wallet")," and how we support a multichain environment, check out the documentation below."),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);