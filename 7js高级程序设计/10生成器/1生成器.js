function* generateFn() {
    var b = yield fn()
    return b
}

function fn() {
    return new Promise(function(reslove, reject) {
        setTimeout(() => {
            reslove('世界到了')
        }, 3000);
    })
}





var generate = function*() {
    yield 'dahai'
    return

}

var g = generateFn()
var b = g.next('a')
console.log(b);
var c = g.next()
console.log(c);