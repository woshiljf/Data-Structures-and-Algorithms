/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 * leetcode 863
 */
var res = []
var distanceK = function(root, target, K) {

    if (!root) return []
    const dfs = function(node) {
        if (node == null) return -1
        else if (node == target) {
            // 当前节点为target，所以放入求距离
            subtree(node, 0, K)
            return 1
        } else {
            var l = dfs(node.left)
            var r = dfs(node.right)
                // l不为-1，说明，target在左节点
            if (l !== -1) {
                if (l == K) res.push(node.val)
                    // 右节点到target的距离从l+1 开始计算
                subtree(node.right, l + 1, K)
                return l + 1
                    // r不为-1，说明target在右节点
            } else if (r !== -1) {
                if (r == k) res.push(node.val, K)
                    // 左节点到target的距离从r+1 开始计算
                subtree(node.left, r + 1)
                return r + 1
            } else {
                return -1
            }
        }
    }
    dfs(root)
    return res
};

// 求target 节点到其他节点中距离为K的节点
function subtree(node, dis, k) {
    if (node == null) return
    if (dis == k) {
        res.push(node.val)
    } else {
        subtree(node.left, dis + 1, k)
        subtree(node.right, dis + 1, k)
    }

}