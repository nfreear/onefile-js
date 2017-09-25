#!/usr/bin/env node

/*!
  CLI.

  Usage:

      $ onefile run my/script.js

  © Nick Freear, 20-Sep-2017.

  4 [ '/Users/Nick/.nvm/versions/node/v8.1.3/bin/node',
  '/Users/Nick/workspace/nellie-melody/bin/nellie.js',
  'run',
  'examples/shelljs-es6.js' ]
*/

// console.log(process.argv.length, process.argv);

const examplejs = 'examples/shelljs-ex.js';
const extractor = require('./../src/extract-config');
const defaults = require('./../src/package-defaults.json');
const shell = require('./../src/shell-commands');
const extend = require('xtend');

var filename;
if (process.argv.length === 4) {
  filename = process.argv[ 3 ];
} else if (process.argv.length === 3 && process.argv[ 2 ] === 'example') {
  filename = examplejs;
} else {
  console.warn('Usage:\n\n  onefile run path/to/script.js');
  process.exit(1);
}

const cfg = extractor(filename);
const pkgdata = extend(defaults, cfg.config, { 'x-time': new Date().toISOString() });

console.log(pkgdata);

shell.init(filename);
shell.createPkgDir();
shell.writePkg(pkgdata);
shell.npmInstall();
shell.nodeRun();

// End.
