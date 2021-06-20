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
var serialize = function (root) {

  var str = ''
  // 使用后续的方式进行序列化
  const help = function (root) {
    if (root == null) {
      str += 'None,'
    } else {
      //    使用后续的方式进行遍历
      help(root.left)
      help(root.right)
      str += root.val + ','
    }
  }
  help(root)

  console.log(str)

  return str

};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {

  var arr = data.split(',')
  arr.pop()
  const help = function (arr) {

    let end = arr[arr.length - 1]
    if (end == 'None') {
      arr.pop()
      return null
    }
    var root = new TreeNode(arr[arr.length - 1])
    arr.pop()
    root.right = help(arr)
    root.left = help(arr)
    return root

  }
  return help(arr)

};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/

var str = 'None,None,2,None,None,4,None,None,5,3,1'
var res = deserialize(str)

console.log(res);