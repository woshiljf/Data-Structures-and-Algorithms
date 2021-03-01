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
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    if (!root) return []
    var result = []
    var queue = []
    queue.push(root)
    while (queue.length) {
        var node = queue.pop()
        if (node) {
            // 迭代法来解决这个遍历的问题，主要的实现是如何放置左右节点和根节点在queue中的位置
            // 前序遍历
            // node.right && queue.push(node.right)
            // node.left && queue.push(node.left)
            // queue.push(node)
            // queue.push(null)
            // 中序遍历
            node.right && queue.push(node.right)
            queue.push(node)
            queue.push(null)
            node.left && queue.push(node.left)
                // 后续遍历
                // queue.push(node)
                // queue.push(null)
                // node.right && queue.push(node.right)

            // node.left && queue.push(node.left)




        } else {
            result.push(queue.pop().val)
        }

    }
    return result

};