/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function(l1, l2) {

    var head = null
    var sum = 0
    var carry = 0
    var curent = null
    // 直到遍历完所有的列表
    while(l1 || l2){

        // 直到遍历完所有的列表, 不够就补零。
        var n1 = l1 ? l1.val : 0
        var n2 = l2 ? l2.val : 0
        sum = n1+n2+carry

        if(head ==null){
            head = curent = new ListNode(sum%10)
        }else {

            curent.next = new ListNode(sum %10)
            curent = curent.next
            
        }

        carry = Math.floor(sum /10)

        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }
        if(carry > 0){
            curent.next = new ListNode(carry)
        }

        
        
        
        
    }

    
    return head

  
   
    
};