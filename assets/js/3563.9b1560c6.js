"use strict";(self.webpackChunkhldv_doc=self.webpackChunkhldv_doc||[]).push([[3563],{76:(e,t,n)=>{n.d(t,{ll:()=>U,rD:()=>H,UU:()=>V,cY:()=>$,BN:()=>j});const o=Math.min,r=Math.max,i=Math.round,l=Math.floor,c=e=>({x:e,y:e}),u={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function a(e,t,n){return r(e,o(t,n))}function f(e,t){return"function"==typeof e?e(t):e}function d(e){return e.split("-")[0]}function p(e){return e.split("-")[1]}function m(e){return"x"===e?"y":"x"}function h(e){return"y"===e?"height":"width"}function g(e){return["top","bottom"].includes(d(e))?"y":"x"}function v(e){return m(g(e))}function y(e){return e.replace(/start|end/g,(e=>s[e]))}function w(e){return e.replace(/left|right|bottom|top/g,(e=>u[e]))}function x(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function b(e,t,n){let{reference:o,floating:r}=e;const i=g(t),l=v(t),c=h(l),u=d(t),s="y"===i,a=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,m=o[c]/2-r[c]/2;let y;switch(u){case"top":y={x:a,y:o.y-r.height};break;case"bottom":y={x:a,y:o.y+o.height};break;case"right":y={x:o.x+o.width,y:f};break;case"left":y={x:o.x-r.width,y:f};break;default:y={x:o.x,y:o.y}}switch(p(t)){case"start":y[l]-=m*(n&&s?-1:1);break;case"end":y[l]+=m*(n&&s?-1:1)}return y}async function R(e,t){var n;void 0===t&&(t={});const{x:o,y:r,platform:i,rects:l,elements:c,strategy:u}=e,{boundary:s="clippingAncestors",rootBoundary:a="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=f(t,e),h=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(m),g=c[p?"floating"===d?"reference":"floating":d],v=x(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(c.floating)),boundary:s,rootBoundary:a,strategy:u})),y="floating"===d?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,w=await(null==i.getOffsetParent?void 0:i.getOffsetParent(c.floating)),b=await(null==i.isElement?void 0:i.isElement(w))&&await(null==i.getScale?void 0:i.getScale(w))||{x:1,y:1},R=x(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:u}):y);return{top:(v.top-R.top+h.top)/b.y,bottom:(R.bottom-v.bottom+h.bottom)/b.y,left:(v.left-R.left+h.left)/b.x,right:(R.right-v.right+h.right)/b.x}}var E=n(6635);function S(e){const t=(0,E.L9)(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=(0,E.sb)(e),l=r?e.offsetWidth:n,c=r?e.offsetHeight:o,u=i(n)!==l||i(o)!==c;return u&&(n=l,o=c),{width:n,height:o,$:u}}function C(e){return(0,E.vq)(e)?e:e.contextElement}function L(e){const t=C(e);if(!(0,E.sb)(t))return c(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:l}=S(t);let u=(l?i(n.width):n.width)/o,s=(l?i(n.height):n.height)/r;return u&&Number.isFinite(u)||(u=1),s&&Number.isFinite(s)||(s=1),{x:u,y:s}}const T=c(0);function A(e){const t=(0,E.zk)(e);return(0,E.Tc)()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:T}function k(e,t,n,o){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=e.getBoundingClientRect(),i=C(e);let l=c(1);t&&(o?(0,E.vq)(o)&&(l=L(o)):l=L(e));const u=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==(0,E.zk)(e))&&t}(i,n,o)?A(i):c(0);let s=(r.left+u.x)/l.x,a=(r.top+u.y)/l.y,f=r.width/l.x,d=r.height/l.y;if(i){const e=(0,E.zk)(i),t=o&&(0,E.vq)(o)?(0,E.zk)(o):o;let n=e,r=(0,E._m)(n);for(;r&&o&&t!==n;){const e=L(r),t=r.getBoundingClientRect(),o=(0,E.L9)(r),i=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,l=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;s*=e.x,a*=e.y,f*=e.x,d*=e.y,s+=i,a+=l,n=(0,E.zk)(r),r=(0,E._m)(n)}}return x({width:f,height:d,x:s,y:a})}function P(e,t){const n=(0,E.CP)(e).scrollLeft;return t?t.left+n:k((0,E.ep)(e)).left+n}function O(e,t,n){void 0===n&&(n=!1);const o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(n?0:P(e,o)),y:o.top+t.scrollTop}}function N(e,t,n){let o;if("viewport"===t)o=function(e,t){const n=(0,E.zk)(e),o=(0,E.ep)(e),r=n.visualViewport;let i=o.clientWidth,l=o.clientHeight,c=0,u=0;if(r){i=r.width,l=r.height;const e=(0,E.Tc)();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,u=r.offsetTop)}return{width:i,height:l,x:c,y:u}}(e,n);else if("document"===t)o=function(e){const t=(0,E.ep)(e),n=(0,E.CP)(e),o=e.ownerDocument.body,i=r(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),l=r(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let c=-n.scrollLeft+P(e);const u=-n.scrollTop;return"rtl"===(0,E.L9)(o).direction&&(c+=r(t.clientWidth,o.clientWidth)-i),{width:i,height:l,x:c,y:u}}((0,E.ep)(e));else if((0,E.vq)(t))o=function(e,t){const n=k(e,!0,"fixed"===t),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=(0,E.sb)(e)?L(e):c(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:r*i.x,y:o*i.y}}(t,n);else{const n=A(e);o={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return x(o)}function D(e,t){const n=(0,E.$4)(e);return!(n===t||!(0,E.vq)(n)||(0,E.eu)(n))&&("fixed"===(0,E.L9)(n).position||D(n,t))}function M(e,t,n){const o=(0,E.sb)(t),r=(0,E.ep)(t),i="fixed"===n,l=k(e,!0,i,t);let u={scrollLeft:0,scrollTop:0};const s=c(0);if(o||!o&&!i)if(("body"!==(0,E.mq)(t)||(0,E.ZU)(r))&&(u=(0,E.CP)(t)),o){const e=k(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else r&&(s.x=P(r));const a=!r||o||i?c(0):O(r,u);return{x:l.left+u.scrollLeft-s.x-a.x,y:l.top+u.scrollTop-s.y-a.y,width:l.width,height:l.height}}function I(e){return"static"===(0,E.L9)(e).position}function q(e,t){if(!(0,E.sb)(e)||"fixed"===(0,E.L9)(e).position)return null;if(t)return t(e);let n=e.offsetParent;return(0,E.ep)(e)===n&&(n=n.ownerDocument.body),n}function F(e,t){const n=(0,E.zk)(e);if((0,E.Tf)(e))return n;if(!(0,E.sb)(e)){let t=(0,E.$4)(e);for(;t&&!(0,E.eu)(t);){if((0,E.vq)(t)&&!I(t))return t;t=(0,E.$4)(t)}return n}let o=q(e,t);for(;o&&(0,E.Lv)(o)&&I(o);)o=q(o,t);return o&&(0,E.eu)(o)&&I(o)&&!(0,E.sQ)(o)?n:o||(0,E.gJ)(e)||n}const B={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i="fixed"===r,l=(0,E.ep)(o),u=!!t&&(0,E.Tf)(t.floating);if(o===l||u&&i)return n;let s={scrollLeft:0,scrollTop:0},a=c(1);const f=c(0),d=(0,E.sb)(o);if((d||!d&&!i)&&(("body"!==(0,E.mq)(o)||(0,E.ZU)(l))&&(s=(0,E.CP)(o)),(0,E.sb)(o))){const e=k(o);a=L(o),f.x=e.x+o.clientLeft,f.y=e.y+o.clientTop}const p=!l||d||i?c(0):O(l,s,!0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-s.scrollLeft*a.x+f.x+p.x,y:n.y*a.y-s.scrollTop*a.y+f.y+p.y}},getDocumentElement:E.ep,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:i,strategy:l}=e;const c=[..."clippingAncestors"===n?(0,E.Tf)(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let o=(0,E.v9)(e,[],!1).filter((e=>(0,E.vq)(e)&&"body"!==(0,E.mq)(e))),r=null;const i="fixed"===(0,E.L9)(e).position;let l=i?(0,E.$4)(e):e;for(;(0,E.vq)(l)&&!(0,E.eu)(l);){const t=(0,E.L9)(l),n=(0,E.sQ)(l);n||"fixed"!==t.position||(r=null),(i?!n&&!r:!n&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||(0,E.ZU)(l)&&!n&&D(e,l))?o=o.filter((e=>e!==l)):r=t,l=(0,E.$4)(l)}return t.set(e,o),o}(t,this._c):[].concat(n),i],u=c[0],s=c.reduce(((e,n)=>{const i=N(t,n,l);return e.top=r(i.top,e.top),e.right=o(i.right,e.right),e.bottom=o(i.bottom,e.bottom),e.left=r(i.left,e.left),e}),N(t,u,l));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:F,getElementRects:async function(e){const t=this.getOffsetParent||F,n=this.getDimensions,o=await n(e.floating);return{reference:M(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=S(e);return{width:t,height:n}},getScale:L,isElement:E.vq,isRTL:function(e){return"rtl"===(0,E.L9)(e).direction}};function z(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function U(e,t,n,i){void 0===i&&(i={});const{ancestorScroll:c=!0,ancestorResize:u=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:f=!1}=i,d=C(e),p=c||u?[...d?(0,E.v9)(d):[],...(0,E.v9)(t)]:[];p.forEach((e=>{c&&e.addEventListener("scroll",n,{passive:!0}),u&&e.addEventListener("resize",n)}));const m=d&&a?function(e,t){let n,i=null;const c=(0,E.ep)(e);function u(){var e;clearTimeout(n),null==(e=i)||e.disconnect(),i=null}return function s(a,f){void 0===a&&(a=!1),void 0===f&&(f=1),u();const d=e.getBoundingClientRect(),{left:p,top:m,width:h,height:g}=d;if(a||t(),!h||!g)return;const v={rootMargin:-l(m)+"px "+-l(c.clientWidth-(p+h))+"px "+-l(c.clientHeight-(m+g))+"px "+-l(p)+"px",threshold:r(0,o(1,f))||1};let y=!0;function w(t){const o=t[0].intersectionRatio;if(o!==f){if(!y)return s();o?s(!1,o):n=setTimeout((()=>{s(!1,1e-7)}),1e3)}1!==o||z(d,e.getBoundingClientRect())||s(),y=!1}try{i=new IntersectionObserver(w,{...v,root:c.ownerDocument})}catch(x){i=new IntersectionObserver(w,v)}i.observe(e)}(!0),u}(d,n):null;let h,g=-1,v=null;s&&(v=new ResizeObserver((e=>{let[o]=e;o&&o.target===d&&v&&(v.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=v)||e.observe(t)}))),n()})),d&&!f&&v.observe(d),v.observe(t));let y=f?k(e):null;return f&&function t(){const o=k(e);y&&!z(y,o)&&n();y=o,h=requestAnimationFrame(t)}(),n(),()=>{var e;p.forEach((e=>{c&&e.removeEventListener("scroll",n),u&&e.removeEventListener("resize",n)})),null==m||m(),null==(e=v)||e.disconnect(),v=null,f&&cancelAnimationFrame(h)}}const $=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:l,middlewareData:c}=t,u=await async function(e,t){const{placement:n,platform:o,elements:r}=e,i=await(null==o.isRTL?void 0:o.isRTL(r.floating)),l=d(n),c=p(n),u="y"===g(n),s=["left","top"].includes(l)?-1:1,a=i&&u?-1:1,m=f(t,e);let{mainAxis:h,crossAxis:v,alignmentAxis:y}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return c&&"number"==typeof y&&(v="end"===c?-1*y:y),u?{x:v*a,y:h*s}:{x:h*s,y:v*a}}(t,e);return l===(null==(n=c.offset)?void 0:n.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:r+u.x,y:i+u.y,data:{...u,placement:l}}}}},j=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...u}=f(e,t),s={x:n,y:o},p=await R(t,u),h=g(d(r)),v=m(h);let y=s[v],w=s[h];if(i){const e="y"===v?"bottom":"right";y=a(y+p["y"===v?"top":"left"],y,y-p[e])}if(l){const e="y"===h?"bottom":"right";w=a(w+p["y"===h?"top":"left"],w,w-p[e])}const x=c.fn({...t,[v]:y,[h]:w});return{...x,data:{x:x.x-n,y:x.y-o,enabled:{[v]:i,[h]:l}}}}}},V=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:l,initialPlacement:c,platform:u,elements:s}=t,{mainAxis:a=!0,crossAxis:m=!0,fallbackPlacements:x,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:S=!0,...C}=f(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const L=d(r),T=g(c),A=d(c)===c,k=await(null==u.isRTL?void 0:u.isRTL(s.floating)),P=x||(A||!S?[w(c)]:function(e){const t=w(e);return[y(e),t,y(t)]}(c)),O="none"!==E;!x&&O&&P.push(...function(e,t,n,o){const r=p(e);let i=function(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:l;default:return[]}}(d(e),"start"===n,o);return r&&(i=i.map((e=>e+"-"+r)),t&&(i=i.concat(i.map(y)))),i}(c,S,E,k));const N=[c,...P],D=await R(t,C),M=[];let I=(null==(o=i.flip)?void 0:o.overflows)||[];if(a&&M.push(D[L]),m){const e=function(e,t,n){void 0===n&&(n=!1);const o=p(e),r=v(e),i=h(r);let l="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=w(l)),[l,w(l)]}(r,l,k);M.push(D[e[0]],D[e[1]])}if(I=[...I,{placement:r,overflows:M}],!M.every((e=>e<=0))){var q,F;const e=((null==(q=i.flip)?void 0:q.index)||0)+1,t=N[e];if(t)return{data:{index:e,overflows:I},reset:{placement:t}};let n=null==(F=I.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:F.placement;if(!n)switch(b){case"bestFit":{var B;const e=null==(B=I.filter((e=>{if(O){const t=g(e.placement);return t===T||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:B[0];e&&(n=e);break}case"initialPlacement":n=c}if(r!==n)return{reset:{placement:n}}}return{}}}},H=(e,t,n)=>{const o=new Map,r={platform:B,...n},i={...r.platform,_c:o};return(async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:l}=n,c=i.filter(Boolean),u=await(null==l.isRTL?void 0:l.isRTL(t));let s=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:a,y:f}=b(s,o,u),d=o,p={},m=0;for(let h=0;h<c.length;h++){const{name:n,fn:i}=c[h],{x:g,y:v,data:y,reset:w}=await i({x:a,y:f,initialPlacement:o,placement:d,strategy:r,middlewareData:p,rects:s,platform:l,elements:{reference:e,floating:t}});a=null!=g?g:a,f=null!=v?v:f,p={...p,[n]:{...p[n],...y}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(s=!0===w.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):w.rects),({x:a,y:f}=b(s,d,u))),h=-1)}return{x:a,y:f,placement:d,strategy:r,middlewareData:p}})(e,t,{...r,platform:i})}},4743:(e,t,n)=>{n.d(t,{BN:()=>p,UU:()=>m,cY:()=>d,we:()=>f});var o=n(76),r=n(6540),i=n(961),l="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function c(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;0!=o--;)if(!c(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;0!=o--;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;0!=o--;){const n=r[o];if(("_owner"!==n||!e.$$typeof)&&!c(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function u(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function s(e,t){const n=u(e);return Math.round(t*n)/n}function a(e){const t=r.useRef(e);return l((()=>{t.current=e})),t}function f(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:f=[],platform:d,elements:{reference:p,floating:m}={},transform:h=!0,whileElementsMounted:g,open:v}=e,[y,w]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[x,b]=r.useState(f);c(x,f)||b(f);const[R,E]=r.useState(null),[S,C]=r.useState(null),L=r.useCallback((e=>{e!==P.current&&(P.current=e,E(e))}),[]),T=r.useCallback((e=>{e!==O.current&&(O.current=e,C(e))}),[]),A=p||R,k=m||S,P=r.useRef(null),O=r.useRef(null),N=r.useRef(y),D=null!=g,M=a(g),I=a(d),q=a(v),F=r.useCallback((()=>{if(!P.current||!O.current)return;const e={placement:t,strategy:n,middleware:x};I.current&&(e.platform=I.current),(0,o.rD)(P.current,O.current,e).then((e=>{const t={...e,isPositioned:!1!==q.current};B.current&&!c(N.current,t)&&(N.current=t,i.flushSync((()=>{w(t)})))}))}),[x,t,n,I,q]);l((()=>{!1===v&&N.current.isPositioned&&(N.current.isPositioned=!1,w((e=>({...e,isPositioned:!1}))))}),[v]);const B=r.useRef(!1);l((()=>(B.current=!0,()=>{B.current=!1})),[]),l((()=>{if(A&&(P.current=A),k&&(O.current=k),A&&k){if(M.current)return M.current(A,k,F);F()}}),[A,k,F,M,D]);const z=r.useMemo((()=>({reference:P,floating:O,setReference:L,setFloating:T})),[L,T]),U=r.useMemo((()=>({reference:A,floating:k})),[A,k]),$=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!U.floating)return e;const t=s(U.floating,y.x),o=s(U.floating,y.y);return h?{...e,transform:"translate("+t+"px, "+o+"px)",...u(U.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:o}}),[n,h,U.floating,y.x,y.y]);return r.useMemo((()=>({...y,update:F,refs:z,elements:U,floatingStyles:$})),[y,F,z,U,$])}const d=(e,t)=>({...(0,o.cY)(e),options:[e,t]}),p=(e,t)=>({...(0,o.BN)(e),options:[e,t]}),m=(e,t)=>({...(0,o.UU)(e),options:[e,t]})},1159:(e,t,n)=>{n.d(t,{XF:()=>ce,we:()=>se});var o=n(6540),r=n.t(o,2),i=n(6635);var l=n(4848),c=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],u=c.join(","),s="undefined"==typeof Element,a=s?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,f=!s&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},d=function e(t,n){var o;void 0===n&&(n=!0);var r=null==t||null===(o=t.getAttribute)||void 0===o?void 0:o.call(t,"inert");return""===r||"true"===r||n&&t&&e(t.parentNode)},p=function(e,t,n){if(d(e))return[];var o=Array.prototype.slice.apply(e.querySelectorAll(u));return t&&a.call(e,u)&&o.unshift(e),o=o.filter(n)},m=function e(t,n,o){for(var r=[],i=Array.from(t);i.length;){var l=i.shift();if(!d(l,!1))if("SLOT"===l.tagName){var c=l.assignedElements(),s=e(c.length?c:l.children,!0,o);o.flatten?r.push.apply(r,s):r.push({scopeParent:l,candidates:s})}else{a.call(l,u)&&o.filter(l)&&(n||!t.includes(l))&&r.push(l);var f=l.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(l),p=!d(f,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(l));if(f&&p){var m=e(!0===f?l.children:f.children,!0,o);o.flatten?r.push.apply(r,m):r.push({scopeParent:l,candidates:m})}else i.unshift.apply(i,l.children)}}return r},h=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},g=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!h(e)?0:e.tabIndex},v=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},y=function(e){return"INPUT"===e.tagName},w=function(e){return function(e){return y(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||f(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},x=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},b=function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var r=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(r,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return x(e)}else{if("function"==typeof o){for(var i=e;e;){var l=e.parentElement,c=f(e);if(l&&!l.shadowRoot&&!0===o(l))return x(e);e=e.assignedSlot?e.assignedSlot:l||c===e.ownerDocument?l:c.host}e=i}if(function(e){var t,n,o,r,i=e&&f(e),l=null===(t=i)||void 0===t?void 0:t.host,c=!1;if(i&&i!==e)for(c=!!(null!==(n=l)&&void 0!==n&&null!==(o=n.ownerDocument)&&void 0!==o&&o.contains(l)||null!=e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(e));!c&&l;){var u,s,a;c=!(null===(s=l=null===(u=i=f(l))||void 0===u?void 0:u.host)||void 0===s||null===(a=s.ownerDocument)||void 0===a||!a.contains(l))}return c}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},R=function(e,t){return!(t.disabled||d(t)||function(e){return y(e)&&"hidden"===e.type}(t)||b(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!a.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},E=function(e,t){return!(w(t)||g(t)<0||!R(e,t))},S=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},C=function e(t){var n=[],o=[];return t.forEach((function(t,r){var i=!!t.scopeParent,l=i?t.scopeParent:t,c=function(e,t){var n=g(e);return n<0&&t&&!h(e)?0:n}(l,i),u=i?e(t.candidates):l;0===c?i?n.push.apply(n,u):n.push(l):o.push({documentOrder:r,tabIndex:c,item:t,isScope:i,content:u})})),o.sort(v).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},L=function(e,t){var n;return n=(t=t||{}).getShadowRoot?m([e],t.includeContainer,{filter:E.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:S}):p(e,t.includeContainer,E.bind(null,t)),C(n)},T=n(961),A=n(4743);const k={...r},P=k.useInsertionEffect||(e=>e());function O(e){const t=o.useRef((()=>{0}));return P((()=>{t.current=e})),o.useCallback((function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return null==t.current?void 0:t.current(...n)}),[])}const N="ArrowUp",D="ArrowDown",M="ArrowLeft",I="ArrowRight";var q="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;const F=[M,I],B=[N,D];let z=!1,U=0;const $=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+U++;const j=k.useId||function(){const[e,t]=o.useState((()=>z?$():void 0));return q((()=>{null==e&&t($())}),[]),o.useEffect((()=>{z=!0}),[]),e};function V(){const e=new Map;return{emit(t,n){var o;null==(o=e.get(t))||o.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var o;e.set(t,(null==(o=e.get(t))?void 0:o.filter((e=>e!==n)))||[])}}}const H=o.createContext(null),W=o.createContext(null),_=()=>{var e;return(null==(e=o.useContext(H))?void 0:e.id)||null},Y=()=>o.useContext(W);function X(e){return"data-floating-ui-"+e}const Z=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Q(e,t){const n=L(e,Z());"prev"===t&&n.reverse();const o=n.indexOf(function(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}((null==(r=e)?void 0:r.ownerDocument)||document));var r;return n.slice(o+1)[0]}function J(){return Q(document.body,"next")}function G(){return Q(document.body,"prev")}function K(e,t){const n=t||e.currentTarget,o=e.relatedTarget;return!o||!function(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&(0,i.Ng)(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}(n,o)}function ee(e){L(e,Z()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function te(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const ne={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function oe(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const re=o.forwardRef((function(e,t){const[n,r]=o.useState();q((()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",oe),()=>{document.removeEventListener("keydown",oe)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[X("focus-guard")]:"",style:ne};return(0,l.jsx)("span",{...e,...i})})),ie=o.createContext(null),le=X("portal");function ce(e){const{children:t,id:n,root:r,preserveTabOrder:c=!0}=e,u=function(e){void 0===e&&(e={});const{id:t,root:n}=e,r=j(),l=ue(),[c,u]=o.useState(null),s=o.useRef(null);return q((()=>()=>{null==c||c.remove(),queueMicrotask((()=>{s.current=null}))}),[c]),q((()=>{if(!r)return;if(s.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=r,n.setAttribute(le,""),e.appendChild(n),s.current=n,u(n)}),[t,r]),q((()=>{if(null===n)return;if(!r)return;if(s.current)return;let e=n||(null==l?void 0:l.portalNode);e&&!(0,i.vq)(e)&&(e=e.current),e=e||document.body;let o=null;t&&(o=document.createElement("div"),o.id=t,e.appendChild(o));const c=document.createElement("div");c.id=r,c.setAttribute(le,""),e=o||e,e.appendChild(c),s.current=c,u(c)}),[t,n,r,l]),c}({id:n,root:r}),[s,a]=o.useState(null),f=o.useRef(null),d=o.useRef(null),p=o.useRef(null),m=o.useRef(null),h=null==s?void 0:s.modal,g=null==s?void 0:s.open,v=!!s&&!s.modal&&s.open&&c&&!(!r&&!u);return o.useEffect((()=>{if(u&&c&&!h)return u.addEventListener("focusin",e,!0),u.addEventListener("focusout",e,!0),()=>{u.removeEventListener("focusin",e,!0),u.removeEventListener("focusout",e,!0)};function e(e){if(u&&K(e)){("focusin"===e.type?te:ee)(u)}}}),[u,c,h]),o.useEffect((()=>{u&&(g||te(u))}),[g,u]),(0,l.jsxs)(ie.Provider,{value:o.useMemo((()=>({preserveTabOrder:c,beforeOutsideRef:f,afterOutsideRef:d,beforeInsideRef:p,afterInsideRef:m,portalNode:u,setFocusManagerState:a})),[c,u]),children:[v&&u&&(0,l.jsx)(re,{"data-type":"outside",ref:f,onFocus:e=>{if(K(e,u)){var t;null==(t=p.current)||t.focus()}else{const e=G()||(null==s?void 0:s.domReference);null==e||e.focus()}}}),v&&u&&(0,l.jsx)("span",{"aria-owns":u.id,style:ne}),u&&T.createPortal(t,u),v&&u&&(0,l.jsx)(re,{"data-type":"outside",ref:d,onFocus:e=>{if(K(e,u)){var t;null==(t=m.current)||t.focus()}else{const t=J()||(null==s?void 0:s.domReference);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent,"focus-out"))}}})]})}const ue=()=>o.useContext(ie);function se(e){void 0===e&&(e={});const{nodeId:t}=e,n=function(e){const{open:t=!1,onOpenChange:n,elements:r}=e,i=j(),l=o.useRef({}),[c]=o.useState((()=>V())),u=null!=_(),[s,a]=o.useState(r.reference),f=O(((e,t,o)=>{l.current.openEvent=e?t:void 0,c.emit("openchange",{open:e,event:t,reason:o,nested:u}),null==n||n(e,t,o)})),d=o.useMemo((()=>({setPositionReference:a})),[]),p=o.useMemo((()=>({reference:s||r.reference||null,floating:r.floating||null,domReference:r.reference})),[s,r.reference,r.floating]);return o.useMemo((()=>({dataRef:l,open:t,onOpenChange:f,elements:p,events:c,floatingId:i,refs:d})),[t,f,p,c,i,d])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,l=r.elements,[c,u]=o.useState(null),[s,a]=o.useState(null),f=(null==l?void 0:l.domReference)||c,d=o.useRef(null),p=Y();q((()=>{f&&(d.current=f)}),[f]);const m=(0,A.we)({...e,elements:{...l,...s&&{reference:s}}}),h=o.useCallback((e=>{const t=(0,i.vq)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;a(t),m.refs.setReference(t)}),[m.refs]),g=o.useCallback((e=>{((0,i.vq)(e)||null===e)&&(d.current=e,u(e)),((0,i.vq)(m.refs.reference.current)||null===m.refs.reference.current||null!==e&&!(0,i.vq)(e))&&m.refs.setReference(e)}),[m.refs]),v=o.useMemo((()=>({...m.refs,setReference:g,setPositionReference:h,domReference:d})),[m.refs,g,h]),y=o.useMemo((()=>({...m.elements,domReference:f})),[m.elements,f]),w=o.useMemo((()=>({...m,...r,refs:v,elements:y,nodeId:t})),[m,v,y,t,r]);return q((()=>{r.dataRef.current.floatingContext=w;const e=null==p?void 0:p.nodesRef.current.find((e=>e.id===t));e&&(e.context=w)})),o.useMemo((()=>({...m,context:w,refs:v,elements:y})),[m,v,y,w])}},6635:(e,t,n)=>{function o(){return"undefined"!=typeof window}function r(e){return c(e)?(e.nodeName||"").toLowerCase():"#document"}function i(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function l(e){var t;return null==(t=(c(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function c(e){return!!o()&&(e instanceof Node||e instanceof i(e).Node)}function u(e){return!!o()&&(e instanceof Element||e instanceof i(e).Element)}function s(e){return!!o()&&(e instanceof HTMLElement||e instanceof i(e).HTMLElement)}function a(e){return!(!o()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof i(e).ShadowRoot)}function f(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=y(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function d(e){return["table","td","th"].includes(r(e))}function p(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(n){return!1}}))}function m(e){const t=g(),n=u(e)?y(e):e;return["transform","translate","scale","rotate","perspective"].some((e=>!!n[e]&&"none"!==n[e]))||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","translate","scale","rotate","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function h(e){let t=x(e);for(;s(t)&&!v(t);){if(m(t))return t;if(p(t))return null;t=x(t)}return null}function g(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function v(e){return["html","body","#document"].includes(r(e))}function y(e){return i(e).getComputedStyle(e)}function w(e){return u(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function x(e){if("html"===r(e))return e;const t=e.assignedSlot||e.parentNode||a(e)&&e.host||l(e);return a(t)?t.host:t}function b(e){const t=x(e);return v(t)?e.ownerDocument?e.ownerDocument.body:e.body:s(t)&&f(t)?t:b(t)}function R(e,t,n){var o;void 0===t&&(t=[]),void 0===n&&(n=!0);const r=b(e),l=r===(null==(o=e.ownerDocument)?void 0:o.body),c=i(r);if(l){const e=E(c);return t.concat(c,c.visualViewport||[],f(r)?r:[],e&&n?R(e):[])}return t.concat(r,R(r,[],n))}function E(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}n.d(t,{$4:()=>x,CP:()=>w,L9:()=>y,Lv:()=>d,Ng:()=>a,Tc:()=>g,Tf:()=>p,ZU:()=>f,_m:()=>E,ep:()=>l,eu:()=>v,gJ:()=>h,mq:()=>r,sQ:()=>m,sb:()=>s,v9:()=>R,vq:()=>u,zk:()=>i})},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var o=n(6540);const r={},i=o.createContext(r);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);