/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    if (!head) return null

    var domn = new ListNode(0)
    domn.next = head
    var pre = domn
    var cur = head
    while (cur) {
        if (cur.val == val) pre.next = cur.next
        else {
            pre = cur
        }
        cur = cur.next
    }
    return domn.next





};