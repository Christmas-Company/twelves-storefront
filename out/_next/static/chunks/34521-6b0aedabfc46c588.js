"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34521],{58907:(e,A)=>{A.Y=function(e,A){return e.split(",").map(function(e){var A=(e=e.trim()).match(s),r=A[1],i=A[2],l=A[3]||"",n={};return n.inverse=!!r&&"not"===r.toLowerCase(),n.type=i?i.toLowerCase():"all",l=l.match(/\([^\)]+\)/g)||[],n.expressions=l.map(function(e){var A=e.match(t),s=A[1].toLowerCase().match(a);return{modifier:s[1],feature:s[2],value:A[2]}}),n}).some(function(e){var s=e.inverse,t="all"===e.type||A.type===e.type;if(t&&s||!(t||s))return!1;var a=e.expressions.every(function(e){var s=e.feature,t=e.modifier,a=e.value,r=A[s];if(!r)return!1;switch(s){case"orientation":case"scan":return r.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=c(a),r=c(r);break;case"resolution":a=n(a),r=n(r);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=l(a),r=l(r);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,r=parseInt(r,10)||0}switch(t){case"min":return r>=a;case"max":return r<=a;default:return r===a}});return a&&!s||!a&&s})};var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function l(e){var A,s=Number(e);return s||(s=(A=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/A[2]),s}function n(e){var A=parseFloat(e);switch(String(e).match(i)[1]){case"dpcm":return A/2.54;case"dppx":return 96*A;default:return A}}function c(e){var A=parseFloat(e);switch(String(e).match(r)[1]){case"em":case"rem":return 16*A;case"cm":return 96*A/2.54;case"mm":return 96*A/2.54/10;case"in":return 96*A;case"pt":return 72*A;case"pc":return 72*A/12;default:return A}}},37918:(e,A,s)=>{var t=s(58907).Y,a="undefined"!=typeof window?window.matchMedia:null;function r(e,A,s){var r,i=this;function l(e){i.matches=e.matches,i.media=e.media}a&&!s&&(r=a.call(window,e)),r?(this.matches=r.matches,this.media=r.media,r.addListener(l)):(this.matches=t(e,A),this.media=e),this.addListener=function(e){r&&r.addListener(e)},this.removeListener=function(e){r&&r.removeListener(e)},this.dispose=function(){r&&r.removeListener(l)}}e.exports=function(e,A,s){return new r(e,A,s)}},98884:(e,A,s)=>{s.d(A,{A:()=>t});let t={src:"/twelves-storefront//_next/static/media/pr-42.e5b20a78.jpg",height:459,width:360,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAAvgLf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAhEAAQNS/9oACAEBAAE/AKDbUyQpdT//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8AlH//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIDQf/aAAgBAwEBPwB2zTw//9k=",blurWidth:6,blurHeight:8}},76929:(e,A,s)=>{s.d(A,{A:()=>t});let t={src:"/twelves-storefront//_next/static/media/pr-43.0c407fe2.jpg",height:459,width:360,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAAqQK//8QAGhAAAgIDAAAAAAAAAAAAAAAAAhIAAQMiQf/aAAgBAQABPwAbyuTDryf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAXEQEAAwAAAAAAAAAAAAAAAAABABFB/9oACAEDAQE/AFvCf//Z",blurWidth:6,blurHeight:8}},65234:(e,A,s)=>{s.d(A,{A:()=>t});let t={src:"/twelves-storefront//_next/static/media/pr-44.ed26a013.jpg",height:459,width:360,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAiwv/xAAdEAACAQQDAAAAAAAAAAAAAAACBAMAAQUTBkFh/9oACAEBAAE/AEFuQROOBjxc3RmUcuny/df/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:6,blurHeight:8}},22411:(e,A,s)=>{s.d(A,{A:()=>t});let t={src:"/twelves-storefront//_next/static/media/trust_img2.b9acef7e.png",height:46,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEVXRi5bFCeKt1CCIymleA/4ZmvKAAAABXRSTlMdDTkrIiDb780AAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BmYGFgZGRiAAAARAAMwK2RPgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},90727:(e,A,s)=>{s.d(A,{A:()=>u}),s(96540);var t=s(79752),a=s(31597),r=s(66505),i=s(93854),l=s(54509),n=s(82867),c=s(85382),o=s(20672),d=s(44868),h=s(74848);function x(e){let{title:A,eventKey:s,disabled:t,tabClassName:a,tabAttrs:r,id:n}=e.props;return null==A?null:(0,h.jsx)(l.A,{as:"li",role:"presentation",children:(0,h.jsx)(i.A,{as:"button",type:"button",eventKey:s,disabled:t,id:n,className:a,...r,children:A})})}let m=e=>{let{id:A,onSelect:s,transition:i,mountOnEnter:l=!1,unmountOnExit:m=!1,variant:u="tabs",children:g,activeKey:p=function(e){let A;return(0,o.jJ)(e,e=>{null==A&&(A=e.props.eventKey)}),A}(g),...j}=(0,t.Zw)(e,{activeKey:"onSelect"});return(0,h.jsxs)(a.A,{id:A,activeKey:p,onSelect:s,transition:(0,d.A)(i),mountOnEnter:l,unmountOnExit:m,children:[(0,h.jsx)(r.A,{id:A,...j,role:"tablist",as:"ul",variant:u,children:(0,o.Tj)(g,x)}),(0,h.jsx)(n.A,{children:(0,o.Tj)(g,e=>{let A={...e.props};return delete A.title,delete A.disabled,delete A.tabClassName,delete A.tabAttrs,(0,h.jsx)(c.A,{...A})})})]})};m.displayName="Tabs";let u=m},52503:(e,A,s)=>{s.r(A),s.d(A,{default:()=>D});var t=s(74848),a=s(96540),r=s(46874),i=s(70848),l=s(56871),n=s(11849),c=s(64183),o=s(74606),d=s(39773),h=s(58943),x=s(91106),m=s.n(x),u=s(29965),g=s.n(u),p=s(15310),j=s(93355),f=s(74898),w=s(93853),v=s(98884),C=s(76929),b=s(65234);let Q={src:"/twelves-storefront//_next/static/media/option-grey.f1879e7e.jpg",height:230,width:180,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAoYj/xAAdEAABAgcAAAAAAAAAAAAAAAADACEBBRESExQj/9oACAEBAAE/ABEmGwXKDi9kGai//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:6,blurHeight:8},E={src:"/twelves-storefront//_next/static/media/option-pink.b9cd485f.jpg",height:230,width:180,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACpAv8A/8QAGhABAAEFAAAAAAAAAAAAAAAAAgADERIiQf/aAAgBAQABPwAqrmrjXk//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAWEQEBAQAAAAAAAAAAAAAAAAABAEL/2gAIAQMBAT8AUcl//9k=",blurWidth:6,blurHeight:8},N={src:"/twelves-storefront//_next/static/media/option-black.d61e5b29.jpg",height:230,width:180,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACyD//EAB4QAAEEAQUAAAAAAAAAAAAAAAIBBAUiEgADBhMU/9oACAEBAAE/AGUhyVJ6S9LNybG/QK7dBwKuOv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:6,blurHeight:8};var B=s(22411);s(8971),s(79690),s(92598),s(94184);let D=e=>{let{handleShoppingShow:A}=e,s=(0,o.Ub)({maxWidth:1025}),[x,u]=(0,a.useState)(null),[D,I]=(0,a.useState)("Grey"),[k,y]=(0,a.useState)("M"),[U,M]=(0,a.useState)(1),F=e=>{y(e)},R=e=>{M(A=>Math.max(0,A+e))},P=e=>{I(e.target.value)},[G,L]=(0,a.useState)(!1),[K,S]=(0,a.useState)(!1),[_,Y]=(0,a.useState)(!1);return(0,t.jsx)(a.Fragment,{children:(0,t.jsxs)("section",{className:"py-4",children:[(0,t.jsx)(i.A,{children:(0,t.jsxs)(l.A,{className:"py-3 gx-xl-1",children:[(0,t.jsx)(n.A,{md:6,children:(0,t.jsxs)(l.A,{className:"g-2",children:[(0,t.jsx)(n.A,{xl:2,className:"mt-xl-3 mt-2 order-2 order-xl-1",children:(0,t.jsx)(r.RC,{className:"productSmall",pagination:{type:"progressbar"},direction:s?"horizontal":"vertical",slidesPerView:s?4:6,freeMode:!0,watchSlidesProgress:!0,spaceBetween:10,modules:[h.U1,h.dK],children:(0,t.jsxs)("div",{className:"swiper-wrapper",children:[(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{src:p.A,className:"object-fit-cover",alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{src:j.A,className:"object-fit-cover",alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{src:f.A,className:"object-fit-cover",alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{src:v.A,className:"object-fit-cover",alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{src:C.A,className:"object-fit-cover",alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{src:w.A,className:"object-fit-cover",alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{src:b.A,className:"object-fit-cover",alt:""})})]})})}),(0,t.jsx)(n.A,{xl:9,className:"mt-3 order-1 order-xl-2",children:(0,t.jsx)(r.RC,{navigation:!0,thumbs:{swiper:x},modules:[h.WO,h.Vx],className:"productMain",children:(0,t.jsxs)("div",{className:"swiper-wrapper",children:[(0,t.jsxs)("div",{className:"swiper-wrapper",children:[(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{className:"img-fluid w-100",src:p.A,alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{className:"img-fluid w-100",src:j.A,alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{className:"img-fluid w-100",src:f.A,alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{className:"img-fluid w-100",src:v.A,alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{className:"img-fluid w-100",src:C.A,alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{className:"img-fluid w-100",src:w.A,alt:""})}),(0,t.jsx)(r.qr,{children:(0,t.jsx)(g(),{className:"img-fluid w-100",src:b.A,alt:""})})]}),(0,t.jsx)("div",{className:"swiper-button-next"}),(0,t.jsx)("div",{className:"swiper-button-prev"})]})})})]})}),(0,t.jsxs)(n.A,{md:6,className:"mt-5 mt-md-0 ",children:[(0,t.jsx)("h4",{className:"mb-3",children:"Blush Beanie"}),(0,t.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[(0,t.jsx)("p",{className:"text-muted fs-18 mb-4",children:"$15.00"}),(0,t.jsxs)("div",{className:"kalles-rating-result",children:[(0,t.jsxs)("span",{className:"kalles-rating-result__pipe",children:[(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big active"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big de-active"})]}),"\xa0",(0,t.jsx)(m(),{href:"#!",children:"(12 reviews)"})]})]}),(0,t.jsx)("p",{className:"text-muted mb-3",children:"Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe."}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"custome-radio",children:[(0,t.jsxs)("h6",{className:"text-uppercase fw-bold mb-3",children:["Color: ",(0,t.jsx)("span",{children:D})]}),(0,t.jsxs)("div",{className:"image_radio_button_control",children:[(0,t.jsxs)("label",{className:"radio-button-label ".concat("Grey"===D?"active":""),children:[(0,t.jsx)("input",{type:"radio",name:"radio-control",value:"Grey",checked:"Grey"===D,onChange:P}),(0,t.jsx)(g(),{src:Q,alt:"Grey"})]}),(0,t.jsxs)("label",{className:"radio-button-label ".concat("Pink"===D?"active":""),children:[(0,t.jsx)("input",{type:"radio",name:"radio-control",value:"Pink",checked:"Pink"===D,onChange:P}),(0,t.jsx)(g(),{src:E,alt:"Pink"})]}),(0,t.jsxs)("label",{className:"radio-button-label ".concat("Black"===D?"active":""),children:[(0,t.jsx)("input",{type:"radio",name:"radio-control",value:"Black",checked:"Black"===D,onChange:P}),(0,t.jsx)(g(),{src:N,alt:"Black"})]})]})]})}),(0,t.jsxs)("div",{className:"pt-2 mb-4 pb-3",children:[(0,t.jsxs)("h6",{className:"text-uppercase fw-bold mt-3",children:["Size: ",(0,t.jsx)("span",{children:k})]}),(0,t.jsxs)("div",{className:"product-color-list size mt-2 gap-2 d-flex align-items-center",children:[(0,t.jsx)(m(),{href:"#!",className:"d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ".concat("S"===k?"active":""),onClick:()=>F("S"),children:"S"}),(0,t.jsx)(m(),{href:"#!",className:"d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ".concat("M"===k?"active":""),onClick:()=>F("M"),children:"M"}),(0,t.jsx)(m(),{href:"#!",className:"d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ".concat("L"===k?"active":""),onClick:()=>F("L"),children:"L"})]})]}),(0,t.jsxs)("div",{className:"d-flex flex-wrap align-items-center gap-2 mt-4",children:[(0,t.jsxs)("div",{className:"input-step border border-dark rounded-pill",children:[(0,t.jsx)("button",{className:"minus material-shadow text-dark fw-bold",onClick:()=>R(-1),children:"–"}),(0,t.jsx)("input",{type:"number",className:"product-quantity fw-bold fs-6",defaultValue:U,min:"0",max:"100"}),(0,t.jsx)("button",{className:"plus material-shadow text-dark fw-bold",onClick:()=>R(1),children:"+"})]}),(0,t.jsx)(c.A,{variant:"teal",className:"text-uppercase rounded-pill min-w-150",onClick:A,children:"Add to Cart"}),(0,t.jsx)("div",{className:"product_wishlist square-40 rounded-circle border border-dark bg-transparent text-center",style:{lineHeight:"40px"},children:(0,t.jsx)(m(),{href:"#",children:(0,t.jsx)("i",{className:"facl facl-heart-o"})})})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(g(),{src:B.A,alt:"",className:"img-fluid"})}),(0,t.jsxs)("div",{className:"mt-4 d-flex gap-3 text-nowrap flex-wrap row-gap-1",children:[(0,t.jsx)(m(),{href:"#sizeGuidModal",className:"text-black fw-semibold",onClick:()=>L(!0),children:"Size Guide"}),(0,t.jsx)(m(),{href:"#deliveyReturnModal",className:"text-black fw-semibold mx-2",onClick:()=>S(!0),children:"Delivery and Return"}),(0,t.jsx)(m(),{href:"#askQuesitionModal",className:"text-black fw-semibold",onClick:()=>Y(!0),children:"Ask a Question"})]}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("p",{className:"mb-2",children:[(0,t.jsx)("span",{children:"SKU :"}),(0,t.jsx)("span",{className:"text-muted",children:" P15-2"})]}),(0,t.jsxs)("p",{className:"mb-2",children:[(0,t.jsx)("span",{children:"Categories:"}),(0,t.jsxs)("span",{className:"text-muted",children:[(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:" All, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Best seller, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Bottom, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Dress, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"New Arrival, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Women"})]})]}),(0,t.jsxs)("p",{className:"mb-2",children:[(0,t.jsx)("span",{children:"Tags :"}),(0,t.jsxs)("span",{className:"text-muted",children:[(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:" Color Black, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Color Grey, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Color Pink, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Price $7-$50, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Size L, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Size M, "}),(0,t.jsx)(m(),{href:"#!",className:"text-muted",children:"Size S,"})]})]})]}),(0,t.jsx)("div",{className:"social-share mt-5",children:(0,t.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,t.jsx)(m(),{href:"https://www.facebook.com/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z",fillRule:"evenodd"})})})}),(0,t.jsx)(m(),{href:"https://twitter.com/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336",fillRule:"evenodd"})})})}),(0,t.jsx)(m(),{href:"https://www.google.com/gmail/about",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsxs)("g",{children:[(0,t.jsx)("g",{fillRule:"evenodd"}),(0,t.jsx)("path",{d:"M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z"}),(0,t.jsx)("path",{d:"M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z"})]})})}),(0,t.jsx)(m(),{href:"https://www.pinterest.com/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z",fillRule:"evenodd"})})})}),(0,t.jsx)(m(),{href:"https://www.messenger.com",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z",fillRule:"evenodd"})})})})]})})]})]})}),(0,t.jsx)(d.Z_,{show:G,handleClose:()=>L(!1)}),(0,t.jsx)(d.nv,{show2:K,handleClose2:()=>S(!1)}),(0,t.jsx)(d.vN,{show3:_,handleClose3:()=>Y(!1)})]})})}},74606:(e,A,s)=>{s.d(A,{Ub:()=>y});var t=s(96540),a=s(37918),r=s.n(a),i=/[A-Z]/g,l=/^ms-/,n={};function c(e){return"-"+e.toLowerCase()}let o=function(e){if(n.hasOwnProperty(e))return n[e];var A=e.replace(i,c);return n[e]=l.test(A)?"-"+A:A};var d=s(5556),h=s.n(d);let x=h().oneOfType([h().string,h().number]),m={all:h().bool,grid:h().bool,aural:h().bool,braille:h().bool,handheld:h().bool,print:h().bool,projection:h().bool,screen:h().bool,tty:h().bool,tv:h().bool,embossed:h().bool},{type:u,...g}={orientation:h().oneOf(["portrait","landscape"]),scan:h().oneOf(["progressive","interlace"]),aspectRatio:h().string,deviceAspectRatio:h().string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:h().bool,colorIndex:h().bool,monochrome:h().bool,resolution:x,type:Object.keys(m)},p={minAspectRatio:h().string,maxAspectRatio:h().string,minDeviceAspectRatio:h().string,maxDeviceAspectRatio:h().string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:h().number,maxColor:h().number,minColorIndex:h().number,maxColorIndex:h().number,minMonochrome:h().number,maxMonochrome:h().number,minResolution:x,maxResolution:x,...g};var j={all:{...m,...p}};let f=e=>`not ${e}`,w=(e,A)=>{let s=o(e);return("number"==typeof A&&(A=`${A}px`),!0===A)?s:!1===A?f(s):`(${s}: ${A})`},v=e=>e.join(" and "),C=e=>{let A=[];return Object.keys(j.all).forEach(s=>{let t=e[s];null!=t&&A.push(w(s,t))}),v(A)},b=(0,t.createContext)(void 0),Q=e=>e.query||C(e),E=e=>{if(e)return Object.keys(e).reduce((A,s)=>(A[o(s)]=e[s],A),{})},N=()=>{let e=(0,t.useRef)(!1);return(0,t.useEffect)(()=>{e.current=!0},[]),e.current},B=e=>{let A=(0,t.useContext)(b),s=()=>E(e)||E(A),[a,r]=(0,t.useState)(s);return(0,t.useEffect)(()=>{let e=s();!function(e,A){if(e===A)return!0;if(!e||!A)return!1;let s=Object.keys(e),t=Object.keys(A),a=s.length;if(t.length!==a)return!1;for(let t=0;t<a;t++){let a=s[t];if(e[a]!==A[a]||!Object.prototype.hasOwnProperty.call(A,a))return!1}return!0}(a,e)&&r(e)},[e,A]),a},D=e=>{let A=()=>Q(e),[s,a]=(0,t.useState)(A);return(0,t.useEffect)(()=>{let e=A();s!==e&&a(e)},[e]),s},I=(e,A)=>{let s=()=>r()(e,A||{},!!A),[a,i]=(0,t.useState)(s),l=N();return(0,t.useEffect)(()=>{if(l){let e=s();return i(e),()=>{e&&e.dispose()}}},[e,A]),a},k=e=>{let[A,s]=(0,t.useState)(e.matches);return(0,t.useEffect)(()=>{let A=e=>{s(e.matches)};return e.addListener(A),s(e.matches),()=>{e.removeListener(A)}},[e]),A},y=(e,A,s)=>{let a=B(A),r=D(e);if(!r)throw Error("Invalid or missing MediaQuery!");let i=I(r,a),l=k(i),n=N();return(0,t.useEffect)(()=>{n&&s&&s(l)},[l]),(0,t.useEffect)(()=>()=>{i&&i.dispose()},[]),l}}}]);