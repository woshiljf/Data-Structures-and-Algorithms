/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

    // 将树输出为字符串
    var str = ''
    const help = function(root) {
        if (root == null) {
            str += 'None,'
        } else {
            str += root.val + ','
            help(root.left)
            help(root.right)
        }
    }
    help(root)
    return str

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    var arr = data.split(',')
        // 递归进行反序列化，构造树
    const help = function(arr) {
        if (arr[0] == 'None') {
            arr.shift()
            return null
        }
        var root = new TreeNode(arr[0])
        arr.shift()
        root.left = help(arr)
        root.right = help(arr)
        return root

    }
    return help(arr)

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */