/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {

  if (!root) return []
  var result = []
  var queue = [root]
  while (queue.length) {

    var len = queue.length
    for (let i = 0; i < len; i++) {

      var node = queue.shift()
      // 核心判断，只要判断i == 0，表示弹出的第一个就是右视图的第一个
      if (i == 0) {
        result.push(node.val)
      }
      node.right && queue.push(node.right)
      node.left && queue.push(node.left)

    }

  }

  return result


};