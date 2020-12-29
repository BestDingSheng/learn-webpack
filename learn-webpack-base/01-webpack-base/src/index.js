/**
 * 开发环境  
 *   webpack ./src/index -o ./build/built.js --mode=development
 * 生产环境 
 *    webpack ./src/index -o ./build/built.js --mode=production
 * 
 *  2 结论 
 *  1 webpack 能处理js json 资源， 不能处理css、img等其他资源
 *  2 生产环境法和开发环境区别，多一个压缩js代码
 *  3 webpack能将es6打包成浏览器识别的模块化
 *  
 */


function add (x,y) {
    return x + y;
}
console.log(add(1,2));