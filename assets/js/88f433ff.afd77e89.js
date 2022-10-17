"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[5370],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95645:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:2,keywords:["How to use WELLDONE Wallet","detect WELLDONE Wallet","Detecting the WELLDONE Wallet Provider","Connecting to Wallet"]},c="Connecting to Wallet",s={unversionedId:"wallet/developer-guide/getting-started/connecting-to-wallet",id:"wallet/developer-guide/getting-started/connecting-to-wallet",title:"Connecting to Wallet",description:"How to connect to WELLDONE Wallet",source:"@site/docs/wallet/developer-guide/getting-started/connecting-to-wallet.md",sourceDirName:"wallet/developer-guide/getting-started",slug:"/wallet/developer-guide/getting-started/connecting-to-wallet",permalink:"/wallet/developer-guide/getting-started/connecting-to-wallet",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/getting-started/connecting-to-wallet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["How to use WELLDONE Wallet","detect WELLDONE Wallet","Detecting the WELLDONE Wallet Provider","Connecting to Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Detecting the Provider",permalink:"/wallet/developer-guide/getting-started/detecting-provider"},next:{title:"Provider API",permalink:"/provider-api"}},u={},d=[{value:"How to connect to WELLDONE Wallet",id:"how-to-connect-to-welldone-wallet",level:2},{value:"Example",id:"example",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connecting-to-wallet"},"Connecting to Wallet"),(0,a.kt)("h2",{id:"how-to-connect-to-welldone-wallet"},"How to connect to WELLDONE Wallet"),(0,a.kt)("p",null,"You must first request a connection to your WELLDONE Wallet to utilize in a dApp. A webpage can connect to your WELLDONE wallet using the methods listed below, and once connected, a user in your wallet can grant you access to your account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'window.dapp.request(chainName: string, { method: "dapp:accounts" }\n')),(0,a.kt)("p",null,"When you execute this method, a pop-up window opens asking for your approval. If the user hits ",(0,a.kt)("strong",{parentName:"p"},"Deny")," or closes the window, the connection request is refused with an error; if the user clicks ",(0,a.kt)("strong",{parentName:"p"},"Accept"),", the method returns a Promise object containing the address and public key information for the account corresponding to the ",(0,a.kt)("inlineCode",{parentName:"p"},"chainName"),"."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/70956926/178187041-243f3349-b62b-4d2b-bd22-d072eb1b5795.png",width:"500"}),(0,a.kt)("p",null,"The method asks for connections to all networks registered on the WELLDONE Wallet at the same time. In other words, if younrequest with ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereum")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"chainName"),", you will be automatically granted access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmos")," or other chains, in addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereum"),". If the webpage is already linked to your wallet, it imports the information from your account without asking further authorization."),(0,a.kt)("p",null,"The example that illustrates the object returned when providing ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereum")," as an argument in ",(0,a.kt)("inlineCode",{parentName:"p"},"chainName")," is shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "ethereum": { "address": "0x....", "pubKey": "0x...." } }\n')),(0,a.kt)("p",null,"WELLDONE Wallet currently only supports one address/public key pair per chainID. If there are no accounts in each network, the method produces an empty object."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"A basic example of connecting to a WELLDONE Wallet to obtain information about an Ethereum account. Press the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect Wallet")," button to send the ",(0,a.kt)("inlineCode",{parentName:"p"},"dapp:accounts")," method to connect to your wallet and retrieve your account's address and public key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function connect() {\n  const [address, setAddress] = React.useState(null);\n  const [pubKey, setPubKey] = React.useState(null);\n  async function getAccounts() {\n    // request connection to WELLDONE extension\n    const accounts = await window.dapp.request('ethereum', {\n      method: 'dapp:accounts',\n    });\n    // check if accounts exists\n    if (Object.keys(accounts).length !== 0) {\n      setAddress(accounts.ethereum.address);\n      setPubKey(accounts.ethereum.pubKey);\n    }\n  }\n  return (\n    <>\n      <Button onClick={getAccounts}>Connect Wallet</Button>\n      {address && (\n        <ResultTooltip style={{ background: '#3B48DF' }}>\n          <b>address: </b> {address} <br />\n          <b>pubKey: </b> {pubKey}\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}m.isMDXComponent=!0}}]);