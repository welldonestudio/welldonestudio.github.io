"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[5227],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),h=a,m=s["".concat(c,".").concat(h)]||s[h]||u[h]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},31618:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],l={sidebar_position:3,keywords:["WELLDONE Wallet Events","dapp:accountsChanged","dapp:chainChanged"],description:"Events that Universal Provider support"},c="Events",p={unversionedId:"wallet/developer-guide/provider-api/events",id:"wallet/developer-guide/provider-api/events",title:"Events",description:"Events that Universal Provider support",source:"@site/docs/wallet/developer-guide/provider-api/events.md",sourceDirName:"wallet/developer-guide/provider-api",slug:"/wallet/developer-guide/provider-api/events",permalink:"/wallet/developer-guide/provider-api/events",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/provider-api/events.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["WELLDONE Wallet Events","dapp:accountsChanged","dapp:chainChanged"],description:"Events that Universal Provider support"},sidebar:"tutorialSidebar",previous:{title:"Methods",permalink:"/wallet/developer-guide/provider-api/method"},next:{title:"Chain Names",permalink:"/wallet/developer-guide/provider-api/chain-names"}},d={},u=[{value:"1. accountsChanged",id:"accountsChanged",level:2},{value:"2. chainChanged",id:"chainChanged",level:2}],s={toc:u};function h(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Universal Provider emits two events through the EventEmitter API on Node.js."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#accountsChanged"},"dapp:accountsChanged")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#chainChanged"},"dapp:chainChanged")))),(0,o.kt)("h2",{id:"accountsChanged"},"1. accountsChanged"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"dapp:accountsChanged")," event is triggered when an account change is detected inside the network. Returns the changed account address ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," and current chain name ",(0,o.kt)("inlineCode",{parentName:"li"},"CHAIN_NAME")," in the form ",(0,o.kt)("inlineCode",{parentName:"li"},"CHAIN_NAME:address")," as the input argument from a callback function.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';\n\nwindow.dapp.on('dapp:accountsChanged', (currentAccount: string) => {\n  console.log(currentAccount); // near:welldone.testnet\n});\n")),(0,o.kt)("h2",{id:"chainChanged"},"2. chainChanged"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"dapp:chainChanged")," event is triggered when a network change inside the chain is identified. Returns the network ID ",(0,o.kt)("inlineCode",{parentName:"li"},"networkID")," and current chain name ",(0,o.kt)("inlineCode",{parentName:"li"},"CHAIN_NAME")," in the form ",(0,o.kt)("inlineCode",{parentName:"li"},"CHAIN_NAME:networkID")," as modified by the input argument on a callback function.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type CHAIN_NAME = 'celestia' | 'celo' | 'cosmos' | 'ethereum' | 'juno' | 'klaytn' | 'near' | 'neon' | 'solana';\n\nwindow.dapp.on('dapp:chainChanged', (currentNetwork: string) => {\n  console.log(currentNetwork); //celo:0xf370\n});\n")))}h.isMDXComponent=!0}}]);