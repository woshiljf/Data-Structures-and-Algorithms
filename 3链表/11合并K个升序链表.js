/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * leetcode 23
 * 
 * 没有什么技巧，硬扯出来的
 * 
 * 
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    if (lists.length == 0) return null
    var len = lists.length
        // 判断边界条件
    var f = lists.every(item => item == null)
    if (f) return null
    var result = []
    for (let i = 0; i < len; i++) {
        // 获取单个链表的数值
        var temp = getList(lists[i])
        result = result.concat(temp)
    }
    // 数组排序
    result.sort((a, b) => a - b)
        // 构建链表
    var head = new ListNode(result[0])
    var cur = head
    for (let i = 1; i < result.length; i++) {
        cur.next = new ListNode(result[i])
        cur = cur.next
    }
    return head
};

function getList(head) {
    var result = []
    var cur = head
    while (cur) {
        result.push(cur.val)
        cur = cur.next
    }
    return result
}