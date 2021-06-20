/**
 * @param {number[][]} mat
 * @return {number[]}
 * 
 * leetcode 498
 */
var findDiagonalOrder = function (mat) {

  let ans = []

  let m = mat.length - 1
  let n = mat[0].length - 1
  let flag = 1
  let temp = []
  // 先走行，遇到flag 为偶数，这需要取反，再放入ans
  for (let i = 0; i <= m; i++) {
    let j = 0
    let k = i
    // 开始走了
    if (k == 0 && j == 0) {
      ans.push(mat[k][j])
      flag++
      continue
    }

    while (k >= 0 && j <= n) {
      temp.push(mat[k][j])
      k--
      j++
    }
    if (flag % 2 == 0) {
      temp = temp.reverse()
      ans = ans.concat(temp)
      flag++
      temp = []

    } else {
      ans = ans.concat(temp)
      flag++
      temp = []
    }

  }
  // 开始固定行，走列了
  for (let i = 1; i <= n; i++) {
    let j = m // 行
    let k = i // 列
    // 开始走了
    if (k == n && j == m) {
      ans.push(mat[j][k])
      break
    }

    while (k <= n && j >= 0) {
      temp.push(mat[j][k])
      k++
      j--
    }
    if (flag % 2 == 0) {
      temp = temp.reverse()
      ans = ans.concat(temp)
      flag++
      temp = []

    } else {
      ans = ans.concat(temp)
      flag++
      temp = []
    }

  }
  return ans

};