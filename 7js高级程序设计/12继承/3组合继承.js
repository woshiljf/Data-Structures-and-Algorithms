/**
 * 组合继承:结合原型链继承和盗用构造函数继承
 * 
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
    SuperType.call(this)
    this.subProperty = false
}
SubType.prototype = new SuperType()
SubType.prototype.getSubPerperty = function() {
    return this.subProperty
}

var s1 = new SubType()
s1.getSubPerperty()