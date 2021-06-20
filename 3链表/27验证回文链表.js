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
 * leetcode 234
 */
var isPalindrome = function (head) {

  // 验证回文链表
  // 想法： 首先找打链表的中间节点，将中间节点之后的节点进行反转，然后使用节点头部与中间部分进行比较

  if (!head) return null
  // 寻找中间部分节点
  let midNode = findMid(head)
  let l2 = reverseList(midNode)

  let l1 = head
  console.log(l1)
  while (l1 && l2) {

    if (l1.val !== l2.val) return false
    l1 = l1.next
    l2 = l2.next
  }
  return true

};

function reverseList (head) {

  let pre = null
  let cur = head
  let next = null
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

function findMid (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}