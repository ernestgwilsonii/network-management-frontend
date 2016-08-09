var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function makeWebpackConfig(options) {
  /**
   * Environment type
   * BUILD is for generating minified builds
   */
  var BUILD = !!options.BUILD;

  var config = {};

  if (BUILD) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval';
  }

  // cache the build
  config.cache = true;

  config.entry = {
    app: './src/app.js'
  };


  config.output = {
    // absolute output directory
    path: path.join(__dirname, '/dist'),

    // output path from the view of the page
    // uses webpack-dev-server in development
    publicPath: BUILD ? '/' : 'http://localhost:8080/',

    // filename for entry points
    // only adds hash in build mode
    filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',

    // filename for entry points
    // only adds hash in build mode
    chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
  };

  config.plugins = [];

  // Skip rendering index.html in test mode
  // Reference: https://github.com/ampedandwired/html-webpack-plugin
  // Render index.html
  config.plugins.push(
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        minify: BUILD ? { removeAttributeQuotes: true } : false
      })
    )

  /**
   * Transform JS source code using Babel configured to Stage 0, transform CSS
   * source code using PostCSS and require binary files with file-loader.
   */
  config.module = {
    preLoaders: [],
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loaders: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'file'
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.(ttf|eot|svg)(\?.*)?$/,
      loader: "file"
    }]
  };

  config.devServer = {
    contentBase: './dist',
    stats: {
      colors: true,
    }
  };

  return config;
};
