function curry(fn) {

    var len = fn.length
    var args = []

    function help() {
        var arr = Array.from(arguments)
        for (let i = 0; i < arr.length; i++) {

            args.push(arr[i])
        }
        if (args.length < len) {

            return help

        } else {
            return fn.call(this, ...args)
        }
    }

    return help
}

function add(a, b, c, d, e, f) {
    return a + b + c + d + e + f
}


var f = curry(add)
var res = f(1)(2)(3)(4)(5)
console.log(res);