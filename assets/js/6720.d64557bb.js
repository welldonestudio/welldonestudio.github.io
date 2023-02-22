/*! For license information please see 6720.d64557bb.js.LICENSE.txt */
"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[6720],{70917:function(e,t,n){n.d(t,{F4:function(){return c},xB:function(){return s}});var r=n(67294),o=(n(8417),n(52443)),i=(n(8679),n(70444)),l=n(48137),a=n(27278),s=(0,o.w)((function(e,t){var n=e.styles,s=(0,l.O)([n],void 0,(0,r.useContext)(o.T)),u=(0,r.useRef)();return(0,a.j)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,o=document.querySelector('style[data-emotion="'+e+" "+s.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==o&&(r=!0,o.setAttribute("data-emotion",e),n.hydrate([o])),u.current=[n,r],function(){n.flush()}}),[t]),(0,a.j)((function(){var e=u.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==s.next&&(0,i.My)(t,s.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",s,n,!1)}}),[t,s.name]),null}));function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,l.O)(t)}var c=function(){var e=u.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},50522:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(83117),o=n(80102),i=n(67294),l=n(93680),a=n(94780),s=n(81719),u=n(78884),c=n(84771),p=n(26432),d=n(51625),f=n(73350),h=n(70917),m=n(85893);var b=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:a,rippleSize:s,in:u,onExited:c,timeout:p}=e,[d,f]=i.useState(!1),h=(0,l.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b={width:s,height:s,top:-s/2+a,left:-s/2+o},v=(0,l.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||f(!0),i.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,m.jsx)("span",{className:h,style:b,children:(0,m.jsx)("span",{className:v})})},v=n(1588);var y=(0,v.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const g=["center","classes","className"];let x,R,Z,M,E=e=>e;const S=(0,h.F4)(x||(x=E`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),k=(0,h.F4)(R||(R=E`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),T=(0,h.F4)(Z||(Z=E`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),w=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),C=(0,s.ZP)(b,{name:"MuiTouchRipple",slot:"Ripple"})(M||(M=E`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),y.rippleVisible,S,550,(({theme:e})=>e.transitions.easing.easeInOut),y.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),y.child,y.childLeaving,k,550,(({theme:e})=>e.transitions.easing.easeInOut),y.childPulsate,T,(({theme:e})=>e.transitions.easing.easeInOut));var P=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTouchRipple"}),{center:a=!1,classes:s={},className:c}=n,p=(0,o.Z)(n,g),[d,h]=i.useState([]),b=i.useRef(0),v=i.useRef(null);i.useEffect((()=>{v.current&&(v.current(),v.current=null)}),[d]);const x=i.useRef(!1),R=i.useRef(null),Z=i.useRef(null),M=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(R.current)}),[]);const E=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;h((e=>[...e,(0,m.jsx)(C,{classes:{ripple:(0,l.Z)(s.ripple,y.ripple),rippleVisible:(0,l.Z)(s.rippleVisible,y.rippleVisible),ripplePulsate:(0,l.Z)(s.ripplePulsate,y.ripplePulsate),child:(0,l.Z)(s.child,y.child),childLeaving:(0,l.Z)(s.childLeaving,y.childLeaving),childPulsate:(0,l.Z)(s.childPulsate,y.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},b.current)])),b.current+=1,v.current=i}),[s]),S=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=a||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&x.current)return void(x.current=!1);"touchstart"===(null==e?void 0:e.type)&&(x.current=!0);const l=i?null:M.current,s=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(s.width/2),c=Math.round(s.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-s.left),c=Math.round(n-s.top)}if(o)p=Math.sqrt((2*s.width**2+s.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===Z.current&&(Z.current=()=>{E({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},R.current=setTimeout((()=>{Z.current&&(Z.current(),Z.current=null)}),80)):E({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[a,E]),k=i.useCallback((()=>{S({},{pulsate:!0})}),[S]),T=i.useCallback(((e,t)=>{if(clearTimeout(R.current),"touchend"===(null==e?void 0:e.type)&&Z.current)return Z.current(),Z.current=null,void(R.current=setTimeout((()=>{T(e,t)})));Z.current=null,h((e=>e.length>0?e.slice(1):e)),v.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:k,start:S,stop:T})),[k,S,T]),(0,m.jsx)(w,(0,r.Z)({className:(0,l.Z)(y.root,s.root,c),ref:M},p,{children:(0,m.jsx)(f.Z,{component:null,exit:!0,children:d})}))})),V=n(34867);function $(e){return(0,V.Z)("MuiButtonBase",e)}var j=(0,v.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const D=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],F=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${j.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});var B=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:f=!1,children:h,className:b,component:v="button",disabled:y=!1,disableRipple:g=!1,disableTouchRipple:x=!1,focusRipple:R=!1,LinkComponent:Z="a",onBlur:M,onClick:E,onContextMenu:S,onDragLeave:k,onFocus:T,onFocusVisible:w,onKeyDown:C,onKeyUp:V,onMouseDown:j,onMouseLeave:B,onMouseUp:L,onTouchEnd:N,onTouchMove:O,onTouchStart:I,tabIndex:_=0,TouchRippleProps:z,touchRippleRef:X,type:A}=n,U=(0,o.Z)(n,D),Y=i.useRef(null),K=i.useRef(null),H=(0,c.Z)(K,X),{isFocusVisibleRef:W,onFocus:q,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=i.useState(!1);y&&Q&&ee(!1),i.useImperativeHandle(s,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!g&&!y;function oe(e,t,n=x){return(0,p.Z)((r=>{t&&t(r);return!n&&K.current&&K.current[e](r),!0}))}i.useEffect((()=>{Q&&R&&!g&&te&&K.current.pulsate()}),[g,R,Q,te]);const ie=oe("start",j),le=oe("stop",S),ae=oe("stop",k),se=oe("stop",L),ue=oe("stop",(e=>{Q&&e.preventDefault(),B&&B(e)})),ce=oe("start",I),pe=oe("stop",N),de=oe("stop",O),fe=oe("stop",(e=>{G(e),!1===W.current&&ee(!1),M&&M(e)}),!1),he=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),q(e),!0===W.current&&(ee(!0),w&&w(e)),T&&T(e)})),me=()=>{const e=Y.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},be=i.useRef(!1),ve=(0,p.Z)((e=>{R&&!be.current&&Q&&K.current&&" "===e.key&&(be.current=!0,K.current.stop(e,(()=>{K.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!y&&(e.preventDefault(),E&&E(e))})),ye=(0,p.Z)((e=>{R&&" "===e.key&&K.current&&Q&&!e.defaultPrevented&&(be.current=!1,K.current.stop(e,(()=>{K.current.pulsate(e)}))),V&&V(e),E&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&E(e)}));let ge=v;"button"===ge&&(U.href||U.to)&&(ge=Z);const xe={};"button"===ge?(xe.type=void 0===A?"button":A,xe.disabled=y):(U.href||U.to||(xe.role="button"),y&&(xe["aria-disabled"]=y));const Re=(0,c.Z)(t,J,Y);const Ze=(0,r.Z)({},n,{centerRipple:f,component:v,disabled:y,disableRipple:g,disableTouchRipple:x,focusRipple:R,tabIndex:_,focusVisible:Q}),Me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,a.Z)(i,$,o);return n&&r&&(l.root+=` ${r}`),l})(Ze);return(0,m.jsxs)(F,(0,r.Z)({as:ge,className:(0,l.Z)(Me.root,b),ownerState:Ze,onBlur:fe,onClick:E,onContextMenu:le,onFocus:he,onKeyDown:ve,onKeyUp:ye,onMouseDown:ie,onMouseLeave:ue,onMouseUp:se,onDragLeave:ae,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Re,tabIndex:y?-1:_,type:A},xe,U,{children:[h,re?(0,m.jsx)(P,(0,r.Z)({ref:H,center:f},z)):null]}))}))},69921:function(e,t){var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case a:case l:case d:case f:return e;default:switch(e=e&&e.$$typeof){case c:case u:case p:case m:case h:case s:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference")},59864:function(e,t,n){n(69921)},73350:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(80102),o=n(83117),i=n(44415),l=n(21073),a=n(67294),s=n(220);function u(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,a.isValidElement)(e)?t(e):e}(e)})),n}function c(e,t,n){return null!=n[t]?n[t]:e.props[t]}function p(e,t,n){var r=u(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var l in e)l in t?i.length&&(o[l]=i,i=[]):i.push(l);var a={};for(var s in t){if(o[s])for(r=0;r<o[s].length;r++){var u=o[s][r];a[o[s][r]]=n(u)}a[s]=n(s)}for(r=0;r<i.length;r++)a[i[r]]=n(i[r]);return a}(t,r);return Object.keys(o).forEach((function(i){var l=o[i];if((0,a.isValidElement)(l)){var s=i in t,u=i in r,p=t[i],d=(0,a.isValidElement)(p)&&!p.props.in;!u||s&&!d?u||!s||d?u&&s&&(0,a.isValidElement)(p)&&(o[i]=(0,a.cloneElement)(l,{onExited:n.bind(null,l),in:p.props.in,exit:c(l,"exit",e),enter:c(l,"enter",e)})):o[i]=(0,a.cloneElement)(l,{in:!1}):o[i]=(0,a.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:c(l,"exit",e),enter:c(l,"enter",e)})}})),o}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},f=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind((0,i.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,l.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,u(n.children,(function(e){return(0,a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:c(e,"appear",n),enter:c(e,"enter",n),exit:c(e,"exit",n)})}))):p(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=u(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,o.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=(0,r.Z)(e,["component","childFactory"]),i=this.state.contextValue,l=d(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?a.createElement(s.Z.Provider,{value:i},l):a.createElement(s.Z.Provider,{value:i},a.createElement(t,o,l))},t}(a.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(e){return e}};var h=f},220:function(e,t,n){var r=n(67294);t.Z=r.createContext(null)}}]);