/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    //创建一个空的dumy节点
    var dumy = new ListNode()
    dumy.next = head
        // 入栈出栈的方式
    var stack = []
    var cur = dumy
    while (cur) {
        stack.push(cur)
        cur = cur.next
    }
    for (let i = 0; i < n; i++) {
        stack.pop()
    }
    var pre = stack[stack.length - 1]
    pre.next = pre.next.next
    return dumy.next

};