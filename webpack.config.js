var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    javascript: './src/index.js',
    css: './src/index.css',
    html: './src/index.html'
  },
  output: { 
    path: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { 
        test: /\.css$/, 
        loader: "file?name=[name].[ext]" 
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};