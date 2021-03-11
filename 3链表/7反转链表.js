/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
console.log(head);
var reverseBetween = function(head, m, n) {




    if (!head || !head.next) return head // 链表长度为0/1
    if (m === n) return head // 无需反转

    const first = new ListNode(null)
    first.next = head

    let prev = first,
        cur = prev.next;

    // first.length = head.length + 1

    let i = 0
        // 超过n的部分不需要反转
    while (i < n - 1) {
        i++;

        // prev 为反转前的最后一个节点
        if (i === m - 1) {
            prev = cur
        }

        if (i < m) {
            cur = cur.next
        }

        // 在 [m, n) 这段区间里
        // 把 cur 的下一个节点从链表中删掉
        // 再插入到 prev 后面去
        if (i >= m) {
            // 当前的next
            let tmp = cur.next
                // 当前的next = next.next
            cur.next = tmp.next

            // 当前的next.next = prev.next
            tmp.next = prev.next
                // 插入到prev后面
            prev.next = tmp;

            // 这里相当于是 2，3，4 -> 3, 2, 4 -> 4, 3, 2
        }
    }
    return first.next














};

reverseBetween(head, 2, 4)