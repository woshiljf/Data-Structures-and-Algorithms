/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * } 
 * leetcode 114
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {

  const helper = (root) => {

    if (!root) {
      return
    }

    helper(root.right)

    helper(root.left)

    root.right = prev

    root.left = null

    prev = root

  }
  let prev = null

  helper(root)


};