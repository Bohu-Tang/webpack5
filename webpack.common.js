const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =(env)=>{
    console.log(env);
    return  {
        // 入口文件
        entry: {
            index: {
                import: './src/index.js',
            },
        },
        // 插件
        plugins:[
            // 自动生成html文件
            new HtmlWebpackPlugin({
                title: '缓存'
            })
        ],
        // 出口文件
        output: {
            clean: true, // 每次打包前清理dist目录
            filename: '[name].[contenthash].js', // 打包文件名-自动拼接文件名
            path: path.resolve(__dirname, 'dist')// 出口文件夹
        },
        optimization:{
            runtimeChunk: 'single',
            // moduleIds: 'deterministic', // 将node_module中的文件打包后的名称锁定
            splitChunks:{
                cacheGroups:{
                    vendor:{
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        }
    }
}