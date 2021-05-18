/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * leetcode 74
 */
var searchMatrix = function (matrix, target) {


  const m = matrix.length, n = matrix[0].length;

  let low = 0, high = m * n - 1;

  while (low <= high) {
    // 查找mid的数
    const mid = Math.floor((high - low) / 2) + low;
    //  寻找中位数 midvalue
    const x = matrix[Math.floor(mid / n)][mid % n];

    if (x < target) {

      low = mid + 1;

    } else if (x > target) {

      high = mid - 1;

    } else {

      return true;
    }
  }

  return false;

};

var matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3

searchMatrix(matrix, target)