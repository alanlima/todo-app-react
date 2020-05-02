//import path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url-loader?limit=100000" },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new Dotenv({
            safe: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    resolve: {
        modules: [
            path.resolve('./app'),
            path.resolve('./node_modules')
        ]
    }
};

config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('dev')
            }
        })
    );

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
    );
}

module.exports = config;