/*! For license information please see 8150.d0b89eb7.js.LICENSE.txt */
"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[8150],{70917:function(e,t,n){n.d(t,{F4:function(){return c},xB:function(){return s}});var r=n(67294),o=(n(8417),n(52443)),i=(n(8679),n(70444)),l=n(48137),a=n(27278),s=(0,o.w)((function(e,t){var n=e.styles,s=(0,l.O)([n],void 0,(0,r.useContext)(o.T)),u=(0,r.useRef)();return(0,a.j)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,o=document.querySelector('style[data-emotion="'+e+" "+s.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==o&&(r=!0,o.setAttribute("data-emotion",e),n.hydrate([o])),u.current=[n,r],function(){n.flush()}}),[t]),(0,a.j)((function(){var e=u.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==s.next&&(0,i.My)(t,s.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",s,n,!1)}}),[t,s.name]),null}));function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,l.O)(t)}var c=function(){var e=u.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},55848:function(e,t,n){n.d(t,{Z:function(){return X}});var r=n(83117),o=n(80102),i=n(67294),l=n(93680),a=n(94780),s=n(23562),u=n(45959),c=n(84771),p=n(26432),d=n(51625);var f=n(21073),h=n(220);function m(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function b(e,t,n){return null!=n[t]?n[t]:e.props[t]}function v(e,t,n){var r=m(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var l in e)l in t?i.length&&(o[l]=i,i=[]):i.push(l);var a={};for(var s in t){if(o[s])for(r=0;r<o[s].length;r++){var u=o[s][r];a[o[s][r]]=n(u)}a[s]=n(s)}for(r=0;r<i.length;r++)a[i[r]]=n(i[r]);return a}(t,r);return Object.keys(o).forEach((function(l){var a=o[l];if((0,i.isValidElement)(a)){var s=l in t,u=l in r,c=t[l],p=(0,i.isValidElement)(c)&&!c.props.in;!u||s&&!p?u||!s||p?u&&s&&(0,i.isValidElement)(c)&&(o[l]=(0,i.cloneElement)(a,{onExited:n.bind(null,a),in:c.props.in,exit:b(a,"exit",e),enter:b(a,"enter",e)})):o[l]=(0,i.cloneElement)(a,{in:!1}):o[l]=(0,i.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:b(a,"exit",e),enter:b(a,"enter",e)})}})),o}var y=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},g=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,f.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,r=l,m(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:b(e,"appear",n),enter:b(e,"enter",n),exit:b(e,"exit",n)})}))):v(e,o,l),firstRender:!1}},n.handleExited=function(e,t){var n=m(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,o.Z)(e,["component","childFactory"]),l=this.state.contextValue,a=y(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(h.Z.Provider,{value:l},a):i.createElement(h.Z.Provider,{value:l},i.createElement(t,r,a))},t}(i.Component);g.propTypes={},g.defaultProps={component:"div",childFactory:function(e){return e}};var x=g,R=n(70917),M=n(85893);var E=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:a,rippleSize:s,in:u,onExited:c,timeout:p}=e,[d,f]=i.useState(!1),h=(0,l.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:s,height:s,top:-s/2+a,left:-s/2+o},b=(0,l.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||f(!0),i.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,M.jsx)("span",{className:h,style:m,children:(0,M.jsx)("span",{className:b})})},Z=n(1588);var S=(0,Z.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const k=["center","classes","className"];let T,w,C,P,V=e=>e;const $=(0,R.F4)(T||(T=V`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),j=(0,R.F4)(w||(w=V`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),D=(0,R.F4)(C||(C=V`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),F=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),B=(0,s.ZP)(E,{name:"MuiTouchRipple",slot:"Ripple"})(P||(P=V`
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
`),S.rippleVisible,$,550,(({theme:e})=>e.transitions.easing.easeInOut),S.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),S.child,S.childLeaving,j,550,(({theme:e})=>e.transitions.easing.easeInOut),S.childPulsate,D,(({theme:e})=>e.transitions.easing.easeInOut));var L=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTouchRipple"}),{center:a=!1,classes:s={},className:c}=n,p=(0,o.Z)(n,k),[d,f]=i.useState([]),h=i.useRef(0),m=i.useRef(null);i.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=i.useRef(!1),v=i.useRef(null),y=i.useRef(null),g=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(v.current)}),[]);const R=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;f((e=>[...e,(0,M.jsx)(B,{classes:{ripple:(0,l.Z)(s.ripple,S.ripple),rippleVisible:(0,l.Z)(s.rippleVisible,S.rippleVisible),ripplePulsate:(0,l.Z)(s.ripplePulsate,S.ripplePulsate),child:(0,l.Z)(s.child,S.child),childLeaving:(0,l.Z)(s.childLeaving,S.childLeaving),childPulsate:(0,l.Z)(s.childPulsate,S.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},h.current)])),h.current+=1,m.current=i}),[s]),E=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=a||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const l=i?null:g.current,s=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(s.width/2),c=Math.round(s.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-s.left),c=Math.round(n-s.top)}if(o)p=Math.sqrt((2*s.width**2+s.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===y.current&&(y.current=()=>{R({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},v.current=setTimeout((()=>{y.current&&(y.current(),y.current=null)}),80)):R({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[a,R]),Z=i.useCallback((()=>{E({},{pulsate:!0})}),[E]),T=i.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===(null==e?void 0:e.type)&&y.current)return y.current(),y.current=null,void(v.current=setTimeout((()=>{T(e,t)})));y.current=null,f((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:Z,start:E,stop:T})),[Z,E,T]),(0,M.jsx)(F,(0,r.Z)({className:(0,l.Z)(S.root,s.root,c),ref:g},p,{children:(0,M.jsx)(x,{component:null,exit:!0,children:d})}))})),N=n(34867);function O(e){return(0,N.Z)("MuiButtonBase",e)}var I=(0,Z.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const _=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],z=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${I.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});var X=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:f=!1,children:h,className:m,component:b="button",disabled:v=!1,disableRipple:y=!1,disableTouchRipple:g=!1,focusRipple:x=!1,LinkComponent:R="a",onBlur:E,onClick:Z,onContextMenu:S,onDragLeave:k,onFocus:T,onFocusVisible:w,onKeyDown:C,onKeyUp:P,onMouseDown:V,onMouseLeave:$,onMouseUp:j,onTouchEnd:D,onTouchMove:F,onTouchStart:B,tabIndex:N=0,TouchRippleProps:I,touchRippleRef:X,type:A}=n,U=(0,o.Z)(n,_),Y=i.useRef(null),K=i.useRef(null),H=(0,c.Z)(K,X),{isFocusVisibleRef:W,onFocus:q,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=i.useState(!1);v&&Q&&ee(!1),i.useImperativeHandle(s,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!y&&!v;function oe(e,t,n=g){return(0,p.Z)((r=>{t&&t(r);return!n&&K.current&&K.current[e](r),!0}))}i.useEffect((()=>{Q&&x&&!y&&te&&K.current.pulsate()}),[y,x,Q,te]);const ie=oe("start",V),le=oe("stop",S),ae=oe("stop",k),se=oe("stop",j),ue=oe("stop",(e=>{Q&&e.preventDefault(),$&&$(e)})),ce=oe("start",B),pe=oe("stop",D),de=oe("stop",F),fe=oe("stop",(e=>{G(e),!1===W.current&&ee(!1),E&&E(e)}),!1),he=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),q(e),!0===W.current&&(ee(!0),w&&w(e)),T&&T(e)})),me=()=>{const e=Y.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=i.useRef(!1),ve=(0,p.Z)((e=>{x&&!be.current&&Q&&K.current&&" "===e.key&&(be.current=!0,K.current.stop(e,(()=>{K.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),Z&&Z(e))})),ye=(0,p.Z)((e=>{x&&" "===e.key&&K.current&&Q&&!e.defaultPrevented&&(be.current=!1,K.current.stop(e,(()=>{K.current.pulsate(e)}))),P&&P(e),Z&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&Z(e)}));let ge=b;"button"===ge&&(U.href||U.to)&&(ge=R);const xe={};"button"===ge?(xe.type=void 0===A?"button":A,xe.disabled=v):(U.href||U.to||(xe.role="button"),v&&(xe["aria-disabled"]=v));const Re=(0,c.Z)(t,J,Y);const Me=(0,r.Z)({},n,{centerRipple:f,component:b,disabled:v,disableRipple:y,disableTouchRipple:g,focusRipple:x,tabIndex:N,focusVisible:Q}),Ee=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,a.Z)(i,O,o);return n&&r&&(l.root+=` ${r}`),l})(Me);return(0,M.jsxs)(z,(0,r.Z)({as:ge,className:(0,l.Z)(Ee.root,m),ownerState:Me,onBlur:fe,onClick:Z,onContextMenu:le,onFocus:he,onKeyDown:ve,onKeyUp:ye,onMouseDown:ie,onMouseLeave:ue,onMouseUp:se,onDragLeave:ae,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Re,tabIndex:v?-1:N,type:A},xe,U,{children:[h,re?(0,M.jsx)(L,(0,r.Z)({ref:H,center:f},I)):null]}))}))},63023:function(e,t){var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case a:case l:case d:case f:return e;default:switch(e=e&&e.$$typeof){case c:case u:case p:case m:case h:case s:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference")},76607:function(e,t,n){n(63023)},220:function(e,t,n){var r=n(67294);t.Z=r.createContext(null)}}]);