
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
my-test:
  urls:
    - https://example.org
`;

/*!
  An example of using 'onefile'.

  (Was: 'melody-es6.js')

  © Nick Freear, 19-sep-2017.
*/

const OTU = require('../index');
const shell = require('shelljs');

// const scriptName = __filename.replace(process.cwd(), ''); // require('path').basename(__filename);

var hereDoc = `
This
is
a
Multiple
Line
String
`.trim();

// hereDoc === 'This\nis\na\nMultiply\nLine\nString';

console.log(process.argv);
console.log(OTU.getFilename(__filename));

shell.echo(hereDoc);
shell.echo('Hello world!');

OTU.init(OTU.getFilename());

shell.echo(OTU.getVersion());
shell.echo(OTU.pkgDirectory());
shell.echo(OTU.getPackage(__filename)[ 'my-test' ].urls);

// End.
