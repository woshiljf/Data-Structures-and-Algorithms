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
 * @return {void} Do not return anything, modify root in-place instead.
 * leetcode 114
 */
var flatten = function (root) {

  const helper = (root) => {

    if (!root) {
      return
    }
    // 先遍历右节点
    helper(root.right)
    // 再遍历左节点
    helper(root.left)

    // 连接节点
    root.right = prev
    root.left = null
    prev = root
  }

  let prev = null

  helper(root)


};