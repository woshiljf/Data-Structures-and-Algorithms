/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

  var result = []
  var maxLen = 0

  for (let i = 0; i < s.length; i++) {
    var s1 = s[i]
    if (result.indexOf(s1) !== -1) {

      // 删除这个步骤是一个好的点
      var index = result.indexOf(s1)
      result.splice(0, index + 1)

    }
    // 再添加这个字符。
    result.push(s1)
    if (result.length > maxLen) {
      maxLen = result.length
    }
  }

  return maxLen




};