## Vuex的内部实现原理

- vuex的state是借助vue的响应式data实现的。
- getter是借助vue的计算属性computed特性实现的。
- 其设计思想与vue中央事件总线如出一辙。
- https://juejin.cn/post/6844903784703852551
get state () {
    return this._vm._data?state
  }


  store._vm = new Vue({
    data: {
      ?state: state
    }
  })
  

 store._vm = new Vue({
    computed
  })

