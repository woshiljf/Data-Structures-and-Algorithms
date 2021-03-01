/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.root1 = this.root2 = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
    // 1. 设置当前层
    const nowRoot = [root, root];

    // 2. 判断当前层是否可以延续
    while (nowRoot.length) {

        var node1 = nowRoot.pop()
        var node2 = nowRoot.pop()
        if (!node1 || !node2 || node1.val !== node2.val) return false

        nowRoot.push(root1.left);
        nowRoot.push(root2.right);

        nowRoot.push(root1.right);
        nowRoot.push(root2.left);


    }

};