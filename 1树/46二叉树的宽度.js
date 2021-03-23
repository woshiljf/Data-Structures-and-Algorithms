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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {

    if (!root) return 0;

    var res = [],
        maxWidth = 1;
    recusion(root, 0, 0);
    return maxWidth;

    function recusion(root, level, num) {

        if (res[level]) {
            res[level].push(num);
        } else {
            res[level] = [num];
        }

        //计算最大宽度
        var tempArr = res[level];
        var tempWidth = tempArr[tempArr.length - 1] - tempArr[0] + 1;
        if (tempWidth > maxWidth) {
            maxWidth = tempWidth;
        }

        if (root.left) {
            recusion(root.left, level + 1, num * 2 + 1);
        }
        if (root.right) {
            recusion(root.right, level + 1, num * 2 + 2);
        }
    }
};