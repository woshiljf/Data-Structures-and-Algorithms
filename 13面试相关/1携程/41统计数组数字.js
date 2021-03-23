function amountCount(arr) {

    var obj = {}
    var maxCount = 0
    var num = null
    for (let i = 0; i < arr.length; i++) {
        var key = arr[i]
        if (obj[key] == undefined) {
            obj[key] = 1
        } else {
            obj[key]++
                if (obj[key] > maxCount) {
                    maxCount = obj[key]
                    num = key
                }
        }
    }
    return {
        maxCount,
        num
    }
}

var arr = [1, 2, 3, 3, 4, 5, 4, 3, 3, 5]
console.log(amountCount(arr));