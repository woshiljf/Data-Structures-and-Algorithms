/**
 * Loader基础
   由于Webpack是运行在Node.js之上的，一个Loader其实就是一个Node.js模块，这个模块需要导出一个函数。 
   这个导出的函数的工作就是获得处理前的原内容，对原内容执行处理后，返回处理后的内容。

 * 
 * 
 * 
 */

/**
 * 
 * @param {*} source 
 * @returns 
 * module.exports = {
  module: {
    rules: [
      {
        // 增加对 SCSS 文件的支持
        test: /\.scss/,
        // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
        use: [
          'style-loader',
          {
            loader:'css-loader',
            // 给 css-loader 传入配置项
            options:{
              minimize:true, 
            }
          },
          'sass-loader'],
      },
    ]
  },
};
 * 
 * 
 * 
 */





// 最简单的loader的源码模式
module.exports = function(source) {
    // source 为 compiler 传递给 Loader 的一个文件的原内容
    // 该函数需要返回处理后的内容，这里简单起见，直接把原内容返回了，相当于该`Loader`没有做任何转换
    return source;
};

const sass = require('node-sass');
module.exports = function(source) {
    return sass(source);
};

/**
 * 在最上面处理SCSS文件的Webpack配置中，给css-loader传了options参数，
 * 以控制css-loader。要在自己编写的Loader中获取到用户传入的options，需要这样做：
 */

const loaderUtils = require('loader-utils');
module.exports = function(source) {
    // 获取到用户给当前 Loader 传入的 options
    const options = loaderUtils.getOptions(this);
    return source;
};