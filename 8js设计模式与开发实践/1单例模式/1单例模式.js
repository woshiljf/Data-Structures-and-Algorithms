var Singleton = function(name) {
    this.name = name
    this.instance = null
}

Singleton.prototype.getName = function() {
    alert(this.name)
}
Singleton.prototype.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}