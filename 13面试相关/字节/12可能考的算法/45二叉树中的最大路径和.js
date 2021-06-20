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

var maxPathSum = function (root) {

  let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和

  const dfs = (root) => {
    if (root == null) {
      return 0
    }
    const left = dfs(root.left)

    const right = dfs(root.right)
    // 子路径最大和
    const innerMax = root.val + left + right

    // 子路径最大和与最大和先比
    maxSum = Math.max(innerMax, maxSum)
    // 左右最大，与父节点相加获取最大
    const outputMax = root.val + Math.max(left, right)

    if (outputMax < 0) return 0
    // 返回最大
    return outputMax

  };

  dfs(root);  // 递归的入口
  return maxSum;

};