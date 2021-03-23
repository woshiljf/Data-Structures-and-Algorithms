// 封装 Promise.all方法
Promise.all = function(values) {
    return new Promise((resolve, reject) => {
        let result = []; // 存放返回值
        let counter = 0; // 计数器，用于判断异步完成
        function processData(key, value) {
            result[key] = value;
            // 每成功一次计数器就会加1，直到所有都成功的时候会与values长度一致，则认定为都成功了，所以能避免异步问题
            if (++counter === values.length) {
                resolve(result);
            }
        }
        // 遍历 数组中的每一项，判断传入的是否是promise
        for (let i = 0; i < values.length; i++) {
            let current = values[i];
            // 如果是promise则调用获取data值，然后再处理data
            if (isPromise(current)) {
                current.then(data => {
                    processData(i, data);
                }, reject);
            } else {
                // 如果不是promise，传入的是普通值，则直接返回
                processData(i, current);
            }
        }
    });
}

var arr = [1, 2, 3, 4, 5]

try {
    var p = Promise.all(arr).then(value => {
        console.log(value);
    })
} catch (error) {
    console.log(error);
}