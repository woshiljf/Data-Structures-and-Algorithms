/**
 * [['a', 'b'], ['n', 'm'], ['0', '1']] => ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]
 */

var arr = [
    ['a', 'b'],
    ['n', 'm'],
    ['0', '1']
]

function fn(arr) {

    var result = []

    var temp = arr[0]
    var tem1 = arr[1]
    var tem2 = arr[2]
    for (let i = 0; i < temp.length; i++) {
        var a = temp[i]
        for (let j = 0; j < tem1.length; j++) {
            var b = tem1[j]
            for (let m = 0; m < tem2.length; m++) {
                var c = tem2[m]
                result.push(a + '' + b + c)
            }
        }

    }

    return result





}

console.log(fn(arr));