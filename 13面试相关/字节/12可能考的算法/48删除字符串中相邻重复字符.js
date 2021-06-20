/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {

  let stack = [s[0]]
  for (let i = 1; i < s.length; i++) {
    let s1 = s[i]
    if (stack.length !== 0 && s1 == stack[stack.length - 1]) {
      let top = stack[stack.length - 1]
      if (s1 == top) {
        stack.pop()
      }
    } else {

      stack.push(s1)
    }
  }

  return stack.join('')

};