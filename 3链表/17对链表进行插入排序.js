/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * leetcode 147
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {

    if (!head) return
        //    首先创建一个空的domn节点，用于维护head，以及
    var domn = new ListNode(0)
    domn.next = head
        //  首先明白插入排序的思想
        // 始终维护一个有序的数组或者链表
        // 定义一个lastSorted，表示排完序的最后节点
    var lastSored = head
        // 定义一个待排序的点curr
    var curr = head.next

    while (curr) {

        // 表示已经完成排序的数组的最后元素小于当前比较的元素，也就是不用排序，更新lastSored就行
        if (lastSored.val <= curr.val) {
            lastSored = curr
        } else {

            // 表示需要进行插入排序了，这里使用从前往后的方式，开始遍历链表
            var pre = domn
                // 注意这里的细节，比较的是pre.next.val 也就是pre的下一个节点的值和比较的值相比
            while (pre.next.val < curr.val) {
                pre = pre.next
            }
            // 开始插入元素
            lastSored.next = curr.next
                // 当前比较的节点指向pre的下一个节点
            curr.next = pre.next
                // pre的下一个节点指向当前比较的节点
            pre.next = curr

        }

        curr = lastSored.next

    }

    return domn.next


};