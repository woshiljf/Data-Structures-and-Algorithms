/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    if (!root) return true
        // 计算左右两边的高度
    var leftHeight = getHeight(root.left)
    var rightHeight = getHeight(root.right)
        // 高度差
    if (Math.abs(leftHeight - rightHeight) > 1) return false
        // 递归进行检测
    return isBalanced(root.left) && isBalanced(root.right)


};
// 计算树的高度
function getHeight(root) {

    if (!root) return 0

    return Math.max(getHeight(root.left), getHeight(root.right)) + 1


}