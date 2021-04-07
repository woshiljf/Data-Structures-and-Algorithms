/**
 * 
 * @param {*} arr 
 * 时间复杂度：O(n2)
 * 空间复杂度：O(1)
 * 是否稳定：稳定
 */
function inertSort(arr) {
    var pre = 0
    var cur = 0

    for (let i = 1; i < arr.length; i++) {

        pre = i - 1
            // 待排序的值cur
        cur = arr[i]
            // 从已经排好序的数列中找到合适的cur的位置
        while (pre >= 0 && arr[pre] > cur) {

            arr[pre + 1] = arr[pre]
            pre--

        }

        arr[pre + 1] = cur



    }





}

var arr = [9, 1, 10, 5, 4, 3, 1, 6, 1]

inertSort(arr)
console.log(arr);