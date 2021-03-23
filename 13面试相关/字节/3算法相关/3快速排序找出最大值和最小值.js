function quickSortFindMaxAndMin(arr) {

    var maxnum = -Infinity,
        minnum = Infinity

    const help = function(arr) {
        if (arr.length < 2) {
            return arr
        }
        var midIndex = Math.floor(arr.length / 2)
        var midValue = arr[midIndex]
        var rightArr = [],
            leftArr = []
        arr.splice(midIndex, 1)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < midValue) {
                minnum = Math.min(minnum, arr[i], midValue)
                leftArr.push(arr[i])
            } else {
                maxnum = Math.max(maxnum, arr[i], midValue)
                rightArr.push(arr[i])
            }
        }
        // 关键在这里，使用递归的方式，排完左边，排右边
        return help(leftArr).concat(midValue, help(rightArr))
    }

    help(arr)


    return {
        maxnum,
        minnum
    }



}

console.log(quickSortFindMaxAndMin([10, 50, 6, 10, 20]));