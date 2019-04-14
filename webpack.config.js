const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname,

  mode: 'development',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/'
  },

  devtool: 'cheap-eval-source-map',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
