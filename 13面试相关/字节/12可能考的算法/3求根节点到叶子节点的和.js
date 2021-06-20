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
 * @return {number}
 */
var sumNumbers = function (root) {


  //  这个题的思路可以记录 根节点到叶子节点的路径
  const dfs = function (root, p) {
    if (root == null) return 0

    var sum = p * 10 + root.val

    if (root.left == null && root.right == null) {
      return sum
    }
    else {
      return dfs(root.left, sum) + dfs(root.right, sum)
    }

  }

  return dfs(root, 0)

};