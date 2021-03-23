/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * leetcode 1008
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {

    var inorder = preorder.slice().sort((a, b) => a - b)
    const buildTree = (preorder, inorder) => {
        if (preorder.length == 0) return null

        const root = new TreeNode(preorder[0])
        const mid = inorder.indexOf(preorder[0])
            // 根据数组中，后序遍历的数组中，左子树元素所在数组的位置，左子树元素在中序遍历所在的位置
        root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
            // 根据数组中，后序遍历的数组中，右子树元素所在数组的位置，右子树元素在中序遍历所在的位置
        root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
        return root
    }

    return buildTree(preorder, inorder)

};