/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * leetcode 141
 */
var hasCycle = function (head) {

  // 快慢指针
  if (!head) return false
  if (head.next == null) return false
  let slow = head
  let fast = head.next.next

  while (fast && fast.next) {
    if (slow == fast) return true
    slow = slow.next
    fast = fast.next.next

  }

  return false


};