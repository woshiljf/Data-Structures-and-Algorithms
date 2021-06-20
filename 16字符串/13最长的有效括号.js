/**
 * @param {string} s
 * @return {number}
 * leetcode 32
 */
var longestValidParentheses = function (s) {

  let len = s.length
  if (len == 0) return 0

  let stack = []
  stack.push(-1)
  let maxLen = 0
  for (let i = 0; i < len; i++) {

    if (s[i] == "(") {
      stack.push(i)
    } else {
      stack.pop()

      if (stack.length == 0) {
        stack.push(i)
      } else {

        let l = stack.length
        maxLen = Math.max(maxLen, i - stack[l - 1])
      }

    }

  }

  return maxLen




};