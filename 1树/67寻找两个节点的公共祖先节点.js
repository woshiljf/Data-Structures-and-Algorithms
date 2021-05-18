/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/**
 * 
 * 1 递归法：判断左右遍历完是否都存在。存在及root节点
 * 2 不存在，即为左节点或者右节点
 * 
 * ------------------
 * 两次使用先序遍历，保存p和q寻找的路径。判断两个路径的节点最近的交叉点就行
 * 
 * leetcode 236
 * 
 */
var lowestCommonAncestor = function (root, p, q) {

  if (!root) return null

  function findNode (root, p, q) {

    if (!root) return null

    if (root.val == p.val) return p
    if (root.val == q.val) return q

    var pvalue = findNode(root.left, p, q)
    var qvalue = findNode(root.right, p, q)

    if (pvalue && qvalue) return root

    return pvalue !== null ? pvalue : qvalue


  }
  return findNode(root, p, q)


};