var kt=Array.isArray,Nt=Array.from,Ct=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Zn=Object.getOwnPropertyDescriptors,bt=Object.prototype,Ft=Array.prototype,zn=Object.getPrototypeOf;const Pt=()=>{};function qt(n){return n()}function Wn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,H=8,en=16,g=32,z=64,J=128,D=256,G=512,h=1024,x=2048,b=4096,C=8192,F=16384,Xn=32768,yn=65536,Lt=1<<17,Jn=1<<19,wn=1<<20,vn=Symbol("$state"),Mt=Symbol("legacy props"),Yt=Symbol("");function Tn(n){return n===this.v}function Qn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function mn(n){return!Qn(n,this.v)}function nt(n){throw new Error("effect_in_teardown")}function tt(){throw new Error("effect_in_unowned_derived")}function rt(n){throw new Error("effect_orphan")}function et(){throw new Error("effect_update_depth_exceeded")}function jt(){throw new Error("hydration_failed")}function Ht(n){throw new Error("props_invalid_value")}function Bt(){throw new Error("state_descriptors_fixed")}function Ut(){throw new Error("state_prototype_fixed")}function lt(){throw new Error("state_unsafe_local_read")}function st(){throw new Error("state_unsafe_mutation")}let W=!1;function Vt(){W=!0}function ln(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function Gt(n){return gn(ln(n))}function at(n,t=!1){var e;const r=ln(n);return t||(r.equals=mn),W&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function Kt(n,t=!1){return gn(at(n,t))}function gn(n){return o!==null&&o.f&y&&(m===null?Tt([n]):m.push(n)),n}function ut(n,t){return o!==null&&on()&&o.f&(y|en)&&(m===null||!m.includes(n))&&st(),ot(n,t)}function ot(n,t){return n.equals(t)||(n.v=t,n.version=Bn(),An(n,x),on()&&u!==null&&u.f&h&&!(u.f&g)&&(v!==null&&v.includes(n)?(T(u,x),X(u)):A===null?mt([n]):A.push(n))),t}function An(n,t){var r=n.reactions;if(r!==null)for(var e=on(),l=r.length,s=0;s<l;s++){var a=r[s],f=a.f;f&x||!e&&a===u||(T(a,t),f&(h|D)&&(f&y?An(a,b):X(a)))}}const $t=1,Zt=2,zt=16,Wt=1,Xt=2,Jt=4,Qt=8,nr=16,tr=1,rr=2,it="[",ft="[!",_t="]",xn={},er=Symbol();function Rn(n){console.warn("hydration_mismatch")}let S=!1;function lr(n){S=n}let w;function M(n){if(n===null)throw Rn(),xn;return w=n}function sr(){return M(O(w))}function ar(n){if(S){if(O(w)!==null)throw Rn(),xn;w=n}}function ur(n=1){if(S){for(var t=n,r=w;t--;)r=O(r);w=r}}function or(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===_t){if(n===0)return t;n-=1}else(r===it||r===ft)&&(n+=1)}var e=O(t);t.remove(),t=e}}var pn,Sn,Dn;function ir(){if(pn===void 0){pn=window;var n=Element.prototype,t=Node.prototype;Sn=cn(t,"firstChild").get,Dn=cn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Q(n=""){return document.createTextNode(n)}function nn(n){return Sn.call(n)}function O(n){return Dn.call(n)}function fr(n,t){if(!S)return nn(n);var r=nn(w);if(r===null)r=w.appendChild(Q());else if(t&&r.nodeType!==3){var e=Q();return r==null||r.before(e),M(e),e}return M(r),r}function _r(n,t){if(!S){var r=nn(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function cr(n,t=1,r=!1){let e=S?w:n;for(var l;t--;)l=e,e=O(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=Q();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function vr(n){n.textContent=""}function ct(n){var t=y|x;u===null?t|=D:u.f|=wn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function pr(n){const t=ct(n);return t.equals=mn,t}function On(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?sn(e):q(e)}}}function vt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function In(n){var t,r=u;Z(vt(n));try{On(n),t=Un(n)}finally{Z(r)}return t}function kn(n){var t=In(n),r=(I||n.f&D)&&n.deps!==null?b:h;T(n,r),n.equals(t)||(n.v=t,n.version=Bn())}function sn(n){On(n),j(n,0),T(n,F),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Nn(n){u===null&&o===null&&rt(),o!==null&&o.f&D&&tt(),un&&nt()}function pt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var l=(n&z)!==0,s=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=k;try{hn(!0),B(a),a.f|=Xn}catch(_){throw q(a),_}finally{hn(f)}}else t!==null&&X(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&wn)===0;if(!p&&!l&&e&&(s!==null&&pt(a,s),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function hr(n){const t=P(H,null,!1);return T(t,h),t.teardown=n,t}function dr(n){Nn();var t=u!==null&&(u.f&g)!==0&&i!==null&&!i.m;if(t){var r=i;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Cn(n);return e}}function Er(n){return Nn(),an(n)}function yr(n){const t=P(z,n,!0);return()=>{q(t)}}function Cn(n){return P(En,n,!1)}function wr(n,t){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=an(()=>{n(),!e.ran&&(e.ran=!0,ut(r.l.r2,!0),Ot(t))})}function Tr(){var n=i;an(()=>{if(Dt(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&h&&T(r,b),L(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function an(n){return P(H,n,!0)}function mr(n){return ht(n)}function ht(n,t=0){return P(H|en|t,n,!0)}function gr(n,t=!0){return P(H|g,n,!0,t)}function bn(n){var t=n.teardown;if(t!==null){const r=un,e=o;dn(!0),$(null);try{t.call(null)}finally{dn(r),$(e)}}}function Fn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function Pn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;q(r,t),r=e}}function dt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&g||q(t),t=r}}function q(n,t=!0){var r=!1;if((t||n.f&Jn)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var s=e===l?null:O(e);e.remove(),e=s}r=!0}Pn(n,t&&!r),Fn(n),j(n,0),T(n,F);var a=n.transitions;if(a!==null)for(const p of a)p.stop();bn(n);var f=n.parent;f!==null&&f.first!==null&&qn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function qn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Ar(n,t){var r=[];Ln(n,r,!0),Et(r,()=>{q(n),t&&t()})}function Et(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function Ln(n,t,r){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var l=e.next,s=(e.f&yn)!==0||(e.f&g)!==0;Ln(e,t,s?r:!1),e=l}}}function xr(n){Mn(n,!0)}function Mn(n,t){if(n.f&C){L(n)&&B(n),n.f^=C;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&yn)!==0||(r.f&g)!==0;Mn(r,l?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let K=!1,tn=[];function Yn(){K=!1;const n=tn.slice();tn=[],Wn(n)}function Rr(n){K||(K=!0,queueMicrotask(Yn)),tn.push(n)}function yt(){K&&Yn()}const jn=0,wt=1;let U=!1,V=jn,Y=!1,k=!1,un=!1;function hn(n){k=n}function dn(n){un=n}let R=[],N=0;let o=null;function $(n){o=n}let u=null;function Z(n){u=n}let m=null;function Tt(n){m=n}let v=null,E=0,A=null;function mt(n){A=n}let Hn=0,I=!1,i=null;function Bn(){return++Hn}function on(){return!W||i!==null&&i.l===null}function L(n){var a,f;var t=n.f;if(t&x)return!0;if(t&b){var r=n.deps,e=(t&D)!==0;if(r!==null){var l;if(t&G){for(l=0;l<r.length;l++)((a=r[l]).reactions??(a.reactions=[])).push(n);n.f^=G}for(l=0;l<r.length;l++){var s=r[l];if(L(s)&&kn(s),e&&u!==null&&!I&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||T(n,h)}return!1}function gt(n,t){for(var r=t;r!==null;){if(r.f&J)try{r.fn(n);return}catch{r.f^=J}r=r.parent}throw U=!1,n}function At(n){return(n.f&F)===0&&(n.parent===null||(n.parent.f&J)===0)}function fn(n,t,r,e){if(U){if(r===null&&(U=!1),At(t))throw n;return}r!==null&&(U=!0);{gt(n,t);return}}function Un(n){var _n;var t=v,r=E,e=A,l=o,s=I,a=m,f=i,p=n.f;v=null,E=0,A=null,o=p&(g|z)?null:n,I=!k&&(p&D)!==0,m=null,i=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(j(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!I)for(c=E;c<_.length;c++)((_n=_[c]).reactions??(_n.reactions=[])).push(n)}else _!==null&&E<_.length&&(j(n,E),_.length=E);return d}finally{v=t,E=r,A=e,o=l,I=s,m=a,i=f}}function xt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(T(t,b),t.f&(D|G)||(t.f^=G),j(t,0))}function j(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)xt(n,r[e])}function B(n){var t=n.f;if(!(t&F)){T(n,h);var r=u,e=i;u=n;try{t&en?dt(n):Pn(n),Fn(n),bn(n);var l=Un(n);n.teardown=typeof l=="function"?l:null,n.version=Hn}catch(s){fn(s,n,r,e||n.ctx)}finally{u=r}}}function Vn(){N>1e3&&(N=0,et()),N++}function Gn(n){var t=n.length;if(t!==0){Vn();var r=k;k=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&h||(l.f^=h);var s=[];Kn(l,s),Rt(s)}}finally{k=r}}}function Rt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(F|C)))try{L(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qn(e):e.fn=null))}catch(l){fn(l,e,null,e.ctx)}}}function St(){if(Y=!1,N>1001)return;const n=R;R=[],Gn(n),Y||(N=0)}function X(n){V===jn&&(Y||(Y=!0,queueMicrotask(St)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|g)){if(!(r&h))return;t.f^=h}}R.push(t)}function Kn(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,s=(l&g)!==0,a=s&&(l&h)!==0,f=r.next;if(!a&&!(l&C))if(l&H){if(s)r.f^=h;else try{L(r)&&B(r)}catch(c){fn(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&En&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Kn(p,t)}function $n(n){var t=V,r=R;try{Vn();const l=[];V=wt,R=l,Y=!1,Gn(r);var e=n==null?void 0:n();return yt(),(R.length>0||l.length>0)&&$n(),N=0,e}finally{V=t,R=r}}async function Sr(){await Promise.resolve(),$n()}function Dt(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&F){var e=In(n);return sn(n),e}if(o!==null){m!==null&&m.includes(n)&&lt();var l=o.deps;v===null&&l!==null&&l[E]===n?E++:v===null?v=[n]:v.push(n),A!==null&&u!==null&&u.f&h&&!(u.f&g)&&A.includes(n)&&(T(u,x),X(u))}else if(r&&n.deps===null)for(var s=n,a=s.parent,f=s;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(s=n,L(s)&&kn(s)),n.v}function Ot(n){const t=o;try{return o=null,n()}finally{o=t}}const It=~(x|b|h);function T(n,t){n.f=n.f&It|t}function Dr(n,t=!1,r){i={p:i,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(i.l={s:null,u:null,r1:[],r2:ln(!1)})}function Or(n){const t=i;if(t!==null){const a=t.e;if(a!==null){var r=u,e=o;t.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Z(s.effect),$(s.reaction),Cn(s.fn)}}finally{Z(r),$(e)}}i=t.p,t.m=!0}return{}}function Ir(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(vn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&vn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(n)}catch{}}}}}export{Wt as $,Ut as A,zn as B,kt as C,ht as D,xr as E,gr as F,Ar as G,yn as H,ft as I,or as J,M as K,lr as L,w as M,Ht as N,Lt as O,g as P,Z as Q,z as R,vn as S,W as T,er as U,Xt as V,Qt as W,Mt as X,pr as Y,Jt as Z,mn as _,sr as a,nr as a0,at as a1,Q as a2,nn as a3,tr as a4,rr as a5,Nt as a6,C as a7,ot as a8,Ln as a9,Cn as aA,an as aB,$n as aC,Sr as aD,Gt as aE,Qn as aF,vr as aa,Et as ab,q as ac,_t as ad,o as ae,Zt as af,$t as ag,zt as ah,O as ai,Yt as aj,Zn as ak,wr as al,Tr as am,Kt as an,ur as ao,$ as ap,hr as aq,Rr as ar,Ct as as,ir as at,it as au,xn as av,Rn as aw,jt as ax,yr as ay,Pt as az,dr as b,fr as c,i as d,Vt as e,Ot as f,Wn as g,S as h,Dt as i,qt as j,Ir as k,ct as l,_r as m,Or as n,bt as o,Dr as p,Ft as q,ar as r,cr as s,mr as t,Er as u,ln as v,Bt as w,ut as x,cn as y,u as z};
