/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {

    if (!root) return []

    var result = []
    var stack = [root]
    while (stack.length) {

        var node = stack.pop()
        if (node.children.length) {

            stack = stack.concat(node.children)


        }
        result.unshift(node.val)




    }




    return result
};