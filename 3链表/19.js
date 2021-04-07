/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * leetcode 382
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {

    this.data = []
    this.getLen = function(head) {
        var cur = head
        while (cur) {
            this.data.push(cur.val)
            cur = cur.next
        }
    }
    this.getLen(head)
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {


    var len = this.data.length
    var temp = Math.random() * len

    var n = Math.floor(temp)

    return this.data[n]


};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */