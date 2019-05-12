const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/scripts/main.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dev',
        watchContentBase: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'assets/scripts/bundle.js'
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: [{
                loader: 'html-loader',
                options: {
                    outputPath: './'
                }
            }]
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images'
                }
            }]
        }]
    }
};