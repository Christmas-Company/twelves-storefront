"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13392],{58907:(e,s)=>{s.Y=function(e,s){return e.split(",").map(function(e){var s=(e=e.trim()).match(t),r=s[1],l=s[2],i=s[3]||"",n={};return n.inverse=!!r&&"not"===r.toLowerCase(),n.type=l?l.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],n.expressions=i.map(function(e){var s=e.match(A),t=s[1].toLowerCase().match(a);return{modifier:t[1],feature:t[2],value:s[2]}}),n}).some(function(e){var t=e.inverse,A="all"===e.type||s.type===e.type;if(A&&t||!(A||t))return!1;var a=e.expressions.every(function(e){var t=e.feature,A=e.modifier,a=e.value,r=s[t];if(!r)return!1;switch(t){case"orientation":case"scan":return r.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=c(a),r=c(r);break;case"resolution":a=n(a),r=n(r);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=i(a),r=i(r);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,r=parseInt(r,10)||0}switch(A){case"min":return r>=a;case"max":return r<=a;default:return r===a}});return a&&!t||!a&&t})};var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,A=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,l=/(dpi|dpcm|dppx)?$/;function i(e){var s,t=Number(e);return t||(t=(s=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/s[2]),t}function n(e){var s=parseFloat(e);switch(String(e).match(l)[1]){case"dpcm":return s/2.54;case"dppx":return 96*s;default:return s}}function c(e){var s=parseFloat(e);switch(String(e).match(r)[1]){case"em":case"rem":return 16*s;case"cm":return 96*s/2.54;case"mm":return 96*s/2.54/10;case"in":return 96*s;case"pt":return 72*s;case"pc":return 72*s/12;default:return s}}},37918:(e,s,t)=>{var A=t(58907).Y,a="undefined"!=typeof window?window.matchMedia:null;function r(e,s,t){var r,l=this;function i(e){l.matches=e.matches,l.media=e.media}a&&!t&&(r=a.call(window,e)),r?(this.matches=r.matches,this.media=r.media,r.addListener(i)):(this.matches=A(e,s),this.media=e),this.addListener=function(e){r&&r.addListener(e)},this.removeListener=function(e){r&&r.removeListener(e)},this.dispose=function(){r&&r.removeListener(i)}}e.exports=function(e,s,t){return new r(e,s,t)}},81200:(e,s,t)=>{t.d(s,{A:()=>A});let A={src:"/twelves-storefront//_next/static/media/thumb-01.8d4fed31.jpg",height:689,width:540,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAqwj/xAAaEAABBQEAAAAAAAAAAAAAAAADAAIhIzFB/9oACAEBAAE/AButNvJX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z",blurWidth:6,blurHeight:8}},48575:(e,s,t)=>{t.d(s,{A:()=>A});let A={src:"/twelves-storefront//_next/static/media/thumb-02.d519703f.jpg",height:689,width:540,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAqIj/xAAbEAACAQUAAAAAAAAAAAAAAAABAgMAEhNBof/aAAgBAQABPwCJEySNYN9Nf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:6,blurHeight:8}},56866:(e,s,t)=>{t.d(s,{A:()=>A});let A={src:"/twelves-storefront//_next/static/media/thumb-03.feefc2de.jpg",height:689,width:540,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAp4j/xAAaEAEAAwADAAAAAAAAAAAAAAABAgMRABJx/9oACAEBAAE/AK4TldY9jFcPHOf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:6,blurHeight:8}},22411:(e,s,t)=>{t.d(s,{A:()=>A});let A={src:"/twelves-storefront//_next/static/media/trust_img2.b9acef7e.png",height:46,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEVXRi5bFCeKt1CCIymleA/4ZmvKAAAABXRSTlMdDTkrIiDb780AAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BmYGFgZGRiAAAARAAMwK2RPgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},90727:(e,s,t)=>{t.d(s,{A:()=>u}),t(96540);var A=t(79752),a=t(31597),r=t(66505),l=t(93854),i=t(54509),n=t(82867),c=t(85382),d=t(20672),o=t(44868),h=t(74848);function m(e){let{title:s,eventKey:t,disabled:A,tabClassName:a,tabAttrs:r,id:n}=e.props;return null==s?null:(0,h.jsx)(i.A,{as:"li",role:"presentation",children:(0,h.jsx)(l.A,{as:"button",type:"button",eventKey:t,disabled:A,id:n,className:a,...r,children:s})})}let x=e=>{let{id:s,onSelect:t,transition:l,mountOnEnter:i=!1,unmountOnExit:x=!1,variant:u="tabs",children:g,activeKey:p=function(e){let s;return(0,d.jJ)(e,e=>{null==s&&(s=e.props.eventKey)}),s}(g),...f}=(0,A.Zw)(e,{activeKey:"onSelect"});return(0,h.jsxs)(a.A,{id:s,activeKey:p,onSelect:t,transition:(0,o.A)(l),mountOnEnter:i,unmountOnExit:x,children:[(0,h.jsx)(r.A,{id:s,...f,role:"tablist",as:"ul",variant:u,children:(0,d.Tj)(g,m)}),(0,h.jsx)(n.A,{children:(0,d.Tj)(g,e=>{let s={...e.props};return delete s.title,delete s.disabled,delete s.tabClassName,delete s.tabAttrs,(0,h.jsx)(c.A,{...s})})})]})};x.displayName="Tabs";let u=x},78906:(e,s,t)=>{t.r(s),t.d(s,{default:()=>v});var A=t(74848),a=t(96540),r=t(70848),l=t(56871),i=t(11849),n=t(64183),c=t(46874),d=t(39773),o=t(58943),h=t(74606),m=t(29965),x=t.n(m),u=t(81200),g=t(48575),p=t(56866),f=t(22411),j=t(91106),w=t.n(j);t(79690),t(92598),t(94184),t(8971);let v=e=>{let{handleShoppingShow:s}=e,t=(0,h.Ub)({maxWidth:1025}),[m,j]=(0,a.useState)(null),[v,b]=(0,a.useState)(1),C=e=>{b(s=>Math.max(0,s+e))},[N,E]=(0,a.useState)(!1),[Q,k]=(0,a.useState)(!1),[B,y]=(0,a.useState)(!1);return(0,A.jsx)(a.Fragment,{children:(0,A.jsxs)(r.A,{className:"py-4",children:[(0,A.jsxs)(l.A,{className:"py-3 gx-xl-1",children:[(0,A.jsx)(i.A,{md:6,children:(0,A.jsxs)(l.A,{className:"g-2",children:[(0,A.jsx)(i.A,{xl:2,className:"mt-xl-3 mt-2 order-2 order-xl-1",children:(0,A.jsx)(c.RC,{pagination:{type:"progressbar"},direction:t?"horizontal":"vertical",slidesPerView:t?4:6,freeMode:!0,watchSlidesProgress:!0,spaceBetween:10,className:"productSmall",modules:[o.U1,o.dK],children:(0,A.jsxs)("div",{className:"swiper-wrapper",children:[(0,A.jsx)(c.qr,{children:(0,A.jsx)(x(),{src:u.A,alt:"",className:"object-fit-cover"})}),(0,A.jsx)(c.qr,{children:(0,A.jsx)(x(),{src:g.A,alt:"",className:"object-fit-cover"})}),(0,A.jsx)(c.qr,{children:(0,A.jsx)(x(),{src:p.A,alt:"",className:"object-fit-cover"})}),(0,A.jsx)(c.qr,{children:(0,A.jsx)(x(),{src:g.A,alt:"",className:"object-fit-cover"})})]})})}),(0,A.jsx)(i.A,{xl:9,className:"mt-3 order-1 order-xl-2",children:(0,A.jsx)(c.RC,{navigation:!0,thumbs:{swiper:m},className:"productMain",modules:[o.WO,o.Vx],children:(0,A.jsxs)("div",{className:"swiper-wrapper",children:[(0,A.jsx)(c.qr,{children:(0,A.jsx)(x(),{src:u.A,alt:"",className:"img-fluid w-100"})}),(0,A.jsx)(c.qr,{children:(0,A.jsx)(x(),{src:g.A,alt:"",className:"img-fluid w-100"})}),(0,A.jsx)(c.qr,{children:(0,A.jsx)(x(),{src:p.A,alt:"",className:"img-fluid w-100"})}),(0,A.jsx)(c.qr,{children:(0,A.jsx)(x(),{src:g.A,alt:"",className:"object-fit-cover"})})]})})})]})}),(0,A.jsxs)(i.A,{md:6,className:"mt-5 mt-md-0",children:[(0,A.jsx)("h4",{className:"mb-3",children:"Cream women pants"}),(0,A.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[(0,A.jsx)("p",{className:"text-muted fs-18 mb-4",children:"$35.00"}),(0,A.jsx)("div",{id:"tab_reviews_product",children:(0,A.jsxs)("div",{className:"kalles-rating-result",children:[(0,A.jsxs)("span",{className:"kalles-rating-result__pipe",children:[(0,A.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,A.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,A.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,A.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big active"}),"\xa0",(0,A.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big de-active"})]}),"\xa0",(0,A.jsx)(w(),{href:"#",children:"(12 reviews)"})]})})]}),(0,A.jsx)("p",{className:"text-muted",children:"Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe."}),(0,A.jsxs)("div",{className:"d-flex flex-wrap align-items-center gap-2",children:[(0,A.jsxs)("div",{className:"input-step border border-dark rounded-pill",children:[(0,A.jsx)(n.A,{variant:"outline-dark",className:"minus material-shadow text-dark fw-bold",onClick:()=>C(-1),children:"–"}),(0,A.jsx)("input",{type:"number",className:"product-quantity fw-bold fs-6",value:v,min:"0",max:"100",onChange:e=>{b(Math.max(0,Math.min(100,Number(e.target.value))))}}),(0,A.jsx)(n.A,{variant:"outline-dark",className:"plus material-shadow text-dark fw-bold",onClick:()=>C(1),children:"+"})]}),(0,A.jsx)(n.A,{variant:"teal",className:"text-uppercase rounded-pill min-w-150",onClick:s,children:"Add to Cart"}),(0,A.jsx)("div",{className:"product_wishlist square-40 rounded-circle border border-dark bg-transparent text-center",style:{lineHeight:"40px"},children:(0,A.jsx)(w(),{href:"#",children:(0,A.jsx)("i",{className:"facl facl-heart-o"})})})]}),(0,A.jsx)("div",{className:"mt-3",children:(0,A.jsx)(x(),{src:f.A,alt:"",className:"img-fluid"})}),(0,A.jsxs)("div",{className:"mt-4 d-flex gap-3 text-nowrap flex-wrap row-gap-1",children:[(0,A.jsx)(w(),{href:"#sizeGuidModal","data-bs-toggle":"modal",className:"text-black fw-semibold",onClick:()=>E(!0),children:"Size Guide"}),(0,A.jsx)(w(),{href:"#deliveyReturnModal","data-bs-toggle":"modal",className:"text-black fw-semibold mx-2",onClick:()=>k(!0),children:"Delivery and Return"}),(0,A.jsx)(w(),{href:"#askQuesitionModal","data-bs-toggle":"modal",className:"text-black fw-semibold",onClick:()=>y(!0),children:"Ask a Question"})]}),(0,A.jsxs)("div",{className:"mt-4",children:[(0,A.jsxs)("p",{className:"mb-2",children:[(0,A.jsx)("span",{children:"SKU :"}),(0,A.jsx)("span",{className:"text-muted",children:" P15-2"})]}),(0,A.jsxs)("p",{className:"mb-2",children:[(0,A.jsx)("span",{children:"Categories:"}),(0,A.jsxs)("span",{className:"text-muted",children:[(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:" All, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Best seller, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Bottom, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Dress, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"New Arrival, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Women"})]})]}),(0,A.jsxs)("p",{className:"mb-2",children:[(0,A.jsx)("span",{children:"Tags :"}),(0,A.jsxs)("span",{className:"text-muted",children:[(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:" Color Black, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Color Grey, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Color Pink, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Price $7-$50, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Size L, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Size M, "}),(0,A.jsx)(w(),{href:"#!",className:"text-muted",children:"Size S, "})]})]})]}),(0,A.jsx)("div",{className:"social-share mt-5",children:(0,A.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,A.jsx)(w(),{href:"https://www.facebook.com/",children:(0,A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,A.jsx)("g",{children:(0,A.jsx)("path",{d:"M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z",fillRule:"evenodd"})})})}),(0,A.jsx)(w(),{href:"https://twitter.com/",children:(0,A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,A.jsx)("g",{children:(0,A.jsx)("path",{d:"M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336",fillRule:"evenodd"})})})}),(0,A.jsx)(w(),{href:"https://www.google.com/gmail/about",children:(0,A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,A.jsxs)("g",{children:[(0,A.jsx)("g",{fillRule:"evenodd"}),(0,A.jsx)("path",{d:"M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z"}),(0,A.jsx)("path",{d:"M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z"})]})})}),(0,A.jsx)(w(),{href:"https://www.pinterest.com/",children:(0,A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,A.jsx)("g",{children:(0,A.jsx)("path",{d:"M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z",fillRule:"evenodd"})})})}),(0,A.jsx)(w(),{href:"https://www.messenger.com",children:(0,A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,A.jsx)("g",{children:(0,A.jsx)("path",{d:"M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z",fillRule:"evenodd"})})})})]})})]})]}),(0,A.jsx)(d.Z_,{show:N,handleClose:()=>E(!1)}),(0,A.jsx)(d.nv,{show2:Q,handleClose2:()=>k(!1)}),(0,A.jsx)(d.vN,{show3:B,handleClose3:()=>y(!1)})]})})}},74606:(e,s,t)=>{t.d(s,{Ub:()=>I});var A=t(96540),a=t(37918),r=t.n(a),l=/[A-Z]/g,i=/^ms-/,n={};function c(e){return"-"+e.toLowerCase()}let d=function(e){if(n.hasOwnProperty(e))return n[e];var s=e.replace(l,c);return n[e]=i.test(s)?"-"+s:s};var o=t(5556),h=t.n(o);let m=h().oneOfType([h().string,h().number]),x={all:h().bool,grid:h().bool,aural:h().bool,braille:h().bool,handheld:h().bool,print:h().bool,projection:h().bool,screen:h().bool,tty:h().bool,tv:h().bool,embossed:h().bool},{type:u,...g}={orientation:h().oneOf(["portrait","landscape"]),scan:h().oneOf(["progressive","interlace"]),aspectRatio:h().string,deviceAspectRatio:h().string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:h().bool,colorIndex:h().bool,monochrome:h().bool,resolution:m,type:Object.keys(x)},p={minAspectRatio:h().string,maxAspectRatio:h().string,minDeviceAspectRatio:h().string,maxDeviceAspectRatio:h().string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:h().number,maxColor:h().number,minColorIndex:h().number,maxColorIndex:h().number,minMonochrome:h().number,maxMonochrome:h().number,minResolution:m,maxResolution:m,...g};var f={all:{...x,...p}};let j=e=>`not ${e}`,w=(e,s)=>{let t=d(e);return("number"==typeof s&&(s=`${s}px`),!0===s)?t:!1===s?j(t):`(${t}: ${s})`},v=e=>e.join(" and "),b=e=>{let s=[];return Object.keys(f.all).forEach(t=>{let A=e[t];null!=A&&s.push(w(t,A))}),v(s)},C=(0,A.createContext)(void 0),N=e=>e.query||b(e),E=e=>{if(e)return Object.keys(e).reduce((s,t)=>(s[d(t)]=e[t],s),{})},Q=()=>{let e=(0,A.useRef)(!1);return(0,A.useEffect)(()=>{e.current=!0},[]),e.current},k=e=>{let s=(0,A.useContext)(C),t=()=>E(e)||E(s),[a,r]=(0,A.useState)(t);return(0,A.useEffect)(()=>{let e=t();!function(e,s){if(e===s)return!0;if(!e||!s)return!1;let t=Object.keys(e),A=Object.keys(s),a=t.length;if(A.length!==a)return!1;for(let A=0;A<a;A++){let a=t[A];if(e[a]!==s[a]||!Object.prototype.hasOwnProperty.call(s,a))return!1}return!0}(a,e)&&r(e)},[e,s]),a},B=e=>{let s=()=>N(e),[t,a]=(0,A.useState)(s);return(0,A.useEffect)(()=>{let e=s();t!==e&&a(e)},[e]),t},y=(e,s)=>{let t=()=>r()(e,s||{},!!s),[a,l]=(0,A.useState)(t),i=Q();return(0,A.useEffect)(()=>{if(i){let e=t();return l(e),()=>{e&&e.dispose()}}},[e,s]),a},D=e=>{let[s,t]=(0,A.useState)(e.matches);return(0,A.useEffect)(()=>{let s=e=>{t(e.matches)};return e.addListener(s),t(e.matches),()=>{e.removeListener(s)}},[e]),s},I=(e,s,t)=>{let a=k(s),r=B(e);if(!r)throw Error("Invalid or missing MediaQuery!");let l=y(r,a),i=D(l),n=Q();return(0,A.useEffect)(()=>{n&&t&&t(i)},[i]),(0,A.useEffect)(()=>()=>{l&&l.dispose()},[]),i}}}]);