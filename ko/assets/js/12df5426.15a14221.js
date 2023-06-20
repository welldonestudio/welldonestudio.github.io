"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[9411],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),o=n(34334),a=n(54951),i=n(39960),c=n(13919),l=n(95999),s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function m(e){var t=e.href,n=e.icon,a=e.title,i=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function f(e){var t,n=e.item,o=(0,a.Wl)(n);return o?r.createElement(m,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function b(e){var t,n,o=e.item,i=(0,c.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(null!=(t=o.docId)?t:void 0);return r.createElement(m,{href:o.href,icon:i,title:o.label,description:null!=(n=o.description)?n:null==l?void 0:l.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(b,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,a.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){var t=e.items,n=e.className;if(!t)return r.createElement(v,e);var i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},24383:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(52991),c=n(54951),l=["components"],s={slug:"/code/sandbox",title:"Sandbox(Beta)",description:"Code sandbox"},u=void 0,d={unversionedId:"code/sandbox/index",id:"code/sandbox/index",title:"Sandbox(Beta)",description:"Code sandbox",source:"@site/docs/code/sandbox/index.md",sourceDirName:"code/sandbox",slug:"/code/sandbox",permalink:"/ko/code/sandbox",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/code/sandbox/index.md",tags:[],version:"current",frontMatter:{slug:"/code/sandbox",title:"Sandbox(Beta)",description:"Code sandbox"},sidebar:"tutorialSidebar",previous:{title:"Juno",permalink:"/ko/code/deploy-and-run/juno"},next:{title:"Aptos",permalink:"/ko/code/sandbox/aptos"}},p={},m=[],f={toc:m};function b(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Code sandbox where you can run contracts deployed on-chain.")),(0,a.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}b.isMDXComponent=!0}}]);