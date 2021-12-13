module.exports = {
  output: {
    filename: 'scripts/[name].js',
  },

  mode: 'development',

  //在开发模式下追踪代码
  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
  },
}
