/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

  var res = []

  for (let i = 0; i < s.length; i++) {

    var s1 = s[i]
    //   小写字母
    if (s1.charCodeAt() >= 97 && s1.charCodeAt() <= 122) {
      res.push(s1)
    }
    //   大写字母
    if (s1.charCodeAt() >= 65 && s1.charCodeAt() <= 90) {
      s1 = s1.toLowerCase()
      res.push(s1)
    }
    //   数字
    if (s1.charCodeAt() >= 48 && s1.charCodeAt() <= 57) {
      res.push(s1)
    }
  }

  var res1 = res.slice()
  res1.reverse()

  return res1.join('') == res.join('')




};