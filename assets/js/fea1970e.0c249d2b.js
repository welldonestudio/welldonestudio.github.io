"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[6836],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,p=f["".concat(l,".").concat(d)]||f[d]||m[d]||o;return r?n.createElement(p,a(a({ref:t},s),{},{components:r})):n.createElement(p,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52991:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(67294),i=r(34334),o=r(54951),a=r(39960),c=r(13919),l=r(95999),u="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function f(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},r)}function d(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function p(e){var t,r=e.item,i=(0,o.Wl)(r);return i?n.createElement(d,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,i=e.item,a=(0,c.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(d,{href:i.href,icon:a,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function b(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,r=(0,o.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return n.createElement(g,e);var a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e}))})))}},46865:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=r(52991),c=r(54951),l=["components"],u={slug:"/tutorials",sidebar_position:5,title:"Tutorial",description:"Tutorial for Web3 Voyagers"},s=void 0,m={unversionedId:"tutorials/index",id:"tutorials/index",title:"Tutorial",description:"Tutorial for Web3 Voyagers",source:"@site/docs/tutorials/index.md",sourceDirName:"tutorials",slug:"/tutorials",permalink:"/tutorials",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/tutorials",sidebar_position:5,title:"Tutorial",description:"Tutorial for Web3 Voyagers"},sidebar:"tutorialSidebar",previous:{title:"Arbitrum Stylus Plugin",permalink:"/code/arbitrum-stylus/"},next:{title:"KMS",permalink:"/tutorials/kms/"}},f={},d=[],p={toc:d};function y(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"WELLDONE Studio's tutorial for Web3 Voyagers."),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);