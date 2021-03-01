/**
 * @param {string} preorder
 * @return {boolean}
 * 
 * 解题思路
 * 初始化可用槽位：slots = 1。

根据逗号分隔前序序列化，将结果数组存储，随后遍历该数组：

空节点和非空节点都消耗一个槽位：slots = slot - 1.

如果当前的可用槽位是负数，那么这个前序序列化是非法的，返回 False。

非空节点（node != '#'）新增两个可用槽位：slots = slots + 2.

如果所有的槽位都消耗完，那么这个前序序列化就是合法的：返回 slots == 0。

 */
var isValidSerialization = function(preorder) {

    // 首先是前序遍历获取的字符串
    // 槽位的方式实现 ,空间复杂度为O(n)，时间复杂度O(n)
    // var slot = 1
    // var nodesArr = preorder.split(',')
    // for(let i = 0;i<nodesArr.length;i++) {

    //     slot--
    //     if(slot<0) return false
    //     if(nodesArr[i] !=='#') {
    //         slot +=2
    //     }



    // }
    // return slot ==0

    var slot = 1
    var n = preorder.length
    for (let i = 0; i < n; i++) {
        if (preorder[i] == ',') {

            slot--
            if (slot < 0) return false
            if (preorder[i - 1] !== '#') {

                slot += 2

            }
        }

    }

    slot = preorder[n - 1] == '#' ? slot - 1 : slot + 2
    return slot == 0


};