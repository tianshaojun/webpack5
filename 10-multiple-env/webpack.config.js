const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env) => {
  return {
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },

    output: {
      filename: 'scripts/[name].[contenthash].js',

      //必须是绝对路径
      path: path.resolve(__dirname, './dist'),

      //打包前清理dist文件夹
      clean: true,
      // assetModuleFilename: 'images/test.png'
      assetModuleFilename: 'images/[contenthash][ext]',

      //设置公共路径
      publicPath: 'http://localhost:8080/',
    },

    mode: env.production ? 'production' : 'development',

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
        filename: 'styles/[contenthash].css',
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
          type: 'asset/resource',
        },

        {
          test: /\.(csv|tsv)$/,
          use: ['csv-loader'],
        },

        {
          test: /\.xml$/,
          use: ['xml-loader'],
        },

        {
          test: /\.toml$/,
          type: 'json',
          parser: {
            parse: toml.parse,
          },
        },
        {
          test: /\.yaml$/,
          type: 'json',
          parser: {
            parse: yaml.parse,
          },
        },
        {
          test: /\.json5$/,
          type: 'json',
          parser: {
            parse: json5.parse,
          },
        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [['@babel/plugin-transform-runtime']],
            },
          },
        },
      ],
    },

    //优化配置
    optimization: {
      //压缩css
      minimizer: [
        new CssMinimizerWebpackPlugin(),
        new TerserPlugin()
      ],

      //代码抽离
      // splitChunks: {
      //   chunks: 'all',
      // },

      //缓存第三方库
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  }
}
