#!/usr/bin/env node

/*!
  otu (one-file) commandline script (CLI).

  Usage:

      $ otu run path/to/script.js

  © Nick Freear, 20-Sep-2017 | License: MIT.
*/

const OTU = require('../index');
const shell = require('../src/shell-commands');
const filename = OTU.getFilename();
const ARGV = process.argv;

if (ARGV.length === 3 && ARGV[ 2 ] === '--version') {
  shell.log(OTU.getVersion());
  process.exit(1);
}

if (!filename) {
  shell.log('Usage:\n\n  otu run path/to/script.js');
  process.exit(1);
}

const pkgdata = OTU.getPackage(filename);

shell.log(pkgdata);

shell.init(filename);
shell.createPkgDir();
shell.writePkg(pkgdata);
shell.npmInstall();
shell.nodeRun();

// End.
