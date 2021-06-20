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
var inorderTraversal = function (root) {

  if (!root) return []

  let ans = []

  let queue = [root]

  while (queue.length) {

    let node = queue.pop()
    if (node) {

      queue.push(node)
      queue.push(null)

      node.right && queue.push(node.left)
      node.left && queue.push(node.left)

    } else {
      ans.push(queue.pop().val)
    }
  }

  return ans

};