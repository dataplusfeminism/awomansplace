import{_ as p}from"./index.D3blekvI.js";import{w as P,d as T}from"./index.Cmv0BlU7.js";import{j as f}from"./scheduler.6wlBD6-3.js";var de=Object.defineProperty,fe=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?de(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))Y.call(r,t)&&z(e,t,r[t]);if(I)for(var t of I(r))Z.call(r,t)&&z(e,t,r[t]);return e},_=(e,r)=>fe(e,pe(r)),E=(e,r)=>{var t={};for(var a in e)Y.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&I)for(var a of I(e))r.indexOf(a)<0&&Z.call(e,a)&&(t[a]=e[a]);return t},F=["error","warn","debug"],ee=({logger:e=console,level:r=F[1],prefix:t="[i18n]: "})=>F.reduce((a,l,o)=>_(c({},a),{[l]:i=>F.indexOf(r)>=o&&e[l](`${t}${i}`)}),{}),d=ee({}),he=e=>{d=e},q=e=>{var r=e,{parser:t,key:a,params:l,translations:o,locale:i,fallbackLocale:s}=r,u=E(r,["parser","key","params","translations","locale","fallbackLocale"]);if(!a)return d.warn(`No translation key provided ('${i}' locale). Skipping translation...`),"";if(!i)return d.warn(`No locale provided for '${a}' key. Skipping translation...`),"";let n=(o[i]||{})[a];if(s&&n===void 0&&(d.debug(`No translation provided for '${a}' key in locale '${i}'. Trying fallback '${s}'`),n=(o[s]||{})[a]),n===void 0){if(d.debug(`No translation provided for '${a}' key in fallback '${s}'.`),u.hasOwnProperty("fallbackValue"))return u.fallbackValue;d.warn(`No translation nor fallback found for '${a}' .`)}return t.parse(n,l,i,a)},g=(...e)=>e.length?e.filter(r=>!!r).map(r=>{let t=`${r}`.toLowerCase();try{let[a]=Intl.Collator.supportedLocalesOf(r);if(!a)throw new Error;t=a}catch{d.warn(`'${r}' locale is non-standard.`)}return t}):[],A=(e,r,t)=>{if(r&&Array.isArray(e))return e.map(a=>A(a,r));if(e&&typeof e=="object"){let a=Object.keys(e).reduce((l,o)=>{let i=e[o],s=t?`${t}.${o}`:`${o}`;return i&&typeof i=="object"&&!(r&&Array.isArray(i))?c(c({},l),A(i,r,s)):_(c({},l),{[s]:A(i,r)})},{});return Object.keys(a).length?a:null}return e},me=e=>e.reduce((r,{key:t,data:a,locale:l})=>{if(!a)return r;let[o]=g(l),i=_(c({},r[o]||{}),{[t]:a});return _(c({},r),{[o]:i})},{}),ye=async e=>{try{let r=await Promise.all(e.map(t=>{var a=t,{loader:l}=a,o=E(a,["loader"]);return new Promise(async i=>{let s;try{s=await l()}catch(u){d.error(`Failed to load translation. Verify your '${o.locale}' > '${o.key}' Loader.`),d.error(u)}i(_(c({loader:l},o),{data:s}))})}));return me(r)}catch(r){d.error(r)}return{}},_e=e=>r=>{try{if(typeof r=="string")return r===e;if(typeof r=="object")return r.test(e)}catch{d.error("Invalid route config!")}return!1},B=(e,r)=>{let t=!0;try{t=Object.keys(e).filter(a=>e[a]!==void 0).every(a=>e[a]===r[a])}catch{}return t},G=1e3*60*60*24,ve=class{constructor(r){this.cachedAt=0,this.loadedKeys={},this.currentRoute=P(),this.config=P(),this.isLoading=P(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(t,a)=>{let{fallbackLocale:l}=f(this.config),o=Array.from(this.promises).filter(i=>{let s=B({locale:g(t)[0],route:a},i);return l&&(s=s||B({locale:g(l)[0],route:a},i)),s}).map(({promise:i})=>i);return Promise.all(o)},get:()=>f(this.isLoading)},this.privateRawTranslations=P({}),this.rawTranslations={subscribe:this.privateRawTranslations.subscribe,get:()=>f(this.rawTranslations)},this.privateTranslations=P({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>f(this.translations)},this.locales=_(c({},T([this.config,this.privateTranslations],([t,a])=>{if(!t)return[];let{loaders:l=[]}=t,o=l.map(({locale:s})=>s),i=Object.keys(a).map(s=>s);return Array.from(new Set([...g(...o),...g(...i)]))},[])),{get:()=>f(this.locales)}),this.internalLocale=P(),this.loaderTrigger=T([this.internalLocale,this.currentRoute],([t,a],l)=>{var o,i;t!==void 0&&a!==void 0&&!(t===((o=f(this.loaderTrigger))==null?void 0:o[0])&&a===((i=f(this.loaderTrigger))==null?void 0:i[1]))&&(d.debug("Triggering translation load..."),l([t,a]))},[]),this.localeHelper=P(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>f(this.locale)},this.initialized=T([this.locale,this.currentRoute,this.privateTranslations],([t,a,l],o)=>{f(this.initialized)||o(t!==void 0&&a!==void 0&&!!Object.keys(l).length)}),this.translation=T([this.privateTranslations,this.locale,this.isLoading],([t,a,l],o)=>{let i=t[a];i&&Object.keys(i).length&&!l&&o(i)},{}),this.t=_(c({},T([this.config,this.translation],t=>{var[a]=t,l=a,{parser:o,fallbackLocale:i}=l,s=E(l,["parser","fallbackLocale"]);return(u,...n)=>q(c({parser:o,key:u,params:n,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:i},s.hasOwnProperty("fallbackValue")?{fallbackValue:s.fallbackValue}:{}))})),{get:(t,...a)=>f(this.t)(t,...a)}),this.l=_(c({},T([this.config,this.translations],t=>{var[a,...l]=t,o=a,{parser:i,fallbackLocale:s}=o,u=E(o,["parser","fallbackLocale"]),[n]=l;return(h,m,...b)=>q(c({parser:i,key:m,params:b,translations:n,locale:h,fallbackLocale:s},u.hasOwnProperty("fallbackValue")?{fallbackValue:u.fallbackValue}:{}))})),{get:(t,a,...l)=>f(this.l)(t,a,...l)}),this.getLocale=t=>{let{fallbackLocale:a}=f(this.config)||{},l=t||a;if(!l)return;let o=this.locales.get();return o.find(i=>g(l).includes(i))||o.find(i=>g(a).includes(i))},this.setLocale=t=>{if(t&&t!==f(this.internalLocale))return d.debug(`Setting '${t}' locale.`),this.internalLocale.set(t),this.loading.toPromise(t,f(this.currentRoute))},this.setRoute=t=>{if(t!==f(this.currentRoute)){d.debug(`Setting '${t}' route.`),this.currentRoute.set(t);let a=f(this.internalLocale);return this.loading.toPromise(a,t)}},this.loadConfig=async t=>{await this.configLoader(t)},this.getTranslationProps=async(t=this.locale.get(),a=f(this.currentRoute))=>{let l=f(this.config);if(!l||!t)return[];let o=this.translations.get(),{loaders:i,fallbackLocale:s="",cache:u=G}=l||{},n=Number.isNaN(+u)?G:+u;this.cachedAt?Date.now()>n+this.cachedAt&&(d.debug("Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(d.debug("Setting cache timestamp."),this.cachedAt=Date.now());let[h,m]=g(t,s),b=o[h],V=o[m],L=(i||[]).map(y=>{var w=y,{locale:R}=w,v=E(w,["locale"]);return _(c({},v),{locale:g(R)[0]})}).filter(({routes:y})=>!y||(y||[]).some(_e(a))).filter(({key:y,locale:w})=>w===h&&(!b||!(this.loadedKeys[h]||[]).includes(y))||s&&w===m&&(!V||!(this.loadedKeys[m]||[]).includes(y)));if(L.length){this.isLoading.set(!0),d.debug("Fetching translations...");let y=await ye(L);this.isLoading.set(!1);let w=Object.keys(y).reduce((v,O)=>_(c({},v),{[O]:Object.keys(y[O])}),{}),R=L.filter(({key:v,locale:O})=>(w[O]||[]).some(j=>`${j}`.startsWith(v))).reduce((v,{key:O,locale:j})=>_(c({},v),{[j]:[...v[j]||[],O]}),{});return[y,R]}return[]},this.addTranslations=(t,a)=>{if(!t)return;let l=f(this.config),{preprocess:o}=l||{};d.debug("Adding translations...");let i=Object.keys(t||{});this.privateRawTranslations.update(s=>i.reduce((u,n)=>_(c({},u),{[n]:c(c({},u[n]||{}),t[n])}),s)),this.privateTranslations.update(s=>i.reduce((u,n)=>{let h=!0,m=t[n];return typeof o=="function"&&(m=o(m)),(typeof o=="function"||o==="none")&&(h=!1),_(c({},u),{[n]:c(c({},u[n]||{}),h?A(m,o==="preserveArrays"):m)})},s)),i.forEach(s=>{let u=Object.keys(t[s]).map(n=>`${n}`.split(".")[0]);a&&(u=a[s]),this.loadedKeys[s]=Array.from(new Set([...this.loadedKeys[s]||[],...u||[]]))})},this.loader=async([t,a])=>{let l=this.getLocale(t)||void 0;d.debug(`Adding loader promise for '${l}' locale and '${a}' route.`);let o=(async()=>{let i=await this.getTranslationProps(l,a);i.length&&this.addTranslations(...i)})();this.promises.add({locale:l,route:a,promise:o}),o.then(()=>{l&&this.locale.get()!==l&&this.locale.forceSet(l)})},this.loadTranslations=(t,a=f(this.currentRoute)||"")=>{let l=this.getLocale(t);if(l)return this.setRoute(a),this.setLocale(l),this.loading.toPromise(l,a)},this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async t=>{t&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),d.debug("Loader promises have been purged."))}),r&&this.loadConfig(r)}async configLoader(r){if(!r)return d.error("No config provided!");let t=r,{initLocale:a,fallbackLocale:l,translations:o,log:i}=t,s=E(t,["initLocale","fallbackLocale","translations","log"]);i&&he(ee(i)),[a]=g(a),[l]=g(l),d.debug("Setting config."),this.config.set(c({initLocale:a,fallbackLocale:l,translations:o},s)),o&&this.addTranslations(o),a&&await this.loadTranslations(a)}},te=Object.defineProperty,ge=Object.defineProperties,be=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,W=(e,r,t)=>r in e?te(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))ae.call(r,t)&&W(e,t,r[t]);if(x)for(var t of x(r))re.call(r,t)&&W(e,t,r[t]);return e},M=(e,r)=>ge(e,be(r)),$=(e,r)=>{var t={};for(var a in e)ae.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&x)for(var a of x(e))r.indexOf(a)<0&&re.call(e,a)&&(t[a]=e[a]);return t},we=(e,r)=>{for(var t in r)te(e,t,{get:r[t],enumerable:!0})},le={};we(le,{ago:()=>Ve,currency:()=>Re,date:()=>Pe,eq:()=>H,gt:()=>ie,gte:()=>Le,lt:()=>oe,lte:()=>Oe,ne:()=>ke,number:()=>$e});var S=(e,r)=>{let{modifierDefaults:t}=r||{},{[e]:a}=t||{};return a||{}},H=({value:e,options:r=[],defaultValue:t=""})=>(r.find(({key:a})=>`${a}`.toLowerCase()===`${e}`.toLowerCase())||{}).value||t,ke=({value:e,options:r=[],defaultValue:t=""})=>(r.find(({key:a})=>`${a}`.toLowerCase()!==`${e}`.toLowerCase())||{}).value||t,oe=({value:e,options:r=[],defaultValue:t=""})=>(r.sort((a,l)=>+a.key-+l.key).find(({key:a})=>+e<+a)||{}).value||t,ie=({value:e,options:r=[],defaultValue:t=""})=>(r.sort((a,l)=>+l.key-+a.key).find(({key:a})=>+e>+a)||{}).value||t,Oe=({value:e,options:r=[],defaultValue:t=""})=>H({value:e,options:r,defaultValue:oe({value:e,options:r,defaultValue:t})}),Le=({value:e,options:r=[],defaultValue:t=""})=>H({value:e,options:r,defaultValue:ie({value:e,options:r,defaultValue:t})}),$e=({value:e,props:r,defaultValue:t="",locale:a="",parserOptions:l})=>{if(!a)return"";let o=S("number",l),{maximumFractionDigits:i}=o,s=$(o,["maximumFractionDigits"]),u=(r==null?void 0:r.number)||{},{maximumFractionDigits:n=i||2}=u,h=$(u,["maximumFractionDigits"]);return new Intl.NumberFormat(a,k(M(k({},s),{maximumFractionDigits:n}),h)).format(+e||+t)},Pe=({value:e,props:r,defaultValue:t="",locale:a="",parserOptions:l})=>{if(!a)return"";let o=$(S("date",l),[]),i=$((r==null?void 0:r.date)||{},[]);return new Intl.DateTimeFormat(a,k(k({},o),i)).format(+e||+t)},C=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],se=(e="",r="")=>new RegExp(`^${e}s?$`).test(r),Te=e=>C.indexOf(C.find(({key:r})=>se(r,e))),Ee=(e,r)=>C.reduce(([t,a],{key:l,multiplier:o},i)=>{if(se(a,r))return[t,a];if(!a||i===Te(a)+1){let s=Math.round(t/o);if(!a||Math.abs(s)>=1||r!=="auto")return[s,l]}return[t,a]},[e,""]),Ve=({value:e,defaultValue:r="",locale:t="",props:a,parserOptions:l})=>{if(!t)return"";let o=S("ago",l),{format:i,numeric:s}=o,u=$(o,["format","numeric"]),n=(a==null?void 0:a.ago)||{},{format:h=i||"auto",numeric:m=s||"auto"}=n,b=$(n,["format","numeric"]),V=+e||+r,L=Ee(V,h);return new Intl.RelativeTimeFormat(t,k(M(k({},u),{numeric:m}),b)).format(...L)},Re=({value:e,defaultValue:r="",locale:t="",props:a,parserOptions:l})=>{if(!t)return"";let o=S("currency",l),{ratio:i,currency:s}=o,u=$(o,["ratio","currency"]),n=(a==null?void 0:a.currency)||{},{ratio:h=i||1,currency:m=s}=n,b=$(n,["ratio","currency"]);return new Intl.NumberFormat(t,k(M(k({},u),{style:"currency",currency:m}),b)).format(h*(e||r))},je=e=>typeof e=="string"&&/{{(?:(?!{{|}}).)+}}/.test(e),K=e=>typeof e=="string"?e.replace(/\\(?=:|;|{|})/g,""):e,Ae=({value:e,props:r,payload:t,parserOptions:a,locale:l})=>`${e}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,o=>{let i=K(`${o.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),s=t==null?void 0:t[i],[,u=""]=o.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;}])*)(?=\s*(?:;|}}$))/i)||[];u=u||(t==null?void 0:t.default)||"";let[,n=""]=o.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(s===void 0&&n!=="ne")return u;let h=!!n,{customModifiers:m}=a||{},b=k(k({},le),m||{});n=Object.keys(b).includes(n)?n:"eq";let V=b[n],L=(o.match(/[^\s:;{](?:[^;]|\\[;])+[^:;}]/gi)||[]).reduce((y,w,R)=>{if(R>0){let v=K(`${w.match(/(?:(?:\\:)|[^:])+/)}`.trim()),O=`${w.match(/(?:(?:\\:)|[^:])+$/)}`.trimStart();if(v&&v!=="default"&&O)return[...y,{key:v,value:O}]}return y},[]);return!h&&!L.length?s:V({value:s,options:L,props:r,defaultValue:u,locale:l,parserOptions:a})}),ne=({value:e,props:r,payload:t,parserOptions:a,locale:l})=>{if(je(e)){let o=Ae({value:e,payload:t,props:r,parserOptions:a,locale:l});return ne({value:o,payload:t,props:r,parserOptions:a,locale:l})}else return K(e)},De=e=>({parse:(r,[t,a],l,o)=>(t!=null&&t.default&&r===void 0&&(r=t.default),r===void 0&&(r=o),ne({value:r,payload:t,props:a,parserOptions:e,locale:l}))}),Ie=De,xe=Object.defineProperty,Ne=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,U=(e,r,t)=>r in e?xe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Fe=(e,r)=>{for(var t in r||(r={}))ue.call(r,t)&&U(e,t,r[t]);if(N)for(var t of N(r))ce.call(r,t)&&U(e,t,r[t]);return e},Ce=(e,r)=>Ne(e,Se(r)),Ke=(e,r)=>{var t={};for(var a in e)ue.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&N)for(var a of N(e))r.indexOf(a)<0&&ce.call(e,a)&&(t[a]=e[a]);return t},J=e=>{var r=e,{parserOptions:t={}}=r,a=Ke(r,["parserOptions"]);return Ce(Fe({},a),{parser:Ie(t)})},Me=class extends ve{constructor(r){super(r&&J(r)),this.loadConfig=t=>super.configLoader(J(t))}},He=Me;const ze="ENG",qe="HIN",Be="BEN",D={en:ze,hi:qe,bn:Be};console.log("!!!",D);const Ge={translations:{en:{lang:D},hi:{lang:D},bn:{lang:D}},loaders:[{locale:"en",key:"menu",loader:async()=>(await p(async()=>{const{default:e}=await import("./menu.B7aNYBrb.js");return{default:e}},[],import.meta.url)).default},{locale:"en",key:"home",routes:["","/"],loader:async()=>(await p(async()=>{const{default:e}=await import("./home.CruJigtm.js");return{default:e}},[],import.meta.url)).default},{locale:"en",key:"chapter2",routes:["/chapter2"],loader:async()=>(await p(async()=>{const{default:e}=await import("./chapter2.b9O2YSC1.js");return{default:e}},[],import.meta.url)).default},{locale:"en",key:"chapter3",routes:["/chapter3"],loader:async()=>(await p(async()=>{const{default:e}=await import("./chapter3.Vo6M-eh5.js");return{default:e}},[],import.meta.url)).default},{locale:"en",key:"method",routes:["/method"],loader:async()=>(await p(async()=>{const{default:e}=await import("./method.BqHpnh7G.js");return{default:e}},[],import.meta.url)).default},{locale:"hi",key:"menu",loader:async()=>(await p(async()=>{const{default:e}=await import("./menu.D-iUHJP2.js");return{default:e}},[],import.meta.url)).default},{locale:"hi",key:"home",routes:["","/"],loader:async()=>(await p(async()=>{const{default:e}=await import("./home.l4rBwJOW.js");return{default:e}},[],import.meta.url)).default},{locale:"hi",key:"method",routes:["/method"],loader:async()=>(await p(async()=>{const{default:e}=await import("./method.WB6kqv2x.js");return{default:e}},[],import.meta.url)).default},{locale:"hi",key:"chapter2",routes:["/chapter2"],loader:async()=>(await p(async()=>{const{default:e}=await import("./chapter2.CnpsiENk.js");return{default:e}},[],import.meta.url)).default},{locale:"hi",key:"chapter3",routes:["/chapter3"],loader:async()=>(await p(async()=>{const{default:e}=await import("./chapter3.DRlGmYno.js");return{default:e}},[],import.meta.url)).default},{locale:"hi",key:"method",routes:["/method"],loader:async()=>(await p(async()=>{const{default:e}=await import("./method.WB6kqv2x.js");return{default:e}},[],import.meta.url)).default},{locale:"bn",key:"menu",loader:async()=>(await p(async()=>{const{default:e}=await import("./menu.wecPc_ST.js");return{default:e}},[],import.meta.url)).default},{locale:"bn",key:"home",routes:["","/"],loader:async()=>(await p(async()=>{const{default:e}=await import("./home.5rUBECx2.js");return{default:e}},[],import.meta.url)).default},{locale:"bn",key:"method",routes:["/method"],loader:async()=>(await p(async()=>{const{default:e}=await import("./method.Ca2q6A8p.js");return{default:e}},[],import.meta.url)).default},{locale:"bn",key:"chapter2",routes:["/chapter2"],loader:async()=>(await p(async()=>{const{default:e}=await import("./chapter2.BJhsbhuF.js");return{default:e}},[],import.meta.url)).default},{locale:"bn",key:"chapter3",routes:["/chapter3"],loader:async()=>(await p(async()=>{const{default:e}=await import("./chapter3._hJGtyba.js");return{default:e}},[],import.meta.url)).default},{locale:"bn",key:"method",routes:["/method"],loader:async()=>(await p(async()=>{const{default:e}=await import("./method.Ca2q6A8p.js");return{default:e}},[],import.meta.url)).default}]},{t:Ye,locale:Ze,locales:et,loading:Q,addTranslations:tt,loadTranslations:at,translations:X,setRoute:rt,setLocale:lt}=new He(Ge);Q.subscribe(async e=>{e&&(console.log("Loading translations..."),await Q.toPromise(),console.log("Updated translations",X.get()),console.log(X))});export{tt as a,lt as b,et as c,Ze as l,rt as s,Ye as t};
