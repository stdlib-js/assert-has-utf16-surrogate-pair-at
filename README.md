<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# hasUTF16SurrogatePairAt

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a position in a string marks the start of a [UTF-16][utf-16] surrogate pair.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-has-utf16-surrogate-pair-at
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var hasUTF16SurrogatePairAt = require( '@stdlib/assert-has-utf16-surrogate-pair-at' );
```

#### hasUTF16SurrogatePairAt( string, position )

Tests if a `position` (in [UTF-16][utf-16] code units) in a `string` marks the start of a [UTF-16][utf-16] surrogate pair.

```javascript
var bool = hasUTF16SurrogatePairAt( '🌷', 0 );
// returns true

bool = hasUTF16SurrogatePairAt( '🌷', 1 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Note that `position` does **not** refer to a visual character position, but to an index in the ordered sequence of [UTF-16][utf-16] code units.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasUTF16SurrogatePairAt = require( '@stdlib/assert-has-utf16-surrogate-pair-at' );

var bool = hasUTF16SurrogatePairAt( '🌷', 0 );
// returns true

bool = hasUTF16SurrogatePairAt( '🌷', 1 );
// returns false

```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/assert-has-utf16-surrogate-pair-at-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: has-utf16-surrogate-pair-at [options] [<string>] --pos=<index>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --pos index           Position in string.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-utf16-surrogate-pair-at --pos=0 🌷
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '🌷' | has-utf16-surrogate-pair-at --pos=1
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-has-utf16-surrogate-pair-at.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-has-utf16-surrogate-pair-at

[test-image]: https://github.com/stdlib-js/assert-has-utf16-surrogate-pair-at/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-has-utf16-surrogate-pair-at/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-has-utf16-surrogate-pair-at/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-has-utf16-surrogate-pair-at?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-has-utf16-surrogate-pair-at.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-has-utf16-surrogate-pair-at/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-has-utf16-surrogate-pair-at#cli
[cli-url]: https://github.com/stdlib-js/assert-has-utf16-surrogate-pair-at/tree/cli
[@stdlib/assert-has-utf16-surrogate-pair-at]: https://github.com/stdlib-js/assert-has-utf16-surrogate-pair-at/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-has-utf16-surrogate-pair-at/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-has-utf16-surrogate-pair-at/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-has-utf16-surrogate-pair-at/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-has-utf16-surrogate-pair-at/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-has-utf16-surrogate-pair-at/main/LICENSE

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
