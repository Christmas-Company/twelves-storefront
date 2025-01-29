"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14595],{58907:(e,s)=>{s.Y=function(e,s){return e.split(",").map(function(e){var s=(e=e.trim()).match(t),l=s[1],A=s[2],i=s[3]||"",c={};return c.inverse=!!l&&"not"===l.toLowerCase(),c.type=A?A.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],c.expressions=i.map(function(e){var s=e.match(r),t=s[1].toLowerCase().match(a);return{modifier:t[1],feature:t[2],value:s[2]}}),c}).some(function(e){var t=e.inverse,r="all"===e.type||s.type===e.type;if(r&&t||!(r||t))return!1;var a=e.expressions.every(function(e){var t=e.feature,r=e.modifier,a=e.value,l=s[t];if(!l)return!1;switch(t){case"orientation":case"scan":return l.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=n(a),l=n(l);break;case"resolution":a=c(a),l=c(l);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=i(a),l=i(l);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,l=parseInt(l,10)||0}switch(r){case"min":return l>=a;case"max":return l<=a;default:return l===a}});return a&&!t||!a&&t})};var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,l=/(em|rem|px|cm|mm|in|pt|pc)?$/,A=/(dpi|dpcm|dppx)?$/;function i(e){var s,t=Number(e);return t||(t=(s=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/s[2]),t}function c(e){var s=parseFloat(e);switch(String(e).match(A)[1]){case"dpcm":return s/2.54;case"dppx":return 96*s;default:return s}}function n(e){var s=parseFloat(e);switch(String(e).match(l)[1]){case"em":case"rem":return 16*s;case"cm":return 96*s/2.54;case"mm":return 96*s/2.54/10;case"in":return 96*s;case"pt":return 72*s;case"pc":return 72*s/12;default:return s}}},37918:(e,s,t)=>{var r=t(58907).Y,a="undefined"!=typeof window?window.matchMedia:null;function l(e,s,t){var l,A=this;function i(e){A.matches=e.matches,A.media=e.media}a&&!t&&(l=a.call(window,e)),l?(this.matches=l.matches,this.media=l.media,l.addListener(i)):(this.matches=r(e,s),this.media=e),this.addListener=function(e){l&&l.addListener(e)},this.removeListener=function(e){l&&l.removeListener(e)},this.dispose=function(){l&&l.removeListener(i)}}e.exports=function(e,s,t){return new l(e,s,t)}},98884:(e,s,t)=>{t.d(s,{A:()=>r});let r={src:"/twelves-storefront//_next/static/media/pr-42.e5b20a78.jpg",height:459,width:360,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAAvgLf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAhEAAQNS/9oACAEBAAE/AKDbUyQpdT//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8AlH//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIDQf/aAAgBAwEBPwB2zTw//9k=",blurWidth:6,blurHeight:8}},76929:(e,s,t)=>{t.d(s,{A:()=>r});let r={src:"/twelves-storefront//_next/static/media/pr-43.0c407fe2.jpg",height:459,width:360,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAAqQK//8QAGhAAAgIDAAAAAAAAAAAAAAAAAhIAAQMiQf/aAAgBAQABPwAbyuTDryf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAXEQEAAwAAAAAAAAAAAAAAAAABABFB/9oACAEDAQE/AFvCf//Z",blurWidth:6,blurHeight:8}},65234:(e,s,t)=>{t.d(s,{A:()=>r});let r={src:"/twelves-storefront//_next/static/media/pr-44.ed26a013.jpg",height:459,width:360,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAiwv/xAAdEAACAQQDAAAAAAAAAAAAAAACBAMAAQUTBkFh/9oACAEBAAE/AEFuQROOBjxc3RmUcuny/df/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:6,blurHeight:8}},22411:(e,s,t)=>{t.d(s,{A:()=>r});let r={src:"/twelves-storefront//_next/static/media/trust_img2.b9acef7e.png",height:46,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEVXRi5bFCeKt1CCIymleA/4ZmvKAAAABXRSTlMdDTkrIiDb780AAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BmYGFgZGRiAAAARAAMwK2RPgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},90727:(e,s,t)=>{t.d(s,{A:()=>u}),t(96540);var r=t(79752),a=t(31597),l=t(66505),A=t(93854),i=t(54509),c=t(82867),n=t(85382),d=t(20672),o=t(44868),m=t(74848);function h(e){let{title:s,eventKey:t,disabled:r,tabClassName:a,tabAttrs:l,id:c}=e.props;return null==s?null:(0,m.jsx)(i.A,{as:"li",role:"presentation",children:(0,m.jsx)(A.A,{as:"button",type:"button",eventKey:t,disabled:r,id:c,className:a,...l,children:s})})}let x=e=>{let{id:s,onSelect:t,transition:A,mountOnEnter:i=!1,unmountOnExit:x=!1,variant:u="tabs",children:p,activeKey:g=function(e){let s;return(0,d.jJ)(e,e=>{null==s&&(s=e.props.eventKey)}),s}(p),...j}=(0,r.Zw)(e,{activeKey:"onSelect"});return(0,m.jsxs)(a.A,{id:s,activeKey:g,onSelect:t,transition:(0,o.A)(A),mountOnEnter:i,unmountOnExit:x,children:[(0,m.jsx)(l.A,{id:s,...j,role:"tablist",as:"ul",variant:u,children:(0,d.Tj)(p,h)}),(0,m.jsx)(c.A,{children:(0,d.Tj)(p,e=>{let s={...e.props};return delete s.title,delete s.disabled,delete s.tabClassName,delete s.tabAttrs,(0,m.jsx)(n.A,{...s})})})]})};x.displayName="Tabs";let u=x},62777:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Q});var r=t(74848),a=t(96540),l=t(46874),A=t(70848),i=t(56871),c=t(11849),n=t(58311),d=t(43740),o=t(64183),m=t(39773),h=t(74606),x=t(58943),u=t(29965),p=t.n(u),g=t(15310),j=t(93355),f=t(74898),v=t(93853),w=t(98884),b=t(76929),C=t(65234),N=t(22411);t(79690),t(92598),t(94184),t(8971);var k=t(91106),y=t.n(k);let Q=e=>{let{handleShoppingShow:s}=e,t=(0,h.Ub)({maxWidth:1025}),[u,k]=(0,a.useState)(null),[Q,E]=(0,a.useState)("Grey"),[B,D]=(0,a.useState)("M"),[M,I]=(0,a.useState)(1),R=e=>{E(e)},U=e=>{D(e)},F=e=>{I(s=>Math.max(0,s+e))},[_,S]=(0,a.useState)(!1),[P,G]=(0,a.useState)(!1),[L,z]=(0,a.useState)(!1);return(0,r.jsx)(a.Fragment,{children:(0,r.jsxs)("section",{className:"py-4",children:[(0,r.jsx)(A.A,{children:(0,r.jsxs)(i.A,{className:"py-3 gx-xl-4",children:[(0,r.jsx)(c.A,{md:6,children:(0,r.jsxs)(i.A,{className:"g-2",children:[(0,r.jsx)(c.A,{xl:2,className:"order-2 order-xl-1",children:(0,r.jsx)(l.RC,{className:"productSmall",pagination:{type:"progressbar"},direction:t?"horizontal":"vertical",slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,spaceBetween:10,modules:[x.U1,x.dK],children:(0,r.jsxs)("div",{className:"swiper-wrapper",children:[(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{src:g.A,className:"object-fit-cover",alt:"product1"})}),(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{src:j.A,className:"object-fit-cover",alt:"product5"})}),(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{src:f.A,className:"object-fit-cover",alt:"product5"})}),(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{src:w.A,className:"object-fit-cover",alt:"product42"})}),(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{src:b.A,className:"object-fit-cover",alt:"product43"})}),(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{src:v.A,className:"object-fit-cover",alt:"product32"})}),(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{src:C.A,className:"object-fit-cover",alt:"product44"})})]})})}),(0,r.jsx)(c.A,{xl:10,className:"order-1 order-xl-2",children:(0,r.jsx)(l.RC,{navigation:!0,thumbs:{swiper:u},modules:[x.WO,x.Vx],className:"productMain",children:(0,r.jsxs)("div",{className:"swiper-wrapper",children:[(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{className:"drift-demo-trigger img-fluid w-100","data-zoom":g.A,src:g.A,alt:"product4"})}),(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{className:"drift-demo-trigger img-fluid w-100","data-zoom":j.A,src:j.A,alt:"product5"})}),(0,r.jsx)(l.qr,{children:(0,r.jsx)(p(),{className:"drift-demo-trigger img-fluid w-100","data-zoom":f.A,src:f.A,alt:"product31"})}),(0,r.jsx)(l.qr,{className:"product",children:(0,r.jsx)(p(),{className:"drift-demo-trigger img-fluid w-100","data-zoom":w.A,src:w.A,alt:"product42"})}),(0,r.jsx)(l.qr,{className:"product",children:(0,r.jsx)(p(),{className:"drift-demo-trigger img-fluid w-100","data-zoom":b.A,src:b.A,alt:"product43"})}),(0,r.jsx)(l.qr,{className:"product",children:(0,r.jsx)(p(),{className:"drift-demo-trigger img-fluid w-100","data-zoom":v.A,src:v.A,alt:"product32"})}),(0,r.jsx)(l.qr,{className:"product",children:(0,r.jsx)(p(),{className:"drift-demo-trigger img-fluid w-100","data-zoom":C.A,src:C.A,alt:"product44"})}),(0,r.jsx)("div",{className:"swiper-button-next"}),(0,r.jsx)("div",{className:"swiper-button-prev"})]})})})]})}),(0,r.jsxs)(c.A,{md:6,className:"mt-5 mt-md-0",children:[(0,r.jsx)("h4",{className:"mb-3",children:"Blush Beanie"}),(0,r.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[(0,r.jsx)("p",{className:"text-muted fs-18 mb-4",children:"$15.00"}),(0,r.jsxs)("div",{className:"kalles-rating-result",children:[(0,r.jsxs)("span",{className:"kalles-rating-result__pipe",children:[(0,r.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,r.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,r.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,r.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big active"}),"\xa0",(0,r.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big de-active"})]}),"\xa0",(0,r.jsx)(y(),{href:"#!",children:"(12 reviews)"})]})]}),(0,r.jsx)("p",{className:"text-muted mb-3",children:"Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe."}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h6",{className:"text-uppercase fw-bold mb-3",children:["Color: ",(0,r.jsx)("span",{children:Q})]}),(0,r.jsxs)("div",{className:"product-color-list mt-2 gap-2 d-flex align-items-center",children:[(0,r.jsx)(n.A,{placement:"top",overlay:(0,r.jsx)(d.A,{id:"tooltip-grey",children:"Grey"}),children:(0,r.jsx)(y(),{href:"#!",className:"d-inline-block bg-secondary bg-opacity-50 rounded-circle square-xs ".concat("Grey"===Q?"active":""),onClick:()=>R("Grey")})}),(0,r.jsx)(n.A,{placement:"top",overlay:(0,r.jsx)(d.A,{id:"tooltip-pink",children:"Pink"}),children:(0,r.jsx)(y(),{href:"#!",className:"d-inline-block bg_color_pink rounded-circle square-xs ".concat("Pink"===Q?"active":""),onClick:()=>R("Pink")})}),(0,r.jsx)(n.A,{placement:"top",overlay:(0,r.jsx)(d.A,{id:"tooltip-black",children:"Black"}),children:(0,r.jsx)(y(),{href:"#!",className:"d-inline-block bg-dark rounded-circle square-xs ".concat("Black"===Q?"active":""),onClick:()=>R("Black")})})]})]}),(0,r.jsxs)("div",{className:"pt-2 mb-4 pb-3",children:[(0,r.jsxs)("h6",{className:"text-uppercase fw-bold mt-3",children:["Size: ",(0,r.jsx)("span",{children:B})]}),(0,r.jsxs)("div",{className:"product-color-list size mt-2 gap-2 d-flex align-items-center",children:[(0,r.jsx)(y(),{href:"#!",className:"d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ".concat("S"===B?"active":""),onClick:()=>U("S"),children:"S"}),(0,r.jsx)(y(),{href:"#!",className:"d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ".concat("M"===B?"active":""),onClick:()=>U("M"),children:"M"}),(0,r.jsx)(y(),{href:"#!",className:"d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ".concat("L"===B?"active":""),onClick:()=>U("L"),children:"L"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-wrap align-items-center gap-2 mt-4",children:[(0,r.jsxs)("div",{className:"input-step border border-dark rounded-pill",children:[(0,r.jsx)("button",{className:"minus material-shadow text-dark fw-bold",onClick:()=>F(-1),children:"–"}),(0,r.jsx)("input",{type:"number",className:"product-quantity fw-bold fs-6",value:M,min:"0",max:"100",onChange:e=>{I(Math.max(0,Math.min(100,Number(e.target.value))))}}),(0,r.jsx)("button",{className:"plus material-shadow text-dark fw-bold",onClick:()=>F(1),children:"+"})]}),(0,r.jsx)(o.A,{variant:"teal",className:"text-uppercase rounded-pill min-w-150",onClick:s,children:"Add to Cart"}),(0,r.jsx)("div",{className:"product_wishlist square-40 rounded-circle border border-dark bg-transparent text-center",style:{lineHeight:"40px"},children:(0,r.jsx)(y(),{href:"#",children:(0,r.jsx)("i",{className:"facl facl-heart-o"})})})]}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(p(),{src:N.A,alt:"",className:"img-fluid"})}),(0,r.jsxs)("div",{className:"mt-4 d-flex gap-3 text-nowrap flex-wrap row-gap-1",children:[(0,r.jsx)(y(),{href:"#sizeGuidModal",className:"text-black fw-semibold",onClick:()=>S(!0),children:"Size Guide"}),(0,r.jsx)(y(),{href:"#deliveyReturnModal",className:"text-black fw-semibold mx-2",onClick:()=>G(!0),children:"Delivery and Return"}),(0,r.jsx)(y(),{href:"#askQuesitionModal",className:"text-black fw-semibold",onClick:()=>z(!0),children:"Ask a Question"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsxs)("p",{className:"mb-2",children:[(0,r.jsx)("span",{children:"SKU :"}),(0,r.jsx)("span",{className:"text-muted",children:" P15-2"})]}),(0,r.jsxs)("p",{className:"mb-2",children:[(0,r.jsx)("span",{children:"Categories:"}),(0,r.jsxs)("span",{className:"text-muted",children:[(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:" All, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"Best seller, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"Bottom, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"Dress, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"New Arrival, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:" Women"})]})]}),(0,r.jsxs)("p",{className:"mb-0",children:[(0,r.jsx)("span",{children:"Tags :"}),(0,r.jsxs)("span",{className:"text-muted",children:[(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:" Color Black, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"Color Grey, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"Color Pink, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"Price $7-$50, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"Size L, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"Size M, "}),(0,r.jsx)(y(),{href:"#!",className:"text-muted",children:"Size S, "})]})]})]}),(0,r.jsx)("div",{className:"social-share mt-5",children:(0,r.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,r.jsx)(y(),{href:"https://www.facebook.com/",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z",fillRule:"evenodd"})})})}),(0,r.jsx)(y(),{href:"https://twitter.com/",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336",fillRule:"evenodd"})})})}),(0,r.jsx)(y(),{href:"https://www.google.com/gmail/about",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,r.jsxs)("g",{children:[(0,r.jsx)("g",{fillRule:"evenodd"}),(0,r.jsx)("path",{d:"M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z"}),(0,r.jsx)("path",{d:"M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z"})]})})}),(0,r.jsx)(y(),{href:"https://www.pinterest.com/",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z",fillRule:"evenodd"})})})}),(0,r.jsx)(y(),{href:"https://www.messenger.com",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z",fillRule:"evenodd"})})})})]})})]})]})}),(0,r.jsx)(m.Z_,{show:_,handleClose:()=>S(!1)}),(0,r.jsx)(m.nv,{show2:P,handleClose2:()=>G(!1)}),(0,r.jsx)(m.vN,{show3:L,handleClose3:()=>z(!1)})]})})}},74606:(e,s,t)=>{t.d(s,{Ub:()=>M});var r=t(96540),a=t(37918),l=t.n(a),A=/[A-Z]/g,i=/^ms-/,c={};function n(e){return"-"+e.toLowerCase()}let d=function(e){if(c.hasOwnProperty(e))return c[e];var s=e.replace(A,n);return c[e]=i.test(s)?"-"+s:s};var o=t(5556),m=t.n(o);let h=m().oneOfType([m().string,m().number]),x={all:m().bool,grid:m().bool,aural:m().bool,braille:m().bool,handheld:m().bool,print:m().bool,projection:m().bool,screen:m().bool,tty:m().bool,tv:m().bool,embossed:m().bool},{type:u,...p}={orientation:m().oneOf(["portrait","landscape"]),scan:m().oneOf(["progressive","interlace"]),aspectRatio:m().string,deviceAspectRatio:m().string,height:h,deviceHeight:h,width:h,deviceWidth:h,color:m().bool,colorIndex:m().bool,monochrome:m().bool,resolution:h,type:Object.keys(x)},g={minAspectRatio:m().string,maxAspectRatio:m().string,minDeviceAspectRatio:m().string,maxDeviceAspectRatio:m().string,minHeight:h,maxHeight:h,minDeviceHeight:h,maxDeviceHeight:h,minWidth:h,maxWidth:h,minDeviceWidth:h,maxDeviceWidth:h,minColor:m().number,maxColor:m().number,minColorIndex:m().number,maxColorIndex:m().number,minMonochrome:m().number,maxMonochrome:m().number,minResolution:h,maxResolution:h,...p};var j={all:{...x,...g}};let f=e=>`not ${e}`,v=(e,s)=>{let t=d(e);return("number"==typeof s&&(s=`${s}px`),!0===s)?t:!1===s?f(t):`(${t}: ${s})`},w=e=>e.join(" and "),b=e=>{let s=[];return Object.keys(j.all).forEach(t=>{let r=e[t];null!=r&&s.push(v(t,r))}),w(s)},C=(0,r.createContext)(void 0),N=e=>e.query||b(e),k=e=>{if(e)return Object.keys(e).reduce((s,t)=>(s[d(t)]=e[t],s),{})},y=()=>{let e=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{e.current=!0},[]),e.current},Q=e=>{let s=(0,r.useContext)(C),t=()=>k(e)||k(s),[a,l]=(0,r.useState)(t);return(0,r.useEffect)(()=>{let e=t();!function(e,s){if(e===s)return!0;if(!e||!s)return!1;let t=Object.keys(e),r=Object.keys(s),a=t.length;if(r.length!==a)return!1;for(let r=0;r<a;r++){let a=t[r];if(e[a]!==s[a]||!Object.prototype.hasOwnProperty.call(s,a))return!1}return!0}(a,e)&&l(e)},[e,s]),a},E=e=>{let s=()=>N(e),[t,a]=(0,r.useState)(s);return(0,r.useEffect)(()=>{let e=s();t!==e&&a(e)},[e]),t},B=(e,s)=>{let t=()=>l()(e,s||{},!!s),[a,A]=(0,r.useState)(t),i=y();return(0,r.useEffect)(()=>{if(i){let e=t();return A(e),()=>{e&&e.dispose()}}},[e,s]),a},D=e=>{let[s,t]=(0,r.useState)(e.matches);return(0,r.useEffect)(()=>{let s=e=>{t(e.matches)};return e.addListener(s),t(e.matches),()=>{e.removeListener(s)}},[e]),s},M=(e,s,t)=>{let a=Q(s),l=E(e);if(!l)throw Error("Invalid or missing MediaQuery!");let A=B(l,a),i=D(A),c=y();return(0,r.useEffect)(()=>{c&&t&&t(i)},[i]),(0,r.useEffect)(()=>()=>{A&&A.dispose()},[]),i}}}]);