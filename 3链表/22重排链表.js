/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 这个题目的一开始的想法是，看能不能使用常数空间去解决，但是没有想到方法
  // 所以使用temp数组保存链表的各个节点
  // 空间复杂度O(n)，时间复杂度，O(n)
  let cur = head
  let temp = []
  while (cur) {
    temp.push(cur)
    cur = cur.next
  }
  cur = head
  var i = 0, j = temp.length - 1
  //接下来使用两个指针i和j，通过temp[i] 指向temp[j] ，然后记录temp[j]，使得temp[j]与下一次的节点相连接
  // 一开始这里是有点难想，怎么把节点都连接起来
  var m = temp[j]
  while (i <= j) {
    temp[i].next = temp[j]
    if (i !== 0) {
      m.next = temp[i]
    }
    m = temp[j]
    i++
    j--
  }
  m.next = null

};