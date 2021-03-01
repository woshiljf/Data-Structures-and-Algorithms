Function.prototype.before = function(beforeFn) {

    var _self = this
    return function() {

        beforeFn.apply(this, arguments)
        return _self.apply(this, arguments)


    }


}

var fn = function() {
    console.log(2);
}

fn = fn.before(function() {
    console.log(1);
})

fn()