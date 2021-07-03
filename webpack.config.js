const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  context: path.resolve(__dirname, 'front'),
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'front/public'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './front/public'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
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
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
    ]
  }
} 