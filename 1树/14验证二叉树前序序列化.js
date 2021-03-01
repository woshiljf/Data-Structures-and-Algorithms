/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {

    // 首先是前序遍历获取的字符串
    var slot = 1
    var stack = preorder.split(',')

    for (let i = 0; i < stack.length; i++) {

        --slot
        if (slot < 0) return false

        if (stack[i] !== "#") {
            slot += 2
        }

    }
    return slot == 0


};