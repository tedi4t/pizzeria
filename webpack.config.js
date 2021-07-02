const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'web',
  context: path.resolve(__dirname, 'front'),
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'front/public'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'front/public'),
    // compress: true,
    port: 9000,
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /^\/f\/\S*$/, to: '/published.html' },
        { from: /^\/pf\/\S*$/, to: '/published.html' },
      ]
    },
    hotOnly: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  module:{
    rules:[
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options:{
          presets:["@babel/preset-env", "@babel/preset-react"],
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack'],
      // },
    ]
  }
} 