#!/usr/bin/env node

/*!
  CLI. Onefile commandline tool.

  Usage:

      $ onefile run path/to/script.js

  © Nick Freear, 20-Sep-2017.
*/

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
