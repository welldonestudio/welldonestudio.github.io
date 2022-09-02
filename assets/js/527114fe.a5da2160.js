"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[153],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7294),o=n(4334),r=n(3651),i=n(9960),d=n(3919),l=n(5999),c="cardContainer_fWXF",s="cardTitle_rnsV",h="cardDescription_PWke";function u(e){var t=e.href,n=e.children;return a.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",c)},n)}function p(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:r},n," ",r),i&&a.createElement("p",{className:(0,o.Z)("text--truncate",h),title:i},i))}function m(e){var t=e.item,n=(0,r.Wl)(t);return n?a.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t,n=e.item,o=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(p,{href:n.href,icon:o,title:n.label,description:null==i?void 0:i.description})}function g(e){var t=e.item;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,n=e.className;return a.createElement("section",{className:(0,o.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,r.Wl)(e)}))}(t).map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e}))})))}},3243:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=n(2991),d=n(3651),l=["components"],c={slug:"/add-chain",sidebar_position:3},s="Add Chain",h={unversionedId:"add-chain/index",id:"add-chain/index",title:"Add Chain",description:"WELLDONE Wallet has the Add Chain function by default, which allows you to effortlessly add networks to your wallet. To use the tool, go to the WELLDONE Wallet Add Chain Website or use the window.dapp method.",source:"@site/docs/add-chain/index.md",sourceDirName:"add-chain",slug:"/add-chain",permalink:"/docs/add-chain",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/add-chain/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/add-chain",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Connecting to Wallet",permalink:"/docs/getting-started/connecting-to-wallet"},next:{title:"Cosmos",permalink:"/docs/add-chain/Cosmos"}},u={},p=[{value:"Using Add Chain Site",id:"using-add-chain-site",level:2},{value:"1. Search Chain and Connect Wallet",id:"1-search-chain-and-connect-wallet",level:3},{value:"2. Add Chain",id:"2-add-chain",level:3},{value:"3. Suggest Chain",id:"3-suggest-chain",level:3},{value:"Using <code>dapp:addChain</code> Method",id:"using-dappaddchain-method",level:2}],m={toc:p};function f(e){var t=e.components,c=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-chain"},"Add Chain"),(0,r.kt)("p",null,"WELLDONE Wallet has the ",(0,r.kt)("strong",{parentName:"p"},"Add Chain")," function by default, which allows you to effortlessly add networks to your wallet. To use the tool, go to the WELLDONE Wallet ",(0,r.kt)("a",{parentName:"p",href:"https://addchain.welldonestudio.io"},"Add Chain Website")," or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.dapp")," method."),(0,r.kt)("h2",{id:"using-add-chain-site"},"Using Add Chain Site"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://addchain.welldonestudio.io"},"AddChain")," webpage provided by the WELLDONE Wallet makes your life much easier by letting you add networks seamlessly."),(0,r.kt)("h3",{id:"1-search-chain-and-connect-wallet"},"1. Search Chain and Connect Wallet"),(0,r.kt)("p",null,"To begin, search for the chain you want to add, and click the ",(0,r.kt)("strong",{parentName:"p"},"Connect Wallet")," button at the top to grant access to your wallet. The button will change to ",(0,r.kt)("strong",{parentName:"p"},"Add Chain")," once the WELLDONE Wallet is successfully linked to the website."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connect Wallet",src:n(4394).Z,title:"Connect Wallet",width:"3232",height:"2074"}),"\n",(0,r.kt)("img",{alt:"Connect Wallet",src:n(8052).Z,title:"Connect Wallet",width:"784",height:"1268"})),(0,r.kt)("h3",{id:"2-add-chain"},"2. Add Chain"),(0,r.kt)("p",null,"Select the RPC node you wish to connect to in the ",(0,r.kt)("strong",{parentName:"p"},"Select node")," box by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Add to Wallet")," button for the network you want to add: Choose a node, then press the ",(0,r.kt)("strong",{parentName:"p"},"Add to Wallet")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connect Wallet",src:n(205).Z,title:"Add Chain to Wallet",width:"926",height:"808"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h3",{parentName:"admonition",id:"all-that-node"},"All That Node"),(0,r.kt)("p",{parentName:"admonition"},"The user can connect to the node provider's local node or the RPC node. We strongly advise you to use DSRV's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.allthatnode.com/"},"All That Node (ATN)"),", a multi-chain node platform that supports over 20 distinct protocols. Using ATN nodes makes it simple to employ multiple chain RPC nodes on a single platform seamlessly.")),(0,r.kt)("p",null,"WELLDONE Wallet Extension would go active, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Network")," window displays as seen below: To confirm that the network has been successfully added to your wallet, click the ",(0,r.kt)("strong",{parentName:"p"},"Accept")," button in the corresponding box. If the Deny button is selected, the error ",(0,r.kt)("strong",{parentName:"p"},"User denied added chain")," is returned."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/70956926/177306368-292f4e11-2f09-4dab-a304-a43a3c460693.png",width:"500"}),(0,r.kt)("h3",{id:"3-suggest-chain"},"3. Suggest Chain"),(0,r.kt)("p",null,"If you wish to add a new network that does not yet exist on the ",(0,r.kt)("a",{parentName:"p",href:"https://addchain.welldonestudio.io"},"AddChain"),", request it directly on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dsrvlabs/wds-addchain-data-list"},"GitHub Repository"),"."),(0,r.kt)("p",null,"Please refer to the example on the README then place the ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," data of the network you would like to add into the relevant network in the data folder. Once your pull request is merged, the change will be reflected directly on our ",(0,r.kt)("a",{parentName:"p",href:"https://addchain.welldonestudio.io"},"AddChain")," website."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"using-dappaddchain-method"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"dapp:addChain")," Method"),(0,r.kt)("p",null,"The \u20a9dapp:addChain\u20a9 method in the WELLDONE Wallet allows you to add new chains that do not exist in the Welldone Wallet directly at the front end."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'window.dapp.request(chainName: string, (\n    method: "dapp:addChain",\n    params: [chainData]\n))\n')),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("strong",{parentName:"p"},"Ethereum"),", ",(0,r.kt)("strong",{parentName:"p"},"Cosmos"),", and ",(0,r.kt)("strong",{parentName:"p"},"Solana"),"-based chains may be added, and each chain-specific section below offers instructions on what has to be provided to the ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," for each network."),(0,r.kt)(i.Z,{items:(0,d.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},205:function(e,t,n){t.Z=n.p+"assets/images/add_to_wallet-3b70ab9687d804362cde083c81ef00ff.png"},8052:function(e,t,n){t.Z=n.p+"assets/images/addchain-6f93a439aed00207f0196683a3889f36.png"},4394:function(e,t,n){t.Z=n.p+"assets/images/connect_wallet-1e22ddb67370d61f1d700a317d1488a7.png"}}]);