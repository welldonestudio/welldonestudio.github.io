"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[5934],{70917:function(e,t,n){n.d(t,{F4:function(){return c},iv:function(){return a},xB:function(){return l}});var r=n(67294),o=(n(8417),n(52443)),i=(n(8679),n(70444)),s=n(48137),u=n(27278),l=(0,o.w)((function(e,t){var n=e.styles,l=(0,s.O)([n],void 0,(0,r.useContext)(o.T)),a=(0,r.useRef)();return(0,u.j)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,o=document.querySelector('style[data-emotion="'+e+" "+l.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==o&&(r=!0,o.setAttribute("data-emotion",e),n.hydrate([o])),a.current=[n,r],function(){n.flush()}}),[t]),(0,u.j)((function(){var e=a.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==l.next&&(0,i.My)(t,l.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",l,n,!1)}}),[t,l.name]),null}));function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.O)(t)}var c=function(){var e=a.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},83187:function(e,t,n){n.d(t,{Z:function(){return U}});var r=n(83117),o=n(80102),i=n(67294),s=n(93680),u=n(94780),l=n(81719),a=n(78884),c=n(84771),p=n(26432),d=n(51625),f=n(44415),h=n(21073),m=n(220);function b(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function v(e,t,n){return null!=n[t]?n[t]:e.props[t]}function y(e,t,n){var r=b(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var s in e)s in t?i.length&&(o[s]=i,i=[]):i.push(s);var u={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var a=o[l][r];u[o[l][r]]=n(a)}u[l]=n(l)}for(r=0;r<i.length;r++)u[i[r]]=n(i[r]);return u}(t,r);return Object.keys(o).forEach((function(s){var u=o[s];if((0,i.isValidElement)(u)){var l=s in t,a=s in r,c=t[s],p=(0,i.isValidElement)(c)&&!c.props.in;!a||l&&!p?a||!l||p?a&&l&&(0,i.isValidElement)(c)&&(o[s]=(0,i.cloneElement)(u,{onExited:n.bind(null,u),in:c.props.in,exit:v(u,"exit",e),enter:v(u,"enter",e)})):o[s]=(0,i.cloneElement)(u,{in:!1}):o[s]=(0,i.cloneElement)(u,{onExited:n.bind(null,u),in:!0,exit:v(u,"exit",e),enter:v(u,"enter",e)})}})),o}var g=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},x=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind((0,f.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,h.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,r=s,b(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:v(e,"appear",n),enter:v(e,"enter",n),exit:v(e,"exit",n)})}))):y(e,o,s),firstRender:!1}},n.handleExited=function(e,t){var n=b(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,o.Z)(e,["component","childFactory"]),s=this.state.contextValue,u=g(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(m.Z.Provider,{value:s},u):i.createElement(m.Z.Provider,{value:s},i.createElement(t,r,u))},t}(i.Component);x.propTypes={},x.defaultProps={component:"div",childFactory:function(e){return e}};var Z=x,R=n(70917),E=n(85893);var M=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:u,rippleSize:l,in:a,onExited:c,timeout:p}=e,[d,f]=i.useState(!1),h=(0,s.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:l,height:l,top:-l/2+u,left:-l/2+o},b=(0,s.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return a||d||f(!0),i.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,a,p]),(0,E.jsx)("span",{className:h,style:m,children:(0,E.jsx)("span",{className:b})})},k=n(1588);var T=(0,k.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const P=["center","classes","className"];let w,C,S,V,j=e=>e;const $=(0,R.F4)(w||(w=j`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),D=(0,R.F4)(C||(C=j`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),F=(0,R.F4)(S||(S=j`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),B=(0,l.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),L=(0,l.ZP)(M,{name:"MuiTouchRipple",slot:"Ripple"})(V||(V=j`
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
`),T.rippleVisible,$,550,(({theme:e})=>e.transitions.easing.easeInOut),T.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),T.child,T.childLeaving,D,550,(({theme:e})=>e.transitions.easing.easeInOut),T.childPulsate,F,(({theme:e})=>e.transitions.easing.easeInOut));var O=i.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiTouchRipple"}),{center:u=!1,classes:l={},className:c}=n,p=(0,o.Z)(n,P),[d,f]=i.useState([]),h=i.useRef(0),m=i.useRef(null);i.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=i.useRef(!1),v=i.useRef(null),y=i.useRef(null),g=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(v.current)}),[]);const x=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;f((e=>[...e,(0,E.jsx)(L,{classes:{ripple:(0,s.Z)(l.ripple,T.ripple),rippleVisible:(0,s.Z)(l.rippleVisible,T.rippleVisible),ripplePulsate:(0,s.Z)(l.ripplePulsate,T.ripplePulsate),child:(0,s.Z)(l.child,T.child),childLeaving:(0,s.Z)(l.childLeaving,T.childLeaving),childPulsate:(0,s.Z)(l.childPulsate,T.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},h.current)])),h.current+=1,m.current=i}),[l]),R=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=u||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const s=i?null:g.current,l=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(l.width/2),c=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-l.left),c=Math.round(n-l.top)}if(o)p=Math.sqrt((2*l.width**2+l.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===y.current&&(y.current=()=>{x({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},v.current=setTimeout((()=>{y.current&&(y.current(),y.current=null)}),80)):x({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})}),[u,x]),M=i.useCallback((()=>{R({},{pulsate:!0})}),[R]),k=i.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===(null==e?void 0:e.type)&&y.current)return y.current(),y.current=null,void(v.current=setTimeout((()=>{k(e,t)})));y.current=null,f((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:M,start:R,stop:k})),[M,R,k]),(0,E.jsx)(B,(0,r.Z)({className:(0,s.Z)(T.root,l.root,c),ref:g},p,{children:(0,E.jsx)(Z,{component:null,exit:!0,children:d})}))})),N=n(34867);function I(e){return(0,N.Z)("MuiButtonBase",e)}var z=(0,k.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const A=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],X=(0,l.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${z.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});var U=i.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:f=!1,children:h,className:m,component:b="button",disabled:v=!1,disableRipple:y=!1,disableTouchRipple:g=!1,focusRipple:x=!1,LinkComponent:Z="a",onBlur:R,onClick:M,onContextMenu:k,onDragLeave:T,onFocus:P,onFocusVisible:w,onKeyDown:C,onKeyUp:S,onMouseDown:V,onMouseLeave:j,onMouseUp:$,onTouchEnd:D,onTouchMove:F,onTouchStart:B,tabIndex:L=0,TouchRippleProps:N,touchRippleRef:z,type:U}=n,Y=(0,o.Z)(n,A),_=i.useRef(null),K=i.useRef(null),H=(0,c.Z)(K,z),{isFocusVisibleRef:W,onFocus:q,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=i.useState(!1);v&&Q&&ee(!1),i.useImperativeHandle(l,(()=>({focusVisible:()=>{ee(!0),_.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!y&&!v;function oe(e,t,n=g){return(0,p.Z)((r=>{t&&t(r);return!n&&K.current&&K.current[e](r),!0}))}i.useEffect((()=>{Q&&x&&!y&&te&&K.current.pulsate()}),[y,x,Q,te]);const ie=oe("start",V),se=oe("stop",k),ue=oe("stop",T),le=oe("stop",$),ae=oe("stop",(e=>{Q&&e.preventDefault(),j&&j(e)})),ce=oe("start",B),pe=oe("stop",D),de=oe("stop",F),fe=oe("stop",(e=>{G(e),!1===W.current&&ee(!1),R&&R(e)}),!1),he=(0,p.Z)((e=>{_.current||(_.current=e.currentTarget),q(e),!0===W.current&&(ee(!0),w&&w(e)),P&&P(e)})),me=()=>{const e=_.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=i.useRef(!1),ve=(0,p.Z)((e=>{x&&!be.current&&Q&&K.current&&" "===e.key&&(be.current=!0,K.current.stop(e,(()=>{K.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),M&&M(e))})),ye=(0,p.Z)((e=>{x&&" "===e.key&&K.current&&Q&&!e.defaultPrevented&&(be.current=!1,K.current.stop(e,(()=>{K.current.pulsate(e)}))),S&&S(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let ge=b;"button"===ge&&(Y.href||Y.to)&&(ge=Z);const xe={};"button"===ge?(xe.type=void 0===U?"button":U,xe.disabled=v):(Y.href||Y.to||(xe.role="button"),v&&(xe["aria-disabled"]=v));const Ze=(0,c.Z)(t,J,_);const Re=(0,r.Z)({},n,{centerRipple:f,component:b,disabled:v,disableRipple:y,disableTouchRipple:g,focusRipple:x,tabIndex:L,focusVisible:Q}),Ee=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},s=(0,u.Z)(i,I,o);return n&&r&&(s.root+=` ${r}`),s})(Re);return(0,E.jsxs)(X,(0,r.Z)({as:ge,className:(0,s.Z)(Ee.root,m),ownerState:Re,onBlur:fe,onClick:M,onContextMenu:se,onFocus:he,onKeyDown:ve,onKeyUp:ye,onMouseDown:ie,onMouseLeave:ae,onMouseUp:le,onDragLeave:ue,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Ze,tabIndex:v?-1:L,type:U},xe,Y,{children:[h,re?(0,E.jsx)(O,(0,r.Z)({ref:H,center:f},N)):null]}))}))},62097:function(e,t,n){n.d(t,{Z:function(){return i}});n(67294);var r=n(96682),o=n(25165);function i(){return(0,r.Z)(o.Z)}},39707:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(83117),o=n(80102),i=n(59766),s=n(85578);const u=["sx"];function l(e){const{sx:t}=e,n=(0,o.Z)(e,u),{systemProps:l,otherProps:a}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{s.Gc[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let c;return c=Array.isArray(t)?[l,...t]:"function"==typeof t?(...e)=>{const n=t(...e);return(0,i.P)(n)?(0,r.Z)({},l,n):l}:(0,r.Z)({},l,t),(0,r.Z)({},a,{sx:c})}},220:function(e,t,n){var r=n(67294);t.Z=r.createContext(null)},44415:function(e,t,n){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})}}]);