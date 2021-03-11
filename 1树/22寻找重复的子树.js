/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * leetcode 652
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

function Tree(val) {
    this.val = val
    this.left = null
    this.right = null
}

var root = new Tree(1)
root.left = new Tree(2)
root.right = new Tree(3)
root.right.left = new Tree(4)
root.right.right = new Tree(5)

var findDuplicateSubtrees = function(root) {

    const treeMap = new Map()
    const result = []

    function traversal(root) {

        if (!root) {
            return '#'
        }
        const left = traversal(root.left)
        const right = traversal(root.right)
            // 子树，怎么获取
        const subtree = `${left},${right},${root.val}`
        console.log(subtree);
        if (treeMap.get(subtree)) {
            treeMap.set(subtree, treeMap.get(subtree) + 1)
        } else {
            treeMap.set(subtree, 1)
        }
        if (treeMap.get(subtree) == 2) {
            result.push(root)
        }
        return subtree
    }
    traversal(root)
    return result

};

findDuplicateSubtrees(root)