/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
    // 1. 递归树
    const recursion = (root1, root2) => {
        // 2. 如果两个节点同时为空，则为 true
        if (!root1 && !root2) {
            return true;
        }

        // 3. 如果只有一个节点为空，则为 false
        if (!root1 || !root2) {
            return false;
        }

        // 4. 判断左边和右边是否相等，并且交互判断
        return root1.val === root2.val && recursion(root1.left, root2.right) && recursion(root1.right, root2.left);
    };

    // 5. 返回结果
    return recursion(root, root);
};