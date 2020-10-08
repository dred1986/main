const path = require("path");
const package = require("./package.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const isDev = process.env.NODE_ENV === "development";

const Plugins = () => [
  new Dotenv(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "static", "index.html"),
    minify: {
      minifyJS: true,
      minifyCSS: true,
      removeComments: true,
      useShortDoctype: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
    },
    favicon: path.join(__dirname, "static", "favicon.ico"),
    append: {
      head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`,
    },
    meta: {
      title: package.name,
      description: package.description,
      keywords: Array.isArray(package.keywords)
        ? package.keywords.join(",")
        : undefined,
    },
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: isDev ? "[name].css" : "[name].[hash].css",
  }),
  new ProgressBarPlugin(),
];

const Minify = () => {
  const config = {
    usedExports: !isDev,
    splitChunks: {
      chunks: "async",
      cacheGroups: {
        common: {
          name: "common-components",
          test: /[\\/]components[\\/]/,
          enforce: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  };

  if (!isDev) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

module.exports = {
  optimization: Minify(),
  mode: process.env.NODE_ENV,
  devServer: {
    port: process.env.PORT,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: "minimal",
    clientLogLevel: "warning",
  },
  devtool: isDev ? "cheap-module-eval-source-map" : "hidden-source-map",
  node: {
    fs: "empty",
    net: "empty",
  },
  entry: {
    app: path.join(__dirname, "src/app", "index.tsx"),
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".svg", ".graphql"],
  },
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: isDev
          ? ["react-hot-loader/webpack", "awesome-typescript-loader"]
          : "awesome-typescript-loader",
      },
      // pcss
      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            query: {
              sourceMap: isDev,
              importLoaders: 1,
              modules: {
                localIdentName: !isDev ? "[hash:base64:5]" : "[local]__[name]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: isDev,
              config: {
                path: require.resolve("./postcss.config.js"),
              },
            },
          },
        ],
      },
      // static assets
      { test: /\.html$/, use: "html-loader" },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      // graphql
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
    ],
  },
  plugins: Plugins(),
};
