/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {

    if (!root) return []
    var result = []
    var queue = []
    queue.push(root)
    while (queue.length) {
        // var len = queue.length
        // 一个改进的地方就是不需要定义一个len保存队列的开始长度，
        // 这里使用动态的方式
        for (let i = 0; i < queue.length; i++) {
            // 弹出元素
            var node = queue.pop()
                // push进结果数组
            result.push(node.val)
            if (node.children) {
                // 如果有孩子，从孩子节点最后一个开始遍历。
                for (let i = node.children.length - 1; i >= 0; i--) {
                    var child = node.children[i]
                    queue.push(child)
                }
            }
        }

    }
    return result
};