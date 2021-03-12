/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * leetcode 
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    if (lists.length == 0) return null

    var res = lists[0]
    for (let j = 1; j < lists.length; j++) {
        // 两两合并
        res = mergeLists(res, lists[j])
    }

    return res

};

// 合并两个链表
function mergeLists(l1, l2) {
    let head = new ListNode()
    let pre = head
    while (l1 && l2) {
        if (l1.val > l2.val) {
            pre.next = l2
            l2 = l2.next
        } else {
            pre.next = l1
            l1 = l1.next
        }
        pre = pre.next
    }
    pre.next = l1 ? l1 : l2
    return head.next

}