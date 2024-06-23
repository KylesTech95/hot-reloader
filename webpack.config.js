const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  resolve: {
    // resolve alias modules/files
    alias: {
      fs: false,
      child_process: false,
    },
  },
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [{ test: /\.js/i, exclude: /node_modules/i }], // js files 
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
    // set false to hot & client for no reload
    hot: true, // true/false
    client: {
        logging:"info",
    }, // either false or an object { logging?, overlay?, progress?, reconnect?, webSocketTransport?, webSocketURL? }
    port: 8081,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "template/template.html",
    }),
  ],
};
