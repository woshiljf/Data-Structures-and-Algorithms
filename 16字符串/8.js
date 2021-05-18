var arr = [1, [2, [3, [4, [5, null]]]]]
// 反过
var arr1 = arr.flat(Infinity).reverse()
arr1.shift()
function deep (arr) {

  var res = [arr.pop(), null]

  while (arr.length) {

    var n = arr.pop()

    var temp = []

    temp.push(res)

    temp.unshift(n)

    res = temp

  }

  return res

}

var res = deep(arr1)

console.log(res);