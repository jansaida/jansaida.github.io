var SS=Object.defineProperty;var TS=(r,n,t)=>n in r?SS(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var ye=(r,n,t)=>TS(r,typeof n!="symbol"?n+"":n,t);import{s as ke,q as sn,l as Te,d as J,I as xc,t as xo,j as No,o as Lo,n as nn,a2 as _i,E as tt,v as Dl,e as Oe,f as Ue,g as ze,ae as Ca,F as rt,G as it,H as at,k as _n,m as Ct,b as Bo,c as Mo,ah as IS,ai as vS,ak as Nc,K as DS}from"./scheduler.6x_t8-M_.js";import{S as Ne,i as Le,t as ee,g as Et,b as se,e as kt,c as Wt,a as gr,m as Ht,d as Yt}from"./index.DNIXW-5M.js";import{b as wS}from"./control.C5y5IVvd.js";function lt(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function wl(r,n){const t={},a={},s={$$scope:1};let o=r.length;for(;o--;){const d=r[o],l=n[o];if(l){for(const p in d)p in l||(a[p]=1);for(const p in l)s[p]||(t[p]=l[p],s[p]=1);r[o]=l}else for(const p in d)s[p]=1}for(const d in a)d in t||(t[d]=void 0);return t}function Tw(r){return typeof r=="object"&&r!==null?r:{}}function Lc(r){let n,t,a;var s=r[1][r[0].type];function o(d,l){return{props:{token:d[0],options:d[2],renderers:d[1],$$slots:{default:[ES]},$$scope:{ctx:d}}}}return s&&(n=xc(s,o(r))),{c(){n&&Wt(n.$$.fragment),t=sn()},l(d){n&&gr(n.$$.fragment,d),t=sn()},m(d,l){n&&Ht(n,d,l),Te(d,t,l),a=!0},p(d,l){if(l&3&&s!==(s=d[1][d[0].type])){if(n){Et();const p=n;se(p.$$.fragment,1,0,()=>{Yt(p,1)}),kt()}s?(n=xc(s,o(d)),Wt(n.$$.fragment),ee(n.$$.fragment,1),Ht(n,t.parentNode,t)):n=null}else if(s){const p={};l&1&&(p.token=d[0]),l&4&&(p.options=d[2]),l&2&&(p.renderers=d[1]),l&15&&(p.$$scope={dirty:l,ctx:d}),n.$set(p)}},i(d){a||(n&&ee(n.$$.fragment,d),a=!0)},o(d){n&&se(n.$$.fragment,d),a=!1},d(d){d&&J(t),n&&Yt(n,d)}}}function AS(r){let n=r[0].raw+"",t;return{c(){t=xo(n)},l(a){t=No(a,n)},m(a,s){Te(a,t,s)},p(a,s){s&1&&n!==(n=a[0].raw+"")&&Lo(t,n)},i:nn,o:nn,d(a){a&&J(t)}}}function CS(r){let n,t;return n=new Ba({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){Wt(n.$$.fragment)},l(a){gr(n.$$.fragment,a)},m(a,s){Ht(n,a,s),t=!0},p(a,s){const o={};s&1&&(o.tokens=a[0].tokens),s&2&&(o.renderers=a[1]),s&4&&(o.options=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){se(n.$$.fragment,a),t=!1},d(a){Yt(n,a)}}}function ES(r){let n,t,a,s;const o=[CS,AS],d=[];function l(p,m){return"tokens"in p[0]&&p[0].tokens?0:1}return n=l(r),t=d[n]=o[n](r),{c(){t.c(),a=sn()},l(p){t.l(p),a=sn()},m(p,m){d[n].m(p,m),Te(p,a,m),s=!0},p(p,m){let _=n;n=l(p),n===_?d[n].p(p,m):(Et(),se(d[_],1,1,()=>{d[_]=null}),kt(),t=d[n],t?t.p(p,m):(t=d[n]=o[n](p),t.c()),ee(t,1),t.m(a.parentNode,a))},i(p){s||(ee(t),s=!0)},o(p){se(t),s=!1},d(p){p&&J(a),d[n].d(p)}}}function kS(r){let n,t,a=r[1][r[0].type]&&Lc(r);return{c(){a&&a.c(),n=sn()},l(s){a&&a.l(s),n=sn()},m(s,o){a&&a.m(s,o),Te(s,n,o),t=!0},p(s,[o]){s[1][s[0].type]?a?(a.p(s,o),o&3&&ee(a,1)):(a=Lc(s),a.c(),ee(a,1),a.m(n.parentNode,n)):a&&(Et(),se(a,1,1,()=>{a=null}),kt())},i(s){t||(ee(a),t=!0)},o(s){se(a),t=!1},d(s){s&&J(n),a&&a.d(s)}}}function FS(r,n,t){let{token:a}=n,{renderers:s}=n,{options:o}=n;return r.$$set=d=>{"token"in d&&t(0,a=d.token),"renderers"in d&&t(1,s=d.renderers),"options"in d&&t(2,o=d.options)},[a,s,o]}class Al extends Ne{constructor(n){super(),Le(this,n,FS,kS,ke,{token:0,renderers:1,options:2})}}function Bc(r,n,t){const a=r.slice();return a[3]=n[t],a}function Mc(r){let n,t,a=lt(r[0]),s=[];for(let d=0;d<a.length;d+=1)s[d]=qc(Bc(r,a,d));const o=d=>se(s[d],1,1,()=>{s[d]=null});return{c(){for(let d=0;d<s.length;d+=1)s[d].c();n=sn()},l(d){for(let l=0;l<s.length;l+=1)s[l].l(d);n=sn()},m(d,l){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(d,l);Te(d,n,l),t=!0},p(d,l){if(l&7){a=lt(d[0]);let p;for(p=0;p<a.length;p+=1){const m=Bc(d,a,p);s[p]?(s[p].p(m,l),ee(s[p],1)):(s[p]=qc(m),s[p].c(),ee(s[p],1),s[p].m(n.parentNode,n))}for(Et(),p=a.length;p<s.length;p+=1)o(p);kt()}},i(d){if(!t){for(let l=0;l<a.length;l+=1)ee(s[l]);t=!0}},o(d){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)se(s[l]);t=!1},d(d){d&&J(n),_i(s,d)}}}function qc(r){let n,t;return n=new Al({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){Wt(n.$$.fragment)},l(a){gr(n.$$.fragment,a)},m(a,s){Ht(n,a,s),t=!0},p(a,s){const o={};s&1&&(o.token=a[3]),s&2&&(o.renderers=a[1]),s&4&&(o.options=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){se(n.$$.fragment,a),t=!1},d(a){Yt(n,a)}}}function PS(r){let n,t,a=r[0]&&Mc(r);return{c(){a&&a.c(),n=sn()},l(s){a&&a.l(s),n=sn()},m(s,o){a&&a.m(s,o),Te(s,n,o),t=!0},p(s,[o]){s[0]?a?(a.p(s,o),o&1&&ee(a,1)):(a=Mc(s),a.c(),ee(a,1),a.m(n.parentNode,n)):a&&(Et(),se(a,1,1,()=>{a=null}),kt())},i(s){t||(ee(a),t=!0)},o(s){se(a),t=!1},d(s){s&&J(n),a&&a.d(s)}}}function OS(r,n,t){let{tokens:a}=n,{renderers:s}=n,{options:o}=n;return r.$$set=d=>{"tokens"in d&&t(0,a=d.tokens),"renderers"in d&&t(1,s=d.renderers),"options"in d&&t(2,o=d.options)},[a,s,o]}class Ba extends Ne{constructor(n){super(),Le(this,n,OS,PS,ke,{tokens:0,renderers:1,options:2})}}function yi(...r){return`/${r.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function bi(r){return r.startsWith("/")||r.startsWith("#")}function Cl(r,n){return n.slug(r).replace(/--+/g,"-")}function _o(r){let n,t;const a=r[5].default,s=tt(a,r,r[4],null);let o=[{id:r[1]}],d={};for(let l=0;l<o.length;l+=1)d=Dl(d,o[l]);return{c(){n=Oe(`h${r[0].depth}`),s&&s.c(),this.h()},l(l){n=Ue(l,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var p=ze(n);s&&s.l(p),p.forEach(J),this.h()},h(){Ca(`h${r[0].depth}`)(n,d)},m(l,p){Te(l,n,p),s&&s.m(n,null),t=!0},p(l,p){s&&s.p&&(!t||p&16)&&rt(s,a,l,l[4],t?at(a,l[4],p,null):it(l[4]),null),Ca(`h${l[0].depth}`)(n,d=wl(o,[(!t||p&2)&&{id:l[1]}]))},i(l){t||(ee(s,l),t=!0)},o(l){se(s,l),t=!1},d(l){l&&J(n),s&&s.d(l)}}}function US(r){let n=`h${r[0].depth}`,t,a,s=`h${r[0].depth}`&&_o(r);return{c(){s&&s.c(),t=sn()},l(o){s&&s.l(o),t=sn()},m(o,d){s&&s.m(o,d),Te(o,t,d),a=!0},p(o,[d]){`h${o[0].depth}`?n?ke(n,`h${o[0].depth}`)?(s.d(1),s=_o(o),n=`h${o[0].depth}`,s.c(),s.m(t.parentNode,t)):s.p(o,d):(s=_o(o),n=`h${o[0].depth}`,s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=`h${o[0].depth}`)},i(o){a||(ee(s,o),a=!0)},o(o){se(s,o),a=!1},d(o){o&&J(t),s&&s.d(o)}}}function RS(r,n,t){let{$$slots:a={},$$scope:s}=n,{token:o}=n,{options:d}=n;const l=void 0;let p;return r.$$set=m=>{"token"in m&&t(0,o=m.token),"options"in m&&t(2,d=m.options),"$$scope"in m&&t(4,s=m.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,p=Cl(o.text,d.slugger))},[o,p,d,l,s,a]}class xS extends Ne{constructor(n){super(),Le(this,n,RS,US,ke,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function NS(r){let n,t;const a=r[4].default,s=tt(a,r,r[3],null);return{c(){n=Oe("blockquote"),s&&s.c()},l(o){n=Ue(o,"BLOCKQUOTE",{});var d=ze(n);s&&s.l(d),d.forEach(J)},m(o,d){Te(o,n,d),s&&s.m(n,null),t=!0},p(o,[d]){s&&s.p&&(!t||d&8)&&rt(s,a,o,o[3],t?at(a,o[3],d,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){se(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function LS(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,d=void 0,l=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class BS extends Ne{constructor(n){super(),Le(this,n,LS,NS,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Gc(r,n,t){const a=r.slice();return a[4]=n[t],a}function $c(r){let n,t;return n=new Al({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){Wt(n.$$.fragment)},l(a){gr(n.$$.fragment,a)},m(a,s){Ht(n,a,s),t=!0},p(a,s){const o={};s&1&&(o.token={...a[4]}),s&2&&(o.options=a[1]),s&4&&(o.renderers=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){se(n.$$.fragment,a),t=!1},d(a){Yt(n,a)}}}function yo(r){let n,t,a,s=lt(r[0].items),o=[];for(let m=0;m<s.length;m+=1)o[m]=$c(Gc(r,s,m));const d=m=>se(o[m],1,1,()=>{o[m]=null});let l=[{start:t=r[0].start||1}],p={};for(let m=0;m<l.length;m+=1)p=Dl(p,l[m]);return{c(){n=Oe(r[3]);for(let m=0;m<o.length;m+=1)o[m].c();this.h()},l(m){n=Ue(m,(r[3]||"null").toUpperCase(),{start:!0});var _=ze(n);for(let b=0;b<o.length;b+=1)o[b].l(_);_.forEach(J),this.h()},h(){Ca(r[3])(n,p)},m(m,_){Te(m,n,_);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(n,null);a=!0},p(m,_){if(_&7){s=lt(m[0].items);let b;for(b=0;b<s.length;b+=1){const O=Gc(m,s,b);o[b]?(o[b].p(O,_),ee(o[b],1)):(o[b]=$c(O),o[b].c(),ee(o[b],1),o[b].m(n,null))}for(Et(),b=s.length;b<o.length;b+=1)d(b);kt()}Ca(m[3])(n,p=wl(l,[(!a||_&1&&t!==(t=m[0].start||1))&&{start:t}]))},i(m){if(!a){for(let _=0;_<s.length;_+=1)ee(o[_]);a=!0}},o(m){o=o.filter(Boolean);for(let _=0;_<o.length;_+=1)se(o[_]);a=!1},d(m){m&&J(n),_i(o,m)}}}function MS(r){let n=r[3],t,a=r[3]&&yo(r);return{c(){a&&a.c(),t=sn()},l(s){a&&a.l(s),t=sn()},m(s,o){a&&a.m(s,o),Te(s,t,o)},p(s,[o]){s[3]?n?ke(n,s[3])?(a.d(1),a=yo(s),n=s[3],a.c(),a.m(t.parentNode,t)):a.p(s,o):(a=yo(s),n=s[3],a.c(),a.m(t.parentNode,t)):n&&(a.d(1),a=null,n=s[3])},i:nn,o(s){se(a,s)},d(s){s&&J(t),a&&a.d(s)}}}function qS(r,n,t){let{token:a}=n,{options:s}=n,{renderers:o}=n,d;return r.$$set=l=>{"token"in l&&t(0,a=l.token),"options"in l&&t(1,s=l.options),"renderers"in l&&t(2,o=l.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,d=a.ordered?"ol":"ul")},[a,s,o,d]}class GS extends Ne{constructor(n){super(),Le(this,n,qS,MS,ke,{token:0,options:1,renderers:2})}}function $S(r){let n,t;const a=r[4].default,s=tt(a,r,r[3],null);return{c(){n=Oe("li"),s&&s.c()},l(o){n=Ue(o,"LI",{});var d=ze(n);s&&s.l(d),d.forEach(J)},m(o,d){Te(o,n,d),s&&s.m(n,null),t=!0},p(o,[d]){s&&s.p&&(!t||d&8)&&rt(s,a,o,o[3],t?at(a,o[3],d,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){se(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function jS(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,d=void 0,l=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class VS extends Ne{constructor(n){super(),Le(this,n,jS,$S,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zS(r){let n;return{c(){n=Oe("br")},l(t){n=Ue(t,"BR",{})},m(t,a){Te(t,n,a)},p:nn,i:nn,o:nn,d(t){t&&J(n)}}}function WS(r,n,t){return[void 0,void 0,void 0]}class HS extends Ne{constructor(n){super(),Le(this,n,WS,zS,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function YS(r){let n,t,a=r[0].text+"",s,o;return{c(){n=Oe("pre"),t=Oe("code"),s=xo(a),this.h()},l(d){n=Ue(d,"PRE",{});var l=ze(n);t=Ue(l,"CODE",{class:!0});var p=ze(t);s=No(p,a),p.forEach(J),l.forEach(J),this.h()},h(){_n(t,"class",o=`lang-${r[0].lang}`)},m(d,l){Te(d,n,l),Ct(n,t),Ct(t,s)},p(d,[l]){l&1&&a!==(a=d[0].text+"")&&Lo(s,a),l&1&&o!==(o=`lang-${d[0].lang}`)&&_n(t,"class",o)},i:nn,o:nn,d(d){d&&J(n)}}}function KS(r,n,t){let{token:a}=n;const s=void 0,o=void 0;return r.$$set=d=>{"token"in d&&t(0,a=d.token)},[a,s,o]}class JS extends Ne{constructor(n){super(),Le(this,n,KS,YS,ke,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function QS(r){let n,t=r[0].raw.slice(1,r[0].raw.length-1)+"",a;return{c(){n=Oe("code"),a=xo(t)},l(s){n=Ue(s,"CODE",{});var o=ze(n);a=No(o,t),o.forEach(J)},m(s,o){Te(s,n,o),Ct(n,a)},p(s,[o]){o&1&&t!==(t=s[0].raw.slice(1,s[0].raw.length-1)+"")&&Lo(a,t)},i:nn,o:nn,d(s){s&&J(n)}}}function XS(r,n,t){let{token:a}=n;const s=void 0,o=void 0;return r.$$set=d=>{"token"in d&&t(0,a=d.token)},[a,s,o]}class ZS extends Ne{constructor(n){super(),Le(this,n,XS,QS,ke,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function jc(r,n,t){const a=r.slice();return a[3]=n[t],a}function Vc(r,n,t){const a=r.slice();return a[6]=n[t],a}function zc(r,n,t){const a=r.slice();return a[9]=n[t],a}function Wc(r){let n,t,a,s;return t=new Ba({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){n=Oe("th"),Wt(t.$$.fragment),a=Bo(),this.h()},l(o){n=Ue(o,"TH",{scope:!0});var d=ze(n);gr(t.$$.fragment,d),a=Mo(d),d.forEach(J),this.h()},h(){_n(n,"scope","col")},m(o,d){Te(o,n,d),Ht(t,n,null),Ct(n,a),s=!0},p(o,d){const l={};d&1&&(l.tokens=o[9].tokens),d&2&&(l.options=o[1]),d&4&&(l.renderers=o[2]),t.$set(l)},i(o){s||(ee(t.$$.fragment,o),s=!0)},o(o){se(t.$$.fragment,o),s=!1},d(o){o&&J(n),Yt(t)}}}function Hc(r){let n,t,a;return t=new Ba({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){n=Oe("td"),Wt(t.$$.fragment)},l(s){n=Ue(s,"TD",{});var o=ze(n);gr(t.$$.fragment,o),o.forEach(J)},m(s,o){Te(s,n,o),Ht(t,n,null),a=!0},p(s,o){const d={};o&1&&(d.tokens=s[6].tokens),o&2&&(d.options=s[1]),o&4&&(d.renderers=s[2]),t.$set(d)},i(s){a||(ee(t.$$.fragment,s),a=!0)},o(s){se(t.$$.fragment,s),a=!1},d(s){s&&J(n),Yt(t)}}}function Yc(r){let n,t,a,s=lt(r[3]),o=[];for(let l=0;l<s.length;l+=1)o[l]=Hc(Vc(r,s,l));const d=l=>se(o[l],1,1,()=>{o[l]=null});return{c(){n=Oe("tr");for(let l=0;l<o.length;l+=1)o[l].c();t=Bo()},l(l){n=Ue(l,"TR",{});var p=ze(n);for(let m=0;m<o.length;m+=1)o[m].l(p);t=Mo(p),p.forEach(J)},m(l,p){Te(l,n,p);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(n,null);Ct(n,t),a=!0},p(l,p){if(p&7){s=lt(l[3]);let m;for(m=0;m<s.length;m+=1){const _=Vc(l,s,m);o[m]?(o[m].p(_,p),ee(o[m],1)):(o[m]=Hc(_),o[m].c(),ee(o[m],1),o[m].m(n,t))}for(Et(),m=s.length;m<o.length;m+=1)d(m);kt()}},i(l){if(!a){for(let p=0;p<s.length;p+=1)ee(o[p]);a=!0}},o(l){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)se(o[p]);a=!1},d(l){l&&J(n),_i(o,l)}}}function eT(r){let n,t,a,s,o,d,l=lt(r[0].header),p=[];for(let C=0;C<l.length;C+=1)p[C]=Wc(zc(r,l,C));const m=C=>se(p[C],1,1,()=>{p[C]=null});let _=lt(r[0].rows),b=[];for(let C=0;C<_.length;C+=1)b[C]=Yc(jc(r,_,C));const O=C=>se(b[C],1,1,()=>{b[C]=null});return{c(){n=Oe("table"),t=Oe("thead"),a=Oe("tr");for(let C=0;C<p.length;C+=1)p[C].c();s=Bo(),o=Oe("tbody");for(let C=0;C<b.length;C+=1)b[C].c()},l(C){n=Ue(C,"TABLE",{});var E=ze(n);t=Ue(E,"THEAD",{});var N=ze(t);a=Ue(N,"TR",{});var z=ze(a);for(let Ae=0;Ae<p.length;Ae+=1)p[Ae].l(z);z.forEach(J),N.forEach(J),s=Mo(E),o=Ue(E,"TBODY",{});var ce=ze(o);for(let Ae=0;Ae<b.length;Ae+=1)b[Ae].l(ce);ce.forEach(J),E.forEach(J)},m(C,E){Te(C,n,E),Ct(n,t),Ct(t,a);for(let N=0;N<p.length;N+=1)p[N]&&p[N].m(a,null);Ct(n,s),Ct(n,o);for(let N=0;N<b.length;N+=1)b[N]&&b[N].m(o,null);d=!0},p(C,[E]){if(E&7){l=lt(C[0].header);let N;for(N=0;N<l.length;N+=1){const z=zc(C,l,N);p[N]?(p[N].p(z,E),ee(p[N],1)):(p[N]=Wc(z),p[N].c(),ee(p[N],1),p[N].m(a,null))}for(Et(),N=l.length;N<p.length;N+=1)m(N);kt()}if(E&7){_=lt(C[0].rows);let N;for(N=0;N<_.length;N+=1){const z=jc(C,_,N);b[N]?(b[N].p(z,E),ee(b[N],1)):(b[N]=Yc(z),b[N].c(),ee(b[N],1),b[N].m(o,null))}for(Et(),N=_.length;N<b.length;N+=1)O(N);kt()}},i(C){if(!d){for(let E=0;E<l.length;E+=1)ee(p[E]);for(let E=0;E<_.length;E+=1)ee(b[E]);d=!0}},o(C){p=p.filter(Boolean);for(let E=0;E<p.length;E+=1)se(p[E]);b=b.filter(Boolean);for(let E=0;E<b.length;E+=1)se(b[E]);d=!1},d(C){C&&J(n),_i(p,C),_i(b,C)}}}function nT(r,n,t){let{token:a}=n,{options:s}=n,{renderers:o}=n;return r.$$set=d=>{"token"in d&&t(0,a=d.token),"options"in d&&t(1,s=d.options),"renderers"in d&&t(2,o=d.renderers)},[a,s,o]}class tT extends Ne{constructor(n){super(),Le(this,n,nT,eT,ke,{token:0,options:1,renderers:2})}}function rT(r){let n,t=r[0].text+"",a;return{c(){n=new IS(!1),a=sn(),this.h()},l(s){n=vS(s,!1),a=sn(),this.h()},h(){n.a=a},m(s,o){n.m(t,s,o),Te(s,a,o)},p(s,[o]){o&1&&t!==(t=s[0].text+"")&&n.p(t)},i:nn,o:nn,d(s){s&&(J(a),n.d())}}}function iT(r,n,t){let{token:a}=n;const s=void 0,o=void 0;return r.$$set=d=>{"token"in d&&t(0,a=d.token)},[a,s,o]}class aT extends Ne{constructor(n){super(),Le(this,n,iT,rT,ke,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sT(r){let n,t;const a=r[4].default,s=tt(a,r,r[3],null);return{c(){n=Oe("p"),s&&s.c()},l(o){n=Ue(o,"P",{});var d=ze(n);s&&s.l(d),d.forEach(J)},m(o,d){Te(o,n,d),s&&s.m(n,null),t=!0},p(o,[d]){s&&s.p&&(!t||d&8)&&rt(s,a,o,o[3],t?at(a,o[3],d,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){se(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function oT(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,d=void 0,l=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class uT extends Ne{constructor(n){super(),Le(this,n,oT,sT,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function dT(r){let n,t,a,s;const o=r[4].default,d=tt(o,r,r[3],null);return{c(){n=Oe("a"),d&&d.c(),this.h()},l(l){n=Ue(l,"A",{href:!0,title:!0});var p=ze(n);d&&d.l(p),p.forEach(J),this.h()},h(){_n(n,"href",t=bi(r[0].href)?yi(r[1].baseUrl,r[0].href):r[0].href),_n(n,"title",a=r[0].title)},m(l,p){Te(l,n,p),d&&d.m(n,null),s=!0},p(l,[p]){d&&d.p&&(!s||p&8)&&rt(d,o,l,l[3],s?at(o,l[3],p,null):it(l[3]),null),(!s||p&3&&t!==(t=bi(l[0].href)?yi(l[1].baseUrl,l[0].href):l[0].href))&&_n(n,"href",t),(!s||p&1&&a!==(a=l[0].title))&&_n(n,"title",a)},i(l){s||(ee(d,l),s=!0)},o(l){se(d,l),s=!1},d(l){l&&J(n),d&&d.d(l)}}}function cT(r,n,t){let{$$slots:a={},$$scope:s}=n,{token:o}=n,{options:d}=n;const l=void 0;return r.$$set=p=>{"token"in p&&t(0,o=p.token),"options"in p&&t(1,d=p.options),"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class lT extends Ne{constructor(n){super(),Le(this,n,cT,dT,ke,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function pT(r){let n;const t=r[4].default,a=tt(t,r,r[3],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),n=!0},p(s,[o]){a&&a.p&&(!n||o&8)&&rt(a,t,s,s[3],n?at(t,s[3],o,null):it(s[3]),null)},i(s){n||(ee(a,s),n=!0)},o(s){se(a,s),n=!1},d(s){a&&a.d(s)}}}function hT(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,d=void 0,l=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class fT extends Ne{constructor(n){super(),Le(this,n,hT,pT,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function gT(r){let n,t;const a=r[4].default,s=tt(a,r,r[3],null);return{c(){n=Oe("dfn"),s&&s.c()},l(o){n=Ue(o,"DFN",{});var d=ze(n);s&&s.l(d),d.forEach(J)},m(o,d){Te(o,n,d),s&&s.m(n,null),t=!0},p(o,[d]){s&&s.p&&(!t||d&8)&&rt(s,a,o,o[3],t?at(a,o[3],d,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){se(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function mT(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,d=void 0,l=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class _T extends Ne{constructor(n){super(),Le(this,n,mT,gT,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function yT(r){let n,t;const a=r[4].default,s=tt(a,r,r[3],null);return{c(){n=Oe("del"),s&&s.c()},l(o){n=Ue(o,"DEL",{});var d=ze(n);s&&s.l(d),d.forEach(J)},m(o,d){Te(o,n,d),s&&s.m(n,null),t=!0},p(o,[d]){s&&s.p&&(!t||d&8)&&rt(s,a,o,o[3],t?at(a,o[3],d,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){se(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function bT(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,d=void 0,l=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class ST extends Ne{constructor(n){super(),Le(this,n,bT,yT,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function TT(r){let n,t;const a=r[4].default,s=tt(a,r,r[3],null);return{c(){n=Oe("em"),s&&s.c()},l(o){n=Ue(o,"EM",{});var d=ze(n);s&&s.l(d),d.forEach(J)},m(o,d){Te(o,n,d),s&&s.m(n,null),t=!0},p(o,[d]){s&&s.p&&(!t||d&8)&&rt(s,a,o,o[3],t?at(a,o[3],d,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){se(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function IT(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,d=void 0,l=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class vT extends Ne{constructor(n){super(),Le(this,n,IT,TT,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function DT(r){let n;return{c(){n=Oe("hr")},l(t){n=Ue(t,"HR",{})},m(t,a){Te(t,n,a)},p:nn,i:nn,o:nn,d(t){t&&J(n)}}}function wT(r,n,t){return[void 0,void 0,void 0]}class AT extends Ne{constructor(n){super(),Le(this,n,wT,DT,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function CT(r){let n,t;const a=r[4].default,s=tt(a,r,r[3],null);return{c(){n=Oe("strong"),s&&s.c()},l(o){n=Ue(o,"STRONG",{});var d=ze(n);s&&s.l(d),d.forEach(J)},m(o,d){Te(o,n,d),s&&s.m(n,null),t=!0},p(o,[d]){s&&s.p&&(!t||d&8)&&rt(s,a,o,o[3],t?at(a,o[3],d,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){se(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function ET(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,d=void 0,l=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class kT extends Ne{constructor(n){super(),Le(this,n,ET,CT,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function FT(r){let n,t,a,s;return{c(){n=Oe("img"),this.h()},l(o){n=Ue(o,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Nc(n.src,t=bi(r[0].href)?yi(r[1].baseUrl,r[0].href):r[0].href)||_n(n,"src",t),_n(n,"title",a=r[0].title),_n(n,"alt",s=r[0].text),_n(n,"class","markdown-image svelte-z38cge")},m(o,d){Te(o,n,d)},p(o,[d]){d&3&&!Nc(n.src,t=bi(o[0].href)?yi(o[1].baseUrl,o[0].href):o[0].href)&&_n(n,"src",t),d&1&&a!==(a=o[0].title)&&_n(n,"title",a),d&1&&s!==(s=o[0].text)&&_n(n,"alt",s)},i:nn,o:nn,d(o){o&&J(n)}}}function PT(r,n,t){let{token:a}=n,{options:s}=n;const o=void 0;return r.$$set=d=>{"token"in d&&t(0,a=d.token),"options"in d&&t(1,s=d.options)},[a,s,o]}class OT extends Ne{constructor(n){super(),Le(this,n,PT,FT,ke,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function UT(r){let n;const t=r[4].default,a=tt(t,r,r[3],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),n=!0},p(s,[o]){a&&a.p&&(!n||o&8)&&rt(a,t,s,s[3],n?at(t,s[3],o,null):it(s[3]),null)},i(s){n||(ee(a,s),n=!0)},o(s){se(a,s),n=!1},d(s){a&&a.d(s)}}}function RT(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,d=void 0,l=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,d,l,s,a]}class Kc extends Ne{constructor(n){super(),Le(this,n,RT,UT,ke,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const xT=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,NT=Object.hasOwnProperty;class El{constructor(){this.occurrences,this.reset()}slug(n,t){const a=this;let s=LT(n,t===!0);const o=s;for(;NT.call(a.occurrences,s);)a.occurrences[o]++,s=o+"-"+a.occurrences[o];return a.occurrences[s]=0,s}reset(){this.occurrences=Object.create(null)}}function LT(r,n){return typeof r!="string"?"":(n||(r=r.toLowerCase()),r.replace(xT,"").replace(/ /g,"-"))}function qo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let mr=qo();function kl(r){mr=r}const Fl=/[&<>"']/,BT=new RegExp(Fl.source,"g"),Pl=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,MT=new RegExp(Pl.source,"g"),qT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jc=r=>qT[r];function Cn(r,n){if(n){if(Fl.test(r))return r.replace(BT,Jc)}else if(Pl.test(r))return r.replace(MT,Jc);return r}const GT=/(^|[^\[])\^/g;function Se(r,n){let t=typeof r=="string"?r:r.source;n=n||"";const a={replace:(s,o)=>{let d=typeof o=="string"?o:o.source;return d=d.replace(GT,"$1"),t=t.replace(s,d),a},getRegex:()=>new RegExp(t,n)};return a}function Qc(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const hi={exec:()=>null};function Xc(r,n){const t=r.replace(/\|/g,(o,d,l)=>{let p=!1,m=d;for(;--m>=0&&l[m]==="\\";)p=!p;return p?"|":" |"}),a=t.split(/ \|/);let s=0;if(a[0].trim()||a.shift(),a.length>0&&!a[a.length-1].trim()&&a.pop(),n)if(a.length>n)a.splice(n);else for(;a.length<n;)a.push("");for(;s<a.length;s++)a[s]=a[s].trim().replace(/\\\|/g,"|");return a}function oi(r,n,t){const a=r.length;if(a===0)return"";let s=0;for(;s<a;){const o=r.charAt(a-s-1);if(o===n&&!t)s++;else if(o!==n&&t)s++;else break}return r.slice(0,a-s)}function $T(r,n){if(r.indexOf(n[1])===-1)return-1;let t=0;for(let a=0;a<r.length;a++)if(r[a]==="\\")a++;else if(r[a]===n[0])t++;else if(r[a]===n[1]&&(t--,t<0))return a;return-1}function Zc(r,n,t,a){const s=n.href,o=n.title?Cn(n.title):null,d=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){a.state.inLink=!0;const l={type:"link",raw:t,href:s,title:o,text:d,tokens:a.inlineTokens(d)};return a.state.inLink=!1,l}return{type:"image",raw:t,href:s,title:o,text:Cn(d)}}function jT(r,n){const t=r.match(/^(\s+)(?:```)/);if(t===null)return n;const a=t[1];return n.split(`
`).map(s=>{const o=s.match(/^\s+/);if(o===null)return s;const[d]=o;return d.length>=a.length?s.slice(a.length):s}).join(`
`)}class Ea{constructor(n){ye(this,"options");ye(this,"rules");ye(this,"lexer");this.options=n||mr}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const a=t[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?a:oi(a,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const a=t[0],s=jT(a,t[3]||"");return{type:"code",raw:a,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let a=t[2].trim();if(/#$/.test(a)){const s=oi(a,"#");(this.options.pedantic||!s||/ $/.test(s))&&(a=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:oi(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let a=oi(t[0],`
`).split(`
`),s="",o="";const d=[];for(;a.length>0;){let l=!1;const p=[];let m;for(m=0;m<a.length;m++)if(/^ {0,3}>/.test(a[m]))p.push(a[m]),l=!0;else if(!l)p.push(a[m]);else break;a=a.slice(m);const _=p.join(`
`),b=_.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");s=s?`${s}
${_}`:_,o=o?`${o}
${b}`:b;const O=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(b,d,!0),this.lexer.state.top=O,a.length===0)break;const C=d[d.length-1];if((C==null?void 0:C.type)==="code")break;if((C==null?void 0:C.type)==="blockquote"){const E=C,N=E.raw+`
`+a.join(`
`),z=this.blockquote(N);d[d.length-1]=z,s=s.substring(0,s.length-E.raw.length)+z.raw,o=o.substring(0,o.length-E.text.length)+z.text;break}else if((C==null?void 0:C.type)==="list"){const E=C,N=E.raw+`
`+a.join(`
`),z=this.list(N);d[d.length-1]=z,s=s.substring(0,s.length-C.raw.length)+z.raw,o=o.substring(0,o.length-E.raw.length)+z.raw,a=N.substring(d[d.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:d,text:o}}}list(n){let t=this.rules.block.list.exec(n);if(t){let a=t[1].trim();const s=a.length>1,o={type:"list",raw:"",ordered:s,start:s?+a.slice(0,-1):"",loose:!1,items:[]};a=s?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=s?a:"[*+-]");const d=new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l=!1;for(;n;){let p=!1,m="",_="";if(!(t=d.exec(n))||this.rules.block.hr.test(n))break;m=t[0],n=n.substring(m.length);let b=t[2].split(`
`,1)[0].replace(/^\t+/,ce=>" ".repeat(3*ce.length)),O=n.split(`
`,1)[0],C=!b.trim(),E=0;if(this.options.pedantic?(E=2,_=b.trimStart()):C?E=t[1].length+1:(E=t[2].search(/[^ ]/),E=E>4?1:E,_=b.slice(E),E+=t[1].length),C&&/^[ \t]*$/.test(O)&&(m+=O+`
`,n=n.substring(O.length+1),p=!0),!p){const ce=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ae=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),me=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),Fe=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),je=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;n;){const He=n.split(`
`,1)[0];let Re;if(O=He,this.options.pedantic?(O=O.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),Re=O):Re=O.replace(/\t/g,"    "),me.test(O)||Fe.test(O)||je.test(O)||ce.test(O)||Ae.test(O))break;if(Re.search(/[^ ]/)>=E||!O.trim())_+=`
`+Re.slice(E);else{if(C||b.replace(/\t/g,"    ").search(/[^ ]/)>=4||me.test(b)||Fe.test(b)||Ae.test(b))break;_+=`
`+O}!C&&!O.trim()&&(C=!0),m+=He+`
`,n=n.substring(He.length+1),b=Re.slice(E)}}o.loose||(l?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(m)&&(l=!0));let N=null,z;this.options.gfm&&(N=/^\[[ xX]\] /.exec(_),N&&(z=N[0]!=="[ ] ",_=_.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:m,task:!!N,checked:z,loose:!1,text:_,tokens:[]}),o.raw+=m}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let p=0;p<o.items.length;p++)if(this.lexer.state.top=!1,o.items[p].tokens=this.lexer.blockTokens(o.items[p].text,[]),!o.loose){const m=o.items[p].tokens.filter(b=>b.type==="space"),_=m.length>0&&m.some(b=>/\n.*\n/.test(b.raw));o.loose=_}if(o.loose)for(let p=0;p<o.items.length;p++)o.items[p].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const a=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:a,raw:t[0],href:s,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const a=Xc(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],d={type:"table",raw:t[0],header:[],align:[],rows:[]};if(a.length===s.length){for(const l of s)/^ *-+: *$/.test(l)?d.align.push("right"):/^ *:-+: *$/.test(l)?d.align.push("center"):/^ *:-+ *$/.test(l)?d.align.push("left"):d.align.push(null);for(let l=0;l<a.length;l++)d.header.push({text:a[l],tokens:this.lexer.inline(a[l]),header:!0,align:d.align[l]});for(const l of o)d.rows.push(Xc(l,d.header.length).map((p,m)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:d.align[m]})));return d}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const a=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:a,tokens:this.lexer.inline(a)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Cn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const a=t[2].trim();if(!this.options.pedantic&&/^</.test(a)){if(!/>$/.test(a))return;const d=oi(a.slice(0,-1),"\\");if((a.length-d.length)%2===0)return}else{const d=$T(t[2],"()");if(d>-1){const p=(t[0].indexOf("!")===0?5:4)+t[1].length+d;t[2]=t[2].substring(0,d),t[0]=t[0].substring(0,p).trim(),t[3]=""}}let s=t[2],o="";if(this.options.pedantic){const d=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);d&&(s=d[1],o=d[3])}else o=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(a)?s=s.slice(1):s=s.slice(1,-1)),Zc(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let a;if((a=this.rules.inline.reflink.exec(n))||(a=this.rules.inline.nolink.exec(n))){const s=(a[2]||a[1]).replace(/\s+/g," "),o=t[s.toLowerCase()];if(!o){const d=a[0].charAt(0);return{type:"text",raw:d,text:d}}return Zc(a,o,a[0],this.lexer)}}emStrong(n,t,a=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&a.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!a||this.rules.inline.punctuation.exec(a)){const d=[...s[0]].length-1;let l,p,m=d,_=0;const b=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(b.lastIndex=0,t=t.slice(-1*n.length+d);(s=b.exec(t))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(p=[...l].length,s[3]||s[4]){m+=p;continue}else if((s[5]||s[6])&&d%3&&!((d+p)%3)){_+=p;continue}if(m-=p,m>0)continue;p=Math.min(p,p+m+_);const O=[...s[0]][0].length,C=n.slice(0,d+s.index+O+p);if(Math.min(d,p)%2){const N=C.slice(1,-1);return{type:"em",raw:C,text:N,tokens:this.lexer.inlineTokens(N)}}const E=C.slice(2,-2);return{type:"strong",raw:C,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let a=t[2].replace(/\n/g," ");const s=/[^ ]/.test(a),o=/^ /.test(a)&&/ $/.test(a);return s&&o&&(a=a.substring(1,a.length-1)),a=Cn(a,!0),{type:"codespan",raw:t[0],text:a}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let a,s;return t[2]==="@"?(a=Cn(t[1]),s="mailto:"+a):(a=Cn(t[1]),s=a),{type:"link",raw:t[0],text:a,href:s,tokens:[{type:"text",raw:a,text:a}]}}}url(n){var a;let t;if(t=this.rules.inline.url.exec(n)){let s,o;if(t[2]==="@")s=Cn(t[0]),o="mailto:"+s;else{let d;do d=t[0],t[0]=((a=this.rules.inline._backpedal.exec(t[0]))==null?void 0:a[0])??"";while(d!==t[0]);s=Cn(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let a;return this.lexer.state.inRawBlock?a=t[0]:a=Cn(t[0]),{type:"text",raw:t[0],text:a}}}}const VT=/^(?:[ \t]*(?:\n|$))+/,zT=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,WT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,vi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,HT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ol=/(?:[*+-]|\d{1,9}[.)])/,Ul=Se(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Ol).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Go=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,YT=/^[^\n]+/,$o=/(?!\s*\])(?:\\.|[^\[\]\\])+/,KT=Se(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",$o).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),JT=Se(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ol).getRegex(),Ma="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",jo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,QT=Se("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",jo).replace("tag",Ma).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Rl=Se(Go).replace("hr",vi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ma).getRegex(),XT=Se(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Rl).getRegex(),Vo={blockquote:XT,code:zT,def:KT,fences:WT,heading:HT,hr:vi,html:QT,lheading:Ul,list:JT,newline:VT,paragraph:Rl,table:hi,text:YT},el=Se("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",vi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ma).getRegex(),ZT={...Vo,table:el,paragraph:Se(Go).replace("hr",vi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",el).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ma).getRegex()},eI={...Vo,html:Se(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",jo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:hi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Se(Go).replace("hr",vi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ul).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},xl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,nI=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Nl=/^( {2,}|\\)\n(?!\s*$)/,tI=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Di="\\p{P}\\p{S}",rI=Se(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Di).getRegex(),iI=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,aI=Se(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Di).getRegex(),sI=Se("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Di).getRegex(),oI=Se("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Di).getRegex(),uI=Se(/\\([punct])/,"gu").replace(/punct/g,Di).getRegex(),dI=Se(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),cI=Se(jo).replace("(?:-->|$)","-->").getRegex(),lI=Se("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",cI).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ka=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,pI=Se(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ka).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ll=Se(/^!?\[(label)\]\[(ref)\]/).replace("label",ka).replace("ref",$o).getRegex(),Bl=Se(/^!?\[(ref)\](?:\[\])?/).replace("ref",$o).getRegex(),hI=Se("reflink|nolink(?!\\()","g").replace("reflink",Ll).replace("nolink",Bl).getRegex(),zo={_backpedal:hi,anyPunctuation:uI,autolink:dI,blockSkip:iI,br:Nl,code:nI,del:hi,emStrongLDelim:aI,emStrongRDelimAst:sI,emStrongRDelimUnd:oI,escape:xl,link:pI,nolink:Bl,punctuation:rI,reflink:Ll,reflinkSearch:hI,tag:lI,text:tI,url:hi},fI={...zo,link:Se(/^!?\[(label)\]\((.*?)\)/).replace("label",ka).getRegex(),reflink:Se(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ka).getRegex()},wo={...zo,escape:Se(xl).replace("])","~|])").getRegex(),url:Se(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},gI={...wo,br:Se(Nl).replace("{2,}","*").getRegex(),text:Se(wo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ba={normal:Vo,gfm:ZT,pedantic:eI},ui={normal:zo,gfm:wo,breaks:gI,pedantic:fI};class En{constructor(n){ye(this,"tokens");ye(this,"options");ye(this,"state");ye(this,"tokenizer");ye(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||mr,this.options.tokenizer=this.options.tokenizer||new Ea,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ba.normal,inline:ui.normal};this.options.pedantic?(t.block=ba.pedantic,t.inline=ui.pedantic):this.options.gfm&&(t.block=ba.gfm,this.options.breaks?t.inline=ui.breaks:t.inline=ui.gfm),this.tokenizer.rules=t}static get rules(){return{block:ba,inline:ui}}static lex(n,t){return new En(t).lex(n)}static lexInline(n,t){return new En(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const a=this.inlineQueue[t];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],a=!1){this.options.pedantic&&(n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""));let s,o,d;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(s=l.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(d=n,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const p=n.slice(1);let m;this.options.extensions.startBlock.forEach(_=>{m=_.call({lexer:this},p),typeof m=="number"&&m>=0&&(l=Math.min(l,m))}),l<1/0&&l>=0&&(d=n.substring(0,l+1))}if(this.state.top&&(s=this.tokenizer.paragraph(d))){o=t[t.length-1],a&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),a=d.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(n){const l="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let a,s,o,d=n,l,p,m;if(this.tokens.links){const _=Object.keys(this.tokens.links);if(_.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(d))!=null;)_.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(d=d.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(d))!=null;)d=d.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(d))!=null;)d=d.slice(0,l.index)+"++"+d.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(p||(m=""),p=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(_=>(a=_.call({lexer:this},n,t))?(n=n.substring(a.raw.length),t.push(a),!0):!1))){if(a=this.tokenizer.escape(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.tag(n)){n=n.substring(a.raw.length),s=t[t.length-1],s&&a.type==="text"&&s.type==="text"?(s.raw+=a.raw,s.text+=a.text):t.push(a);continue}if(a=this.tokenizer.link(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(a.raw.length),s=t[t.length-1],s&&a.type==="text"&&s.type==="text"?(s.raw+=a.raw,s.text+=a.text):t.push(a);continue}if(a=this.tokenizer.emStrong(n,d,m)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.codespan(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.br(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.del(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.autolink(n)){n=n.substring(a.raw.length),t.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(n))){n=n.substring(a.raw.length),t.push(a);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let _=1/0;const b=n.slice(1);let O;this.options.extensions.startInline.forEach(C=>{O=C.call({lexer:this},b),typeof O=="number"&&O>=0&&(_=Math.min(_,O))}),_<1/0&&_>=0&&(o=n.substring(0,_+1))}if(a=this.tokenizer.inlineText(o)){n=n.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(m=a.raw.slice(-1)),p=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=a.raw,s.text+=a.text):t.push(a);continue}if(n){const _="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(_);break}else throw new Error(_)}}return t}}class Fa{constructor(n){ye(this,"options");ye(this,"parser");this.options=n||mr}space(n){return""}code({text:n,lang:t,escaped:a}){var d;const s=(d=(t||"").match(/^\S*/))==null?void 0:d[0],o=n.replace(/\n$/,"")+`
`;return s?'<pre><code class="language-'+Cn(s)+'">'+(a?o:Cn(o,!0))+`</code></pre>
`:"<pre><code>"+(a?o:Cn(o,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,a=n.start;let s="";for(let l=0;l<n.items.length;l++){const p=n.items[l];s+=this.listitem(p)}const o=t?"ol":"ul",d=t&&a!==1?' start="'+a+'"':"";return"<"+o+d+`>
`+s+"</"+o+`>
`}listitem(n){let t="";if(n.task){const a=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=a+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=a+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:a+" ",text:a+" "}):t+=a+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",a="";for(let o=0;o<n.header.length;o++)a+=this.tablecell(n.header[o]);t+=this.tablerow({text:a});let s="";for(let o=0;o<n.rows.length;o++){const d=n.rows[o];a="";for(let l=0;l<d.length;l++)a+=this.tablecell(d[l]);s+=this.tablerow({text:a})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),a=n.header?"th":"td";return(n.align?`<${a} align="${n.align}">`:`<${a}>`)+t+`</${a}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:a}){const s=this.parser.parseInline(a),o=Qc(n);if(o===null)return s;n=o;let d='<a href="'+n+'"';return t&&(d+=' title="'+t+'"'),d+=">"+s+"</a>",d}image({href:n,title:t,text:a}){const s=Qc(n);if(s===null)return a;n=s;let o=`<img src="${n}" alt="${a}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Wo{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class qn{constructor(n){ye(this,"options");ye(this,"renderer");ye(this,"textRenderer");this.options=n||mr,this.options.renderer=this.options.renderer||new Fa,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wo}static parse(n,t){return new qn(t).parse(n)}static parseInline(n,t){return new qn(t).parseInline(n)}parse(n,t=!0){let a="";for(let s=0;s<n.length;s++){const o=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=o,p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){a+=p||"";continue}}const d=o;switch(d.type){case"space":{a+=this.renderer.space(d);continue}case"hr":{a+=this.renderer.hr(d);continue}case"heading":{a+=this.renderer.heading(d);continue}case"code":{a+=this.renderer.code(d);continue}case"table":{a+=this.renderer.table(d);continue}case"blockquote":{a+=this.renderer.blockquote(d);continue}case"list":{a+=this.renderer.list(d);continue}case"html":{a+=this.renderer.html(d);continue}case"paragraph":{a+=this.renderer.paragraph(d);continue}case"text":{let l=d,p=this.renderer.text(l);for(;s+1<n.length&&n[s+1].type==="text";)l=n[++s],p+=`
`+this.renderer.text(l);t?a+=this.renderer.paragraph({type:"paragraph",raw:p,text:p,tokens:[{type:"text",raw:p,text:p}]}):a+=p;continue}default:{const l='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return a}parseInline(n,t){t=t||this.renderer;let a="";for(let s=0;s<n.length;s++){const o=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){a+=l||"";continue}}const d=o;switch(d.type){case"escape":{a+=t.text(d);break}case"html":{a+=t.html(d);break}case"link":{a+=t.link(d);break}case"image":{a+=t.image(d);break}case"strong":{a+=t.strong(d);break}case"em":{a+=t.em(d);break}case"codespan":{a+=t.codespan(d);break}case"br":{a+=t.br(d);break}case"del":{a+=t.del(d);break}case"text":{a+=t.text(d);break}default:{const l='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return a}}class fi{constructor(n){ye(this,"options");ye(this,"block");this.options=n||mr}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?En.lex:En.lexInline}provideParser(){return this.block?qn.parse:qn.parseInline}}ye(fi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class mI{constructor(...n){ye(this,"defaults",qo());ye(this,"options",this.setOptions);ye(this,"parse",this.parseMarkdown(!0));ye(this,"parseInline",this.parseMarkdown(!1));ye(this,"Parser",qn);ye(this,"Renderer",Fa);ye(this,"TextRenderer",Wo);ye(this,"Lexer",En);ye(this,"Tokenizer",Ea);ye(this,"Hooks",fi);this.use(...n)}walkTokens(n,t){var s,o;let a=[];for(const d of n)switch(a=a.concat(t.call(this,d)),d.type){case"table":{const l=d;for(const p of l.header)a=a.concat(this.walkTokens(p.tokens,t));for(const p of l.rows)for(const m of p)a=a.concat(this.walkTokens(m.tokens,t));break}case"list":{const l=d;a=a.concat(this.walkTokens(l.items,t));break}default:{const l=d;(o=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&o[l.type]?this.defaults.extensions.childTokens[l.type].forEach(p=>{const m=l[p].flat(1/0);a=a.concat(this.walkTokens(m,t))}):l.tokens&&(a=a.concat(this.walkTokens(l.tokens,t)))}}return a}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(a=>{const s={...a};if(s.async=this.defaults.async||s.async||!1,a.extensions&&(a.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const d=t.renderers[o.name];d?t.renderers[o.name]=function(...l){let p=o.renderer.apply(this,l);return p===!1&&(p=d.apply(this,l)),p}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const d=t[o.level];d?d.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),s.extensions=t),a.renderer){const o=this.defaults.renderer||new Fa(this.defaults);for(const d in a.renderer){if(!(d in o))throw new Error(`renderer '${d}' does not exist`);if(["options","parser"].includes(d))continue;const l=d,p=a.renderer[l],m=o[l];o[l]=(..._)=>{let b=p.apply(o,_);return b===!1&&(b=m.apply(o,_)),b||""}}s.renderer=o}if(a.tokenizer){const o=this.defaults.tokenizer||new Ea(this.defaults);for(const d in a.tokenizer){if(!(d in o))throw new Error(`tokenizer '${d}' does not exist`);if(["options","rules","lexer"].includes(d))continue;const l=d,p=a.tokenizer[l],m=o[l];o[l]=(..._)=>{let b=p.apply(o,_);return b===!1&&(b=m.apply(o,_)),b}}s.tokenizer=o}if(a.hooks){const o=this.defaults.hooks||new fi;for(const d in a.hooks){if(!(d in o))throw new Error(`hook '${d}' does not exist`);if(["options","block"].includes(d))continue;const l=d,p=a.hooks[l],m=o[l];fi.passThroughHooks.has(d)?o[l]=_=>{if(this.defaults.async)return Promise.resolve(p.call(o,_)).then(O=>m.call(o,O));const b=p.call(o,_);return m.call(o,b)}:o[l]=(..._)=>{let b=p.apply(o,_);return b===!1&&(b=m.apply(o,_)),b}}s.hooks=o}if(a.walkTokens){const o=this.defaults.walkTokens,d=a.walkTokens;s.walkTokens=function(l){let p=[];return p.push(d.call(this,l)),o&&(p=p.concat(o.call(this,l))),p}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return En.lex(n,t??this.defaults)}parser(n,t){return qn.parse(n,t??this.defaults)}parseMarkdown(n){return(a,s)=>{const o={...s},d={...this.defaults,...o},l=this.onError(!!d.silent,!!d.async);if(this.defaults.async===!0&&o.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof a>"u"||a===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof a!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(a)+", string expected"));d.hooks&&(d.hooks.options=d,d.hooks.block=n);const p=d.hooks?d.hooks.provideLexer():n?En.lex:En.lexInline,m=d.hooks?d.hooks.provideParser():n?qn.parse:qn.parseInline;if(d.async)return Promise.resolve(d.hooks?d.hooks.preprocess(a):a).then(_=>p(_,d)).then(_=>d.hooks?d.hooks.processAllTokens(_):_).then(_=>d.walkTokens?Promise.all(this.walkTokens(_,d.walkTokens)).then(()=>_):_).then(_=>m(_,d)).then(_=>d.hooks?d.hooks.postprocess(_):_).catch(l);try{d.hooks&&(a=d.hooks.preprocess(a));let _=p(a,d);d.hooks&&(_=d.hooks.processAllTokens(_)),d.walkTokens&&this.walkTokens(_,d.walkTokens);let b=m(_,d);return d.hooks&&(b=d.hooks.postprocess(b)),b}catch(_){return l(_)}}}onError(n,t){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+Cn(a.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(a);throw a}}}const lr=new mI;function be(r,n){return lr.parse(r,n)}be.options=be.setOptions=function(r){return lr.setOptions(r),be.defaults=lr.defaults,kl(be.defaults),be};be.getDefaults=qo;be.defaults=mr;be.use=function(...r){return lr.use(...r),be.defaults=lr.defaults,kl(be.defaults),be};be.walkTokens=function(r,n){return lr.walkTokens(r,n)};be.parseInline=lr.parseInline;be.Parser=qn;be.parser=qn.parse;be.Renderer=Fa;be.TextRenderer=Wo;be.Lexer=En;be.lexer=En.lex;be.Tokenizer=Ea;be.Hooks=fi;be.parse=be;be.options;be.setOptions;be.use;be.walkTokens;be.parseInline;qn.parse;En.lex;function _I(r){return new En().lex(r)}const yI=()=>({heading:xS,blockquote:BS,list:GS,list_item:VS,br:HS,code:JS,codespan:ZS,table:tT,html:aT,paragraph:uT,link:lT,text:fT,def:_T,del:ST,em:vT,hr:AT,strong:kT,image:OT,space:Kc,escape:Kc}),bI=()=>({baseUrl:"/",slugger:new El});function SI(){const r=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||r(n)},DS(()=>{console.warn=r})}function TI(r){let n,t;return n=new Ba({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){Wt(n.$$.fragment)},l(a){gr(n.$$.fragment,a)},m(a,s){Ht(n,a,s),t=!0},p(a,[s]){const o={};s&1&&(o.tokens=a[0]),s&2&&(o.renderers=a[1]),s&4&&(o.options=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){se(n.$$.fragment,a),t=!1},d(a){Yt(n,a)}}}function II(r,n,t){SI();let{source:a}=n,{options:s={}}=n,{renderers:o={}}=n,d,l,p;return r.$$set=m=>{"source"in m&&t(3,a=m.source),"options"in m&&t(4,s=m.options),"renderers"in m&&t(5,o=m.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,d=_I(a)),t(1,l={...yI(),...o}),t(2,p={...bI(),...s}))},[d,l,p,a,s,o]}class Iw extends Ne{constructor(n){super(),Le(this,n,II,TI,ke,{source:3,options:4,renderers:5})}}const wi={joinUrlPaths:yi,isRelative:bi,generatePathSegment:Cl};var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vI(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Pa.exports;(function(r,n){(function(){var t,a="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",l="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",m=500,_="__lodash_placeholder__",b=1,O=2,C=4,E=1,N=2,z=1,ce=2,Ae=4,me=8,Fe=16,je=32,He=64,Re=128,gt=256,U=512,Q=30,on="...",Rt=800,Qt=16,Ei=1,yr=2,ki=3,ot=1/0,Vn=9007199254740991,br=17976931348623157e292,Xt=NaN,Fn=4294967295,w=Fn-1,$=Fn>>>1,B=[["ary",Re],["bind",z],["bindKey",ce],["curry",me],["curryRight",Fe],["flip",U],["partial",je],["partialRight",He],["rearg",gt]],q="[object Arguments]",he="[object Array]",Be="[object AsyncFunction]",fe="[object Boolean]",Pn="[object Date]",qr="[object DOMException]",xt="[object Error]",tn="[object Function]",iu="[object GeneratorFunction]",zn="[object Map]",Gr="[object Number]",Np="[object Null]",mt="[object Object]",au="[object Promise]",Lp="[object Proxy]",$r="[object RegExp]",Wn="[object Set]",jr="[object String]",Fi="[object Symbol]",Bp="[object Undefined]",Vr="[object WeakMap]",Mp="[object WeakSet]",zr="[object ArrayBuffer]",Sr="[object DataView]",Ka="[object Float32Array]",Ja="[object Float64Array]",Qa="[object Int8Array]",Xa="[object Int16Array]",Za="[object Int32Array]",es="[object Uint8Array]",ns="[object Uint8ClampedArray]",ts="[object Uint16Array]",rs="[object Uint32Array]",qp=/\b__p \+= '';/g,Gp=/\b(__p \+=) '' \+/g,$p=/(__e\(.*?\)|\b__t\)) \+\n'';/g,su=/&(?:amp|lt|gt|quot|#39);/g,ou=/[&<>"']/g,jp=RegExp(su.source),Vp=RegExp(ou.source),zp=/<%-([\s\S]+?)%>/g,Wp=/<%([\s\S]+?)%>/g,uu=/<%=([\s\S]+?)%>/g,Hp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Yp=/^\w*$/,Kp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,is=/[\\^$.*+?()[\]{}|]/g,Jp=RegExp(is.source),as=/^\s+/,Qp=/\s/,Xp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Zp=/\{\n\/\* \[wrapped with (.+)\] \*/,eh=/,? & /,nh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,th=/[()=,{}\[\]\/\s]/,rh=/\\(\\)?/g,ih=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,du=/\w*$/,ah=/^[-+]0x[0-9a-f]+$/i,sh=/^0b[01]+$/i,oh=/^\[object .+?Constructor\]$/,uh=/^0o[0-7]+$/i,dh=/^(?:0|[1-9]\d*)$/,ch=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Pi=/($^)/,lh=/['\n\r\u2028\u2029\\]/g,Oi="\\ud800-\\udfff",ph="\\u0300-\\u036f",hh="\\ufe20-\\ufe2f",fh="\\u20d0-\\u20ff",cu=ph+hh+fh,lu="\\u2700-\\u27bf",pu="a-z\\xdf-\\xf6\\xf8-\\xff",gh="\\xac\\xb1\\xd7\\xf7",mh="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_h="\\u2000-\\u206f",yh=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hu="A-Z\\xc0-\\xd6\\xd8-\\xde",fu="\\ufe0e\\ufe0f",gu=gh+mh+_h+yh,ss="['’]",bh="["+Oi+"]",mu="["+gu+"]",Ui="["+cu+"]",_u="\\d+",Sh="["+lu+"]",yu="["+pu+"]",bu="[^"+Oi+gu+_u+lu+pu+hu+"]",os="\\ud83c[\\udffb-\\udfff]",Th="(?:"+Ui+"|"+os+")",Su="[^"+Oi+"]",us="(?:\\ud83c[\\udde6-\\uddff]){2}",ds="[\\ud800-\\udbff][\\udc00-\\udfff]",Tr="["+hu+"]",Tu="\\u200d",Iu="(?:"+yu+"|"+bu+")",Ih="(?:"+Tr+"|"+bu+")",vu="(?:"+ss+"(?:d|ll|m|re|s|t|ve))?",Du="(?:"+ss+"(?:D|LL|M|RE|S|T|VE))?",wu=Th+"?",Au="["+fu+"]?",vh="(?:"+Tu+"(?:"+[Su,us,ds].join("|")+")"+Au+wu+")*",Dh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",wh="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Cu=Au+wu+vh,Ah="(?:"+[Sh,us,ds].join("|")+")"+Cu,Ch="(?:"+[Su+Ui+"?",Ui,us,ds,bh].join("|")+")",Eh=RegExp(ss,"g"),kh=RegExp(Ui,"g"),cs=RegExp(os+"(?="+os+")|"+Ch+Cu,"g"),Fh=RegExp([Tr+"?"+yu+"+"+vu+"(?="+[mu,Tr,"$"].join("|")+")",Ih+"+"+Du+"(?="+[mu,Tr+Iu,"$"].join("|")+")",Tr+"?"+Iu+"+"+vu,Tr+"+"+Du,wh,Dh,_u,Ah].join("|"),"g"),Ph=RegExp("["+Tu+Oi+cu+fu+"]"),Oh=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Uh=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Rh=-1,Ce={};Ce[Ka]=Ce[Ja]=Ce[Qa]=Ce[Xa]=Ce[Za]=Ce[es]=Ce[ns]=Ce[ts]=Ce[rs]=!0,Ce[q]=Ce[he]=Ce[zr]=Ce[fe]=Ce[Sr]=Ce[Pn]=Ce[xt]=Ce[tn]=Ce[zn]=Ce[Gr]=Ce[mt]=Ce[$r]=Ce[Wn]=Ce[jr]=Ce[Vr]=!1;var De={};De[q]=De[he]=De[zr]=De[Sr]=De[fe]=De[Pn]=De[Ka]=De[Ja]=De[Qa]=De[Xa]=De[Za]=De[zn]=De[Gr]=De[mt]=De[$r]=De[Wn]=De[jr]=De[Fi]=De[es]=De[ns]=De[ts]=De[rs]=!0,De[xt]=De[tn]=De[Vr]=!1;var xh={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Nh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lh={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Bh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mh=parseFloat,qh=parseInt,Eu=typeof di=="object"&&di&&di.Object===Object&&di,Gh=typeof self=="object"&&self&&self.Object===Object&&self,Ze=Eu||Gh||Function("return this")(),ls=n&&!n.nodeType&&n,Zt=ls&&!0&&r&&!r.nodeType&&r,ku=Zt&&Zt.exports===ls,ps=ku&&Eu.process,On=function(){try{var I=Zt&&Zt.require&&Zt.require("util").types;return I||ps&&ps.binding&&ps.binding("util")}catch{}}(),Fu=On&&On.isArrayBuffer,Pu=On&&On.isDate,Ou=On&&On.isMap,Uu=On&&On.isRegExp,Ru=On&&On.isSet,xu=On&&On.isTypedArray;function Sn(I,A,D){switch(D.length){case 0:return I.call(A);case 1:return I.call(A,D[0]);case 2:return I.call(A,D[0],D[1]);case 3:return I.call(A,D[0],D[1],D[2])}return I.apply(A,D)}function $h(I,A,D,G){for(var X=-1,pe=I==null?0:I.length;++X<pe;){var Ye=I[X];A(G,Ye,D(Ye),I)}return G}function Un(I,A){for(var D=-1,G=I==null?0:I.length;++D<G&&A(I[D],D,I)!==!1;);return I}function jh(I,A){for(var D=I==null?0:I.length;D--&&A(I[D],D,I)!==!1;);return I}function Nu(I,A){for(var D=-1,G=I==null?0:I.length;++D<G;)if(!A(I[D],D,I))return!1;return!0}function Nt(I,A){for(var D=-1,G=I==null?0:I.length,X=0,pe=[];++D<G;){var Ye=I[D];A(Ye,D,I)&&(pe[X++]=Ye)}return pe}function Ri(I,A){var D=I==null?0:I.length;return!!D&&Ir(I,A,0)>-1}function hs(I,A,D){for(var G=-1,X=I==null?0:I.length;++G<X;)if(D(A,I[G]))return!0;return!1}function Ee(I,A){for(var D=-1,G=I==null?0:I.length,X=Array(G);++D<G;)X[D]=A(I[D],D,I);return X}function Lt(I,A){for(var D=-1,G=A.length,X=I.length;++D<G;)I[X+D]=A[D];return I}function fs(I,A,D,G){var X=-1,pe=I==null?0:I.length;for(G&&pe&&(D=I[++X]);++X<pe;)D=A(D,I[X],X,I);return D}function Vh(I,A,D,G){var X=I==null?0:I.length;for(G&&X&&(D=I[--X]);X--;)D=A(D,I[X],X,I);return D}function gs(I,A){for(var D=-1,G=I==null?0:I.length;++D<G;)if(A(I[D],D,I))return!0;return!1}var zh=ms("length");function Wh(I){return I.split("")}function Hh(I){return I.match(nh)||[]}function Lu(I,A,D){var G;return D(I,function(X,pe,Ye){if(A(X,pe,Ye))return G=pe,!1}),G}function xi(I,A,D,G){for(var X=I.length,pe=D+(G?1:-1);G?pe--:++pe<X;)if(A(I[pe],pe,I))return pe;return-1}function Ir(I,A,D){return A===A?sf(I,A,D):xi(I,Bu,D)}function Yh(I,A,D,G){for(var X=D-1,pe=I.length;++X<pe;)if(G(I[X],A))return X;return-1}function Bu(I){return I!==I}function Mu(I,A){var D=I==null?0:I.length;return D?ys(I,A)/D:Xt}function ms(I){return function(A){return A==null?t:A[I]}}function _s(I){return function(A){return I==null?t:I[A]}}function qu(I,A,D,G,X){return X(I,function(pe,Ye,Ie){D=G?(G=!1,pe):A(D,pe,Ye,Ie)}),D}function Kh(I,A){var D=I.length;for(I.sort(A);D--;)I[D]=I[D].value;return I}function ys(I,A){for(var D,G=-1,X=I.length;++G<X;){var pe=A(I[G]);pe!==t&&(D=D===t?pe:D+pe)}return D}function bs(I,A){for(var D=-1,G=Array(I);++D<I;)G[D]=A(D);return G}function Jh(I,A){return Ee(A,function(D){return[D,I[D]]})}function Gu(I){return I&&I.slice(0,zu(I)+1).replace(as,"")}function Tn(I){return function(A){return I(A)}}function Ss(I,A){return Ee(A,function(D){return I[D]})}function Wr(I,A){return I.has(A)}function $u(I,A){for(var D=-1,G=I.length;++D<G&&Ir(A,I[D],0)>-1;);return D}function ju(I,A){for(var D=I.length;D--&&Ir(A,I[D],0)>-1;);return D}function Qh(I,A){for(var D=I.length,G=0;D--;)I[D]===A&&++G;return G}var Xh=_s(xh),Zh=_s(Nh);function ef(I){return"\\"+Bh[I]}function nf(I,A){return I==null?t:I[A]}function vr(I){return Ph.test(I)}function tf(I){return Oh.test(I)}function rf(I){for(var A,D=[];!(A=I.next()).done;)D.push(A.value);return D}function Ts(I){var A=-1,D=Array(I.size);return I.forEach(function(G,X){D[++A]=[X,G]}),D}function Vu(I,A){return function(D){return I(A(D))}}function Bt(I,A){for(var D=-1,G=I.length,X=0,pe=[];++D<G;){var Ye=I[D];(Ye===A||Ye===_)&&(I[D]=_,pe[X++]=D)}return pe}function Ni(I){var A=-1,D=Array(I.size);return I.forEach(function(G){D[++A]=G}),D}function af(I){var A=-1,D=Array(I.size);return I.forEach(function(G){D[++A]=[G,G]}),D}function sf(I,A,D){for(var G=D-1,X=I.length;++G<X;)if(I[G]===A)return G;return-1}function of(I,A,D){for(var G=D+1;G--;)if(I[G]===A)return G;return G}function Dr(I){return vr(I)?df(I):zh(I)}function Hn(I){return vr(I)?cf(I):Wh(I)}function zu(I){for(var A=I.length;A--&&Qp.test(I.charAt(A)););return A}var uf=_s(Lh);function df(I){for(var A=cs.lastIndex=0;cs.test(I);)++A;return A}function cf(I){return I.match(cs)||[]}function lf(I){return I.match(Fh)||[]}var pf=function I(A){A=A==null?Ze:wr.defaults(Ze.Object(),A,wr.pick(Ze,Uh));var D=A.Array,G=A.Date,X=A.Error,pe=A.Function,Ye=A.Math,Ie=A.Object,Is=A.RegExp,hf=A.String,Rn=A.TypeError,Li=D.prototype,ff=pe.prototype,Ar=Ie.prototype,Bi=A["__core-js_shared__"],Mi=ff.toString,_e=Ar.hasOwnProperty,gf=0,Wu=function(){var e=/[^.]+$/.exec(Bi&&Bi.keys&&Bi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),qi=Ar.toString,mf=Mi.call(Ie),_f=Ze._,yf=Is("^"+Mi.call(_e).replace(is,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gi=ku?A.Buffer:t,Mt=A.Symbol,$i=A.Uint8Array,Hu=Gi?Gi.allocUnsafe:t,ji=Vu(Ie.getPrototypeOf,Ie),Yu=Ie.create,Ku=Ar.propertyIsEnumerable,Vi=Li.splice,Ju=Mt?Mt.isConcatSpreadable:t,Hr=Mt?Mt.iterator:t,er=Mt?Mt.toStringTag:t,zi=function(){try{var e=ar(Ie,"defineProperty");return e({},"",{}),e}catch{}}(),bf=A.clearTimeout!==Ze.clearTimeout&&A.clearTimeout,Sf=G&&G.now!==Ze.Date.now&&G.now,Tf=A.setTimeout!==Ze.setTimeout&&A.setTimeout,Wi=Ye.ceil,Hi=Ye.floor,vs=Ie.getOwnPropertySymbols,If=Gi?Gi.isBuffer:t,Qu=A.isFinite,vf=Li.join,Df=Vu(Ie.keys,Ie),Ke=Ye.max,rn=Ye.min,wf=G.now,Af=A.parseInt,Xu=Ye.random,Cf=Li.reverse,Ds=ar(A,"DataView"),Yr=ar(A,"Map"),ws=ar(A,"Promise"),Cr=ar(A,"Set"),Kr=ar(A,"WeakMap"),Jr=ar(Ie,"create"),Yi=Kr&&new Kr,Er={},Ef=sr(Ds),kf=sr(Yr),Ff=sr(ws),Pf=sr(Cr),Of=sr(Kr),Ki=Mt?Mt.prototype:t,Qr=Ki?Ki.valueOf:t,Zu=Ki?Ki.toString:t;function f(e){if(xe(e)&&!Z(e)&&!(e instanceof oe)){if(e instanceof xn)return e;if(_e.call(e,"__wrapped__"))return ec(e)}return new xn(e)}var kr=function(){function e(){}return function(i){if(!Pe(i))return{};if(Yu)return Yu(i);e.prototype=i;var u=new e;return e.prototype=t,u}}();function Ji(){}function xn(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}f.templateSettings={escape:zp,evaluate:Wp,interpolate:uu,variable:"",imports:{_:f}},f.prototype=Ji.prototype,f.prototype.constructor=f,xn.prototype=kr(Ji.prototype),xn.prototype.constructor=xn;function oe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Fn,this.__views__=[]}function Uf(){var e=new oe(this.__wrapped__);return e.__actions__=hn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=hn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=hn(this.__views__),e}function Rf(){if(this.__filtered__){var e=new oe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function xf(){var e=this.__wrapped__.value(),i=this.__dir__,u=Z(e),c=i<0,h=u?e.length:0,g=Hg(0,h,this.__views__),y=g.start,S=g.end,v=S-y,k=c?S:y-1,F=this.__iteratees__,R=F.length,L=0,V=rn(v,this.__takeCount__);if(!u||!c&&h==v&&V==v)return vd(e,this.__actions__);var Y=[];e:for(;v--&&L<V;){k+=i;for(var te=-1,K=e[k];++te<R;){var ae=F[te],de=ae.iteratee,Dn=ae.type,cn=de(K);if(Dn==yr)K=cn;else if(!cn){if(Dn==Ei)continue e;break e}}Y[L++]=K}return Y}oe.prototype=kr(Ji.prototype),oe.prototype.constructor=oe;function nr(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Nf(){this.__data__=Jr?Jr(null):{},this.size=0}function Lf(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function Bf(e){var i=this.__data__;if(Jr){var u=i[e];return u===p?t:u}return _e.call(i,e)?i[e]:t}function Mf(e){var i=this.__data__;return Jr?i[e]!==t:_e.call(i,e)}function qf(e,i){var u=this.__data__;return this.size+=this.has(e)?0:1,u[e]=Jr&&i===t?p:i,this}nr.prototype.clear=Nf,nr.prototype.delete=Lf,nr.prototype.get=Bf,nr.prototype.has=Mf,nr.prototype.set=qf;function _t(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Gf(){this.__data__=[],this.size=0}function $f(e){var i=this.__data__,u=Qi(i,e);if(u<0)return!1;var c=i.length-1;return u==c?i.pop():Vi.call(i,u,1),--this.size,!0}function jf(e){var i=this.__data__,u=Qi(i,e);return u<0?t:i[u][1]}function Vf(e){return Qi(this.__data__,e)>-1}function zf(e,i){var u=this.__data__,c=Qi(u,e);return c<0?(++this.size,u.push([e,i])):u[c][1]=i,this}_t.prototype.clear=Gf,_t.prototype.delete=$f,_t.prototype.get=jf,_t.prototype.has=Vf,_t.prototype.set=zf;function yt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Wf(){this.size=0,this.__data__={hash:new nr,map:new(Yr||_t),string:new nr}}function Hf(e){var i=da(this,e).delete(e);return this.size-=i?1:0,i}function Yf(e){return da(this,e).get(e)}function Kf(e){return da(this,e).has(e)}function Jf(e,i){var u=da(this,e),c=u.size;return u.set(e,i),this.size+=u.size==c?0:1,this}yt.prototype.clear=Wf,yt.prototype.delete=Hf,yt.prototype.get=Yf,yt.prototype.has=Kf,yt.prototype.set=Jf;function tr(e){var i=-1,u=e==null?0:e.length;for(this.__data__=new yt;++i<u;)this.add(e[i])}function Qf(e){return this.__data__.set(e,p),this}function Xf(e){return this.__data__.has(e)}tr.prototype.add=tr.prototype.push=Qf,tr.prototype.has=Xf;function Yn(e){var i=this.__data__=new _t(e);this.size=i.size}function Zf(){this.__data__=new _t,this.size=0}function eg(e){var i=this.__data__,u=i.delete(e);return this.size=i.size,u}function ng(e){return this.__data__.get(e)}function tg(e){return this.__data__.has(e)}function rg(e,i){var u=this.__data__;if(u instanceof _t){var c=u.__data__;if(!Yr||c.length<s-1)return c.push([e,i]),this.size=++u.size,this;u=this.__data__=new yt(c)}return u.set(e,i),this.size=u.size,this}Yn.prototype.clear=Zf,Yn.prototype.delete=eg,Yn.prototype.get=ng,Yn.prototype.has=tg,Yn.prototype.set=rg;function ed(e,i){var u=Z(e),c=!u&&or(e),h=!u&&!c&&Vt(e),g=!u&&!c&&!h&&Ur(e),y=u||c||h||g,S=y?bs(e.length,hf):[],v=S.length;for(var k in e)(i||_e.call(e,k))&&!(y&&(k=="length"||h&&(k=="offset"||k=="parent")||g&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||It(k,v)))&&S.push(k);return S}function nd(e){var i=e.length;return i?e[Ns(0,i-1)]:t}function ig(e,i){return ca(hn(e),rr(i,0,e.length))}function ag(e){return ca(hn(e))}function As(e,i,u){(u!==t&&!Kn(e[i],u)||u===t&&!(i in e))&&bt(e,i,u)}function Xr(e,i,u){var c=e[i];(!(_e.call(e,i)&&Kn(c,u))||u===t&&!(i in e))&&bt(e,i,u)}function Qi(e,i){for(var u=e.length;u--;)if(Kn(e[u][0],i))return u;return-1}function sg(e,i,u,c){return qt(e,function(h,g,y){i(c,h,u(h),y)}),c}function td(e,i){return e&&dt(i,Je(i),e)}function og(e,i){return e&&dt(i,gn(i),e)}function bt(e,i,u){i=="__proto__"&&zi?zi(e,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):e[i]=u}function Cs(e,i){for(var u=-1,c=i.length,h=D(c),g=e==null;++u<c;)h[u]=g?t:oo(e,i[u]);return h}function rr(e,i,u){return e===e&&(u!==t&&(e=e<=u?e:u),i!==t&&(e=e>=i?e:i)),e}function Nn(e,i,u,c,h,g){var y,S=i&b,v=i&O,k=i&C;if(u&&(y=h?u(e,c,h,g):u(e)),y!==t)return y;if(!Pe(e))return e;var F=Z(e);if(F){if(y=Kg(e),!S)return hn(e,y)}else{var R=an(e),L=R==tn||R==iu;if(Vt(e))return Ad(e,S);if(R==mt||R==q||L&&!h){if(y=v||L?{}:zd(e),!S)return v?Bg(e,og(y,e)):Lg(e,td(y,e))}else{if(!De[R])return h?e:{};y=Jg(e,R,S)}}g||(g=new Yn);var V=g.get(e);if(V)return V;g.set(e,y),Sc(e)?e.forEach(function(K){y.add(Nn(K,i,u,K,e,g))}):yc(e)&&e.forEach(function(K,ae){y.set(ae,Nn(K,i,u,ae,e,g))});var Y=k?v?Hs:Ws:v?gn:Je,te=F?t:Y(e);return Un(te||e,function(K,ae){te&&(ae=K,K=e[ae]),Xr(y,ae,Nn(K,i,u,ae,e,g))}),y}function ug(e){var i=Je(e);return function(u){return rd(u,e,i)}}function rd(e,i,u){var c=u.length;if(e==null)return!c;for(e=Ie(e);c--;){var h=u[c],g=i[h],y=e[h];if(y===t&&!(h in e)||!g(y))return!1}return!0}function id(e,i,u){if(typeof e!="function")throw new Rn(d);return ai(function(){e.apply(t,u)},i)}function Zr(e,i,u,c){var h=-1,g=Ri,y=!0,S=e.length,v=[],k=i.length;if(!S)return v;u&&(i=Ee(i,Tn(u))),c?(g=hs,y=!1):i.length>=s&&(g=Wr,y=!1,i=new tr(i));e:for(;++h<S;){var F=e[h],R=u==null?F:u(F);if(F=c||F!==0?F:0,y&&R===R){for(var L=k;L--;)if(i[L]===R)continue e;v.push(F)}else g(i,R,c)||v.push(F)}return v}var qt=Pd(ut),ad=Pd(ks,!0);function dg(e,i){var u=!0;return qt(e,function(c,h,g){return u=!!i(c,h,g),u}),u}function Xi(e,i,u){for(var c=-1,h=e.length;++c<h;){var g=e[c],y=i(g);if(y!=null&&(S===t?y===y&&!vn(y):u(y,S)))var S=y,v=g}return v}function cg(e,i,u,c){var h=e.length;for(u=ne(u),u<0&&(u=-u>h?0:h+u),c=c===t||c>h?h:ne(c),c<0&&(c+=h),c=u>c?0:Ic(c);u<c;)e[u++]=i;return e}function sd(e,i){var u=[];return qt(e,function(c,h,g){i(c,h,g)&&u.push(c)}),u}function en(e,i,u,c,h){var g=-1,y=e.length;for(u||(u=Xg),h||(h=[]);++g<y;){var S=e[g];i>0&&u(S)?i>1?en(S,i-1,u,c,h):Lt(h,S):c||(h[h.length]=S)}return h}var Es=Od(),od=Od(!0);function ut(e,i){return e&&Es(e,i,Je)}function ks(e,i){return e&&od(e,i,Je)}function Zi(e,i){return Nt(i,function(u){return vt(e[u])})}function ir(e,i){i=$t(i,e);for(var u=0,c=i.length;e!=null&&u<c;)e=e[ct(i[u++])];return u&&u==c?e:t}function ud(e,i,u){var c=i(e);return Z(e)?c:Lt(c,u(e))}function un(e){return e==null?e===t?Bp:Np:er&&er in Ie(e)?Wg(e):am(e)}function Fs(e,i){return e>i}function lg(e,i){return e!=null&&_e.call(e,i)}function pg(e,i){return e!=null&&i in Ie(e)}function hg(e,i,u){return e>=rn(i,u)&&e<Ke(i,u)}function Ps(e,i,u){for(var c=u?hs:Ri,h=e[0].length,g=e.length,y=g,S=D(g),v=1/0,k=[];y--;){var F=e[y];y&&i&&(F=Ee(F,Tn(i))),v=rn(F.length,v),S[y]=!u&&(i||h>=120&&F.length>=120)?new tr(y&&F):t}F=e[0];var R=-1,L=S[0];e:for(;++R<h&&k.length<v;){var V=F[R],Y=i?i(V):V;if(V=u||V!==0?V:0,!(L?Wr(L,Y):c(k,Y,u))){for(y=g;--y;){var te=S[y];if(!(te?Wr(te,Y):c(e[y],Y,u)))continue e}L&&L.push(Y),k.push(V)}}return k}function fg(e,i,u,c){return ut(e,function(h,g,y){i(c,u(h),g,y)}),c}function ei(e,i,u){i=$t(i,e),e=Kd(e,i);var c=e==null?e:e[ct(Bn(i))];return c==null?t:Sn(c,e,u)}function dd(e){return xe(e)&&un(e)==q}function gg(e){return xe(e)&&un(e)==zr}function mg(e){return xe(e)&&un(e)==Pn}function ni(e,i,u,c,h){return e===i?!0:e==null||i==null||!xe(e)&&!xe(i)?e!==e&&i!==i:_g(e,i,u,c,ni,h)}function _g(e,i,u,c,h,g){var y=Z(e),S=Z(i),v=y?he:an(e),k=S?he:an(i);v=v==q?mt:v,k=k==q?mt:k;var F=v==mt,R=k==mt,L=v==k;if(L&&Vt(e)){if(!Vt(i))return!1;y=!0,F=!1}if(L&&!F)return g||(g=new Yn),y||Ur(e)?$d(e,i,u,c,h,g):Vg(e,i,v,u,c,h,g);if(!(u&E)){var V=F&&_e.call(e,"__wrapped__"),Y=R&&_e.call(i,"__wrapped__");if(V||Y){var te=V?e.value():e,K=Y?i.value():i;return g||(g=new Yn),h(te,K,u,c,g)}}return L?(g||(g=new Yn),zg(e,i,u,c,h,g)):!1}function yg(e){return xe(e)&&an(e)==zn}function Os(e,i,u,c){var h=u.length,g=h,y=!c;if(e==null)return!g;for(e=Ie(e);h--;){var S=u[h];if(y&&S[2]?S[1]!==e[S[0]]:!(S[0]in e))return!1}for(;++h<g;){S=u[h];var v=S[0],k=e[v],F=S[1];if(y&&S[2]){if(k===t&&!(v in e))return!1}else{var R=new Yn;if(c)var L=c(k,F,v,e,i,R);if(!(L===t?ni(F,k,E|N,c,R):L))return!1}}return!0}function cd(e){if(!Pe(e)||em(e))return!1;var i=vt(e)?yf:oh;return i.test(sr(e))}function bg(e){return xe(e)&&un(e)==$r}function Sg(e){return xe(e)&&an(e)==Wn}function Tg(e){return xe(e)&&ma(e.length)&&!!Ce[un(e)]}function ld(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?Z(e)?fd(e[0],e[1]):hd(e):Uc(e)}function Us(e){if(!ii(e))return Df(e);var i=[];for(var u in Ie(e))_e.call(e,u)&&u!="constructor"&&i.push(u);return i}function Ig(e){if(!Pe(e))return im(e);var i=ii(e),u=[];for(var c in e)c=="constructor"&&(i||!_e.call(e,c))||u.push(c);return u}function Rs(e,i){return e<i}function pd(e,i){var u=-1,c=fn(e)?D(e.length):[];return qt(e,function(h,g,y){c[++u]=i(h,g,y)}),c}function hd(e){var i=Ks(e);return i.length==1&&i[0][2]?Hd(i[0][0],i[0][1]):function(u){return u===e||Os(u,e,i)}}function fd(e,i){return Qs(e)&&Wd(i)?Hd(ct(e),i):function(u){var c=oo(u,e);return c===t&&c===i?uo(u,e):ni(i,c,E|N)}}function ea(e,i,u,c,h){e!==i&&Es(i,function(g,y){if(h||(h=new Yn),Pe(g))vg(e,i,y,u,ea,c,h);else{var S=c?c(Zs(e,y),g,y+"",e,i,h):t;S===t&&(S=g),As(e,y,S)}},gn)}function vg(e,i,u,c,h,g,y){var S=Zs(e,u),v=Zs(i,u),k=y.get(v);if(k){As(e,u,k);return}var F=g?g(S,v,u+"",e,i,y):t,R=F===t;if(R){var L=Z(v),V=!L&&Vt(v),Y=!L&&!V&&Ur(v);F=v,L||V||Y?Z(S)?F=S:Me(S)?F=hn(S):V?(R=!1,F=Ad(v,!0)):Y?(R=!1,F=Cd(v,!0)):F=[]:si(v)||or(v)?(F=S,or(S)?F=vc(S):(!Pe(S)||vt(S))&&(F=zd(v))):R=!1}R&&(y.set(v,F),h(F,v,c,g,y),y.delete(v)),As(e,u,F)}function gd(e,i){var u=e.length;if(u)return i+=i<0?u:0,It(i,u)?e[i]:t}function md(e,i,u){i.length?i=Ee(i,function(g){return Z(g)?function(y){return ir(y,g.length===1?g[0]:g)}:g}):i=[mn];var c=-1;i=Ee(i,Tn(H()));var h=pd(e,function(g,y,S){var v=Ee(i,function(k){return k(g)});return{criteria:v,index:++c,value:g}});return Kh(h,function(g,y){return Ng(g,y,u)})}function Dg(e,i){return _d(e,i,function(u,c){return uo(e,c)})}function _d(e,i,u){for(var c=-1,h=i.length,g={};++c<h;){var y=i[c],S=ir(e,y);u(S,y)&&ti(g,$t(y,e),S)}return g}function wg(e){return function(i){return ir(i,e)}}function xs(e,i,u,c){var h=c?Yh:Ir,g=-1,y=i.length,S=e;for(e===i&&(i=hn(i)),u&&(S=Ee(e,Tn(u)));++g<y;)for(var v=0,k=i[g],F=u?u(k):k;(v=h(S,F,v,c))>-1;)S!==e&&Vi.call(S,v,1),Vi.call(e,v,1);return e}function yd(e,i){for(var u=e?i.length:0,c=u-1;u--;){var h=i[u];if(u==c||h!==g){var g=h;It(h)?Vi.call(e,h,1):Ms(e,h)}}return e}function Ns(e,i){return e+Hi(Xu()*(i-e+1))}function Ag(e,i,u,c){for(var h=-1,g=Ke(Wi((i-e)/(u||1)),0),y=D(g);g--;)y[c?g:++h]=e,e+=u;return y}function Ls(e,i){var u="";if(!e||i<1||i>Vn)return u;do i%2&&(u+=e),i=Hi(i/2),i&&(e+=e);while(i);return u}function re(e,i){return eo(Yd(e,i,mn),e+"")}function Cg(e){return nd(Rr(e))}function Eg(e,i){var u=Rr(e);return ca(u,rr(i,0,u.length))}function ti(e,i,u,c){if(!Pe(e))return e;i=$t(i,e);for(var h=-1,g=i.length,y=g-1,S=e;S!=null&&++h<g;){var v=ct(i[h]),k=u;if(v==="__proto__"||v==="constructor"||v==="prototype")return e;if(h!=y){var F=S[v];k=c?c(F,v,S):t,k===t&&(k=Pe(F)?F:It(i[h+1])?[]:{})}Xr(S,v,k),S=S[v]}return e}var bd=Yi?function(e,i){return Yi.set(e,i),e}:mn,kg=zi?function(e,i){return zi(e,"toString",{configurable:!0,enumerable:!1,value:lo(i),writable:!0})}:mn;function Fg(e){return ca(Rr(e))}function Ln(e,i,u){var c=-1,h=e.length;i<0&&(i=-i>h?0:h+i),u=u>h?h:u,u<0&&(u+=h),h=i>u?0:u-i>>>0,i>>>=0;for(var g=D(h);++c<h;)g[c]=e[c+i];return g}function Pg(e,i){var u;return qt(e,function(c,h,g){return u=i(c,h,g),!u}),!!u}function na(e,i,u){var c=0,h=e==null?c:e.length;if(typeof i=="number"&&i===i&&h<=$){for(;c<h;){var g=c+h>>>1,y=e[g];y!==null&&!vn(y)&&(u?y<=i:y<i)?c=g+1:h=g}return h}return Bs(e,i,mn,u)}function Bs(e,i,u,c){var h=0,g=e==null?0:e.length;if(g===0)return 0;i=u(i);for(var y=i!==i,S=i===null,v=vn(i),k=i===t;h<g;){var F=Hi((h+g)/2),R=u(e[F]),L=R!==t,V=R===null,Y=R===R,te=vn(R);if(y)var K=c||Y;else k?K=Y&&(c||L):S?K=Y&&L&&(c||!V):v?K=Y&&L&&!V&&(c||!te):V||te?K=!1:K=c?R<=i:R<i;K?h=F+1:g=F}return rn(g,w)}function Sd(e,i){for(var u=-1,c=e.length,h=0,g=[];++u<c;){var y=e[u],S=i?i(y):y;if(!u||!Kn(S,v)){var v=S;g[h++]=y===0?0:y}}return g}function Td(e){return typeof e=="number"?e:vn(e)?Xt:+e}function In(e){if(typeof e=="string")return e;if(Z(e))return Ee(e,In)+"";if(vn(e))return Zu?Zu.call(e):"";var i=e+"";return i=="0"&&1/e==-ot?"-0":i}function Gt(e,i,u){var c=-1,h=Ri,g=e.length,y=!0,S=[],v=S;if(u)y=!1,h=hs;else if(g>=s){var k=i?null:$g(e);if(k)return Ni(k);y=!1,h=Wr,v=new tr}else v=i?[]:S;e:for(;++c<g;){var F=e[c],R=i?i(F):F;if(F=u||F!==0?F:0,y&&R===R){for(var L=v.length;L--;)if(v[L]===R)continue e;i&&v.push(R),S.push(F)}else h(v,R,u)||(v!==S&&v.push(R),S.push(F))}return S}function Ms(e,i){return i=$t(i,e),e=Kd(e,i),e==null||delete e[ct(Bn(i))]}function Id(e,i,u,c){return ti(e,i,u(ir(e,i)),c)}function ta(e,i,u,c){for(var h=e.length,g=c?h:-1;(c?g--:++g<h)&&i(e[g],g,e););return u?Ln(e,c?0:g,c?g+1:h):Ln(e,c?g+1:0,c?h:g)}function vd(e,i){var u=e;return u instanceof oe&&(u=u.value()),fs(i,function(c,h){return h.func.apply(h.thisArg,Lt([c],h.args))},u)}function qs(e,i,u){var c=e.length;if(c<2)return c?Gt(e[0]):[];for(var h=-1,g=D(c);++h<c;)for(var y=e[h],S=-1;++S<c;)S!=h&&(g[h]=Zr(g[h]||y,e[S],i,u));return Gt(en(g,1),i,u)}function Dd(e,i,u){for(var c=-1,h=e.length,g=i.length,y={};++c<h;){var S=c<g?i[c]:t;u(y,e[c],S)}return y}function Gs(e){return Me(e)?e:[]}function $s(e){return typeof e=="function"?e:mn}function $t(e,i){return Z(e)?e:Qs(e,i)?[e]:Zd(ge(e))}var Og=re;function jt(e,i,u){var c=e.length;return u=u===t?c:u,!i&&u>=c?e:Ln(e,i,u)}var wd=bf||function(e){return Ze.clearTimeout(e)};function Ad(e,i){if(i)return e.slice();var u=e.length,c=Hu?Hu(u):new e.constructor(u);return e.copy(c),c}function js(e){var i=new e.constructor(e.byteLength);return new $i(i).set(new $i(e)),i}function Ug(e,i){var u=i?js(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.byteLength)}function Rg(e){var i=new e.constructor(e.source,du.exec(e));return i.lastIndex=e.lastIndex,i}function xg(e){return Qr?Ie(Qr.call(e)):{}}function Cd(e,i){var u=i?js(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.length)}function Ed(e,i){if(e!==i){var u=e!==t,c=e===null,h=e===e,g=vn(e),y=i!==t,S=i===null,v=i===i,k=vn(i);if(!S&&!k&&!g&&e>i||g&&y&&v&&!S&&!k||c&&y&&v||!u&&v||!h)return 1;if(!c&&!g&&!k&&e<i||k&&u&&h&&!c&&!g||S&&u&&h||!y&&h||!v)return-1}return 0}function Ng(e,i,u){for(var c=-1,h=e.criteria,g=i.criteria,y=h.length,S=u.length;++c<y;){var v=Ed(h[c],g[c]);if(v){if(c>=S)return v;var k=u[c];return v*(k=="desc"?-1:1)}}return e.index-i.index}function kd(e,i,u,c){for(var h=-1,g=e.length,y=u.length,S=-1,v=i.length,k=Ke(g-y,0),F=D(v+k),R=!c;++S<v;)F[S]=i[S];for(;++h<y;)(R||h<g)&&(F[u[h]]=e[h]);for(;k--;)F[S++]=e[h++];return F}function Fd(e,i,u,c){for(var h=-1,g=e.length,y=-1,S=u.length,v=-1,k=i.length,F=Ke(g-S,0),R=D(F+k),L=!c;++h<F;)R[h]=e[h];for(var V=h;++v<k;)R[V+v]=i[v];for(;++y<S;)(L||h<g)&&(R[V+u[y]]=e[h++]);return R}function hn(e,i){var u=-1,c=e.length;for(i||(i=D(c));++u<c;)i[u]=e[u];return i}function dt(e,i,u,c){var h=!u;u||(u={});for(var g=-1,y=i.length;++g<y;){var S=i[g],v=c?c(u[S],e[S],S,u,e):t;v===t&&(v=e[S]),h?bt(u,S,v):Xr(u,S,v)}return u}function Lg(e,i){return dt(e,Js(e),i)}function Bg(e,i){return dt(e,jd(e),i)}function ra(e,i){return function(u,c){var h=Z(u)?$h:sg,g=i?i():{};return h(u,e,H(c,2),g)}}function Fr(e){return re(function(i,u){var c=-1,h=u.length,g=h>1?u[h-1]:t,y=h>2?u[2]:t;for(g=e.length>3&&typeof g=="function"?(h--,g):t,y&&dn(u[0],u[1],y)&&(g=h<3?t:g,h=1),i=Ie(i);++c<h;){var S=u[c];S&&e(i,S,c,g)}return i})}function Pd(e,i){return function(u,c){if(u==null)return u;if(!fn(u))return e(u,c);for(var h=u.length,g=i?h:-1,y=Ie(u);(i?g--:++g<h)&&c(y[g],g,y)!==!1;);return u}}function Od(e){return function(i,u,c){for(var h=-1,g=Ie(i),y=c(i),S=y.length;S--;){var v=y[e?S:++h];if(u(g[v],v,g)===!1)break}return i}}function Mg(e,i,u){var c=i&z,h=ri(e);function g(){var y=this&&this!==Ze&&this instanceof g?h:e;return y.apply(c?u:this,arguments)}return g}function Ud(e){return function(i){i=ge(i);var u=vr(i)?Hn(i):t,c=u?u[0]:i.charAt(0),h=u?jt(u,1).join(""):i.slice(1);return c[e]()+h}}function Pr(e){return function(i){return fs(Pc(Fc(i).replace(Eh,"")),e,"")}}function ri(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=kr(e.prototype),c=e.apply(u,i);return Pe(c)?c:u}}function qg(e,i,u){var c=ri(e);function h(){for(var g=arguments.length,y=D(g),S=g,v=Or(h);S--;)y[S]=arguments[S];var k=g<3&&y[0]!==v&&y[g-1]!==v?[]:Bt(y,v);if(g-=k.length,g<u)return Bd(e,i,ia,h.placeholder,t,y,k,t,t,u-g);var F=this&&this!==Ze&&this instanceof h?c:e;return Sn(F,this,y)}return h}function Rd(e){return function(i,u,c){var h=Ie(i);if(!fn(i)){var g=H(u,3);i=Je(i),u=function(S){return g(h[S],S,h)}}var y=e(i,u,c);return y>-1?h[g?i[y]:y]:t}}function xd(e){return Tt(function(i){var u=i.length,c=u,h=xn.prototype.thru;for(e&&i.reverse();c--;){var g=i[c];if(typeof g!="function")throw new Rn(d);if(h&&!y&&ua(g)=="wrapper")var y=new xn([],!0)}for(c=y?c:u;++c<u;){g=i[c];var S=ua(g),v=S=="wrapper"?Ys(g):t;v&&Xs(v[0])&&v[1]==(Re|me|je|gt)&&!v[4].length&&v[9]==1?y=y[ua(v[0])].apply(y,v[3]):y=g.length==1&&Xs(g)?y[S]():y.thru(g)}return function(){var k=arguments,F=k[0];if(y&&k.length==1&&Z(F))return y.plant(F).value();for(var R=0,L=u?i[R].apply(this,k):F;++R<u;)L=i[R].call(this,L);return L}})}function ia(e,i,u,c,h,g,y,S,v,k){var F=i&Re,R=i&z,L=i&ce,V=i&(me|Fe),Y=i&U,te=L?t:ri(e);function K(){for(var ae=arguments.length,de=D(ae),Dn=ae;Dn--;)de[Dn]=arguments[Dn];if(V)var cn=Or(K),wn=Qh(de,cn);if(c&&(de=kd(de,c,h,V)),g&&(de=Fd(de,g,y,V)),ae-=wn,V&&ae<k){var qe=Bt(de,cn);return Bd(e,i,ia,K.placeholder,u,de,qe,S,v,k-ae)}var Jn=R?u:this,wt=L?Jn[e]:e;return ae=de.length,S?de=sm(de,S):Y&&ae>1&&de.reverse(),F&&v<ae&&(de.length=v),this&&this!==Ze&&this instanceof K&&(wt=te||ri(wt)),wt.apply(Jn,de)}return K}function Nd(e,i){return function(u,c){return fg(u,e,i(c),{})}}function aa(e,i){return function(u,c){var h;if(u===t&&c===t)return i;if(u!==t&&(h=u),c!==t){if(h===t)return c;typeof u=="string"||typeof c=="string"?(u=In(u),c=In(c)):(u=Td(u),c=Td(c)),h=e(u,c)}return h}}function Vs(e){return Tt(function(i){return i=Ee(i,Tn(H())),re(function(u){var c=this;return e(i,function(h){return Sn(h,c,u)})})})}function sa(e,i){i=i===t?" ":In(i);var u=i.length;if(u<2)return u?Ls(i,e):i;var c=Ls(i,Wi(e/Dr(i)));return vr(i)?jt(Hn(c),0,e).join(""):c.slice(0,e)}function Gg(e,i,u,c){var h=i&z,g=ri(e);function y(){for(var S=-1,v=arguments.length,k=-1,F=c.length,R=D(F+v),L=this&&this!==Ze&&this instanceof y?g:e;++k<F;)R[k]=c[k];for(;v--;)R[k++]=arguments[++S];return Sn(L,h?u:this,R)}return y}function Ld(e){return function(i,u,c){return c&&typeof c!="number"&&dn(i,u,c)&&(u=c=t),i=Dt(i),u===t?(u=i,i=0):u=Dt(u),c=c===t?i<u?1:-1:Dt(c),Ag(i,u,c,e)}}function oa(e){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=Mn(i),u=Mn(u)),e(i,u)}}function Bd(e,i,u,c,h,g,y,S,v,k){var F=i&me,R=F?y:t,L=F?t:y,V=F?g:t,Y=F?t:g;i|=F?je:He,i&=~(F?He:je),i&Ae||(i&=~(z|ce));var te=[e,i,h,V,R,Y,L,S,v,k],K=u.apply(t,te);return Xs(e)&&Jd(K,te),K.placeholder=c,Qd(K,e,i)}function zs(e){var i=Ye[e];return function(u,c){if(u=Mn(u),c=c==null?0:rn(ne(c),292),c&&Qu(u)){var h=(ge(u)+"e").split("e"),g=i(h[0]+"e"+(+h[1]+c));return h=(ge(g)+"e").split("e"),+(h[0]+"e"+(+h[1]-c))}return i(u)}}var $g=Cr&&1/Ni(new Cr([,-0]))[1]==ot?function(e){return new Cr(e)}:fo;function Md(e){return function(i){var u=an(i);return u==zn?Ts(i):u==Wn?af(i):Jh(i,e(i))}}function St(e,i,u,c,h,g,y,S){var v=i&ce;if(!v&&typeof e!="function")throw new Rn(d);var k=c?c.length:0;if(k||(i&=~(je|He),c=h=t),y=y===t?y:Ke(ne(y),0),S=S===t?S:ne(S),k-=h?h.length:0,i&He){var F=c,R=h;c=h=t}var L=v?t:Ys(e),V=[e,i,u,c,h,F,R,g,y,S];if(L&&rm(V,L),e=V[0],i=V[1],u=V[2],c=V[3],h=V[4],S=V[9]=V[9]===t?v?0:e.length:Ke(V[9]-k,0),!S&&i&(me|Fe)&&(i&=~(me|Fe)),!i||i==z)var Y=Mg(e,i,u);else i==me||i==Fe?Y=qg(e,i,S):(i==je||i==(z|je))&&!h.length?Y=Gg(e,i,u,c):Y=ia.apply(t,V);var te=L?bd:Jd;return Qd(te(Y,V),e,i)}function qd(e,i,u,c){return e===t||Kn(e,Ar[u])&&!_e.call(c,u)?i:e}function Gd(e,i,u,c,h,g){return Pe(e)&&Pe(i)&&(g.set(i,e),ea(e,i,t,Gd,g),g.delete(i)),e}function jg(e){return si(e)?t:e}function $d(e,i,u,c,h,g){var y=u&E,S=e.length,v=i.length;if(S!=v&&!(y&&v>S))return!1;var k=g.get(e),F=g.get(i);if(k&&F)return k==i&&F==e;var R=-1,L=!0,V=u&N?new tr:t;for(g.set(e,i),g.set(i,e);++R<S;){var Y=e[R],te=i[R];if(c)var K=y?c(te,Y,R,i,e,g):c(Y,te,R,e,i,g);if(K!==t){if(K)continue;L=!1;break}if(V){if(!gs(i,function(ae,de){if(!Wr(V,de)&&(Y===ae||h(Y,ae,u,c,g)))return V.push(de)})){L=!1;break}}else if(!(Y===te||h(Y,te,u,c,g))){L=!1;break}}return g.delete(e),g.delete(i),L}function Vg(e,i,u,c,h,g,y){switch(u){case Sr:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case zr:return!(e.byteLength!=i.byteLength||!g(new $i(e),new $i(i)));case fe:case Pn:case Gr:return Kn(+e,+i);case xt:return e.name==i.name&&e.message==i.message;case $r:case jr:return e==i+"";case zn:var S=Ts;case Wn:var v=c&E;if(S||(S=Ni),e.size!=i.size&&!v)return!1;var k=y.get(e);if(k)return k==i;c|=N,y.set(e,i);var F=$d(S(e),S(i),c,h,g,y);return y.delete(e),F;case Fi:if(Qr)return Qr.call(e)==Qr.call(i)}return!1}function zg(e,i,u,c,h,g){var y=u&E,S=Ws(e),v=S.length,k=Ws(i),F=k.length;if(v!=F&&!y)return!1;for(var R=v;R--;){var L=S[R];if(!(y?L in i:_e.call(i,L)))return!1}var V=g.get(e),Y=g.get(i);if(V&&Y)return V==i&&Y==e;var te=!0;g.set(e,i),g.set(i,e);for(var K=y;++R<v;){L=S[R];var ae=e[L],de=i[L];if(c)var Dn=y?c(de,ae,L,i,e,g):c(ae,de,L,e,i,g);if(!(Dn===t?ae===de||h(ae,de,u,c,g):Dn)){te=!1;break}K||(K=L=="constructor")}if(te&&!K){var cn=e.constructor,wn=i.constructor;cn!=wn&&"constructor"in e&&"constructor"in i&&!(typeof cn=="function"&&cn instanceof cn&&typeof wn=="function"&&wn instanceof wn)&&(te=!1)}return g.delete(e),g.delete(i),te}function Tt(e){return eo(Yd(e,t,rc),e+"")}function Ws(e){return ud(e,Je,Js)}function Hs(e){return ud(e,gn,jd)}var Ys=Yi?function(e){return Yi.get(e)}:fo;function ua(e){for(var i=e.name+"",u=Er[i],c=_e.call(Er,i)?u.length:0;c--;){var h=u[c],g=h.func;if(g==null||g==e)return h.name}return i}function Or(e){var i=_e.call(f,"placeholder")?f:e;return i.placeholder}function H(){var e=f.iteratee||po;return e=e===po?ld:e,arguments.length?e(arguments[0],arguments[1]):e}function da(e,i){var u=e.__data__;return Zg(i)?u[typeof i=="string"?"string":"hash"]:u.map}function Ks(e){for(var i=Je(e),u=i.length;u--;){var c=i[u],h=e[c];i[u]=[c,h,Wd(h)]}return i}function ar(e,i){var u=nf(e,i);return cd(u)?u:t}function Wg(e){var i=_e.call(e,er),u=e[er];try{e[er]=t;var c=!0}catch{}var h=qi.call(e);return c&&(i?e[er]=u:delete e[er]),h}var Js=vs?function(e){return e==null?[]:(e=Ie(e),Nt(vs(e),function(i){return Ku.call(e,i)}))}:go,jd=vs?function(e){for(var i=[];e;)Lt(i,Js(e)),e=ji(e);return i}:go,an=un;(Ds&&an(new Ds(new ArrayBuffer(1)))!=Sr||Yr&&an(new Yr)!=zn||ws&&an(ws.resolve())!=au||Cr&&an(new Cr)!=Wn||Kr&&an(new Kr)!=Vr)&&(an=function(e){var i=un(e),u=i==mt?e.constructor:t,c=u?sr(u):"";if(c)switch(c){case Ef:return Sr;case kf:return zn;case Ff:return au;case Pf:return Wn;case Of:return Vr}return i});function Hg(e,i,u){for(var c=-1,h=u.length;++c<h;){var g=u[c],y=g.size;switch(g.type){case"drop":e+=y;break;case"dropRight":i-=y;break;case"take":i=rn(i,e+y);break;case"takeRight":e=Ke(e,i-y);break}}return{start:e,end:i}}function Yg(e){var i=e.match(Zp);return i?i[1].split(eh):[]}function Vd(e,i,u){i=$t(i,e);for(var c=-1,h=i.length,g=!1;++c<h;){var y=ct(i[c]);if(!(g=e!=null&&u(e,y)))break;e=e[y]}return g||++c!=h?g:(h=e==null?0:e.length,!!h&&ma(h)&&It(y,h)&&(Z(e)||or(e)))}function Kg(e){var i=e.length,u=new e.constructor(i);return i&&typeof e[0]=="string"&&_e.call(e,"index")&&(u.index=e.index,u.input=e.input),u}function zd(e){return typeof e.constructor=="function"&&!ii(e)?kr(ji(e)):{}}function Jg(e,i,u){var c=e.constructor;switch(i){case zr:return js(e);case fe:case Pn:return new c(+e);case Sr:return Ug(e,u);case Ka:case Ja:case Qa:case Xa:case Za:case es:case ns:case ts:case rs:return Cd(e,u);case zn:return new c;case Gr:case jr:return new c(e);case $r:return Rg(e);case Wn:return new c;case Fi:return xg(e)}}function Qg(e,i){var u=i.length;if(!u)return e;var c=u-1;return i[c]=(u>1?"& ":"")+i[c],i=i.join(u>2?", ":" "),e.replace(Xp,`{
/* [wrapped with `+i+`] */
`)}function Xg(e){return Z(e)||or(e)||!!(Ju&&e&&e[Ju])}function It(e,i){var u=typeof e;return i=i??Vn,!!i&&(u=="number"||u!="symbol"&&dh.test(e))&&e>-1&&e%1==0&&e<i}function dn(e,i,u){if(!Pe(u))return!1;var c=typeof i;return(c=="number"?fn(u)&&It(i,u.length):c=="string"&&i in u)?Kn(u[i],e):!1}function Qs(e,i){if(Z(e))return!1;var u=typeof e;return u=="number"||u=="symbol"||u=="boolean"||e==null||vn(e)?!0:Yp.test(e)||!Hp.test(e)||i!=null&&e in Ie(i)}function Zg(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function Xs(e){var i=ua(e),u=f[i];if(typeof u!="function"||!(i in oe.prototype))return!1;if(e===u)return!0;var c=Ys(u);return!!c&&e===c[0]}function em(e){return!!Wu&&Wu in e}var nm=Bi?vt:mo;function ii(e){var i=e&&e.constructor,u=typeof i=="function"&&i.prototype||Ar;return e===u}function Wd(e){return e===e&&!Pe(e)}function Hd(e,i){return function(u){return u==null?!1:u[e]===i&&(i!==t||e in Ie(u))}}function tm(e){var i=fa(e,function(c){return u.size===m&&u.clear(),c}),u=i.cache;return i}function rm(e,i){var u=e[1],c=i[1],h=u|c,g=h<(z|ce|Re),y=c==Re&&u==me||c==Re&&u==gt&&e[7].length<=i[8]||c==(Re|gt)&&i[7].length<=i[8]&&u==me;if(!(g||y))return e;c&z&&(e[2]=i[2],h|=u&z?0:Ae);var S=i[3];if(S){var v=e[3];e[3]=v?kd(v,S,i[4]):S,e[4]=v?Bt(e[3],_):i[4]}return S=i[5],S&&(v=e[5],e[5]=v?Fd(v,S,i[6]):S,e[6]=v?Bt(e[5],_):i[6]),S=i[7],S&&(e[7]=S),c&Re&&(e[8]=e[8]==null?i[8]:rn(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=h,e}function im(e){var i=[];if(e!=null)for(var u in Ie(e))i.push(u);return i}function am(e){return qi.call(e)}function Yd(e,i,u){return i=Ke(i===t?e.length-1:i,0),function(){for(var c=arguments,h=-1,g=Ke(c.length-i,0),y=D(g);++h<g;)y[h]=c[i+h];h=-1;for(var S=D(i+1);++h<i;)S[h]=c[h];return S[i]=u(y),Sn(e,this,S)}}function Kd(e,i){return i.length<2?e:ir(e,Ln(i,0,-1))}function sm(e,i){for(var u=e.length,c=rn(i.length,u),h=hn(e);c--;){var g=i[c];e[c]=It(g,u)?h[g]:t}return e}function Zs(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var Jd=Xd(bd),ai=Tf||function(e,i){return Ze.setTimeout(e,i)},eo=Xd(kg);function Qd(e,i,u){var c=i+"";return eo(e,Qg(c,om(Yg(c),u)))}function Xd(e){var i=0,u=0;return function(){var c=wf(),h=Qt-(c-u);if(u=c,h>0){if(++i>=Rt)return arguments[0]}else i=0;return e.apply(t,arguments)}}function ca(e,i){var u=-1,c=e.length,h=c-1;for(i=i===t?c:i;++u<i;){var g=Ns(u,h),y=e[g];e[g]=e[u],e[u]=y}return e.length=i,e}var Zd=tm(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(Kp,function(u,c,h,g){i.push(h?g.replace(rh,"$1"):c||u)}),i});function ct(e){if(typeof e=="string"||vn(e))return e;var i=e+"";return i=="0"&&1/e==-ot?"-0":i}function sr(e){if(e!=null){try{return Mi.call(e)}catch{}try{return e+""}catch{}}return""}function om(e,i){return Un(B,function(u){var c="_."+u[0];i&u[1]&&!Ri(e,c)&&e.push(c)}),e.sort()}function ec(e){if(e instanceof oe)return e.clone();var i=new xn(e.__wrapped__,e.__chain__);return i.__actions__=hn(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function um(e,i,u){(u?dn(e,i,u):i===t)?i=1:i=Ke(ne(i),0);var c=e==null?0:e.length;if(!c||i<1)return[];for(var h=0,g=0,y=D(Wi(c/i));h<c;)y[g++]=Ln(e,h,h+=i);return y}function dm(e){for(var i=-1,u=e==null?0:e.length,c=0,h=[];++i<u;){var g=e[i];g&&(h[c++]=g)}return h}function cm(){var e=arguments.length;if(!e)return[];for(var i=D(e-1),u=arguments[0],c=e;c--;)i[c-1]=arguments[c];return Lt(Z(u)?hn(u):[u],en(i,1))}var lm=re(function(e,i){return Me(e)?Zr(e,en(i,1,Me,!0)):[]}),pm=re(function(e,i){var u=Bn(i);return Me(u)&&(u=t),Me(e)?Zr(e,en(i,1,Me,!0),H(u,2)):[]}),hm=re(function(e,i){var u=Bn(i);return Me(u)&&(u=t),Me(e)?Zr(e,en(i,1,Me,!0),t,u):[]});function fm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),Ln(e,i<0?0:i,c)):[]}function gm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Ln(e,0,i<0?0:i)):[]}function mm(e,i){return e&&e.length?ta(e,H(i,3),!0,!0):[]}function _m(e,i){return e&&e.length?ta(e,H(i,3),!0):[]}function ym(e,i,u,c){var h=e==null?0:e.length;return h?(u&&typeof u!="number"&&dn(e,i,u)&&(u=0,c=h),cg(e,i,u,c)):[]}function nc(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=u==null?0:ne(u);return h<0&&(h=Ke(c+h,0)),xi(e,H(i,3),h)}function tc(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=c-1;return u!==t&&(h=ne(u),h=u<0?Ke(c+h,0):rn(h,c-1)),xi(e,H(i,3),h,!0)}function rc(e){var i=e==null?0:e.length;return i?en(e,1):[]}function bm(e){var i=e==null?0:e.length;return i?en(e,ot):[]}function Sm(e,i){var u=e==null?0:e.length;return u?(i=i===t?1:ne(i),en(e,i)):[]}function Tm(e){for(var i=-1,u=e==null?0:e.length,c={};++i<u;){var h=e[i];c[h[0]]=h[1]}return c}function ic(e){return e&&e.length?e[0]:t}function Im(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=u==null?0:ne(u);return h<0&&(h=Ke(c+h,0)),Ir(e,i,h)}function vm(e){var i=e==null?0:e.length;return i?Ln(e,0,-1):[]}var Dm=re(function(e){var i=Ee(e,Gs);return i.length&&i[0]===e[0]?Ps(i):[]}),wm=re(function(e){var i=Bn(e),u=Ee(e,Gs);return i===Bn(u)?i=t:u.pop(),u.length&&u[0]===e[0]?Ps(u,H(i,2)):[]}),Am=re(function(e){var i=Bn(e),u=Ee(e,Gs);return i=typeof i=="function"?i:t,i&&u.pop(),u.length&&u[0]===e[0]?Ps(u,t,i):[]});function Cm(e,i){return e==null?"":vf.call(e,i)}function Bn(e){var i=e==null?0:e.length;return i?e[i-1]:t}function Em(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=c;return u!==t&&(h=ne(u),h=h<0?Ke(c+h,0):rn(h,c-1)),i===i?of(e,i,h):xi(e,Bu,h,!0)}function km(e,i){return e&&e.length?gd(e,ne(i)):t}var Fm=re(ac);function ac(e,i){return e&&e.length&&i&&i.length?xs(e,i):e}function Pm(e,i,u){return e&&e.length&&i&&i.length?xs(e,i,H(u,2)):e}function Om(e,i,u){return e&&e.length&&i&&i.length?xs(e,i,t,u):e}var Um=Tt(function(e,i){var u=e==null?0:e.length,c=Cs(e,i);return yd(e,Ee(i,function(h){return It(h,u)?+h:h}).sort(Ed)),c});function Rm(e,i){var u=[];if(!(e&&e.length))return u;var c=-1,h=[],g=e.length;for(i=H(i,3);++c<g;){var y=e[c];i(y,c,e)&&(u.push(y),h.push(c))}return yd(e,h),u}function no(e){return e==null?e:Cf.call(e)}function xm(e,i,u){var c=e==null?0:e.length;return c?(u&&typeof u!="number"&&dn(e,i,u)?(i=0,u=c):(i=i==null?0:ne(i),u=u===t?c:ne(u)),Ln(e,i,u)):[]}function Nm(e,i){return na(e,i)}function Lm(e,i,u){return Bs(e,i,H(u,2))}function Bm(e,i){var u=e==null?0:e.length;if(u){var c=na(e,i);if(c<u&&Kn(e[c],i))return c}return-1}function Mm(e,i){return na(e,i,!0)}function qm(e,i,u){return Bs(e,i,H(u,2),!0)}function Gm(e,i){var u=e==null?0:e.length;if(u){var c=na(e,i,!0)-1;if(Kn(e[c],i))return c}return-1}function $m(e){return e&&e.length?Sd(e):[]}function jm(e,i){return e&&e.length?Sd(e,H(i,2)):[]}function Vm(e){var i=e==null?0:e.length;return i?Ln(e,1,i):[]}function zm(e,i,u){return e&&e.length?(i=u||i===t?1:ne(i),Ln(e,0,i<0?0:i)):[]}function Wm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Ln(e,i<0?0:i,c)):[]}function Hm(e,i){return e&&e.length?ta(e,H(i,3),!1,!0):[]}function Ym(e,i){return e&&e.length?ta(e,H(i,3)):[]}var Km=re(function(e){return Gt(en(e,1,Me,!0))}),Jm=re(function(e){var i=Bn(e);return Me(i)&&(i=t),Gt(en(e,1,Me,!0),H(i,2))}),Qm=re(function(e){var i=Bn(e);return i=typeof i=="function"?i:t,Gt(en(e,1,Me,!0),t,i)});function Xm(e){return e&&e.length?Gt(e):[]}function Zm(e,i){return e&&e.length?Gt(e,H(i,2)):[]}function e_(e,i){return i=typeof i=="function"?i:t,e&&e.length?Gt(e,t,i):[]}function to(e){if(!(e&&e.length))return[];var i=0;return e=Nt(e,function(u){if(Me(u))return i=Ke(u.length,i),!0}),bs(i,function(u){return Ee(e,ms(u))})}function sc(e,i){if(!(e&&e.length))return[];var u=to(e);return i==null?u:Ee(u,function(c){return Sn(i,t,c)})}var n_=re(function(e,i){return Me(e)?Zr(e,i):[]}),t_=re(function(e){return qs(Nt(e,Me))}),r_=re(function(e){var i=Bn(e);return Me(i)&&(i=t),qs(Nt(e,Me),H(i,2))}),i_=re(function(e){var i=Bn(e);return i=typeof i=="function"?i:t,qs(Nt(e,Me),t,i)}),a_=re(to);function s_(e,i){return Dd(e||[],i||[],Xr)}function o_(e,i){return Dd(e||[],i||[],ti)}var u_=re(function(e){var i=e.length,u=i>1?e[i-1]:t;return u=typeof u=="function"?(e.pop(),u):t,sc(e,u)});function oc(e){var i=f(e);return i.__chain__=!0,i}function d_(e,i){return i(e),e}function la(e,i){return i(e)}var c_=Tt(function(e){var i=e.length,u=i?e[0]:0,c=this.__wrapped__,h=function(g){return Cs(g,e)};return i>1||this.__actions__.length||!(c instanceof oe)||!It(u)?this.thru(h):(c=c.slice(u,+u+(i?1:0)),c.__actions__.push({func:la,args:[h],thisArg:t}),new xn(c,this.__chain__).thru(function(g){return i&&!g.length&&g.push(t),g}))});function l_(){return oc(this)}function p_(){return new xn(this.value(),this.__chain__)}function h_(){this.__values__===t&&(this.__values__=Tc(this.value()));var e=this.__index__>=this.__values__.length,i=e?t:this.__values__[this.__index__++];return{done:e,value:i}}function f_(){return this}function g_(e){for(var i,u=this;u instanceof Ji;){var c=ec(u);c.__index__=0,c.__values__=t,i?h.__wrapped__=c:i=c;var h=c;u=u.__wrapped__}return h.__wrapped__=e,i}function m_(){var e=this.__wrapped__;if(e instanceof oe){var i=e;return this.__actions__.length&&(i=new oe(this)),i=i.reverse(),i.__actions__.push({func:la,args:[no],thisArg:t}),new xn(i,this.__chain__)}return this.thru(no)}function __(){return vd(this.__wrapped__,this.__actions__)}var y_=ra(function(e,i,u){_e.call(e,u)?++e[u]:bt(e,u,1)});function b_(e,i,u){var c=Z(e)?Nu:dg;return u&&dn(e,i,u)&&(i=t),c(e,H(i,3))}function S_(e,i){var u=Z(e)?Nt:sd;return u(e,H(i,3))}var T_=Rd(nc),I_=Rd(tc);function v_(e,i){return en(pa(e,i),1)}function D_(e,i){return en(pa(e,i),ot)}function w_(e,i,u){return u=u===t?1:ne(u),en(pa(e,i),u)}function uc(e,i){var u=Z(e)?Un:qt;return u(e,H(i,3))}function dc(e,i){var u=Z(e)?jh:ad;return u(e,H(i,3))}var A_=ra(function(e,i,u){_e.call(e,u)?e[u].push(i):bt(e,u,[i])});function C_(e,i,u,c){e=fn(e)?e:Rr(e),u=u&&!c?ne(u):0;var h=e.length;return u<0&&(u=Ke(h+u,0)),_a(e)?u<=h&&e.indexOf(i,u)>-1:!!h&&Ir(e,i,u)>-1}var E_=re(function(e,i,u){var c=-1,h=typeof i=="function",g=fn(e)?D(e.length):[];return qt(e,function(y){g[++c]=h?Sn(i,y,u):ei(y,i,u)}),g}),k_=ra(function(e,i,u){bt(e,u,i)});function pa(e,i){var u=Z(e)?Ee:pd;return u(e,H(i,3))}function F_(e,i,u,c){return e==null?[]:(Z(i)||(i=i==null?[]:[i]),u=c?t:u,Z(u)||(u=u==null?[]:[u]),md(e,i,u))}var P_=ra(function(e,i,u){e[u?0:1].push(i)},function(){return[[],[]]});function O_(e,i,u){var c=Z(e)?fs:qu,h=arguments.length<3;return c(e,H(i,4),u,h,qt)}function U_(e,i,u){var c=Z(e)?Vh:qu,h=arguments.length<3;return c(e,H(i,4),u,h,ad)}function R_(e,i){var u=Z(e)?Nt:sd;return u(e,ga(H(i,3)))}function x_(e){var i=Z(e)?nd:Cg;return i(e)}function N_(e,i,u){(u?dn(e,i,u):i===t)?i=1:i=ne(i);var c=Z(e)?ig:Eg;return c(e,i)}function L_(e){var i=Z(e)?ag:Fg;return i(e)}function B_(e){if(e==null)return 0;if(fn(e))return _a(e)?Dr(e):e.length;var i=an(e);return i==zn||i==Wn?e.size:Us(e).length}function M_(e,i,u){var c=Z(e)?gs:Pg;return u&&dn(e,i,u)&&(i=t),c(e,H(i,3))}var q_=re(function(e,i){if(e==null)return[];var u=i.length;return u>1&&dn(e,i[0],i[1])?i=[]:u>2&&dn(i[0],i[1],i[2])&&(i=[i[0]]),md(e,en(i,1),[])}),ha=Sf||function(){return Ze.Date.now()};function G_(e,i){if(typeof i!="function")throw new Rn(d);return e=ne(e),function(){if(--e<1)return i.apply(this,arguments)}}function cc(e,i,u){return i=u?t:i,i=e&&i==null?e.length:i,St(e,Re,t,t,t,t,i)}function lc(e,i){var u;if(typeof i!="function")throw new Rn(d);return e=ne(e),function(){return--e>0&&(u=i.apply(this,arguments)),e<=1&&(i=t),u}}var ro=re(function(e,i,u){var c=z;if(u.length){var h=Bt(u,Or(ro));c|=je}return St(e,c,i,u,h)}),pc=re(function(e,i,u){var c=z|ce;if(u.length){var h=Bt(u,Or(pc));c|=je}return St(i,c,e,u,h)});function hc(e,i,u){i=u?t:i;var c=St(e,me,t,t,t,t,t,i);return c.placeholder=hc.placeholder,c}function fc(e,i,u){i=u?t:i;var c=St(e,Fe,t,t,t,t,t,i);return c.placeholder=fc.placeholder,c}function gc(e,i,u){var c,h,g,y,S,v,k=0,F=!1,R=!1,L=!0;if(typeof e!="function")throw new Rn(d);i=Mn(i)||0,Pe(u)&&(F=!!u.leading,R="maxWait"in u,g=R?Ke(Mn(u.maxWait)||0,i):g,L="trailing"in u?!!u.trailing:L);function V(qe){var Jn=c,wt=h;return c=h=t,k=qe,y=e.apply(wt,Jn),y}function Y(qe){return k=qe,S=ai(ae,i),F?V(qe):y}function te(qe){var Jn=qe-v,wt=qe-k,Rc=i-Jn;return R?rn(Rc,g-wt):Rc}function K(qe){var Jn=qe-v,wt=qe-k;return v===t||Jn>=i||Jn<0||R&&wt>=g}function ae(){var qe=ha();if(K(qe))return de(qe);S=ai(ae,te(qe))}function de(qe){return S=t,L&&c?V(qe):(c=h=t,y)}function Dn(){S!==t&&wd(S),k=0,c=v=h=S=t}function cn(){return S===t?y:de(ha())}function wn(){var qe=ha(),Jn=K(qe);if(c=arguments,h=this,v=qe,Jn){if(S===t)return Y(v);if(R)return wd(S),S=ai(ae,i),V(v)}return S===t&&(S=ai(ae,i)),y}return wn.cancel=Dn,wn.flush=cn,wn}var $_=re(function(e,i){return id(e,1,i)}),j_=re(function(e,i,u){return id(e,Mn(i)||0,u)});function V_(e){return St(e,U)}function fa(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new Rn(d);var u=function(){var c=arguments,h=i?i.apply(this,c):c[0],g=u.cache;if(g.has(h))return g.get(h);var y=e.apply(this,c);return u.cache=g.set(h,y)||g,y};return u.cache=new(fa.Cache||yt),u}fa.Cache=yt;function ga(e){if(typeof e!="function")throw new Rn(d);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function z_(e){return lc(2,e)}var W_=Og(function(e,i){i=i.length==1&&Z(i[0])?Ee(i[0],Tn(H())):Ee(en(i,1),Tn(H()));var u=i.length;return re(function(c){for(var h=-1,g=rn(c.length,u);++h<g;)c[h]=i[h].call(this,c[h]);return Sn(e,this,c)})}),io=re(function(e,i){var u=Bt(i,Or(io));return St(e,je,t,i,u)}),mc=re(function(e,i){var u=Bt(i,Or(mc));return St(e,He,t,i,u)}),H_=Tt(function(e,i){return St(e,gt,t,t,t,i)});function Y_(e,i){if(typeof e!="function")throw new Rn(d);return i=i===t?i:ne(i),re(e,i)}function K_(e,i){if(typeof e!="function")throw new Rn(d);return i=i==null?0:Ke(ne(i),0),re(function(u){var c=u[i],h=jt(u,0,i);return c&&Lt(h,c),Sn(e,this,h)})}function J_(e,i,u){var c=!0,h=!0;if(typeof e!="function")throw new Rn(d);return Pe(u)&&(c="leading"in u?!!u.leading:c,h="trailing"in u?!!u.trailing:h),gc(e,i,{leading:c,maxWait:i,trailing:h})}function Q_(e){return cc(e,1)}function X_(e,i){return io($s(i),e)}function Z_(){if(!arguments.length)return[];var e=arguments[0];return Z(e)?e:[e]}function ey(e){return Nn(e,C)}function ny(e,i){return i=typeof i=="function"?i:t,Nn(e,C,i)}function ty(e){return Nn(e,b|C)}function ry(e,i){return i=typeof i=="function"?i:t,Nn(e,b|C,i)}function iy(e,i){return i==null||rd(e,i,Je(i))}function Kn(e,i){return e===i||e!==e&&i!==i}var ay=oa(Fs),sy=oa(function(e,i){return e>=i}),or=dd(function(){return arguments}())?dd:function(e){return xe(e)&&_e.call(e,"callee")&&!Ku.call(e,"callee")},Z=D.isArray,oy=Fu?Tn(Fu):gg;function fn(e){return e!=null&&ma(e.length)&&!vt(e)}function Me(e){return xe(e)&&fn(e)}function uy(e){return e===!0||e===!1||xe(e)&&un(e)==fe}var Vt=If||mo,dy=Pu?Tn(Pu):mg;function cy(e){return xe(e)&&e.nodeType===1&&!si(e)}function ly(e){if(e==null)return!0;if(fn(e)&&(Z(e)||typeof e=="string"||typeof e.splice=="function"||Vt(e)||Ur(e)||or(e)))return!e.length;var i=an(e);if(i==zn||i==Wn)return!e.size;if(ii(e))return!Us(e).length;for(var u in e)if(_e.call(e,u))return!1;return!0}function py(e,i){return ni(e,i)}function hy(e,i,u){u=typeof u=="function"?u:t;var c=u?u(e,i):t;return c===t?ni(e,i,t,u):!!c}function ao(e){if(!xe(e))return!1;var i=un(e);return i==xt||i==qr||typeof e.message=="string"&&typeof e.name=="string"&&!si(e)}function fy(e){return typeof e=="number"&&Qu(e)}function vt(e){if(!Pe(e))return!1;var i=un(e);return i==tn||i==iu||i==Be||i==Lp}function _c(e){return typeof e=="number"&&e==ne(e)}function ma(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Vn}function Pe(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function xe(e){return e!=null&&typeof e=="object"}var yc=Ou?Tn(Ou):yg;function gy(e,i){return e===i||Os(e,i,Ks(i))}function my(e,i,u){return u=typeof u=="function"?u:t,Os(e,i,Ks(i),u)}function _y(e){return bc(e)&&e!=+e}function yy(e){if(nm(e))throw new X(o);return cd(e)}function by(e){return e===null}function Sy(e){return e==null}function bc(e){return typeof e=="number"||xe(e)&&un(e)==Gr}function si(e){if(!xe(e)||un(e)!=mt)return!1;var i=ji(e);if(i===null)return!0;var u=_e.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&Mi.call(u)==mf}var so=Uu?Tn(Uu):bg;function Ty(e){return _c(e)&&e>=-Vn&&e<=Vn}var Sc=Ru?Tn(Ru):Sg;function _a(e){return typeof e=="string"||!Z(e)&&xe(e)&&un(e)==jr}function vn(e){return typeof e=="symbol"||xe(e)&&un(e)==Fi}var Ur=xu?Tn(xu):Tg;function Iy(e){return e===t}function vy(e){return xe(e)&&an(e)==Vr}function Dy(e){return xe(e)&&un(e)==Mp}var wy=oa(Rs),Ay=oa(function(e,i){return e<=i});function Tc(e){if(!e)return[];if(fn(e))return _a(e)?Hn(e):hn(e);if(Hr&&e[Hr])return rf(e[Hr]());var i=an(e),u=i==zn?Ts:i==Wn?Ni:Rr;return u(e)}function Dt(e){if(!e)return e===0?e:0;if(e=Mn(e),e===ot||e===-ot){var i=e<0?-1:1;return i*br}return e===e?e:0}function ne(e){var i=Dt(e),u=i%1;return i===i?u?i-u:i:0}function Ic(e){return e?rr(ne(e),0,Fn):0}function Mn(e){if(typeof e=="number")return e;if(vn(e))return Xt;if(Pe(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Pe(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=Gu(e);var u=sh.test(e);return u||uh.test(e)?qh(e.slice(2),u?2:8):ah.test(e)?Xt:+e}function vc(e){return dt(e,gn(e))}function Cy(e){return e?rr(ne(e),-Vn,Vn):e===0?e:0}function ge(e){return e==null?"":In(e)}var Ey=Fr(function(e,i){if(ii(i)||fn(i)){dt(i,Je(i),e);return}for(var u in i)_e.call(i,u)&&Xr(e,u,i[u])}),Dc=Fr(function(e,i){dt(i,gn(i),e)}),ya=Fr(function(e,i,u,c){dt(i,gn(i),e,c)}),ky=Fr(function(e,i,u,c){dt(i,Je(i),e,c)}),Fy=Tt(Cs);function Py(e,i){var u=kr(e);return i==null?u:td(u,i)}var Oy=re(function(e,i){e=Ie(e);var u=-1,c=i.length,h=c>2?i[2]:t;for(h&&dn(i[0],i[1],h)&&(c=1);++u<c;)for(var g=i[u],y=gn(g),S=-1,v=y.length;++S<v;){var k=y[S],F=e[k];(F===t||Kn(F,Ar[k])&&!_e.call(e,k))&&(e[k]=g[k])}return e}),Uy=re(function(e){return e.push(t,Gd),Sn(wc,t,e)});function Ry(e,i){return Lu(e,H(i,3),ut)}function xy(e,i){return Lu(e,H(i,3),ks)}function Ny(e,i){return e==null?e:Es(e,H(i,3),gn)}function Ly(e,i){return e==null?e:od(e,H(i,3),gn)}function By(e,i){return e&&ut(e,H(i,3))}function My(e,i){return e&&ks(e,H(i,3))}function qy(e){return e==null?[]:Zi(e,Je(e))}function Gy(e){return e==null?[]:Zi(e,gn(e))}function oo(e,i,u){var c=e==null?t:ir(e,i);return c===t?u:c}function $y(e,i){return e!=null&&Vd(e,i,lg)}function uo(e,i){return e!=null&&Vd(e,i,pg)}var jy=Nd(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=qi.call(i)),e[i]=u},lo(mn)),Vy=Nd(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=qi.call(i)),_e.call(e,i)?e[i].push(u):e[i]=[u]},H),zy=re(ei);function Je(e){return fn(e)?ed(e):Us(e)}function gn(e){return fn(e)?ed(e,!0):Ig(e)}function Wy(e,i){var u={};return i=H(i,3),ut(e,function(c,h,g){bt(u,i(c,h,g),c)}),u}function Hy(e,i){var u={};return i=H(i,3),ut(e,function(c,h,g){bt(u,h,i(c,h,g))}),u}var Yy=Fr(function(e,i,u){ea(e,i,u)}),wc=Fr(function(e,i,u,c){ea(e,i,u,c)}),Ky=Tt(function(e,i){var u={};if(e==null)return u;var c=!1;i=Ee(i,function(g){return g=$t(g,e),c||(c=g.length>1),g}),dt(e,Hs(e),u),c&&(u=Nn(u,b|O|C,jg));for(var h=i.length;h--;)Ms(u,i[h]);return u});function Jy(e,i){return Ac(e,ga(H(i)))}var Qy=Tt(function(e,i){return e==null?{}:Dg(e,i)});function Ac(e,i){if(e==null)return{};var u=Ee(Hs(e),function(c){return[c]});return i=H(i),_d(e,u,function(c,h){return i(c,h[0])})}function Xy(e,i,u){i=$t(i,e);var c=-1,h=i.length;for(h||(h=1,e=t);++c<h;){var g=e==null?t:e[ct(i[c])];g===t&&(c=h,g=u),e=vt(g)?g.call(e):g}return e}function Zy(e,i,u){return e==null?e:ti(e,i,u)}function eb(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:ti(e,i,u,c)}var Cc=Md(Je),Ec=Md(gn);function nb(e,i,u){var c=Z(e),h=c||Vt(e)||Ur(e);if(i=H(i,4),u==null){var g=e&&e.constructor;h?u=c?new g:[]:Pe(e)?u=vt(g)?kr(ji(e)):{}:u={}}return(h?Un:ut)(e,function(y,S,v){return i(u,y,S,v)}),u}function tb(e,i){return e==null?!0:Ms(e,i)}function rb(e,i,u){return e==null?e:Id(e,i,$s(u))}function ib(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:Id(e,i,$s(u),c)}function Rr(e){return e==null?[]:Ss(e,Je(e))}function ab(e){return e==null?[]:Ss(e,gn(e))}function sb(e,i,u){return u===t&&(u=i,i=t),u!==t&&(u=Mn(u),u=u===u?u:0),i!==t&&(i=Mn(i),i=i===i?i:0),rr(Mn(e),i,u)}function ob(e,i,u){return i=Dt(i),u===t?(u=i,i=0):u=Dt(u),e=Mn(e),hg(e,i,u)}function ub(e,i,u){if(u&&typeof u!="boolean"&&dn(e,i,u)&&(i=u=t),u===t&&(typeof i=="boolean"?(u=i,i=t):typeof e=="boolean"&&(u=e,e=t)),e===t&&i===t?(e=0,i=1):(e=Dt(e),i===t?(i=e,e=0):i=Dt(i)),e>i){var c=e;e=i,i=c}if(u||e%1||i%1){var h=Xu();return rn(e+h*(i-e+Mh("1e-"+((h+"").length-1))),i)}return Ns(e,i)}var db=Pr(function(e,i,u){return i=i.toLowerCase(),e+(u?kc(i):i)});function kc(e){return co(ge(e).toLowerCase())}function Fc(e){return e=ge(e),e&&e.replace(ch,Xh).replace(kh,"")}function cb(e,i,u){e=ge(e),i=In(i);var c=e.length;u=u===t?c:rr(ne(u),0,c);var h=u;return u-=i.length,u>=0&&e.slice(u,h)==i}function lb(e){return e=ge(e),e&&Vp.test(e)?e.replace(ou,Zh):e}function pb(e){return e=ge(e),e&&Jp.test(e)?e.replace(is,"\\$&"):e}var hb=Pr(function(e,i,u){return e+(u?"-":"")+i.toLowerCase()}),fb=Pr(function(e,i,u){return e+(u?" ":"")+i.toLowerCase()}),gb=Ud("toLowerCase");function mb(e,i,u){e=ge(e),i=ne(i);var c=i?Dr(e):0;if(!i||c>=i)return e;var h=(i-c)/2;return sa(Hi(h),u)+e+sa(Wi(h),u)}function _b(e,i,u){e=ge(e),i=ne(i);var c=i?Dr(e):0;return i&&c<i?e+sa(i-c,u):e}function yb(e,i,u){e=ge(e),i=ne(i);var c=i?Dr(e):0;return i&&c<i?sa(i-c,u)+e:e}function bb(e,i,u){return u||i==null?i=0:i&&(i=+i),Af(ge(e).replace(as,""),i||0)}function Sb(e,i,u){return(u?dn(e,i,u):i===t)?i=1:i=ne(i),Ls(ge(e),i)}function Tb(){var e=arguments,i=ge(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var Ib=Pr(function(e,i,u){return e+(u?"_":"")+i.toLowerCase()});function vb(e,i,u){return u&&typeof u!="number"&&dn(e,i,u)&&(i=u=t),u=u===t?Fn:u>>>0,u?(e=ge(e),e&&(typeof i=="string"||i!=null&&!so(i))&&(i=In(i),!i&&vr(e))?jt(Hn(e),0,u):e.split(i,u)):[]}var Db=Pr(function(e,i,u){return e+(u?" ":"")+co(i)});function wb(e,i,u){return e=ge(e),u=u==null?0:rr(ne(u),0,e.length),i=In(i),e.slice(u,u+i.length)==i}function Ab(e,i,u){var c=f.templateSettings;u&&dn(e,i,u)&&(i=t),e=ge(e),i=ya({},i,c,qd);var h=ya({},i.imports,c.imports,qd),g=Je(h),y=Ss(h,g),S,v,k=0,F=i.interpolate||Pi,R="__p += '",L=Is((i.escape||Pi).source+"|"+F.source+"|"+(F===uu?ih:Pi).source+"|"+(i.evaluate||Pi).source+"|$","g"),V="//# sourceURL="+(_e.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Rh+"]")+`
`;e.replace(L,function(K,ae,de,Dn,cn,wn){return de||(de=Dn),R+=e.slice(k,wn).replace(lh,ef),ae&&(S=!0,R+=`' +
__e(`+ae+`) +
'`),cn&&(v=!0,R+=`';
`+cn+`;
__p += '`),de&&(R+=`' +
((__t = (`+de+`)) == null ? '' : __t) +
'`),k=wn+K.length,K}),R+=`';
`;var Y=_e.call(i,"variable")&&i.variable;if(!Y)R=`with (obj) {
`+R+`
}
`;else if(th.test(Y))throw new X(l);R=(v?R.replace(qp,""):R).replace(Gp,"$1").replace($p,"$1;"),R="function("+(Y||"obj")+`) {
`+(Y?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(S?", __e = _.escape":"")+(v?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+R+`return __p
}`;var te=Oc(function(){return pe(g,V+"return "+R).apply(t,y)});if(te.source=R,ao(te))throw te;return te}function Cb(e){return ge(e).toLowerCase()}function Eb(e){return ge(e).toUpperCase()}function kb(e,i,u){if(e=ge(e),e&&(u||i===t))return Gu(e);if(!e||!(i=In(i)))return e;var c=Hn(e),h=Hn(i),g=$u(c,h),y=ju(c,h)+1;return jt(c,g,y).join("")}function Fb(e,i,u){if(e=ge(e),e&&(u||i===t))return e.slice(0,zu(e)+1);if(!e||!(i=In(i)))return e;var c=Hn(e),h=ju(c,Hn(i))+1;return jt(c,0,h).join("")}function Pb(e,i,u){if(e=ge(e),e&&(u||i===t))return e.replace(as,"");if(!e||!(i=In(i)))return e;var c=Hn(e),h=$u(c,Hn(i));return jt(c,h).join("")}function Ob(e,i){var u=Q,c=on;if(Pe(i)){var h="separator"in i?i.separator:h;u="length"in i?ne(i.length):u,c="omission"in i?In(i.omission):c}e=ge(e);var g=e.length;if(vr(e)){var y=Hn(e);g=y.length}if(u>=g)return e;var S=u-Dr(c);if(S<1)return c;var v=y?jt(y,0,S).join(""):e.slice(0,S);if(h===t)return v+c;if(y&&(S+=v.length-S),so(h)){if(e.slice(S).search(h)){var k,F=v;for(h.global||(h=Is(h.source,ge(du.exec(h))+"g")),h.lastIndex=0;k=h.exec(F);)var R=k.index;v=v.slice(0,R===t?S:R)}}else if(e.indexOf(In(h),S)!=S){var L=v.lastIndexOf(h);L>-1&&(v=v.slice(0,L))}return v+c}function Ub(e){return e=ge(e),e&&jp.test(e)?e.replace(su,uf):e}var Rb=Pr(function(e,i,u){return e+(u?" ":"")+i.toUpperCase()}),co=Ud("toUpperCase");function Pc(e,i,u){return e=ge(e),i=u?t:i,i===t?tf(e)?lf(e):Hh(e):e.match(i)||[]}var Oc=re(function(e,i){try{return Sn(e,t,i)}catch(u){return ao(u)?u:new X(u)}}),xb=Tt(function(e,i){return Un(i,function(u){u=ct(u),bt(e,u,ro(e[u],e))}),e});function Nb(e){var i=e==null?0:e.length,u=H();return e=i?Ee(e,function(c){if(typeof c[1]!="function")throw new Rn(d);return[u(c[0]),c[1]]}):[],re(function(c){for(var h=-1;++h<i;){var g=e[h];if(Sn(g[0],this,c))return Sn(g[1],this,c)}})}function Lb(e){return ug(Nn(e,b))}function lo(e){return function(){return e}}function Bb(e,i){return e==null||e!==e?i:e}var Mb=xd(),qb=xd(!0);function mn(e){return e}function po(e){return ld(typeof e=="function"?e:Nn(e,b))}function Gb(e){return hd(Nn(e,b))}function $b(e,i){return fd(e,Nn(i,b))}var jb=re(function(e,i){return function(u){return ei(u,e,i)}}),Vb=re(function(e,i){return function(u){return ei(e,u,i)}});function ho(e,i,u){var c=Je(i),h=Zi(i,c);u==null&&!(Pe(i)&&(h.length||!c.length))&&(u=i,i=e,e=this,h=Zi(i,Je(i)));var g=!(Pe(u)&&"chain"in u)||!!u.chain,y=vt(e);return Un(h,function(S){var v=i[S];e[S]=v,y&&(e.prototype[S]=function(){var k=this.__chain__;if(g||k){var F=e(this.__wrapped__),R=F.__actions__=hn(this.__actions__);return R.push({func:v,args:arguments,thisArg:e}),F.__chain__=k,F}return v.apply(e,Lt([this.value()],arguments))})}),e}function zb(){return Ze._===this&&(Ze._=_f),this}function fo(){}function Wb(e){return e=ne(e),re(function(i){return gd(i,e)})}var Hb=Vs(Ee),Yb=Vs(Nu),Kb=Vs(gs);function Uc(e){return Qs(e)?ms(ct(e)):wg(e)}function Jb(e){return function(i){return e==null?t:ir(e,i)}}var Qb=Ld(),Xb=Ld(!0);function go(){return[]}function mo(){return!1}function Zb(){return{}}function eS(){return""}function nS(){return!0}function tS(e,i){if(e=ne(e),e<1||e>Vn)return[];var u=Fn,c=rn(e,Fn);i=H(i),e-=Fn;for(var h=bs(c,i);++u<e;)i(u);return h}function rS(e){return Z(e)?Ee(e,ct):vn(e)?[e]:hn(Zd(ge(e)))}function iS(e){var i=++gf;return ge(e)+i}var aS=aa(function(e,i){return e+i},0),sS=zs("ceil"),oS=aa(function(e,i){return e/i},1),uS=zs("floor");function dS(e){return e&&e.length?Xi(e,mn,Fs):t}function cS(e,i){return e&&e.length?Xi(e,H(i,2),Fs):t}function lS(e){return Mu(e,mn)}function pS(e,i){return Mu(e,H(i,2))}function hS(e){return e&&e.length?Xi(e,mn,Rs):t}function fS(e,i){return e&&e.length?Xi(e,H(i,2),Rs):t}var gS=aa(function(e,i){return e*i},1),mS=zs("round"),_S=aa(function(e,i){return e-i},0);function yS(e){return e&&e.length?ys(e,mn):0}function bS(e,i){return e&&e.length?ys(e,H(i,2)):0}return f.after=G_,f.ary=cc,f.assign=Ey,f.assignIn=Dc,f.assignInWith=ya,f.assignWith=ky,f.at=Fy,f.before=lc,f.bind=ro,f.bindAll=xb,f.bindKey=pc,f.castArray=Z_,f.chain=oc,f.chunk=um,f.compact=dm,f.concat=cm,f.cond=Nb,f.conforms=Lb,f.constant=lo,f.countBy=y_,f.create=Py,f.curry=hc,f.curryRight=fc,f.debounce=gc,f.defaults=Oy,f.defaultsDeep=Uy,f.defer=$_,f.delay=j_,f.difference=lm,f.differenceBy=pm,f.differenceWith=hm,f.drop=fm,f.dropRight=gm,f.dropRightWhile=mm,f.dropWhile=_m,f.fill=ym,f.filter=S_,f.flatMap=v_,f.flatMapDeep=D_,f.flatMapDepth=w_,f.flatten=rc,f.flattenDeep=bm,f.flattenDepth=Sm,f.flip=V_,f.flow=Mb,f.flowRight=qb,f.fromPairs=Tm,f.functions=qy,f.functionsIn=Gy,f.groupBy=A_,f.initial=vm,f.intersection=Dm,f.intersectionBy=wm,f.intersectionWith=Am,f.invert=jy,f.invertBy=Vy,f.invokeMap=E_,f.iteratee=po,f.keyBy=k_,f.keys=Je,f.keysIn=gn,f.map=pa,f.mapKeys=Wy,f.mapValues=Hy,f.matches=Gb,f.matchesProperty=$b,f.memoize=fa,f.merge=Yy,f.mergeWith=wc,f.method=jb,f.methodOf=Vb,f.mixin=ho,f.negate=ga,f.nthArg=Wb,f.omit=Ky,f.omitBy=Jy,f.once=z_,f.orderBy=F_,f.over=Hb,f.overArgs=W_,f.overEvery=Yb,f.overSome=Kb,f.partial=io,f.partialRight=mc,f.partition=P_,f.pick=Qy,f.pickBy=Ac,f.property=Uc,f.propertyOf=Jb,f.pull=Fm,f.pullAll=ac,f.pullAllBy=Pm,f.pullAllWith=Om,f.pullAt=Um,f.range=Qb,f.rangeRight=Xb,f.rearg=H_,f.reject=R_,f.remove=Rm,f.rest=Y_,f.reverse=no,f.sampleSize=N_,f.set=Zy,f.setWith=eb,f.shuffle=L_,f.slice=xm,f.sortBy=q_,f.sortedUniq=$m,f.sortedUniqBy=jm,f.split=vb,f.spread=K_,f.tail=Vm,f.take=zm,f.takeRight=Wm,f.takeRightWhile=Hm,f.takeWhile=Ym,f.tap=d_,f.throttle=J_,f.thru=la,f.toArray=Tc,f.toPairs=Cc,f.toPairsIn=Ec,f.toPath=rS,f.toPlainObject=vc,f.transform=nb,f.unary=Q_,f.union=Km,f.unionBy=Jm,f.unionWith=Qm,f.uniq=Xm,f.uniqBy=Zm,f.uniqWith=e_,f.unset=tb,f.unzip=to,f.unzipWith=sc,f.update=rb,f.updateWith=ib,f.values=Rr,f.valuesIn=ab,f.without=n_,f.words=Pc,f.wrap=X_,f.xor=t_,f.xorBy=r_,f.xorWith=i_,f.zip=a_,f.zipObject=s_,f.zipObjectDeep=o_,f.zipWith=u_,f.entries=Cc,f.entriesIn=Ec,f.extend=Dc,f.extendWith=ya,ho(f,f),f.add=aS,f.attempt=Oc,f.camelCase=db,f.capitalize=kc,f.ceil=sS,f.clamp=sb,f.clone=ey,f.cloneDeep=ty,f.cloneDeepWith=ry,f.cloneWith=ny,f.conformsTo=iy,f.deburr=Fc,f.defaultTo=Bb,f.divide=oS,f.endsWith=cb,f.eq=Kn,f.escape=lb,f.escapeRegExp=pb,f.every=b_,f.find=T_,f.findIndex=nc,f.findKey=Ry,f.findLast=I_,f.findLastIndex=tc,f.findLastKey=xy,f.floor=uS,f.forEach=uc,f.forEachRight=dc,f.forIn=Ny,f.forInRight=Ly,f.forOwn=By,f.forOwnRight=My,f.get=oo,f.gt=ay,f.gte=sy,f.has=$y,f.hasIn=uo,f.head=ic,f.identity=mn,f.includes=C_,f.indexOf=Im,f.inRange=ob,f.invoke=zy,f.isArguments=or,f.isArray=Z,f.isArrayBuffer=oy,f.isArrayLike=fn,f.isArrayLikeObject=Me,f.isBoolean=uy,f.isBuffer=Vt,f.isDate=dy,f.isElement=cy,f.isEmpty=ly,f.isEqual=py,f.isEqualWith=hy,f.isError=ao,f.isFinite=fy,f.isFunction=vt,f.isInteger=_c,f.isLength=ma,f.isMap=yc,f.isMatch=gy,f.isMatchWith=my,f.isNaN=_y,f.isNative=yy,f.isNil=Sy,f.isNull=by,f.isNumber=bc,f.isObject=Pe,f.isObjectLike=xe,f.isPlainObject=si,f.isRegExp=so,f.isSafeInteger=Ty,f.isSet=Sc,f.isString=_a,f.isSymbol=vn,f.isTypedArray=Ur,f.isUndefined=Iy,f.isWeakMap=vy,f.isWeakSet=Dy,f.join=Cm,f.kebabCase=hb,f.last=Bn,f.lastIndexOf=Em,f.lowerCase=fb,f.lowerFirst=gb,f.lt=wy,f.lte=Ay,f.max=dS,f.maxBy=cS,f.mean=lS,f.meanBy=pS,f.min=hS,f.minBy=fS,f.stubArray=go,f.stubFalse=mo,f.stubObject=Zb,f.stubString=eS,f.stubTrue=nS,f.multiply=gS,f.nth=km,f.noConflict=zb,f.noop=fo,f.now=ha,f.pad=mb,f.padEnd=_b,f.padStart=yb,f.parseInt=bb,f.random=ub,f.reduce=O_,f.reduceRight=U_,f.repeat=Sb,f.replace=Tb,f.result=Xy,f.round=mS,f.runInContext=I,f.sample=x_,f.size=B_,f.snakeCase=Ib,f.some=M_,f.sortedIndex=Nm,f.sortedIndexBy=Lm,f.sortedIndexOf=Bm,f.sortedLastIndex=Mm,f.sortedLastIndexBy=qm,f.sortedLastIndexOf=Gm,f.startCase=Db,f.startsWith=wb,f.subtract=_S,f.sum=yS,f.sumBy=bS,f.template=Ab,f.times=tS,f.toFinite=Dt,f.toInteger=ne,f.toLength=Ic,f.toLower=Cb,f.toNumber=Mn,f.toSafeInteger=Cy,f.toString=ge,f.toUpper=Eb,f.trim=kb,f.trimEnd=Fb,f.trimStart=Pb,f.truncate=Ob,f.unescape=Ub,f.uniqueId=iS,f.upperCase=Rb,f.upperFirst=co,f.each=uc,f.eachRight=dc,f.first=ic,ho(f,function(){var e={};return ut(f,function(i,u){_e.call(f.prototype,u)||(e[u]=i)}),e}(),{chain:!1}),f.VERSION=a,Un(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){f[e].placeholder=f}),Un(["drop","take"],function(e,i){oe.prototype[e]=function(u){u=u===t?1:Ke(ne(u),0);var c=this.__filtered__&&!i?new oe(this):this.clone();return c.__filtered__?c.__takeCount__=rn(u,c.__takeCount__):c.__views__.push({size:rn(u,Fn),type:e+(c.__dir__<0?"Right":"")}),c},oe.prototype[e+"Right"]=function(u){return this.reverse()[e](u).reverse()}}),Un(["filter","map","takeWhile"],function(e,i){var u=i+1,c=u==Ei||u==ki;oe.prototype[e]=function(h){var g=this.clone();return g.__iteratees__.push({iteratee:H(h,3),type:u}),g.__filtered__=g.__filtered__||c,g}}),Un(["head","last"],function(e,i){var u="take"+(i?"Right":"");oe.prototype[e]=function(){return this[u](1).value()[0]}}),Un(["initial","tail"],function(e,i){var u="drop"+(i?"":"Right");oe.prototype[e]=function(){return this.__filtered__?new oe(this):this[u](1)}}),oe.prototype.compact=function(){return this.filter(mn)},oe.prototype.find=function(e){return this.filter(e).head()},oe.prototype.findLast=function(e){return this.reverse().find(e)},oe.prototype.invokeMap=re(function(e,i){return typeof e=="function"?new oe(this):this.map(function(u){return ei(u,e,i)})}),oe.prototype.reject=function(e){return this.filter(ga(H(e)))},oe.prototype.slice=function(e,i){e=ne(e);var u=this;return u.__filtered__&&(e>0||i<0)?new oe(u):(e<0?u=u.takeRight(-e):e&&(u=u.drop(e)),i!==t&&(i=ne(i),u=i<0?u.dropRight(-i):u.take(i-e)),u)},oe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},oe.prototype.toArray=function(){return this.take(Fn)},ut(oe.prototype,function(e,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),h=f[c?"take"+(i=="last"?"Right":""):i],g=c||/^find/.test(i);h&&(f.prototype[i]=function(){var y=this.__wrapped__,S=c?[1]:arguments,v=y instanceof oe,k=S[0],F=v||Z(y),R=function(ae){var de=h.apply(f,Lt([ae],S));return c&&L?de[0]:de};F&&u&&typeof k=="function"&&k.length!=1&&(v=F=!1);var L=this.__chain__,V=!!this.__actions__.length,Y=g&&!L,te=v&&!V;if(!g&&F){y=te?y:new oe(this);var K=e.apply(y,S);return K.__actions__.push({func:la,args:[R],thisArg:t}),new xn(K,L)}return Y&&te?e.apply(this,S):(K=this.thru(R),Y?c?K.value()[0]:K.value():K)})}),Un(["pop","push","shift","sort","splice","unshift"],function(e){var i=Li[e],u=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);f.prototype[e]=function(){var h=arguments;if(c&&!this.__chain__){var g=this.value();return i.apply(Z(g)?g:[],h)}return this[u](function(y){return i.apply(Z(y)?y:[],h)})}}),ut(oe.prototype,function(e,i){var u=f[i];if(u){var c=u.name+"";_e.call(Er,c)||(Er[c]=[]),Er[c].push({name:i,func:u})}}),Er[ia(t,ce).name]=[{name:"wrapper",func:t}],oe.prototype.clone=Uf,oe.prototype.reverse=Rf,oe.prototype.value=xf,f.prototype.at=c_,f.prototype.chain=l_,f.prototype.commit=p_,f.prototype.next=h_,f.prototype.plant=g_,f.prototype.reverse=m_,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=__,f.prototype.first=f.prototype.head,Hr&&(f.prototype[Hr]=f_),f},wr=pf();Zt?((Zt.exports=wr)._=wr,ls._=wr):Ze._=wr}).call(di)})(Pa,Pa.exports);var DI=Pa.exports;const Ft=vI(DI);function wI(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":{const n=r.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}function An(r,n){const t=a=>n.convert(a[r]);return{name:AI(r),key:r,asEnv:a=>({[r]:n.asString(a)}),zod:{type:n.type},get:t,getOrDefault:(a,s)=>t(a)??s}}function AI(r){return r.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}An("MAGIDOC_GENERATE",wI());function Sa(r){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(r(n)).optional()}}function nl(r){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(r(n).optional()).optional()}}function Ta(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function tl(r){return{convert:n=>n==null||!r.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(r).optional()}}var qa={APP_LOGO:An("APP_LOGO",Ta()),APP_TITLE:An("APP_TITLE",Ta()),APP_FAVICON:An("APP_FAVICON",Ta()),SITE_ROOT:An("SITE_ROOT",Ta()),SITE_META:An("SITE_META",nl(r=>r.string())),CUSTOM_STYLES:An("CUSTOM_STYLES",Sa(r=>r.string())),FIELDS_SORTING:An("FIELDS_SORTING",tl(["default","alphabetical"])),ARGUMENTS_SORTING:An("ARGUMENTS_SORTING",tl(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:An("QUERY_GENERATION_FACTORIES",nl(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:An("PAGES",Sa(r=>{const n=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(n),r.string().min(1)])}));return n})),EXTERNAL_LINKS:An("EXTERNAL_LINKS",Sa(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:An("DIRECTIVES",Sa(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};const CI="Sling Commerce GraphQl",EI="https://styles.redditmedia.com/t5_35q6u/styles/communityIcon_snvtzbtcp8hd1.png",kI='[{"title":"Sling Commerce GraphQl","content":"\\n# Sling Adobe Commerce\\nSling TV is the first app-based TV service letting you stream live television and on-demand content over the internet. Watch live shows wherever you are, at home or on the go! With Sling TV, you get to choose the television option perfect for you, including Channel Add-ons, Premiums Add-ons, DVR Plus and more. Watching live TV is easier and more affordable with Sling - the way TV should be!\\n"}]',FI="true",Ml={APP_TITLE:CI,APP_LOGO:EI,PAGES:kI,MAGIDOC_GENERATE:FI};function vw(r){return r.get(Ml)}function Ga(r,n){return r.getOrDefault(Ml,n)}function $a(){return Ga(qa.SITE_ROOT,wS)}class PI{constructor(n){ye(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var gi;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(gi||(gi={}));function le(r,n){if(!!!r)throw new Error(n)}function Pt(r){return typeof r=="object"&&r!==null}function et(r,n){if(!!!r)throw new Error(n??"Unexpected invariant triggered.")}const OI=/\r\n|[\n\r]/g;function Ao(r,n){let t=0,a=1;for(const s of r.body.matchAll(OI)){if(typeof s.index=="number"||et(!1),s.index>=n)break;t=s.index+s[0].length,a+=1}return{line:a,column:n+1-t}}function UI(r){return ql(r.source,Ao(r.source,r.start))}function ql(r,n){const t=r.locationOffset.column-1,a="".padStart(t)+r.body,s=n.line-1,o=r.locationOffset.line-1,d=n.line+o,l=n.line===1?t:0,p=n.column+l,m=`${r.name}:${d}:${p}
`,_=a.split(/\r\n|[\n\r]/g),b=_[s];if(b.length>120){const O=Math.floor(p/80),C=p%80,E=[];for(let N=0;N<b.length;N+=80)E.push(b.slice(N,N+80));return m+rl([[`${d} |`,E[0]],...E.slice(1,O+1).map(N=>["|",N]),["|","^".padStart(C)],["|",E[O+1]]])}return m+rl([[`${d-1} |`,_[s-1]],[`${d} |`,b],["|","^".padStart(p)],[`${d+1} |`,_[s+1]]])}function rl(r){const n=r.filter(([a,s])=>s!==void 0),t=Math.max(...n.map(([a])=>a.length));return n.map(([a,s])=>a.padStart(t)+(s?" "+s:"")).join(`
`)}function RI(r){const n=r[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:n}class x extends Error{constructor(n,...t){var a,s,o;const{nodes:d,source:l,positions:p,path:m,originalError:_,extensions:b}=RI(t);super(n),this.name="GraphQLError",this.path=m??void 0,this.originalError=_??void 0,this.nodes=il(Array.isArray(d)?d:d?[d]:void 0);const O=il((a=this.nodes)===null||a===void 0?void 0:a.map(E=>E.loc).filter(E=>E!=null));this.source=l??(O==null||(s=O[0])===null||s===void 0?void 0:s.source),this.positions=p??(O==null?void 0:O.map(E=>E.start)),this.locations=p&&l?p.map(E=>Ao(l,E)):O==null?void 0:O.map(E=>Ao(E.source,E.start));const C=Pt(_==null?void 0:_.extensions)?_==null?void 0:_.extensions:void 0;this.extensions=(o=b??C)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),_!=null&&_.stack?Object.defineProperty(this,"stack",{value:_.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,x):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+UI(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+ql(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function il(r){return r===void 0||r.length===0?void 0:r}function Qe(r,n,t){return new x(`Syntax Error: ${t}`,{source:r,positions:[n]})}class xI{constructor(n,t,a){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=a}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Gl{constructor(n,t,a,s,o,d){this.kind=n,this.start=t,this.end=a,this.line=s,this.column=o,this.value=d,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const $l={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},NI=new Set(Object.keys($l));function al(r){const n=r==null?void 0:r.kind;return typeof n=="string"&&NI.has(n)}var Gn;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})(Gn||(Gn={}));var W;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(W||(W={}));var T;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(T||(T={}));function Co(r){return r===9||r===32}function Si(r){return r>=48&&r<=57}function jl(r){return r>=97&&r<=122||r>=65&&r<=90}function Ho(r){return jl(r)||r===95}function Vl(r){return jl(r)||Si(r)||r===95}function LI(r){var n;let t=Number.MAX_SAFE_INTEGER,a=null,s=-1;for(let d=0;d<r.length;++d){var o;const l=r[d],p=BI(l);p!==l.length&&(a=(o=a)!==null&&o!==void 0?o:d,s=d,d!==0&&p<t&&(t=p))}return r.map((d,l)=>l===0?d:d.slice(t)).slice((n=a)!==null&&n!==void 0?n:0,s+1)}function BI(r){let n=0;for(;n<r.length&&Co(r.charCodeAt(n));)++n;return n}function MI(r,n){const t=r.replace(/"""/g,'\\"""'),a=t.split(/\r\n|[\n\r]/g),s=a.length===1,o=a.length>1&&a.slice(1).every(C=>C.length===0||Co(C.charCodeAt(0))),d=t.endsWith('\\"""'),l=r.endsWith('"')&&!d,p=r.endsWith("\\"),m=l||p,_=!s||r.length>70||m||o||d;let b="";const O=s&&Co(r.charCodeAt(0));return(_&&!O||o)&&(b+=`
`),b+=t,(_||m)&&(b+=`
`),'"""'+b+'"""'}var P;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(P||(P={}));class qI{constructor(n){const t=new Gl(P.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==P.EOF)do if(n.next)n=n.next;else{const t=$I(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===P.COMMENT);return n}}function GI(r){return r===P.BANG||r===P.DOLLAR||r===P.AMP||r===P.PAREN_L||r===P.PAREN_R||r===P.SPREAD||r===P.COLON||r===P.EQUALS||r===P.AT||r===P.BRACKET_L||r===P.BRACKET_R||r===P.BRACE_L||r===P.PIPE||r===P.BRACE_R}function Br(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function ja(r,n){return zl(r.charCodeAt(n))&&Wl(r.charCodeAt(n+1))}function zl(r){return r>=55296&&r<=56319}function Wl(r){return r>=56320&&r<=57343}function pr(r,n){const t=r.source.body.codePointAt(n);if(t===void 0)return P.EOF;if(t>=32&&t<=126){const a=String.fromCodePoint(t);return a==='"'?`'"'`:`"${a}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ve(r,n,t,a,s){const o=r.line,d=1+t-r.lineStart;return new Gl(n,t,a,o,d,s)}function $I(r,n){const t=r.source.body,a=t.length;let s=n;for(;s<a;){const o=t.charCodeAt(s);switch(o){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++r.line,r.lineStart=s;continue;case 13:t.charCodeAt(s+1)===10?s+=2:++s,++r.line,r.lineStart=s;continue;case 35:return jI(r,s);case 33:return Ve(r,P.BANG,s,s+1);case 36:return Ve(r,P.DOLLAR,s,s+1);case 38:return Ve(r,P.AMP,s,s+1);case 40:return Ve(r,P.PAREN_L,s,s+1);case 41:return Ve(r,P.PAREN_R,s,s+1);case 46:if(t.charCodeAt(s+1)===46&&t.charCodeAt(s+2)===46)return Ve(r,P.SPREAD,s,s+3);break;case 58:return Ve(r,P.COLON,s,s+1);case 61:return Ve(r,P.EQUALS,s,s+1);case 64:return Ve(r,P.AT,s,s+1);case 91:return Ve(r,P.BRACKET_L,s,s+1);case 93:return Ve(r,P.BRACKET_R,s,s+1);case 123:return Ve(r,P.BRACE_L,s,s+1);case 124:return Ve(r,P.PIPE,s,s+1);case 125:return Ve(r,P.BRACE_R,s,s+1);case 34:return t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34?KI(r,s):zI(r,s)}if(Si(o)||o===45)return VI(r,s,o);if(Ho(o))return JI(r,s);throw Qe(r.source,s,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Br(o)||ja(t,s)?`Unexpected character: ${pr(r,s)}.`:`Invalid character: ${pr(r,s)}.`)}return Ve(r,P.EOF,a,a)}function jI(r,n){const t=r.source.body,a=t.length;let s=n+1;for(;s<a;){const o=t.charCodeAt(s);if(o===10||o===13)break;if(Br(o))++s;else if(ja(t,s))s+=2;else break}return Ve(r,P.COMMENT,n,s,t.slice(n+1,s))}function VI(r,n,t){const a=r.source.body;let s=n,o=t,d=!1;if(o===45&&(o=a.charCodeAt(++s)),o===48){if(o=a.charCodeAt(++s),Si(o))throw Qe(r.source,s,`Invalid number, unexpected digit after 0: ${pr(r,s)}.`)}else s=bo(r,s,o),o=a.charCodeAt(s);if(o===46&&(d=!0,o=a.charCodeAt(++s),s=bo(r,s,o),o=a.charCodeAt(s)),(o===69||o===101)&&(d=!0,o=a.charCodeAt(++s),(o===43||o===45)&&(o=a.charCodeAt(++s)),s=bo(r,s,o),o=a.charCodeAt(s)),o===46||Ho(o))throw Qe(r.source,s,`Invalid number, expected digit but got: ${pr(r,s)}.`);return Ve(r,d?P.FLOAT:P.INT,n,s,a.slice(n,s))}function bo(r,n,t){if(!Si(t))throw Qe(r.source,n,`Invalid number, expected digit but got: ${pr(r,n)}.`);const a=r.source.body;let s=n+1;for(;Si(a.charCodeAt(s));)++s;return s}function zI(r,n){const t=r.source.body,a=t.length;let s=n+1,o=s,d="";for(;s<a;){const l=t.charCodeAt(s);if(l===34)return d+=t.slice(o,s),Ve(r,P.STRING,n,s+1,d);if(l===92){d+=t.slice(o,s);const p=t.charCodeAt(s+1)===117?t.charCodeAt(s+2)===123?WI(r,s):HI(r,s):YI(r,s);d+=p.value,s+=p.size,o=s;continue}if(l===10||l===13)break;if(Br(l))++s;else if(ja(t,s))s+=2;else throw Qe(r.source,s,`Invalid character within String: ${pr(r,s)}.`)}throw Qe(r.source,s,"Unterminated string.")}function WI(r,n){const t=r.source.body;let a=0,s=3;for(;s<12;){const o=t.charCodeAt(n+s++);if(o===125){if(s<5||!Br(a))break;return{value:String.fromCodePoint(a),size:s}}if(a=a<<4|ci(o),a<0)break}throw Qe(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+s)}".`)}function HI(r,n){const t=r.source.body,a=sl(t,n+2);if(Br(a))return{value:String.fromCodePoint(a),size:6};if(zl(a)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const s=sl(t,n+8);if(Wl(s))return{value:String.fromCodePoint(a,s),size:12}}throw Qe(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function sl(r,n){return ci(r.charCodeAt(n))<<12|ci(r.charCodeAt(n+1))<<8|ci(r.charCodeAt(n+2))<<4|ci(r.charCodeAt(n+3))}function ci(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function YI(r,n){const t=r.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Qe(r.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function KI(r,n){const t=r.source.body,a=t.length;let s=r.lineStart,o=n+3,d=o,l="";const p=[];for(;o<a;){const m=t.charCodeAt(o);if(m===34&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34){l+=t.slice(d,o),p.push(l);const _=Ve(r,P.BLOCK_STRING,n,o+3,LI(p).join(`
`));return r.line+=p.length-1,r.lineStart=s,_}if(m===92&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34&&t.charCodeAt(o+3)===34){l+=t.slice(d,o),d=o+1,o+=4;continue}if(m===10||m===13){l+=t.slice(d,o),p.push(l),m===13&&t.charCodeAt(o+1)===10?o+=2:++o,l="",d=o,s=o;continue}if(Br(m))++o;else if(ja(t,o))o+=2;else throw Qe(r.source,o,`Invalid character within String: ${pr(r,o)}.`)}throw Qe(r.source,o,"Unterminated string.")}function JI(r,n){const t=r.source.body,a=t.length;let s=n+1;for(;s<a;){const o=t.charCodeAt(s);if(Vl(o))++s;else break}return Ve(r,P.NAME,n,s,t.slice(n,s))}const QI=10,Hl=2;function M(r){return Va(r,[])}function Va(r,n){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return XI(r,n);default:return String(r)}}function XI(r,n){if(r===null)return"null";if(n.includes(r))return"[Circular]";const t=[...n,r];if(ZI(r)){const a=r.toJSON();if(a!==r)return typeof a=="string"?a:Va(a,t)}else if(Array.isArray(r))return nv(r,t);return ev(r,t)}function ZI(r){return typeof r.toJSON=="function"}function ev(r,n){const t=Object.entries(r);return t.length===0?"{}":n.length>Hl?"["+tv(r)+"]":"{ "+t.map(([s,o])=>s+": "+Va(o,n)).join(", ")+" }"}function nv(r,n){if(r.length===0)return"[]";if(n.length>Hl)return"[Array]";const t=Math.min(QI,r.length),a=r.length-t,s=[];for(let o=0;o<t;++o)s.push(Va(r[o],n));return a===1?s.push("... 1 more item"):a>1&&s.push(`... ${a} more items`),"["+s.join(", ")+"]"}function tv(r){const n=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const rv=globalThis.process&&!0,ft=rv?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var a;const s=t.prototype[Symbol.toStringTag],o=Symbol.toStringTag in n?n[Symbol.toStringTag]:(a=n.constructor)===null||a===void 0?void 0:a.name;if(s===o){const d=M(n);throw new Error(`Cannot use ${s} "${d}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Yl{constructor(n,t="GraphQL request",a={line:1,column:1}){typeof n=="string"||le(!1,`Body must be a string. Received: ${M(n)}.`),this.body=n,this.name=t,this.locationOffset=a,this.locationOffset.line>0||le(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||le(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function iv(r){return ft(r,Yl)}function av(r,n){return new Kl(r,n).parseDocument()}function sv(r,n){const t=new Kl(r,n);t.expectToken(P.SOF);const a=t.parseValueLiteral(!1);return t.expectToken(P.EOF),a}class Kl{constructor(n,t={}){const a=iv(n)?n:new Yl(n);this._lexer=new qI(a),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(P.NAME);return this.node(n,{kind:T.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:T.DOCUMENT,definitions:this.many(P.SOF,this.parseDefinition,P.EOF)})}parseDefinition(){if(this.peek(P.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===P.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Qe(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(P.BRACE_L))return this.node(n,{kind:T.OPERATION_DEFINITION,operation:Gn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let a;return this.peek(P.NAME)&&(a=this.parseName()),this.node(n,{kind:T.OPERATION_DEFINITION,operation:t,name:a,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(P.NAME);switch(n.value){case"query":return Gn.QUERY;case"mutation":return Gn.MUTATION;case"subscription":return Gn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(P.PAREN_L,this.parseVariableDefinition,P.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:T.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(P.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(P.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(P.DOLLAR),this.node(n,{kind:T.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:T.SELECTION_SET,selections:this.many(P.BRACE_L,this.parseSelection,P.BRACE_R)})}parseSelection(){return this.peek(P.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let a,s;return this.expectOptionalToken(P.COLON)?(a=t,s=this.parseName()):s=t,this.node(n,{kind:T.FIELD,alias:a,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(P.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(P.PAREN_L,t,P.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,a=this.parseName();return this.expectToken(P.COLON),this.node(t,{kind:T.ARGUMENT,name:a,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(P.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(P.NAME)?this.node(n,{kind:T.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:T.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case P.BRACKET_L:return this.parseList(n);case P.BRACE_L:return this.parseObject(n);case P.INT:return this.advanceLexer(),this.node(t,{kind:T.INT,value:t.value});case P.FLOAT:return this.advanceLexer(),this.node(t,{kind:T.FLOAT,value:t.value});case P.STRING:case P.BLOCK_STRING:return this.parseStringLiteral();case P.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:T.BOOLEAN,value:!0});case"false":return this.node(t,{kind:T.BOOLEAN,value:!1});case"null":return this.node(t,{kind:T.NULL});default:return this.node(t,{kind:T.ENUM,value:t.value})}case P.DOLLAR:if(n)if(this.expectToken(P.DOLLAR),this._lexer.token.kind===P.NAME){const a=this._lexer.token.value;throw Qe(this._lexer.source,t.start,`Unexpected variable "$${a}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:T.STRING,value:n.value,block:n.kind===P.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:T.LIST,values:this.any(P.BRACKET_L,t,P.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:T.OBJECT,fields:this.any(P.BRACE_L,t,P.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,a=this.parseName();return this.expectToken(P.COLON),this.node(t,{kind:T.OBJECT_FIELD,name:a,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(P.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(P.AT),this.node(t,{kind:T.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(P.BRACKET_L)){const a=this.parseTypeReference();this.expectToken(P.BRACKET_R),t=this.node(n,{kind:T.LIST_TYPE,type:a})}else t=this.parseNamedType();return this.expectOptionalToken(P.BANG)?this.node(n,{kind:T.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:T.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(P.STRING)||this.peek(P.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const a=this.parseConstDirectives(),s=this.many(P.BRACE_L,this.parseOperationTypeDefinition,P.BRACE_R);return this.node(n,{kind:T.SCHEMA_DEFINITION,description:t,directives:a,operationTypes:s})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(P.COLON);const a=this.parseNamedType();return this.node(n,{kind:T.OPERATION_TYPE_DEFINITION,operation:t,type:a})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const a=this.parseName(),s=this.parseConstDirectives();return this.node(n,{kind:T.SCALAR_TYPE_DEFINITION,description:t,name:a,directives:s})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),d=this.parseFieldsDefinition();return this.node(n,{kind:T.OBJECT_TYPE_DEFINITION,description:t,name:a,interfaces:s,directives:o,fields:d})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(P.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(P.BRACE_L,this.parseFieldDefinition,P.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),a=this.parseName(),s=this.parseArgumentDefs();this.expectToken(P.COLON);const o=this.parseTypeReference(),d=this.parseConstDirectives();return this.node(n,{kind:T.FIELD_DEFINITION,description:t,name:a,arguments:s,type:o,directives:d})}parseArgumentDefs(){return this.optionalMany(P.PAREN_L,this.parseInputValueDef,P.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),a=this.parseName();this.expectToken(P.COLON);const s=this.parseTypeReference();let o;this.expectOptionalToken(P.EQUALS)&&(o=this.parseConstValueLiteral());const d=this.parseConstDirectives();return this.node(n,{kind:T.INPUT_VALUE_DEFINITION,description:t,name:a,type:s,defaultValue:o,directives:d})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),d=this.parseFieldsDefinition();return this.node(n,{kind:T.INTERFACE_TYPE_DEFINITION,description:t,name:a,interfaces:s,directives:o,fields:d})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const a=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(n,{kind:T.UNION_TYPE_DEFINITION,description:t,name:a,directives:s,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(P.EQUALS)?this.delimitedMany(P.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const a=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(n,{kind:T.ENUM_TYPE_DEFINITION,description:t,name:a,directives:s,values:o})}parseEnumValuesDefinition(){return this.optionalMany(P.BRACE_L,this.parseEnumValueDefinition,P.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),a=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(n,{kind:T.ENUM_VALUE_DEFINITION,description:t,name:a,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Qe(this._lexer.source,this._lexer.token.start,`${Ia(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const a=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(n,{kind:T.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:a,directives:s,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(P.BRACE_L,this.parseInputValueDef,P.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===P.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),a=this.optionalMany(P.BRACE_L,this.parseOperationTypeDefinition,P.BRACE_R);if(t.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:T.SCHEMA_EXTENSION,directives:t,operationTypes:a})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),a=this.parseConstDirectives();if(a.length===0)throw this.unexpected();return this.node(n,{kind:T.SCALAR_TYPE_EXTENSION,name:t,directives:a})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:T.OBJECT_TYPE_EXTENSION,name:t,interfaces:a,directives:s,fields:o})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:T.INTERFACE_TYPE_EXTENSION,name:t,interfaces:a,directives:s,fields:o})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),a=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(a.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:T.UNION_TYPE_EXTENSION,name:t,directives:a,types:s})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),a=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:T.ENUM_TYPE_EXTENSION,name:t,directives:a,values:s})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),a=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:T.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:a,fields:s})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(P.AT);const a=this.parseName(),s=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const d=this.parseDirectiveLocations();return this.node(n,{kind:T.DIRECTIVE_DEFINITION,description:t,name:a,arguments:s,repeatable:o,locations:d})}parseDirectiveLocations(){return this.delimitedMany(P.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(W,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new xI(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Qe(this._lexer.source,t.start,`Expected ${Jl(n)}, found ${Ia(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===P.NAME&&t.value===n)this.advanceLexer();else throw Qe(this._lexer.source,t.start,`Expected "${n}", found ${Ia(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===P.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Qe(this._lexer.source,t.start,`Unexpected ${Ia(t)}.`)}any(n,t,a){this.expectToken(n);const s=[];for(;!this.expectOptionalToken(a);)s.push(t.call(this));return s}optionalMany(n,t,a){if(this.expectOptionalToken(n)){const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(a));return s}return[]}many(n,t,a){this.expectToken(n);const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(a));return s}delimitedMany(n,t){this.expectOptionalToken(n);const a=[];do a.push(t.call(this));while(this.expectOptionalToken(n));return a}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==P.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Qe(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function Ia(r){const n=r.value;return Jl(r.kind)+(n!=null?` "${n}"`:"")}function Jl(r){return GI(r)?`"${r}"`:r}const ov=5;function Kt(r,n){const[t,a]=n?[r,n]:[void 0,r];let s=" Did you mean ";t&&(s+=t+" ");const o=a.map(p=>`"${p}"`);switch(o.length){case 0:return"";case 1:return s+o[0]+"?";case 2:return s+o[0]+" or "+o[1]+"?"}const d=o.slice(0,ov),l=d.pop();return s+d.join(", ")+", or "+l+"?"}function ol(r){return r}function hr(r,n){const t=Object.create(null);for(const a of r)t[n(a)]=a;return t}function dr(r,n,t){const a=Object.create(null);for(const s of r)a[n(s)]=t(s);return a}function At(r,n){const t=Object.create(null);for(const a of Object.keys(r))t[a]=n(r[a],a);return t}function Yo(r,n){let t=0,a=0;for(;t<r.length&&a<n.length;){let s=r.charCodeAt(t),o=n.charCodeAt(a);if(va(s)&&va(o)){let d=0;do++t,d=d*10+s-Eo,s=r.charCodeAt(t);while(va(s)&&d>0);let l=0;do++a,l=l*10+o-Eo,o=n.charCodeAt(a);while(va(o)&&l>0);if(d<l)return-1;if(d>l)return 1}else{if(s<o)return-1;if(s>o)return 1;++t,++a}}return r.length-n.length}const Eo=48,uv=57;function va(r){return!isNaN(r)&&Eo<=r&&r<=uv}function _r(r,n){const t=Object.create(null),a=new dv(r),s=Math.floor(r.length*.4)+1;for(const o of n){const d=a.measure(o,s);d!==void 0&&(t[o]=d)}return Object.keys(t).sort((o,d)=>{const l=t[o]-t[d];return l!==0?l:Yo(o,d)})}class dv{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=ul(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const a=n.toLowerCase();if(this._inputLowerCase===a)return 1;let s=ul(a),o=this._inputArray;if(s.length<o.length){const _=s;s=o,o=_}const d=s.length,l=o.length;if(d-l>t)return;const p=this._rows;for(let _=0;_<=l;_++)p[0][_]=_;for(let _=1;_<=d;_++){const b=p[(_-1)%3],O=p[_%3];let C=O[0]=_;for(let E=1;E<=l;E++){const N=s[_-1]===o[E-1]?0:1;let z=Math.min(b[E]+1,O[E-1]+1,b[E-1]+N);if(_>1&&E>1&&s[_-1]===o[E-2]&&s[_-2]===o[E-1]){const ce=p[(_-2)%3][E-2];z=Math.min(z,ce+1)}z<C&&(C=z),O[E]=z}if(C>t)return}const m=p[d%3][l];return m<=t?m:void 0}}function ul(r){const n=r.length,t=new Array(n);for(let a=0;a<n;++a)t[a]=r.charCodeAt(a);return t}function jn(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const n=Object.create(null);for(const[t,a]of Object.entries(r))n[t]=a;return n}function cv(r){return`"${r.replace(lv,pv)}"`}const lv=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function pv(r){return hv[r.charCodeAt(0)]}const hv=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],li=Object.freeze({});function Ql(r,n,t=$l){const a=new Map;for(const ce of Object.values(T))a.set(ce,Xl(n,ce));let s,o=Array.isArray(r),d=[r],l=-1,p=[],m=r,_,b;const O=[],C=[];do{l++;const ce=l===d.length,Ae=ce&&p.length!==0;if(ce){if(_=C.length===0?void 0:O[O.length-1],m=b,b=C.pop(),Ae)if(o){m=m.slice();let Fe=0;for(const[je,He]of p){const Re=je-Fe;He===null?(m.splice(Re,1),Fe++):m[Re]=He}}else{m=Object.defineProperties({},Object.getOwnPropertyDescriptors(m));for(const[Fe,je]of p)m[Fe]=je}l=s.index,d=s.keys,p=s.edits,o=s.inArray,s=s.prev}else if(b){if(_=o?l:d[l],m=b[_],m==null)continue;O.push(_)}let me;if(!Array.isArray(m)){var E,N;al(m)||le(!1,`Invalid AST Node: ${M(m)}.`);const Fe=ce?(E=a.get(m.kind))===null||E===void 0?void 0:E.leave:(N=a.get(m.kind))===null||N===void 0?void 0:N.enter;if(me=Fe==null?void 0:Fe.call(n,m,_,b,O,C),me===li)break;if(me===!1){if(!ce){O.pop();continue}}else if(me!==void 0&&(p.push([_,me]),!ce))if(al(me))m=me;else{O.pop();continue}}if(me===void 0&&Ae&&p.push([_,m]),ce)O.pop();else{var z;s={inArray:o,index:l,keys:d,edits:p,prev:s},o=Array.isArray(m),d=o?m:(z=t[m.kind])!==null&&z!==void 0?z:[],l=-1,p=[],b&&C.push(b),b=m}}while(s!==void 0);return p.length!==0?p[p.length-1][1]:r}function fv(r){const n=new Array(r.length).fill(null),t=Object.create(null);for(const a of Object.values(T)){let s=!1;const o=new Array(r.length).fill(void 0),d=new Array(r.length).fill(void 0);for(let p=0;p<r.length;++p){const{enter:m,leave:_}=Xl(r[p],a);s||(s=m!=null||_!=null),o[p]=m,d[p]=_}if(!s)continue;const l={enter(...p){const m=p[0];for(let b=0;b<r.length;b++)if(n[b]===null){var _;const O=(_=o[b])===null||_===void 0?void 0:_.apply(r[b],p);if(O===!1)n[b]=m;else if(O===li)n[b]=li;else if(O!==void 0)return O}},leave(...p){const m=p[0];for(let b=0;b<r.length;b++)if(n[b]===null){var _;const O=(_=d[b])===null||_===void 0?void 0:_.apply(r[b],p);if(O===li)n[b]=li;else if(O!==void 0&&O!==!1)return O}else n[b]===m&&(n[b]=null)}};t[a]=l}return t}function Xl(r,n){const t=r[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function Xe(r){return Ql(r,mv)}const gv=80,mv={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>j(r.definitions,`

`)},OperationDefinition:{leave(r){const n=ue("(",j(r.variableDefinitions,", "),")"),t=j([r.operation,j([r.name,n]),j(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:n,defaultValue:t,directives:a})=>r+": "+n+ue(" = ",t)+ue(" ",j(a," "))},SelectionSet:{leave:({selections:r})=>Qn(r)},Field:{leave({alias:r,name:n,arguments:t,directives:a,selectionSet:s}){const o=ue("",r,": ")+n;let d=o+ue("(",j(t,", "),")");return d.length>gv&&(d=o+ue(`(
`,Aa(j(t,`
`)),`
)`)),j([d,j(a," "),s]," ")}},Argument:{leave:({name:r,value:n})=>r+": "+n},FragmentSpread:{leave:({name:r,directives:n})=>"..."+r+ue(" ",j(n," "))},InlineFragment:{leave:({typeCondition:r,directives:n,selectionSet:t})=>j(["...",ue("on ",r),j(n," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:n,variableDefinitions:t,directives:a,selectionSet:s})=>`fragment ${r}${ue("(",j(t,", "),")")} on ${n} ${ue("",j(a," ")," ")}`+s},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:n})=>n?MI(r):cv(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+j(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+j(r,", ")+"}"},ObjectField:{leave:({name:r,value:n})=>r+": "+n},Directive:{leave:({name:r,arguments:n})=>"@"+r+ue("(",j(n,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:n,operationTypes:t})=>ue("",r,`
`)+j(["schema",j(n," "),Qn(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:n})=>r+": "+n},ScalarTypeDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+j(["scalar",n,j(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:a,fields:s})=>ue("",r,`
`)+j(["type",n,ue("implements ",j(t," & ")),j(a," "),Qn(s)]," ")},FieldDefinition:{leave:({description:r,name:n,arguments:t,type:a,directives:s})=>ue("",r,`
`)+n+(dl(t)?ue(`(
`,Aa(j(t,`
`)),`
)`):ue("(",j(t,", "),")"))+": "+a+ue(" ",j(s," "))},InputValueDefinition:{leave:({description:r,name:n,type:t,defaultValue:a,directives:s})=>ue("",r,`
`)+j([n+": "+t,ue("= ",a),j(s," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:a,fields:s})=>ue("",r,`
`)+j(["interface",n,ue("implements ",j(t," & ")),j(a," "),Qn(s)]," ")},UnionTypeDefinition:{leave:({description:r,name:n,directives:t,types:a})=>ue("",r,`
`)+j(["union",n,j(t," "),ue("= ",j(a," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:n,directives:t,values:a})=>ue("",r,`
`)+j(["enum",n,j(t," "),Qn(a)]," ")},EnumValueDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+j([n,j(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:n,directives:t,fields:a})=>ue("",r,`
`)+j(["input",n,j(t," "),Qn(a)]," ")},DirectiveDefinition:{leave:({description:r,name:n,arguments:t,repeatable:a,locations:s})=>ue("",r,`
`)+"directive @"+n+(dl(t)?ue(`(
`,Aa(j(t,`
`)),`
)`):ue("(",j(t,", "),")"))+(a?" repeatable":"")+" on "+j(s," | ")},SchemaExtension:{leave:({directives:r,operationTypes:n})=>j(["extend schema",j(r," "),Qn(n)]," ")},ScalarTypeExtension:{leave:({name:r,directives:n})=>j(["extend scalar",r,j(n," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:a})=>j(["extend type",r,ue("implements ",j(n," & ")),j(t," "),Qn(a)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:a})=>j(["extend interface",r,ue("implements ",j(n," & ")),j(t," "),Qn(a)]," ")},UnionTypeExtension:{leave:({name:r,directives:n,types:t})=>j(["extend union",r,j(n," "),ue("= ",j(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:n,values:t})=>j(["extend enum",r,j(n," "),Qn(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:n,fields:t})=>j(["extend input",r,j(n," "),Qn(t)]," ")}};function j(r,n=""){var t;return(t=r==null?void 0:r.filter(a=>a).join(n))!==null&&t!==void 0?t:""}function Qn(r){return ue(`{
`,Aa(j(r,`
`)),`
}`)}function ue(r,n,t=""){return n!=null&&n!==""?r+n+t:""}function Aa(r){return ue("  ",r.replace(/\n/g,`
  `))}function dl(r){var n;return(n=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function ko(r,n){switch(r.kind){case T.NULL:return null;case T.INT:return parseInt(r.value,10);case T.FLOAT:return parseFloat(r.value);case T.STRING:case T.ENUM:case T.BOOLEAN:return r.value;case T.LIST:return r.values.map(t=>ko(t,n));case T.OBJECT:return dr(r.fields,t=>t.name.value,t=>ko(t.value,n));case T.VARIABLE:return n==null?void 0:n[r.name.value]}}function st(r){if(r!=null||le(!1,"Must provide name."),typeof r=="string"||le(!1,"Expected name to be a string."),r.length===0)throw new x("Expected name to be a non-empty string.");for(let n=1;n<r.length;++n)if(!Vl(r.charCodeAt(n)))throw new x(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!Ho(r.charCodeAt(0)))throw new x(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function _v(r){if(r==="true"||r==="false"||r==="null")throw new x(`Enum values cannot be named: ${r}`);return st(r)}function Ko(r){return Jt(r)||We(r)||$e(r)||$n(r)||nt(r)||yn(r)||bn(r)||we(r)}function Jt(r){return ft(r,Ot)}function We(r){return ft(r,pt)}function yv(r){if(!We(r))throw new Error(`Expected ${M(r)} to be a GraphQL Object type.`);return r}function $e(r){return ft(r,Oa)}function bv(r){if(!$e(r))throw new Error(`Expected ${M(r)} to be a GraphQL Interface type.`);return r}function $n(r){return ft(r,Ua)}function nt(r){return ft(r,Lr)}function yn(r){return ft(r,Ra)}function bn(r){return ft(r,ln)}function we(r){return ft(r,ie)}function Jo(r){return Jt(r)||nt(r)||yn(r)||Qo(r)&&Jo(r.ofType)}function Zl(r){return Jt(r)||We(r)||$e(r)||$n(r)||nt(r)||Qo(r)&&Zl(r.ofType)}function Nr(r){return Jt(r)||nt(r)}function Ti(r){return We(r)||$e(r)||$n(r)}function cr(r){return $e(r)||$n(r)}class ln{constructor(n){Ko(n)||le(!1,`Expected ${M(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ie{constructor(n){ep(n)||le(!1,`Expected ${M(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Qo(r){return bn(r)||we(r)}function ep(r){return Ko(r)&&!we(r)}function Sv(r){if(!ep(r))throw new Error(`Expected ${M(r)} to be a GraphQL nullable type.`);return r}function Tv(r){if(r)return we(r)?r.ofType:r}function Dw(r){return Jt(r)||We(r)||$e(r)||$n(r)||nt(r)||yn(r)}function fr(r){if(r){let n=r;for(;Qo(n);)n=n.ofType;return n}}function np(r){return typeof r=="function"?r():r}function tp(r){return typeof r=="function"?r():r}class Ot{constructor(n){var t,a,s,o;const d=(t=n.parseValue)!==null&&t!==void 0?t:ol;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(a=n.serialize)!==null&&a!==void 0?a:ol,this.parseValue=d,this.parseLiteral=(s=n.parseLiteral)!==null&&s!==void 0?s:(l,p)=>d(ko(l,p)),this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(o=n.extensionASTNodes)!==null&&o!==void 0?o:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||le(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${M(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||le(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||le(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class pt{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>ip(n),this._interfaces=()=>rp(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||le(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${M(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:sp(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function rp(r){var n;const t=np((n=r.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||le(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function ip(r){const n=tp(r.fields);return xr(n)||le(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),At(n,(t,a)=>{var s;xr(t)||le(!1,`${r.name}.${a} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||le(!1,`${r.name}.${a} field resolver must be a function if provided, but got: ${M(t.resolve)}.`);const o=(s=t.args)!==null&&s!==void 0?s:{};return xr(o)||le(!1,`${r.name}.${a} args must be an object with argument names as keys.`),{name:st(a),description:t.description,type:t.type,args:ap(o),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:jn(t.extensions),astNode:t.astNode}})}function ap(r){return Object.entries(r).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:jn(t.extensions),astNode:t.astNode}))}function xr(r){return Pt(r)&&!Array.isArray(r)}function sp(r){return At(r,n=>({description:n.description,type:n.type,args:op(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function op(r){return dr(r,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function up(r){return we(r.type)&&r.defaultValue===void 0}class Oa{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=ip.bind(void 0,n),this._interfaces=rp.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||le(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:sp(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ua{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=Iv.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||le(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Iv(r){const n=np(r.types);return Array.isArray(n)||le(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),n}class Lr{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:cl(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=cl(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=hr(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(a=>[a.value,a])));const t=this._valueLookup.get(n);if(t===void 0)throw new x(`Enum "${this.name}" cannot represent value: ${M(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const a=M(n);throw new x(`Enum "${this.name}" cannot represent non-string value: ${a}.`+Da(this,a))}const t=this.getValue(n);if(t==null)throw new x(`Value "${n}" does not exist in "${this.name}" enum.`+Da(this,n));return t.value}parseLiteral(n,t){if(n.kind!==T.ENUM){const s=Xe(n);throw new x(`Enum "${this.name}" cannot represent non-enum value: ${s}.`+Da(this,s),{nodes:n})}const a=this.getValue(n.value);if(a==null){const s=Xe(n);throw new x(`Value "${s}" does not exist in "${this.name}" enum.`+Da(this,s),{nodes:n})}return a.value}toConfig(){const n=dr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Da(r,n){const t=r.getValues().map(s=>s.name),a=_r(n,t);return Kt("the enum value",a)}function cl(r,n){return xr(n)||le(!1,`${r} values must be an object with value names as keys.`),Object.entries(n).map(([t,a])=>(xr(a)||le(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${M(a)}.`),{name:_v(t),description:a.description,value:a.value!==void 0?a.value:t,deprecationReason:a.deprecationReason,extensions:jn(a.extensions),astNode:a.astNode}))}class Ra{constructor(n){var t,a;this.name=st(n.name),this.description=n.description,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(a=n.isOneOf)!==null&&a!==void 0?a:!1,this._fields=vv.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=At(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function vv(r){const n=tp(r.fields);return xr(n)||le(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),At(n,(t,a)=>(!("resolve"in t)||le(!1,`${r.name}.${a} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(a),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:jn(t.extensions),astNode:t.astNode}))}function Dv(r){return we(r.type)&&r.defaultValue===void 0}function mi(r,n,t){return n===t?!0:we(t)?we(n)?mi(r,n.ofType,t.ofType):!1:we(n)?mi(r,n.ofType,t):bn(t)?bn(n)?mi(r,n.ofType,t.ofType):!1:bn(n)?!1:cr(t)&&($e(n)||We(n))&&r.isSubType(t,n)}function ll(r,n,t){return n===t?!0:cr(n)?cr(t)?r.getPossibleTypes(n).some(a=>r.isSubType(t,a)):r.isSubType(n,t):cr(t)?r.isSubType(t,n):!1}const So=2147483647,To=-2147483648,wv=new Ot({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const n=Ai(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new x(`Int cannot represent non-integer value: ${M(n)}`);if(t>So||t<To)throw new x("Int cannot represent non 32-bit signed integer value: "+M(n));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new x(`Int cannot represent non-integer value: ${M(r)}`);if(r>So||r<To)throw new x(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==T.INT)throw new x(`Int cannot represent non-integer value: ${Xe(r)}`,{nodes:r});const n=parseInt(r.value,10);if(n>So||n<To)throw new x(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return n}}),Av=new Ot({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const n=Ai(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new x(`Float cannot represent non numeric value: ${M(n)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new x(`Float cannot represent non numeric value: ${M(r)}`);return r},parseLiteral(r){if(r.kind!==T.FLOAT&&r.kind!==T.INT)throw new x(`Float cannot represent non numeric value: ${Xe(r)}`,r);return parseFloat(r.value)}}),Ge=new Ot({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const n=Ai(r);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new x(`String cannot represent value: ${M(r)}`)},parseValue(r){if(typeof r!="string")throw new x(`String cannot represent a non string value: ${M(r)}`);return r},parseLiteral(r){if(r.kind!==T.STRING)throw new x(`String cannot represent a non string value: ${Xe(r)}`,{nodes:r});return r.value}}),kn=new Ot({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const n=Ai(r);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new x(`Boolean cannot represent a non boolean value: ${M(n)}`)},parseValue(r){if(typeof r!="boolean")throw new x(`Boolean cannot represent a non boolean value: ${M(r)}`);return r},parseLiteral(r){if(r.kind!==T.BOOLEAN)throw new x(`Boolean cannot represent a non boolean value: ${Xe(r)}`,{nodes:r});return r.value}}),dp=new Ot({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const n=Ai(r);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new x(`ID cannot represent value: ${M(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new x(`ID cannot represent value: ${M(r)}`)},parseLiteral(r){if(r.kind!==T.STRING&&r.kind!==T.INT)throw new x("ID cannot represent a non-string and non-integer value: "+Xe(r),{nodes:r});return r.value}}),za=Object.freeze([Ge,wv,Av,kn,dp]);function Cv(r){return za.some(({name:n})=>r.name===n)}function Ai(r){if(Pt(r)){if(typeof r.valueOf=="function"){const n=r.valueOf();if(!Pt(n))return n}if(typeof r.toJSON=="function")return r.toJSON()}return r}function Ev(r){return ft(r,Ut)}class Ut{constructor(n){var t,a;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=jn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||le(!1,`@${n.name} locations must be an Array.`);const s=(a=n.args)!==null&&a!==void 0?a:{};Pt(s)&&!Array.isArray(s)||le(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=ap(s)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:op(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const cp=new Ut({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new ie(kn),description:"Included when true."}}}),lp=new Ut({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new ie(kn),description:"Skipped when true."}}}),kv="No longer supported",pp=new Ut({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[W.FIELD_DEFINITION,W.ARGUMENT_DEFINITION,W.INPUT_FIELD_DEFINITION,W.ENUM_VALUE],args:{reason:{type:Ge,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:kv}}}),hp=new Ut({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[W.SCALAR],args:{url:{type:new ie(Ge),description:"The URL that specifies the behavior of this scalar."}}}),fp=new Ut({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[W.INPUT_OBJECT],args:{}}),Mr=Object.freeze([cp,lp,pp,hp,fp]);function Fv(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function pi(r,n){if(we(n)){const t=pi(r,n.ofType);return(t==null?void 0:t.kind)===T.NULL?null:t}if(r===null)return{kind:T.NULL};if(r===void 0)return null;if(bn(n)){const t=n.ofType;if(Fv(r)){const a=[];for(const s of r){const o=pi(s,t);o!=null&&a.push(o)}return{kind:T.LIST,values:a}}return pi(r,t)}if(yn(n)){if(!Pt(r))return null;const t=[];for(const a of Object.values(n.getFields())){const s=pi(r[a.name],a.type);s&&t.push({kind:T.OBJECT_FIELD,name:{kind:T.NAME,value:a.name},value:s})}return{kind:T.OBJECT,fields:t}}if(Nr(n)){const t=n.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:T.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const a=String(t);return pl.test(a)?{kind:T.INT,value:a}:{kind:T.FLOAT,value:a}}if(typeof t=="string")return nt(n)?{kind:T.ENUM,value:t}:n===dp&&pl.test(t)?{kind:T.INT,value:t}:{kind:T.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${M(t)}.`)}et(!1,"Unexpected input type: "+M(n))}const pl=/^-?(?:0|[1-9][0-9]*)$/,Xo=new pt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ge,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new ie(new ln(new ie(Zn))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ie(Zn),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Zn,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Zn,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ie(new ln(new ie(gp))),resolve:r=>r.getDirectives()}})}),gp=new pt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},isRepeatable:{type:new ie(kn),resolve:r=>r.isRepeatable},locations:{type:new ie(new ln(new ie(mp))),resolve:r=>r.locations},args:{type:new ie(new ln(new ie(Wa))),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),mp=new Lr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:W.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:W.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:W.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:W.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:W.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:W.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:W.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:W.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:W.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:W.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:W.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:W.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:W.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:W.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:W.UNION,description:"Location adjacent to a union definition."},ENUM:{value:W.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:W.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:W.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:W.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Zn=new pt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ie(bp),resolve(r){if(Jt(r))return ve.SCALAR;if(We(r))return ve.OBJECT;if($e(r))return ve.INTERFACE;if($n(r))return ve.UNION;if(nt(r))return ve.ENUM;if(yn(r))return ve.INPUT_OBJECT;if(bn(r))return ve.LIST;if(we(r))return ve.NON_NULL;et(!1,`Unexpected type: "${M(r)}".`)}},name:{type:Ge,resolve:r=>"name"in r?r.name:void 0},description:{type:Ge,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:Ge,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new ln(new ie(_p)),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(We(r)||$e(r)){const t=Object.values(r.getFields());return n?t:t.filter(a=>a.deprecationReason==null)}}},interfaces:{type:new ln(new ie(Zn)),resolve(r){if(We(r)||$e(r))return r.getInterfaces()}},possibleTypes:{type:new ln(new ie(Zn)),resolve(r,n,t,{schema:a}){if(cr(r))return a.getPossibleTypes(r)}},enumValues:{type:new ln(new ie(yp)),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(nt(r)){const t=r.getValues();return n?t:t.filter(a=>a.deprecationReason==null)}}},inputFields:{type:new ln(new ie(Wa)),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(yn(r)){const t=Object.values(r.getFields());return n?t:t.filter(a=>a.deprecationReason==null)}}},ofType:{type:Zn,resolve:r=>"ofType"in r?r.ofType:void 0},isOneOf:{type:kn,resolve:r=>{if(yn(r))return r.isOneOf}}})}),_p=new pt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},args:{type:new ie(new ln(new ie(Wa))),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new ie(Zn),resolve:r=>r.type},isDeprecated:{type:new ie(kn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})}),Wa=new pt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},type:{type:new ie(Zn),resolve:r=>r.type},defaultValue:{type:Ge,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:n,defaultValue:t}=r,a=pi(t,n);return a?Xe(a):null}},isDeprecated:{type:new ie(kn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})}),yp=new pt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},isDeprecated:{type:new ie(kn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})});var ve;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(ve||(ve={}));const bp=new Lr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:ve.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:ve.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:ve.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:ve.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:ve.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:ve.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:ve.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:ve.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ie(Xo);new ie(Ge);new ie(Ge);const Ha=Object.freeze([Xo,gp,mp,Zn,_p,Wa,yp,bp]);function Pv(r){return Ha.some(({name:n})=>r.name===n)}class Sp{constructor(n){var t,a;this.__validationErrors=n.assumeValid===!0?[]:void 0,Pt(n)||le(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||le(!1,`"types" must be Array if provided but got: ${M(n.types)}.`),!n.directives||Array.isArray(n.directives)||le(!1,`"directives" must be Array if provided but got: ${M(n.directives)}.`),this.description=n.description,this.extensions=jn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(a=n.directives)!==null&&a!==void 0?a:Mr;const s=new Set(n.types);if(n.types!=null)for(const o of n.types)s.delete(o),Xn(o,s);this._queryType!=null&&Xn(this._queryType,s),this._mutationType!=null&&Xn(this._mutationType,s),this._subscriptionType!=null&&Xn(this._subscriptionType,s);for(const o of this._directives)if(Ev(o))for(const d of o.args)Xn(d.type,s);Xn(Xo,s),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const o of s){if(o==null)continue;const d=o.name;if(d||le(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[d]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${d}".`);if(this._typeMap[d]=o,$e(o)){for(const l of o.getInterfaces())if($e(l)){let p=this._implementationsMap[l.name];p===void 0&&(p=this._implementationsMap[l.name]={objects:[],interfaces:[]}),p.interfaces.push(o)}}else if(We(o)){for(const l of o.getInterfaces())if($e(l)){let p=this._implementationsMap[l.name];p===void 0&&(p=this._implementationsMap[l.name]={objects:[],interfaces:[]}),p.objects.push(o)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Gn.QUERY:return this.getQueryType();case Gn.MUTATION:return this.getMutationType();case Gn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return $n(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let a=this._subTypeMap[n.name];if(a===void 0){if(a=Object.create(null),$n(n))for(const s of n.getTypes())a[s.name]=!0;else{const s=this.getImplementations(n);for(const o of s.objects)a[o.name]=!0;for(const o of s.interfaces)a[o.name]=!0}this._subTypeMap[n.name]=a}return a[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Xn(r,n){const t=fr(r);if(!n.has(t)){if(n.add(t),$n(t))for(const a of t.getTypes())Xn(a,n);else if(We(t)||$e(t)){for(const a of t.getInterfaces())Xn(a,n);for(const a of Object.values(t.getFields())){Xn(a.type,n);for(const s of a.args)Xn(s.type,n)}}else if(yn(t))for(const a of Object.values(t.getFields()))Xn(a.type,n)}return n}function ht(r,n){switch(n.kind){case T.LIST_TYPE:{const t=ht(r,n.type);return t&&new ln(t)}case T.NON_NULL_TYPE:{const t=ht(r,n.type);return t&&new ie(t)}case T.NAMED_TYPE:return r.getType(n.name.value)}}function Ov(r){return r.kind===T.OPERATION_DEFINITION||r.kind===T.FRAGMENT_DEFINITION}function Uv(r){return r.kind===T.SCHEMA_DEFINITION||Ci(r)||r.kind===T.DIRECTIVE_DEFINITION}function Ci(r){return r.kind===T.SCALAR_TYPE_DEFINITION||r.kind===T.OBJECT_TYPE_DEFINITION||r.kind===T.INTERFACE_TYPE_DEFINITION||r.kind===T.UNION_TYPE_DEFINITION||r.kind===T.ENUM_TYPE_DEFINITION||r.kind===T.INPUT_OBJECT_TYPE_DEFINITION}function Rv(r){return r.kind===T.SCHEMA_EXTENSION||Zo(r)}function Zo(r){return r.kind===T.SCALAR_TYPE_EXTENSION||r.kind===T.OBJECT_TYPE_EXTENSION||r.kind===T.INTERFACE_TYPE_EXTENSION||r.kind===T.UNION_TYPE_EXTENSION||r.kind===T.ENUM_TYPE_EXTENSION||r.kind===T.INPUT_OBJECT_TYPE_EXTENSION}function xv(r){return{Document(n){for(const t of n.definitions)if(!Ov(t)){const a=t.kind===T.SCHEMA_DEFINITION||t.kind===T.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';r.reportError(new x(`The ${a} definition is not executable.`,{nodes:t}))}return!1}}}function Nv(r){return{Field(n){const t=r.getParentType();if(t&&!r.getFieldDef()){const s=r.getSchema(),o=n.name.value;let d=Kt("to use an inline fragment on",Lv(s,t,o));d===""&&(d=Kt(Bv(t,o))),r.reportError(new x(`Cannot query field "${o}" on type "${t.name}".`+d,{nodes:n}))}}}}function Lv(r,n,t){if(!cr(n))return[];const a=new Set,s=Object.create(null);for(const d of r.getPossibleTypes(n))if(d.getFields()[t]){a.add(d),s[d.name]=1;for(const l of d.getInterfaces()){var o;l.getFields()[t]&&(a.add(l),s[l.name]=((o=s[l.name])!==null&&o!==void 0?o:0)+1)}}return[...a].sort((d,l)=>{const p=s[l.name]-s[d.name];return p!==0?p:$e(d)&&r.isSubType(d,l)?-1:$e(l)&&r.isSubType(l,d)?1:Yo(d.name,l.name)}).map(d=>d.name)}function Bv(r,n){if(We(r)||$e(r)){const t=Object.keys(r.getFields());return _r(n,t)}return[]}function Mv(r){return{InlineFragment(n){const t=n.typeCondition;if(t){const a=ht(r.getSchema(),t);if(a&&!Ti(a)){const s=Xe(t);r.reportError(new x(`Fragment cannot condition on non composite type "${s}".`,{nodes:t}))}}},FragmentDefinition(n){const t=ht(r.getSchema(),n.typeCondition);if(t&&!Ti(t)){const a=Xe(n.typeCondition);r.reportError(new x(`Fragment "${n.name.value}" cannot condition on non composite type "${a}".`,{nodes:n.typeCondition}))}}}}function qv(r){return{...Tp(r),Argument(n){const t=r.getArgument(),a=r.getFieldDef(),s=r.getParentType();if(!t&&a&&s){const o=n.name.value,d=a.args.map(p=>p.name),l=_r(o,d);r.reportError(new x(`Unknown argument "${o}" on field "${s.name}.${a.name}".`+Kt(l),{nodes:n}))}}}}function Tp(r){const n=Object.create(null),t=r.getSchema(),a=t?t.getDirectives():Mr;for(const d of a)n[d.name]=d.args.map(l=>l.name);const s=r.getDocument().definitions;for(const d of s)if(d.kind===T.DIRECTIVE_DEFINITION){var o;const l=(o=d.arguments)!==null&&o!==void 0?o:[];n[d.name.value]=l.map(p=>p.name.value)}return{Directive(d){const l=d.name.value,p=n[l];if(d.arguments&&p)for(const m of d.arguments){const _=m.name.value;if(!p.includes(_)){const b=_r(_,p);r.reportError(new x(`Unknown argument "${_}" on directive "@${l}".`+Kt(b),{nodes:m}))}}return!1}}}function Ip(r){const n=Object.create(null),t=r.getSchema(),a=t?t.getDirectives():Mr;for(const o of a)n[o.name]=o.locations;const s=r.getDocument().definitions;for(const o of s)o.kind===T.DIRECTIVE_DEFINITION&&(n[o.name.value]=o.locations.map(d=>d.value));return{Directive(o,d,l,p,m){const _=o.name.value,b=n[_];if(!b){r.reportError(new x(`Unknown directive "@${_}".`,{nodes:o}));return}const O=Gv(m);O&&!b.includes(O)&&r.reportError(new x(`Directive "@${_}" may not be used on ${O}.`,{nodes:o}))}}}function Gv(r){const n=r[r.length-1];switch("kind"in n||et(!1),n.kind){case T.OPERATION_DEFINITION:return $v(n.operation);case T.FIELD:return W.FIELD;case T.FRAGMENT_SPREAD:return W.FRAGMENT_SPREAD;case T.INLINE_FRAGMENT:return W.INLINE_FRAGMENT;case T.FRAGMENT_DEFINITION:return W.FRAGMENT_DEFINITION;case T.VARIABLE_DEFINITION:return W.VARIABLE_DEFINITION;case T.SCHEMA_DEFINITION:case T.SCHEMA_EXTENSION:return W.SCHEMA;case T.SCALAR_TYPE_DEFINITION:case T.SCALAR_TYPE_EXTENSION:return W.SCALAR;case T.OBJECT_TYPE_DEFINITION:case T.OBJECT_TYPE_EXTENSION:return W.OBJECT;case T.FIELD_DEFINITION:return W.FIELD_DEFINITION;case T.INTERFACE_TYPE_DEFINITION:case T.INTERFACE_TYPE_EXTENSION:return W.INTERFACE;case T.UNION_TYPE_DEFINITION:case T.UNION_TYPE_EXTENSION:return W.UNION;case T.ENUM_TYPE_DEFINITION:case T.ENUM_TYPE_EXTENSION:return W.ENUM;case T.ENUM_VALUE_DEFINITION:return W.ENUM_VALUE;case T.INPUT_OBJECT_TYPE_DEFINITION:case T.INPUT_OBJECT_TYPE_EXTENSION:return W.INPUT_OBJECT;case T.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||et(!1),t.kind===T.INPUT_OBJECT_TYPE_DEFINITION?W.INPUT_FIELD_DEFINITION:W.ARGUMENT_DEFINITION}default:et(!1,"Unexpected kind: "+M(n.kind))}}function $v(r){switch(r){case Gn.QUERY:return W.QUERY;case Gn.MUTATION:return W.MUTATION;case Gn.SUBSCRIPTION:return W.SUBSCRIPTION}}function jv(r){return{FragmentSpread(n){const t=n.name.value;r.getFragment(t)||r.reportError(new x(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function vp(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),a=Object.create(null);for(const o of r.getDocument().definitions)Ci(o)&&(a[o.name.value]=!0);const s=[...Object.keys(t),...Object.keys(a)];return{NamedType(o,d,l,p,m){const _=o.name.value;if(!t[_]&&!a[_]){var b;const O=(b=m[2])!==null&&b!==void 0?b:l,C=O!=null&&Vv(O);if(C&&hl.includes(_))return;const E=_r(_,C?hl.concat(s):s);r.reportError(new x(`Unknown type "${_}".`+Kt(E),{nodes:o}))}}}}const hl=[...za,...Ha].map(r=>r.name);function Vv(r){return"kind"in r&&(Uv(r)||Rv(r))}function zv(r){let n=0;return{Document(t){n=t.definitions.filter(a=>a.kind===T.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&r.reportError(new x("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function Wv(r){var n,t,a;const s=r.getSchema(),o=(n=(t=(a=s==null?void 0:s.astNode)!==null&&a!==void 0?a:s==null?void 0:s.getQueryType())!==null&&t!==void 0?t:s==null?void 0:s.getMutationType())!==null&&n!==void 0?n:s==null?void 0:s.getSubscriptionType();let d=0;return{SchemaDefinition(l){if(o){r.reportError(new x("Cannot define a new schema within a schema extension.",{nodes:l}));return}d>0&&r.reportError(new x("Must provide only one schema definition.",{nodes:l})),++d}}}const Hv=3;function Yv(r){function n(t,a=Object.create(null),s=0){if(t.kind===T.FRAGMENT_SPREAD){const o=t.name.value;if(a[o]===!0)return!1;const d=r.getFragment(o);if(!d)return!1;try{return a[o]=!0,n(d,a,s)}finally{a[o]=void 0}}if(t.kind===T.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(s++,s>=Hv))return!0;if("selectionSet"in t&&t.selectionSet){for(const o of t.selectionSet.selections)if(n(o,a,s))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return r.reportError(new x("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function Kv(r){const n=Object.create(null),t=[],a=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(o){return s(o),!1}};function s(o){if(n[o.name.value])return;const d=o.name.value;n[d]=!0;const l=r.getFragmentSpreads(o.selectionSet);if(l.length!==0){a[d]=t.length;for(const p of l){const m=p.name.value,_=a[m];if(t.push(p),_===void 0){const b=r.getFragment(m);b&&s(b)}else{const b=t.slice(_),O=b.slice(0,-1).map(C=>'"'+C.name.value+'"').join(", ");r.reportError(new x(`Cannot spread fragment "${m}" within itself`+(O!==""?` via ${O}.`:"."),{nodes:b}))}t.pop()}a[d]=void 0}}}function Jv(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const a=r.getRecursiveVariableUsages(t);for(const{node:s}of a){const o=s.name.value;n[o]!==!0&&r.reportError(new x(t.name?`Variable "$${o}" is not defined by operation "${t.name.value}".`:`Variable "$${o}" is not defined.`,{nodes:[s,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function Qv(r){const n=[],t=[];return{OperationDefinition(a){return n.push(a),!1},FragmentDefinition(a){return t.push(a),!1},Document:{leave(){const a=Object.create(null);for(const s of n)for(const o of r.getRecursivelyReferencedFragments(s))a[o.name.value]=!0;for(const s of t){const o=s.name.value;a[o]!==!0&&r.reportError(new x(`Fragment "${o}" is never used.`,{nodes:s}))}}}}}function Xv(r){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const a=Object.create(null),s=r.getRecursiveVariableUsages(t);for(const{node:o}of s)a[o.name.value]=!0;for(const o of n){const d=o.variable.name.value;a[d]!==!0&&r.reportError(new x(t.name?`Variable "$${d}" is never used in operation "${t.name.value}".`:`Variable "$${d}" is never used.`,{nodes:o}))}}},VariableDefinition(t){n.push(t)}}}function eu(r){switch(r.kind){case T.OBJECT:return{...r,fields:Zv(r.fields)};case T.LIST:return{...r,values:r.values.map(eu)};case T.INT:case T.FLOAT:case T.STRING:case T.BOOLEAN:case T.NULL:case T.ENUM:case T.VARIABLE:return r}}function Zv(r){return r.map(n=>({...n,value:eu(n.value)})).sort((n,t)=>Yo(n.name.value,t.name.value))}function Dp(r){return Array.isArray(r)?r.map(([n,t])=>`subfields "${n}" conflict because `+Dp(t)).join(" and "):r}function eD(r){const n=new sD,t=new Map;return{SelectionSet(a){const s=nD(r,t,n,r.getParentType(),a);for(const[[o,d],l,p]of s){const m=Dp(d);r.reportError(new x(`Fields "${o}" conflict because ${m}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:l.concat(p)}))}}}}function nD(r,n,t,a,s){const o=[],[d,l]=La(r,n,a,s);if(rD(r,o,n,t,d),l.length!==0)for(let p=0;p<l.length;p++){xa(r,o,n,t,!1,d,l[p]);for(let m=p+1;m<l.length;m++)Na(r,o,n,t,!1,l[p],l[m])}return o}function xa(r,n,t,a,s,o,d){const l=r.getFragment(d);if(!l)return;const[p,m]=Po(r,t,l);if(o!==p){nu(r,n,t,a,s,o,p);for(const _ of m)a.has(_,d,s)||(a.add(_,d,s),xa(r,n,t,a,s,o,_))}}function Na(r,n,t,a,s,o,d){if(o===d||a.has(o,d,s))return;a.add(o,d,s);const l=r.getFragment(o),p=r.getFragment(d);if(!l||!p)return;const[m,_]=Po(r,t,l),[b,O]=Po(r,t,p);nu(r,n,t,a,s,m,b);for(const C of O)Na(r,n,t,a,s,o,C);for(const C of _)Na(r,n,t,a,s,C,d)}function tD(r,n,t,a,s,o,d,l){const p=[],[m,_]=La(r,n,s,o),[b,O]=La(r,n,d,l);nu(r,p,n,t,a,m,b);for(const C of O)xa(r,p,n,t,a,m,C);for(const C of _)xa(r,p,n,t,a,b,C);for(const C of _)for(const E of O)Na(r,p,n,t,a,C,E);return p}function rD(r,n,t,a,s){for(const[o,d]of Object.entries(s))if(d.length>1)for(let l=0;l<d.length;l++)for(let p=l+1;p<d.length;p++){const m=wp(r,t,a,!1,o,d[l],d[p]);m&&n.push(m)}}function nu(r,n,t,a,s,o,d){for(const[l,p]of Object.entries(o)){const m=d[l];if(m)for(const _ of p)for(const b of m){const O=wp(r,t,a,s,l,_,b);O&&n.push(O)}}}function wp(r,n,t,a,s,o,d){const[l,p,m]=o,[_,b,O]=d,C=a||l!==_&&We(l)&&We(_);if(!C){const Ae=p.name.value,me=b.name.value;if(Ae!==me)return[[s,`"${Ae}" and "${me}" are different fields`],[p],[b]];if(!iD(p,b))return[[s,"they have differing arguments"],[p],[b]]}const E=m==null?void 0:m.type,N=O==null?void 0:O.type;if(E&&N&&Fo(E,N))return[[s,`they return conflicting types "${M(E)}" and "${M(N)}"`],[p],[b]];const z=p.selectionSet,ce=b.selectionSet;if(z&&ce){const Ae=tD(r,n,t,C,fr(E),z,fr(N),ce);return aD(Ae,s,p,b)}}function iD(r,n){const t=r.arguments,a=n.arguments;if(t===void 0||t.length===0)return a===void 0||a.length===0;if(a===void 0||a.length===0||t.length!==a.length)return!1;const s=new Map(a.map(({name:o,value:d})=>[o.value,d]));return t.every(o=>{const d=o.value,l=s.get(o.name.value);return l===void 0?!1:fl(d)===fl(l)})}function fl(r){return Xe(eu(r))}function Fo(r,n){return bn(r)?bn(n)?Fo(r.ofType,n.ofType):!0:bn(n)?!0:we(r)?we(n)?Fo(r.ofType,n.ofType):!0:we(n)?!0:Nr(r)||Nr(n)?r!==n:!1}function La(r,n,t,a){const s=n.get(a);if(s)return s;const o=Object.create(null),d=Object.create(null);Ap(r,t,a,o,d);const l=[o,Object.keys(d)];return n.set(a,l),l}function Po(r,n,t){const a=n.get(t.selectionSet);if(a)return a;const s=ht(r.getSchema(),t.typeCondition);return La(r,n,s,t.selectionSet)}function Ap(r,n,t,a,s){for(const o of t.selections)switch(o.kind){case T.FIELD:{const d=o.name.value;let l;(We(n)||$e(n))&&(l=n.getFields()[d]);const p=o.alias?o.alias.value:d;a[p]||(a[p]=[]),a[p].push([n,o,l]);break}case T.FRAGMENT_SPREAD:s[o.name.value]=!0;break;case T.INLINE_FRAGMENT:{const d=o.typeCondition,l=d?ht(r.getSchema(),d):n;Ap(r,l,o.selectionSet,a,s);break}}}function aD(r,n,t,a){if(r.length>0)return[[n,r.map(([s])=>s)],[t,...r.map(([,s])=>s).flat()],[a,...r.map(([,,s])=>s).flat()]]}class sD{constructor(){this._data=new Map}has(n,t,a){var s;const[o,d]=n<t?[n,t]:[t,n],l=(s=this._data.get(o))===null||s===void 0?void 0:s.get(d);return l===void 0?!1:a?!0:a===l}add(n,t,a){const[s,o]=n<t?[n,t]:[t,n],d=this._data.get(s);d===void 0?this._data.set(s,new Map([[o,a]])):d.set(o,a)}}function oD(r){return{InlineFragment(n){const t=r.getType(),a=r.getParentType();if(Ti(t)&&Ti(a)&&!ll(r.getSchema(),t,a)){const s=M(a),o=M(t);r.reportError(new x(`Fragment cannot be spread here as objects of type "${s}" can never be of type "${o}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,a=uD(r,t),s=r.getParentType();if(a&&s&&!ll(r.getSchema(),a,s)){const o=M(s),d=M(a);r.reportError(new x(`Fragment "${t}" cannot be spread here as objects of type "${o}" can never be of type "${d}".`,{nodes:n}))}}}}function uD(r,n){const t=r.getFragment(n);if(t){const a=ht(r.getSchema(),t.typeCondition);if(Ti(a))return a}}function dD(r){const n=r.getSchema(),t=Object.create(null);for(const s of r.getDocument().definitions)Ci(s)&&(t[s.name.value]=s);return{ScalarTypeExtension:a,ObjectTypeExtension:a,InterfaceTypeExtension:a,UnionTypeExtension:a,EnumTypeExtension:a,InputObjectTypeExtension:a};function a(s){const o=s.name.value,d=t[o],l=n==null?void 0:n.getType(o);let p;if(d?p=cD[d.kind]:l&&(p=lD(l)),p){if(p!==s.kind){const m=pD(s.kind);r.reportError(new x(`Cannot extend non-${m} type "${o}".`,{nodes:d?[d,s]:s}))}}else{const m=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),_=_r(o,m);r.reportError(new x(`Cannot extend type "${o}" because it is not defined.`+Kt(_),{nodes:s.name}))}}}const cD={[T.SCALAR_TYPE_DEFINITION]:T.SCALAR_TYPE_EXTENSION,[T.OBJECT_TYPE_DEFINITION]:T.OBJECT_TYPE_EXTENSION,[T.INTERFACE_TYPE_DEFINITION]:T.INTERFACE_TYPE_EXTENSION,[T.UNION_TYPE_DEFINITION]:T.UNION_TYPE_EXTENSION,[T.ENUM_TYPE_DEFINITION]:T.ENUM_TYPE_EXTENSION,[T.INPUT_OBJECT_TYPE_DEFINITION]:T.INPUT_OBJECT_TYPE_EXTENSION};function lD(r){if(Jt(r))return T.SCALAR_TYPE_EXTENSION;if(We(r))return T.OBJECT_TYPE_EXTENSION;if($e(r))return T.INTERFACE_TYPE_EXTENSION;if($n(r))return T.UNION_TYPE_EXTENSION;if(nt(r))return T.ENUM_TYPE_EXTENSION;if(yn(r))return T.INPUT_OBJECT_TYPE_EXTENSION;et(!1,"Unexpected type: "+M(r))}function pD(r){switch(r){case T.SCALAR_TYPE_EXTENSION:return"scalar";case T.OBJECT_TYPE_EXTENSION:return"object";case T.INTERFACE_TYPE_EXTENSION:return"interface";case T.UNION_TYPE_EXTENSION:return"union";case T.ENUM_TYPE_EXTENSION:return"enum";case T.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:et(!1,"Unexpected kind: "+M(r))}}function hD(r){return{...Cp(r),Field:{leave(n){var t;const a=r.getFieldDef();if(!a)return!1;const s=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(o=>o.name.value));for(const o of a.args)if(!s.has(o.name)&&up(o)){const d=M(o.type);r.reportError(new x(`Field "${a.name}" argument "${o.name}" of type "${d}" is required, but it was not provided.`,{nodes:n}))}}}}}function Cp(r){var n;const t=Object.create(null),a=r.getSchema(),s=(n=a==null?void 0:a.getDirectives())!==null&&n!==void 0?n:Mr;for(const l of s)t[l.name]=hr(l.args.filter(up),p=>p.name);const o=r.getDocument().definitions;for(const l of o)if(l.kind===T.DIRECTIVE_DEFINITION){var d;const p=(d=l.arguments)!==null&&d!==void 0?d:[];t[l.name.value]=hr(p.filter(fD),m=>m.name.value)}return{Directive:{leave(l){const p=l.name.value,m=t[p];if(m){var _;const b=(_=l.arguments)!==null&&_!==void 0?_:[],O=new Set(b.map(C=>C.name.value));for(const[C,E]of Object.entries(m))if(!O.has(C)){const N=Ko(E.type)?M(E.type):Xe(E.type);r.reportError(new x(`Directive "@${p}" argument "${C}" of type "${N}" is required, but it was not provided.`,{nodes:l}))}}}}}}function fD(r){return r.type.kind===T.NON_NULL_TYPE&&r.defaultValue==null}function gD(r){return{Field(n){const t=r.getType(),a=n.selectionSet;if(t){if(Nr(fr(t))){if(a){const s=n.name.value,o=M(t);r.reportError(new x(`Field "${s}" must not have a selection since type "${o}" has no subfields.`,{nodes:a}))}}else if(!a){const s=n.name.value,o=M(t);r.reportError(new x(`Field "${s}" of type "${o}" must have a selection of subfields. Did you mean "${s} { ... }"?`,{nodes:n}))}}}}}function zt(r,n,t){if(r){if(r.kind===T.VARIABLE){const a=r.name.value;if(t==null||t[a]===void 0)return;const s=t[a];return s===null&&we(n)?void 0:s}if(we(n))return r.kind===T.NULL?void 0:zt(r,n.ofType,t);if(r.kind===T.NULL)return null;if(bn(n)){const a=n.ofType;if(r.kind===T.LIST){const o=[];for(const d of r.values)if(gl(d,t)){if(we(a))return;o.push(null)}else{const l=zt(d,a,t);if(l===void 0)return;o.push(l)}return o}const s=zt(r,a,t);return s===void 0?void 0:[s]}if(yn(n)){if(r.kind!==T.OBJECT)return;const a=Object.create(null),s=hr(r.fields,o=>o.name.value);for(const o of Object.values(n.getFields())){const d=s[o.name];if(!d||gl(d.value,t)){if(o.defaultValue!==void 0)a[o.name]=o.defaultValue;else if(we(o.type))return;continue}const l=zt(d.value,o.type,t);if(l===void 0)return;a[o.name]=l}if(n.isOneOf){const o=Object.keys(a);if(o.length!==1||a[o[0]]===null)return}return a}if(Nr(n)){let a;try{a=n.parseLiteral(r,t)}catch{return}return a===void 0?void 0:a}et(!1,"Unexpected input type: "+M(n))}}function gl(r,n){return r.kind===T.VARIABLE&&(n==null||n[r.name.value]===void 0)}function mD(r,n,t){var a;const s={},o=(a=n.arguments)!==null&&a!==void 0?a:[],d=hr(o,l=>l.name.value);for(const l of r.args){const p=l.name,m=l.type,_=d[p];if(!_){if(l.defaultValue!==void 0)s[p]=l.defaultValue;else if(we(m))throw new x(`Argument "${p}" of required type "${M(m)}" was not provided.`,{nodes:n});continue}const b=_.value;let O=b.kind===T.NULL;if(b.kind===T.VARIABLE){const E=b.name.value;if(t==null||!_D(t,E)){if(l.defaultValue!==void 0)s[p]=l.defaultValue;else if(we(m))throw new x(`Argument "${p}" of required type "${M(m)}" was provided the variable "$${E}" which was not provided a runtime value.`,{nodes:b});continue}O=t[E]==null}if(O&&we(m))throw new x(`Argument "${p}" of non-null type "${M(m)}" must not be null.`,{nodes:b});const C=zt(b,m,t);if(C===void 0)throw new x(`Argument "${p}" has invalid value ${Xe(b)}.`,{nodes:b});s[p]=C}return s}function Ii(r,n,t){var a;const s=(a=n.directives)===null||a===void 0?void 0:a.find(o=>o.name.value===r.name);if(s)return mD(r,s,t)}function _D(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function yD(r,n,t,a,s){const o=new Map;return Oo(r,n,t,a,s,o,new Set),o}function Oo(r,n,t,a,s,o,d){for(const l of s.selections)switch(l.kind){case T.FIELD:{if(!Io(t,l))continue;const p=bD(l),m=o.get(p);m!==void 0?m.push(l):o.set(p,[l]);break}case T.INLINE_FRAGMENT:{if(!Io(t,l)||!ml(r,l,a))continue;Oo(r,n,t,a,l.selectionSet,o,d);break}case T.FRAGMENT_SPREAD:{const p=l.name.value;if(d.has(p)||!Io(t,l))continue;d.add(p);const m=n[p];if(!m||!ml(r,m,a))continue;Oo(r,n,t,a,m.selectionSet,o,d);break}}}function Io(r,n){const t=Ii(lp,n,r);if((t==null?void 0:t.if)===!0)return!1;const a=Ii(cp,n,r);return(a==null?void 0:a.if)!==!1}function ml(r,n,t){const a=n.typeCondition;if(!a)return!0;const s=ht(r,a);return s===t?!0:cr(s)?r.isSubType(s,t):!1}function bD(r){return r.alias?r.alias.value:r.name.value}function SD(r){return{OperationDefinition(n){if(n.operation==="subscription"){const t=r.getSchema(),a=t.getSubscriptionType();if(a){const s=n.name?n.name.value:null,o=Object.create(null),d=r.getDocument(),l=Object.create(null);for(const m of d.definitions)m.kind===T.FRAGMENT_DEFINITION&&(l[m.name.value]=m);const p=yD(t,l,o,a,n.selectionSet);if(p.size>1){const b=[...p.values()].slice(1).flat();r.reportError(new x(s!=null?`Subscription "${s}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:b}))}for(const m of p.values())m[0].name.value.startsWith("__")&&r.reportError(new x(s!=null?`Subscription "${s}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function tu(r,n){const t=new Map;for(const a of r){const s=n(a),o=t.get(s);o===void 0?t.set(s,[a]):o.push(a)}return t}function TD(r){return{DirectiveDefinition(a){var s;const o=(s=a.arguments)!==null&&s!==void 0?s:[];return t(`@${a.name.value}`,o)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(a){var s;const o=a.name.value,d=(s=a.fields)!==null&&s!==void 0?s:[];for(const p of d){var l;const m=p.name.value,_=(l=p.arguments)!==null&&l!==void 0?l:[];t(`${o}.${m}`,_)}return!1}function t(a,s){const o=tu(s,d=>d.name.value);for(const[d,l]of o)l.length>1&&r.reportError(new x(`Argument "${a}(${d}:)" can only be defined once.`,{nodes:l.map(p=>p.name)}));return!1}}function Ep(r){return{Field:n,Directive:n};function n(t){var a;const s=(a=t.arguments)!==null&&a!==void 0?a:[],o=tu(s,d=>d.name.value);for(const[d,l]of o)l.length>1&&r.reportError(new x(`There can be only one argument named "${d}".`,{nodes:l.map(p=>p.name)}))}}function ID(r){const n=Object.create(null),t=r.getSchema();return{DirectiveDefinition(a){const s=a.name.value;if(t!=null&&t.getDirective(s)){r.reportError(new x(`Directive "@${s}" already exists in the schema. It cannot be redefined.`,{nodes:a.name}));return}return n[s]?r.reportError(new x(`There can be only one directive named "@${s}".`,{nodes:[n[s],a.name]})):n[s]=a.name,!1}}}function kp(r){const n=Object.create(null),t=r.getSchema(),a=t?t.getDirectives():Mr;for(const l of a)n[l.name]=!l.isRepeatable;const s=r.getDocument().definitions;for(const l of s)l.kind===T.DIRECTIVE_DEFINITION&&(n[l.name.value]=!l.repeatable);const o=Object.create(null),d=Object.create(null);return{enter(l){if(!("directives"in l)||!l.directives)return;let p;if(l.kind===T.SCHEMA_DEFINITION||l.kind===T.SCHEMA_EXTENSION)p=o;else if(Ci(l)||Zo(l)){const m=l.name.value;p=d[m],p===void 0&&(d[m]=p=Object.create(null))}else p=Object.create(null);for(const m of l.directives){const _=m.name.value;n[_]&&(p[_]?r.reportError(new x(`The directive "@${_}" can only be used once at this location.`,{nodes:[p[_],m]})):p[_]=m)}}}}function vD(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),a=Object.create(null);return{EnumTypeDefinition:s,EnumTypeExtension:s};function s(o){var d;const l=o.name.value;a[l]||(a[l]=Object.create(null));const p=(d=o.values)!==null&&d!==void 0?d:[],m=a[l];for(const _ of p){const b=_.name.value,O=t[l];nt(O)&&O.getValue(b)?r.reportError(new x(`Enum value "${l}.${b}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:_.name})):m[b]?r.reportError(new x(`Enum value "${l}.${b}" can only be defined once.`,{nodes:[m[b],_.name]})):m[b]=_.name}return!1}}function DD(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),a=Object.create(null);return{InputObjectTypeDefinition:s,InputObjectTypeExtension:s,InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(o){var d;const l=o.name.value;a[l]||(a[l]=Object.create(null));const p=(d=o.fields)!==null&&d!==void 0?d:[],m=a[l];for(const _ of p){const b=_.name.value;wD(t[l],b)?r.reportError(new x(`Field "${l}.${b}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:_.name})):m[b]?r.reportError(new x(`Field "${l}.${b}" can only be defined once.`,{nodes:[m[b],_.name]})):m[b]=_.name}return!1}}function wD(r,n){return We(r)||$e(r)||yn(r)?r.getFields()[n]!=null:!1}function AD(r){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const a=t.name.value;return n[a]?r.reportError(new x(`There can be only one fragment named "${a}".`,{nodes:[n[a],t.name]})):n[a]=t.name,!1}}}function Fp(r){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const a=n.pop();a||et(!1),t=a}},ObjectField(a){const s=a.name.value;t[s]?r.reportError(new x(`There can be only one input field named "${s}".`,{nodes:[t[s],a.name]})):t[s]=a.name}}}function CD(r){const n=Object.create(null);return{OperationDefinition(t){const a=t.name;return a&&(n[a.value]?r.reportError(new x(`There can be only one operation named "${a.value}".`,{nodes:[n[a.value],a]})):n[a.value]=a),!1},FragmentDefinition:()=>!1}}function ED(r){const n=r.getSchema(),t=Object.create(null),a=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:s,SchemaExtension:s};function s(o){var d;const l=(d=o.operationTypes)!==null&&d!==void 0?d:[];for(const p of l){const m=p.operation,_=t[m];a[m]?r.reportError(new x(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:p})):_?r.reportError(new x(`There can be only one ${m} type in schema.`,{nodes:[_,p]})):t[m]=p}return!1}}function kD(r){const n=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:a,ObjectTypeDefinition:a,InterfaceTypeDefinition:a,UnionTypeDefinition:a,EnumTypeDefinition:a,InputObjectTypeDefinition:a};function a(s){const o=s.name.value;if(t!=null&&t.getType(o)){r.reportError(new x(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:s.name}));return}return n[o]?r.reportError(new x(`There can be only one type named "${o}".`,{nodes:[n[o],s.name]})):n[o]=s.name,!1}}function FD(r){return{OperationDefinition(n){var t;const a=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],s=tu(a,o=>o.variable.name.value);for(const[o,d]of s)d.length>1&&r.reportError(new x(`There can be only one variable named "$${o}".`,{nodes:d.map(l=>l.variable.name)}))}}}function PD(r){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const a=Tv(r.getParentInputType());if(!bn(a))return ur(r,t),!1},ObjectValue(t){const a=fr(r.getInputType());if(!yn(a))return ur(r,t),!1;const s=hr(t.fields,o=>o.name.value);for(const o of Object.values(a.getFields()))if(!s[o.name]&&Dv(o)){const l=M(o.type);r.reportError(new x(`Field "${a.name}.${o.name}" of required type "${l}" was not provided.`,{nodes:t}))}a.isOneOf&&OD(r,t,a,s,n)},ObjectField(t){const a=fr(r.getParentInputType());if(!r.getInputType()&&yn(a)){const o=_r(t.name.value,Object.keys(a.getFields()));r.reportError(new x(`Field "${t.name.value}" is not defined by type "${a.name}".`+Kt(o),{nodes:t}))}},NullValue(t){const a=r.getInputType();we(a)&&r.reportError(new x(`Expected value of type "${M(a)}", found ${Xe(t)}.`,{nodes:t}))},EnumValue:t=>ur(r,t),IntValue:t=>ur(r,t),FloatValue:t=>ur(r,t),StringValue:t=>ur(r,t),BooleanValue:t=>ur(r,t)}}function ur(r,n){const t=r.getInputType();if(!t)return;const a=fr(t);if(!Nr(a)){const s=M(t);r.reportError(new x(`Expected value of type "${s}", found ${Xe(n)}.`,{nodes:n}));return}try{if(a.parseLiteral(n,void 0)===void 0){const o=M(t);r.reportError(new x(`Expected value of type "${o}", found ${Xe(n)}.`,{nodes:n}))}}catch(s){const o=M(t);s instanceof x?r.reportError(s):r.reportError(new x(`Expected value of type "${o}", found ${Xe(n)}; `+s.message,{nodes:n,originalError:s}))}}function OD(r,n,t,a,s){var o;const d=Object.keys(a);if(d.length!==1){r.reportError(new x(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const p=(o=a[d[0]])===null||o===void 0?void 0:o.value,m=!p||p.kind===T.NULL,_=(p==null?void 0:p.kind)===T.VARIABLE;if(m){r.reportError(new x(`Field "${t.name}.${d[0]}" must be non-null.`,{nodes:[n]}));return}if(_){const b=p.name.value;s[b].type.kind!==T.NON_NULL_TYPE&&r.reportError(new x(`Variable "${b}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function UD(r){return{VariableDefinition(n){const t=ht(r.getSchema(),n.type);if(t!==void 0&&!Jo(t)){const a=n.variable.name.value,s=Xe(n.type);r.reportError(new x(`Variable "$${a}" cannot be non-input type "${s}".`,{nodes:n.type}))}}}}function RD(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const a=r.getRecursiveVariableUsages(t);for(const{node:s,type:o,defaultValue:d}of a){const l=s.name.value,p=n[l];if(p&&o){const m=r.getSchema(),_=ht(m,p.type);if(_&&!xD(m,_,p.defaultValue,o,d)){const b=M(_),O=M(o);r.reportError(new x(`Variable "$${l}" of type "${b}" used in position expecting type "${O}".`,{nodes:[p,s]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function xD(r,n,t,a,s){if(we(a)&&!we(n)){if(!(t!=null&&t.kind!==T.NULL)&&!(s!==void 0))return!1;const l=a.ofType;return mi(r,n,l)}return mi(r,n,a)}const ND=Object.freeze([Yv]);Object.freeze([xv,CD,zv,SD,vp,Mv,UD,gD,Nv,AD,jv,Qv,oD,Kv,FD,Jv,Xv,Ip,kp,qv,Ep,PD,hD,RD,eD,Fp,...ND]);const LD=Object.freeze([Wv,ED,kD,vD,DD,TD,ID,vp,Ip,kp,dD,Tp,Ep,Fp,Cp]);class BD{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const a of this.getDocument().definitions)a.kind===T.FRAGMENT_DEFINITION&&(t[a.name.value]=a);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const a=[n];let s;for(;s=a.pop();)for(const o of s.selections)o.kind===T.FRAGMENT_SPREAD?t.push(o):o.selectionSet&&a.push(o.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const a=Object.create(null),s=[n.selectionSet];let o;for(;o=s.pop();)for(const d of this.getFragmentSpreads(o)){const l=d.name.value;if(a[l]!==!0){a[l]=!0;const p=this.getFragment(l);p&&(t.push(p),s.push(p.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class MD extends BD{constructor(n,t,a){super(n,a),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function qD(r,n,t=LD){const a=[],s=new MD(r,n,d=>{a.push(d)}),o=t.map(d=>d(s));return Ql(r,fv(o)),a}function GD(r){const n=qD(r);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function $D(r,n){Pt(r)&&Pt(r.__schema)||le(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${M(r)}.`);const t=r.__schema,a=dr(t.types,U=>U.name,U=>O(U));for(const U of[...za,...Ha])a[U.name]&&(a[U.name]=U);const s=t.queryType?_(t.queryType):null,o=t.mutationType?_(t.mutationType):null,d=t.subscriptionType?_(t.subscriptionType):null,l=t.directives?t.directives.map(gt):[];return new Sp({description:t.description,query:s,mutation:o,subscription:d,types:Object.values(a),directives:l,assumeValid:void 0});function p(U){if(U.kind===ve.LIST){const Q=U.ofType;if(!Q)throw new Error("Decorated type deeper than introspection query.");return new ln(p(Q))}if(U.kind===ve.NON_NULL){const Q=U.ofType;if(!Q)throw new Error("Decorated type deeper than introspection query.");const on=p(Q);return new ie(Sv(on))}return m(U)}function m(U){const Q=U.name;if(!Q)throw new Error(`Unknown type reference: ${M(U)}.`);const on=a[Q];if(!on)throw new Error(`Invalid or incomplete schema, unknown type: ${Q}. Ensure that a full introspection query is used in order to build a client schema.`);return on}function _(U){return yv(m(U))}function b(U){return bv(m(U))}function O(U){if(U!=null&&U.name!=null&&U.kind!=null)switch(U.kind){case ve.SCALAR:return C(U);case ve.OBJECT:return N(U);case ve.INTERFACE:return z(U);case ve.UNION:return ce(U);case ve.ENUM:return Ae(U);case ve.INPUT_OBJECT:return me(U)}const Q=M(U);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Q}.`)}function C(U){return new Ot({name:U.name,description:U.description,specifiedByURL:U.specifiedByURL})}function E(U){if(U.interfaces===null&&U.kind===ve.INTERFACE)return[];if(!U.interfaces){const Q=M(U);throw new Error(`Introspection result missing interfaces: ${Q}.`)}return U.interfaces.map(b)}function N(U){return new pt({name:U.name,description:U.description,interfaces:()=>E(U),fields:()=>Fe(U)})}function z(U){return new Oa({name:U.name,description:U.description,interfaces:()=>E(U),fields:()=>Fe(U)})}function ce(U){if(!U.possibleTypes){const Q=M(U);throw new Error(`Introspection result missing possibleTypes: ${Q}.`)}return new Ua({name:U.name,description:U.description,types:()=>U.possibleTypes.map(_)})}function Ae(U){if(!U.enumValues){const Q=M(U);throw new Error(`Introspection result missing enumValues: ${Q}.`)}return new Lr({name:U.name,description:U.description,values:dr(U.enumValues,Q=>Q.name,Q=>({description:Q.description,deprecationReason:Q.deprecationReason}))})}function me(U){if(!U.inputFields){const Q=M(U);throw new Error(`Introspection result missing inputFields: ${Q}.`)}return new Ra({name:U.name,description:U.description,fields:()=>He(U.inputFields),isOneOf:U.isOneOf})}function Fe(U){if(!U.fields)throw new Error(`Introspection result missing fields: ${M(U)}.`);return dr(U.fields,Q=>Q.name,je)}function je(U){const Q=p(U.type);if(!Zl(Q)){const on=M(Q);throw new Error(`Introspection must provide output type for fields, but received: ${on}.`)}if(!U.args){const on=M(U);throw new Error(`Introspection result missing field args: ${on}.`)}return{description:U.description,deprecationReason:U.deprecationReason,type:Q,args:He(U.args)}}function He(U){return dr(U,Q=>Q.name,Re)}function Re(U){const Q=p(U.type);if(!Jo(Q)){const Rt=M(Q);throw new Error(`Introspection must provide input type for arguments, but received: ${Rt}.`)}const on=U.defaultValue!=null?zt(sv(U.defaultValue),Q):void 0;return{description:U.description,type:Q,defaultValue:on,deprecationReason:U.deprecationReason}}function gt(U){if(!U.args){const Q=M(U);throw new Error(`Introspection result missing directive args: ${Q}.`)}if(!U.locations){const Q=M(U);throw new Error(`Introspection result missing directive locations: ${Q}.`)}return new Ut({name:U.name,description:U.description,isRepeatable:U.isRepeatable,locations:U.locations.slice(),args:He(U.args)})}}function jD(r,n,t){var a,s,o,d;const l=[],p=Object.create(null),m=[];let _;const b=[];for(const w of n.definitions)if(w.kind===T.SCHEMA_DEFINITION)_=w;else if(w.kind===T.SCHEMA_EXTENSION)b.push(w);else if(Ci(w))l.push(w);else if(Zo(w)){const $=w.name.value,B=p[$];p[$]=B?B.concat([w]):[w]}else w.kind===T.DIRECTIVE_DEFINITION&&m.push(w);if(Object.keys(p).length===0&&l.length===0&&m.length===0&&b.length===0&&_==null)return r;const O=Object.create(null);for(const w of r.types)O[w.name]=Ae(w);for(const w of l){var C;const $=w.name.value;O[$]=(C=_l[$])!==null&&C!==void 0?C:Fn(w)}const E={query:r.query&&z(r.query),mutation:r.mutation&&z(r.mutation),subscription:r.subscription&&z(r.subscription),..._&&on([_]),...on(b)};return{description:(a=_)===null||a===void 0||(s=a.description)===null||s===void 0?void 0:s.value,...E,types:Object.values(O),directives:[...r.directives.map(ce),...m.map(Ei)],extensions:Object.create(null),astNode:(o=_)!==null&&o!==void 0?o:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(b),assumeValid:(d=t==null?void 0:t.assumeValid)!==null&&d!==void 0?d:!1};function N(w){return bn(w)?new ln(N(w.ofType)):we(w)?new ie(N(w.ofType)):z(w)}function z(w){return O[w.name]}function ce(w){const $=w.toConfig();return new Ut({...$,args:At($.args,Q)})}function Ae(w){if(Pv(w)||Cv(w))return w;if(Jt(w))return je(w);if(We(w))return He(w);if($e(w))return Re(w);if($n(w))return gt(w);if(nt(w))return Fe(w);if(yn(w))return me(w);et(!1,"Unexpected type: "+M(w))}function me(w){var $;const B=w.toConfig(),q=($=p[B.name])!==null&&$!==void 0?$:[];return new Ra({...B,fields:()=>({...At(B.fields,he=>({...he,type:N(he.type)})),...ot(q)}),extensionASTNodes:B.extensionASTNodes.concat(q)})}function Fe(w){var $;const B=w.toConfig(),q=($=p[w.name])!==null&&$!==void 0?$:[];return new Lr({...B,values:{...B.values,...Vn(q)},extensionASTNodes:B.extensionASTNodes.concat(q)})}function je(w){var $;const B=w.toConfig(),q=($=p[B.name])!==null&&$!==void 0?$:[];let he=B.specifiedByURL;for(const fe of q){var Be;he=(Be=yl(fe))!==null&&Be!==void 0?Be:he}return new Ot({...B,specifiedByURL:he,extensionASTNodes:B.extensionASTNodes.concat(q)})}function He(w){var $;const B=w.toConfig(),q=($=p[B.name])!==null&&$!==void 0?$:[];return new pt({...B,interfaces:()=>[...w.getInterfaces().map(z),...br(q)],fields:()=>({...At(B.fields,U),...yr(q)}),extensionASTNodes:B.extensionASTNodes.concat(q)})}function Re(w){var $;const B=w.toConfig(),q=($=p[B.name])!==null&&$!==void 0?$:[];return new Oa({...B,interfaces:()=>[...w.getInterfaces().map(z),...br(q)],fields:()=>({...At(B.fields,U),...yr(q)}),extensionASTNodes:B.extensionASTNodes.concat(q)})}function gt(w){var $;const B=w.toConfig(),q=($=p[B.name])!==null&&$!==void 0?$:[];return new Ua({...B,types:()=>[...w.getTypes().map(z),...Xt(q)],extensionASTNodes:B.extensionASTNodes.concat(q)})}function U(w){return{...w,type:N(w.type),args:w.args&&At(w.args,Q)}}function Q(w){return{...w,type:N(w.type)}}function on(w){const $={};for(const q of w){var B;const he=(B=q.operationTypes)!==null&&B!==void 0?B:[];for(const Be of he)$[Be.operation]=Rt(Be.type)}return $}function Rt(w){var $;const B=w.name.value,q=($=_l[B])!==null&&$!==void 0?$:O[B];if(q===void 0)throw new Error(`Unknown type: "${B}".`);return q}function Qt(w){return w.kind===T.LIST_TYPE?new ln(Qt(w.type)):w.kind===T.NON_NULL_TYPE?new ie(Qt(w.type)):Rt(w)}function Ei(w){var $;return new Ut({name:w.name.value,description:($=w.description)===null||$===void 0?void 0:$.value,locations:w.locations.map(({value:B})=>B),isRepeatable:w.repeatable,args:ki(w.arguments),astNode:w})}function yr(w){const $=Object.create(null);for(const he of w){var B;const Be=(B=he.fields)!==null&&B!==void 0?B:[];for(const fe of Be){var q;$[fe.name.value]={type:Qt(fe.type),description:(q=fe.description)===null||q===void 0?void 0:q.value,args:ki(fe.arguments),deprecationReason:wa(fe),astNode:fe}}}return $}function ki(w){const $=w??[],B=Object.create(null);for(const he of $){var q;const Be=Qt(he.type);B[he.name.value]={type:Be,description:(q=he.description)===null||q===void 0?void 0:q.value,defaultValue:zt(he.defaultValue,Be),deprecationReason:wa(he),astNode:he}}return B}function ot(w){const $=Object.create(null);for(const he of w){var B;const Be=(B=he.fields)!==null&&B!==void 0?B:[];for(const fe of Be){var q;const Pn=Qt(fe.type);$[fe.name.value]={type:Pn,description:(q=fe.description)===null||q===void 0?void 0:q.value,defaultValue:zt(fe.defaultValue,Pn),deprecationReason:wa(fe),astNode:fe}}}return $}function Vn(w){const $=Object.create(null);for(const he of w){var B;const Be=(B=he.values)!==null&&B!==void 0?B:[];for(const fe of Be){var q;$[fe.name.value]={description:(q=fe.description)===null||q===void 0?void 0:q.value,deprecationReason:wa(fe),astNode:fe}}}return $}function br(w){return w.flatMap($=>{var B,q;return(B=(q=$.interfaces)===null||q===void 0?void 0:q.map(Rt))!==null&&B!==void 0?B:[]})}function Xt(w){return w.flatMap($=>{var B,q;return(B=(q=$.types)===null||q===void 0?void 0:q.map(Rt))!==null&&B!==void 0?B:[]})}function Fn(w){var $;const B=w.name.value,q=($=p[B])!==null&&$!==void 0?$:[];switch(w.kind){case T.OBJECT_TYPE_DEFINITION:{var he;const tn=[w,...q];return new pt({name:B,description:(he=w.description)===null||he===void 0?void 0:he.value,interfaces:()=>br(tn),fields:()=>yr(tn),astNode:w,extensionASTNodes:q})}case T.INTERFACE_TYPE_DEFINITION:{var Be;const tn=[w,...q];return new Oa({name:B,description:(Be=w.description)===null||Be===void 0?void 0:Be.value,interfaces:()=>br(tn),fields:()=>yr(tn),astNode:w,extensionASTNodes:q})}case T.ENUM_TYPE_DEFINITION:{var fe;const tn=[w,...q];return new Lr({name:B,description:(fe=w.description)===null||fe===void 0?void 0:fe.value,values:Vn(tn),astNode:w,extensionASTNodes:q})}case T.UNION_TYPE_DEFINITION:{var Pn;const tn=[w,...q];return new Ua({name:B,description:(Pn=w.description)===null||Pn===void 0?void 0:Pn.value,types:()=>Xt(tn),astNode:w,extensionASTNodes:q})}case T.SCALAR_TYPE_DEFINITION:{var qr;return new Ot({name:B,description:(qr=w.description)===null||qr===void 0?void 0:qr.value,specifiedByURL:yl(w),astNode:w,extensionASTNodes:q})}case T.INPUT_OBJECT_TYPE_DEFINITION:{var xt;const tn=[w,...q];return new Ra({name:B,description:(xt=w.description)===null||xt===void 0?void 0:xt.value,fields:()=>ot(tn),astNode:w,extensionASTNodes:q,isOneOf:VD(w)})}}}}const _l=hr([...za,...Ha],r=>r.name);function wa(r){const n=Ii(pp,r);return n==null?void 0:n.reason}function yl(r){const n=Ii(hp,r);return n==null?void 0:n.url}function VD(r){return!!Ii(fp,r)}function zD(r,n){r!=null&&r.kind===T.DOCUMENT||le(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&GD(r);const a=jD({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,n);if(a.astNode==null)for(const o of a.types)switch(o.name){case"Query":a.query=o;break;case"Mutation":a.mutation=o;break;case"Subscription":a.subscription=o;break}const s=[...a.directives,...Mr.filter(o=>a.directives.every(d=>d.name!==o.name))];return new Sp({...a,directives:s})}function WD(r,n){const t=av(r,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return zD(t,{assumeValidSDL:void 0,assumeValid:void 0})}function HD(r){const n=new Map;return YD(r,t=>{We(t)&&KD(t,a=>{const s=Uo(a.type);vo(n,s).references.push({kind:gi.FIELD,parent:t,by:a}),JD(a,d=>{const l=Uo(d.type);vo(n,l).references.push({kind:gi.ARGUMENT,field:a,type:t,by:d})})}),$n(t)&&t.getTypes().forEach(a=>{vo(n,a).references.push({kind:gi.UNION,by:t})})}),new PI(n)}function YD(r,n){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function KD(r,n){Object.entries(r.getFields()).forEach(([,t])=>{n(t)})}function JD(r,n){Object.entries(r.args).forEach(([,t])=>{n(t)})}function vo(r,n){let t=r.get(n.name);return t||(t={references:[]},r.set(n.name,t)),t}function Uo(r){return we(r)||bn(r)?Uo(r.ofType):r}const bl=`""""""
type Query {
  """
  Using token call the UMS Account Details and return the response Details
  """
  accountDetails: AccountDetailsOutput

  """Get a list of available store views and their config information."""
  availableStores(
    """Filter store views by current store group"""
    useCurrentGroup: Boolean
  ): [StoreConfig]

  """Jwt Token Details"""
  billingHistory: BillingHistoryOutput

  """Return information about the specified shopping cart."""
  cart(
    """The unique ID of the cart to query."""
    cart_id: String!
  ): Cart

  """Return a list of categories that match the specified filter."""
  categories(
    """Identifies which Category filter inputs to search for and return."""
    filters: CategoryFilterInput

    """
    Specifies the maximum number of results to return at once. The default value is 20.
    """
    pageSize: Int = 20

    """Specifies which page of results to return. The default value is 1."""
    currentPage: Int = 1
  ): CategoryResult

  """
  Search for categories that match the criteria specified in the \`search\` and \`filter\` attributes.
  """
  category(
    """The category ID to use as the root of the search."""
    id: Int
  ): CategoryTree @deprecated(reason: "Use \`categories\` instead.")

  """Return an array of categories based on the specified filters."""
  categoryList(
    """Identifies which Category filter inputs to search for and return."""
    filters: CategoryFilterInput

    """
    Specifies the maximum number of results to return at once. The default value is 20.
    """
    pageSize: Int = 20

    """Specifies which page of results to return. The default value is 1."""
    currentPage: Int = 1
  ): [CategoryTree] @deprecated(reason: "Use \`categories\` instead.")

  """Return Terms and Conditions configuration information."""
  checkoutAgreements: [CheckoutAgreement]

  """Clear Account Details from cache"""
  clearUserCache: clearUserCacheOutput

  """Return information about CMS blocks."""
  cmsBlocks(
    """An array of CMS block IDs."""
    identifiers: [String]
  ): CmsBlocks

  """Return details about a CMS page."""
  cmsPage(
    """The ID of the CMS page."""
    id: Int

    """The identifier of the CMS page."""
    identifier: String
  ): CmsPage

  """Return products that have been added to the specified compare list."""
  compareList(
    """The unique ID of the compare list to be queried."""
    uid: ID!
  ): CompareList

  """The countries query provides information for all countries."""
  countries: [Country]

  """The countries query provides information for a single country."""
  country(id: String): Country

  """Return information about the store's currency."""
  currency: Currency

  """Return the attribute type, given an attribute code and entity type."""
  customAttributeMetadata(
    """
    An input object that specifies the attribute code and entity type to search.
    """
    attributes: [AttributeInput!]!
  ): CustomAttributeMetadata

  """Return detailed information about a customer account."""
  customer: Customer

  """Return information about the customer's shopping cart."""
  customerCart: Cart!

  """Return a list of downloadable products the customer has purchased."""
  customerDownloadableProducts: CustomerDownloadableProducts
  customerOrders: CustomerOrders @deprecated(reason: "Use the \`customer\` query instead.")

  """Return a list of customer payment tokens stored in the vault."""
  customerPaymentTokens: CustomerPaymentTokens

  """Using token call the UMS Device List and return the response Details"""
  deviceLists: DeviceListsOutput

  """Fetch Plans response"""
  dish_plans(
    """Defines the filter to use for searching plans."""
    filter: planFilterInput

    """
    Specifies the maximum number of results to return at once. This attribute is optional.
    """
    pageSize: Int

    """
    Specifies the current page of results to return at once. This attribute is optional.
    """
    currentPage: Int

    """
    Specifies which attributes to sort on, and whether to return the results in ascending or descending order.
    """
    sort: PlanSortInput
  ): Plans

  """Return a list of dynamic blocks filtered by type, location, or UIDs."""
  dynamicBlocks(
    """Defines the filter for returning matching dynamic blocks."""
    input: DynamicBlocksFilterInput

    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): DynamicBlocks!

  """The eligibilityMethods query shows customer related information."""
  eligibilityMethods: EligibilityMethodsOutput

  """Eligibility check for Same Day Refunds"""
  eligibleForFullRefund: eligibleForFullRefundOutput

  """
  The eligibleOffers query search offers that match the criteria specified in the filter.
  """
  eligibleOffers(
    """Identifies which offers type you search."""
    filter: EligibleOffersFilterInput
  ): eligibleOffersOutput

  """Search for Future Subscription for plan,packages etc"""
  fetchFutureSubscriptions(
    """The product attributes to search for and return."""
    filter: SubscriptionFilterInput
  ): Subscriptions

  """Search for Future Subscription for plan,packages etc"""
  fetchLegacyToCommerceSubscription(
    """The product attributes to search for and return."""
    filter: LegacyToCommerceFilterInput
  ): SubscriptionsOutput

  """Search for Package Tax Code"""
  fetchPackageTaxCode(
    """Defines the filter to use for searching package."""
    filter: packageFilterInput
  ): [FetchPackageTaxCodeResult]

  """The shipping data query provides information."""
  fetchShippingDetails(
    """"""
    sku: FilterEqualTypeInput

    """amount of shipping details"""
    amount: Float

    """method titles"""
    method_title: String

    """method code"""
    method_code: String

    """is enable"""
    enabled: Int
  ): [Details]

  """Partner Token Details"""
  generatePartnerToken: PartnerToken

  """
  Retrieves the current Quote items & Total details . Throws an error if the cart is not found.
  """
  getCartItemsAndTotals(
    """The unique ID of a \`Cart\` object."""
    cart_id: String!
  ): CartItemAndTotals

  """Retrieves the coupons which can be redeem for the refer a friend"""
  getCoupons(
    """No. of coupons which want in response"""
    limit: String
  ): Coupons

  """
  Get Customer info from cache and return the billing and payment details
  """
  getCustomerInfo: GetCustomerInfoOutput

  """
  Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction.
  """
  getHostedProUrl(
    """An input object that specifies the cart ID."""
    input: HostedProUrlInput!
  ): HostedProUrl

  """Partner Platform PlanOffers"""
  getPartnerPlatformPlanOffers(
    """Partner Platform Filter Input."""
    filter: PartnerPlatformFilterInput
  ): getPartnerPlatformPlanOffers

  """
  Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods.
  """
  getPayflowLinkToken(
    """
    An input object that defines the requirements to receive a payment token.
    """
    input: PayflowLinkTokenInput!
  ): PayflowLinkToken

  """Return details about a specific gift card."""
  giftCardAccount(
    """An input object that specifies the gift card code."""
    input: GiftCardAccountInput!
  ): GiftCardAccount

  """
  Return the specified gift registry. Some details will not be available to guests.
  """
  giftRegistry(
    """The unique ID of the registry to search for."""
    giftRegistryUid: ID!
  ): GiftRegistry

  """Search for gift registries by specifying a registrant email address."""
  giftRegistryEmailSearch(
    """The registrant's email."""
    email: String!
  ): [GiftRegistrySearchResult]

  """Search for gift registries by specifying a registry URL key."""
  giftRegistryIdSearch(
    """The unique ID of the gift registry."""
    giftRegistryUid: ID!
  ): [GiftRegistrySearchResult]

  """
  Search for gift registries by specifying the registrant name and registry type ID.
  """
  giftRegistryTypeSearch(
    """The first name of the registrant."""
    firstName: String!

    """The last name of the registrant."""
    lastName: String!

    """The type UID of the registry."""
    giftRegistryTypeUid: ID
  ): [GiftRegistrySearchResult]

  """Get a list of available gift registry types."""
  giftRegistryTypes: [GiftRegistryType]

  """
  Check whether the specified email has already been used to create a customer account.
  """
  isEmailAvailable(
    """The email address to check."""
    email: String!
  ): IsEmailAvailableOutput

  """Jwt Token Details"""
  loginCustomerByAuthToken(
    """Jwt Token"""
    token: String
  ): LoginCustomerByAuthToken

  """Login customer session by user guid"""
  loginCustomerByUserGuid(
    """Jwt Token"""
    token: String

    """User guid"""
    guid: String
  ): loginCustomerByUserGuid

  """Login customer session by user guid"""
  loginCustomerByUserGuidV2(
    """Jwt Token"""
    auth2_token: String!

    """User guid"""
    user_guid: String!

    """UMS account status"""
    account_status: String!

    """User email"""
    email: String!
  ): loginCustomerByUserGuidV2

  """Search for Future Subscription for plan,packages etc"""
  packageBundleLiteGuid(
    """The bundle lite data to search for and return."""
    filter: packageBundleLiteGuidFilterInput
  ): [packageBundleLiteGuid]

  """
  The query searches for plan offers that match the criteria specified in the search and filter attributes.
  """
  packages(
    """The product attributes to search for and return."""
    filter: PackageAttributeFilterInput

    """
    The maximum number of results to return at once. The default value is 20.
    """
    pageSize: Int = 20

    """The page of results to return. The default value is 1."""
    currentPage: Int = 1

    """
    Specifies which attributes to sort on, and whether to return the results in ascending or descending order.
    """
    sort: ProductAttributeSortInput
  ): Packages

  """Fetch Packages response"""
  packagesPerZipcode(
    """Billing address zipcode"""
    zipcode: String

    """Defines the filter to use for searching packages."""
    filter: packagesFilterInput
  ): [PackagesOutput]

  """Fetch pause eligibility flag"""
  pauseEligibility(
    """Subscription Id"""
    subscription_id: String!
  ): pauseEligibilityOutput

  """
  The query searches for plan offers that match the criteria specified in the search and filter attributes.
  """
  plan_offers(
    """Identifies which offers attributes to search for and return."""
    filter: OfferFilterInput

    """
    Specifies the maximum number of results to return at once. This attribute is optional.
    """
    pageSize: Int

    """
    Specifies the current page of results to return at once. This attribute is optional.
    """
    currentPage: Int

    """
    Specifies which attributes to sort on, and whether to return the results in ascending or descending order.
    """
    sort: OfferSortInput
  ): PlanOffers

  """
  The query searches for plan offers that match the criteria specified in the search and filter attributes.
  """
  ppv(
    """The product attributes to search for and return."""
    filter: PpvPackageAttributeFilterInput

    """
    The maximum number of results to return at once. The default value is 20.
    """
    pageSize: Int = 20

    """The page of results to return. The default value is 1."""
    currentPage: Int = 1

    """
    Specifies which attributes to sort on, and whether to return the results in ascending or descending order.
    """
    sort: ProductAttributeSortInput
  ): Packages

  """The query searches for all ppv packages."""
  ppvPackages(
    """Defines the filter to use for searching ppv packages."""
    filter: ppvPackagesFilterInput
  ): ppvPackagesOutput

  """
  Return the active ratings attributes and the values each rating can have.
  """
  productReviewRatingsMetadata: ProductReviewRatingsMetadata!

  """
  Search for products that match the criteria specified in the \`search\` and \`filter\` attributes.
  """
  products(
    """One or more keywords to use in a full-text search."""
    search: String

    """The product attributes to search for and return."""
    filter: ProductAttributeFilterInput

    """
    The maximum number of results to return at once. The default value is 20.
    """
    pageSize: Int = 20

    """The page of results to return. The default value is 1."""
    currentPage: Int = 1

    """
    Specifies which attributes to sort on, and whether to return the results in ascending or descending order.
    """
    sort: ProductAttributeSortInput
  ): Products

  """
  Retrieve package mappings based on their zipcode, with the correct base and regional packages.
  """
  regionalPackageMap: [RegionalPackageMapOutput]

  """Fetch Regional Packages Response"""
  regionalPackagesByZipCode(
    """Identifies which offers attributes to search for and return."""
    filter: PackageFilterInput
  ): [PackagesOutput]

  """Fetch Regional Packages Response"""
  regionalPackagesByZipCodeV2(
    """Identifies which offers attributes to search for and return."""
    filter: PackageFilterInput
  ): [PackagesOutput]

  """
  Return the full details for a specified product, category, or CMS page.
  """
  route(
    """A \`url_key\` appended by the \`url_suffix, if one exists."""
    url: String!
  ): RoutableInterface

  """
  The salesRule query searches for sales rule that match the criteria specified in the filter.
  """
  salesRule(
    """Action in query."""
    action: String

    """Identifies which product attributes to search for and return."""
    filter: SalesRuleFilterInput

    """Name use in the filter. Apply when action is get_view_review."""
    name: String

    """How many items should show on the page."""
    pageSize: Int = 10

    """Allows to using paging it start with 1."""
    currentPage: Int = 1
  ): SalesRuleOutput

  """
  Using token call the UMS Sign Out Of All Device and return the response Details
  """
  signOutOfAllDevice: SignOutOfAllDeviceOutput

  """The query searches for all sling free packages."""
  slingFreePackages: slingFreePackagesOutput

  """Fetch packages according to filters"""
  slingFreePackagesByClassification(
    """Defines the filter to use for searching package type & classification."""
    filter: packageFilterInput

    """
    Specifies the maximum number of results to return at once. This attribute is optional.
    """
    pageSize: Int

    """
    Specifies the current page of results to return at once. This attribute is optional.
    """
    currentPage: Int
  ): SlingFreePackages

  """The store config query"""
  storeConfig: StoreConfig

  """Return the relative URL for a specified product, category or CMS page."""
  urlResolver(
    """A \`url_key\` appended by the \`url_suffix, if one exists."""
    url: String!
  ): EntityUrl @deprecated(reason: "Use the \`route\` query instead.")

  """Return the contents of a customer's wish list."""
  wishlist: WishlistOutput @deprecated(reason: "Moved under \`Customer.wishlist\`.")

  """Zipcode Address Verification V2"""
  zipcodeAddressVerificationV2(
    """Zipcode"""
    zipcode: String
  ): zipcodeAddressVerificationV2Output
}

""""""
type Mutation {
  acScrubMeta(input: addressVerificationScrubInput): AddressVerificationScrubOutput
  ac_scrub_meta(input: addressVerificationScrubInput): AddressVerificationScrubOutput

  """
  Add one or more bundle products to the specified cart. We recommend using \`addProductsToCart\` instead.
  """
  addBundleProductsToCart(
    """An input object that defines which bundle products to add to the cart."""
    input: AddBundleProductsToCartInput
  ): AddBundleProductsToCartOutput

  """
  Add one or more configurable products to the specified cart. We recommend using \`addProductsToCart\` instead.
  """
  addConfigurableProductsToCart(
    """
    An input object that defines which configurable products to add to the cart.
    """
    input: AddConfigurableProductsToCartInput
  ): AddConfigurableProductsToCartOutput

  """
  Add one or more downloadable products to the specified cart. We recommend using \`addProductsToCart\` instead.
  """
  addDownloadableProductsToCart(
    """
    An input object that defines which downloadable products to add to the cart.
    """
    input: AddDownloadableProductsToCartInput
  ): AddDownloadableProductsToCartOutput

  """Add registrants to the specified gift registry."""
  addGiftRegistryRegistrants(
    """The unique ID of the gift registry."""
    giftRegistryUid: ID!

    """An array registrants to add."""
    registrants: [AddGiftRegistryRegistrantInput!]!
  ): AddGiftRegistryRegistrantsOutput

  """Add any type of product to the cart."""
  addProductsToCart(
    """The cart ID of the shopper."""
    cartId: String!

    """An array that defines the products to add to the cart."""
    cartItems: [CartItemInput!]!
  ): AddProductsToCartOutput

  """Add products to the specified compare list."""
  addProductsToCompareList(
    """
    An input object that defines which products to add to an existing compare list.
    """
    input: AddProductsToCompareListInput
  ): CompareList

  """
  Add one or more products to the specified wish list. This mutation supports all product types.
  """
  addProductsToWishlist(
    """The ID of a wish list."""
    wishlistId: ID!

    """An array of products to add to the wish list."""
    wishlistItems: [WishlistItemInput!]!
  ): AddProductsToWishlistOutput

  """Add a comment to an existing return."""
  addReturnComment(
    """An input object that defines a return comment."""
    input: AddReturnCommentInput!
  ): AddReturnCommentOutput

  """Add tracking information to the return."""
  addReturnTracking(
    """An input object that defines tracking information."""
    input: AddReturnTrackingInput!
  ): AddReturnTrackingOutput

  """
  Add one or more simple products to the specified cart. We recommend using \`addProductsToCart\` instead.
  """
  addSimpleProductsToCart(
    """An input object that defines which simple products to add to the cart."""
    input: AddSimpleProductsToCartInput
  ): AddSimpleProductsToCartOutput

  """
  Add one or more virtual products to the specified cart. We recommend using \`addProductsToCart\` instead.
  """
  addVirtualProductsToCart(
    """
    An input object that defines which virtual products to add to the cart.
    """
    input: AddVirtualProductsToCartInput
  ): AddVirtualProductsToCartOutput

  """Add items in the specified wishlist to the customer's cart."""
  addWishlistItemsToCart(
    """The unique ID of the wish list"""
    wishlistId: ID!

    """
    An array of IDs representing products to be added to the cart. If no IDs are specified, all items in the wishlist will be added to the cart
    """
    wishlistItemIds: [ID!]
  ): AddWishlistItemsToCartOutput
  address_verification(input: addressVerificationInput): AddressVerificationOutput

  """Apply a pre-defined coupon code to the specified cart."""
  applyCouponToCart(
    """An input object that defines the coupon code to apply to the cart."""
    input: ApplyCouponInput
  ): ApplyCouponOutput

  """Apply a pre-defined gift card code to the specified cart."""
  applyGiftCardToCart(
    """An input object that specifies the gift card code and cart."""
    input: ApplyGiftCardToCartInput
  ): ApplyGiftCardToCartOutput

  """Apply store credit to the specified cart."""
  applyStoreCreditToCart(
    """An input object that specifies the cart ID."""
    input: ApplyStoreCreditToCartInput!
  ): ApplyStoreCreditToCartOutput

  """Assign the specified compare list to the logged in customer."""
  assignCompareListToCustomer(
    """The unique ID of the compare list to be assigned."""
    uid: ID!
  ): AssignCompareListToCustomerOutput

  """Assign a logged-in customer to the specified guest shopping cart."""
  assignCustomerToGuestCart(cart_id: String!): Cart!

  """Cancel Subscription form for customer."""
  cancelSubscription(
    """An input object that defines the feedback cancel form inputs"""
    input: CancelSubscriptionInput
  ): CancelSubscriptionOutput

  """Cancel feedback form for customer."""
  cancelSubscriptionFeedback(
    """An input object that defines the feedback cancel form inputs"""
    input: CancelFeedbackInput!
  ): CancelFeedbackOutput

  """Cancel subscription feedback update form for customer."""
  cancelSubscriptionFeedbackUpdate(input: cancelSubscriptionFeedbackInput!): CancelFeedbackOutput

  """Change the billing address on a specific cart."""
  changeBillingAddress(
    """
    An input object that defines the billing address to be assigned to the cart.
    """
    input: ChangeBillingAddressInput
  ): changeBillingAddressOutput

  """Change the password for the logged-in customer."""
  changeCustomerPassword(
    """The customer's original password."""
    currentPassword: String!

    """The customer's updated password."""
    newPassword: String!
  ): Customer

  """Empty Customer Cart"""
  checkSubscriptionPackageChange: checkSubscriptionPackageChangeOutput

  """Cancel feedback form for customer."""
  cl_feedback(
    """An input object that defines the feedback cancel form inputs"""
    input: CancelFeedbackInput!
  ): CancelFeedbackOutput

  """Cancel Subscription form for customer."""
  cl_subsc: CancelSubscriptionOutput

  """
  Copy products from one wish list to another. The original wish list is unchanged.
  """
  copyProductsBetweenWishlists(
    """The ID of the original wish list."""
    sourceWishlistUid: ID!

    """The ID of the target wish list."""
    destinationWishlistUid: ID!

    """An array of items to copy."""
    wishlistItems: [WishlistItemCopyInput!]!
  ): CopyProductsBetweenWishlistsOutput

  """Creates Client Token for Braintree Javascript SDK initialization."""
  createBraintreeClientToken: String!

  """
  Create a new compare list. The compare list is saved for logged in customers.
  """
  createCompareList(input: CreateCompareListInput): CompareList

  """Use \`createCustomerV2\` instead."""
  createCustomer(
    """An input object that defines the customer to be created."""
    input: CustomerInput!
  ): CustomerOutput

  """Create a billing or shipping address for a customer or guest."""
  createCustomerAddress(input: CustomerAddressInput!): CustomerAddress

  """Create a customer account."""
  createCustomerV2(
    """An input object that defines the customer to be created."""
    input: CustomerCreateInput!
  ): CustomerOutput

  """Create an empty shopping cart for a guest or logged in user"""
  createEmptyCart(
    """An optional input object that assigns the specified ID to the cart."""
    input: createEmptyCartInput
  ): String

  """Create a gift registry on behalf of the customer."""
  createGiftRegistry(
    """An input object that defines a new gift registry."""
    giftRegistry: CreateGiftRegistryInput!
  ): CreateGiftRegistryOutput

  """Create a customer account from partner platform."""
  createPartnerPlatformUser(
    """An input object that defines the customer to be created."""
    input: PpCustomerCreateInput!
  ): PpCustomerCreateOutput

  """
  Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods
  """
  createPayflowProToken(
    """
    An input object that defines the requirements to fetch payment token information.
    """
    input: PayflowProTokenInput!
  ): CreatePayflowProTokenOutput

  """
  Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods.
  """
  createPaypalExpressToken(
    """
    An input object that defines the requirements to receive a payment token.
    """
    input: PaypalExpressTokenInput!
  ): PaypalExpressTokenOutput

  """Create a product review for the specified product."""
  createProductReview(
    """
    An input object that contains the details necessary to create a product review.
    """
    input: CreateProductReviewInput!
  ): CreateProductReviewOutput!
  createProspectUser(
    """Create Prospect User"""
    input: ProspectInput
  ): ProspectOutput
  createTokenAccount(input: CreateTokenInput!): CreateTokenAccountOutput

  """Create a customer account."""
  createUser(
    """An input object that defines the customer to be created."""
    input: UserCreateInput!
  ): UserOutput

  """Create a new wish list."""
  createWishlist(
    """An input object that defines a new wish list."""
    input: CreateWishlistInput!
  ): CreateWishlistOutput

  """Delete the specified compare list."""
  deleteCompareList(
    """The unique ID of the compare list to be deleted."""
    uid: ID!
  ): DeleteCompareListOutput

  """Delete customer account"""
  deleteCustomer: Boolean

  """Delete the billing or shipping address of a customer."""
  deleteCustomerAddress(
    """The ID of the customer address to be deleted."""
    id: Int!
  ): Boolean

  """Delete a customer's payment token."""
  deletePaymentToken(
    """The reusable payment token securely stored in the vault."""
    public_hash: String!
  ): DeletePaymentTokenOutput

  """
  Delete the specified wish list. You cannot delete the customer's default (first) wish list.
  """
  deleteWishlist(
    """The ID of the wish list to delete."""
    wishlistId: ID!
  ): DeleteWishlistOutput

  """Empty Customer Cart"""
  emptyCart: emptyCartOutput

  """'Forgot Password' API call"""
  forgotPassword(
    """Forgot Password"""
    email: String!
  ): ForgotPassword

  """Generate a token for specified customer."""
  generateCustomerToken(
    """The customer's email address."""
    email: String!

    """The customer's password."""
    password: String!
  ): CustomerToken

  """
  Request a customer token so that an administrator can perform remote shopping assistance.
  """
  generateCustomerTokenAsAdmin(
    """An input object that defines the customer email address."""
    input: GenerateCustomerTokenAsAdminInput!
  ): GenerateCustomerTokenAsAdminOutput

  """
  Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods.
  """
  handlePayflowProResponse(
    """
    An input object that includes the payload returned by PayPal and the cart ID.
    """
    input: PayflowProResponseInput!
  ): PayflowProResponseOutput

  """Add any type of product to the cart"""
  initChangeSubCart: changeSubscriptionOutput

  """Change subscription initialization version 2"""
  initChangeSubCartV2: changeSubscriptionOutput

  """Add any type of product to the cart"""
  initOfferCart(offer_identifier: String!, ac_type: String!): WinBackOutput
  initiatePartnerSubscription(input: InitiatePartnerSubscriptionInput): InitiatePartnerSubscriptionOutput

  """
  Transfer the contents of a guest cart into the cart of a logged-in customer.
  """
  mergeCarts(
    """The guest's cart ID before they login."""
    source_cart_id: String!

    """The cart ID after the guest logs in."""
    destination_cart_id: String
  ): Cart!

  """Move all items from the cart to a gift registry."""
  moveCartItemsToGiftRegistry(
    """
    The unique ID of the cart containing items to be moved to a gift registry.
    """
    cartUid: ID!

    """The unique ID of the target gift registry."""
    giftRegistryUid: ID!
  ): MoveCartItemsToGiftRegistryOutput

  """Move products from one wish list to another."""
  moveProductsBetweenWishlists(
    """The ID of the original wish list."""
    sourceWishlistUid: ID!

    """The ID of the target wish list."""
    destinationWishlistUid: ID!

    """An array of items to move."""
    wishlistItems: [WishlistItemMoveInput!]!
  ): MoveProductsBetweenWishlistsOutput

  """Pause subscription as per no_of_billing_cycles"""
  pauseSubscription(subscription_id: String!, no_of_billing_cycles: Int!, paid_pause_package_identifier: String): pauseSubscriptionOutput

  """Convert the quote into an order."""
  placeOrder(
    """An input object that defines the shopper's cart ID."""
    input: PlaceOrderInput
  ): PlaceOrderOutput

  """ppv transactions"""
  ppvCreateTransactions(input: PpvTransactionInput): PpvTransactionOutput

  """Redeem a gift card for store credit."""
  redeemGiftCardBalanceAsStoreCredit(
    """An input object that specifies the gift card code to redeem."""
    input: GiftCardAccountInput!
  ): GiftCardAccount

  """
  Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon.
  """
  removeCouponFromCart(
    """
    An input object that defines which coupon code to remove from the cart.
    """
    input: RemoveCouponFromCartInput
  ): RemoveCouponFromCartOutput

  """Removes a gift card from the cart."""
  removeGiftCardFromCart(
    """
    An input object that specifies which gift card code to remove from the cart.
    """
    input: RemoveGiftCardFromCartInput
  ): RemoveGiftCardFromCartOutput

  """Delete the specified gift registry."""
  removeGiftRegistry(
    """The unique ID of the gift registry to delete."""
    giftRegistryUid: ID!
  ): RemoveGiftRegistryOutput

  """Delete the specified items from a gift registry."""
  removeGiftRegistryItems(
    """The unique ID of the gift registry."""
    giftRegistryUid: ID!

    """An array of item IDs to remove from the gift registry."""
    itemsUid: [ID!]!
  ): RemoveGiftRegistryItemsOutput

  """Removes registrants from a gift registry."""
  removeGiftRegistryRegistrants(
    """The unique ID of the gift registry."""
    giftRegistryUid: ID!

    """An array of registrant IDs to remove."""
    registrantsUid: [ID!]!
  ): RemoveGiftRegistryRegistrantsOutput

  """
  Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist.
  """
  removeItemFromCart(
    """An input object that defines which products to remove from the cart."""
    input: RemoveItemFromCartInput
  ): RemoveItemFromCartOutput

  """Remove products from the specified compare list."""
  removeProductsFromCompareList(
    """
    An input object that defines which products to remove from a compare list.
    """
    input: RemoveProductsFromCompareListInput
  ): CompareList

  """Remove one or more products from the specified wish list."""
  removeProductsFromWishlist(
    """The ID of a wish list."""
    wishlistId: ID!

    """An array of item IDs representing products to be removed."""
    wishlistItemsIds: [ID!]!
  ): RemoveProductsFromWishlistOutput

  """Remove a tracked shipment from a return."""
  removeReturnTracking(
    """An input object that removes tracking information."""
    input: RemoveReturnTrackingInput!
  ): RemoveReturnTrackingOutput

  """Remove store credit that has been applied to the specified cart."""
  removeStoreCreditFromCart(
    """An input object that specifies the cart ID."""
    input: RemoveStoreCreditFromCartInput!
  ): RemoveStoreCreditFromCartOutput

  """Add all products from a customer's previous order to the cart."""
  reorderItems(orderNumber: String!): ReorderItemsOutput

  """
  Request an email with a reset password token for the registered customer identified by the specified email.
  """
  requestPasswordResetEmail(
    """The customer's email address."""
    email: String!
  ): Boolean

  """Initiates a buyer's request to return items for replacement or refund."""
  requestReturn(
    """
    An input object that contains the fields needed to start a return request.
    """
    input: RequestReturnInput!
  ): RequestReturnOutput

  """
  Reset a customer's password using the reset password token that the customer received in an email after requesting it using \`requestPasswordResetEmail\`.
  """
  resetPassword(
    """The customer's email address."""
    email: String!

    """A runtime token generated by the \`requestPasswordResetEmail\` mutation."""
    resetPasswordToken: String!

    """The customer's new password."""
    newPassword: String!
  ): Boolean

  """Resume a paused subscription and move it into the active state"""
  resumeSubscription(subscription_id: String!): resumeSubscriptionOutput

  """Revoke the customer token."""
  revokeCustomerToken: RevokeCustomerTokenOutput
  scrubAddressVerification(input: addressVerificationInput): AddressVerificationOutput

  """Set the billing address on a specific cart."""
  setBillingAddressOnCart(
    """
    An input object that defines the billing address to be assigned to the cart.
    """
    input: SetBillingAddressOnCartInput
  ): SetBillingAddressOnCartOutput
  setCartHeaders(input: SetCartHeadersInputs): SetCartHeadersOutput
  setExtraParametersOnCart(input: SetExtraParametersOnCartInput): SetExtraParametersOnCartOutput

  """Assign the email address of a guest to the cart."""
  setGuestEmailOnCart(
    """An input object that defines a guest email address."""
    input: SetGuestEmailOnCartInput
  ): SetGuestEmailOnCartOutput

  """review package data"""
  setOfferProductToCart(offer_identifier: String, ac_type: String, cartItems: [ReviewCartInput!]!): ReviewCartOutput

  """Set the cart payment method and convert the cart into an order."""
  setPaymentMethodAndPlaceOrder(input: SetPaymentMethodAndPlaceOrderInput): PlaceOrderOutput @deprecated(reason: "Should use setPaymentMethodOnCart and placeOrder mutations in single request.")

  """Apply a payment method to the cart."""
  setPaymentMethodOnCart(
    """
    An input object that defines which payment method to apply to the cart.
    """
    input: SetPaymentMethodOnCartInput
  ): SetPaymentMethodOnCartOutput

  """Add any type of product to the cart"""
  setProductsToCart(cartId: String!, store_code: String, init_offer: Boolean, cartItems: [CartItemInput!]!): SetProductsToCartOutput

  """Set one or more shipping addresses on a specific cart."""
  setShippingAddressesOnCart(
    """
    An input object that defines one or more shipping addresses to be assigned to the cart.
    """
    input: SetShippingAddressesOnCartInput
  ): SetShippingAddressesOnCartOutput

  """Set one or more delivery methods on a cart."""
  setShippingMethodsOnCart(
    """An input object that applies one or more shipping methods to the cart."""
    input: SetShippingMethodsOnCartInput
  ): SetShippingMethodsOnCartOutput

  """Send an email about the gift registry to a list of invitees."""
  shareGiftRegistry(
    """The unique ID of the gift registry."""
    giftRegistryUid: ID!

    """The sender's email address and gift message."""
    sender: ShareGiftRegistrySenderInput!

    """An array containing invitee names and email addresses."""
    invitees: [ShareGiftRegistryInviteeInput!]!
  ): ShareGiftRegistryOutput

  """Subscribe the specified email to the store's newsletter."""
  subscribeEmailToNewsletter(
    """The email address that will receive the store's newsletter."""
    email: String!
  ): SubscribeEmailToNewsletterOutput
  subscriptionPostpone(input: subscriptionPostPoneInput): subscriptionPostPoneOutput

  """Using token call the UMS toggle visibility"""
  toggleVisibility(
    """Toggle visibility"""
    hide_duplicate_channels: Boolean!
  ): ToggleVisibility

  """Modify items in the cart."""
  updateCartItems(
    """An input object that defines products to be updated."""
    input: UpdateCartItemsInput
  ): UpdateCartItemsOutput

  """Use \`updateCustomerV2\` instead."""
  updateCustomer(
    """An input object that defines the customer characteristics to update."""
    input: CustomerInput!
  ): CustomerOutput

  """Update the billing or shipping address of a customer or guest."""
  updateCustomerAddress(
    """The ID assigned to the customer address."""
    id: Int!

    """An input object that contains changes to the customer address."""
    input: CustomerAddressInput
  ): CustomerAddress

  """
  UMS push the account status with Customer Eligibility Data to Magento in Real Time.
  """
  updateCustomerEligibilityData(
    """Update the ums account status and other fields in customer table."""
    input: CustomerDataInput!
  ): CustomerDataUpdatedOutput

  """Change the email address for the logged-in customer."""
  updateCustomerEmail(
    """The customer's email address."""
    email: String!

    """The customer's password."""
    password: String!
  ): CustomerOutput

  """Update the customer's personal information."""
  updateCustomerV2(
    """An input object that defines the customer characteristics to update."""
    input: CustomerUpdateInput!
  ): CustomerOutput

  """Update the specified gift registry."""
  updateGiftRegistry(
    """The unique ID of an existing gift registry."""
    giftRegistryUid: ID!

    """An input object that defines which fields to update."""
    giftRegistry: UpdateGiftRegistryInput!
  ): UpdateGiftRegistryOutput

  """Update the specified items in the gift registry."""
  updateGiftRegistryItems(
    """The unique ID of the gift registry."""
    giftRegistryUid: ID!

    """An array of items to be updated."""
    items: [UpdateGiftRegistryItemInput!]!
  ): UpdateGiftRegistryItemsOutput

  """Modify the properties of one or more gift registry registrants."""
  updateGiftRegistryRegistrants(
    """The unique ID of the gift registry."""
    giftRegistryUid: ID!

    """An array of registrants to update."""
    registrants: [UpdateGiftRegistryRegistrantInput!]!
  ): UpdateGiftRegistryRegistrantsOutput

  """Update one or more products in the specified wish list."""
  updateProductsInWishlist(
    """The ID of a wish list."""
    wishlistId: ID!

    """An array of items to be updated."""
    wishlistItems: [WishlistItemUpdateInput!]!
  ): UpdateProductsInWishlistOutput

  """Change the name and visibility of the specified wish list."""
  updateWishlist(
    """The ID of the wish list to update."""
    wishlistId: ID!

    """The name assigned to the wish list."""
    name: String

    """Indicates the visibility of the wish list."""
    visibility: WishlistVisibilityEnum
  ): UpdateWishlistOutput
  user(input: ScrubAddressVerificationInput): ScrubAddressVerificationOutput

  """Update prospect users free packages selections."""
  userFreestreamUpdate(
    """
    An input object that defines the prospect users free packages selections.
    """
    input: UserFreestreamUpdateInput!
  ): UserFreestreamUpdateOutput
  zipcodeAddressVerification(input: zipcodeAddressVerificationInput): ZipcodeAddressVerificationOutput
}

"""Defines the comparison operators that can be used in a filter."""
input FilterTypeInput {
  """Equals."""
  eq: String

  """"""
  finset: [String]

  """From. Must be used with the \`to\` field."""
  from: String

  """Greater than."""
  gt: String

  """Greater than or equal to."""
  gteq: String

  """In. The value can contain a set of comma-separated values."""
  in: [String]

  """
  Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters.
  """
  like: String

  """Less than."""
  lt: String

  """Less than or equal to."""
  lteq: String

  """More than or equal to."""
  moreq: String

  """Not equal to."""
  neq: String

  """Not in. The value can contain a set of comma-separated values."""
  nin: [String]

  """Not null."""
  notnull: String

  """Is null."""
  null: String

  """To. Must be used with the \`from\` field."""
  to: String
}

"""Defines a filter that matches the input exactly."""
input FilterEqualTypeInput {
  """
  Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as \`5\`.
  """
  eq: String

  """
  Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of \`["4", "5", "6"]\`.
  """
  in: [String]
}

"""
Defines a filter that matches a range of values, such as prices or dates.
"""
input FilterRangeTypeInput {
  """Use this attribute to specify the lowest possible value in the range."""
  from: String

  """Use this attribute to specify the highest possible value in the range."""
  to: String
}

"""Defines a filter that performs a fuzzy search."""
input FilterMatchTypeInput {
  """
  Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as \`24-MB01\`.
  """
  match: String
}

"""Defines a filter for an input string."""
input FilterStringTypeInput {
  """Filters items that are exactly the same as the specified string."""
  eq: String

  """
  Filters items that are exactly the same as entries specified in an array of strings.
  """
  in: [String]

  """
  Defines a filter that performs a fuzzy search using the specified string.
  """
  match: String
}

"""Provides navigation for the query response."""
type SearchResultPageInfo {
  """The specific page to return."""
  current_page: Int

  """The maximum number of items to return per page of results."""
  page_size: Int

  """The total number of pages in the response."""
  total_pages: Int
}

"""Indicates whether to return results in ascending or descending order."""
enum SortEnum {
  """"""
  ASC @deprecated(reason: "")

  """"""
  DESC @deprecated(reason: "")
}

""""""
type ComplexTextValue {
  """Text that can contain HTML tags."""
  html: String!
}

"""
Defines a monetary value, including a numeric value and a currency code.
"""
type Money {
  """A three-letter currency code, such as USD or EUR."""
  currency: CurrencyEnum

  """A number expressing a monetary value."""
  value: Float
}

"""The list of available currency codes."""
enum CurrencyEnum {
  """"""
  AFN @deprecated(reason: "")

  """"""
  ALL @deprecated(reason: "")

  """"""
  AZN @deprecated(reason: "")

  """"""
  DZD @deprecated(reason: "")

  """"""
  AOA @deprecated(reason: "")

  """"""
  ARS @deprecated(reason: "")

  """"""
  AMD @deprecated(reason: "")

  """"""
  AWG @deprecated(reason: "")

  """"""
  AUD @deprecated(reason: "")

  """"""
  BSD @deprecated(reason: "")

  """"""
  BHD @deprecated(reason: "")

  """"""
  BDT @deprecated(reason: "")

  """"""
  BBD @deprecated(reason: "")

  """"""
  BYN @deprecated(reason: "")

  """"""
  BZD @deprecated(reason: "")

  """"""
  BMD @deprecated(reason: "")

  """"""
  BTN @deprecated(reason: "")

  """"""
  BOB @deprecated(reason: "")

  """"""
  BAM @deprecated(reason: "")

  """"""
  BWP @deprecated(reason: "")

  """"""
  BRL @deprecated(reason: "")

  """"""
  GBP @deprecated(reason: "")

  """"""
  BND @deprecated(reason: "")

  """"""
  BGN @deprecated(reason: "")

  """"""
  BUK @deprecated(reason: "")

  """"""
  BIF @deprecated(reason: "")

  """"""
  KHR @deprecated(reason: "")

  """"""
  CAD @deprecated(reason: "")

  """"""
  CVE @deprecated(reason: "")

  """"""
  CZK @deprecated(reason: "")

  """"""
  KYD @deprecated(reason: "")

  """"""
  GQE @deprecated(reason: "")

  """"""
  CLP @deprecated(reason: "")

  """"""
  CNY @deprecated(reason: "")

  """"""
  COP @deprecated(reason: "")

  """"""
  KMF @deprecated(reason: "")

  """"""
  CDF @deprecated(reason: "")

  """"""
  CRC @deprecated(reason: "")

  """"""
  HRK @deprecated(reason: "")

  """"""
  CUP @deprecated(reason: "")

  """"""
  DKK @deprecated(reason: "")

  """"""
  DJF @deprecated(reason: "")

  """"""
  DOP @deprecated(reason: "")

  """"""
  XCD @deprecated(reason: "")

  """"""
  EGP @deprecated(reason: "")

  """"""
  SVC @deprecated(reason: "")

  """"""
  ERN @deprecated(reason: "")

  """"""
  EEK @deprecated(reason: "")

  """"""
  ETB @deprecated(reason: "")

  """"""
  EUR @deprecated(reason: "")

  """"""
  FKP @deprecated(reason: "")

  """"""
  FJD @deprecated(reason: "")

  """"""
  GMD @deprecated(reason: "")

  """"""
  GEK @deprecated(reason: "")

  """"""
  GEL @deprecated(reason: "")

  """"""
  GHS @deprecated(reason: "")

  """"""
  GIP @deprecated(reason: "")

  """"""
  GTQ @deprecated(reason: "")

  """"""
  GNF @deprecated(reason: "")

  """"""
  GYD @deprecated(reason: "")

  """"""
  HTG @deprecated(reason: "")

  """"""
  HNL @deprecated(reason: "")

  """"""
  HKD @deprecated(reason: "")

  """"""
  HUF @deprecated(reason: "")

  """"""
  ISK @deprecated(reason: "")

  """"""
  INR @deprecated(reason: "")

  """"""
  IDR @deprecated(reason: "")

  """"""
  IRR @deprecated(reason: "")

  """"""
  IQD @deprecated(reason: "")

  """"""
  ILS @deprecated(reason: "")

  """"""
  JMD @deprecated(reason: "")

  """"""
  JPY @deprecated(reason: "")

  """"""
  JOD @deprecated(reason: "")

  """"""
  KZT @deprecated(reason: "")

  """"""
  KES @deprecated(reason: "")

  """"""
  KWD @deprecated(reason: "")

  """"""
  KGS @deprecated(reason: "")

  """"""
  LAK @deprecated(reason: "")

  """"""
  LVL @deprecated(reason: "")

  """"""
  LBP @deprecated(reason: "")

  """"""
  LSL @deprecated(reason: "")

  """"""
  LRD @deprecated(reason: "")

  """"""
  LYD @deprecated(reason: "")

  """"""
  LTL @deprecated(reason: "")

  """"""
  MOP @deprecated(reason: "")

  """"""
  MKD @deprecated(reason: "")

  """"""
  MGA @deprecated(reason: "")

  """"""
  MWK @deprecated(reason: "")

  """"""
  MYR @deprecated(reason: "")

  """"""
  MVR @deprecated(reason: "")

  """"""
  LSM @deprecated(reason: "")

  """"""
  MRO @deprecated(reason: "")

  """"""
  MUR @deprecated(reason: "")

  """"""
  MXN @deprecated(reason: "")

  """"""
  MDL @deprecated(reason: "")

  """"""
  MNT @deprecated(reason: "")

  """"""
  MAD @deprecated(reason: "")

  """"""
  MZN @deprecated(reason: "")

  """"""
  MMK @deprecated(reason: "")

  """"""
  NAD @deprecated(reason: "")

  """"""
  NPR @deprecated(reason: "")

  """"""
  ANG @deprecated(reason: "")

  """"""
  YTL @deprecated(reason: "")

  """"""
  NZD @deprecated(reason: "")

  """"""
  NIC @deprecated(reason: "")

  """"""
  NGN @deprecated(reason: "")

  """"""
  KPW @deprecated(reason: "")

  """"""
  NOK @deprecated(reason: "")

  """"""
  OMR @deprecated(reason: "")

  """"""
  PKR @deprecated(reason: "")

  """"""
  PAB @deprecated(reason: "")

  """"""
  PGK @deprecated(reason: "")

  """"""
  PYG @deprecated(reason: "")

  """"""
  PEN @deprecated(reason: "")

  """"""
  PHP @deprecated(reason: "")

  """"""
  PLN @deprecated(reason: "")

  """"""
  QAR @deprecated(reason: "")

  """"""
  RHD @deprecated(reason: "")

  """"""
  RON @deprecated(reason: "")

  """"""
  RUB @deprecated(reason: "")

  """"""
  RWF @deprecated(reason: "")

  """"""
  SHP @deprecated(reason: "")

  """"""
  STD @deprecated(reason: "")

  """"""
  SAR @deprecated(reason: "")

  """"""
  RSD @deprecated(reason: "")

  """"""
  SCR @deprecated(reason: "")

  """"""
  SLL @deprecated(reason: "")

  """"""
  SGD @deprecated(reason: "")

  """"""
  SKK @deprecated(reason: "")

  """"""
  SBD @deprecated(reason: "")

  """"""
  SOS @deprecated(reason: "")

  """"""
  ZAR @deprecated(reason: "")

  """"""
  KRW @deprecated(reason: "")

  """"""
  LKR @deprecated(reason: "")

  """"""
  SDG @deprecated(reason: "")

  """"""
  SRD @deprecated(reason: "")

  """"""
  SZL @deprecated(reason: "")

  """"""
  SEK @deprecated(reason: "")

  """"""
  CHF @deprecated(reason: "")

  """"""
  SYP @deprecated(reason: "")

  """"""
  TWD @deprecated(reason: "")

  """"""
  TJS @deprecated(reason: "")

  """"""
  TZS @deprecated(reason: "")

  """"""
  THB @deprecated(reason: "")

  """"""
  TOP @deprecated(reason: "")

  """"""
  TTD @deprecated(reason: "")

  """"""
  TND @deprecated(reason: "")

  """"""
  TMM @deprecated(reason: "")

  """"""
  USD @deprecated(reason: "")

  """"""
  UGX @deprecated(reason: "")

  """"""
  UAH @deprecated(reason: "")

  """"""
  AED @deprecated(reason: "")

  """"""
  UYU @deprecated(reason: "")

  """"""
  UZS @deprecated(reason: "")

  """"""
  VUV @deprecated(reason: "")

  """"""
  VEB @deprecated(reason: "")

  """"""
  VEF @deprecated(reason: "")

  """"""
  VND @deprecated(reason: "")

  """"""
  CHE @deprecated(reason: "")

  """"""
  CHW @deprecated(reason: "")

  """"""
  XOF @deprecated(reason: "")

  """"""
  WST @deprecated(reason: "")

  """"""
  YER @deprecated(reason: "")

  """"""
  ZMK @deprecated(reason: "")

  """"""
  ZWD @deprecated(reason: "")

  """"""
  TRY @deprecated(reason: "")

  """"""
  AZM @deprecated(reason: "")

  """"""
  ROL @deprecated(reason: "")

  """"""
  TRL @deprecated(reason: "")

  """"""
  XPF @deprecated(reason: "")
}

"""Defines a customer-entered option."""
input EnteredOptionInput {
  """
  The unique ID for a \`CustomizableOptionInterface\` object, such as a \`CustomizableFieldOption\`, \`CustomizableFileOption\`, or \`CustomizableAreaOption\` object.
  """
  uid: ID!

  """Text the customer entered."""
  value: String!
}

""""""
enum BatchMutationStatus {
  """"""
  SUCCESS @deprecated(reason: "")

  """"""
  FAILURE @deprecated(reason: "")

  """"""
  MIXED_RESULTS @deprecated(reason: "")
}

""""""
interface ErrorInterface {
  """The returned error message."""
  message: String!
}

"""Contains an error message when an invalid UID was specified."""
type NoSuchEntityUidError implements ErrorInterface {
  """The returned error message."""
  message: String!

  """The specified invalid unique ID of an object."""
  uid: ID!
}

"""Contains an error message when an internal error occurred."""
type InternalError implements ErrorInterface {
  """The returned error message."""
  message: String!
}

"""Defines an array of custom attributes."""
type CustomAttributeMetadata {
  """An array of attributes."""
  items: [Attribute]
}

"""Contains details about the attribute, including the code and type."""
type Attribute {
  """
  The unique identifier for an attribute code. This value should be in lowercase letters without spaces.
  """
  attribute_code: String

  """Attribute options list."""
  attribute_options: [AttributeOption]

  """The data type of the attribute."""
  attribute_type: String

  """The type of entity that defines the attribute."""
  entity_type: String

  """The frontend input type of the attribute."""
  input_type: String

  """Details about the storefront properties configured for the attribute."""
  storefront_properties: StorefrontProperties
}

"""Indicates where an attribute can be displayed."""
type StorefrontProperties {
  """
  The relative position of the attribute in the layered navigation block.
  """
  position: Int

  """
  Indicates whether the attribute is filterable with results, without results, or not at all.
  """
  use_in_layered_navigation: UseInLayeredNavigationOptions

  """Indicates whether the attribute is displayed in product listings."""
  use_in_product_listing: Boolean

  """
  Indicates whether the attribute can be used in layered navigation on search results pages.
  """
  use_in_search_results_layered_navigation: Boolean

  """Indicates whether the attribute is displayed on product pages."""
  visible_on_catalog_pages: Boolean
}

"""Defines whether the attribute is filterable in layered navigation."""
enum UseInLayeredNavigationOptions {
  """"""
  NO @deprecated(reason: "")

  """"""
  FILTERABLE_WITH_RESULTS @deprecated(reason: "")

  """"""
  FILTERABLE_NO_RESULT @deprecated(reason: "")
}

"""Defines an attribute option."""
type AttributeOption {
  """The label assigned to the attribute option."""
  label: String

  """The attribute option value."""
  value: String
}

"""
Defines the attribute characteristics to search for the \`attribute_code\` and \`entity_type\` to search.
"""
input AttributeInput {
  """
  The unique identifier for an attribute code. This value should be in lowercase letters without spaces.
  """
  attribute_code: String

  """The type of entity that defines the attribute."""
  entity_type: String
}

"""The type contains information about a store config"""
type StoreConfig {
  """
  Contains scripts that must be included in the HTML before the closing \`<body>\` tag.
  """
  absolute_footer: String

  """
  Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No).
  """
  allow_guests_to_write_product_reviews: String

  """The value of the Allow Gift Messages for Order Items option"""
  allow_items: String

  """The value of the Allow Gift Messages on Order Level option"""
  allow_order: String

  """
  Indicates whether to enable autocomplete on login and forgot password forms.
  """
  autocomplete_on_storefront: Boolean

  """Base currency code"""
  base_currency_code: String

  """Base link URL for the store"""
  base_link_url: String

  """Base media URL for the store"""
  base_media_url: String

  """Base static URL for the store"""
  base_static_url: String

  """Base URL for the store"""
  base_url: String

  """Braintree cc vault status."""
  braintree_cc_vault_active: String

  """The default sort order of the search results list."""
  catalog_default_sort_by: String

  """
  Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages.
  """
  category_fixed_product_tax_display_setting: FixedProductTaxDisplaySettings

  """The suffix applied to category pages, such as \`.htm\` or \`.html\`."""
  category_url_suffix: String

  """Indicates whether only specific countries can use this payment method."""
  check_money_order_enable_for_specific_countries: Boolean

  """Indicates whether the Check/Money Order payment method is enabled."""
  check_money_order_enabled: Boolean

  """The name of the party to whom the check must be payable."""
  check_money_order_make_check_payable_to: String

  """
  The maximum order amount required to qualify for the Check/Money Order payment method.
  """
  check_money_order_max_order_total: String

  """
  The minimum order amount required to qualify for the Check/Money Order payment method.
  """
  check_money_order_min_order_total: String

  """
  The status of new orders placed using the Check/Money Order payment method.
  """
  check_money_order_new_order_status: String

  """
  A comma-separated list of specific countries allowed to use the Check/Money Order payment method.
  """
  check_money_order_payment_from_specific_countries: String

  """The full street address or PO Box where the checks are mailed."""
  check_money_order_send_check_to: String

  """
  A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout.
  """
  check_money_order_sort_order: Int

  """
  The title of the Check/Money Order payment method displayed on the storefront.
  """
  check_money_order_title: String

  """
  The configuration determines if the store code should be used in the URL
  """
  checkout_processing_fee: String

  """The name of the CMS page that identifies the home page for the store."""
  cms_home_page: String

  """
  A specific CMS page that displays when cookies are not enabled for the browser.
  """
  cms_no_cookies: String

  """
  A specific CMS page that displays when a 404 'Page Not Found' error occurs.
  """
  cms_no_route: String

  """A code assigned to the store to identify it"""
  code: String @deprecated(reason: "Use \`store_code\` instead.")

  """
  Indicates whether the \`parent\` or child (\`itself\`) thumbnail should be used in the cart for configurable products.
  """
  configurable_thumbnail_source: String

  """The copyright statement that appears at the bottom of each page."""
  copyright: String

  """
  The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length.
  """
  default_description: String

  """Default display currency code"""
  default_display_currency_code: String

  """
  A series of keywords that describe your store, each separated by a comma.
  """
  default_keywords: String

  """
  The title that appears at the title bar of each page when viewed in a browser.
  """
  default_title: String

  """
  Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes).
  """
  demonotice: Int

  """
  Indicates whether customers can have multiple wish lists. Possible values: 1 (Yes) and 0 (No).
  """
  enable_multiple_wishlists: String

  """The landing page that is associated with the base URL."""
  front: String

  """The default number of products per page in Grid View."""
  grid_per_page: Int

  """
  A list of numbers that define how many products can be displayed in Grid View.
  """
  grid_per_page_values: String

  """
  Scripts that must be included in the HTML before the closing \`<head>\` tag.
  """
  head_includes: String

  """
  The small graphic image (favicon) that appears in the address bar and tab of the browser.
  """
  head_shortcut_icon: String

  """The path to the logo that appears in the header."""
  header_logo_src: String

  """The ID number assigned to the store"""
  id: Int @deprecated(reason: "Use \`store_code\` instead.")

  """
  Indicates whether the store view has been designated as the default within the store group
  """
  is_default_store: Boolean

  """
  Indicates whether the store group has been designated as the default within the website
  """
  is_default_store_group: Boolean

  """The format of the search results list."""
  list_mode: String

  """The default number of products per page in List View."""
  list_per_page: Int

  """
  A list of numbers that define how many products can be displayed in List View.
  """
  list_per_page_values: String

  """Store locale"""
  locale: String

  """The Alt text that is associated with the logo."""
  logo_alt: String

  """The height of the logo image, in pixels."""
  logo_height: Int

  """The width of the logo image, in pixels."""
  logo_width: Int

  """Indicates whether wishlists are enabled (1) or disabled (0)."""
  magento_wishlist_general_is_enabled: String

  """
  If multiple wish lists are enabled, the maximum number of wish lists the customer can have.
  """
  maximum_number_of_wishlists: String

  """The minimum number of characters required for a valid password."""
  minimum_password_length: String

  """
  The default page that displays when a 404 'Page not Found' error occurs.
  """
  no_route: String

  """Payflow Pro vault status."""
  payment_payflowpro_cc_vault_active: String

  """
  Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages.
  """
  product_fixed_product_tax_display_setting: FixedProductTaxDisplaySettings

  """
  Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No).
  """
  product_reviews_enabled: String

  """The suffix applied to product pages, such as \`.htm\` or \`.html\`."""
  product_url_suffix: String

  """
  The number of different character classes (lowercase, uppercase, digits, special characters) required in a password.
  """
  required_character_classes_number: String

  """
  Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled.
  """
  returns_enabled: String!

  """The ID of the root category."""
  root_category_id: Int @deprecated(reason: "Use \`root_category_uid\` instead.")

  """The unique ID for a \`CategoryInterface\` object."""
  root_category_uid: ID

  """
  Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages.
  """
  sales_fixed_product_tax_display_setting: FixedProductTaxDisplaySettings

  """Secure base link URL for the store"""
  secure_base_link_url: String

  """Secure base media URL for the store"""
  secure_base_media_url: String

  """Secure base static URL for the store"""
  secure_base_static_url: String

  """Secure base URL for the store"""
  secure_base_url: String

  """
  Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes).
  """
  show_cms_breadcrumbs: Int

  """
  The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the \`Store\` header to provide the scope
  """
  store_code: ID

  """
  The unique ID assigned to the store group. In the Admin, this is called the Store Name
  """
  store_group_code: ID

  """The label assigned to the store group"""
  store_group_name: String

  """The label assigned to the store view"""
  store_name: String

  """The store view sort order"""
  store_sort_order: Int

  """Timezone of the store"""
  timezone: String

  """
  A prefix that appears before the title to create a two- or three-part title.
  """
  title_prefix: String

  """
  The character that separates the category name and subcategory in the browser title bar.
  """
  title_separator: String

  """
  A suffix that appears after the title to create a two- or three-part title.
  """
  title_suffix: String

  """
  The configuration determines if the store code should be used in the URL
  """
  use_store_in_url: Boolean

  """The unique ID for the website"""
  website_code: ID

  """The ID number assigned to the website store"""
  website_id: Int @deprecated(reason: "The field should not be used on the storefront")

  """The label assigned to the website"""
  website_name: String

  """The unit of weight"""
  weight_unit: String

  """
  Text that appears in the header of the page and includes the name of the logged in customer.
  """
  welcome: String

  """Indicates whether only specific countries can use this payment method."""
  zero_subtotal_enable_for_specific_countries: Boolean

  """Indicates whether the Zero Subtotal payment method is enabled."""
  zero_subtotal_enabled: Boolean

  """
  The status of new orders placed using the Zero Subtotal payment method.
  """
  zero_subtotal_new_order_status: String

  """
  When the new order status is 'Processing', this can be set to \`authorize_capture\` to automatically invoice all items that have a zero balance.
  """
  zero_subtotal_payment_action: String

  """
  A comma-separated list of specific countries allowed to use the Zero Subtotal payment method.
  """
  zero_subtotal_payment_from_specific_countries: String

  """
  A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout.
  """
  zero_subtotal_sort_order: Int

  """
  The title of the Zero Subtotal payment method displayed on the storefront.
  """
  zero_subtotal_title: String
}

"""Contains details about a CMS page."""
type CmsPage implements RoutableInterface {
  """The content of the CMS page in raw HTML."""
  content: String

  """The heading that displays at the top of the CMS page."""
  content_heading: String

  """The ID of a CMS page."""
  identifier: String

  """A brief description of the page for search results listings."""
  meta_description: String

  """A brief description of the page for search results listings."""
  meta_keywords: String

  """
  A page title that is indexed by search engines and appears in search results listings.
  """
  meta_title: String

  """
  The design layout of the page, indicating the number of columns and navigation features used on the page.
  """
  page_layout: String

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """
  The name that appears in the breadcrumb trail navigation and in the browser title bar and tab.
  """
  title: String

  """Category Type"""
  type: String

  """
  The URL key of the CMS page, which is often based on the \`content_heading\`.
  """
  url_key: String
}

"""Contains an array CMS block items."""
type CmsBlocks {
  """An array of CMS blocks."""
  items: [CmsBlock]
}

"""Contains details about a specific CMS block."""
type CmsBlock {
  """The content of the CMS block in raw HTML."""
  content: String

  """The CMS block identifier."""
  identifier: String

  """The title assigned to the CMS block."""
  title: String
}

"""
Website is deprecated because it is should not be used on storefront. The type contains information about a website
"""
type Website {
  """A code assigned to the website to identify it"""
  code: String @deprecated(reason: "The field should not be used on the storefront.")

  """The default group ID that the website has"""
  default_group_id: String @deprecated(reason: "The field should not be used on the storefront.")

  """The ID number assigned to the website"""
  id: Int @deprecated(reason: "The field should not be used on the storefront.")

  """Specifies if this is the default website"""
  is_default: Boolean @deprecated(reason: "The field should not be used on the storefront.")

  """The website name. Websites use this name to identify it easier."""
  name: String @deprecated(reason: "The field should not be used on the storefront.")

  """The attribute to use for sorting websites"""
  sort_order: Int @deprecated(reason: "The field should not be used on the storefront.")
}

"""Contains fields that are common to all types of products."""
interface ProductInterface {
  """An array of related Addons."""
  addons: [AddonsDetail]

  """The attribute set assigned to the product."""
  attribute_set_id: Int @deprecated(reason: "The field should not be used on the storefront.")
  auto_entitled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  auto_selected: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  available_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  base_price: String
  base_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related child products."""
  bundle_child_products: [BundleDetail]

  """An array of bundle deal parts."""
  bundle_deal_parts: [BundleDealParts]
  business_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  call_sign: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  canonical_identifier: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled.
  """
  canonical_url: String

  """An array of categories."""
  categories: [CategoriesPackagesDetail]

  """An array of related products."""
  channels: [ChannelDetail]
  charge_currency: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_name: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_periodicity: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of products to be displayed in a Related Products block."""
  child_products: [ProductInterface]
  color: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product's country of origin."""
  country_of_manufacture: String

  """Timestamp indicating when the product was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of cross-sell products."""
  crosssell_products: [ProductInterface]
  csr_required: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  default_classification: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: ComplexTextValue
  description_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_3: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_disclaimer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_classification: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_time_utc: String
  effective_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_start_time_utc: String
  element_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  element_type_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  entity_id: Int

  """An array of related Addons."""
  excluded_packages: [ExcludedPackagesDetail]
  fine_print: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether a gift message is available."""
  gift_message_available: String

  """An array of related child products."""
  grouped_child_products: [GroupDetail]
  has_partner_skus: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  hide_display: Boolean

  """The ID number assigned to the product."""
  id: Int @deprecated(reason: "Use the \`uid\` field instead.")
  identifier: String

  """The relative path to the main image on the product page."""
  image: ProductImage

  """The relative path to the main image on the product page."""
  images: [ProductImage]
  instructional: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  is_grandfathered: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether the product can be returned."""
  is_returnable: String
  item_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  lite_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A number representing the product's manufacturer."""
  manufacturer: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of media gallery objects."""
  media_gallery: [MediaGalleryInterface]

  """An array of MediaGalleryEntry objects."""
  media_gallery_entries: [MediaGalleryEntry] @deprecated(reason: "Use \`media_gallery\` instead.")

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: String

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: String

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: String
  migrated_to: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  minutes: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  move_id: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product name. Customers use this name to identify the product."""
  name: String

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  new_from_date: String

  """The end date for new product listings."""
  new_to_date: String

  """The value assigned to the Only X Left Threshold option in the Admin."""
  only_x_left_in_stock: Float

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: String
  ota_qual_indoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_none: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_outdoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  package_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  partner_platforms: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  pkg_service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  plan_offer_price: String
  plan_package_price: String
  plan_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates the price of an item."""
  price: ProductPrices @deprecated(reason: "Use \`price_range\` for product price information.")

  """The range of prices for the product"""
  price_range: PriceRange!

  """An array of \`TierPrice\` objects."""
  price_tiers: [TierPrice]
  priority: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of \`ProductLinks\` objects."""
  product_links: [ProductLinksInterface]
  promo: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The average of all the ratings given to the product."""
  rating_summary: Float!
  reg_price: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  regional_price_package: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related products."""
  related_products: [ProductInterface]

  """The total count of all the reviews given to the product."""
  review_count: Int!

  """The list of products reviews."""
  reviews(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): ProductReviews!
  selection_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A short description of the product. Its use depends on the theme."""
  short_description: ComplexTextValue

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: String
  sling_channel_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_product_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the small image, which is used on catalog pages."""
  small_image: ProductImage

  """The beginning date that a product has a special price."""
  special_from_date: String @deprecated(reason: "The field should not be used on the storefront.")

  """The discounted price of the product."""
  special_price: Float

  """The end date for a product with a special price."""
  special_to_date: String

  """Indicates whether the product is staged for a future campaign."""
  staged: Boolean!
  status: String

  """The stock status of the product."""
  stock_status: ProductStockStatus
  supported_apps: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the product's thumbnail image."""
  thumbnail: ProductImage

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: Float @deprecated(reason: "Use \`price_tiers\` for product tier price information.")

  """An array of ProductTierPrices objects."""
  tier_prices: [ProductTierPrices] @deprecated(reason: "Use \`price_tiers\` for product tier price information.")
  trial_offer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_sms_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  One of simple, virtual, bundle, downloadable, grouped, or configurable.
  """
  type_id: String @deprecated(reason: "Use \`__typename\` instead.")

  """The unique ID for a \`ProductInterface\` object."""
  uid: ID!

  """Timestamp indicating when the product was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of up-sell products."""
  upsell_products: [ProductInterface]

  """The part of the URL that identifies the product"""
  url_key: String
  url_path: String @deprecated(reason: "Use product's \`canonical_url\` or url rewrites instead")

  """URL rewrites list"""
  url_rewrites: [UrlRewrite]

  """The part of the product URL that is appended after the url key"""
  url_suffix: String
  user_controlled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of websites in which the product is available."""
  websites: [Website] @deprecated(reason: "The field should not be used on the storefront.")
}

"""States whether a product stock status is in stock or out of stock."""
enum ProductStockStatus {
  """"""
  IN_STOCK @deprecated(reason: "")

  """"""
  OUT_OF_STOCK @deprecated(reason: "")
}

"""
Deprecated. Use \`ProductPrice\` instead. Defines the price of a product as well as any tax-related adjustments.
"""
type Price {
  """
  An array that provides information about tax, weee, or weee_tax adjustments.
  """
  adjustments: [PriceAdjustment] @deprecated(reason: "Use \`ProductPrice\` instead.")

  """The price of a product plus a three-letter currency code."""
  amount: Money @deprecated(reason: "Use \`ProductPrice\` instead.")
}

"""
Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment.
"""
type PriceAdjustment {
  """The amount of the price adjustment and its currency code."""
  amount: Money

  """Indicates whether the adjustment involves tax, weee, or weee_tax."""
  code: PriceAdjustmentCodesEnum @deprecated(reason: "\`PriceAdjustment\` is deprecated.")

  """
  Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
  """
  description: PriceAdjustmentDescriptionEnum @deprecated(reason: "\`PriceAdjustment\` is deprecated.")
}

"""\`PriceAdjustment.code\` is deprecated."""
enum PriceAdjustmentCodesEnum {
  """"""
  TAX @deprecated(reason: "\`PriceAdjustmentCodesEnum\` is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog.")

  """"""
  WEEE @deprecated(reason: "WEEE code is deprecated. Use \`fixed_product_taxes.label\` instead.")

  """"""
  WEEE_TAX @deprecated(reason: "Use \`fixed_product_taxes\` instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog.")
}

"""
\`PriceAdjustmentDescriptionEnum\` is deprecated. States whether a price adjustment is included or excluded.
"""
enum PriceAdjustmentDescriptionEnum {
  """"""
  INCLUDED @deprecated(reason: "")

  """"""
  EXCLUDED @deprecated(reason: "")
}

"""Defines the price type."""
enum PriceTypeEnum {
  """"""
  FIXED @deprecated(reason: "")

  """"""
  PERCENT @deprecated(reason: "")

  """"""
  DYNAMIC @deprecated(reason: "")
}

"""Defines the customizable date type."""
enum CustomizableDateTypeEnum {
  """"""
  DATE @deprecated(reason: "")

  """"""
  DATE_TIME @deprecated(reason: "")

  """"""
  TIME @deprecated(reason: "")
}

"""
Deprecated. Use \`PriceRange\` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price.
"""
type ProductPrices {
  """
  The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the \`to\` value.
  """
  maximalPrice: Price @deprecated(reason: "Use \`PriceRange.maximum_price\` instead.")

  """
  The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the \`from\` value.
  """
  minimalPrice: Price @deprecated(reason: "Use \`PriceRange.minimum_price\` instead.")

  """The base price of a product."""
  regularPrice: Price @deprecated(reason: "Use \`regular_price\` from \`PriceRange.minimum_price\` or \`PriceRange.maximum_price\` instead.")
}

"""
Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same.
"""
type PriceRange {
  """The highest possible price for the product."""
  maximum_price: ProductPrice

  """The lowest possible price for the product."""
  minimum_price: ProductPrice!
}

"""Represents a product price."""
type ProductPrice {
  """
  The price discount. Represents the difference between the regular and final price.
  """
  discount: ProductDiscount

  """The final price of the product after applying discounts."""
  final_price: Money!

  """
  An array of the multiple Fixed Product Taxes that can be applied to a product price.
  """
  fixed_product_taxes: [FixedProductTax]

  """The regular price of the product."""
  regular_price: Money!
}

"""Contains the discount applied to a product price."""
type ProductDiscount {
  """The actual value of the discount."""
  amount_off: Float

  """The discount expressed a percentage."""
  percent_off: Float
}

"""An implementation of \`ProductLinksInterface\`."""
type ProductLinks implements ProductLinksInterface {
  """One of related, associated, upsell, or crosssell."""
  link_type: String

  """The SKU of the linked product."""
  linked_product_sku: String

  """
  The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable).
  """
  linked_product_type: String

  """The position within the list of product links."""
  position: Int

  """The identifier of the linked product."""
  sku: String
}

"""
Contains information about linked products, including the link type and product type of each item.
"""
interface ProductLinksInterface {
  """One of related, associated, upsell, or crosssell."""
  link_type: String

  """The SKU of the linked product."""
  linked_product_sku: String

  """
  The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable).
  """
  linked_product_type: String

  """The position within the list of product links."""
  position: Int

  """The identifier of the linked product."""
  sku: String
}

"""Contains attributes specific to tangible products."""
interface PhysicalProductInterface {
  """The weight of the item, in units defined by the store."""
  weight: Float
}

"""
Contains information about a text area that is defined as part of a customizable option.
"""
type CustomizableAreaOption implements CustomizableOptionInterface {
  """Option ID."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """The Stock Keeping Unit of the base product."""
  product_sku: String

  """Indicates whether the option is required."""
  required: Boolean

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableOptionInterface\` object."""
  uid: ID!

  """An object that defines a text area."""
  value: CustomizableAreaValue
}

"""
Defines the price and sku of a product whose page contains a customized text area.
"""
type CustomizableAreaValue {
  """
  The maximum number of characters that can be entered for this customizable option.
  """
  max_characters: Int

  """The price assigned to this option."""
  price: Float

  """FIXED, PERCENT, or DYNAMIC."""
  price_type: PriceTypeEnum

  """The Stock Keeping Unit for this option."""
  sku: String

  """The unique ID for a \`CustomizableAreaValue\` object."""
  uid: ID!
}

"""Contains the hierarchy of categories."""
type CategoryTree implements CategoryInterface & RoutableInterface {
  automatic_sorting: String
  available_sort_by: [String]

  """An array of breadcrumb items."""
  breadcrumbs: [Breadcrumb]

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled.
  """
  canonical_url: String

  """A tree of child categories."""
  children: [CategoryTree]
  children_count: String

  """Contains a category CMS block."""
  cms_block: CmsBlock

  """The timestamp indicating when the category was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")
  custom_layout_update_file: String

  """The attribute to use for sorting."""
  default_sort_by: String

  """An optional description of the category."""
  description: String
  display_mode: String
  display_priority: Int
  filter_price_range: Float

  """An ID that uniquely identifies the category."""
  id: Int @deprecated(reason: "Use \`uid\` instead.")
  image: String
  include_in_menu: Int
  is_anchor: Int
  is_default: Int
  landing_page: Int

  """The depth of the category within the tree."""
  level: Int
  meta_description: String
  meta_keywords: String
  meta_title: String

  """The display name of the category."""
  name: String

  """The full category path."""
  path: String

  """The category path within the store."""
  path_in_store: String

  """
  The position of the category relative to other categories at the same level in tree.
  """
  position: Int

  """
  The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
  """
  product_count: Int

  """The list of products assigned to the category."""
  products(
    """
    The maximum number of results to return at once. The default value is 20.
    """
    pageSize: Int = 20

    """The page of results to return. The default value is 1."""
    currentPage: Int = 1

    """
    The attributes to sort on, and whether to return the results in ascending or descending order.
    """
    sort: ProductAttributeSortInput
  ): CategoryProducts

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """Indicates whether the category is staged for a future campaign."""
  staged: Boolean!
  tag_priority: Int
  tag_translation_en: String
  tag_translation_es: String
  tags_category_id: String

  """Category Type"""
  type: String

  """The unique ID for a \`CategoryInterface\` object."""
  uid: ID!

  """The timestamp indicating when the category was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """The URL key assigned to the category."""
  url_key: String

  """The URL path assigned to the category."""
  url_path: String

  """The part of the category URL that is appended after the url key"""
  url_suffix: String
}

"""
Contains a collection of \`CategoryTree\` objects and pagination information.
"""
type CategoryResult {
  """A list of categories that match the filter criteria."""
  items: [CategoryTree]

  """
  An object that includes the \`page_info\` and \`currentPage\` values specified in the query.
  """
  page_info: SearchResultPageInfo

  """The total number of categories that match the criteria."""
  total_count: Int
}

"""
Contains information about a date picker that is defined as part of a customizable option.
"""
type CustomizableDateOption implements CustomizableOptionInterface {
  """Option ID."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """The Stock Keeping Unit of the base product."""
  product_sku: String

  """Indicates whether the option is required."""
  required: Boolean

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableOptionInterface\` object."""
  uid: ID!

  """An object that defines a date field in a customizable option."""
  value: CustomizableDateValue
}

"""
Defines the price and sku of a product whose page contains a customized date picker.
"""
type CustomizableDateValue {
  """The price assigned to this option."""
  price: Float

  """FIXED, PERCENT, or DYNAMIC."""
  price_type: PriceTypeEnum

  """The Stock Keeping Unit for this option."""
  sku: String

  """DATE, DATE_TIME or TIME"""
  type: CustomizableDateTypeEnum

  """The unique ID for a \`CustomizableDateValue\` object."""
  uid: ID!
}

"""
Contains information about a drop down menu that is defined as part of a customizable option.
"""
type CustomizableDropDownOption implements CustomizableOptionInterface {
  """Option ID."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """Indicates whether the option is required."""
  required: Boolean

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableOptionInterface\` object."""
  uid: ID!

  """An array that defines the set of options for a drop down menu."""
  value: [CustomizableDropDownValue]
}

"""
Defines the price and sku of a product whose page contains a customized drop down menu.
"""
type CustomizableDropDownValue {
  """The ID assigned to the value."""
  option_type_id: Int

  """The price assigned to this option."""
  price: Float

  """FIXED, PERCENT, or DYNAMIC."""
  price_type: PriceTypeEnum

  """The Stock Keeping Unit for this option."""
  sku: String

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableDropDownValue\` object."""
  uid: ID!
}

"""
Contains information about a multiselect that is defined as part of a customizable option.
"""
type CustomizableMultipleOption implements CustomizableOptionInterface {
  """Option ID."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """Indicates whether the option is required."""
  required: Boolean

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableOptionInterface\` object."""
  uid: ID!

  """An array that defines the set of options for a multiselect."""
  value: [CustomizableMultipleValue]
}

"""
Defines the price and sku of a product whose page contains a customized multiselect.
"""
type CustomizableMultipleValue {
  """The ID assigned to the value."""
  option_type_id: Int

  """The price assigned to this option."""
  price: Float

  """FIXED, PERCENT, or DYNAMIC."""
  price_type: PriceTypeEnum

  """The Stock Keeping Unit for this option."""
  sku: String

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableMultipleValue\` object."""
  uid: ID!
}

"""
Contains information about a text field that is defined as part of a customizable option.
"""
type CustomizableFieldOption implements CustomizableOptionInterface {
  """Option ID."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """The Stock Keeping Unit of the base product."""
  product_sku: String

  """Indicates whether the option is required."""
  required: Boolean

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableOptionInterface\` object."""
  uid: ID!

  """An object that defines a text field."""
  value: CustomizableFieldValue
}

"""
Defines the price and sku of a product whose page contains a customized text field.
"""
type CustomizableFieldValue {
  """
  The maximum number of characters that can be entered for this customizable option.
  """
  max_characters: Int

  """The price of the custom value."""
  price: Float

  """FIXED, PERCENT, or DYNAMIC."""
  price_type: PriceTypeEnum

  """The Stock Keeping Unit for this option."""
  sku: String

  """The unique ID for a \`CustomizableFieldValue\` object."""
  uid: ID!
}

"""
Contains information about a file picker that is defined as part of a customizable option.
"""
type CustomizableFileOption implements CustomizableOptionInterface {
  """Option ID."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """The Stock Keeping Unit of the base product."""
  product_sku: String

  """Indicates whether the option is required."""
  required: Boolean

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableOptionInterface\` object."""
  uid: ID!

  """An object that defines a file value."""
  value: CustomizableFileValue
}

"""
Defines the price and sku of a product whose page contains a customized file picker.
"""
type CustomizableFileValue {
  """The file extension to accept."""
  file_extension: String

  """The maximum width of an image."""
  image_size_x: Int

  """The maximum height of an image."""
  image_size_y: Int

  """The price assigned to this option."""
  price: Float

  """FIXED, PERCENT, or DYNAMIC."""
  price_type: PriceTypeEnum

  """The Stock Keeping Unit for this option."""
  sku: String

  """The unique ID for a \`CustomizableFileValue\` object."""
  uid: ID!
}

"""Contains basic information about a product image or video."""
interface MediaGalleryInterface {
  common_path: String

  """Indicates whether the image is hidden from view."""
  disabled: Boolean
  format: String

  """The label of the product image or video."""
  label: String
  name: String

  """The media item's position after it has been sorted."""
  position: Int
  sub_path: String
  theme: String
  type: String

  """The URL of the product image or video."""
  url: String
}

"""Contains product image information, including the image URL and label."""
type ProductImage implements MediaGalleryInterface {
  common_path: String

  """Indicates whether the image is hidden from view."""
  disabled: Boolean
  format: String

  """The label of the product image or video."""
  label: String
  name: String

  """The media item's position after it has been sorted."""
  position: Int
  sub_path: String
  theme: String
  type: String

  """The URL of the product image or video."""
  url: String
}

"""Contains information about a product video."""
type ProductVideo implements MediaGalleryInterface {
  common_path: String

  """Indicates whether the image is hidden from view."""
  disabled: Boolean
  format: String

  """The label of the product image or video."""
  label: String
  name: String

  """The media item's position after it has been sorted."""
  position: Int
  sub_path: String
  theme: String
  type: String

  """The URL of the product image or video."""
  url: String

  """Contains a \`ProductMediaGalleryEntriesVideoContent\` object."""
  video_content: ProductMediaGalleryEntriesVideoContent
}

"""
Contains basic information about a customizable option. It can be implemented by several types of configurable options.
"""
interface CustomizableOptionInterface {
  """Option ID."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """Indicates whether the option is required."""
  required: Boolean

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableOptionInterface\` object."""
  uid: ID!
}

"""Contains information about customizable product options."""
interface CustomizableProductInterface {
  """An array of options for a customizable product."""
  options: [CustomizableOptionInterface]
}

"""
Contains the full set of attributes that can be returned in a category search.
"""
interface CategoryInterface {
  automatic_sorting: String
  available_sort_by: [String]

  """An array of breadcrumb items."""
  breadcrumbs: [Breadcrumb]

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled.
  """
  canonical_url: String
  children_count: String

  """Contains a category CMS block."""
  cms_block: CmsBlock

  """The timestamp indicating when the category was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")
  custom_layout_update_file: String

  """The attribute to use for sorting."""
  default_sort_by: String

  """An optional description of the category."""
  description: String
  display_mode: String
  display_priority: Int
  filter_price_range: Float

  """An ID that uniquely identifies the category."""
  id: Int @deprecated(reason: "Use \`uid\` instead.")
  image: String
  include_in_menu: Int
  is_anchor: Int
  is_default: Int
  landing_page: Int

  """The depth of the category within the tree."""
  level: Int
  meta_description: String
  meta_keywords: String
  meta_title: String

  """The display name of the category."""
  name: String

  """The full category path."""
  path: String

  """The category path within the store."""
  path_in_store: String

  """
  The position of the category relative to other categories at the same level in tree.
  """
  position: Int

  """
  The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
  """
  product_count: Int

  """The list of products assigned to the category."""
  products(
    """
    The maximum number of results to return at once. The default value is 20.
    """
    pageSize: Int = 20

    """The page of results to return. The default value is 1."""
    currentPage: Int = 1

    """
    The attributes to sort on, and whether to return the results in ascending or descending order.
    """
    sort: ProductAttributeSortInput
  ): CategoryProducts

  """Indicates whether the category is staged for a future campaign."""
  staged: Boolean!
  tag_priority: Int
  tag_translation_en: String
  tag_translation_es: String
  tags_category_id: String
  type: String

  """The unique ID for a \`CategoryInterface\` object."""
  uid: ID!

  """The timestamp indicating when the category was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """The URL key assigned to the category."""
  url_key: String

  """The URL path assigned to the category."""
  url_path: String

  """The part of the category URL that is appended after the url key"""
  url_suffix: String
}

"""
Contains details about an individual category that comprises a breadcrumb.
"""
type Breadcrumb {
  """The ID of the category."""
  category_id: Int @deprecated(reason: "Use \`category_uid\` instead.")

  """The category level."""
  category_level: Int

  """The display name of the category."""
  category_name: String

  """The unique ID for a \`Breadcrumb\` object."""
  category_uid: ID!

  """The URL key of the category."""
  category_url_key: String

  """The URL path of the category."""
  category_url_path: String
}

"""
Contains information about a set of radio buttons that are defined as part of a customizable option.
"""
type CustomizableRadioOption implements CustomizableOptionInterface {
  """Option ID."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """Indicates whether the option is required."""
  required: Boolean

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableOptionInterface\` object."""
  uid: ID!

  """An array that defines a set of radio buttons."""
  value: [CustomizableRadioValue]
}

"""
Defines the price and sku of a product whose page contains a customized set of radio buttons.
"""
type CustomizableRadioValue {
  """The ID assigned to the value."""
  option_type_id: Int

  """The price assigned to this option."""
  price: Float

  """FIXED, PERCENT, or DYNAMIC."""
  price_type: PriceTypeEnum

  """The Stock Keeping Unit for this option."""
  sku: String

  """The order in which the radio button is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableRadioValue\` object."""
  uid: ID!
}

"""
Contains information about a set of checkbox values that are defined as part of a customizable option.
"""
type CustomizableCheckboxOption implements CustomizableOptionInterface {
  """Option ID."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """Indicates whether the option is required."""
  required: Boolean

  """The order in which the option is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableOptionInterface\` object."""
  uid: ID!

  """An array that defines a set of checkbox values."""
  value: [CustomizableCheckboxValue]
}

"""
Defines the price and sku of a product whose page contains a customized set of checkbox values.
"""
type CustomizableCheckboxValue {
  """The ID assigned to the value."""
  option_type_id: Int

  """The price assigned to this option."""
  price: Float

  """FIXED, PERCENT, or DYNAMIC."""
  price_type: PriceTypeEnum

  """The Stock Keeping Unit for this option."""
  sku: String

  """The order in which the checkbox value is displayed."""
  sort_order: Int

  """The display name for this option."""
  title: String

  """The unique ID for a \`CustomizableCheckboxValue\` object."""
  uid: ID!
}

"""
Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory.
"""
type VirtualProduct implements ProductInterface & RoutableInterface & CustomizableProductInterface {
  """An array of related Addons."""
  addons: [AddonsDetail]

  """The attribute set assigned to the product."""
  attribute_set_id: Int @deprecated(reason: "The field should not be used on the storefront.")
  auto_entitled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  auto_selected: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  available_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  base_price: String
  base_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related child products."""
  bundle_child_products: [BundleDetail]

  """An array of bundle deal parts."""
  bundle_deal_parts: [BundleDealParts]
  business_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  call_sign: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  canonical_identifier: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled.
  """
  canonical_url: String

  """An array of categories."""
  categories: [CategoriesPackagesDetail]

  """An array of related products."""
  channels: [ChannelDetail]
  charge_currency: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_name: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_periodicity: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of products to be displayed in a Related Products block."""
  child_products: [ProductInterface]
  color: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product's country of origin."""
  country_of_manufacture: String

  """Timestamp indicating when the product was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of cross-sell products."""
  crosssell_products: [ProductInterface]
  csr_required: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  default_classification: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: ComplexTextValue
  description_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_3: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_disclaimer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_classification: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_time_utc: String
  effective_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_start_time_utc: String
  element_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  element_type_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  entity_id: Int

  """An array of related Addons."""
  excluded_packages: [ExcludedPackagesDetail]
  fine_print: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether a gift message is available."""
  gift_message_available: String

  """An array of related child products."""
  grouped_child_products: [GroupDetail]
  has_partner_skus: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  hide_display: Boolean

  """The ID number assigned to the product."""
  id: Int @deprecated(reason: "Use the \`uid\` field instead.")
  identifier: String

  """The relative path to the main image on the product page."""
  image: ProductImage

  """The relative path to the main image on the product page."""
  images: [ProductImage]
  instructional: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  is_grandfathered: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether the product can be returned."""
  is_returnable: String
  item_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  lite_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A number representing the product's manufacturer."""
  manufacturer: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of media gallery objects."""
  media_gallery: [MediaGalleryInterface]

  """An array of MediaGalleryEntry objects."""
  media_gallery_entries: [MediaGalleryEntry] @deprecated(reason: "Use \`media_gallery\` instead.")

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: String

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: String

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: String
  migrated_to: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  minutes: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  move_id: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product name. Customers use this name to identify the product."""
  name: String

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  new_from_date: String

  """The end date for new product listings."""
  new_to_date: String

  """The value assigned to the Only X Left Threshold option in the Admin."""
  only_x_left_in_stock: Float

  """An array of options for a customizable product."""
  options: [CustomizableOptionInterface]

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: String
  ota_qual_indoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_none: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_outdoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  package_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  partner_platforms: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  pkg_service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  plan_offer_price: String
  plan_package_price: String
  plan_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates the price of an item."""
  price: ProductPrices @deprecated(reason: "Use \`price_range\` for product price information.")

  """The range of prices for the product"""
  price_range: PriceRange!

  """An array of \`TierPrice\` objects."""
  price_tiers: [TierPrice]
  priority: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of \`ProductLinks\` objects."""
  product_links: [ProductLinksInterface]
  promo: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The average of all the ratings given to the product."""
  rating_summary: Float!

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!
  reg_price: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  regional_price_package: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related products."""
  related_products: [ProductInterface]

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """The total count of all the reviews given to the product."""
  review_count: Int!

  """The list of products reviews."""
  reviews(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): ProductReviews!
  selection_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A short description of the product. Its use depends on the theme."""
  short_description: ComplexTextValue

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: String
  sling_channel_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_product_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the small image, which is used on catalog pages."""
  small_image: ProductImage

  """The beginning date that a product has a special price."""
  special_from_date: String @deprecated(reason: "The field should not be used on the storefront.")

  """The discounted price of the product."""
  special_price: Float

  """The end date for a product with a special price."""
  special_to_date: String

  """Indicates whether the product is staged for a future campaign."""
  staged: Boolean!
  status: String

  """The stock status of the product."""
  stock_status: ProductStockStatus
  supported_apps: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the product's thumbnail image."""
  thumbnail: ProductImage

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: Float @deprecated(reason: "Use \`price_tiers\` for product tier price information.")

  """An array of ProductTierPrices objects."""
  tier_prices: [ProductTierPrices] @deprecated(reason: "Use \`price_tiers\` for product tier price information.")
  trial_offer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_sms_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Category Type"""
  type: String

  """
  One of simple, virtual, bundle, downloadable, grouped, or configurable.
  """
  type_id: String @deprecated(reason: "Use \`__typename\` instead.")

  """The unique ID for a \`ProductInterface\` object."""
  uid: ID!

  """Timestamp indicating when the product was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of up-sell products."""
  upsell_products: [ProductInterface]

  """The part of the URL that identifies the product"""
  url_key: String
  url_path: String @deprecated(reason: "Use product's \`canonical_url\` or url rewrites instead")

  """URL rewrites list"""
  url_rewrites: [UrlRewrite]

  """The part of the product URL that is appended after the url key"""
  url_suffix: String
  user_controlled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of websites in which the product is available."""
  websites: [Website] @deprecated(reason: "The field should not be used on the storefront.")
}

"""
Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities.
"""
type SimpleProduct implements ProductInterface & RoutableInterface & PhysicalProductInterface & CustomizableProductInterface {
  """An array of related Addons."""
  addons: [AddonsDetail]

  """The attribute set assigned to the product."""
  attribute_set_id: Int @deprecated(reason: "The field should not be used on the storefront.")
  auto_entitled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  auto_selected: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  available_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  base_price: String
  base_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related child products."""
  bundle_child_products: [BundleDetail]

  """An array of bundle deal parts."""
  bundle_deal_parts: [BundleDealParts]
  business_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  call_sign: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  canonical_identifier: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled.
  """
  canonical_url: String

  """An array of categories."""
  categories: [CategoriesPackagesDetail]

  """An array of related products."""
  channels: [ChannelDetail]
  charge_currency: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_name: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_periodicity: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of products to be displayed in a Related Products block."""
  child_products: [ProductInterface]
  color: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product's country of origin."""
  country_of_manufacture: String

  """Timestamp indicating when the product was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of cross-sell products."""
  crosssell_products: [ProductInterface]
  csr_required: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  default_classification: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: ComplexTextValue
  description_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_3: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_disclaimer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_classification: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_time_utc: String
  effective_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_start_time_utc: String
  element_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  element_type_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  entity_id: Int

  """An array of related Addons."""
  excluded_packages: [ExcludedPackagesDetail]
  fine_print: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether a gift message is available."""
  gift_message_available: String

  """An array of related child products."""
  grouped_child_products: [GroupDetail]
  has_partner_skus: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  hide_display: Boolean

  """The ID number assigned to the product."""
  id: Int @deprecated(reason: "Use the \`uid\` field instead.")
  identifier: String

  """The relative path to the main image on the product page."""
  image: ProductImage

  """The relative path to the main image on the product page."""
  images: [ProductImage]
  instructional: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  is_grandfathered: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether the product can be returned."""
  is_returnable: String
  item_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  lite_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A number representing the product's manufacturer."""
  manufacturer: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of media gallery objects."""
  media_gallery: [MediaGalleryInterface]

  """An array of MediaGalleryEntry objects."""
  media_gallery_entries: [MediaGalleryEntry] @deprecated(reason: "Use \`media_gallery\` instead.")

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: String

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: String

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: String
  migrated_to: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  minutes: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  move_id: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product name. Customers use this name to identify the product."""
  name: String

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  new_from_date: String

  """The end date for new product listings."""
  new_to_date: String

  """The value assigned to the Only X Left Threshold option in the Admin."""
  only_x_left_in_stock: Float

  """An array of options for a customizable product."""
  options: [CustomizableOptionInterface]

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: String
  ota_qual_indoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_none: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_outdoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  package_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  partner_platforms: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  pkg_service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  plan_offer_price: String
  plan_package_price: String
  plan_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates the price of an item."""
  price: ProductPrices @deprecated(reason: "Use \`price_range\` for product price information.")

  """The range of prices for the product"""
  price_range: PriceRange!

  """An array of \`TierPrice\` objects."""
  price_tiers: [TierPrice]
  priority: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of \`ProductLinks\` objects."""
  product_links: [ProductLinksInterface]
  promo: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The average of all the ratings given to the product."""
  rating_summary: Float!

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!
  reg_price: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  regional_price_package: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related products."""
  related_products: [ProductInterface]

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """The total count of all the reviews given to the product."""
  review_count: Int!

  """The list of products reviews."""
  reviews(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): ProductReviews!
  selection_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A short description of the product. Its use depends on the theme."""
  short_description: ComplexTextValue

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: String
  sling_channel_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_product_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the small image, which is used on catalog pages."""
  small_image: ProductImage

  """The beginning date that a product has a special price."""
  special_from_date: String @deprecated(reason: "The field should not be used on the storefront.")

  """The discounted price of the product."""
  special_price: Float

  """The end date for a product with a special price."""
  special_to_date: String

  """Indicates whether the product is staged for a future campaign."""
  staged: Boolean!
  status: String

  """The stock status of the product."""
  stock_status: ProductStockStatus
  supported_apps: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the product's thumbnail image."""
  thumbnail: ProductImage

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: Float @deprecated(reason: "Use \`price_tiers\` for product tier price information.")

  """An array of ProductTierPrices objects."""
  tier_prices: [ProductTierPrices] @deprecated(reason: "Use \`price_tiers\` for product tier price information.")
  trial_offer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_sms_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Category Type"""
  type: String

  """
  One of simple, virtual, bundle, downloadable, grouped, or configurable.
  """
  type_id: String @deprecated(reason: "Use \`__typename\` instead.")

  """The unique ID for a \`ProductInterface\` object."""
  uid: ID!

  """Timestamp indicating when the product was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of up-sell products."""
  upsell_products: [ProductInterface]

  """The part of the URL that identifies the product"""
  url_key: String
  url_path: String @deprecated(reason: "Use product's \`canonical_url\` or url rewrites instead")

  """URL rewrites list"""
  url_rewrites: [UrlRewrite]

  """The part of the product URL that is appended after the url key"""
  url_suffix: String
  user_controlled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of websites in which the product is available."""
  websites: [Website] @deprecated(reason: "The field should not be used on the storefront.")

  """The weight of the item, in units defined by the store."""
  weight: Float
}

"""Contains the results of a \`products\` query."""
type Products {
  """
  A bucket that contains the attribute code and label for each filterable option.
  """
  aggregations(filter: AggregationsFilterInput): [Aggregation]

  """Layered navigation filters array."""
  filters: [LayerFilter] @deprecated(reason: "Use \`aggregations\` instead.")

  """An array of products that match the specified search criteria."""
  item: ItemDetail

  """An array of products that match the specified search criteria."""
  items: [ProductInterface]

  """
  An object that includes the page_info and currentPage values specified in the query.
  """
  page_info: SearchResultPageInfo

  """
  An object that includes the default sort field and all available sort fields.
  """
  sort_fields: SortFields

  """
  An array of search suggestions for case when search query have no results.
  """
  suggestions: [SearchSuggestion]

  """
  The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
  """
  total_count: Int
}

"""
An input object that specifies the filters used in product aggregations.
"""
input AggregationsFilterInput {
  """Filter category aggregations in layered navigation."""
  category: AggregationsCategoryFilterInput
}

"""Filter category aggregations in layered navigation."""
input AggregationsCategoryFilterInput {
  """
  Indicates whether to include only direct subcategories or all children categories at all levels.
  """
  includeDirectChildrenOnly: Boolean
}

"""Contains details about the products assigned to a category."""
type CategoryProducts {
  """An array of products that are assigned to the category."""
  items: [ProductInterface]

  """Pagination metadata."""
  page_info: SearchResultPageInfo

  """
  The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
  """
  total_count: Int
}

"""
Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input ProductAttributeFilterInput {
  """"""
  app: FilterEqualTypeInput

  """Deprecated: use \`category_uid\` to filter product by category ID."""
  category_id: FilterEqualTypeInput

  """Filter product by the unique ID for a \`CategoryInterface\` object."""
  category_uid: FilterEqualTypeInput

  """Attribute label: Description"""
  description: FilterMatchTypeInput

  """"""
  format: FilterEqualTypeInput

  """Attribute label: Has Partner Skus"""
  has_partner_skus: FilterEqualTypeInput

  """"""
  identifier: FilterEqualTypeInput

  """"""
  is_channel_required: FilterEqualTypeInput

  """"""
  is_grandfathered: FilterEqualTypeInput

  """"""
  lob: FilterEqualTypeInput

  """Attribute label: Name"""
  name: FilterMatchTypeInput

  """Attribute label: Package Type"""
  package_type: FilterEqualTypeInput

  """"""
  pck_type: FilterTypeInput

  """Attribute label: Price"""
  price: FilterRangeTypeInput

  """Attribute label: Short Description"""
  short_description: FilterMatchTypeInput

  """Attribute label: SKU"""
  sku: FilterEqualTypeInput

  """Attribute label: Sling Product Type"""
  sling_product_type: FilterEqualTypeInput

  """Attribute label: Supported Apps"""
  supported_apps: FilterEqualTypeInput

  """"""
  tag: FilterEqualTypeInput

  """"""
  theme: FilterEqualTypeInput

  """Attribute label: URL Key"""
  url_key: FilterMatchTypeInput
}

"""
Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input CategoryFilterInput {
  """Filter by the unique category ID for a \`CategoryInterface\` object."""
  category_uid: FilterEqualTypeInput

  """
  Deprecated: use 'category_uid' to filter uniquely identifiers of categories.
  """
  ids: FilterEqualTypeInput

  """Filter by the display name of the category."""
  name: FilterMatchTypeInput

  """
  Filter by the unique parent category ID for a \`CategoryInterface\` object.
  """
  parent_category_uid: FilterEqualTypeInput

  """
  Filter by the unique parent category ID for a \`CategoryInterface\` object.
  """
  parent_id: FilterEqualTypeInput

  """Filter by the part of the URL that identifies the category."""
  url_key: FilterEqualTypeInput

  """Filter by the URL path for the category."""
  url_path: FilterEqualTypeInput
}

"""
ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input ProductFilterInput {
  """The category ID the product belongs to."""
  category_id: FilterTypeInput

  """The product's country of origin."""
  country_of_manufacture: FilterTypeInput

  """The timestamp indicating when the product was created."""
  created_at: FilterTypeInput

  """The name of a custom layout."""
  custom_layout: FilterTypeInput

  """XML code that is applied as a layout update to the product page."""
  custom_layout_update: FilterTypeInput

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: FilterTypeInput

  """Indicates whether a gift message is available."""
  gift_message_available: FilterTypeInput

  """
  Indicates whether additional attributes have been created for the product.
  """
  has_options: FilterTypeInput

  """The relative path to the main image on the product page."""
  image: FilterTypeInput

  """The label assigned to a product image."""
  image_label: FilterTypeInput

  """Indicates whether the product can be returned."""
  is_returnable: FilterTypeInput

  """A number representing the product's manufacturer."""
  manufacturer: FilterTypeInput

  """
  The numeric maximal price of the product. Do not include the currency code.
  """
  max_price: FilterTypeInput

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: FilterTypeInput

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: FilterTypeInput

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: FilterTypeInput

  """
  The numeric minimal price of the product. Do not include the currency code.
  """
  min_price: FilterTypeInput

  """The product name. Customers use this name to identify the product."""
  name: FilterTypeInput

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  news_from_date: FilterTypeInput

  """The end date for new product listings."""
  news_to_date: FilterTypeInput

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: FilterTypeInput

  """The keyword required to perform a logical OR comparison."""
  or: ProductFilterInput

  """The price of an item."""
  price: FilterTypeInput

  """Indicates whether the product has required options."""
  required_options: FilterTypeInput

  """A short description of the product. Its use depends on the theme."""
  short_description: FilterTypeInput

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: FilterTypeInput

  """The relative path to the small image, which is used on catalog pages."""
  small_image: FilterTypeInput

  """The label assigned to a product's small image."""
  small_image_label: FilterTypeInput

  """The beginning date that a product has a special price."""
  special_from_date: FilterTypeInput

  """The discounted price of the product. Do not include the currency code."""
  special_price: FilterTypeInput

  """The end date that a product has a special price."""
  special_to_date: FilterTypeInput

  """The relative path to the product's thumbnail image."""
  thumbnail: FilterTypeInput

  """The label assigned to a product's thumbnail image."""
  thumbnail_label: FilterTypeInput

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: FilterTypeInput

  """The timestamp indicating when the product was updated."""
  updated_at: FilterTypeInput

  """The part of the URL that identifies the product"""
  url_key: FilterTypeInput

  """"""
  url_path: FilterTypeInput

  """The weight of the item, in units defined by the store."""
  weight: FilterTypeInput
}

"""
Contains an image in base64 format and basic information about the image.
"""
type ProductMediaGalleryEntriesContent {
  """The image in base64 format."""
  base64_encoded_data: String

  """The file name of the image."""
  name: String

  """The MIME type of the file, such as image/png."""
  type: String
}

"""Contains a link to a video file and basic information about the video."""
type ProductMediaGalleryEntriesVideoContent {
  """Must be external-video."""
  media_type: String

  """A description of the video."""
  video_description: String

  """Optional data about the video."""
  video_metadata: String

  """Describes the video source."""
  video_provider: String

  """The title of the video."""
  video_title: String

  """The URL to the video."""
  video_url: String
}

"""
Deprecated. Use \`ProductAttributeSortInput\` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order.
"""
input ProductSortInput {
  """The product's country of origin."""
  country_of_manufacture: SortEnum

  """The timestamp indicating when the product was created."""
  created_at: SortEnum

  """The name of a custom layout."""
  custom_layout: SortEnum

  """XML code that is applied as a layout update to the product page."""
  custom_layout_update: SortEnum

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: SortEnum

  """Indicates whether a gift message is available."""
  gift_message_available: SortEnum

  """
  Indicates whether additional attributes have been created for the product.
  """
  has_options: SortEnum

  """The relative path to the main image on the product page."""
  image: SortEnum

  """The label assigned to a product image."""
  image_label: SortEnum

  """Indicates whether the product can be returned."""
  is_returnable: SortEnum

  """A number representing the product's manufacturer."""
  manufacturer: SortEnum

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: SortEnum

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: SortEnum

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: SortEnum

  """The product name. Customers use this name to identify the product."""
  name: SortEnum

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  news_from_date: SortEnum

  """The end date for new product listings."""
  news_to_date: SortEnum

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: SortEnum

  """The price of the item."""
  price: SortEnum

  """Indicates whether the product has required options."""
  required_options: SortEnum

  """A short description of the product. Its use depends on the theme."""
  short_description: SortEnum

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: SortEnum

  """The relative path to the small image, which is used on catalog pages."""
  small_image: SortEnum

  """The label assigned to a product's small image."""
  small_image_label: SortEnum

  """The beginning date that a product has a special price."""
  special_from_date: SortEnum

  """The discounted price of the product."""
  special_price: SortEnum

  """The end date that a product has a special price."""
  special_to_date: SortEnum

  """The relative path to the product's thumbnail image."""
  thumbnail: SortEnum

  """The label assigned to a product's thumbnail image."""
  thumbnail_label: SortEnum

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: SortEnum

  """The timestamp indicating when the product was updated."""
  updated_at: SortEnum

  """The part of the URL that identifies the product"""
  url_key: SortEnum

  """"""
  url_path: SortEnum

  """The weight of the item, in units defined by the store."""
  weight: SortEnum
}

"""
Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option
"""
input ProductAttributeSortInput {
  """Attribute label: Identifier"""
  identifier: SortEnum

  """Sort by the position assigned to each product."""
  position: SortEnum

  """Attribute label: Price"""
  price: SortEnum

  """Sort by the search relevance score (default)."""
  relevance: SortEnum

  """Attribute label: SKU"""
  sku: SortEnum

  """Attribute label: URL Key"""
  url_key: SortEnum
}

"""
Defines characteristics about images and videos associated with a specific product.
"""
type MediaGalleryEntry {
  """Details about the content of the media gallery item."""
  content: ProductMediaGalleryEntriesContent

  """Indicates whether the image is hidden from view."""
  disabled: Boolean

  """The path of the image on the server."""
  file: String

  """The identifier assigned to the object."""
  id: Int @deprecated(reason: "Use \`uid\` instead.")

  """
  The alt text displayed on the storefront when the user points to the image.
  """
  label: String

  """Either \`image\` or \`video\`."""
  media_type: String

  """The media item's position after it has been sorted."""
  position: Int

  """
  Array of image types. It can have the following values: image, small_image, thumbnail.
  """
  types: [String]

  """The unique ID for a \`MediaGalleryEntry\` object."""
  uid: ID!

  """Details about the content of a video item."""
  video_content: ProductMediaGalleryEntriesVideoContent
}

"""Contains information for rendering layered navigation."""
type LayerFilter {
  """An array of filter items."""
  filter_items: [LayerFilterItemInterface] @deprecated(reason: "Use \`Aggregation.options\` instead.")

  """The count of filter items in filter group."""
  filter_items_count: Int @deprecated(reason: "Use \`Aggregation.count\` instead.")

  """The name of a layered navigation filter."""
  name: String @deprecated(reason: "Use \`Aggregation.label\` instead.")

  """The request variable name for a filter query."""
  request_var: String @deprecated(reason: "Use \`Aggregation.attribute_code\` instead.")
}

""""""
interface LayerFilterItemInterface {
  """The count of items per filter."""
  items_count: Int @deprecated(reason: "Use \`AggregationOption.count\` instead.")

  """The label for a filter."""
  label: String @deprecated(reason: "Use \`AggregationOption.label\` instead.")

  """The value of a filter request variable to be used in query."""
  value_string: String @deprecated(reason: "Use \`AggregationOption.value\` instead.")
}

""""""
type LayerFilterItem implements LayerFilterItemInterface {
  """The count of items per filter."""
  items_count: Int @deprecated(reason: "Use \`AggregationOption.count\` instead.")

  """The label for a filter."""
  label: String @deprecated(reason: "Use \`AggregationOption.label\` instead.")

  """The value of a filter request variable to be used in query."""
  value_string: String @deprecated(reason: "Use \`AggregationOption.value\` instead.")
}

"""
Contains information for each filterable option (such as price, category \`UID\`, and custom attributes).
"""
type Aggregation {
  """Attribute code of the aggregation group."""
  attribute_code: String!

  """The number of options in the aggregation group."""
  count: Int

  """The aggregation display name."""
  label: String

  """Array of options for the aggregation."""
  options: [AggregationOption]

  """The relative position of the attribute in a layered navigation block."""
  position: Int
}

"""A string that contains search suggestion"""
type SearchSuggestion {
  """The search suggestion of existing product."""
  search: String!
}

"""Defines aggregation option fields."""
interface AggregationOptionInterface {
  """The number of items that match the aggregation option."""
  count: Int

  """The display label for an aggregation option."""
  label: String

  """The internal ID that represents the value of the option."""
  value: String!
}

"""An implementation of \`AggregationOptionInterface\`."""
type AggregationOption implements AggregationOptionInterface {
  """The number of items that match the aggregation option."""
  count: Int

  """The display label for an aggregation option."""
  label: String

  """The internal ID that represents the value of the option."""
  value: String!
}

"""Defines a possible sort field."""
type SortField {
  """The label of the sort field."""
  label: String

  """The attribute code of the sort field."""
  value: String
}

"""
Contains a default value for sort fields and all available sort fields.
"""
type SortFields {
  """The default sort field value."""
  default: String

  """An array of possible sort fields."""
  options: [SortField]
}

"""Contains a simple product wish list item."""
type SimpleWishlistItem implements WishlistItemInterface {
  """The date and time the item was added to the wish list."""
  added_at: String!

  """Custom options selected for the wish list item."""
  customizable_options: [SelectedCustomizableOption]!

  """The description of the item."""
  description: String

  """The unique ID for a \`WishlistItemInterface\` object."""
  id: ID!

  """Product details of the wish list item."""
  product: ProductInterface

  """The quantity of this wish list item."""
  quantity: Float!
}

"""Contains a virtual product wish list item."""
type VirtualWishlistItem implements WishlistItemInterface {
  """The date and time the item was added to the wish list."""
  added_at: String!

  """Custom options selected for the wish list item."""
  customizable_options: [SelectedCustomizableOption]!

  """The description of the item."""
  description: String

  """The unique ID for a \`WishlistItemInterface\` object."""
  id: ID!

  """Product details of the wish list item."""
  product: ProductInterface

  """The quantity of this wish list item."""
  quantity: Float!
}

"""Contains the \`uid\`, \`relative_url\`, and \`type\` attributes."""
type EntityUrl {
  canonical_url: String @deprecated(reason: "Use \`relative_url\` instead.")

  """
  The unique ID for a \`ProductInterface\`, \`CategoryInterface\`, \`CmsPage\`, or similar object associated with the specified URL. This could be a product, category, or CMS page UID.
  """
  entity_uid: ID

  """
  The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
  """
  id: Int @deprecated(reason: "Use \`entity_uid\` instead.")

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirectCode: Int

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """One of PRODUCT, CATEGORY, or CMS_PAGE."""
  type: UrlRewriteEntityTypeEnum
}

"""This enumeration defines the entity type."""
enum UrlRewriteEntityTypeEnum {
  """"""
  CMS_PAGE @deprecated(reason: "")

  """"""
  PRODUCT @deprecated(reason: "")

  """"""
  CATEGORY @deprecated(reason: "")
}

"""Contains URL rewrite details."""
type UrlRewrite {
  """An array of request parameters."""
  parameters: [HttpQueryParameter]

  """The request URL."""
  url: String
}

"""Contains target path parameters."""
type HttpQueryParameter {
  """A parameter name."""
  name: String

  """A parameter value."""
  value: String
}

"""Routable entities serve as the model for a rendered page."""
interface RoutableInterface {
  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """Category Type"""
  type: String
}

"""Defines details about an individual checkout agreement."""
type CheckoutAgreement {
  """The ID for a checkout agreement."""
  agreement_id: Int!

  """The checkbox text for the checkout agreement."""
  checkbox_text: String!

  """Required. The text of the agreement."""
  content: String!

  """
  The height of the text box where the Terms and Conditions statement appears during checkout.
  """
  content_height: String

  """Indicates whether the \`content\` text is in HTML format."""
  is_html: Boolean!

  """Indicates whether agreements are accepted automatically or manually."""
  mode: CheckoutAgreementMode!

  """The name given to the condition."""
  name: String!
}

"""Indicates how agreements are accepted."""
enum CheckoutAgreementMode {
  """Conditions are automatically accepted upon checkout."""
  AUTO @deprecated(reason: "")

  """Shoppers must manually accept the conditions to place an order."""
  MANUAL @deprecated(reason: "")
}

"""
Defines an object used to iterate through items for product comparisons.
"""
type ComparableItem {
  """An array of product attributes that can be used to compare products."""
  attributes: [ProductAttribute]!

  """Details about a product in a compare list."""
  product: ProductInterface!

  """The unique ID of an item in a compare list."""
  uid: ID!
}

"""Contains a product attribute code and value."""
type ProductAttribute {
  """The unique identifier for a product attribute code."""
  code: String!

  """The display value of the attribute."""
  value: String!
}

"""Contains an attribute code that is used for product comparisons."""
type ComparableAttribute {
  """An attribute code that is enabled for product comparisons."""
  code: String!

  """The label of the attribute code."""
  label: String!
}

"""
Contains iterable information such as the array of items, the count, and attributes that represent the compare list.
"""
type CompareList {
  """An array of attributes that can be used for comparing products."""
  attributes: [ComparableAttribute]

  """The number of items in the compare list."""
  item_count: Int!

  """An array of products to compare."""
  items: [ComparableItem]

  """The unique ID assigned to the compare list."""
  uid: ID!
}

"""Defines the customer name, addresses, and other details."""
type Customer {
  """An array containing the customer's shipping and billing addresses."""
  addresses: [CustomerAddress]

  """Indicates whether the customer has enabled remote shopping assistance."""
  allow_remote_shopping_assistance: Boolean!

  """The contents of the customer's compare list."""
  compare_list: CompareList

  """Timestamp indicating when the account was created."""
  created_at: String

  """The customer's date of birth."""
  date_of_birth: String

  """The ID assigned to the billing address."""
  default_billing: String

  """The ID assigned to the shipping address."""
  default_shipping: String

  """The customer's date of birth."""
  dob: String @deprecated(reason: "Use \`date_of_birth\` instead.")

  """The customer's email address. Required."""
  email: String

  """The customer's first name."""
  firstname: String

  """The customer's gender (Male - 1, Female - 2)."""
  gender: Int

  """Details about all of the customer's gift registries."""
  gift_registries: [GiftRegistry]

  """Details about a specific gift registry."""
  gift_registry(giftRegistryUid: ID!): GiftRegistry
  group_id: Int @deprecated(reason: "Customer group should not be exposed in the storefront scenarios.")

  """The ID assigned to the customer."""
  id: Int @deprecated(reason: "\`id\` is not needed as part of \`Customer\`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.")

  """
  Indicates whether the customer is subscribed to the company's newsletter.
  """
  is_subscribed: Boolean

  """The customer's family name."""
  lastname: String

  """The customer's middle name."""
  middlename: String
  orders(
    """Defines the filter to use for searching customer orders."""
    filter: CustomerOrdersFilterInput

    """Specifies which page of results to return. The default value is 1."""
    currentPage: Int = 1

    """
    Specifies the maximum number of results to return at once. The default value is 20.
    """
    pageSize: Int = 20

    """
    Specifies which field to sort on, and whether to return the results in ascending or descending order.
    """
    sort: CustomerOrderSortInput

    """
    Specifies the scope to search for customer orders. The Store request header identifies the customer's store view code. The default value of STORE limits the search to the value specified in the header. Specify WEBSITE to expand the search to include all customer orders assigned to the website that is defined in the header, or specify GLOBAL to include all customer orders across all websites and stores.
    """
    scope: ScopeTypeEnum
  ): CustomerOrders

  """An honorific, such as Dr., Mr., or Mrs."""
  prefix: String

  """
  Details about the specified return request from the unique ID for a \`Return\` object.
  """
  return(uid: ID!): Return

  """Information about the customer's return requests."""
  returns(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): Returns

  """Contains the customer's product reviews."""
  reviews(
    """
    The maximum number of results to return at once. The default value is 20.
    """
    pageSize: Int = 20

    """The page of results to return. The default value is 1."""
    currentPage: Int = 1
  ): ProductReviews!

  """Store credit information applied for the logged in customer."""
  store_credit: CustomerStoreCredit

  """A value such as Sr., Jr., or III."""
  suffix: String

  """The customer's Value-added tax (VAT) number (for corporate customers)."""
  taxvat: String

  """Return a customer's wish lists."""
  wishlist: Wishlist! @deprecated(reason: "Use \`Customer.wishlists\` or \`Customer.wishlist_v2\` instead.")

  """
  Retrieve the wish list identified by the unique ID for a \`Wishlist\` object.
  """
  wishlist_v2(id: ID!): Wishlist

  """
  An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce.
  """
  wishlists(
    """
    Specifies the maximum number of results to return at once. This attribute is optional.
    """
    pageSize: Int = 20

    """Specifies which page of results to return. The default value is 1."""
    currentPage: Int = 1
  ): [Wishlist]!
}

"""Contains an array of product IDs to use for creating a compare list."""
input CreateCompareListInput {
  """An array of product IDs to add to the compare list."""
  products: [ID]
}

"""Contains products to add to an existing compare list."""
input AddProductsToCompareListInput {
  """An array of product IDs to add to the compare list."""
  products: [ID]!

  """The unique identifier of the compare list to modify."""
  uid: ID!
}

"""Defines which products to remove from a compare list."""
input RemoveProductsFromCompareListInput {
  """An array of product IDs to remove from the compare list."""
  products: [ID]!

  """The unique identifier of the compare list to modify."""
  uid: ID!
}

"""Contains the results of the request to delete a compare list."""
type DeleteCompareListOutput {
  """Indicates whether the compare list was successfully deleted."""
  result: Boolean!
}

"""Contains the results of the request to assign a compare list."""
type AssignCompareListToCustomerOutput {
  """The contents of the customer's compare list."""
  compare_list: CompareList

  """
  Indicates whether the compare list was successfully assigned to the customer.
  """
  result: Boolean!
}

"""Assigns a specific \`cart_id\` to the empty cart."""
input createEmptyCartInput {
  """The ID to assign to the cart."""
  cart_id: String
}

"""Defines the simple and group products to add to the cart."""
input AddSimpleProductsToCartInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """An array of simple and group items to add."""
  cart_items: [SimpleProductCartItemInput]!
}

"""Defines a single product to add to the cart."""
input SimpleProductCartItemInput {
  """An array that defines customizable options for the product."""
  customizable_options: [CustomizableOptionInput]

  """
  An object containing the \`sku\`, \`quantity\`, and other relevant information about the product.
  """
  data: CartItemInput!
}

"""Defines the virtual products to add to the cart."""
input AddVirtualProductsToCartInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """An array of virtual products to add."""
  cart_items: [VirtualProductCartItemInput]!
}

"""Defines a single product to add to the cart."""
input VirtualProductCartItemInput {
  """An array that defines customizable options for the product."""
  customizable_options: [CustomizableOptionInput]

  """
  An object containing the \`sku\`, \`quantity\`, and other relevant information about the product.
  """
  data: CartItemInput!
}

"""Defines an item to be added to the cart."""
input CartItemInput {
  """
  An array of entered options for the base product, such as personalization text.
  """
  entered_options: [EnteredOptionInput]

  """"""
  package_type: String

  """For a child product, the SKU of its parent product."""
  parent_sku: String

  """The amount or number of an item to add."""
  quantity: Float!

  """
  The selected options for the base product, such as color or size, using the unique ID for an object such as \`CustomizableRadioOption\`, \`CustomizableDropDownOption\`, or \`ConfigurableProductOptionsValues\`.
  """
  selected_options: [ID]

  """The SKU of the product."""
  sku: String!
}

"""Defines a customizable option."""
input CustomizableOptionInput {
  """The customizable option ID of the product."""
  id: Int

  """The string value of the option."""
  value_string: String!
}

"""Specifies the coupon code to apply to the cart."""
input ApplyCouponToCartInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """A valid coupon code."""
  coupon_code: String!
}

"""Modifies the specified items in the cart."""
input UpdateCartItemsInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """An array of items to be updated."""
  cart_items: [CartItemUpdateInput]!
}

"""A single item to be updated."""
input CartItemUpdateInput {
  """Deprecated. Use \`cart_item_uid\` instead."""
  cart_item_id: Int

  """The unique ID for a \`CartItemInterface\` object."""
  cart_item_uid: ID

  """An array that defines customizable options for the product."""
  customizable_options: [CustomizableOptionInput]

  """Gift message details for the cart item"""
  gift_message: GiftMessageInput

  """The new quantity of the item."""
  quantity: Float
}

"""Specifies which items to remove from the cart."""
input RemoveItemFromCartInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """Deprecated. Use \`cart_item_uid\` instead."""
  cart_item_id: Int

  """Required field. The unique ID for a \`CartItemInterface\` object."""
  cart_item_uid: ID
}

"""Specifies an array of addresses to use for shipping."""
input SetShippingAddressesOnCartInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """An array of shipping addresses."""
  shipping_addresses: [ShippingAddressInput]!
}

"""Defines a single shipping address."""
input ShippingAddressInput {
  """Defines a shipping address."""
  address: CartShippingAddressInput

  """
  An ID from the customer's address book that uniquely identifies the address to be used for shipping.
  """
  customer_address_id: Int

  """Text provided by the shopper."""
  customer_notes: String
}

"""Sets the billing address."""
input SetBillingAddressOnCartInput {
  """The billing address."""
  billing_address: BillingAddressInput!

  """The unique ID of a \`Cart\` object."""
  cart_id: String!
}

"""Defines the billing address."""
input BillingAddressInput {
  """Defines a billing address."""
  address: CartAddressInput

  """
  An ID from the customer's address book that uniquely identifies the address to be used for billing.
  """
  customer_address_id: Int

  """
  Indicates whether to set the billing address to be the same as the existing shipping address on the cart.
  """
  same_as_shipping: Boolean

  """
  Indicates whether to set the shipping address to be the same as this billing address.
  """
  use_for_shipping: Boolean
}

"""Defines the billing or shipping address to be applied to the cart."""
input CartAddressInput {
  """The city specified for the billing or shipping address."""
  city: String!

  """The company specified for the billing or shipping address."""
  company: String

  """The country code and label for the billing or shipping address."""
  country_code: String

  """"""
  county: String

  """The first name of the customer or guest."""
  firstname: String

  """The last name of the customer or guest."""
  lastname: String

  """The ZIP or postal code of the billing or shipping address."""
  postcode: String!

  """
  A string that defines the state or province of the billing or shipping address.
  """
  region: String

  """
  An integer that defines the state or province of the billing or shipping address.
  """
  region_id: Int

  """
  Determines whether to save the address in the customer's address book. The default value is true.
  """
  save_in_address_book: Boolean

  """An array containing the street for the billing or shipping address."""
  street: [String]

  """The telephone number for the billing or shipping address."""
  telephone: String

  """The VAT company number for billing or shipping address."""
  vat_id: String
}

"""Applies one or shipping methods to the cart."""
input SetShippingMethodsOnCartInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """An array of shipping methods."""
  shipping_methods: [ShippingMethodInput]!
}

"""Defines the shipping carrier and method."""
input ShippingMethodInput {
  """
  A string that identifies a commercial carrier or an offline delivery method.
  """
  carrier_code: String!

  """
  A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page.
  """
  method_code: String!
}

"""Applies a payment method to the quote."""
input SetPaymentMethodAndPlaceOrderInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """The payment method data to apply to the cart."""
  payment_method: PaymentMethodInput!
}

"""Specifies the quote to be converted to an order."""
input PlaceOrderInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!
}

"""Applies a payment method to the cart."""
input SetPaymentMethodOnCartInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """The payment method data to apply to the cart."""
  payment_method: PaymentMethodInput!
}

"""Defines the payment method."""
input PaymentMethodInput {
  """"""
  braintree: BraintreeInput

  """"""
  braintree_cc_vault: BraintreeCcVaultInput

  """Payment method code"""
  code: String!

  """Required input for PayPal Hosted pro payments."""
  hosted_pro: HostedProInput

  """Partner Billing Agreement Id"""
  partner_billing_agreement_id: String

  """Required input for Payflow Express Checkout payments."""
  payflow_express: PayflowExpressInput

  """Required input for PayPal Payflow Link and Payments Advanced payments."""
  payflow_link: PayflowLinkInput

  """Required input for PayPal Payflow Pro and Payment Pro payments."""
  payflowpro: PayflowProInput

  """Required input for PayPal Payflow Pro vault payments."""
  payflowpro_cc_vault: VaultTokenInput

  """Payment Type"""
  payment_type: String

  """Required input for Express Checkout and Payments Standard payments."""
  paypal_express: PaypalExpressInput

  """Purchase order number"""
  purchase_order_number: String

  """Recurly Payment Token"""
  token_id: String
}

"""Defines the guest email and cart."""
input SetGuestEmailOnCartInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """The email address of the guest."""
  email: String!
}

"""
Contains details about the final price of items in the cart, including discount and tax information.
"""
type CartPrices {
  """
  An array containing the names and amounts of taxes applied to each item in the cart.
  """
  applied_taxes: [CartTaxItem]
  discount: CartDiscount @deprecated(reason: "Use discounts instead.")

  """
  An array containing cart rule discounts, store credit and gift cards applied to the cart.
  """
  discounts: [Discount]

  """The total, including discounts, taxes, shipping, and other fees."""
  grand_total: Money

  """The subtotal without any applied taxes."""
  subtotal_excluding_tax: Money

  """The subtotal including any applied taxes."""
  subtotal_including_tax: Money

  """The subtotal with any discounts applied, but not taxes."""
  subtotal_with_discount_excluding_tax: Money
}

"""Contains tax information about an item in the cart."""
type CartTaxItem {
  """The amount of tax applied to the item."""
  amount: Money!

  """The description of the tax."""
  label: String!
}

"""Contains information about discounts applied to the cart."""
type CartDiscount {
  """The amount of the discount applied to the item."""
  amount: Money!

  """The description of the discount."""
  label: [String]!
}

"""Contains details about the cart after setting the payment method."""
type SetPaymentMethodOnCartOutput {
  """The cart after setting the payment method."""
  cart: Cart!
}

"""Contains details about the cart after setting the billing address."""
type SetBillingAddressOnCartOutput {
  """The cart after setting the billing address."""
  cart: Cart!
}

"""Contains details about the cart after setting the shipping addresses."""
type SetShippingAddressesOnCartOutput {
  """The cart after setting the shipping addresses."""
  cart: Cart!
}

"""Contains details about the cart after setting the shipping methods."""
type SetShippingMethodsOnCartOutput {
  """The cart after setting the shipping methods."""
  cart: Cart!
}

"""Contains details about the cart after applying a coupon."""
type ApplyCouponToCartOutput {
  """The cart after applying a coupon."""
  cart: Cart!
}

"""Contains the results of the request to place an order."""
type PlaceOrderOutput {
  billing_info: UpdateSelectionBillingInfoOutput

  """Error message"""
  error: String

  """The ID of the order."""
  order: Order!

  """Result type success/failed"""
  status: String
  status_code: Int
  subscription_api_response: SubscriptionApiResponseOutput
  update_selection: UpdateSelectionOutput
}

"""
Contains the contents and other details about a guest or customer cart.
"""
type Cart {
  affiliate_name: String
  agent_id: String
  app_created: String

  """An array of coupons that have been applied to the cart"""
  applied_coupon: AppliedCoupon @deprecated(reason: "Use applied_coupons instead")

  """
  An array of \`AppliedCoupon\` objects. Each object contains the \`code\` text attribute, which specifies the coupon code
  """
  applied_coupons: [AppliedCoupon]

  """
  Contains the code attribute, which specifies the applied gift card codes
  """
  applied_gift_cards: [AppliedGiftCard]

  """Store credit information applied to the cart."""
  applied_store_credit: AppliedStoreCredit

  """Available payment methods"""
  available_payment_methods: [AvailablePaymentMethod]

  """The billing address assigned to the cart."""
  billing_address: BillingCartAddress
  captcha_session_id: String
  classification: String!

  """An array containing cart rule credit and cart rule name."""
  credit: Credit
  current_period_ends_at: String!
  data_flow: String

  """The email address of the guest or customer."""
  email: String
  employee_id: String
  flow: String
  flow_name: String
  flow_type: String

  """The entered gift message for the cart"""
  gift_message: GiftMessage

  """The unique ID for a \`Cart\` object"""
  id: ID!

  """Indicates whether the cart contains only virtual products."""
  is_virtual: Boolean!

  """An array of products that have been added to the cart."""
  items: [CartItemInterface]
  line_of_business: String!
  next_billing_amount: String!
  next_billing_date: String!
  offer_identifier: String!
  partner_name: String
  partner_offer: String
  pbd_origin: String
  pbd_partner: String
  pbd_partner_account_id: String
  plan_additional_data: [PlanAdditionalData]
  plan_identifier: String!
  plan_offer_additional_data: [PlanOfferAdditionalData]
  plan_offer_identifier: String!

  """Pricing details for the quote."""
  prices: CartPrices
  prorated_days: Float!
  request_type: String

  """To add or remove child from response"""
  returnChild: String

  """Indicates which payment method was applied to the cart."""
  selected_payment_method: SelectedPaymentMethod

  """An array of shipping addresses assigned to the cart."""
  shipping_addresses: [ShippingCartAddress]!
  sub_category: String!

  """The total number of items in the cart."""
  total_quantity: Float!
}

""""""
interface CartAddressInterface {
  """The city specified for the billing or shipping address."""
  city: String!

  """The company specified for the billing or shipping address."""
  company: String

  """An object containing the country label and code."""
  country: CartAddressCountry!

  """The first name of the customer or guest."""
  firstname: String!

  """The last name of the customer or guest."""
  lastname: String!

  """The ZIP or postal code of the billing or shipping address."""
  postcode: String

  """An object containing the region label and code."""
  region: CartAddressRegion

  """An array containing the street for the billing or shipping address."""
  street: [String]!

  """The telephone number for the billing or shipping address."""
  telephone: String!

  """The unique id of the customer address."""
  uid: String!

  """The VAT company number for billing or shipping address."""
  vat_id: String
}

"""Contains shipping addresses and methods."""
type ShippingCartAddress implements CartAddressInterface {
  """
  An array that lists the shipping methods that can be applied to the cart.
  """
  available_shipping_methods: [AvailableShippingMethod]
  cart_items: [CartItemQuantity] @deprecated(reason: "\`cart_items_v2\` should be used instead")

  """An array that lists the items in the cart."""
  cart_items_v2: [CartItemInterface]

  """The city specified for the billing or shipping address."""
  city: String!

  """The company specified for the billing or shipping address."""
  company: String

  """An object containing the country label and code."""
  country: CartAddressCountry!

  """Text provided by the shopper."""
  customer_notes: String

  """The first name of the customer or guest."""
  firstname: String!
  items_weight: Float @deprecated(reason: "This information shoud not be exposed on frontend")

  """The last name of the customer or guest."""
  lastname: String!

  """The ZIP or postal code of the billing or shipping address."""
  postcode: String

  """An object containing the region label and code."""
  region: CartAddressRegion

  """An object that describes the selected shipping method."""
  selected_shipping_method: SelectedShippingMethod

  """An array containing the street for the billing or shipping address."""
  street: [String]!

  """The telephone number for the billing or shipping address."""
  telephone: String!

  """The unique id of the customer address."""
  uid: String!

  """The VAT company number for billing or shipping address."""
  vat_id: String
}

"""Contains details about the billing address."""
type BillingCartAddress implements CartAddressInterface {
  """The city specified for the billing or shipping address."""
  city: String!

  """The company specified for the billing or shipping address."""
  company: String

  """An object containing the country label and code."""
  country: CartAddressCountry!
  customer_notes: String @deprecated(reason: "The field is used only in shipping address.")

  """The first name of the customer or guest."""
  firstname: String!

  """The last name of the customer or guest."""
  lastname: String!

  """The ZIP or postal code of the billing or shipping address."""
  postcode: String

  """An object containing the region label and code."""
  region: CartAddressRegion

  """An array containing the street for the billing or shipping address."""
  street: [String]!

  """The telephone number for the billing or shipping address."""
  telephone: String!

  """The unique id of the customer address."""
  uid: String!

  """The VAT company number for billing or shipping address."""
  vat_id: String
}

"""
Deprecated: The \`ShippingCartAddress.cart_items\` field now returns \`CartItemInterface\`.
"""
type CartItemQuantity {
  cart_item_id: Int! @deprecated(reason: "The \`ShippingCartAddress.cart_items\` field now returns \`CartItemInterface\`.")
  quantity: Float! @deprecated(reason: "The \`ShippingCartAddress.cart_items\` field now returns \`CartItemInterface\`.")
}

"""Contains details about the region in a billing or shipping address."""
type CartAddressRegion {
  """The state or province code."""
  code: String

  """The display label for the region."""
  label: String

  """The unique ID for a pre-defined region."""
  region_id: Int
}

"""Contains details the country in a billing or shipping address."""
type CartAddressCountry {
  """The country code."""
  code: String!

  """The display label for the country."""
  label: String!
}

"""Contains details about the selected shipping method and carrier."""
type SelectedShippingMethod {
  """The cost of shipping using this shipping method."""
  amount: Money!
  base_amount: Money @deprecated(reason: "The field should not be used on the storefront")

  """
  A string that identifies a commercial carrier or an offline shipping method.
  """
  carrier_code: String!

  """The label for the carrier code."""
  carrier_title: String!

  """A shipping method code associated with a carrier."""
  method_code: String!

  """The label for the method code."""
  method_title: String!

  """The cost of shipping using this shipping method, excluding tax."""
  price_excl_tax: Money!

  """The cost of shipping using this shipping method, including tax."""
  price_incl_tax: Money!
}

"""Contains details about the possible shipping methods and carriers."""
type AvailableShippingMethod {
  """The cost of shipping using this shipping method."""
  amount: Money!

  """Indicates whether this shipping method can be applied to the cart."""
  available: Boolean!
  base_amount: Money @deprecated(reason: "The field should not be used on the storefront.")

  """
  A string that identifies a commercial carrier or an offline shipping method.
  """
  carrier_code: String!

  """The label for the carrier code."""
  carrier_title: String!

  """Describes an error condition."""
  error_message: String

  """
  A shipping method code associated with a carrier. The value could be null if no method is available.
  """
  method_code: String

  """
  The label for the shipping method code. The value could be null if no method is available.
  """
  method_title: String

  """The cost of shipping using this shipping method, excluding tax."""
  price_excl_tax: Money!

  """The cost of shipping using this shipping method, including tax."""
  price_incl_tax: Money!
}

"""
Describes a payment method that the shopper can use to pay for the order.
"""
type AvailablePaymentMethod {
  """The payment method code."""
  code: String!

  """If the payment method is an online integration"""
  is_deferred: Boolean!

  """The payment method title."""
  title: String!
}

"""Describes the payment method the shopper selected."""
type SelectedPaymentMethod {
  """The payment method code"""
  code: String!

  """Partner Billing Agreement Id"""
  partner_billing_agreement_id: String

  """Payment Type"""
  payment_type: String

  """The purchase order number."""
  purchase_order_number: String

  """The payment method title."""
  title: String!

  """Recurly Payment Token"""
  token_id: String
}

"""Contains the applied coupon code."""
type AppliedCoupon {
  """The coupon code the shopper applied to the card."""
  code: String!
}

"""Specifies the cart from which to remove a coupon."""
input RemoveCouponFromCartInput {
  """The unique ID of a \`Cart\` object."""
  cart_id: String!
}

"""Contains details about the cart after removing a coupon."""
type RemoveCouponFromCartOutput {
  """The cart after removing a coupon."""
  cart: Cart
}

"""Contains details about the cart after adding simple or group products."""
type AddSimpleProductsToCartOutput {
  """The cart after adding products."""
  cart: Cart!
}

"""Contains details about the cart after adding virtual products."""
type AddVirtualProductsToCartOutput {
  """The cart after adding products."""
  cart: Cart!
}

"""Contains details about the cart after updating items."""
type UpdateCartItemsOutput {
  """The cart after updating products."""
  cart: Cart!
}

"""Contains details about the cart after removing an item."""
type RemoveItemFromCartOutput {
  """The cart after removing an item."""
  cart: Cart!
}

"""Contains details about the cart after setting the email of a guest."""
type SetGuestEmailOnCartOutput {
  """The cart after setting the guest email."""
  cart: Cart!
}

"""An implementation for simple product cart items."""
type SimpleCartItem implements CartItemInterface {
  """Action type A/R/E"""
  action_type: String!

  """1 or 0"""
  auto_entitled: String!

  """An array containing the customizable options the shopper selected."""
  customizable_options: [SelectedCustomizableOption]!

  """Now OR End of cycle."""
  cycle_type: String!

  """1 or 0"""
  display_in_cart: String!

  """An array of errors encountered while loading the cart item"""
  errors: [CartItemError]

  """The entered gift message for the cart item"""
  gift_message: GiftMessage
  id: String! @deprecated(reason: "Use \`uid\` instead.")
  package_type: String!

  """Parent sku of childs"""
  parent_sku: String

  """Plan package price"""
  plan_package_price: String!

  """Subscription price"""
  price_for_subscription: String!

  """
  Contains details about the price of the item, including taxes and discounts.
  """
  prices: CartItemPrices

  """Details about an item in the cart."""
  product: ProductInterface!

  """Custom price - Final Price"""
  prorated_price: String!

  """The quantity of this item in the cart."""
  quantity: Float!

  """The unique ID for a \`CartItemInterface\` object."""
  uid: ID!
}

"""An implementation for virtual product cart items."""
type VirtualCartItem implements CartItemInterface {
  """Action type A/R/E"""
  action_type: String!

  """1 or 0"""
  auto_entitled: String!

  """An array containing customizable options the shopper selected."""
  customizable_options: [SelectedCustomizableOption]!

  """Now OR End of cycle."""
  cycle_type: String!

  """1 or 0"""
  display_in_cart: String!

  """An array of errors encountered while loading the cart item"""
  errors: [CartItemError]
  id: String! @deprecated(reason: "Use \`uid\` instead.")
  package_type: String!

  """Parent sku of childs"""
  parent_sku: String

  """Plan package price"""
  plan_package_price: String!

  """Subscription price"""
  price_for_subscription: String!

  """
  Contains details about the price of the item, including taxes and discounts.
  """
  prices: CartItemPrices

  """Details about an item in the cart."""
  product: ProductInterface!

  """Custom price - Final Price"""
  prorated_price: String!

  """The quantity of this item in the cart."""
  quantity: Float!

  """The unique ID for a \`CartItemInterface\` object."""
  uid: ID!
}

"""An interface for products in a cart."""
interface CartItemInterface {
  """Action type A/R/E"""
  action_type: String!

  """1 or 0"""
  auto_entitled: String!

  """Now OR End of cycle."""
  cycle_type: String!

  """1 or 0"""
  display_in_cart: String!

  """An array of errors encountered while loading the cart item"""
  errors: [CartItemError]
  id: String! @deprecated(reason: "Use \`uid\` instead.")
  package_type: String!

  """Parent sku of childs"""
  parent_sku: String

  """Plan package price"""
  plan_package_price: String!

  """Subscription price"""
  price_for_subscription: String!

  """
  Contains details about the price of the item, including taxes and discounts.
  """
  prices: CartItemPrices

  """Details about an item in the cart."""
  product: ProductInterface!

  """Custom price - Final Price"""
  prorated_price: String!

  """The quantity of this item in the cart."""
  quantity: Float!

  """The unique ID for a \`CartItemInterface\` object."""
  uid: ID!
}

""""""
type CartItemError {
  """An error code that describes the error encountered"""
  code: CartItemErrorType!

  """A localized error message"""
  message: String!
}

""""""
enum CartItemErrorType {
  """"""
  UNDEFINED @deprecated(reason: "")

  """"""
  ITEM_QTY @deprecated(reason: "")

  """"""
  ITEM_INCREMENTS @deprecated(reason: "")
}

"""
Defines an individual discount. A discount can be applied to the cart as a whole or to an item.
"""
type Discount {
  """The amount of the discount."""
  amount: Money!

  """A description of the discount."""
  label: String!
}

"""
Contains details about the price of the item, including taxes and discounts.
"""
type CartItemPrices {
  """An array of discounts to be applied to the cart item."""
  discounts: [Discount]

  """An array of FPTs applied to the cart item."""
  fixed_product_taxes: [FixedProductTax]

  """
  The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart.
  """
  price: Money!

  """
  The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart.
  """
  price_including_tax: Money!

  """The value of the price multiplied by the quantity of the item."""
  row_total: Money!

  """The value of \`row_total\` plus the tax applied to the item."""
  row_total_including_tax: Money!

  """The total of all discounts applied to the item."""
  total_item_discount: Money
}

"""Identifies a customized product that has been placed in a cart."""
type SelectedCustomizableOption {
  """
  The unique ID for a specific \`CustomizableOptionInterface\` object, such as a \`CustomizableFieldOption\`, \`CustomizableFileOption\`, or \`CustomizableAreaOption\` object.
  """
  customizable_option_uid: ID!
  id: Int! @deprecated(reason: "Use \`SelectedCustomizableOption.customizable_option_uid\` instead.")

  """Indicates whether the customizable option is required."""
  is_required: Boolean!

  """The display name of the selected customizable option."""
  label: String!

  """A value indicating the order to display this option."""
  sort_order: Int!

  """The type of \`CustomizableOptionInterface\` object."""
  type: String!

  """An array of selectable values."""
  values: [SelectedCustomizableOptionValue]!
}

"""Identifies the value of the selected customized option."""
type SelectedCustomizableOptionValue {
  """
  The unique ID for a value object that corresponds to the object represented by the \`customizable_option_uid\` attribute.
  """
  customizable_option_value_uid: ID!
  id: Int! @deprecated(reason: "Use \`SelectedCustomizableOptionValue.customizable_option_value_uid\` instead.")

  """The display name of the selected value."""
  label: String!

  """The price of the selected customizable value."""
  price: CartItemSelectedOptionValuePrice!

  """The text identifying the selected value."""
  value: String!
}

"""Contains details about the price of a selected customizable value."""
type CartItemSelectedOptionValuePrice {
  """Indicates whether the price type is fixed, percent, or dynamic."""
  type: PriceTypeEnum!

  """A string that describes the unit of the value."""
  units: String!

  """A price value."""
  value: Float!
}

"""Contains the order ID."""
type Order {
  order_id: String @deprecated(reason: "Use \`order_number\` instead.")

  """The unique ID for an \`Order\` object."""
  order_number: String!
}

"""An error encountered while adding an item to the the cart."""
type CartUserInputError {
  """Cart-specific error code"""
  code: CartUserInputErrorType

  """A localized error message"""
  message: String
}

"""Contains details about the cart after adding products to it."""
type AddProductsToCartOutput {
  """The cart after products have been added"""
  cart: Cart!

  """An error encountered while adding an item to the cart."""
  user_errors: [CartUserInputError]
}

""""""
enum CartUserInputErrorType {
  """"""
  PRODUCT_NOT_FOUND @deprecated(reason: "")

  """"""
  NOT_SALABLE @deprecated(reason: "")

  """"""
  INSUFFICIENT_STOCK @deprecated(reason: "")

  """"""
  UNDEFINED @deprecated(reason: "")

  """"""
  PERMISSION_DENIED @deprecated(reason: "")
}

"""
Defines the input required to run the \`applyStoreCreditToCart\` mutation.
"""
input ApplyStoreCreditToCartInput {
  """The unique ID that identifies the customer's cart."""
  cart_id: String!
}

"""Defines the possible output for the \`applyStoreCreditToCart\` mutation."""
type ApplyStoreCreditToCartOutput {
  """The contents of the specified shopping cart."""
  cart: Cart!
}

"""
Defines the input required to run the \`removeStoreCreditFromCart\` mutation.
"""
input RemoveStoreCreditFromCartInput {
  """The unique ID that identifies the customer's cart."""
  cart_id: String!
}

"""
Defines the possible output for the \`removeStoreCreditFromCart\` mutation.
"""
type RemoveStoreCreditFromCartOutput {
  """The contents of the specified shopping cart."""
  cart: Cart!
}

"""Contains the applied and current balances."""
type AppliedStoreCredit {
  """The applied store credit balance to the current cart."""
  applied_balance: Money

  """The current balance remaining on store credit."""
  current_balance: Money

  """
  Indicates whether store credits are enabled. If the feature is disabled, then the current balance will not be returned.
  """
  enabled: Boolean
}

"""Contains store credit information with balance and history."""
type CustomerStoreCredit {
  """
  Contains the customer's store credit balance history. If the history or store credit feature is disabled, then a null value will be returned.
  """
  balance_history(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """
    The page of results to return. This value is optional. The default is 1.
    """
    currentPage: Int = 1
  ): CustomerStoreCreditHistory

  """The current balance of store credit."""
  current_balance: Money

  """
  Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned.
  """
  enabled: Boolean
}

"""Lists changes to the amount of store credit available to the customer."""
type CustomerStoreCreditHistory {
  """
  An array containing information about changes to the store credit available to the customer.
  """
  items: [CustomerStoreCreditHistoryItem]

  """Metadata for pagination rendering."""
  page_info: SearchResultPageInfo

  """The number of items returned."""
  total_count: Int
}

"""Contains store credit history information."""
type CustomerStoreCreditHistoryItem {
  """The action that was made on the store credit."""
  action: String

  """
  The store credit available to the customer as a result of this action. 
  """
  actual_balance: Money

  """
  The amount added to or subtracted from the store credit as a result of this action.
  """
  balance_change: Money

  """The date and time when the store credit change was made."""
  date_time_changed: String
}

""""""
input AddDownloadableProductsToCartInput {
  """The ID of the cart."""
  cart_id: String!

  """An array of downloadable products to add."""
  cart_items: [DownloadableProductCartItemInput]!
}

"""Defines a single downloadable product."""
input DownloadableProductCartItemInput {
  """The ID and value of the option."""
  customizable_options: [CustomizableOptionInput]

  """The quantity and SKU of the downloadable product."""
  data: CartItemInput!

  """
  An array of objects containing the link_id of the downloadable product link.
  """
  downloadable_product_links: [DownloadableProductLinksInput]
}

"""Contains the link ID for the downloadable product."""
input DownloadableProductLinksInput {
  """The unique ID of the downloadable product link."""
  link_id: Int!
}

"""Contains details about the cart after adding downloadable products."""
type AddDownloadableProductsToCartOutput {
  """The cart after adding products."""
  cart: Cart!
}

"""An implementation for downloadable product cart items."""
type DownloadableCartItem implements CartItemInterface {
  """Action type A/R/E"""
  action_type: String!

  """1 or 0"""
  auto_entitled: String!

  """An array containing the customizable options the shopper selected."""
  customizable_options: [SelectedCustomizableOption]!

  """Now OR End of cycle."""
  cycle_type: String!

  """1 or 0"""
  display_in_cart: String!

  """An array of errors encountered while loading the cart item"""
  errors: [CartItemError]
  id: String! @deprecated(reason: "Use \`uid\` instead.")

  """
  An array containing information about the links for the downloadable product added to the cart.
  """
  links: [DownloadableProductLinks]
  package_type: String!

  """Parent sku of childs"""
  parent_sku: String

  """Plan package price"""
  plan_package_price: String!

  """Subscription price"""
  price_for_subscription: String!

  """
  Contains details about the price of the item, including taxes and discounts.
  """
  prices: CartItemPrices

  """Details about an item in the cart."""
  product: ProductInterface!

  """Custom price - Final Price"""
  prorated_price: String!

  """The quantity of this item in the cart."""
  quantity: Float!

  """
  An array containing information about samples of the selected downloadable product.
  """
  samples: [DownloadableProductSamples]

  """The unique ID for a \`CartItemInterface\` object."""
  uid: ID!
}

"""Defines a product that the shopper downloads."""
type DownloadableProduct implements ProductInterface & RoutableInterface & CustomizableProductInterface {
  """An array of related Addons."""
  addons: [AddonsDetail]

  """The attribute set assigned to the product."""
  attribute_set_id: Int @deprecated(reason: "The field should not be used on the storefront.")
  auto_entitled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  auto_selected: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  available_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  base_price: String
  base_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related child products."""
  bundle_child_products: [BundleDetail]

  """An array of bundle deal parts."""
  bundle_deal_parts: [BundleDealParts]
  business_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  call_sign: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  canonical_identifier: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled.
  """
  canonical_url: String

  """An array of categories."""
  categories: [CategoriesPackagesDetail]

  """An array of related products."""
  channels: [ChannelDetail]
  charge_currency: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_name: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_periodicity: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of products to be displayed in a Related Products block."""
  child_products: [ProductInterface]
  color: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product's country of origin."""
  country_of_manufacture: String

  """Timestamp indicating when the product was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of cross-sell products."""
  crosssell_products: [ProductInterface]
  csr_required: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  default_classification: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: ComplexTextValue
  description_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_3: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_disclaimer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  An array containing information about the links for this downloadable product.
  """
  downloadable_product_links: [DownloadableProductLinks]

  """
  An array containing information about samples of this downloadable product.
  """
  downloadable_product_samples: [DownloadableProductSamples]
  dw_classification: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_time_utc: String
  effective_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_start_time_utc: String
  element_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  element_type_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  entity_id: Int

  """An array of related Addons."""
  excluded_packages: [ExcludedPackagesDetail]
  fine_print: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether a gift message is available."""
  gift_message_available: String

  """An array of related child products."""
  grouped_child_products: [GroupDetail]
  has_partner_skus: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  hide_display: Boolean

  """The ID number assigned to the product."""
  id: Int @deprecated(reason: "Use the \`uid\` field instead.")
  identifier: String

  """The relative path to the main image on the product page."""
  image: ProductImage

  """The relative path to the main image on the product page."""
  images: [ProductImage]
  instructional: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  is_grandfathered: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether the product can be returned."""
  is_returnable: String
  item_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  A value of 1 indicates that each link in the array must be purchased separately.
  """
  links_purchased_separately: Int

  """The heading above the list of downloadable products."""
  links_title: String
  lite_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A number representing the product's manufacturer."""
  manufacturer: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of media gallery objects."""
  media_gallery: [MediaGalleryInterface]

  """An array of MediaGalleryEntry objects."""
  media_gallery_entries: [MediaGalleryEntry] @deprecated(reason: "Use \`media_gallery\` instead.")

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: String

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: String

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: String
  migrated_to: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  minutes: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  move_id: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product name. Customers use this name to identify the product."""
  name: String

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  new_from_date: String

  """The end date for new product listings."""
  new_to_date: String

  """The value assigned to the Only X Left Threshold option in the Admin."""
  only_x_left_in_stock: Float

  """An array of options for a customizable product."""
  options: [CustomizableOptionInterface]

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: String
  ota_qual_indoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_none: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_outdoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  package_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  partner_platforms: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  pkg_service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  plan_offer_price: String
  plan_package_price: String
  plan_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates the price of an item."""
  price: ProductPrices @deprecated(reason: "Use \`price_range\` for product price information.")

  """The range of prices for the product"""
  price_range: PriceRange!

  """An array of \`TierPrice\` objects."""
  price_tiers: [TierPrice]
  priority: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of \`ProductLinks\` objects."""
  product_links: [ProductLinksInterface]
  promo: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The average of all the ratings given to the product."""
  rating_summary: Float!

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!
  reg_price: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  regional_price_package: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related products."""
  related_products: [ProductInterface]

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """The total count of all the reviews given to the product."""
  review_count: Int!

  """The list of products reviews."""
  reviews(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): ProductReviews!
  selection_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A short description of the product. Its use depends on the theme."""
  short_description: ComplexTextValue

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: String
  sling_channel_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_product_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the small image, which is used on catalog pages."""
  small_image: ProductImage

  """The beginning date that a product has a special price."""
  special_from_date: String @deprecated(reason: "The field should not be used on the storefront.")

  """The discounted price of the product."""
  special_price: Float

  """The end date for a product with a special price."""
  special_to_date: String

  """Indicates whether the product is staged for a future campaign."""
  staged: Boolean!
  status: String

  """The stock status of the product."""
  stock_status: ProductStockStatus
  supported_apps: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the product's thumbnail image."""
  thumbnail: ProductImage

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: Float @deprecated(reason: "Use \`price_tiers\` for product tier price information.")

  """An array of ProductTierPrices objects."""
  tier_prices: [ProductTierPrices] @deprecated(reason: "Use \`price_tiers\` for product tier price information.")
  trial_offer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_sms_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Category Type"""
  type: String

  """
  One of simple, virtual, bundle, downloadable, grouped, or configurable.
  """
  type_id: String @deprecated(reason: "Use \`__typename\` instead.")

  """The unique ID for a \`ProductInterface\` object."""
  uid: ID!

  """Timestamp indicating when the product was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of up-sell products."""
  upsell_products: [ProductInterface]

  """The part of the URL that identifies the product"""
  url_key: String
  url_path: String @deprecated(reason: "Use product's \`canonical_url\` or url rewrites instead")

  """URL rewrites list"""
  url_rewrites: [UrlRewrite]

  """The part of the product URL that is appended after the url key"""
  url_suffix: String
  user_controlled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of websites in which the product is available."""
  websites: [Website] @deprecated(reason: "The field should not be used on the storefront.")
}

""""""
enum DownloadableFileTypeEnum {
  """"""
  FILE @deprecated(reason: "\`sample_url\` serves to get the downloadable sample")

  """"""
  URL @deprecated(reason: "\`sample_url\` serves to get the downloadable sample")
}

"""Defines characteristics of a downloadable product."""
type DownloadableProductLinks {
  id: Int @deprecated(reason: "This information should not be exposed on frontend.")
  is_shareable: Boolean @deprecated(reason: "This information should not be exposed on frontend.")
  link_type: DownloadableFileTypeEnum @deprecated(reason: "\`sample_url\` serves to get the downloadable sample")
  number_of_downloads: Int @deprecated(reason: "This information should not be exposed on frontend.")

  """The price of the downloadable product."""
  price: Float
  sample_file: String @deprecated(reason: "\`sample_url\` serves to get the downloadable sample")
  sample_type: DownloadableFileTypeEnum @deprecated(reason: "\`sample_url\` serves to get the downloadable sample")

  """The full URL to the downloadable sample."""
  sample_url: String

  """A number indicating the sort order."""
  sort_order: Int

  """The display name of the link."""
  title: String

  """The unique ID for a \`DownloadableProductLinks\` object."""
  uid: ID!
}

"""Defines characteristics of a downloadable product."""
type DownloadableProductSamples {
  id: Int @deprecated(reason: "This information should not be exposed on frontend.")
  sample_file: String @deprecated(reason: "\`sample_url\` serves to get the downloadable sample")
  sample_type: DownloadableFileTypeEnum @deprecated(reason: "\`sample_url\` serves to get the downloadable sample")

  """The full URL to the downloadable sample."""
  sample_url: String

  """A number indicating the sort order."""
  sort_order: Int

  """The display name of the sample."""
  title: String
}

"""Defines downloadable product options for \`OrderItemInterface\`."""
type DownloadableOrderItem implements OrderItemInterface {
  """The final discount information for the product."""
  discounts: [Discount]

  """
  A list of downloadable links that are ordered from the downloadable product.
  """
  downloadable_links: [DownloadableItemsLinks]

  """
  Indicates whether the order item is eligible to be in a return request.
  """
  eligible_for_return: Boolean

  """The entered option for the base product, such as a logo or image."""
  entered_options: [OrderItemOption]

  """The selected gift message for the order item"""
  gift_message: GiftMessage

  """The unique ID for an \`OrderItemInterface\` object."""
  id: ID!

  """The name of the base product."""
  product_name: String

  """The sale price of the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The type of product, such as simple, configurable, etc."""
  product_type: String

  """URL key of the base product."""
  product_url_key: String

  """The number of canceled items."""
  quantity_canceled: Float

  """The number of invoiced items."""
  quantity_invoiced: Float

  """The number of units ordered for this item."""
  quantity_ordered: Float

  """The number of refunded items."""
  quantity_refunded: Float

  """The number of returned items."""
  quantity_returned: Float

  """The number of shipped items."""
  quantity_shipped: Float

  """The selected options for the base product, such as color or size."""
  selected_options: [OrderItemOption]

  """The status of the order item."""
  status: String
}

"""Defines downloadable product options for \`InvoiceItemInterface\`."""
type DownloadableInvoiceItem implements InvoiceItemInterface {
  """
  Information about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """
  A list of downloadable links that are invoiced from the downloadable product.
  """
  downloadable_links: [DownloadableItemsLinks]

  """The unique ID for an \`InvoiceItemInterface\` object."""
  id: ID!

  """Details about an individual order item."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of invoiced items."""
  quantity_invoiced: Float
}

"""Defines downloadable product options for \`CreditMemoItemInterface\`."""
type DownloadableCreditMemoItem implements CreditMemoItemInterface {
  """
  Details about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """
  A list of downloadable links that are refunded from the downloadable product.
  """
  downloadable_links: [DownloadableItemsLinks]

  """The unique ID for a \`CreditMemoItemInterface\` object."""
  id: ID!

  """The order item the credit memo is applied to."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of refunded items."""
  quantity_refunded: Float
}

"""Defines characteristics of the links for downloadable product."""
type DownloadableItemsLinks {
  """A number indicating the sort order."""
  sort_order: Int

  """The display name of the link."""
  title: String

  """The unique ID for a \`DownloadableItemsLinks\` object."""
  uid: ID!
}

"""A downloadable product wish list item."""
type DownloadableWishlistItem implements WishlistItemInterface {
  """The date and time the item was added to the wish list."""
  added_at: String!

  """Custom options selected for the wish list item."""
  customizable_options: [SelectedCustomizableOption]!

  """The description of the item."""
  description: String

  """The unique ID for a \`WishlistItemInterface\` object."""
  id: ID!

  """An array containing information about the selected links."""
  links_v2: [DownloadableProductLinks]

  """Product details of the wish list item."""
  product: ProductInterface

  """The quantity of this wish list item."""
  quantity: Float!

  """An array containing information about the selected samples."""
  samples: [DownloadableProductSamples]
}

"""Contains details about a billing or shipping address."""
input CustomerAddressInput {
  """The customer's city or town."""
  city: String

  """The customer's company."""
  company: String

  """The two-letter code representing the customer's country."""
  country_code: CountryCodeEnum

  """Deprecated: use \`country_code\` instead."""
  country_id: CountryCodeEnum

  """Deprecated: Custom attributes should not be put into container."""
  custom_attributes: [CustomerAddressAttributeInput]

  """Indicates whether the address is the default billing address."""
  default_billing: Boolean

  """Indicates whether the address is the default shipping address."""
  default_shipping: Boolean

  """The customer's fax number."""
  fax: String

  """
  The first name of the person associated with the billing/shipping address.
  """
  firstname: String

  """
  The family name of the person associated with the billing/shipping address.
  """
  lastname: String

  """
  The middle name of the person associated with the billing/shipping address.
  """
  middlename: String

  """The customer's ZIP or postal code."""
  postcode: String

  """An honorific, such as Dr., Mr., or Mrs."""
  prefix: String

  """An object containing the region name, region code, and region ID."""
  region: CustomerAddressRegionInput

  """An array of strings that define the street number and name."""
  street: [String]

  """A value such as Sr., Jr., or III."""
  suffix: String

  """The customer's telephone number."""
  telephone: String

  """The customer's Tax/VAT number (for corporate customers)."""
  vat_id: String
}

"""Defines the customer's state or province."""
input CustomerAddressRegionInput {
  """The state or province name."""
  region: String

  """The address region code."""
  region_code: String

  """The unique ID for a pre-defined region."""
  region_id: Int
}

"""Specifies the attribute code and value of a customer attribute."""
input CustomerAddressAttributeInput {
  """The name assigned to the attribute."""
  attribute_code: String!

  """The value assigned to the attribute."""
  value: String!
}

"""Contains a customer authorization token."""
type CustomerToken {
  """The customer authorization token."""
  token: String
}

"""An input object that assigns or updates customer attributes."""
input CustomerInput {
  """The customer's date of birth."""
  date_of_birth: String

  """Deprecated: Use \`date_of_birth\` instead."""
  dob: String

  """The customer's email address. Required when creating a customer."""
  email: String

  """The customer's first name."""
  firstname: String

  """The customer's gender (Male - 1, Female - 2)."""
  gender: Int

  """
  Indicates whether the customer is subscribed to the company's newsletter.
  """
  is_subscribed: Boolean

  """The customer's family name."""
  lastname: String

  """The customer's middle name."""
  middlename: String

  """The customer's password."""
  password: String

  """An honorific, such as Dr., Mr., or Mrs."""
  prefix: String

  """A value such as Sr., Jr., or III."""
  suffix: String

  """The customer's Tax/VAT number (for corporate customers)."""
  taxvat: String
}

"""An input object for creating a customer."""
input CustomerCreateInput {
  """Indicates whether the customer has enabled remote shopping assistance."""
  allow_remote_shopping_assistance: Boolean

  """The customer's date of birth."""
  date_of_birth: String

  """Deprecated: Use \`date_of_birth\` instead."""
  dob: String

  """The customer's email address."""
  email: String!

  """The customer's first name."""
  firstname: String!

  """The customer's gender (Male - 1, Female - 2)."""
  gender: Int

  """
  Indicates whether the customer is subscribed to the company's newsletter.
  """
  is_subscribed: Boolean

  """The customer's family name."""
  lastname: String!

  """The customer's middle name."""
  middlename: String

  """The customer's password."""
  password: String

  """An honorific, such as Dr., Mr., or Mrs."""
  prefix: String

  """A value such as Sr., Jr., or III."""
  suffix: String

  """The customer's Tax/VAT number (for corporate customers)."""
  taxvat: String
}

"""An input object for updating a customer."""
input CustomerUpdateInput {
  """Indicates whether the customer has enabled remote shopping assistance."""
  allow_remote_shopping_assistance: Boolean

  """The customer's date of birth."""
  date_of_birth: String

  """Deprecated: Use \`date_of_birth\` instead."""
  dob: String

  """The customer's first name."""
  firstname: String

  """The customer's gender (Male - 1, Female - 2)."""
  gender: Int

  """
  Indicates whether the customer is subscribed to the company's newsletter.
  """
  is_subscribed: Boolean

  """The customer's family name."""
  lastname: String

  """The customer's middle name."""
  middlename: String

  """An honorific, such as Dr., Mr., or Mrs."""
  prefix: String

  """A value such as Sr., Jr., or III."""
  suffix: String

  """The customer's Tax/VAT number (for corporate customers)."""
  taxvat: String
}

"""Contains details about a newly-created or updated customer."""
type CustomerOutput {
  """Customer details after creating or updating a customer."""
  customer: Customer!
}

"""Contains the result of a request to revoke a customer token."""
type RevokeCustomerTokenOutput {
  """The result of a request to revoke a customer token."""
  result: Boolean!
}

"""
Contains detailed information about a customer's billing or shipping address.
"""
type CustomerAddress {
  """The customer's city or town."""
  city: String

  """The customer's company."""
  company: String

  """The customer's country."""
  country_code: CountryCodeEnum

  """The customer's country."""
  country_id: String @deprecated(reason: "Use \`country_code\` instead.")
  custom_attributes: [CustomerAddressAttribute] @deprecated(reason: "Custom attributes should not be put into a container.")

  """The customer ID"""
  customer_id: Int @deprecated(reason: "\`customer_id\` is not needed as part of \`CustomerAddress\`. The \`id\` is a unique identifier for the addresses.")

  """
  Indicates whether the address is the customer's default billing address.
  """
  default_billing: Boolean

  """
  Indicates whether the address is the customer's default shipping address.
  """
  default_shipping: Boolean

  """Contains any extension attributes for the address."""
  extension_attributes: [CustomerAddressAttribute]

  """The customer's fax number."""
  fax: String

  """
  The first name of the person associated with the shipping/billing address.
  """
  firstname: String

  """The ID of a \`CustomerAddress\` object."""
  id: Int

  """
  The family name of the person associated with the shipping/billing address.
  """
  lastname: String

  """
  The middle name of the person associated with the shipping/billing address.
  """
  middlename: String

  """The customer's ZIP or postal code."""
  postcode: String

  """An honorific, such as Dr., Mr., or Mrs."""
  prefix: String

  """An object containing the region name, region code, and region ID."""
  region: CustomerAddressRegion

  """The unique ID for a pre-defined region."""
  region_id: Int

  """An array of strings that define the street number and name."""
  street: [String]

  """A value such as Sr., Jr., or III."""
  suffix: String

  """The customer's telephone number."""
  telephone: String

  """The customer's Value-added tax (VAT) number (for corporate customers)."""
  vat_id: String
}

"""Defines the customer's state or province."""
type CustomerAddressRegion {
  """The state or province name."""
  region: String

  """The address region code."""
  region_code: String

  """The unique ID for a pre-defined region."""
  region_id: Int
}

"""
Specifies the attribute code and value of a customer address attribute.
"""
type CustomerAddressAttribute {
  """The name assigned to the customer address attribute."""
  attribute_code: String

  """The valuue assigned to the customer address attribute."""
  value: String
}

"""Contains the result of the \`isEmailAvailable\` query."""
type IsEmailAvailableOutput {
  """
  Indicates whether the specified email address can be used to create a customer.
  """
  is_email_available: Boolean
}

"""The list of country codes."""
enum CountryCodeEnum {
  """Afghanistan"""
  AF @deprecated(reason: "")

  """Åland Islands"""
  AX @deprecated(reason: "")

  """Albania"""
  AL @deprecated(reason: "")

  """Algeria"""
  DZ @deprecated(reason: "")

  """American Samoa"""
  AS @deprecated(reason: "")

  """Andorra"""
  AD @deprecated(reason: "")

  """Angola"""
  AO @deprecated(reason: "")

  """Anguilla"""
  AI @deprecated(reason: "")

  """Antarctica"""
  AQ @deprecated(reason: "")

  """Antigua & Barbuda"""
  AG @deprecated(reason: "")

  """Argentina"""
  AR @deprecated(reason: "")

  """Armenia"""
  AM @deprecated(reason: "")

  """Aruba"""
  AW @deprecated(reason: "")

  """Australia"""
  AU @deprecated(reason: "")

  """Austria"""
  AT @deprecated(reason: "")

  """Azerbaijan"""
  AZ @deprecated(reason: "")

  """Bahamas"""
  BS @deprecated(reason: "")

  """Bahrain"""
  BH @deprecated(reason: "")

  """Bangladesh"""
  BD @deprecated(reason: "")

  """Barbados"""
  BB @deprecated(reason: "")

  """Belarus"""
  BY @deprecated(reason: "")

  """Belgium"""
  BE @deprecated(reason: "")

  """Belize"""
  BZ @deprecated(reason: "")

  """Benin"""
  BJ @deprecated(reason: "")

  """Bermuda"""
  BM @deprecated(reason: "")

  """Bhutan"""
  BT @deprecated(reason: "")

  """Bolivia"""
  BO @deprecated(reason: "")

  """Bosnia & Herzegovina"""
  BA @deprecated(reason: "")

  """Botswana"""
  BW @deprecated(reason: "")

  """Bouvet Island"""
  BV @deprecated(reason: "")

  """Brazil"""
  BR @deprecated(reason: "")

  """British Indian Ocean Territory"""
  IO @deprecated(reason: "")

  """British Virgin Islands"""
  VG @deprecated(reason: "")

  """Brunei"""
  BN @deprecated(reason: "")

  """Bulgaria"""
  BG @deprecated(reason: "")

  """Burkina Faso"""
  BF @deprecated(reason: "")

  """Burundi"""
  BI @deprecated(reason: "")

  """Cambodia"""
  KH @deprecated(reason: "")

  """Cameroon"""
  CM @deprecated(reason: "")

  """Canada"""
  CA @deprecated(reason: "")

  """Cape Verde"""
  CV @deprecated(reason: "")

  """Cayman Islands"""
  KY @deprecated(reason: "")

  """Central African Republic"""
  CF @deprecated(reason: "")

  """Chad"""
  TD @deprecated(reason: "")

  """Chile"""
  CL @deprecated(reason: "")

  """China"""
  CN @deprecated(reason: "")

  """Christmas Island"""
  CX @deprecated(reason: "")

  """Cocos (Keeling) Islands"""
  CC @deprecated(reason: "")

  """Colombia"""
  CO @deprecated(reason: "")

  """Comoros"""
  KM @deprecated(reason: "")

  """Congo-Brazzaville"""
  CG @deprecated(reason: "")

  """Congo-Kinshasa"""
  CD @deprecated(reason: "")

  """Cook Islands"""
  CK @deprecated(reason: "")

  """Costa Rica"""
  CR @deprecated(reason: "")

  """Côte d’Ivoire"""
  CI @deprecated(reason: "")

  """Croatia"""
  HR @deprecated(reason: "")

  """Cuba"""
  CU @deprecated(reason: "")

  """Cyprus"""
  CY @deprecated(reason: "")

  """Czech Republic"""
  CZ @deprecated(reason: "")

  """Denmark"""
  DK @deprecated(reason: "")

  """Djibouti"""
  DJ @deprecated(reason: "")

  """Dominica"""
  DM @deprecated(reason: "")

  """Dominican Republic"""
  DO @deprecated(reason: "")

  """Ecuador"""
  EC @deprecated(reason: "")

  """Egypt"""
  EG @deprecated(reason: "")

  """El Salvador"""
  SV @deprecated(reason: "")

  """Equatorial Guinea"""
  GQ @deprecated(reason: "")

  """Eritrea"""
  ER @deprecated(reason: "")

  """Estonia"""
  EE @deprecated(reason: "")

  """Ethiopia"""
  ET @deprecated(reason: "")

  """Falkland Islands"""
  FK @deprecated(reason: "")

  """Faroe Islands"""
  FO @deprecated(reason: "")

  """Fiji"""
  FJ @deprecated(reason: "")

  """Finland"""
  FI @deprecated(reason: "")

  """France"""
  FR @deprecated(reason: "")

  """French Guiana"""
  GF @deprecated(reason: "")

  """French Polynesia"""
  PF @deprecated(reason: "")

  """French Southern Territories"""
  TF @deprecated(reason: "")

  """Gabon"""
  GA @deprecated(reason: "")

  """Gambia"""
  GM @deprecated(reason: "")

  """Georgia"""
  GE @deprecated(reason: "")

  """Germany"""
  DE @deprecated(reason: "")

  """Ghana"""
  GH @deprecated(reason: "")

  """Gibraltar"""
  GI @deprecated(reason: "")

  """Greece"""
  GR @deprecated(reason: "")

  """Greenland"""
  GL @deprecated(reason: "")

  """Grenada"""
  GD @deprecated(reason: "")

  """Guadeloupe"""
  GP @deprecated(reason: "")

  """Guam"""
  GU @deprecated(reason: "")

  """Guatemala"""
  GT @deprecated(reason: "")

  """Guernsey"""
  GG @deprecated(reason: "")

  """Guinea"""
  GN @deprecated(reason: "")

  """Guinea-Bissau"""
  GW @deprecated(reason: "")

  """Guyana"""
  GY @deprecated(reason: "")

  """Haiti"""
  HT @deprecated(reason: "")

  """Heard &amp; McDonald Islands"""
  HM @deprecated(reason: "")

  """Honduras"""
  HN @deprecated(reason: "")

  """Hong Kong SAR China"""
  HK @deprecated(reason: "")

  """Hungary"""
  HU @deprecated(reason: "")

  """Iceland"""
  IS @deprecated(reason: "")

  """India"""
  IN @deprecated(reason: "")

  """Indonesia"""
  ID @deprecated(reason: "")

  """Iran"""
  IR @deprecated(reason: "")

  """Iraq"""
  IQ @deprecated(reason: "")

  """Ireland"""
  IE @deprecated(reason: "")

  """Isle of Man"""
  IM @deprecated(reason: "")

  """Israel"""
  IL @deprecated(reason: "")

  """Italy"""
  IT @deprecated(reason: "")

  """Jamaica"""
  JM @deprecated(reason: "")

  """Japan"""
  JP @deprecated(reason: "")

  """Jersey"""
  JE @deprecated(reason: "")

  """Jordan"""
  JO @deprecated(reason: "")

  """Kazakhstan"""
  KZ @deprecated(reason: "")

  """Kenya"""
  KE @deprecated(reason: "")

  """Kiribati"""
  KI @deprecated(reason: "")

  """Kuwait"""
  KW @deprecated(reason: "")

  """Kyrgyzstan"""
  KG @deprecated(reason: "")

  """Laos"""
  LA @deprecated(reason: "")

  """Latvia"""
  LV @deprecated(reason: "")

  """Lebanon"""
  LB @deprecated(reason: "")

  """Lesotho"""
  LS @deprecated(reason: "")

  """Liberia"""
  LR @deprecated(reason: "")

  """Libya"""
  LY @deprecated(reason: "")

  """Liechtenstein"""
  LI @deprecated(reason: "")

  """Lithuania"""
  LT @deprecated(reason: "")

  """Luxembourg"""
  LU @deprecated(reason: "")

  """Macau SAR China"""
  MO @deprecated(reason: "")

  """Macedonia"""
  MK @deprecated(reason: "")

  """Madagascar"""
  MG @deprecated(reason: "")

  """Malawi"""
  MW @deprecated(reason: "")

  """Malaysia"""
  MY @deprecated(reason: "")

  """Maldives"""
  MV @deprecated(reason: "")

  """Mali"""
  ML @deprecated(reason: "")

  """Malta"""
  MT @deprecated(reason: "")

  """Marshall Islands"""
  MH @deprecated(reason: "")

  """Martinique"""
  MQ @deprecated(reason: "")

  """Mauritania"""
  MR @deprecated(reason: "")

  """Mauritius"""
  MU @deprecated(reason: "")

  """Mayotte"""
  YT @deprecated(reason: "")

  """Mexico"""
  MX @deprecated(reason: "")

  """Micronesia"""
  FM @deprecated(reason: "")

  """Moldova"""
  MD @deprecated(reason: "")

  """Monaco"""
  MC @deprecated(reason: "")

  """Mongolia"""
  MN @deprecated(reason: "")

  """Montenegro"""
  ME @deprecated(reason: "")

  """Montserrat"""
  MS @deprecated(reason: "")

  """Morocco"""
  MA @deprecated(reason: "")

  """Mozambique"""
  MZ @deprecated(reason: "")

  """Myanmar (Burma)"""
  MM @deprecated(reason: "")

  """Namibia"""
  NA @deprecated(reason: "")

  """Nauru"""
  NR @deprecated(reason: "")

  """Nepal"""
  NP @deprecated(reason: "")

  """Netherlands"""
  NL @deprecated(reason: "")

  """Netherlands Antilles"""
  AN @deprecated(reason: "")

  """New Caledonia"""
  NC @deprecated(reason: "")

  """New Zealand"""
  NZ @deprecated(reason: "")

  """Nicaragua"""
  NI @deprecated(reason: "")

  """Niger"""
  NE @deprecated(reason: "")

  """Nigeria"""
  NG @deprecated(reason: "")

  """Niue"""
  NU @deprecated(reason: "")

  """Norfolk Island"""
  NF @deprecated(reason: "")

  """Northern Mariana Islands"""
  MP @deprecated(reason: "")

  """North Korea"""
  KP @deprecated(reason: "")

  """Norway"""
  NO @deprecated(reason: "")

  """Oman"""
  OM @deprecated(reason: "")

  """Pakistan"""
  PK @deprecated(reason: "")

  """Palau"""
  PW @deprecated(reason: "")

  """Palestinian Territories"""
  PS @deprecated(reason: "")

  """Panama"""
  PA @deprecated(reason: "")

  """Papua New Guinea"""
  PG @deprecated(reason: "")

  """Paraguay"""
  PY @deprecated(reason: "")

  """Peru"""
  PE @deprecated(reason: "")

  """Philippines"""
  PH @deprecated(reason: "")

  """Pitcairn Islands"""
  PN @deprecated(reason: "")

  """Poland"""
  PL @deprecated(reason: "")

  """Portugal"""
  PT @deprecated(reason: "")

  """Qatar"""
  QA @deprecated(reason: "")

  """Réunion"""
  RE @deprecated(reason: "")

  """Romania"""
  RO @deprecated(reason: "")

  """Russia"""
  RU @deprecated(reason: "")

  """Rwanda"""
  RW @deprecated(reason: "")

  """Samoa"""
  WS @deprecated(reason: "")

  """San Marino"""
  SM @deprecated(reason: "")

  """São Tomé & Príncipe"""
  ST @deprecated(reason: "")

  """Saudi Arabia"""
  SA @deprecated(reason: "")

  """Senegal"""
  SN @deprecated(reason: "")

  """Serbia"""
  RS @deprecated(reason: "")

  """Seychelles"""
  SC @deprecated(reason: "")

  """Sierra Leone"""
  SL @deprecated(reason: "")

  """Singapore"""
  SG @deprecated(reason: "")

  """Slovakia"""
  SK @deprecated(reason: "")

  """Slovenia"""
  SI @deprecated(reason: "")

  """Solomon Islands"""
  SB @deprecated(reason: "")

  """Somalia"""
  SO @deprecated(reason: "")

  """South Africa"""
  ZA @deprecated(reason: "")

  """South Georgia & South Sandwich Islands"""
  GS @deprecated(reason: "")

  """South Korea"""
  KR @deprecated(reason: "")

  """Spain"""
  ES @deprecated(reason: "")

  """Sri Lanka"""
  LK @deprecated(reason: "")

  """St. Barthélemy"""
  BL @deprecated(reason: "")

  """St. Helena"""
  SH @deprecated(reason: "")

  """St. Kitts & Nevis"""
  KN @deprecated(reason: "")

  """St. Lucia"""
  LC @deprecated(reason: "")

  """St. Martin"""
  MF @deprecated(reason: "")

  """St. Pierre & Miquelon"""
  PM @deprecated(reason: "")

  """St. Vincent & Grenadines"""
  VC @deprecated(reason: "")

  """Sudan"""
  SD @deprecated(reason: "")

  """Suriname"""
  SR @deprecated(reason: "")

  """Svalbard & Jan Mayen"""
  SJ @deprecated(reason: "")

  """Swaziland"""
  SZ @deprecated(reason: "")

  """Sweden"""
  SE @deprecated(reason: "")

  """Switzerland"""
  CH @deprecated(reason: "")

  """Syria"""
  SY @deprecated(reason: "")

  """Taiwan"""
  TW @deprecated(reason: "")

  """Tajikistan"""
  TJ @deprecated(reason: "")

  """Tanzania"""
  TZ @deprecated(reason: "")

  """Thailand"""
  TH @deprecated(reason: "")

  """Timor-Leste"""
  TL @deprecated(reason: "")

  """Togo"""
  TG @deprecated(reason: "")

  """Tokelau"""
  TK @deprecated(reason: "")

  """Tonga"""
  TO @deprecated(reason: "")

  """Trinidad & Tobago"""
  TT @deprecated(reason: "")

  """Tunisia"""
  TN @deprecated(reason: "")

  """Turkey"""
  TR @deprecated(reason: "")

  """Turkmenistan"""
  TM @deprecated(reason: "")

  """Turks & Caicos Islands"""
  TC @deprecated(reason: "")

  """Tuvalu"""
  TV @deprecated(reason: "")

  """Uganda"""
  UG @deprecated(reason: "")

  """Ukraine"""
  UA @deprecated(reason: "")

  """United Arab Emirates"""
  AE @deprecated(reason: "")

  """United Kingdom"""
  GB @deprecated(reason: "")

  """United States"""
  US @deprecated(reason: "")

  """Uruguay"""
  UY @deprecated(reason: "")

  """U.S. Outlying Islands"""
  UM @deprecated(reason: "")

  """U.S. Virgin Islands"""
  VI @deprecated(reason: "")

  """Uzbekistan"""
  UZ @deprecated(reason: "")

  """Vanuatu"""
  VU @deprecated(reason: "")

  """Vatican City"""
  VA @deprecated(reason: "")

  """Venezuela"""
  VE @deprecated(reason: "")

  """Vietnam"""
  VN @deprecated(reason: "")

  """Wallis & Futuna"""
  WF @deprecated(reason: "")

  """Western Sahara"""
  EH @deprecated(reason: "")

  """Yemen"""
  YE @deprecated(reason: "")

  """Zambia"""
  ZM @deprecated(reason: "")

  """Zimbabwe"""
  ZW @deprecated(reason: "")
}

"""Defines the bundle products to add to the cart."""
input AddBundleProductsToCartInput {
  """The ID of the cart."""
  cart_id: String!

  """An array of bundle products to add."""
  cart_items: [BundleProductCartItemInput]!
}

"""Defines a single bundle product."""
input BundleProductCartItemInput {
  """
  A mandatory array of options for the bundle product, including each chosen option and specified quantity.
  """
  bundle_options: [BundleOptionInput]!

  """The ID and value of the option."""
  customizable_options: [CustomizableOptionInput]

  """The quantity and SKU of the bundle product."""
  data: CartItemInput!
}

"""Defines the input for a bundle option."""
input BundleOptionInput {
  """The ID of the option."""
  id: Int!

  """The number of the selected item to add to the cart."""
  quantity: Float!

  """An array with the chosen value of the option."""
  value: [String]!
}

"""Contains details about the cart after adding bundle products."""
type AddBundleProductsToCartOutput {
  """The cart after adding products."""
  cart: Cart!
}

"""An implementation for bundle product cart items."""
type BundleCartItem implements CartItemInterface {
  """Action type A/R/E"""
  action_type: String!

  """1 or 0"""
  auto_entitled: String!

  """An array containing the bundle options the shopper selected."""
  bundle_options: [SelectedBundleOption]!

  """An array containing the customizable options the shopper selected."""
  customizable_options: [SelectedCustomizableOption]!

  """Now OR End of cycle."""
  cycle_type: String!

  """1 or 0"""
  display_in_cart: String!

  """An array of errors encountered while loading the cart item"""
  errors: [CartItemError]

  """The entered gift message for the cart item"""
  gift_message: GiftMessage
  id: String! @deprecated(reason: "Use \`uid\` instead.")
  package_type: String!

  """Parent sku of childs"""
  parent_sku: String

  """Plan package price"""
  plan_package_price: String!

  """Subscription price"""
  price_for_subscription: String!

  """
  Contains details about the price of the item, including taxes and discounts.
  """
  prices: CartItemPrices

  """Details about an item in the cart."""
  product: ProductInterface!

  """Custom price - Final Price"""
  prorated_price: String!

  """The quantity of this item in the cart."""
  quantity: Float!

  """The unique ID for a \`CartItemInterface\` object."""
  uid: ID!
}

"""Contains details about a selected bundle option."""
type SelectedBundleOption {
  id: Int! @deprecated(reason: "Use \`uid\` instead")

  """The display name of the selected bundle product option."""
  label: String!

  """The type of selected bundle product option."""
  type: String!

  """The unique ID for a \`SelectedBundleOption\` object"""
  uid: ID!

  """An array of selected bundle option values."""
  values: [SelectedBundleOptionValue]!
}

"""Contains details about a value for a selected bundle option."""
type SelectedBundleOptionValue {
  """Use \`uid\` instead"""
  id: Int!

  """The display name of the value for the selected bundle product option."""
  label: String!

  """The price of the value for the selected bundle product option."""
  price: Float!

  """The quantity of the value for the selected bundle product option."""
  quantity: Float!

  """The unique ID for a \`SelectedBundleOptionValue\` object"""
  uid: ID!
}

"""Defines an individual item within a bundle product."""
type BundleItem {
  """An ID assigned to each type of item in a bundle product."""
  option_id: Int @deprecated(reason: "Use \`uid\` instead")

  """An array of additional options for this bundle item."""
  options: [BundleItemOption]

  """
  A number indicating the sequence order of this item compared to the other bundle items.
  """
  position: Int

  """The range of prices for the product"""
  price_range: PriceRange!

  """Indicates whether the item must be included in the bundle."""
  required: Boolean

  """The SKU of the bundle product."""
  sku: String

  """The display name of the item."""
  title: String

  """
  The input type that the customer uses to select the item. Examples include radio button and checkbox.
  """
  type: String

  """The unique ID for a \`BundleItem\` object."""
  uid: ID
}

"""
Defines the characteristics that comprise a specific bundle item and its options.
"""
type BundleItemOption {
  """
  Indicates whether the customer can change the number of items for this option.
  """
  can_change_quantity: Boolean

  """The ID assigned to the bundled item option."""
  id: Int @deprecated(reason: "Use \`uid\` instead")

  """Indicates whether this option is the default option."""
  is_default: Boolean

  """The text that identifies the bundled item option."""
  label: String

  """
  When a bundle item contains multiple options, the relative position of this option compared to the other options.
  """
  position: Int

  """The price of the selected option."""
  price: Float

  """One of FIXED, PERCENT, or DYNAMIC."""
  price_type: PriceTypeEnum

  """Contains details about this product option."""
  product: ProductInterface

  """Indicates the quantity of this specific bundle item."""
  qty: Float @deprecated(reason: "Use \`quantity\` instead.")

  """The quantity of this specific bundle item."""
  quantity: Float

  """The unique ID for a \`BundleItemOption\` object."""
  uid: ID!
}

"""
Defines basic features of a bundle product and contains multiple BundleItems.
"""
type BundleProduct implements ProductInterface & RoutableInterface & PhysicalProductInterface & CustomizableProductInterface {
  """An array of related Addons."""
  addons: [AddonsDetail]

  """The attribute set assigned to the product."""
  attribute_set_id: Int @deprecated(reason: "The field should not be used on the storefront.")
  auto_entitled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  auto_selected: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  available_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  base_price: String
  base_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related child products."""
  bundle_child_products: [BundleDetail]

  """An array of bundle deal parts."""
  bundle_deal_parts: [BundleDealParts]
  business_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  call_sign: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  canonical_identifier: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled.
  """
  canonical_url: String

  """An array of categories."""
  categories: [CategoriesPackagesDetail]

  """An array of related products."""
  channels: [ChannelDetail]
  charge_currency: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_name: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_periodicity: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of products to be displayed in a Related Products block."""
  child_products: [ProductInterface]
  color: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product's country of origin."""
  country_of_manufacture: String

  """Timestamp indicating when the product was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of cross-sell products."""
  crosssell_products: [ProductInterface]
  csr_required: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  default_classification: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: ComplexTextValue
  description_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_3: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_disclaimer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_classification: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether the bundle product has a dynamic price."""
  dynamic_price: Boolean

  """Indicates whether the bundle product has a dynamic SKU."""
  dynamic_sku: Boolean

  """
  Indicates whether the bundle product has a dynamically calculated weight.
  """
  dynamic_weight: Boolean
  effective_end_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_time_utc: String
  effective_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_start_time_utc: String
  element_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  element_type_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  entity_id: Int

  """An array of related Addons."""
  excluded_packages: [ExcludedPackagesDetail]
  fine_print: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether a gift message is available."""
  gift_message_available: String

  """An array of related child products."""
  grouped_child_products: [GroupDetail]
  has_partner_skus: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  hide_display: Boolean

  """The ID number assigned to the product."""
  id: Int @deprecated(reason: "Use the \`uid\` field instead.")
  identifier: String

  """The relative path to the main image on the product page."""
  image: ProductImage

  """The relative path to the main image on the product page."""
  images: [ProductImage]
  instructional: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  is_grandfathered: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether the product can be returned."""
  is_returnable: String
  item_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array containing information about individual bundle items."""
  items: [BundleItem]
  line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  lite_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A number representing the product's manufacturer."""
  manufacturer: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of media gallery objects."""
  media_gallery: [MediaGalleryInterface]

  """An array of MediaGalleryEntry objects."""
  media_gallery_entries: [MediaGalleryEntry] @deprecated(reason: "Use \`media_gallery\` instead.")

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: String

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: String

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: String
  migrated_to: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  minutes: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  move_id: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product name. Customers use this name to identify the product."""
  name: String

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  new_from_date: String

  """The end date for new product listings."""
  new_to_date: String

  """The value assigned to the Only X Left Threshold option in the Admin."""
  only_x_left_in_stock: Float

  """An array of options for a customizable product."""
  options: [CustomizableOptionInterface]

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: String
  ota_qual_indoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_none: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_outdoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  package_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  partner_platforms: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  pkg_service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  plan_offer_price: String
  plan_package_price: String
  plan_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates the price of an item."""
  price: ProductPrices @deprecated(reason: "Use \`price_range\` for product price information.")

  """The range of prices for the product"""
  price_range: PriceRange!

  """An array of \`TierPrice\` objects."""
  price_tiers: [TierPrice]

  """One of PRICE_RANGE or AS_LOW_AS."""
  price_view: PriceViewEnum
  priority: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of \`ProductLinks\` objects."""
  product_links: [ProductLinksInterface]
  promo: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The average of all the ratings given to the product."""
  rating_summary: Float!

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!
  reg_price: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  regional_price_package: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related products."""
  related_products: [ProductInterface]

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """The total count of all the reviews given to the product."""
  review_count: Int!

  """The list of products reviews."""
  reviews(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): ProductReviews!
  selection_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether to ship bundle items together or individually."""
  ship_bundle_items: ShipBundleItemsEnum

  """A short description of the product. Its use depends on the theme."""
  short_description: ComplexTextValue

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: String
  sling_channel_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_product_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the small image, which is used on catalog pages."""
  small_image: ProductImage

  """The beginning date that a product has a special price."""
  special_from_date: String @deprecated(reason: "The field should not be used on the storefront.")

  """The discounted price of the product."""
  special_price: Float

  """The end date for a product with a special price."""
  special_to_date: String

  """Indicates whether the product is staged for a future campaign."""
  staged: Boolean!
  status: String

  """The stock status of the product."""
  stock_status: ProductStockStatus
  supported_apps: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the product's thumbnail image."""
  thumbnail: ProductImage

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: Float @deprecated(reason: "Use \`price_tiers\` for product tier price information.")

  """An array of ProductTierPrices objects."""
  tier_prices: [ProductTierPrices] @deprecated(reason: "Use \`price_tiers\` for product tier price information.")
  trial_offer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_sms_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Category Type"""
  type: String

  """
  One of simple, virtual, bundle, downloadable, grouped, or configurable.
  """
  type_id: String @deprecated(reason: "Use \`__typename\` instead.")

  """The unique ID for a \`ProductInterface\` object."""
  uid: ID!

  """Timestamp indicating when the product was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of up-sell products."""
  upsell_products: [ProductInterface]

  """The part of the URL that identifies the product"""
  url_key: String
  url_path: String @deprecated(reason: "Use product's \`canonical_url\` or url rewrites instead")

  """URL rewrites list"""
  url_rewrites: [UrlRewrite]

  """The part of the product URL that is appended after the url key"""
  url_suffix: String
  user_controlled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of websites in which the product is available."""
  websites: [Website] @deprecated(reason: "The field should not be used on the storefront.")

  """The weight of the item, in units defined by the store."""
  weight: Float
}

"""
Defines whether a bundle product's price is displayed as the lowest possible value or as a range.
"""
enum PriceViewEnum {
  """"""
  PRICE_RANGE @deprecated(reason: "")

  """"""
  AS_LOW_AS @deprecated(reason: "")
}

"""Defines whether bundle items must be shipped together."""
enum ShipBundleItemsEnum {
  """"""
  TOGETHER @deprecated(reason: "")

  """"""
  SEPARATELY @deprecated(reason: "")
}

"""Defines bundle product options for \`OrderItemInterface\`."""
type BundleOrderItem implements OrderItemInterface {
  """A list of bundle options that are assigned to the bundle product."""
  bundle_options: [ItemSelectedBundleOption]

  """The final discount information for the product."""
  discounts: [Discount]

  """
  Indicates whether the order item is eligible to be in a return request.
  """
  eligible_for_return: Boolean

  """The entered option for the base product, such as a logo or image."""
  entered_options: [OrderItemOption]

  """The selected gift message for the order item"""
  gift_message: GiftMessage

  """The unique ID for an \`OrderItemInterface\` object."""
  id: ID!

  """The name of the base product."""
  product_name: String

  """The sale price of the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The type of product, such as simple, configurable, etc."""
  product_type: String

  """URL key of the base product."""
  product_url_key: String

  """The number of canceled items."""
  quantity_canceled: Float

  """The number of invoiced items."""
  quantity_invoiced: Float

  """The number of units ordered for this item."""
  quantity_ordered: Float

  """The number of refunded items."""
  quantity_refunded: Float

  """The number of returned items."""
  quantity_returned: Float

  """The number of shipped items."""
  quantity_shipped: Float

  """The selected options for the base product, such as color or size."""
  selected_options: [OrderItemOption]

  """The status of the order item."""
  status: String
}

"""Defines bundle product options for \`InvoiceItemInterface\`."""
type BundleInvoiceItem implements InvoiceItemInterface {
  """
  A list of bundle options that are assigned to an invoiced bundle product.
  """
  bundle_options: [ItemSelectedBundleOption]

  """
  Information about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """The unique ID for an \`InvoiceItemInterface\` object."""
  id: ID!

  """Details about an individual order item."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of invoiced items."""
  quantity_invoiced: Float
}

"""Defines bundle product options for \`ShipmentItemInterface\`."""
type BundleShipmentItem implements ShipmentItemInterface {
  """A list of bundle options that are assigned to a shipped product."""
  bundle_options: [ItemSelectedBundleOption]

  """The unique ID for a \`ShipmentItemInterface\` object."""
  id: ID!

  """The order item associated with the shipment item."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of shipped items."""
  quantity_shipped: Float!
}

"""Defines bundle product options for \`CreditMemoItemInterface\`."""
type BundleCreditMemoItem implements CreditMemoItemInterface {
  """
  A list of bundle options that are assigned to a bundle product that is part of a credit memo.
  """
  bundle_options: [ItemSelectedBundleOption]

  """
  Details about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """The unique ID for a \`CreditMemoItemInterface\` object."""
  id: ID!

  """The order item the credit memo is applied to."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of refunded items."""
  quantity_refunded: Float
}

"""A list of options of the selected bundle product."""
type ItemSelectedBundleOption {
  """The unique ID for a \`ItemSelectedBundleOption\` object."""
  id: ID! @deprecated(reason: "Use \`uid\` instead.")

  """The label of the option."""
  label: String!

  """The unique ID for a \`ItemSelectedBundleOption\` object."""
  uid: ID!

  """A list of products that represent the values of the parent option."""
  values: [ItemSelectedBundleOptionValue]
}

"""A list of values for the selected bundle product."""
type ItemSelectedBundleOptionValue {
  """The unique ID for a \`ItemSelectedBundleOptionValue\` object."""
  id: ID! @deprecated(reason: "Use \`uid\` instead.")

  """The price of the child bundle product."""
  price: Money!

  """The name of the child bundle product."""
  product_name: String!

  """The SKU of the child bundle product."""
  product_sku: String!

  """The number of this bundle product that were ordered."""
  quantity: Float!

  """The unique ID for a \`ItemSelectedBundleOptionValue\` object."""
  uid: ID!
}

"""Defines bundle product options for \`WishlistItemInterface\`."""
type BundleWishlistItem implements WishlistItemInterface {
  """The date and time the item was added to the wish list."""
  added_at: String!

  """An array containing information about the selected bundle items."""
  bundle_options: [SelectedBundleOption]

  """Custom options selected for the wish list item."""
  customizable_options: [SelectedCustomizableOption]!

  """The description of the item."""
  description: String

  """The unique ID for a \`WishlistItemInterface\` object."""
  id: ID!

  """Product details of the wish list item."""
  product: ProductInterface

  """The quantity of this wish list item."""
  quantity: Float!
}

""""""
type Currency {
  """
  An array of three-letter currency codes accepted by the store, such as USD and EUR.
  """
  available_currency_codes: [String]

  """The base currency set for the store, such as USD."""
  base_currency_code: String

  """The symbol for the specified base currency, such as $."""
  base_currency_symbol: String
  default_display_currecy_code: String @deprecated(reason: "Symbol was missed. Use \`default_display_currency_code\`.")
  default_display_currecy_symbol: String @deprecated(reason: "Symbol was missed. Use \`default_display_currency_code\`.")

  """The currency that is displayed by default, such as USD."""
  default_display_currency_code: String

  """The currency symbol that is displayed by default, such as $."""
  default_display_currency_symbol: String

  """An array of exchange rates for currencies defined in the store."""
  exchange_rates: [ExchangeRate]
}

"""Lists the exchange rate."""
type ExchangeRate {
  """Specifies the store’s default currency to exchange to."""
  currency_to: String

  """The exchange rate for the store’s default currency."""
  rate: Float
}

""""""
type Country {
  """An array of regions within a particular country."""
  available_regions: [Region]

  """The name of the country in English."""
  full_name_english: String

  """The name of the country in the current locale."""
  full_name_locale: String

  """The unique ID for a \`Country\` object."""
  id: String

  """The three-letter abbreviation of the country, such as USA."""
  three_letter_abbreviation: String

  """The two-letter abbreviation of the country, such as US."""
  two_letter_abbreviation: String
}

""""""
type Region {
  """The two-letter code for the region, such as TX for Texas."""
  code: String

  """The unique ID for a \`Region\` object."""
  id: Int

  """The name of the region, such as Texas."""
  name: String
}

"""Contains a list of downloadable products."""
type CustomerDownloadableProducts {
  """An array of purchased downloadable items."""
  items: [CustomerDownloadableProduct]
}

"""Contains details about a single downloadable product."""
type CustomerDownloadableProduct {
  """The date and time the purchase was made."""
  date: String

  """The fully qualified URL to the download file."""
  download_url: String

  """The unique ID assigned to the item."""
  order_increment_id: String

  """The remaining number of times the customer can download the product."""
  remaining_downloads: String

  """
  Indicates when the product becomes available for download. Options are \`Pending\` and \`Invoiced\`.
  """
  status: String
}

"""
Deprecated. Use \`TierPrice\` instead. Defines a tier price, which is a quantity discount offered to a specific customer group.
"""
type ProductTierPrices {
  """The ID of the customer group."""
  customer_group_id: String @deprecated(reason: "Not relevant for the storefront.")

  """The percentage discount of the item."""
  percentage_value: Float @deprecated(reason: "Use \`TierPrice.discount\` instead.")

  """
  The number of items that must be purchased to qualify for tier pricing.
  """
  qty: Float @deprecated(reason: "Use \`TierPrice.quantity\` instead.")

  """The price of the fixed price item."""
  value: Float @deprecated(reason: "Use \`TierPrice.final_price\` instead.")

  """The ID assigned to the website."""
  website_id: Float @deprecated(reason: "Not relevant for the storefront.")
}

"""Defines a price based on the quantity purchased."""
type TierPrice {
  """The price discount that this tier represents."""
  discount: ProductDiscount

  """The price of the product at this tier."""
  final_price: Money

  """
  The minimum number of items that must be purchased to qualify for this price tier.
  """
  quantity: Float
}

"""Defines the input required to run the applyGiftCardToCart mutation"""
input ApplyGiftCardToCartInput {
  """The unique ID that identifies the customer's cart"""
  cart_id: String!

  """The gift card code to be applied to the cart"""
  gift_card_code: String!
}

"""Defines the possible output for the applyGiftCardToCart mutation"""
type ApplyGiftCardToCartOutput {
  """Describes the contents of the specified shopping cart"""
  cart: Cart!

  """Get gift card response, which specifies the applied gift card codes"""
  gift_card_status_response: String
}

"""Defines the input required to run the removeGiftCardFromCart mutation"""
input RemoveGiftCardFromCartInput {
  """The unique ID that identifies the customer's cart"""
  cart_id: String!

  """The gift card code to be removed to the cart"""
  gift_card_code: String!
}

"""Defines the possible output for the removeGiftCardFromCart mutation"""
type RemoveGiftCardFromCartOutput {
  """Describes the contents of the specified shopping cart"""
  cart: Cart!
}

"""Contains the applied gift card with applied and remaining balance"""
type AppliedGiftCard {
  """Applied balance to the current cart"""
  applied_balance: Money

  """Gift card account code"""
  code: String

  """Current balance remaining on gift card"""
  current_balance: Money

  """Gift card expiration date"""
  expiration_date: String
}

"""Contains the gift card code."""
input GiftCardAccountInput {
  """The applied gift card code."""
  gift_card_code: String!
}

"""Contains details about the gift card account."""
type GiftCardAccount {
  """The balance remaining on the gift card."""
  balance: Money

  """The gift card account code."""
  code: String

  """The expiration date of the gift card."""
  expiration_date: String
}

"""
Contains details about the sales total amounts used to calculate the final price.
"""
type OrderTotal {
  """The final base grand total amount in the base currency."""
  base_grand_total: Money!

  """The applied discounts to the order."""
  discounts: [Discount]

  """The final total amount, including shipping, discounts, and taxes."""
  grand_total: Money!

  """Details about the shipping and handling costs for the order."""
  shipping_handling: ShippingHandling

  """The subtotal of the order, excluding shipping, discounts, and taxes."""
  subtotal: Money!

  """The order tax details."""
  taxes: [TaxItem]

  """The gift card balance applied to the order."""
  total_giftcard: Money

  """The shipping amount for the order."""
  total_shipping: Money!

  """The amount of tax applied to the order."""
  total_tax: Money!
}

"""Deprecated: Use the \`Wishlist\` type instead."""
type WishlistOutput {
  """An array of items in the customer's wish list"""
  items: [WishlistItem] @deprecated(reason: "Use the \`Wishlist.items\` field instead.")

  """The number of items in the wish list."""
  items_count: Int @deprecated(reason: "Use the \`Wishlist.items_count\` field instead.")

  """
  When multiple wish lists are enabled, the name the customer assigns to the wishlist.
  """
  name: String @deprecated(reason: "This field is related to Commerce functionality and is always \`null\` in Open Source.")

  """An encrypted code that links to the wish list."""
  sharing_code: String @deprecated(reason: "Use the \`Wishlist.sharing_code\` field instead.")

  """The time of the last modification to the wish list."""
  updated_at: String @deprecated(reason: "Use the \`Wishlist.updated_at\` field instead.")
}

"""Contains a customer wish list."""
type Wishlist {
  """The unique ID for a \`Wishlist\` object."""
  id: ID
  items: [WishlistItem] @deprecated(reason: "Use the \`items_v2\` field instead.")

  """The number of items in the wish list."""
  items_count: Int

  """An array of items in the customer's wish list."""
  items_v2(currentPage: Int = 1, pageSize: Int = 20): WishlistItems

  """The name of the wish list."""
  name: String

  """An encrypted code that Magento uses to link to the wish list."""
  sharing_code: String

  """The time of the last modification to the wish list."""
  updated_at: String

  """Indicates whether the wish list is public or private."""
  visibility: WishlistVisibilityEnum!
}

"""The interface for wish list items."""
interface WishlistItemInterface {
  """The date and time the item was added to the wish list."""
  added_at: String!

  """Custom options selected for the wish list item."""
  customizable_options: [SelectedCustomizableOption]!

  """The description of the item."""
  description: String

  """The unique ID for a \`WishlistItemInterface\` object."""
  id: ID!

  """Product details of the wish list item."""
  product: ProductInterface

  """The quantity of this wish list item."""
  quantity: Float!
}

"""Contains an array of items in a wish list."""
type WishlistItems {
  """A list of items in the wish list."""
  items: [WishlistItemInterface]!

  """Contains pagination metadata."""
  page_info: SearchResultPageInfo
}

"""Contains details about a wish list item."""
type WishlistItem {
  """The time when the customer added the item to the wish list."""
  added_at: String

  """The customer's comment about this item."""
  description: String

  """The unique ID for a \`WishlistItem\` object."""
  id: Int

  """Details about the wish list item."""
  product: ProductInterface

  """The quantity of this wish list item"""
  qty: Float
}

"""Contains the resultant wish list and any error information."""
type AddWishlistItemsToCartOutput {
  """
  An array of errors encountered while adding products to the customer's cart.
  """
  add_wishlist_items_to_cart_user_errors: [WishlistCartUserInputError]!

  """
  Indicates whether the attempt to add items to the customer's cart was successful.
  """
  status: Boolean!

  """Contains the wish list with all items that were successfully added."""
  wishlist: Wishlist!
}

"""
Contains details about errors encountered when a customer added wish list items to the cart.
"""
type WishlistCartUserInputError {
  """An error code that describes the error encountered."""
  code: WishlistCartUserInputErrorType!

  """A localized error message."""
  message: String!

  """The unique ID of the \`Wishlist\` object containing an error."""
  wishlistId: ID!

  """The unique ID of the wish list item containing an error."""
  wishlistItemId: ID!
}

"""A list of possible error types."""
enum WishlistCartUserInputErrorType {
  """"""
  PRODUCT_NOT_FOUND @deprecated(reason: "")

  """"""
  NOT_SALABLE @deprecated(reason: "")

  """"""
  INSUFFICIENT_STOCK @deprecated(reason: "")

  """"""
  UNDEFINED @deprecated(reason: "")
}

"""Defines the items to add to a wish list."""
input WishlistItemInput {
  """An array of options that the customer entered."""
  entered_options: [EnteredOptionInput]

  """For complex product types, the SKU of the parent product."""
  parent_sku: String

  """The amount or number of items to add."""
  quantity: Float!

  """An array of strings corresponding to options the customer selected."""
  selected_options: [ID]

  """
  The SKU of the product to add. For complex product types, specify the child product SKU.
  """
  sku: String!
}

"""Contains the customer's wish list and any errors encountered."""
type AddProductsToWishlistOutput {
  """An array of errors encountered while adding products to a wish list."""
  user_errors: [WishListUserInputError]!

  """Contains the wish list with all items that were successfully added."""
  wishlist: Wishlist!
}

"""Contains the customer's wish list and any errors encountered."""
type RemoveProductsFromWishlistOutput {
  """
  An array of errors encountered while deleting products from a wish list.
  """
  user_errors: [WishListUserInputError]!

  """Contains the wish list with after items were successfully deleted."""
  wishlist: Wishlist!
}

"""Defines updates to items in a wish list."""
input WishlistItemUpdateInput {
  """Customer-entered comments about the item."""
  description: String

  """An array of options that the customer entered."""
  entered_options: [EnteredOptionInput]

  """The new amount or number of this item."""
  quantity: Float

  """An array of strings corresponding to options the customer selected."""
  selected_options: [ID]

  """The unique ID for a \`WishlistItemInterface\` object."""
  wishlist_item_id: ID!
}

"""Contains the customer's wish list and any errors encountered."""
type UpdateProductsInWishlistOutput {
  """An array of errors encountered while updating products in a wish list."""
  user_errors: [WishListUserInputError]!

  """Contains the wish list with all items that were successfully updated."""
  wishlist: Wishlist!
}

"""An error encountered while performing operations with WishList."""
type WishListUserInputError {
  """A wish list-specific error code."""
  code: WishListUserInputErrorType!

  """A localized error message."""
  message: String!
}

"""A list of possible error types."""
enum WishListUserInputErrorType {
  """"""
  PRODUCT_NOT_FOUND @deprecated(reason: "")

  """"""
  UNDEFINED @deprecated(reason: "")
}

"""An implementation for configurable product cart items."""
type ConfigurableCartItem implements CartItemInterface {
  """Action type A/R/E"""
  action_type: String!

  """1 or 0"""
  auto_entitled: String!

  """An array containing the configuranle options the shopper selected."""
  configurable_options: [SelectedConfigurableOption]!

  """Product details of the cart item."""
  configured_variant: ProductInterface!

  """An array containing the customizable options the shopper selected."""
  customizable_options: [SelectedCustomizableOption]!

  """Now OR End of cycle."""
  cycle_type: String!

  """1 or 0"""
  display_in_cart: String!

  """An array of errors encountered while loading the cart item"""
  errors: [CartItemError]

  """The entered gift message for the cart item"""
  gift_message: GiftMessage
  id: String! @deprecated(reason: "Use \`uid\` instead.")
  package_type: String!

  """Parent sku of childs"""
  parent_sku: String

  """Plan package price"""
  plan_package_price: String!

  """Subscription price"""
  price_for_subscription: String!

  """
  Contains details about the price of the item, including taxes and discounts.
  """
  prices: CartItemPrices

  """Details about an item in the cart."""
  product: ProductInterface!

  """Custom price - Final Price"""
  prorated_price: String!

  """The quantity of this item in the cart."""
  quantity: Float!

  """The unique ID for a \`CartItemInterface\` object."""
  uid: ID!
}

"""Contains the text of a gift message, its sender, and recipient"""
type GiftMessage {
  """Sender name"""
  from: String!

  """Gift message text"""
  message: String!

  """Recipient name"""
  to: String!
}

"""Contains the text of a gift message, its sender, and recipient"""
input GiftMessageInput {
  """Sender name"""
  from: String!

  """Gift message text"""
  message: String!

  """Recipient name"""
  to: String!
}

""""""
type SalesItemInterface {
  """The entered gift message for the order item"""
  gift_message: GiftMessage
}

"""Contains details about each of the customer's orders."""
type CustomerOrder {
  """The billing address for the order."""
  billing_address: OrderAddress

  """The shipping carrier for the order delivery."""
  carrier: String

  """Comments about the order."""
  comments: [SalesCommentItem]
  created_at: String @deprecated(reason: "Use the \`order_date\` field instead.")

  """A list of credit memos."""
  credit_memos: [CreditMemo]

  """The entered gift message for the order"""
  gift_message: GiftMessage
  grand_total: Float @deprecated(reason: "Use the \`totals.grand_total\` field instead.")

  """The unique ID for a \`CustomerOrder\` object."""
  id: ID!
  increment_id: String @deprecated(reason: "Use the \`id\` field instead.")

  """A list of invoices for the order."""
  invoices: [Invoice]!

  """An array containing the items purchased in this order."""
  items: [OrderItemInterface]

  """A list of order items eligible to be in a return request."""
  items_eligible_for_return: [OrderItemInterface]

  """The order number."""
  number: String!

  """The date the order was placed."""
  order_date: String!
  order_number: String! @deprecated(reason: "Use the \`number\` field instead.")

  """Payment details for the order."""
  payment_methods: [OrderPaymentMethod]

  """Return requests associated with this order."""
  returns(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): Returns

  """A list of shipments for the order."""
  shipments: [OrderShipment]

  """The shipping address for the order."""
  shipping_address: OrderAddress

  """The delivery method for the order."""
  shipping_method: String

  """The current status of the order."""
  status: String!

  """Details about the calculated totals for this order."""
  total: OrderTotal
}

"""Order item details."""
interface OrderItemInterface {
  """The final discount information for the product."""
  discounts: [Discount]

  """
  Indicates whether the order item is eligible to be in a return request.
  """
  eligible_for_return: Boolean

  """The entered option for the base product, such as a logo or image."""
  entered_options: [OrderItemOption]

  """The selected gift message for the order item"""
  gift_message: GiftMessage

  """The unique ID for an \`OrderItemInterface\` object."""
  id: ID!

  """The name of the base product."""
  product_name: String

  """The sale price of the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The type of product, such as simple, configurable, etc."""
  product_type: String

  """URL key of the base product."""
  product_url_key: String

  """The number of canceled items."""
  quantity_canceled: Float

  """The number of invoiced items."""
  quantity_invoiced: Float

  """The number of units ordered for this item."""
  quantity_ordered: Float

  """The number of refunded items."""
  quantity_refunded: Float

  """The number of returned items."""
  quantity_returned: Float

  """The number of shipped items."""
  quantity_shipped: Float

  """The selected options for the base product, such as color or size."""
  selected_options: [OrderItemOption]

  """The status of the order item."""
  status: String
}

"""Contains the results of a gift registry search."""
type GiftRegistrySearchResult {
  """The date of the event."""
  event_date: String

  """The title given to the event."""
  event_title: String!

  """The URL key of the gift registry."""
  gift_registry_uid: ID!

  """The location of the event."""
  location: String

  """The name of the gift registry owner."""
  name: String!

  """The type of event being held."""
  type: String
}

"""Defines a dynamic attribute."""
input GiftRegistryDynamicAttributeInput {
  """A unique key for an additional attribute of the event."""
  code: ID!

  """A string that describes a dynamic attribute."""
  value: String!
}

"""Defines the sender of an invitation to view a gift registry."""
input ShareGiftRegistrySenderInput {
  """A brief message from the sender."""
  message: String!

  """The sender of the gift registry invitation."""
  name: String!
}

"""Defines a gift registry invitee."""
input ShareGiftRegistryInviteeInput {
  """The email address of the gift registry invitee."""
  email: String!

  """The name of the gift registry invitee."""
  name: String!
}

"""Defines an item to add to the gift registry."""
input AddGiftRegistryItemInput {
  """An array of options the customer has entered."""
  entered_options: [EnteredOptionInput]

  """A brief note about the item."""
  note: String

  """For complex product types, the SKU of the parent product."""
  parent_sku: String

  """The quantity of the product to add."""
  quantity: Float!

  """
  An array of strings corresponding to options the customer has selected.
  """
  selected_options: [String]

  """The SKU of the product to add to the gift registry."""
  sku: String!
}

"""Defines a new gift registry."""
input CreateGiftRegistryInput {
  """Additional attributes specified as a code-value pair."""
  dynamic_attributes: [GiftRegistryDynamicAttributeInput]

  """The name of the event."""
  event_name: String!

  """The ID of the selected event type."""
  gift_registry_type_uid: ID!

  """A message describing the event."""
  message: String!

  """Indicates whether the registry is PRIVATE or PUBLIC."""
  privacy_settings: GiftRegistryPrivacySettings!

  """The list of people who receive notifications about the registry."""
  registrants: [AddGiftRegistryRegistrantInput]!

  """The shipping address for all gift registry items."""
  shipping_address: GiftRegistryShippingAddressInput

  """Indicates whether the registry is ACTIVE or INACTIVE."""
  status: GiftRegistryStatus!
}

"""Defines updates to an item in a gift registry."""
input UpdateGiftRegistryItemInput {
  """The unique ID of a \`giftRegistryItem\` object."""
  gift_registry_item_uid: ID!

  """The updated description of the item."""
  note: String

  """The updated quantity of the gift registry item."""
  quantity: Float!
}

"""Defines updates to a \`GiftRegistry\` object."""
input UpdateGiftRegistryInput {
  """
  Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed.
  """
  dynamic_attributes: [GiftRegistryDynamicAttributeInput]

  """The updated name of the event."""
  event_name: String

  """The updated message describing the event."""
  message: String

  """Indicates whether the gift registry is PRIVATE or PUBLIC."""
  privacy_settings: GiftRegistryPrivacySettings

  """The updated shipping address for all gift registry items."""
  shipping_address: GiftRegistryShippingAddressInput

  """Indicates whether the gift registry is ACTIVE or INACTIVE."""
  status: GiftRegistryStatus
}

"""Defines a new registrant."""
input AddGiftRegistryRegistrantInput {
  """Additional attributes specified as a code-value pair."""
  dynamic_attributes: [GiftRegistryDynamicAttributeInput]

  """The email address of the registrant."""
  email: String!

  """The first name of the registrant."""
  firstname: String!

  """The last name of the registrant."""
  lastname: String!
}

"""
Defines a shipping address for a gift registry. Specify either \`address_data\` or the \`address_id\`. If both are provided, validation will fail.
"""
input GiftRegistryShippingAddressInput {
  """Defines the shipping address for this gift registry."""
  address_data: CustomerAddressInput

  """The ID assigned to this customer address."""
  address_id: ID
}

"""Defines updates to an existing registrant."""
input UpdateGiftRegistryRegistrantInput {
  """
  As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed.
  """
  dynamic_attributes: [GiftRegistryDynamicAttributeInput]

  """The updated email address of the registrant."""
  email: String

  """The updated first name of the registrant."""
  firstname: String

  """The unique ID of a \`giftRegistryRegistrant\` object."""
  gift_registry_registrant_uid: ID!

  """The updated last name of the registrant."""
  lastname: String
}

"""Contains the customer's gift registry."""
interface GiftRegistryOutputInterface {
  """The gift registry."""
  gift_registry: GiftRegistry
}

"""Contains details about the gift registry."""
type GiftRegistryOutput implements GiftRegistryOutputInterface {
  """The gift registry."""
  gift_registry: GiftRegistry
}

"""
Contains the status and any errors that encountered with the customer's gift register item.
"""
interface GiftRegistryItemUserErrorInterface {
  """
  Indicates whether the attempt to move the cart items to the gift registry was successful.
  """
  status: Boolean!

  """
  An array of errors encountered while moving items from the cart to the gift registry.
  """
  user_errors: [GiftRegistryItemsUserError]!
}

"""Contains error information."""
type GiftRegistryItemUserErrors implements GiftRegistryItemUserErrorInterface {
  """
  Indicates whether the attempt to move the cart items to the gift registry was successful.
  """
  status: Boolean!

  """
  An array of errors encountered while moving items from the cart to the gift registry.
  """
  user_errors: [GiftRegistryItemsUserError]!
}

"""
Contains details about an error that occurred when processing a gift registry item.
"""
type GiftRegistryItemsUserError {
  """An error code that describes the error encountered."""
  code: GiftRegistryItemsUserErrorType!

  """The unique ID of the gift registry item containing an error."""
  gift_registry_item_uid: ID

  """The unique ID of the \`GiftRegistry\` object containing an error."""
  gift_registry_uid: ID

  """A localized error message."""
  message: String!

  """The unique ID of the product containing an error."""
  product_uid: ID
}

"""Defines the error type."""
enum GiftRegistryItemsUserErrorType {
  """Used for handling out of stock products."""
  OUT_OF_STOCK @deprecated(reason: "")

  """Used for exceptions like EntityNotFound."""
  NOT_FOUND @deprecated(reason: "")

  """Used for other exceptions, such as database connection failures."""
  UNDEFINED @deprecated(reason: "")
}

"""Contains the customer's gift registry and any errors encountered."""
type MoveCartItemsToGiftRegistryOutput implements GiftRegistryOutputInterface & GiftRegistryItemUserErrorInterface {
  """The gift registry."""
  gift_registry: GiftRegistry

  """
  Indicates whether the attempt to move the cart items to the gift registry was successful.
  """
  status: Boolean!

  """
  An array of errors encountered while moving items from the cart to the gift registry.
  """
  user_errors: [GiftRegistryItemsUserError]!
}

"""Contains the results of a request to delete a gift registry."""
type RemoveGiftRegistryOutput {
  """Indicates whether the gift registry was successfully deleted."""
  success: Boolean!
}

"""
Contains the results of a request to remove an item from a gift registry.
"""
type RemoveGiftRegistryItemsOutput {
  """The gift registry after removing items."""
  gift_registry: GiftRegistry
}

"""Contains the results of a request to update gift registry items."""
type UpdateGiftRegistryItemsOutput {
  """The gift registry after updating updating items."""
  gift_registry: GiftRegistry
}

"""Contains the results of a request to share a gift registry."""
type ShareGiftRegistryOutput {
  """Indicates whether the gift registry was successfully shared."""
  is_shared: Boolean!
}

"""Contains the results of a request to create a gift registry."""
type CreateGiftRegistryOutput {
  """The newly-created gift registry."""
  gift_registry: GiftRegistry
}

"""Contains the results of a request to update a gift registry."""
type UpdateGiftRegistryOutput {
  """The updated gift registry."""
  gift_registry: GiftRegistry
}

"""Contains the results of a request to add registrants."""
type AddGiftRegistryRegistrantsOutput {
  """The gift registry after adding registrants."""
  gift_registry: GiftRegistry
}

"""Contains the results a request to update registrants."""
type UpdateGiftRegistryRegistrantsOutput {
  """The gift registry after updating registrants."""
  gift_registry: GiftRegistry
}

"""Contains the results of a request to delete a registrant."""
type RemoveGiftRegistryRegistrantsOutput {
  """The gift registry after deleting registrants."""
  gift_registry: GiftRegistry
}

"""Contains details about a gift registry."""
type GiftRegistry {
  """
  The date on which the gift registry was created. Only the registry owner can access this attribute.
  """
  created_at: String!

  """
  An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair.
  """
  dynamic_attributes: [GiftRegistryDynamicAttribute]

  """The name of the event."""
  event_name: String!

  """An array of products added to the gift registry."""
  items: [GiftRegistryItemInterface]

  """The message text the customer entered to describe the event."""
  message: String!

  """The customer who created the gift registry."""
  owner_name: String!

  """
  An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute.
  """
  privacy_settings: GiftRegistryPrivacySettings!

  """Contains details about each registrant for the event."""
  registrants: [GiftRegistryRegistrant]

  """
  Contains the customer's shipping address. Only the registry owner can access this attribute.
  """
  shipping_address: CustomerAddress

  """
  An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute.
  """
  status: GiftRegistryStatus!

  """The type of gift registry."""
  type: GiftRegistryType

  """The unique ID assigned to the gift registry."""
  uid: ID!
}

"""Contains details about a gift registry type."""
type GiftRegistryType {
  """
  An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair.
  """
  dynamic_attributes_metadata: [GiftRegistryDynamicAttributeMetadataInterface]

  """The label assigned to the gift registry type on the Admin."""
  label: String!

  """The unique ID assigned to the gift registry type."""
  uid: ID!
}

""""""
interface GiftRegistryDynamicAttributeMetadataInterface {
  """Indicates which group the dynamic attribute a member of."""
  attribute_group: String!

  """The internal ID of the dynamic attribute."""
  code: ID!

  """
  The selected input type for this dynamic attribute. The value can be one of several static or custom types.
  """
  input_type: String!

  """Indicates whether the dynamic attribute is required."""
  is_required: Boolean!

  """The display name of the dynamic attribute."""
  label: String!

  """The order in which to display the dynamic attribute."""
  sort_order: Int
}

""""""
type GiftRegistryDynamicAttributeMetadata implements GiftRegistryDynamicAttributeMetadataInterface {
  """Indicates which group the dynamic attribute a member of."""
  attribute_group: String!

  """The internal ID of the dynamic attribute."""
  code: ID!

  """
  The selected input type for this dynamic attribute. The value can be one of several static or custom types.
  """
  input_type: String!

  """Indicates whether the dynamic attribute is required."""
  is_required: Boolean!

  """The display name of the dynamic attribute."""
  label: String!

  """The order in which to display the dynamic attribute."""
  sort_order: Int
}

"""Defines the status of the gift registry."""
enum GiftRegistryStatus {
  """"""
  ACTIVE @deprecated(reason: "")

  """"""
  INACTIVE @deprecated(reason: "")
}

"""Defines the privacy setting of the gift registry."""
enum GiftRegistryPrivacySettings {
  """"""
  PRIVATE @deprecated(reason: "")

  """"""
  PUBLIC @deprecated(reason: "")
}

"""Contains details about a registrant."""
type GiftRegistryRegistrant {
  """An array of dynamic attributes assigned to the registrant."""
  dynamic_attributes: [GiftRegistryRegistrantDynamicAttribute]

  """
  The email address of the registrant. Only the registry owner can access this attribute.
  """
  email: String!

  """The first name of the registrant."""
  firstname: String!

  """The last name of the registrant."""
  lastname: String!

  """The unique ID assigned to the registrant."""
  uid: ID!
}

""""""
interface GiftRegistryDynamicAttributeInterface {
  """The internal ID of the dynamic attribute."""
  code: ID!

  """The display name of the dynamic attribute."""
  label: String!

  """A corresponding value for the code."""
  value: String!
}

""""""
type GiftRegistryRegistrantDynamicAttribute implements GiftRegistryDynamicAttributeInterface {
  """The internal ID of the dynamic attribute."""
  code: ID!

  """The display name of the dynamic attribute."""
  label: String!

  """A corresponding value for the code."""
  value: String!
}

""""""
type GiftRegistryDynamicAttribute implements GiftRegistryDynamicAttributeInterface {
  """The internal ID of the dynamic attribute."""
  code: ID!

  """Indicates which group the dynamic attribute is a member of."""
  group: GiftRegistryDynamicAttributeGroup!

  """The display name of the dynamic attribute."""
  label: String!

  """A corresponding value for the code."""
  value: String!
}

"""Defines the group type of a gift registry dynamic attribute."""
enum GiftRegistryDynamicAttributeGroup {
  """"""
  EVENT_INFORMATION @deprecated(reason: "")

  """"""
  PRIVACY_SETTINGS @deprecated(reason: "")

  """"""
  REGISTRANT @deprecated(reason: "")

  """"""
  GENERAL_INFORMATION @deprecated(reason: "")

  """"""
  DETAILED_INFORMATION @deprecated(reason: "")

  """"""
  SHIPPING_ADDRESS @deprecated(reason: "")
}

""""""
interface GiftRegistryItemInterface {
  """The date the product was added to the gift registry."""
  created_at: String!

  """A brief message about the gift registry item."""
  note: String

  """Details about the gift registry item."""
  product: ProductInterface

  """The requested quantity of the product."""
  quantity: Float!

  """The fulfilled quantity of the product."""
  quantity_fulfilled: Float!

  """The unique ID of a gift registry item."""
  uid: ID!
}

""""""
type GiftRegistryItem implements GiftRegistryItemInterface {
  """The date the product was added to the gift registry."""
  created_at: String!

  """A brief message about the gift registry item."""
  note: String

  """Details about the gift registry item."""
  product: ProductInterface

  """The requested quantity of the product."""
  quantity: Float!

  """The fulfilled quantity of the product."""
  quantity_fulfilled: Float!

  """The unique ID of a gift registry item."""
  uid: ID!
}

"""
Defines a grouped product, which consists of simple standalone products that are presented as a group.
"""
type GroupedProduct implements ProductInterface & RoutableInterface & PhysicalProductInterface {
  """An array of related Addons."""
  addons: [AddonsDetail]

  """The attribute set assigned to the product."""
  attribute_set_id: Int @deprecated(reason: "The field should not be used on the storefront.")
  auto_entitled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  auto_selected: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  available_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  base_price: String
  base_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related child products."""
  bundle_child_products: [BundleDetail]

  """An array of bundle deal parts."""
  bundle_deal_parts: [BundleDealParts]
  business_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  call_sign: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  canonical_identifier: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled.
  """
  canonical_url: String

  """An array of categories."""
  categories: [CategoriesPackagesDetail]

  """An array of related products."""
  channels: [ChannelDetail]
  charge_currency: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_name: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_periodicity: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of products to be displayed in a Related Products block."""
  child_products: [ProductInterface]
  color: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product's country of origin."""
  country_of_manufacture: String

  """Timestamp indicating when the product was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of cross-sell products."""
  crosssell_products: [ProductInterface]
  csr_required: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  default_classification: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: ComplexTextValue
  description_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_3: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_disclaimer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_classification: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_time_utc: String
  effective_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_start_time_utc: String
  element_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  element_type_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  entity_id: Int

  """An array of related Addons."""
  excluded_packages: [ExcludedPackagesDetail]
  fine_print: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether a gift message is available."""
  gift_message_available: String

  """An array of related child products."""
  grouped_child_products: [GroupDetail]
  has_partner_skus: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  hide_display: Boolean

  """The ID number assigned to the product."""
  id: Int @deprecated(reason: "Use the \`uid\` field instead.")
  identifier: String

  """The relative path to the main image on the product page."""
  image: ProductImage

  """The relative path to the main image on the product page."""
  images: [ProductImage]
  instructional: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  is_grandfathered: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether the product can be returned."""
  is_returnable: String
  item_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array containing grouped product items."""
  items: [GroupedProductItem]
  line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  lite_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A number representing the product's manufacturer."""
  manufacturer: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of media gallery objects."""
  media_gallery: [MediaGalleryInterface]

  """An array of MediaGalleryEntry objects."""
  media_gallery_entries: [MediaGalleryEntry] @deprecated(reason: "Use \`media_gallery\` instead.")

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: String

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: String

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: String
  migrated_to: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  minutes: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  move_id: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product name. Customers use this name to identify the product."""
  name: String

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  new_from_date: String

  """The end date for new product listings."""
  new_to_date: String

  """The value assigned to the Only X Left Threshold option in the Admin."""
  only_x_left_in_stock: Float

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: String
  ota_qual_indoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_none: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_outdoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  package_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  partner_platforms: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  pkg_service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  plan_offer_price: String
  plan_package_price: String
  plan_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates the price of an item."""
  price: ProductPrices @deprecated(reason: "Use \`price_range\` for product price information.")

  """The range of prices for the product"""
  price_range: PriceRange!

  """An array of \`TierPrice\` objects."""
  price_tiers: [TierPrice]
  priority: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of \`ProductLinks\` objects."""
  product_links: [ProductLinksInterface]
  promo: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The average of all the ratings given to the product."""
  rating_summary: Float!

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!
  reg_price: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  regional_price_package: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related products."""
  related_products: [ProductInterface]

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """The total count of all the reviews given to the product."""
  review_count: Int!

  """The list of products reviews."""
  reviews(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): ProductReviews!
  selection_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A short description of the product. Its use depends on the theme."""
  short_description: ComplexTextValue

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: String
  sling_channel_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_product_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the small image, which is used on catalog pages."""
  small_image: ProductImage

  """The beginning date that a product has a special price."""
  special_from_date: String @deprecated(reason: "The field should not be used on the storefront.")

  """The discounted price of the product."""
  special_price: Float

  """The end date for a product with a special price."""
  special_to_date: String

  """Indicates whether the product is staged for a future campaign."""
  staged: Boolean!
  status: String

  """The stock status of the product."""
  stock_status: ProductStockStatus
  supported_apps: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the product's thumbnail image."""
  thumbnail: ProductImage

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: Float @deprecated(reason: "Use \`price_tiers\` for product tier price information.")

  """An array of ProductTierPrices objects."""
  tier_prices: [ProductTierPrices] @deprecated(reason: "Use \`price_tiers\` for product tier price information.")
  trial_offer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_sms_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Category Type"""
  type: String

  """
  One of simple, virtual, bundle, downloadable, grouped, or configurable.
  """
  type_id: String @deprecated(reason: "Use \`__typename\` instead.")

  """The unique ID for a \`ProductInterface\` object."""
  uid: ID!

  """Timestamp indicating when the product was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of up-sell products."""
  upsell_products: [ProductInterface]

  """The part of the URL that identifies the product"""
  url_key: String
  url_path: String @deprecated(reason: "Use product's \`canonical_url\` or url rewrites instead")

  """URL rewrites list"""
  url_rewrites: [UrlRewrite]

  """The part of the product URL that is appended after the url key"""
  url_suffix: String
  user_controlled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of websites in which the product is available."""
  websites: [Website] @deprecated(reason: "The field should not be used on the storefront.")

  """The weight of the item, in units defined by the store."""
  weight: Float
}

"""Contains information about an individual grouped product item."""
type GroupedProductItem {
  """The relative position of this item compared to the other group items."""
  position: Int

  """Details about this product option."""
  product: ProductInterface

  """The quantity of this grouped product item."""
  qty: Float
}

"""A grouped product wish list item."""
type GroupedProductWishlistItem implements WishlistItemInterface {
  """The date and time the item was added to the wish list."""
  added_at: String!

  """Custom options selected for the wish list item."""
  customizable_options: [SelectedCustomizableOption]!

  """The description of the item."""
  description: String

  """The unique ID for a \`WishlistItemInterface\` object."""
  id: ID!

  """Product details of the wish list item."""
  product: ProductInterface

  """The quantity of this wish list item."""
  quantity: Float!
}

"""
Defines basic features of a configurable product and its simple product variants.
"""
type ConfigurableProduct implements ProductInterface & RoutableInterface & PhysicalProductInterface & CustomizableProductInterface {
  """An array of related Addons."""
  addons: [AddonsDetail]

  """The attribute set assigned to the product."""
  attribute_set_id: Int @deprecated(reason: "The field should not be used on the storefront.")
  auto_entitled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  auto_selected: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  available_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  base_price: String
  base_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related child products."""
  bundle_child_products: [BundleDetail]

  """An array of bundle deal parts."""
  bundle_deal_parts: [BundleDealParts]
  business_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  call_sign: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  canonical_identifier: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled.
  """
  canonical_url: String

  """An array of categories."""
  categories: [CategoriesPackagesDetail]

  """An array of related products."""
  channels: [ChannelDetail]
  charge_currency: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_name: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_periodicity: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of products to be displayed in a Related Products block."""
  child_products: [ProductInterface]
  color: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of options for the configurable product."""
  configurable_options: [ConfigurableProductOptions]

  """
  An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options.
  """
  configurable_product_options_selection(configurableOptionValueUids: [ID!]): ConfigurableProductOptionsSelection

  """The product's country of origin."""
  country_of_manufacture: String

  """Timestamp indicating when the product was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of cross-sell products."""
  crosssell_products: [ProductInterface]
  csr_required: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  default_classification: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: ComplexTextValue
  description_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_3: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_disclaimer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_classification: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_time_utc: String
  effective_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_start_time_utc: String
  element_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  element_type_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  entity_id: Int

  """An array of related Addons."""
  excluded_packages: [ExcludedPackagesDetail]
  fine_print: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether a gift message is available."""
  gift_message_available: String

  """An array of related child products."""
  grouped_child_products: [GroupDetail]
  has_partner_skus: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  hide_display: Boolean

  """The ID number assigned to the product."""
  id: Int @deprecated(reason: "Use the \`uid\` field instead.")
  identifier: String

  """The relative path to the main image on the product page."""
  image: ProductImage

  """The relative path to the main image on the product page."""
  images: [ProductImage]
  instructional: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  is_grandfathered: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates whether the product can be returned."""
  is_returnable: String
  item_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  lite_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A number representing the product's manufacturer."""
  manufacturer: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of media gallery objects."""
  media_gallery: [MediaGalleryInterface]

  """An array of MediaGalleryEntry objects."""
  media_gallery_entries: [MediaGalleryEntry] @deprecated(reason: "Use \`media_gallery\` instead.")

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: String

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: String

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: String
  migrated_to: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  minutes: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  move_id: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product name. Customers use this name to identify the product."""
  name: String

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  new_from_date: String

  """The end date for new product listings."""
  new_to_date: String

  """The value assigned to the Only X Left Threshold option in the Admin."""
  only_x_left_in_stock: Float

  """An array of options for a customizable product."""
  options: [CustomizableOptionInterface]

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: String
  ota_qual_indoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_none: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_outdoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  package_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  partner_platforms: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  pkg_service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  plan_offer_price: String
  plan_package_price: String
  plan_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates the price of an item."""
  price: ProductPrices @deprecated(reason: "Use \`price_range\` for product price information.")

  """The range of prices for the product"""
  price_range: PriceRange!

  """An array of \`TierPrice\` objects."""
  price_tiers: [TierPrice]
  priority: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of \`ProductLinks\` objects."""
  product_links: [ProductLinksInterface]
  promo: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The average of all the ratings given to the product."""
  rating_summary: Float!

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!
  reg_price: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  regional_price_package: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related products."""
  related_products: [ProductInterface]

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """The total count of all the reviews given to the product."""
  review_count: Int!

  """The list of products reviews."""
  reviews(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): ProductReviews!
  selection_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A short description of the product. Its use depends on the theme."""
  short_description: ComplexTextValue

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: String
  sling_channel_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_product_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the small image, which is used on catalog pages."""
  small_image: ProductImage

  """The beginning date that a product has a special price."""
  special_from_date: String @deprecated(reason: "The field should not be used on the storefront.")

  """The discounted price of the product."""
  special_price: Float

  """The end date for a product with a special price."""
  special_to_date: String

  """Indicates whether the product is staged for a future campaign."""
  staged: Boolean!
  status: String

  """The stock status of the product."""
  stock_status: ProductStockStatus
  supported_apps: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the product's thumbnail image."""
  thumbnail: ProductImage

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: Float @deprecated(reason: "Use \`price_tiers\` for product tier price information.")

  """An array of ProductTierPrices objects."""
  tier_prices: [ProductTierPrices] @deprecated(reason: "Use \`price_tiers\` for product tier price information.")
  trial_offer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_sms_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Category Type"""
  type: String

  """
  One of simple, virtual, bundle, downloadable, grouped, or configurable.
  """
  type_id: String @deprecated(reason: "Use \`__typename\` instead.")

  """The unique ID for a \`ProductInterface\` object."""
  uid: ID!

  """Timestamp indicating when the product was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of up-sell products."""
  upsell_products: [ProductInterface]

  """The part of the URL that identifies the product"""
  url_key: String
  url_path: String @deprecated(reason: "Use product's \`canonical_url\` or url rewrites instead")

  """URL rewrites list"""
  url_rewrites: [UrlRewrite]

  """The part of the product URL that is appended after the url key"""
  url_suffix: String
  user_controlled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of simple product variants."""
  variants: [ConfigurableVariant]

  """An array of websites in which the product is available."""
  websites: [Website] @deprecated(reason: "The field should not be used on the storefront.")

  """The weight of the item, in units defined by the store."""
  weight: Float
}

"""Contains all the simple product variants of a configurable product."""
type ConfigurableVariant {
  """An array of configurable attribute options."""
  attributes: [ConfigurableAttributeOption]

  """An array of linked simple products."""
  product: SimpleProduct
}

"""Contains details about a configurable product attribute option."""
type ConfigurableAttributeOption {
  """The ID assigned to the attribute."""
  code: String

  """A string that describes the configurable attribute option."""
  label: String

  """The unique ID for a \`ConfigurableAttributeOption\` object."""
  uid: ID!

  """A unique index number assigned to the configurable product option."""
  value_index: Int
}

"""Defines configurable attributes for the specified product."""
type ConfigurableProductOptions {
  """A string that identifies the attribute."""
  attribute_code: String

  """The ID assigned to the attribute."""
  attribute_id: String @deprecated(reason: "Use \`attribute_uid\` instead.")

  """The ID assigned to the attribute."""
  attribute_id_v2: Int @deprecated(reason: "Use \`attribute_uid\` instead.")

  """The unique ID for an \`Attribute\` object."""
  attribute_uid: ID!

  """The configurable option ID number assigned by the system."""
  id: Int @deprecated(reason: "Use \`uid\` instead.")

  """A displayed string that describes the configurable product option."""
  label: String

  """A number that indicates the order in which the attribute is displayed."""
  position: Int

  """This is the same as a product's \`id\` field."""
  product_id: Int @deprecated(reason: "\`product_id\` is not needed and can be obtained from its parent.")

  """The unique ID for a \`ConfigurableProductOptions\` object."""
  uid: ID!

  """Indicates whether the option is the default."""
  use_default: Boolean

  """
  An array that defines the \`value_index\` codes assigned to the configurable product.
  """
  values: [ConfigurableProductOptionsValues]
}

"""Contains the index number assigned to a configurable product option."""
type ConfigurableProductOptionsValues {
  """The label of the product on the default store."""
  default_label: String

  """The label of the product."""
  label: String

  """The label of the product on the current store."""
  store_label: String

  """The unique ID for a \`ConfigurableProductOptionsValues\` object."""
  uid: ID

  """Indicates whether to use the default_label."""
  use_default_value: Boolean

  """A unique index number assigned to the configurable product option."""
  value_index: Int @deprecated(reason: "Use \`uid\` instead.")
}

"""Defines the configurable products to add to the cart."""
input AddConfigurableProductsToCartInput {
  """The ID of the cart."""
  cart_id: String!

  """An array of configurable products to add."""
  cart_items: [ConfigurableProductCartItemInput]!
}

"""Contains details about the cart after adding configurable products."""
type AddConfigurableProductsToCartOutput {
  """The cart after adding products."""
  cart: Cart!
}

""""""
input ConfigurableProductCartItemInput {
  """The ID and value of the option."""
  customizable_options: [CustomizableOptionInput]

  """The quantity and SKU of the configurable product."""
  data: CartItemInput!

  """The SKU of the parent configurable product."""
  parent_sku: String

  """Deprecated. Use \`CartItemInput.sku\` instead."""
  variant_sku: String
}

"""Contains details about a selected configurable option."""
type SelectedConfigurableOption {
  """The unique ID for a \`ConfigurableProductOptions\` object."""
  configurable_product_option_uid: ID!

  """The unique ID for a \`ConfigurableProductOptionsValues\` object."""
  configurable_product_option_value_uid: ID!
  id: Int! @deprecated(reason: "Use \`SelectedConfigurableOption.configurable_product_option_uid\` instead.")

  """The display text for the option."""
  option_label: String!
  value_id: Int! @deprecated(reason: "Use \`SelectedConfigurableOption.configurable_product_option_value_uid\` instead.")

  """The display name of the selected configurable option."""
  value_label: String!
}

"""A configurable product wish list item."""
type ConfigurableWishlistItem implements WishlistItemInterface {
  """The date and time the item was added to the wish list."""
  added_at: String!

  """
  The SKU of the simple product corresponding to a set of selected configurable options.
  """
  child_sku: String! @deprecated(reason: "Use \`ConfigurableWishlistItem.configured_variant.sku\` instead.")

  """An array of selected configurable options."""
  configurable_options: [SelectedConfigurableOption]

  """
  Product details of the selected variant. The value is null if some options are not configured.
  """
  configured_variant: ProductInterface

  """Custom options selected for the wish list item."""
  customizable_options: [SelectedCustomizableOption]!

  """The description of the item."""
  description: String

  """The unique ID for a \`WishlistItemInterface\` object."""
  id: ID!

  """Product details of the wish list item."""
  product: ProductInterface

  """The quantity of this wish list item."""
  quantity: Float!
}

"""Contains metadata corresponding to the selected configurable options."""
type ConfigurableProductOptionsSelection {
  """An array of all possible configurable options."""
  configurable_options: [ConfigurableProductOption]

  """
  Product images and videos corresponding to the specified configurable options selection.
  """
  media_gallery: [MediaGalleryInterface]

  """
  The configurable options available for further selection based on the current selection.
  """
  options_available_for_selection: [ConfigurableOptionAvailableForSelection]

  """
  A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option.
  """
  variant: SimpleProduct
}

"""
Describes configurable options that have been selected and can be selected as a result of the previous selections.
"""
type ConfigurableOptionAvailableForSelection {
  """An attribute code that uniquely identifies a configurable option."""
  attribute_code: String!

  """An array of selectable option value IDs."""
  option_value_uids: [ID]!
}

"""Contains details about configurable product options."""
type ConfigurableProductOption {
  """An attribute code that uniquely identifies a configurable option."""
  attribute_code: String!

  """The display name of the option."""
  label: String!

  """The unique ID of the configurable option."""
  uid: ID!

  """An array of values that are applicable for this option."""
  values: [ConfigurableProductOptionValue]
}

"""Defines a value for a configurable product option."""
type ConfigurableProductOptionValue {
  """Indicates whether the product is available with this selected option."""
  is_available: Boolean!

  """Indicates whether the value is the default."""
  is_use_default: Boolean!

  """The display name of the value."""
  label: String!

  """The unique ID of the value."""
  uid: ID!
}

"""Identifies which customer requires remote shopping assistance."""
input GenerateCustomerTokenAsAdminInput {
  """
  The email address of the customer requesting remote shopping assistance.
  """
  customer_email: String!
}

"""Contains the generated customer token."""
type GenerateCustomerTokenAsAdminOutput {
  """The generated customer token."""
  customer_token: String!
}

"""Contains the cart and any errors after adding products."""
type ReorderItemsOutput {
  """Detailed information about the customer's cart."""
  cart: Cart!

  """An array of reordering errors."""
  userInputErrors: [CheckoutUserInputError]!
}

"""An error encountered while adding an item to the cart."""
type CheckoutUserInputError {
  """An error code that is specific to Checkout."""
  code: CheckoutUserInputErrorCodes!

  """A localized error message."""
  message: String!

  """
  The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors
  """
  path: [String]!
}

"""Identifies the filter to use for filtering orders."""
input CustomerOrdersFilterInput {
  """Filters by order number."""
  number: FilterStringTypeInput
}

"""
CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order.
"""
input CustomerOrderSortInput {
  """
  This enumeration indicates whether to return results in ascending or descending order
  """
  sort_direction: SortEnum!

  """Specifies the field to use for sorting"""
  sort_field: CustomerOrderSortableField!
}

"""Specifies the field to use for sorting"""
enum CustomerOrderSortableField {
  """Sorts customer orders by number"""
  NUMBER @deprecated(reason: "")

  """Sorts customer orders by created_at field"""
  CREATED_AT @deprecated(reason: "")
}

"""
The collection of orders that match the conditions defined in the filter.
"""
type CustomerOrders {
  """An array of customer orders."""
  items: [CustomerOrder]!

  """Contains pagination metadata."""
  page_info: SearchResultPageInfo

  """The total count of customer orders."""
  total_count: Int
}

"""
Contains detailed information about an order's billing and shipping addresses.
"""
type OrderAddress {
  """The city or town."""
  city: String!

  """The customer's company."""
  company: String

  """The customer's country."""
  country_code: CountryCodeEnum

  """The fax number."""
  fax: String

  """
  The first name of the person associated with the shipping/billing address.
  """
  firstname: String!

  """
  The family name of the person associated with the shipping/billing address.
  """
  lastname: String!

  """
  The middle name of the person associated with the shipping/billing address.
  """
  middlename: String

  """The customer's ZIP or postal code."""
  postcode: String

  """An honorific, such as Dr., Mr., or Mrs."""
  prefix: String

  """The state or province name."""
  region: String

  """The unique ID for a \`Region\` object of a pre-defined region."""
  region_id: ID

  """An array of strings that define the street number and name."""
  street: [String]!

  """A value such as Sr., Jr., or III."""
  suffix: String

  """The telephone number."""
  telephone: String

  """The customer's Value-added tax (VAT) number (for corporate customers)."""
  vat_id: String
}

""""""
type OrderItem implements OrderItemInterface {
  """The final discount information for the product."""
  discounts: [Discount]

  """
  Indicates whether the order item is eligible to be in a return request.
  """
  eligible_for_return: Boolean

  """The entered option for the base product, such as a logo or image."""
  entered_options: [OrderItemOption]

  """The selected gift message for the order item"""
  gift_message: GiftMessage

  """The unique ID for an \`OrderItemInterface\` object."""
  id: ID!

  """The name of the base product."""
  product_name: String

  """The sale price of the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The type of product, such as simple, configurable, etc."""
  product_type: String

  """URL key of the base product."""
  product_url_key: String

  """The number of canceled items."""
  quantity_canceled: Float

  """The number of invoiced items."""
  quantity_invoiced: Float

  """The number of units ordered for this item."""
  quantity_ordered: Float

  """The number of refunded items."""
  quantity_refunded: Float

  """The number of returned items."""
  quantity_returned: Float

  """The number of shipped items."""
  quantity_shipped: Float

  """The selected options for the base product, such as color or size."""
  selected_options: [OrderItemOption]

  """The status of the order item."""
  status: String
}

"""Represents order item options like selected or entered."""
type OrderItemOption {
  """The name of the option."""
  label: String!

  """The value of the option."""
  value: String!
}

"""Contains tax item details."""
type TaxItem {
  """The amount of tax applied to the item."""
  amount: Money!

  """The rate used to calculate the tax."""
  rate: Float!

  """A title that describes the tax."""
  title: String!
}

"""Contains invoice details."""
type Invoice {
  """Comments on the invoice."""
  comments: [SalesCommentItem]

  """The unique ID for a \`Invoice\` object."""
  id: ID!

  """Invoiced product details."""
  items: [InvoiceItemInterface]

  """Sequential invoice number."""
  number: String!

  """Invoice total amount details."""
  total: InvoiceTotal
}

"""Contains detailes about invoiced items."""
interface InvoiceItemInterface {
  """
  Information about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """The unique ID for an \`InvoiceItemInterface\` object."""
  id: ID!

  """Details about an individual order item."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of invoiced items."""
  quantity_invoiced: Float
}

""""""
type InvoiceItem implements InvoiceItemInterface {
  """
  Information about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """The unique ID for an \`InvoiceItemInterface\` object."""
  id: ID!

  """Details about an individual order item."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of invoiced items."""
  quantity_invoiced: Float
}

"""Contains price details from an invoice."""
type InvoiceTotal {
  """The final base grand total amount in the base currency."""
  base_grand_total: Money!

  """The applied discounts to the invoice."""
  discounts: [Discount]

  """The final total amount, including shipping, discounts, and taxes."""
  grand_total: Money!

  """Details about the shipping and handling costs for the invoice."""
  shipping_handling: ShippingHandling

  """The subtotal of the invoice, excluding shipping, discounts, and taxes."""
  subtotal: Money!

  """The invoice tax details."""
  taxes: [TaxItem]

  """The shipping amount for the invoice."""
  total_shipping: Money!

  """The amount of tax applied to the invoice."""
  total_tax: Money!
}

"""Contains details about shipping and handling costs."""
type ShippingHandling {
  """The shipping amount, excluding tax."""
  amount_excluding_tax: Money

  """The shipping amount, including tax."""
  amount_including_tax: Money

  """The applied discounts to the shipping."""
  discounts: [ShippingDiscount]

  """Details about taxes applied for shipping."""
  taxes: [TaxItem]

  """The total amount for shipping."""
  total_amount: Money!
}

"""
Defines an individual shipping discount. This discount can be applied to shipping.
"""
type ShippingDiscount {
  """The amount of the discount."""
  amount: Money!
}

"""Contains order shipment details."""
type OrderShipment {
  """Comments added to the shipment."""
  comments: [SalesCommentItem]

  """The unique ID for a \`OrderShipment\` object."""
  id: ID!

  """An array of items included in the shipment."""
  items: [ShipmentItemInterface]

  """The sequential credit shipment number."""
  number: String!

  """An array of shipment tracking details."""
  tracking: [ShipmentTracking]
}

"""Contains details about a comment."""
type SalesCommentItem {
  """The text of the message."""
  message: String!

  """The timestamp of the comment."""
  timestamp: String!
}

"""Order shipment item details."""
interface ShipmentItemInterface {
  """The unique ID for a \`ShipmentItemInterface\` object."""
  id: ID!

  """The order item associated with the shipment item."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of shipped items."""
  quantity_shipped: Float!
}

""""""
type ShipmentItem implements ShipmentItemInterface {
  """The unique ID for a \`ShipmentItemInterface\` object."""
  id: ID!

  """The order item associated with the shipment item."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of shipped items."""
  quantity_shipped: Float!
}

"""Contains order shipment tracking details."""
type ShipmentTracking {
  """The shipping carrier for the order delivery."""
  carrier: String!

  """The tracking number of the order shipment."""
  number: String

  """The shipment tracking title."""
  title: String!
}

"""Contains details about the payment method used to pay for the order."""
type OrderPaymentMethod {
  """Additional data per payment method type."""
  additional_data: [KeyValue]

  """The label that describes the payment method."""
  name: String!

  """The payment method code that indicates how the order was paid for."""
  type: String!
}

"""Contains credit memo details."""
type CreditMemo {
  """Comments on the credit memo."""
  comments: [SalesCommentItem]

  """The unique ID for a \`CreditMemo\` object."""
  id: ID!

  """An array containing details about refunded items."""
  items: [CreditMemoItemInterface]

  """The sequential credit memo number."""
  number: String!

  """Details about the total refunded amount."""
  total: CreditMemoTotal
}

"""Credit memo item details."""
interface CreditMemoItemInterface {
  """
  Details about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """The unique ID for a \`CreditMemoItemInterface\` object."""
  id: ID!

  """The order item the credit memo is applied to."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of refunded items."""
  quantity_refunded: Float
}

""""""
type CreditMemoItem implements CreditMemoItemInterface {
  """
  Details about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """The unique ID for a \`CreditMemoItemInterface\` object."""
  id: ID!

  """The order item the credit memo is applied to."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of refunded items."""
  quantity_refunded: Float
}

"""Contains credit memo price details."""
type CreditMemoTotal {
  """An adjustment manually applied to the order."""
  adjustment: Money!

  """The final base grand total amount in the base currency."""
  base_grand_total: Money!

  """The applied discounts to the credit memo."""
  discounts: [Discount]

  """The final total amount, including shipping, discounts, and taxes."""
  grand_total: Money!

  """Details about the shipping and handling costs for the credit memo."""
  shipping_handling: ShippingHandling

  """The subtotal of the invoice, excluding shipping, discounts, and taxes."""
  subtotal: Money!

  """The credit memo tax details."""
  taxes: [TaxItem]

  """The shipping amount for the credit memo."""
  total_shipping: Money!

  """The amount of tax applied to the credit memo."""
  total_tax: Money!
}

"""Contains a key-value pair."""
type KeyValue {
  """The name part of the key/value pair."""
  name: String

  """The value part of the key/value pair."""
  value: String
}

""""""
enum CheckoutUserInputErrorCodes {
  """"""
  REORDER_NOT_AVAILABLE @deprecated(reason: "")

  """"""
  PRODUCT_NOT_FOUND @deprecated(reason: "")

  """"""
  NOT_SALABLE @deprecated(reason: "")

  """"""
  INSUFFICIENT_STOCK @deprecated(reason: "")

  """"""
  UNDEFINED @deprecated(reason: "")
}

"""This enumeration defines the scope type for customer orders."""
enum ScopeTypeEnum {
  """"""
  GLOBAL @deprecated(reason: "")

  """"""
  WEBSITE @deprecated(reason: "")

  """"""
  STORE @deprecated(reason: "")
}

"""Contains the result of the \`subscribeEmailToNewsletter\` operation."""
type SubscribeEmailToNewsletterOutput {
  """The status of the subscription request."""
  status: SubscriptionStatusesEnum
}

"""Indicates the status of the request."""
enum SubscriptionStatusesEnum {
  """"""
  NOT_ACTIVE @deprecated(reason: "")

  """"""
  SUBSCRIBED @deprecated(reason: "")

  """"""
  UNSUBSCRIBED @deprecated(reason: "")

  """"""
  UNCONFIRMED @deprecated(reason: "")
}

"""Contains a single dynamic block."""
type DynamicBlock {
  """Audience ID for this block."""
  audience_id: [ID]!

  """The renderable HTML code of the dynamic block."""
  content: ComplexTextValue!

  """The unique ID of a \`DynamicBlock\` object."""
  uid: ID!
}

"""Contains an array of dynamic blocks."""
type DynamicBlocks {
  """An array containing individual dynamic blocks."""
  items: [DynamicBlock]!

  """Metadata for pagination rendering."""
  page_info: SearchResultPageInfo

  """The number of returned dynamic blocks."""
  total_count: Int!
}

"""
Defines the dynamic block filter. The filter can identify the block type, location and IDs to return.
"""
input DynamicBlocksFilterInput {
  """Input to filter dynamic blocks by user's audience ID."""
  audience_id: FilterEqualTypeInput

  """An array of dynamic block UIDs to filter on."""
  dynamic_block_uids: [ID]

  """An array indicating the locations the dynamic block can be placed."""
  locations: [DynamicBlockLocationEnum]

  """A value indicating the type of dynamic block to filter on."""
  type: DynamicBlockTypeEnum!
}

"""Indicates the selected Dynamic Blocks Rotator inline widget."""
enum DynamicBlockTypeEnum {
  """"""
  SPECIFIED @deprecated(reason: "")

  """"""
  CART_PRICE_RULE_RELATED @deprecated(reason: "")

  """"""
  CATALOG_PRICE_RULE_RELATED @deprecated(reason: "")
}

"""
Indicates the locations the dynamic block can be placed. If this field is not specified, the query returns all locations.
"""
enum DynamicBlockLocationEnum {
  """"""
  CONTENT @deprecated(reason: "")

  """"""
  HEADER @deprecated(reason: "")

  """"""
  FOOTER @deprecated(reason: "")

  """"""
  LEFT @deprecated(reason: "")

  """"""
  RIGHT @deprecated(reason: "")
}

"""
Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods.
"""
input PaypalExpressTokenInput {
  """The unique ID that identifies the customer's cart."""
  cart_id: String!

  """The payment method code."""
  code: String!

  """
  Indicates whether the buyer selected the quick checkout button. The default value is false.
  """
  express_button: Boolean

  """
  A set of relative URLs that PayPal uses in response to various actions during the authorization process.
  """
  urls: PaypalExpressUrlsInput!

  """
  Indicates whether the buyer clicked the PayPal credit button. The default value is false.
  """
  use_paypal_credit: Boolean
}

"""Deprecated. Use \`PaypalExpressTokenOutput\` instead."""
type PaypalExpressToken {
  """
  A set of URLs that allow the buyer to authorize payment and adjust checkout details.
  """
  paypal_urls: PaypalExpressUrlList @deprecated(reason: "Use \`PaypalExpressTokenOutput.paypal_urls\` instead.")

  """The token returned by PayPal."""
  token: String @deprecated(reason: "Use \`PaypalExpressTokenOutput.token\` instead.")
}

"""
Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods.
"""
type PaypalExpressTokenOutput {
  """
  A set of URLs that allow the buyer to authorize payment and adjust checkout details.
  """
  paypal_urls: PaypalExpressUrlList

  """The token returned by PayPal."""
  token: String
}

"""
Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods.
"""
type PayflowLinkToken {
  """The mode for the Payflow transaction."""
  mode: PayflowLinkMode

  """The PayPal URL used for requesting a Payflow form."""
  paypal_url: String

  """The secure token generated by PayPal."""
  secure_token: String

  """The secure token ID generated by PayPal."""
  secure_token_id: String
}

"""
Contains the secure URL used for the Payments Pro Hosted Solution payment method.
"""
type HostedProUrl {
  """The secure URL generated by PayPal."""
  secure_form_url: String
}

"""
Contains the required input to request the secure URL for Payments Pro Hosted Solution payment.
"""
input HostedProUrlInput {
  """The unique ID that identifies the shopper's cart."""
  cart_id: String!
}

"""
Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method.
"""
input HostedProInput {
  """
  The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html.
  """
  cancel_url: String!

  """
  The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html.
  """
  return_url: String!
}

"""
Contains required input for Express Checkout and Payments Standard payments.
"""
input PaypalExpressInput {
  """The unique ID of the PayPal user."""
  payer_id: String!

  """The token returned by the \`createPaypalExpressToken\` mutation."""
  token: String!
}

"""Contains required input for Payflow Express Checkout payments."""
input PayflowExpressInput {
  """The unique ID of the PayPal user."""
  payer_id: String!

  """The token returned by the createPaypalExpressToken mutation."""
  token: String!
}

"""
Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods.
"""
input PaypalExpressUrlsInput {
  """
  The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html.
  """
  cancel_url: String!

  """
  The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html.
  """
  pending_url: String

  """
  The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html.
  """
  return_url: String!

  """
  The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html.
  """
  success_url: String
}

"""
Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions.
"""
type PaypalExpressUrlList {
  """The PayPal URL that allows the buyer to edit their checkout details."""
  edit: String

  """The URL to the PayPal login page."""
  start: String
}

"""
A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods.
"""
input PayflowLinkInput {
  """
  The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html.
  """
  cancel_url: String!

  """
  The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html.
  """
  error_url: String!

  """
  The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html.
  """
  return_url: String!
}

"""
Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods.
"""
input PayflowLinkTokenInput {
  """The unique ID that identifies the customer's cart."""
  cart_id: String!
}

"""
Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods.
"""
enum PayflowLinkMode {
  """"""
  TEST @deprecated(reason: "")

  """"""
  LIVE @deprecated(reason: "")
}

"""
Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods.
"""
input PayflowProTokenInput {
  """The unique ID that identifies the shopper's cart."""
  cart_id: String!

  """A set of relative URLs that PayPal uses for callback."""
  urls: PayflowProUrlInput!
}

"""Contains input for the Payflow Pro and Payments Pro payment methods."""
input PayflowProInput {
  """Required input for credit card related information."""
  cc_details: CreditCardDetailsInput!

  """
  Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration.
  """
  is_active_payment_token_enabler: Boolean
}

"""Required fields for Payflow Pro and Payments Pro credit card payments."""
input CreditCardDetailsInput {
  """The credit card expiration month."""
  cc_exp_month: Int!

  """The credit card expiration year."""
  cc_exp_year: Int!

  """The last 4 digits of the credit card."""
  cc_last_4: Int!

  """The credit card type."""
  cc_type: String!
}

"""
Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods.
"""
input PayflowProUrlInput {
  """
  The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html.
  """
  cancel_url: String!

  """
  The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html.
  """
  error_url: String!

  """
  The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html.
  """
  return_url: String!
}

"""
Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods.
"""
type PayflowProToken {
  """
  The RESPMSG returned by PayPal. If the \`result\` is \`0\`, then \`response_message\` is \`Approved\`.
  """
  response_message: String!

  """A non-zero value if any errors occurred."""
  result: Int!

  """
  The RESULT returned by PayPal. A value of \`0\` indicates the transaction was approved.
  """
  result_code: Int!

  """A secure token generated by PayPal."""
  secure_token: String!

  """A secure token ID generated by PayPal."""
  secure_token_id: String!
}

"""
Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods.
"""
type CreatePayflowProTokenOutput {
  """
  The RESPMSG returned by PayPal. If the \`result\` is \`0\`, then \`response_message\` is \`Approved\`.
  """
  response_message: String!

  """A non-zero value if any errors occurred."""
  result: Int!

  """
  The RESULT returned by PayPal. A value of \`0\` indicates the transaction was approved.
  """
  result_code: Int!

  """A secure token generated by PayPal."""
  secure_token: String!

  """A secure token ID generated by PayPal."""
  secure_token_id: String!
}

"""
Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods.
"""
input PayflowProResponseInput {
  """The unique ID that identifies the shopper's cart."""
  cart_id: String!

  """The payload returned from PayPal."""
  paypal_payload: String!
}

""""""
type PayflowProResponseOutput {
  """The cart with the updated selected payment method."""
  cart: Cart!
}

"""Contains required input for payment methods with Vault support."""
input VaultTokenInput {
  """The public hash of the payment token."""
  public_hash: String!
}

"""Contains an array of product reviews."""
type ProductReviews {
  """An array of product reviews."""
  items: [ProductReview]!

  """Metadata for pagination rendering."""
  page_info: SearchResultPageInfo!
}

"""Contains details of a product review."""
type ProductReview {
  """The average of all ratings for this product."""
  average_rating: Float!

  """The date the review was created."""
  created_at: String!

  """The customer's nickname. Defaults to the customer name, if logged in."""
  nickname: String!

  """The reviewed product."""
  product: ProductInterface!

  """
  An array of ratings by rating category, such as quality, price, and value.
  """
  ratings_breakdown: [ProductReviewRating]!

  """The summary (title) of the review."""
  summary: String!

  """The review text."""
  text: String!
}

"""Contains data about a single aspect of a product review."""
type ProductReviewRating {
  """
  The label assigned to an aspect of a product that is being rated, such as quality or price.
  """
  name: String!

  """
  The rating value given by customer. By default, possible values range from 1 to 5.
  """
  value: String!
}

"""Contains an array of metadata about each aspect of a product review."""
type ProductReviewRatingsMetadata {
  """An array of product reviews sorted by position."""
  items: [ProductReviewRatingMetadata]!
}

"""Contains details about a single aspect of a product review."""
type ProductReviewRatingMetadata {
  """An encoded rating ID."""
  id: String!

  """
  The label assigned to an aspect of a product that is being rated, such as quality or price.
  """
  name: String!

  """List of product review ratings sorted by position."""
  values: [ProductReviewRatingValueMetadata]!
}

"""Contains details about a single value in a product review."""
type ProductReviewRatingValueMetadata {
  """A ratings scale, such as the number of stars awarded."""
  value: String!

  """An encoded rating value ID."""
  value_id: String!
}

"""Contains the completed product review."""
type CreateProductReviewOutput {
  """Product review details."""
  review: ProductReview!
}

"""Defines a new product review."""
input CreateProductReviewInput {
  """The customer's nickname. Defaults to the customer name, if logged in."""
  nickname: String!

  """
  The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc.
  """
  ratings: [ProductReviewRatingInput]!

  """The SKU of the reviewed product."""
  sku: String!

  """The summary (title) of the review."""
  summary: String!

  """The review text."""
  text: String!
}

"""Contains the reviewer's rating for a single aspect of a review."""
input ProductReviewRatingInput {
  """An encoded rating ID."""
  id: String!

  """An encoded rating value ID."""
  value_id: String!
}

"""Contains information needed to start a return request."""
input RequestReturnInput {
  """
  Text the buyer entered that describes the reason for the refund request.
  """
  comment_text: String

  """
  The email address the buyer enters to receive notifications about the status of the return.
  """
  contact_email: String

  """An array of items to be returned."""
  items: [RequestReturnItemInput]!

  """The unique ID for a \`Order\` object."""
  order_uid: ID!
}

"""Contains details about an item to be returned."""
input RequestReturnItemInput {
  """Details about a custom attribute that was entered."""
  entered_custom_attributes: [EnteredCustomAttributeInput]

  """The unique ID for a \`OrderItemInterface\` object."""
  order_item_uid: ID!

  """The quantity of the item to be returned."""
  quantity_to_return: Float!

  """
  An array of selected custom option IDs associated with the item to be returned. For example, the IDs for the selected color and size of a configurable product.
  """
  selected_custom_attributes: [SelectedCustomAttributeInput]
}

"""Contains details about a custom text attribute that the buyer entered."""
input EnteredCustomAttributeInput {
  """A string that identifies the entered custom attribute."""
  attribute_code: String!

  """The text or other entered value."""
  value: String!
}

"""Contains details about an attribute the buyer selected."""
input SelectedCustomAttributeInput {
  """A string that identifies the selected attribute."""
  attribute_code: String!

  """
  The unique ID for a \`CustomAttribute\` object of a selected custom attribute.
  """
  value: ID!
}

"""Contains the response to a return request."""
type RequestReturnOutput {
  """Details about a single return request."""
  return: Return

  """An array of return requests."""
  returns(
    """
    Specifies the maximum number of results to return at once. The default is 20.
    """
    pageSize: Int = 20

    """Specifies which page of results to return. The default is 1."""
    currentPage: Int = 1
  ): Returns
}

"""Defines a return comment."""
input AddReturnCommentInput {
  """The text added to the return request."""
  comment_text: String!

  """The unique ID for a \`Return\` object."""
  return_uid: ID!
}

"""Contains details about the return request."""
type AddReturnCommentOutput {
  """The modified return."""
  return: Return
}

"""Defines tracking information to be added to the return."""
input AddReturnTrackingInput {
  """The unique ID for a \`ReturnShippingCarrier\` object."""
  carrier_uid: ID!

  """The unique ID for a \`Returns\` object."""
  return_uid: ID!

  """The shipping tracking number for this return request."""
  tracking_number: String!
}

"""Contains the response after adding tracking information."""
type AddReturnTrackingOutput {
  """Details about the modified return."""
  return: Return

  """Details about shipping for a return."""
  return_shipping_tracking: ReturnShippingTracking
}

"""Defines the tracking information to delete."""
input RemoveReturnTrackingInput {
  """The unique ID for a \`ReturnShippingTracking\` object."""
  return_shipping_tracking_uid: ID!
}

"""Contains the response after deleting tracking information."""
type RemoveReturnTrackingOutput {
  """Contains details about the modified return."""
  return: Return
}

"""Contains a list of customer return requests."""
type Returns {
  """A list of return requests."""
  items: [Return]

  """Pagination metadata."""
  page_info: SearchResultPageInfo

  """The total number of return requests."""
  total_count: Int
}

"""Contains details about a return."""
type Return {
  """A list of shipping carriers available for returns."""
  available_shipping_carriers: [ReturnShippingCarrier]

  """A list of comments posted for the return request."""
  comments: [ReturnComment]

  """The date the return was requested."""
  created_at: String!

  """Data from the customer who created the return request."""
  customer: ReturnCustomer!

  """A list of items being returned."""
  items: [ReturnItem]

  """A human-readable return number."""
  number: String!

  """The order associated with the return."""
  order: CustomerOrder

  """Shipping information for the return."""
  shipping: ReturnShipping

  """The status of the return request."""
  status: ReturnStatus

  """The unique ID for a \`Return\` object."""
  uid: ID!
}

"""The customer information for the return."""
type ReturnCustomer {
  """The email address of the customer."""
  email: String!

  """The first name of the customer."""
  firstname: String

  """The last name of the customer."""
  lastname: String
}

"""Contains details about a product being returned."""
type ReturnItem {
  """Return item custom attributes that are visible on the storefront."""
  custom_attributes: [ReturnCustomAttribute]

  """
  Provides access to the product being returned, including information about selected and entered options.
  """
  order_item: OrderItemInterface!

  """The quantity of the item the merchant authorized to be returned."""
  quantity: Float!

  """The quantity of the item requested to be returned."""
  request_quantity: Float!

  """The return status of the item."""
  status: ReturnItemStatus!

  """The unique ID for a \`ReturnItem\` object."""
  uid: ID!
}

"""Contains details about a \`ReturnCustomerAttribute\` object."""
type ReturnCustomAttribute {
  """A description of the attribute."""
  label: String!

  """The unique ID for a \`ReturnCustomAttribute\` object."""
  uid: ID!

  """A JSON-encoded value of the attribute."""
  value: String!
}

"""Contains details about a return comment."""
type ReturnComment {
  """The name or author who posted the comment."""
  author_name: String!

  """The date and time the comment was posted."""
  created_at: String!

  """The contents of the comment."""
  text: String!

  """The unique ID for a \`ReturnComment\` object."""
  uid: ID!
}

"""Contains details about the return shipping address."""
type ReturnShipping {
  """The merchant-defined return shipping address."""
  address: ReturnShippingAddress

  """
  The unique ID for a \`ReturnShippingTracking\` object. If a single UID is specified, the array contains a single tracking record. Otherwise, array contains all tracking information.
  """
  tracking(uid: ID): [ReturnShippingTracking]
}

"""Contains details about the carrier on a return."""
type ReturnShippingCarrier {
  """A description of the shipping carrier."""
  label: String!

  """
  The unique ID for a \`ReturnShippingCarrier\` object assigned to the shipping carrier.
  """
  uid: ID!
}

"""Contains shipping and tracking details."""
type ReturnShippingTracking {
  """Contains details of a shipping carrier."""
  carrier: ReturnShippingCarrier!

  """Details about the status of a shipment."""
  status: ReturnShippingTrackingStatus

  """A tracking number assigned by the carrier."""
  tracking_number: String!

  """
  The unique ID for a \`ReturnShippingTracking\` object assigned to the tracking item.
  """
  uid: ID!
}

"""Contains the status of a shipment."""
type ReturnShippingTrackingStatus {
  """Text that describes the status."""
  text: String!

  """Indicates whether the status type is informational or an error."""
  type: ReturnShippingTrackingStatusType!
}

""""""
enum ReturnShippingTrackingStatusType {
  """"""
  INFORMATION @deprecated(reason: "")

  """"""
  ERROR @deprecated(reason: "")
}

"""
Contains details about the shipping address used for receiving returned items.
"""
type ReturnShippingAddress {
  """The city for product returns."""
  city: String!

  """The merchant's contact person."""
  contact_name: String

  """An object that defines the country for product returns."""
  country: Country!

  """The postal code for product returns."""
  postcode: String!

  """An object that defines the state or province for product returns."""
  region: Region!

  """The street address for product returns."""
  street: [String]!

  """The telephone number for product returns."""
  telephone: String
}

""""""
enum ReturnStatus {
  """"""
  PENDING @deprecated(reason: "")

  """"""
  AUTHORIZED @deprecated(reason: "")

  """"""
  PARTIALLY_AUTHORIZED @deprecated(reason: "")

  """"""
  RECEIVED @deprecated(reason: "")

  """"""
  PARTIALLY_RECEIVED @deprecated(reason: "")

  """"""
  APPROVED @deprecated(reason: "")

  """"""
  PARTIALLY_APPROVED @deprecated(reason: "")

  """"""
  REJECTED @deprecated(reason: "")

  """"""
  PARTIALLY_REJECTED @deprecated(reason: "")

  """"""
  DENIED @deprecated(reason: "")

  """"""
  PROCESSED_AND_CLOSED @deprecated(reason: "")

  """"""
  CLOSED @deprecated(reason: "")
}

""""""
enum ReturnItemStatus {
  """"""
  PENDING @deprecated(reason: "")

  """"""
  AUTHORIZED @deprecated(reason: "")

  """"""
  RECEIVED @deprecated(reason: "")

  """"""
  APPROVED @deprecated(reason: "")

  """"""
  REJECTED @deprecated(reason: "")

  """"""
  DENIED @deprecated(reason: "")
}

"""Defines the wish list visibility types."""
enum WishlistVisibilityEnum {
  """"""
  PUBLIC @deprecated(reason: "")

  """"""
  PRIVATE @deprecated(reason: "")
}

"""Contains the wish list."""
type CreateWishlistOutput {
  """The newly-created wish list"""
  wishlist: Wishlist!
}

"""
Contains the status of the request to delete a wish list and an array of the customer's remaining wish lists.
"""
type DeleteWishlistOutput {
  """Indicates whether the wish list was deleted."""
  status: Boolean!

  """A list of undeleted wish lists."""
  wishlists: [Wishlist]!
}

"""Contains the source and target wish lists after copying products."""
type CopyProductsBetweenWishlistsOutput {
  """The destination wish list containing the copied products."""
  destination_wishlist: Wishlist!

  """The wish list that the products were copied from."""
  source_wishlist: Wishlist!

  """An array of errors encountered while copying products in a wish list."""
  user_errors: [WishListUserInputError]!
}

"""Specifies the IDs of items to copy and their quantities."""
input WishlistItemCopyInput {
  """
  The quantity of this item to copy to the destination wish list. This value can't be greater than the quantity in the source wish list.
  """
  quantity: Float

  """The unique ID of the \`WishlistItemInterface\` object to be copied."""
  wishlist_item_id: ID!
}

"""Specifies the IDs of the items to move and their quantities."""
input WishlistItemMoveInput {
  """
  The quantity of this item to move to the destination wish list. This value can't be greater than the quantity in the source wish list.
  """
  quantity: Float

  """The unique ID of the \`WishlistItemInterface\` object to be moved."""
  wishlist_item_id: ID!
}

"""Defines the name and visibility of a new wish list."""
input CreateWishlistInput {
  """The name of the new wish list."""
  name: String!

  """Indicates whether the wish list is public or private."""
  visibility: WishlistVisibilityEnum!
}

"""Contains the name and visibility of an updated wish list."""
type UpdateWishlistOutput {
  """The wish list name."""
  name: String!

  """The unique ID of a \`Wishlist\` object."""
  uid: ID!

  """Indicates whether the wish list is public or private."""
  visibility: WishlistVisibilityEnum!
}

"""Contains the source and target wish lists after moving products."""
type MoveProductsBetweenWishlistsOutput {
  """
  The destination wish list after receiving products moved from the source wish list.
  """
  destination_wishlist: Wishlist!

  """The source wish list after moving products from it."""
  source_wishlist: Wishlist!

  """An array of errors encountered while moving products to a wish list."""
  user_errors: [WishListUserInputError]!
}

"""
Indicates whether the request succeeded and returns the remaining customer payment tokens.
"""
type DeletePaymentTokenOutput {
  """A container for the customer's remaining payment tokens."""
  customerPaymentTokens: CustomerPaymentTokens

  """Indicates whether the request succeeded."""
  result: Boolean!
}

"""Contains payment tokens stored in the customer's vault."""
type CustomerPaymentTokens {
  """An array of payment tokens."""
  items: [PaymentToken]!
}

"""The stored payment method available to the customer."""
type PaymentToken {
  """A description of the stored account details."""
  details: String

  """The payment method code associated with the token."""
  payment_method_code: String!

  """The public hash of the token."""
  public_hash: String!

  """Specifies the payment token type."""
  type: PaymentTokenTypeEnum!
}

"""The list of available payment token types."""
enum PaymentTokenTypeEnum {
  """phpcs:ignore Magento2.GraphQL.ValidArgumentName"""
  card @deprecated(reason: "")

  """phpcs:ignore Magento2.GraphQL.ValidArgumentName"""
  account @deprecated(reason: "")
}

"""A single FPT that can be applied to a product price."""
type FixedProductTax {
  """The amount of the Fixed Product Tax."""
  amount: Money

  """The display label assigned to the Fixed Product Tax."""
  label: String
}

"""Lists display settings for the Fixed Product Tax."""
enum FixedProductTaxDisplaySettings {
  """
  The displayed price includes the FPT amount without displaying the \`ProductPrice.fixed_product_taxes\` values. This value corresponds to 'Including FPT only'.
  """
  INCLUDE_FPT_WITHOUT_DETAILS @deprecated(reason: "")

  """
  The displayed price includes the FPT amount while displaying the values of \`ProductPrice.fixed_product_taxes\` separately. This value corresponds to 'Including FPT and FPT description'.
  """
  INCLUDE_FPT_WITH_DETAILS @deprecated(reason: "")

  """
  The displayed price does not include the FPT amount. The values of \`ProductPrice.fixed_product_taxes\` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.'
  """
  EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS @deprecated(reason: "")

  """
  The displayed price does not include the FPT amount. The values from \`ProductPrice.fixed_product_taxes\` are not displayed. This value corresponds to 'Excluding FPT'.
  """
  EXCLUDE_FPT_WITHOUT_DETAILS @deprecated(reason: "")

  """
  The FPT feature is not enabled. You can omit \`ProductPrice.fixed_product_taxes\` from your query.
  """
  FPT_DISABLED @deprecated(reason: "")
}

"""Defines properties of a gift card."""
type GiftCardProduct implements ProductInterface & PhysicalProductInterface & CustomizableProductInterface & RoutableInterface {
  """An array of related Addons."""
  addons: [AddonsDetail]

  """
  Indicates whether the customer can provide a message to accompany the gift card.
  """
  allow_message: Boolean

  """
  Indicates whether shoppers have the ability to set the value of the gift card.
  """
  allow_open_amount: Boolean

  """The attribute set assigned to the product."""
  attribute_set_id: Int @deprecated(reason: "The field should not be used on the storefront.")
  auto_entitled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  auto_selected: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  available_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  base_price: String
  base_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related child products."""
  bundle_child_products: [BundleDetail]

  """An array of bundle deal parts."""
  bundle_deal_parts: [BundleDealParts]
  business_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  call_sign: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  canonical_identifier: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled.
  """
  canonical_url: String

  """An array of categories."""
  categories: [CategoriesPackagesDetail]

  """An array of related products."""
  channels: [ChannelDetail]
  charge_currency: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_name: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_periodicity: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  charge_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of products to be displayed in a Related Products block."""
  child_products: [ProductInterface]
  color: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product's country of origin."""
  country_of_manufacture: String

  """Timestamp indicating when the product was created."""
  created_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of cross-sell products."""
  crosssell_products: [ProductInterface]
  csr_required: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  default_classification: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  Detailed information about the product. The value can include simple HTML tags.
  """
  description: ComplexTextValue
  description_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  description_3: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_cta_note2: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_description1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  device_disclaimer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_classification: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  dw_line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_end_time_utc: String
  effective_start_date: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  effective_start_time_utc: String
  element_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  element_type_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  entity_id: Int

  """An array of related Addons."""
  excluded_packages: [ExcludedPackagesDetail]
  fine_print: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of customizable gift card options."""
  gift_card_options: [CustomizableOptionInterface]!

  """Indicates whether a gift message is available."""
  gift_message_available: String

  """
  An array that contains information about the values and ID of a gift card.
  """
  giftcard_amounts: [GiftCardAmounts]

  """An enumeration that specifies the type of gift card."""
  giftcard_type: GiftCardTypeEnum

  """An array of related child products."""
  grouped_child_products: [GroupDetail]
  has_partner_skus: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  headline_1: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  hide_display: Boolean

  """The ID number assigned to the product."""
  id: Int @deprecated(reason: "Use the \`uid\` field instead.")
  identifier: String

  """The relative path to the main image on the product page."""
  image: ProductImage

  """The relative path to the main image on the product page."""
  images: [ProductImage]
  instructional: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  is_grandfathered: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  Indicates whether the customer can redeem the value on the card for cash.
  """
  is_redeemable: Boolean

  """Indicates whether the product can be returned."""
  is_returnable: String
  item_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """
  The number of days after purchase until the gift card expires. A null value means there is no limit.
  """
  lifetime: Int
  line_of_business: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  lite_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A number representing the product's manufacturer."""
  manufacturer: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of media gallery objects."""
  media_gallery: [MediaGalleryInterface]

  """An array of MediaGalleryEntry objects."""
  media_gallery_entries: [MediaGalleryEntry] @deprecated(reason: "Use \`media_gallery\` instead.")

  """The maximum number of characters the gift message can contain."""
  message_max_length: Int

  """
  A brief overview of the product for search results listings, maximum 255 characters.
  """
  meta_description: String

  """
  A comma-separated list of keywords that are visible only to search engines.
  """
  meta_keyword: String

  """
  A string that is displayed in the title bar and tab of the browser and in search results lists.
  """
  meta_title: String
  migrated_to: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  minutes: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  move_id: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The product name. Customers use this name to identify the product."""
  name: String

  """
  The beginning date for new product listings, and determines if the product is featured as a new product.
  """
  new_from_date: String

  """The end date for new product listings."""
  new_to_date: String

  """The value assigned to the Only X Left Threshold option in the Admin."""
  only_x_left_in_stock: Float

  """The maximum acceptable value of an open amount gift card."""
  open_amount_max: Float

  """The minimum acceptable value of an open amount gift card."""
  open_amount_min: Float

  """An array of options for a customizable product."""
  options: [CustomizableOptionInterface]

  """
  If the product has multiple options, determines where they appear on the product page.
  """
  options_container: String
  ota_qual_indoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_none: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  ota_qual_outdoor: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  package_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  partner_platforms: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  pkg_service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  plan_offer_price: String
  plan_package_price: String
  plan_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Indicates the price of an item."""
  price: ProductPrices @deprecated(reason: "Use \`price_range\` for product price information.")

  """The range of prices for the product"""
  price_range: PriceRange!

  """An array of \`TierPrice\` objects."""
  price_tiers: [TierPrice]
  priority: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of \`ProductLinks\` objects."""
  product_links: [ProductLinksInterface]
  promo: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The average of all the ratings given to the product."""
  rating_summary: Float!

  """
  Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
  """
  redirect_code: Int!
  reg_price: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  regional_price_package: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of related products."""
  related_products: [ProductInterface]

  """
  The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
  """
  relative_url: String

  """The total count of all the reviews given to the product."""
  review_count: Int!

  """The list of products reviews."""
  reviews(
    """The maximum number of results to return at once. The default is 20."""
    pageSize: Int = 20

    """The page of results to return. The default is 1."""
    currentPage: Int = 1
  ): ProductReviews!
  selection_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  service_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """A short description of the product. Its use depends on the theme."""
  short_description: ComplexTextValue

  """
  A number or code assigned to a product to identify the product, options, price, and manufacturer.
  """
  sku: String
  sling_channel_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_product_type: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  sling_sku: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the small image, which is used on catalog pages."""
  small_image: ProductImage

  """The beginning date that a product has a special price."""
  special_from_date: String @deprecated(reason: "The field should not be used on the storefront.")

  """The discounted price of the product."""
  special_price: Float

  """The end date for a product with a special price."""
  special_to_date: String

  """Indicates whether the product is staged for a future campaign."""
  staged: Boolean!
  status: String

  """The stock status of the product."""
  stock_status: ProductStockStatus
  supported_apps: [String] @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """The relative path to the product's thumbnail image."""
  thumbnail: ProductImage

  """
  The price when tier pricing is in effect and the items purchased threshold has been reached.
  """
  tier_price: Float @deprecated(reason: "Use \`price_tiers\` for product tier price information.")

  """An array of ProductTierPrices objects."""
  tier_prices: [ProductTierPrices] @deprecated(reason: "Use \`price_tiers\` for product tier price information.")
  trial_offer: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_guid: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")
  tvod_sms_id: String @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """Category Type"""
  type: String

  """
  One of simple, virtual, bundle, downloadable, grouped, or configurable.
  """
  type_id: String @deprecated(reason: "Use \`__typename\` instead.")

  """The unique ID for a \`ProductInterface\` object."""
  uid: ID!

  """Timestamp indicating when the product was updated."""
  updated_at: String @deprecated(reason: "The field should not be used on the storefront.")

  """An array of up-sell products."""
  upsell_products: [ProductInterface]

  """The part of the URL that identifies the product"""
  url_key: String
  url_path: String @deprecated(reason: "Use product's \`canonical_url\` or url rewrites instead")

  """URL rewrites list"""
  url_rewrites: [UrlRewrite]

  """The part of the product URL that is appended after the url key"""
  url_suffix: String
  user_controlled: Int @deprecated(reason: "Use the \`custom_attributes\` field instead.")

  """An array of websites in which the product is available."""
  websites: [Website] @deprecated(reason: "The field should not be used on the storefront.")

  """The weight of the item, in units defined by the store."""
  weight: Float
}

"""
Contains the value of a gift card, the website that generated the card, and related information.
"""
type GiftCardAmounts {
  """An internal attribute ID."""
  attribute_id: Int

  """The unique ID for a \`GiftCardAmounts\` object."""
  uid: ID!

  """The value of the gift card."""
  value: Float

  """An ID that is assigned to each unique gift card amount."""
  value_id: Int @deprecated(reason: "Use \`uid\` instead")

  """The ID of the website that generated the gift card."""
  website_id: Int

  """The value of the gift card."""
  website_value: Float
}

"""Specifies the gift card type."""
enum GiftCardTypeEnum {
  """"""
  VIRTUAL @deprecated(reason: "")

  """"""
  PHYSICAL @deprecated(reason: "")

  """"""
  COMBINED @deprecated(reason: "")
}

""""""
type GiftCardOrderItem implements OrderItemInterface {
  """The final discount information for the product."""
  discounts: [Discount]

  """
  Indicates whether the order item is eligible to be in a return request.
  """
  eligible_for_return: Boolean

  """The entered option for the base product, such as a logo or image."""
  entered_options: [OrderItemOption]

  """Selected gift card properties for an order item."""
  gift_card: GiftCardItem

  """The selected gift message for the order item"""
  gift_message: GiftMessage

  """The unique ID for an \`OrderItemInterface\` object."""
  id: ID!

  """The name of the base product."""
  product_name: String

  """The sale price of the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The type of product, such as simple, configurable, etc."""
  product_type: String

  """URL key of the base product."""
  product_url_key: String

  """The number of canceled items."""
  quantity_canceled: Float

  """The number of invoiced items."""
  quantity_invoiced: Float

  """The number of units ordered for this item."""
  quantity_ordered: Float

  """The number of refunded items."""
  quantity_refunded: Float

  """The number of returned items."""
  quantity_returned: Float

  """The number of shipped items."""
  quantity_shipped: Float

  """The selected options for the base product, such as color or size."""
  selected_options: [OrderItemOption]

  """The status of the order item."""
  status: String
}

""""""
type GiftCardInvoiceItem implements InvoiceItemInterface {
  """
  Information about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """Selected gift card properties for an invoice item."""
  gift_card: GiftCardItem

  """The unique ID for an \`InvoiceItemInterface\` object."""
  id: ID!

  """Details about an individual order item."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of invoiced items."""
  quantity_invoiced: Float
}

""""""
type GiftCardCreditMemoItem implements CreditMemoItemInterface {
  """
  Details about the final discount amount for the base product, including discounts on options.
  """
  discounts: [Discount]

  """Selected gift card properties for a credit memo item."""
  gift_card: GiftCardItem

  """The unique ID for a \`CreditMemoItemInterface\` object."""
  id: ID!

  """The order item the credit memo is applied to."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product, including selected options."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of refunded items."""
  quantity_refunded: Float
}

""""""
type GiftCardShipmentItem implements ShipmentItemInterface {
  """Selected gift card properties for a shipment item."""
  gift_card: GiftCardItem

  """The unique ID for a \`ShipmentItemInterface\` object."""
  id: ID!

  """The order item associated with the shipment item."""
  order_item: OrderItemInterface

  """The name of the base product."""
  product_name: String

  """The sale price for the base product."""
  product_sale_price: Money!

  """The SKU of the base product."""
  product_sku: String!

  """The number of shipped items."""
  quantity_shipped: Float!
}

"""Contains details about a gift card."""
type GiftCardItem {
  """The message from the sender to the recipient."""
  message: String

  """The email address of the receiver of a virtual gift card."""
  recipient_email: String

  """The name of the receiver of a physical or virtual gift card."""
  recipient_name: String

  """The email address of the sender of a virtual gift card."""
  sender_email: String

  """The name of the sender of a physical or virtual gift card."""
  sender_name: String
}

"""Contains details about a gift card that has been added to a cart."""
type GiftCardCartItem implements CartItemInterface {
  """Action type A/R/E"""
  action_type: String!

  """The amount and currency of the gift card."""
  amount: Money!

  """1 or 0"""
  auto_entitled: String!

  """An array of customizations applied to the gift card."""
  customizable_options: [SelectedCustomizableOption]!

  """Now OR End of cycle."""
  cycle_type: String!

  """1 or 0"""
  display_in_cart: String!

  """An array of errors encountered while loading the cart item"""
  errors: [CartItemError]
  id: String! @deprecated(reason: "Use \`uid\` instead.")

  """The message from the sender to the recipient."""
  message: String
  package_type: String!

  """Parent sku of childs"""
  parent_sku: String

  """Plan package price"""
  plan_package_price: String!

  """Subscription price"""
  price_for_subscription: String!

  """
  Contains details about the price of the item, including taxes and discounts.
  """
  prices: CartItemPrices

  """Details about an item in the cart."""
  product: ProductInterface!

  """Custom price - Final Price"""
  prorated_price: String!

  """The quantity of this item in the cart."""
  quantity: Float!

  """The email address of the person receiving the gift card."""
  recipient_email: String

  """The name of the person receiving the gift card."""
  recipient_name: String!

  """The email address of the sender."""
  sender_email: String

  """The name of the sender."""
  sender_name: String!

  """The unique ID for a \`CartItemInterface\` object."""
  uid: ID!
}

"""A single gift card added to a wish list."""
type GiftCardWishlistItem implements WishlistItemInterface {
  """The date and time the item was added to the wish list."""
  added_at: String!

  """Custom options selected for the wish list item."""
  customizable_options: [SelectedCustomizableOption]!

  """The description of the item."""
  description: String

  """Details about a gift card."""
  gift_card_options: GiftCardOptions!

  """The unique ID for a \`WishlistItemInterface\` object."""
  id: ID!

  """Product details of the wish list item."""
  product: ProductInterface

  """The quantity of this wish list item."""
  quantity: Float!
}

"""
Contains details about the sender, recipient, and amount of a gift card.
"""
type GiftCardOptions {
  """The amount and currency of the gift card."""
  amount: Money

  """The custom amount and currency of the gift card."""
  custom_giftcard_amount: Money

  """The message from the sender to the recipient."""
  message: String

  """The email address of the person receiving the gift card."""
  recipient_email: String

  """The name of the person receiving the gift card."""
  recipient_name: String

  """The email address of the sender."""
  sender_email: String

  """The name of the sender."""
  sender_name: String
}

""""""
input ChangeBillingAddressInput {
  """"""
  billing_address: ChangeBillingAddressInputCart!
}

""""""
input ChangeBillingAddressInputCart {
  """"""
  address: CartChangeBillingAddressInput
}

""""""
input CartChangeBillingAddressInput {
  """"""
  city: String

  """"""
  country_code: String

  """"""
  firstname: String

  """"""
  lastname: String

  """"""
  postcode: String

  """"""
  region: String

  """"""
  street: [String]
}

""""""
input CartShippingAddressInput {
  """"""
  city: String

  """"""
  company: String

  """"""
  country_code: String

  """"""
  firstname: String

  """"""
  lastname: String

  """"""
  postcode: String

  """"""
  region: String

  """"""
  region_id: Int

  """
  Determines whether to save the address in the customer's address book. The default value is true
  """
  save_in_address_book: Boolean

  """"""
  street: [String]

  """"""
  telephone: String
}

""""""
type changeBillingAddressOutput {
  cartId: String
  code: Int
  message: String
}

"""Update Address Output"""
type AddressVerificationOutput {
  """Address Type"""
  address_type: String

  """Error message"""
  error: String

  """Full address"""
  full_address: Boolean
  scrub_response: AddressResponseOutput

  """Skip Full Address Check"""
  skip_full_address_check: Boolean

  """Result type success/failed"""
  status: String
  status_code: Int
}

"""Scrub Address Output"""
type AddressResponseOutput {
  addressChangeIndicators: AddressChangeIndicatorsOutput

  """Plan code"""
  geoCode: String

  """Certificate Required"""
  isValidAddress: Boolean
  scrub_error: String

  """Trail Days"""
  scrubbedAddressChanged: Boolean
  scrubbed_address: AddressOutput
  status: StatusOutput
}

"""Scrub Address Output"""
type AddressOutput {
  """Address1"""
  address1: String

  """Address2"""
  address2: String

  """Address Type"""
  address_type: String

  """City"""
  city: String

  """County"""
  county: String

  """State"""
  state: String

  """Zip"""
  zip: String

  """ZipPlus4"""
  zipPlus4: String
}

"""Address Changes Indicators Output"""
type AddressChangeIndicatorsOutput {
  """Cart Id"""
  cart_id: String

  """City Changed"""
  cityChanged: Boolean

  """Line One Changed"""
  lineOneChanged: Boolean

  """Line Two Changed"""
  lineTwoChanged: Boolean

  """State Changed"""
  stateChanged: Boolean

  """Zip Changed"""
  zipChanged: Boolean
}

"""Status"""
type StatusOutput {
  """Cart Id"""
  cart_id: String

  """Code"""
  code: String

  """Message"""
  message: String
}

"""Zipcode Address Verification Output"""
type ZipcodeAddressVerificationOutput {
  """City"""
  city: String

  """DMA"""
  dma: String

  """Latitude"""
  latitude: String

  """Longitude"""
  longitude: String

  """State"""
  state: String

  """Zipcode"""
  zipcode: String

  """Zipcode Matched"""
  zipcode_matched: Boolean
}

""""""
input addressVerificationInput {
  """"""
  address: AccountAddressInput!

  """"""
  address_type: String

  """"""
  skip_full_address_check: Boolean
}

""""""
input AccountAddressInput {
  """"""
  city: String!

  """"""
  country_code: String

  """"""
  county: String

  """"""
  firstname: String

  """"""
  lastname: String

  """"""
  postcode: String!

  """"""
  region: String!

  """"""
  street: [String]!
}

""""""
input zipcodeAddressVerificationInput {
  """"""
  zipcode: String
}

"""Address Verification V2 Output"""
type zipcodeAddressVerificationV2Output {
  """City"""
  city: String

  """DMA"""
  dma: String

  """Latitude"""
  latitude: String

  """Longitude"""
  longitude: String

  """State"""
  state: String

  """Zipcode"""
  zipcode: String

  """Zipcode Matched"""
  zipcode_matched: Boolean
}

"""Identifies the filter to use for filtering packages."""
input packagesFilterInput {
  """Filter by package guids."""
  package_guids: FilterTypeInput
}

"""Contains details about the packages available based on zip code."""
type PackagesOutput {
  """Packages Amount"""
  amount: Int
  base_sku: CanonicalPackageData

  """Csr Required"""
  csr_required: Boolean

  """Packages Description"""
  description: String

  """Enabled"""
  enabled: Boolean

  """Packages Guid"""
  guid: String

  """Packages Id"""
  id: Int

  """Packages Identifier"""
  identifier: String

  """Migrated To"""
  migrated_to: String

  """Packages Name"""
  name: String

  """Packages Type"""
  package_type: String

  """Priority"""
  priority: String
  regional_package: RegionalPackageData

  """Sku Guid"""
  sku: String
}

"""Defines the filter to use for searching package tax code."""
input packageFilterInput {
  """Classification"""
  classification: FilterTypeInput

  """condition type eq / in"""
  condition_type: String

  """Field value like product_type"""
  field: String

  """Package Type"""
  package_type: FilterTypeInput

  """Value like base_linear,ppv,dvr"""
  value: String
}

"""Fetch packages according to filters"""
type SlingFreePackages {
  items: [Packages]

  """Page Info"""
  page_info: PageInfo

  """Total Count"""
  total_count: Int
}

"""Contains the results of a \`products\` query."""
type Packages {
  """
  A bucket that contains the attribute code and label for each filterable option.
  """
  aggregations(filter: AggregationsFilterInput): [Aggregation]

  """Classification"""
  classification: String

  """Layered navigation filters array."""
  filters: [LayerFilter] @deprecated(reason: "Use \`aggregations\` instead.")

  """Item Guid"""
  guid: String

  """An array of products that match the specified search criteria."""
  items: PackageDetail

  """Line of Business"""
  lob: String

  """Package Type"""
  package_type: String

  """
  An object that includes the page_info and currentPage values specified in the query.
  """
  page_info: SearchResultPageInfo

  """Search Result"""
  search_result: String

  """
  An object that includes the default sort field and all available sort fields.
  """
  sort_fields: SortFields

  """
  An array of search suggestions for case when search query have no results.
  """
  suggestions: [SearchSuggestion]

  """
  The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
  """
  total_count: Int
}

""""""
type PageInfo {
  """Allow page number to start with 1."""
  currentPage: Int

  """Current Page"""
  current_page: Int

  """End page"""
  endPage: Int

  """Is next page"""
  hasNextPage: Boolean

  """Is previous page"""
  hasPreviousPage: Boolean

  """How many items should show on the page."""
  pageSize: Int

  """Page Size"""
  page_size: Int

  """Start page"""
  startPage: Int
}

"""
PackagesFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input PackagesFilterInput {
  """Plan Code to filter with"""
  plan_identifier: FilterTypeInput

  """Offer Code to filter with"""
  plan_offer_identifier: FilterTypeInput
}

"""Identifies the filter to use for filtering ppv packages."""
input ppvPackagesFilterInput {
  """
  Default yes. If no, Skip old records i.e. end_date less than current date
  """
  skip_expired_ppv: FilterEqualTypeInput
}

""""""
type ItemDetail {
  """An array of associated package details."""
  package: [ProductInterface]
}

""""""
type PackageDetail {
  """An array of associated package details."""
  package: [ProductInterface]

  """An array of associated plan details."""
  plan: PlanDetail

  """An array of associated offer details."""
  planOffer: OfferDetail
}

"""
Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input PackageAttributeFilterInput {
  """"""
  app: FilterEqualTypeInput

  """"""
  auto_entitled: FilterEqualTypeInput

  """"""
  format: FilterEqualTypeInput

  """"""
  identifier: FilterTypeInput

  """"""
  include_group_products: FilterEqualTypeInput

  """"""
  is_channel_required: FilterEqualTypeInput

  """"""
  is_grandfathered: FilterEqualTypeInput

  """"""
  item_guid: FilterTypeInput

  """"""
  lob: FilterEqualTypeInput

  """"""
  package_guid_lookup: FilterEqualTypeInput

  """"""
  partner_platforms: FilterEqualTypeInput

  """"""
  pck_type: FilterTypeInput

  """"""
  plan_identifier: FilterEqualTypeInput

  """"""
  plan_offer_identifier: FilterEqualTypeInput

  """"""
  tag: FilterEqualTypeInput

  """"""
  theme: FilterEqualTypeInput

  """"""
  zipcode: FilterEqualTypeInput
}

"""
Defines the filters to be used in the search for ppv. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input PpvPackageAttributeFilterInput {
  """"""
  app: FilterEqualTypeInput

  """"""
  exclude_purchased_ppv: FilterEqualTypeInput

  """"""
  is_channel_required: FilterEqualTypeInput

  """"""
  is_grandfather: FilterEqualTypeInput

  """"""
  lob: FilterEqualTypeInput

  """"""
  partner_platforms: FilterEqualTypeInput

  """"""
  pck_type: FilterTypeInput

  """"""
  plan_identifier: FilterEqualTypeInput

  """"""
  plan_offer_identifier: FilterEqualTypeInput

  """"""
  tag: FilterEqualTypeInput
}

""""""
type PlanDetail {
  future_plan: String
  future_plan_code: String
  is_active: Int
  is_auto_renew: String
  plan_app_supported: String
  plan_code: String
  plan_created_at: String
  plan_identifier: String
  plan_interval_length: String
  plan_interval_unit: String
  plan_is_grandfather: String
  plan_name: String
  plan_package_price: String
  plan_priority: Int
  plan_updated_at: String
  priority: String
  short_name: String
  total_billing_cycles: String
}

""""""
type OfferDetail {
  app_supported: String
  apply_discount_to: String
  created_at: String
  description: String
  discount: String
  discount_type: String
  duration_date: String
  duration_length: String
  duration_type: String
  duration_unit: String
  is_grandfather: String
  offer_identifier: String
  offer_type: String
  plan_identifier: String
  plan_offer_category: String
  plan_offer_identifier: String
  plan_offer_name: String
  plan_offer_price: String
  priority: Int
  refresh_entitlement: Int
  status: Int
  updated_at: String
}

""""""
type CategoriesPackagesDetail {
  description: String
  display_priority: String
  id: Int
  level: String
  name: String
  path: String
  tag_priority: String
  tag_translation_en: String
  tag_translation_es: String
}

""""""
type BundleDealParts {
  active: String
  identifier: String

  """The relative path to the main image on the product page."""
  images: [SlingLinkImage]
  name: String
  sku: String
}

""""""
type ChannelDetail {
  active: String
  business_id: String
  call_sign: String
  element_type_guid: String
  identifier: String

  """The relative path to the main image on the product page."""
  images: [SlingLinkImage]
  name: String
  position: String
  service_id: String
  sling_channel_id: String
}

""""""
type SlingLinkImage {
  common_path: String
  format: String
  name: String
  sub_path: String
  theme: String
  type: String
}

""""""
type AddonsDetail {
  active: String
  identifier: String

  """The relative path to the main image on the product page."""
  images: [SlingLinkImage]
  name: String
  sku: String
}

""""""
type ExcludedPackagesDetail {
  active: String
  identifier: String

  """The relative path to the main image on the product page."""
  images: [SlingLinkImage]
  name: String
  sku: String
}

""""""
type BundleDetail {
  child_lob: String
  identifier: String
  item_guid: String
  name: String
  sku: String
}

""""""
type GroupDetail {
  base_price: String
  identifier: String
  item_guid: String
  name: String
  plan_offer_price: String
  plan_package_price: String
  sku: String
}

"""Contains the results of a \`products\` query."""
type ppvPackagesOutput {
  """An array of products that match the specified search criteria."""
  packages: [PpvPckOutput]

  """
  The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
  """
  total_count: Int
}

"""Contains details about the packages available based on zip code."""
type PpvPckOutput {
  """Packages Amount"""
  amount: Float

  """Enabled"""
  enabled: Boolean

  """End Date"""
  end_date: String

  """Packages Guid"""
  guid: String

  """Packages Identifier"""
  identifier: String

  """Packages Name"""
  name: String

  """Packages Type"""
  package_type: String

  """Start Date"""
  start_date: String

  """Tvod Guid"""
  tvod_guid: String
}

"""
Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input packageBundleLiteGuidFilterInput {
  """"""
  dedup_bundles: FilterEqualTypeInput

  """"""
  identifier: FilterEqualTypeInput

  """"""
  item_guid: FilterEqualTypeInput

  """"""
  lite_guid: FilterEqualTypeInput

  """"""
  regional_price_package: FilterEqualTypeInput

  """"""
  type: FilterEqualTypeInput
}

""""""
type packageBundleLiteGuid {
  bundle_deal_parts: [String]!
  child_guid: [String]!
  child_identifier: [String]!
  identifier: String
  item_guid: String
  lite_guid: String
  regional_price_package: String!
  type: String
}

"""Contains the results of a \`products\` query."""
type slingFreePackagesOutput {
  """An array of products that match the specified search criteria."""
  items: [slingFreePckOutput]

  """
  The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
  """
  total_count: Int
}

"""Contains details about the packages available."""
type slingFreePckOutput {
  """Auto Selected"""
  auto_selected: Boolean

  """Classification"""
  classification: [String]

  """Packages Guid"""
  guid: String

  """Packages Name"""
  name: String

  """User Controlled"""
  user_controlled: Boolean
}

""""""
type Details {
  amount: Float
  carrier_code: String
  carrier_title: String
  description: String
  enabled: String
  method_code: String
  method_title: String
  package_type: String
  sku: String
}

"""An input object that assigns or updates customer attributes."""
input UserCreateInput {
  """"""
  ac_cart_id: String

  """"""
  ac_login_token: String

  """"""
  affiliate: String

  """"""
  bp_e: String

  """"""
  brite_verify: Boolean!

  """"""
  classification_identifier: String!

  """"""
  email: String!

  """"""
  flowName: String!

  """"""
  flow_name: String!

  """"""
  freemium_identifier: String

  """"""
  partner_identifier: String!

  """"""
  password: String!

  """"""
  rafflow: Boolean

  """"""
  responseToken: String!
}

"""Contains details about a newly-created or updated customer."""
type UserOutput {
  ac_cart_id: String
  ac_login_token: String
  account_status: String
  auth2_token: String
  brand_name: String
  coupon: String
  devices: [String]
  domain_guid: String
  email: String
  existing_user: String
  guid: String
  name: String
  partner_user_id: String
  phone_number: String
  preview_started_at: String
  sku: String
  sling_free_user: String
  sling_guid: String
  token: String
  two_factor_authenticate: String
  two_factor_authenticated: String
  upgraded_freemium: String
}

"""Specifies the coupon code to apply to the cart."""
input ApplyCouponInput {
  """Ac Type."""
  ac_type: String

  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """A valid coupon code."""
  offer_identifier: String!
}

"""Contains details about the cart after applying a coupon."""
type ApplyCouponOutput {
  """The code."""
  code: String

  """The message."""
  message: String
}

""""""
type checkSubscriptionPackageChangeOutput {
  are_packages_changing: Boolean
  error: String
  status: String
  status_code: Int
  status_message: String
}

""""""
input ReviewCartInput {
  """"""
  quantity: Float!

  """"""
  sku: String!
}

""""""
type ReviewCartOutput {
  """An error encountered while adding an item to the cart."""
  code: String

  """An error encountered while adding an item to the cart."""
  message: String
}

""""""
type WinBackOutput {
  """An error encountered while adding an item to the cart."""
  code: String

  """An error encountered while adding an item to the cart."""
  message: String
}

""""""
type PlanAdditionalData {
  """The future plan."""
  future_plan: String

  """The is active."""
  is_active: Int

  """The expiring plan."""
  is_auto_renew: Int

  """The plan code."""
  plan_code: String

  """The plan id."""
  plan_id: Int

  """The plan code."""
  plan_identifier: String

  """The plan interval length."""
  plan_interval_length: Int

  """The plan interval unit."""
  plan_interval_unit: String

  """The plan name."""
  plan_name: String

  """The priority."""
  priority: Int

  """The recurly id."""
  recurly_id: String

  """The sync required."""
  sync_required: Int

  """The total billing cycle."""
  total_billing_cycle: Int
}

""""""
type PlanOfferAdditionalData {
  """App Supported"""
  app_supported: String

  """Discount"""
  discount: String

  """Discount Type"""
  discount_type: Int

  """Duration Date"""
  duration_date: String

  """Duration Length"""
  duration_length: Int

  """Duration Type"""
  duration_type: String

  """Duration Unit"""
  duration_unit: String

  """Is Grand Father"""
  is_grandfather: Int

  """Offer Type"""
  offer_type: String

  """Plan Id"""
  plan_id: Int

  """Plan Offer Category"""
  plan_offer_category: String

  """Plan Offer Code"""
  plan_offer_id: Int

  """Plan Offer Code"""
  plan_offer_identifier: String

  """Status"""
  status: Int
}

""""""
type emptyCartOutput {
  status: Boolean
}

""""""
input SetCartHeadersInputs {
  """"""
  bp_e: String

  """"""
  cartId: String

  """"""
  classification: String

  """"""
  init_offer: Boolean

  """"""
  line_of_business: String

  """"""
  offer_identifier: String

  """"""
  plan_identifier: String

  """"""
  plan_offer_identifier: String

  """"""
  store_code: String

  """"""
  sub_category: String
}

""""""
type CartHeadersOutput {
  bp_e: String
  classification: String
  line_of_business: String
  plan_identifier: String
  plan_offer_identifier: String
  store_code: String
  sub_category: String
}

""""""
type SetCartHeadersOutput {
  cart: CartHeadersOutput
}

""""""
type SetProductsToCartOutput {
  cart: Cart!
  user_errors: [CartUserInputError]
}

""""""
type Credit {
  """Credit Amount"""
  credit_amount: String

  """Cart rule description"""
  description: String
}

"""Defines the fileds to update in the customer table."""
input CustomerDataInput {
  """"""
  current_subscription_ends_at: String

  """"""
  current_subscription_started_at: String

  """"""
  email: String

  """"""
  most_recent_subscription_expired_at: String

  """"""
  payment_type: String

  """"""
  plan_offer: String

  """"""
  ums_account_status: String

  """"""
  user_guid: String!

  """"""
  user_subscription_packages: [String]
}

"""Updated Account status response with GUID"""
type CustomerDataUpdatedOutput {
  code: Int!
  message: String!
  status: String!
  user_guid: String
}

"""JWt Token Field"""
type LoginCustomerByAuthToken {
  """Account Status"""
  account_status: String

  """Error message"""
  error: String

  """Result type true/false"""
  is_ac_user: Boolean

  """Customer access token"""
  session: String

  """Result type success/failed"""
  status: String
}

"""JWt Token Field"""
type loginCustomerByUserGuid {
  """Account Status"""
  account_status: String

  """Error message"""
  error: String

  """Result type true/false"""
  is_ac_user: Boolean

  """Customer access token"""
  session: String

  """Result type success/failed"""
  status: String
}

"""JWt Token Field"""
type loginCustomerByUserGuidV2 {
  """Customer access token"""
  session: String
}

"""Partner Token Field"""
type PartnerToken {
  """Access Token"""
  access_token: String

  """Expires In"""
  expires_in: String

  """Token Type"""
  token_type: String
}

"""JWt Token Field"""
type SignOutOfAllDeviceOutput {
  """Error message"""
  error: String

  """Result type success/failed"""
  status: String

  """Status Code"""
  status_code: String

  """Status Message"""
  status_message: String
}

"""Device lists"""
type DeviceListsOutput {
  """Device lists Data"""
  devices: [ListOuptut]
}

"""Device lists array Data"""
type ListOuptut {
  """browser type"""
  device_type: String

  """browser guid"""
  guid: String

  """Device id"""
  id: Int

  """last login date"""
  last_used: String

  """browser name"""
  name: String

  """start date"""
  reg_start_at: String

  """user id"""
  user_id: Int
}

"""Response of Toggle visibility"""
type ToggleVisibility {
  """The error."""
  error: String

  """The status."""
  status: String
}

"""An input object that defines the feedback cancel form inputs"""
input cancelSubscriptionFeedbackInput {
  """Comments"""
  comments: String

  """Likely to Return"""
  likelyToReturn: String
}

"""Response of forgot password"""
type ForgotPassword {
  """The error."""
  error: String

  """The message."""
  message: String

  """The status."""
  status: String
}

""""""
input ScrubAddressVerificationInput {
  """"""
  first_name: String!

  """"""
  last_name: String!

  """"""
  phone_number: String!

  """"""
  profile_address1: String!

  """"""
  profile_address2: String

  """"""
  profile_city: String!

  """"""
  profile_state: String!

  """"""
  profile_zip: String!
}

"""Update my account address"""
type ScrubAddressVerificationOutput {
  """Result type success/failed"""
  result: String
}

""""""
input CreateTokenInput {
  """"""
  token_id: String!
}

"""create account token UMS output"""
type CreateTokenAccountOutput {
  billing_info: BillingInfo
  error: String
  payment_type: String
  status: String
  status_code: String
  status_message: String
  token_id: String
}

"""Billing Information of user"""
type BillingInfo {
  address1: String
  address2: String
  card_type: String
  city: String
  country: String
  first_name: String
  first_six: String
  last_four: String
  last_name: String
  month: Int
  state: String
  year: Int
  zip: String
}

"""An input object that defines the feedback cancel form inputs"""
input CancelFeedbackInput {
  """
  'too-expensive','missing-content','better-offer','technical-issues','temporary'
  """
  cancel_reasons_order: [String]

  """sample input : null or string"""
  comments: String

  """sample input : technical-issues"""
  description: String

  """sample input : 4"""
  position: Int

  """sample input : null or string"""
  subreasons: String
}

"""Contains details about a newly-created or updated customer."""
type CancelFeedbackOutput {
  status: Boolean!
}

"""An input object that defines the feedback cancel form inputs"""
input CancelSubscriptionInput {
  """Customer session Id"""
  customer_session_id: String

  """sample input : full/partial"""
  refund_type: String
}

"""Contains details about a newly-created or updated customer."""
type CancelSubscriptionOutput {
  """Amount"""
  refund_amount: String
  status: Boolean!
}

"""Billing history Output"""
type BillingHistoryOutput {
  """Error message"""
  error: String
  invoices: [InvoiceResponseOutput]

  """Result type success/failed"""
  status: String
}

"""Eligibility Methods"""
type EligibilityMethodsOutput {
  """Message"""
  message: String

  """Result type success/failed"""
  status: String
}

"""Invoice details"""
type InvoiceResponseOutput {
  """Closed At"""
  closed_at: String

  """Created At"""
  created_at: String
  line_items: [LineItemResponseOutput]

  """Number"""
  number: String

  """Plan"""
  plan: String

  """State"""
  state: String

  """Total In Cents"""
  total_in_cents: String

  """Total Tax in Cents"""
  total_tax_in_cents: String
}

"""Invoice details"""
type LineItemResponseOutput {
  """Description"""
  description: String

  """Discount in cents"""
  discount_in_cents: Int

  """Origin"""
  origin: String

  """Product code"""
  product_code: String

  """Total in Cents"""
  total_in_cents: Int

  """Unit Amount in Cents"""
  unit_amount_in_cents: Int
}

"""JWt Token Field"""
type AccountDetailsOutput {
  composite_list: CompositeList
  pause_eligible: Boolean
  pay_per_views: [String]
  subscriptions: Subscriptions
  user_details: UserDetails
}

""""""
type CompositeList {
  account_information: Boolean
  add_gift_card: Boolean
  cancel_subscription: Boolean
  change_password: Boolean
  change_subscription_button: Boolean
  communication_preference: Boolean
  device_list: Boolean
  hide_duplicates: Boolean
  pause_subscription: Boolean
  redeem_promo_code: Boolean
  restart_now_button: Boolean
  signout_all_devices: Boolean
  start_subscription_button: Boolean
  suported_devices: Boolean
  update_billing_address: Boolean
  update_payment_info: Boolean
  update_personal_info: Boolean
  view_billing_details: Boolean
  watch_free_content_button: Boolean
  watch_now_button: Boolean
  watchlist: Boolean
  your_subscription: Boolean
}

""""""
type DvrPackage {
  amount: Int
  classification: String
  guid: String
  id: Int
  identifier: String
  migrated_to: String
  monthly_price: Int
  name: String
  package_type: String
  price: Int
  unit_amount_in_cents: Int
}

"""Contains details about a specific plan."""
type Plan {
  """App Supported"""
  app_supported: String

  """Plan Created At"""
  created_at: String

  """The future plan."""
  future_plan: String

  """The interval length."""
  interval_length: Int

  """The interval unit."""
  interval_unit: String

  """The expiring plan."""
  is_auto_renew: Int
  is_cancellable: Boolean

  """Is Grand Father"""
  is_grandfather: Int

  """The active inactive."""
  plan_active: Int

  """The plan code."""
  plan_code: String

  """The plan id."""
  plan_id: Int

  """The plan identifier."""
  plan_identifier: String

  """The plan name."""
  plan_name: String
  plan_offer_identifier: String

  """The priority."""
  plan_priority: Int

  """The total billing cycle."""
  total_billing_cycle: Int

  """Plan Updated At"""
  updated_at: String
}

""""""
type SubscriptionAddOns {
  add_on_code: String
  amount: String
  canonical_identifier: String
  classification: String
  identifier: String
  migrated_to: String
  move_id: String
  name: String
  package_type: String
  quantity: Float
  unit_amount_in_cents: Float
}

""""""
type OtherDetails {
  current_period_ends_at: String
  dvr_package: DvrPackage
  has_device_package: Boolean
  plan: Plan
  plan_code: String
  plan_offer_code: String
  subscription_add_ons: [SubscriptionAddOns]
  trial_ends_at: String
  uuid: String
}

""""""
type PastSubscription {
  canceled_at: String
  client_name: String
  past_subscription: String
  plan: Plan
  state: String
  subscription_add_ons: [SubscriptionAddOns]
  uuid: String
}

""""""
type CurrentSubscription {
  canceled_at: String
  client_name: String
  current_period_ends_at: String
  has_device_package: Boolean
  plan: Plan
  state: String
  subscription_add_ons: [SubscriptionAddOns]
  trial_ends_at: String
  uuid: String
}

""""""
type PendingSubscription {
  client_name: String
  current_period_ends_at: String
  plan: Plan
  subscription_add_ons: [SubscriptionAddOns]
  trial_ends_at: String
  uuid: String
}

""""""
type Subscriptions {
  current_subscription: CurrentSubscription
  items: Items
  paid_pause_package_identifier: String
  past_subscription: PastSubscription
  pending_subscription: PendingSubscription
  subscription_start_date: String
  subscription_status: String
  total_amount: Float
}

""""""
type LoyaltyRewards {
  currency: String
  redeemed_balance: Float
  reward_amount: Float
  reward_tokens: Float
}

""""""
type ShippingInfo {
  address1: String
  address2: String
  city: String
  state: String
  zip: String
}

""""""
type UserBillingInfo {
  address1: String
  address2: String
  card_type: String
  city: String
  first_name: String
  first_six: String
  last_four: String
  last_name: String
  month: Int
  state: String
  year: Int
  zip: String
}

""""""
type UserType {
  epay_user: Boolean
  freemium_type: String
  is_account_past_due: Boolean
  is_airtv_annual: Boolean
  is_bitpay_eligible: Boolean
  is_combo_pack: Boolean
  is_comcast_user: Boolean
  is_device_bundle: Boolean
  is_free_trial_user: Boolean
  is_fresh_user: Boolean
  is_gift_card_user: Boolean
  is_not_only_having_gc: Boolean
  is_old_amazon: Boolean
  is_ota_install_bundle: Boolean
  is_partner_billed: Boolean
  is_partner_emp_with_promo_usr: Boolean
  is_pause_eligible: Boolean
  is_prepaid_card_user: Boolean
  is_promo_user: Boolean
  is_sling_scriber_user: Boolean
  is_stair_step_user: Boolean
  is_swa_amazon_user: Boolean
  is_third_party_user: Boolean
  is_winback_eligible: Boolean
}

""""""
type UserDetails {
  account_status: String
  app_created: String
  authorization_code: String
  billing_info: UserBillingInfo
  cash_flow_billing_due_date: String
  classification: String
  email: String
  guid: String
  identifier: String
  loyalty_rewards: LoyaltyRewards
  name: String
  partner_name: String
  payment_type: String
  phone_number: String
  shipping_info: ShippingInfo
  user_type: UserType
}

""""""
type GetCustomerDetails {
  authorization_code: String
  billing_info: UserBillingInfo
  cash_flow_billing_due_date: String
  payment_type: String
}

""""""
type GetCustomerInfoOutput {
  error: String
  status: String
  user_details: GetCustomerDetails
}

""""""
type CustomFields {
  name: String
  value: String
}

""""""
type clearUserCacheOutput {
  success: Boolean
}

"""An input object that assigns or updates customer attributes."""
input PpCustomerCreateInput {
  """"""
  affiliate: String

  """"""
  app_created: String!

  """"""
  billing_info: PpBillingAddressInput

  """"""
  client_consumer_key: String

  """"""
  device_guid: String

  """"""
  email: String!

  """"""
  first_name: String

  """"""
  last_name: String

  """"""
  password: String

  """"""
  rewardsOptIn: Boolean

  """"""
  shipping_info: PpShippingAddressInput

  """"""
  user_guid: String
}

""""""
input PpBillingAddressInput {
  """"""
  address1: String

  """"""
  address2: String

  """"""
  city: String

  """"""
  state: String

  """"""
  zip: String
}

""""""
input PpShippingAddressInput {
  """"""
  address1: String

  """"""
  address2: String

  """"""
  city: String

  """"""
  state: String

  """"""
  zip: String
}

"""Contains details about a newly-created or updated customer."""
type PpCustomerCreateOutput {
  access_secret: String
  access_token: String
  account_status: String
  device_guid: String
  email: String
  user_guid: String
}

""""""
input SetExtraParametersOnCartInput {
  """"""
  affiliate_name: String

  """"""
  agent_id: String

  """"""
  app_created: String!

  """"""
  captcha_session_id: String

  """"""
  cart_id: String!

  """"""
  data_flow: String

  """"""
  employee_id: String

  """"""
  flow: String

  """"""
  flow_name: String

  """"""
  flow_type: String

  """"""
  partner_name: String

  """"""
  partner_offer: String

  """"""
  pbd_origin: String

  """"""
  pbd_partner: String

  """"""
  pbd_partner_account_id: String

  """"""
  promo_code: String
}

""""""
type SetExtraParametersOnCartOutput {
  cart: Cart!
}

"""Defines the input required to run the subscription postpone mutation"""
input subscriptionPostPoneInput {
  """"""
  discounts: DiscountInput!
}

""""""
input DiscountInput {
  """"""
  gift_card_pins: String!
}

"""Defines the possible output for the subscription postpone mutation"""
type subscriptionPostPoneOutput {
  response: PostPoneResponse
  status_code: Int
  status_message: String
}

""""""
type PostPoneResponse {
  gift_card_amount: String
  new_end_date: String
}

"""Partner Platform Filter Input."""
input PartnerPlatformFilterInput {
  """Partner Platform."""
  partner_platform: FilterTypeInput
}

"""Partner Platform PlanOffers."""
type getPartnerPlatformPlanOffers {
  """Partner Platform Output."""
  items: [PartnerPlatformOutput]

  """Partner ID"""
  partner_id: String
}

"""Partner Platform Output."""
type PartnerPlatformOutput {
  """Active."""
  active: String

  """Plan Identifier."""
  plan_identifier: String

  """Plan Offer Identifier."""
  plan_offer_identifier: String
}

"""Data required to generate request for PartnerSubscription server"""
input InitiatePartnerSubscriptionInput {
  """
  When not setting packages manually, specifies which cart to pull the packages from
  """
  cart_id: String!

  """
  When set to false a server-to-server request will be made to complete the transaction with the partner
  """
  isSDK: Boolean!

  """
  Manually set which packages should be sent instead of using current packages in the cart
  """
  packages: [PackageInput]

  """"""
  partner: String!

  """"""
  version: Int
}

""""""
type InitiatePartnerSubscriptionOutput {
  error: String

  """An array of packages that will be present in the partner"""
  packages: [PartnerPackagesDetail]
  partner_account_id: String
  partner_offer_id: String
  requestData: PartnerRequestData
  status_code: String
  status_message: String
  version: Int
}

"""Contains relevant information to be sent to the Partner"""
type PartnerRequestData {
  signatureInfo: [PartnerSignatureInfo]!
}

"""Contains relevant information regarding the transaction"""
type PartnerSignatureInfo {
  token: String!
}

"""Package information for the partner to identify them on their system"""
type PartnerPackagesDetail {
  name: String @deprecated(reason: "The API no longer provides a value")
  package_guid: String
  package_identifier: String
  package_type: String
  partner_offer_id: String!
  partner_sku: String!
}

""""""
input PackageInput {
  """"""
  identifier: String!

  """"""
  list_price: String

  """"""
  name: String!

  """"""
  operation: String

  """"""
  price: String
}

""""""
type pauseSubscriptionOutput {
  """An error encountered while adding an item to the cart."""
  code: String

  """Failure/Success Message"""
  message: String

  """Next Billing Date of a subscription"""
  next_billing_date: String
}

""""""
type resumeSubscriptionOutput {
  """Failure/Success Code"""
  code: String

  """Failure/Success Message"""
  message: String

  """Next Billing Date of a subscription"""
  next_billing_date: String
}

""""""
type pauseEligibilityOutput {
  pause_end_date: String
  pause_start_date: String
  status: Boolean
}

"""
OffersFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input OfferFilterInput {
  """Requesting App to filter with"""
  app_supported: FilterTypeInput

  """Grand Fathered to filter with"""
  is_grandfather: FilterTypeInput

  """Offer Type to filter with"""
  offer_type: FilterTypeInput

  """Filters by active inactive."""
  plan_active: FilterTypeInput

  """Plan Code to filter with"""
  plan_code: FilterTypeInput

  """Offer Category to filter with"""
  plan_offer_category: FilterTypeInput

  """Offer Code to filter with"""
  plan_offer_identifier: FilterTypeInput

  """Filters by priority."""
  plan_priority: FilterTypeInput
}

"""Input OfferSortInput"""
input OfferSortInput {
  """Plan Code"""
  plan_code: SortEnum
}

"""
The Plan Offers object is the top-level object returned in a product search.
"""
type PlanOffers {
  """An array of offers that match the specified search criteria."""
  items: [PlansData]

  """Page Info Details."""
  page_info: PageInfo

  """The number of offers that are marked as visible."""
  total_count: Int
}

""""""
type OffersData {
  """App Supported"""
  app_supported: String

  """Plan offer apply discount to."""
  apply_discount_to: String

  """Offer Crated At"""
  created_at: String

  """Plan offer Description"""
  description: String

  """Discount"""
  discount: String

  """Discount Type"""
  discount_type: String

  """Duration Date"""
  duration_date: String

  """Duration Length"""
  duration_length: Int

  """Duration Type"""
  duration_type: String

  """Duration Unit"""
  duration_unit: String

  """Is Grand Father"""
  is_grandfather: Int

  """Offer Identifier"""
  offer_identifier: String

  """Offer Type"""
  offer_type: String

  """Package"""
  package: String

  """Offer Category"""
  plan_offer_category: String

  """Plan Offer Code"""
  plan_offer_code: String

  """Plan offer Name"""
  plan_offer_name: String

  """Plan offer priority."""
  priority: Int

  """Plan offer refresh entitlement."""
  refresh_entitlement: Int

  """Plan offer Active or Inactive"""
  status: Int

  """Plan Updated At"""
  updated_at: String
}

""""""
type PlansData {
  """App Supported"""
  app_supported: String

  """Plan Crated At"""
  created_at: String

  """Future Plan"""
  future_plan: String

  """Interval Length"""
  interval_length: Int

  """Interval Unit"""
  interval_unit: String

  """Expiring Plan"""
  is_auto_renew: Int

  """Is Grand Father"""
  is_grandfather: Int

  """Is Plan Active"""
  plan_active: Int

  """Plan Code"""
  plan_code: String

  """Plan ID"""
  plan_id: String

  """Plan Name"""
  plan_name: String

  """Plan Offers"""
  plan_offers: OffersData

  """Plan priority."""
  plan_priority: Int

  """Billing Cycles"""
  total_billing_cycle: Int

  """Plan Updated At"""
  updated_at: String
}

"""Input PlanSortInput"""
input PlanSortInput {
  """Plan Code"""
  plan_code: SortEnum
}

"""Identifies the filter to use for filtering orders."""
input planFilterInput {
  """App Supported to filter with"""
  app_supported: FilterTypeInput

  """Filters by future plan."""
  future_plan: FilterTypeInput

  """Filters by interval length."""
  interval_length: FilterTypeInput

  """Filters by interval unit."""
  interval_unit: FilterTypeInput

  """Filters by expiring plan."""
  is_auto_renew: FilterTypeInput

  """Grand Fathered to filter with"""
  is_grandfather: FilterTypeInput

  """Filters by active inactive."""
  plan_active: FilterTypeInput

  """Filters by plan code."""
  plan_code: FilterTypeInput

  """Filters by plan id."""
  plan_id: FilterTypeInput

  """Filters by plan identifier."""
  plan_identifier: FilterTypeInput

  """Filters by plan identifier."""
  plan_name: FilterTypeInput

  """Filters by priority."""
  plan_priority: FilterTypeInput

  """Filters by total billing cycles."""
  total_billing_cycles: FilterTypeInput
}

"""
The collection of plans that match the conditions defined in the filter.
"""
type Plans {
  items: [Plan]

  """Page Info Details."""
  page_info: PageInfo

  """The number of offers that are marked as visible."""
  total_count: Int
}

"""An input object that updates prospect users free packages selections"""
input UserFreestreamUpdateInput {
  """"""
  package_guids: [String]!

  """"""
  user_guid: String!
}

"""Contains status details & returns the status code and message."""
type UserFreestreamUpdateOutput {
  status_code: String
  status_message: String
}

"""Prospect Input"""
input ProspectInput {
  """App Created"""
  app_created: String

  """Classification"""
  classification: String

  """Client Consumer Key"""
  client_consumer_key: String

  """Device Guid"""
  device_guid: String
}

"""Prospect Output"""
type ProspectOutput {
  """Access Secret"""
  access_secret: String

  """Access Token"""
  access_token: String

  """Account Status"""
  account_status: String

  """Device Guid"""
  device_guid: String

  """Domain Id"""
  domain_id: String

  """User Guid"""
  user_guid: String

  """User Id"""
  user_id: Int
}

"""PackageFilterInput defines the filters to be used in the search."""
input PackageFilterInput {
  """Billing address zipcode"""
  zipcode: FilterTypeInput!
}

""""""
type RegionalPackageData {
  """Child Item Guids"""
  child_guid: [String]

  """Child Identifier"""
  child_identifier: [String]

  """Packages Identifier"""
  identifier: String

  """Packages Guid"""
  item_guid: String
}

""""""
type CanonicalPackageData {
  """Child Item Guids"""
  child_guid: [String]

  """Child Identifier"""
  child_identifier: [String]

  """Packages Identifier"""
  identifier: String

  """Packages Guid"""
  item_guid: String
}

"""Contains details about the packages"""
type RegionalPackageMapOutput {
  packages: [PackagesMappingOutput]

  """Packages Identifier"""
  zipcode: String
}

""""""
type PackagesMappingOutput {
  """Base Packages Identifier"""
  packageId: String

  """Regional Packages Identifier"""
  packageName: String
}

""""""
type changeSubscriptionOutput {
  """cart Id for quote."""
  cartId: String

  """An error encountered while adding an item to the cart."""
  code: String

  """An error encountered while adding an item to the cart."""
  message: String
}

"""Subscription Api Response Output"""
type SubscriptionApiResponseOutput {
  affiliate: String
  confirmation_number: String
  coupon_code: String
  current_period_ends_at: String
  current_period_started_at: String
  partner_coupon_name: String
  status: String
  subscription_id: String
}

"""Update Selection Api Response Output"""
type UpdateSelectionOutput {
  status_code: Int
  status_message: String
  user_info: UpdateSelectionUserInfoOutput
}

"""Update Selection User Info Response Output"""
type UpdateSelectionUserInfoOutput {
  ac_order_number: String
  account_status: String
  customer_code: String
  user_guid: String
}

"""Update Selection Billing Info Response Output"""
type UpdateSelectionBillingInfoOutput {
  success: Boolean
}

"""
Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input SubscriptionFilterInput {
  """"""
  packages: FilterEqualTypeInput

  """"""
  partner_info: FilterEqualTypeInput

  """"""
  partner_name: FilterEqualTypeInput

  """"""
  plan_code: FilterEqualTypeInput
}

"""
Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for.
"""
input LegacyToCommerceFilterInput {
  """"""
  packages: FilterEqualTypeInput!

  """"""
  plan_code: FilterEqualTypeInput!

  """"""
  zipcode: FilterEqualTypeInput
}

""""""
type LegacyToCommercePlanDetail {
  future_plan_code: String
  plan_code: String
  plan_identifier: String
  plan_interval_length: String
  plan_interval_unit: String
  plan_name: String
  priority: String
  total_billing_cycles: String
}

""""""
type PackagesDetail {
  add_on_code: String
  csr_required: Boolean
  description: String
  guid: String
  identifier: String
  name: String
  package_type: String
  plan_package_price: Float
}

""""""
type OfferPackageDetail {
  sku: String
}

""""""
type SubscriptionsOutput {
  items: LegacyToCommerceItems
}

"""Contains the results of a \`future subscription\` query."""
type Items {
  offer_packages: OfferPackageDetail

  """An array of packages """
  packages: [PackagesDetail]

  """An array of plans """
  plan: PlanDetail
}

"""Contains the results of a \`future subscription\` query."""
type LegacyToCommerceItems {
  """An array of packages """
  packages: [PackagesDetail]

  """An array of plans """
  plan: LegacyToCommercePlanDetail
}

"""An input data from AEM."""
input PpvTransactionInput {
  """"""
  guid: String
}

""""""
type PpvTransactionOutput {
  error: String
  status_code: String
  status_message: String
  success: String
  transaction_id: String
}

"""Fetch packages according to filters"""
type FetchPackageTaxCodeResult {
  """Product Type"""
  product_type: String

  """Tax Class Code"""
  tax_class_code: String
}

"""
EligibleOffersFilterInput defines the filters to be used in the search.
"""
input EligibleOffersFilterInput {
  """Sales Rule offer type"""
  offer_type: FilterTypeInput
}

""""""
input SalesRuleFilterInput {
  """Apply to shipping of sales rule."""
  apply_to_shipping: FilterTypeInput

  """code of sales rule."""
  code: FilterTypeInput

  """code of sales rule."""
  condition: FilterTypeInput

  """Coupon Type of sales rule."""
  coupon_type: FilterTypeInput

  """Created In of sales rule."""
  created_in: FilterTypeInput

  """Description of sales rule."""
  description: FilterTypeInput

  """Discount Amount of sales rule."""
  discount_amount: FilterTypeInput

  """Discount Qty of sales rule."""
  discount_qty: FilterTypeInput

  """Discount Step of sales rule."""
  discount_step: FilterTypeInput

  """From date of sales rule."""
  from_date: FilterTypeInput

  """Name of sales rule."""
  is_active: FilterTypeInput

  """Is advanced of sales rule."""
  is_advanced: FilterTypeInput

  """Is rss of sales rule."""
  is_rss: FilterTypeInput

  """Name of sales rule."""
  name: FilterTypeInput

  """Product Ids of sales rule."""
  product_ids: FilterTypeInput

  """Row Id of sales rule."""
  row_id: FilterTypeInput

  """Rule id of sales rule."""
  rule_id: FilterTypeInput

  """Simple Action of sales rule."""
  simple_action: FilterTypeInput

  """Simple free shipping of sales rule."""
  simple_free_shipping: FilterTypeInput

  """Sort Order of sales rule."""
  sort_order: FilterTypeInput

  """Stop rule processing of sales rule."""
  stop_rules_processing: FilterTypeInput

  """Time used of sales rule."""
  time_used: FilterTypeInput

  """To date of sales rule."""
  to_date: FilterTypeInput

  """Updated In of sales rule."""
  updated_in: FilterTypeInput

  """Use auto generation of sales rule."""
  use_auto_generation: FilterTypeInput

  """User per customer of sales rule."""
  user_per_customer: FilterTypeInput

  """Uses per coupon of sales rule."""
  uses_per_coupon: FilterTypeInput
}

""""""
type SalesRuleOutput {
  """An array of rules that match the specified search criteria."""
  items: [Rule]

  """
  An object that includes the page_info and currentPage values specified in the query.
  """
  pageInfo: PageInfo

  """The number of reviews returned."""
  total_count: Int
}

""""""
type Rule {
  """Action serialized of sales rule."""
  action_serialized: String

  """Apply to shipping of sales rule."""
  apply_to_shipping: String

  """Condition serialized of sales rule."""
  conditions_serialized: String

  """Coupon Type of sales rule."""
  coupon_type: String

  """Created In of sales rule."""
  created_in: String

  """Description of sales rule."""
  description: String

  """Discount Amount of sales rule."""
  discount_amount: String

  """Discount Qty of sales rule."""
  discount_qty: String

  """Discount Step of sales rule."""
  discount_step: String

  """Duration Date of sales rule."""
  duration_date: String

  """Duration Length of sales rule."""
  duration_length: Int

  """Duration Unit  of sales rule."""
  duration_unit: String

  """From date of sales rule."""
  from_date: String

  """Name of sales rule."""
  is_active: String

  """Is advanced of sales rule."""
  is_advanced: String

  """Is rss of sales rule."""
  is_rss: String

  """Name of sales rule."""
  name: String

  """Plan Identifier of sales rule."""
  plan_identifier: String

  """Product Ids of sales rule."""
  product_ids: String

  """Row Id of sales rule."""
  row_id: String

  """Rule id of sales rule."""
  rule_id: Int

  """Rule Type of sales rule."""
  rule_type: String

  """Simple Action of sales rule."""
  simple_action: String

  """Simple free shipping of sales rule."""
  simple_free_shipping: String

  """Sort Order of sales rule."""
  sort_order: String

  """Stop rule processing of sales rule."""
  stop_rules_processing: String

  """Time used of sales rule."""
  time_used: String

  """To date of sales rule."""
  to_date: String

  """Updated In of sales rule."""
  updated_in: String

  """Use auto generation of sales rule."""
  use_auto_generation: String

  """User per customer of sales rule."""
  user_per_customer: String

  """Uses per coupon of sales rule."""
  uses_per_coupon: String
}

""""""
type eligibleOffersOutput {
  """An array of offers that match the customer eligibility."""
  offers: [OfferData]

  """The number of offers returned."""
  total_count: Int
}

""""""
type OfferData {
  """Ac Type."""
  ac_type: String

  """Description."""
  description: String

  """Name."""
  name: String

  """Offer Identifier."""
  offer_identifier: String

  """Offer Type."""
  offer_type: String

  """Plan Offer Identifier."""
  planoffer_identifier: String

  """Priority."""
  priority: Int

  """Refresh Entitlements."""
  refresh_entitlements: Int
}

"""Eligibility check for Same Day Refunds"""
type eligibleForFullRefundOutput {
  """Refundable Amount"""
  refund_amount: Float

  """Result type true/false"""
  status: Boolean
}

"""Update Cart Items Price And Tax Output"""
type AddressVerificationScrubOutput {
  """Address Type"""
  address_type: String

  """Calculate Tax"""
  calculateTax: Boolean

  """Cart Id"""
  cart_id: String

  """Error message"""
  error: String

  """Full address"""
  full_address: Boolean
  scrub_response: ScrubResponseOutput

  """Skip Full Address Check"""
  skip_full_address_check: Boolean

  """Result type success/failed"""
  status: String
  status_code: Int
  tax_response: TaxResponseOutput
}

"""Scrub Address Output"""
type ScrubResponseOutput {
  addressChangeIndicators: AddressChangeIndicatorsOutput

  """Cart Id"""
  cart_id: String

  """Plan code"""
  geoCode: String

  """Certificate Required"""
  isValidAddress: Boolean
  scrub_error: String

  """Trail Days"""
  scrubbedAddressChanged: Boolean
  scrubbed_address: ScrubbedAddressOutput
  status: StatusOutput
}

"""Scrub Address Output"""
type ScrubbedAddressOutput {
  """Address1"""
  address1: String

  """Address2"""
  address2: String

  """Address Type"""
  address_type: String

  """Cart Id"""
  cart_id: String

  """City"""
  city: String

  """County"""
  county: String

  """State"""
  state: String

  """Zip"""
  zip: String

  """ZipPlus4"""
  zipPlus4: String
}

"""Calculated Tax Output"""
type TaxResponseOutput {
  add_ons: [AddOnsResponseOutput]

  """Billing cycle length"""
  billing_cycle_length_in_months: Int

  """Cart Id"""
  cart_id: String

  """Certificate Required"""
  certificate_required: Boolean

  """Display Tax"""
  display_tax: Float

  """Future start date"""
  future_start_date: String

  """Monthly Amount"""
  monthly_amount: Float

  """Plan code"""
  plan_code: String

  """Price"""
  price: Float
  promotion_actions: PromotionResponseOutput

  """Total Due"""
  total_due: Float

  """Trail Days"""
  trial_days: Int
}

"""Calculated Items Tax Output"""
type AddOnsResponseOutput {
  """1 or 0"""
  auto_entitled: String!

  """Cart Id"""
  cart_id: String

  """1 or 0"""
  display_in_cart: String!

  """Item free trial attribute value"""
  free_trial: Boolean

  """Item Guid"""
  guid: String

  """Item Sku"""
  identifier: String

  """Item Name"""
  name: String

  """Item Package Type"""
  package_type: String

  """Plan Offer Price"""
  plan_offer_price: Float

  """Plan Package Price"""
  plan_package_price: Float

  """Item Tax"""
  tax: Float
}

"""Calculated Items Tax Output"""
type PromotionResponseOutput {
  """Amount"""
  amount: Float

  """Cart Id"""
  cart_id: String

  """Code"""
  code: String

  """Description"""
  promotion_description: String

  """Type"""
  promotion_type: String
}

""""""
input addressVerificationScrubInput {
  """"""
  address: CartAddressInput!

  """"""
  address_type: String

  """bp_code for a refer a friend"""
  bp_e: String

  """"""
  calculateTax: Boolean

  """"""
  cart_id: String!

  """"""
  skip_full_address_check: Boolean
}

"""The collection of orders that are associated with the guest cart."""
type CartItemAndTotals {
  applied_coupon: AppliedCoupon @deprecated(reason: "Use \`applied_coupons\` instead.")

  """
  An array of \`AppliedCoupon\` objects. Each object contains the \`code\` text attribute, which specifies the coupon code.
  """
  applied_coupons: [AppliedCoupon]

  """An array of available payment methods."""
  available_payment_methods: [AvailablePaymentMethod]

  """Base Grand Total"""
  base_grand_total: Float

  """Base Subtotal With Discount"""
  base_subtotal_with_discount: Float

  """The billing address assigned to the cart."""
  billing_address: BillingCartAddress

  """Billing cycle length"""
  billing_cycle_length_in_months: Int

  """The unique ID of a \`Cart\` object."""
  cart_id: String!

  """Certificate Required"""
  certificate_required: Boolean

  """Display Tax"""
  display_tax: Float

  """The email address of the guest or customer."""
  email: String

  """Future start date"""
  future_start_date: String

  """The unique ID for a \`Cart\` object."""
  id: ID!

  """Indicates whether the cart contains only virtual products."""
  is_virtual: Boolean!

  """An array of products that have been added to the cart."""
  items: [CartItemData]

  """Monthly Amount"""
  monthly_amount: Float

  """plan_code"""
  plan_code: String

  """Pricing details for the quote."""
  prices: CartPrices

  """Indicates which payment method was applied to the cart."""
  selected_payment_method: SelectedPaymentMethod

  """An array of shipping addresses assigned to the cart."""
  shipping_addresses: [ShippingCartAddress]!

  """Shipping Amount"""
  shipping_amount: Float

  """Shipping Tax Amount"""
  shipping_tax_amount: Float

  """Total Due"""
  total_due: Float

  """The total number of items in the cart."""
  total_quantity: Float!

  """Trail Days"""
  trial_days: Int
}

"""Cart Item Data"""
type CartItemData {
  id: String! @deprecated(reason: "Use \`uid\` instead.")

  """
  Contains details about the price of the item, including taxes and discounts.
  """
  prices: CartItemPrices
  product: AddItemsResponseOutput

  """The quantity of this item in the cart."""
  quantity: Float!
}

"""Cart Item Output"""
type AddItemsResponseOutput {
  """Identifier"""
  identifier: String

  """Name"""
  name: String

  """Price"""
  price: Float

  """Tax Amount"""
  tax_amount: Float

  """Tax Percent"""
  tax_percent: Float
}

""""""
input BraintreeInput {
  """
  Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway.
  """
  device_data: String

  """
  States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration.
  """
  is_active_payment_token_enabler: Boolean!

  """
  The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction.
  """
  payment_method_nonce: String!
}

""""""
input BraintreeCcVaultInput {
  """"""
  device_data: String

  """"""
  public_hash: String!
}

"""The collection of coupons that can be available."""
type Coupons {
  """coupon codes"""
  coupon_codes: [CouponCodes]
}

"""The collection of coupons that can be available."""
type CouponCodes {
  """coupon codes"""
  code: String
}`,pn=dw(),Ro=Ga(qa.DIRECTIVES,[]);var Tl;const QD=Ya((Tl=pn.getQueryType())==null?void 0:Tl.getFields());var Il;const XD=Ya((Il=pn.getMutationType())==null?void 0:Il.getFields());var vl;const ZD=Ya((vl=pn.getSubscriptionType())==null?void 0:vl.getFields()),ru=Ft.keyBy(Op(),r=>r.name.toLocaleLowerCase()),ew=Ft.mapValues(ru,r=>{const n=Ro.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?r.args:n.args.map(t=>r.args.find(a=>a.name===t)).filter(t=>!!t):[]}),nw=Ya(pn.getTypeMap()),tw=HD(pn);function Ya(r){return Ft.mapKeys(r||{},(n,t)=>t.toLocaleLowerCase())}function rw(){return Ft.size(pn.getTypeMap())<=10}function iw(){return[Do("Queries",pn.getQueryType()),Do("Mutations",pn.getMutationType()),Do("Subscriptions",pn.getSubscriptionType()),cw(),ow()].filter(r=>!!r)}function Do(r,n){return sw(r,aw(n))}function aw(r){return Ft.sortBy((r==null?void 0:r.getFields())||{},n=>n.name)}function sw(r,n){return n.length===0?null:{type:"menu",title:r,children:n.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:wi.joinUrlPaths($a(),r.toLocaleLowerCase(),t.name)}))}}function ow(){return rw()?null:{type:"menu",title:"Types",children:Ft.sortBy(Ft.map(pn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:wi.joinUrlPaths($a(),"types",n.name)}))}}function ww(){return!!pn.getQueryType()}function Aw(r){return QD[r.toLocaleLowerCase()]}function Cw(){return!!pn.getMutationType()}function Ew(r){return XD[r.toLocaleLowerCase()]}function kw(){return!!pn.getSubscriptionType()}function Fw(r){return ZD[r.toLocaleLowerCase()]}function Pw(r){return nw[r.toLocaleLowerCase()]}function uw(r){return ru[r.toLocaleLowerCase()]}function Ow(r){return uw(r.name)!==void 0}function Uw(){return Ft.size(ru)>0}function Rw(r){return ew[r.name.toLocaleLowerCase()]||[]}function xw(r){if(r)return tw.getFor(r)}function Nw(r){return Ft.flatMap(r.getFields(),n=>({field:n,possibleDescriptions:Pp(n,r)}))}function Pp(r,n){return r?r.description?[{description:r.description,from:n}]:We(n)?n.getInterfaces().flatMap(t=>Pp(t.getFields()[r.name],t)):[]:[]}function Op(){return Ro.some(r=>(r==null?void 0:r.name)==="*")?pn.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):Ro.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?pn.getDirective(r):void 0).filter(r=>!!r)}function dw(){return bl.trim().length===0?$D(JSON.parse(JSON.stringify({__schema:{types:[]}}))):WD(bl)}function cw(){const r=Op();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(n=>({type:"page",title:n.name,href:wi.joinUrlPaths($a(),"directives",n.name),section:"Directives"}))}}const Lw=Ga(qa.APP_TITLE,"GraphQL Documentation"),Up=pw().concat(iw());fw(Up);const lw=Object.freeze(Up),Bw=hw();function pw(){return Ga(qa.PAGES,mw()).filter(n=>!!n).map(n=>xp([],n))}function hw(){const r=gw();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function fw(r){function n(a,s){for(const o of a){if(o.type==="page"){s(o);continue}o.type==="menu"&&n(o.children,s)}}let t;n(r,a=>{t&&(t.next={title:a.title,section:a.section,href:a.href},a.previous={title:t.title,section:t.section,href:t.href}),t=a})}function gw(){return Rp(()=>!0)}function Mw(r){return Rp(n=>n.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function Rp(r){function n(t){for(const a of t){if(a.type==="page"&&r(a))return a;if(a.type==="menu"){const s=n(a.children);if(s)return s}}return null}return n(lw)}function xp(r,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:wi.joinUrlPaths($a(),...r,Sl(n.title))};const t=r.concat([Sl(n.title)]);return{type:"menu",title:n.title,children:n.content.map(a=>({...xp(t,a),section:n.title}))}}function Sl(r){return wi.generatePathSegment(r,new El)}function mw(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{vI as A,rw as B,Pw as C,xw as D,Jt as E,nt as F,$e as G,$n as H,We as I,yn as J,T as K,Nw as L,fr as M,Nr as N,vw as O,Ba as P,Al as Q,gi as R,Iw as S,El as T,be as U,En as V,Lw as W,Ft as _,Cw as a,ww as b,Aw as c,kw as d,Fw as e,Mw as f,Ew as g,Bw as h,wl as i,Tw as j,Uw as k,uw as l,Rw as m,$a as n,Ow as o,lw as p,lt as q,ep as r,pn as s,bn as t,wi as u,we as v,Dw as w,Ga as x,qa as y,di as z};
