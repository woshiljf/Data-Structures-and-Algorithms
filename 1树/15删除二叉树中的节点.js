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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
  if (!root) return null
  // if key > root.val, delete node in root.right. Otherwise delete node in root.left.
  if (key > root.val) {
    const rightNode = deleteNode(root.right, key)
    root.right = rightNode
    return root
  } else if (key < root.val) {
    const leftNode = deleteNode(root.left, key)
    root.left = leftNode
    return root
  } else {
    // now root.val === key
    if (!root.left) {
      return root.right
    }
    if (!root.right) {
      return root.left
    }
    // 将删除元素的左下方元素替代删除元素;
    // 将左下方元素的右侧最下方子元素衔接删除元素的右下方子元素;
    const rightChild = root.right
    let newRightChild = root.left

    while (newRightChild.right) {
      newRightChild = newRightChild.right
    }
    newRightChild.right = rightChild
    return root.left
  }

}