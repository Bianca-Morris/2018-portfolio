const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: [
      './frontend/index'
    ],
    module: {
      rules: [
        { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'] },
      ],
    },
    resolve: {
      extensions: ['.js', '.scss']
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    output: {
      path: path.join(__dirname, '/public'),
      publicPath: '/',
      filename: 'bundle.js',
      hotUpdateChunkFilename: 'hot/hot-update.js',
      hotUpdateMainFilename: 'hot/hot-update.json',
    },
    devServer: {
      contentBase: './public',
      hot: true
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: true
        })
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: isProduction ? JSON.stringify('production') : JSON.stringify('development')
        }
      })
    ]
  };
};
