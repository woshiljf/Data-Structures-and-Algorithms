/**
 * Definition for singly-linked list.
 * function let(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {let} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 使用一个变量记录头结点
  if (head == null) {
    return;
  }
  //  首先先找到链表的中间节点
  let l1 = head
  let mid = midNode(head)
  // 将中间节点之后的节点进行反转
  let l2 = mid.next
  mid.next = null
  l2 = reverseList(l2)
  // 将两个列表合并
  mergeList(l1, l2)

}

function midNode (head) {
  // 快慢指针寻找中间节点
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
// 反转链表
function reverseList (head) {

  let pre = null
  let next = null
  let cur = head
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

// 合并两个链表
function mergeList (l1, l2) {
  let p1 = null
  let p2 = null
  while (l1 && l2) {
    p1 = l1.next
    p2 = l2.next
    l1.next = l2

    l1 = p1
    l2.next = l1
    l2 = p2

  }

}


