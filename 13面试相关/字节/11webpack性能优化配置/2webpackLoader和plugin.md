## 常用的loader和plugin
- loader: css-loader,sass-loader,less-loader,style-loader
- url-loader,babel-loader,vue-loader,eslint-loader,image-loader

- plugin: happypack，html-webpack-plugin,definplugin, extract-text-webpack-plugin, optimize-css-assets-webpack-plugin, uglifyjs-webpack-plugin,
mini-css-extract-plugin(替代extract-text-webpack-plugin)

## loader和plugin的区别

- loader: Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

-plugin:Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。