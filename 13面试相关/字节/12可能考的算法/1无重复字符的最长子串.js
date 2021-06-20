/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {


  var maxLen = 0
  var arr = []

  for (let i = 0; i < s.length; i++) {

    var s1 = s[i]
    if (arr.indexOf(s1) !== -1) {
      var index = arr.indexOf(s1)
      arr.splice(0, index + 1)


    }
    arr.push(s1)
    maxLen = Math.max(maxLen, arr.length)
  }

  return maxLen

};