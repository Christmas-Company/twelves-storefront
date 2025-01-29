"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15638],{58907:(e,A)=>{A.Y=function(e,A){return e.split(",").map(function(e){var A=(e=e.trim()).match(s),r=A[1],l=A[2],i=A[3]||"",n={};return n.inverse=!!r&&"not"===r.toLowerCase(),n.type=l?l.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],n.expressions=i.map(function(e){var A=e.match(t),s=A[1].toLowerCase().match(a);return{modifier:s[1],feature:s[2],value:A[2]}}),n}).some(function(e){var s=e.inverse,t="all"===e.type||A.type===e.type;if(t&&s||!(t||s))return!1;var a=e.expressions.every(function(e){var s=e.feature,t=e.modifier,a=e.value,r=A[s];if(!r)return!1;switch(s){case"orientation":case"scan":return r.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=c(a),r=c(r);break;case"resolution":a=n(a),r=n(r);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=i(a),r=i(r);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,r=parseInt(r,10)||0}switch(t){case"min":return r>=a;case"max":return r<=a;default:return r===a}});return a&&!s||!a&&s})};var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,l=/(dpi|dpcm|dppx)?$/;function i(e){var A,s=Number(e);return s||(s=(A=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/A[2]),s}function n(e){var A=parseFloat(e);switch(String(e).match(l)[1]){case"dpcm":return A/2.54;case"dppx":return 96*A;default:return A}}function c(e){var A=parseFloat(e);switch(String(e).match(r)[1]){case"em":case"rem":return 16*A;case"cm":return 96*A/2.54;case"mm":return 96*A/2.54/10;case"in":return 96*A;case"pt":return 72*A;case"pc":return 72*A/12;default:return A}}},37918:(e,A,s)=>{var t=s(58907).Y,a="undefined"!=typeof window?window.matchMedia:null;function r(e,A,s){var r,l=this;function i(e){l.matches=e.matches,l.media=e.media}a&&!s&&(r=a.call(window,e)),r?(this.matches=r.matches,this.media=r.media,r.addListener(i)):(this.matches=t(e,A),this.media=e),this.addListener=function(e){r&&r.addListener(e)},this.removeListener=function(e){r&&r.removeListener(e)},this.dispose=function(){r&&r.removeListener(i)}}e.exports=function(e,A,s){return new r(e,A,s)}},22411:(e,A,s)=>{s.d(A,{A:()=>t});let t={src:"/twelves-storefront//_next/static/media/trust_img2.b9acef7e.png",height:46,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEVXRi5bFCeKt1CCIymleA/4ZmvKAAAABXRSTlMdDTkrIiDb780AAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BmYGFgZGRiAAAARAAMwK2RPgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},90727:(e,A,s)=>{s.d(A,{A:()=>u}),s(96540);var t=s(79752),a=s(31597),r=s(66505),l=s(93854),i=s(54509),n=s(82867),c=s(85382),d=s(20672),o=s(44868),h=s(74848);function m(e){let{title:A,eventKey:s,disabled:t,tabClassName:a,tabAttrs:r,id:n}=e.props;return null==A?null:(0,h.jsx)(i.A,{as:"li",role:"presentation",children:(0,h.jsx)(l.A,{as:"button",type:"button",eventKey:s,disabled:t,id:n,className:a,...r,children:A})})}let x=e=>{let{id:A,onSelect:s,transition:l,mountOnEnter:i=!1,unmountOnExit:x=!1,variant:u="tabs",children:g,activeKey:p=function(e){let A;return(0,d.jJ)(e,e=>{null==A&&(A=e.props.eventKey)}),A}(g),...j}=(0,t.Zw)(e,{activeKey:"onSelect"});return(0,h.jsxs)(a.A,{id:A,activeKey:p,onSelect:s,transition:(0,o.A)(l),mountOnEnter:i,unmountOnExit:x,children:[(0,h.jsx)(r.A,{id:A,...j,role:"tablist",as:"ul",variant:u,children:(0,d.Tj)(g,m)}),(0,h.jsx)(n.A,{children:(0,d.Tj)(g,e=>{let A={...e.props};return delete A.title,delete A.disabled,delete A.tabClassName,delete A.tabAttrs,(0,h.jsx)(c.A,{...A})})})]})};x.displayName="Tabs";let u=x},17936:(e,A,s)=>{s.r(A),s.d(A,{default:()=>v});var t=s(74848),a=s(96540),r=s(70848),l=s(56871),i=s(11849),n=s(64183),c=s(46874),d=s(39773),o=s(58943),h=s(74606),m=s(29965),x=s.n(m);let u={src:"/twelves-storefront//_next/static/media/thumb-01.a3fb4e4c.jpg",height:689,width:540,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAphH/xAAbEAACAgMBAAAAAAAAAAAAAAACAwEFAAQSE//aAAgBAQABPwChHbVe3RbLzNbTPygpnkeDz//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:6,blurHeight:8},g={src:"/twelves-storefront//_next/static/media/thumb-02.7e10d933.jpg",height:689,width:540,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAApxH/xAAdEAABBAIDAAAAAAAAAAAAAAACAQMFEwAGEhRB/9oACAEBAAE/AIbsjtE5a8RtGiVj4nDP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:6,blurHeight:8},p={src:"/twelves-storefront//_next/static/media/thumb-03.d6650120.jpg",height:689,width:540,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAACmA//EAB0QAAEEAgMAAAAAAAAAAAAAAAIBAwQTAAYRFHH/2gAIAQEAAT8AhBRsE+fzZ2EcDwWlBAz/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:6,blurHeight:8},j={src:"/twelves-storefront//_next/static/media/thumb-04.745b9c2b.jpg",height:689,width:540,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACWBX//xAAdEAABAgcAAAAAAAAAAAAAAAADAAIEBQYRFSHC/9oACAEBAAE/AKWmuNjSvtogOl//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwBBv//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAwEBPwA0hf/Z",blurWidth:6,blurHeight:8};var f=s(22411),w=s(91106),b=s.n(w);s(79690),s(92598),s(94184),s(8971);let v=e=>{let{handleShoppingShow:A}=e,s=(0,h.Ub)({maxWidth:1025}),[m,w]=(0,a.useState)(null),[v,C]=(0,a.useState)("M"),N=e=>{C(e)},[E,B]=(0,a.useState)(1),Q=e=>{B(A=>Math.max(0,A+e))},[k,I]=(0,a.useState)(!1),[D,y]=(0,a.useState)(!1),[M,R]=(0,a.useState)(!1);return(0,t.jsx)(a.Fragment,{children:(0,t.jsxs)(r.A,{className:"py-4",children:[(0,t.jsxs)(l.A,{className:"py-3 gx-xl-1",children:[(0,t.jsx)(i.A,{md:6,children:(0,t.jsxs)(l.A,{className:"g-2",children:[(0,t.jsx)(i.A,{xl:2,className:"mt-xl-3 mt-2 order-2 order-xl-1",children:(0,t.jsx)(c.RC,{pagination:{type:"progressbar"},direction:s?"horizontal":"vertical",slidesPerView:s?4:6,freeMode:!0,watchSlidesProgress:!0,spaceBetween:10,className:"productSmall",modules:[o.U1,o.dK],children:(0,t.jsxs)("div",{className:"swiper-wrapper",children:[(0,t.jsx)(c.qr,{children:(0,t.jsx)(x(),{src:u,alt:"",className:"object-fit-cover"})}),(0,t.jsx)(c.qr,{children:(0,t.jsx)(x(),{src:g,alt:"",className:"object-fit-cover"})}),(0,t.jsx)(c.qr,{children:(0,t.jsx)(x(),{src:p,alt:"",className:"object-fit-cover"})}),(0,t.jsx)(c.qr,{children:(0,t.jsx)(x(),{src:j,alt:"",className:"object-fit-cover"})})]})})}),(0,t.jsx)(i.A,{xl:9,className:"mt-3 order-1 order-xl-2",children:(0,t.jsx)(c.RC,{navigation:!0,thumbs:{swiper:m},className:"productMain",modules:[o.WO,o.Vx],children:(0,t.jsxs)("div",{className:"swiper-wrapper",children:[(0,t.jsx)(c.qr,{children:(0,t.jsx)(x(),{src:u,alt:"",className:"img-fluid w-100"})}),(0,t.jsx)(c.qr,{children:(0,t.jsx)(x(),{src:g,alt:"",className:"img-fluid w-100"})}),(0,t.jsx)(c.qr,{children:(0,t.jsx)(x(),{src:p,alt:"",className:"img-fluid w-100"})}),(0,t.jsx)(c.qr,{children:(0,t.jsx)(x(),{src:j,alt:"",className:"img-fluid w-100"})})]})})})]})}),(0,t.jsxs)(i.A,{md:6,className:"mt-5 mt-md-0",children:[(0,t.jsx)("h4",{className:"mb-3",children:"Ridley High Waist"}),(0,t.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[(0,t.jsx)("p",{className:"text-muted fs-18 mb-4",children:"$36.00"}),(0,t.jsx)("div",{id:"#tab_reviews_product",children:(0,t.jsxs)("div",{className:"kalles-rating-result",children:[(0,t.jsxs)("span",{className:"kalles-rating-result__pipe",children:[(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big active"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big de-active"})]}),"\xa0",(0,t.jsx)(b(),{href:"#",children:"(12 reviews)"})]})})]}),(0,t.jsx)("p",{className:"text-muted",children:"Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe."}),(0,t.jsxs)("div",{className:"pt-2 mb-4 pb-3",children:[(0,t.jsxs)("h6",{className:"text-uppercase fw-bold",children:["Size: ",(0,t.jsx)("span",{children:v})]}),(0,t.jsxs)("div",{className:"product-color-list size mt-2 gap-2 d-flex align-items-center",children:[(0,t.jsx)(b(),{href:"#!",className:"d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ".concat("S"===v?"active":""),onClick:()=>N("S"),children:"S"}),(0,t.jsx)(b(),{href:"#!",className:"d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ".concat("M"===v?"active":""),onClick:()=>N("M"),children:"M"}),(0,t.jsx)(b(),{href:"#!",className:"d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ".concat("L"===v?"active":""),onClick:()=>N("L"),children:"L"})]})]}),(0,t.jsxs)("div",{className:"d-flex flex-wrap align-items-center gap-2 mt-4",children:[(0,t.jsxs)("div",{className:"input-step border border-dark rounded-pill",children:[(0,t.jsx)("button",{className:"minus material-shadow text-dark fw-bold",onClick:()=>Q(-1),children:"–"}),(0,t.jsx)("input",{type:"number",className:"product-quantity fw-bold fs-6",value:E,min:"0",max:"100",onChange:e=>{B(Math.max(0,Math.min(100,Number(e.target.value))))}}),(0,t.jsx)("button",{className:"plus material-shadow text-dark fw-bold",onClick:()=>Q(1),children:"+"})]}),(0,t.jsx)(n.A,{variant:"teal",className:"text-uppercase rounded-pill min-w-150",onClick:A,children:"Add to Cart"}),(0,t.jsx)("div",{className:"product_wishlist square-40 rounded-circle border border-dark bg-transparent text-center",style:{lineHeight:"40px"},children:(0,t.jsx)(b(),{href:"#",children:(0,t.jsx)("i",{className:"facl facl-heart-o"})})})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(x(),{src:f.A,alt:"",className:"img-fluid"})}),(0,t.jsxs)("div",{className:"mt-4 d-flex gap-3 text-nowrap flex-wrap row-gap-1",children:[(0,t.jsx)(b(),{href:"#sizeGuidModal","data-bs-toggle":"modal",className:"text-black fw-semibold",onClick:()=>I(!0),children:"Size Guide"}),(0,t.jsx)(b(),{href:"#deliveyReturnModal","data-bs-toggle":"modal",className:"text-black fw-semibold mx-2",onClick:()=>y(!0),children:"Delivery and Return"}),(0,t.jsx)(b(),{href:"#askQuesitionModal","data-bs-toggle":"modal",className:"text-black fw-semibold",onClick:()=>R(!0),children:"Ask a Question"})]}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("p",{className:"mb-2",children:[(0,t.jsx)("span",{children:"SKU :"}),(0,t.jsx)("span",{className:"text-muted",children:" P15-2"})]}),(0,t.jsxs)("p",{className:"mb-2",children:[(0,t.jsx)("span",{children:"Categories:"}),(0,t.jsxs)("span",{className:"text-muted",children:[(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:" All, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Best seller, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Bottom, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Dress, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"New Arrival, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Women"})]})]}),(0,t.jsxs)("p",{className:"mb-2",children:[(0,t.jsx)("span",{children:"Tags :"}),(0,t.jsxs)("span",{className:"text-muted",children:[(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:" Color Black, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Color Grey, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Color Pink, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Price $7-$50, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Size L, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Size M, "}),(0,t.jsx)(b(),{href:"#!",className:"text-muted",children:"Size S, "})]})]})]}),(0,t.jsx)("div",{className:"social-share mt-5",children:(0,t.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,t.jsx)(b(),{href:"https://www.facebook.com/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z",fillRule:"evenodd"})})})}),(0,t.jsx)(b(),{href:"https://twitter.com/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336",fillRule:"evenodd"})})})}),(0,t.jsx)(b(),{href:"https://www.google.com/gmail/about",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsxs)("g",{children:[(0,t.jsx)("g",{fillRule:"evenodd"}),(0,t.jsx)("path",{d:"M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z"}),(0,t.jsx)("path",{d:"M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z"})]})})}),(0,t.jsx)(b(),{href:"https://www.pinterest.com/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z",fillRule:"evenodd"})})})}),(0,t.jsx)(b(),{href:"https://www.messenger.com",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z",fillRule:"evenodd"})})})})]})})]})]}),(0,t.jsx)(d.Z_,{show:k,handleClose:()=>I(!1)}),(0,t.jsx)(d.nv,{show2:D,handleClose2:()=>y(!1)}),(0,t.jsx)(d.vN,{show3:M,handleClose3:()=>R(!1)})]})})}},74606:(e,A,s)=>{s.d(A,{Ub:()=>y});var t=s(96540),a=s(37918),r=s.n(a),l=/[A-Z]/g,i=/^ms-/,n={};function c(e){return"-"+e.toLowerCase()}let d=function(e){if(n.hasOwnProperty(e))return n[e];var A=e.replace(l,c);return n[e]=i.test(A)?"-"+A:A};var o=s(5556),h=s.n(o);let m=h().oneOfType([h().string,h().number]),x={all:h().bool,grid:h().bool,aural:h().bool,braille:h().bool,handheld:h().bool,print:h().bool,projection:h().bool,screen:h().bool,tty:h().bool,tv:h().bool,embossed:h().bool},{type:u,...g}={orientation:h().oneOf(["portrait","landscape"]),scan:h().oneOf(["progressive","interlace"]),aspectRatio:h().string,deviceAspectRatio:h().string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:h().bool,colorIndex:h().bool,monochrome:h().bool,resolution:m,type:Object.keys(x)},p={minAspectRatio:h().string,maxAspectRatio:h().string,minDeviceAspectRatio:h().string,maxDeviceAspectRatio:h().string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:h().number,maxColor:h().number,minColorIndex:h().number,maxColorIndex:h().number,minMonochrome:h().number,maxMonochrome:h().number,minResolution:m,maxResolution:m,...g};var j={all:{...x,...p}};let f=e=>`not ${e}`,w=(e,A)=>{let s=d(e);return("number"==typeof A&&(A=`${A}px`),!0===A)?s:!1===A?f(s):`(${s}: ${A})`},b=e=>e.join(" and "),v=e=>{let A=[];return Object.keys(j.all).forEach(s=>{let t=e[s];null!=t&&A.push(w(s,t))}),b(A)},C=(0,t.createContext)(void 0),N=e=>e.query||v(e),E=e=>{if(e)return Object.keys(e).reduce((A,s)=>(A[d(s)]=e[s],A),{})},B=()=>{let e=(0,t.useRef)(!1);return(0,t.useEffect)(()=>{e.current=!0},[]),e.current},Q=e=>{let A=(0,t.useContext)(C),s=()=>E(e)||E(A),[a,r]=(0,t.useState)(s);return(0,t.useEffect)(()=>{let e=s();!function(e,A){if(e===A)return!0;if(!e||!A)return!1;let s=Object.keys(e),t=Object.keys(A),a=s.length;if(t.length!==a)return!1;for(let t=0;t<a;t++){let a=s[t];if(e[a]!==A[a]||!Object.prototype.hasOwnProperty.call(A,a))return!1}return!0}(a,e)&&r(e)},[e,A]),a},k=e=>{let A=()=>N(e),[s,a]=(0,t.useState)(A);return(0,t.useEffect)(()=>{let e=A();s!==e&&a(e)},[e]),s},I=(e,A)=>{let s=()=>r()(e,A||{},!!A),[a,l]=(0,t.useState)(s),i=B();return(0,t.useEffect)(()=>{if(i){let e=s();return l(e),()=>{e&&e.dispose()}}},[e,A]),a},D=e=>{let[A,s]=(0,t.useState)(e.matches);return(0,t.useEffect)(()=>{let A=e=>{s(e.matches)};return e.addListener(A),s(e.matches),()=>{e.removeListener(A)}},[e]),A},y=(e,A,s)=>{let a=Q(A),r=k(e);if(!r)throw Error("Invalid or missing MediaQuery!");let l=I(r,a),i=D(l),n=B();return(0,t.useEffect)(()=>{n&&s&&s(i)},[i]),(0,t.useEffect)(()=>()=>{l&&l.dispose()},[]),i}}}]);