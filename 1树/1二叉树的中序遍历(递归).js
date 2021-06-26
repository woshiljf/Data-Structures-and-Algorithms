var inorderTraversal = function (root) {

  if (!root) return []
  var result = []

  function dfp (node) {

    if (!node) return
    dfp(node.left)
    // 中序遍历，主要查看放的位置
    result.push(node.val)
    dfp(node.right)
  }

  dfp(root)
  return result



};