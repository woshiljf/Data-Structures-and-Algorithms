function* generate1() {

    for (const item of[1, 2, 3]) {

        yield item

    }
}

function* generate2() {

    // for (const item of[1, 2, 3]) {

    //     yield item

    // }
    yield*[1, 2, 3]
}



var g1 = generate1()
for (const x of g1) {
    console.log(x);

}


var g2 = generate2()
for (const x of g2) {
    console.log(x);

}