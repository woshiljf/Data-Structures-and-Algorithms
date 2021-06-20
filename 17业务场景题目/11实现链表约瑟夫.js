function ListNode (val) {

  this.val = val

  this.next = null

}

function fn1 (n, k) {

  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  let head = new ListNode(arr[0])
  let cur = head
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  cur.next = head
  cur = head
  // 实现约舍夫环形链表
  let pre = null
  let count = 1
  while (cur.next !== cur) {

    if (count == k) {
      pre.next = cur.next
      cur = cur.next
      count = 1
    }

    pre = cur
    cur = cur.next
    count++

  }

  return cur
}

let res = fn1(8, 3)

console.log(res);