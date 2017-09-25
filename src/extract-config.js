/*!

  © Nick Freear, 21-Sep-2017.
*/

const PKG_NAME = '_PKG_';
const espree = require('espree');
const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function (filename) {
  const jsCode = fs.readFileSync(filename);
  const ast = espree.parse(jsCode, {

    // attach range information to each node
    range: false,

    // attach line/column location information to each node
    loc: false,

    // create a top-level comments array containing all comments
    comment: true,

    // Default: 5.
    ecmaVersion: 6
  });

  // console.log(ast);

  for (var idx = 0; idx < ast.body.length; idx++) {
    var node = ast.body[ idx ];

    if (node.kind === 'const' && node.declarations[ 0 ].id.name === PKG_NAME) {
      var decl = node.declarations[ 0 ];

      // if (decl.type === 'TemplateLiteral')

      const configraw = decl.init.quasis[ 0 ].value.raw;
      const config = yaml.safeLoad(configraw);

      // console.log(idx, decl.init, config);

      return {
        ast: ast,
        config_raw: configraw,
        config: config
      };
    }
  }

  return {
    ast: ast,
    config_raw: null,
    config: null
  };
};

// End.
