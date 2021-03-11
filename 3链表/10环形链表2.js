/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * leetcode 142
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    var set = new Set()
    var i = 0
    while (cur) {
        // 给每个节点打上index索引标记

        if (set.has(cur)) {
            return cur
        }

        set.add(cur)
        cur = cur.next
    }

    return null

};