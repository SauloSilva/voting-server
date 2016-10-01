module.exports = {
  entry: [
    './src/client.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public/javascripts',
    publicPath: '/javascripts',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public/javascripts'
  }
}
