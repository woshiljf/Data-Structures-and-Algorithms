/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {

  let low = 0, high = s.length - 1

  while (low < high) {

    let c1 = s[low], c2 = s[high]

    if (c1 == c2) {
      low++
      high--
    } else {

      return isVaild(s, low, high - 1) || isVaild(s, low + 1, high)
    }

  }

  return true


};

function isVaild (s, low, high) {



  for (let i = low, j = high; i < j; ++i, --j) {

    let c1 = s[i], c2 = s[j]
    if (c1 != c2) {
      return false;
    }
  }
  return true;




}