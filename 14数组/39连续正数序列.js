/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {

  var i = 1
  var j = 1

  var sum = 0
  var res = []
  while (i <= Math.ceil(target / 2)) {

    if (sum < target) {
      sum += j
      j++
    } else if (sum > target) {
      sum -= i
      i++
    } else {

      // 关键的处理方法

      var temp = []
      for (let k = i; k < j; k++) {
        temp.push(k)
      }
      res.push(temp)
      sum -= i
      i++

    }

  }

  return res
};