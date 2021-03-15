async function foo() {

    var p = await new Promise((resolve, reject) => setTimeout(() => {
        console.log("我是小狗1");
        resolve('我是小狗')
    }, 3000))
    console.log('小孩子');
    return p


}

foo().then(value => {
    console.log(value);
})

console.log('小狗子的方式付款');