const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/scripts/main.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test',
            template: 'src/index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
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
                    outputPath: 'assets/images'
                }
            }]
        }]
    }
};