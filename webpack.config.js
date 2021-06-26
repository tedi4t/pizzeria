const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './front/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './front/public'),
  }
}