/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    var temp = []
    var cur = head
    while (cur) {
        temp.push(cur.val)
        cur = cur.next
    }

    var i = 0,
        j = temp.length - 1
    while (i < j) {
        if (temp[i] !== temp[j]) return false
        i++
        j--
    }
    return true

};