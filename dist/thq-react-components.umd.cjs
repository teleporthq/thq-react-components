(function(p,D){typeof exports=="object"&&typeof module<"u"?D(exports,require("react/jsx-runtime"),require("react")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react"],D):(p=typeof globalThis<"u"?globalThis:p||self,D(p["react-components"]={},p.jsxRuntime,p.react))})(this,function(p,D,J){"use strict";var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function R($){return $&&$.__esModule&&Object.prototype.hasOwnProperty.call($,"default")?$.default:$}var Z={exports:{}};(function($,T){(function(S,w){$.exports=w()})(Q,function(){var S=1e3,w=6e4,z=36e5,P="millisecond",x="second",H="minute",j="hour",M="day",A="week",y="month",V="quarter",g="year",k="date",B="Invalid Date",et=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,nt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,rt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},U=function(i,n,t){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(t)+i},it={s:U,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+U(r,2,"0")+":"+U(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,y),s=t-e<0,u=n.clone().add(r+(s?-1:1),y);return+(-(r+(t-e)/(s?e-u:u-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:y,y:g,w:A,d:M,D:k,h:j,m:H,s:x,ms:P,Q:V}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},L="en",b={};b[L]=rt;var E=function(i){return i instanceof I},F=function i(n,t,r){var e;if(!n)return L;if(typeof n=="string"){var s=n.toLowerCase();b[s]&&(e=s),t&&(b[s]=t,e=s);var u=n.split("-");if(!e&&u.length>1)return i(u[0])}else{var o=n.name;b[o]=n,e=o}return!r&&e&&(L=e),e||!r&&L},f=function(i,n){if(E(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new I(t)},a=it;a.l=F,a.i=E,a.w=function(i,n){return f(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var I=function(){function i(t){this.$L=F(t.locale,null,!0),this.parse(t)}var n=i.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,s=r.utc;if(e===null)return new Date(NaN);if(a.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(et);if(u){var o=u[2]-1||0,c=(u[7]||"0").substring(0,3);return s?new Date(Date.UTC(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)):new Date(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return a},n.isValid=function(){return this.$d.toString()!==B},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return a.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,s=!!a.u(r)||r,u=a.p(t),o=function(_,l){var v=a.w(e.$u?Date.UTC(e.$y,l,_):new Date(e.$y,l,_),e);return s?v:v.endOf(M)},c=function(_,l){return a.w(e.toDate()[_].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},d=this.$W,h=this.$M,m=this.$D,Y="set"+(this.$u?"UTC":"");switch(u){case g:return s?o(1,0):o(31,11);case y:return s?o(1,h):o(0,h+1);case A:var O=this.$locale().weekStart||0,C=(d<O?d+7:d)-O;return o(s?m-C:m+(6-C),h);case M:case k:return c(Y+"Hours",0);case j:return c(Y+"Minutes",1);case H:return c(Y+"Seconds",2);case x:return c(Y+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,s=a.p(t),u="set"+(this.$u?"UTC":""),o=(e={},e[M]=u+"Date",e[k]=u+"Date",e[y]=u+"Month",e[g]=u+"FullYear",e[j]=u+"Hours",e[H]=u+"Minutes",e[x]=u+"Seconds",e[P]=u+"Milliseconds",e)[s],c=s===M?this.$D+(r-this.$W):r;if(s===y||s===g){var d=this.clone().set(k,1);d.$d[o](c),d.init(),this.$d=d.set(k,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[a.p(t)]()},n.add=function(t,r){var e,s=this;t=Number(t);var u=a.p(r),o=function(h){var m=f(s);return a.w(m.date(m.date()+Math.round(h*t)),s)};if(u===y)return this.set(y,this.$M+t);if(u===g)return this.set(g,this.$y+t);if(u===M)return o(1);if(u===A)return o(7);var c=(e={},e[H]=w,e[j]=z,e[x]=S,e)[u]||1,d=this.$d.getTime()+t*c;return a.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||B;var s=t||"YYYY-MM-DDTHH:mm:ssZ",u=a.z(this),o=this.$H,c=this.$m,d=this.$M,h=e.weekdays,m=e.months,Y=e.meridiem,O=function(l,v,W,N){return l&&(l[v]||l(r,s))||W[v].slice(0,N)},C=function(l){return a.s(o%12||12,l,"0")},_=Y||function(l,v,W){var N=l<12?"AM":"PM";return W?N.toLowerCase():N};return s.replace(nt,function(l,v){return v||function(W){switch(W){case"YY":return String(r.$y).slice(-2);case"YYYY":return a.s(r.$y,4,"0");case"M":return d+1;case"MM":return a.s(d+1,2,"0");case"MMM":return O(e.monthsShort,d,m,3);case"MMMM":return O(m,d);case"D":return r.$D;case"DD":return a.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return O(e.weekdaysMin,r.$W,h,2);case"ddd":return O(e.weekdaysShort,r.$W,h,3);case"dddd":return h[r.$W];case"H":return String(o);case"HH":return a.s(o,2,"0");case"h":return C(1);case"hh":return C(2);case"a":return _(o,c,!0);case"A":return _(o,c,!1);case"m":return String(c);case"mm":return a.s(c,2,"0");case"s":return String(r.$s);case"ss":return a.s(r.$s,2,"0");case"SSS":return a.s(r.$ms,3,"0");case"Z":return u}return null}(l)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var s,u=this,o=a.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*w,h=this-c,m=function(){return a.m(u,c)};switch(o){case g:s=m()/12;break;case y:s=m();break;case V:s=m()/3;break;case A:s=(h-d)/6048e5;break;case M:s=(h-d)/864e5;break;case j:s=h/z;break;case H:s=h/w;break;case x:s=h/S;break;default:s=h}return e?s:a.a(s)},n.daysInMonth=function(){return this.endOf(y).$D},n.$locale=function(){return b[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),s=F(t,r,!0);return s&&(e.$L=s),e},n.clone=function(){return a.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),G=I.prototype;return f.prototype=G,[["$ms",P],["$s",x],["$m",H],["$H",j],["$W",M],["$M",y],["$y",g],["$D",k]].forEach(function(i){G[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),f.extend=function(i,n){return i.$i||(i(n,I,f),i.$i=!0),f},f.locale=F,f.isDayjs=E,f.unix=function(i){return f(1e3*i)},f.en=b[L],f.Ls=b,f.p={},f})})(Z);var K=Z.exports;const q=R(K),X=({date:$,format:T})=>{const S=q.unix(new Date($).getTime()/1e3),w=q(S).format(T);return D.jsx(D.Fragment,{children:w})},tt=({html:$})=>{const T=J.useRef(null);return J.useEffect(()=>{if(!$||!T.current)return;const S=document.createRange().createContextualFragment($);T.current.append(S)},[]),D.jsx("div",{style:{display:"contents"},ref:T})};p.DangerousHTML=tt,p.DateTimePrimitive=X,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
