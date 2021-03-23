/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * leetcode 203
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    if (!head) return null

    var cur = head
    var temp = []
    while (cur) {
        temp.push(cur.val)
        cur = cur.next
    }
    temp = temp.filter(item => item !== val)
    if (temp.length == 0) return null
    var h = new ListNode(temp[0])
    var cur = h
    for (let i = 1; i < temp.length; i++) {
        cur.next = new ListNode(temp[i])
        cur = cur.next
    }
    return h
};