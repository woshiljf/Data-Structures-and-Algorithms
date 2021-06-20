/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

  let ans = []
  let multi = []
  let ansStack = []
  let repeat = 0
  for (let i = 0; i < s.length; i++) {
    // 如果找到了需要重复的次数
    let s1 = s[i]
    if (s1.charCodeAt() >= 48 && s1.charCodeAt() <= 57) {
      repeat = repeat * 10 + s1 - 0
    } else if (s1 == '[') {
      ansStack.push(ans.slice())
      multi.push(repeat)
      ans = []
      repeat = 0
    } else if (s1.charCodeAt() >= 97 && s1.charCodeAt() <= 122) {
      ans.push(s1)
    } else {
      let temp = ansStack.pop()
      let count = multi.pop()
      for (let i = 0; i < count; i++) {
        temp.push(ans.join(''))
      }
      ans = temp
    }
  }

  return ans.join('')

};