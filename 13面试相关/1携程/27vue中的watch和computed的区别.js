/**
 * 
 *  * watcher和computd的相同点：都是监听属性的变动，而执行用户自定义的操作函数
 * computed: 源码上有一个lazy和dirty的属性，只有依赖的数据发生变化，才会去重新计算用户自定义的方法，不然，调用
 * 只会返回上一次计算的结果。这和methods种的方法，可以做一个对比，methods种的方法，调用就会重复执行，而computed会
 * 有缓存的作用。
 * 
 * 
 */