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
var removeNthFromEnd = function (head, n) {

  //创建一个空的dumy节点
  var dumy = new ListNode()
  dumy.next = head

  var l1 = null
  var l2 = null
  l1 = dumy
  l2 = dumy
  for (let i = 0; i <= n; i++) {
    l1 = l1.next
  }
  while (l1 !== null) {
    l1 = l1.next
    l2 = l2.next
  }

  l2.next = l2.next.next
  return dumy.next

};