var p = new Promise((resolve, reject) => resolve('a'))
    // console.log(p);
var p1 = p.then(() => { throw 'baz' })

var p2 = p1.then((value) => console.log(value), (value) => {
    console.log(value + 'rejected');
})

// console.log(p2);