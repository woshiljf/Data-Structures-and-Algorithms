/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {

    // 由于二叉搜索树是的特点是左节点小于根节点，根节点小于右节点
    // 所以可以用二分查找的方法，来查找
    if (!root) return null
        // p大于根节点，去右子树寻找
    if (p.val > root.val) return inorderSuccessor(root.right, p)
        // p等于根节点，去右子树找最小值
    else if (p.val === root.val) {
        let node = root.right
            // 循环找右子树的左子树
            // 直到没有，才退出
        while (node && node.left) node = node.left
        return node
    } else {
        // 小于，去左子树找
        return inorderSuccessor(root.left, p) || root
    }

};