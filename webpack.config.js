const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eto|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
}