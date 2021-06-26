const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = 'development';

const cssLoaders = (extra = []) => ([
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: mode,
      reloadAll: true,
    },
  },
  'css-loader',
  ...extra,
])

module.exports = {
  mode,
  context: path.resolve(__dirname, 'front'),
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  module:{
    rules:[
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options:{
          presets:["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.less$/,
        use: cssLoaders(['less-loader']),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders(['sass-loader']),
      },
    ]
}
} 