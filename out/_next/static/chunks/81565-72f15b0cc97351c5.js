"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81565],{65753:(r,e,t)=>{t.d(e,{Am:()=>o,Ay:()=>l});var n=t(96540),i=t(74848);let a=["as","disabled"];function o({tagName:r,disabled:e,href:t,target:n,rel:i,role:a,onClick:o,tabIndex:u=0,type:l}){r||(r=null!=t||null!=n||null!=i?"a":"button");let f={tagName:r};if("button"===r)return[{type:l||"button",disabled:e},f];let s=n=>{var i;if(!e&&("a"!==r||(i=t)&&"#"!==i.trim())||n.preventDefault(),e){n.stopPropagation();return}null==o||o(n)};return"a"===r&&(t||(t="#"),e&&(t=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:e?void 0:u,href:t,target:"a"===r?n:void 0,"aria-disabled":e||void 0,rel:"a"===r?i:void 0,onClick:s,onKeyDown:r=>{" "===r.key&&(r.preventDefault(),s(r))}},f]}let u=n.forwardRef((r,e)=>{let{as:t,disabled:n}=r,u=function(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(r,a),[l,{tagName:f}]=o(Object.assign({tagName:t,disabled:n},u));return(0,i.jsx)(f,Object.assign({},u,l,{ref:e}))});u.displayName="Button";let l=u},1168:(r,e,t)=>{t.d(e,{A:()=>i});var n=t(96540);function i(){return(0,n.useState)(null)}},20311:r=>{r.exports=function(r,e,t,n,i,a,o,u){if(!r){var l;if(void 0===e)l=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[t,n,i,a,o,u],s=0;(l=Error(e.replace(/%s/g,function(){return f[s++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},79752:(r,e,t)=>{t.d(e,{Zw:()=>f,iC:()=>l});var n=t(58168),i=t(98587),a=t(96540);function o(r){return"default"+r.charAt(0).toUpperCase()+r.substr(1)}function u(r){var e=function(r,e){if("object"!=typeof r||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==typeof e?e:String(e)}function l(r,e,t){var n=(0,a.useRef)(void 0!==r),i=(0,a.useState)(e),o=i[0],u=i[1],l=void 0!==r,f=n.current;return n.current=l,!l&&f&&o!==e&&u(e),[l?r:o,(0,a.useCallback)(function(r){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];t&&t.apply(void 0,[r].concat(n)),u(r)},[t])]}function f(r,e){return Object.keys(e).reduce(function(t,a){var f,s=t[o(a)],c=t[a],v=(0,i.A)(t,[o(a),a].map(u)),d=e[a],p=l(c,s,r[d]),b=p[0],m=p[1];return(0,n.A)({},v,((f={})[a]=b,f[d]=m,f))},r)}t(20311)},58168:(r,e,t)=>{t.d(e,{A:()=>n});function n(){return(n=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(null,arguments)}}}]);