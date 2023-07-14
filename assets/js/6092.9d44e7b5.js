"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[6092],{70917:function(e,t,n){n.d(t,{F4:function(){return c},xB:function(){return u}});var r=n(67294),o=(n(8417),n(52443)),i=(n(8679),n(70444)),s=n(48137),l=n(27278),u=(0,o.w)((function(e,t){var n=e.styles,u=(0,s.O)([n],void 0,(0,r.useContext)(o.T)),a=(0,r.useRef)();return(0,l.j)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,o=document.querySelector('style[data-emotion="'+e+" "+u.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==o&&(r=!0,o.setAttribute("data-emotion",e),n.hydrate([o])),a.current=[n,r],function(){n.flush()}}),[t]),(0,l.j)((function(){var e=a.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==u.next&&(0,i.My)(t,u.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",u,n,!1)}}),[t,u.name]),null}));function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.O)(t)}var c=function(){var e=a.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},50522:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(83117),o=n(80102),i=n(67294),s=n(93680),l=n(94780),u=n(81719),a=n(78884),c=n(84771),p=n(26432),d=n(51625),f=n(73350),h=n(70917),m=n(85893);var b=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:l,rippleSize:u,in:a,onExited:c,timeout:p}=e,[d,f]=i.useState(!1),h=(0,s.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b={width:u,height:u,top:-u/2+l,left:-u/2+o},v=(0,s.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return a||d||f(!0),i.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,a,p]),(0,m.jsx)("span",{className:h,style:b,children:(0,m.jsx)("span",{className:v})})},v=n(1588);var y=(0,v.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const g=["center","classes","className"];let x,Z,R,M,E=e=>e;const k=(0,h.F4)(x||(x=E`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),T=(0,h.F4)(Z||(Z=E`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),P=(0,h.F4)(R||(R=E`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),C=(0,u.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),w=(0,u.ZP)(b,{name:"MuiTouchRipple",slot:"Ripple"})(M||(M=E`
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
`),y.rippleVisible,k,550,(({theme:e})=>e.transitions.easing.easeInOut),y.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),y.child,y.childLeaving,T,550,(({theme:e})=>e.transitions.easing.easeInOut),y.childPulsate,P,(({theme:e})=>e.transitions.easing.easeInOut));var S=i.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiTouchRipple"}),{center:l=!1,classes:u={},className:c}=n,p=(0,o.Z)(n,g),[d,h]=i.useState([]),b=i.useRef(0),v=i.useRef(null);i.useEffect((()=>{v.current&&(v.current(),v.current=null)}),[d]);const x=i.useRef(!1),Z=i.useRef(null),R=i.useRef(null),M=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(Z.current)}),[]);const E=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;h((e=>[...e,(0,m.jsx)(w,{classes:{ripple:(0,s.Z)(u.ripple,y.ripple),rippleVisible:(0,s.Z)(u.rippleVisible,y.rippleVisible),ripplePulsate:(0,s.Z)(u.ripplePulsate,y.ripplePulsate),child:(0,s.Z)(u.child,y.child),childLeaving:(0,s.Z)(u.childLeaving,y.childLeaving),childPulsate:(0,s.Z)(u.childPulsate,y.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},b.current)])),b.current+=1,v.current=i}),[u]),k=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=l||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&x.current)return void(x.current=!1);"touchstart"===(null==e?void 0:e.type)&&(x.current=!0);const s=i?null:M.current,u=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(u.width/2),c=Math.round(u.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-u.left),c=Math.round(n-u.top)}if(o)p=Math.sqrt((2*u.width**2+u.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===R.current&&(R.current=()=>{E({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},Z.current=setTimeout((()=>{R.current&&(R.current(),R.current=null)}),80)):E({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})}),[l,E]),T=i.useCallback((()=>{k({},{pulsate:!0})}),[k]),P=i.useCallback(((e,t)=>{if(clearTimeout(Z.current),"touchend"===(null==e?void 0:e.type)&&R.current)return R.current(),R.current=null,void(Z.current=setTimeout((()=>{P(e,t)})));R.current=null,h((e=>e.length>0?e.slice(1):e)),v.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:T,start:k,stop:P})),[T,k,P]),(0,m.jsx)(C,(0,r.Z)({className:(0,s.Z)(y.root,u.root,c),ref:M},p,{children:(0,m.jsx)(f.Z,{component:null,exit:!0,children:d})}))})),V=n(34867);function j(e){return(0,V.Z)("MuiButtonBase",e)}var $=(0,v.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const D=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],F=(0,u.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${$.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});var B=i.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiButtonBase"}),{action:u,centerRipple:f=!1,children:h,className:b,component:v="button",disabled:y=!1,disableRipple:g=!1,disableTouchRipple:x=!1,focusRipple:Z=!1,LinkComponent:R="a",onBlur:M,onClick:E,onContextMenu:k,onDragLeave:T,onFocus:P,onFocusVisible:C,onKeyDown:w,onKeyUp:V,onMouseDown:$,onMouseLeave:B,onMouseUp:L,onTouchEnd:O,onTouchMove:N,onTouchStart:I,tabIndex:z=0,TouchRippleProps:A,touchRippleRef:X,type:U}=n,Y=(0,o.Z)(n,D),_=i.useRef(null),K=i.useRef(null),H=(0,c.Z)(K,X),{isFocusVisibleRef:W,onFocus:q,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=i.useState(!1);y&&Q&&ee(!1),i.useImperativeHandle(u,(()=>({focusVisible:()=>{ee(!0),_.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!g&&!y;function oe(e,t,n=x){return(0,p.Z)((r=>{t&&t(r);return!n&&K.current&&K.current[e](r),!0}))}i.useEffect((()=>{Q&&Z&&!g&&te&&K.current.pulsate()}),[g,Z,Q,te]);const ie=oe("start",$),se=oe("stop",k),le=oe("stop",T),ue=oe("stop",L),ae=oe("stop",(e=>{Q&&e.preventDefault(),B&&B(e)})),ce=oe("start",I),pe=oe("stop",O),de=oe("stop",N),fe=oe("stop",(e=>{G(e),!1===W.current&&ee(!1),M&&M(e)}),!1),he=(0,p.Z)((e=>{_.current||(_.current=e.currentTarget),q(e),!0===W.current&&(ee(!0),C&&C(e)),P&&P(e)})),me=()=>{const e=_.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},be=i.useRef(!1),ve=(0,p.Z)((e=>{Z&&!be.current&&Q&&K.current&&" "===e.key&&(be.current=!0,K.current.stop(e,(()=>{K.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),w&&w(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!y&&(e.preventDefault(),E&&E(e))})),ye=(0,p.Z)((e=>{Z&&" "===e.key&&K.current&&Q&&!e.defaultPrevented&&(be.current=!1,K.current.stop(e,(()=>{K.current.pulsate(e)}))),V&&V(e),E&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&E(e)}));let ge=v;"button"===ge&&(Y.href||Y.to)&&(ge=R);const xe={};"button"===ge?(xe.type=void 0===U?"button":U,xe.disabled=y):(Y.href||Y.to||(xe.role="button"),y&&(xe["aria-disabled"]=y));const Ze=(0,c.Z)(t,J,_);const Re=(0,r.Z)({},n,{centerRipple:f,component:v,disabled:y,disableRipple:g,disableTouchRipple:x,focusRipple:Z,tabIndex:z,focusVisible:Q}),Me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},s=(0,l.Z)(i,j,o);return n&&r&&(s.root+=` ${r}`),s})(Re);return(0,m.jsxs)(F,(0,r.Z)({as:ge,className:(0,s.Z)(Me.root,b),ownerState:Re,onBlur:fe,onClick:E,onContextMenu:se,onFocus:he,onKeyDown:ve,onKeyUp:ye,onMouseDown:ie,onMouseLeave:ae,onMouseUp:ue,onDragLeave:le,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Ze,tabIndex:y?-1:z,type:U},xe,Y,{children:[h,re?(0,m.jsx)(S,(0,r.Z)({ref:H,center:f},A)):null]}))}))},62097:function(e,t,n){n.d(t,{Z:function(){return i}});n(67294);var r=n(11938),o=n(25165);function i(){return(0,r.Z)(o.Z)}},39707:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(83117),o=n(80102),i=n(59766),s=n(85578);const l=["sx"];function u(e){const{sx:t}=e,n=(0,o.Z)(e,l),{systemProps:u,otherProps:a}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{s.Gc[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let c;return c=Array.isArray(t)?[u,...t]:"function"==typeof t?(...e)=>{const n=t(...e);return(0,i.P)(n)?(0,r.Z)({},u,n):u}:(0,r.Z)({},u,t),(0,r.Z)({},a,{sx:c})}},73350:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(80102),o=n(83117),i=n(44415),s=n(21073),l=n(67294),u=n(220);function a(e,t){var n=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,l.isValidElement)(e)?t(e):e}(e)})),n}function c(e,t,n){return null!=n[t]?n[t]:e.props[t]}function p(e,t,n){var r=a(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var s in e)s in t?i.length&&(o[s]=i,i=[]):i.push(s);var l={};for(var u in t){if(o[u])for(r=0;r<o[u].length;r++){var a=o[u][r];l[o[u][r]]=n(a)}l[u]=n(u)}for(r=0;r<i.length;r++)l[i[r]]=n(i[r]);return l}(t,r);return Object.keys(o).forEach((function(i){var s=o[i];if((0,l.isValidElement)(s)){var u=i in t,a=i in r,p=t[i],d=(0,l.isValidElement)(p)&&!p.props.in;!a||u&&!d?a||!u||d?a&&u&&(0,l.isValidElement)(p)&&(o[i]=(0,l.cloneElement)(s,{onExited:n.bind(null,s),in:p.props.in,exit:c(s,"exit",e),enter:c(s,"enter",e)})):o[i]=(0,l.cloneElement)(s,{in:!1}):o[i]=(0,l.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:c(s,"exit",e),enter:c(s,"enter",e)})}})),o}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},f=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind((0,i.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,a(n.children,(function(e){return(0,l.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:c(e,"appear",n),enter:c(e,"enter",n),exit:c(e,"exit",n)})}))):p(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=a(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,o.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=(0,r.Z)(e,["component","childFactory"]),i=this.state.contextValue,s=d(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?l.createElement(u.Z.Provider,{value:i},s):l.createElement(u.Z.Provider,{value:i},l.createElement(t,o,s))},t}(l.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(e){return e}};var h=f},220:function(e,t,n){var r=n(67294);t.Z=r.createContext(null)}}]);