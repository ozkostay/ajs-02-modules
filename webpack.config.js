const path = require('path'); //подключаем path за Глобал
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtrackPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/i,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCSSExtrackPlugin.loader,        
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCSSExtrackPlugin()
    ]
};