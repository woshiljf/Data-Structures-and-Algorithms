/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * leetcode 513
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 这个题目的核心部分是想到使用从右向左的层次遍历，使用队列的方式，push每个节点
var findBottomLeftValue = function(root) {

    if (!root) return null
        // queue存储每个遍历的节点
    var queue = []
        // result存储每个结果节点
    var result = []
    queue.push(root)
    while (queue.length) {
        var len = queue.length
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            result.push(node)
            if (node.right) {
                queue.push(node.right)
            }
            if (node.left) {
                queue.push(node.left)
            }
        }
    }
    // 最后一个为左下角的值
    return result[result.length - 1].val




};