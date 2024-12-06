"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[8642],{3905:function(e,o,t){t.d(o,{Zo:function(){return d},kt:function(){return v}});var r=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},d=function(e){var o=s(e.components);return r.createElement(c.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),v=a,m=u["".concat(c,".").concat(v)]||u[v]||p[v]||n;return t?r.createElement(m,i(i({ref:o},d),{},{components:t})):r.createElement(m,i({ref:o},d))}));function v(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=u;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49837:function(e,o,t){t.d(o,{Z:function(){return b}});var r=t(83117),a=t(80102),n=t(67294),i=t(93680),l=t(94780),c=t(81719),s=t(78884),d=t(70918),p=t(1588),u=t(34867);function v(e){return(0,u.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var m=t(85893);const f=["className","raised"],g=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({overflow:"hidden"})));var b=n.forwardRef((function(e,o){const t=(0,s.Z)({props:e,name:"MuiCard"}),{className:n,raised:c=!1}=t,d=(0,a.Z)(t,f),p=(0,r.Z)({},t,{raised:c}),u=(e=>{const{classes:o}=e;return(0,l.Z)({root:["root"]},v,o)})(p);return(0,m.jsx)(g,(0,r.Z)({className:(0,i.Z)(u.root,n),elevation:c?8:void 0,ref:o,ownerState:p},d))}))},91359:function(e,o,t){t.d(o,{Z:function(){return g}});var r=t(83117),a=t(80102),n=t(67294),i=t(93680),l=t(94780),c=t(81719),s=t(78884),d=t(1588),p=t(34867);function u(e){return(0,p.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var v=t(85893);const m=["className","component"],f=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var g=n.forwardRef((function(e,o){const t=(0,s.Z)({props:e,name:"MuiCardContent"}),{className:n,component:c="div"}=t,d=(0,a.Z)(t,m),p=(0,r.Z)({},t,{component:c}),g=(e=>{const{classes:o}=e;return(0,l.Z)({root:["root"]},u,o)})(p);return(0,v.jsx)(f,(0,r.Z)({as:c,className:(0,i.Z)(g.root,n),ownerState:p,ref:o},d))}))},69647:function(e,o,t){t.d(o,{Z:function(){return h}});var r=t(80102),a=t(83117),n=t(67294),i=t(93680),l=t(94780),c=t(78884),s=t(81719),d=t(1588),p=t(34867);function u(e){return(0,p.Z)("MuiCardMedia",e)}(0,d.Z)("MuiCardMedia",["root","media","img"]);var v=t(85893);const m=["children","className","component","image","src","style"],f=(0,s.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:r,isImageComponent:a}=t;return[o.root,r&&o.media,a&&o.img]}})((({ownerState:e})=>(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),g=["video","audio","picture","iframe","img"],b=["picture","img"];var h=n.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:s,component:d="div",image:p,src:h,style:y}=t,Z=(0,r.Z)(t,m),C=-1!==g.indexOf(d),$=!C&&p?(0,a.Z)({backgroundImage:`url("${p}")`},y):y,k=(0,a.Z)({},t,{component:d,isMediaComponent:C,isImageComponent:-1!==b.indexOf(d)}),w=(e=>{const{classes:o,isMediaComponent:t,isImageComponent:r}=e,a={root:["root",t&&"media",r&&"img"]};return(0,l.Z)(a,u,o)})(k);return(0,v.jsx)(f,(0,a.Z)({className:(0,i.Z)(w.root,s),as:d,role:!C&&p?"img":void 0,ref:o,style:$,ownerState:k,src:C?p||h:void 0},Z,{children:n}))}))},21448:function(e,o,t){t.d(o,{Z:function(){return x}});var r=t(80102),a=t(83117),n=t(67294),i=t(93680),l=t(94780),c=t(41796),s=t(54235),d=t(85893),p=(0,s.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),u=t(84771),v=t(36622),m=t(83187),f=t(78884),g=t(81719),b=t(1588),h=t(34867);function y(e){return(0,h.Z)("MuiChip",e)}var Z=(0,b.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]);const C=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],$=(0,g.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{color:r,iconColor:a,clickable:n,onDelete:i,size:l,variant:c}=t;return[{[`& .${Z.avatar}`]:o.avatar},{[`& .${Z.avatar}`]:o[`avatar${(0,v.Z)(l)}`]},{[`& .${Z.avatar}`]:o[`avatarColor${(0,v.Z)(r)}`]},{[`& .${Z.icon}`]:o.icon},{[`& .${Z.icon}`]:o[`icon${(0,v.Z)(l)}`]},{[`& .${Z.icon}`]:o[`iconColor${(0,v.Z)(a)}`]},{[`& .${Z.deleteIcon}`]:o.deleteIcon},{[`& .${Z.deleteIcon}`]:o[`deleteIcon${(0,v.Z)(l)}`]},{[`& .${Z.deleteIcon}`]:o[`deleteIconColor${(0,v.Z)(r)}`]},{[`& .${Z.deleteIcon}`]:o[`deleteIcon${(0,v.Z)(c)}Color${(0,v.Z)(r)}`]},o.root,o[`size${(0,v.Z)(l)}`],o[`color${(0,v.Z)(r)}`],n&&o.clickable,n&&"default"!==r&&o[`clickableColor${(0,v.Z)(r)})`],i&&o.deletable,i&&"default"!==r&&o[`deletableColor${(0,v.Z)(r)}`],o[c],o[`${c}${(0,v.Z)(r)}`]]}})((({theme:e,ownerState:o})=>{const t=(0,c.Fq)(e.palette.text.primary,.26),r="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,a.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Z.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:r,fontSize:e.typography.pxToRem(12)},[`& .${Z.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${Z.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${Z.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${Z.icon}`]:(0,a.Z)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,a.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:r},"default"!==o.color&&{color:"inherit"})),[`& .${Z.deleteIcon}`]:(0,a.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:t,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,c.Fq)(t,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:e.vars?`rgba(${e.vars.palette[o.color].contrastTextChannel} / 0.7)`:(0,c.Fq)(e.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(e.vars||e).palette[o.color].main,color:(e.vars||e).palette[o.color].contrastText},o.onDelete&&{[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity+e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}})}),(({theme:e,ownerState:o})=>(0,a.Z)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity+e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity+e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},o.clickable&&"default"!==o.color&&{[`&:hover, &.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}})),(({theme:e,ownerState:o})=>(0,a.Z)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${Z.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${Z.avatar}`]:{marginLeft:4},[`& .${Z.avatarSmall}`]:{marginLeft:2},[`& .${Z.icon}`]:{marginLeft:4},[`& .${Z.iconSmall}`]:{marginLeft:2},[`& .${Z.deleteIcon}`]:{marginRight:5},[`& .${Z.deleteIconSmall}`]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:(e.vars||e).palette[o.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:(0,c.Fq)(e.palette[o.color].main,.7)}`,[`&.${Z.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity)},[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,c.Fq)(e.palette[o.color].main,e.palette.action.focusOpacity)},[`& .${Z.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:(0,c.Fq)(e.palette[o.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].main}}}))),k=(0,g.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:t}=e,{size:r}=t;return[o.label,o[`label${(0,v.Z)(r)}`]]}})((({ownerState:e})=>(0,a.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===e.size&&{paddingLeft:8,paddingRight:8})));function w(e){return"Backspace"===e.key||"Delete"===e.key}var x=n.forwardRef((function(e,o){const t=(0,f.Z)({props:e,name:"MuiChip"}),{avatar:c,className:s,clickable:g,color:b="default",component:h,deleteIcon:Z,disabled:x=!1,icon:S,label:O,onClick:M,onDelete:R,onKeyDown:P,onKeyUp:I,size:N="medium",variant:j="filled"}=t,D=(0,r.Z)(t,C),T=n.useRef(null),z=(0,u.Z)(T,o),F=e=>{e.stopPropagation(),R&&R(e)},E=!(!1===g||!M)||g,B=E||R?m.Z:h||"div",q=(0,a.Z)({},t,{component:B,disabled:x,size:N,color:b,iconColor:n.isValidElement(S)&&S.props.color||b,onDelete:!!R,clickable:E,variant:j}),L=(e=>{const{classes:o,disabled:t,size:r,color:a,iconColor:n,onDelete:i,clickable:c,variant:s}=e,d={root:["root",s,t&&"disabled",`size${(0,v.Z)(r)}`,`color${(0,v.Z)(a)}`,c&&"clickable",c&&`clickableColor${(0,v.Z)(a)}`,i&&"deletable",i&&`deletableColor${(0,v.Z)(a)}`,`${s}${(0,v.Z)(a)}`],label:["label",`label${(0,v.Z)(r)}`],avatar:["avatar",`avatar${(0,v.Z)(r)}`,`avatarColor${(0,v.Z)(a)}`],icon:["icon",`icon${(0,v.Z)(r)}`,`iconColor${(0,v.Z)(n)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,v.Z)(r)}`,`deleteIconColor${(0,v.Z)(a)}`,`deleteIcon${(0,v.Z)(s)}Color${(0,v.Z)(a)}`]};return(0,l.Z)(d,y,o)})(q),V=B===m.Z?(0,a.Z)({component:h||"div",focusVisibleClassName:L.focusVisible},R&&{disableRipple:!0}):{};let W=null;R&&(W=Z&&n.isValidElement(Z)?n.cloneElement(Z,{className:(0,i.Z)(Z.props.className,L.deleteIcon),onClick:F}):(0,d.jsx)(p,{className:(0,i.Z)(L.deleteIcon),onClick:F}));let A=null;c&&n.isValidElement(c)&&(A=n.cloneElement(c,{className:(0,i.Z)(L.avatar,c.props.className)}));let K=null;return S&&n.isValidElement(S)&&(K=n.cloneElement(S,{className:(0,i.Z)(L.icon,S.props.className)})),(0,d.jsxs)($,(0,a.Z)({as:B,className:(0,i.Z)(L.root,s),disabled:!(!E||!x)||void 0,onClick:M,onKeyDown:e=>{e.currentTarget===e.target&&w(e)&&e.preventDefault(),P&&P(e)},onKeyUp:e=>{e.currentTarget===e.target&&(R&&w(e)?R(e):"Escape"===e.key&&T.current&&T.current.blur()),I&&I(e)},ref:z,ownerState:q},V,D,{children:[A||K,(0,d.jsx)(k,{className:(0,i.Z)(L.label),ownerState:q,children:O}),W]}))}))},68346:function(e,o,t){t.d(o,{Z:function(){return x}});var r=t(80102),a=t(83117),n=t(67294),i=t(93680),l=t(94780),c=t(36622),s=t(81719),d=t(78884),p=t(51625),u=t(84771),v=t(29630),m=t(1588),f=t(34867);function g(e){return(0,f.Z)("MuiLink",e)}var b=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),h=t(54844),y=t(41796);const Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var C=({theme:e,ownerState:o})=>{const t=(e=>Z[e]||e)(o.color),r=(0,h.D)(e,`palette.${t}`,!1)||o.color,a=(0,h.D)(e,`palette.${t}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:(0,y.Fq)(r,.4)},$=t(85893);const k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],w=(0,s.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`underline${(0,c.Z)(t.underline)}`],"button"===t.component&&o.button]}})((({theme:e,ownerState:o})=>(0,a.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:C({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}})));var x=n.forwardRef((function(e,o){const t=(0,d.Z)({props:e,name:"MuiLink"}),{className:s,color:v="primary",component:m="a",onBlur:f,onFocus:b,TypographyClasses:h,underline:y="always",variant:C="inherit",sx:x}=t,S=(0,r.Z)(t,k),{isFocusVisibleRef:O,onBlur:M,onFocus:R,ref:P}=(0,p.Z)(),[I,N]=n.useState(!1),j=(0,u.Z)(o,P),D=(0,a.Z)({},t,{color:v,component:m,focusVisible:I,underline:y,variant:C}),T=(e=>{const{classes:o,component:t,focusVisible:r,underline:a}=e,n={root:["root",`underline${(0,c.Z)(a)}`,"button"===t&&"button",r&&"focusVisible"]};return(0,l.Z)(n,g,o)})(D);return(0,$.jsx)(w,(0,a.Z)({color:v,className:(0,i.Z)(T.root,s),classes:h,component:m,onBlur:e=>{M(e),!1===O.current&&N(!1),f&&f(e)},onFocus:e=>{R(e),!0===O.current&&N(!0),b&&b(e)},ref:j,ownerState:D,variant:C,sx:[...Object.keys(Z).includes(v)?[]:[{color:v}],...Array.isArray(x)?x:[x]]},S))}))},70918:function(e,o,t){t.d(o,{Z:function(){return h}});var r=t(80102),a=t(83117),n=t(67294),i=t(93680),l=t(94780),c=t(41796),s=t(81719),d=t(78884),p=t(1588),u=t(34867);function v(e){return(0,u.Z)("MuiPaper",e)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=t(85893);const f=["className","component","elevation","square","variant"],g=e=>{let o;return o=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(o/100).toFixed(2)},b=(0,s.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],!t.square&&o.rounded,"elevation"===t.variant&&o[`elevation${t.elevation}`]]}})((({theme:e,ownerState:o})=>{var t;return(0,a.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},"outlined"===o.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===o.variant&&(0,a.Z)({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,c.Fq)("#fff",g(o.elevation))}, ${(0,c.Fq)("#fff",g(o.elevation))})`},e.vars&&{backgroundImage:null==(t=e.vars.overlays)?void 0:t[o.elevation]}))}));var h=n.forwardRef((function(e,o){const t=(0,d.Z)({props:e,name:"MuiPaper"}),{className:n,component:c="div",elevation:s=1,square:p=!1,variant:u="elevation"}=t,g=(0,r.Z)(t,f),h=(0,a.Z)({},t,{component:c,elevation:s,square:p,variant:u}),y=(e=>{const{square:o,elevation:t,variant:r,classes:a}=e,n={root:["root",r,!o&&"rounded","elevation"===r&&`elevation${t}`]};return(0,l.Z)(n,v,a)})(h);return(0,m.jsx)(b,(0,a.Z)({as:c,ownerState:h,className:(0,i.Z)(y.root,n),ref:o},g))}))},9144:function(e,o,t){var r=t(80102),a=t(83117),n=t(67294),i=t(95408),l=t(98700),c=t(39707),s=t(59766),d=t(81719),p=t(78884),u=t(85893);const v=["component","direction","spacing","divider","children"];function m(e,o){const t=n.Children.toArray(e).filter(Boolean);return t.reduce(((e,r,a)=>(e.push(r),a<t.length-1&&e.push(n.cloneElement(o,{key:`separator-${a}`})),e)),[])}const f=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>[o.root]})((({ownerState:e,theme:o})=>{let t=(0,a.Z)({display:"flex",flexDirection:"column"},(0,i.k9)({theme:o},(0,i.P$)({values:e.direction,breakpoints:o.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,l.hB)(o),a=Object.keys(o.breakpoints.values).reduce(((o,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(o[t]=!0),o)),{}),n=(0,i.P$)({values:e.direction,base:a}),c=(0,i.P$)({values:e.spacing,base:a});"object"==typeof n&&Object.keys(n).forEach(((e,o,t)=>{if(!n[e]){const r=o>0?n[t[o-1]]:"column";n[e]=r}}));const d=(o,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${a=t?n[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,l.NA)(r,o)}};var a};t=(0,s.Z)(t,(0,i.k9)({theme:o},c,d))}return t=(0,i.dt)(o.breakpoints,t),t})),g=n.forwardRef((function(e,o){const t=(0,p.Z)({props:e,name:"MuiStack"}),n=(0,c.Z)(t),{component:i="div",direction:l="column",spacing:s=0,divider:d,children:g}=n,b=(0,r.Z)(n,v),h={direction:l,spacing:s};return(0,u.jsx)(f,(0,a.Z)({as:i,ownerState:h,ref:o},b,{children:d?m(g,d):g}))}));o.Z=g},29630:function(e,o,t){t.d(o,{Z:function(){return Z}});var r=t(80102),a=t(83117),n=t(67294),i=t(93680),l=t(39707),c=t(94780),s=t(81719),d=t(78884),p=t(36622),u=t(1588),v=t(34867);function m(e){return(0,v.Z)("MuiTypography",e)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=t(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.variant&&o[t.variant],"inherit"!==t.align&&o[`align${(0,p.Z)(t.align)}`],t.noWrap&&o.noWrap,t.gutterBottom&&o.gutterBottom,t.paragraph&&o.paragraph]}})((({theme:e,ownerState:o})=>(0,a.Z)({margin:0},o.variant&&e.typography[o.variant],"inherit"!==o.align&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16}))),h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var Z=n.forwardRef((function(e,o){const t=(0,d.Z)({props:e,name:"MuiTypography"}),n=(e=>y[e]||e)(t.color),s=(0,l.Z)((0,a.Z)({},t,{color:n})),{align:u="inherit",className:v,component:Z,gutterBottom:C=!1,noWrap:$=!1,paragraph:k=!1,variant:w="body1",variantMapping:x=h}=s,S=(0,r.Z)(s,g),O=(0,a.Z)({},s,{align:u,color:n,className:v,component:Z,gutterBottom:C,noWrap:$,paragraph:k,variant:w,variantMapping:x}),M=Z||(k?"p":x[w]||h[w])||"span",R=(e=>{const{align:o,gutterBottom:t,noWrap:r,paragraph:a,variant:n,classes:i}=e,l={root:["root",n,"inherit"!==e.align&&`align${(0,p.Z)(o)}`,t&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,c.Z)(l,m,i)})(O);return(0,f.jsx)(b,(0,a.Z)({as:M,ref:o,ownerState:O,className:(0,i.Z)(R.root,v)},S))}))},62097:function(e,o,t){t.d(o,{Z:function(){return n}});t(67294);var r=t(96682),a=t(14589);function n(){return(0,r.Z)(a.Z)}}}]);