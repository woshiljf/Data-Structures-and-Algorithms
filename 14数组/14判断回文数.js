/**
 * @param {number} x
 * @return {boolean}
 * leetcode 9
 */
var isPalindrome = function(x) {

    var str = String(x)

    var i = 0
    var j = str.length - 1
    while (i <= j) {

        if (str[i] !== str[j]) {
            return false
        }

        i++
        j--


    }
    return true



};