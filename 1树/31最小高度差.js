/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * leetcode 最小高度差
 */
var getMinimumDifference = function(root) {

    var min = Infinity
    var stack = []
    const inorder = function(root) {
        if (root) {
            inorder(root.left)
            stack.push(root.val)
            inorder(root.right)

        }
    }
    inorder(root)

    for (let i = 1; i < stack.length; i++) {

        if (Math.abs(stack[i] - stack[i - 1]) < min) {
            min = Math.abs(stack[i] - stack[i - 1])
        }

    }

    return min


};