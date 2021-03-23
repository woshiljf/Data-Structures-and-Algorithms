function a() {
    console.log('a');
    Promise.resolve().then(() => {
        console.log('e');
    })
}

function b() {
    console.log('b');

}

function c() {
    console.log('c');
}

function d() {
    setTimeout(a, 0);
    Promise.resolve().then(b)
    setTimeout(() => {
        c()
    }, 0);
    console.log('d');
}

d()