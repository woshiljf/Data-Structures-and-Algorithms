/**
 * 1 有点，可以在子类的构造函数中，调用父类的构造函数，让子类的实例享有父类的属性
 * 缺点：不能继承父类的原型上的属性
 */

function SuperType() {
    this.property = true
}
SuperType.prototype.getProperty = function() {
    return this.property
}

function SubType() {
    SuperType.call(this)
    this.subProperty = false
}

SubType.prototype.getSubPerperty = function() {
    return this.subProperty
}

var s1 = new SubType()
s1.getSubPerperty()