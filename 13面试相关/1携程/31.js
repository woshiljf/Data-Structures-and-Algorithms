setTimeout(() => {
    console.log(1);
}, 0);

new Promise(function(resolve) {
    setTimeout(() => {
        resolve(123);
    }, 0);
    console.log(2);
}).then(
    console.log(1111)
)

console.log(4);