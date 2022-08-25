"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[191],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9936:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},c=void 0,p={unversionedId:"Deploy-and-Run/Celo",id:"Deploy-and-Run/Celo",title:"Celo",description:"Choose a wallet",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Deploy-and-Run/Celo.md",sourceDirName:"Deploy-and-Run",slug:"/Deploy-and-Run/Celo",permalink:"/ko/docs/Deploy-and-Run/Celo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Deploy-and-Run/Celo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Near",permalink:"/ko/docs/Deploy-and-Run/Near"},next:{title:"Klaytn",permalink:"/ko/docs/Deploy-and-Run/Klaytn"}},d={},s=[{value:"Choose a wallet",id:"choose-a-wallet",level:2},{value:"Connect",id:"connect",level:2},{value:"Create Project",id:"create-project",level:2},{value:"Compile",id:"compile",level:2},{value:"Deploy",id:"deploy",level:2},{value:"View and Call function",id:"view-and-call-function",level:2}],u={toc:s};function m(e){var t=e.components,i=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"choose-a-wallet"},"Choose a wallet"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WELLDONE Code"),"\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"WELLDONE Wallet"),"\uc744 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select Wallet",src:n(6848).Z,title:"Select Wallet",width:"1354",height:"970"})),(0,r.kt)("h2",{id:"connect"},"Connect"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WELLDONE wallet"),"\uc744 \uc5f0\uacb0\ud558\uae30 \uc774\uc804\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"WELLDONE wallet"),"\uc5d0 Celo account\ub97c \uc0dd\uc131\ud574\uc8fc\uc138\uc694."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connect Wallet",src:n(246).Z,title:"Connect Wallet",width:"1774",height:"1240"})),(0,r.kt)("h2",{id:"create-project"},"Create Project"),(0,r.kt)("p",null,"solidity\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694. \uadf8\ub9ac\uace0 solidity\ub85c \uc791\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8 \ud30c\uc77c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select Project",src:n(613).Z,title:"Select Project",width:"1788",height:"562"})),(0,r.kt)("h2",{id:"compile"},"Compile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"solidity \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc120\ud0dd\ud558\uba74 Compile \ubc84\ud2bc\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Complie\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694."),(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\uc774 \uc644\ub8cc\ub418\uba74, wasm file\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Project Compile",src:n(1067).Z,title:"Project Compile",width:"592",height:"698"})),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"WELLDONE Wallet\uc5d0\uc11c\ub294 \ud574\ub2f9 \uc9c0\uac11 \uc8fc\uc18c\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud558\uc5ec \uac00\uc838\uc635\ub2c8\ub2e4. \ub530\ub77c\uc11c Deploy\ub97c \ud558\uae30 \uc774\uc804\uc5d0 \uba54\uc778\ub137\uc5d0 \ud2b8\ub79c\uc81d\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0, \ud14c\uc2a4\ud2b8\ub137\uc5d0 \ud2b8\ub79c\uc81d\uc158\uc744 \ubcf4\ub0bc \uac83\uc778\uc9c0 \ubbf8\ub9ac \uace0\ub824\ud574\ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4. "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub41c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\uac00 \uc788\ub294 \uacbd\uc6b0 \ub514\ud50c\ub85c\uc774 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694."),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec \uac70\ub798\uc5d0 \uc11c\uba85\ud558\uc2ed\uc2dc\uc624.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deploy",src:n(5633).Z,title:"Deploy",width:"1410",height:"1318"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uba74, \ub2f9\uc2e0\uc740 \ud568\uc218\ub97c \uc2e4\ud589\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deployed Contract",src:n(8186).Z,title:"Deployed Contract",width:"580",height:"636"})),(0,r.kt)("h2",{id:"view-and-call-function"},"View and Call function"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc704\uc758 \uacfc\uc815\uc744 \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uba74 \uc790\ub3d9\uc73c\ub85c \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud639\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"At Address")," \ub0b4\ubd80\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"At Address"),"\ubc84\ud2bc\uc744 \ub20c\ub7ec \uae30\uc874\uc5d0 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"At Address",src:n(4554).Z,title:"At Address",width:"582",height:"150"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud638\ucd9c\ud560 \uba54\uc11c\ub4dc\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud544\uc694\uc5d0 \ub530\ub77c \ub9e4\uac1c\ubcc0\uc218\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"call"),"\uc774\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"transact"),"\ub97c \ud1b5\ud574 \uac12\uc744 \uc77d\uac70\ub098 \ud2b8\ub79c\uc81d\uc158\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Deployed Contract",src:n(8186).Z,title:"Deployed Contract",width:"580",height:"636"})))))}m.isMDXComponent=!0},8186:function(e,t,n){t.Z=n.p+"assets/images/call_view_celo-fcd33bb14854d3d20f7f939a2a14bb58.png"},1067:function(e,t,n){t.Z=n.p+"assets/images/compile-celo-80f1ad81336de0f709f27f3d012827ac.png"},4554:function(e,t,n){t.Z=n.p+"assets/images/contract_address-ec30bfaa4527befb311f67d387ae4b3f.png"},613:function(e,t,n){t.Z=n.p+"assets/images/create-project-celo-e10ecdf33f1e0a8f4ddea9065797bce2.png"},5633:function(e,t,n){t.Z=n.p+"assets/images/deploy-celo-b125c5585b534243ce76ed78de79b362.png"},246:function(e,t,n){t.Z=n.p+"assets/images/select-wallet-celo-90a940ff3067788efcfbb1dd40508bac.png"},6848:function(e,t,n){t.Z=n.p+"assets/images/select-wallet-bc6a727b80fedced25d62154ce5b092d.png"}}]);