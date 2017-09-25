/*!
  © Nick Freear, 23-Sep-2017.

  https://npmjs.com/package/shelljs
*/

const DIR = '~/.melodylike/'; // Was: '~/.nellie/'
const sh = require('shelljs');
// const fs = require('fs');

var pkgfile;
var pkgdir;

module.exports = {

  init: function (jsfile) {
    pkgfile = jsfile;
    pkgdir = DIR + pkgfile.replace(/^\//, '');
  },

  createPkgDir: function () {
    var res = sh.mkdir('-p', pkgdir);

    console.log('mkdir:', pkgdir, res.code);
    return res;
  },

  writePkg: function (pkgdata) {
    const filename = pkgdir + '/package.json';
    console.log('write:', filename);

    // return fs.writeFileSync(filename, JSON.stringify(pkgdata));
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
    console.log('cmd:', cmd);

    return sh.exec(cmd);
  }
};
