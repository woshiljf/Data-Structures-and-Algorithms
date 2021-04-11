function fn(arr, x) {

    if (arr.length < 2) return 0
    if (arr.length == 2) {
        if (arr[1] - arr[0] == x) return 0
        return 1
    }
    var count = 0
    var f1 = arr[0]
    for (let i = 1; i < arr.length; i++) {
        var f2 = arr[i]
        if (f2 - f1 !== x) {
            count++
            if (f2 - f1 > 0 && f2 - f1 > x) {
                arr[i] = x + f1
                f1 = arr[i]
            } else if (f2 - f1 > 0 && f2 - f1 < x) {
                arr[i] = x + f1
                f1 = arr[i]
            } else if (f2 - f1 <= 0) {
                arr[i] = x + f1
                f1 = arr[i]
            }

        } else {
            f1 = f2
        }
    }

    return count
}

var arr = [1, -1, 7, 10, 14],
    x = 3

var count = fn(arr, x)

console.log(count);