/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var buildTree = function(inorder, postorder) {

    if (inorder.length == 0) return null

    // 首先是把后序遍历和中序遍历进行反转,然后从右子树开始构建，再到左子树
    postorder = postorder.reverse()

    inorder = inorder.reverse()

    var stack = []

    var curRoot = new TreeNode(postorder[0])

    var root = curRoot

    stack.push(curRoot)

    var index = 0
    var pos = 1

    while (pos < postorder.length) {
        // 如果当前的节点值于中序遍历中的节点值相等
        if (curRoot.val == inorder[index]) {
            // 节点相等时，pop出栈，
            while (stack.length && stack[stack.length - 1] == inorder[index]) {
                curRoot = stack[stack.length - 1]
                stack.pop()
                index++
            }
            // 出栈结束，构建左子树
            curRoot.left = new TreeNode(postorder[pos])
            curRoot = curRoot.left
            stack.push(curRoot)
            pos++


        } else {

            // 不相等的话，一直把当作当前节点的右子树
            curRoot.right = new TreeNode(postorder[pos])
            curRoot = curRoot.right
            stack.push(curRoot)
            pos++

        }




    }



    return root


};

var inorder = [9, 3, 15, 20, 7]
postorder = [9, 15, 7, 20, 3]
var root = buildTree(inorder, postorder)

console.log(root);