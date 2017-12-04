const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/';
const srcPath = path.join(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'static');


const config = {
    entry: ['babel-polyfill',
        path.join(srcPath, 'index.jsx'),
    ],

    output: {
        path: outputPath,
        publicPath: publicPath,
        filename: 'bundle-[hash].js',
    },

    resolve: {
        modules: [
            srcPath,
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react',
                            'es2015',
                            'stage-0',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.pcss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // loader: 'file-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg|css)$/i,
                loader: 'url-loader',
                query: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'images/',
                    publicPath: publicPath,
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'fonts/',
                },
            },
        ],
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences     : true,
                booleans      : true,
                loops         : true,
                unused      : true,
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        }),
    ],
};

module.exports = config;
