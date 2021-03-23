/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {


    if (!root) return null

    // write code here
    let head = null;
    let pre = head;
    inorder(root);
    // 完成中序遍历后，pre指向了最后一个节点
    // 将其闭合成环状结构
    head.left = pre;
    pre.right = head;
    return head;

    /**
     * @param {Node} node
     */
    function inorder(node) {
        if (!node) return;
        // 遍历左子树
        inorder(node.left);
        // 处理当前节点
        if (!pre) {
            // 遍历到最左边节点，此时节点就是双向链表的head
            head = node;
        } else {
            // 前节点的右边指向当前节点
            pre.right = node;
        }
        // 当前节点的左边指向前面节点
        node.left = pre;
        // 交互一下
        pre = node;

        // 遍历右子树
        inorder(node.right);
    }











};