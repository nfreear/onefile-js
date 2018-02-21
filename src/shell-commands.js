/*!
  © Nick Freear, 23-Sep-2017 | License: MIT.

  https://npmjs.com/package/shelljs
*/

const PKG = require('./../package.json');
const DIR = PKG[ 'x-otu-directory' ]; // Was: '~/.onefile-js/';
const sh = require('shelljs');
const log = console.warn;

var pkgfile;
var pkgdir;

module.exports = {

  log: log,

  baseDirectory: function () {
    return DIR;
  },

  pkgDirectory: function () {
    return pkgdir;
  },

  init: function (jsfile) {
    pkgfile = jsfile;
    pkgdir = DIR + pkgfile.replace(/^\//, ''); // path.join(DIR, pkgfile);

    return pkgdir;
  },

  createPkgDir: function () {
    var res = sh.mkdir('-p', pkgdir);

    log('> mkdir:', pkgdir, res.code);
    return res;
  },

  writePkg: function (pkgdata) {
    const filename = pkgdir + '/package.json';
    log('> write:', filename);

    // Was: return fs.writeFileSync(filename, JSON.stringify(pkgdata));
    return sh.echo(JSON.stringify(pkgdata)).to(filename);
  },

  npmInstall: function () {
    var initdir = sh.pwd(); // process.cwd();

    /* var res = */ sh.cd(pkgdir);
    var out = sh.exec('npm install');

    sh.cd(initdir);

    return out;
  },

  nodeRun: function () {
    const cmd = 'NODE_PATH=' + pkgdir + '/node_modules; node ' + pkgfile;
    log('> cmd:', cmd);

    return sh.exec(cmd);
  }
};
