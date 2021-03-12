/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * leetcode 515
 * 
 * 核心思想：层次遍历。使用一个temp数组保存每一层节点的值。这一层节点遍历完，求出temp中的最大值，push进result,最后返回result
 * 
 * 
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {

    if (!root) return []
        // 结果数组
    var result = []
        // 临时保存每一层所有节点的值
    var temp = []
        // 保存需要遍历的节点
    var queue = []
    queue.push(root)
    while (queue.length) {

        var len = queue.length
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
                // temp保存每一层的节点值
            temp.push(node.val)
                // 节点有左右节点存在，则push进queue
            if (node.right) {
                queue.push(node.right)
            }
            if (node.left) {
                queue.push(node.left)
            }
        }
        // 求出每一层最大的值，push进result
        var max = Math.max(...temp)
        result.push(max)
        temp = []

    }
    // 返回result
    return result



};