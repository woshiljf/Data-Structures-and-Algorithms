/**
 * 通过使用函数，函数内部创建一个临时的构造函数，构造函数的原型指向传入的对象
 * 
 */

function createObject(obj) {

    function Fn() {}
    Fn.prototype = obj
    return new Fn()

}
// 当只有一个参数时，createObject的作用和Object.create(obj)相同
var person = {
    name: '小狗',
    age: 18
}

var b = Object.create(person)
console.log(b);