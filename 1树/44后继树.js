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

    if (!root) return null
    var temp = []
    const inorder = function(root) {
        if (root) {
            inorder(root.left)
            temp.push(root)
            inorder(root.right)
        }
    }
    inorder(root)
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].val == p.val && i !== temp.length - 1) {
            return temp[i + 1]
        }
    }
    return null
};