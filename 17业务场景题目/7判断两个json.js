function diffJson (json1, json2) {



  const help = function (obj1, obj2, newObj) {

    newObj = newObj || {}
    for (const key in obj2) {

      var value1 = obj2[key]

      // 如果obj1有相同的key的情况
      if (obj1.hasOwnProperty(key)) {

        // 判断类型
        var value2 = obj2[key]
        var type1 = Object.prototype.toString.call(value1)
        var type2 = Object.prototype.toString.call(value2)

        if (type1 == type2) {
          if (type1 == '[object Object]') {
            newObj[key] = {}
            help(value1, value2, newObj[key])
          } else {
            newObj[key] = value2

          }
        } else {
          newObj[key] = value2
        }
      } else {

        // obj2中可能有的key，obj1中没有
        newObj[key] = value1

      }

    }


    return newObj


  }

  var res = help(json1, json2, {})

  console.log(res)

  return res





}

var json1 = {
  name: '小狗',
  age: '19',
  like: {
    a: 1,
    b: 3,
    c: 10
  },
  love: [1, 2, 3, 4, 4]
}
// json2是更新后的json
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

var res = diffJson(json1, json2)