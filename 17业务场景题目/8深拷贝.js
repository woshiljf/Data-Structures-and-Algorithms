function deepCopy (obj1, obj2) {

  obj2 = obj2 || {}
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
      const element = obj1[key];
      if (typeof element == 'object') {
        obj2[key] = element.__proto__.constructor == Array ? [] : {}
        deepCopy(element, obj2[key])
      } else {
        obj2[key] = element
      }
    }
  }
  return obj2
}

var json2 = {

  name: '小猫',
  age: '20',
  like: {
    a: 10,
    b: 3,
    c: 10,
    m: 100,
    n: '猪'
  },
  love: [1, 2, 3, 4, 5]


}

var res = deepCopy(json2)

console.log(res);