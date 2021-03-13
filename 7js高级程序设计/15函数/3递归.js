function fn(n) {

    if (n <= 1) return 1

    // return fn(n - 1) * n
    // 严格模式会报错
    return arguments.callee(n - 1) * n


}

// 使用命名函数表达式

const factorial = (function f(n) {

    if (n <= 1) return 1
    return f(n - 1) * n


})

var res = factorial(5)
console.log(res);