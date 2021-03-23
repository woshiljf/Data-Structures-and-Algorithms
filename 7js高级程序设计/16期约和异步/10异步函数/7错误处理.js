async function fn() {

    await (() => { throw new Error("小狗") })()


}

var f = fn()
f.then(null, (err) => {
    console.log(err);
})