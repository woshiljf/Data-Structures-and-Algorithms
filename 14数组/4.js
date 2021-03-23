/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var str1 = strs[0]
    var temp = ''
    var f = true
    for (let i = 1; i < str1.length; i++) {
        temp = str1.substr(0, i)
        for (let j = 1; j < strs.length; j++) {
            var nextStr = strs[j]
            if (nextStr.startsWith(temp)) {
                continue
            } else {
                f = false
                break

            }
        }
        if (!f) {
            break
        }
    }

    return temp.length == 1 ? '' : temp


};