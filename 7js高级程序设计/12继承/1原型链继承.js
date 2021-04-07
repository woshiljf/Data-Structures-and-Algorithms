/**
 * 问题:1 原型上引用值共享;2 子类的实例无法给父类的构造函数传递参数
 * 
 * 
 */

function SuperType() {
    this.property = true
}
SuperType.prototype.getProperty = function() {
    return this.property
}

function SubType() {
    this.subProperty = false
}
SubType.prototype = new SuperType()

SubType.prototype.getSubPerperty = function() {
    return this.subProperty
}

var s1 = new SubType()
s1.getSubPerperty()