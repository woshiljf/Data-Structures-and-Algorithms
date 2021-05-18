/**
 * @param {number} n
 * @return {number[][]}
 * leetcode 59
 */
var generateMatrix = function (n) {

  if (n == 1) return [[1]]

  var matrix = new Array(n).fill(0).map((item) => item = new Array(n).fill(0))
  var up = n - 1, down = 0, left = 0, right = n - 1

  var i = 1

  while (down <= up && left <= right) {
    //  往右边走
    for (let k = left; k <= right; k++) {
      matrix[down][k] = i++
    }
    down++
    // 往下走
    for (let k = down; k <= up; k++) {
      matrix[k][up] = i++
    }
    right--
    // 往左边走
    for (let k = right; k >= left; k--) {
      matrix[up][k] = i++
    }
    up--
    // 往上走
    for (let k = up; k >= down; k--) {

      matrix[k][left] = i++

    }
    left++

  }


  return matrix



};

console.log(generateMatrix(4));