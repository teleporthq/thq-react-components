"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const D=require("dayjs"),e=require("react"),v=({date:r,format:t})=>{const a=D.unix(new Date(r).getTime()/1e3),n=D(a).format(t);return e.createElement(e.Fragment,null,n)},L=({html:r})=>{const t=e.useRef(null);return e.useEffect(()=>{if(!r||!t.current)return;const a=document.createRange().createContextualFragment(r);t.current.append(a)},[]),e.createElement("div",{style:{display:"contents"},ref:t})},R=r=>{const{fetchData:t,params:a,initialData:n,persistDataDuringLoading:s=!1,renderLoading:c,renderSuccess:u,renderError:i}=r,[y,l]=e.useState("idle"),[o,d]=e.useState(n),[E,p]=e.useState(null),f=e.useRef(r.initialData!==void 0),g=e.useRef(s);switch(g.current=s,e.useEffect(()=>{if(f.current){f.current=!1;return}(async()=>{l("loading"),g.current||d(void 0);try{const m=await t(a);d(m),l("success")}catch(m){p(m),l("error")}})()},[a,t]),y){case"idle":case"loading":return r.persistDataDuringLoading&&o?u(o,!0):c?c():null;case"success":return u(o,!1);case"error":return i(E);default:return null}},h=r=>{const{items:t,renderItem:a,renderEmpty:n}=r;if("data"in t&&"meta"in t){const{data:s,meta:c}=t;return s.length===0?n?n():null:e.createElement(e.Fragment,null,s.map((u,i)=>a(typeof u=="object"?{...u,teleportMeta:c}:u,i)))}if(Array.isArray(t))return t.length===0?n?n():null:e.createElement(e.Fragment,null,t.map((s,c)=>a(s,c)))},F=({src:r,description:t})=>e.createElement(e.Fragment,null,r&&e.createElement("img",{loading:"lazy",src:r,alt:t??""})),S=({node:r,children:t})=>r.attrs.src?e.createElement(F,{...r.attrs}):e.createElement(e.Fragment,null,t);exports.CaisyDocumentLink=S;exports.DangerousHTML=L;exports.DataProvider=R;exports.DateTimePrimitive=v;exports.Repeater=h;
