/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
var reverseBetween = function(head, m, n) {

    var pre = null
    var cur = head
    let i = 0
    while (i < n - 1) {
        i++
        if (m - i == 1) {
            pre = cur
        }
        if (i < m) {
            cur = cur.next
        }

        if (i >= m) {

            // 这里进行交互
            var temp = cur.next
            cur.next = temp.next
            temp.next = pre.next
            pre.next = temp
        }





    }






};

function rerverseNode(node) {
    var pre = null
    var next = null
    var cur = node

    next = cur.next
    cur.next = pre
    pre = cur
    cur = next




}


reverseBetween(head, m, n)