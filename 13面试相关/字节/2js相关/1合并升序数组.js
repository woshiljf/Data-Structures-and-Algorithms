var a = [1, 2, 3, 5],
    b = [3, 4, 5, 8, 9]

function mergeArr(a, b) {

    var result = []
    var i = 0
    var j = 0
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i])
            i++
        } else {
            result.push(b[j])
            j++

        }
    }
    if (i == a.length) {
        result = result.concat(b.slice(j))
    }
    if (j == b.length) {
        result = result.concat(a.slice(i))
    }
    return result




}

console.log(mergeArr(a, b));