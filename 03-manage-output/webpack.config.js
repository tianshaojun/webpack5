const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',

        //必须是绝对路径
        path: path.resolve(__dirname, './dist'),

        //打包前清理dist文件夹
        clean: true
    },

    mode: 'none',

    plugins: [
        //实例化html-webpack-plugin插件
        new HtmlWebpackPlugin({
            template: './index.html', //打包生成的文件模板
            filename: 'app.html', //打包生成的文件名称
            inject: 'body' //资源文件注入模板的位置
        })
    ]
}