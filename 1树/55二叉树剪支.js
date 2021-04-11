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
 * @return {TreeNode}
 * leetcode 814
 */
var pruneTree = function(root) {

    if (root == null) return null;

    root.left = pruneTree(root.left); // 左子树剪枝，得到剪枝后左子树

    root.right = pruneTree(root.right); // 右子树剪枝，得到剪枝后右子树

    // 判断决定root结点是否需要剪掉：

    if (root.left == null && root.right == null && root.val == 0) return null;
    // 返回root这棵树剪枝后的结果

    return root;



};