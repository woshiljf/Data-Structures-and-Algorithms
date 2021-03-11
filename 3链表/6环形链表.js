/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * leetcode141
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    var cur = head
        // 给每个链表节点打赏标记flag，cur.flag==undefined表示没有访问过的节点
        // cur.flag==true 表示访问过了，说明有环，直接返回
    while (cur) {

        if (cur.flag == undefined) {
            cur.flag = true
        } else {
            return true
        }
        cur = cur.next
    }

    return false

};