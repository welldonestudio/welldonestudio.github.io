/*! For license information please see 09d1c6b4.b0b47b66.js.LICENSE.txt */
"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[2250],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return o?r.createElement(f,n(n({ref:t},u),{},{components:o})):r.createElement(f,n({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var d=2;d<i;d++)n[d]=o[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},61953:function(e,t,o){o.d(t,{Z:function(){return g}});var r=o(83117),a=o(80102),i=o(67294),n=o(10209),l=o(78883),s=o(86523),d=o(39707),u=o(11938),c=o(85893);const p=["className","component"];var m=o(37078);const f=function(e={}){const{defaultTheme:t,defaultClassName:o="MuiBox-root",generateClassName:m,styleFunctionSx:f=s.Z}=e,g=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(f);return i.forwardRef((function(e,i){const l=(0,u.Z)(t),s=(0,d.Z)(e),{className:f,component:h="div"}=s,b=(0,a.Z)(s,p);return(0,c.jsx)(g,(0,r.Z)({as:h,ref:i,className:(0,n.Z)(f,m?m(o):o),theme:l},b))}))}({defaultTheme:(0,o(74821).Z)(),defaultClassName:"MuiBox-root",generateClassName:m.Z.generate});var g=f},87054:function(e,t,o){o.d(t,{Z:function(){return y}});var r=o(80102),a=o(83117),i=o(67294),n=o(93680),l=o(94780),s=o(41796),d=o(50522),u=o(36622),c=o(78884),p=o(81719),m=o(1588),f=o(34867);function g(e){return(0,f.Z)("MuiToggleButton",e)}var h=(0,m.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),b=o(85893);const w=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],v=(0,p.ZP)(d.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`size${(0,u.Z)(o.size)}`]]}})((({theme:e,ownerState:t})=>{let o,r="standard"===t.color?e.palette.text.primary:e.palette[t.color].main;return e.vars&&(r="standard"===t.color?e.vars.palette.text.primary:e.vars.palette[t.color].main,o="standard"===t.color?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),(0,a.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${h.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}`]:{color:r,backgroundColor:e.vars?`rgba(${o} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(r,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${o} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(r,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${o} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(r,e.palette.action.selectedOpacity)}}}},"small"===t.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===t.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}));var y=i.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiToggleButton"}),{children:i,className:s,color:d="standard",disabled:p=!1,disableFocusRipple:m=!1,fullWidth:f=!1,onChange:h,onClick:y,selected:E,size:W="medium",value:S}=o,k=(0,r.Z)(o,w),O=(0,a.Z)({},o,{color:d,disabled:p,disableFocusRipple:m,fullWidth:f,size:W}),x=(e=>{const{classes:t,fullWidth:o,selected:r,disabled:a,size:i,color:n}=e,s={root:["root",r&&"selected",a&&"disabled",o&&"fullWidth",`size${(0,u.Z)(i)}`,n]};return(0,l.Z)(s,g,t)})(O);return(0,b.jsx)(v,(0,a.Z)({className:(0,n.Z)(x.root,s),disabled:p,focusRipple:!m,ref:t,onClick:e=>{y&&(y(e,S),e.defaultPrevented)||h&&h(e,S)},onChange:h,value:S,ownerState:O,"aria-pressed":E},k,{children:i}))}))},85390:function(e,t,o){o.d(t,{Z:function(){return v}});var r=o(80102),a=o(83117),i=o(67294),n=(o(59864),o(93680)),l=o(94780),s=o(81719),d=o(78884),u=o(36622);function c(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var p=o(1588),m=o(34867);function f(e){return(0,m.Z)("MuiToggleButtonGroup",e)}var g=(0,p.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),h=o(85893);const b=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],w=(0,s.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${g.grouped}`]:t.grouped},{[`& .${g.grouped}`]:t[`grouped${(0,u.Z)(o.orientation)}`]},t.root,"vertical"===o.orientation&&t.vertical,o.fullWidth&&t.fullWidth]}})((({ownerState:e,theme:t})=>(0,a.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${g.grouped}`]:(0,a.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderTop:0,marginTop:0}})})));var v=i.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:s,className:p,color:m="standard",disabled:g=!1,exclusive:v=!1,fullWidth:y=!1,onChange:E,orientation:W="horizontal",size:S="medium",value:k}=o,O=(0,r.Z)(o,b),x=(0,a.Z)({},o,{disabled:g,fullWidth:y,orientation:W,size:S}),L=(e=>{const{classes:t,orientation:o,fullWidth:r,disabled:a}=e,i={root:["root","vertical"===o&&"vertical",r&&"fullWidth"],grouped:["grouped",`grouped${(0,u.Z)(o)}`,a&&"disabled"]};return(0,l.Z)(i,f,t)})(x),A=(e,t)=>{if(!E)return;const o=k&&k.indexOf(t);let r;k&&o>=0?(r=k.slice(),r.splice(o,1)):r=k?k.concat(t):[t],E(e,r)},N=(e,t)=>{E&&E(e,k===t?null:t)};return(0,h.jsx)(w,(0,a.Z)({role:"group",className:(0,n.Z)(L.root,p),ref:t,ownerState:x},O,{children:i.Children.map(s,(e=>i.isValidElement(e)?i.cloneElement(e,{className:(0,n.Z)(L.grouped,e.props.className),onChange:v?N:A,selected:void 0===e.props.selected?c(e.props.value,k):e.props.selected,size:e.props.size||S,fullWidth:y,color:e.props.color||m,disabled:e.props.disabled||g}):null))}))}))},10209:function(e,t,o){function r(e){var t,o,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(a&&(a+=" "),a+=o);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,o=0,a="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},91262:function(e,t,o){o.d(t,{Z:function(){return i}});var r=o(67294),a=o(72389);function i(e){var t=e.children,o=e.fallback;return(0,a.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):null!=o?o:null}},45704:function(e,t,o){o.r(t),o.d(t,{assets:function(){return Z},contentTitle:function(){return _},default:function(){return R},frontMatter:function(){return N},metadata:function(){return j},toc:function(){return C}});var r=o(83117),a=o(80102),i=o(67294),n=o(3905),l=o(61953),s=o(85390),d=o(87054);function u(){var e=i.useState("code"),t=e[0],o=e[1];return i.createElement(l.Z,null,i.createElement(s.Z,{value:t,exclusive:!0,onChange:function(e,r){o(r||t)},"aria-label":"roadmap",sx:{gap:"8px",width:"100%",paddingBottom:"32px","& .MuiToggleButton-root":{"&.Mui-selected":{border:"2px solid #FFFFFF",borderRadius:"2px",color:"white"}},"& .MuiToggleButton-root:hover":{background:"rgba(255, 255, 255, 0.08);"},"& .MuiToggleButtonGroup-grouped":{width:"50%",height:"64px",fontFamily:"SUIT",fontWeight:"800",fontSize:"1.5rem",lineHeight:"150%",color:"white"}}},i.createElement(d.Z,{value:"code","aria-label":"left aligned"},"CODE"),i.createElement(d.Z,{value:"wallet","aria-label":"centered"},"WALLET")),"code"===t?i.createElement("div",{style:{backgroundImage:"url('/img/aboutus_roadmap_code.jpg')",backgroundSize:"cover",width:"100%",aspectRatio:"2400/3024"}}):i.createElement("div",{style:{backgroundImage:"url('/img/aboutus_roadmap_wallet.jpg')",backgroundSize:"cover",width:"100%",aspectRatio:"2400/3024"}}))}var c=o(91262),p="card_OPk7",m="card1_yGIo",f="card2_U45V",g="card3_v7FC",h="thumb_OUyk",b="card__caption_UHtj",w="card__snippet_frD2",v="card__title_ldfX",y=o(86010);function E(e){return i.createElement("div",{className:e.wide?e.width>768?(0,y.Z)(f,p):(0,y.Z)(g,p):(0,y.Z)(m,p)},i.createElement("div",{className:h,style:{background:"url("+e.imageUrl+") no-repeat center",backgroundSize:"cover"}}),i.createElement("a",{className:b,target:"_blank",href:e.url,style:{textDecoration:"none"}},i.createElement("h2",{className:v},e.title),e.description?i.createElement(i.Fragment,null,i.createElement("p",{className:w},e.description)):i.createElement(i.Fragment,null)))}var W=[{title:"\ud83d\udd06 Experience #Web3 dev revolution with #WELLDONEWallet & #WELLDONECode!",description:"Enhancing @EthereumRemix with variety of #blockchain languages like #Solidity, #RustLang, #MoveLang. Voyage to endless opportunities!",url:"https://twitter.com/WelldoneStudio_/status/1663501882575421441",imageUrl:"https://pbs.twimg.com/media/FxXuFx1aIAAuqZM?format=jpg&name=large",wide:!1},{title:"NEAR Migration",description:"We have an update to our tutorial: How to migrate the smart contract in @NEARProtocol written by @suji_forcrypto",url:"https://twitter.com/WelldoneStudio_/status/1610155387877199873",imageUrl:"https://pbs.twimg.com/media/FlhqddEaUAApfbd?format=jpg&name=medium",wide:!1},{title:"WELLDONE Code",description:"The first and best developer tool for multi-chain voyagers, WELLDONE Code, has just made its OFFICIAL debut in Remix IDE!",url:"https://twitter.com/WelldoneStudio_/status/1612375978868895744",imageUrl:"https://pbs.twimg.com/media/FmBPN6faEAEeDoc?format=jpg&name=large",wide:!1},{title:"CELESTIA launching",description:"WELLDONE Wallet, the first browser extension wallet to officially support Celestia, now joins the modular voyage",url:"https://twitter.com/WelldoneStudio_/status/1604697099521531904",imageUrl:"https://pbs.twimg.com/media/FkUHU7YUEAA9PX6?format=jpg&name=medium",wide:!1},{title:"JUNO launching",description:"We are excited to announce that WELLDONEWallet now joins JUNO's voyage!",url:"https://twitter.com/WelldoneStudio_/status/1602540185194856448",imageUrl:"https://pbs.twimg.com/media/Fj1byWAVUAAW3aw?format=jpg&name=medium",wide:!1},{title:"WELLDONE Code JUNO",description:"We're excited to announce that our WELLDONE Code now allows you to deploy and interact with smart contracts on the @JunoNetwork using Remix IDE.",url:"https://twitter.com/WelldoneStudio_/status/1635584704572424194",imageUrl:"https://pbs.twimg.com/media/FrLDl9VaQAAo574?format=jpg&name=medium",wide:!1},{title:"Ahoy, Web3 voyagers!",description:"We're thrilled to announce our support for APTOS in WELLDONE Wallet",url:"https://twitter.com/WelldoneStudio_/status/1640993981575352323",imageUrl:"https://pbs.twimg.com/media/FsX6PdvaIAEOS33?format=jpg&name=medium",wide:!1},{title:"WELLDONE Code into the NEAR developer docs",description:"has been officially integrated into the NEAR Protocol developer documentation",url:"https://twitter.com/WelldoneStudio_/status/1638078237120278531",imageUrl:"https://pbs.twimg.com/media/FrufYCaakAcSBr2?format=jpg&name=medium",wide:!1},{title:"WELLDONE Code into the Aptos official docs",description:"if you are a developer looking for a user-friendly way to develop on APTOS, you can try it with Move language on WELLDONE Code Remix IDE plugin.",url:"https://twitter.com/WelldoneStudio_/status/1640994335306158080",imageUrl:"https://pbs.twimg.com/media/FsX7fePakAAArwZ?format=jpg&name=medium",wide:!0},{title:"\ud83d\ude80 What is @WelldoneStudio_",description:"supporting the developer ecosystem at @dsrvlabs, doing in the @SuiNetwork ecosystem? Let's dive in! (1/5)",url:"https://twitter.com/WelldoneStudio_/status/1646491918673801216",imageUrl:"https://pbs.twimg.com/media/FtmDaP0aYAAhisf?format=jpg&name=large",wide:!1},{title:"\ud83c\udf8a Exciting news! @WelldoneStudio_",description:"has been awarded a grant from @SuiNetwork following a rigorous milestone review.",url:"https://twitter.com/WelldoneStudio_/status/1653204149922848768",imageUrl:"https://pbs.twimg.com/media/FvFRpuMaIAE9GR8?format=jpg&name=large",wide:!1},{title:"\ud83c\udf70 10% of all packages on #Sui mainnet were deployed via #WelldoneCode!",description:"That's 328 of 3,353 packages since launch. We're proud to make a significant contribution to #SuiNetwork.",url:"https://twitter.com/WelldoneStudio_/status/1656957610594304000",imageUrl:"https://pbs.twimg.com/media/Fv6xmveaMAAmb4j?format=jpg&name=large",wide:!1},{title:"Ready to launch your Coin on Aptos?",description:"Use #WELLDONEWallet and #WELLDONECode and deploy directly through #RemixIDE.",url:"https://twitter.com/WelldoneStudio_/status/1660876026065620995",imageUrl:"https://pbs.twimg.com/media/Fwyd8Q8aQAI2Tbj?format=jpg&name=large",wide:!1},{title:"\ud83d\udd2d Voyagers, ready for #SuiBuilderHouse Hackathon in Seoul?",description:"Dive into browser-based #WELLDONEWallet & #WELLDONECode to build @SuiNetwork's apps.",url:"https://twitter.com/WelldoneStudio_/status/1664086383449997312",imageUrl:"https://blog.sui.io/content/images/size/w2000/2023/05/InstantCoding1_hdr.jpg",wide:!1},{title:"Hoi! \ud83c\uddf3\ud83c\uddf1 the Hack Holland #AptosWorldTour.",description:"we're equipping your Move-ment to be 'Apt to Succeed' on your #Aptos voyage. Let's foster the bloom of #Web3 \ud83c\udf37!",url:"https://twitter.com/WelldoneStudio_/status/1665582483105271808",imageUrl:"https://pbs.twimg.com/media/Fx1UrTgaEAI2A-k?format=jpg&name=4096x4096",wide:!1},{title:"Aptos Seoul Hack",description:"@HyunSooyoung, Lead Software Engineer of @WelldoneStudio_ by @dsrvlabs, introduced Remix IDE Plugin for @Aptos_Network",url:"https://twitter.com/WelldoneStudio_/status/1620663212755795968",imageUrl:"https://pbs.twimg.com/media/Fn2-8b2aMAAdWB4?format=jpg&name=large",wide:!0},{title:"NEAR Blockchain Foundation Week",description:"@suji_forcrypto's presentation at @Xangle_official Blockchain Foundation Week.",url:"https://twitter.com/WelldoneStudio_/status/1613101799514439682",imageUrl:"https://pbs.twimg.com/media/FmLjZnSaMAEqPga?format=jpg&name=large",wide:!0},{title:"Xin ch\xe0o, Voyagers!",description:"Kicking off with our WELLDONE Wallet presentation, look forward to new dev tools next month! Stay tuned!",url:"https://twitter.com/WelldoneStudio_/status/1637375082300358657",imageUrl:"https://pbs.twimg.com/media/FrkdxHtXwAAW_il?format=jpg&name=large",wide:!0},{title:"\ud83c\udded\ud83c\uddf0 We Showcased our contributions to @SuiNetwork",description:"\ud83c\udf89 Fantastic session at the #SuiBuilderHouse event in Hong Kong today!",url:"https://twitter.com/WelldoneStudio_/status/1646826264349790212",imageUrl:"https://pbs.twimg.com/media/FtqzfhuaMAA4HoH?format=jpg&name=large",wide:!0},{title:"#WELLDONEAcademy 2nd",description:"\ub2e4\uc74c \ub2ec #SuiBuilderHouse in Seoul\uc744 \uc55e\ub450\uace0, #WELLDONEAcademy \uac00 \uc9c4\ud589\ub410\uc2b5\ub2c8\ub2e4\ud83e\uddd1\u200d\ud83d\udcbb \uc774\ubc88 \uc6f0\ub358 \uc544\uce74\ub370\ubbf8\ub294 Sui\uc5d0 \ub300\ud55c \uc18c\uac1c\uc640 \uc774\ub860, \uc2e4\uc81c \uc628\ubcf4\ub529\uae4c\uc9c0\uc758 \uc9c0\uc2dd\uc744 \ud55c\uad6d\uc758 #Sui \ube4c\ub354\ub4e4\uacfc \ud568\uaed8 \ub098\ub204\uc5c8\uace0, @SuiNetwork\uc758 @theharrisonkim\ub2d8\ub3c4 \ud568\uaed8 \ud574\uc8fc\uc154 \ub354\uc6b1 \ub73b\uae4a\uc740 \uc2dc\uac04\uc744 \ub9cc\ub4e4\uc5b4 \ub098\uac14\uc2b5\ub2c8\ub2e4 \ud83e\udd73 @dsrvlabs",url:"https://twitter.com/WelldoneStudio_/status/1659153724550549506",imageUrl:"https://pbs.twimg.com/media/FwZ9bHZacAESxHr?format=jpg&name=large",wide:!0},{title:"Annyeonghaseyo! \ud83c\uddf0\ud83c\uddf7",description:" we were thrilled to conduct a workshop on #WELLDONEWallet & #WELLDONECode for #Sui users! We hope you found it useful for optimizing your onboarding process.",url:"https://twitter.com/WelldoneStudio_/status/1664844779774164994",imageUrl:"https://pbs.twimg.com/media/Fxq2abnaEAADPIT?format=jpg&name=4096x4096",wide:!0},{title:"Code Verification SIP for Security",description:"And we're back from break at #SuiBuilderHouse! \ud83c\udf89 Next up, we're proud to share the submission of our Code Verification SIP for Security.",url:"https://twitter.com/WelldoneStudio_/status/1664859406725705736",imageUrl:"https://pbs.twimg.com/media/FxrEpQIaYAEHIe8?format=jpg&name=4096x4096",wide:!0},{title:"#WELLDONEAcademy-Aptos & Seoul Hack 2023",description:"we're reflecting on our #Aptos contributions via #WELLDONEAcademy-Aptos & Seoul Hack 2023.",url:"https://twitter.com/WelldoneStudio_/status/1665668297822724096",imageUrl:"https://pbs.twimg.com/media/Fx2kfKDaYAET5Yz?format=jpg&name=medium",wide:!0},{title:"\ud83c\udf89 Success at Hack Holland #AptosWorldTour! \ud83c\uddf3\ud83c\uddf1",description:"#WelldoneStudio has just concluded our presentation on code verification.",url:"https://twitter.com/WelldoneStudio_/status/1666498577101889539",imageUrl:"https://pbs.twimg.com/media/FyCO2SracAA4yyd?format=jpg&name=small",wide:!0},{title:"The future is #NEAR, and #BOS is the Future!",description:"Great chat with @ilblackdragon, CEO of @NEARProtocol!",url:"https://twitter.com/WelldoneStudio_/status/1666821782194753539",imageUrl:"https://pbs.twimg.com/media/FyG9cYsaUAEuW1n?format=jpg&name=4096x4096",wide:!0}],S=[{img:"https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Dohyoung-Lim_Head-of-Contribution.jpg"},{img:"https://www.dsrvlabs.com/wp-content/uploads/2022/05/18.-Sooyoung_Hyun-747x1120.jpg"},{img:"https://www.dsrvlabs.com/wp-content/uploads/2022/08/Yoonsoo_Jang-747x1120.jpg"},{img:"https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Hyunsun-Yoo_Software-Engineer.jpg"},{img:"https://www.dsrvlabs.com/wp-content/uploads/2021/10/DSRV_Kwanhyung-Lee_UI_UX-Designer.jpg"},{img:"https://www.dsrvlabs.com/wp-content/uploads/2023/05/-%EC%B5%9C%EC%A2%85-e1684901426721.jpg"},{img:"https://avatars.githubusercontent.com/u/81923229?v=4",link:"https://github.com/Nahee-Park"},{img:"https://avatars.githubusercontent.com/u/70956926?v=4",link:"https://github.com/Yoon-Suji"}];function k(){var e=(0,i.useState)(window.innerWidth),t=e[0],o=e[1];return(0,i.useEffect)((function(){var e=function(){o(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),i.createElement(l.Z,{style:{display:"flex",flexDirection:"column",position:"relative"}},i.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"}},W.map((function(e,o){return i.createElement(E,{key:o,title:e.title,url:e.url,imageUrl:e.imageUrl,description:e.description,width:t,wide:e.wide})}))))}function O(){return i.createElement(c.Z,null,(function(){return i.createElement(k,null)}))}var x=o(79072);function L(){return i.createElement(l.Z,null,i.createElement(x.ZP,{container:!0,spacing:1},S.map((function(e,t){var o=e.img,r=e.link;return i.createElement(x.ZP,{item:!0,key:t,xs:6,md:3},i.createElement("a",{target:"_blank",href:r||"https://www.dsrvlabs.com/about/#member"},i.createElement("img",{src:o,style:{width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(100%)"}})))}))))}var A=["components"],N={slug:"/aboutus",title:"AboutUs",description:"About Us"},_="WELCOME to WELLDONE!",j={unversionedId:"aboutus/index",id:"aboutus/index",title:"AboutUs",description:"About Us",source:"@site/docs/aboutus/index.mdx",sourceDirName:"aboutus",slug:"/aboutus",permalink:"/ko/aboutus",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/aboutus/index.mdx",tags:[],version:"current",frontMatter:{slug:"/aboutus",title:"AboutUs",description:"About Us"},sidebar:"tutorialSidebar",previous:{title:"How to Migrate the Contract",permalink:"/ko/tutorials/near-ecosystem/migrate-contract"},next:{title:"WELLDONE Studio's Contributions",permalink:"/ko/aboutus/contributions"}},Z={},C=[{value:"Our Roadmap",id:"our-roadmap",level:2},{value:"News",id:"news",level:2},{value:"For Web3 Voyagers.",id:"for-web3-voyagers",level:2},{value:"Our Members",id:"our-members",level:2}],D={toc:C};function R(e){var t=e.components,i=(0,a.Z)(e,A);return(0,n.kt)("wrapper",(0,r.Z)({},D,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome-to-welldone"},"WELCOME to WELLDONE!"),(0,n.kt)("p",null,"WELLDONE Studio is a specialist team within ",(0,n.kt)("a",{parentName:"p",href:"https://dsrvlabs.com"},"DSRV"),", dedicated to crafting tools that streamline the web3 development process. With our comprehensive suite of products, we aim to create a familiar, integrated environment for developers to harness the full potential of Web3."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WELLDONE",src:o(34352).Z,width:"918",height:"600"})),(0,n.kt)("p",null,"Our offerings, such as the ",(0,n.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/welldone-wallet-for-multi/bmkakpenjmcpfhhjadflneinmhboecjf"},"WELLDONE Wallet"),",",(0,n.kt)("a",{parentName:"p",href:"https://addchain.welldonestudio.io/"},"WELLDONE AddChain"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/code"},"WELLDONE Code"),", are specifically designed to address the unique challenges of multi-chain development. These tools simplify various tasks from account creation and asset management to the addition of new networks and contract deployment across multiple networks."),(0,n.kt)("p",null,"As we continuously expand our support for additional networks, our goal remains to provide a standardized and integrated multi-chain development platform."),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"our-roadmap"},"Our Roadmap"),(0,n.kt)(u,{mdxType:"Roadmap"}),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"news"},"News"),(0,n.kt)(O,{mdxType:"News"}),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"for-web3-voyagers"},"For Web3 Voyagers."),(0,n.kt)("p",null,"Elevating the Web3 space, our brand paves the way for a streamlined journey across the digital frontier. We champion standardization, offering state-of-the-art tools that translate into a seamless, consistent experience for Web3 explorers."),(0,n.kt)("p",null,"With us, the value of Web3 unfolds through a harmonized expedition, universally accessible. We leave our footprint at every Web3 gateway, demonstrating our contribution and pioneering expertise in the ever-evolving Web3 standards. Explore with us. Pioneer with us. Let's shape the future of Web3 together."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WELLDONE",src:o(51326).Z,width:"950",height:"600"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"our-members"},"Our Members"),(0,n.kt)(L,{mdxType:"Members"}))}R.isMDXComponent=!0},86010:function(e,t,o){function r(e){var t,o,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(a&&(a+=" "),a+=o);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,o=0,a="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}o.d(t,{Z:function(){return a}})},69921:function(e,t){var o,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),d=Symbol.for("react.context"),u=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case l:case n:case p:case m:return e;default:switch(e=e&&e.$$typeof){case u:case d:case c:case g:case f:case s:return e;default:return t}}case a:return t}}}o=Symbol.for("react.module.reference")},59864:function(e,t,o){o(69921)},75251:function(e,t,o){var r=o(67294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,i={},d=null,u=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)n.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},85893:function(e,t,o){e.exports=o(75251)},34352:function(e,t,o){t.Z=o.p+"assets/images/aboutus_brand-e02e18d18e823398747fa2fdb346d076.jpg"},51326:function(e,t,o){t.Z=o.p+"assets/images/aboutus_welcome-74041509eefcb3cf00e8057ee1a286f1.jpg"},44415:function(e,t,o){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,{Z:function(){return r}})}}]);