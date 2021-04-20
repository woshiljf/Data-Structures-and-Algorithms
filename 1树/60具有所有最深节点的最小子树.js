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
 */
var subtreeWithAllDeepest = function (root) {

  if (!root) return null;

  let leftDeep = getDepth(root.left);
  let rightDeep = getDepth(root.right);
  if (leftDeep === rightDeep) {
    return root;
  } else if (leftDeep > rightDeep) {
    return subtreeWithAllDeepest(root.left);
  } else {
    return subtreeWithAllDeepest(root.right);
  }

};

function getDepth (root) {
  if (!root) return 0

  return Math.max(getDepth(root.right), getDepth(root.left)) + 1
}

