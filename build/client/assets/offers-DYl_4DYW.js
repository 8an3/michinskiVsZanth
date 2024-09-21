import{R as y,r as g,j as e}from"./jsx-runtime-BMrMXMSG.js";import{T as _,a as b,b as d,c as m}from"./tabs-CY8FnnTe.js";import{A as I,a as h,b as x,c as p}from"./accordion-D3Uk-4hS.js";import{c as C}from"./utils-C-5SdYIA.js";import{B as u}from"./button-nbngmg0U.js";import{C as O,a as k,b as P,d as A,c as S,e as T}from"./card-CxCnwVNc.js";import"./index-JD9HbNZ8.js";import"./index-jJ7PKnZH.js";import"./index-BlA7Mg33.js";var W={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z=y.createContext&&y.createContext(W),L=["attr","size","title"];function B(t,a){if(t==null)return{};var r=J(t,a),i,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)i=c[l],!(a.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function J(t,a){if(t==null)return{};var r={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(a.indexOf(i)>=0)continue;r[i]=t[i]}return r}function N(){return N=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},N.apply(this,arguments)}function E(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),r.push.apply(r,i)}return r}function w(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?E(Object(r),!0).forEach(function(i){H(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function H(t,a,r){return a=Y(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function Y(t){var a=F(t,"string");return typeof a=="symbol"?a:a+""}function F(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,a||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function M(t){return t&&t.map((a,r)=>y.createElement(a.tag,w({key:r},a.attr),M(a.child)))}function $(t){return a=>y.createElement(K,N({attr:w({},t.attr)},a),M(t.child))}function K(t){var a=r=>{var{attr:i,size:l,title:c}=t,v=B(t,L),o=l||r.size||"1em",s;return r.className&&(s=r.className),t.className&&(s=(s?s+" ":"")+t.className),y.createElement("svg",N({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,v,{className:s,style:w(w({color:t.color||r.color},r.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&y.createElement("title",null,c),t.children)};return z!==void 0?y.createElement(z.Consumer,null,r=>a(r)):a(W)}function j(t){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(t)}/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),R=(...t)=>t.filter((a,r,i)=>!!a&&i.indexOf(a)===r).join(" ");/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=g.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:l="",children:c,iconNode:v,...o},s)=>g.createElement("svg",{ref:s,...q,width:a,height:a,stroke:t,strokeWidth:i?Number(r)*24/Number(a):r,className:R("lucide",l),...o},[...v.map(([n,D])=>g.createElement(n,D)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(t,a)=>{const r=g.forwardRef(({className:i,...l},c)=>g.createElement(G,{ref:c,iconNode:a,className:R(`lucide-${V(t)}`,i),...l}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=Z("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);async function ne(){return{ok:!0}}async function le({request:t}){return{ok:!0}}function ce(){const t=[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}],a=[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}],r=[{date:"Apr 16 2024 10:05 pm"},{date:"Apr 23 2024 12:41 am"},{date:"Apr 25, 7:32 PM"},{date:"Apr 25, 9:13 PM"},{date:"Apr 29 2024 9:01 am"},{date:"May 26, 12:32 AM"},{date:"Jun 26, 3:17 PM"},{date:"Jun 29 2024 1:00 pm"},{date:"Jul 2, 7:48 PM"},{date:"Jul 31 2024 10:54 am"},{date:"Aug 10, 11:17 PM"},{date:"Might be missing an informal offer or two to make changes to our at the time current offers"}],i=s=>{navigator.clipboard.writeText(s).then(()=>{c(s),setTimeout(()=>c(""),3e3)}).catch(n=>{})},[l,c]=g.useState(""),v=y.useRef(0);g.useEffect(()=>()=>clearTimeout(v.current),[]);const o=[{data:"Natashia has possession of the white Chrysler 300, according to the courts. She will sign off that all payments / amounts owed, if any, at the time of the separation will be her responsibilty. The vehicle will be left at the house with any items that belong with the care. In the event, that Natashia finally proves it is in fact, not her I will take the care once the separation has concluded."},{data:"Replacement costs of items already taken - $5500"},{data:""},{data:""},{data:""},{data:""}];return e.jsxs(_,{defaultValue:"Skyler",className:"w-[95%]  mx-auto my-auto",children:[e.jsxs(b,{className:"rounded-[6px] ",children:[e.jsx(d,{className:"rounded-[6px] ",value:"Skyler",children:"Skyler"}),e.jsx(d,{className:"rounded-[6px] ",value:"Natashia",children:"Natashia"})]}),e.jsxs(m,{value:"Skyler",children:[e.jsxs(b,{className:"rounded-[6px] ",children:[e.jsx(d,{className:"rounded-[6px] ",value:"Current Skyler",children:"Current"}),e.jsx(d,{className:"rounded-[6px] ",value:"July 1, 2024",children:"July 1, 2024"}),e.jsx(d,{className:"rounded-[6px] ",value:"Other Dates",children:"Other Dates"})]}),e.jsx(m,{value:"Current Skyler",children:e.jsxs(O,{className:C("w-[80%]"),children:[e.jsxs(k,{children:[e.jsx(P,{children:"Current Offer"}),e.jsx(A,{children:"Hover over section to make copy button to appear at top right of the first paragraph."})]}),e.jsx(S,{className:"grid gap-4",children:e.jsx("div",{children:e.jsxs(I,{type:"single",collapsible:!0,className:"w-full",children:[e.jsxs(h,{value:"item-1",children:[e.jsx(x,{children:"Property"}),e.jsx(p,{children:o.map((s,n)=>e.jsx("li",{className:" group flex items-center justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"m-2 text-muted-foreground",children:s.data}),e.jsxs(u,{size:"icon",variant:"outline",onClick:()=>i(s.data),className:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2",children:[e.jsx(f,{className:"h-3 w-3"}),e.jsx("span",{className:"sr-only",children:"Copy"})]}),l===s.data&&e.jsx(j,{strokeWidth:1.5,className:" ml-2 text-lg hover:text-primary"})]})},n))})]}),e.jsxs(h,{value:"item-2",children:[e.jsx(x,{children:"Family Home"}),e.jsx(p,{children:o.map((s,n)=>e.jsx("li",{className:" group flex items-center justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"m-2 text-muted-foreground",children:s.data}),e.jsxs(u,{size:"icon",variant:"outline",onClick:()=>i(s.data),className:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2",children:[e.jsx(f,{className:"h-3 w-3"}),e.jsx("span",{className:"sr-only",children:"Copy"})]}),l===s.data&&e.jsx(j,{strokeWidth:1.5,className:" ml-2 text-lg hover:text-primary"})]})},n))})]}),e.jsxs(h,{value:"item-3",children:[e.jsx(x,{children:"Restraining Order"}),e.jsx(p,{children:o.map((s,n)=>e.jsx("li",{className:" group flex items-center justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"m-2 text-muted-foreground",children:s.data}),e.jsxs(u,{size:"icon",variant:"outline",onClick:()=>i(s.data),className:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2",children:[e.jsx(f,{className:"h-3 w-3"}),e.jsx("span",{className:"sr-only",children:"Copy"})]}),l===s.data&&e.jsx(j,{strokeWidth:1.5,className:" ml-2 text-lg hover:text-primary"})]})},n))})]}),e.jsxs(h,{value:"item-4",children:[e.jsx(x,{children:"Restitution of lost wages"}),e.jsx(p,{children:o.map((s,n)=>e.jsx("li",{className:" group flex items-center justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"m-2 text-muted-foreground",children:s.data}),e.jsxs(u,{size:"icon",variant:"outline",onClick:()=>i(s.data),className:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2",children:[e.jsx(f,{className:"h-3 w-3"}),e.jsx("span",{className:"sr-only",children:"Copy"})]}),l===s.data&&e.jsx(j,{strokeWidth:1.5,className:" ml-2 text-lg hover:text-primary"})]})},n))})]}),e.jsxs(h,{value:"item-4",children:[e.jsx(x,{children:"Rent"}),e.jsx(p,{children:o.map((s,n)=>e.jsx("li",{className:" group flex items-center justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"m-2 text-muted-foreground",children:s.data}),e.jsxs(u,{size:"icon",variant:"outline",onClick:()=>i(s.data),className:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2",children:[e.jsx(f,{className:"h-3 w-3"}),e.jsx("span",{className:"sr-only",children:"Copy"})]}),l===s.data&&e.jsx(j,{strokeWidth:1.5,className:" ml-2 text-lg hover:text-primary"})]})},n))})]}),e.jsxs(h,{value:"item-4",children:[e.jsx(x,{children:"Court costs"}),e.jsx(p,{children:o.map((s,n)=>e.jsx("li",{className:" group flex items-center justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"m-2 text-muted-foreground",children:s.data}),e.jsxs(u,{size:"icon",variant:"outline",onClick:()=>i(s.data),className:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2",children:[e.jsx(f,{className:"h-3 w-3"}),e.jsx("span",{className:"sr-only",children:"Copy"})]}),l===s.data&&e.jsx(j,{strokeWidth:1.5,className:" ml-2 text-lg hover:text-primary"})]})},n))})]}),e.jsxs(h,{value:"item-4",children:[e.jsx(x,{children:"Debt"}),e.jsx(p,{children:o.map((s,n)=>e.jsx("li",{className:" group flex items-center justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"m-2 text-muted-foreground",children:s.data}),e.jsxs(u,{size:"icon",variant:"outline",onClick:()=>i(s.data),className:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2",children:[e.jsx(f,{className:"h-3 w-3"}),e.jsx("span",{className:"sr-only",children:"Copy"})]}),l===s.data&&e.jsx(j,{strokeWidth:1.5,className:" ml-2 text-lg hover:text-primary"})]})},n))})]}),e.jsxs(h,{value:"item-4",children:[e.jsx(x,{children:"Misc."}),e.jsx(p,{children:o.map((s,n)=>e.jsx("li",{className:" group flex items-center justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"m-2 text-muted-foreground",children:s.data}),e.jsxs(u,{size:"icon",variant:"outline",onClick:()=>i(s.data),className:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2",children:[e.jsx(f,{className:"h-3 w-3"}),e.jsx("span",{className:"sr-only",children:"Copy"})]}),l===s.data&&e.jsx(j,{strokeWidth:1.5,className:" ml-2 text-lg hover:text-primary"})]})},n))})]}),e.jsxs(h,{value:"item-4",children:[e.jsx(x,{children:"Breach of Contract"}),e.jsx(p,{children:o.map((s,n)=>e.jsx("li",{className:" group flex items-center justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"m-2 text-muted-foreground",children:s.data}),e.jsxs(u,{size:"icon",variant:"outline",onClick:()=>i(s.data),className:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2",children:[e.jsx(f,{className:"h-3 w-3"}),e.jsx("span",{className:"sr-only",children:"Copy"})]}),l===s.data&&e.jsx(j,{strokeWidth:1.5,className:" ml-2 text-lg hover:text-primary"})]})},n))})]})]})})}),e.jsx(T,{})]})}),e.jsx(m,{value:"July 1, 2024",children:e.jsx("iframe",{className:"mx-auto",src:"assets/latestOFfer.pdf",width:"95%",height:"1000px"})}),e.jsx(m,{value:"Other Dates",children:e.jsx("div",{className:"font-sans p-4",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight text-foreground sm:text-6xl",children:"Submitted Offers and the dates served"}),r.map((s,n)=>e.jsx("p",{className:"mt-6 text-lg leading-8 text-muted-foreground",children:s.date}))]})}),e.jsx("div",{className:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]","aria-hidden":"true",children:e.jsx("div",{className:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})})]})})})]}),e.jsxs(m,{value:"Natashia",children:[e.jsxs(b,{className:"rounded-[6px] ",children:[e.jsx(d,{className:"rounded-[6px] ",value:"Current Cunt",children:"Current"}),e.jsx(d,{className:"rounded-[6px] ",value:"Notes On Her Current",children:"Notes On Her Current"}),e.jsx(d,{className:"rounded-[6px] ",value:"apr 21 2024 228 pm  part 1",children:"apr 21 2024 228 pm  part 1"}),e.jsx(d,{className:"rounded-[6px] ",value:"apr 21 2024 228 pm  part 2",children:"apr 21 2024 228 pm  part 2"}),e.jsx(d,{className:"rounded-[6px] ",value:"was not served no date",children:"was not served no date"})]}),e.jsxs(m,{value:"Current Cunt",children:[e.jsx("p",{className:"text-center text-xl m-5",children:"Served may 3 2024 440 pm"}),e.jsx("iframe",{className:"mx-auto",src:"assets/may 3 2024 440 pm.pdf",width:"95%",height:"1000px"})]}),e.jsxs(m,{value:"Notes On Her Current",children:[e.jsxs(O,{className:C("w-[80%]"),children:[e.jsxs(k,{children:[e.jsx(P,{children:"Path: "}),e.jsx(A,{children:"Property 100% hers"})]}),e.jsx(S,{className:"grid gap-4",children:e.jsx("div",{children:t.map((s,n)=>e.jsxs("div",{className:"mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0",children:[e.jsx("span",{className:"flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:s.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:s.description})]})]},n))})}),e.jsx(T,{})]}),e.jsxs(O,{className:C("w-[80%]"),children:[e.jsxs(k,{children:[e.jsx(P,{children:"Path: "}),e.jsx(A,{children:" 50 / 50 split"})]}),e.jsx(S,{className:"grid gap-4",children:e.jsx("div",{children:a.map((s,n)=>e.jsxs("div",{className:"mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0",children:[e.jsx("span",{className:"flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:s.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:s.description})]})]},n))})}),e.jsx(T,{})]})]}),e.jsx(m,{value:"apr 21 2024 228 pm  part 1",children:e.jsx("iframe",{className:"mx-auto",src:"assets/apr 21 2024 228 pm  part 1.pdf",width:"95%",height:"1000px"})}),e.jsx(m,{value:"apr 21 2024 228 pm  part 2",children:e.jsx("iframe",{className:"mx-auto",src:"assets/apr 21 2024 228 pm  part 2.pdf",width:"95%",height:"1000px"})}),e.jsx(m,{value:"was not served no date",children:e.jsx("iframe",{className:"mx-auto",src:"assets/was not served no date.pdf",width:"95%",height:"1000px"})})]})]})}export{le as clientAction,ne as clientLoader,ce as default};
