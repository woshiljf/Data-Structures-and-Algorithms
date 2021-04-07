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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 * leetcode 623
 */
var addOneRow = function(root, val, depth) {


    if (depth == 1) {
        var n = new TreeNode(val)
        n.left = root
        return n
    }

    var queue = [root]

    var deep = 1

    while (deep < depth - 1) {

        var temp = []
        while (queue.length) {
            var node = queue.shift()
            node.left && temp.push(node.left)
            node.right && temp.push(node.right)
        }
        queue = temp
        deep++



    }

    console.log(queue)
    while (queue.length) {
        var node = queue.shift()
        var temp = node.left
        node.left = new TreeNode(val)
        node.left.left = temp
        temp = node.right
        node.right = new TreeNode(val)
        node.right.right = temp
    }

    return root



};