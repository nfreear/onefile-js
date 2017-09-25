
[![Build status — Travis-CI][travis-icon]][travis]
[![js-semistandard-style][semi-icon]][semi]
[![onefile on Npmjs][npm-icon]][npm]
[![License][license-icon]][mit]

# nfreear / onefile-js

One-file npm-package Javascripts.

Inspired by [php-melody][] ~ 'One-file composer scripts'."

The dependencies that you'd normally define in a separate `package.json` file,
are placed at the top of the Javascript in a multi-line [`ES6 template string`][es6],
in [YAML format][yaml]:

```js
const _PKG_ = `
dependencies:
  package-A: ^1.2
  package-B: ^2.3
`;

// Rest of the Javascript ...
// ...
```

Here is a trivial 'hello world' example, with a single dependency, [shelljs][]:

```js
// eslint-disable-next-line
const _PKG_ = `
dependencies:
  shelljs: ^0.7.8
`;

const shell = require('shelljs');

shell.echo('Hello world!');
```

The above file can be executed like so
(internally, `npm install` & `node script.js` are run):

```
onefile run examples/shelljs-ex.js
```

Note, it is a valid Javascript file:

```
node -c examples/shelljs-ex.js
```

## Install ... test

```sh
npm install -g
npm test
```

## License

License: [MIT][].

Twitter: [@nfreear][].


[php-melody]: http://melody.sensiolabs.org/ "Melody by SensioLabs - 'One-file composer scripts'"
[es6]: http://exploringjs.com/es6/ch_template-literals.html#sec_introduction-template-literals
    "ES6 Template literal"
[es6-2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals "ES6 Template literal"
[yaml]: https://en.wikipedia.org/wiki/YAML#Basic_components "YAML associative array (dictionary)"
[yaml-2]: http://yaml.org/spec/1.2/spec.html#id2759963
    "YAML Ain’t Markup Language Version 1.2, 2009. '2.1. Collections'"
[shelljs]: https://npmjs.com/package/shelljs

[@nfreear]: https://twitter.com/nfreear "@nfreear on Twitter"
[gh]: https://github.com/nfreear/onefile-js
[MIT]: https://nfreear.mit-license.org/2017#!-onefile-js "MIT License | © Nick Freear, 2017-09-20."
[travis]: https://travis-ci.org/nfreear/onefile-js
[travis-icon]: https://api.travis-ci.org/nfreear/onefile-js.svg
    "Build status – Travis-CI (NPM/eslint)"
[semi]: https://github.com/Flet/semistandard
[semi-icon]: https://img.shields.io/badge/code_style-semistandard-brightgreen.svg?style=flat-square
    "Javascript coding style — 'semistandard'"
[npm]: https://npmjs.com/package/onefile
[npm-icon]: https://img.shields.io/npm/v/onefile.svg
[license-icon]: https://img.shields.io/npm/l/onefile.svg

[es6-3]: http://jaspervalero.com/an-intro-to-the-delightful-javascript-es6-string-templates/
[hered-1]: https://stackoverflow.com/questions/4376431/javascript-heredoc
[hered-2]:  http://forums.devx.com/showthread.php?154826-Javascript-Multiline-Strings-(HEREDOC-equivalent)-solution
[hered-3]:  http://a32.me/2014/03/heredoc-multiline-variable-with-javascript/

[End]: //.
