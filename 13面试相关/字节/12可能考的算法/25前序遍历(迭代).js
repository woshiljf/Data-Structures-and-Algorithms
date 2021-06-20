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
 * @return {number[]}
 */
var preorderTraversal = function (root) {


  let nums = []
  let stack = []
  if (root) stack.push(root)
  while (stack.length) {
    root = stack.pop()
    if (root) {
      root.right && stack.push(root.right)
      root.left && stack.push(root.left)
      stack.push(root)
      stack.push(null)
    } else {
      nums.push(stack.pop().val)
    }
  }
  return nums





};