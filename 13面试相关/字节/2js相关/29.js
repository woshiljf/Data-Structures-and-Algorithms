async function test() {

    var value1 = await fn1()
    var value2 = await fn2(value1)

    console.log(1);
    console.log(value2);



}

test()

function fn1() {


    return new Promise((resolve, reject) => {


        setTimeout(() => {
            resolve('成功了状态')
        }, 3000);


    })


}

function fn2(promise) {


    console.log(promise);
    // promise.then(value => {
    //     return value
    // })
    return promise



}