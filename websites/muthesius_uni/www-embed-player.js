(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}
function pa(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.D=this.l=0;this.j=null}
function qa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
pa.prototype.u=function(a){this.m=a};
function ra(a,b){a.j={ya:b,Wa:!0};a.h=a.l||a.D}
pa.prototype["return"]=function(a){this.j={"return":a};this.h=this.D};
function sa(a,b,c){a.h=c;return{value:b}}
function ta(a){a.l=0;var b=a.j.ya;a.j=null;return b}
function ua(a){this.h=new pa;this.i=a}
function wa(a,b){qa(a.h);var c=a.h.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,ra(a.h,g),ya(a)}a.h.i=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,ra(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Wa)throw b.ya;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i.next,b,a.h.u):(a.h.u(b),b=ya(a));return b};
this["throw"]=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i["throw"],b,a.h.u):(ra(a.h,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a,b){var c=new za(new ua(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Da});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.J),reject:g(this.m)}};
b.prototype.J=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.o(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.S(h,g):this.o(g)};
b.prototype.m=function(g){this.D(2,g)};
b.prototype.o=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.K();this.B()};
b.prototype.K=function(){var g=this;e(function(){if(g.G()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.R=function(g){var h=this.l();g.ga(h.resolve,h.reject)};
b.prototype.S=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(z){try{l(q(z))}catch(A){n(A)}}:r}
var l,n,p=new b(function(q,r){l=q;n=r});
this.ga(k(g,l),k(h,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ga=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ga(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(z){return function(A){q[z]=A;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).ga(p(q.length-1),n),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
function Ea(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ea(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ea(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ea(this,function(b,c){return c})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.i[l];if(n&&Ca(h.i,l))for(var p=0;p<n.length;p++){var q=n[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:p,F:q}}return{id:l,list:n,index:-1,F:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.F?l.F.value=k:(l.F={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.F),this.h.previous.next=l.F,this.h.previous=l.F,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.F&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.F.previous.next=h.F.next,h.F.next.previous=h.F.previous,h.F.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).F};
e.prototype.get=function(h){return(h=d(this,h).F)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
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
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push(b[d]);return c}});
var w=this||self;function x(a,b,c){a=a.split(".");c=c||w;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Fa(a){if(a&&a!=w)return Ga(a.document);null===Ha&&(Ha=Ga(w.document));return Ha}
var Ia=/^[\w+/_-]+[=]{0,2}$/,Ha=null;function Ga(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ia.test(a)?a:""}
function y(a,b){for(var c=a.split("."),d=b||w,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ja(){}
function Ka(a){a.qa=void 0;a.getInstance=function(){return a.qa?a.qa:a.qa=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function B(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Qa:C=Ra;return C.apply(null,arguments)}
function Sa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function E(){return Date.now()}
function Ta(a,b){x(a,b,void 0)}
function F(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.vk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ua(a){return a}
;function Va(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Va);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(Va,Error);Va.prototype.name="CustomError";function Wa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Xa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},$a=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function bb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function cb(a,b){var c=Ya(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function gb(a){var b=hb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ib(a){for(var b in a)return!1;return!0}
function jb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function kb(){var a=H("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=w.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ua,createScript:Ua,createScriptURL:Ua})}catch(c){w.console&&w.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(a,b){this.h=b===tb?a:""}
m=sb.prototype;m.V=!0;m.U=function(){return this.h.toString()};
m.oa=!0;m.la=function(){return 1};
m.toString=function(){return this.h+""};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.h;La(a);return"type_error:TrustedResourceUrl"}
var tb={};var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;function I(a,b){this.h=b===Eb?a:""}
m=I.prototype;m.V=!0;m.U=function(){return this.h.toString()};
m.oa=!0;m.la=function(){return 1};
m.toString=function(){return this.h.toString()};
function Fb(a){if(a instanceof I&&a.constructor===I)return a.h;La(a);return"type_error:SafeUrl"}
var Gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof I)return a;a="object"==typeof a&&a.V?a.U():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return new I(a,Eb)}
var Eb={},Kb=new I("about:invalid#zClosurez",Eb);var Lb;a:{var Mb=w.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function J(a){return-1!=Lb.indexOf(a)}
;function Ob(a,b,c){this.h=c===Pb?a:"";this.i=b}
m=Ob.prototype;m.oa=!0;m.la=function(){return this.i};
m.V=!0;m.U=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Pb={};function Qb(a,b){var c=rb();c=c?c.createHTML(a):a;return new Ob(c,b,Pb)}
;function Rb(a,b){var c=b instanceof I?b:Jb(b);a.href=Fb(c)}
function Sb(a,b){a.src=ub(b);var c=Fa(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Tb(a){return a=wb(a,void 0)}
function Ub(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zb(a){var b=[],c;for(c in a)Yb(c,a[c],b);return b.join("&")}
function $b(a,b){var c=Zb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ac=/#|$/;function bc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function cc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function dc(a){dc[" "](a);return a}
dc[" "]=Ja;var ec=J("Opera"),fc=J("Trident")||J("MSIE"),gc=J("Edge"),hc=J("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),ic=-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge");function jc(){var a=w.document;return a?a.documentMode:void 0}
var kc;a:{var lc="",mc=function(){var a=Lb;if(hc)return/rv:([^\);]+)(\)|;)/.exec(a);if(gc)return/Edge\/([\d\.]+)/.exec(a);if(fc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ic)return/WebKit\/(\S+)/.exec(a);if(ec)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mc&&(lc=mc?mc[1]:"");if(fc){var oc=jc();if(null!=oc&&oc>parseFloat(lc)){kc=String(oc);break a}}kc=lc}var pc=kc,qc;if(w.document&&fc){var rc=jc();qc=rc?rc:parseInt(pc,10)||void 0}else qc=void 0;var sc=qc;var tc=J("Firefox")||J("FxiOS"),uc=cc()||J("iPod"),vc=J("iPad"),wc=J("Safari")&&!((J("Chrome")||J("CriOS"))&&!J("Edge")||J("Coast")||J("Opera")||J("Edge")||J("Edg/")||J("OPR")||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))&&!(cc()||J("iPad")||J("iPod"));var xc={},yc=null;
function zc(a){var b=3;Ma(a);void 0===b&&(b=0);if(!yc){yc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));xc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===yc[h]&&(yc[h]=g)}}}b=xc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var K=window;var Ac=!fc||9<=Number(sc);function Bc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Bc.prototype;m.clone=function(){return new Bc(this.x,this.y)};
m.equals=function(a){return a instanceof Bc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Cc(a,b){this.width=a;this.height=b}
m=Cc.prototype;m.clone=function(){return new Cc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Dc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ec(a,b){fb(b,function(c,d){c&&"object"==typeof c&&c.V&&(c=c.U());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Fc.hasOwnProperty(d)?a.setAttribute(Fc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Fc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Gc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Ac&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Tb(g.name),'"');if(g.type){f.push(' type="',Tb(g.type),'"');var h={};pb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Hc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Ec(f,g));2<d.length&&Ic(e,f,d);return f}
function Ic(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ma(f)||B(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(B(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}G(g?db(f):f,d)}}}
function Hc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Jc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Kc(a){var b=Lc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Mc(){var a=[];Kc(function(b){a.push(b)});
return a}
var Lc={Cb:"allow-forms",Db:"allow-modals",Eb:"allow-orientation-lock",Fb:"allow-pointer-lock",Gb:"allow-popups",Hb:"allow-popups-to-escape-sandbox",Ib:"allow-presentation",Jb:"allow-same-origin",Kb:"allow-scripts",Lb:"allow-top-navigation",Mb:"allow-top-navigation-by-user-activation"},Nc=Xa(function(){return Mc()});
function Oc(){var a=Hc(document,"IFRAME"),b={};G(Nc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Pc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Qc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Qc.apply(null,d):Pc(d)}}
;function L(){this.i=this.i;this.D=this.D}
L.prototype.i=!1;L.prototype.dispose=function(){this.i||(this.i=!0,this.A())};
function Rc(a,b){a.i?b():(a.D||(a.D=[]),a.D.push(b))}
L.prototype.A=function(){if(this.D)for(;this.D.length;)this.D.shift()()};var Sc={};function Tc(a){if(a!==Sc)throw Error("Bad secret");}
;function Uc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var Vc;function Wc(){}
function Xc(a,b){Tc(b);this.h=a}
v(Xc,Wc);Xc.prototype.toString=function(){return this.h.toString()};
var Yc=null===(Vc=Uc())||void 0===Vc?void 0:Vc.emptyHTML;new Xc(null!==Yc&&void 0!==Yc?Yc:"",Sc);var Zc;function $c(){}
function ad(a,b){Tc(b);this.h=a}
v(ad,$c);ad.prototype.toString=function(){return this.h.toString()};
var bd=null===(Zc=Uc())||void 0===Zc?void 0:Zc.emptyScript;new ad(null!==bd&&void 0!==bd?bd:"",Sc);function cd(){}
function dd(a,b){Tc(b);this.h=a}
v(dd,cd);dd.prototype.toString=function(){return this.h};
new dd("about:blank",Sc);new dd("about:invalid#zTSz",Sc);function ed(a){fd();var b=rb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
var fd=Ja;function gd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;function hd(a){var b=y("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||w.$googDebugFname||b}catch(g){e="Not available",c=!0}b=id(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,jd[c])c=jd[c];else{c=String(c);if(!jd[c]){var f=/function\s+([^\(]+)/m.exec(c);jd[c]=f?f[1]:"[Anonymous]"}c=jd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function id(a,b){b||(b={});b[kd(a)]=!0;var c=a.stack||"",d=a.wk;d&&!b[kd(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=id(d,b));return c}
function kd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var jd={};function ld(a){this.h=a||{cookie:""}}
m=ld.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ek;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.za}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{za:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var md=new ld("undefined"==typeof document?null:document);var nd=(new Date).getTime();function od(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function pd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],A=e[2],D=e[3],da=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var va=D^z&(A^D);var nc=1518500249}else va=z^A^D,nc=1859775393;else 60>r?(va=z&A|D&(z|A),nc=2400959708):(va=z^A^D,nc=3395469782);va=((p<<5|p>>>27)&4294967295)+va+da+nc+q[r]&4294967295;da=D;D=A;A=(z<<30|z>>>2)&4294967295;z=p;p=va}e[0]=e[0]+p&4294967295;e[1]=e[1]+
z&4294967295;e[2]=e[2]+A&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+da&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],z=0,A=p.length;z<A;++z)r.push(p.charCodeAt(z));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<q;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],q=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var z=24;0<=z;z-=8)p[q++]=e[r]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ia:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function qd(a,b,c){var d=String(w.location.href);return d&&a&&b?[b,rd(od(d),a,c||null)].join(" "):null}
function rd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),sd(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=sd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function sd(a){var b=pd();b.update(a);return b.Ia().toLowerCase()}
;var td={};function ud(a){return!!td.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function vd(a,b,c,d){(a=w[a])||(a=(new ld(document)).get(b));return a?qd(a,c,d):null}
function wd(a){var b=void 0===b?!1:b;var c=od(String(w.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=w.__SAPISID||w.__APISID||w.__3PSAPISID||w.__OVERRIDE_SID;ud(e)&&(f=f||w.__1PSAPISID);if(f)e=!0;else{var g=new ld(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");ud(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?w.__SAPISID:w.__APISID,e||(e=new ld(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?qd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ud(b)&&((b=vd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=vd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function xd(){this.h=[];this.i=-1}
xd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
xd.prototype.get=function(a){return!!this.h[a]};
function yd(a){-1==a.i&&(a.i=ab(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function zd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
zd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ad(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Bd;
function Cd(){var a=w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Hc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.va;c.va=null;e()}};
return function(e){d.next={va:e};d=d.next;b.port2.postMessage(0)}}return function(e){w.setTimeout(e,0)}}
;function Dd(a){w.setTimeout(function(){throw a;},0)}
;function Ed(){this.i=this.h=null}
Ed.prototype.add=function(a,b){var c=Fd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ed.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Fd=new zd(function(){return new Gd},function(a){return a.reset()});
function Gd(){this.next=this.scope=this.h=null}
Gd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Gd.prototype.reset=function(){this.next=this.scope=this.h=null};function Hd(a,b){Id||Jd();Kd||(Id(),Kd=!0);Ld.add(a,b)}
var Id;function Jd(){if(w.Promise&&w.Promise.resolve){var a=w.Promise.resolve(void 0);Id=function(){a.then(Md)}}else Id=function(){var b=Md;
"function"!==typeof w.setImmediate||w.Window&&w.Window.prototype&&!J("Edge")&&w.Window.prototype.setImmediate==w.setImmediate?(Bd||(Bd=Cd()),Bd(b)):w.setImmediate(b)}}
var Kd=!1,Ld=new Ed;function Md(){for(var a;a=Ld.remove();){try{a.h.call(a.scope)}catch(b){Dd(b)}Ad(Fd,a)}Kd=!1}
;function Nd(){this.i=-1}
;function Od(){this.i=64;this.h=[];this.o=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
F(Od,Nd);Od.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Pd(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Od.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Pd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Pd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Pd(this,e);f=0;break}}this.j=f;this.m+=b}};
Od.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Pd(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Qd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Rd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Sd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Qd(a).match(/\S+/g)||[],c=0<=Ya(c,b);return c}
function Td(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Sd(a,"inverted-hdpi")&&Rd(a,Za(a.classList?a.classList:Qd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Ud="StopIteration"in w?w.StopIteration:{message:"StopIteration",stack:""};function Vd(){}
Vd.prototype.next=function(){throw Ud;};
Vd.prototype.L=function(){return this};
function Wd(a){if(a instanceof Vd)return a;if("function"==typeof a.L)return a.L(!1);if(Ma(a)){var b=0,c=new Vd;c.next=function(){for(;;){if(b>=a.length)throw Ud;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Xd(a,b){if(Ma(a))try{G(a,b,void 0)}catch(c){if(c!==Ud)throw c;}else{a=Wd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ud)throw c;}}}
function Yd(a){if(Ma(a))return db(a);a=Wd(a);var b=[];Xd(a,function(c){b.push(c)});
return b}
;function Zd(a,b){this.i={};this.h=[];this.N=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Zd)for(c=$d(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function $d(a){ae(a);return a.h.concat()}
m=Zd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;var c=b||be;ae(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function be(a,b){return a===b}
m.isEmpty=function(){return 0==this.j};
m.clear=function(){this.i={};this.N=this.j=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.N++,this.h.length>2*this.j&&ae(this),!0):!1};
function ae(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.N++);this.i[a]=b};
m.forEach=function(a,b){for(var c=$d(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Zd(this)};
m.L=function(a){ae(this);var b=0,c=this.N,d=this,e=new Vd;e.next=function(){if(c!=d.N)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Ud;var f=d.h[b++];return a?f:d.i[f]};
return e};var ce=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{w.addEventListener("test",Ja,b),w.removeEventListener("test",Ja,b)}catch(c){}return a}();function de(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
de.prototype.stopPropagation=function(){this.j=!0};
de.prototype.preventDefault=function(){this.defaultPrevented=!0};function ee(a,b){de.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
F(ee,de);var fe={2:"touch",3:"pen",4:"mouse"};
ee.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(hc){a:{try{dc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:fe[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ee.H.preventDefault.call(this)};
ee.prototype.stopPropagation=function(){ee.H.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ee.prototype.preventDefault=function(){ee.H.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ge="closure_listenable_"+(1E6*Math.random()|0);var he=0;function ie(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ha=e;this.key=++he;this.X=this.fa=!1}
function je(a){a.X=!0;a.listener=null;a.h=null;a.src=null;a.ha=null}
;function ke(a){this.src=a;this.listeners={};this.h=0}
ke.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=le(a,b,d,e);-1<g?(b=a[g],c||(b.fa=!1)):(b=new ie(b,this.src,f,!!d,e),b.fa=c,a.push(b));return b};
ke.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=le(e,b,c,d);return-1<b?(je(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function me(a,b){var c=b.type;c in a.listeners&&cb(a.listeners[c],b)&&(je(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function le(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.ha==d)return e}return-1}
;var ne="closure_lm_"+(1E6*Math.random()|0),oe={},pe=0;function qe(a,b,c,d,e){if(d&&d.once)re(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)qe(a,b[f],c,d,e);else c=se(c),a&&a[ge]?te(a,b,c,B(d)?!!d.capture:!!d,e):ue(a,b,c,!1,d,e)}
function ue(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=B(e)?!!e.capture:!!e,h=ve(a);h||(a[ne]=h=new ke(a));c=h.add(b,c,d,g,f);if(!c.h){d=we();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)ce||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(xe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");pe++}}
function we(){function a(c){return b.call(a.src,a.listener,c)}
var b=ye;return a}
function re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else c=se(c),a&&a[ge]?a.h.add(String(b),c,!0,B(d)?!!d.capture:!!d,e):ue(a,b,c,!0,d,e)}
function ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else(d=B(d)?!!d.capture:!!d,c=se(c),a&&a[ge])?a.h.remove(String(b),c,d,e):a&&(a=ve(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=le(b,c,d,e)),(c=-1<a?b[a]:null)&&Ae(c))}
function Ae(a){if("number"!==typeof a&&a&&!a.X){var b=a.src;if(b&&b[ge])me(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(xe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);pe--;(c=ve(b))?(me(c,a),0==c.h&&(c.src=null,b[ne]=null)):je(a)}}}
function xe(a){return a in oe?oe[a]:oe[a]="on"+a}
function ye(a,b){if(a.X)var c=!0;else{c=new ee(b,this);var d=a.listener,e=a.ha||a.src;a.fa&&Ae(a);c=d.call(e,c)}return c}
function ve(a){a=a[ne];return a instanceof ke?a:null}
var Be="__closure_events_fn_"+(1E9*Math.random()>>>0);function se(a){if("function"===typeof a)return a;a[Be]||(a[Be]=function(b){return a.handleEvent(b)});
return a[Be]}
;function Ce(){L.call(this);this.h=new ke(this);this.B=this;this.m=null}
F(Ce,L);Ce.prototype[ge]=!0;Ce.prototype.addEventListener=function(a,b,c,d){qe(this,a,b,c,d)};
Ce.prototype.removeEventListener=function(a,b,c,d){ze(this,a,b,c,d)};
function De(a,b){var c=a.m;if(c){var d=[];for(var e=1;c;c=c.m)d.push(c),++e}c=a.B;e=b;var f=e.type||e;if("string"===typeof e)e=new de(e,c);else if(e instanceof de)e.target=e.target||c;else{var g=e;e=new de(f,c);pb(e,g)}g=!0;if(d)for(var h=d.length-1;!e.j&&0<=h;h--){var k=e.h=d[h];g=Ee(k,f,!0,e)&&g}e.j||(k=e.h=c,g=Ee(k,f,!0,e)&&g,e.j||(g=Ee(k,f,!1,e)&&g));if(d)for(h=0;!e.j&&h<d.length;h++)k=e.h=d[h],g=Ee(k,f,!1,e)&&g}
Ce.prototype.A=function(){Ce.H.A.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,je(d[e]);delete a.listeners[c];a.h--}}this.m=null};
function te(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Ee(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.X&&g.capture==c){var h=g.listener,k=g.ha||g.src;g.fa&&me(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Fe(a){var b=[];Ge(new He,a,b);return b.join("")}
function He(){}
function Ge(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ge(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ie(d,c),c.push(":"),Ge(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ie(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Je={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ke=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ie(a,b){b.push('"',a.replace(Ke,function(c){var d=Je[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Je[c]=d);return d}),'"')}
;function Le(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function M(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){Me(b,2,c)},function(c){Me(b,3,c)})}catch(c){Me(this,3,c)}}
function Ne(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ne.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Oe=new zd(function(){return new Ne},function(a){a.reset()});
function Pe(a,b,c){var d=Oe.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Qe(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return Re(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
M.prototype.$goog_Thenable=!0;function Se(a,b){return Re(a,null,b,void 0)}
M.prototype.cancel=function(a){if(0==this.h){var b=new Te(a);Hd(function(){Ue(this,b)},this)}};
function Ue(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ue(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ve(c),We(c,e,3,b)))}a.j=null}else Me(a,3,b)}
function Xe(a,b){a.i||2!=a.h&&3!=a.h||Ye(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Re(a,b,c,d){var e=Pe(null,null,null);e.h=new M(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Te?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Xe(a,e);return e.h}
M.prototype.B=function(a){this.h=0;Me(this,2,a)};
M.prototype.G=function(a){this.h=0;Me(this,3,a)};
function Me(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.G;if(d instanceof M){Xe(d,Pe(e||Ja,f||null,a));var g=!0}else if(Le(d))d.then(e,f,a),g=!0;else{if(B(d))try{var h=d.then;if("function"===typeof h){Ze(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,Ye(a),3!=b||c instanceof Te||$e(a,c))}}
function Ze(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ye(a){a.o||(a.o=!0,Hd(a.D,a))}
function Ve(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
M.prototype.D=function(){for(var a;a=Ve(this);)We(this,a,this.h,this.u);this.o=!1};
function We(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,af(b,c,d);else try{b.j?b.i.call(b.context):af(b,c,d)}catch(e){bf.call(null,e)}Ad(Oe,b)}
function af(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function $e(a,b){a.m=!0;Hd(function(){a.m&&bf.call(null,b)})}
var bf=Dd;function Te(a){Va.call(this,a)}
F(Te,Va);Te.prototype.name="cancel";function N(a){L.call(this);this.o=1;this.l=[];this.m=0;this.h=[];this.j={};this.u=!!a}
F(N,L);m=N.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function cf(a,b,c,d){if(b=a.j[b]){var e=a.h;(b=bb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.W(b)}}
m.W=function(a){var b=this.h[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.h[a+1]=Ja):(c&&cb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.O=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];df(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.W(c)}}return 0!=e}return!1};
function df(a,b,c){Hd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(G(b,this.W,this),delete this.j[a])}else this.h.length=0,this.j={}};
m.A=function(){N.H.A.call(this);this.clear();this.l.length=0};function ef(a){this.h=a}
ef.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Fe(b))};
ef.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ef.prototype.remove=function(a){this.h.remove(a)};function ff(a){this.h=a}
F(ff,ef);function gf(a){this.data=a}
function hf(a){return void 0===a||a instanceof gf?a:new gf(a)}
ff.prototype.set=function(a,b){ff.H.set.call(this,a,hf(b))};
ff.prototype.i=function(a){a=ff.H.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ff.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function jf(a){this.h=a}
F(jf,ff);jf.prototype.set=function(a,b,c){if(b=hf(b)){if(c){if(c<E()){jf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=E()}jf.H.set.call(this,a,b)};
jf.prototype.i=function(a){var b=jf.H.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<E()||c&&c>E())jf.prototype.remove.call(this,a);else return b}};function kf(){}
;function lf(){}
F(lf,kf);lf.prototype.clear=function(){var a=Yd(this.L(!0)),b=this;G(a,function(c){b.remove(c)})};function mf(a){this.h=a}
F(mf,lf);m=mf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.L=function(a){var b=0,c=this.h,d=new Vd;d.next=function(){if(b>=c.length)throw Ud;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function nf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(nf,mf);function of(a,b){this.i=a;this.h=null;if(fc&&!(9<=Number(sc))){pf||(pf=new Zd);this.h=pf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),pf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
F(of,lf);var qf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},pf=null;function rf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return qf[b]})}
m=of.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(rf(a),b);sf(this)};
m.get=function(a){a=this.h.getAttribute(rf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(rf(a));sf(this)};
m.L=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Vd;d.next=function(){if(b>=c.length)throw Ud;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);sf(this)};
function sf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function tf(a,b){this.i=a;this.h=b+"::"}
F(tf,lf);tf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
tf.prototype.get=function(a){return this.i.get(this.h+a)};
tf.prototype.remove=function(a){this.i.remove(this.h+a)};
tf.prototype.L=function(a){var b=this.i.L(!0),c=this,d=new Vd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function uf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var vf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",vf,void 0);function O(a){uf(vf,arguments)}
function H(a,b){return a in vf?vf[a]:b}
;var wf=[];function xf(a){wf.forEach(function(b){return b(a)})}
function yf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zf(b),xf(b)}}:a}
function zf(a){var b=y("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=H("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),O("ERRORS",b))}
function Af(a){var b=y("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=H("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),O("ERRORS",b))}
;var Bf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};x("yt.msgs_",Bf,void 0);function Cf(a){uf(Bf,arguments)}
;function P(a){a=Df(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ef(a,b){var c=Df(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Df(a){var b=H("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:H("EXPERIMENT_FLAGS",{})[a]}
;var Ff=0;x("ytDomDomGetNextId",y("ytDomDomGetNextId")||function(){return++Ff},void 0);var Gf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Hf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Gf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function If(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Hf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Hf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Hf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var hb=w.ytEventsEventsListeners||{};x("ytEventsEventsListeners",hb,void 0);var Jf=w.ytEventsEventsCounter||{count:0};x("ytEventsEventsCounter",Jf,void 0);
function Kf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return gb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=B(e[4])&&B(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Lf=Xa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Mf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Kf(a,b,c,d);if(e)return e;e=++Jf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Hf(h);if(!Jc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Hf(h);
h.currentTarget=a;return c.call(a,h)};
g=yf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Lf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);hb[e]=[a,b,c,g,d];return e}
function Nf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in hb){var c=hb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Lf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete hb[b]}}))}
;var Of=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Q(a,b){"function"===typeof a&&(a=yf(a));return window.setTimeout(a,b)}
function Pf(a){window.clearTimeout(a)}
;function Qf(a){this.B=a;this.h=null;this.m=0;this.u=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.I=Mf(window,"mousemove",C(this.J,this));a=C(this.G,this);"function"===typeof a&&(a=yf(a));this.K=window.setInterval(a,25)}
F(Qf,L);Qf.prototype.J=function(a){void 0===a.h&&If(a);var b=a.h;void 0===a.i&&If(a);this.h=new Bc(b,a.i)};
Qf.prototype.G=function(){if(this.h){var a=Of();if(0!=this.m){var b=this.u,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.B();this.o=d}this.m=a;this.u=this.h;this.l=(this.l+1)%4}};
Qf.prototype.A=function(){window.clearInterval(this.K);Nf(this.I)};function Rf(){}
function Sf(a,b){return Tf(a,1,b)}
;function Uf(){Rf.apply(this,arguments)}
v(Uf,Rf);function Tf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=y("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Q(a,c||0)}
function Vf(a){if(void 0===a||!Number.isNaN(Number(a))){var b=y("yt.scheduler.instance.cancelJob");b?b(a):Pf(a)}}
Uf.prototype.start=function(){var a=y("yt.scheduler.instance.start");a&&a()};
Uf.prototype.pause=function(){var a=y("yt.scheduler.instance.pause");a&&a()};
Ka(Uf);Uf.getInstance();var Wf={};
function Xf(a){var b=void 0===a?{}:a;a=void 0===b.Oa?!0:b.Oa;b=void 0===b.eb?!1:b.eb;if(null==y("_lact",window)){var c=parseInt(H("LACT"),10);c=isFinite(c)?E()-Math.max(c,0):-1;x("_lact",c,window);x("_fact",c,window);-1==c&&Yf();Mf(document,"keydown",Yf);Mf(document,"keyup",Yf);Mf(document,"mousedown",Yf);Mf(document,"mouseup",Yf);a&&(b?Mf(window,"touchmove",function(){Zf("touchmove",200)},{passive:!0}):(Mf(window,"resize",function(){Zf("resize",200)}),Mf(window,"scroll",function(){Zf("scroll",200)})));
new Qf(function(){Zf("mouse",100)});
Mf(document,"touchstart",Yf,{passive:!0});Mf(document,"touchend",Yf,{passive:!0})}}
function Zf(a,b){Wf[a]||(Wf[a]=!0,Sf(function(){Yf();Wf[a]=!1},b))}
function Yf(){null==y("_lact",window)&&Xf();var a=E();x("_lact",a,window);-1==y("_fact",window)&&x("_fact",a,window);(a=y("ytglobal.ytUtilActivityCallback_"))&&a()}
function $f(){var a=y("_lact",window);return null==a?-1:Math.max(E()-a,0)}
;var ag=w.ytPubsubPubsubInstance||new N,bg=w.ytPubsubPubsubSubscribedKeys||{},cg=w.ytPubsubPubsubTopicToKeys||{},dg=w.ytPubsubPubsubIsSynchronous||{};function eg(a,b){var c=fg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){bg[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{dg[a]?f():Q(f,0)}catch(g){zf(g)}},void 0);
bg[d]=!0;cg[a]||(cg[a]=[]);cg[a].push(d);return d}return 0}
function gg(a){var b=fg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete bg[c]}))}
function hg(a,b){var c=fg();c&&c.publish.apply(c,arguments)}
function ig(a){var b=fg();if(b)if(b.clear(a),a)jg(a);else for(var c in cg)jg(c)}
function fg(){return w.ytPubsubPubsubInstance}
function jg(a){cg[a]&&(a=cg[a],G(a,function(b){bg[b]&&delete bg[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.W;N.prototype.publish=N.prototype.O;N.prototype.clear=N.prototype.clear;x("ytPubsubPubsubInstance",ag,void 0);x("ytPubsubPubsubTopicToKeys",cg,void 0);x("ytPubsubPubsubIsSynchronous",dg,void 0);x("ytPubsubPubsubSubscribedKeys",bg,void 0);var kg=window,R=kg.ytcsi&&kg.ytcsi.now?kg.ytcsi.now:kg.performance&&kg.performance.timing&&kg.performance.now&&kg.performance.timing.navigationStart?function(){return kg.performance.timing.navigationStart+kg.performance.now()}:function(){return(new Date).getTime()};var lg=Ef("initial_gel_batch_timeout",1E3),mg=Math.pow(2,16)-1,ng=null,og=0,pg=void 0,qg=0,rg=0,sg=0,tg=!0,ug=w.ytLoggingTransportGELQueue_||new Map;x("ytLoggingTransportGELQueue_",ug,void 0);var vg=w.ytLoggingTransportTokensToCttTargetIds_||{};x("ytLoggingTransportTokensToCttTargetIds_",vg,void 0);
function wg(a,b){if("log_event"===a.endpoint){var c="";a.C&&(vg[a.C.token]=xg(a.C),c=a.C.token);var d=ug.get(c)||[];ug.set(c,d);d.push(a.payload);b&&(pg=new b);c=Ef("web_logging_max_batch")||100;var e=R();d.length>=c?yg(!0):10<=e-sg&&(zg(),sg=e)}}
function Ag(a,b){if("log_event"===a.endpoint){var c="";a.C&&(vg[a.C.token]=xg(a.C),c=a.C.token);var d=new Map;d.set(c,[a.payload]);b&&(pg=new b);return new M(function(e){pg&&pg.isReady()?Bg(d,e,!1):e()})}}
function yg(a){a=void 0===a?!1:a;return new M(function(b){Pf(qg);Pf(rg);rg=0;pg&&pg.isReady()?(Bg(ug,b,a),ug.clear()):(zg(),b())})}
function zg(){P("web_gel_timeout_cap")&&!rg&&(rg=Q(yg,6E4));Pf(qg);var a=H("LOGGING_BATCH_TIMEOUT",Ef("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&tg&&(a=lg);qg=Q(yg,a)}
function Bg(a,b,c){var d=pg;c=void 0===c?!1:c;var e=Math.round(R()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=nb({context:Cg(d.h||Dg())});h.events=k;(k=vg[g])&&Eg(h,g,k);delete vg[g];Fg(h,e);Gg(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();og=Math.round(R()-e)},
onError:function(){f--;f||b()},
qb:c});tg=!1}}
function Fg(a,b){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=H("EVENT_ID",void 0);if(c){var d=H("BATCH_CLIENT_COUNTER",void 0)||0;!d&&P("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*mg/2));d++;d>mg&&(d=1);O("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;ng&&og&&P("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:ng,roundtripMs:String(og)});ng=c;og=0}}
function Eg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function xg(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Hg=w.ytLoggingGelSequenceIdObj_||{};x("ytLoggingGelSequenceIdObj_",Hg,void 0);function Ig(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||R());e[a]=b;a=$f();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.M&&(a=e.context,b=d.M,Hg[b]=b in Hg?Hg[b]+1:0,a.sequence={index:Hg[b],groupKey:b},d.Ja&&delete Hg[d.M]);(d.Fk?Ag:wg)({endpoint:"log_event",payload:e,C:d.C},c)}
;function Jg(){var a=Kg;y("yt.ads.biscotti.getId_")||x("yt.ads.biscotti.getId_",a,void 0)}
function Lg(a){x("yt.ads.biscotti.lastId_",a,void 0)}
;var Mg=/^[\w.]*$/,Ng={q:!0,search_query:!0};function Og(a,b){for(var c=a.split(b),d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=Pg(g[0]||""),k=Pg(g[1]||"");h in d?Array.isArray(d[h])?eb(d[h],k):d[h]=[d[h],k]:d[h]=k}catch(q){var l=q,n=g[0],p=String(Og);l.args=[{key:n,value:g[1],query:a,method:Qg==p?"unchanged":p}];Ng.hasOwnProperty(n)||Af(l)}}return d}
var Qg=String(Og);function Rg(a){var b=[];fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Sg(a){"?"==a.charAt(0)&&(a=a.substr(1));return Og(a,"&")}
function Tg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Sg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $b(a,e)+d}
function Pg(a){return a&&a.match(Mg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Ug(a){var b=Vg;a=void 0===a?y("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=nd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(da){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(da){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(da){}try{var n=h.outerWidth;var p=h.outerHeight}catch(da){}try{var q=h.innerWidth;var r=h.innerHeight}catch(da){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,n,p,q,
r];l=b.h.top;try{var z=(l||window).document,A="CSS1Compat"==z.compatMode?z.documentElement:z.body;var D=(new Cc(A.clientWidth,A.clientHeight)).round()}catch(da){D=new Cc(-12245933,-12245933)}z=D;D={};A=new xd;w.SVGElement&&w.document.createElementNS&&A.set(0);l=Oc();l["allow-top-navigation-by-user-activation"]&&A.set(1);l["allow-popups-to-escape-sandbox"]&&A.set(2);w.crypto&&w.crypto.subtle&&A.set(3);w.TextDecoder&&w.TextEncoder&&A.set(4);A=yd(A);D.bc=A;D.bih=z.height;D.biw=z.width;D.brdim=k.join();
b=b.i;b=(D.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,D.wgl=!!K.WebGLRenderingContext,D);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Vg=new function(){var a=window.document;this.h=window;this.i=a};
x("yt.ads_.signals_.getAdSignalsString",function(a){return Rg(Ug(a))},void 0);var Wg="XMLHttpRequest"in w?function(){return new XMLHttpRequest}:null;
function Xg(){if(!Wg)return null;var a=Wg();return"open"in a?a:null}
function Yg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var Zg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
$g="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),ah=!1;
function bh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Vb)[1]||null,e=Xb(a);d&&e?(d=c,c=a.match(Vb),d=d.match(Vb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Xb(c)==e&&(Number(c.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;d=P("web_ajax_ignore_global_headers_if_set");for(var f in Zg)e=H(Zg[f]),!e||!c&&Xb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Xb(a))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Xb(a))b["X-YouTube-Ad-Signals"]=Rg(Ug(void 0));return b}
function ch(a){var b=window.location.search,c=Xb(a),d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Sg(b),f={};G($g,function(g){e[g]&&(f[g]=e[g])});
return Tg(a,f||{},!1)}
function dh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=eh(a,b);var d=fh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Pf(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||w;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.onFinish&&b.onFinish.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.onFetchTimeout&&0<b.timeout&&(f=Q(function(){e||(e=!0,Pf(f),b.onFetchTimeout.call(b.context||w))},b.timeout))}else gh(a,b)}
function gh(a,b){var c=b.format||"JSON";a=eh(a,b);var d=fh(a,b),e=!1,f=hh(a,function(k){if(!e){e=!0;h&&Pf(h);var l=Yg(k),n=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)n=ih(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||w;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Q(function(){e||(e=!0,f.abort(),Pf(h),g.call(b.context||w,f))},b.timeout)}return f}
function eh(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=H("XSRF_FIELD_NAME",void 0),d=b.urlParams;d&&(d[c]&&delete d[c],a=Tg(a,d||{},!0));return a}
function fh(a,b){var c=H("XSRF_FIELD_NAME",void 0),d=H("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=H("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Sg(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Zb(e));f=e||f&&!ib(f);!ah&&f&&
"POST"!=b.method&&(ah=!0,zf(Error("AJAX request with postData should use POST")));return e}
function ih(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Af(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?jh(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=kh(g)})}d&&lh(e);
return e}
function lh(a){if(B(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else lh(a[b])}}
function jh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function kh(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function hh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&yf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Xg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=ch(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=bh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function mh(){return"INNERTUBE_API_KEY"in vf&&"INNERTUBE_API_VERSION"in vf}
function Dg(){return{innertubeApiKey:H("INNERTUBE_API_KEY",void 0),innertubeApiVersion:H("INNERTUBE_API_VERSION",void 0),Pa:H("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Qa:H("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Sa:H("INNERTUBE_CONTEXT_HL",void 0),Ra:H("INNERTUBE_CONTEXT_GL",void 0),Ta:H("INNERTUBE_HOST_OVERRIDE",void 0)||"",Va:!!H("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ua:!!H("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:H("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Cg(a){var b={client:{hl:a.Sa,gl:a.Ra,clientName:a.Qa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Pa}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=H("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=H("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=H("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&P("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);H("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:H("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(Sg(H("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function nh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||H("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.uk||H("AUTHORIZATION"))||(a?b="Bearer "+y("gapi.auth.getToken")().tk:b=wd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=H("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=H("DELEGATED_SESSION_ID")));return d}
;function oh(a){a=Object.assign({},a);delete a.Authorization;var b=wd();if(b){var c=new Od;c.update(H("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=zc(c.digest())}return a}
;function ph(a,b,c,d){md.set(""+a,b,{za:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function qh(a){var b=new nf;(b=b.isAvailable()?a?new tf(b,a):b:null)||(a=new of(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new jf(a):null;this.i=document.domain||window.location.hostname}
qh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,E()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Fe(b))}catch(f){return}else e=escape(b);ph(a,e,c,this.i)};
qh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=md.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
qh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;md.remove(""+a,"/",void 0===b?"youtube.com":b)};var rh;function sh(){rh||(rh=new qh("yt.innertube"));return rh}
function th(a,b,c,d){if(d)return null;d=sh().get("nextId",!0)||1;var e=sh().get("requests",!0)||{};e[d]={method:a,request:b,authState:oh(c),requestTime:Math.round(R())};sh().set("nextId",d+1,86400,!0);sh().set("requests",e,86400,!0);return d}
function uh(a){var b=sh().get("requests",!0)||{};delete b[a];sh().set("requests",b,86400,!0)}
function vh(a){var b=sh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=oh(nh(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),Gg(a,d.method,e,{}));delete b[c]}}sh().set("requests",b,86400,!0)}}
;function wh(a,b){this.version=a;this.args=b}
;function xh(a,b){this.topic=a;this.h=b}
xh.prototype.toString=function(){return this.topic};var yh=y("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.W;N.prototype.publish=N.prototype.O;N.prototype.clear=N.prototype.clear;x("ytPubsub2Pubsub2Instance",yh,void 0);var zh=y("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",zh,void 0);var Ah=y("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",Ah,void 0);var Bh=y("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",Bh,void 0);
x("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ch(a,b){var c=Dh();c&&c.publish.call(c,a.toString(),a,b)}
function Eh(a){var b=Fh,c=Dh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=y("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(zh[d])try{if(f&&b instanceof xh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.N){var l=new h;h.N=l.version}var n=h.N}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
db(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){zf(p)}},Bh[b.toString()]?y("yt.scheduler.instance")?Sf(g):Q(g,0):g())});
zh[d]=!0;Ah[b.toString()]||(Ah[b.toString()]=[]);Ah[b.toString()].push(d);return d}
function Gh(){var a=Hh,b=Eh(function(c){a.apply(void 0,arguments);Ih(b)});
return b}
function Ih(a){var b=Dh();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete zh[c]}))}
function Dh(){return y("ytPubsub2Pubsub2Instance")}
;var Jh=uc||vc;function Kh(a){var b=Lb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Lh=[],Mh=!1;function Nh(a,b){Mh||(Lh.push({type:"EVENT",eventType:a,payload:b}),10<Lh.length&&Lh.shift())}
;function S(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
v(S,Error);var Oh={},Ph=(Oh.AUTH_INVALID="No user identifier specified.",Oh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Oh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Oh.MISSING_OBJECT_STORE="Object store not created.",Oh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Oh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Oh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Oh.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",Oh),Qh={},Rh=(Qh.AUTH_INVALID="ERROR",Qh.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Qh.EXPLICIT_ABORT="IGNORED",Qh.IDB_NOT_SUPPORTED="WARNING",Qh.MISSING_OBJECT_STORE="ERROR",Qh.QUOTA_EXCEEDED="WARNING",Qh.QUOTA_MAYBE_EXCEEDED="WARNING",Qh.UNKNOWN_ABORT="WARNING",Qh);
function T(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?Ph[a]:c;d=void 0===d?Rh[a]:d;S.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a,level:d},b));this.type=a;this.message=c;this.level=d;Object.setPrototypeOf(this,T.prototype)}
v(T,S);function Sh(a){T.call(this,"MISSING_OBJECT_STORE",{Ak:a},Ph.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Sh.prototype)}
v(Sh,T);var Th=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Uh(a,b,c){if(a instanceof T||a instanceof S)return a;if("QuotaExceededError"===a.name)return new T("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(wc&&"UnknownError"===a.name)return new T("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===a.name&&Th.some(function(d){return a.message.includes(d)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});Object.setPrototypeOf(a,S.prototype);a.args=[{name:"IdbError",Bk:a.name,dbName:b,objectStoreNames:c}];return a}
;function Vh(a){if(!a)throw Error();throw a;}
function Wh(a){return a}
function U(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
U.all=function(a){return new U(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={P:0};f.P<a.length;f={P:f.P},++f.P)Xh(U.resolve(a[f.P]).then(function(g){return function(h){d[g.P]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
U.resolve=function(a){return new U(function(b,c){a instanceof U?a.then(b,c):b(a)})};
U.reject=function(a){return new U(function(b,c){c(a)})};
U.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Wh,e=null!==b&&void 0!==b?b:Vh;return new U(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Yh(c,c,d,f,g)}),c.onRejected.push(function(){Zh(c,c,e,f,g)})):"FULFILLED"===c.state.status?Yh(c,c,d,f,g):"REJECTED"===c.state.status&&Zh(c,c,e,f,g)})};
function Xh(a,b){return a.then(void 0,b)}
function Yh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?$h(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?$h(a,b,f,d,e):d(f)}catch(g){e(g)}}
function $h(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?$h(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ai(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function bi(a){return new Promise(function(b,c){ai(a,b,c)})}
function V(a){return new U(function(b,c){ai(a,b,c)})}
;function ci(a,b){return new U(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function di(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
m=di.prototype;m.add=function(a,b,c){return ei(this,[a],{mode:"readwrite",T:P("ytidb_transaction_enable_retries_core_and_nwl")},function(d){return fi(d,a).add(b,c)})};
m.clear=function(a){return ei(this,[a],{mode:"readwrite",T:P("ytidb_transaction_enable_retries_core_and_nwl")},function(b){return fi(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return ei(this,[a],{mode:"readonly",T:P("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return fi(c,a).count(b)})};
m["delete"]=function(a,b){return ei(this,[a],{mode:"readwrite",T:P("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return fi(c,a)["delete"](b)})};
m.get=function(a,b){return ei(this,[a],{mode:"readonly",T:P("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return fi(c,a).get(b)})};
function ei(a,b,c,d){var e={mode:"readonly",T:!1};"string"===typeof c?e.mode=c:e=c;a.transactionCount++;try{var f=a.h.transaction(b,e.mode);var g=gi(f,d,e)["catch"](function(h){throw Uh(h,a.h.name,b.join());})}catch(h){g=h instanceof Error?Promise.reject(Uh(h,a.h.name,b.join())):Promise.reject(Uh(Error("unexpected transaction error: "+h),a.h.name,b.join()))}hi(a,g,b.join(),e);
return g}
function hi(a,b,c,d){bc(a,function f(){var g,h,k=this,l,n,p;return Aa(f,function(q){if(1==q.h)return g=Math.round(R()),q.l=2,sa(q,b,4);2!=q.h?(h=Math.round(R()),ii(k,!0,c,h-g),q.h=0,q.l=0):(l=ta(q),n=Math.round(R()),p=n-g,l instanceof T&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&Nh("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d.mode}),l instanceof T&&"UNKNOWN_ABORT"===l.type&&(Nh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:p,transactionCount:k.transactionCount,dbDuration:n-k.j}),k.i=!0),ii(k,!1,c,p),Mh||(Lh.push({type:"ERROR",payload:l}),10<Lh.length&&Lh.shift()),q.h=0)})})}
function ii(a,b,c,d){Nh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function ji(a){this.h=a}
m=ji.prototype;m.add=function(a,b){return V(this.h.add(a,b))};
m.clear=function(){return V(this.h.clear()).then(function(){})};
m.count=function(a){return V(this.h.count(a))};
function ki(a,b){return li(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
m["delete"]=function(a){return a instanceof IDBKeyRange?ki(this,a):V(this.h["delete"](a))};
m.get=function(a){return V(this.h.get(a))};
m.index=function(a){return new mi(this.h.index(a))};
m.getName=function(){return this.h.name};
function li(a,b,c){a=a.h.openCursor(b.query,b.direction);return ni(a).then(function(d){return ci(d,c)})}
function oi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=T;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function gi(a,b,c){a=new oi(a);return pi(a,b,c)}
function pi(a,b,c){var d=new Promise(function(e,f){var g=Ef("ytidb_transaction_try_count",1),h=b(a);if(c.T)for(var k=0;k<g-1;k++)h=Xh(h,function(l){return l instanceof T&&"EXPLICIT_ABORT"===l.type?U.reject(l):b(a)});
Xh(h.then(function(l){a.commit();e(l)}),f)});
return Promise.all([d,a.done]).then(function(e){return u(e).next().value})}
oi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new T("EXPLICIT_ABORT");};
oi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function fi(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new ji(c),a.i.set(c,d));return d}
function mi(a){this.h=a}
mi.prototype.count=function(a){return V(this.h.count(a))};
mi.prototype["delete"]=function(a){return qi(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
mi.prototype.get=function(a){return V(this.h.get(a))};
mi.prototype.getKey=function(a){return V(this.h.getKey(a))};
function qi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ni(a).then(function(d){return ci(d,c)})}
function ri(a,b){this.request=a;this.cursor=b}
function ni(a){return V(a).then(function(b){return null===b?null:new ri(a,b)})}
m=ri.prototype;m.advance=function(a){this.cursor.advance(a);return ni(this.request)};
m["continue"]=function(a){this.cursor["continue"](a);return ni(this.request)};
m["delete"]=function(){return V(this.cursor["delete"]()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return V(this.cursor.update(a))};function si(a,b,c){return bc(this,function e(){var f,g,h,k,l,n,p,q,r,z;return Aa(e,function(A){if(1==A.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.pb,n=g.upgrade,p=g.closed,r=function(){q||(q=new di(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(D){if(null===D.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");D.dataLoss&&"none"!==D.dataLoss&&Nh("IDB_DATA_CORRUPTED",{reason:D.dataLossMessage||"unknown reason",dbName:a});var da=r(),va=new oi(f.transaction);n&&n(da,D.oldVersion,D.newVersion,va)}),h&&f.addEventListener("blocked",function(){h()}),sa(A,bi(f),2);
z=A.m;k&&z.addEventListener("versionchange",function(){k(r())});
z.addEventListener("close",function(){Nh("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:z.version});l&&l()});
return A["return"](r())})})}
function ti(a,b){b=void 0===b?{}:b;return bc(this,function d(){var e,f,g;return Aa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return sa(h,bi(e),0)})})}
;function ui(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function vi(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return si(a,b,c)}
ui.prototype["delete"]=function(a){a=void 0===a?{}:a;return ti(this.name,a)};
function wi(){var a=xi;if(!a.h){var b=function(){a.h===e&&(a.h=void 0)},c={blocking:function(f){f.close()},
closed:b,pb:b,upgrade:a.options.upgrade},d=function(){return bc(a,function g(){var h=this,k,l,n;return Aa(g,function(p){switch(p.h){case 1:return p.l=2,sa(p,vi(h.name,h.options.version,c),4);case 4:k=p.m;if(!tc){p.h=5;break}a:{var q=u(Object.keys(h.options.Ya));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.h.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.h=5;break}if(!tc||h.i){p.h=7;break}h.i=!0;return sa(p,h["delete"](),8);case 8:return p["return"](d());case 7:throw new Sh(l);
case 5:return p["return"](k);case 2:n=ta(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===n.message)return p["return"](vi(h.name,void 0,Object.assign(Object.assign({},c),{upgrade:void 0})));b();throw n;}})})};
var e=d();a.h=e}return a.h}
;var xi=new ui({Ya:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function yi(a){return bc(this,function c(){var d;return Aa(c,function(e){if(1==e.h)return sa(e,wi(),2);d=e.m;return e["return"](ei(d,["databases"],"readwrite",function(f){var g=fi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return V(g.h.put(a,void 0)).then(function(){})})}))})})}
function zi(){return bc(this,function b(){var c;return Aa(b,function(d){if(1==d.h)return sa(d,wi(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var Ai;
function Bi(){return bc(this,function b(){var c,d;return Aa(b,function(e){switch(e.h){case 1:var f;if(f=Jh)f=/WebKit\/([0-9]+)/.exec(Lb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!P("ytidb_allow_on_ios_safari_v8_and_v9")||gc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return sa(e,yi(d),4);case 4:return sa(e,zi(),5);case 5:return e["return"](!0);case 2:return ta(e),e["return"](!1)}})})}
function Ci(){if(void 0!==Ai)return Ai;Mh=!0;return Ai=Bi().then(function(a){Mh=!1;return a})}
;var Di;function Ei(){Di||(Di=new qh("yt.offline"));return Di}
;function Fi(){Ce.call(this);this.o=this.u=this.j=!1;this.l=Gi();Hi(this);Ii(this)}
v(Fi,Ce);function Gi(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Ii(a){window.addEventListener("online",function(){a.l=!0;a.j&&De(a,"ytnetworkstatus-online");Ji(a);if(a.o&&P("offline_error_handling")){var b=Ei().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new S(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level||b[c].yk;zf(d)}Ei().set("errors",{},2592E3,!0)}}})}
function Hi(a){window.addEventListener("offline",function(){a.l=!1;a.j&&De(a,"ytnetworkstatus-offline");Ji(a)})}
function Ji(a){a.u&&(Af(new S("NetworkStatusManager state did not match poll",R()-0)),a.u=!1)}
;function Ki(a){a=void 0===a?{}:a;Ce.call(this);var b=this;this.l=this.u=0;Fi.h||(Fi.h=new Fi);this.j=Fi.h;this.j.j=!0;a.Xa&&(this.j.o=!0);a.ia?(this.ia=a.ia,te(this.j,"ytnetworkstatus-online",function(){Li(b,"publicytnetworkstatus-online")}),te(this.j,"ytnetworkstatus-offline",function(){Li(b,"publicytnetworkstatus-offline")})):(te(this.j,"ytnetworkstatus-online",function(){De(b,"publicytnetworkstatus-online")}),te(this.j,"ytnetworkstatus-offline",function(){De(b,"publicytnetworkstatus-offline")}))}
v(Ki,Ce);function Li(a,b){a.ia?a.l?(Vf(a.u),a.u=Sf(function(){a.o!==b&&(De(a,b),a.o=b,a.l=R())},a.ia-(R()-a.l))):(De(a,b),a.o=b,a.l=R()):De(a,b)}
;var Mi;function Ni(a,b){b=void 0===b?{}:b;Ci().then(function(){Mi||(Mi=new Ki({Xa:!0}));Mi.j.l!==Gi()&&Af(new S("NetworkStatusManager isOnline does not match window status"));gh(a,b)})}
function Oi(a,b){b=void 0===b?{}:b;Ci().then(function(){gh(a,b)})}
;function Pi(a){var b=this;this.h=null;a?this.h=a:mh()&&(this.h=Dg());Tf(function(){vh(b)},0,5E3)}
Pi.prototype.isReady=function(){!this.h&&mh()&&(this.h=Dg());return!!this.h};
function Gg(a,b,c,d){!H("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Af(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new S("innertube xhrclient not ready",b,c,d);zf(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.Ta)&&(g=e);var h=a.h.Va||!1,k=nh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.Ua&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var n=Tg(""+g+e,l||{},!0);Ci().then(function(p){if(d.retry&&P("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(P("networkless_gel")&&!p||!P("networkless_gel"))var q=th(b,
c,k,h);if(q){var r=f.onSuccess,z=f.onFetchSuccess;f.onSuccess=function(A,D){uh(q);r(A,D)};
c.onFetchSuccess=function(A,D){uh(q);z(A,D)}}}try{P("use_fetch_for_op_xhr")?dh(n,f):P("networkless_gel")&&d.retry?(f.method="POST",!d.qb&&P("nwl_send_fast_on_unload")?Oi(n,f):Ni(n,f)):(f.method="POST",f.postParams||(f.postParams={}),gh(n,f))}catch(A){if("InvalidAccessError"==A.name)q&&(uh(q),q=0),Af(Error("An extension is blocking network request."));
else throw A;}q&&Tf(function(){vh(a)},0,5E3)})}
;function W(a,b,c){c=void 0===c?{}:c;var d=Pi;H("ytLoggingEventsDefaultDisabled",!1)&&Pi==Pi&&(d=null);Ig(a,b,d,c)}
;var Qi=[{Aa:function(a){return"Cannot read property '"+a.key+"'"},
ra:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Aa:function(a){return"Cannot call '"+a.key+"'"},
ra:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function Ri(){this.h=[];this.i=[]}
var Si;function Ti(){Si||(Si=new Ri);return Si}
;var Ui=new N;function Vi(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Wi(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Wi(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Wi(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Wi(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Xi(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Yi(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Vi(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Yi(f+".ve",g,h,k):0;d+=f;d+=Yi(e,a[e],b,c);if(500<d)break}}else c[b]=Zi(a),d+=c[b].length;else c[b]=Zi(a),d+=c[b].length;return d}
function Yi(a,b,c,d){c+="."+a;a=Zi(b);d[c]=a;return c.length+a.length}
function Zi(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var $i=new Set,aj=0,bj=0,cj=0,dj=[],ej=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function fj(a){gj(a,"WARNING")}
function gj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||H("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.level&&(b=a.level),P("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=
aj))){var g=hd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.h||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Xi(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,
q=Zi(n[l]);c[p]=q;k+=p.length+q.length;if(500<k)break}}else c.params=Zi(n)}if(dj.length)for(l=0;l<dj.length&&!(k=Xi(dj[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if(P("sampleWeight_to_level_migration_killswitch")&&void 0!==a.sampleWeight)a=a.sampleWeight;else if("IGNORED"===
a.level)a=0;else a:{a=Ti();c=u(a.i);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.zk)){a=d.weight;break a}a=u(a.h);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ha(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Qi);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ra[l.name])for(e=u(c.ra[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+
e[g]]=d[g+1];l.message=c.Aa(f);break}l.params||(l.params={});a=Ti();l.params["params.errorServiceSignature"]="msg="+a.i.length+"&cb="+a.h.length;l.params["params.serviceWorker"]="false";l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length);window.yterr&&"function"===typeof window.yterr&&window.yterr(l);a=0===l.sampleWeight;if(!$i.has(l.message)&&!a){"ERROR"===b?(Ui.O("handleError",l),P("record_app_crashed_web")&&0===cj&&1===l.sampleWeight&&(cj++,W("appCrashed",
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),bj++):"WARNING"===b&&Ui.O("handleWarning",l);if(P("kevlar_gel_error_routing")){c=b;a:{a=u(ej);for(d=a.next();!d.done;d=a.next())if(Kh(d.value.toLowerCase())){a=!0;break a}a=!1}if(!a){d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);a=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(d.lineNumber=Number(a[0]),d.columnNumber=Number(a[1])):
d.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===c?a.level="ERROR_LEVEL_ERROR":"WARNING"===c&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href,kvPairs:[]};H("FEXP_EXPERIMENTS")&&(d.experimentIds=H("FEXP_EXPERIMENTS"));if(e=l.params)for(f=u(Object.keys(e)),g=f.next();!g.done;g=f.next())g=g.value,d.kvPairs.push({key:"client."+g,value:String(e[g])});e=H("SERVER_NAME",
void 0);f=H("SERVER_VERSION",void 0);e&&f&&(d.kvPairs.push({key:"server.name",value:e}),d.kvPairs.push({key:"server.version",value:f}));W("clientError",{errorMetadata:d,stackTrace:c,logMessage:a});yg()}}if(!P("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:H("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);
if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=H("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=H("SERVER_NAME",void 0);c=H("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}gh(H("ECATCHER_REPORT_HOST","")+"/error_204",b)}$i.add(l.message);aj++}}}
function hj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:ha(u(c)))}
;function ij(a){a&&(a.dataset?a.dataset[jj("loaded")]="true":a.setAttribute("data-loaded","true"))}
function kj(a,b){return a?a.dataset?a.dataset[jj(b)]:a.getAttribute("data-"+b):null}
var lj={};function jj(a){return lj[a]||(lj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var mj=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,nj=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function oj(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(mj,""),c=c.replace(nj,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else pj(a,b,c)}
function pj(a,b,c){c=void 0===c?null:c;var d=qj(a),e=document.getElementById(d),f=e&&kj(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=eg(d,b),b=""+Na(b),rj[b]=f),g||(e=sj(a,d,function(){kj(e,"loaded")||(ij(e),hg(d),Q(Sa(ig,d),0))},c)))}
function sj(a,b,c,d){d=void 0===d?null:d;var e=Hc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,ed(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function tj(a){a=qj(a);var b=document.getElementById(a);b&&(ig(a),b.parentNode.removeChild(b))}
function uj(a,b){if(a&&b){var c=""+Na(b);(c=rj[c])&&gg(c)}}
function qj(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ub(a)}
var rj={};var vj=[],wj=!1;function xj(){if(!P("disable_ad_status_on_html5_clients")&&(!P("condition_ad_status_fetch_on_consent_cookie_html5_clients")||md.get("CONSENT","").startsWith("YES+"))&&"1"!=kb()){var a=function(){wj=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
try{oj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}vj.push(Sf(function(){if(!(wj||"google_ad_status"in window)){try{uj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}wj=!0;O("DCLKSTAT",3)}},5E3))}}
function yj(){return parseInt(H("DCLKSTAT",0),10)}
;function zj(){this.i=!1;this.h=null}
zj.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,oj(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?Aj(g,c,d,f,h):(tj(b),fj(new S("Unable to load Botguard","from "+b)))},e)):a&&(e=Hc(document,"SCRIPT"),e.textContent=a,e.nonce=Fa(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?Aj(this,c,d,f,a):fj(Error("Unable to load Botguard from JS")))};
function Aj(a,b,c,d,e){e=e?window.trayride.ad:window.botguard.bg;if(d)try{a.h=new e(b,c?function(){return c(b)}:Ja)}catch(f){fj(f)}else{try{a.h=new e(b)}catch(f){fj(f)}c&&c(b)}}
zj.prototype.dispose=function(){this.h=null};var Bj=new zj;function Cj(){return!!Bj.h}
function Dj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Bj.h?Bj.h.hot?Bj.h.hot(void 0,void 0,a):Bj.h.invoke(void 0,void 0,a):null}
;var Ej={Wb:29434,Yb:3611,Je:3854,Zf:42993,Ii:4724,pj:96370,rb:27686,sb:85013,tb:23462,vb:42016,wb:62407,xb:26926,ub:43781,yb:51236,zb:79148,Ab:50160,Bb:77504,Nb:87907,Ob:18630,Pb:54445,Qb:80935,Rb:105675,Sb:37521,Tb:47786,Ub:98349,Vb:6827,Xb:7282,cc:32276,ac:76278,dc:93911,ec:106531,fc:27259,hc:27262,ic:27263,kc:21759,lc:27107,mc:62936,nc:49568,oc:38408,pc:80637,qc:68727,sc:68728,tc:80353,uc:80356,wc:74610,xc:45707,yc:83962,zc:83970,Ac:46713,Bc:89711,Cc:74612,Dc:93265,Ec:74611,Gc:113533,Hc:93252,
Ic:99357,Kc:94521,Lc:114252,Mc:113532,Nc:94522,Jc:94583,Oc:88E3,Pc:93253,Qc:93254,Rc:94387,Sc:94388,Tc:93255,Uc:97424,Fc:72502,Vc:110111,Wc:76019,Yc:117092,Zc:117093,Xc:89431,bd:110466,cd:77240,dd:60508,ed:105350,fd:73393,gd:113534,hd:92098,jd:84517,kd:83759,ld:80357,md:86113,nd:72598,od:72733,pd:107349,qd:118203,rd:117431,sd:117429,td:117430,ud:117432,vd:117259,wd:97615,xd:31402,yd:84774,zd:95117,Ad:98930,Bd:98931,Cd:98932,Dd:43347,Ed:45474,Fd:100352,Gd:84758,Hd:98443,Id:117985,Jd:74613,Kd:74614,
Ld:64502,Md:74615,Nd:74616,Od:74617,Pd:77820,Qd:74618,Rd:93278,Sd:93274,Td:93275,Ud:93276,Vd:22110,Wd:29433,Zd:82047,ae:113550,be:75836,ce:75837,de:42352,ee:84512,ge:76065,he:75989,ie:16623,je:32594,ke:27240,le:32633,me:74858,oe:3945,ne:16989,pe:45520,qe:25488,re:25492,se:25494,te:55760,ue:14057,we:18451,xe:57204,ye:57203,ze:17897,Ae:57205,Be:18198,Ce:17898,De:17909,Ee:43980,Fe:46220,Ge:11721,He:49954,Ie:96369,Ke:56251,Le:25624,Me:16906,Ne:99999,Oe:68172,Pe:27068,Qe:47973,Re:72773,Se:26970,Te:26971,
Ue:96805,Ve:17752,We:73233,Xe:109512,Ye:22256,Ze:14115,af:22696,bf:89278,cf:89277,df:109513,ef:43278,ff:43459,gf:43464,hf:89279,jf:43717,kf:55764,lf:22255,mf:89281,nf:40963,pf:43277,qf:43442,rf:91824,sf:96367,tf:36850,uf:72694,vf:37414,wf:36851,xf:73491,yf:54473,zf:43375,Af:46674,Bf:32473,Cf:72901,Df:72906,Ef:50947,Ff:50612,Gf:50613,Hf:50942,If:84938,Jf:84943,Kf:84939,Lf:84941,Mf:84944,Nf:84940,Of:84942,Pf:35585,Qf:51926,Rf:79983,Sf:63238,Tf:18921,Uf:63241,Vf:57893,Wf:41182,Xf:33424,Yf:22207,ag:36229,
cg:22206,dg:22205,eg:18993,fg:19001,gg:18990,hg:18991,jg:18997,kg:18725,lg:19003,mg:36874,ng:44763,og:33427,pg:67793,qg:22182,rg:37091,sg:34650,tg:50617,ug:47261,vg:22287,wg:25144,xg:97917,yg:62397,zg:36961,Ag:108035,Bg:27426,Cg:27857,Dg:27846,Eg:27854,Fg:69692,Gg:61411,Hg:39299,Ig:38696,Jg:62520,Kg:36382,Lg:108701,Mg:50663,Ng:36387,Og:14908,Pg:37533,Qg:105443,Rg:61635,Sg:62274,Tg:65702,Ug:65703,Vg:65701,Wg:76256,Xg:37671,Yg:49953,ah:36216,bh:28237,dh:39553,eh:29222,fh:26107,gh:38050,hh:26108,ih:26109,
jh:26110,kh:66881,lh:28236,mh:14586,nh:57929,oh:74723,ph:44098,qh:44099,rh:23528,sh:61699,uh:59149,vh:101951,wh:97346,xh:118051,yh:95102,zh:64882,Ah:119505,Bh:63595,Ch:63349,Dh:95101,Eh:75240,Fh:27039,Gh:68823,Hh:21537,Ih:83464,Jh:75707,Kh:83113,Lh:101952,Mh:101953,Oh:79610,Ph:24402,Qh:24400,Rh:32925,Sh:57173,Th:64423,Uh:64424,Vh:33986,Wh:100828,Xh:21409,Yh:11070,Zh:11074,ai:17880,bi:14001,di:30709,fi:30707,gi:30711,hi:30710,ii:30708,ci:26984,ji:63648,ki:63649,li:51879,mi:111059,ni:5754,oi:20445,
ri:110386,si:113746,ti:66557,vi:17310,wi:28631,xi:21589,yi:68012,zi:60480,Ai:31571,Bi:76980,Ci:41577,Di:45469,Ei:38669,Fi:13768,Gi:13777,Hi:62985,Ji:59369,Ki:43927,Li:43928,Mi:12924,Ni:100355,Pi:56219,Qi:27669,Ri:10337,Oi:47896,Si:107598,Ti:96639,Ui:107536,Vi:96661,Wi:96658,Xi:116646,Yi:96660,Zi:104443,aj:96659,bj:106442,cj:63667,dj:63668,ej:63669,fj:78314,gj:55761,hj:96368,ij:67374,jj:48992,kj:49956,lj:31961,mj:26388,nj:23811,oj:5E4,qj:47355,rj:47356,sj:37935,tj:45521,uj:21760,vj:83769,wj:49977,
xj:49974,yj:93497,zj:93498,Aj:34325,Bj:115803,Cj:100081,Dj:35309,Ej:68314,Fj:25602,Gj:100339,Hj:59018,Ij:18248,Jj:50625,Kj:9729,Lj:37168,Mj:37169,Nj:21667,Oj:16749,Pj:18635,Qj:39305,Rj:18046,Sj:53969,Tj:8213,Uj:93926,Vj:102852,Wj:110099,Xj:22678,Yj:69076,ak:100856,bk:17736,ck:3832,dk:55759,ek:64031,fk:93044,gk:93045,hk:34388,ik:17657,jk:17655,kk:39579,lk:39578,mk:77448,nk:8196,pk:11357,qk:69877,rk:8197,sk:82039};function Fj(a){a=void 0===a?!1:a;L.call(this);this.h=new N(a);Rc(this,Sa(Pc,this.h))}
F(Fj,L);Fj.prototype.subscribe=function(a,b,c){return this.i?0:this.h.subscribe(a,b,c)};
Fj.prototype.o=function(a,b){this.i||this.h.O.apply(this.h,arguments)};function Gj(a,b,c){Fj.call(this);this.l=a;this.j=b;this.m=c}
v(Gj,Fj);function Hj(a,b,c){if(!a.i){var d=a.l;d.i||a.j!=d.h||(a={id:a.m,command:b},c&&(a.data=c),d.h.postMessage(Fe(a),d.l))}}
Gj.prototype.A=function(){this.j=this.l=null;Fj.prototype.A.call(this)};function Ij(a){L.call(this);this.h=a;this.h.subscribe("command",this.Ba,this);this.j={};this.m=!1}
v(Ij,L);m=Ij.prototype;m.start=function(){this.m||this.i||(this.m=!0,Hj(this.h,"RECEIVING"))};
m.Ba=function(a,b,c){if(this.m&&!this.i){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.j||(c=C(this.ib,this,a),this.j[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Jj(this,d.event);break;default:this.l.isReady()&&this.l.isExternalMethodAvailable(a,c||null)&&(b=Kj(a,b||{}),c=this.l.handleExternalCall(a,b,c||null),(c=Lj(a,c))&&this.m&&!this.i&&Hj(this.h,a,c))}}};
m.ib=function(a,b){this.m&&!this.i&&Hj(this.h,a,this.ma(a,b))};
m.ma=function(a,b){if(null!=b)return{value:b}};
function Jj(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
m.A=function(){var a=this.h;a.i||cf(a.h,"command",this.Ba,this);this.h=null;for(var b in this.j)Jj(this,b);L.prototype.A.call(this)};function Mj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Nj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Oj(a)}
function Oj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Pj(a,b,c,d){if(B(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Qj(a,b){Ij.call(this,b);this.l=a;this.start()}
v(Qj,Ij);Qj.prototype.addEventListener=function(a,b){this.l.addEventListener(a,b)};
Qj.prototype.removeEventListener=function(a,b){this.l.removeEventListener(a,b)};
function Kj(a,b){switch(a){case "loadVideoById":return b=Oj(b),[b];case "cueVideoById":return b=Oj(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Pj(b),[b];case "cuePlaylist":return b=Pj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Lj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Qj.prototype.ma=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ij.prototype.ma.call(this,a,b)};
Qj.prototype.A=function(){Ij.prototype.A.call(this);delete this.l};function Rj(a,b,c){L.call(this);var d=this;c=c||H("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.B="*";this.l=c;this.sessionId=null;this.channel="widget";this.G=!!a;this.u=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.G&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.B=e.origin);d.j=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.m&&(!d.o||0<=Ya(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.h=this.m=null;window.addEventListener("message",this.u)}
v(Rj,L);Rj.prototype.sendMessage=function(a,b){var c=b||this.j;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.B)}catch(e){Af(e)}}};
Rj.prototype.A=function(){window.removeEventListener("message",this.u);L.prototype.A.call(this)};function Sj(){var a=this.i=new Rj(!!H("WIDGET_ID_ENFORCE")),b=C(this.fb,this);a.m=b;a.o=null;this.i.channel="widget";if(a=H("WIDGET_ID"))this.i.sessionId=a;this.l=[];this.o=!1;this.m={}}
m=Sj.prototype;m.fb=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.m[a]||"onReady"==a||(this.addEventListener(a,Tj(this,a)),this.m[a]=!0)):this.sa(a,b,c)};
m.sa=function(){};
function Tj(a,b){return C(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.Ka=function(){this.o=!0;this.sendMessage("initialDelivery",this.na());this.sendMessage("onReady");G(this.l,this.Ca,this);this.l=[]};
m.na=function(){return null};
function Uj(a,b){a.sendMessage("infoDelivery",b)}
m.Ca=function(a){this.o?this.i.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.Ca({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.i=null};function Vj(a){Sj.call(this);this.h=a;this.j=[];this.addEventListener("onReady",C(this.bb,this));this.addEventListener("onVideoProgress",C(this.mb,this));this.addEventListener("onVolumeChange",C(this.nb,this));this.addEventListener("onApiChange",C(this.hb,this));this.addEventListener("onPlaybackQualityChange",C(this.jb,this));this.addEventListener("onPlaybackRateChange",C(this.kb,this));this.addEventListener("onStateChange",C(this.lb,this));this.addEventListener("onWebglSettingsChanged",C(this.ob,
this))}
v(Vj,Sj);m=Vj.prototype;m.sa=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Mj(a)){var d=b;if(B(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Oj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Nj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Pj.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Mj(a)&&Uj(this,this.na())}};
m.bb=function(){var a=C(this.Ka,this);this.i.h=a};
m.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
m.na=function(){if(!this.h)return null;var a=this.h.getApiInterface();cb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=E()/1E3;return b};
m.lb=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:E()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());Uj(this,a)};
m.jb=function(a){Uj(this,{playbackQuality:a})};
m.kb=function(a){Uj(this,{playbackRate:a})};
m.hb=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.nb=function(){Uj(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
m.mb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:E()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());Uj(this,a)};
m.ob=function(){var a={sphericalProperties:this.h.getSphericalProperties()};Uj(this,a)};
m.dispose=function(){Sj.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function Wj(a,b,c){L.call(this);this.h=a;this.l=c;this.o=Mf(window,"message",C(this.m,this));this.j=new Gj(this,a,b);Rc(this,Sa(Pc,this.j))}
v(Wj,L);Wj.prototype.m=function(a){var b;if(b=!this.i)if(b=a.origin==this.l)a:{b=this.h;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.j,c.i||c.o("command",b.command,b.data,a.origin))}};
Wj.prototype.A=function(){Nf(this.o);this.h=null;L.prototype.A.call(this)};function Xj(){var a=mb(Yj),b;return Se(new M(function(c,d){a.onSuccess=function(e){Yg(e)?c(e):d(new Zj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Zj("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Zj("Request timed out","net.timeout",e))};
b=gh("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Te&&b.abort();
return Qe(c)})}
function Zj(a,b,c){Va.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Zj,Va);function ak(){this.i=0;this.h=null}
ak.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Le(a)?a:bk(a)):2===this.i&&b?(a=b.call(c,this.h),Le(a)?a:ck(a)):this};
ak.prototype.getValue=function(){return this.h};
ak.prototype.$goog_Thenable=!0;function ck(a){var b=new ak;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function bk(a){var b=new ak;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function dk(a){Va.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ek;this.isTimeout=a instanceof Zj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Te}
v(dk,Va);dk.prototype.name="BiscottiError";function ek(){Va.call(this,"Biscotti ID is missing from server")}
v(ek,Va);ek.prototype.name="BiscottiMissingError";var Yj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},fk=null;
function Kg(){if(P("disable_biscotti_fetch_on_html5_clients"))return Qe(Error("Fetching biscotti ID is disabled."));if(P("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!md.get("CONSENT","").startsWith("YES+"))return Qe(Error("User has not consented - not fetching biscotti id."));if("1"==kb())return Qe(Error("Biscotti ID is not available in private embed mode"));fk||(fk=Se(Xj().then(gk),function(a){return hk(2,a)}));
return fk}
function gk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ek;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ek;a=a.id;Lg(a);fk=bk(a);ik(18E5,2);return a}
function hk(a,b){var c=new dk(b);Lg("");fk=ck(c);0<a&&ik(12E4,a-1);throw c;}
function ik(a,b){Q(function(){Se(Xj().then(gk,function(c){return hk(b,c)}),Ja)},a)}
function jk(){try{var a=y("yt.ads.biscotti.getId_");return a?a():Kg()}catch(b){return Qe(b)}}
;function kk(a){if("1"!=kb()){a&&Jg();try{jk().then(function(){},function(){}),Q(kk,18E5)}catch(b){zf(b)}}}
;var X=y("ytglobal.prefsUserPrefsPrefs_")||{};x("ytglobal.prefsUserPrefsPrefs_",X,void 0);function lk(){this.h=H("ALT_PREF_COOKIE_NAME","PREF");this.i=H("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=md.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(X[d]=c.toString())}}}
m=lk.prototype;m.get=function(a,b){mk(a);nk(a);var c=void 0!==X[a]?X[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){mk(a);nk(a);if(null==b)throw Error("ExpectedNotNull");X[a]=b.toString()};
m.remove=function(a){mk(a);nk(a);delete X[a]};
m.save=function(){var a=this.h,b=[],c;for(c in X)b.push(c+"="+encodeURIComponent(String(X[c])));ph(a,b.join("&"),63072E3,this.i)};
m.clear=function(){for(var a in X)delete X[a]};
function nk(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function mk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ok(a){a=void 0!==X[a]?X[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka(lk);var pk=E().toString();
function qk(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=E();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(pk)for(a=1,b=0;b<pk.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^pk.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var rk=w.ytLoggingDocDocumentNonce_||qk();x("ytLoggingDocDocumentNonce_",rk,void 0);var sk={Xd:0,Zb:1,jc:2,Zg:3,Yd:4,Zj:5,Nh:6,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS"};function tk(a){this.h=a}
function uk(a){return new tk({trackingParams:a})}
tk.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
tk.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
tk.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function vk(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function wk(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function xk(a){return H(wk(void 0===a?0:a),void 0)}
x("yt_logging_screen.getRootVeType",xk,void 0);function yk(a){return(a=xk(void 0===a?0:a))?new tk({veType:a,youtubeData:void 0}):null}
function zk(){var a=H("csn-to-ctt-auth-info");a||(a={},O("csn-to-ctt-auth-info",a));return a}
function Ak(a){a=void 0===a?0:a;var b=H(vk(a));if(!b&&!H("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
x("yt_logging_screen.getCurrentCsn",Ak,void 0);function Bk(a,b,c){var d=zk();(c=Ak(c))&&delete d[c];b&&(d[a]=b)}
function Ck(a){return zk()[a]}
x("yt_logging_screen.getCttAuthInfo",Ck,void 0);function Dk(a,b,c,d){c=void 0===c?0:c;if(a!==H(vk(c))||b!==H(wk(c)))if(Bk(a,d,c),O(vk(c),a),O(wk(c),b),0==c||P("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Ig("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:rk,clientScreenNonce:a},Pi)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
x("yt_logging_screen.setCurrentScreen",Dk,void 0);function Ek(a){wh.call(this,1,arguments);this.csn=a}
v(Ek,wh);var Fh=new xh("screen-created",Ek),Fk=[],Hk=Gk,Ik=0;function Jk(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:$a(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(ib(e)||!e.trackingParams&&!e.veType)&&fj(Error("Child VE logged with no data"));d={C:Ck(b),M:b};"UNDEFINED_CSN"==b?Kk("visualElementAttached",c,d):a?Ig("visualElementAttached",c,a,d):W("visualElementAttached",c,d)}
function Gk(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return zc(b)}
function Kk(a,b,c){Fk.push({payloadName:a,payload:b,options:c});Ik||(Ik=Gh())}
function Hh(a){if(Fk){for(var b=u(Fk),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ig(c.payloadName,c.payload,null,c.options));Fk.length=0}Ik=0}
;function Lk(){this.i=new Set;this.h=new Set;this.j=new Map}
Lk.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ka(Lk);function Mk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Nk(a)||c.some(function(e){return!Nk(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Ok(a,d.value);return a}
function Ok(a,b){for(var c in b)if(Nk(b[c])){if(c in a&&!Nk(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ok(a[c],b[c])}else if(Pk(b[c])){if(c in a&&!Pk(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Qk(a[c],b[c])}else a[c]=b[c];return a}
function Qk(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,Nk(d)?a.push(Ok({},d)):Pk(d)?a.push(Qk([],d)):a.push(d);return a}
function Nk(a){return"object"===typeof a&&!Array.isArray(a)}
function Pk(a){return"object"===typeof a&&Array.isArray(a)}
;var Rk={},Sk=0;
function Tk(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Kh("cobalt")){if(a){a instanceof I||(a="object"==typeof a&&a.V?a.U():String(a),Ib.test(a)?a=new I(a,Eb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Hb))&&Gb.test(b[1])?new I(a,Eb):null));a=Fb(a||Kb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ob)){b="object"==typeof a;var f=null;b&&a.oa&&(f=a.la());a=Qb(wb(b&&a.V?a.U():String(a)),f)}a instanceof Ob&&a.constructor===Ob?a=a.h:(La(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Fe(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Gc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)hh(a,b,"POST",e,d);else if(H("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)hh(a,b,"GET","",d);else{b:{try{var g=new Wa({url:a});if(g.j&&g.i||g.l){var h=Wb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ac);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var z=a.indexOf("&",q);if(0>z||z>l)z=l;q+=3;r=decodeURIComponent(a.substr(q,z-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(A){}f=!1}f?Uk(a)?(b&&b(),f=!0):f=!1:f=!1;f||Vk(a,b)}}
function Uk(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Vk(a,b){var c=new Image,d=""+Sk++;Rk[d]=c;c.onload=c.onerror=function(){b&&Rk[d]&&b();delete Rk[d]};
c.src=a}
;function Wk(a,b){wh.call(this,1,arguments)}
v(Wk,wh);function Xk(a,b){wh.call(this,1,arguments)}
v(Xk,wh);var Yk=new xh("aft-recorded",Wk),Zk=new xh("timing-sent",Xk);var $k=window;function al(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var bl=$k.performance||$k.mozPerformance||$k.msPerformance||$k.webkitPerformance||new al;var cl=!1;C(bl.clearResourceTimings||bl.webkitClearResourceTimings||bl.mozClearResourceTimings||bl.msClearResourceTimings||bl.oClearResourceTimings||Ja,bl);function dl(a){var b=el(a);if(b.aft)return b.aft;a=H((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function fl(a){var b;(b=y("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ta("ytcsi."+(a||"")+"data_",b));return b}
function gl(a){a=fl(a);a.info||(a.info={});return a.info}
function el(a){a=fl(a);a.tick||(a.tick={});return a.tick}
function hl(a){var b=fl(a).nonce;b||(b=qk(),fl(a).nonce=b);return b}
function il(a){var b=el(a||""),c=dl(a);c&&!cl&&(Ch(Yk,new Wk(Math.round(c-b._start),a)),cl=!0)}
;function jl(){var a=y("ytcsi.debug");a||(a=[],x("ytcsi.debug",a,void 0),x("ytcsi.reference",{},void 0));return a}
function kl(a){a=a||"";var b=y("ytcsi.reference");b||(jl(),b=y("ytcsi.reference"));if(b[a])return b[a];var c=jl(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var ll=w.ytLoggingLatencyUsageStats_||{};x("ytLoggingLatencyUsageStats_",ll,void 0);function ml(){this.h=0}
function nl(){ml.h||(ml.h=new ml);return ml.h}
ml.prototype.tick=function(a,b,c){ol(this,"tick_"+a+"_"+b)||W("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
ml.prototype.info=function(a,b){var c=Object.keys(a).join("");ol(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,W("latencyActionInfo",c))};
ml.prototype.span=function(a,b){var c=Object.keys(a).join("");ol(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,W("latencyActionSpan",a))};
function ol(a,b){ll[b]=ll[b]||{count:0};var c=ll[b];c.count++;c.time=R();a.h||(a.h=Tf(function(){var d=R(),e;for(e in ll)ll[e]&&6E4<d-ll[e].time&&delete ll[e];a&&(a.h=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||fj(c)),!0):!1}
;var Y={},pl=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid=
"requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",
Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid=
"requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),ql="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),rl={},sl=(rl.ccs="CANARY_STATE_",rl.mver="MEASUREMENT_VERSION_",
rl.pis="PLAYER_INITIALIZED_STATE_",rl.yt_pt="LATENCY_PLAYER_",rl.pa="LATENCY_ACTION_",rl.yt_vst="VIDEO_STREAM_TYPE_",rl),tl="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ul(a){return!!H("FORCE_CSI_ON_GEL",!1)||P("csi_on_gel")||!!fl(a).useGel}
function vl(a){a=fl(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
;function wl(a,b,c){if(null!==b)if(gl(c)[a]=b,ul(c)){var d=b;b=vl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in pl){b=pl[a];0<=Ya(ql,b)&&(d=!!d);a in sl&&"string"===typeof d&&(d=sl[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Mk({},e)}else 0<=Ya(tl,a)||fj(new S("Unknown label logged with GEL CSI",
a)),f=void 0;f&&ul(c)&&(b=kl(c||""),Mk(b.info,f),b=vl(c),b.gelInfos||(b.gelInfos={}),Mk(b.gelInfos,f),c=hl(c),nl().info(f,c))}else kl(c||"").info[a]=b}
function xl(a,b,c){var d=el(c);if(P("use_first_tick")&&yl(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;bl.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),bl.mark(e))}e=b||R();d[a]=e;e=vl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||R();if(ul(c)){kl(c||"").tick[a]=b||R();e=hl(c);if("_start"===a){var f=nl();ol(f,"baseline_"+e)||W("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else nl().tick(a,e,b);il(c);e=!0}else e=!1;if(!e){if(!y("yt.timing."+(c||"")+"pingSent_")&&
(f=H((c||"")+"TIMING_ACTION",void 0),e=el(c),y("ytglobal.timing"+(c||"")+"ready_")&&f&&yl("_start")&&dl(c)))if(il(c),c)zl(c);else{f=!0;var g=H("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&zl(c)}kl(c||"").tick[a]=b||R()}return d[a]}
function yl(a,b){var c=el(b);return a in c}
function zl(a){if(!ul(a)){var b=el(a),c=gl(a),d=b._start,e=H("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:H((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=dl(a);var h=el(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&gl(a).yt_pvis&&"youtube"===e&&(wl("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=R();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;P("debug_csi_data")&&(c=y("yt.timing.csiData"),c||(c=[],Ta("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&(b||P("always_send_csi_204_with_beacon"))){var r=void 0===r?"":r;Uk(f,r)||Tk(f,void 0,void 0,void 0,r)}else Tk(f);x("yt.timing."+(a||"")+"pingSent_",!0,void 0);Ch(Zk,new Xk(n.aft+(Number(g)||0),a))}}
var Al=window;Al.ytcsi&&(Al.ytcsi.info=wl,Al.ytcsi.tick=xl);function Bl(){this.l=[];this.m=[];this.h=[];this.i=new Set;this.o=new Map}
function Cl(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Ak(c),h=yk(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Jk(a.client,g,h,[uk(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Jk(a.client,g,h,[uk(d.playerResponse.trackingParams)]))})}
function Dl(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=Ak(d);c=c||yk(d);e&&c&&Jk(a.client,e,c,[b])}}
Bl.prototype.clickCommand=function(a){var b=Ak();if(!a.clickTrackingParams||!b)return!1;var c=this.client;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:b,ve:uk(a.clickTrackingParams).getAsJson(),gestureType:d};d={C:Ck(b),M:b};"UNDEFINED_CSN"==b?Kk("visualElementGestured",a,d):c?Ig("visualElementGestured",a,c,d):W("visualElementGestured",a,d);return!0};
function El(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Fl(a,b,c);var f=yk(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,Dl(a,h[0],h[1]||f,c.layer);f=u(a.m);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Ak(g);var l=k[0]||yk(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={C:Ck(h),M:h},"UNDEFINED_CSN"==h?Kk("visualElementStateChanged",k,l):g?Ig("visualElementStateChanged",k,g,l):W("visualElementStateChanged",
k,l))}}};
Ak(c.layer)||a.j();if(c.xa)for(var d=u(c.xa),e=d.next();!e.done;e=d.next())Cl(a,e.value,c.layer);else gj(Error("Delayed screen needs a data promise."))}
function Fl(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.cb?c.cb:c.layer;var e=Ak(d);d=yk(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.wa,l=c.C,n=Hk(),p={csn:n,pageVe:(new tk({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?p.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&fj(new S("newScreen() parent element does not have a VE - rootVe",
b));k&&(p.cloneCsn=k);k={C:l,M:n};g?Ig("screenCreated",p,g,k):W("screenCreated",p,k);Ch(Fh,new Ek(n));var q=n}catch(r){hj(r,{Dk:b,rootVe:d,parentVisualElement:void 0,xk:e,Ck:f,wa:c.wa});gj(r);return}Dk(q,b,c.layer,c.C);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=P("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(sk));for(f=b.next();!f.done;f=b.next())if(Ak(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={C:Ck(e),M:e,
Ja:f},"UNDEFINED_CSN"==e?Kk("visualElementHidden",d,f):b?Ig("visualElementHidden",d,b,f):W("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");wl("csn",q);Lk.getInstance().clear();d=yk(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&(e=q,q=P("use_default_events_client")?void 0:Pi,b={csn:e,ve:d.getAsJson(),eventType:1},f={C:Ck(e),M:e},"UNDEFINED_CSN"==e?Kk("visualElementShown",b,f):q?Ig("visualElementShown",
b,q,f):W("visualElementShown",b,f));a.i["delete"](c.layer||0);a.j=void 0;e=u(a.o);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value.has(c.layer)&&d&&Dl(a,b,d,c.layer)}
;function Gl(){L.call(this);this.h=[]}
v(Gl,L);Gl.prototype.A=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.Ha)}L.prototype.A.call(this)};function Hl(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||mb(b);this.assets=a.assets||{};this.attrs=a.attrs||mb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Hl.prototype.clone=function(){var a=new Hl,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=mb(c):a[b]=c}return a};var Il=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Jl(a){a=a||"";if(window.spf){var b=a.match(Il);spf.style.load(a,b?b[1]:"",void 0)}else Kl(a)}
function Kl(a){var b=Ll(a),c=document.getElementById(b),d=c&&kj(c,"loaded");d||c&&!d||(c=Ml(a,b,function(){kj(c,"loaded")||(ij(c),hg(b),Q(Sa(ig,b),0))}))}
function Ml(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ed(a);d.rel="stylesheet";d.href=ub(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Ll(a){var b=Hc(document,"A");Rb(b,new I(a,Eb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ub(a)}
;function Nl(a,b,c,d){L.call(this);var e=this;this.u=this.ca=a;this.J=b;this.B=!1;this.api={};this.aa=this.I=null;this.K=new N;Rc(this,Sa(Pc,this.K));this.m={};this.S=this.ba=this.l=this.ka=this.h=null;this.R=!1;this.o=this.G=null;this.da={};this.Ea=["onReady"];this.ja=null;this.ta=NaN;this.Y={};this.j=d;Ol(this);this.ea("WATCH_LATER_VIDEO_ADDED",this.Za.bind(this));this.ea("WATCH_LATER_VIDEO_REMOVED",this.ab.bind(this));this.ea("onAdAnnounce",this.Ga.bind(this));this.Fa=new Gl(this);Rc(this,Sa(Pc,
this.Fa));this.Z=0;c?this.Z=Q(function(){e.loadNewVideoConfig(c)},0):d&&(Pl(this),Ql(this))}
v(Nl,L);m=Nl.prototype;m.getId=function(){return this.J};
m.loadNewVideoConfig=function(a){if(!this.i){this.Z&&(Pf(this.Z),this.Z=0);a instanceof Hl||(a=new Hl(a));this.ka=a;this.h=a.clone();Pl(this);this.ba||(this.ba=Rl(this,this.h.args.jsapicallback||"onYouTubePlayerReady"));this.h.args.jsapicallback=null;if(a=this.h.attrs.width)this.u.style.width=gd(Number(a)||String(a));if(a=this.h.attrs.height)this.u.style.height=gd(Number(a)||String(a));Ql(this);this.B&&Sl(this)}};
function Pl(a){var b;a.j?b=a.j.rootElementId:b=a.h.attrs.id;a.l=b||a.l;"video-player"==a.l&&(a.l=a.J,a.j?a.j.rootElementId=a.J:a.h.attrs.id=a.J);a.u.id==a.l&&(a.l+="-player",a.j?a.j.rootElementId=a.l:a.h.attrs.id=a.l)}
m.La=function(){return this.ka};
function Sl(a){a.h&&!a.h.loaded&&(a.h.loaded=!0,"0"!=a.h.args.autoplay?a.api.loadVideoByPlayerVars(a.h.args):a.api.cueVideoByPlayerVars(a.h.args))}
function Tl(a){var b=!0,c=Ul(a);c&&a.h&&(a=Vl(a),b=kj(c,"version")===a);return b&&!!y("yt.player.Application.create")}
function Ql(a){if(!a.i&&!a.R){var b=Tl(a);if(b&&"html5"==(Ul(a)?"html5":null))a.S="html5",a.B||Wl(a);else if(Xl(a),a.S="html5",b&&a.o)a.ca.appendChild(a.o),Wl(a);else{a.h&&(a.h.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Yl(a,"player_bootstrap_method")?y("yt.player.Application.createAlternate")||y("yt.player.Application.create"):y("yt.player.Application.create");var e=a.h?a.h.clone():void 0;d(a.ca,e,a.j);Wl(a)};
a.R=!0;b?a.G():(oj(Vl(a),a.G),(b=a.j?a.j.cssUrl:a.h.assets.css)&&Jl(b),Zl(a)&&!c&&x("yt.player.Application.create",null,void 0))}}}
function Ul(a){var b=Dc(a.l);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.l));return b}
function Wl(a){if(!a.i){var b=Ul(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.R=!1,!Yl(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.h&&b.isNotServable(a.h.args.video_id)||$l(a)):a.ta=Q(function(){Wl(a)},50)}}
function $l(a){Ol(a);a.B=!0;var b=Ul(a);b.addEventListener&&(a.I=am(a,b,"addEventListener"));b.removeEventListener&&(a.aa=am(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=am(a,b,e))}for(var f in a.m)a.I(f,a.m[f]);Sl(a);a.ba&&a.ba(a.api);a.K.O("onReady",a.api)}
function am(a,b,c){var d=b[c];return function(){try{return a.ja=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ja=e,Af(e))}}}
function Ol(a){a.B=!1;if(a.aa)for(var b in a.m)a.aa(b,a.m[b]);for(var c in a.Y)Pf(parseInt(c,10));a.Y={};a.I=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ea.bind(a);a.api.removeEventListener=a.gb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ma.bind(a);a.api.getPlayerType=a.Na.bind(a);a.api.getCurrentVideoConfig=a.La.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Da.bind(a)}
m.Da=function(){return this.B};
m.ea=function(a,b){var c=this,d=Rl(this,b);if(d){if(!(0<=Ya(this.Ea,a)||this.m[a])){var e=bm(this,a);this.I&&this.I(a,e)}this.K.subscribe(a,d);"onReady"==a&&this.B&&Q(function(){d(c.api)},0)}};
m.gb=function(a,b){if(!this.i){var c=Rl(this,b);c&&cf(this.K,a,c)}};
function Rl(a,b){var c=b;if("string"==typeof b){if(a.da[b])return a.da[b];c=function(){var d=y(b);d&&d.apply(w,arguments)};
a.da[b]=c}return c?c:null}
function bm(a,b){var c="ytPlayer"+b+a.J;a.m[b]=c;w[c]=function(d){var e=Q(function(){if(!a.i){a.K.O(b,d);var f=a.Y,g=String(e);g in f&&delete f[g]}},0);
jb(a.Y,String(e))};
return c}
m.Ga=function(a){hg("a11y-announce",a)};
m.Za=function(a){hg("WATCH_LATER_VIDEO_ADDED",a)};
m.ab=function(a){hg("WATCH_LATER_VIDEO_REMOVED",a)};
m.Na=function(){return this.S||(Ul(this)?"html5":null)};
m.Ma=function(){return this.ja};
function Xl(a){a.cancel();Ol(a);a.S=null;a.h&&(a.h.loaded=!1);var b=Ul(a);b&&(Tl(a)||!Zl(a)?a.o=b:(b&&b.destroy&&b.destroy(),a.o=null));for(a=a.ca;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.G&&uj(Vl(this),this.G);Pf(this.ta);this.R=!1};
m.A=function(){Xl(this);if(this.o&&this.h&&this.o.destroy)try{this.o.destroy()}catch(b){zf(b)}this.da=null;for(var a in this.m)w[this.m[a]]=null;this.ka=this.h=this.api=null;delete this.ca;delete this.u;L.prototype.A.call(this)};
function Zl(a){return a.h&&a.h.args&&a.h.args.fflags?-1!=a.h.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Vl(a){return a.j?a.j.jsUrl:a.h.assets.js}
function Yl(a,b){if(a.j)var c=a.j.serializedExperimentFlags;else a.h&&a.h.args&&(c=a.h.args.fflags);return"true"==Og(c||"","&")[b]}
;var cm={},dm="player_uid_"+(1E9*Math.random()>>>0);function em(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Dc(d):d;var e=dm+"_"+Na(d),f=cm[e];if(f&&c)return fm(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Nl(d,e,a,b);cm[e]=f;hg("player-added",f.api);Rc(f,function(){delete cm[f.getId()]});
return f.api}
function fm(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Z=null,gm=null,hm=null;function im(){var a=Z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function jm(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=H("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=H("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Xb(window.location.href);g&&f.push(g);g=Xb(d);if(0<=Ya(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Vb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Ak()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Ub(d).toString(36),e=e?Zb(e):"",ph(b,e,k||5))}else k=b,e="ST-"+Ub(d).toString(36),k=k?Zb(k):"",ph(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=$b(a,l)+n;a=a instanceof I?a:Jb(a);c.href=Fb(a)}return!0}
;x("yt.setConfig",O,void 0);x("yt.config.set",O,void 0);x("yt.setMsg",Cf,void 0);x("yt.msgs.set",Cf,void 0);x("yt.logging.errors.log",gj,void 0);
x("writeEmbed",function(){var a=H("PLAYER_CONFIG",void 0);if(!a){var b=H("PLAYER_VARS",void 0);b&&(a={args:b})}kk(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=H("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);if((c=H("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
if(!c.serializedForcedExperimentIds){var d=window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=Sg(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Z=em(a,c,!1)}else Z=em(a);Z.addEventListener("onVideoDataChange",im);a=H("POST_MESSAGE_ID","player");H("ENABLE_JS_API")?hm=new Vj(Z):H("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(gm=new Wj(window.parent,a,b),hm=new Qj(Z,gm.j));xj()},void 0);
var km=yf(function(){xl("ol");var a=lk.getInstance(),b=!!((ok("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Sd(document.body,"exp-invert-logo"))if(c&&!Sd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Sd(d,"inverted-hdpi")){var e=Qd(d);Rd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Sd(document.body,"inverted-hdpi")&&Td();b!=c&&(b="f"+(Math.floor(119/31)+1),d=ok(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete X[b]:(c=d.toString(16),X[b]=c.toString()),a.save());Bl.h||(Bl.h=new Bl);a=Bl.h;c=16623;var f=void 0===f?{}:f;Object.values(Ej).includes(c)||(fj(new S("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.h.push({rootVe:c,key:f.key||""});a.l=[];a.m=[];f.xa?El(a,c,f):Fl(a,c,f)}),lm=yf(function(){Z&&Z.sendAbandonmentPing&&Z.sendAbandonmentPing();
H("PL_ATT")&&Bj.dispose();for(var a=0,b=vj.length;a<b;a++)Vf(vj[a]);vj.length=0;tj("//static.doubleclick.net/instream/ad_status.js");wj=!1;O("DCLKSTAT",0);Qc(hm,gm);Z&&(Z.removeEventListener("onVideoDataChange",im),Z.destroy())});
window.addEventListener?(window.addEventListener("load",km),window.addEventListener("unload",lm)):window.attachEvent&&(window.attachEvent("onload",km),window.attachEvent("onunload",lm));Ta("yt.abuse.player.botguardInitialized",y("yt.abuse.player.botguardInitialized")||Cj);Ta("yt.abuse.player.invokeBotguard",y("yt.abuse.player.invokeBotguard")||Dj);Ta("yt.abuse.dclkstatus.checkDclkStatus",y("yt.abuse.dclkstatus.checkDclkStatus")||yj);
Ta("yt.player.exports.navigate",y("yt.player.exports.navigate")||jm);Ta("yt.util.activity.init",y("yt.util.activity.init")||Xf);Ta("yt.util.activity.getTimeSinceActive",y("yt.util.activity.getTimeSinceActive")||$f);Ta("yt.util.activity.setTimestamp",y("yt.util.activity.setTimestamp")||Yf);}).call(this);
