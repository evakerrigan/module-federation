const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteProps",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteProps": "./src/RemoteProps",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0", eager: false },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0",
          eager: false,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
