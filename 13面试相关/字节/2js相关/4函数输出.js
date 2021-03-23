var a = {
    b: 'b',
    c: function() {
        console.log(this.b)
    }
}
a.c()
var a = {
    b: 'b',
    c: () => {
        console.log(this.b)
    }
}
a.c()
var a = {
    b: 'b',
    c: function() {
        console.log(this.b)
    }
}
let d = a.c
d()