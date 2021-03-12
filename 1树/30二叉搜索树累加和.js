/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * leetcode 538
 */
var convertBST = function(root) {

    if (!root) return null
    var amount = 0
    const dfs = function(root) {

        if (root) {
            // 反向遍历这棵树
            dfs(root.right)
            amount += root.val
            root.val = amount
            dfs(root.left)
        }

    }
    dfs(root)
    return root






};