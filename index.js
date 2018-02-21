/*!

  © Nick Freear, 19-Feb-2018 | License: MIT.
*/

module.exports = {
  getFilename: getFilename,
  getPackage: getPackage,
  getVersion: getVersion,
  baseDirectory: baseDirectory,
  pkgDirectory: pkgDirectory,
  init: init
};

/* module.exports.getFilename = getFilename;
module.exports.getPackage = getPackage;
module.exports.getVersion = getVersion;
module.exports.getDirectory = getDirectory; */

const extractor = require('./src/extract-config');
const defaults = require('./src/package-defaults.json');
const shell = require('./src/shell-commands');
const PKG = require('./package.json');
const extend = require('xtend');
const EXAMPLE_JS = 'examples/shelljs-ex.js';
// const EXAMPLE_JS = require('path').join(__dirname, '/examples/shelljs-ex.js');
const ARGV = process.argv;

var filename = null;

function getFilename (jsfile) {
  if (filename) { return filename; }

  if (jsfile) {
    filename = jsfile.replace(process.cwd(), '').replace(/^\//, '');
    return filename;
  }

  if (ARGV.length === 4) {
    filename = ARGV[ 3 ];
  } else if (ARGV.length === 3 && ARGV[ 2 ] === 'example') {
    filename = EXAMPLE_JS;
  /* } else if (ARGV.length === 2) {
    filename = ARGV[ 1 ]; */
  } else {
    // shell.log('Usage:\n\n  otu run path/to/script.js');
    // process.exit(1);
  }
  return filename;
}

function getPackage (filename) {
  // const file = useExample ? EXAMPLE_JS : filename;
  const CFG = extractor(filename);
  const pkgdata = extend(defaults, CFG.config, { 'x-time': new Date().toISOString(), 'x-filename': filename });
  return pkgdata;
}

function getVersion () {
  return PKG[ 'x-version' ] || PKG.version;
}

function baseDirectory () {
  return shell.baseDirectory();
}

function pkgDirectory () {
  return shell.pkgDirectory();
}

function init (jsfile) {
  return shell.init(jsfile);
}

// End.
