// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).hasUTF16SurrogatePairAt=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var i=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,s=n.__lookupSetter__;var f=function(r,e,t){var i,f,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(i=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),l="get"in t,p="set"in t,f&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=i,p=f,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var h=function(r){return"string"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return m&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,y=w;var E=function(r){return y.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",T=P,O=_,x=w;var V=E,S=function(r){var e,t,i;if(null==r)return x.call(r);t=r[O],e=T(r,O);try{r[O]=void 0}catch(e){return x.call(r)}return i=x.call(r),e?r[O]=t:delete r[O],i},k=b()?S:V,A=String.prototype.valueOf;var I=k,M=function(r){try{return A.call(r),!0}catch(r){return!1}},R=b();var F=function(r){return"object"==typeof r&&(r instanceof String||(R?M(r):"[object String]"===I(r)))},$=h,C=F;var N=d,B=function(r){return $(r)||C(r)},G=F;N(B,"isPrimitive",h),N(B,"isObject",G);var L=B;var Z=function(r){return"number"==typeof r},W=Number,X=W.prototype.toString;var U=k,z=W,Y=function(r){try{return X.call(r),!0}catch(r){return!1}},D=b();var q=function(r){return"object"==typeof r&&(r instanceof z||(D?Y(r):"[object Number]"===U(r)))},H=Z,J=q;var K=d,Q=function(r){return H(r)||J(r)},rr=q;K(Q,"isPrimitive",Z),K(Q,"isObject",rr);var er=Q,tr=Number.POSITIVE_INFINITY,ir=W.NEGATIVE_INFINITY,nr=Math.floor;var ar=function(r){return nr(r)===r},or=tr,ur=ir,cr=ar;var sr=function(r){return r<or&&r>ur&&cr(r)},fr=er.isPrimitive,lr=sr;var pr=function(r){return fr(r)&&lr(r)},vr=er.isObject,gr=sr;var dr=function(r){return vr(r)&&gr(r.valueOf())},hr=pr,mr=dr;var br=d,wr=function(r){return hr(r)||mr(r)},yr=dr;br(wr,"isPrimitive",pr),br(wr,"isObject",yr);var Er=wr,jr=Er.isPrimitive;var Pr=function(r){return jr(r)&&r>=0},_r=Er.isObject;var Tr=function(r){return _r(r)&&r.valueOf()>=0},Or=Pr,xr=Tr;var Vr=d,Sr=function(r){return Or(r)||xr(r)},kr=Tr;Vr(Sr,"isPrimitive",Pr),Vr(Sr,"isObject",kr);var Ar=Sr,Ir=ar;var Mr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ir(r.length)&&r.length>=0&&r.length<=9007199254740991};var Rr=function(r){return r!=r},Fr=er.isPrimitive,$r=Rr;var Cr=function(r){return Fr(r)&&$r(r)},Nr=er.isObject,Br=Rr;var Gr=function(r){return Nr(r)&&Br(r.valueOf())},Lr=Cr,Zr=Gr;var Wr=d,Xr=function(r){return Lr(r)||Zr(r)},Ur=Gr;Wr(Xr,"isPrimitive",Cr),Wr(Xr,"isObject",Ur);var zr=Mr,Yr=Er.isPrimitive,Dr=L.isPrimitive,qr=Xr.isPrimitive;var Hr=function(r,e,t){var i,n,a;if(!zr(r)&&!Dr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Yr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(n=t)<0&&(n=0)}else n=0;if(Dr(r)){if(!Dr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,n)}if(i=r.length,qr(e)){for(a=n;a<i;a++)if(qr(r[a]))return!0;return!1}for(a=n;a<i;a++)if(r[a]===e)return!0;return!1},Jr=Hr,Kr=L.isPrimitive;var Qr=function(r){if(!Kr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},re=L.isPrimitive;var ee=function(r){if(!re(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},te=Qr,ie=ee,ne=L.isPrimitive;var ae=function(r){return ne(r)&&r===ie(r)&&r!==te(r)},oe=tr,ue=ir;var ce=function(r){return r==r&&r>ue&&r<oe},se=Ar.isPrimitive,fe=L.isPrimitive;var le=function(r,e){var t,i;if(!fe(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!se(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",i=e;1==(1&i)&&(t+=r),0!==(i>>>=1);)r+=r;return t},pe=Er.isPrimitive,ve=L.isPrimitive;var ge=function(r,e,t){var i,n;if(!ve(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ve(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!pe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");i=t<0?r.length+t:t}else i=0;if(0===e.length)return!0;if(i<0||i+e.length>r.length)return!1;for(n=0;n<e.length;n++)if(r.charCodeAt(i+n)!==e.charCodeAt(n))return!1;return!0},de=le,he=ge;var me=function(r,e,t){var i=!1,n=e-r.length;return n<0||(he(r,"-")&&(i=!0,r=r.substr(1)),r=t?r+de("0",n):de("0",n)+r,i&&(r="-"+r)),r},be=ae,we=ee,ye=Qr,Ee=ce,je=er.isPrimitive,Pe=me;var _e=function(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!Ee(i)){if(!je(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Pe(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Pe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=be(r.specifier)?we(t):ye(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Te=L.isPrimitive,Oe=/[-\/\\^$*+?.()|[\]{}]/g;var xe=function(r){var e,t;if(!Te(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Oe,"\\$&"):(e=(e=r.substring(1,t)).replace(Oe,"\\$&"),r=r[0]+e+r.substring(t))},Ve=/./;var Se=function(r){return"boolean"==typeof r},ke=Boolean.prototype.toString;var Ae=k,Ie=function(r){try{return ke.call(r),!0}catch(r){return!1}},Me=b();var Re=function(r){return"object"==typeof r&&(r instanceof Boolean||(Me?Ie(r):"[object Boolean]"===Ae(r)))},Fe=Se,$e=Re;var Ce=d,Ne=function(r){return Fe(r)||$e(r)},Be=Re;Ce(Ne,"isPrimitive",Se),Ce(Ne,"isObject",Be);var Ge=Ne;var Le=function(){return new Function("return this;")()},Ze="object"==typeof self?self:null,We="object"==typeof window?window:null,Xe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ue="object"==typeof Xe?Xe:null;module.exports=Ue;var ze=Ge.isPrimitive,Ye=Le,De=Ze,qe=We,He=r(Object.freeze({__proto__:null}));var Je=function(r){if(arguments.length){if(!ze(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ye()}if(De)return De;if(qe)return qe;if(He)return He;throw new Error("unexpected error. Unable to resolve global object.")},Ke=Je(),Qe=Ke.document&&Ke.document.childNodes,rt=Int8Array,et=Ve,tt=Qe,it=rt;var nt=function(){return"function"==typeof et||"object"==typeof it||"function"==typeof tt};var at=function(){return/^\s*function\s*([^(]*)/i},ot=at;d(ot,"REGEXP",at());var ut=ot,ct=k;var st=Array.isArray?Array.isArray:function(r){return"[object Array]"===ct(r)};var ft=function(r){return null!==r&&"object"==typeof r};d(ft,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,i;if(!st(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(ft));var lt=ft;var pt=k,vt=ut.REGEXP,gt=function(r){return lt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var dt=function(r){var e,t,i;if(("Object"===(t=pt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=vt.exec(i.toString()))return e[1]}return gt(r)?"Buffer":t},ht=dt;var mt=dt;var bt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?ht(r).toLowerCase():e},wt=function(r){return mt(r).toLowerCase()},yt=nt()?wt:bt;var Et=function(r){return"function"===yt(r)},jt=RegExp.prototype.exec;var Pt=k,_t=function(r){try{return jt.call(r),!0}catch(r){return!1}},Tt=b();var Ot=xe,xt=Et,Vt=L.isPrimitive,St=function(r){return"object"==typeof r&&(r instanceof RegExp||(Tt?_t(r):"[object RegExp]"===Pt(r)))};var kt=ae,At=ee,It=Qr,Mt=function(r,e,t){if(!Vt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Vt(e))e=Ot(e),e=new RegExp(e,"g");else if(!St(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Vt(t)&&!xt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Rt=ce,Ft=er.isPrimitive,$t=function(r){return Math.abs(r)},Ct=/e\+(\d)$/,Nt=/e-(\d)$/,Bt=/^(\d+)$/,Gt=/^(\d+)e/,Lt=/\.0$/,Zt=/\.0*e/,Wt=/(\..*[^0])0*e/;var Xt=function(r){var e,t,i=parseFloat(r.arg);if(!Rt(i)){if(!Ft(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":$t(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Mt(t,Wt,"$1e"),t=Mt(t,Zt,"e"),t=Mt(t,Lt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Mt(t,Ct,"e+0$1"),t=Mt(t,Nt,"e-0$1"),r.alternate&&(t=Mt(t,Bt,"$1."),t=Mt(t,Gt,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=kt(r.specifier)?At(t):It(t)},Ut=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var zt=le;var Yt=L.isPrimitive,Dt=Jr,qt=Rr,Ht=_e,Jt=Xt,Kt=function(r){var e,t,i,n,a;for(e=0,i=[],a=Ut.exec(r);a;)(t=r.slice(e,Ut.lastIndex-a[0].length)).length&&i.push(t),(n=o(a,i.length))&&i.push(n),e=Ut.lastIndex,a=Ut.exec(r);return(t=r.slice(e)).length&&i.push(t),i;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Qt=function(r,e,t){var i=e-r.length;return i<0?r:r=t?r+zt(" ",i):zt(" ",i)+r},ri=me,ei=String.fromCharCode;var ti=function(r){var e,t,i,n,a,o,u,c,s;if(!Yt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Kt(r),o="",u=1,c=0;c<e.length;c++)if(i=e[c],Yt(i))o+=i;else{for(i.mapping&&(u=i.mapping),t=i.flags,s=0;s<t.length;s++)switch(n=t.charAt(s)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=!Dt(t,"-");break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,qt(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if("*"===i.precision&&i.hasPeriod){if(i.precision=parseInt(arguments[u],10),u+=1,qt(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,i.hasPeriod=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":i.hasPeriod&&(i.padZeros=!1),i.arg=Ht(i);break;case"s":i.maxWidth=i.hasPeriod?i.precision:-1;break;case"c":if(!qt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=qt(a)?String(i.arg):ei(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":i.hasPeriod||(i.precision=6),i.arg=Jt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ri(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Qt(i.arg,i.width,i.padRight)),o+=i.arg||"",u+=1}return o},ii=L.isPrimitive,ni=Ar.isPrimitive,ai=ti;return function(r,e){var t,i;if(!ii(r))throw new TypeError(ai("invalid argument. Must provide a string. Value: `%s`.",r));if(!ni(e))throw new TypeError(ai("invalid argument. Must provide a valid position (nonnegative integer). Value: `%s`.",e));if(e>=r.length)throw new RangeError(ai("invalid argument. Must provide a valid position (within string bounds). Value: `%u`.",e));return t=r.charCodeAt(e),i=r.charCodeAt(e+1),t>=55296&&t<=56319&&i>=56320&&i<=57343}}));
//# sourceMappingURL=bundle.js.map
