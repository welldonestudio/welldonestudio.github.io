"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[9845],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,f=s["".concat(d,".").concat(g)]||s[g]||p[g]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=s;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),l=["components"],a={sidebar_position:1,keywords:["How to use WELLDONE Wallet","detect WELLDONE Wallet","Detecting the WELLDONE Wallet Provider"]},d="Detecting the Provider",c={unversionedId:"wallet/developer-guide/getting-started/detecting-provider",id:"wallet/developer-guide/getting-started/detecting-provider",title:"Detecting the Provider",description:"How to detect WELLDONE Wallet",source:"@site/docs/wallet/developer-guide/getting-started/detecting-provider.md",sourceDirName:"wallet/developer-guide/getting-started",slug:"/wallet/developer-guide/getting-started/detecting-provider",permalink:"/wallet/developer-guide/getting-started/detecting-provider",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/wallet/developer-guide/getting-started/detecting-provider.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:["How to use WELLDONE Wallet","detect WELLDONE Wallet","Detecting the WELLDONE Wallet Provider"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"Connecting to Wallet",permalink:"/wallet/developer-guide/getting-started/connecting-to-wallet"}},u={},p=[{value:"How to detect WELLDONE Wallet",id:"how-to-detect-welldone-wallet",level:2},{value:"Example",id:"example",level:2}],s={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"detecting-the-provider"},"Detecting the Provider"),(0,i.kt)("h2",{id:"how-to-detect-welldone-wallet"},"How to detect WELLDONE Wallet"),(0,i.kt)("p",null,"Check ",(0,i.kt)("inlineCode",{parentName:"p"},"window.dapp")," to determine if your browser has WELLDONE Wallet installed. The wallet is not installed if ",(0,i.kt)("inlineCode",{parentName:"p"},"window.dapp")," returns undefined."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The following code is a simple example that detects the WELLDONE Wallet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function getProvider() {\n  const [provider, setProvider] = React.useState(false);\n  function handleProvider() {\n    if (!window.dapp) {\n      alert('Please install WELLDONE Wallet extension');\n    } else {\n      setProvider(true);\n    }\n  }\n  return (\n    <>\n      <Button onClick={handleProvider} type=\"buton\">\n        Get Provider\n      </Button>\n      {provider && (\n        <ResultTooltip style={{ background: '#3B48DF' }}>\n          <b>Success</b>\n        </ResultTooltip>\n      )}\n    </>\n  );\n}\n")))}g.isMDXComponent=!0}}]);