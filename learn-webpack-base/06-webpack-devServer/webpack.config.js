/**
 *  构建工具都是基于nodejs平台运行的，模块化默认采用commonjs
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    // 输出文件名
    filename: 'built.js',
    // 当前文件的目录就绝对路径
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
    }),
  ],
  mode: 'development',
  // 开发服务器 devServer 用来自动化 编译 打开浏览器 刷新浏览器
  // 在内存中打包 不会有任何输出
  //  webpack-dev-server
  devServer: {
    //
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    port: 3000,
    // 自动打开
    open: true,
  },
};
// html-webpack-pluing
// 自动引入打包输出的所有资源 js css
