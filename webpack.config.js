const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/';
const srcPath = path.join(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'static');


const config = {
  entry: [ 'babel-polyfill',
    path.join(srcPath, 'index.js'),
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
      /*{
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },*/
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
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        query: {
          name: '[name].[hash].[ext]',
          outputPath: 'images/',
          publicPath: publicPath,
        },
      },
      {
        test:  /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[hash].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],

  devServer: {
    port: 3000,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
  },

};

module.exports = config;
