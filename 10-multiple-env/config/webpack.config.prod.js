const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  output: {
    filename: 'scripts/[name].[contenthash].js',
    //设置公共路径
    publicPath: 'http://localhost:8080/',
  },

  mode: 'production',

  //优化配置
  optimization: {
    //压缩css
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
  },

  //解决打包warning警告
  performance: {
    hints: false,
  },
}
