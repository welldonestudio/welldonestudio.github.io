"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[1168],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),s=r,h=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1,keywords:["WELLDONE Wallet Chain Names","WELLDONE Wallet HD Path"],description:"The chain name and HD Path that we support"},p="Chain Names",d={unversionedId:"wallet/developer-guide/provider-api/chain-names",id:"wallet/developer-guide/provider-api/chain-names",title:"Chain Names",description:"The chain name and HD Path that we support",source:"@site/docs/wallet/developer-guide/provider-api/chain-names.md",sourceDirName:"wallet/developer-guide/provider-api",slug:"/wallet/developer-guide/provider-api/chain-names",permalink:"/docs/wallet/developer-guide/provider-api/chain-names",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/provider-api/chain-names.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:["WELLDONE Wallet Chain Names","WELLDONE Wallet HD Path"],description:"The chain name and HD Path that we support"},sidebar:"tutorialSidebar",previous:{title:"Provider API",permalink:"/docs/provider-api"},next:{title:"Methods",permalink:"/docs/wallet/developer-guide/provider-api/method"}},u={},m=[],c={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"chain-names"},"Chain Names"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The chain name that we support is as follows. These names are included in our provider method's ",(0,l.kt)("inlineCode",{parentName:"li"},"chain")," argument to allow access to the multi-networks using the same interface.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Chain Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Chain"),(0,l.kt)("th",{parentName:"tr",align:null},"HD Path"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"celo"),(0,l.kt)("td",{parentName:"tr",align:null},"Celo"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/52752'/0'/0/ (celo default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/60'/0'/0/ (ethereum compatible hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cosmos"),(0,l.kt)("td",{parentName:"tr",align:null},"Cosmos"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/118'/0'/0/ (cosmos default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ethereum"),(0,l.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/60'/0'/0/ (ethereum compatible hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"klaytn"),(0,l.kt)("td",{parentName:"tr",align:null},"Klaytn"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/8217'/0'/0/ (klaytn default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/60'/0'/0/ (ethereum default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"near"),(0,l.kt)("td",{parentName:"tr",align:null},"Near"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/397'/0'/0/ (near default hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"neon"),(0,l.kt)("td",{parentName:"tr",align:null},"Neon"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/60'/0'/0/ (ethereum compatible hd path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"solana"),(0,l.kt)("td",{parentName:"tr",align:null},"Solana"),(0,l.kt)("td",{parentName:"tr",align:null},"m/44'/501'/0'/0/ (solana default hd path)")))))}s.isMDXComponent=!0}}]);