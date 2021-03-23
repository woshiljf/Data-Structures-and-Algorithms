var p = new Promise(function(resolve, reject) {

    reject(4)

    resolve(1)
    resolve(2)
    resolve(3)
    resolve(4)


})

p.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
})