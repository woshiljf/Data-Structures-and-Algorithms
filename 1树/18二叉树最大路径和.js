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

var maxPathSum = function(root) {

    let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和

    const dfs = (root) => {
        if (root == null) { // 遍历到null节点，收益0
            return 0;
        }
        const left = dfs(root.left); // 左子树提供的最大路径和
        const right = dfs(root.right); // 右子树提供的最大路径和

        const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
        maxSum = Math.max(maxSum, innerMaxSum); // 挑战最大纪录

        const outputMaxSum = root.val + Math.max(left, right); // 当前子树对外提供的最大和

        if (outputMaxSum < 0) { // 对外提供的路径和为负，直接返回0
            return 0;
        }
        return outputMaxSum; // 非负，则正常返回
    };

    dfs(root); // 递归的入口
    return maxSum;



};