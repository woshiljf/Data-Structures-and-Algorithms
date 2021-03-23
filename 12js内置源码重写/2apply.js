Function.prototype.myApply = function(context, args) {

    var _this = this

    if (!this instanceof Function) {
        throw new Error("请传递一个函数")
    }

    context.fn = _this
    var result = context.fn(...args)
    delete context.fn
    return result

}

var obj = {

    name: '小狗'

}
var name = "小狗"

function fn(age, love) {
    console.log(this.name);
    console.log(age + "我喜欢什么的东西" + love)
}


fn.myApply(obj, [18, '小狗'])