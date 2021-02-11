(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function x(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function na(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.u=this.l=0;this.j=null}
function oa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
na.prototype.s=function(a){this.m=a};
function pa(a,b){a.j={W:b,qa:!0};a.h=a.l||a.u}
na.prototype["return"]=function(a){this.j={"return":a};this.h=this.u};
function z(a,b,c){a.h=c;return{value:b}}
function qa(a){a.l=0;var b=a.j.W;a.j=null;return b}
function ra(a){this.h=new na;this.i=a}
function sa(a,b){oa(a.h);var c=a.h.i;if(c)return ta(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ua(a)}
function ta(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,pa(a.h,g),ua(a)}a.h.i=null;d.call(a.h,f);return ua(a)}
function ua(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,pa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.qa)throw b.W;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function va(a){this.next=function(b){oa(a.h);a.h.i?b=ta(a,a.h.i.next,b,a.h.s):(a.h.s(b),b=ua(a));return b};
this["throw"]=function(b){oa(a.h);a.h.i?b=ta(a,a.h.i["throw"],b,a.h.s):(pa(a.h,b),b=ua(a));return b};
this["return"]=function(b){return sa(a,b)};
this[Symbol.iterator]=function(){return this}}
function wa(a,b){var c=new va(new ra(b));ma&&a.prototype&&ma(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:ma?function(b,c){try{return ma(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||ma});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var xa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||xa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.da),reject:g(this.m)}};
b.prototype.da=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ca(g):this.o(g)}};
b.prototype.ca=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ga(h,g):this.o(g)};
b.prototype.m=function(g){this.u(2,g)};
b.prototype.o=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.F()};
b.prototype.ea=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.H=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.F=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.O(h.resolve,h.reject)};
b.prototype.ga=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,q){return"function"==typeof p?function(v){try{l(p(v))}catch(w){m(w)}}:q}
var l,m,n=new b(function(p,q){l=p;m=q});
this.O(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.O=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).O(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){p[v]=w;q--;0==q&&l(p)}}
var p=[],q=0;do p.push(void 0),q++,d(k.value).O(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
function ya(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ya(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
function za(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return za(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return za(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return za(this,function(b,c){return c})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&A(h.i,l))for(var n=0;n<m.length;n++){var p=m[n];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:n,v:p}}return{id:l,list:m,index:-1,v:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.v?l.v.value=k:(l.v={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.v),this.h.previous.next=l.v,this.h.previous=l.v,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.v&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.v.previous.next=h.v.next,h.v.next.previous=h.v.previous,h.v.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).v};
e.prototype.get=function(h){return(h=d(this,h).v)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Aa(){}
function Ba(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ca(a){return Object.prototype.hasOwnProperty.call(a,Da)&&a[Da]||(a[Da]=++Ea)}
var Da="closure_uid_"+(1E9*Math.random()>>>0),Ea=0;function Fa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ha(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ha=Fa:Ha=Ga;return Ha.apply(null,arguments)}
function E(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ja=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ia(a){return a}
;function Ja(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Ka(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ka);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Ka,Error);Ka.prototype.name="CustomError";var La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Na(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Oa(a,b){var c=La(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Pa(a){return Array.prototype.concat.apply([],arguments)}
function Qa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ra(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Sa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ta(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ua(a){var b=Va,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Wa(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Xa(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Xa(a[c]);return b}
var Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var $a;var ab=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},bb=/&/g,cb=/</g,db=/>/g,eb=/"/g,fb=/'/g,gb=/\x00/g,hb=/[\x00&<>"']/;var I;a:{var jb=B.navigator;if(jb){var kb=jb.userAgent;if(kb){I=kb;break a}}I=""}function J(a){return-1!=I.indexOf(a)}
;function lb(a){this.h=mb===mb?a:""}
lb.prototype.toString=function(){return this.h.toString()};
var mb={};function nb(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function ob(a){ob[" "](a);return a}
ob[" "]=Aa;var pb=J("Opera"),qb=J("Trident")||J("MSIE"),rb=J("Edge"),sb=J("Gecko")&&!(-1!=I.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),tb=-1!=I.toLowerCase().indexOf("webkit")&&!J("Edge");function ub(){var a=B.document;return a?a.documentMode:void 0}
var vb;a:{var wb="",xb=function(){var a=I;if(sb)return/rv:([^\);]+)(\)|;)/.exec(a);if(rb)return/Edge\/([\d\.]+)/.exec(a);if(qb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(tb)return/WebKit\/(\S+)/.exec(a);if(pb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
xb&&(wb=xb?xb[1]:"");if(qb){var yb=ub();if(null!=yb&&yb>parseFloat(wb)){vb=String(yb);break a}}vb=wb}var zb=vb,Ab;if(B.document&&qb){var Bb=ub();Ab=Bb?Bb:parseInt(zb,10)||void 0}else Ab=void 0;var Cb=Ab;var Db=J("Firefox")||J("FxiOS"),Eb=nb()||J("iPod"),Fb=J("iPad"),Gb=J("Safari")&&!((J("Chrome")||J("CriOS"))&&!J("Edge")||J("Coast")||J("Opera")||J("Edge")||J("Edg/")||J("OPR")||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))&&!(nb()||J("iPad")||J("iPod"));var Hb={},Ib=null;var K=window;function Jb(a,b){this.width=a;this.height=b}
r=Jb.prototype;r.clone=function(){return new Jb(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Kb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Lb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Mb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nb(a){return a?decodeURI(a):a}
function L(a){return Nb(a.match(Mb)[3]||null)}
function Ob(a){var b=a.match(Mb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Pb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Pb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Qb(a){var b=[],c;for(c in a)Pb(c,a[c],b);return b.join("&")}
var Rb=/#|$/;function Sb(a){var b=Tb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Ub(){var a=[];Sb(function(b){a.push(b)});
return a}
var Tb={wa:"allow-forms",xa:"allow-modals",ya:"allow-orientation-lock",za:"allow-pointer-lock",Aa:"allow-popups",Ba:"allow-popups-to-escape-sandbox",Ca:"allow-presentation",Da:"allow-same-origin",Ea:"allow-scripts",Fa:"allow-top-navigation",Ga:"allow-top-navigation-by-user-activation"},Vb=Sa(function(){return Ub()});
function Wb(){var a=Kb(),b={};H(Vb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Xb(){this.j=this.j;this.m=this.m}
Xb.prototype.j=!1;Xb.prototype.dispose=function(){this.j||(this.j=!0,this.K())};
Xb.prototype.K=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var Yb={};function Zb(a){if(a!==Yb)throw Error("Bad secret");}
;function $b(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var ac;function bc(){}
function cc(a,b){Zb(b);this.h=a}
x(cc,bc);cc.prototype.toString=function(){return this.h.toString()};
var dc=null===(ac=$b())||void 0===ac?void 0:ac.emptyHTML;new cc(null!==dc&&void 0!==dc?dc:"",Yb);var ec;function fc(){}
function gc(a,b){Zb(b);this.h=a}
x(gc,fc);gc.prototype.toString=function(){return this.h.toString()};
var hc=null===(ec=$b())||void 0===ec?void 0:ec.emptyScript;new gc(null!==hc&&void 0!==hc?hc:"",Yb);function ic(){}
function jc(a,b){Zb(b);this.h=a}
x(jc,ic);jc.prototype.toString=function(){return this.h};
new jc("about:blank",Yb);new jc("about:invalid#zTSz",Yb);function kc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=lc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,mc[c])c=mc[c];else{c=String(c);if(!mc[c]){var f=/function\s+([^\(]+)/m.exec(c);mc[c]=f?f[1]:"[Anonymous]"}c=mc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function lc(a,b){b||(b={});b[nc(a)]=!0;var c=a.stack||"",d=a.La;d&&!b[nc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=lc(d,b));return c}
function nc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var mc={};function oc(a){this.h=a||{cookie:""}}
r=oc.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ra;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.X}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ab(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{X:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.h.cookie};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ab(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var pc=new oc("undefined"==typeof document?null:document);var qc=(new Date).getTime();function rc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function sc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,q=0;64>q;q+=4)p[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=p[q-3]^p[q-8]^p[q-14]^p[q-16],p[q]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],y=e[3],F=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var ha=y^v&(w^y);var ib=1518500249}else ha=v^w^y,ib=1859775393;else 60>q?(ha=v&w|y&(v|w),ib=2400959708):(ha=v^w^y,ib=3395469782);ha=((n<<5|n>>>27)&4294967295)+ha+F+ib+p[q]&4294967295;F=y;y=w;w=(v<<30|v>>>2)&4294967295;v=n;n=ha}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+w&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+F&4294967295}
function c(n,p){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],v=0,w=n.length;v<w;++v)q.push(n.charCodeAt(v));n=q}p||(p=n.length);q=0;if(0==l)for(;q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<p;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],p=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=p&255,p>>>=8;b(f);for(q=p=0;5>q;q++)for(var v=24;0<=v;v-=8)n[p++]=e[q]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ia:function(){for(var n=d(),p="",q=0;q<n.length;q++)p+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return p}}}
;function tc(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,uc(rc(d),a,c||null)].join(" "):null}
function uc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),vc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=vc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function vc(a){var b=sc();b.update(a);return b.ia().toLowerCase()}
;var wc={};function xc(a){return!!wc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function yc(a,b,c,d){(a=B[a])||(a=(new oc(document)).get(b));return a?tc(a,c,d):null}
function zc(a){var b=void 0===b?!1:b;var c=rc(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;xc(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new oc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");xc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new oc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?tc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&xc(b)&&((b=yc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=yc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Ac(){this.h=[];this.i=-1}
Ac.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
Ac.prototype.get=function(a){return!!this.h[a]};
function Bc(a){-1==a.i&&(a.i=Ma(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Cc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Cc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Dc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Ec;function Fc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Kb();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ha(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.U;c.U=null;e()}};
return function(e){d.next={U:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Gc(a){B.setTimeout(function(){throw a;},0)}
;function Hc(){this.i=this.h=null}
Hc.prototype.add=function(a,b){var c=Ic.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Hc.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Ic=new Cc(function(){return new Jc},function(a){return a.reset()});
function Jc(){this.next=this.scope=this.h=null}
Jc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Jc.prototype.reset=function(){this.next=this.scope=this.h=null};function Kc(a,b){Lc||Mc();Nc||(Lc(),Nc=!0);Oc.add(a,b)}
var Lc;function Mc(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Lc=function(){a.then(Pc)}}else Lc=function(){var b=Pc;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!J("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Ec||(Ec=Fc()),Ec(b)):B.setImmediate(b)}}
var Nc=!1,Oc=new Hc;function Pc(){for(var a;a=Oc.remove();){try{a.h.call(a.scope)}catch(b){Gc(b)}Dc(Ic,a)}Nc=!1}
;function Qc(){this.i=-1}
;function Rc(){this.i=64;this.h=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
G(Rc,Qc);Rc.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Sc(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Rc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Sc(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Sc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Sc(this,e);f=0;break}}this.j=f;this.m+=b}};
Rc.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Sc(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var Tc="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Uc(){}
Uc.prototype.next=function(){throw Tc;};
Uc.prototype.C=function(){return this};
function Vc(a){if(a instanceof Uc)return a;if("function"==typeof a.C)return a.C(!1);if(Ba(a)){var b=0,c=new Uc;c.next=function(){for(;;){if(b>=a.length)throw Tc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Wc(a,b){if(Ba(a))try{H(a,b,void 0)}catch(c){if(c!==Tc)throw c;}else{a=Vc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Tc)throw c;}}}
function Xc(a){if(Ba(a))return Qa(a);a=Vc(a);var b=[];Wc(a,function(c){b.push(c)});
return b}
;function Yc(a,b){this.i={};this.h=[];this.l=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Yc)for(c=Zc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Zc(a){$c(a);return a.h.concat()}
r=Yc.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;var c=b||ad;$c(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ad(a,b){return a===b}
r.isEmpty=function(){return 0==this.j};
r.clear=function(){this.i={};this.l=this.j=this.h.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.l++,this.h.length>2*this.j&&$c(this),!0):!1};
function $c(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.l++);this.i[a]=b};
r.forEach=function(a,b){for(var c=Zc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new Yc(this)};
r.C=function(a){$c(this);var b=0,c=this.l,d=this,e=new Uc;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Tc;var f=d.h[b++];return a?f:d.i[f]};
return e};var bd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Aa,b),B.removeEventListener("test",Aa,b)}catch(c){}return a}();function cd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
cd.prototype.stopPropagation=function(){this.j=!0};
cd.prototype.preventDefault=function(){this.defaultPrevented=!0};function dd(a,b){cd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
G(dd,cd);var ed={2:"touch",3:"pen",4:"mouse"};
dd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(sb){a:{try{ob(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ed[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&dd.A.preventDefault.call(this)};
dd.prototype.stopPropagation=function(){dd.A.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
dd.prototype.preventDefault=function(){dd.A.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fd="closure_listenable_"+(1E6*Math.random()|0);var gd=0;function hd(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.P=e;this.key=++gd;this.L=this.N=!1}
function id(a){a.L=!0;a.listener=null;a.h=null;a.src=null;a.P=null}
;function jd(a){this.src=a;this.listeners={};this.h=0}
jd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=kd(a,b,d,e);-1<g?(b=a[g],c||(b.N=!1)):(b=new hd(b,this.src,f,!!d,e),b.N=c,a.push(b));return b};
jd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=kd(e,b,c,d);return-1<b?(id(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ld(a,b){var c=b.type;c in a.listeners&&Oa(a.listeners[c],b)&&(id(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function kd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.L&&f.listener==b&&f.capture==!!c&&f.P==d)return e}return-1}
;var md="closure_lm_"+(1E6*Math.random()|0),nd={},od=0;function pd(a,b,c,d,e){if(d&&d.once)qd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)pd(a,b[f],c,d,e);else c=rd(c),a&&a[fd]?sd(a,b,c,D(d)?!!d.capture:!!d,e):td(a,b,c,!1,d,e)}
function td(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=ud(a);h||(a[md]=h=new jd(a));c=h.add(b,c,d,g,f);if(!c.h){d=vd();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)bd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(wd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");od++}}
function vd(){function a(c){return b.call(a.src,a.listener,c)}
var b=xd;return a}
function qd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)qd(a,b[f],c,d,e);else c=rd(c),a&&a[fd]?a.h.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):td(a,b,c,!0,d,e)}
function yd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)yd(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=rd(c),a&&a[fd])?a.h.remove(String(b),c,d,e):a&&(a=ud(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=kd(b,c,d,e)),(c=-1<a?b[a]:null)&&zd(c))}
function zd(a){if("number"!==typeof a&&a&&!a.L){var b=a.src;if(b&&b[fd])ld(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(wd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);od--;(c=ud(b))?(ld(c,a),0==c.h&&(c.src=null,b[md]=null)):id(a)}}}
function wd(a){return a in nd?nd[a]:nd[a]="on"+a}
function xd(a,b){if(a.L)var c=!0;else{c=new dd(b,this);var d=a.listener,e=a.P||a.src;a.N&&zd(a);c=d.call(e,c)}return c}
function ud(a){a=a[md];return a instanceof jd?a:null}
var Ad="__closure_events_fn_"+(1E9*Math.random()>>>0);function rd(a){if("function"===typeof a)return a;a[Ad]||(a[Ad]=function(b){return a.handleEvent(b)});
return a[Ad]}
;function M(){Xb.call(this);this.h=new jd(this);this.F=this;this.o=null}
G(M,Xb);M.prototype[fd]=!0;M.prototype.addEventListener=function(a,b,c,d){pd(this,a,b,c,d)};
M.prototype.removeEventListener=function(a,b,c,d){yd(this,a,b,c,d)};
function Bd(a,b){var c=a.o;if(c){var d=[];for(var e=1;c;c=c.o)d.push(c),++e}c=a.F;e=b;var f=e.type||e;if("string"===typeof e)e=new cd(e,c);else if(e instanceof cd)e.target=e.target||c;else{var g=e;e=new cd(f,c);Za(e,g)}g=!0;if(d)for(var h=d.length-1;!e.j&&0<=h;h--){var k=e.h=d[h];g=Cd(k,f,!0,e)&&g}e.j||(k=e.h=c,g=Cd(k,f,!0,e)&&g,e.j||(g=Cd(k,f,!1,e)&&g));if(d)for(h=0;!e.j&&h<d.length;h++)k=e.h=d[h],g=Cd(k,f,!1,e)&&g}
M.prototype.K=function(){M.A.K.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,id(d[e]);delete a.listeners[c];a.h--}}this.o=null};
function sd(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Cd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.L&&g.capture==c){var h=g.listener,k=g.P||g.src;g.N&&ld(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var Dd=B.JSON.stringify;function N(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Aa)try{var b=this;a.call(void 0,function(c){Ed(b,2,c)},function(c){Ed(b,3,c)})}catch(c){Ed(this,3,c)}}
function Fd(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Fd.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Gd=new Cc(function(){return new Fd},function(a){a.reset()});
function Hd(a,b,c){var d=Gd.get();d.i=a;d.onRejected=b;d.context=c;return d}
N.prototype.then=function(a,b,c){return Id(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
N.prototype.$goog_Thenable=!0;N.prototype.cancel=function(a){if(0==this.h){var b=new Jd(a);Kc(function(){Kd(this,b)},this)}};
function Kd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Kd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ld(c),Md(c,e,3,b)))}a.j=null}else Ed(a,3,b)}
function Nd(a,b){a.i||2!=a.h&&3!=a.h||Od(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Id(a,b,c,d){var e=Hd(null,null,null);e.h=new N(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Jd?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Nd(a,e);return e.h}
N.prototype.F=function(a){this.h=0;Ed(this,2,a)};
N.prototype.H=function(a){this.h=0;Ed(this,3,a)};
function Ed(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.F,f=a.H;if(d instanceof N){Nd(d,Hd(e||Aa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){Pd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,Od(a),3!=b||c instanceof Jd||Qd(a,c))}}
function Pd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Od(a){a.o||(a.o=!0,Kc(a.u,a))}
function Ld(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
N.prototype.u=function(){for(var a;a=Ld(this);)Md(this,a,this.h,this.s);this.o=!1};
function Md(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Rd(b,c,d);else try{b.j?b.i.call(b.context):Rd(b,c,d)}catch(e){Sd.call(null,e)}Dc(Gd,b)}
function Rd(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Qd(a,b){a.m=!0;Kc(function(){a.m&&Sd.call(null,b)})}
var Sd=Gc;function Jd(a){Ka.call(this,a)}
G(Jd,Ka);Jd.prototype.name="cancel";function O(a){Xb.call(this);this.s=1;this.l=[];this.o=0;this.h=[];this.i={};this.u=!!a}
G(O,Xb);r=O.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.s;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.s=e+3;d.push(e);return e};
function Td(a,b,c){var d=Ud;if(a=d.i[a]){var e=d.h;(a=Na(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.M(a)}}
r.M=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.o?(this.l.push(a),this.h[a+1]=Aa):(c&&Oa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.J=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Vd(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.M(c)}}return 0!=e}return!1};
function Vd(a,b,c){Kc(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(H(b,this.M,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.K=function(){O.A.K.call(this);this.clear();this.l.length=0};function Wd(a){this.h=a}
Wd.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Dd(b))};
Wd.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Wd.prototype.remove=function(a){this.h.remove(a)};function Xd(a){this.h=a}
G(Xd,Wd);function Yd(a){this.data=a}
function Zd(a){return void 0===a||a instanceof Yd?a:new Yd(a)}
Xd.prototype.set=function(a,b){Xd.A.set.call(this,a,Zd(b))};
Xd.prototype.i=function(a){a=Xd.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xd.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function $d(a){this.h=a}
G($d,Xd);$d.prototype.set=function(a,b,c){if(b=Zd(b)){if(c){if(c<Date.now()){$d.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}$d.A.set.call(this,a,b)};
$d.prototype.i=function(a){var b=$d.A.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())$d.prototype.remove.call(this,a);else return b}};function ae(){}
;function be(){}
G(be,ae);be.prototype.clear=function(){var a=Xc(this.C(!0)),b=this;H(a,function(c){b.remove(c)})};function ce(a){this.h=a}
G(ce,be);r=ce.prototype;r.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.h.removeItem(a)};
r.C=function(a){var b=0,c=this.h,d=new Uc;d.next=function(){if(b>=c.length)throw Tc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.h.clear()};
r.key=function(a){return this.h.key(a)};function de(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
G(de,ce);function ee(a,b){this.i=a;this.h=null;var c;if(c=qb)c=!(9<=Number(Cb));if(c){fe||(fe=new Yc);this.h=fe.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),fe.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
G(ee,be);var ge={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},fe=null;function he(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ge[b]})}
r=ee.prototype;r.isAvailable=function(){return!!this.h};
r.set=function(a,b){this.h.setAttribute(he(a),b);ie(this)};
r.get=function(a){a=this.h.getAttribute(he(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.h.removeAttribute(he(a));ie(this)};
r.C=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Uc;d.next=function(){if(b>=c.length)throw Tc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ie(this)};
function ie(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function je(a,b){this.i=a;this.h=b+"::"}
G(je,be);je.prototype.set=function(a,b){this.i.set(this.h+a,b)};
je.prototype.get=function(a){return this.i.get(this.h+a)};
je.prototype.remove=function(a){this.i.remove(this.h+a)};
je.prototype.C=function(a){var b=this.i.C(!0),c=this,d=new Uc;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};var ke=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",ke);function le(a){var b=arguments;1<b.length?ke[b[0]]=b[1]:1===b.length&&Object.assign(ke,b[0])}
function P(a,b){return a in ke?ke[a]:b}
;var me=[];function ne(a){me.forEach(function(b){return b(a)})}
function oe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){pe(b),ne(b)}}:a}
function pe(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),le("ERRORS",b))}
function qe(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),le("ERRORS",b))}
;var re=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++re});var se={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function te(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in se||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
te.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
te.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
te.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Va=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Va);var ue=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",ue);
function ve(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ua(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&Wa(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function we(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in Va){var c=Va[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?xe()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Va[b]}}))}
var xe=Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ye(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=ve(a,b,c,d);if(!e){e=++ue.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new te(h);if(!Lb(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new te(h);
h.currentTarget=a;return c.call(a,h)};
g=oe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),xe()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Va[e]=[a,b,c,g,d]}}}
;function ze(a,b){"function"===typeof a&&(a=oe(a));return window.setTimeout(a,b)}
function Ae(a){"function"===typeof a&&(a=oe(a));return window.setInterval(a,250)}
;var Be=/^[\w.]*$/,Ce={q:!0,search_query:!0};function De(a,b){for(var c=a.split(b),d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=Ee(g[0]||""),k=Ee(g[1]||"");h in d?Array.isArray(d[h])?Ra(d[h],k):d[h]=[d[h],k]:d[h]=k}catch(p){var l=p,m=g[0],n=String(De);l.args=[{key:m,value:g[1],query:a,method:Fe==n?"unchanged":n}];Ce.hasOwnProperty(m)||qe(l)}}return d}
var Fe=String(De);function Ge(a){var b=[];Ta(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function He(a){"?"==a.charAt(0)&&(a=a.substr(1));return De(a,"&")}
function Ie(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=He(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Qb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Ee(a){return a&&a.match(Be)?a:decodeURIComponent(a.replace(/\+/g," "))}
;var Je={};function Ke(a){return Je[a]||(Je[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Le={},Me=[],Ud=new O,Ne={};function Oe(){for(var a=u(Me),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Pe(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Ke(b)]:a.getAttribute("data-"+b):null;return c}
function Qe(a,b){Ud.J.apply(Ud,arguments)}
;function Re(a){this.i=a||{};this.j=this.h=!1;a=document.getElementById("www-widgetapi-script");if(this.h=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function Q(a,b){for(var c=[a.i,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Se(a,b,c){Te||(Te={},ye(window,"message",Ha(a.l,a)));Te[c]=b}
Re.prototype.l=function(a){if(a.origin==Q(this,"host")||a.origin==Q(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.j=!0;this.h||0!=a.origin.indexOf("https:")||(this.h=!0);if(a=Te[b.id])a.u=!0,a.u&&(H(a.s,a.T,a),a.s.length=0),a.aa(b)}};
var Te=null;function R(a){a=Ue(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ve(a,b){var c=Ue(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Ue(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;function We(){}
function Xe(a,b){return Ye(a,1,b)}
;function Ze(){We.apply(this,arguments)}
x(Ze,We);function Ye(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ze(a,c||0)}
function $e(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Ze.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Ze.h=void 0;Ze.i=function(){Ze.h||(Ze.h=new Ze)};
Ze.i();var af=B.ytPubsubPubsubInstance||new O,bf=B.ytPubsubPubsubSubscribedKeys||{},cf=B.ytPubsubPubsubTopicToKeys||{},df=B.ytPubsubPubsubIsSynchronous||{};O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.M;O.prototype.publish=O.prototype.J;O.prototype.clear=O.prototype.clear;E("ytPubsubPubsubInstance",af);E("ytPubsubPubsubTopicToKeys",cf);E("ytPubsubPubsubIsSynchronous",df);E("ytPubsubPubsubSubscribedKeys",bf);var S=window,T=S.ytcsi&&S.ytcsi.now?S.ytcsi.now:S.performance&&S.performance.timing&&S.performance.now&&S.performance.timing.navigationStart?function(){return S.performance.timing.navigationStart+S.performance.now()}:function(){return(new Date).getTime()};var ef=Ve("initial_gel_batch_timeout",1E3),ff=Math.pow(2,16)-1,gf=null,hf=0,jf=void 0,kf=0,lf=0,mf=0,nf=!0,of=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",of);var pf=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",pf);
function qf(a,b){if("log_event"===a.endpoint){var c="";a.B&&(pf[a.B.token]=rf(a.B),c=a.B.token);var d=of.get(c)||[];of.set(c,d);d.push(a.payload);b&&(jf=new b);c=Ve("web_logging_max_batch")||100;var e=T();d.length>=c?sf(!0):10<=e-mf&&(tf(),mf=e)}}
function uf(a,b){if("log_event"===a.endpoint){var c="";a.B&&(pf[a.B.token]=rf(a.B),c=a.B.token);var d=new Map;d.set(c,[a.payload]);b&&(jf=new b);return new N(function(e){jf&&jf.isReady()?vf(d,e,!1):e()})}}
function sf(a){a=void 0===a?!1:a;return new N(function(b){window.clearTimeout(kf);window.clearTimeout(lf);lf=0;jf&&jf.isReady()?(vf(of,b,a),of.clear()):(tf(),b())})}
function tf(){R("web_gel_timeout_cap")&&!lf&&(lf=ze(sf,6E4));window.clearTimeout(kf);var a=P("LOGGING_BATCH_TIMEOUT",Ve("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&nf&&(a=ef);kf=ze(sf,a)}
function vf(a,b,c){var d=jf;c=void 0===c?!1:c;var e=Math.round(T()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=Xa({context:wf(d.h||xf())});h.events=k;(k=pf[g])&&yf(h,g,k);delete pf[g];zf(h,e);Af(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();hf=Math.round(T()-e)},
onError:function(){f--;f||b()},
va:c});nf=!1}}
function zf(a,b){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&R("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*ff/2));d++;d>ff&&(d=1);le("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;gf&&hf&&R("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:gf,roundtripMs:String(hf)});gf=c;hf=0}}
function yf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function rf(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Bf=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Bf);function Cf(a){var b=Df;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=qc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(F){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(F){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(F){}try{var m=h.outerWidth;var n=h.outerHeight}catch(F){}try{var p=h.innerWidth;var q=h.innerHeight}catch(F){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,m,n,p,q];
l=b.h.top;try{var v=(l||window).document,w="CSS1Compat"==v.compatMode?v.documentElement:v.body;var y=(new Jb(w.clientWidth,w.clientHeight)).round()}catch(F){y=new Jb(-12245933,-12245933)}v=y;y={};w=new Ac;B.SVGElement&&B.document.createElementNS&&w.set(0);l=Wb();l["allow-top-navigation-by-user-activation"]&&w.set(1);l["allow-popups-to-escape-sandbox"]&&w.set(2);B.crypto&&B.crypto.subtle&&w.set(3);B.TextDecoder&&B.TextEncoder&&w.set(4);w=Bc(w);y.bc=w;y.bih=v.height;y.biw=v.width;y.brdim=k.join();b=
b.i;b=(y.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,y.wgl=!!K.WebGLRenderingContext,y);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Df=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Ge(Cf(a))});var Ef="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Ff(){if(!Ef)return null;var a=Ef();return"open"in a?a:null}
;var Gf={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
Hf="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),If=!1;
function Jf(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Mb)[1]||null,e=L(a);d&&e?(d=c,c=a.match(Mb),d=d.match(Mb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?L(c)==e&&(Number(c.match(Mb)[4]||null)||null)==(Number(a.match(Mb)[4]||null)||null):!0;d=R("web_ajax_ignore_global_headers_if_set");for(var f in Gf)e=P(Gf[f]),!e||!c&&L(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!L(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!L(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!L(a))b["X-YouTube-Ad-Signals"]=Ge(Cf(void 0));return b}
function Kf(a){var b=window.location.search,c=L(a),d=Nb(a.match(Mb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=He(b),f={};H(Hf,function(g){e[g]&&(f[g]=e[g])});
return Ie(a,f||{},!1)}
function Lf(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Mf(a,b);var d=Nf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.onFinish&&b.onFinish.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.onFetchTimeout&&0<b.timeout&&(f=ze(function(){e||(e=!0,window.clearTimeout(f),b.onFetchTimeout.call(b.context||B))},b.timeout))}else Of(a,b)}
function Of(a,b){var c=b.format||"JSON";a=Mf(a,b);var d=Nf(a,b),e=!1,f=Pf(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,p=500<=k.status&&600>k.status;if(l||n||p)m=Qf(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=ze(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function Mf(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.urlParams;d&&(d[c]&&delete d[c],a=Ie(a,d||{},!0));return a}
function Nf(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||L(a)&&!b.withCredentials&&L(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=He(e),Za(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Qb(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=
!1;break a}f=!0}c=!f}!If&&c&&"POST"!=b.method&&(If=!0,pe(Error("AJAX request with postData should use POST")));return e}
function Qf(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,qe(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Rf(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Sf(g)})}d&&Tf(e);
return e}
function Tf(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===$a){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ia,createScript:Ia,createScriptURL:Ia})}catch(g){B.console&&B.console.error(g.message)}$a=e}else $a=e}d=(e=$a)?e.createHTML(d):d;a[c]=new lb(d)}else Tf(a[b])}}
function Rf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Sf(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Pf(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&oe(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ff();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Kf(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Jf(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Uf(){return"INNERTUBE_API_KEY"in ke&&"INNERTUBE_API_VERSION"in ke}
function xf(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),ja:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ka:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ma:P("INNERTUBE_CONTEXT_HL",void 0),la:P("INNERTUBE_CONTEXT_GL",void 0),na:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",pa:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),oa:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function wf(a){var b={client:{hl:a.ma,gl:a.la,clientName:a.ka,clientVersion:a.innertubeContextClientVersion,configInfo:a.ja}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=P("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=P("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&R("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(He(P("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function Vf(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ia||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ha:b=zc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function Wf(a){a=Object.assign({},a);delete a.Authorization;var b=zc();if(b){var c=new Rc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);void 0===c&&(c=0);if(!Ib){Ib={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Hb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Ib[k]&&(Ib[k]=h)}}}c=Hb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Xf(a){var b=new de;(b=b.isAvailable()?a?new je(b,a):b:null)||(a=new ee(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new $d(a):null;this.i=document.domain||window.location.hostname}
Xf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Dd(b))}catch(f){return}else e=escape(b);b=this.i;pc.set(""+a,e,{X:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Xf.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=pc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Xf.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;pc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Yf;function Zf(){Yf||(Yf=new Xf("yt.innertube"));return Yf}
function $f(a,b,c,d){if(d)return null;d=Zf().get("nextId",!0)||1;var e=Zf().get("requests",!0)||{};e[d]={method:a,request:b,authState:Wf(c),requestTime:Math.round(T())};Zf().set("nextId",d+1,86400,!0);Zf().set("requests",e,86400,!0);return d}
function ag(a){var b=Zf().get("requests",!0)||{};delete b[a];Zf().set("requests",b,86400,!0)}
function bg(a){var b=Zf().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Wf(Vf(!1));Wa(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Af(a,d.method,e,{}));delete b[c]}}Zf().set("requests",b,86400,!0)}}
;var cg=C("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.M;O.prototype.publish=O.prototype.J;O.prototype.clear=O.prototype.clear;E("ytPubsub2Pubsub2Instance",cg);E("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);var dg=Eb||Fb;var eg=[],fg=!1;function gg(a,b){fg||(eg.push({type:"EVENT",eventType:a,payload:b}),10<eg.length&&eg.shift())}
;function U(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=u(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
x(U,Error);var hg={},ig=(hg.AUTH_INVALID="No user identifier specified.",hg.EXPLICIT_ABORT="Transaction was explicitly aborted.",hg.IDB_NOT_SUPPORTED="IndexedDB is not supported.",hg.MISSING_OBJECT_STORE="Object store not created.",hg.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",hg.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",hg.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",hg.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",hg),jg={},kg=(jg.AUTH_INVALID="ERROR",jg.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",jg.EXPLICIT_ABORT="IGNORED",jg.IDB_NOT_SUPPORTED="WARNING",jg.MISSING_OBJECT_STORE="ERROR",jg.QUOTA_EXCEEDED="WARNING",jg.QUOTA_MAYBE_EXCEEDED="WARNING",jg.UNKNOWN_ABORT="WARNING",jg);
function V(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?ig[a]:c;d=void 0===d?kg[a]:d;U.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a,level:d},b));this.type=a;this.message=c;this.level=d;Object.setPrototypeOf(this,V.prototype)}
x(V,U);function lg(a){V.call(this,"MISSING_OBJECT_STORE",{Pa:a},ig.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,lg.prototype)}
x(lg,V);var mg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function ng(a,b,c){if(a instanceof V||a instanceof U)return a;if("QuotaExceededError"===a.name)return new V("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Gb&&"UnknownError"===a.name)return new V("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===a.name&&mg.some(function(d){return a.message.includes(d)}))return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});Object.setPrototypeOf(a,U.prototype);a.args=[{name:"IdbError",Qa:a.name,dbName:b,objectStoreNames:c}];return a}
;function og(a){if(!a)throw Error();throw a;}
function pg(a){return a}
function W(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
W.all=function(a){return new W(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={G:0};f.G<a.length;f={G:f.G},++f.G)qg(W.resolve(a[f.G]).then(function(g){return function(h){d[g.G]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
W.resolve=function(a){return new W(function(b,c){a instanceof W?a.then(b,c):b(a)})};
W.reject=function(a){return new W(function(b,c){c(a)})};
W.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:pg,e=null!==b&&void 0!==b?b:og;return new W(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){rg(c,c,d,f,g)}),c.onRejected.push(function(){sg(c,c,e,f,g)})):"FULFILLED"===c.state.status?rg(c,c,d,f,g):"REJECTED"===c.state.status&&sg(c,c,e,f,g)})};
function qg(a,b){return a.then(void 0,b)}
function rg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof W?tg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function sg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof W?tg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function tg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof W?tg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ug(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function vg(a){return new Promise(function(b,c){ug(a,b,c)})}
function X(a){return new W(function(b,c){ug(a,b,c)})}
;function wg(a,b){return new W(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function xg(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
r=xg.prototype;r.add=function(a,b,c){return yg(this,[a],{mode:"readwrite",I:R("ytidb_transaction_enable_retries_core_and_nwl")},function(d){return zg(d,a).add(b,c)})};
r.clear=function(a){return yg(this,[a],{mode:"readwrite",I:R("ytidb_transaction_enable_retries_core_and_nwl")},function(b){return zg(b,a).clear()})};
r.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return yg(this,[a],{mode:"readonly",I:R("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return zg(c,a).count(b)})};
r["delete"]=function(a,b){return yg(this,[a],{mode:"readwrite",I:R("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return zg(c,a)["delete"](b)})};
r.get=function(a,b){return yg(this,[a],{mode:"readonly",I:R("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return zg(c,a).get(b)})};
function yg(a,b,c,d){var e={mode:"readonly",I:!1};"string"===typeof c?e.mode=c:e=c;a.transactionCount++;try{var f=a.h.transaction(b,e.mode);var g=Ag(f,d,e)["catch"](function(h){throw ng(h,a.h.name,b.join());})}catch(h){g=h instanceof Error?Promise.reject(ng(h,a.h.name,b.join())):Promise.reject(ng(Error("unexpected transaction error: "+h),a.h.name,b.join()))}Bg(a,g,b.join(),e);
return g}
function Bg(a,b,c,d){Ja(a,function f(){var g,h,k=this,l,m,n;return wa(f,function(p){if(1==p.h)return g=Math.round(T()),p.l=2,z(p,b,4);2!=p.h?(h=Math.round(T()),Cg(k,!0,c,h-g),p.h=0,p.l=0):(l=qa(p),m=Math.round(T()),n=m-g,l instanceof V&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&gg("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d.mode}),l instanceof V&&"UNKNOWN_ABORT"===l.type&&(gg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:n,transactionCount:k.transactionCount,dbDuration:m-k.j}),k.i=!0),Cg(k,!1,c,n),fg||(eg.push({type:"ERROR",payload:l}),10<eg.length&&eg.shift()),p.h=0)})})}
function Cg(a,b,c,d){gg("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function Dg(a){this.h=a}
r=Dg.prototype;r.add=function(a,b){return X(this.h.add(a,b))};
r.clear=function(){return X(this.h.clear()).then(function(){})};
r.count=function(a){return X(this.h.count(a))};
function Eg(a,b){return Fg(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
r["delete"]=function(a){return a instanceof IDBKeyRange?Eg(this,a):X(this.h["delete"](a))};
r.get=function(a){return X(this.h.get(a))};
r.index=function(a){return new Gg(this.h.index(a))};
r.getName=function(){return this.h.name};
function Fg(a,b,c){a=a.h.openCursor(b.query,b.direction);return Hg(a).then(function(d){return wg(d,c)})}
function Ig(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=V;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ag(a,b,c){a=new Ig(a);return Jg(a,b,c)}
function Jg(a,b,c){var d=new Promise(function(e,f){var g=Ve("ytidb_transaction_try_count",1),h=b(a);if(c.I)for(var k=0;k<g-1;k++)h=qg(h,function(l){return l instanceof V&&"EXPLICIT_ABORT"===l.type?W.reject(l):b(a)});
qg(h.then(function(l){a.commit();e(l)}),f)});
return Promise.all([d,a.done]).then(function(e){return u(e).next().value})}
Ig.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new V("EXPLICIT_ABORT");};
Ig.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function zg(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new Dg(c),a.i.set(c,d));return d}
function Gg(a){this.h=a}
Gg.prototype.count=function(a){return X(this.h.count(a))};
Gg.prototype["delete"]=function(a){return Kg(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Gg.prototype.get=function(a){return X(this.h.get(a))};
Gg.prototype.getKey=function(a){return X(this.h.getKey(a))};
function Kg(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Hg(a).then(function(d){return wg(d,c)})}
function Lg(a,b){this.request=a;this.cursor=b}
function Hg(a){return X(a).then(function(b){return null===b?null:new Lg(a,b)})}
r=Lg.prototype;r.advance=function(a){this.cursor.advance(a);return Hg(this.request)};
r["continue"]=function(a){this.cursor["continue"](a);return Hg(this.request)};
r["delete"]=function(){return X(this.cursor["delete"]()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.update=function(a){return X(this.cursor.update(a))};function Mg(a,b,c){return Ja(this,function e(){var f,g,h,k,l,m,n,p,q,v;return wa(e,function(w){if(1==w.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.ta,m=g.upgrade,n=g.closed,q=function(){p||(p=new xg(f.result,{closed:n}));return p},f.addEventListener("upgradeneeded",function(y){if(null===y.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");y.dataLoss&&"none"!==y.dataLoss&&gg("IDB_DATA_CORRUPTED",{reason:y.dataLossMessage||"unknown reason",dbName:a});var F=q(),ha=new Ig(f.transaction);m&&m(F,y.oldVersion,y.newVersion,ha)}),h&&f.addEventListener("blocked",function(){h()}),z(w,vg(f),2);
v=w.m;k&&v.addEventListener("versionchange",function(){k(q())});
v.addEventListener("close",function(){gg("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:v.version});l&&l()});
return w["return"](q())})})}
function Ng(a,b){b=void 0===b?{}:b;return Ja(this,function d(){var e,f,g;return wa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return z(h,vg(e),0)})})}
;function Og(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Pg(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Mg(a,b,c)}
Og.prototype["delete"]=function(a){a=void 0===a?{}:a;return Ng(this.name,a)};
function Qg(){var a=Rg;if(!a.h){var b=function(){a.h===e&&(a.h=void 0)},c={blocking:function(f){f.close()},
closed:b,ta:b,upgrade:a.options.upgrade},d=function(){return Ja(a,function g(){var h=this,k,l,m;return wa(g,function(n){switch(n.h){case 1:return n.l=2,z(n,Pg(h.name,h.options.version,c),4);case 4:k=n.m;if(!Db){n.h=5;break}a:{var p=u(Object.keys(h.options.sa));for(var q=p.next();!q.done;q=p.next())if(q=q.value,!k.h.objectStoreNames.contains(q)){p=q;break a}p=void 0}l=p;if(void 0===l){n.h=5;break}if(!Db||h.i){n.h=7;break}h.i=!0;return z(n,h["delete"](),8);case 8:return n["return"](d());case 7:throw new lg(l);
case 5:return n["return"](k);case 2:m=qa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n["return"](Pg(h.name,void 0,Object.assign(Object.assign({},c),{upgrade:void 0})));b();throw m;}})})};
var e=d();a.h=e}return a.h}
;var Rg=new Og({sa:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Sg(a){return Ja(this,function c(){var d;return wa(c,function(e){if(1==e.h)return z(e,Qg(),2);d=e.m;return e["return"](yg(d,["databases"],"readwrite",function(f){var g=zg(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return X(g.h.put(a,void 0)).then(function(){})})}))})})}
function Tg(){return Ja(this,function b(){var c;return wa(b,function(d){if(1==d.h)return z(d,Qg(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var Ug;
function Vg(){return Ja(this,function b(){var c,d;return wa(b,function(e){switch(e.h){case 1:var f;if(f=dg)f=/WebKit\/([0-9]+)/.exec(I),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(I),f=!(f&&602<=parseInt(f[1],10)));if(f&&!R("ytidb_allow_on_ios_safari_v8_and_v9")||rb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return z(e,Sg(d),4);case 4:return z(e,Tg(),5);case 5:return e["return"](!0);case 2:return qa(e),e["return"](!1)}})})}
function Wg(){if(void 0!==Ug)return Ug;fg=!0;return Ug=Vg().then(function(a){fg=!1;return a})}
;var Xg;function Yg(){Xg||(Xg=new Xf("yt.offline"));return Xg}
;function Zg(){M.call(this);this.s=this.u=this.i=!1;this.l=$g();ah(this);bh(this)}
x(Zg,M);function $g(){var a=window.navigator.onLine;return void 0===a?!0:a}
function bh(a){window.addEventListener("online",function(){a.l=!0;a.i&&Bd(a,"ytnetworkstatus-online");ch(a);if(a.s&&R("offline_error_handling")){var b=Yg().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level||b[c].Na;pe(d)}Yg().set("errors",{},2592E3,!0)}}})}
function ah(a){window.addEventListener("offline",function(){a.l=!1;a.i&&Bd(a,"ytnetworkstatus-offline");ch(a)})}
function ch(a){a.u&&(qe(new U("NetworkStatusManager state did not match poll",T()-0)),a.u=!1)}
;function dh(a){a=void 0===a?{}:a;M.call(this);var b=this;this.l=this.u=0;Zg.h||(Zg.h=new Zg);this.i=Zg.h;this.i.i=!0;a.ra&&(this.i.s=!0);a.R?(this.R=a.R,sd(this.i,"ytnetworkstatus-online",function(){eh(b,"publicytnetworkstatus-online")}),sd(this.i,"ytnetworkstatus-offline",function(){eh(b,"publicytnetworkstatus-offline")})):(sd(this.i,"ytnetworkstatus-online",function(){Bd(b,"publicytnetworkstatus-online")}),sd(this.i,"ytnetworkstatus-offline",function(){Bd(b,"publicytnetworkstatus-offline")}))}
x(dh,M);function eh(a,b){a.R?a.l?($e(a.u),a.u=Xe(function(){a.s!==b&&(Bd(a,b),a.s=b,a.l=T())},a.R-(T()-a.l))):(Bd(a,b),a.s=b,a.l=T()):Bd(a,b)}
;var fh;function gh(a,b){b=void 0===b?{}:b;Wg().then(function(){fh||(fh=new dh({ra:!0}));fh.i.l!==$g()&&qe(new U("NetworkStatusManager isOnline does not match window status"));Of(a,b)})}
function hh(a,b){b=void 0===b?{}:b;Wg().then(function(){Of(a,b)})}
;function ih(a){var b=this;this.h=null;a?this.h=a:Uf()&&(this.h=xf());Ye(function(){bg(b)},0,5E3)}
ih.prototype.isReady=function(){!this.h&&Uf()&&(this.h=xf());return!!this.h};
function Af(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&qe(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new U("innertube xhrclient not ready",b,c,d);pe(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.na)&&(g=e);var h=a.h.pa||!1,k=Vf(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.oa&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var m=Ie(""+g+e,l||{},!0);Wg().then(function(n){if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(R("networkless_gel")&&!n||!R("networkless_gel"))var p=$f(b,
c,k,h);if(p){var q=f.onSuccess,v=f.onFetchSuccess;f.onSuccess=function(w,y){ag(p);q(w,y)};
c.onFetchSuccess=function(w,y){ag(p);v(w,y)}}}try{R("use_fetch_for_op_xhr")?Lf(m,f):R("networkless_gel")&&d.retry?(f.method="POST",!d.va&&R("nwl_send_fast_on_unload")?hh(m,f):gh(m,f)):(f.method="POST",f.postParams||(f.postParams={}),Of(m,f))}catch(w){if("InvalidAccessError"==w.name)p&&(ag(p),p=0),qe(Error("An extension is blocking network request."));
else throw w;}p&&Ye(function(){bg(a)},0,5E3)})}
;function jh(a,b){var c=void 0===c?{}:c;var d=ih;P("ytLoggingEventsDefaultDisabled",!1)&&ih==ih&&(d=null);c=void 0===c?{}:c;var e={};e.eventTimeMs=Math.round(c.timestamp||T());e[a]=b;var f=C("_lact",window);f=null==f?-1:Math.max(Date.now()-f,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(f)?-1:f)};if(R("log_sequence_info_on_gel_web")&&c.ba){f=e.context;var g=c.ba;Bf[g]=g in Bf?Bf[g]+1:0;f.sequence={index:Bf[g],groupKey:g};c.Ma&&delete Bf[c.ba]}(c.Sa?uf:qf)({endpoint:"log_event",payload:e,
B:c.B},d)}
;var kh=[{Y:function(a){return"Cannot read property '"+a.key+"'"},
S:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Y:function(a){return"Cannot call '"+a.key+"'"},
S:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function lh(){this.h=[];this.i=[]}
var mh;function nh(){mh||(mh=new lh);return mh}
;var oh=new O;function ph(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=qh(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=qh(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=qh(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function qh(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function rh(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=sh(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=ph(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?sh(f+".ve",g,h,k):0;d+=f;d+=sh(e,a[e],b,c);if(500<d)break}}else c[b]=th(a),d+=c[b].length;else c[b]=th(a),d+=c[b].length;return d}
function sh(a,b,c,d){c+="."+a;a=th(b);d[c]=a;return c.length+a.length}
function th(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var uh=new Set,vh=0,wh=0,xh=0,yh=[],zh=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Y(a,b,c){this.o=this.h=this.i=null;this.m=Ca(this);this.j=0;this.u=!1;this.s=[];this.l=null;this.F=c;this.H={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?Ob(a.src):"https://www.youtube.com"),this.i=new Re(b),c||(b=Ah(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ca(this.h)),Le[this.h.id]=this,window.postMessage){this.l=new O;Bh(this);b=Q(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Ne)Ch(this,e)}}
r=Y.prototype;r.setSize=function(a,b){this.h.width=a;this.h.height=b;return this};
r.ha=function(){return this.h};
r.aa=function(a){Dh(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Eh(this,a);return this};
function Ch(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.F==c[0]&&Eh(a,d)}}
r.destroy=function(){this.h.id&&(Le[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.o){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Te&&(Te[this.m]=null);this.i=null;a=this.h;for(var c in Va)Va[c][0]==a&&we(c);this.o=this.h=null};
r.V=function(){return{}};
function Fh(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.T(b):a.s.push(b)}
function Dh(a,b,c){a.l.j||(c={target:a,data:c},a.l.J(b,c),Qe(a.F+"."+b,c))}
function Ah(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Q(a.i,"title"));(d=Q(a.i,"width"))&&c.setAttribute("width",d);(d=Q(a.i,"height"))&&c.setAttribute("height",d);var h=
a.V();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.m;window.location.href&&H(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(Rb);b:{var n=0;for(var p=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+p),!q||61==q||38==q||35==q)break b;n+=p+1}n=-1}if(0>n)l=null;else{p=l.indexOf("&",n);if(0>p||p>m)p=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
p-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=Q(a.i,"host")+("/embed/"+Q(a.i,"videoId"))+"?"+Qb(h);return c}
r.Z=function(){this.h&&this.h.contentWindow?this.T({event:"listening"}):window.clearInterval(this.j)};
function Bh(a){Se(a.i,a,a.m);a.j=Ae(Ha(a.Z,a));ye(a.h,"load",Ha(function(){window.clearInterval(this.j);this.j=Ae(Ha(this.Z,this))},a))}
function Eh(a,b){a.H[b]||(a.H[b]=!0,Fh(a,"addEventListener",[b]))}
r.T=function(a){a.id=this.m;a.channel="widget";a=Dd(a);var b=this.i;var c=Ob(this.h.src||"");b=0==c.indexOf("https:")?[c]:b.h?[c.replace("http:","https:")]:b.j?[c]:[c,c.replace("http:","https:")];if(this.h.contentWindow)for(c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(F){if(F.name&&"SyntaxError"==F.name){if(!(F.message&&0<F.message.indexOf("target origin ''"))){var d=void 0,e=F;d=void 0===d?{}:d;d.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.level&&(d=e.level);if(R("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=vh)){var k=f,l=yh,m=kc(e);f=m.message||"Unknown Error";g=m.name||"UnknownError";var n=m.stack||e.h||"Not available";n.startsWith(g+": "+
f)&&(h=n.split("\n"),h.shift(),n=h.join("\n"));h=m.lineNumber||"Not available";m=m.fileName||"Not available";var p=void 0,q=e,v=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(p=0;p<q.args.length&&!(v=rh(q.args[p],"params."+p,k,v),500<=v);p++);else if(q.hasOwnProperty("params")&&q.params){var w=q.params;if("object"===typeof q.params)for(p in w){if(w[p]){q="params."+p;var y=th(w[p]);k[q]=y;v+=q.length+y.length;if(500<v)break}}else k.params=th(w)}if(l.length)for(p=0;p<l.length&&!(v=rh(l[p],
"params.context."+p,k,v),500<=v);p++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);f={message:f,name:g,lineNumber:h,fileName:m,stack:n,params:k,sampleWeight:1};g=Number(e.columnNumber);isNaN(g)||(f.lineNumber=f.lineNumber+":"+g);if(R("sampleWeight_to_level_migration_killswitch")&&void 0!==e.sampleWeight)e=e.sampleWeight;else if("IGNORED"===e.level)e=0;else a:{e=f;g=nh();h=u(g.i);for(m=h.next();!m.done;m=h.next())if(m=m.value,e.message&&e.message.match(m.Oa)){e=
m.weight;break a}g=u(g.h);for(h=g.next();!h.done;h=g.next())if(h=h.value,h.Ka(e)){e=h.weight;break a}e=1}f.sampleWeight=e;e=f;f=u(kh);for(g=f.next();!g.done;g=f.next())if(g=g.value,g.S[e.name])for(m=u(g.S[e.name]),h=m.next();!h.done;h=m.next())if(n=h.value,h=e.message.match(n.regexp)){e.params["params.error.original"]=h[0];m=n.groups;n={};for(k=0;k<m.length;k++)n[m[k]]=h[k+1],e.params["params.error."+m[k]]=h[k+1];e.message=g.Y(n);break}e.params||(e.params={});f=nh();e.params["params.errorServiceSignature"]=
"msg="+f.i.length+"&cb="+f.h.length;e.params["params.serviceWorker"]="false";e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length);window.yterr&&"function"===typeof window.yterr&&window.yterr(e);f=0===e.sampleWeight;if(!uh.has(e.message)&&!f){"ERROR"===d?(oh.J("handleError",e),R("record_app_crashed_web")&&0===xh&&1===e.sampleWeight&&(xh++,jh("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),wh++):"WARNING"===d&&oh.J("handleWarning",e);if(R("kevlar_gel_error_routing")){h=
d;g=e;a:{f=u(zh);for(m=f.next();!m.done;m=f.next())if((n=I)&&0<=n.toLowerCase().indexOf(m.value.toLowerCase())){f=!0;break a}f=!1}if(!f){m={stackTrace:g.stack};g.fileName&&(m.filename=g.fileName);f=g.lineNumber&&g.lineNumber.split?g.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(m.lineNumber=Number(f[0]),m.columnNumber=Number(f[1])):m.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",message:g.message,errorClassName:g.name,
sampleWeight:g.sampleWeight};"ERROR"===h?f.level="ERROR_LEVEL_ERROR":"WARNING"===h&&(f.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:m};m={pageUrl:window.location.href,kvPairs:[]};P("FEXP_EXPERIMENTS")&&(m.experimentIds=P("FEXP_EXPERIMENTS"));if(g=g.params)for(n=u(Object.keys(g)),k=n.next();!k.done;k=n.next())k=k.value,m.kvPairs.push({key:"client."+k,value:String(g[k])});g=P("SERVER_NAME",void 0);n=P("SERVER_VERSION",void 0);g&&n&&(m.kvPairs.push({key:"server.name",value:g}),m.kvPairs.push({key:"server.version",
value:n}));jh("clientError",{errorMetadata:m,stackTrace:h,logMessage:f});sf()}}if(!R("suppress_error_204_logging")){g=e;f=g.params||{};d={urlParams:{a:"logerror",t:"jserror",type:g.name,msg:g.message.substr(0,250),line:g.lineNumber,level:d,"client.name":f.name},postParams:{url:P("PAGE_NAME",window.location.href),file:g.fileName},method:"POST"};f.version&&(d["client.version"]=f.version);if(d.postParams){g.stack&&(d.postParams.stack=g.stack);g=u(Object.keys(f));for(h=g.next();!h.done;h=g.next())h=h.value,
d.postParams["client."+h]=f[h];if(f=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,d.postParams[h]=f[h];f=P("SERVER_NAME",void 0);g=P("SERVER_VERSION",void 0);f&&g&&(d.postParams["server.name"]=f,d.postParams["server.version"]=g)}Of(P("ECATCHER_REPORT_HOST","")+"/error_204",d)}uh.add(e.message);vh++}}}}}else throw F;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Gh(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Hh(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.D={};this.playerInfo={}}
x(Z,Y);r=Z.prototype;r.V=function(){var a=Q(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Q(this.i,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.aa=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)this.D[c]=a[c];break;case "infoDelivery":Ih(this,a);break;case "initialDelivery":window.clearInterval(this.j);this.playerInfo={};this.D={};Jh(this,a.apiInterface);Ih(this,a);break;default:Dh(this,b,a)}};
function Ih(a,b){if(D(b))for(var c in b)a.playerInfo[c]=b[c]}
function Jh(a,b){H(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Gh(c)?this[c]=function(){this.playerInfo={};
this.D={};Fh(this,c,arguments);return this}:Hh(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Fh(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=parseInt(Q(this.i,"width"),10),b=parseInt(Q(this.i,"height"),10),c=Q(this.i,"host")+("/embed/"+Q(this.i,"videoId"));hb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(bb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(cb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(db,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(eb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(fb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(gb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
r.getOptions=function(a){return this.D.namespaces?a?this.D[a].options||[]:this.D.namespaces||[]:[]};
r.getOption=function(a,b){if(this.D.namespaces&&a&&b)return this.D[a][b]};
function Kh(a){if("iframe"!=a.tagName.toLowerCase()){var b=Pe(a,"videoid");b&&(b={videoId:b,width:Pe(a,"width"),height:Pe(a,"height")},new Z(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Le[a]});
E("YT.scan",Oe);E("YT.subscribe",function(a,b,c){Ud.subscribe(a,b,c);Ne[a]=!0;for(var d in Le)Ch(Le[d],a)});
E("YT.unsubscribe",function(a,b,c){Td(a,b,c)});
E("YT.Player",Z);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ha;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;
Me.push(function(a){var b=a;b||(b=document);a=Qa(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=La(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Qa(b);H(Pa(a,b),Kh)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Oe();var Lh=B.onYTReady;Lh&&Lh();var Mh=B.onYouTubeIframeAPIReady;Mh&&Mh();var Nh=B.onYouTubePlayerAPIReady;Nh&&Nh();}).call(this);
