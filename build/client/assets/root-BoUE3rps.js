import{r as i,j as t}from"./jsx-runtime-56DGgGmo.js";import{b as h,c as x,d as y,e as S,_ as f,O as j,M as w,L as g,S as k}from"./components-ESwiOSE-.js";/**
 * @remix-run/react v2.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:e,...l}){let{isSpaMode:c}=h(),o=x(),u=y();S({getKey:e,storageKey:a});let d=i.useMemo(()=>{if(!e)return null;let s=e(o,u);return s!==o.key?s:null},[]);if(c)return null;let p=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",f({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function b({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(w,{}),t.jsx(g,{})]}),t.jsxs("body",{children:[e,t.jsx(M,{}),t.jsx(k,{})]})]})}function R(){return t.jsx(j,{})}function _(){return t.jsx("p",{children:"Loading..."})}export{_ as HydrateFallback,b as Layout,R as default};
