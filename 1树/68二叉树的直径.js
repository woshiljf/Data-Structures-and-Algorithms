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
var diameterOfBinaryTree = function (root) {


  if (!root) return 0
  let tempH = height(root.left) + height(root.right)

  return Math.max(tempH, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))


};

function height (node) {
  if (!node) return 0
  return 1 + Math.max(height(node.left), height(node.right))
}