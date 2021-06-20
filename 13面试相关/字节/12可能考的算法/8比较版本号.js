/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {

  var v1 = version1.split('.')
  var v2 = version2.split('.')

  var len1 = v1.length
  var len2 = v2.length
  for (let i = 0; i < Math.max(len1, len2); i++) {

    var val1 = i < len1 ? parseInt(v1[i]) : 0
    var val2 = i < len2 ? parseInt(v2[i]) : 0

    if (val1 != val2) {
      return val1 > val2 ? 1 : -1
    }



  }

  return 0




};