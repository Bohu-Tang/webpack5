const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    // 入口文件
    entry: {
        index: {
            import: './src/index.js',
        },
    },
    // 开启sourcemap，方便定位报错
    devtool: 'inline-source-map',
    // 开发服务器配置
    devServer: {
        static: './dist', // 开发服务器代理的目录
    },
    // 插件
    plugins:[
        // 自动生成html文件
        new HtmlWebpackPlugin({
            title: '开发环境'
        })
    ],
    // 出口文件
    output: {
        clean: true, // 每次打包前清理dist目录
        filename: '[name].bundle.js', // 打包文件名-自动拼接文件名
        path: path.resolve(__dirname, 'dist')// 出口文件夹
    },
}