/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * leetcode 559
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {

    if (!root) return 0
    var deep = 0
    var queue = []
    queue.push(root)
    while (queue.length) {
        var len = queue.length
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            if (node.children.length) {
                // 这里的children是数组
                queue = queue.concat(node.children)

            }
        }
        deep++
    }

    return deep


};