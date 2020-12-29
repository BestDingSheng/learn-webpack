/**
 *  构建工具都是基于nodejs平台运行的，模块化默认采用commonjs
 */
const { resolve } = require('path');
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
        // 创建style标签  将js中的样式插入资源表进行，添加到head中
        // 解析 从下往上 从 右往左
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [],
  mode: 'development',
};
