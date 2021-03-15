async function foo() {

    console.log('我是小狗');

    // Promise.reject("小猫")
    throw 3


}
var f = foo()
f.catch(e => console.log(e))