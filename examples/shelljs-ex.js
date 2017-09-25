
// ("'_PKG_' is assigned a value but never used.")
// eslint-disable-next-line
const _PKG_ = `
dependencies:
  shelljs: ^0.7.8
  # package-A: ^1.2
  # package-B: ^2.3
node-opts:
  - "opt-1"
  - "opt-2"
`;

/*!
  An example of using 'onefile'.

  (Was: 'melody-es6.js')

  © Nick Freear, 19-sep-2017.
*/

const shell = require('shelljs');

var hereDoc = `
This
is
a
Multiple
Line
String
`.trim();

// hereDoc === 'This\nis\na\nMultiply\nLine\nString';

// console.log( hereDoc );
shell.echo(hereDoc);
shell.echo('Hello world!');

// End.
