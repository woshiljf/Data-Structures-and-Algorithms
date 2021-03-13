// 尾调用的条件javascript308页

// 没有使用尾调用优化的情况

function fib(n) {

    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)


}
// 执行不过来，超过最大的堆栈
// var f = fib(1000)
// console.log(f);

// 尾调用优化

function fib(n) {
    return fibTmp(0, 1, n)
}

function fibTmp(a, b, n) {

    if (n == 0) return a
    return fibTmp(b, a + b, n - 1)


}

var f1 = fib(1000)
console.log(f1);