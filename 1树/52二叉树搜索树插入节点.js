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
 * leetcode 701
 */
var insertIntoBST = function(root, val) {

    if (!root) return new TreeNode(val)

    const help = function(root, val) {


        if (root == null) return

        if (root.left == null && root.val > val) {
            root.left = new TreeNode(val)
            return
        }
        if (root.right == null && root.val < val) {
            root.right = new TreeNode(val)
            return
        }

        if (root.val > val) help(root.left, val)
        if (root.val < val) help(root.right, val)


    }

    help(root, val)

    return root


};