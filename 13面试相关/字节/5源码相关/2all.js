/**
 *
 * @param {*} arr
 * 实现一个Promise.all
 */

Promise.myAll = function(arr) {
    var result = []
    for (const p of arr) {
        if (!p instanceof Promise) {
            p = Promise.resolve(p)
        }
    }
    // 知道这里为什么是返回一个 new Promise了吗，Promise是只要reject,马上返回，要等到所有的resolve状态完成才返回
    return new Promise(function(resolve, reject) {

        (function() {

            for (let p of arr) {

                p.then((value) => {
                    result.push(value)
                    if (result.length == arr.length) {
                        resolve(result)
                    }
                }, (error) => {
                    reject(error)
                })
            }
        })()

    })
}


var arr = [1, 2, 3, 4, 5]

try {
    var p = Promise.all(arr).then(value => {
        console.log(value);
    })
} catch (error) {
    console.log(error);
}