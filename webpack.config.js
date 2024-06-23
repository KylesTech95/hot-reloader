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
    hot: false, // true/false
    client: false, // either false or an object { logging?, overlay?, progress?, reconnect?, webSocketTransport?, webSocketURL? }
    // client: {
    //   overlay: {
    //     // object or true [cli] npx webpack serve --client-overlay-errors --no-client-overlay-warnings --client-overlay-runtime-errors
    //     errors: true,
    //     warnings: false,
    //     runtimeErrors: true,
    //   },
    //   logging: "info", // 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
    //   progress: true,
    //   reconnect: 5, // set # of times for client to reconnect to server || true for unlimited
    // },
    compress: true, // enable gzip for served files
    port: 8081,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "template/template.html",
    }),
  ],
};
