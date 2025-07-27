const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 8080,
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remoteProps: "remoteProps@http://localhost:8081/remoteEntry.js",
        remoteEvents: "remoteEvents@http://localhost:8082/remoteEntry.js",
        remoteMobx: "remoteMobx@http://localhost:8083/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0", eager: false },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0",
          eager: false,
        },
        mobx: { singleton: true, requiredVersion: "^6.13.7", eager: false },
        "mobx-react": {
          singleton: true,
          requiredVersion: "^9.2.0",
          eager: false,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
