
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
  An example of using 'One-file'.
  (Was: 'melody-es6.js')

  © Nick Freear, 19-sep-2017.
*/

/*
 * http://melody.sensiolabs.org/
 * http://jaspervalero.com/an-intro-to-the-delightful-javascript-es6-string-templates/
 * https://stackoverflow.com/questions/4376431/javascript-heredoc
 * http://forums.devx.com/showthread.php?154826-Javascript-Multiline-Strings-(HEREDOC-equivalent)-solution
 * http://a32.me/2014/03/heredoc-multiline-variable-with-javascript/
 * http://onlineslangdictionary.com/meaning-definition-of/nellie
 * http://www.urbandictionary.com/define.php?term=Nellie
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
