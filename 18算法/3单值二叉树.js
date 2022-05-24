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
 * @return {boolean}
 */
 var isUnivalTree = function(root) {

    if(!root) return false;

    const value = root.val

    const dfs = node => {

         if(node) {
            if(node.val !== value) return false;
            return dfs(node.left) && dfs(node.right)
         }
         return true

    }
    return dfs(root);

};