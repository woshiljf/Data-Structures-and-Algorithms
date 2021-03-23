Promise.myAll = function(promises) {
    if (!Array.isArray(promises)) {
        throw new Error("必须是一个数组")
    }

    for (let i = 0; i < promises.length; i++) {
        promises[i] = Promise.resolve(promises[i])
    }
    var arr = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            arr[i].then(value => {
                arr.push(value)
                if (arr.length == promises.length) {
                    resolve(arr)
                }
            }, (error) => {
                reject(error)
            })
        }


    })
}

var arr = [1, 2, 3, 4, 5]

var p = Promise.myAll(arr)

p.then(value => {
    console.log(value);
})