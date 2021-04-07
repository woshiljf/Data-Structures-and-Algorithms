/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * leetcode 655
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {

    var row = getHeight(root)
    var colum = Math.pow(2, row) - 1
    var res = []

    for (let i = 0; i < row; i++) {
        var temp = new Array(colum).fill('')
        res.push(temp)
    }
    const fill = function(res, root, i, l, r) {
        if (root == null) return
            // 取中间值
        var mid = (l + r) >> 1
        res[i][mid] = '' + root.val
            // 不断的往左右两边，取中间索引，放入节点的值就行
        fill(res, root.left, i + 1, l, mid)
        fill(res, root.right, i + 1, mid + 1, r)
    }
    fill(res, root, 0, 0, colum)
    return res
};
// 获取树的高度
function getHeight(root) {

    if (!root) return 0
    return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}