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

    // 双指针的解放
    //创建一个空的dumy节点
    var dumy = new ListNode()
    var l1 = null,
        l2 = null
    dumy.next = head
    l1 = l2 = dumy

    for (let i = 0; i <= n; i++) {
        l2 = l2.next
    }

    while (l2 !== null) {
        l1 = l1.next
        l2 = l2.next
    }
    l1.next = l1.next.next
    return dumy.next

};