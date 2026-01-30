// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,i){var n,o;if(!r(s))throw new TypeError(e("03n3B",s));if(!t(i))throw new TypeError(e("03n3C",i));if(i>=s.length)throw new RangeError(e("03n3D",i));return n=s.charCodeAt(i),o=s.charCodeAt(i+1),n>=55296&&n<=56319&&o>=56320&&o<=57343}export{s as default};
//# sourceMappingURL=index.mjs.map
