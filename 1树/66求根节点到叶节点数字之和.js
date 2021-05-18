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
 * leetcode 129
 */
var sumNumbers = function (root) {
  //  这个题的思路可以记录 根节点到叶子节点的路径
  var res = []
  const help = function (root, s) {
    if (root == null) return
    //  到叶子节点了
    if (root.left == null && root.right == null) {
      s += root.val
      res.push(s)
      return
    }
    s += root.val
    help(root.left, s)
    help(root.right, s)
  }

  help(root, '')
  var sum = 0
  for (let i = 0; i < res.length; i++) {
    sum += parseInt(res[i])
  }
  return sum
};


// 简单写法
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