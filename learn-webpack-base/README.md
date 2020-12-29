# webpack


## 五个核心概念

- Entry 入口
- Output 输出
- Loader 处理非js文件
- Plugins 插件
- Mode 启动模式

### Entry

打包文件的路口

### Output

文件输出的位置

### Loader
loader是什么？ webpack默认只支持自动打包js json这两种资源，其他资源如果需要打包需要使用对应的loader！
注意：loader的执行循序是从右往边执行的

- 样式相关
  - style-loader css-loader less-loader
- 图片相关  
  - url-loader file-loader html-loader
- 其他类型 字体等
  - file-loader   


### Plugin 
插件
- html相关
  - html-webpack-plugin  

### Mode

打包模式，分开发模式和生产模式 development production


### webpack-dev-server

devServer:{
  contentBase: resolve(__dirname,'build'),
  compress: true,
}


### webpack.config.js  

基础配置

```js
module.exports = {
  entry:'./index.js',
  output:{
    filename:'index.js',
    path:'./build',
  },
  module: {
    rules: [
      test:/\.css/,
      use:['style-loader','css-loader']
    ]
  }

  plugins:[
    new HtmlWebpackPluing({
      template:'index.html'
    })
  ],
  mode:'development',
  devServer: {
    contentBase: 'build',
    compress: true,
  }
  
}

```
