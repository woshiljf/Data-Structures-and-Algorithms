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
var middleNode = function (head) {

  let cur = head
  let len = 0
  while (cur) {
    len++
    cur = cur.next
  }
  let mid = Math.floor(len / 2)
  cur = head
  let k = 0
  while (cur) {

    if (k == mid) return cur
    cur = cur.next
    k++
  }

};