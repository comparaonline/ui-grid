const jsonImporter = require('node-sass-json-importer');

module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            importer: jsonImporter
          }
        }]
    }]
  }
};
