const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/public"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js/
      },
      {
        test: /\.s?css/,
        loaders: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "sass-loader"
          ]
        })
      },
      {
         test: /\.html$/,
         loader: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg)/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              gifsicle: {
                interlanced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css'
    })
  ]
}
