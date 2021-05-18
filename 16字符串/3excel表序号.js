/**
 * @param {string} columnTitle
 * @return {number}
 * leetcode 171
 */
var titleToNumber = function (columnTitle) {

  var map = {
    A: 1, B: 2, C: 3, D: 4,
    E: 5, F: 6, G: 7, H: 8,
    I: 9, J: 10, K: 11, L: 12,
    M: 13, N: 14, O: 15, P: 16,
    Q: 17, R: 18, S: 19, T: 20,
    U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
  }

  //  AB : A * 26 + B
  // ABC: A *26 * 26 + B*26 + C
  if (columnTitle.length == 1) return map[columnTitle]

  var res = 0

  var len = columnTitle.length

  for (let i = 0; i < columnTitle.length; i++) {

    var s = columnTitle[i]

    res += map[s] * Math.pow(26, --len)

  }

  return res

};