const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtarctPlugin = require("mini-css-extract-plugin");
const apiMocker = require("connect-api-mocker");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV || "development"; // 기본값을 development로 설정

module.exports = {
  mode, // key와 value가 같으면 key만 입력
  entry: {
    main: "./src/app.js",
    //form: "./src/form.js"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  devServer: {
    overlay: true,
    stats: "errors-only",
    before: (app) => {
      app.use(apiMocker("/api", "mocks/api"));
    },
    hot: true,
  },
  optimization: {
    minimizer:
      mode === "production"
        ? [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true, // console.log()를 제거한다.
                },
              },
            }),
          ]
        : [],
    // splitChunks: {  // 코드를 분리할때 중복을 예방하는 플러그인이다.
    //   chunks: 'all'
    // }
  },
  externals: {
    axios: "axios",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtarctPlugin.loader // production 환경
            : "style-loader", // development 환경
          "css-loader",
          "sass-loader", // SASS 코드를 사용할수 있겠끔 sass-loader를 구성
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          //publicPath: './dist/', // prefix를 아웃풋 경로로 지정
          name: "[name].[ext]?[hash]", // 파일명 형식
          limit: 10000, // 10kb 미만은 자바스크립트 문자열로 변환하고 그 이상은 파일을 복사한다.
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // node_modules 폴더 예외처리
        loader: "babel-loader", // 바벨로더를 추가한다.
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        Build Date : ${new Date().toLocaleDateString()}
        Commit Version : ${childProcess.execSync("git rev-parse --short HEAD")}
        Author : ${childProcess.execSync("git config user.name")}
      `,
    }),
    new webpack.DefinePlugin({
      TWO: "1+1",
      VERSION: JSON.stringify("v.1.23"),
      "api.domain": JSON.stringify("http://dev.api.domain.com"),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtarctPlugin({ filename: "[name].css" })]
      : []),
    new CopyPlugin({
      patterns: [
        {
          from: "./node_modules/axios/dist/axios.min.js",
          to: "./axios.min.js", // 목적지 파일에 들어간다
        },
      ],
    }),
  ],
};
