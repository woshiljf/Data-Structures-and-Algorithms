var kthLargest = function(root, k) {

    var nodeArr = []
    const help = function(node) {
        if (node) {
            help(node.left)
            nodeArr.push(node.val)
            help(node.right)
        }
    }
    help(root)
    return nodeArr[nodeArr.length - k]

}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let num = 0
    let res = null
    const inorder = root => {
        if (!root) {
            return
        }
        inorder(root.right)
        num++
        if (num == k) {
            res = root.val
            return
        }
        inorder(root.left)
    }
    inorder(root)
    return res
};