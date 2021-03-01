var isType = function(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) == '[object ' + type + ']'
    }
}

var isArray = isType('Undefined')
console.log(isArray(undefined));