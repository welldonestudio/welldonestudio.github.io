"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[9361],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),a=n(34334),o=n(54951),i=n(39960),l=n(13919),c=n(95999),s="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function p(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:i},i))}function f(e){var t,n=e.item,a=(0,o.Wl)(n);return a?r.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,a=e.item,i=(0,l.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(p,{href:a.href,icon:i,title:a.label,description:null!=(n=a.description)?n:null==c?void 0:c.description})}function h(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function w(e){var t=e.className,n=(0,o.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){var t=e.items,n=e.className;if(!t)return r.createElement(w,e);var i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e}))})))}},40155:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(52991),l=n(54951),c=["components"],s={slug:"/wallet",sidebar_position:2,description:"Deploy and run smart contracts in multi-chain environments with WELLDONE Code"},u="Wallet",m={unversionedId:"wallet/index",id:"wallet/index",title:"Wallet",description:"Deploy and run smart contracts in multi-chain environments with WELLDONE Code",source:"@site/docs/wallet/index.md",sourceDirName:"wallet",slug:"/wallet",permalink:"/wallet",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/wallet",sidebar_position:2,description:"Deploy and run smart contracts in multi-chain environments with WELLDONE Code"},sidebar:"tutorialSidebar",previous:{title:"Neutron-CosmWasm",permalink:"/veriwell/verification-api/cosmwasm"},next:{title:"Manual",permalink:"/wallet/manual"}},d={},p=[],f={toc:p};function y(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wallet"},"Wallet"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WELLDONE Wallet")," is an integrated, non-custodial wallet that allows you to freely manage your assets across any network. Navigate smoothly between chains and explore what Web3 has to offer. All your eggs in one basket."),(0,o.kt)("p",null,"Currently supports a total of nine industry leaders: Aptos, Celestia, Celo, Cosmos, Ethereum, Juno, Klaytn, NEAR, Neon, Solana and Sui. Expect to see more EVM-compatible chains, Cosmos-based chains. And that\u2019s just the beginning."),(0,o.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);