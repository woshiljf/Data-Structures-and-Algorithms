async function foo(delay) {
    console.log('暂停' + delay);
    console.log(await sleep(delay));
}

function sleep(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('执行完毕')
        }, delay);
    })
}

foo(3000)