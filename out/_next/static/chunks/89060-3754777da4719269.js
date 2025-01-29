"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89060],{58907:(e,s)=>{s.Y=function(e,s){return e.split(",").map(function(e){var s=(e=e.trim()).match(A),r=s[1],l=s[2],i=s[3]||"",n={};return n.inverse=!!r&&"not"===r.toLowerCase(),n.type=l?l.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],n.expressions=i.map(function(e){var s=e.match(t),A=s[1].toLowerCase().match(a);return{modifier:A[1],feature:A[2],value:s[2]}}),n}).some(function(e){var A=e.inverse,t="all"===e.type||s.type===e.type;if(t&&A||!(t||A))return!1;var a=e.expressions.every(function(e){var A=e.feature,t=e.modifier,a=e.value,r=s[A];if(!r)return!1;switch(A){case"orientation":case"scan":return r.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=c(a),r=c(r);break;case"resolution":a=n(a),r=n(r);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=i(a),r=i(r);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,r=parseInt(r,10)||0}switch(t){case"min":return r>=a;case"max":return r<=a;default:return r===a}});return a&&!A||!a&&A})};var A=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,l=/(dpi|dpcm|dppx)?$/;function i(e){var s,A=Number(e);return A||(A=(s=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/s[2]),A}function n(e){var s=parseFloat(e);switch(String(e).match(l)[1]){case"dpcm":return s/2.54;case"dppx":return 96*s;default:return s}}function c(e){var s=parseFloat(e);switch(String(e).match(r)[1]){case"em":case"rem":return 16*s;case"cm":return 96*s/2.54;case"mm":return 96*s/2.54/10;case"in":return 96*s;case"pt":return 72*s;case"pc":return 72*s/12;default:return s}}},37918:(e,s,A)=>{var t=A(58907).Y,a="undefined"!=typeof window?window.matchMedia:null;function r(e,s,A){var r,l=this;function i(e){l.matches=e.matches,l.media=e.media}a&&!A&&(r=a.call(window,e)),r?(this.matches=r.matches,this.media=r.media,r.addListener(i)):(this.matches=t(e,s),this.media=e),this.addListener=function(e){r&&r.addListener(e)},this.removeListener=function(e){r&&r.removeListener(e)},this.dispose=function(){r&&r.removeListener(i)}}e.exports=function(e,s,A){return new r(e,s,A)}},22411:(e,s,A)=>{A.d(s,{A:()=>t});let t={src:"/twelves-storefront//_next/static/media/trust_img2.b9acef7e.png",height:46,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEVXRi5bFCeKt1CCIymleA/4ZmvKAAAABXRSTlMdDTkrIiDb780AAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BmYGFgZGRiAAAARAAMwK2RPgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},90727:(e,s,A)=>{A.d(s,{A:()=>u}),A(96540);var t=A(79752),a=A(31597),r=A(66505),l=A(93854),i=A(54509),n=A(82867),c=A(85382),d=A(20672),o=A(44868),m=A(74848);function h(e){let{title:s,eventKey:A,disabled:t,tabClassName:a,tabAttrs:r,id:n}=e.props;return null==s?null:(0,m.jsx)(i.A,{as:"li",role:"presentation",children:(0,m.jsx)(l.A,{as:"button",type:"button",eventKey:A,disabled:t,id:n,className:a,...r,children:s})})}let x=e=>{let{id:s,onSelect:A,transition:l,mountOnEnter:i=!1,unmountOnExit:x=!1,variant:u="tabs",children:g,activeKey:p=function(e){let s;return(0,d.jJ)(e,e=>{null==s&&(s=e.props.eventKey)}),s}(g),...j}=(0,t.Zw)(e,{activeKey:"onSelect"});return(0,m.jsxs)(a.A,{id:s,activeKey:p,onSelect:A,transition:(0,o.A)(l),mountOnEnter:i,unmountOnExit:x,children:[(0,m.jsx)(r.A,{id:s,...j,role:"tablist",as:"ul",variant:u,children:(0,d.Tj)(g,h)}),(0,m.jsx)(n.A,{children:(0,d.Tj)(g,e=>{let s={...e.props};return delete s.title,delete s.disabled,delete s.tabClassName,delete s.tabAttrs,(0,m.jsx)(c.A,{...s})})})]})};x.displayName="Tabs";let u=x},35406:(e,s,A)=>{A.r(s),A.d(s,{default:()=>B});var t=A(74848),a=A(96540),r=A(70848),l=A(56871),i=A(11849),n=A(46942),c=A.n(n),d=A(14623);let o=a.forwardRef((e,s)=>{let{bsPrefix:A,className:a,striped:r,bordered:l,borderless:i,hover:n,size:o,variant:m,responsive:h,...x}=e,u=(0,d.oU)(A,"table"),g=c()(a,u,m&&"".concat(u,"-").concat(m),o&&"".concat(u,"-").concat(o),r&&"".concat(u,"-").concat("string"==typeof r?"striped-".concat(r):"striped"),l&&"".concat(u,"-bordered"),i&&"".concat(u,"-borderless"),n&&"".concat(u,"-hover")),p=(0,t.jsx)("table",{...x,className:g,ref:s});if(h){let e="".concat(u,"-responsive");return"string"==typeof h&&(e="".concat(e,"-").concat(h)),(0,t.jsx)("div",{className:e,children:p})}return p});var m=A(64183),h=A(46874),x=A(39773),u=A(58943),g=A(91106),p=A.n(g),j=A(74606),f=A(29965),w=A.n(f),b=A(86317),v=A(57058);let C={src:"/twelves-storefront//_next/static/media/thumb-03.829a0e40.jpg",height:919,width:720,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAChAk//xAAbEAACAQUAAAAAAAAAAAAAAAABAwQAAhFSof/aAAgBAQABPwCI4Fsu3Vg6M1//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwCP/9k=",blurWidth:6,blurHeight:8};var N=A(32564);let E={src:"/twelves-storefront//_next/static/media/grouped-01.dd00e982.jpg",height:128,width:100,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAAqgaf/8QAGxAAAwACAwAAAAAAAAAAAAAAAQMEAiIAETH/2gAIAQEAAT8AmoUm6oJ6LRmzFhA21I95/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECERL/2gAIAQIBAT8Ak8uj/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAwEBPwCZVLWf/9k=",blurWidth:6,blurHeight:8},Q={src:"/twelves-storefront//_next/static/media/grouped-02.352b1229.jpg",height:128,width:100,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAACmAf/EABwQAAMAAQUAAAAAAAAAAAAAAAECAwQAESEyQv/aAAgBAQABPwCcoJkZDr3qVLcnyNtf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:6,blurHeight:8},k={src:"/twelves-storefront//_next/static/media/grouped-03.c9cf8ecd.jpg",height:128,width:100,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACng//EAB0QAAEEAgMAAAAAAAAAAAAAAAECAwQREhMAFHL/2gAIAQEAAT8AMh5MkM9Rwo1le5JGF3WHrn//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:6,blurHeight:8},y={src:"/twelves-storefront//_next/static/media/grouped-04.9edd0c25.jpg",height:128,width:100,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACng//EABkQAAIDAQAAAAAAAAAAAAAAAAECAARDcf/aAAgBAQABPwBbSnNgOif/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:6,blurHeight:8};var I=A(22411);A(79690),A(92598),A(94184),A(8971);let B=e=>{let{handleShoppingShow:s}=e,A=(0,j.Ub)({maxWidth:1025}),[n,c]=(0,a.useState)(null),[d,g]=(0,a.useState)(1),f=e=>{g(s=>Math.max(0,s+e))},[B,M]=(0,a.useState)(1),D=e=>{M(s=>Math.max(0,s+e))},[U,F]=(0,a.useState)(1),R=e=>{F(s=>Math.max(0,s+e))},[P,S]=(0,a.useState)(1),_=e=>{S(s=>Math.max(0,s+e))},[G,L]=(0,a.useState)(!1),[K,Y]=(0,a.useState)(!1),[H,z]=(0,a.useState)(!1);return(0,t.jsx)(a.Fragment,{children:(0,t.jsxs)(r.A,{className:"py-4",children:[(0,t.jsxs)(l.A,{className:"py-3 gx-xl-1",children:[(0,t.jsx)(i.A,{md:6,children:(0,t.jsxs)(l.A,{className:"g-2",children:[(0,t.jsx)(i.A,{xl:2,className:"mt-xl-3 mt-2 order-2 order-xl-1",children:(0,t.jsx)(h.RC,{pagination:{type:"progressbar"},direction:A?"horizontal":"vertical",slidesPerView:A?4:6,freeMode:!0,watchSlidesProgress:!0,spaceBetween:10,className:"productSmall",modules:[u.U1,u.dK],children:(0,t.jsxs)("div",{className:"swiper-wrapper",children:[(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:b.A,alt:"",className:"object-fit-cover"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:v.A,alt:"",className:"object-fit-cover"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:C,alt:"",className:"object-fit-cover"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:N.A,alt:"",className:"object-fit-cover"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:C,alt:"",className:"object-fit-cover"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:v.A,alt:"",className:"object-fit-cover"})})]})})}),(0,t.jsx)(i.A,{xl:9,className:"mt-3 order-1 order-xl-2",children:(0,t.jsx)(h.RC,{navigation:!0,thumbs:{swiper:n},className:"productMain",modules:[u.WO,u.Vx],children:(0,t.jsxs)("div",{className:"swiper-wrapper",children:[(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:b.A,alt:"",className:"img-fluid w-100"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:v.A,alt:"",className:"img-fluid w-100"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:C,alt:"",className:"img-fluid w-100"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:N.A,alt:"",className:"img-fluid w-100"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:C,alt:"",className:"img-fluid w-100"})}),(0,t.jsx)(h.qr,{children:(0,t.jsx)(w(),{src:v.A,alt:"",className:"img-fluid w-100"})})]})})})]})}),(0,t.jsxs)(i.A,{md:6,className:"mt-5 mt-md-0",children:[(0,t.jsx)("h4",{className:"mb-3",children:"Women clothing combo"}),(0,t.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[(0,t.jsx)("p",{className:"text-muted fs-18 mb-4",children:"$3.50-$30.00"}),(0,t.jsx)("div",{id:"#tab_reviews_product",children:(0,t.jsxs)("div",{className:"kalles-rating-result",children:[(0,t.jsxs)("span",{className:"kalles-rating-result__pipe",children:[(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big active"}),"\xa0",(0,t.jsx)("span",{className:"kalles-rating-result__start kalles-rating-result__start--big de-active"})]}),"\xa0",(0,t.jsx)(p(),{href:"#",children:"(12 reviews)"})]})})]}),(0,t.jsx)("p",{className:"text-muted lh-lg pb-1",children:"Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe."}),(0,t.jsx)(o,{className:"table table-bordered mx-auto",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:(0,t.jsx)(w(),{src:E,className:"img-fluid ms-lg-3",alt:""})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"p-lg-3 text-center",children:[(0,t.jsx)("h6",{className:"fw-medium",children:"Striped Long Sleeve Top"}),(0,t.jsxs)("select",{className:"form-select form-select-sm rounded-0 py-2 my-3",id:"address_province_ship",children:[(0,t.jsx)("option",{value:"Alabama",children:"Black / S"}),(0,t.jsx)("option",{value:"Alaska",children:"Black / M"}),(0,t.jsx)("option",{value:"American Samoa",children:"Black / L"})]}),(0,t.jsxs)("p",{className:"text-muted mb-0",children:["$45.00 ",(0,t.jsx)("del",{className:"text-danger",children:"$20.00"})]})]})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"input-step border border-muted mt-5 ms-lg-4 ",children:[(0,t.jsx)(m.A,{type:"button",className:"minus material-shadow text-dark fw-bold",onClick:()=>f(-1),children:"–"}),(0,t.jsx)("input",{type:"number",className:"product-quantity fw-bold fs-6",value:d,min:"0",max:"100",onChange:e=>{g(Math.max(0,Math.min(100,Number(e.target.value))))}}),(0,t.jsx)(m.A,{type:"button",className:"plus material-shadow text-dark fw-bold",onClick:()=>f(1),children:"+"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:(0,t.jsx)(w(),{src:Q,className:"img-fluid ms-lg-3",alt:""})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"mt-lg-5 text-center",children:[(0,t.jsx)("h6",{className:"fw-medium",children:"Ritson Original Mom Jeans"}),(0,t.jsx)("p",{className:"text-muted mb-0",children:"$22.00 "})]})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"input-step border border-muted mt-5 ms-lg-4 ",children:[(0,t.jsx)(m.A,{type:"button",className:"minus material-shadow text-dark fw-bold",onClick:()=>D(-1),children:"–"}),(0,t.jsx)("input",{type:"number",className:"product-quantity fw-bold fs-6",value:B,min:"0",max:"100",onChange:e=>{M(Math.max(0,Math.min(100,Number(e.target.value))))}}),(0,t.jsx)(m.A,{type:"button",className:"plus material-shadow text-dark fw-bold",onClick:()=>D(1),children:"+"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:(0,t.jsx)(w(),{src:k,className:"img-fluid ms-lg-3",alt:""})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"mt-lg-5 text-center",children:[(0,t.jsx)("h6",{className:"fw-medium",children:"Organza Hair Scrunchie"}),(0,t.jsxs)("p",{className:"text-muted mb-0",children:["$45.00 ",(0,t.jsx)("del",{className:"text-danger",children:"$20.00"})]})]})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"input-step border border-muted mt-5 ms-lg-4 ",children:[(0,t.jsx)(m.A,{type:"button",className:"minus material-shadow text-dark fw-bold",onClick:()=>R(-1),children:"–"}),(0,t.jsx)("input",{type:"number",className:"product-quantity fw-bold fs-6",value:U,min:"0",max:"100",onChange:e=>{F(Math.max(0,Math.min(100,Number(e.target.value))))}}),(0,t.jsx)(m.A,{type:"button",className:"plus material-shadow text-dark fw-bold",onClick:()=>R(1),children:"+"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:(0,t.jsx)(w(),{src:y,className:"img-fluid ms-lg-3",alt:""})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"p-lg-3 text-center",children:[(0,t.jsx)("h6",{className:"fw-medium",children:"Retro Lace Up Sneakers"}),(0,t.jsxs)("select",{className:"form-select form-select-sm rounded-0 py-2 my-3",id:"address_province_ship",children:[(0,t.jsx)("option",{value:"Alabama",children:"UK 2"}),(0,t.jsx)("option",{value:"Alaska",children:"UK 3"}),(0,t.jsx)("option",{value:"American Samoa",children:"UK 1"})]}),(0,t.jsxs)("p",{className:"text-muted mb-0",children:["$45.00 ",(0,t.jsx)("del",{className:"text-danger",children:"$30.00"})]})]})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"input-step border border-muted mt-5 ms-lg-4 ",children:[(0,t.jsx)(m.A,{type:"button",className:"minus material-shadow text-dark fw-bold",onClick:()=>_(-1),children:"–"}),(0,t.jsx)("input",{type:"number",className:"product-quantity fw-bold fs-6",value:P,min:"0",max:"100",onChange:e=>{S(Math.max(0,Math.min(100,Number(e.target.value))))}}),(0,t.jsx)(m.A,{type:"button",className:"plus material-shadow text-dark fw-bold",onClick:()=>_(1),children:"+"})]})})]})]})}),(0,t.jsxs)("h4",{className:"my-3 py-1 text-black fw-medium",children:["Subtotal :",(0,t.jsx)("span",{className:"text-muted",children:(0,t.jsx)("del",{children:"$117.00"})}),"\xa0",(0,t.jsx)("span",{className:"text-danger",children:"$75.40"})]}),(0,t.jsxs)("div",{className:"d-flex flex-wrap align-items-center gap-2 mt-3",children:[(0,t.jsx)(m.A,{variant:"teal",className:"text-uppercase rounded-pill min-w-150",onClick:s,children:"Add to Cart"}),(0,t.jsx)("div",{className:"product_wishlist square-40 rounded-circle border border-dark bg-transparent text-center",style:{lineHeight:"40px"},children:(0,t.jsx)(p(),{href:"#",children:(0,t.jsx)("i",{className:"facl facl-heart-o"})})})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(w(),{src:I.A,alt:"",className:"img-fluid"})}),(0,t.jsxs)("div",{className:"mt-4 d-flex gap-3 text-nowrap flex-wrap row-gap-1",children:[(0,t.jsx)(p(),{href:"#sizeGuidModal","data-bs-toggle":"modal",className:"text-black fw-semibold",onClick:()=>L(!0),children:"Size Guide"}),(0,t.jsx)(p(),{href:"#deliveyReturnModal","data-bs-toggle":"modal",className:"text-black fw-semibold mx-2",onClick:()=>Y(!0),children:"Delivery and Return"}),(0,t.jsx)(p(),{href:"#askQuesitionModal","data-bs-toggle":"modal",className:"text-black fw-semibold",onClick:()=>z(!0),children:"Ask a Question"})]}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("p",{className:"mb-2",children:[(0,t.jsx)("span",{children:"SKU :"}),(0,t.jsx)("span",{className:"text-muted",children:" P15-2"})]}),(0,t.jsxs)("p",{className:"mb-2",children:[(0,t.jsx)("span",{children:"Categories:"}),(0,t.jsxs)("span",{className:"text-muted",children:[(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:" All, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Best seller, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Bottom, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Dress, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"New Arrival, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Women"})]})]}),(0,t.jsxs)("p",{className:"mb-2",children:[(0,t.jsx)("span",{children:"Tags :"}),(0,t.jsxs)("span",{className:"text-muted",children:[(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:" Color Black, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Color Grey, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Color Pink, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Price $7-$50, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Size L, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Size M, "}),(0,t.jsx)(p(),{href:"#!",className:"text-muted",children:"Size S,"})]})]})]}),(0,t.jsx)("div",{className:"social-share mt-5",children:(0,t.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,t.jsx)(p(),{href:"https://www.facebook.com/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z",fillRule:"evenodd"})})})}),(0,t.jsx)(p(),{href:"https://twitter.com/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336",fillRule:"evenodd"})})})}),(0,t.jsx)(p(),{href:"https://www.google.com/gmail/about",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsxs)("g",{children:[(0,t.jsx)("g",{fillRule:"evenodd"}),(0,t.jsx)("path",{d:"M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z"}),(0,t.jsx)("path",{d:"M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z"})]})})}),(0,t.jsx)(p(),{href:"https://www.pinterest.com/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z",fillRule:"evenodd"})})})}),(0,t.jsx)(p(),{href:"https://www.messenger.com",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z",fillRule:"evenodd"})})})})]})})]})]}),(0,t.jsx)(x.Z_,{show:G,handleClose:()=>L(!1)}),(0,t.jsx)(x.nv,{show2:K,handleClose2:()=>Y(!1)}),(0,t.jsx)(x.vN,{show3:H,handleClose3:()=>z(!1)})]})})}},74606:(e,s,A)=>{A.d(s,{Ub:()=>M});var t=A(96540),a=A(37918),r=A.n(a),l=/[A-Z]/g,i=/^ms-/,n={};function c(e){return"-"+e.toLowerCase()}let d=function(e){if(n.hasOwnProperty(e))return n[e];var s=e.replace(l,c);return n[e]=i.test(s)?"-"+s:s};var o=A(5556),m=A.n(o);let h=m().oneOfType([m().string,m().number]),x={all:m().bool,grid:m().bool,aural:m().bool,braille:m().bool,handheld:m().bool,print:m().bool,projection:m().bool,screen:m().bool,tty:m().bool,tv:m().bool,embossed:m().bool},{type:u,...g}={orientation:m().oneOf(["portrait","landscape"]),scan:m().oneOf(["progressive","interlace"]),aspectRatio:m().string,deviceAspectRatio:m().string,height:h,deviceHeight:h,width:h,deviceWidth:h,color:m().bool,colorIndex:m().bool,monochrome:m().bool,resolution:h,type:Object.keys(x)},p={minAspectRatio:m().string,maxAspectRatio:m().string,minDeviceAspectRatio:m().string,maxDeviceAspectRatio:m().string,minHeight:h,maxHeight:h,minDeviceHeight:h,maxDeviceHeight:h,minWidth:h,maxWidth:h,minDeviceWidth:h,maxDeviceWidth:h,minColor:m().number,maxColor:m().number,minColorIndex:m().number,maxColorIndex:m().number,minMonochrome:m().number,maxMonochrome:m().number,minResolution:h,maxResolution:h,...g};var j={all:{...x,...p}};let f=e=>`not ${e}`,w=(e,s)=>{let A=d(e);return("number"==typeof s&&(s=`${s}px`),!0===s)?A:!1===s?f(A):`(${A}: ${s})`},b=e=>e.join(" and "),v=e=>{let s=[];return Object.keys(j.all).forEach(A=>{let t=e[A];null!=t&&s.push(w(A,t))}),b(s)},C=(0,t.createContext)(void 0),N=e=>e.query||v(e),E=e=>{if(e)return Object.keys(e).reduce((s,A)=>(s[d(A)]=e[A],s),{})},Q=()=>{let e=(0,t.useRef)(!1);return(0,t.useEffect)(()=>{e.current=!0},[]),e.current},k=e=>{let s=(0,t.useContext)(C),A=()=>E(e)||E(s),[a,r]=(0,t.useState)(A);return(0,t.useEffect)(()=>{let e=A();!function(e,s){if(e===s)return!0;if(!e||!s)return!1;let A=Object.keys(e),t=Object.keys(s),a=A.length;if(t.length!==a)return!1;for(let t=0;t<a;t++){let a=A[t];if(e[a]!==s[a]||!Object.prototype.hasOwnProperty.call(s,a))return!1}return!0}(a,e)&&r(e)},[e,s]),a},y=e=>{let s=()=>N(e),[A,a]=(0,t.useState)(s);return(0,t.useEffect)(()=>{let e=s();A!==e&&a(e)},[e]),A},I=(e,s)=>{let A=()=>r()(e,s||{},!!s),[a,l]=(0,t.useState)(A),i=Q();return(0,t.useEffect)(()=>{if(i){let e=A();return l(e),()=>{e&&e.dispose()}}},[e,s]),a},B=e=>{let[s,A]=(0,t.useState)(e.matches);return(0,t.useEffect)(()=>{let s=e=>{A(e.matches)};return e.addListener(s),A(e.matches),()=>{e.removeListener(s)}},[e]),s},M=(e,s,A)=>{let a=k(s),r=y(e);if(!r)throw Error("Invalid or missing MediaQuery!");let l=I(r,a),i=B(l),n=Q();return(0,t.useEffect)(()=>{n&&A&&A(i)},[i]),(0,t.useEffect)(()=>()=>{l&&l.dispose()},[]),i}}}]);