"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[255],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7090:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:4},p="Events",u={unversionedId:"provider-api/events",id:"provider-api/events",title:"Events",description:"dapp provider\ub294 Node.js EventEmitter API\ub97c \ud1b5\ud574 \ucd1d 2\uac1c\uc758 \uc774\ubca4\ud2b8\ub97c emitted \ud569\ub2c8\ub2e4.",source:"@site/docs/provider-api/events.md",sourceDirName:"provider-api",slug:"/provider-api/events",permalink:"/docs/provider-api/events",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/provider-api/events.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Methods",permalink:"/docs/provider-api/method"},next:{title:"About Universal Provider",permalink:"/docs/provider-api/how-we-wrap-for-multichain"}},s={},l=[{value:"1. accountsChanged",id:"accountsChanged",level:2},{value:"2. chainChanged",id:"chainChanged",level:2}],d={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"dapp provider\ub294 Node.js EventEmitter API\ub97c \ud1b5\ud574 \ucd1d 2\uac1c\uc758 \uc774\ubca4\ud2b8\ub97c emitted \ud569\ub2c8\ub2e4. "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#accountsChanged"},"accountsChanged")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#chainChanged"},"chainChanged")))),(0,o.kt)("h2",{id:"accountsChanged"},"1. accountsChanged"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dapp:accountsChanged \uc774\ubca4\ud2b8\ub294 \uccb4\uc778 \ub0b4\ubd80\uc758 \uacc4\uc815 \ubcc0\uacbd\uc774 \uac10\uc9c0\ub418\uc5c8\uc744 \ub54c \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ucf5c\ubc31 \ud568\uc218\uc758 \uc778\uc790\ub85c \ubcc0\uacbd\ub41c \uacc4\uc815 \uc8fc\uc18c\uc640 \ud37c\ube14\ub9ad \ud0a4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type CHAIN_NAME = 'ethereum' | 'cosmos' | 'near' | 'solana' | 'klaytn' | 'celo' | 'neon';\n\ninterface ACCOUNT_INFO {\n  address: string;\n  pubKey: string;\n}\n\nwindow.dapp.on('dapp:accountsChanged', (currentAccount: Record<CHAIN_NAME, ACCOUNT_INFO>) => {\n  console.log(currentAccount); \n  /*\n  {\n    ethereum: {\n      address: \"0x....\",\n      pubKey: \"0x....\",\n    }\n  }\n  */\n});\n")),(0,o.kt)("h2",{id:"chainChanged"},"2. chainChanged"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dapp:chainChanged \uc774\ubca4\ud2b8\ub294 \uccb4\uc778 \ub0b4\ubd80\uc758 \ub124\ud2b8\uc6cc\ud06c \ubcc0\uacbd\uc774 \uac10\uc9c0\ub418\uc5c8\uc744 \ub54c \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ucf5c\ubc31 \ud568\uc218\uc758 \uc778\uc790\ub85c \ubcc0\uacbd\ub41c \ub124\ud2b8\uc6cc\ud06c\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nwindow.dapp.on('dapp:chainChanged', (currentNetwork: string) => {\n  console.log(currentNetwork); //celo:0xf370\n});\n")))}m.isMDXComponent=!0}}]);