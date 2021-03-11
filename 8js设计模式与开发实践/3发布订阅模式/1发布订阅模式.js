function Fabu() {

    //  订阅者
    this.subscirbelist = []

}

Fabu.prototype.listen = function(fn) {
    this.subscirbelist.push(fn)
}
Fabu.prototype.trgger = function() {
    for (let i = 0; i < this.subscirbelist.length; i++) {
        var f = this.subscirbelist[i]
        f.apply(this, arguments)
    }
}
var f1 = new Fabu()
f1.listen(function(name) {
    console.log('我是雄安巩固' + name)
})
f1.listen(function(name) {
    console.log('我是小狗' + name)
})

f1.trgger('你是傻逼吗')