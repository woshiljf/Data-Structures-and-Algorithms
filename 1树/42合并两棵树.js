/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * leetcode 617
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {


    const dfs = function(t1, t2) {

        if (t1 == null) {
            return t2;
        }
        if (t2 == null) {
            return t1;
        }
        // 直接重新构建一棵树,左右节点val之和
        var merged = new TreeNode(t1.val + t2.val);
        // 构建左节点
        merged.left = dfs(t1.left, t2.left);
        // 构建右节点
        merged.right = dfs(t1.right, t2.right);
        // 返回节点
        return merged;

    }

    return dfs(root1, root2)






};