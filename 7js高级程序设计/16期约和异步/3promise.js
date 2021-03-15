var p2 = new Promise((resolve, reject) => resolve(3))



var p1 = Promise.reject('afdsjfksjdf')

p1.then((a) => {


    console.log(a);


}, (value) => {
    console.log(value);
})