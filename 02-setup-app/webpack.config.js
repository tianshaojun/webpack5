const path = require('path')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',

        //必须是绝对路径
        path: path.resolve(__dirname, './dist')
    },

    mode: 'none'
}