"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[3591],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return h}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,c(c({ref:e},l),{},{components:n})):a.createElement(m,c({ref:e},l))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40027:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),c=["components"],i={sidebar_position:3,description:"Create an Account"},s="How to Create an Account",u={unversionedId:"wallet/manual/how-to-create-an-account",id:"wallet/manual/how-to-create-an-account",title:"How to Create an Account",description:"Create an Account",source:"@site/docs/wallet/manual/how-to-create-an-account.md",sourceDirName:"wallet/manual",slug:"/wallet/manual/how-to-create-an-account",permalink:"/wallet/manual/how-to-create-an-account",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/manual/how-to-create-an-account.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Create an Account"},sidebar:"tutorialSidebar",previous:{title:"How to Create a Wallet",permalink:"/wallet/manual/how-to-create-a-wallet"},next:{title:"How to Send Tokens",permalink:"/wallet/manual/how-to-send-tokens"}},l={},d=[{value:"Create an account with Keystore",id:"create-an-account-with-keystore",level:2},{value:"Create an account with Private Key",id:"create-an-account-with-private-key",level:2},{value:"Create an account in NEAR",id:"create-an-account-in-near",level:2}],p={toc:d};function h(t){var e=t.components,i=(0,o.Z)(t,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-create-an-account"},"How to Create an Account"),(0,r.kt)("p",null,"There are two ways to add an account: ",(0,r.kt)("strong",{parentName:"p"},"1) add an account derived from the mnemonic registered in your wallet")," and ",(0,r.kt)("strong",{parentName:"p"},"2) add an account by entering a Private Key"),"."),(0,r.kt)("p",null,"The first way is to recover your account from the mnemonic you have registered with your wallet. The second option is to use other mnemonic-derived accounts if you are already using them and want to use them on the WELLDONE Wallet."),(0,r.kt)("h2",{id:"create-an-account-with-keystore"},"Create an account with Keystore"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),": Select a chain that you want to add"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Click ",(0,r.kt)("strong",{parentName:"p"},"Add Account with Keystore")," button.(You can typically choose it if you want to use an account derived from a registered mnemonic or if you don't have an account you've previously used.)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_1_1",src:n(83203).Z,title:"3_1_1",width:"392",height:"600"}),"\n",(0,r.kt)("img",{alt:"3_1_2",src:n(84929).Z,title:"3_1_2",width:"392",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),": Create an account name that is an alias to use in your wallet. Select HD Path by clicking the drop-down arrow."),(0,r.kt)("p",null,"The first option is the chain's primary standard. Choose the first option if you don't want to precisely customize it. Once HD Path has been selected, the address will be shown accordingly. Confirm the address and click the ",(0,r.kt)("strong",{parentName:"p"},"Add Account")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_1_3",src:n(73267).Z,title:"3_1_3",width:"392",height:"600"}),"\n",(0,r.kt)("img",{alt:"3_1_4",src:n(1317).Z,title:"3_1_4",width:"392",height:"600"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"HD Path")," is a concept created to create multiple accounts from a single mnemonic. Different HD Paths produce different account addresses even with the same mnemonic. Different account addresses are created from the same mnemonic because various chains use different HD Paths as a standard."),(0,r.kt)("p",{parentName:"admonition"},"But more than one HD Path could be used in a single chain. For example, in the case of Celo, there is a default HD Path of Celo, but there are users who use Celo with Metamask that uses Ethereum HD Path. As a result, WELLDONE Wallet allows users to choose their own HD Path within the chain to support these different cases. We also allow you to adjust the Index, the last item in HD Path.")),(0,r.kt)("h2",{id:"create-an-account-with-private-key"},"Create an account with Private Key"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),": Select a chain that you want to add"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Click ",(0,r.kt)("strong",{parentName:"p"},"Import Private Key")," button (You can typically choose it if you use an account that you have already used.)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_2_1",src:n(84703).Z,title:"3_2_1",width:"392",height:"600"}),"\n",(0,r.kt)("img",{alt:"3_2_2",src:n(84018).Z,title:"3_2_2",width:"392",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),": Create an account name that is an alias to use in your wallet. Enter the Private Key, check the account address created, and click the ",(0,r.kt)("strong",{parentName:"p"},"Add Account")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_2_3",src:n(48980).Z,title:"3_2_3",width:"392",height:"600"})),(0,r.kt)("h2",{id:"create-an-account-in-near"},"Create an account in NEAR"),(0,r.kt)("p",null,"Most chains can create accounts using the above methods, but NEAR requires several additional steps when creating accounts using the Keystore."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),": Click the ",(0,r.kt)("strong",{parentName:"p"},"Create New")," button and input the AccountID if you do not already have an account associated to the Address. To create a testnet account, choose ",(0,r.kt)("inlineCode",{parentName:"p"},".testnet"),", and to create a mainnet account, choose ",(0,r.kt)("inlineCode",{parentName:"p"},".near"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_3_1",src:n(8173).Z,title:"3_3_1",width:"392",height:"600"}),"\n",(0,r.kt)("img",{alt:"3_3_2",src:n(8934).Z,title:"3_3_2",width:"392",height:"600"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"NEAR has a human-readable ID, so you must enter a non-overlapping account ID value, and you must send a certain amount of NEAR tokens to the account in order to activate the account. Request NEAR testnet faucet at the following ",(0,r.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/near.dsrv"},"link"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Once the token is confirmed to have entered your account, the ",(0,r.kt)("strong",{parentName:"p"},"Create New")," button is activated as shown below. Click the button to create a NEAR account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3_3_3",src:n(277).Z,title:"3_3_3",width:"392",height:"600"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In addition to the tokens you send to activate your first account, you need a certain amount of tokens to use that account to deploy contracts and execute transactions. For testnet accounts, you can request NEAR testnet faucet at this ",(0,r.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/faucet/near.dsrv"},"link"),".")))}h.isMDXComponent=!0},83203:function(t,e,n){e.Z=n.p+"assets/images/3_1_1-275d1d276deeba3c39f43fc17cd33dd8.png"},84929:function(t,e,n){e.Z=n.p+"assets/images/3_1_2-a85751dfa904898a78b0117d6ce26fba.png"},73267:function(t,e,n){e.Z=n.p+"assets/images/3_1_3-656dc43f85388a39e51b49c4153ab19f.png"},1317:function(t,e,n){e.Z=n.p+"assets/images/3_1_45-df46c2ba45e68a1f983c1c2d85c37494.png"},84703:function(t,e,n){e.Z=n.p+"assets/images/3_2_1-275d1d276deeba3c39f43fc17cd33dd8.png"},84018:function(t,e,n){e.Z=n.p+"assets/images/3_2_25-af61dda1f3088330308c53c55d69545b.png"},48980:function(t,e,n){e.Z=n.p+"assets/images/3_2_3-faf82ef4d9845e0e0eb30d1fa0d7050f.png"},8173:function(t,e,n){e.Z=n.p+"assets/images/3_3_1-5b14a3813c72302f11efaf7ce14db024.png"},8934:function(t,e,n){e.Z=n.p+"assets/images/3_3_2-aec000146e56330005fadef76501dc0f.png"},277:function(t,e,n){e.Z=n.p+"assets/images/3_3_3-426dc359802e5b9d41fc059fb009729d.png"}}]);