/**
 * 1寄生组合式继承的核心逻辑:通过使用一个函数，把父类构造函数的原型给子类
 * 2 在子类的构造函数中，调用父类的构造函数，绑定父类构造函数中的属性
 * 
 */

function Super(name, age) {

    this.name = name
    this.age = age
    this.getName = function() {
        console.log(this.name);
    }

}

function Sub(name, age, like) {

    Super.call(this, name, age)
    this.like = like


}
// 实现寄生组合的核心逻辑1：子类的原型继承
function inheritPrototype(sub, sup) {

    var protype = Object.create(sup.prototype)

    protype.construct = sub

    sub.prototype = protype
}

inheritPrototype(Sub, Super)
var s1 = new Sub('小狗', 18, '猪')
s1.getName()