/**
 *  构建工具都是基于nodejs平台运行的，模块化默认采用commonjs
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    // 输出文件名
    filename: 'built.js',
    // 当前文件的目录就绝对路径
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif)/,
        // url-loader  依赖 file-loader 所以要下载两个loader
        loader: 'url-loader',
        options: {
          // 小于8k的图片会被打包成base64格式
          limit: 8 * 1024,
          // 问题 因为url-loader默认使用es6模块化解析，而html-loader
          // 引用图片是commonjs 解析时会出现问题 【object-module】
          // 解决：关闭url-loader的es6模块，使用commonjs 解析
          esModule: false,
          // 给图片重新命名
          // ext 取文件的后缀名
          name: '[hash:10].[ext]',
        },
      },
      {
        test: /\.html$/,
        // 负责处理html文件中的img图片
        // 负责引入img 从而能被url-loader 进行处理
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
// html-webpack-pluing
// 自动引入打包输出的所有资源 js css
