function U() {

    this.time = null;
    this.totalTime = 0;
    this.console = function(text) {
        if (this.time >= 0) {
            this.totalTime += this.time;
            setTimeout(() => {
                console.log(text)
            }, this.totalTime)
        } else {
            console.log(text)
        }
        return this
    }
    this.settimeout = function(time) {
        this.time = time || 0;
        return this
    }



}

var u = new U()

var f = u.console('dfjsdlfk').settimeout(3000).console('a')
console.log(f + 'adfjsfkjs');