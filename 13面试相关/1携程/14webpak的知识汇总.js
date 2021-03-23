/**
 * /**
 * 1 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
   2 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
   3 确定入口：根据配置中的 entry 找出所有的入口文件；
   4 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，
     再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
   5 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
   6 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，
      再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
   7 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
 * 
 * 
 * 
 */

/**
 * loader:相关
 * 文件loader: url-loader, vue-loader,
 * 图片loader: image-loader
 * css相关loader: css-loader, less-loader, sass-loader,less-loader
 * js: eslint-loader, babel-loader
 *
 * 插件相关:
 * HtmlWebapckPlugin: 功能，压缩html，配置html模板，压缩Html，移除注释
 * MinCssExtractPlugin: 提取css
 * 压缩css: OptimizeCssAssetsWebpackPlugin
 *
 *
 *
 *
 *
 *
 */

/**
 * webpack内部使用了express 和websocket
 *
 * 1 使用express 启动本地服务，当浏览器访问资源是做出响应
 * 2 服务器端和客户端使用websocket实现长连接
 * 3 webpack监听源文件的变化，当开发者保存文件时触发webpack重新编译
 *    每次编译都会生成hash值，已改动的json文件，js模块代码文件等等
 *    编译完成，通过socket向客户端推送当前编译的时间戳
 * 4 客户端的websocket 监听到有文件改动推送多来的hash戳，会和上一次进行对比，相同走缓存，不相同通过ajax和jsonp向服务器获取最新的资源
 *
 * 5 使用内存文件系统替换有修改的内容，实现局部刷新。
 *
 * 可以去这个链接查看具体内容：https://segmentfault.com/a/1190000020310371
 *
 *
 *
 *
 */