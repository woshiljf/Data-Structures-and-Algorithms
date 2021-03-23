/**
 * 
 * include string或正则，只有名称匹配的组件会被缓存 2.1.0+
   exclude string或正则, 名称匹配的组件不会被缓存 2.1.0+
   max 最多可以缓存多少组件实例 2.5.0+
   activated 和 deactivate 生命周期钩子

 * <keep-alive include="a,b" :include="['a','b']" :exclude="/a|b/" :max="10">
      <component :is='view'></component>
   </keep-alive>
 * 

   使用keep-alive会将数据保留在内存中，如果每次进入页面的时候要获取最新的数据，
   需要 在 activated 生命周期中 重新获取数据，
   承担原来created 钩子中获取数据的任务
 * 
 * 场景 Vue中前进刷新，后退缓存用户浏览数据
   列表页面 =>点击进入详情页=> 后退到列表页 要缓存列表原来数据
   重新进入列表页面 => 获取最新的数据
 * 
 * 
 * 
 * 
 * 
 * 
 */