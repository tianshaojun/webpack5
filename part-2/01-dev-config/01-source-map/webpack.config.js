const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode: 'development',
  mode: 'production',

  entry: './app.js',

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  // devtool: false,
  // devtool: 'eval',
  // devtool: 'source-map',
  // devtool: 'hidden-source-map',
  // devtool: 'inline-source-map',
  // devtool: 'eval-source-map',
  // devtool: 'cheap-source-map',
  // devtool: 'cheap-module-source-map', //开发环境推荐使用

  plugins: [new HtmlWebpackPlugin()],
}
