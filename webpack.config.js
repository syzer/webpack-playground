const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // resolveLoader: {
  //   modules: [
  //     'node_modules',
  //     path.resolve(__dirname, 'loader')
  //   ]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('loader/index.js'),
            options: { text: 'options' }
          }
        ]
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ],
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}

