function addTwo(x) {
    return x + 2
}

function addThree(x) {
    return x + 3
}

function addFive(x) {
    return x + 5
}

// 通用的任意多个函数合成为一个连续传值的期约连锁
function compose(...fs) {
    // 上一个契约的返回值，作为下一个契约开始的参数
    return (x) => fs.reduce((promise, fn) => promise.then(fn), Promise.resolve(x))
}

var addTen = compose(addTwo, addThree, addFive)
var res = addTen(10)
res.then(value => {
    console.log(value);
})