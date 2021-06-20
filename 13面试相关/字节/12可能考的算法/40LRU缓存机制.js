/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {


  this.capacity = capacity

  this.cache = []

};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {

  let index = this.cache.findIndex((item) => item.key === key);
  if (index === -1) {
    return -1;
  }
  // 删除此元素后插入到数组第一项
  let value = this.cache[index].value;
  this.cache.splice(index, 1);
  this.cache.unshift({
    key,
    value,
  });
  return value;



};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {

  let index = this.cache.findIndex((item) => item.key === key);
  // 想要插入的数据已经存在了，那么直接提升它就可以
  if (index > -1) {
    this.cache.splice(index, 1);
  } else if (this.cache.length >= this.capacity) {
    // 若已经到达最大限制，先淘汰一个最久没有使用的
    this.cache.pop();
  }
  this.cache.unshift({ key, value });

};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/