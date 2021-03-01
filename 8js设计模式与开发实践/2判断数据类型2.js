var Type = {}

for (var i = 0, type; type = ['String', 'Array', 'Undefined', 'Null', 'object', 'Boolean', 'function'][i++];) {

    (function(type) {

        Type['is' + type] = function(obj) {
            console.log(Object.prototype.toString.call(obj));
            console.log('[object ' + type + ']');
            return Object.prototype.toString.call(obj) === '[object ' + type + ']'

        }


    })(type)

}

var f = Type.isUndefined(undefined)
console.log(f);