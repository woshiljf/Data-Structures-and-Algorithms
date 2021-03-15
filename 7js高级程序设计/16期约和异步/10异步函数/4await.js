async function foo() {
    console.log(1);
    console.log(await 2);
    console.log(3);
}

foo()
console.log(4);