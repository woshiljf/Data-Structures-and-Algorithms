// 今天好好复习，战斗到底

var a = handle(5, '10210')
console.log(a);

function handle(m, nums) {


    var res = panduan(nums)

    // 表示构不成回文字符串了
    if (res.count > 1) {
        var arr = nums.split('').map((item) => parseInt(item))
        var temp = removeKdigits(arr, 1)
        temp.unshift(temp[0])
        return temp.join('')

    } else {


        var f = res.x
        var t = res.y
        var arr = nums.split('').map((item) => parseInt(item))
        if (arr[f] > arr[t]) {
            arr[f] = arr[t]
        } else {
            arr[t] = arr[f]
        }
        return arr.join('')
    }

}

function panduan(nums) {

    var l = 0,
        r = nums.length - 1
    var count = 0
    var x, y
    while (l <= r) {

        if (nums[l] == nums[r]) {
            l++
            r--
        } else {

            count++
            if (count == 1) {
                x = l
                y = r
            }
            l++
            r--
        }

    }

    return count >= 1 ? { count, x, y } : true


}

function removeKdigits(num, k) {

    // 这道题用到的数据结构是栈,
    var stack = []
    var m = k
    stack.push(num[0])

    for (let i = 1; i < num.length; i++) {
        // 遍历获取字符串中的每一个元素
        var val = num[i]
            // 如果栈顶的元素大于val，则弹出栈顶元素，这是k--，表示以去掉一个元素
        while (val < stack[stack.length - 1] && stack.length >= 0 && k) {
            stack.pop()
            k--
        }
        stack.push(val)
    }
    return stack



};