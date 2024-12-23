"use strict";var u=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=u(function(c,n){
var o=require('@stdlib/assert-is-string/dist').isPrimitive,g=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,t=require('@stdlib/error-tools-fmtprodmsg/dist'),s=55296,F=56319,d=56320,h=57343;function x(i,r){var e,a;if(!o(i))throw new TypeError(t('03n3B',i));if(!g(r))throw new TypeError(t('03n3C',r));if(r>=i.length)throw new RangeError(t('03n3D',r));return e=i.charCodeAt(r),a=i.charCodeAt(r+1),e>=s&&e<=F&&a>=d&&a<=h}n.exports=x
});var l=v();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
