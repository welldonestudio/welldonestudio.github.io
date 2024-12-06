"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[715],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,p=m["".concat(c,".").concat(d)]||m[d]||f[d]||o;return r?n.createElement(p,a(a({ref:t},s),{},{components:r})):n.createElement(p,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),i=r(34334),o=r(54951),a=r(39960),l=r(13919),c=r(95999),u="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function m(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},r)}function d(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",f),title:a},a))}function p(e){var t,r=e.item,i=(0,o.Wl)(r);return i?n.createElement(d,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function v(e){var t,r,i=e.item,a=(0,l.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(d,{href:i.href,icon:a,title:i.label,description:null!=(r=i.description)?r:null==c?void 0:c.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}},13150:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return d}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=r(52991),l=r(54951),c=["components"],u={slug:"/veriwell/tutorials",sidebar_position:3,title:"Tutorial",description:"Tutorial for multi-language verification tool"},s=void 0,f={unversionedId:"veriwell/tutorials/index",id:"veriwell/tutorials/index",title:"Tutorial",description:"Tutorial for multi-language verification tool",source:"@site/docs/veriwell/tutorials/index.md",sourceDirName:"veriwell/tutorials",slug:"/veriwell/tutorials",permalink:"/ko/veriwell/tutorials",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/veriwell/tutorials/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/veriwell/tutorials",sidebar_position:3,title:"Tutorial",description:"Tutorial for multi-language verification tool"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/ko/veriwell/getting-started"},next:{title:"Starknet verification",permalink:"/ko/veriwell/tutorials/staknet/"}},m={},d=[],p={toc:d};function v(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);