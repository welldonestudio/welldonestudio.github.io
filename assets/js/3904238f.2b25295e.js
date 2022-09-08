"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[2153],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7294),o=n(4334),i=n(3651),c=n(9960),a=n(3919),l=n(5999),u="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function m(e){var t=e.href,n=e.children;return r.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},n)}function p(e){var t=e.href,n=e.icon,i=e.title,c=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},n," ",i),c&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:c},c))}function f(e){var t=e.item,n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,o=(0,a.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:o,title:n.label,description:null==c?void 0:c.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,o.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e}))})))}},7360:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),c=n(2991),a=n(3651),l=["components"],u={slug:"/code",sidebar_position:4,title:"Code",description:"Deploy and run smart contracts in multi-chain environments with WELLDONE Code"},s="Deploy and Run",d={unversionedId:"code/index",id:"code/index",title:"Code",description:"Deploy and run smart contracts in multi-chain environments with WELLDONE Code",source:"@site/docs/code/index.md",sourceDirName:"code",slug:"/code",permalink:"/docs/code",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/code",sidebar_position:4,title:"Code",description:"Deploy and run smart contracts in multi-chain environments with WELLDONE Code"},sidebar:"tutorialSidebar",previous:{title:"Solana",permalink:"/docs/add-chain/developer-guide/solana"},next:{title:"Getting Started",permalink:"/docs/code/getting-started"}},m={},p=[],f={toc:p};function y(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-and-run"},"Deploy and Run"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you create contracts using WELLDONE Wallet and Remix IDE, you may quickly deploy and execute them using the WELLDONE Studio Remix IDE Plugin. Through the tutorial, WELLDONE Wallet gives you fundamental setup procedures as well as deploying a contract and triggering the methods on it.")),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);