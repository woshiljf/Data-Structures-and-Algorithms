/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

  if (matrix.length == 0) return matrix

  var left = 0
  var right = matrix[0].length - 1
  var top = 0
  var bottom = matrix.length - 1
  var diration = 'right'
  var result = []
  while (left <= right && top <= bottom) {

    if (diration == 'right') {

      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      top++
      diration = 'bottom'
    }
    else if (diration == 'bottom') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right])
      }
      right--
      diration = 'left'

    }
    else if (diration == 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
      diration = 'top'

    }
    else if (diration == 'top') {

      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])

      }

      left++
      diration = 'right'


    }

  }

  return result
};