/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * leetcode 328
 */
var oddEvenList = function (head) {

  if (!head) return null

  if (head.next == null) return head

  var odd = head
  var evenHead = head.next
  var even = head.next
  while (even && even.next) {

    odd.next = odd.next.next
    odd = odd.next
    even.next = even.next.next
    even = even.next

  }

  odd.next = evenHead
  return head




};