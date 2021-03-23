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
 * @param {number} val
 * @return {TreeNode}
 * leetcode 700
 */
var searchBST = function(root, val) {


    if (!root) return null

    const dfs = function(root, val) {

        if (root == null) return null
        if (root) {

            if (root.val == val) return root

            return dfs(root.left, val) || dfs(root.right, val)
        }
    }

    return dfs(root, val)


};