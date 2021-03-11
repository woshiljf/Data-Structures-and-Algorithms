/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

    if (!root) return []
    var res = []

    function help(node, pathStr) {
        if (node.left == null && node.right == null) {
            pathStr += node.val
            res.push(pathStr)
            return
        }
        pathStr += node.val
        if (node.left) {
            help(node.left, pathStr + "->")
        }

        if (node.right) {
            help(node.right, pathStr + "->")
        }
    }
    help(root, "")
    return res
};