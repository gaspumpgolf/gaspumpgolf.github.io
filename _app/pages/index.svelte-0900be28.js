var Ve=Object.defineProperty;var Re=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var Ne=(a,e,t)=>e in a?Ve(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Me=(a,e)=>{for(var t in e||(e={}))ze.call(e,t)&&Ne(a,t,e[t]);if(Re)for(var t of Re(e))We.call(e,t)&&Ne(a,t,e[t]);return a};import{S as K,i as V,s as z,e as g,t as T,k as $,c as y,a as S,g as P,d as u,n as D,f as A,H as n,J as Q,I as H,K as de,l as re,L as Ae,M as Xe,h as W,b as J,N as Ge,O as $e,P as De,A as be,Q as Ze,R as xe,j as X,m as Z,o as x,x as I,u as L,v as ee,r as se,w as oe,T as et,U as tt,V as lt}from"../chunks/vendor-42f1c17b.js";import{d as F,a as me,l as le,M as rt}from"../chunks/levels-3e3fbacb.js";function st(a){let e,t,l,r,s,f,i;return{c(){e=g("p"),t=T("The game where you pump gas, precisely."),l=$(),r=g("button"),s=T("Play \u{1F579}\uFE0F")},l(c){e=y(c,"P",{});var p=S(e);t=P(p,"The game where you pump gas, precisely."),p.forEach(u),l=D(c),r=y(c,"BUTTON",{});var _=S(r);s=P(_,"Play \u{1F579}\uFE0F"),_.forEach(u)},m(c,p){A(c,e,p),n(e,t),A(c,l,p),A(c,r,p),n(r,s),f||(i=Q(r,"click",a[1]),f=!0)},p:H,i:H,o:H,d(c){c&&u(e),c&&u(l),c&&u(r),f=!1,i()}}}function ot(a){const e=de();return[e,()=>e("play")]}class at extends K{constructor(e){super();V(this,e,ot,st,z,{})}}function nt(a){let e,t,l,r,s,f=F(a[1])+"",i,c,p=a[4]&&Ie(a);return{c(){e=g("p"),t=T("You finished with a score of "),l=g("mark"),r=g("strong"),s=T("$"),i=T(f),c=T(`.
    `),p&&p.c()},l(_){e=y(_,"P",{});var d=S(e);t=P(d,"You finished with a score of "),l=y(d,"MARK",{});var E=S(l);r=y(E,"STRONG",{});var m=S(r);s=P(m,"$"),i=P(m,f),m.forEach(u),E.forEach(u),c=P(d,`.
    `),p&&p.l(d),d.forEach(u)},m(_,d){A(_,e,d),n(e,t),n(e,l),n(l,r),n(r,s),n(r,i),n(e,c),p&&p.m(e,null)},p(_,d){d&2&&f!==(f=F(_[1])+"")&&W(i,f),_[4]?p?p.p(_,d):(p=Ie(_),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},d(_){_&&u(e),p&&p.d()}}}function ft(a){let e,t,l,r=F(a[1])+"",s,f,i,c,p,_,d,E,m,k,G=F(a[2])+"",N,M,v;return{c(){e=g("p"),t=g("small"),l=T("Score: $"),s=T(r),f=$(),i=g("p"),c=T("It is "),p=g("strong"),_=T(a[0]),d=T(` and you have
    `),E=g("mark"),m=g("strong"),k=T("$"),N=T(G),M=T(" \u26F3"),v=T(". Pump it exactly.")},l(b){e=y(b,"P",{});var w=S(e);t=y(w,"SMALL",{});var R=S(t);l=P(R,"Score: $"),s=P(R,r),R.forEach(u),w.forEach(u),f=D(b),i=y(b,"P",{});var o=S(i);c=P(o,"It is "),p=y(o,"STRONG",{});var h=S(p);_=P(h,a[0]),h.forEach(u),d=P(o,` and you have
    `),E=y(o,"MARK",{});var O=S(E);m=y(O,"STRONG",{});var q=S(m);k=P(q,"$"),N=P(q,G),q.forEach(u),M=P(O," \u26F3"),O.forEach(u),v=P(o,". Pump it exactly."),o.forEach(u)},m(b,w){A(b,e,w),n(e,t),n(t,l),n(t,s),A(b,f,w),A(b,i,w),n(i,c),n(i,p),n(p,_),n(i,d),n(i,E),n(E,m),n(m,k),n(m,N),n(E,M),n(i,v)},p(b,w){w&2&&r!==(r=F(b[1])+"")&&W(s,r),w&1&&W(_,b[0]),w&4&&G!==(G=F(b[2])+"")&&W(N,G)},d(b){b&&u(e),b&&u(f),b&&u(i)}}}function Ie(a){let e,t,l;return{c(){e=T("You did better than "),t=T(a[4]),l=T(" of players.")},l(r){e=P(r,"You did better than "),t=P(r,a[4]),l=P(r," of players.")},m(r,s){A(r,e,s),A(r,t,s),A(r,l,s)},p(r,s){s&16&&W(t,r[4])},d(r){r&&u(e),r&&u(t),r&&u(l)}}}function it(a){let e;function t(s,f){return s[3]==="game"?ft:nt}let l=t(a),r=l(a);return{c(){r.c(),e=re()},l(s){r.l(s),e=re()},m(s,f){r.m(s,f),A(s,e,f)},p(s,[f]){l===(l=t(s))&&r?r.p(s,f):(r.d(1),r=l(s),r&&(r.c(),r.m(e.parentNode,e)))},i:H,o:H,d(s){r.d(s),s&&u(e)}}}function ut(a,e,t){let l,{year:r}=e,{score:s}=e,{target:f}=e,{state:i}=e,{tally:c}=e;const p=_=>{if(!_)return;const d=Ae(_,m=>m.value);_.sort((m,k)=>k.key-m.key);let E=0;for(let m=0;m<_.length&&!(s>=_[m].key);m++)E+=_[m].value;return Xe(".0%")(E/d)};return a.$$set=_=>{"year"in _&&t(0,r=_.year),"score"in _&&t(1,s=_.score),"target"in _&&t(2,f=_.target),"state"in _&&t(3,i=_.state),"tally"in _&&t(5,c=_.tally)},a.$$.update=()=>{a.$$.dirty&32&&t(4,l=p(c))},[r,s,f,i,l,c]}class ct extends K{constructor(e){super();V(this,e,ut,it,z,{year:0,score:1,target:2,state:3,tally:5})}}const Oe="abcdefghijklmnopqrstuvwxyz".split("");function mt(a){return`${a}`.split("").map(t=>{const l=Math.floor(Math.random()*Oe.length);return`${Oe[l]}${t}`}).join("")}function pt(a){let e,t,l,r,s=F(a[2])+"",f,i,c,p,_=F(a[1])+"",d,E,m,k,G,N,M,v,b,w,R;return{c(){e=g("p"),t=T("This Sale..."),l=g("strong"),r=T("$"),f=T(s),i=$(),c=g("p"),p=T("Gallons........"),d=T(_),E=$(),m=g("button"),k=T("Pump \u26FD"),G=$(),N=g("p"),M=g("small"),v=g("em"),b=T("Press & hold to pump"),this.h()},l(o){e=y(o,"P",{});var h=S(e);t=P(h,"This Sale..."),l=y(h,"STRONG",{});var O=S(l);r=P(O,"$"),f=P(O,s),O.forEach(u),h.forEach(u),i=D(o),c=y(o,"P",{});var q=S(c);p=P(q,"Gallons........"),d=P(q,_),q.forEach(u),E=D(o),m=y(o,"BUTTON",{class:!0});var Y=S(m);k=P(Y,"Pump \u26FD"),Y.forEach(u),G=D(o),N=y(o,"P",{});var j=S(N);M=y(j,"SMALL",{});var B=S(M);v=y(B,"EM",{});var U=S(v);b=P(U,"Press & hold to pump"),U.forEach(u),B.forEach(u),j.forEach(u),this.h()},h(){m.disabled=a[0],J(m,"class","svelte-1tj7vw1")},m(o,h){A(o,e,h),n(e,t),n(e,l),n(l,r),n(l,f),A(o,i,h),A(o,c,h),n(c,p),n(c,d),A(o,E,h),A(o,m,h),n(m,k),A(o,G,h),A(o,N,h),n(N,M),n(M,v),n(v,b),w||(R=[Q(m,"keydown",a[3]),Q(m,"mousedown",a[3]),Q(m,"touchstart",a[3],{passive:!0}),Q(m,"keyup",a[4]),Q(m,"mouseleave",a[4]),Q(m,"mouseup",a[4]),Q(m,"touchend",a[4])],w=!0)},p(o,[h]){h&4&&s!==(s=F(o[2])+"")&&W(f,s),h&2&&_!==(_=F(o[1])+"")&&W(d,_),h&1&&(m.disabled=o[0])},i:H,o:H,d(o){o&&u(e),o&&u(i),o&&u(c),o&&u(E),o&&u(m),o&&u(G),o&&u(N),w=!1,Ge(R)}}}const _t=10,ht=2;function dt(a,e,t){let l,r;const s=60*1e3,f=_t/s;let{disabled:i}=e,{price:c}=e;const p=()=>t(1,d=0),_=de();let d=0,E=0,m=0,k=!1;const G=()=>{t(7,E=Date.now()),k&&requestAnimationFrame(G)},N=()=>{if(k)return!0;_("start"),t(8,m=Date.now()),k=!0,G()},M=v=>{!k||(k=!1,_("stop",{sale:r,id:mt(l)}))};return a.$$set=v=>{"disabled"in v&&t(0,i=v.disabled),"price"in v&&t(5,c=v.price)},a.$$.update=()=>{a.$$.dirty&384&&t(9,l=E-m),a.$$.dirty&512&&t(1,d=l*f),a.$$.dirty&34&&t(2,r=$e(d*c,ht))},[i,d,r,N,M,c,p,E,m,l]}class bt extends K{constructor(e){super();V(this,e,dt,pt,z,{disabled:0,price:5,reset:6})}get reset(){return this.$$.ctx[6]}}function vt(a){const e=["o l i v i a","e m m a","a v a","c h a r l o t t e","s o p h i a","a m e l i a","i s a b e l l a","m i a","e v e l y n","h a r p e r"],t=a%10;return e[t].replace(/ /g,"")}function gt(a){const e=`${a}`,t=e.length,l=e.charAt(t-7),r=e.charAt(t-2),s=e.charAt(t-4),f=e.charAt(t-5),i=e.charAt(t-1);return`${l}${r}${s}${i}${f}`}function qe(a){let e,t,l,r,s,f,i,c,p,_;return{c(){e=g("h2"),t=T("You made the high score list!"),l=$(),r=g("form"),s=g("input"),f=$(),i=g("button"),c=T("Submit \u{1F3C6}"),this.h()},l(d){e=y(d,"H2",{});var E=S(e);t=P(E,"You made the high score list!"),E.forEach(u),l=D(d),r=y(d,"FORM",{});var m=S(r);s=y(m,"INPUT",{placeholder:!0,maxlength:!0}),f=D(m),i=y(m,"BUTTON",{type:!0});var k=S(i);c=P(k,"Submit \u{1F3C6}"),k.forEach(u),m.forEach(u),this.h()},h(){J(s,"placeholder","Enter your name"),J(s,"maxlength","20"),J(i,"type","submit"),i.disabled=a[2]},m(d,E){A(d,e,E),n(e,t),A(d,l,E),A(d,r,E),n(r,s),De(s,a[0]),n(r,f),n(r,i),n(i,c),p||(_=[Q(s,"input",a[6]),Q(r,"submit",a[3])],p=!0)},p(d,E){E&1&&s.value!==d[0]&&De(s,d[0]),E&4&&(i.disabled=d[2])},d(d){d&&u(e),d&&u(l),d&&u(r),p=!1,Ge(_)}}}function yt(a){let e,t=a[1]&&qe(a);return{c(){t&&t.c(),e=re()},l(l){t&&t.l(l),e=re()},m(l,r){t&&t.m(l,r),A(l,e,r)},p(l,[r]){l[1]?t?t.p(l,r):(t=qe(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:H,o:H,d(l){t&&t.d(l),l&&u(e)}}}function Et(a,e,t){let l,{score:r}=e,{logs:s}=e;const f=de();let i,c,p,_,d="";const E=async k=>{k.preventDefault();try{await me.submit({name:d,score:r,placeholder:c,id:p,logs:s}),f("submit",!0)}catch{f("submit",!1)}};be(async()=>{try{i=Date.now(),c=vt(i),p=gt(i);const k=await me.submit({score:r,placeholder:c,id:p,logs:s});t(1,_=k==="top"),_||f("submit",!1)}catch(k){console.log(k.message)}});function m(){d=this.value,t(0,d)}return a.$$set=k=>{"score"in k&&t(4,r=k.score),"logs"in k&&t(5,s=k.logs)},a.$$.update=()=>{a.$$.dirty&1&&t(2,l=d<3)},[d,_,l,E,r,s,m]}class kt extends K{constructor(e){super();V(this,e,Et,yt,z,{score:4,logs:5})}}function He(a,e,t){const l=a.slice();return l[5]=e[t].name,l[6]=e[t].score,l[7]=e[t].timestamp,l[9]=t,l}function wt(a){let e,t;return{c(){e=g("p"),t=T("Loading scores...")},l(l){e=y(l,"P",{});var r=S(e);t=P(r,"Loading scores..."),r.forEach(u)},m(l,r){A(l,e,r),n(e,t)},p:H,d(l){l&&u(e)}}}function Tt(a){let e,t,l,r,s,f,i,c,p,_,d,E,m,k,G,N,M=a[0].slice(0,Ue),v=[];for(let b=0;b<M.length;b+=1)v[b]=Le(He(a,M,b));return{c(){e=g("table"),t=g("thead"),l=g("tr"),r=g("th"),s=T("Rank"),f=$(),i=g("th"),c=T("Name"),p=$(),_=g("th"),d=T("Score"),E=$(),m=g("th"),k=T("Date"),G=$(),N=g("tbody");for(let b=0;b<v.length;b+=1)v[b].c();this.h()},l(b){e=y(b,"TABLE",{});var w=S(e);t=y(w,"THEAD",{});var R=S(t);l=y(R,"TR",{});var o=S(l);r=y(o,"TH",{class:!0});var h=S(r);s=P(h,"Rank"),h.forEach(u),f=D(o),i=y(o,"TH",{class:!0});var O=S(i);c=P(O,"Name"),O.forEach(u),p=D(o),_=y(o,"TH",{class:!0});var q=S(_);d=P(q,"Score"),q.forEach(u),E=D(o),m=y(o,"TH",{class:!0});var Y=S(m);k=P(Y,"Date"),Y.forEach(u),o.forEach(u),R.forEach(u),G=D(w),N=y(w,"TBODY",{});var j=S(N);for(let B=0;B<v.length;B+=1)v[B].l(j);j.forEach(u),w.forEach(u),this.h()},h(){J(r,"class","svelte-1ppx00s"),J(i,"class","svelte-1ppx00s"),J(_,"class","svelte-1ppx00s"),J(m,"class","svelte-1ppx00s")},m(b,w){A(b,e,w),n(e,t),n(t,l),n(l,r),n(r,s),n(l,f),n(l,i),n(i,c),n(l,p),n(l,_),n(_,d),n(l,E),n(l,m),n(m,k),n(e,G),n(e,N);for(let R=0;R<v.length;R+=1)v[R].m(N,null)},p(b,w){if(w&7){M=b[0].slice(0,Ue);let R;for(R=0;R<M.length;R+=1){const o=He(b,M,R);v[R]?v[R].p(o,w):(v[R]=Le(o),v[R].c(),v[R].m(N,null))}for(;R<v.length;R+=1)v[R].d(1);v.length=M.length}},d(b){b&&u(e),xe(v,b)}}}function Le(a){let e,t,l=a[1][a[9]]+"",r,s,f=a[9]+1+"",i,c,p,_=a[5]+"",d,E,m,k,G=F(a[6])+"",N,M,v,b=a[2](a[7])+"",w,R;return{c(){e=g("tr"),t=g("td"),r=T(l),s=$(),i=T(f),c=$(),p=g("td"),d=T(_),E=$(),m=g("td"),k=T("$"),N=T(G),M=$(),v=g("td"),w=T(b),R=$(),this.h()},l(o){e=y(o,"TR",{});var h=S(e);t=y(h,"TD",{class:!0});var O=S(t);r=P(O,l),s=D(O),i=P(O,f),O.forEach(u),c=D(h),p=y(h,"TD",{class:!0});var q=S(p);d=P(q,_),q.forEach(u),E=D(h),m=y(h,"TD",{class:!0});var Y=S(m);k=P(Y,"$"),N=P(Y,G),Y.forEach(u),M=D(h),v=y(h,"TD",{class:!0});var j=S(v);w=P(j,b),j.forEach(u),R=D(h),h.forEach(u),this.h()},h(){J(t,"class","svelte-1ppx00s"),J(p,"class","svelte-1ppx00s"),J(m,"class","svelte-1ppx00s"),J(v,"class","svelte-1ppx00s")},m(o,h){A(o,e,h),n(e,t),n(t,r),n(t,s),n(t,i),n(e,c),n(e,p),n(p,d),n(e,E),n(e,m),n(m,k),n(m,N),n(e,M),n(e,v),n(v,w),n(e,R)},p(o,h){h&1&&_!==(_=o[5]+"")&&W(d,_),h&1&&G!==(G=F(o[6])+"")&&W(N,G),h&1&&b!==(b=o[2](o[7])+"")&&W(w,b)},d(o){o&&u(e)}}}function St(a){let e,t,l,r;function s(c,p){return c[0]?Tt:wt}let f=s(a),i=f(a);return{c(){e=g("h2"),t=T("High Scores"),l=$(),i.c(),r=re()},l(c){e=y(c,"H2",{});var p=S(e);t=P(p,"High Scores"),p.forEach(u),l=D(c),i.l(c),r=re()},m(c,p){A(c,e,p),n(e,t),A(c,l,p),i.m(c,p),A(c,r,p)},p(c,[p]){f===(f=s(c))&&i?i.p(c,p):(i.d(1),i=f(c),i&&(i.c(),i.m(r.parentNode,r)))},i:H,o:H,d(c){c&&u(e),c&&u(l),i.d(c),c&&u(r)}}}const Ue=10;function Pt(a,e,t){const l=()=>fetchScores(),r=["\u{1F6F5}","\u{1F3CD}\uFE0F","\u{1F6FA}","\u{1F3CE}\uFE0F","\u{1F697}","\u{1F699}","\u{1F695}","\u{1F693}","\u{1F690}","\u{1F691}","\u{1F69A}","\u{1F69B}","\u{1F692}","\u{1F68C}"];let s;const f=c=>{const p=new Date(c);return Ze("%b %d %Y, %I:%M %p")(p)},i=async()=>{try{t(0,s=await me.highscores())}catch(c){console.log(c.message)}};return be(()=>{i()}),[s,r,f,l]}class Rt extends K{constructor(e){super();V(this,e,Pt,St,z,{refreshTop:3})}get refreshTop(){return this.$$.ctx[3]}}function Nt(a){let e,t,l,r,s,f,i,c,p,_,d,E,m,k,G,N,M,v,b,w,R,o,h,O,q,Y,j,B,U,te,pe,ae,_e;return{c(){e=g("div"),t=g("h2"),l=T("Totally Real Reviews"),r=g("sup"),s=T("*"),f=$(),i=g("p"),c=g("q"),p=T("Probably the best gas pumping game of the year."),_=g("br"),d=g("strong"),E=T("-IGN"),m=$(),k=g("p"),G=g("q"),N=T("Spellbinding."),M=g("br"),v=g("strong"),b=T("-New York Times"),w=$(),R=g("p"),o=g("q"),h=T("GPG is like if Minecraft, Mario, and GTA had a baby."),O=g("br"),q=g("strong"),Y=T("-Polygon"),j=$(),B=g("p"),U=g("q"),te=T("I don\u2019t get it."),pe=g("br"),ae=g("strong"),_e=T("-Mom")},l(ne){e=y(ne,"DIV",{});var C=S(e);t=y(C,"H2",{});var he=S(t);l=P(he,"Totally Real Reviews"),r=y(he,"SUP",{});var ve=S(r);s=P(ve,"*"),ve.forEach(u),he.forEach(u),f=D(C),i=y(C,"P",{});var fe=S(i);c=y(fe,"Q",{});var ge=S(c);p=P(ge,"Probably the best gas pumping game of the year."),ge.forEach(u),_=y(fe,"BR",{}),d=y(fe,"STRONG",{});var ye=S(d);E=P(ye,"-IGN"),ye.forEach(u),fe.forEach(u),m=D(C),k=y(C,"P",{});var ie=S(k);G=y(ie,"Q",{});var Ee=S(G);N=P(Ee,"Spellbinding."),Ee.forEach(u),M=y(ie,"BR",{}),v=y(ie,"STRONG",{});var ke=S(v);b=P(ke,"-New York Times"),ke.forEach(u),ie.forEach(u),w=D(C),R=y(C,"P",{});var ue=S(R);o=y(ue,"Q",{});var we=S(o);h=P(we,"GPG is like if Minecraft, Mario, and GTA had a baby."),we.forEach(u),O=y(ue,"BR",{}),q=y(ue,"STRONG",{});var Te=S(q);Y=P(Te,"-Polygon"),Te.forEach(u),ue.forEach(u),j=D(C),B=y(C,"P",{});var ce=S(B);U=y(ce,"Q",{});var Se=S(U);te=P(Se,"I don\u2019t get it."),Se.forEach(u),pe=y(ce,"BR",{}),ae=y(ce,"STRONG",{});var Pe=S(ae);_e=P(Pe,"-Mom"),Pe.forEach(u),ce.forEach(u),C.forEach(u)},m(ne,C){A(ne,e,C),n(e,t),n(t,l),n(t,r),n(r,s),n(e,f),n(e,i),n(i,c),n(c,p),n(i,_),n(i,d),n(d,E),n(e,m),n(e,k),n(k,G),n(G,N),n(k,M),n(k,v),n(v,b),n(e,w),n(e,R),n(R,o),n(o,h),n(R,O),n(R,q),n(q,Y),n(e,j),n(e,B),n(B,U),n(U,te),n(B,pe),n(B,ae),n(ae,_e)},p:H,i:H,o:H,d(ne){ne&&u(e)}}}class Mt extends K{constructor(e){super();V(this,e,null,Nt,z,{})}}function At(a){let e,t,l,r,s,f,i,c,p,_,d,E,m,k,G,N,M,v;return{c(){e=g("details"),t=g("summary"),l=T("About Gas Pump Golf"),r=$(),s=g("p"),f=T("Created by "),i=g("a"),c=T("Russell Goldenberg"),p=T(`. Gas pump prices are
    based on real values from the
    `),_=g("a"),d=T("U.S. Department of Energy"),E=T(". Pump rate is set at 10 gallons per minute. Made with "),m=g("a"),k=T("Svelte"),G=T(`.
    `),N=g("sup"),M=T("*"),v=T("Totally Real Reviews are not real."),this.h()},l(b){e=y(b,"DETAILS",{});var w=S(e);t=y(w,"SUMMARY",{});var R=S(t);l=P(R,"About Gas Pump Golf"),R.forEach(u),r=D(w),s=y(w,"P",{});var o=S(s);f=P(o,"Created by "),i=y(o,"A",{href:!0});var h=S(i);c=P(h,"Russell Goldenberg"),h.forEach(u),p=P(o,`. Gas pump prices are
    based on real values from the
    `),_=y(o,"A",{href:!0});var O=S(_);d=P(O,"U.S. Department of Energy"),O.forEach(u),E=P(o,". Pump rate is set at 10 gallons per minute. Made with "),m=y(o,"A",{href:!0});var q=S(m);k=P(q,"Svelte"),q.forEach(u),G=P(o,`.
    `),N=y(o,"SUP",{});var Y=S(N);M=P(Y,"*"),Y.forEach(u),v=P(o,"Totally Real Reviews are not real."),o.forEach(u),w.forEach(u),this.h()},h(){J(i,"href","https://twitter.com/codenberg"),J(_,"href","https://www.energy.gov/eere/vehicles/fact-915-march-7-2016-average-historical-annual-gasoline-pump-price-1929-2015"),J(m,"href","https://svelte.dev")},m(b,w){A(b,e,w),n(e,t),n(t,l),n(e,r),n(e,s),n(s,f),n(s,i),n(i,c),n(s,p),n(s,_),n(_,d),n(s,E),n(s,m),n(m,k),n(s,G),n(s,N),n(N,M),n(s,v)},p:H,i:H,o:H,d(b){b&&u(e)}}}class Gt extends K{constructor(e){super();V(this,e,null,At,z,{})}}function Ye(a){let e,t;return e=new Mt({}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,r){x(e,l,r),t=!0},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function $t(a){let e,t,l,r,s=a[0]&&Ye();return l=new Gt({}),{c(){e=g("footer"),s&&s.c(),t=$(),X(l.$$.fragment)},l(f){e=y(f,"FOOTER",{});var i=S(e);s&&s.l(i),t=D(i),Z(l.$$.fragment,i),i.forEach(u)},m(f,i){A(f,e,i),s&&s.m(e,null),n(e,t),x(l,e,null),r=!0},p(f,[i]){f[0]?s?i&1&&I(s,1):(s=Ye(),s.c(),I(s,1),s.m(e,t)):s&&(se(),L(s,1,1,()=>{s=null}),oe())},i(f){r||(I(s),I(l.$$.fragment,f),r=!0)},o(f){L(s),L(l.$$.fragment,f),r=!1},d(f){f&&u(e),s&&s.d(),ee(l)}}}function Dt(a,e,t){let{reviews:l}=e;return a.$$set=r=>{"reviews"in r&&t(0,l=r.reviews)},[l]}class It extends K{constructor(e){super();V(this,e,Dt,$t,z,{reviews:0})}}var Be=["Michael","Christopher","Jason","David","James","John","Robert","Brian","William","Matthew","Daniel","Joseph","Joshua","Jacob","Nicholas","Andrew","Tyler","Jennifer","Amy","Melissa","Michelle","Kimberly","Jessica","Amanda","Ashley","Sarah","Emily"];function Je(a){let e,t;return e=new at({}),e.$on("play",a[19]),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,r){x(e,l,r),t=!0},p:H,i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function je(a){let e,t;return e=new ct({props:{level:a[1],year:a[15],target:a[13],score:a[2],state:a[0],tally:a[4]}}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,r){x(e,l,r),t=!0},p(l,r){const s={};r&2&&(s.level=l[1]),r&32768&&(s.year=l[15]),r&8192&&(s.target=l[13]),r&4&&(s.score=l[2]),r&1&&(s.state=l[0]),r&16&&(s.tally=l[4]),e.$set(s)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function Ce(a){let e,t,l;function r(f){a[21](f)}let s={price:a[14],disabled:a[3]};return a[6]!==void 0&&(s.reset=a[6]),e=new bt({props:s}),tt.push(()=>lt(e,"reset",r)),e.$on("stop",a[18]),{c(){X(e.$$.fragment)},l(f){Z(e.$$.fragment,f)},m(f,i){x(e,f,i),l=!0},p(f,i){const c={};i&16384&&(c.price=f[14]),i&8&&(c.disabled=f[3]),!t&&i&64&&(t=!0,c.reset=f[6],et(()=>t=!1)),e.$set(c)},i(f){l||(I(e.$$.fragment,f),l=!0)},o(f){L(e.$$.fragment,f),l=!1},d(f){ee(e,f)}}}function Fe(a){let e,t;return e=new kt({props:{score:a[2],logs:a[5]}}),e.$on("submit",a[20]),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,r){x(e,l,r),t=!0},p(l,r){const s={};r&4&&(s.score=l[2]),r&32&&(s.logs=l[5]),e.$set(s)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function Qe(a){let e,t;return e=new Rt({props:{refreshTop:a[16]}}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,r){x(e,l,r),t=!0},p:H,i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function Ke(a){let e,t,l,r;return{c(){e=g("button"),t=T("Play Again \u{1F501}")},l(s){e=y(s,"BUTTON",{});var f=S(e);t=P(f,"Play Again \u{1F501}"),f.forEach(u)},m(s,f){A(s,e,f),n(e,t),l||(r=Q(e,"click",a[17]),l=!0)},p:H,d(s){s&&u(e),l=!1,r()}}}function Ot(a){let e,t,l,r,s,f,i,c,p,_,d,E,m,k,G,N=a[10]&&Je(a),M=a[9]&&je(a),v=a[8]&&Ce(a),b=a[7]&&Fe(a),w=a[12]&&Qe(a),R=a[11]&&Ke(a);return k=new It({props:{reviews:a[0]==="intro"}}),k.$on("highscores",a[22]),{c(){e=g("h1"),t=T("\u26FD Gas Pump Golf \u26F3"),l=$(),N&&N.c(),r=$(),M&&M.c(),s=$(),f=g("hr"),i=$(),v&&v.c(),c=$(),b&&b.c(),p=$(),w&&w.c(),_=$(),R&&R.c(),d=$(),E=g("hr"),m=$(),X(k.$$.fragment)},l(o){e=y(o,"H1",{});var h=S(e);t=P(h,"\u26FD Gas Pump Golf \u26F3"),h.forEach(u),l=D(o),N&&N.l(o),r=D(o),M&&M.l(o),s=D(o),f=y(o,"HR",{}),i=D(o),v&&v.l(o),c=D(o),b&&b.l(o),p=D(o),w&&w.l(o),_=D(o),R&&R.l(o),d=D(o),E=y(o,"HR",{}),m=D(o),Z(k.$$.fragment,o)},m(o,h){A(o,e,h),n(e,t),A(o,l,h),N&&N.m(o,h),A(o,r,h),M&&M.m(o,h),A(o,s,h),A(o,f,h),A(o,i,h),v&&v.m(o,h),A(o,c,h),b&&b.m(o,h),A(o,p,h),w&&w.m(o,h),A(o,_,h),R&&R.m(o,h),A(o,d,h),A(o,E,h),A(o,m,h),x(k,o,h),G=!0},p(o,[h]){o[10]?N?(N.p(o,h),h&1024&&I(N,1)):(N=Je(o),N.c(),I(N,1),N.m(r.parentNode,r)):N&&(se(),L(N,1,1,()=>{N=null}),oe()),o[9]?M?(M.p(o,h),h&512&&I(M,1)):(M=je(o),M.c(),I(M,1),M.m(s.parentNode,s)):M&&(se(),L(M,1,1,()=>{M=null}),oe()),o[8]?v?(v.p(o,h),h&256&&I(v,1)):(v=Ce(o),v.c(),I(v,1),v.m(c.parentNode,c)):v&&(se(),L(v,1,1,()=>{v=null}),oe()),o[7]?b?(b.p(o,h),h&128&&I(b,1)):(b=Fe(o),b.c(),I(b,1),b.m(p.parentNode,p)):b&&(se(),L(b,1,1,()=>{b=null}),oe()),o[12]?w?(w.p(o,h),h&4096&&I(w,1)):(w=Qe(o),w.c(),I(w,1),w.m(_.parentNode,_)):w&&(se(),L(w,1,1,()=>{w=null}),oe()),o[11]?R?R.p(o,h):(R=Ke(o),R.c(),R.m(d.parentNode,d)):R&&(R.d(1),R=null);const O={};h&1&&(O.reviews=o[0]==="intro"),k.$set(O)},i(o){G||(I(N),I(M),I(v),I(b),I(w),I(k.$$.fragment,o),G=!0)},o(o){L(N),L(M),L(v),L(b),L(w),L(k.$$.fragment,o),G=!1},d(o){o&&u(e),o&&u(l),N&&N.d(o),o&&u(r),M&&M.d(o),o&&u(s),o&&u(f),o&&u(i),v&&v.d(o),o&&u(c),b&&b.d(o),o&&u(p),w&&w.d(o),o&&u(_),R&&R.d(o),o&&u(d),o&&u(E),o&&u(m),ee(k,o)}}}const qt=1e3,Ht=2;function Lt(a,e,t){let l,r,s,f,i,c,p,_,d,E="intro",m=0,k=0,G=!1,N,M=[],v=()=>{},b=()=>{};const w=U=>new Promise(te=>setTimeout(te,U)),R=()=>{t(0,E="game"),t(1,m=0),t(2,k=0),t(3,G=!1),t(5,M=[])},o=async({detail:U})=>{t(3,G=!0),M.push(Me({year:le[m].year,price:le[m].price,target:le[m].target},U)),q(),await w(qt),m>=le.length-1?t(0,E="submit"):Y()},h=()=>{t(0,E="game")},O=async({detail:U})=>{t(0,E="over"),t(4,N=await me.tally())},q=()=>{const U=Ae(M,te=>Math.abs(te.target-te.sale));t(2,k=$e(U,Ht))},Y=()=>{t(1,m+=1),v(),t(3,G=!1)};be(()=>{const U=Be[Math.floor(Math.random()*Be.length)];console.log(`Hi ${U}, why are you looking at the console?`)});function j(U){v=U,t(6,v)}const B=()=>t(0,E="over");return a.$$.update=()=>{a.$$.dirty&2&&t(15,l=le[m].year),a.$$.dirty&2&&t(14,r=le[m].price),a.$$.dirty&2&&t(13,s=le[m].target),a.$$.dirty&1&&t(12,f=["intro","over"].includes(E)),a.$$.dirty&1&&t(11,i=E==="over"),a.$$.dirty&1&&t(10,c=E==="intro"),a.$$.dirty&1&&t(9,p=["game","submit","over"].includes(E)),a.$$.dirty&1&&t(8,_=E==="game"),a.$$.dirty&1&&t(7,d=E==="submit")},[E,m,k,G,N,M,v,d,_,p,c,i,f,s,r,l,b,R,o,h,O,j,B]}class Ut extends K{constructor(e){super();V(this,e,Lt,Ot,z,{})}}function Yt(a){let e,t,l,r;return e=new rt({}),l=new Ut({}),{c(){X(e.$$.fragment),t=$(),X(l.$$.fragment)},l(s){Z(e.$$.fragment,s),t=D(s),Z(l.$$.fragment,s)},m(s,f){x(e,s,f),A(s,t,f),x(l,s,f),r=!0},p:H,i(s){r||(I(e.$$.fragment,s),I(l.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),L(l.$$.fragment,s),r=!1},d(s){ee(e,s),s&&u(t),ee(l,s)}}}const Ct=!0;class Ft extends K{constructor(e){super();V(this,e,null,Yt,z,{})}}export{Ft as default,Ct as prerender};
