var obj1 = {
    a: 100
}

var obj2 = {
    a: 2
}


function fn() {
    console.log(this.a);
}

var f = fn.bind(obj1)

f.call(obj2)