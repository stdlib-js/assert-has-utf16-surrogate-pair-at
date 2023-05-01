// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var l,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,e)||a.call(t,e)?(l=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=l):t[e]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,c.get),y&&i&&i.call(t,e,c.set),t};function l(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",v=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[d],i=d,e=null!=(o=t)&&s.call(o,i);try{t[d]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[d]=r:delete t[d],n}:function(t){return b.call(t)},g=String.prototype.valueOf,_=y();function m(t){return"object"==typeof t&&(t instanceof String||(_?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===v(t)))}function h(t){return f(t)||m(t)}function j(t){return"number"==typeof t}l(h,"isPrimitive",f),l(h,"isObject",m);var S=Number,w=S.prototype.toString,O=y();function T(t){return"object"==typeof t&&(t instanceof S||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function P(t){return j(t)||T(t)}l(P,"isPrimitive",j),l(P,"isObject",T);var I=Number.POSITIVE_INFINITY,E=S.NEGATIVE_INFINITY,N=Math.floor;function A(t){return t<I&&t>E&&N(e=t)===e;var e}function V(t){return j(t)&&A(t)}function C(t){return T(t)&&A(t.valueOf())}function F(t){return V(t)||C(t)}function x(t){return V(t)&&t>=0}function G(t){return C(t)&&t.valueOf()>=0}function M(t){return x(t)||G(t)}function k(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return l(F,"isPrimitive",V),l(F,"isObject",C),l(M,"isPrimitive",x),l(M,"isObject",G),function(t,e){var r,n;if(!f(t))throw new TypeError(k("01t3N",t));if(!x(e))throw new TypeError(k("invalid argument. Must provide a valid position (i.e., a nonnegative integer). Value: `%s`.",e));if(e>=t.length)throw new RangeError(k("invalid argument. Must provide a valid position (i.e., within string bounds). Value: `%u`.",e));return r=t.charCodeAt(e),n=t.charCodeAt(e+1),r>=55296&&r<=56319&&n>=56320&&n<=57343}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).hasUTF16SurrogatePairAt=e();
//# sourceMappingURL=index.js.map
