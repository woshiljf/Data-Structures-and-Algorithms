var p = new Promise((resolve, reject) => {


    throw 1




}).then(null, eror => {
    console.log(eror)
})

var p2 = p.then(() => {
    Error("djflsk")
})

console.log(p2);