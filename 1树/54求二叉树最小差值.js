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
 * @return {number}
 * leetcode 783
 */
var minDiffInBST = function(root) {

    if (!root) return
    var min = Number.MAX_VALUE
    var pre = -1
    const inorder = function(root) {
        if (!root) return null
        inorder(root.left)
            // 中序遍历是升序排列
        if (pre == -1) {
            pre = root.val

        } else {
            min = Math.min(min, Math.abs(pre - root.val))
            pre = root.val
        }

        inorder(root.right)
    }
    inorder(root)
    return min


};