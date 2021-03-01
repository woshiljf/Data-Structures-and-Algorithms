/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // var queue1 = []
    // var queue2 = []

    // const dfs = function (root,queue) {

    //     if(root) {
    //         queue.push(root.val)
    //         dfs(root.left,queue)
    //         dfs(root.right,queue)
    //     }else{
    //         queue.push(null)
    //     }

    // }
    // dfs(p,queue1)
    // dfs(q,queue2)
    // console.log(queue2)
    // console.log(queue1)
    // for(let i = 0;i<queue1.length;i++) {
    //     if(queue1[i]!=queue2[i]) {
    //         return false
    //     }
    // }
    // return true

    const dfs = function(root1, root2) {

        if (root1 == null && root2 == null) return true
        if (root1 == null || root2 == null) return false
        if (root1.val !== root2.val) return false

        return dfs(root1.left, root2.left) && dfs(root1.right, root2.right)

    }

    return dfs(p, q)

};