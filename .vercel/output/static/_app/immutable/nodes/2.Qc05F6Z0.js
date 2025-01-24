import{s as H,k as Z,e as $,n as O,r as x,c as z,b as ee,u as te,g as se,d as ne}from"../chunks/scheduler.6wlBD6-3.js";import{S as J,i as K,e as w,s as L,t as Q,c as b,a as A,d,f as N,b as R,g,h as S,j as h,B as P,k as U,C as le,D as V,x as ae,y as oe,z as ie,m as B,n as G,A as re}from"../chunks/index.D3blekvI.js";import{l as ue,t as ce,c as fe}from"../chunks/index.DnOrKzsY.js";import{p as X}from"../chunks/stores.Bc-C2kJt.js";import{g as me}from"../chunks/entry.B98-u_uj.js";const _e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function M(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}const{window:Y}=_e;function W(s,t,n){const l=s.slice();return l[12]=t[n],l}function F(s){let t,n=s[3](`lang.${s[12]}`)+"",l,i,o;return{c(){t=w("option"),l=Q(n),this.h()},l(e){t=b(e,"OPTION",{});var a=A(t);l=R(a,n),a.forEach(d),this.h()},h(){t.__value=i="/"+s[12]+s[1],V(t,t.__value),t.selected=o=s[12]===s[2]},m(e,a){S(e,t,a),h(t,l)},p(e,a){a&24&&n!==(n=e[3](`lang.${e[12]}`)+"")&&U(l,n),a&18&&i!==(i="/"+e[12]+e[1])&&(t.__value=i,V(t,t.__value)),a&20&&o!==(o=e[12]===e[2])&&(t.selected=o)},d(e){e&&d(t)}}}function ge(s){let t,n,l,i,o,e,a,m,p=s[3]("menu.shorttitle")+"",E,j,f,v,C,k;Z(s[7]);let y=M(s[4]),c=[];for(let u=0;u<y.length;u+=1)c[u]=F(W(s,y,u));return{c(){t=w("nav"),n=w("div"),l=w("a"),i=w("img"),a=L(),m=w("a"),E=Q(p),f=L(),v=w("select");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){t=b(u,"NAV",{class:!0});var _=A(t);n=b(_,"DIV",{class:!0});var r=A(n);l=b(r,"A",{href:!0,class:!0});var T=A(l);i=b(T,"IMG",{src:!0,class:!0,alt:!0}),T.forEach(d),a=N(r),m=b(r,"A",{href:!0,class:!0});var q=A(m);E=R(q,p),q.forEach(d),r.forEach(d),f=N(_),v=b(_,"SELECT",{class:!0});var D=A(v);for(let I=0;I<c.length;I+=1)c[I].l(D);D.forEach(d),_.forEach(d),this.h()},h(){$(i.src,o="/illustrations/logo.png")||g(i,"src",o),g(i,"class","me-3 h-6 sm:h-9 logo svelte-wyg3j4"),g(i,"alt","Project Logo"),g(l,"href",e=`../${s[2]}`),g(l,"class","svelte-wyg3j4"),g(m,"href",j=`../${s[2]}`),g(m,"class","name py-2 svelte-wyg3j4"),g(n,"class","flex"),g(v,"class","rounded-md bg-pink-600 h-10 text-white text-xl font-bold px-3 py-2 text-left shadow-sm ring-1 ring-inset ring-pink-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:leading-6"),g(t,"class","flex items-center svelte-wyg3j4")},m(u,_){S(u,t,_),h(t,n),h(n,l),h(l,i),h(n,a),h(n,m),h(m,E),h(t,f),h(t,v);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(v,null);C||(k=[P(Y,"resize",s[7]),P(v,"change",s[8])],C=!0)},p(u,[_]){if(_&4&&e!==(e=`../${u[2]}`)&&g(l,"href",e),_&8&&p!==(p=u[3]("menu.shorttitle")+"")&&U(E,p),_&4&&j!==(j=`../${u[2]}`)&&g(m,"href",j),_&30){y=M(u[4]);let r;for(r=0;r<y.length;r+=1){const T=W(u,y,r);c[r]?c[r].p(T,_):(c[r]=F(T),c[r].c(),c[r].m(v,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=y.length}},i:O,o:O,d(u){u&&d(t),le(c,u),C=!1,x(k)}}}function he(s,t,n){let l,i,o,e,a;z(s,X,f=>n(6,i=f)),z(s,ue,f=>n(2,o=f)),z(s,ce,f=>n(3,e=f)),z(s,fe,f=>n(4,a=f));let{segment:m}=t,p;function E(){n(0,p=Y.innerWidth)}const j=({target:f})=>me(f.value);return s.$$set=f=>{"segment"in f&&n(5,m=f.segment)},s.$$.update=()=>{s.$$.dirty&64&&n(1,{route:l}=i.data,l)},[p,l,o,e,a,m,i,E,j]}class de extends J{constructor(t){super(),K(this,t,he,ge,H,{segment:5})}}function pe(s){let t,n,l;t=new de({props:{segment:s[0]}});const i=s[3].default,o=ee(i,s,s[2],null);return{c(){ae(t.$$.fragment),n=L(),o&&o.c()},l(e){oe(t.$$.fragment,e),n=N(e),o&&o.l(e)},m(e,a){ie(t,e,a),S(e,n,a),o&&o.m(e,a),l=!0},p(e,[a]){const m={};a&1&&(m.segment=e[0]),t.$set(m),o&&o.p&&(!l||a&4)&&te(o,i,e,e[2],l?ne(i,e[2],a,null):se(e[2]),null)},i(e){l||(B(t.$$.fragment,e),B(o,e),l=!0)},o(e){G(t.$$.fragment,e),G(o,e),l=!1},d(e){e&&d(n),re(t,e),o&&o.d(e)}}}function ve(s,t,n){let l;z(s,X,a=>n(1,l=a));let{$$slots:i={},$$scope:o}=t,{segment:e}=t;return s.$$set=a=>{"segment"in a&&n(0,e=a.segment),"$$scope"in a&&n(2,o=a.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&l.data},[e,l,o,i]}class Ae extends J{constructor(t){super(),K(this,t,ve,pe,H,{segment:0})}}export{Ae as component};
