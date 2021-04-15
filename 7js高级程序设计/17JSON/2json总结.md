## JOSN章节总结
- 全局对象JSON包括两个函数: JOSN.stringfy和JOSN.pase

- JSON.stringfy(obj,过滤器,添加空格)
- JSON.parse(jsonText，过滤器)
- 以及JSON数据格式的一些规范

- 对象，可以自定以JSON转化的方法，如:

var obj = {
  a:1,
  b:2,
  <!-- 编写一个toJSON函数 -->
  toJSON:function(){
    return this
  }
}