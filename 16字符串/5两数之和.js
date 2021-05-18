/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
//  * 大数相加
 */
var addStrings = function (num1, num2) {


  let i = num1.length - 1, j = num2.length - 1, add = 0

  let ans = []

  while (i >= 0 || j >= 0 || add !== 0) {

    var x = i >= 0 ? num1[i] - 0 : 0
    var y = j >= 0 ? num2[j] - 0 : 0
    var sum = x + y + add
    ans.push(sum % 10)
    add = Math.floor(sum / 10)
    i--
    j--

  }

  return ans.reverse().join('')

};