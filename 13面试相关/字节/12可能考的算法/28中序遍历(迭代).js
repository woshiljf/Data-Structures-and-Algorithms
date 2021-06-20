var inorderTraversal1 = function (root) {


  if (!root) return []
  var result = []
  var queue = []
  queue.push(root)
  while (queue.length) {
    var node = queue.pop()
    if (node) {
      // 迭代法来解决这个遍历的问题，主要的实现是如何放置左右节点和根节点在queue中的位置
      node.right && queue.push(node.right)
      queue.push(node)
      queue.push(null)
      node.left && queue.push(node.left)
    } else {
      result.push(queue.pop().val)
    }

  }
  return result



};

var inorderTraversal2 = function (root) {


  if (!root) return []
  var result = []
  var queue = []
  queue.push(root)
  while (queue.length || root) {

    while (root) {
      queue.push(root)
      root = root.left
    }

    root = queue.pop()
    result.push(root.val)
    root = root.right
  }

  return result

};