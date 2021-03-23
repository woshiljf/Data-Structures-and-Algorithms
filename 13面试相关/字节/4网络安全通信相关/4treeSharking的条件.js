/**
 * 新的webpack4正式版扩展了这个检测能力。通过package.json的sideEffects属性标记.
 * 向complier提供提示，表面项目中的哪些文件是pure(纯es2015模块)由此，
 * 可以安全的删除文件中未使用的部分。如果使用的webpack4只需要将webpack4设置为production，
 * 即可开启tree-shaking.如果使用的是webpack2可能你会发现tree-shaking并不起作用，
 * 因为bable会将代码编译成Commonjs模块。而tree-shaking不支持commonjs,所以需要配置不转意：

 * 
 * 
 * 
 * 
 * 
 */