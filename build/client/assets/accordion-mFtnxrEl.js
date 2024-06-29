import{r as s,j as u,a as g,R as ge}from"./jsx-runtime-BWtM72Fx.js";import{u as P,S as D}from"./index-BBtZlfNH.js";import{r as he}from"./index-D5jV_PZh.js";import{c as k}from"./utils-C-5SdYIA.js";function Z(e,t,{checkForDefaultPrevented:o=!0}={}){return function(r){if(e==null||e(r),o===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function $(e,t=[]){let o=[];function n(c,i){const l=s.createContext(i),d=o.length;o=[...o,i];function a(f){const{scope:x,children:v,...C}=f,A=(x==null?void 0:x[e][d])||l,h=s.useMemo(()=>C,Object.values(C));return u.jsx(A.Provider,{value:h,children:v})}function m(f,x){const v=(x==null?void 0:x[e][d])||l,C=s.useContext(v);if(C)return C;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${c}\``)}return a.displayName=c+"Provider",[a,m]}const r=()=>{const c=o.map(i=>s.createContext(i));return function(l){const d=(l==null?void 0:l[e])||c;return s.useMemo(()=>({[`__scope${e}`]:{...l,[e]:d}}),[l,d])}};return r.scopeName=e,[n,Ae(r,...t)]}function Ae(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(c){const i=n.reduce((l,{useScope:d,scopeName:a})=>{const f=d(c)[`__scope${a}`];return{...l,...f}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return o.scopeName=t.scopeName,o}function Ne(e){const t=e+"CollectionProvider",[o,n]=$(t),[r,c]=o(t,{collectionRef:{current:null},itemMap:new Map}),i=v=>{const{scope:C,children:A}=v,h=g.useRef(null),N=g.useRef(new Map).current;return u.jsx(r,{scope:C,itemMap:N,collectionRef:h,children:A})};i.displayName=t;const l=e+"CollectionSlot",d=g.forwardRef((v,C)=>{const{scope:A,children:h}=v,N=c(l,A),p=P(C,N.collectionRef);return u.jsx(D,{ref:p,children:h})});d.displayName=l;const a=e+"CollectionItemSlot",m="data-radix-collection-item",f=g.forwardRef((v,C)=>{const{scope:A,children:h,...N}=v,p=g.useRef(null),b=P(C,p),I=c(a,A);return g.useEffect(()=>(I.itemMap.set(p,{ref:p,...N}),()=>void I.itemMap.delete(p))),u.jsx(D,{[m]:"",ref:b,children:h})});f.displayName=a;function x(v){const C=c(e+"CollectionConsumer",v);return g.useCallback(()=>{const h=C.collectionRef.current;if(!h)return[];const N=Array.from(h.querySelectorAll(`[${m}]`));return Array.from(C.itemMap.values()).sort((I,w)=>N.indexOf(I.ref.current)-N.indexOf(w.ref.current))},[C.collectionRef,C.itemMap])}return[{Provider:i,Slot:d,ItemSlot:f},x,n]}var y=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},be=ge.useId||(()=>{}),Re=0;function H(e){const[t,o]=s.useState(be());return y(()=>{e||o(n=>n??String(Re++))},[e]),e||(t?`radix-${t}`:"")}var Ie=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],S=Ie.reduce((e,t)=>{const o=s.forwardRef((n,r)=>{const{asChild:c,...i}=n,l=c?D:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),u.jsx(l,{...i,ref:r})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function J(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...o)=>{var n;return(n=t.current)==null?void 0:n.call(t,...o)},[])}function U({prop:e,defaultProp:t,onChange:o=()=>{}}){const[n,r]=we({defaultProp:t,onChange:o}),c=e!==void 0,i=c?e:n,l=J(o),d=s.useCallback(a=>{if(c){const f=typeof a=="function"?a(e):a;f!==e&&l(f)}else r(a)},[c,e,r,l]);return[i,d]}function we({defaultProp:e,onChange:t}){const o=s.useState(e),[n]=o,r=s.useRef(n),c=J(t);return s.useEffect(()=>{r.current!==n&&(c(n),r.current=n)},[n,r,c]),o}var Pe=s.createContext(void 0);function Se(e){const t=s.useContext(Pe);return e||t||"ltr"}function _e(e,t){return s.useReducer((o,n)=>t[o][n]??o,e)}var Q=e=>{const{present:t,children:o}=e,n=ye(t),r=typeof o=="function"?o({present:n.isPresent}):s.Children.only(o),c=P(n.ref,Oe(r));return typeof o=="function"||n.isPresent?s.cloneElement(r,{ref:c}):null};Q.displayName="Presence";function ye(e){const[t,o]=s.useState(),n=s.useRef({}),r=s.useRef(e),c=s.useRef("none"),i=e?"mounted":"unmounted",[l,d]=_e(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const a=_(n.current);c.current=l==="mounted"?a:"none"},[l]),y(()=>{const a=n.current,m=r.current;if(m!==e){const x=c.current,v=_(a);e?d("MOUNT"):v==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(m&&x!==v?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,d]),y(()=>{if(t){const a=f=>{const v=_(n.current).includes(f.animationName);f.target===t&&v&&he.flushSync(()=>d("ANIMATION_END"))},m=f=>{f.target===t&&(c.current=_(n.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:s.useCallback(a=>{a&&(n.current=getComputedStyle(a)),o(a)},[])}}function _(e){return(e==null?void 0:e.animationName)||"none"}function Oe(e){var n,r;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var V="Collapsible",[Ee,X]=$(V),[je,W]=Ee(V),ee=s.forwardRef((e,t)=>{const{__scopeCollapsible:o,open:n,defaultOpen:r,disabled:c,onOpenChange:i,...l}=e,[d=!1,a]=U({prop:n,defaultProp:r,onChange:i});return u.jsx(je,{scope:o,disabled:c,contentId:H(),open:d,onOpenToggle:s.useCallback(()=>a(m=>!m),[a]),children:u.jsx(S.div,{"data-state":K(d),"data-disabled":c?"":void 0,...l,ref:t})})});ee.displayName=V;var te="CollapsibleTrigger",oe=s.forwardRef((e,t)=>{const{__scopeCollapsible:o,...n}=e,r=W(te,o);return u.jsx(S.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":K(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...n,ref:t,onClick:Z(e.onClick,r.onOpenToggle)})});oe.displayName=te;var B="CollapsibleContent",ne=s.forwardRef((e,t)=>{const{forceMount:o,...n}=e,r=W(B,e.__scopeCollapsible);return u.jsx(Q,{present:o||r.open,children:({present:c})=>u.jsx(Me,{...n,ref:t,present:c})})});ne.displayName=B;var Me=s.forwardRef((e,t)=>{const{__scopeCollapsible:o,present:n,children:r,...c}=e,i=W(B,o),[l,d]=s.useState(n),a=s.useRef(null),m=P(t,a),f=s.useRef(0),x=f.current,v=s.useRef(0),C=v.current,A=i.open||l,h=s.useRef(A),N=s.useRef();return s.useEffect(()=>{const p=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(p)},[]),y(()=>{const p=a.current;if(p){N.current=N.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const b=p.getBoundingClientRect();f.current=b.height,v.current=b.width,h.current||(p.style.transitionDuration=N.current.transitionDuration,p.style.animationName=N.current.animationName),d(n)}},[i.open,n]),u.jsx(S.div,{"data-state":K(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!A,...c,ref:m,style:{"--radix-collapsible-content-height":x?`${x}px`:void 0,"--radix-collapsible-content-width":C?`${C}px`:void 0,...e.style},children:A&&r})});function K(e){return e?"open":"closed"}var Te=ee,De=oe,Le=ne,R="Accordion",ke=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[G,$e,Ue]=Ne(R),[E,ct]=$(R,[Ue,X]),F=X(),re=g.forwardRef((e,t)=>{const{type:o,...n}=e,r=n,c=n;return u.jsx(G.Provider,{scope:e.__scopeAccordion,children:o==="multiple"?u.jsx(Ke,{...c,ref:t}):u.jsx(Be,{...r,ref:t})})});re.displayName=R;var[ce,Ve]=E(R),[se,We]=E(R,{collapsible:!1}),Be=g.forwardRef((e,t)=>{const{value:o,defaultValue:n,onValueChange:r=()=>{},collapsible:c=!1,...i}=e,[l,d]=U({prop:o,defaultProp:n,onChange:r});return u.jsx(ce,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:d,onItemClose:g.useCallback(()=>c&&d(""),[c,d]),children:u.jsx(se,{scope:e.__scopeAccordion,collapsible:c,children:u.jsx(ie,{...i,ref:t})})})}),Ke=g.forwardRef((e,t)=>{const{value:o,defaultValue:n,onValueChange:r=()=>{},...c}=e,[i=[],l]=U({prop:o,defaultProp:n,onChange:r}),d=g.useCallback(m=>l((f=[])=>[...f,m]),[l]),a=g.useCallback(m=>l((f=[])=>f.filter(x=>x!==m)),[l]);return u.jsx(ce,{scope:e.__scopeAccordion,value:i,onItemOpen:d,onItemClose:a,children:u.jsx(se,{scope:e.__scopeAccordion,collapsible:!0,children:u.jsx(ie,{...c,ref:t})})})}),[Ge,j]=E(R),ie=g.forwardRef((e,t)=>{const{__scopeAccordion:o,disabled:n,dir:r,orientation:c="vertical",...i}=e,l=g.useRef(null),d=P(l,t),a=$e(o),f=Se(r)==="ltr",x=Z(e.onKeyDown,v=>{var z;if(!ke.includes(v.key))return;const C=v.target,A=a().filter(T=>{var Y;return!((Y=T.ref.current)!=null&&Y.disabled)}),h=A.findIndex(T=>T.ref.current===C),N=A.length;if(h===-1)return;v.preventDefault();let p=h;const b=0,I=N-1,w=()=>{p=h+1,p>I&&(p=b)},M=()=>{p=h-1,p<b&&(p=I)};switch(v.key){case"Home":p=b;break;case"End":p=I;break;case"ArrowRight":c==="horizontal"&&(f?w():M());break;case"ArrowDown":c==="vertical"&&w();break;case"ArrowLeft":c==="horizontal"&&(f?M():w());break;case"ArrowUp":c==="vertical"&&M();break}const xe=p%N;(z=A[xe].ref.current)==null||z.focus()});return u.jsx(Ge,{scope:o,disabled:n,direction:r,orientation:c,children:u.jsx(G.Slot,{scope:o,children:u.jsx(S.div,{...i,"data-orientation":c,ref:d,onKeyDown:n?void 0:x})})})}),O="AccordionItem",[Fe,q]=E(O),ae=g.forwardRef((e,t)=>{const{__scopeAccordion:o,value:n,...r}=e,c=j(O,o),i=Ve(O,o),l=F(o),d=H(),a=n&&i.value.includes(n)||!1,m=c.disabled||e.disabled;return u.jsx(Fe,{scope:o,open:a,disabled:m,triggerId:d,children:u.jsx(Te,{"data-orientation":c.orientation,"data-state":me(a),...l,...r,ref:t,disabled:m,open:a,onOpenChange:f=>{f?i.onItemOpen(n):i.onItemClose(n)}})})});ae.displayName=O;var le="AccordionHeader",de=g.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,r=j(R,o),c=q(le,o);return u.jsx(S.h3,{"data-orientation":r.orientation,"data-state":me(c.open),"data-disabled":c.disabled?"":void 0,...n,ref:t})});de.displayName=le;var L="AccordionTrigger",ue=g.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,r=j(R,o),c=q(L,o),i=We(L,o),l=F(o);return u.jsx(G.ItemSlot,{scope:o,children:u.jsx(De,{"aria-disabled":c.open&&!i.collapsible||void 0,"data-orientation":r.orientation,id:c.triggerId,...l,...n,ref:t})})});ue.displayName=L;var fe="AccordionContent",pe=g.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,r=j(R,o),c=q(fe,o),i=F(o);return u.jsx(Le,{role:"region","aria-labelledby":c.triggerId,"data-orientation":r.orientation,...i,...n,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});pe.displayName=fe;function me(e){return e?"open":"closed"}var qe=re,ze=ae,Ye=de,ve=ue,Ce=pe;function Ze(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,c;for(c=0;c<n.length;c++)r=n[c],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}var He=["color"],Je=s.forwardRef(function(e,t){var o=e.color,n=o===void 0?"currentColor":o,r=Ze(e,He);return s.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),s.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:n,fillRule:"evenodd",clipRule:"evenodd"}))});const st=qe,Qe=s.forwardRef(({className:e,...t},o)=>u.jsx(ze,{ref:o,className:k("border-b",e),...t}));Qe.displayName="AccordionItem";const Xe=s.forwardRef(({className:e,children:t,...o},n)=>u.jsx(Ye,{className:"flex",children:u.jsxs(ve,{ref:n,className:k("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...o,children:[t,u.jsx(Je,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));Xe.displayName=ve.displayName;const et=s.forwardRef(({className:e,children:t,...o},n)=>u.jsx(Ce,{ref:n,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:u.jsx("div",{className:k("pb-4 pt-0",e),children:t})}));et.displayName=Ce.displayName;export{st as A,S as P,Qe as a,Xe as b,et as c,Ne as d,$ as e,U as f,J as g,Z as h,H as i,Q as j,Se as u};