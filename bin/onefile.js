#!/usr/bin/env node

/*!
  onefile commandline script (CLI).

  Usage:

      $ onefile run path/to/script.js

  © Nick Freear, 20-Sep-2017 | License: MIT.
*/

const extractor = require('./../src/extract-config');
const defaults = require('./../src/package-defaults.json');
const shell = require('./../src/shell-commands');
const extend = require('xtend');
const EXAMPLE_JS = 'examples/shelljs-ex.js';
const ARGV = process.argv;

var filename;
if (ARGV.length === 4) {
  filename = ARGV[ 3 ];
} else if (ARGV.length === 3 && ARGV[ 2 ] === 'example') {
  filename = EXAMPLE_JS;
} else {
  shell.log('Usage:\n\n  onefile run path/to/script.js');
  process.exit(1);
}

const CFG = extractor(filename);
const pkgdata = extend(defaults, CFG.config, { 'x-time': new Date().toISOString() });

shell.log(pkgdata);

shell.init(filename);
shell.createPkgDir();
shell.writePkg(pkgdata);
shell.npmInstall();
shell.nodeRun();

// End.
