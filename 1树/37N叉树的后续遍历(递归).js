/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * leetcode 590
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {

    var result = []
    const dfs = function(root) {
        if (root) {

            if (root.children) {
                for (let i = 0; i < root.children.length; i++) {
                    var child = root.children[i]
                    dfs(child)
                }
            }
            // 改变放结果数组的位置就可以
            result.push(root.val)
        } else {
            return
        }
    }

    dfs(root)

    return result
};