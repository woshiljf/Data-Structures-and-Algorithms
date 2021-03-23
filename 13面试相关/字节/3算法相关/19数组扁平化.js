var arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]
    // var newArr = arr.flat(1);
    // console.log(newArr)

// var newArr = arr.reduce((acc, val) => acc.concat(val), []);

var arr2 = arr.reduce((acc, val) => acc.concat(val), [])

//第一种：使用reduce+concat+递归
// var arr3 = arr => [].concat(...arr);
// console.log(arr3)
function flat(arr, d = 1) {
    return d > 0 ?
        arr.reduce(
            (acc, val) =>
            //使用reduce和concat加递归循环结束扁平化
            acc.concat(Array.isArray(val) ? flat(val, d - 1) : val), []
        ) :
        arr.slice()
}

// function myFlat(arr, d = 1) {

//     if (d > 0) {

//         return arr.reduce((acc, val) =>
//             acc.concat(Array.isArray(val) ? myFlat(val, d - 1) : val), []
//         );
//     }

//     return arr.slice();

// }

//

//第二种：使用堆栈stack;

function myFlat(arr) {
    var result = []
    var stack = [...arr]
    while (stack.length !== 0) {
        var val = stack.pop()
        if (Array.isArray(val)) {
            stack.push(...val)
        } else {
            result.unshift(val)
        }
    }
    return result
}

// console.log(JSON.stringify({ now: new Date() }));
var result = myFlat(arr)

console.log(result)

let a = Symbol('小狗')
console.log(a)