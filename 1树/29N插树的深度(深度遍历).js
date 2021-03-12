/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 
 * leetcode 559
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {

    if (!root) return 0
    if (!root.children) return 1

    let max = 0
    for (let i = 0; i < root.children.length; i++) {

        let childDeep = maxDepth(root.children[i])
        max = Math.max(max, childDeep)


    }
    return max + 1


};