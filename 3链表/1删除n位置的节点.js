var cur = head
var k = 0,
    m = 0
while (cur) {
    k++
    cur = cur.next
}

if (k == 1) {
    head = null
    return head
}

var pre = head
m = k - n
if (m == 0) return head = head.next
k = 0
cur = head
while (cur) {
    k++
    pre = cur
    cur = cur.next

    if (k == m) {
        pre.next = cur.next
    }

}
return head