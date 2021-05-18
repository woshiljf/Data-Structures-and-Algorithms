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

  var res = []
  var cur = head
  while (cur) {
    var value = cur.val
    res.push(value)
    cur = cur.next
  }
  var l = new ListNode(res[0])
  var cur1 = l
  for (let i = 1; i < res.length; i++) {
    if (i % 2 == 0) {
      cur1.next = new ListNode(res[i])
      cur1 = cur1.next
    }
  }

  for (let i = 0; i < res.length; i++) {

    if (i % 2 !== 0) {
      cur1.next = new ListNode(res[i])
      cur1 = cur1.next
    }


  }


  return l



};