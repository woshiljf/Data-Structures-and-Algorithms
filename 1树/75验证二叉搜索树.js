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
 * @return {boolean}
 * leetcode 98
 */
var isValidBST = function (root) {

  const quene = [];
  function dfs (root) {
    if (!root) {
      return;
    }
    root.left && dfs(root.left);
    quene.push(root.val);
    root.right && dfs(root.right);
  }
  dfs(root)
  for (let i = 0; i < quene.length; i++) {
    if (quene[i] >= quene[i + 1]) {
      return false;
    }
  }
  return true;
};