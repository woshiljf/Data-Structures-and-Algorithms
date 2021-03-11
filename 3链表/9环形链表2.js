/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = head

var detectCycle = function(head) {
    var cur = head
    var i = 0
    while (cur) {
        if (cur.flag == undefined) {
            cur.flag = i++
        } else {
            return cur
        }
        cur = cur.next
    }
    return null
};

var a = Math.random()



var tar = detectCycle(head)
console.log(tar.flag);