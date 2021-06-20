/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**m
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

  var pRoot = root
  if (!pRoot) return true

  const help = function (left, right) {

    if (left == null && right || left && right == null) return false
    if (left == null && right == null) return true
    if (left.val !== right.val) return false

    return help(left.left, right.right)

  }
  return help(pRoot.left, pRoot.right)

};