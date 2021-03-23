/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * leetcode 589
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {

    var result = []

    const dfs = function(root) {

        if (root) {

            result.push(root.val)
            if (root.children) {
                for (let i = 0; i < root.children.length; i++) {

                    var child = root.children[i]
                    dfs(child)

                }
            }
        } else {
            return
        }
    }
    dfs(root)
    return result

};