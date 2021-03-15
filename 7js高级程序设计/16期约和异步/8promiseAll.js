var p = Promise.all([Promise.resolve(1), Promise.resolve(2), 3])

p.then((arr) => {
    console.log(arr);
})