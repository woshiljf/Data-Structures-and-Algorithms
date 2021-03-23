/**
 * 
 * css加载不会阻塞DOM树的解析

   css加载会阻塞DOM树的渲染

   css加载会阻塞后面js语句的执行
 * 
 * 
 * 
 * 
 */
/**
 * 
 * DOM树在构建的过程中可能会被CSS和JS的加载而执行阻塞
   display:none的元素也会在DOM树中
   注释也会在DOM树中
   script标签会在DOM树中
 * 
 * 
 * https://www.jianshu.com/p/e6252dc9be32
 * 
 * 
 * script标签的异步属性
 * defer: 立即下载，但是可以在整个页面解析完成在执行，之后执行，多个外部脚本，可以按照放置的顺序，顺序执行
 * async: 立即下载，也是之后执行，但不保证执行顺序。
 * 
 * 
 * 
 * 
 */