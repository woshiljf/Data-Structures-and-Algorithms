console.log(1);
setTimeout(() => {
    console.log(2);
}, 0);

new Promise(function(resolve, reject) {

    console.log(5);
    setTimeout(() => {
        resolve(6)
    }, 0);
    console.log(7);


}).then(
    console.log(40)
)
console.log(4);