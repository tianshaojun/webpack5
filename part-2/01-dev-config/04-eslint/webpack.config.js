const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './src/app.js',

  devServer: {
    client: {
      overlay: true, //浏览器覆盖层
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
}
