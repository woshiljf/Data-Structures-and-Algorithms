function Fb() {
    this.subs = {}
}

Fb.prototype.subScribe = function(key, fn) {
    if (this.subs[key] == undefined) {
        this.subs[key] = []
        this.subs[key].push(fn)
    } else {
        this.subs[key].push(fn)
    }
}

Fb.prototype.emit = function(key, ...args) {

    var fns = this.subs[key]
    for (let i = 0; i < fns.length; i++) {
        fns[i].apply(null, args)
    }
}
Fb.prototype.delteSubscribe = function(key, fn) {
    var fns = this.subs[key]
    for (let i = 0; i < fns.length; i++) {

        if (fn == fns[i]) {
            fns.splice(i, 1)
        }
    }
}

var f1 = new Fb()

function demo1(name) {
    console.log("我是小狗1");
    console.log(name);
}

function demo2() {
    console.log("我是小狗2");
}

function demo3() {
    console.log("我是小狗3");
}

function demo4() {
    console.log("我是小狗4");
}

f1.subScribe('demo', demo1)
f1.subScribe('demo', demo2)
f1.subScribe('demo', demo3)
f1.subScribe('demo', demo4)

f1.delteSubscribe('demo', demo4)

f1.emit('demo', '小猪头')