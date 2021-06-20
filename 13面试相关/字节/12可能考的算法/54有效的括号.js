/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {


  var map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  var queue = []
  for (let i = 0; i < s.length; i++) {

    var s1 = s[i]
    if (map[s1] !== undefined) {
      queue.push(s1)
    } else {
      var t1 = queue[queue.length - 1]
      if (map[t1] == s1) {
        queue.pop()
      } else {
        queue.push(s1)
      }

    }
  }

  if (queue.length) return false
  return true


};