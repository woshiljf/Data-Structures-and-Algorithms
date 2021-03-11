/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * leetcode 501
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {

    var map = {}
    var result = []
    const dfs = function(root) {

        if (root == null) return

        if (!map[(root.val)]) {
            map[root.val] = 1
        } else {
            map[root.val]++
        }
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    var max = Math.max(...Object.values(map))
    for (let key in map) {
        if (map[key] === max) {
            result.push(key)
        }
    }

    return result




};