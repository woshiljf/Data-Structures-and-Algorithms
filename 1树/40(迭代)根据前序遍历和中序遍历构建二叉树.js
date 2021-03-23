/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var buildTree = function(preorder, inorder) {

    if (preorder.length == 0) {
        return null;
    }
    var roots = []
    var pre = 0;
    var index = 0;
    //先序遍历第一个值作为根节点
    var curRoot = new TreeNode(preorder[pre]);
    var root = curRoot;
    roots.push(curRoot);
    pre++;
    //遍历前序遍历的数组
    while (pre < preorder.length) {
        //出现了当前节点的值和中序遍历数组的值相等，寻找是谁的右子树
        if (curRoot.val == inorder[index]) {
            //每次进行出栈，实现倒着遍历
            while (roots.length && roots[roots.length - 1].val == inorder[index]) {
                curRoot = roots[roots.length - 1];
                roots.pop();
                index++;
            }
            //设为当前的右孩子
            curRoot.right = new TreeNode(preorder[pre]);
            //更新 curRoot
            curRoot = curRoot.right;
            roots.push(curRoot);
            pre++;
        } else {
            //否则的话就一直作为左子树
            curRoot.left = new TreeNode(preorder[pre]);
            curRoot = curRoot.left;
            roots.push(curRoot);
            pre++;
        }
    }
    return root;






};

var preorder = [3, 9, 20, 15, 7],
    inorder = [20, 9, 15, 3, 7]
var root = buildTree(preorder, inorder)