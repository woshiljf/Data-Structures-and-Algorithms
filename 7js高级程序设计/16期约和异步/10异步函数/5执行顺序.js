async function foo() {

    console.log(2);
    console.log(await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(8);
            resolve(8)
        }, 0);
    }));
    console.log(9);
}
async function bar() {
    console.log(4);
    console.log(await 6);
    console.log(7);
}

console.log(1);
foo()
console.log(3);
bar()
console.log(5);