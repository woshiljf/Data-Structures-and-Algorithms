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
 */
var getMinimumDifference = function(root) {

    var min = Infinity
    var stack = []
    const inorder = function(root) {
        if (root) {
            inorder(root.left)

            stack.push(root.val)
            if (stack.length > 1) {
                // 递归的过程中就计算
                min = Math.min(Math.abs(stack[stack.length - 1]) - stack[stack.length - 2], min)
            }

            inorder(root.right)

        }
    }
    inorder(root)
    return min

};