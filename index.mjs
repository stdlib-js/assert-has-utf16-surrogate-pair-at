// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function r(r,s){var n,o;if(!e(r))throw new TypeError(t("01t3N",r));if(!i(s))throw new TypeError(t("invalid argument. Must provide a valid position (i.e., a nonnegative integer). Value: `%s`.",s));if(s>=r.length)throw new RangeError(t("invalid argument. Must provide a valid position (i.e., within string bounds). Value: `%u`.",s));return n=r.charCodeAt(s),o=r.charCodeAt(s+1),n>=55296&&n<=56319&&o>=56320&&o<=57343}export{r as default};
//# sourceMappingURL=index.mjs.map
