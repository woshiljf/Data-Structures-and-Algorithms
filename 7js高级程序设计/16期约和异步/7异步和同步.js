var p = new Promise((resolve, reject) => {

    resolve('小凹沟')
    console.log('a');
    console.log('b');
    console.log('c');
    console.log('d');
    setTimeout(() => {
        console.log('f');
    }, 0);



})

p.then((value) => {
    console.log(value);
}, null)