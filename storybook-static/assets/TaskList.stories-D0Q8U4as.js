var wt=Object.defineProperty;var St=(e,t,r)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ae=(e,t,r)=>St(e,typeof t!="symbol"?t+"":t,r);import{j as w}from"./jsx-runtime-CB5fy6C8.js";import{T as kt,D as F}from"./Task.stories-BgUKkUSY.js";import{r as gt,a as ve,R as vt}from"./index-D9zwcjsT.js";var Ye={exports:{}},Qe={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G=gt;function Et(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Et,Tt=G.useSyncExternalStore,Ct=G.useRef,Pt=G.useEffect,Rt=G.useMemo,Mt=G.useDebugValue;Qe.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var i=Ct(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=Rt(function(){function c(y){if(!u){if(u=!0,f=y,y=n(y),s!==void 0&&o.hasValue){var p=o.value;if(s(p,y))return l=p}return l=y}if(p=l,xt(f,y))return p;var P=n(y);return s!==void 0&&s(p,P)?p:(f=y,l=P)}var u=!1,f,l,d=r===void 0?null:r;return[function(){return c(t())},d===null?void 0:function(){return c(d())}]},[t,r,n,s]);var a=Tt(e,i[0],i[1]);return Pt(function(){o.hasValue=!0,o.value=a},[a]),Mt(a),a};Ye.exports=Qe;var Ot=Ye.exports,x="default"in ve?vt:ve,Ee=Symbol.for("react-redux-context"),xe=typeof globalThis<"u"?globalThis:{};function At(){if(!x.createContext)return{};const e=xe[Ee]??(xe[Ee]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var D=At(),jt=()=>{throw new Error("uSES not initialized!")};function we(e=D){return function(){return x.useContext(e)}}var Je=we(),Ze=jt,Dt=e=>{Ze=e},Nt=(e,t)=>e===t;function It(e=D){const t=e===D?Je:we(e),r=(n,s={})=>{const{equalityFn:i=Nt,devModeChecks:o={}}=typeof s=="function"?{equalityFn:s}:s,{store:a,subscription:c,getServerState:u,stabilityCheck:f,identityFunctionCheck:l}=t();x.useRef(!0);const d=x.useCallback({[n.name](p){return n(p)}}[n.name],[n,f,o.stabilityCheck]),y=Ze(c.addNestedSub,a.getState,u||a.getState,d,i);return x.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}var Te=It();function zt(e){e()}function Ft(){let e=null,t=null;return{clear(){e=null,t=null},notify(){zt(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const s=t={callback:r,next:null,prev:t};return s.prev?s.prev.next=s:e=s,function(){!n||e===null||(n=!1,s.next?s.next.prev=s.prev:t=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var Ce={notify(){},get:()=>[]};function Lt(e,t){let r,n=Ce,s=0,i=!1;function o(P){f();const b=n.subscribe(P);let k=!1;return()=>{k||(k=!0,b(),l())}}function a(){n.notify()}function c(){p.onStateChange&&p.onStateChange()}function u(){return i}function f(){s++,r||(r=e.subscribe(c),n=Ft())}function l(){s--,r&&s===0&&(r(),r=void 0,n.clear(),n=Ce)}function d(){i||(i=!0,f())}function y(){i&&(i=!1,l())}const p={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:c,isSubscribed:u,trySubscribe:d,tryUnsubscribe:y,getListeners:()=>n};return p}var Kt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bt=typeof navigator<"u"&&navigator.product==="ReactNative",Wt=Kt||Bt?x.useLayoutEffect:x.useEffect;function $t({store:e,context:t,children:r,serverState:n,stabilityCheck:s="once",identityFunctionCheck:i="once"}){const o=x.useMemo(()=>{const u=Lt(e);return{store:e,subscription:u,getServerState:n?()=>n:void 0,stabilityCheck:s,identityFunctionCheck:i}},[e,n,s,i]),a=x.useMemo(()=>e.getState(),[e]);Wt(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const c=t||D;return x.createElement(c.Provider,{value:o},r)}var Ut=$t;function et(e=D){const t=e===D?Je:we(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var qt=et();function Ht(e=D){const t=e===D?qt:et(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Vt=Ht();Dt(Ot.useSyncExternalStoreWithSelector);function E(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Xt=typeof Symbol=="function"&&Symbol.observable||"@@observable",Pe=Xt,ce=()=>Math.random().toString(36).substring(7).split("").join("."),Gt={INIT:`@@redux/INIT${ce()}`,REPLACE:`@@redux/REPLACE${ce()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ce()}`},Q=Gt;function Se(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function tt(e,t,r){if(typeof e!="function")throw new Error(E(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(E(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(E(1));return r(tt)(e,t)}let n=e,s=t,i=new Map,o=i,a=0,c=!1;function u(){o===i&&(o=new Map,i.forEach((b,k)=>{o.set(k,b)}))}function f(){if(c)throw new Error(E(3));return s}function l(b){if(typeof b!="function")throw new Error(E(4));if(c)throw new Error(E(5));let k=!0;u();const S=a++;return o.set(S,b),function(){if(k){if(c)throw new Error(E(6));k=!1,u(),o.delete(S),i=null}}}function d(b){if(!Se(b))throw new Error(E(7));if(typeof b.type>"u")throw new Error(E(8));if(typeof b.type!="string")throw new Error(E(17));if(c)throw new Error(E(9));try{c=!0,s=n(s,b)}finally{c=!1}return(i=o).forEach(S=>{S()}),b}function y(b){if(typeof b!="function")throw new Error(E(10));n=b,d({type:Q.REPLACE})}function p(){const b=l;return{subscribe(k){if(typeof k!="object"||k===null)throw new Error(E(11));function S(){const m=k;m.next&&m.next(f())}return S(),{unsubscribe:b(S)}},[Pe](){return this}}}return d({type:Q.INIT}),{dispatch:d,subscribe:l,getState:f,replaceReducer:y,[Pe]:p}}function Yt(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Q.INIT})>"u")throw new Error(E(12));if(typeof r(void 0,{type:Q.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(E(13))})}function Qt(e){const t=Object.keys(e),r={};for(let i=0;i<t.length;i++){const o=t[i];typeof e[o]=="function"&&(r[o]=e[o])}const n=Object.keys(r);let s;try{Yt(r)}catch(i){s=i}return function(o={},a){if(s)throw s;let c=!1;const u={};for(let f=0;f<n.length;f++){const l=n[f],d=r[l],y=o[l],p=d(y,a);if(typeof p>"u")throw a&&a.type,new Error(E(14));u[l]=p,c=c||p!==y}return c=c||n.length!==Object.keys(o).length,c?u:o}}function J(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function Jt(...e){return t=>(r,n)=>{const s=t(r,n);let i=()=>{throw new Error(E(15))};const o={getState:s.getState,dispatch:(c,...u)=>i(c,...u)},a=e.map(c=>c(o));return i=J(...a)(s.dispatch),{...s,dispatch:i}}}function Zt(e){return Se(e)&&"type"in e&&typeof e.type=="string"}var rt=Symbol.for("immer-nothing"),Re=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function M(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var L=Object.getPrototypeOf;function I(e){return!!e&&!!e[T]}function A(e){var t;return e?nt(e)||Array.isArray(e)||!!e[Re]||!!((t=e.constructor)!=null&&t[Re])||ne(e)||se(e):!1}var er=Object.prototype.constructor.toString();function nt(e){if(!e||typeof e!="object")return!1;const t=L(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===er}function Z(e,t){re(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function re(e){const t=e[T];return t?t.type_:Array.isArray(e)?1:ne(e)?2:se(e)?3:0}function ye(e,t){return re(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function st(e,t,r){const n=re(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function tr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ne(e){return e instanceof Map}function se(e){return e instanceof Set}function N(e){return e.copy_||e.base_}function pe(e,t){if(ne(e))return new Map(e);if(se(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=nt(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[T];let s=Reflect.ownKeys(n);for(let i=0;i<s.length;i++){const o=s[i],a=n[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(L(e),n)}else{const n=L(e);if(n!==null&&r)return{...e};const s=Object.create(n);return Object.assign(s,e)}}function ke(e,t=!1){return ie(e)||I(e)||!A(e)||(re(e)>1&&(e.set=e.add=e.clear=e.delete=rr),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>ke(n,!0))),e}function rr(){M(2)}function ie(e){return Object.isFrozen(e)}var nr={};function z(e){const t=nr[e];return t||M(0,e),t}var V;function it(){return V}function sr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Me(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function he(e){me(e),e.drafts_.forEach(ir),e.drafts_=null}function me(e){e===V&&(V=e.parent_)}function Oe(e){return V=sr(V,e)}function ir(e){const t=e[T];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ae(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[T].modified_&&(he(t),M(4)),A(e)&&(e=ee(t,e),t.parent_||te(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(r[T].base_,e,t.patches_,t.inversePatches_)):e=ee(t,r,[]),he(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==rt?e:void 0}function ee(e,t,r){if(ie(t))return t;const n=t[T];if(!n)return Z(t,(s,i)=>je(e,n,t,s,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return te(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let i=s,o=!1;n.type_===3&&(i=new Set(s),s.clear(),o=!0),Z(i,(a,c)=>je(e,n,s,a,c,r,o)),te(e,s,!1),r&&e.patches_&&z("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function je(e,t,r,n,s,i,o){if(I(s)){const a=i&&t&&t.type_!==3&&!ye(t.assigned_,n)?i.concat(n):void 0,c=ee(e,s,a);if(st(r,n,c),I(c))e.canAutoFreeze_=!1;else return}else o&&r.add(s);if(A(s)&&!ie(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ee(e,s),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&te(e,s)}}function te(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ke(t,r)}function or(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:it(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,i=ge;r&&(s=[n],i=X);const{revoke:o,proxy:a}=Proxy.revocable(s,i);return n.draft_=a,n.revoke_=o,a}var ge={get(e,t){if(t===T)return e;const r=N(e);if(!ye(r,t))return ar(e,r,t);const n=r[t];return e.finalized_||!A(n)?n:n===ue(e.base_,t)?(fe(e),e.copy_[t]=be(n,e)):n},has(e,t){return t in N(e)},ownKeys(e){return Reflect.ownKeys(N(e))},set(e,t,r){const n=ot(N(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const s=ue(N(e),t),i=s==null?void 0:s[T];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(tr(r,s)&&(r!==void 0||ye(e.base_,t)))return!0;fe(e),_e(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return ue(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,fe(e),_e(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=N(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){M(11)},getPrototypeOf(e){return L(e.base_)},setPrototypeOf(){M(12)}},X={};Z(ge,(e,t)=>{X[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});X.deleteProperty=function(e,t){return X.set.call(this,e,t,void 0)};X.set=function(e,t,r){return ge.set.call(this,e[0],t,r,e[0])};function ue(e,t){const r=e[T];return(r?N(r):e)[t]}function ar(e,t,r){var s;const n=ot(t,r);return n?"value"in n?n.value:(s=n.get)==null?void 0:s.call(e.draft_):void 0}function ot(e,t){if(!(t in e))return;let r=L(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=L(r)}}function _e(e){e.modified_||(e.modified_=!0,e.parent_&&_e(e.parent_))}function fe(e){e.copy_||(e.copy_=pe(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var cr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const i=r;r=t;const o=this;return function(c=i,...u){return o.produce(c,f=>r.call(this,f,...u))}}typeof r!="function"&&M(6),n!==void 0&&typeof n!="function"&&M(7);let s;if(A(t)){const i=Oe(this),o=be(t,void 0);let a=!0;try{s=r(o),a=!1}finally{a?he(i):me(i)}return Me(i,n),Ae(s,i)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===rt&&(s=void 0),this.autoFreeze_&&ke(s,!0),n){const i=[],o=[];z("Patches").generateReplacementPatches_(t,s,i,o),n(i,o)}return s}else M(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,c=>t(c,...a));let n,s;return[this.produce(t,r,(o,a)=>{n=o,s=a}),n,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){A(e)||M(8),I(e)&&(e=ur(e));const t=Oe(this),r=be(e,void 0);return r[T].isManual_=!0,me(t),r}finishDraft(e,t){const r=e&&e[T];(!r||!r.isManual_)&&M(9);const{scope_:n}=r;return Me(n,t),Ae(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const n=z("Patches").applyPatches_;return I(e)?n(e,t):this.produce(e,s=>n(s,t))}};function be(e,t){const r=ne(e)?z("MapSet").proxyMap_(e,t):se(e)?z("MapSet").proxySet_(e,t):or(e,t);return(t?t.scope_:it()).drafts_.push(r),r}function ur(e){return I(e)||M(10,e),at(e)}function at(e){if(!A(e)||ie(e))return e;const t=e[T];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=pe(e,t.scope_.immer_.useStrictShallowCopy_)}else r=pe(e,!0);return Z(r,(n,s)=>{st(r,n,at(s))}),t&&(t.finalized_=!1),r}var C=new cr,ct=C.produce;C.produceWithPatches.bind(C);C.setAutoFreeze.bind(C);C.setUseStrictShallowCopy.bind(C);C.applyPatches.bind(C);C.createDraft.bind(C);C.finishDraft.bind(C);function ut(e){return({dispatch:r,getState:n})=>s=>i=>typeof i=="function"?i(r,n,e):s(i)}var fr=ut(),lr=ut,dr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?J:J.apply(null,arguments)},yr=e=>e&&typeof e.match=="function";function H(e,t){function r(...n){if(t){let s=t(...n);if(!s)throw new Error(O(0));return{type:e,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>Zt(n)&&n.type===e,r}var ft=class B extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,B.prototype)}static get[Symbol.species](){return B}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new B(...t[0].concat(this)):new B(...t.concat(this))}};function De(e){return A(e)?ct(e,()=>{}):e}function Ne(e,t,r){if(e.has(t)){let s=e.get(t);return r.update&&(s=r.update(s,t,e),e.set(t,s)),s}if(!r.insert)throw new Error(O(10));const n=r.insert(t,e);return e.set(t,n),n}function pr(e){return typeof e=="boolean"}var hr=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:s=!0,actionCreatorCheck:i=!0}=t??{};let o=new ft;return r&&(pr(r)?o.push(fr):o.push(lr(r.extraArgument))),o},mr="RTK_autoBatch",lt=e=>t=>{setTimeout(t,e)},_r=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:lt(10),br=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let s=!0,i=!1,o=!1;const a=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?_r:e.type==="callback"?e.queueNotification:lt(e.timeout),u=()=>{o=!1,i&&(i=!1,a.forEach(f=>f()))};return Object.assign({},n,{subscribe(f){const l=()=>s&&f(),d=n.subscribe(l);return a.add(f),()=>{d(),a.delete(f)}},dispatch(f){var l;try{return s=!((l=f==null?void 0:f.meta)!=null&&l[mr]),i=!s,i&&(o||(o=!0,c(u))),n.dispatch(f)}finally{s=!0}}})},wr=e=>function(r){const{autoBatch:n=!0}=r??{};let s=new ft(e);return n&&s.push(br(typeof n=="object"?n:void 0)),s};function dt(e){const t=hr(),{reducer:r=void 0,middleware:n,devTools:s=!0,preloadedState:i=void 0,enhancers:o=void 0}=e||{};let a;if(typeof r=="function")a=r;else if(Se(r))a=Qt(r);else throw new Error(O(1));let c;typeof n=="function"?c=n(t):c=t();let u=J;s&&(u=dr({trace:!1,...typeof s=="object"&&s}));const f=Jt(...c),l=wr(f);let d=typeof o=="function"?o(l):l();const y=u(...d);return tt(a,i,y)}function yt(e){const t={},r=[];let n;const s={addCase(i,o){const a=typeof i=="string"?i:i.type;if(!a)throw new Error(O(28));if(a in t)throw new Error(O(29));return t[a]=o,s},addMatcher(i,o){return r.push({matcher:i,reducer:o}),s},addDefaultCase(i){return n=i,s}};return e(s),[t,r,n]}function Sr(e){return typeof e=="function"}function kr(e,t){let[r,n,s]=yt(t),i;if(Sr(e))i=()=>De(e());else{const a=De(e);i=()=>a}function o(a=i(),c){let u=[r[c.type],...n.filter(({matcher:f})=>f(c)).map(({reducer:f})=>f)];return u.filter(f=>!!f).length===0&&(u=[s]),u.reduce((f,l)=>{if(l)if(I(f)){const y=l(f,c);return y===void 0?f:y}else{if(A(f))return ct(f,d=>l(d,c));{const d=l(f,c);if(d===void 0){if(f===null)return f;throw Error("A case reducer on a non-draftable value must not return undefined")}return d}}return f},a)}return o.getInitialState=i,o}var gr=(e,t)=>yr(e)?e.match(t):e(t);function vr(...e){return t=>e.some(r=>gr(r,t))}var Er="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",xr=(e=21)=>{let t="",r=e;for(;r--;)t+=Er[Math.random()*64|0];return t},Tr=["name","message","stack","code"],le=class{constructor(e,t){ae(this,"_type");this.payload=e,this.meta=t}},Ie=class{constructor(e,t){ae(this,"_type");this.payload=e,this.meta=t}},Cr=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of Tr)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Pr=(()=>{function e(t,r,n){const s=H(t+"/fulfilled",(c,u,f,l)=>({payload:c,meta:{...l||{},arg:f,requestId:u,requestStatus:"fulfilled"}})),i=H(t+"/pending",(c,u,f)=>({payload:void 0,meta:{...f||{},arg:u,requestId:c,requestStatus:"pending"}})),o=H(t+"/rejected",(c,u,f,l,d)=>({payload:l,error:(n&&n.serializeError||Cr)(c||"Rejected"),meta:{...d||{},arg:f,requestId:u,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"}}));function a(c){return(u,f,l)=>{const d=n!=null&&n.idGenerator?n.idGenerator(c):xr(),y=new AbortController;let p,P;function b(S){P=S,y.abort()}const k=async function(){var m,v;let S;try{let g=(m=n==null?void 0:n.condition)==null?void 0:m.call(n,c,{getState:f,extra:l});if(Mr(g)&&(g=await g),g===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const R=new Promise((_,j)=>{p=()=>{j({name:"AbortError",message:P||"Aborted"})},y.signal.addEventListener("abort",p)});u(i(d,c,(v=n==null?void 0:n.getPendingMeta)==null?void 0:v.call(n,{requestId:d,arg:c},{getState:f,extra:l}))),S=await Promise.race([R,Promise.resolve(r(c,{dispatch:u,getState:f,extra:l,requestId:d,signal:y.signal,abort:b,rejectWithValue:(_,j)=>new le(_,j),fulfillWithValue:(_,j)=>new Ie(_,j)})).then(_=>{if(_ instanceof le)throw _;return _ instanceof Ie?s(_.payload,d,c,_.meta):s(_,d,c)})])}catch(g){S=g instanceof le?o(null,d,c,g.payload,g.meta):o(g,d,c)}finally{p&&y.signal.removeEventListener("abort",p)}return n&&!n.dispatchConditionRejection&&o.match(S)&&S.meta.condition||u(S),S}();return Object.assign(k,{abort:b,requestId:d,arg:c,unwrap(){return k.then(Rr)}})}}return Object.assign(a,{pending:i,rejected:o,fulfilled:s,settled:vr(o,s),typePrefix:t})}return e.withTypes=()=>e,e})();function Rr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Mr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Or=Symbol.for("rtk-slice-createasyncthunk");function Ar(e,t){return`${e}/${t}`}function jr({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[Or];return function(s){const{name:i,reducerPath:o=i}=s;if(!i)throw new Error(O(11));typeof process<"u";const a=(typeof s.reducers=="function"?s.reducers(Nr()):s.reducers)||{},c=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(h,m){const v=typeof h=="string"?h:h.type;if(!v)throw new Error(O(12));if(v in u.sliceCaseReducersByType)throw new Error(O(13));return u.sliceCaseReducersByType[v]=m,f},addMatcher(h,m){return u.sliceMatchers.push({matcher:h,reducer:m}),f},exposeAction(h,m){return u.actionCreators[h]=m,f},exposeCaseReducer(h,m){return u.sliceCaseReducersByName[h]=m,f}};c.forEach(h=>{const m=a[h],v={reducerName:h,type:Ar(i,h),createNotation:typeof s.reducers=="function"};zr(m)?Lr(v,m,f,t):Ir(v,m,f)});function l(){const[h={},m=[],v=void 0]=typeof s.extraReducers=="function"?yt(s.extraReducers):[s.extraReducers],g={...h,...u.sliceCaseReducersByType};return kr(s.initialState,R=>{for(let _ in g)R.addCase(_,g[_]);for(let _ of u.sliceMatchers)R.addMatcher(_.matcher,_.reducer);for(let _ of m)R.addMatcher(_.matcher,_.reducer);v&&R.addDefaultCase(v)})}const d=h=>h,y=new Map;let p;function P(h,m){return p||(p=l()),p(h,m)}function b(){return p||(p=l()),p.getInitialState()}function k(h,m=!1){function v(R){let _=R[h];return typeof _>"u"&&m&&(_=b()),_}function g(R=d){const _=Ne(y,m,{insert:()=>new WeakMap});return Ne(_,R,{insert:()=>{const j={};for(const[_t,bt]of Object.entries(s.selectors??{}))j[_t]=Dr(bt,R,b,m);return j}})}return{reducerPath:h,getSelectors:g,get selectors(){return g(v)},selectSlice:v}}const S={name:i,reducer:P,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:b,...k(o),injectInto(h,{reducerPath:m,...v}={}){const g=m??o;return h.inject({reducerPath:g,reducer:P},v),{...S,...k(g,!0)}}};return S}}function Dr(e,t,r,n){function s(i,...o){let a=t(i);return typeof a>"u"&&n&&(a=r()),e(a,...o)}return s.unwrapped=e,s}var pt=jr();function Nr(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function Ir({type:e,reducerName:t,createNotation:r},n,s){let i,o;if("reducer"in n){if(r&&!Fr(n))throw new Error(O(17));i=n.reducer,o=n.prepare}else i=n;s.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,o?H(e,o):H(e))}function zr(e){return e._reducerDefinitionType==="asyncThunk"}function Fr(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Lr({type:e,reducerName:t},r,n,s){if(!s)throw new Error(O(18));const{payloadCreator:i,fulfilled:o,pending:a,rejected:c,settled:u,options:f}=r,l=s(e,i,f);n.exposeAction(t,l),o&&n.addCase(l.fulfilled,o),a&&n.addCase(l.pending,a),c&&n.addCase(l.rejected,c),u&&n.addMatcher(l.settled,u),n.exposeCaseReducer(t,{fulfilled:o||Y,pending:a||Y,rejected:c||Y,settled:u||Y})}function Y(){}function O(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Kr={tasks:[],status:"idle",error:null},de=Pr("todos/fetchTodos",async()=>(await(await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")).json()).map(n=>({id:`${n.id}`,title:n.title,state:n.completed?"TASK_ARCHIVED":"TASK_INBOX"}))),ht=pt({name:"taskbox",initialState:Kr,reducers:{updateTaskState:(e,t)=>{const{id:r,newTaskState:n}=t.payload,s=e.tasks.findIndex(i=>i.id===r);s>=0&&(e.tasks[s].state=n)}},extraReducers(e){e.addCase(de.pending,t=>{t.status="loading",t.error=null,t.tasks=[]}).addCase(de.fulfilled,(t,r)=>{t.status="succeeded",t.error=null,t.tasks=r.payload}).addCase(de.rejected,t=>{t.status="failed",t.error="Something went wrong",t.tasks=[]})}}),{updateTaskState:ze}=ht.actions,Vr=dt({reducer:{taskbox:ht.reducer}});function mt(){const e=Te(o=>[...o.taskbox.tasks.filter(u=>u.state==="TASK_PINNED"),...o.taskbox.tasks.filter(u=>u.state!=="TASK_PINNED")].filter(u=>u.state==="TASK_INBOX"||u.state==="TASK_PINNED")),{status:t}=Te(o=>o.taskbox),r=Vt(),n=o=>{r(ze({id:o,newTaskState:"TASK_PINNED"}))},s=o=>{r(ze({id:o,newTaskState:"TASK_ARCHIVED"}))},i=w.jsxs("div",{className:"loading-item",children:[w.jsx("span",{className:"glow-checkbox"}),w.jsxs("span",{className:"glow-text",children:[w.jsx("span",{children:"Loading"})," ",w.jsx("span",{children:"cool"})," ",w.jsx("span",{children:"state"})]})]});return t==="loading"?w.jsxs("div",{className:"list-items","data-testid":"loading",children:[i,i,i,i,i,i]},"loading"):e.length===0?w.jsx("div",{className:"list-items","data-testid":"empty",children:w.jsxs("div",{className:"wrapper-message",children:[w.jsx("span",{className:"icon-check"}),w.jsx("p",{className:"title-message",children:"You have no tasks"}),w.jsx("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):w.jsx("div",{className:"list-items","data-testid":"success",children:e.map(o=>w.jsx(kt,{task:o,onPinTask:a=>n(a),onArchiveTask:a=>s(a)},o.id))},"success")}mt.__docgenInfo={description:"",methods:[],displayName:"TaskList"};const K={tasks:[{...F.args.task,id:"1",title:"Task 1"},{...F.args.task,id:"2",title:"Task 2"},{...F.args.task,id:"3",title:"Task 3"},{...F.args.task,id:"4",title:"Task 4"},{...F.args.task,id:"5",title:"Task 5"},{...F.args.task,id:"6",title:"Task 6"}],status:"idle",error:null},oe=({taskboxState:e,children:t})=>w.jsx(Ut,{store:dt({reducer:{taskbox:pt({name:"taskbox",initialState:e,reducers:{updateTaskState:(r,n)=>{const{id:s,newTaskState:i}=n.payload,o=r.tasks.findIndex(a=>a.id===s);o>=0&&(r.tasks[o].state=i)}}}).reducer}}),children:t}),Br={component:mt,title:"TaskList",decorators:[e=>w.jsx("div",{style:{margin:"3rem"},children:e()})],tags:["autodocs"],excludeStories:/.*MockedState$/},W={decorators:[e=>w.jsx(oe,{taskboxState:K,children:e()})]},$={decorators:[e=>{const t=[...K.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}];return w.jsx(oe,{taskboxState:{...K,tasks:t},children:e()})}]},U={decorators:[e=>w.jsx(oe,{taskboxState:{...K,status:"loading"},children:e()})]},q={decorators:[e=>w.jsx(oe,{taskboxState:{...K,tasks:[]},children:e()})]};var Fe,Le,Ke;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]
}`,...(Ke=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Ke.source}}};var Be,We,$e;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  decorators: [story => {
    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {
      id: "6",
      title: "Task 6 (pinned)",
      state: "TASK_PINNED"
    }];
    return <Mockstore taskboxState={{
      ...MockedState,
      tasks: pinnedtasks
    }}>
          {story()}
        </Mockstore>;
  }]
}`,...($e=(We=$.parameters)==null?void 0:We.docs)==null?void 0:$e.source}}};var Ue,qe,He;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    status: "loading"
  }}>
        {story()}
      </Mockstore>]
}`,...(He=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Ve,Xe,Ge;q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    tasks: []
  }}>
        {story()}
      </Mockstore>]
}`,...(Ge=(Xe=q.parameters)==null?void 0:Xe.docs)==null?void 0:Ge.source}}};const Wr=["MockedState","Default","WithPinnedTasks","Loading","Empty"],Xr=Object.freeze(Object.defineProperty({__proto__:null,Default:W,Empty:q,Loading:U,MockedState:K,WithPinnedTasks:$,__namedExportsOrder:Wr,default:Br},Symbol.toStringTag,{value:"Module"}));export{K as M,Ut as P,mt as T,Te as a,Xr as b,de as f,Vr as s,Vt as u};
