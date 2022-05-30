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
var sumRootToLeaf = function (root) {
  const dfs = (root, sum) => {
    if (root == null) return 0;
    sum = 2 * sum + root.val;
    if (root.left == null && root.right == null) {
      return sum;
    }
    return dfs(root.left, sum) + dfs(root.right, sum);
  };
  return dfs(root, 0);
};
