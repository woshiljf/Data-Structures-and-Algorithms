/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * leetcode 563
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {

    var sum = 0
    const dfs = function(node) {

        if (node == null) return 0

        var left = dfs(node.left)
        var right = dfs(node.right)
            // 记住这个地方
        sum += Math.abs(left - right)
            // 记得返回，左右之和+当前节点的和
        return left + right + node.val

    }
    dfs(root)
    return sum


};