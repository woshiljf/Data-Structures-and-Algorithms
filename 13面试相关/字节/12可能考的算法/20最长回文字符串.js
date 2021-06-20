/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  if (s.length < 2) return s
  var maxlength = 0
  var start = 0
  var str = s[0]
  function expandCenter (left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {

      if (right - left + 1 > maxlength) {
        maxlength = right - left + 1
        str = s.substring(left, right + 1)
      }

      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {

    expandCenter(i, i + 1)
    expandCenter(i - 1, i + 1)

  }

  return str

};