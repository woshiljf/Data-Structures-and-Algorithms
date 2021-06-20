/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {

  if (!root) return []
  var result = []
  function preorder (node, pathValue, sum, path) {
    if (!node) {
      return
    }
    pathValue += node.val
    path.push(node.val)
    // 并判断左右节点是否是叶子节点，以及 pathValue == sum
    if (pathValue == sum && !node.left && !node.right) {
      result.push(path.slice())
    }
    preorder(node.left, pathValue, sum, path)
    preorder(node.right, pathValue, sum, path)
    if (pathValue > sum) {
      pathValue -= node.val
    }
    path.pop()
  }
  preorder(root, 0, sum, [])
  return result

};