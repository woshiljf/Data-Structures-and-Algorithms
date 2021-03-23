var a = [1, 2, 3, 5],
    b = [3, 4, 5, 8, 9]

function mergeArr(a, b) {


    a = a.concat(b)
    a.sort((a, b) => a - b)
    return a
}

console.log(mergeArr(a, b));