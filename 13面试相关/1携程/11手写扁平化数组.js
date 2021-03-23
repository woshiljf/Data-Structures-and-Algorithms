function myFlat(arr, amount) {
    var result = []
    const help = function(arr, count) {
        if (count == amount) {
            result = result.concat(arr)
            return
        }
        for (let i = 0; i < arr.length; i++) {
            var item = arr[i]
            if (Array.isArray(item)) {
                help(item, count + 1)
            } else {
                result.push(item)
            }
        }
    }
    help(arr, 0)
    return result
}

var arr = [1, [2, [3, 4, [5, 6, [7, 8]]]]]

// var res = arr.toString().split(',')
var res = myFlat(arr, 5)

console.log(res);