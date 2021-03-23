Function.prototype.myBind = function(context, ...args) {

    var _this = this
    if (!_this instanceof Function) {
        throw new Error("这不是一个函数")
    }
    context.fn = _this
    var arugs = args
    return function() {
        return context.fn.apply(null, arugs)
    }
}

var obj = {

    name: '小狗'

}
var name = "小狗"

function fn(age, love) {
    console.log(this.name);
    console.log(age + "我喜欢什么的东西" + love)
}
// fn()

var f = fn.myBind(obj, 18, '小狗')

// console.log(f)
f()