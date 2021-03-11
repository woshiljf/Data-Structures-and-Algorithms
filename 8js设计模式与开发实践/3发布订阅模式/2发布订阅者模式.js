function Fabu() {

    this.subscirbelist = {}


}

Fabu.prototype.listen = function(key, fn) {

    if (!this.subscirbelist[key]) {
        this.subscirbelist[key] = []
    }
    this.subscirbelist[key].push(fn)

}

Fabu.prototype.trgger = function() {
    console.log(arguments);
    var key = Array.prototype.shift.call(arguments)

    fns = this.subscirbelist[key]
    if (!fns || fns.length == 0) return false
    for (let i = 0; i < fns.length; i++) {
        fns[i].apply(this, arguments)
    }
}

Fabu.prototype.removeEvent = function(key, fn) {
    var fns = this.subscirbelist[key]

    if (!fns || fns.length == 0) return false

    for (let i = 0; i < fns.length; i++) {

        var f = fns[i]
        if (f == fn) {
            this.subscirbelist[key].splice(i, 1)
            break
        }

    }

}

var f1 = new Fabu()
f1.listen('name', function(info) {

    console.log(info);


})

f1.trgger('name', 'love you')