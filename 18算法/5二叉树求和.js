/**
 * }https://leetcode.cn/problems/sum-of-root-to-leaf-binary-numbers/
 *
 * Definition for a binary tree node.
 function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const head = new TreeNode(1);
head.left = new TreeNode(1);
head.left.left = new TreeNode(0);
head.left.right = new TreeNode(1);
head.right = new TreeNode(0);
head.right.right = new TreeNode(0);
head.right.left = new TreeNode(1);

var sumRootToLeaf = function (root) {
  const dfs = (root, sum) => {
    if (root == null) return 0;
    sum = 2 * sum + root.val;
    debugger;
    if (root.left == null && root.right == null) {
      return sum;
    }
    return dfs(root.left, sum) + dfs(root.right, sum);
  };
  return dfs(root, 0);
};

const res = sumRootToLeaf(head);

console.log(res);
