Function.prototype.uncurrying = function() {

    var self = this
    return function() {
        var obj = Array.prototype.shift.call(arguments)
        console.log(obj);
        return self.apply(obj, arguments)
    }
}

let push = Array.prototype.push.uncurrying()
console.log(push);
(function() {

    push(arguments, 4)
    console.log(arguments);

})(1, 2, 3)