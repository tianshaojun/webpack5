const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',

    //必须是绝对路径
    path: path.resolve(__dirname, './dist'),

    //打包前清理dist文件夹
    clean: true,
    // assetModuleFilename: 'images/test.png'
    assetModuleFilename: 'images/[contenthash][ext]',
  },

  mode: 'development',
  // mode: 'production',

  //在开发模式下追踪代码
  devtool: 'inline-source-map',

  plugins: [
    //实例化html-webpack-plugin插件
    new HtmlWebpackPlugin({
      template: './index.html', //打包生成的文件模板
      filename: 'app.html', //打包生成的文件名称
      inject: 'body', //资源文件注入模板的位置
    }),

    //抽离css插件
    new MiniCssExtractPlugin({
      filename: './styles/[contenthash].css',
    }),
  ],

  devServer: {
    static: './dist',
  },

  //配置资源文件
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        //优先级高于assetModuleFilename
        generator: {
          filename: 'images/[contenthash][ext]',
        },
      },

      {
        test: /\.svg$/,
        type: 'asset/inline',
      },

      {
        test: /\.txt$/,
        type: 'asset/source',
      },

      {
        test: /\.jpg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // maxSize: 4 * 1024,
            maxSize: 4 * 1024 * 1024,
          },
        },
      },

      {
        test: /\.(css|less)$/,
        // use: ['style-loader', 'css-loader', 'less-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      },

      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },

      {
        test: /\.xml$/,
        use: ['xml-loader']
      },

      {
        test: /\.toml$/,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      },
    ],
  },

  //优化配置
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin(),
    ]
  }
}
