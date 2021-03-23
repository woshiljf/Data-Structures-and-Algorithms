function myInstanceOf(obj1, obj2) {
    while (obj1.__proto__ !== null) {
        if (obj1 == obj2.prototype) {

            return true
        }
        obj1 = obj1.__proto__

    }
    return false


}

var fn = function() {}

var f1 = new fn()

var obj = {}

console.log(myInstanceOf(f1, obj));