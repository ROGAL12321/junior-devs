//Konfiguracja Webpack
const path = require('path');

module.exports = {
  entry: "./src/app/App.jsx",
  output: {
    path: path.resolve("src"),
    filename: "dist.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3000
  },
  watch: true,
  module: {
  loaders: [
      {
      test: /\.jsx$/, exclude: /node_modules/,
      loader: 'babel-loader'
      }
    ]
  }
}

