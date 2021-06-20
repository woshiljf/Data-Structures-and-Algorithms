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
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {

  if (!root) return false

  const dfs = function (root, target) {

    if (root == null) return false;
    // 遍历到null节点
    if (root.left == null && root.right == null) { // 遍历到叶子节点

      return target + root.val == sum;             // 如果满足这个就返回true
    }

    return dfs(root.left, target + root.val) || dfs(root.right, target + root.val);      // 大问题转成两个子树的问题
  }

  return dfs(root, 0)


};