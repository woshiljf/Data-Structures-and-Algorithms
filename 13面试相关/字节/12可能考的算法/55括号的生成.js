/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /**
   *  左括号与右括号的数量不可超过n
      每放一个左括号，才可放一个右括号，
      递归限制条件
      1 左括号和右括号的数量，最多放n个
      2 左括号的数量小于右括号，才可放右括号 
   */

  //    使用回溯算法，来进行这个题目
  var result = []
  const trackBack = function (res, left, right) {

    if (res.length == 2 * n) {
      result.push(res)
      return
    }

    if (left < n) {
      trackBack(res + '(', left + 1, right)
    }
    if (right < left) {
      trackBack(res + ')', left, right + 1)
    }


  }
  trackBack('', 0, 0)

  return result



};